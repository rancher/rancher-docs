---
title: 概述
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/cluster-api/overview"/>
</head>

## 架构图

下面是 Rancher Turtles 的关键组件及其与 Rancher 和 Rancher Cluster Agent 的关系的架构图，了解这些组件对于深入了解 Rancher 如何利用 CAPI operator 进行集群管理至关重要。

![overview](/img/30000ft_view.png)

## 安全

[SLSA](https://slsa.dev/spec/v1.0/about) 是一套由行业共识制定的可逐步采用的供应链安全指南。SLSA 制定的规范对软件生产者和消费者都很有用：生产者可以遵循 SLSA 的指导方针，使他们的软件供应链更加安全，消费者可以使用 SLSA 来决定是否信任软件包。

Rancher Turtles 满足 [SLSA Level 3](https://slsa.dev/spec/v1.0/levels#build-l3) 对适当的构建平台、一致的构建过程和来源分布的要求。更多信息请参阅 [Rancher Turtles 安全](https://turtles.docs.rancher.com/security/slsa)文档。

## 先决条件

在 Rancher 环境中安装 Rancher Turtles 之前，你必须禁用 Rancher 的 `embedded-cluster-api` 功能。这还包括清理 Rancher 专用的 webhook，否则这些 webhook 将与 CAPI 的 webhook 冲突。

为了简化 Rancher 安装 Rancher Turtles 的设置，官方的 Rancher Turtles Helm chart 包含一个删除以下内容的 `pre-install` hook：

- 禁用 Rancher 中的 `embedded-cluster-api` 功能。
- 删除不再需要的 `mutating-webhook-configuration` 和 `validating-webhook-configuration` webhook。

这些 webhook 也可以通过 Rancher UI 删除：

1. 点击左上角 **☰ > 集群管理**。
1. 选择你的 local 集群。
1. 在左侧导航菜单，选择 **More Resources** > **Admission**。
1. 在下拉菜单中，选择资源页面的 `MutatingWebhookConfiguration` 和 `ValidatingWebhookConfiguration`。
1. 在相应的资源页面上，点击 `mutating-webhook-configuration` and `validating-webhook-configuration` 后面的 **⋮** 然后选择 **删除**。

还可以通过在 **Resource Search** 字段中输入 webhook 的名称来访问到具体的 webhook。

以下的 `kubectl` 命令可以手动删除必要的 webhook：

```console
kubectl delete mutatingwebhookconfiguration.admissionregistration.k8s.io mutating-webhook-configuration
```

```console
kubectl delete validatingwebhookconfigurations.admissionregistration.k8s.io validating-webhook-configuration
```

使用以下示例从控制台禁用 `embedded-cluster-api` 功能：

1. 创建一个 `feature.yaml` 文件，将 `embedded-cluster-api` 设置为 false：

```yaml title="feature.yaml"
apiVersion: management.cattle.io/v3
kind: Feature
metadata:
  name: embedded-cluster-api
spec:
  value: false
```

2. 使用 `kubectl` 将 `feature.yaml` 文件应用到集群：

```bash
kubectl apply -f feature.yaml
```

## 安装 Rancher Turtles Operator

你可以通过 Rancher UI 或使用 Helm 安装 Rancher Turtles operator。对于大多数环境推荐使用第一种方法。

:::caution

如果你的集群中已经安装了 Cluster API (CAPI) Operator，你必须使用[手动 Helm 安装方法](#通过-helm-安装)。

:::

### 通过 Rancher UI 安装

通过 Rancher UI 添加 Turtles 仓库，Rancher 可以处理 CAPI 扩展的安装和配置。

1. 点击 **☰**。在左侧导航栏**浏览集群**的菜单下，选择 **local**。
1. 在 **Cluster Dashboard** 的左侧导航菜单中，点击 **Apps > Repositories**。
1. 点击 **Create** 创建一个新的仓库。
1. 输入以下信息：
   - **Name**: turtles
   - **Index URL**: https://rancher.github.io/turtles
1. 等待新的仓库状态更新为 `Active`。
1. 在左侧导航菜单中，点击 **Apps > Charts**。
1. 在搜索过滤器中输入 "turtles" 来查找 Turtles chart。
1. 点击 **Rancher Turtles - the Cluster API Extension**。
1. 点击 **Install > Next > Install**.

此过程使用 Helm chart 的默认值，这些值适用于大部分的安装场景。如果你的配置需要覆盖其中一些默认值，你可以在安装期间通过 Rancher UI 指定这些值，也可以通过 [Helm 手动安装 Chart](#通过-helm-安装)。有关可用的 values 设置的详细信息，请参阅 Rancher Turtles 的 [Helm chart 参考指南](https://turtles.docs.rancher.com/reference-guides/rancher-turtles-chart/values)。

安装可能需要几分钟时间，安装完成后，你可以在集群中看到以下新部署：

- `rancher-turtles-system/rancher-turtles-controller-manager`
- `rancher-turtles-system/rancher-turtles-cluster-api-operator`
- `capi-system/capi-controller-manager`

#### Demo

这个 demo 演示了如何使用 Rancher UI 安装 Rancher Turtles、创建/导入一个 CAPI 集群，以及在集群上安装监控：

<iframe width="560" height="315" src="https://www.youtube.com/embed/lGsr7KfBjgU?si=ORkzuAJjcdXUXMxh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 通过 Helm 安装

通过 Helm 安装 Rancher Turtles 有两种方法，这取决于你是否将 CAPI operator 作为依赖项包含其中：

- [使用 CAPI Operator 作为依赖项安装 Rancher Turtles](#使用-cluster-api-capi-operator-作为-helm-依赖项安装-rancher-turtles)。
- [安装没有 CAPI Operator 的 Rancher Turtles](#不使用-cluster-api-capi-operator-作为-helm-依赖安装-rancher-turtles)。

安装 Rancher Turtles 需要 CAPI Operator。你可以选择自己处理此依赖项，还是让 Rancher Turtles Helm chart 替你管理它。[使用 CAPI Operator 作为依赖项安装 Rancher Turtles](#使用-cluster-api-capi-operator-作为-helm-依赖项安装-rancher-turtles) 更简单，但是你的最佳选择取决于你的具体配置。

CAPI Operator 允许使用声明式方法处理 CAPI provider 的生命周期，扩展了 `clusterctl` 的能力。如果你想了解更多相关内容，可以参考 [Cluster API Operator book](https://cluster-api-operator.sigs.k8s.io/)。

#### 使用 `Cluster API (CAPI) Operator` 作为 Helm 依赖项安装 Rancher Turtles

1. 添加包含 `rancher-turtles` chart 的 Helm 仓库作为安装的第一步：

```bash
helm repo add turtles https://rancher.github.io/turtles
helm repo update
```

2. 如前面所述，安装 Rancher Turtles 需要 [CAPI Operator](https://github.com/kubernetes-sigs/cluster-api-operator)。Helm chart 可以使用一组最少的参数自动安装：

```bash
helm install rancher-turtles turtles/rancher-turtles --version <version> \
    -n rancher-turtles-system \
    --dependency-update \
    --create-namespace --wait \
    --timeout 180s
```

3. 此操作可能需要几分钟时间，完成后，你可以查看下面列出的已安装的控制器：

- `rancher-turtles-controller`
- `capi-operator`

:::note

- 如果集群中已经有可用的 `cert-manager`，请在安装时通过以下参数将 Rancher Turtles 的此项依赖禁用掉，来阻止冲突：
  `--set cluster-api-operator.cert-manager.enabled=false`
- 有关 Rancher Turtles 的版本列表，请参阅 [Turtles 发布页面](https://github.com/rancher/turtles/releases)。

:::

这是最基本的推荐配置，用于管理在核心提供商的命名空间中创建包含所需 CAPI 功能标志（已启用 `CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` 和 `EXP_MACHINE_POOL` ）的 secret。要启用其他 CAPI 功能需要启用上述功能标志。

如果你需要覆盖默认的行为并使用现有 secret 或添加自定义环境变量，你可以将 secret 名称通过 Helm 参数传入。在这种情况下，你作为负责管理 secret 创建和内容的用户，需要启用的最少特性包括：`CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` 和 `EXP_MACHINE_POOL`。

```bash
helm install ...
    # Passing secret name and namespace for additional environment variables
    --set cluster-api-operator.cluster-api.configSecret.name=<secret-name>
```

以下是一个用户管理 secret `cluster-api-operator.cluster-api.configSecret.name=variables` 的示例，其中设置了 `CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` 和 `EXP_MACHINE_POOL` 功能以及一个额外的自定义变量：

```yaml title="secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: variables
  namespace: rancher-turtles-system
type: Opaque
stringData:
  CLUSTER_TOPOLOGY: "true"
  EXP_CLUSTER_RESOURCE_SET: "true"
  EXP_MACHINE_POOL: "true"
  CUSTOM_ENV_VAR: "false"
```

:::info

有关 chart 支持的 values 及其用法的详细信息，请参阅 [Helm chart 选项](https://turtles.docs.rancher.com/reference-guides/rancher-turtles-chart/values)

:::

#### 不使用 `Cluster API (CAPI) Operator` 作为 Helm 依赖安装 Rancher Turtles

:::note

请记住，如果使用此安装选项，你必须自行管理 CAPI Operator 的安装。你可以参照 Rancher Turtles 文档中的 [CAPI Operator 指南](https://turtles.docs.rancher.com/tasks/capi-operator/intro)

:::

1. 添加包含 `rancher-turtles` chart 的 Helm 仓库作为安装的第一步：

```bash
helm repo add turtles https://rancher.github.io/turtles
helm repo update
```

2. 将 chart 安装到 `rancher-turtles-system` 命名空间：

```bash
helm install rancher-turtles turtles/rancher-turtles --version <version>
    -n rancher-turtles-system
    --set cluster-api-operator.enabled=false
    --set cluster-api-operator.cluster-api.enabled=false
    --create-namespace --wait
    --dependency-update
```

前面的命令告诉 Helm 忽略将 `cluster-api-operator` 作为依赖项安装。

3. 此操作可能需要几分钟，完成后你可以查看下面列出的已安装的控制器：

- `rancher-turtles-controller`

## 卸载 Rancher Turtles

:::caution

在 Rancher 环境中安装 Rancher Turtles 时，Rancher Turtles 默认会启用 CAPI Operator 清理。这包括清理 CAPI Operator 特定的 webhook 和 deployments，否则会导致 Rancher 配置出现问题。

为了简化 Rancher Turtles 卸载（通过 Rancher 或 Helm 命令），官方的 Rancher Turtles Helm chart 包含了一个删除以下内容的 `post-delete` hook：

- 删除不再需要的 `mutating-webhook-configuration` 和 `validating-webhook-configuration` webhook。
- 删除不再需要的 CAPI `deployments`。

:::

卸载 Rancher Turtles：

```bash
helm uninstall -n rancher-turtles-system rancher-turtles --cascade foreground --wait
```

这可能需要几分钟才能完成。

:::note

请记住，如果你在安装时使用了不同的名称或不同的命名空间，你需要针对你的特定配置自定义卸载命令。

:::

卸载 Rancher Turtles 后， Rancher 的 `embedded-cluster-api` 功能必须重新启用。

1. 创建一个 `feature.yaml` 文件，将 `embedded-cluster-api` 设置为 true：

```yaml title="feature.yaml"
apiVersion: management.cattle.io/v3
kind: Feature
metadata:
  name: embedded-cluster-api
spec:
  value: true
```

2. 使用 `kubectl` 将 `feature.yaml` 文件应用到集群：

```bash
kubectl apply -f feature.yaml
```
