---
title: Azure 主机配置
---

有关 Azure 的更多信息，请参阅官方 [Azure 文档](https://docs.microsoft.com/en-us/azure/?product=featured)。

## Machine Pools

### 环境

Microsoft 提供了多个[云](https://docs.microsoft.com/en-us/cli/azure/cloud?view=azure-cli-latest)来满足地区法律的要求：

- AzurePublicCloud
- AzureGermanCloud
- AzureChinaCloud
- AzureUSGovernmentCloud

### 位置

配置集群和节点的[位置](https://docs.microsoft.com/en-us/azure/virtual-machines/regions)。

### 资源组

资源组是一个容器，其中包含 Azure 解决方案的相关资源。资源组可以包括解决方案的所有资源，或者仅包括你希望作为一个组来管理的资源。你可以根据组织的需求来决定如何将资源分配给资源组。通常情况下，你可以将生命周期相同的资源添加到同一个资源组，以便轻松地按组进行部署、更新和删除。

你可以使用现有资源组，也可以输入资源组的名称，然后系统将为你创建一个资源组。

有关管理资源组的信息，请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)。

### 可用性集（非托管）

要添加 VM 的现有[可用性集](https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview)的名称或 ID。

### 镜像

作为 ARM 资源标识符提供的操作系统镜像的名称。需要使用托管磁盘。

### 虚拟机大小

为节点池中的每个 VM 选择一个大小。有关每个 VM 大小的详细信息，请参阅[此页面](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/)。

## 高级选项

### 容错域数量

容错域定义了共享公共电源和网络交换机的虚拟机组。如果可用性集已创建，将忽略容错域数量。

有关容错域的更多信息，请参阅[此处](https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview#how-do-availability-sets-work)。

### 更新域数量

更新域表示可以同时重新启动的虚拟机组和底层物理硬件。如果可用性集已创建，将忽略更新域数量。

有关更新域的更多信息，请参阅[此处](https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview#how-do-availability-sets-work)。

### 购买计划

Azure 市场中的某些 VM 镜像需要购买计划。如果适用，请为你选择的镜像选择格式为 `publisher:product:plan` 的购买计划。

### 子网

创建新 VNet 或引用现有 VNet 时的子网名称。

默认值：`docker-machine`

### 子网前缀

创建 CIDR 格式的新 VNet 时要使用的子网 IP 地址前缀。

默认值：`192.168.0.0/16`

### 虚拟网络

要使用或创建的[虚拟网络](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)（如果不存在）。格式为 `[resourcegroup:]name`。

### 公共 IP 选项

#### 没有公共 IP

不要分配公共 IP 地址。

#### 静态公共 IP

分配静态公共 IP 地址。

### 使用私有 IP

使用静态私有 IP 地址。

### 私有 IP 地址

配置要使用的静态私有 IP 地址。

### 网络安全组

要使用的[网络安全组（NSG）](https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)。使用此模板的所有节点都将使用配置的网络安全组。如果没有配置网络安全组，则为每个节点创建一个新的网络安全组。

### DNS 标签

公共 IP 地址的唯一 DNS 名称标签。

### 储存类型

用于 VM 的[存储账号](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)类型。可选项包括 Standard LRS、Standard ZRS、Standard GRS、Standard RAGRS 和 Premium LRS。

### 使用托管磁盘

[Azure 托管磁盘](https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview)是由 Azure 管理并与 Azure Virtual Machines 一起使用的块级存储卷。托管磁盘旨在实现 99.999% 的高可用性。托管磁盘通过提供三个数据副本来实现高可用性和高持续性。

### 托管磁盘大小

每个节点的磁盘大小（以 GB 为单位）。

### SSH 用户名

用于 SSH 连接到节点的用户名。

### 开放端口

打开指定端口上的入站流量。如果你使用现有的网络安全组，将忽略开放端口。

默认值：`2379/tcp, 2380/tcp, 6443/tcp, 9796/tcp, 10250/tcp, 10251/tcp, 10252/tcp, 10256/tcp` 和 `8472/udp, 4789/udp`