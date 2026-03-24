---
title: 在 Nutanix AOS 中配置 Kubernetes 集群
---

要使用 Rancher 在 Nutanix AOS (AHV) 中安装 [RKE](https://rancher.com/docs/rke/latest/en/) Kubernetes 集群：

1. 找到 Rancher 的内置 Nutanix [主机驱动并激活它](../../../authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md#激活停用主机驱动)。

1. 创建一个节点模板，Rancher 将使用该模板在 Nutanix AOS 中配置节点。

1. 在 Rancher 中创建 Nutanix AOS 集群。配置新集群时，你需要为它定义节点池。每个节点池都有一个 etcd、controlplane 或 worker 的 Kubernetes 角色。Rancher 会在新节点上安装 RKE Kubernetes，并为每个节点设置节点池定义的 Kubernetes 角色。

有关配置 Nutanix AOS 节点模板的详细信息，请参阅 [Nutanix AOS 节点模板配置参考](../../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix.md)。

有关在 Rancher 中配置 RKE Kubernetes 集群的详细信息，请参阅[集群配置参考](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)。

- [Nutanix AOS 中的准备工作](#nutanix-aos-中的准备工作)
- [创建 Nutanix AOS 集群](#创建-nutanix-aos-集群)

## Nutanix AOS 中的准备工作

下文介绍了设置 Nutanix AOS 的要求，以便 Rancher 可以配置虚拟机和集群。

:::note

节点模板已使用 Nutanix AOS 5.20.2 和 6.0.1 版本进行记录和测试。

:::

### 在 Nutanix AOS 中创建凭证

在继续创建集群之前，请确保你拥有具有管理员权限的 [Nutanix Prism Central 用户账号](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_0:wc-user-create-wc-t.html)。设置节点模板时，模板将需要使用这些凭证。

### 网络权限

必须确保运行 Rancher Server 的主机能够建立以下网络连接：

- 连接到 Nutanix Prism Central API（通常是端口 9440/TCP）。
- 连接到创建的 VM 上的 22/TCP 和 2376/TCP 端口。

有关在基础设施提供商上创建节点的端口要求，请参阅[节点网络要求](../../../kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md#网络要求)。

### VM-VM 反亲和性策略

建议设置 [VM-VM 反亲和性策略](https://portal.nutanix.com/page/documents/details?targetId=AHV-Admin-Guide-v6_1:ahv-vm-anti-affinity-t.html)。这些规则允许分配了 etcd 和 controlplane 角色的虚拟机在分配给不同节点池时，在单独的 AHV 主机上运行。这种做法可确保单个物理机的故障不会影响这些平面的可用性。

## 创建 Nutanix AOS 集群

1. [创建节点模板](#1-创建节点模板)
2. [使用节点模板创建具有节点池的集群](#2-使用节点模板创建具有节点池的集群)

### 1. 创建节点模板

为 Nutanix AOS 创建[节点模板](../../../../../pages-for-subheaders/use-new-nodes-in-an-infra-provider.md#节点模板)会允许 Rancher 在 Nutanix AOS 中配置新节点。其他集群可以复用节点模板。

1. 点击 **☰ > 集群管理**。
1. 单击 **RKE1 配置 > 节点模板**。
1. 单击**创建**。
1. 单击**添加模板**。
1. 单击 **Nutanix**。
1. 填写 Nutanix AOS 的节点模板。有关填写表格的帮助，请参阅 Nutanix AOS 节点模板[配置参考](../../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix.md)。
1. 单击**创建**。

### 2. 使用节点模板创建具有节点池的集群

使用 Rancher 在 Nutanix AOS 中创建 Kubernetes 集群。

1. 点击 **☰ > 集群管理**。
1. 在**集群**页面上，单击**创建**。
1. 单击 **Nutanix**。
1. 输入**集群名称**，然后点击**继续**。
1. 使用**成员角色**为集群配置用户授权。点击**添加成员**添加可以访问集群的用户。使用**角色**下拉菜单为每个用户设置权限。
1. 使用**集群选项**选择要安装的 Kubernetes 版本、要使用的网络提供商，以及是否启用项目网络隔离。要查看更多集群选项，请单击**显示高级选项**。如需获取配置集群的帮助，请参阅 [RKE 集群配置参考](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)。
1. 将一个或多个节点池添加到你的集群。每个节点池都使用节点模板来配置新节点。有关节点池的更多信息，包括为节点分配 Kubernetes 角色的最佳实践，请参阅[本节](../../../../../pages-for-subheaders/use-new-nodes-in-an-infra-provider.md#节点池)。
1. 检查并确认你的选项。然后单击**创建**。

**结果**：集群已创建，并处于 **Provisioning** 状态。Rancher 已在你的集群中。

当集群状态变为 **Active** 后，你可访问集群。

**Active** 状态的集群会分配到两个项目：

- `Default`：包含 `default` 命名空间
- `System`：包含 `cattle-system`，`ingress-nginx`，`kube-public` 和 `kube-system` 命名空间。

## 可选的后续步骤

创建集群后，你可以通过 Rancher UI 访问集群。最佳实践建议你设置以下访问集群的备用方式：

- **通过 kubectl CLI 访问你的集群**：按照[这些步骤](../../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#在工作站使用-kubectl-访问集群)在你的工作站上使用 kubectl 访问集群。在这种情况下，你将通过 Rancher Server 的身份验证代理进行身份验证，然后 Rancher 会让你连接到下游集群。此方法允许你在没有 Rancher UI 的情况下管理集群。

- **通过 kubectl CLI 使用授权的集群端点访问你的集群**：按照[这些步骤](../../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)直接使用 kubectl 访问集群，而无需通过 Rancher 进行身份验证。我们建议设置此替代方法来访问集群，以便在无法连接到 Rancher 时访问集群。