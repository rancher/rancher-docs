---
title: 备份存储位置配置
---

配置一个用于保存所有备份的默认存储位置。你可以选择对每个备份进行覆盖，但仅限于使用 S3 对象存储。

在 operator 级别只能配置一个存储位置。


## 存储位置配置

### 无默认存储位置

你可以选择不配置 operator 级别的存储位置。如果选择此选项，你必须配置一个与 S3 兼容的对象存储作为每个备份的存储位置。

### S3 兼容的对象存储

| 参数 | 描述 |
| -------------- | -------------- |
| 凭证密文 | 从 Rancher 的密文中选择 S3 的凭证。[示例](examples.md#在-s3-中存储备份的凭证密文示例)。 |
| 存储桶名称 | 存储备份的 [S3 存储桶](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html)的名称。默认值：`rancherbackups`。 |
| 区域 | S3 存储桶所在的 [AWS 区域](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)。 |
| 文件夹 | 存储备份的 [S3 存储桶中的文件夹](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-folders.html)。如果此字段留空，则默认将备份文件存储在 S3 存储桶的根文件夹中。 |
| 端点 | [S3 端点](https://docs.aws.amazon.com/general/latest/gr/s3.html)，例如 `s3.us-west-2.amazonaws.com`。 |
| Endpoint CA | 用于 S3 端点的 CA 证书。默认值：base64 编码的 CA 证书。 |
| insecureTLSSkipVerify | 如果你不使用 TLS，则设置为 `true`。 |

### 使用现有的 StorageClass

如果你通过选择 StorageClass 选项来安装 `rancher-backup` Chart，将会创建一个持久卷说明（Persistent Volume Claim，PVC），而且 Kubernetes 会动态配置一个持久卷（Persistent Volume，PV），所有备份都会默认保存到该持久卷中。

关于创建存储类的信息，请参见[本章节](../../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage.md)。

:::note 重要提示：

强烈建议使用回收策略为 "Retain" 的 StorageClass。否则，如果 `rancher-backup` Chart 创建的 PVC 在应用升级期间或意外被删除后，PV 也会被删除，也就是说所有保存在其中的备份都会被删除。
如果没有这样的 StorageClass 可用，在配置 PV 后，请确保先将其回收策略设置为 "Retain"，然后再存储备份。

:::

### 使用现有的持久卷

选择一个用于存储备份的现有持久卷。有关在 Rancher 中创建 PersistentVolumes 的更多信息，请参见[本节](../../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md#2-添加一个引用持久存储的-persistentvolume)。

:::note 重要提示：

强烈建议使用回收策略为 "Retain" 的 Persistent Volume。否则，如果 `rancher-backup` Chart 创建的 PVC 在应用升级期间或意外被删除后，PV 也会被删除，也就是说所有保存在其中的备份都会被删除。

:::

## rancher-backup Helm Chart 的示例 values.yaml

使用 Helm CLI 时，可用于配置 `rancher-backup` operator 的 `values.yaml` 可以在 [backup-restore-operator](https://github.com/rancher/backup-restore-operator/blob/master/charts/rancher-backup/values.yaml) 仓库中找到。

有关 `values.yaml` 文件和在安装时配置 Helm Charts 的更多信息，请参见 [Helm 文档](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing)。

