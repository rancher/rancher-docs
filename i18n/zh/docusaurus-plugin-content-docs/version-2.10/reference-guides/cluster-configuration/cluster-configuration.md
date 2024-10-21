---
title: 集群配置
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/cluster-configuration"/>
</head>

使用 Rancher 配置 Kubernetes 集群后，你仍然可以编辑集群的选项和设置。

有关编辑集群成员资格的信息，请转至[此页面](../../how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md)。

## 集群配置参考

集群配置选项取决于 Kubernetes 集群的类型：

- [RKE 集群配置](rancher-server-configuration/rke1-cluster-configuration.md)
- [RKE2 集群配置](rancher-server-configuration/rke2-cluster-configuration.md)
- [K3s 集群配置](rancher-server-configuration/k3s-cluster-configuration.md)
- [EKS 集群配置](rancher-server-configuration/eks-cluster-configuration.md)
- [GKE 集群配置](rancher-server-configuration/gke-cluster-configuration/gke-cluster-configuration.md)
- [AKS 集群配置](rancher-server-configuration/aks-cluster-configuration.md)

## 不同类型集群的管理功能

对于已有集群而言，可提供的选项和设置取决于你配置集群的方法。

下表总结了每一种类型的集群和对应的可编辑的选项和设置：

import ClusterCapabilitiesTable from '../../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />
