---
title: 在 Rancher 中设置 Kubernetes 集群
description: 配置 Kubernetes 集群
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup"/>
</head>

Rancher 允许你通过 Rancher UI 来创建集群，从而简化了集群的创建流程。Rancher 提供了多种启动集群的选项。你可以选择最适合你的用例的选项。

本节默认你已对 Docker 和 Kubernetes 有一定的了解。如果你需要了解 Kubernetes 组件如何协作，请参见 [Kubernetes 概念](../../../reference-guides/kubernetes-concepts.md)。

有关 Rancher Server 配置集群的方式，以及使用什么工具来创建集群的详细信息，请参阅[产品架构](../../../reference-guides/rancher-manager-architecture/rancher-manager-architecture.md)。



### 不同类型集群的管理功能

下表总结了每一种类型的集群和对应的可编辑的选项和设置：

import ClusterCapabilitiesTable from '../../../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />

## 在托管的 Kubernetes 提供商中设置集群

在这种情况下，Rancher 不会配置 Kubernetes，因为它是由 Google Kubernetes Engine (GKE)、Amazon Elastic Container Service for Kubernetes 或 Azure Kubernetes Service 等提供商安装的。

如果你使用 Kubernetes 提供商，例如 Google GKE，Rancher 将与对应的云 API 集成，允许你从 Rancher UI 为托管集群创建和管理 RBAC。

详情请参阅[托管 Kubernetes 集群](set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md)。

## 使用 Rancher 启动 Kubernetes

在你自己的节点上配置 Kubernetes 时，Rancher 使用 [Rancher Kubernetes Engine (RKE)](https://rancher.com/docs/rke/latest/en/) 作为库。RKE 是 Rancher 自己的轻量级 Kubernetes 安装程序。

在 RKE 集群中，Rancher 管理 Kubernetes 的部署。这些集群可以部署在任何裸机服务器、云提供商或虚拟化平台上。

这些节点可以通过 Rancher 的 UI 动态配置，该 UI 调用 [Docker Machine](https://docs.docker.com/machine/) 在各种云提供商上启动节点。

如果你已经有一个想要添加到 RKE 集群的节点，你可以通过在节点上运行 Rancher Agent 容器将节点添加到集群中。

有关详细信息，请参阅 [RKE 集群](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)。

### 在基础设施提供商中启动 Kubernetes 并配置节点

Rancher 可以在 Amazon EC2、DigitalOcean、Azure 或 vSphere 等基础设施提供商中动态配置节点，然后在节点上安装 Kubernetes。

使用 Rancher，你可以基于[节点模板](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md#节点模板)创建节点池。此模板定义了要在云提供商中启动的节点的参数。

使用由基础设施提供商托管的节点的一个好处是，如果一个节点与集群失去连接，Rancher 可以自动替换它，从而维护集群配置。

Rancher UI 中状态为 Active 的[主机驱动](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md#主机驱动)决定了可用于创建节点模板的云提供商。

如需更多信息，请参阅[基础设施提供商托管的节点](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)。

### 在现有自定义节点上启动 Kubernetes

在设置这种类型的集群时，Rancher 会在现有的[自定义节点](../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md)上安装 Kubernetes，从而创建一个自定义集群。

你可以使用任何节点，在 Rancher 中创建一个集群。

这些节点包括本地裸机服务器、云托管虚拟机或本地虚拟机。

## 注册现有集群

集群注册功能取代了导入集群的功能。

注册 EKS 集群的优点更多。在大多数情况下，注册的 EKS 集群和在 Rancher 中创建的 EKS 集群在 Rancher UI 中的处理方式相同（除了删除）。

删除在 Rancher 中创建的 EKS 集群后，该集群将被销毁。删除在 Rancher 中注册的 EKS 集群时，它与 Rancher Server 会断开连接，但它仍然存在。你仍然可以像在 Rancher 中注册之前一样访问它。

详情请参见[本页面](register-existing-clusters.md)。

## 以编程方式创建集群

通过 Rancher 以编程方式部署 Kubernetes 集群的最常见方法是使用 Rancher 2 Terraform Provider。详情请参见[使用 Terraform 创建集群](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster)。

你可以使用 Terraform 创建或导入 EKS、GKE、AKS 集群和 RKE 集群。
