---
title: 卸载 Rancher
---

本文介绍了如果你不再需要 Rancher、不想再由 Rancher 管理集群、或想删除 Rancher Server 需要怎么做。


### 如果 Rancher Server 被删除，下游集群中的工作负载会怎样？

如果 Rancher 删除了或无法恢复，Rancher 管理的下游 Kubernetes 集群中的所有工作负载将继续正常运行。

### 如果删除了 Rancher Server，该如何访问下游集群？

如果删除了 Rancher，访问下游集群的方式取决于集群的类型和集群的创建方式。总而言之：

- **注册集群**：集群不受影响，你可以注册集群前的方法访问该集群。
- **托管的 Kubernetes 集群**：如果你在 Kubernetes 云提供商（例如 EKS、GKE 或 AKS）中创建集群，你可以继续使用提供商的云凭证来管理集群。
- **RKE 集群**：要访问 [RKE 集群](../pages-for-subheaders/launch-kubernetes-with-rancher.md)，集群必须启用了[授权集群端点（authorized cluster endpoint，ACE）](../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点)，而且你必须从 Rancher UI 下载了集群的 kubeconfig 文件。RKE 集群默认启用授权集群端点。通过使用此端点，你可以直接使用 kubectl 访问你的集群，而不用通过 Rancher Server 的[认证代理](../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#1-认证代理)进行通信。有关配置 kubectl 以使用授权集群端点的说明，请参阅[使用 kubectl 和 kubeconfig 文件直接访问集群](../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)。这些集群将使用删除 Rancher 时配置的身份验证快照。

### 如果我不想再使用 Rancher 了该怎么做？

:::note

之前推荐的 [System Tools](../reference-guides/system-tools.md) 自 2022 年 6 月起已弃用。

:::

如果你[在 Kubernetes 集群上安装了 Rancher](../pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md)，你可以使用 [Rancher Cleanup](https://github.com/rancher/rancher-cleanup) 工具删除 Rancher。

从 Rancher 2.5.8 开始，在高可用性 (HA) 模式下卸载 Rancher 还将删除所有 `helm-operation-*` Pod 和以下应用程序：

- fleet
- fleet-agent
- rancher-operator
- rancher-webhook

自定义资源 (CRD) 和自定义命名空间仍需要手动删除。

如果你在 Docker 中安装 Rancher，则可以通过删除运行 Rancher 的单个 Docker 容器来卸载 Rancher。

移除 Rancher 不会影响导入的集群。有关其他集群类型，请参考[移除 Rancher 后访问下游集群](#如果删除了-rancher-server该如何访问下游集群)。

### 如果我不想 Rancher 管理我的注册集群该怎么办？

如果你在 Rancher UI 中删除了已注册的集群，则该集群将与 Rancher 分离，集群不会发生改变，你可以使用注册集群之前的方法访问该集群。

要分离集群：

1. 在左上角，单击 **☰ > 集群管理**。
2. 转到要与 Rancher 分离的已注册集群，然后单击 **⋮ > 删除**。
3. 单击**删除**。

**结果**：注册的集群已与 Rancher 分离，并在 Rancher 外正常运行。

### 如果我不想 Rancher 管理我的 RKE 集群或托管的 Kubernetes 集群该怎么办？

目前，我们没有将这些集群从 Rancher 中分离出来的功能。在这种情况下，“分离”指的是将 Rancher 组件移除出集群，并独立于 Rancher 管理对集群的访问。

[此 issue](https://github.com/rancher/rancher/issues/25234) 跟踪了在没有 Rancher 的情况下管理这些集群的功能。

有关如何在删除 Rancher Server 后访问集群的更多信息，请参阅[本节](#如果删除了-rancher-server该如何访问下游集群)。
