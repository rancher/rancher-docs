---
title: 创建 Nutanix AOS 集群
description: 使用 Rancher 创建 Nutanix AOS (AHV) 集群。集群可能包括具有不同属性的 VM 组，这些属性可用于细粒度控制节点的大小。
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix"/>
</head>

[Nutanix Acropolis 操作系统](https://www.nutanix.com/products/acropolis) (Nutanix AOS) 是适用于 Nutanix 超融合基础架构平台的操作系统。AOS 带有一个名为 [Acropolis Hypervisor（AHV）](https://www.nutanix.com/products/ahv)的内置虚拟机监控程序。你可以结合使用 Rancher 与 Nutanix AOS (AHV)，从而在本地体验云环境的操作。

Rancher 可以在 AOS (AHV) 中配置节点并在其上安装 Kubernetes。在 AOS 中创建 Kubernetes 集群时，Rancher 首先与 Prism Central API 通信来配置指定数量的虚拟机。然后在虚拟机上安装 Kubernetes。

Nutanix 集群可能由多组具有不同属性（例如内存或 vCPU 数量）的 VM 组成。这种分组允许对每个 Kubernetes 角色的节点大小进行细粒度控制。

- [创建 Nutanix 集群](provision-kubernetes-clusters-in-aos.md#creating-a-nutanix-aos-cluster)
- [配置存储](provision-kubernetes-clusters-in-aos.md)

## 创建 Nutanix 集群

在[本节](provision-kubernetes-clusters-in-aos.md)中，你将学习如何使用 Rancher 在 Nutanix AOS 中安装 [RKE](https://rancher.com/docs/rke/latest/en/) Kubernetes 集群。
