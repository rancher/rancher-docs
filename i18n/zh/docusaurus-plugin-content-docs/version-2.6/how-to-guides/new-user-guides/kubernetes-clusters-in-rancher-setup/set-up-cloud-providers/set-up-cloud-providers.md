---
title: 设置 Cloud Provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers"/>
</head>

_cloud provider_ 是 Kubernetes 中的一个模块，它提供了一个用于管理节点、负载均衡器和网络路由的接口。

在 Rancher 中设置 cloud provider 时，如果你使用的云提供商支持自动化，Rancher Server 可以在启动 Kubernetes 定义时自动配置新节点、负载均衡器或持久存储设备。

如果你配置的节点云提供商集群不满足先决条件，集群将无法正确配置。

**Cloud Provider** 选项默认设置为 `None`。

可以启用的云提供商包括：

* Amazon
* Azure
* GCE (Google Compute Engine)
* vSphere

### 设置 Amazon 云提供商

有关启用 Amazon 云提供商的详细信息，请参阅[此页面](amazon.md)。

### 设置 Azure 云提供商

有关启用 Azure 云提供商的详细信息，请参阅[此页面](azure.md)。

### 设置 GCE 云提供商

有关启用 Google Compute Engine 云提供商的详细信息，请参阅[此页面](google-compute-engine.md)。

### 设置 vSphere 云提供商

有关启用 vSphere 云提供商的详细信息，请参阅[树内 vSphere 配置](configure-in-tree-vsphere.md) 和[树外 vSphere 配置](configure-out-of-tree-vsphere.md)。

### 设置自定义云提供商

任何 Kubernetes Cloud Provider 都可以通过`自定义`云提供商进行配置。

对于自定义云提供商选项，你可以参考 [RKE 文档](https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/)，了解如何为你的云提供商编辑 yaml 文件。特定云提供商的详细配置说明如下：

* [vSphere](https://rke.docs.rancher.com/config-options/cloud-providers/vsphere)
* [OpenStack](https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/openstack/)
