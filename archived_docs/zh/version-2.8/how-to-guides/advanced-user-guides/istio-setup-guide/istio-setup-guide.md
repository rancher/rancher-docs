---
title: 设置指南
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/advanced-user-guides/istio-setup-guide"/>
</head>

本文介绍如何启用 Istio 并在你的项目中使用它。

如果你使用 Istio 进行流量管理，则需要允许外部流量进入集群。在这种情况下，你将需要执行以下所有步骤。

## 先决条件

本指南假设你已经[安装 Rancher](../../../getting-started/installation-and-upgrade/installation-and-upgrade.md)，且已经[配置了一个单独的 Kubernetes 集群](../../new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md)并要在该集群上安装 Istio。

集群中的节点必须满足 [CPU 和内存要求](../../../integrations-in-rancher/istio/cpu-and-memory-allocations.md)。

Istio 控制的工作负载和服务必须满足 [Istio 要求](https://istio.io/docs/setup/additional-setup/requirements/)。

## 安装

:::tip 快速设置提示:

如果你不需要外部流量到达 Istio，而只想设置 Istio 以监控和跟踪集群内的流量，请跳过[设置 Istio Gateway](set-up-istio-gateway.md)和[设置 Istio 的流量管理组件](set-up-traffic-management.md)步骤。

:::

1. [在集群中启用 Istio。](enable-istio-in-cluster.md)
2. [在命名空间中启用 Istio。](enable-istio-in-namespace.md)
3. [使用 Istio Sidecar 添加部署和服务。](use-istio-sidecar.md)
4. [设置 Istio Gateway。](set-up-istio-gateway.md)
5. [设置 Istio 的流量管理组件。](set-up-traffic-management.md)
6. [生成和查看流量。](generate-and-view-traffic.md)
