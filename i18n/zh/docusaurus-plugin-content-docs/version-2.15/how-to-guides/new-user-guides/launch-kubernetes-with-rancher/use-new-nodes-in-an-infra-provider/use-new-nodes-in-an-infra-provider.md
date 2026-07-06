---
title: 在云厂商的新节点上启动 Kubernetes
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider"/>
</head>

在 Rancher 中使用节点模板来创建 RKE2 集群时，每个生成的节点池都会显示在新的**主机池**选项卡中。你可以通过执行以下操作来查看主机池：

1. 点击**☰ > 集群管理**。
1. Click the name of the RKE2 cluster.

## RKE2 集群

Rancher 2.6 支持直接使用 Rancher UI 配置 [RKE2](https://docs.rke2.io/) 集群。RKE2，也称为 RKE Government，是一个完全符合标准的 Kubernetes 发行版，它专注于安全性和合规性。

:::note

对于 RKE2 集群模板，请参阅[此页面](../../manage-clusters/manage-cluster-templates.md#rke2-集群模板)了解更多信息。

:::

### 节点角色

RKE2 CLI 公开了 `server` 和 `agent` 两个角色，它们分别代表 Kubernetes 节点角色 `etcd` + `controlplane` 和 `worker`。通过 Rancher 2.6 中的 RKE2 集成，RKE2 节点池可以分配更细粒度的角色，例如 `etcd` 和 `controlplane`。

你可以在 RKE2 CLI 中使用标志和节点污染，来控制调度工作负载和 Kubernetes master 节点的位置，从而使用 `etcd`，`controlplane` 和 `worker` 节点功能。这些角色没有在 RKE2 CLI 中实现为第一级角色的原因是，RKE2 被概念化为一组原始构建块，使用 Rancher 等编排系统得到最佳利用。

在 Rancher 中实现这三个节点角色，表示 Rancher 管理的 RKE2 集群能够轻松使用为 RKE 集群推荐的相同架构的所有最佳实践。

在[推荐的集群架构](../../kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md)中，我们概述了每个角色集群应该有多少节点：

- 至少拥有三个角色为 etcd 的节点，来确保失去一个节点时仍能存活。
- 至少两个节点具有 controlplane 角色，以实现主组件高可用性。
- 至少两个具有 worker 角色的节点，用于在节点故障时重新安排工作负载。
