---
title: Nutanix 节点模板配置
---

## 账号访问

| 参数 | 必填 | 描述 | 默认 |
|:-----------------------------|:--------:|:-----------------------------------------------------------------|:-----
| 管理端点 | ✓ | Prism Central 的主机名/IP 地址 |
| 用户名 | ✓ | Prism Central 用户的用户名 |
| 密码 | ✓ | Prism Central 用户的密码 |
| 允许不安全的通信 |          | 设置为 true 以允许与 Prism Central 进行不安全的 SSL 通信 | False |

## 调度

选择虚拟机要调度到哪个 Nutanix 集群。

| 参数 | 必填 | 描述 |
|:----------|:--------:|:----------------------------------------------------------------------------
| 集群 | ✓ | 部署虚拟机的 Nutanix 集群的名称（区分大小写） |

## 实例选项

在**实例参数**中，配置此模板创建的 VM 的 vCPU 数量、内存和磁盘大小。

| 参数 | 必填 | 描述 | 默认 |
|:---------------------|:--------:|:--------------------------------------------------------------------------------------------|:-------
| CPU |          | 分配给 VM 的 vCPU 数量（核心） | 2 |
| 内存 |          | 分配给 VM 的 RAM 量 (MB) | 2 GB |
| Template Image | ✓ | 要作为虚拟机主磁盘进行克隆的磁盘镜像模板的名称（必须支持 cloud-init） |
| 虚拟机磁盘大小 |          | 虚拟机主磁盘的新大小（以 GiB 为单位） |
| 其他磁盘大小 |          | 要添加到虚拟机的其他磁盘的大小（以 GiB 为单位） |
| 储存容器 |          | 要配置其他磁盘的存储容器 _UUID_ |
| Cloud Config YAML |          | 要提供给虚拟机的 cloud-init（将使用 Rancher root 用户修补） |
| 网络 | ✓ | 要附加到虚拟机的网络的名称 |
| 虚拟机类别 |          | 要应用于虚拟机的类别名称 |

虚拟机支持通过 [Config Drive v2 datasource](https://cloudinit.readthedocs.io/en/latest/reference/datasources/configdrive.html) 来支持 [cloud-init](https://cloudinit.readthedocs.io/en/latest/) 的任何现代 Linux 操作系统。

## 网络

节点模板允许你为虚拟机配置多个网络。在**网络**字段中，你可以单击**添加**，然后在 AOS 中添加任何可用的网络。

## 虚拟机类别

类别用于将实体分组成键值对。通常会根据某些标准为虚拟机分配一个类别。然后，你可以将策略绑定到分配（分组）了特定类别值的实体。

## cloud-init

[Cloud-init](https://cloudinit.readthedocs.io/en/latest/) 允许你在首次启动时应用配置，从而初始化节点。这可能涉及创建用户或授权 SSH 密钥之类的操作。

要使用 cloud-init 初始化，请将使用有效 YAML 语法的 cloud config 粘贴到 **Cloud Config YAML** 字段中。要获取支持的 cloud config 指令的注释示例集，请参阅 [cloud-init 文档](https://cloudinit.readthedocs.io/en/latest/topics/examples.html)。

不建议使用基于 cloud-init 的网络配置，仅支持使用用户数据 `runcmd`，不支持 NoCloud 或其他网络配置数据源。

建议使用 Nutanix IP Address Management（IPAM) 或其他 DHCP 服务。

## 引擎选项

在节点模板的**引擎选项**中，你可以配置容器 daemon。你可能需要指定容器版本或容器镜像仓库 Mirror。

:::note
如果要配置 Red Hat Enterprise Linux (RHEL) 或 CentOS 节点，请将 **Docker Install URL** 字段保留为默认值，或选择 **none**。由于 Docker 已经安装在这些节点上，因此将绕过 Docker 安装检查。

如果没有将 **Docker Install URL** 设置为默认值或 **none**，你可能会看到错误消息：`Error creating machine: RHEL ssh command error: command: sudo -E yum install -y curl err: exit status 1 output: Updating Subscription Management repositories`。
:::