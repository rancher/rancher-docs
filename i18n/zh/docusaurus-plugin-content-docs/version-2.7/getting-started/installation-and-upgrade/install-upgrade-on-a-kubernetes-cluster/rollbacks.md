---
title: 回滚
---

## 使用 Rancher 2.6.4+ 进行回滚的其他步骤

Rancher v2.6.4 将 cluster-api 模块从 v0.4.4 升级到 v1.0.2。反过来，cluster-api 的 v1.0.2 版本将集群 API 的自定义资源定义 (CRD) 从 `cluster.x-k8s.io/v1alpha4` 升级到 `cluster.x-k8s.io/v1beta1`。当你尝试将 Rancher v2.6.4 回滚到以前版本的 Rancher v2.6.x 时，CRD 升级到 v1beta1 会导致回滚失败。这是因为使用旧 apiVersion (v1alpha4) 的 CRD 与 v1beta1 不兼容。

要避免回滚失败，你需要在尝试恢复操作或回滚**之前**运行以下 Rancher 脚本：

* `verify.sh`：检查集群中是否有任何与 Rancher 相关的资源。
* `cleanup.sh`：清理集群。

有关详细信息和源代码，请参阅 [rancher/rancher-cleanup repo](https://github.com/rancher/rancher-cleanup)。

:::caution

`cleanup.sh` 运行的时候会有停机时间，这是因为脚本会删除 Rancher 创建的资源。

:::

### 从 v2.6.4+ 回滚到较低版本的 v2.6.x

1. 按照[说明](https://github.com/rancher/rancher-cleanup/blob/main/README.md)运行脚本。
1. 按照[说明](https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher/)在现有集群上安装 rancher-backup Helm Chart 并恢复之前的状态。
   1. 省略步骤 3。
   1. 执行到步骤 4 时，在要回滚到的 local 集群上安装 Rancher 2.6.x 版本。

## 回滚到 Rancher 2.5.0+

要回滚到 Rancher 2.5.0+，使用 **Rancher 备份**应用并通过备份来恢复 Rancher。

回滚后，Rancher 必须以较低/较早的版本启动。

还原是通过创建 Restore 自定义资源实现的。

:::note 重要提示：

* 请按照此页面上的说明在已备份的同一集群上还原 Rancher。要把 Rancher 迁移到新集群，请参照步骤[迁移 Rancher](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md)。

* 在使用相同设置恢复 Rancher 时，Rancher deployment 在恢复开始前被手动缩减，然后 Operator 将在恢复完成后将其缩回。因此，在恢复完成之前，Rancher 和 UI 都将不可用。如果 UI 不可用时，你可使用 `kubectl create -f restore.yaml`YAML 恢复文件来使用初始的集群 kubeconfig。

:::

### 将 Rancher Deployment 规模扩展到 0

1. 在左上角，点击 **☰ > local**。
1. 在左侧主菜单中，点击**工作负载**。
1. 在**工作负载**下，点击 **Deployments**。
1. 点击上方下拉菜单以调整筛选条件。选择 **cattle-system** 作为筛选条件。
1. 找到 `rancher` deployment 的行，并点击**⋮ > 编辑配置**。
1. 将**副本数量**改为 0。
1. 滚动到底部并点击**保存**。

### 创建 Restore 自定义资源

1. 点击 **☰ > 集群管理**。
1. 找到你的本地集群，并点击 **Explore**。
1. 在左侧导航栏中，点击 **Rancher 备份 > 还原**。
   :::note

   如果 Rancher Backups 应用不可见，你需要到 **Apps** 的 Charts 页面中安装应用。详情请参见[此处](../../../pages-for-subheaders/helm-charts-in-rancher.md#charts)。

   :::

1. 单击**创建**。
1. 使用表单或 YAML 创建 Restore。如需获取使用表单创建 Restore 资源的更多信息，请参见[配置参考](../../../reference-guides/backup-restore-configuration/restore-configuration.md)和[示例](../../../reference-guides/backup-restore-configuration/examples.md)。
1. 如需使用 YAML 编辑器，点击**创建 > 使用 YAML 文件创建**。然后输入 Restore YAML。以下是 Restore 自定义资源示例：

   ```yaml
   apiVersion: resources.cattle.io/v1
   kind: Restore
   metadata:
     name: restore-migration
   spec:
     backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz
     encryptionConfigSecretName: encryptionconfig
     storageLocation:
       s3:
         credentialSecretName: s3-creds
         credentialSecretNamespace: default
         bucketName: rancher-backups
         folder: rancher
         region: us-west-2
         endpoint: s3.us-west-2.amazonaws.com
   ```
   如需获得配置 Restore 的帮助，请参见[配置参考](../../../reference-guides/backup-restore-configuration/restore-configuration.md)和[示例](../../../reference-guides/backup-restore-configuration/examples.md)。

1. 单击**创建**。

**结果**：已创建备份文件并更新到目标存储位置。资源还原顺序如下：

1. 自定义资源定义（CRD）
2. 集群范围资源
3. 命名空间资源

如需查看还原的处理方式，请检查 Operator 的日志。按照如下步骤获取日志：

```yaml
kubectl get pods -n cattle-resources-system
kubectl logs -n cattle-resources-system -f
```

### 回滚到上一个 Rancher 版本

你可以使用 Helm CLI 回滚 Rancher。要回滚到上一个版本：

```yaml
helm rollback rancher -n cattle-system
```

如果你不是想回滚到上一个版本，你也可以指定回滚的版本。查看部署历史记录：

```yaml
helm history rancher -n cattle-system
```

确定目标版本后，执行回滚。此示例回滚到版本 `3`：

```yaml
helm rollback rancher 3 -n cattle-system
```

## 回滚到 Rancher 2.2-2.4

要回滚到 2.5 之前的 Rancher 版本，参考此处的步骤[恢复备份 — Kubernetes 安装](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md)。如果恢复 Rancher Server 的集群的某个快照，Rancher 的版本以及状态均会恢复回到快照时的版本和状态。

有关回滚 Docker 安装的 Rancher，请参见[本页](../other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher.md)。

:::note

托管集群对其状态具有权威性。因此，恢复 Rancher Server 不会恢复快照后对托管集群进行的工作负载部署或更改。

:::

## 回滚到 Rancher 2.0-2.1

我们不再支持回滚到 Rancher 2.0-2.1。回滚到这些版本的说明保留在[此处](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1.md)，仅用于无法升级到 v2.2 的情况。
