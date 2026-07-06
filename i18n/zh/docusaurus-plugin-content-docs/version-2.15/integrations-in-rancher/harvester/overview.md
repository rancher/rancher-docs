---
title: 概述
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/harvester/overview"/>
</head>

[Harvester](https://docs.harvesterhci.io/) 是 Rancher v2.6.1 新增的功能，是基于 Kubernetes 构建的开源超融合基础架构（HCI）软件。Harvester 安装在裸金属服务器上，提供集成的虚拟化和分布式存储功能。虽然 Harvester 使用 Kubernetes 运行，但它不需要用户了解 Kubernetes 概念，这使得它更加用户友好。

## 功能开关

Harvester 功能开关用于管理对 Rancher 中虚拟化管理（VM）页面的访问，用户可以直接导航到 Harvester 集群并访问 Harvester UI。Harvester 的功能开关默认启用。如需了解 Rancher 中功能开关的更多详细信息，请单击[此处](../../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md)。

要导航到 Harvester 集群，请单击 **☰ > 虚拟化管理**。在 Harvester 集群页面中，单击集群以转到该 Harvester 集群的视图。

- 如果启用了 Harvester 功能开关，Harvester 集群将会从列出 Kubernetes 集群的任何页面或应用（例如 Fleet 和多集群应用）中过滤掉。

- 如果禁用了 Harvester 功能开关，并且导入了 Harvester 集群，Harvester 集群将显示在集群管理页面的 Rancher 集群列表中。仅当功能开关为关闭时，Harvester 集群才会显示在集群列表中。

- 集成 Harvester 后，你可以将 Harvester 集群导入 Rancher，对应的集群类型是 `Harvester`。

- 用户只能在虚拟化管理页面上导入 Harvester 集群。不支持在集群管理页面上导入集群，并且会出现警告，建议你返回虚拟化管理页面执行此操作。

## Harvester 主机驱动

[Harvester 主机驱动](https://docs.harvesterhci.io/v1.5/rancher/node/node-driver/)通常可用于 Rancher 中的 K3s 和 RKE2 选项。无论 Harvester 功能开关是否启用，主机驱动都是可用的。请注意，主机驱动默认处于关闭状态。用户只能通过集群管理页面在 Harvester 上创建 K3s 或 RKE2 集群。

Harvester 允许通过 Harvester UI 上传和显示 `.ISO` 镜像，但 Rancher UI 是不支持的。这是因为 `.ISO` 镜像通常需要额外的设置，这会干扰干净的部署（即无需用户干预），并且它们通常不用于云环境。

如需了解 Rancher 中主机驱动的更多详细信息，请单击[此处](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/about-provisioning-drivers.md#主机驱动)。

## 端口要求

Harvester 集群的端口要求可以在[此处](https://docs.harvesterhci.io/v1.5/install/requirements#networking)找到。

此外，其他网络注意事项如下：

- 请务必为 VM VLAN 网络启用物理交换机的 VLAN 中继端口。
- 按照[此处](https://docs.harvesterhci.io/v1.5/networking/index)的网络设置指南进行操作。

对于其他集群（例如 K3s 和 RKE2）的其他端口要求，请参阅[这些文档](https://docs.harvesterhci.io/v1.5/install/requirements/#guest-clusters)。
