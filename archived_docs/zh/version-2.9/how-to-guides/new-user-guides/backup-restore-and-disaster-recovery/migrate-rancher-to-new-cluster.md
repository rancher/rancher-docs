---
title: 将 Rancher 迁移到新集群
---

如果你要将 Rancher 迁移到一个新的 Kubernetes 集群，先不要在新集群上安装 Rancher。这是因为如果将 Rancher 还原到已安装 Rancher 的新集群，可能会导致问题。

### 先决条件

以下说明假设你已经完成[备份创建](back-up-rancher.md)，并且已经安装了用于部署 Rancher 的新 Kubernetes 集群。

:::caution

你需要使用与第一个集群中设置的 Server URL 相同的主机名。否则，下游集群会在 UI 的管理页面显示为不可用，并且你不能点击集群内或集群的 **Explore** 按钮。

:::

Rancher 必须是 2.5.0 或更高版本。

Rancher 可以安装到任意 Kubernetes 集群上，包括托管的 Kubernetes 集群（如 Amazon EKS 集群）。如需获取安装 Kubernetes 的帮助，请参见 Kubernetes 发行版的文档。你也可以使用以下 Rancher 的 Kubernetes 发行版：

- [RKE Kubernetes 安装文档](https://rancher.com/docs/rke/latest/en/installation/)
- [K3s Kubernetes 安装文档](https://rancher.com/docs/k3s/latest/en/installation/)

### 1. 安装 rancher-backup Helm Chart
安装 [rancher-backup chart](https://github.com/rancher/backup-restore-operator/tags)，请使用 2.x.x 主要版本内的版本：

1. 添加 helm 仓库：

   ```bash
   helm repo add rancher-charts https://charts.rancher.io
   helm repo update
   ```

1. 使用 2.x.x rancher-backup 版本设置 `CHART_VERSION` 变量：
   ```bash
   helm search repo --versions rancher-charts/rancher-backup
   CHART_VERSION=<2.x.x>
   ```

1. 安装 Chart：
   ```bash
   helm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace --version $CHART_VERSION
   helm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system --version $CHART_VERSION
   ```

   :::note

   以上假设你的环境具有到 Docker Hub 的出站连接。

   对于**离线环境**，在安装 rancher-backup Helm Chart 时，使用下面的 Helm 值从你的私有镜像仓库中拉取 `backup-restore-operator` 和 `kubectl` 镜像。

   ```bash
   --set image.repository <registry>/rancher/backup-restore-operator --set global.kubectl.repository=<registry>/rancher/kubectl
   ```

   :::

### 2. 使用 Restore 自定义资源来还原备份

:::note 重要提示：

Kubernetes v1.22 是 Rancher 2.6.3 的实验功能，不支持使用 apiVersion `apiextensions.k8s.io/v1beta1`来还原包含 CRD 文件的备份文件。在 v1.22 中，`rancher-backup` 应用的默认 `resourceSet` 只收集使用 `apiextensions.k8s.io/v1` 的 CRD。你可以通过下面两种方法解决这个问题。

1. 使用 apiVersion v1 来更新默认 `resourceSet`，从而收集 CRD。
1. 使用 `apiextensions.k8s.io/v1` 作为替代，来更新默认 `resourceSet` 和客户端，从而在内部使用新的 API。

   :::note

   在为 v1.22 版本制作或恢复备份时，Rancher 版本和本地集群的 Kubernetes 版本应该是一样的。由于集群中支持的 apiVersion 和备份文件中的 apiVersion 可能不同，因此在还原备份时请考虑 Kubernetes 的版本。

   :::

:::

1. 在使用 S3 对象存储作为需要使用凭证的还原的备份源时，请在此集群中创建一个 `Secret` 对象以添加 S3 凭证。Secret 数据必须有两个密钥，分别是包含 S3 凭证的 `accessKey` 和 `secretKey`。

   你可以在任何命名空间中创建 Secret，本示例使用 default 命名空间。

   ```bash
   kubectl create secret generic s3-creds \
     --from-literal=accessKey=<access key> \
     --from-literal=secretKey=<secret key>
   ```

   :::note

   在上面的命令中添加你的 Access Key 和 Secret Key 作为 `accessKey` 和 `secretKey` 的值。

   :::

1. 创建一个 `Restore` 对象：

   在迁移期间，`prune` 必须设置为 `false`。请参见下面的示例：

   ```yaml
   # restore-migration.yaml
   apiVersion: resources.cattle.io/v1
   kind: Restore
   metadata:
     name: restore-migration
   spec:
     backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz
     // highlight-next-line
     prune: false
     // highlight-next-line
     encryptionConfigSecretName: encryptionconfig
     storageLocation:
       s3:
         credentialSecretName: s3-creds
         credentialSecretNamespace: default
         bucketName: backup-test
         folder: ecm1
         region: us-west-2
         endpoint: s3.us-west-2.amazonaws.com
   ```

   :::note 重要提示：

   只有在创建备份时启用了加密功能时，才需要设置 `encryptionConfigSecretName` 字段。

   如果适用，请提供包含加密配置文件的 `Secret` 对象的名称。如果你只有加密配置文件，但没有在此集群中创建 Secret，请按照以下步骤创建 Secret。

   1. 创建[加密配置文件](../../../reference-guides/backup-restore-configuration/backup-configuration.md#加密)
   1. 下面的命令使用一个名为 `encryption-provider-config.yaml` 的文件，使用了 `--from-file` 标志。将 `EncryptionConfiguration` 保存到名为 `encryption-provider-config.yaml` 的文件中之后，运行以下命令：

      ```bash
      kubectl create secret generic encryptionconfig \
        --from-file=./encryption-provider-config.yaml \
        -n cattle-resources-system
      ```

   :::

1. 应用清单，并监控 Restore 的状态：
   1. 应用 `Restore` 对象资源：

      ```bash
      kubectl apply -f restore-migration.yaml
      ```

   1. 观察 Restore 的状态：
      ```bash
      kubectl get restore
      ```

   1. 查看恢复日志：
      ```bash
      kubectl logs -n cattle-resources-system --tail 100 -f -l app.kubernetes.io/instance=rancher-backup
      ```

   1. Restore 资源的状态变成 `Completed` 后，你可以继续安装 cert-manager 和 Rancher。

### 3. 安装 cert-manager

按照在 Kubernetes 上安装 cert-manager的步骤[安装 cert-manager](../../../pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md#4-安装-cert-manager)。

### 4. 使用 Helm 安装 Rancher

使用与第一个集群上使用的相同版本的 Helm 来安装 Rancher：

```bash
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=<same hostname as the server URL from the first Rancher server> \
  --version x.y.z
```

:::note

如果原始的 Rancher 环境正在运行，你可以使用 kubeconfig 为原始环境收集当前值：

```bash
helm get values rancher -n cattle-system -o yaml > rancher-values.yaml
```

你可以使用 `rancher-values.yaml` 文件来复用这些值。确保将 kubeconfig 切换到新的 Rancher 环境。

```bash
helm install rancher rancher-latest/rancher -n cattle-system -f rancher-values.yaml --version x.y.z
```

:::