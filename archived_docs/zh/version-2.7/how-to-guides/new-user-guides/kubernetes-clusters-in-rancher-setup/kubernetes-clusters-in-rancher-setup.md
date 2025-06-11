---
title: Rancher 中的 Kubernetes 集群设置
description: 配置 Kubernetes 集群
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup"/>
</head>

Rancher 简化了集群的创建，允许你通过 Rancher UI 而不是更复杂的替代方案来创建集群。Rancher 为启动集群提供了多个选项。 请选择最适合您用例的选项。

本节假定你对 Docker 和 Kubernetes 有基本的了解。有关 Kubernetes 组件如何协同工作的简要说明，请参阅[概念](../../../reference-guides/kubernetes-concepts.md)页面。

有关 Rancher 服务如何配置集群以及使用哪些工具配置集群的概念性概述，请参阅[架构](../../../reference-guides/rancher-manager-architecture/rancher-manager-architecture.md)页面。

### 按集群类型划分的集群管理功能

下表总结了每种集群类型的可用选项和设置：

import ClusterCapabilitiesTable from '../../../shared-files/\_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />

## 在托管 Kubernetes 提供商中设置集群

在这种情况下，Rancher 不会配置 Kubernetes，因为它是由 Google Kubernetes Engine（GKE）、Amazon Elastic Container Service for Kubernetes 或 Azure Kubernetes Service 等提供商安装的。

如果使用 Google GKE 等 Kubernetes 提供商，Rancher 会与其云 API 集成，允许你从 Rancher UI 为托管集群创建和管理基于角色的访问控制。

更多信息，请参阅[托管 Kubernetes 集群](set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md)部分。

## 使用 Rancher 启动 Kubernetes

在自己的节点上配置 Kubernetes 时，Rancher 使用 [Rancher Kubernetes Engine (RKE)](https://rancher.com/docs/rke/latest/en/) 作为库。RKE 是 Rancher 自己的轻量级 Kubernetes 安装程序。

在 RKE 集群中，Rancher 负责管理 Kubernetes 的部署。这些集群可以部署在任何裸机服务器、云提供商或虚拟化平台上。

这些节点可以通过 Rancher 的用户界面动态配置，它可以调用 [Docker Machine](https://github.com/docker/docs/blob/vnext-engine/machine/overview.md) 在各种云提供商上启动节点。

如果你已经有了一个要添加到 RKE 集群的节点，可以通过在该节点上运行 Rancher 代理容器将其添加到集群中。

更多信息，请参阅 [RKE 集群](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)部分。

### 在基础设施提供商中启动 Kubernetes 和配置节点

Rancher 可以在亚马逊 EC2、DigitalOcean、Azure 或 vSphere 等基础设施提供商中动态调配节点，然后在这些节点上安装 Kubernetes。

使用 Rancher，你可以基于[节点模板](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md#node-templates)创建节点池。该模板定义了用于在云提供商中启动节点的参数。

使用基础设施提供商托管的节点的一个好处是，如果某个节点失去了与集群的连接，Rancher 可以自动替换掉它，从而保持预期的集群配置。

可用于创建节点模板的云提供商是由 Rancher UI 中激活的[节点驱动程序](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md#node-drivers)决定的。

有关详细信息，请参阅[基础设施提供商托管的节点](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)部分。

### 在已存在的自定义节点上启动 Kubernetes

设置这种集群时，Rancher 会在已存在的[自定义节点](../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md)上安装 Kubernetes，从而创建一个自定义集群。

你可以将任何节点添加到 Rancher 中，并用它们创建集群。

这些节点包括内部部署的裸机服务器、云托管的虚拟机或内部部署的虚拟机。

## 注册已存在的集群

集群注册功能取代了集群导入功能。

现在，注册 EKS 集群还能带来更多好处。在 Rancher UI 中，注册的 EKS 集群和在 Rancher 中创建的 EKS 集群在大多数情况下的处理方式相同，但删除除外。

删除在 Rancher 中创建的 EKS 集群时，集群将被销毁。删除在 Rancher 中注册的EKS集群时，该集群会断开与 Rancher 服务器的连接，但它仍然存在，你仍然可以按照在 Rancher 中注册前的方式访问它。

更多信息，请参阅[本页](register-existing-clusters.md)。

## 以编程方式创建集群

通过 Rancher 以编程方式部署 Kubernetes 集群的最常用方法是使用 Rancher2 Terraform 提供商。使用 Terraform 创建集群的文档在[这里](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster)。

可以使用 Terraform 创建或导入 EKS、GKE、AKS 集群和 RKE 集群。
