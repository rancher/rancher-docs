---
title: 使用 Rancher 启动 Kubernetes
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher"/>
</head>

Rancher 可以使用任意节点启动 Kubernetes 集群。在 Rancher 中将 Kubernetes 部署到这些节点上时，你可以选择 [Rancher Kubernetes Engine](https://rancher.com/docs/rke/latest/en/) (RKE) 或 [RKE2](https://docs.rke2.io) 发行版。Rancher 可以在任何计算机上启动 Kubernetes，包括：

- 裸金属服务器
- 本地虚拟机
- 由云厂商托管的虚拟机

Rancher 可以在现有节点上安装 Kubernetes，也可以在云厂商中动态配置节点并安装 Kubernetes。

Rancher 还可以创建节点池。在托管在云厂商的节点池上安装 Kubernetes 的一个好处是，如果一个节点与集群断开连接，Rancher 可以自动创建另一个节点并将其加入集群，从而确保节点池的数量符合要求。

## RKE

### 要求

如果你使用 RKE 建立集群，节点必须满足下游集群的[节点要求](../kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md)。

### 在云厂商的新节点上启动 Kubernetes

使用 Rancher，你可以基于[节点模板](use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md#节点模板)创建节点池。此节点模板定义了要用于在云厂商中启动节点的参数。

在托管在云厂商的节点池上安装 Kubernetes 的一个好处是，如果一个节点与集群断开连接，Rancher 可以自动创建另一个节点并将其加入集群，从而确保节点池的数量符合要求。

有关详细信息，请参阅[在新节点上启动 Kubernetes](use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)。

### 在现有自定义节点上启动 Kubernetes

在这种情况下，你希望将 Kubernetes 安装到裸机服务器、本地虚拟机或云厂商中已存在的虚拟机上。使用此选项，你将在主机上运行 Rancher Agent Docker 容器。

如果要重复使用之前的自定义集群中的节点，请在复用之前[清理节点](../manage-clusters/clean-cluster-nodes.md)。如果你重复使用尚未清理的节点，则集群配置可能会失败。

有关详细信息，请参阅[自定义节点](../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md)。

### 以编程方式创建 RKE 集群

通过 Rancher 以编程方式部署 RKE 集群的最常见方法是使用 Rancher 2 Terraform Provider。详情请参见[使用 Terraform 创建集群](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster)。

## RKE2

Rancher 2.6 支持直接使用 Rancher UI 配置 [RKE2](https://docs.rke2.io/) 集群。RKE2，也称为 RKE Government，是一个完全符合标准的 Kubernetes 发行版，它专注于安全性和合规性。在 Rancher 2.6.4 及更早版本中，RKE2 配置还处于技术预览阶段。

在 Rancher 2.6.5 中，RKE2 已经 GA。

### 要求

如果你使用 RKE2 建立集群，节点必须满足下游集群的[节点要求](https://docs.rke2.io/install/requirements)。

### 在云厂商的新节点上启动 Kubernetes

RKE2 基于使用上游[集群 API](https://github.com/kubernetes-sigs/cluster-api) 项目的新配置框架。这个新配置框架支持：

- 将 RKE2 集群配置到 Rancher 具有主机驱动的任何提供商上
- 完全在 Rancher 中配置 RKE2 集群
- 除了 Canal 之外，还可以选择 CNI 选项， Calico、Cilium 和 Multus

RKE2 配置还包括在具有 Windows 节点的集群上安装 RKE2。

RKE2 的 Windows 功能包括：

- Windows 支持 vSphere 主机驱动
- 用于 Windows RKE2 自定义集群的 Calico CNI
- Calico 的项目网络隔离 (PNI)
- 由 containerd 提供支持的使用 RKE2 的 Windows 容器
- 通过 Terraform 配置 Windows RKE2 集群
- 直接从 Rancher UI 配置 Windows RKE2 自定义集群

要使 Windows 支持 RKE2 自定义集群，请选择 Calico 作为 CNI。

### 在现有自定义节点上启动 Kubernetes

RKE2 还支持在预配置的虚拟机或裸机节点上安装自定义集群。

如果要重复使用之前的自定义集群中的节点，请在复用之前清理节点。如果你重复使用尚未清理的节点，则集群配置可能会失败。

### 以编程方式创建 RKE2 集群

通过 Rancher 以编程方式部署 RKE2 集群的最常见方法是使用 Rancher 2 Terraform Provider。详情请参见[使用 Terraform 创建集群](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster_v2)。