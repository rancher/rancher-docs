---
title: 创建 Azure 集群
---

在本节中，你将学习如何通过 Rancher 在 Azure 中安装 [RKE](https://rancher.com/docs/rke/latest/en/) Kubernetes 集群。

首先，在 Rancher 中设置你的 Azure 云凭证。然后，使用云凭证创建一个节点模板，Rancher 将使用该模板在 Azure 中配置新节点。

然后，在 Rancher 中创建一个 Azure 集群，并在配置新集群时为集群定义节点池。每个节点池都有一个 etcd、controlplane 或 worker 的 Kubernetes 角色。Rancher 会在新节点上安装 Kubernetes，并为每个节点设置节点池定义的 Kubernetes 角色。

:::caution

当 Rancher RKE 集群在 Azure 中运行并且前面有 Azure 负载均衡器时，出站流量会失败。问题的解决方法如下：

- 终止内部负载均衡器上的 SSL/TLS
- 使用 L7 负载均衡器

详情请参见 [Azure 负载均衡器限制](https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations)。

:::

有关 Rancher 在 Azure 节点上安装的 Kubernetes 集群的更多信息，请参阅 [RKE 集群配置参考](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)。

有关配置 Azure 节点模板的详细信息，请参阅 [Azure 节点模板配置参考](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md)。

- [Azure 中的准备工作](#azure-中的准备工作)
- [创建 Azure 集群](#创建-azure-集群)

## Azure 中的准备工作

在使用 Azure 等云厂商在 Rancher 中创建节点模板之前，必须先配置 Rancher 以允许操作 Azure 订阅中的资源。

为此，首先在 Azure 的 **Active Directory (AD)** 中创建一个新的 Azure **service principal (服务主体，缩写是 SP)**，它是具有管理 Azure 权限的应用用户。

以下是创建服务主体必须运行的 `az cli` 脚本模板，你必须在其中输入你的服务主体名称、角色和范围：

```
az ad sp create-for-rbac \
  --name="<Rancher ServicePrincipal name>" \
  --role="Contributor" \
  --scopes="/subscriptions/<subscription Id>"
```

创建服务主体后会返回三个标识信息，分别是*应用 ID（也称为客户端 ID）*，以及*客户端密码*。为 Azure 创建节点模板时将使用这些信息。

## 创建 Azure 集群

<Tabs>
<TabItem value="RKE">

1. [创建云凭证](#1-创建云凭证)
2. [使用云凭证创建节点模板](#2-使用云凭证创建节点模板)
3. [使用节点模板创建具有节点池的集群](#3-使用节点模板创建具有节点池的集群)

### 1. 创建云凭证

1. 点击 **☰ > 集群管理**。
1. 单击**云凭证**。
1. 单击**创建**。
1. 单击 **Azure**。
1. 输入你的 Azure 凭证。
1. 单击**创建**。

**结果**：已创建用于在集群中配置节点的云凭证。你可以在其他节点模板或集群中复用这些凭证。

### 2. 使用云凭证创建节点模板

为 Azure 创建[节点模板](./use-new-nodes-in-an-infra-provider.md#节点模板)会允许 Rancher 在 Azure 中配置新节点。其他集群可以复用节点模板。

1. 点击 **☰ > 集群管理**。
1. 单击 **RKE1 配置 > 节点模板**。
1. 单击**添加模板**。
1. 单击 **Azure**。
1. 填写 Azure 的节点模板。有关填写表单的帮助，请参阅 [Azure 节点模板配置](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md)。

### 3. 使用节点模板创建具有节点池的集群

使用 Rancher 在 Azure 中创建 Kubernetes 集群。

1. 点击 **☰ > 集群管理**。
1. 在**集群**页面上，单击**创建**。
1. 单击 **Azure**。
1. 输入**集群名称**。
1. 将一个或多个节点池添加到你的集群。每个节点池都使用节点模板来配置新节点。有关节点池及其最佳实践的更多信息，请参阅[本节](./use-new-nodes-in-an-infra-provider.md)。
1. 在**集群配置**中，选择要安装的 Kubernetes 版本、要使用的网络提供商，以及是否启用项目网络隔离。要查看更多集群选项，请单击**显示高级选项**。如需获取配置集群的帮助，请参阅 [RKE 集群配置参考](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)。
1. 使用**成员角色**为集群配置用户授权。点击**添加成员**添加可以访问集群的用户。使用**角色**下拉菜单为每个用户设置权限。
1. 单击**创建**。

</TabItem>
<TabItem value="RKE2">

### 1. 创建云凭证

如果你已经有一组可用的云凭证，请跳过此部分。

1. 点击 **☰ > 集群管理**。
1. 单击**云凭证**。
1. 单击**创建**。
1. 单击 **Azure**。
1. 输入你的 Azure 凭证。
1. 单击**创建**。

**结果**：已创建用于在集群中配置节点的云凭证。你可以在其他节点模板或集群中复用这些凭证。

### 2. 创建你的集群

使用 Rancher 在 Azure 中创建 Kubernetes 集群。

1. 点击 **☰ > 集群管理**。
1. 在**集群**页面上，单击**创建**。
1. 将开关切换到 **RKE2/K3s**。
1. 单击 **Azure**。
1. 选择一个**云凭证**。如果存在多个则需要选择。否则，它是预选的。
1. 输入**集群名称**。
1. 为每个 Kubernetes 角色创建一个主机池。请参阅[最佳实践](./use-new-nodes-in-an-infra-provider.md#节点角色)了解角色分配和计数的建议。
   1. 为每个主机池定义主机配置。有关配置选项的信息，请参阅 [Azure 主机配置参考](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure.md)。
1. 使用**集群配置**，选择要安装的 Kubernetes 版本、要使用的网络提供商，以及是否启用项目网络隔离。有关配置集群的帮助，请参阅 [RKE2 集群配置参考](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md)。
1. 使用**成员角色**为集群配置用户授权。点击**添加成员**添加可以访问集群的用户。使用**角色**下拉菜单为每个用户设置权限。
1. 单击**创建**。

</TabItem>
</Tabs>

**结果**：

你已创建集群，集群的状态是**配置中**。Rancher 已在你的集群中。

当集群状态变为 **Active** 后，你可访问集群。

**Active** 状态的集群会分配到两个项目：

- `Default`：包含 `default` 命名空间
- `System`：包含 `cattle-system`，`ingress-nginx`，`kube-public` 和 `kube-system` 命名空间。


### 可选的后续步骤

创建集群后，你可以通过 Rancher UI 访问集群。最佳实践建议你设置以下访问集群的备用方式：

- **通过 kubectl CLI 访问你的集群**：按照[这些步骤](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#在工作站使用-kubectl-访问集群)在你的工作站上使用 kubectl 访问集群。在这种情况下，你将通过 Rancher Server 的身份验证代理进行身份验证，然后 Rancher 会让你连接到下游集群。此方法允许你在没有 Rancher UI 的情况下管理集群。
- **通过 kubectl CLI 使用授权的集群端点访问你的集群**：按照[这些步骤](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)直接使用 kubectl 访问集群，而无需通过 Rancher 进行身份验证。我们建议设置此替代方法来访问集群，以便在无法连接到 Rancher 时访问集群。
