---
title: 还原 Rancher
---

本页概述了如何使用 Rancher 执行恢复。

:::note 重要提示：

* 请按照此页面上的说明在已备份的同一集群上还原 Rancher。要把 Rancher 迁移到新集群，请参照步骤[迁移 Rancher](migrate-rancher-to-new-cluster.md)。
* 在使用相同设置还原 Rancher 时，operator 将在还原开始时缩减 Rancher deployment，还原完成后又会扩展 deployment。因此，Rancher 在还原期间将不可用。
* 如果你需要在升级后将 Rancher 还原到先前版本，请参见[回滚](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md)。

:::

### 使用 Rancher 2.6.4+ 进行回滚的其他步骤

在 Rancher v2.6.4 中，cluster-api 模块已从 v0.4.4 升级到 v1.0.2，其中 CAPI CRD 的 apiVersion 已从 `cluster.x-k8s.io/v1alpha4` 升级到 `cluster.x-k8s.io/v1beta1`。由于需要回滚的 CRD 在 v1beta1 中不再可用，因此从 Rancher v2.6.4 回滚到任何 Rancher v2.6.x 先前版本都会失败。

为避免这种情况，请在还原或回滚**之前**先运行 Rancher 资源清理脚本。因此，我们创建了两个脚本来帮助你进行操作，一个用于清理集群（`cleanup.sh`)，一个用于检查集群中与 Rancher 相关的资源 (`verify.sh`）。有关清理脚本的详细信息，请参见 [rancher/rancher-cleanup repo](https://github.com/rancher/rancher-cleanup)。

:::caution

Rancher 将在运行 `cleanup` 脚本时关闭，因为它会删除 Rancher 创建的资源。

:::

额外准备：

1. 按照[说明](https://github.com/rancher/rancher-cleanup/blob/main/README.md)运行脚本。
1. 按照[说明](https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher/)在现有集群上安装 rancher-backup Helm Chart 并恢复之前的状态。
   1. 省略步骤 3。
   1. 执行到第 4 步时，在要回滚的本地集群上安装所需的 Rancher 2.6.x 版本。

### 创建 Restore 自定义资源

还原是通过创建 Restore 自定义资源实现的。

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到 `local` 集群并单击 **Explore**。Rancher Server 运行在 `local` 集群中。
1. 在左侧导航栏中，单击 **Rancher 备份 > 还原**。
1. 单击**创建**。
1. 使用表单或 YAML 创建 Restore。如需获取使用表单创建 Restore 资源的更多信息，请参见[配置参考](../../../reference-guides/backup-restore-configuration/restore-configuration.md)和[示例](../../../reference-guides/backup-restore-configuration/examples.md)。
1. 要使用 YAML 编辑器，单击**创建 > 使用 YAML 文件创建**。输入 Restore YAML。

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

**结果**：rancher-operator 在还原过程中将 Rancher deployment 缩容，并在还原完成后将它重新扩容。资源还原顺序如下：

1. 自定义资源定义（CRD）
2. 集群范围资源
3. 命名空间资源

### 日志

如需查看还原的处理方式，请检查 Operator 的日志。查看日志的命令如下：

```
kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f
```

### 清理

如果你使用 kubectl 创建了 Restore 资源，请删除该资源以防止与未来的还原发生命名冲突。

### 已知问题
在某些情况下，恢复备份后，Rancher 日志会显示类似以下的错误：
```
2021/10/05 21:30:45 [ERROR] error syncing 'c-89d82/m-4067aa68dd78': handler rke-worker-upgrader: clusters.management.cattle.io "c-89d82" not found, requeuing
```
发生这种情况的原因是，刚刚还原的某个资源有 finalizer，但相关的资源已经被删除，导致处理程序无法找到该资源。

为了消除这些错误，你需要找到并删除导致错误的资源。详情请参见[此处](https://github.com/rancher/rancher/issues/35050#issuecomment-937968556)。
