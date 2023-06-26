---
title: 使用非默认支持的存储驱动
---

此功能允许你使用不是默认启用的存储提供商和卷插件。

如需启用或禁用此功能，请参见[启用实验功能主页](../../../pages-for-subheaders/enable-experimental-features.md)中的说明。

| 环境变量键 | 默认值 | 描述 |
---|---|---
| `unsupported-storage-drivers` | `false` | 启用非默认启用的存储提供商和卷插件。 |

### 默认启用的持久卷插件
下表描述了默认启用的存储类型对应的持久卷插件。启用此功能开关时，不在此列表中的任何持久卷插件均被视为实验功能，且不受支持：

| 名称 | 插件 |
--------|----------
| Amazon EBS Disk | `aws-ebs` |
| AzureFile | `azure-file` |
| AzureDisk | `azure-disk` |
| Google Persistent Disk | `gce-pd` |
| Longhorn | `flex-volume-longhorn` |
| VMware vSphere Volume | `vsphere-volume` |
| 本地 | `local` |
| 网络文件系统 | `nfs` |
| hostPath | `host-path` |

### 默认启用的 StorageClass
下表描述了默认启用的 StorageClass 对应的持久卷插件。启用此功能开关时，不在此列表中的任何持久卷插件均被视为实验功能，且不受支持：

| 名称 | 插件 |
--------|--------
| Amazon EBS Disk | `aws-ebs` |
| AzureFile | `azure-file` |
| AzureDisk | `azure-disk` |
| Google Persistent Disk | `gce-pd` |
| Longhorn | `flex-volume-longhorn` |
| VMware vSphere Volume | `vsphere-volume` |
| 本地 | `local` |