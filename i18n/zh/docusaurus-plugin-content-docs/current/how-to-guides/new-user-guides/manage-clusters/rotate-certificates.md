---
title: 证书轮换
---

:::caution

轮换 Kubernetes 证书可能会导致集群在组件重启时暂时不可用。对于生产环境，建议在维护时段内执行此操作。

:::

默认情况下，Kubernetes 集群需要证书，Rancher 启动的 Kubernetes 集群会自动为 Kubernetes 组件生成证书。在证书过期之前或被泄露后轮换证书非常重要。证书轮换后，Kubernetes 组件会自动重启。

可以为以下服务轮换证书：

- admin
- api-server
- controller-manager
- scheduler
- rke2-controller
- rke2-server
- cloud-controller
- etcd
- auth-proxy
- kubelet
- kube-proxy

:::note

如果你未轮换 webhook 证书，且证书用了一年后已经过期，请参阅此[页面](../../../troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md)。

:::

## 证书轮换

Rancher 启动的 Kubernetes 集群能够通过 UI 轮换自动生成的证书。

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要轮换证书的集群，然后单击 **⋮ > 轮换证书**。
1. 选择要轮换的证书。

   * 轮换所有服务证书（使用相同的 CA）
   * 轮换单个服务，并从下拉菜单中选择其中一项服务。

1. 单击**保存**。

**结果**：将轮换所选证书，相关服务将重新启动以使用新证书。

## 补充说明

在 RKE2/K3s 中，etcd 和 controlplane 节点都被视为相同的 `server`。因此，如果你轮换其中一个组件的服务证书，则两者的证书都会被轮换。证书只会针对指定的服务更改，但你会看到两个组件的节点都进入更新状态。你可能还会看到仅 Worker 节点进入更新状态。这是在证书更改后重启 Worker，以确保他们获得最新的客户端证书。
