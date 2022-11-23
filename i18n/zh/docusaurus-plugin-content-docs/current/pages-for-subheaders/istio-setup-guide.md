---
title: 设置指南
---

本文介绍如何启用 Istio 并在你的项目中使用它。

如果你使用 Istio 进行流量管理，则需要允许外部流量进入集群。在这种情况下，你将需要执行以下所有步骤。

## 先决条件

本指南假设你已经[安装 Rancher](installation-and-upgrade.md)，且已经[配置了一个单独的 Kubernetes 集群](kubernetes-clusters-in-rancher-setup.md)并要在该集群上安装 Istio。

集群中的节点必须满足 [CPU 和内存要求](../integrations-in-rancher/istio/cpu-and-memory-allocations.md)。

Istio 控制的工作负载和服务必须满足 [Istio 要求](https://istio.io/docs/setup/additional-setup/requirements/)。

## 安装

:::tip 快速设置提示：

如果你不需要外部流量到达 Istio，而只想设置 Istio 以监控和跟踪集群内的流量，请跳过[设置 Istio Gateway](../how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md) 和[设置 Istio 的流量管理组件](../how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md)步骤。

:::

1. [在集群中启用 Istio](../how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md)
1. [在要使用 Istio 的所有命名空间中启用 Istio](../how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md)
1. [添加注入了 Istio sidecar 的部署和服务](../how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md)
1. [设置 Istio Gateway](../how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md)
1. [设置 Istio 的流量管理组件](../how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md)
1. [生成流量并查看 Istio 的运行情况](../how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md)
