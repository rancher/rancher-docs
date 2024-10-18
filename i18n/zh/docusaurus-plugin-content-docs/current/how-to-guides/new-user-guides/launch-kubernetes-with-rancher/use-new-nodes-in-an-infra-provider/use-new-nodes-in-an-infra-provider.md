---
title: 在云厂商的新节点上启动 Kubernetes
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider"/>
</head>

在 Rancher 中使用节点模板来创建 RKE 或 RKE2 集群时，每个生成的节点池都会显示在新的**主机池**选项卡中。你可以通过执行以下操作来查看主机池：

1. 点击**☰ > 集群管理**。
1. 单击 RKE 或 RKE2 集群的名称。

## RKE 集群

使用 Rancher，你可以基于[节点模板](use-new-nodes-in-an-infra-provider.md#节点模板)创建节点池。此节点模板定义了要用于在基础设施提供商或云厂商中启动节点的参数。

在托管在云厂商的节点池上安装 Kubernetes 的一个好处是，如果一个节点与集群断开连接，Rancher 可以自动创建另一个节点并将其加入集群，从而确保节点池的数量符合要求。

可用于创建节点模板的云提供商是由[主机驱动](use-new-nodes-in-an-infra-provider.md#主机驱动)决定的。

### 节点模板

节点模板保存了用于在特定云提供商中配置节点时要使用的参数。这些节点可以从 UI 启动。Rancher 使用 [Docker Machine](https://github.com/docker/docs/blob/vnext-engine/machine/overview.md) 来配置这些节点。可用于创建节点模板的云提供商取决于 Rancher 中状态是 Active 的主机驱动。

在 Rancher 中创建节点模板后，模板会被保存，以便你可以再次使用该模板来创建节点池。节点模板绑定到你的登录名。添加模板后，你可以将其从用户配置文件中删除。

#### 节点标签

你可以为每个节点模板添加[标签](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)，这样，使用节点模板创建的节点都会自动带有这些标签。

无效标签会阻止升级，或阻止 Rancher 启动。有关标签语法的详细信息，请参阅 [Kubernetes 文档](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。

#### 节点污点

你可以为每个节点模板添加[污点](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)，这样，使用节点模板创建的节点都会自动带有这些污点。

由于污点可以同时添加到节点模板和节点池中，因此如果添加了相同键的污点效果没有冲突，则所有污点都将添加到节点中。如果存在具有相同键但不同效果的污点，则节点池中的污点将覆盖节点模板中的污点。

#### 节点模板的管理员控制

管理员可以控制所有节点模板。现在，管理员可以维护 Rancher 中的所有节点模板。当节点模板所有者不再使用 Rancher 时，他们创建的节点模板可以由管理员管理，以便继续更新和维护集群。

要访问所有节点模板，管理员需要执行以下操作：

1. 点击 **☰ > 集群管理**。
1. 单击 **RKE1 配置 > 节点模板**。

**结果**：列出所有节点模板。你可以通过单击 **⋮** 来编辑或克隆模板。

### 节点池

使用 Rancher，你可以基于[节点模板](#节点模板)创建节点池。

节点模板定义了节点的配置，例如要使用的操作系统、CPU 数量和内存量。

使用节点池的好处是，如果一个节点被销毁或删除，你可以增加 Active 节点的数量来补偿丢失的节点。节点池可以帮助你确保节点池的计数符合要求。

每个节点池必须分配一个或多个节点角色。

每个节点角色（即 etcd、controlplane 和 worker）都应分配给不同的节点池。虽然你可以将多个节点角色分配给同一个节点池，但不要在生产集群中执行此操作。

推荐的设置：

- 具有 etcd 角色且计数为 3 的节点池
- 具有 controlplane 角色且计数至少为 2 的节点池
- 具有 worker 角色且计数至少为 2 的节点池

**离线环境中的 RKE1 下游集群节点**：

默认情况下，在配置 RKE1 下游集群节点时（例如在 vSphere 中），Rancher 会尝试运行 Docker 安装脚本。但是，Rancher Docker 安装脚本在离线环境中会运行失败。要解决此问题，如果 Docker 已预安装到 VM 镜像上，你可以选择在创建节点模板时跳过安装 Docker。为此，你可以在 Rancher UI **引擎选项**下的 `Docker 安装 URL` 下拉列表中选择 **无**。

<figcaption>**引擎选项下拉列表**</figcaption>

![引擎选项下拉列表](/img/node-template-engine-options-rke1.png)

#### 节点池污点

如果你没有在节点模板上定义[污点](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)，则可以为每个节点池添加污点。将污点添加到节点池的好处是你可以更改节点模板，而不需要先确保污点存在于新模板中。

每个污点都将自动添加到节点池中已创建的节点。因此，如果你在已有节点的节点池中添加污点，污点不会应用到已有的节点，但是添加到该节点池中的新节点都将获得该污点。

如果污点同时添加到节点模板和节点池中，且添加了相同键的污点效果没有冲突，则所有污点都将添加到节点中。如果存在具有相同键但不同效果的污点，则节点池中的污点将覆盖节点模板中的污点。

#### 节点自动替换

Rancher 可以自动替换节点池中无法访问的节点。如果节点在指定的时间中处于 Inactive 状态，Rancher 将使用该节点池的节点模板来重新创建节点。

:::caution

自我修复节点池的功能帮助你替换<b>无状态</b>应用的 worker 节点。不建议在 master 节点或连接了持久卷的节点的节点池上启用节点自动替换，因为虚拟机会被临时处理。节点池中的节点与集群断开连接时，其持久卷将被破坏，从而导致有状态应用的数据丢失。

:::

节点自动替换基于 Kubernetes 节点控制器工作。节点控制器定期检查所有节点的状态（可通过 `kube-controller` 的 `--node-monitor-period` 标志配置）。一个节点不可访问时，节点控制器将污染该节点。发生这种情况时，Rancher 将开始其删除倒计时。你可以配置 Rancher 等待删除节点的时间。如果在删除倒计时结束前污点没有被删除，Rancher 将继续删除该节点。Rancher 会根据节点池设置的数量来创建新的节点。

#### 启用节点自动替换

创建节点池时，你可以指定 Rancher 替换无响应节点的等待时间（以分钟为单位）。

1. 在创建或编辑集群的表单中，转到**节点池**。
1. 转到要启用节点自动替换的节点池。在 **Recreate Unreachable After** 字段中，输入 Rancher 在替换节点之前应该等待节点响应的分钟数。
1. 填写表单的其余部分以创建或编辑集群。

**结果** ：已为节点池启用节点自动替换。

#### 禁用节点自动替换

你可以执行以下步骤从 Rancher UI 禁用节点自动替换：

1. 点击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要禁用节点自动替换的集群，然后单击 **⋮ > 编辑配置**。
1. 在**节点池**部分中，转到要启用节点自动替换的节点池。在 **Recreate Unreachable After** 字段中，输入 0。
1. 单击**保存**。

**结果**：已禁用节点池的节点自动替换。

### 云凭证

节点模板可以使用云凭证，来存储用于在云提供商中启动节点的凭证，其优点是：

- 凭证会存储为更安全的 Kubernetes 密文，而且你无需每次都输入凭证便可编辑节点模板。

- 创建云凭证后，你可以重新使用该凭证来创建其他节点模板。

- 多个节点模板可以使用相同的云凭证来创建节点池。如果你的密钥被泄露或过期，则可以在一个位置更新云凭证，从而一次更新所有使用该凭证的节点模板。

创建云凭证后，用户可以[管理创建的云凭证](../../../../reference-guides/user-settings/manage-cloud-credentials.md)。

### 主机驱动

如果你找不到想要的主机驱动，你可以在 Rancher 的[内置主机驱动](../../authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md#激活停用主机驱动)中查看并激活它，也可以[添加自定义主机驱动](../../authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md#添加自定义主机驱动)。

## RKE2 集群

Rancher 2.6 支持直接使用 Rancher UI 配置 [RKE2](https://docs.rke2.io/) 集群。RKE2，也称为 RKE Government，是一个完全符合标准的 Kubernetes 发行版，它专注于安全性和合规性。

:::note

对于 RKE2 集群模板，请参阅[此页面](../../manage-clusters/manage-cluster-templates.md#rke2-集群模板)了解更多信息。

:::

### 节点角色

RKE2 CLI 公开了 `server` 和 `agent` 两个角色，它们分别代表 Kubernetes 节点角色 `etcd` + `controlplane` 和 `worker`。通过 Rancher 2.6 中的 RKE2 集成，RKE2 节点池可以分配更细粒度的角色，例如 `etcd` 和 `controlplane`。

你可以在 RKE2 CLI 中使用标志和节点污染，来控制调度工作负载和 Kubernetes master 节点的位置，从而使用 `etcd`，`controlplane` 和 `worker` 节点功能。这些角色没有在 RKE2 CLI 中实现为第一级角色的原因是，RKE2 被概念化为一组原始构建块，使用 Rancher 等编排系统得到最佳利用。

在 Rancher 中实现这三个节点角色，表示 Rancher 管理的 RKE2 集群能够轻松使用为 RKE 集群推荐的相同架构的所有最佳实践。

在[推荐的集群架构](../../kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md)中，我们概述了每个角色集群应该有多少节点：

- 至少拥有三个角色为 etcd 的节点，来确保失去一个节点时仍能存活。
- 至少两个节点具有 controlplane 角色，以实现主组件高可用性。
- 至少两个具有 worker 角色的节点，用于在节点故障时重新安排工作负载。
