---
title: 备份和灾难恢复
keywords: [rancher 备份还原, rancher 备份与恢复, 备份恢复 rancher, rancher 备份与恢复 rancher]
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery"/>
</head>

在本节中，你将学习如何创建 Rancher 的备份，如何从备份中恢复 Rancher，以及如何将 Rancher 迁移到新的 Kubernetes 集群。

`rancher-backup` operator 可以用来备份和恢复任何 Kubernetes 集群上的 Rancher。这个应用是一个 Helm Chart，可以通过 Rancher 的 **Apps** 页面或使用 Helm CLI 部署。你可以访问[本页面](https://github.com/rancher/charts/tree/release-v2.6/charts/rancher-backup)获取 `rancher-backup` Helm Chart。

backup-restore operator 需要安装在 local 集群上，并且只对 Rancher 应用进行备份。备份和恢复操作仅在本地 Kubernetes 集群中执行。


## 备份和恢复 Docker 安装的 Rancher

对于使用 Docker 安装的 Rancher，请参见[备份](back-up-docker-installed-rancher.md)和[恢复](restore-docker-installed-rancher.md)对 Rancher 进行备份和恢复。

## 备份和恢复原理

`rancher-backup` operator 引入了三个自定义资源，分别是 Backups、Restores 和 ResourceSets。将以下集群范围的自定义资源定义添加到集群中：

- `backups.resources.cattle.io`
- `resourcesets.resources.cattle.io`
- `restores.resources.cattle.io`

ResourceSet 定义了需要备份哪些 Kubernetes 资源。由于备份 Rancher 所需的值是预设的，因此 ResourceSet 无法通过 Rancher UI 进行配置。请不要修改此 ResourceSet。

在创建 Backup 自定义资源时，`rancher-backup` operator 调用 `kube-apiserver` 来获取 Backup 自定义资源引用的 ResourceSet（即预设的 `rancher-resource-set`）资源。

然后，operator 以 .tar.gz 格式创建备份文件，并将其存储在 Backup 资源中配置的位置。

在创建 Restore 自定义资源时，operator 访问 Restore 指定的 tar.gz 备份文件，并从该文件恢复应用。

你可以使用 Rancher UI 或 `kubectl apply` 来创建 Backup 和 Restore 自定义资源。

:::note

请参见[此处](migrate-rancher-to-new-cluster.md#2-使用-restore-自定义资源来还原备份)获取在 Rancher 2.6.3 中将现有备份文件恢复到 v1.22 集群的帮助。

:::

## 安装 rancher-backup operator

你可以使用 Rancher UI 或 Helm CLI 来安装 `rancher-backup` operator。两种安装方法都将 `rancher-backup` Helm Chart 安装在运行 Rancher Server 的 Kubernetes 集群上。它是集群管理员独有的功能，仅适用于 **local** 集群。（*如果你在 Rancher UI 中没有看到 `rancher-backup`，你可能选择了错误的集群。*）

:::note

使用 backup-restore-operator 执行恢复后，Fleet 中会出现一个已知问题：用于 clientSecretName 和 helmSecretName 的密文不包含在 Fleet 的 Git 仓库中。请参见[此处](../../../integrations-in-rancher/fleet/overview.md#故障排除)获得解决方法。

:::

### 使用 Rancher UI 安装 rancher-backup

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到 `local` 集群并单击 **Explore**。
1. 在左侧导航栏中，单击 **Apps > Charts**。
1. 点击 **Rancher 备份**。
1. 单击**安装**。
1. 可选：配置默认存储位置。如需获取帮助，请参见[配置](../../../reference-guides/backup-restore-configuration/storage-configuration.md)。
1. 单击**安装**。

**结果**：`rancher-backup` operator 已安装。

在**集群仪表板**中，你可以看到列在 **Deployments** 下的 `rancher-backup` operator。

如果需要在 Rancher 中配置备份应用，在左侧导航栏中单击 **Rancher 备份**。

### RBAC

只有 Rancher 管理员和本地集群的所有者可以：

* 安装 Chart
* 看到 Backup 和 Restore CRD 的导航链接
* 通过分别创建 Backup CR 和 Restore CR 执行备份和恢复
* 列出目前已执行的备份和恢复操作

## 备份 Rancher

备份是通过创建 Backup 自定义资源实现的。如需查看教程，请参见[本页面](back-up-rancher.md)。

## 还原 Rancher

还原是通过创建 Restore 自定义资源实现的。如需查看教程，请参见[本页面](restore-rancher.md)。

## 将 Rancher 迁移到新集群

你可以按照[这些步骤](migrate-rancher-to-new-cluster.md)执行迁移。

## 默认存储位置配置

配置一个用户保存备份文件的默认存储位置。有多种选项可以配置，例如将与 S3 兼容的对象存储作为单个备份文件的存储后端，或在安装 `backup-restore-operator` Helm Chart 时选择一个现有的 `StorageClass`。你还可以选择在每次备份时覆盖配置的存储位置，但这仅限于使用与 S3 兼容的对象存储或 Minio 对象存储。

如需了解各个选项的配置，请参见[本页面](../../../reference-guides/backup-restore-configuration/storage-configuration.md)。

### 示例 YAML 文件：Rancher Backup Helm Chart

当使用 Helm CLI 安装时，可以使用示例 [values.yaml 文件](../../../reference-guides/backup-restore-configuration/storage-configuration.md#rancher-backup-helm-chart-的示例-valuesyaml) 来配置 `rancher-backup-operator`。
