---
title: Monitoring 的工作原理
---

## 1. 架构概述

_**下文描述了数据如何流经 Monitoring V2 应用程序：**_

### Prometheus Operator

Prometheus Operator 观察正在创建的 ServiceMonitors、PodMonitors 和 PrometheusRules。在创建 Prometheus 配置资源时，Prometheus Operator 会调用 Prometheus API 来同步新配置。如本节末尾的图所示，Prometheus Operator 充当 Prometheus 和 Kubernetes 之间的中介，调用 Prometheus API 来同步 Prometheus 与 Kubernetes 中的监控相关资源。

### ServiceMonitor 和 PodMonitor

ServiceMonitor 和 PodMonitor 以声明方式指定需要监控的目标，例如 Service 和 Pod。

- 目标是根据配置的 Prometheus 抓取间隔定期抓取的，而抓取的指标存储在 Prometheus 时间序列数据库（Time Series Database，TSDB）中。

- 为了执行抓取，你需要使用标签选择器来定义 ServiceMonitor 和 PodMonitor，这些标签选择器用于确定要抓取的 Service 或 Pod，并能确定端点（端点能确定抓取如何在给定目标上进行，例如在 TCP 10252 中抓取指标，通过 IP 地址 x.x.x.x 进行代理）。

- 开箱即用地，Monitoring V2 附带了一些预配置的 Exporter，这些 Exporter 根据其所在的 Kubernetes 集群的类型进行部署。有关详细信息，请参阅[抓取和公开指标](#5-抓取和公开指标)。

### PushProx 的工作原理

- 某些内部 Kubernetes 组件是通过部署在 Monitoring V2 中名为 **PushProx** 的代理来抓取的。通过 PushProx 向 Prometheus 公开指标的 Kubernetes 组件分别是 `kube-controller-manager`、`kube-scheduler`, `etcd` 和 `kube-proxy`。

- 对于每个 PushProx Exporter，我们在所有目标节点上都部署一个 PushProx 客户端。例如，将 PushProx 客户端部署到 kube-controller-manager 的所有 controlplane 节点、kube-etcd 的所有 etcd 节点上，和 kubelet 的所有节点上。

- 我们为每个 Exporter 部署了一个 PushProx 代理。导出指标的流程如下：

1. PushProx 客户端与 PushProx 代理建立出站连接。
1. 然后，客户端会轮询代理以获取进入代理的抓取请求。
1. 当代理收到来自 Prometheus 的抓取请求时，客户端会将其视为轮询的结果。
1. 客户端抓取内部组件。
1. 内部组件通过将指标推回代理来响应。


<figcaption><br/>使用 PushProx 导出指标的过程：<br/></figcaption>

![使用 PushProx 导出指标的过程](/img/pushprox-process.svg)

### PrometheusRules

PrometheusRule 用于定义指标或时间序列数据库查询触发告警的规则。规则是按时间间隔评估的。

- **记录规则**根据已收集的现有序列创建一个新的时间序列。它们常用于预先计算的复杂查询。
- **告警规则**运行特定查询，如果查询评估为非零值，则从 Prometheus 触发告警。

### 告警路由

一旦 Prometheus 确定需要触发告警，就会将告警转发到 **Alertmanager**。

- 告警包含来自 PromQL 查询本身的标签，以及指定初始 PrometheusRule 时设置的其他标签和注释。

- 在接收任何告警之前，Alertmanager 会用配置中指定的**路由 (Route)** 和**接收器 (Receiver)** 来形成一个路由树，所有传入的告警都会在该路由树上进行评估。路由树的每个节点都可以根据附加到 Prometheus 告警的标签来指定要进行的其他分组、标签和过滤。路由树上的节点（通常是叶节点）还可以指定到达的告警需要发送到什么接收器，例如 Slack、PagerDuty、SMS 等。请注意，Alertmanager 首先向 **alertingDriver** 发送告警，然后 alertingDriver 再将告警发送或转发到正确的目标位置。

- 路由和接收器也通过 Alertmanager Secret 存储在 Kubernetes API 中。当 Secret 更新时，Alertmanager 也会自动更新。请注意，路由仅通过标签发生（而不是通过注释等）。

## 2. Prometheus 的工作原理

### 存储时间序列数据

收集 Exporter 的指标后，Prometheus 将时间序列存储在本地磁盘时间序列数据库中。Prometheus 可以选择与远程系统集成，但 `rancher-monitoring` 使用本地存储来存储时间序列数据库。

存储后，用户可以使用 PromQL（Prometheus 的查询语言）查询此 TSDB。

PromQL 查询可以通过以下两种方式进行可视化：

1. 通过在 Prometheus 的 Graph UI 中提供查询，UI 会显示数据的简单图形视图。
1. 通过创建包含 PromQL 查询和其他格式化指令的 Grafana 仪表板，这些指令用于标记轴、添加单位、更改颜色、使用替代可视化等。

### 为 Prometheus 定义规则

规则定义了 Prometheus 需要在常规 `evaluationInterval` 上执行的查询，从而执行某些操作，例如触发告警（告警规则）或根据 TSDB 中存在的其他查询（记录规则）预先计算查询。这些规则编码在 PrometheusRules 自定义资源中。创建或更新 PrometheusRule 自定义资源后，Prometheus Operator 会观察变化，并调用 Prometheus API 来定期同步 Prometheus 当前正在评估的规则集。

PrometheusRule 支持定义一个或多个 RuleGroup。每个 RuleGroup 由一组 Rule 对象组成，每个 Rule 对象均能表示告警或记录规则，并具有以下字段：

- 新告警或记录的名称
- 新告警或记录的 PromQL 表达式
- 用于标记告警或记录的标签（例如集群名称或严重性）
- 对需要在告警通知上显示的其他重要信息进行编码的注释（例如摘要、描述、消息、Runbook URL 等）。记录规则不需要此字段。

在评估[规则](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api-reference/api.md#rule)时，Prometheus 将执行配置的 PromQL 查询，添加其他标签（或注释 - 仅用于告警规则），并为规则执行所需的操作。例如，如果某个告警规则将 `team:front-end` 作为标签添加到配置的 PromQL 查询，该标签会尾附到触发的告警，这将允许 Alertmanager 将告警转发到正确的接收器。

### 告警和记录规则

Prometheus 不会维护告警是否处于 active 状态。它在每个评估间隔内重复触发告警，并根据 Alertmanager 对告警进行分组和过滤成有意义的通知。

`evaluation_interval` 常量定义了 Prometheus 根据时间序列数据库评估告警规则的频率。与 `scrape_interval` 类似，`evaluation_interval` 的默认值也是一分钟。

规则包含在一组规则文件中。规则文件包括告警规则和记录规则，但只有告警规则才会在评估后触发告警。

对于记录规则，Prometheus 会运行查询，然后将其存储为时间序列。如果需要存储非常昂贵或耗时的查询的结果，这种合成的时间序列则非常有用，因此你可以在后续更快地进行查询它们。

告警规则是更常用的。每当告警规则评估为正数时，Prometheus 都会触发告警。

在触发告警之前，Rule 文件会根据实际用例将标签和注释添加到告警中：

- 标签用于标识告警的信息，并可能影响告警的路由。例如，如果在发送有关某个容器的告警时，你可以使用容器 ID 作为标签。

- 注释用于表示不影响告警路由位置的信息，例如 Runbook 或错误消息。

## 3. Alertmanager 的工作原理

Alertmanager 处理由 Prometheus server 等客户端应用发送的告警。它负责以下任务：

- 删除重复数据，分组，并将告警路由到正确的接收器集成（例如电子邮件、PagerDuty 或 OpsGenie）

- 静音和抑制告警

- 跟踪随时间触发的告警

- 发送告警的状态，即告警是否正在触发，或者是否已经解决

### 由 alertingDrivers 转发的告警

安装 alertingDriver 后会根据 alertingDriver 的配置创建一个 `Service`，可用作 Teams 或 SMS 的接收器 URL。接收器中的 URL 会指向 alertingDrivers。因此 Alertmanager 首先向 alertingDriver 发送告警，然后 alertingDriver 将告警转发或发送到正确的目的位置。

### 将告警路由到接收器

Alertmanager 负责协调告警的发送位置。它允许你根据标签对告警进行分组，并根据标签匹配情况来触发告警。一个最顶层路由会接受所有告警。然后，Alertmanager 会根据告警是否匹配下一个路由的条件，继续将告警路由到接收器。

虽然 Rancher UI 表单只允许编辑两层深的路由树，但你可以通过编辑 Alertmanager Secret 来配置更深的嵌套路由结构。

### 配置多个接收器

你可以编辑 Rancher UI 中的表单来设置一个接收器资源，其中包含 Alertmanager 将告警发送到你的通知系统所需的所有信息。

通过在 Alertmanager 或接收器配置中编辑自定义 YAML，你还可以将告警发送到多个通知系统。有关详细信息，请参阅[接收器配置](../../reference-guides/monitoring-v2-configuration/receivers.md#配置多个接收器)。

## 4. Monitoring V2 特定组件

Prometheus Operator 引入了一组[自定义资源定义](https://github.com/prometheus-operator/prometheus-operator#customresourcedefinitions)，允许用户通过在集群上创建和修改这些自定义资源来部署和管理 Prometheus 和 Alertmanager 实例。

Prometheus Operator 会根据 Rancher UI 中编辑的资源和配置选项的实时状态来自动更新 Prometheus 配置。

### 默认部署的资源

默认情况下，由 [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus) 项目策划的一组资源会作为 Rancher Monitoring 安装的一部分部署到你的集群上，用来设置基本的 Monitoring/Alerting 堆栈。

你可以在 [`rancher-monitoring`](https://github.com/rancher/charts/tree/main/charts/rancher-monitoring) Helm Chart 中找到部署到你的集群以支持此解决方案的资源，该 chart 密切跟踪由 Prometheus 社区维护的上游 [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) Helm Chart，并在 [CHANGELOG.md](https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/CHANGELOG.md) 中跟踪变更。

### 默认 Exporter

Monitoring V2 部署了三个默认 Exporter，它们为 Prometheus 提供额外的指标来存储：

1. `node-exporter`：公开 Linux 主机的硬件和操作系统指标。有关 `node-exporter` 的更多信息，请参阅[上游文档](https://prometheus.io/docs/guides/node-exporter/)。

1. `windows-exporter`：公开 Windows 主机的硬件和操作系统指标（仅部署在 Windows 集群上）。有关 `windows-exporter` 的更多信息，请参阅[上游文档](https://github.com/prometheus-community/windows_exporter)。

1. `kube-state-metrics`：公开跟踪 Kubernetes API 中包含的资源状态的其他指标（例如，pod、工作负载等）。有关 `kube-state-metrics` 的更多信息，请参阅[上游文档](https://github.com/kubernetes/kube-state-metrics/tree/master/docs)。

ServiceMonitor 和 PodMonitor 将按照[此定义](#定义要抓取的指标)来抓取这些 Exporter。Prometheus 会存储这些指标，你可以通过 Prometheus 的 UI 或 Grafana 查询结果。

有关记录规则、告警规则和 Alertmanager 的更多信息，请参阅[架构](#1-架构概述)。

### Rancher UI 中公开的组件

安装 monitoring 应用后，你将能够在 Rancher UI 中编辑以下组件：

| 组件 | 组件类型 | 编辑的目的和常见用例 |
|--------------|------------------------|---------------------------|
| ServiceMonitor | 自定义资源 | 设置 Kubernetes Service 来获取其自定义指标。自动更新 Prometheus 自定义资源中的抓取配置。 |
| PodMonitor | 自定义资源 | 设置 Kubernetes Pod 来获取其自定义指标。自动更新 Prometheus 自定义资源中的抓取配置。 |
| 接收器 | 配置块（Alertmanager 的一部分） | 修改将告警发送到什么位置的信息（例如，Slack、PagerDuty 等）以及发送告警的其他必要信息（例如，TL​​S 证书、代理 URL 等）。自动更新 Alertmanager 自定义资源。 |
| Route | 配置块（Alertmanager 的一部分） | 修改用于根据标签过滤、标记和分组告警的路由树，并将告警发送到所需的接收器。自动更新 Alertmanager 自定义资源。 |
| PrometheusRule | 自定义资源 | 定义其他查询，这些查询能触发告警或定义 Prometheus TSDB 中现有的物化视图。自动更新 Prometheus 自定义资源。 |

### PushProx

PushProx 允许 Prometheus 跨网络边界抓取指标，这样，用户就不用必须为 Kubernetes 集群中每个节点上的内部 Kubernetes 组件公开指标端口。

由于 Kubernetes 组件的指标通常暴露在集群中节点的主机网络上，PushProx 部署了一个客户端 DaemonSet，这些客户端位于每个节点的主机网络上，并与位于 Kubernetes API 上的单个代理建立出站连接。然后，你可以让 Prometheus 通过代理将抓取请求发送到每个客户端，这样，Prometheus 能从内部 Kubernetes 组件抓取指标，而不需要打开任何入站节点端口。

有关更多信息，请参阅[使用 PushProx 抓取指标](#使用-pushprox-抓取指标)。

## 5. 抓取和公开指标

### 定义要抓取的指标

ServiceMonitor 和 PodMonitor 定义了 Prometheus 要抓取的目标。[Prometheus 自定义资源](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/getting-started/design.md#prometheus)告诉 Prometheus 应该使用哪个 ServiceMonitor 或 PodMonitor 来确定从哪里抓取指标。

Prometheus Operator 观察 ServiceMonitor 和 PodMonitor。当它观察到二者被创建或更新时，它会调用 Prometheus API 来更新 Prometheus 自定义资源中的抓取配置，并使该配置与 ServiceMonitor 或 PodMonitor 中的抓取配置保持同步。此抓取配置告诉 Prometheus 从哪些端点抓取指标，以及如何标记这些端点的指标。

Prometheus 会根据 `scrape_interval`（默认为一分钟）来抓取定义在抓取配置中的所有指标。

抓取配置可以作为 Prometheus 自定义资源的一部分被查看，该资源在 Rancher UI 中公开。

### Prometheus Operator 如何设置指标抓取

Prometheus Deployment 或 StatefulSet 能抓取指标，而 Prometheus 的配置由 Prometheus 自定义资源控制。Prometheus Operator 会观察 Prometheus 和 Alertmanager 资源，当它们被创建时，Prometheus Operator 使用用户定义的配置，为 Prometheus 或 Alertmanager 创建一个 Deployment 或 StatefulSet。

如果 Prometheus Operator 观察到正在创建的 ServiceMonitor、PodMonitor 和 PrometheusRule，它就知道需要在 Prometheus 中更新抓取配置。首先，会通过更新 Prometheus 的 Deployment 或 StatefulSet 卷中的配置和规则文件来更新 Prometheus。然后，再调用 Prometheus API 来同步新配置，从而将 Prometheus Deployment 或 StatefulSet 修改到位。

### 如何公开 Kubernetes 组件指标

Prometheus 从称为 [exporter](https://prometheus.io/docs/instrumenting/exporters/) 的 deployment 中抓取指标，exporter 以 Prometheus 可以抓取的格式导出时间序列数据。在 Prometheus 中，时间序列由属于相同指标和相同标记维度集的时间戳值流组成。

### 使用 PushProx 抓取指标

某些内部 Kubernetes 组件是通过部署在 Monitoring V2 中名为 PushProx 的代理来抓取的。有关 PushProx 的详细信息，请参阅[此处](#pushprox-的工作原理)和上面的[架构](#1-架构概述)部分。

### 抓取指标

Prometheus 直接抓取以下 Kubernetes 组件：

- kubelet\*
- ingress-nginx\*\*
- coreDns/kubeDns
- kube-api-server

\* 你可以选择通过 `hardenedKubelet.enabled` 来使用 PushProx，但这不是默认设置。

\*\* RKE 和 RKE2 集群默认部署 ingress-nginx，并将其视为内部 Kubernetes 组件。


### 基于 Kubernetes 发行版抓取指标

指标的抓取方式根据 Kubernetes 发行版而有所不同。有关术语的帮助，请参阅[此处](#名词解释)。详情见下表：

<figcaption>指标如何暴露给 Prometheus</figcaption>

| Kubernetes 组件 | RKE | RKE2 | KubeADM | K3s |
|-----|-----|-----|-----|-----|
| kube-controller-manager | rkeControllerManager.enabled | rke2ControllerManager.enabled | kubeAdmControllerManager.enabled | k3sServer.enabled |
| kube-scheduler | rkeScheduler.enabled | rke2Scheduler.enabled | kubeAdmScheduler.enabled | k3sServer.enabled |
| etcd | rkeEtcd.enabled | rke2Etcd.enabled | kubeAdmEtcd.enabled | 不可用 |
| kube-proxy | rkeProxy.enabled | rke2Proxy.enabled | kubeAdmProxy.enabled | k3sServer.enabled |
| kubelet | 收集 kubelet 直接公开的指标 | 收集 kubelet 直接公开的指标 | 收集 kubelet 直接公开的指标 | 收集 kubelet 直接公开的指标 |
| ingress-nginx* | 收集 kubelet 直接公开的指标，由 rkeIngressNginx.enabled 公开 | 收集 kubelet 直接公开的指标，由 rke2IngressNginx.enabled 公开 | 不可用 | 不可用 |
| coreDns/kubeDns | 收集 coreDns/kubeDns 直接公开的指标 | 收集 coreDns/kubeDns 直接公开的指标 | 收集 coreDns/kubeDns 直接公开的指标 | 收集 coreDns/kubeDns 直接公开的指标 |
| kube-api-server | 收集 kube-api-server 直接公开的指标 | 收集 kube-api-server 直接公开的指标 | 收集 kube-appi-server 直接公开的指标 | 收集 kube-api-server 直接公开的指标 |

\* RKE 和 RKE2 集群默认部署 ingress-nginx，并将其视为内部 Kubernetes 组件。

### 名词解释

- **kube-scheduler**：内部 Kubernetes 组件，该组件使用 pod 规范中的信息来决定在哪个节点上运行 pod。
- **kube-controller-manager**：负责节点管理（检测节点是否失败）、pod 复制，以及端点创建的内部 Kubernetes 组件。
- **etcd**：Kubernetes 内部组件，它是 Kubernetes 用于持久存储所有集群信息的分布式键/值存储。
- **kube-proxy**：内部 Kubernetes 组件，用于监控 API server 的 pod/service 更改以保持网络最新状态。
- **kubelet**：内部 Kubernetes 组件，用于为 pod 监视节点上的 API server 并确保这些 pod 能运行。
- **ingress-nginx**：用于 Kubernetes 的 Ingress controller，使用 NGINX 作为反向代理和负载均衡器。
- **coreDns/kubeDns**：负责 DNS 的内部 Kubernetes 组件。
- **kube-api-server**：负责为其他 master 组件公开 API 的主要内部 Kubernetes 组件。
