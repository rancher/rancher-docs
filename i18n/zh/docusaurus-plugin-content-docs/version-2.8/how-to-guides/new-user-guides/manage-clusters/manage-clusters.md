---
title: 集群管理
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/manage-clusters"/>
</head>

在 Rancher 中配置集群后，你可以开始使用强大的 Kubernetes 功能在开发、测试或生产环境中部署和扩展容器化应用。

:::note

本节默认你已对 Docker 和 Kubernetes 有一定的了解。如果你需要了解 Kubernetes 组件如何协作，请参见 [Kubernetes 概念](../../../reference-guides/kubernetes-concepts.md)页面。

:::

## 在 Rancher 中管理集群

将集群[配置到 Rancher](../kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md) 之后，[集群所有者](../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles)需要管理这些集群。管理集群的选项如下：

import ClusterCapabilitiesTable from '../../../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />

Rancher 包含 Kubernetes 中未包含的各种工具来协助你进行 DevOps 操作。Rancher 可以与外部服务集成，让你的集群更高效地运行。工具分为以下几类：

- 告警
- Notifiers
- Logging
- Monitoring
- Istio 服务网格
- OPA Gatekeeper

你可以通过 **Apps** 来安装工具。
