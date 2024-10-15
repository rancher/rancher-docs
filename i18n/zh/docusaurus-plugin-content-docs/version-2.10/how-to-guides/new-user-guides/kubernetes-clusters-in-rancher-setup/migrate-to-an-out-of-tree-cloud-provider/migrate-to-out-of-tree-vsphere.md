---
title: 将 vSphere 从树内迁移到树外
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere"/>
</head>

Kubernetes 不再在树内维护云提供商。vSphere 有一个树外云提供商，可以通过安装 vSphere 云提供商和云存储插件来使用。

本页面介绍如何从树内 vSphere 云提供商迁移到树外，并在迁移后管理现有虚拟机。

它遵循官方 [vSphere 迁移文档](https://vsphere-csi-driver.sigs.k8s.io/features/vsphere_csi_migration.html)中提供的步骤，并提供在 Rancher 中执行的步骤。

## Cloud-config 格式限制

由于 vSphere Cloud Storage Interface (CSI) 中的一个现有错误，使用以下 cloud-config 格式配置的现有卷将无法迁移。

如果 cloud-config 中的数据存储和资源池路径采用这种格式，vsphere CSI 驱动程序将无法识别它：

```yaml
default-datastore: </datacenter>/datastore/<default-datastore-name>
resourcepool-path: "</datacenter>/host/<cluster-name>/Resources/<resource-pool-name>"
```

使用树内提供商以下列格式配置的卷将正确迁移：

```yaml
default-datastore: <default-datastore-name>
resourcepool-path: "<cluster-name>/Resources/<resource-pool-name>"
```

上游 bug: https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628

Rancher 问题跟踪此 bug: https://github.com/rancher/rancher/issues/31105

## 前提条件

- vSphere CSI 迁移需要 vSphere 7.0u1。为了能够管理现有树内 vSphere 卷，请将 vSphere 升级到 7.0u1。
- Kubernetes 版本必须为 1.19 或更高。

## 迁移

### 1. 安装 CPI 插件

安装 CPI 之前，我们需要用 `node.cloudprovider.kubernetes.io/uninitialized=true:NoSchedule` 标记所有节点。

可以通过运行以下命令来完成：

```
curl -O https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh
```

或:

```
wget https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh
chmod +x taints.sh
./taints.sh <path to kubeconfig if running the command outside the cluster>
```

运行脚本并标记所有节点后，启动 Helm vSphere CPI Chart。

1. 点击 **☰ > Cluster Management**.
1. 转到将要安装 vSphere CPI Chart 的集群，然后点击 **Explore**.
1. 点击 **Apps > Charts**.
1. 点击 **vSphere CPI**.
1. 点击 **Install**.
1. 填写所需的 vCenter 详细信息，然后单击 **Install**.

vSphere CPI 会使用 ProviderID 初始化所有节点，这是 vSphere CSI 驱动程序所需要的。

使用以下命令检查是否用 ProviderID 初始化了所有节点：

```
kubectl describe nodes | grep "ProviderID"
```

### 2. 安装 CSI 驱动程序

1. 点击 **☰ > Cluster Management**.
1. 转到将要安装 vSphere CSI Chart 的集群，点击 **Explore**.
1. 点击 **Apps > Charts**.
1. 点击 **vSphere CSI**.
1. 点击 **Install**.
1. 填写所需的 vCenter 详细信息，然后单击 **Install**.
1. 选中 **Customize Helm options before install**，然后单击 **Next**.
1. 在 **Features** 选项卡上， 选中 **Enable CSI Migration**.
1. （可选）转到 **Storage** 选项卡设置数据存储。此 Chart 会创建一个以 `csi.vsphere.vmware.com` 作为供应商的 StorageClass。在创建此 StorageClass 时，您可以提供用于 CSI 卷配置的数据存储的 URL。数据存储 URL 可在 vSphere 客户端中通过选择数据存储并转到摘要选项卡找到。填写 StorageClass 的详细信息。
1. 点击 **Install**.

### 3. 编辑集群以启用 CSI 迁移功能标志

1. 编辑集群时，如果 Kubernetes 版本低于 1.19，请从 **Kubernetes Version** 下拉菜单中选择 1.19 或更高版本。
2. 要启用功能标志，请单击 "Edit as YAML", 然后在 kube-controller 和 kubelet 下添加以下内容:

   ```yaml
   extra_args:
     feature-gates: "CSIMigration=true,CSIMigrationvSphere=true"
   ```

### 4. 清空工作节点

在升级过程中，必须先清空工作节点，然后再更改kubelet和kube-controller-manager参数。

1. 点击 **☰ > Cluster Management**。
1. 转到要清空工作节点的集群，点击 **⋮ > Edit Config**。
1. 在 **Advanced Options** 部分，将 **Maximum Worker Nodes Unavailable** 字段设为 1。
1. 要在升级期间清空节点，请选择 **Drain Nodes > Yes**.
1. 将 **Force** 和 **Delete Local Data** 设置为 **true**.
1. 点击 **Save** 升级集群。
