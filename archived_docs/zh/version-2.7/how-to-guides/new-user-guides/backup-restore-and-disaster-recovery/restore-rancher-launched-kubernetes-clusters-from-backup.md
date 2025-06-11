---
title: 使用备份恢复集群
---

你可以轻松备份和恢复 [Rancher 启动的 Kubernetes 集群](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md)的 etcd。etcd 数据库的快照会保存在 etcd 节点或 S3 兼容目标上。配置 S3 的好处是，如果所有 etcd 节点都丢失了，你的快照会保存到远端并能用于恢复集群。

Rancher 建议启用 [etcd 定期快照的功能](back-up-rancher-launched-kubernetes-clusters.md#配置定期快照)，但你也可以轻松创建[一次性快照](back-up-rancher-launched-kubernetes-clusters.md#单次快照)。Rancher 允许使用[保存的快照](#使用快照恢复集群)进行恢复。如果你没有任何快照，你仍然可以[恢复 etcd](#在没有快照的情况下恢复-etcdrke)。

集群也可以恢复到之前的 Kubernetes 版本和集群配置。

## 查看可用快照

Rancher UI 中提供了集群所有可用快照的列表：

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面中，转到要查看快照的集群并点击集群名称。
1. 单击**快照**选项卡。列出的快照包括创建时间的时间戳。

## 使用快照恢复集群

如果你的 Kubernetes 集群已损坏，你可以使用快照来恢复集群。

快照由 etcd 中的集群数据、Kubernetes 版本和 `cluster.yml` 中的集群配置组成。有了这些组件，你可以在使用快照恢复集群时选择：

- **仅恢复 etcd 内容**：类似于在 Rancher v2.4.0 之前版本中的使用快照恢复。
- **恢复 etcd 和 Kubernetes 版本**：如果 Kubernetes 升级导致集群失败，并且你没有更改任何集群配置，则应使用此选项。
- **恢复 etcd、Kubernetes 版本和集群配置**：如果你在升级时同时更改了 Kubernetes 版本和集群配置，则应使用此选项。

回滚到之前的 Kubernetes 版本时，[升级策略选项](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md#配置升级策略)会被忽略。在恢复到旧 Kubernetes 版本之前，Worker 节点不会被封锁或清空，因此可以更快地将不健康的集群恢复到健康状态。

:::note 先决条件：

要恢复 S3 中的快照，需要将集群配置为[在 S3 上创建定期快照](back-up-rancher-launched-kubernetes-clusters.md#配置定期快照)。

:::

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面中，转到要查看快照的集群并点击集群名称。
1. 单击**快照**选项卡来查看已保存快照的列表。
1. 转到要恢复的快照，然后单击 **⋮ > 还原**。
1. 选择一个**还原类型**。
1. 点击**还原**。

**结果**：集群将进入 `updating` 状态，然后将开始使用快照恢复 `etcd` 节点。集群会在返回到 `active` 状态后被恢复。

## Control Plane/etcd 完全不可用时使用快照还原集群

在灾难恢复场景中，下游集群中 Rancher 管理的 Control Plane 和 etcd 节点可能不再可用或运行。你可以通过再次添加 Control Plane 和 etcd 节点来重建集群，然后使用可用快照来进行还原。

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

请按照 [SUSE 知识库](https://www.suse.com/support/kb/doc/?id=000020695)中描述的流程进行操作。

</TabItem>
<TabItem value="RKE2/K3s">

如果集群完全故障，则必须从集群中删除所有 etcd 节点和机器，然后才能添加新的 etcd 节点来进行还原。

:::note

由于[已知问题](https://github.com/rancher/rancher/issues/41080)，此过程需要 Rancher v2.7.5 或更高版本。

:::

:::note

如果你使用[本地快照](./back-up-rancher-launched-kubernetes-clusters.md#本地备份目标)，那么请**务必**从要删除的 etcd 节点上的 `/var/lib/rancher/<k3s/rke2>/server/db/snapshots/` 文件夹中备份要还原的快照。你可以将快照复制到 `/var/lib/rancher/<k3s/rke2>/server/db/snapshots/` 文件夹中的新节点上。此外，如果使用本地快照并还原到新节点，目前还无法通过 UI 进行还原。

:::

1. 从集群中删除所有 etcd 节点。

   1. 在左上角，单击 **☰ > 集群管理**。
   1. 在**集群**页面中，转到要删除节点的集群。
   1. 在**主机**选项卡中，找到要删除的每个节点并单击 **⋮ > 删除**。开始时，节点会挂在 `deleting` 状态，所有 etcd 节点都被删除后，它们将被一起删除。这是因为 Rancher 发现所有 etcd 节点都在删除，并开始 "短路" etcd 安全删除逻辑。

1. 删除所有 etcd 节点后，添加要用于还原的新 etcd 节点。

   - 对于自定义集群，请转到**注册**选项卡，然后在节点上复制并运行注册命令。如果该节点之前已在集群中使用过，请先[清理该节点](../manage-clusters/clean-cluster-nodes.md#清理节点)。
   - 对于主机驱动集群，则会自动配置新节点。

   此时，Rancher 会提示你需要使用 etcd 快照进行还原。

1. 使用 etcd 快照还原。

   - 对于 S3 快照，使用 UI 进行还原。
      1. 单击**快照**选项卡来查看已保存快照的列表。
      1. 转到要恢复的快照，然后单击 **⋮ > 还原**。
      1. 选择一个**还原类型**。
      1. 点击**还原**。
   - 对于本地快照，使用 UI 进行还原**不**可用。
      1. 单击右上角的 **⋮> 编辑 YAML**。
      1. 将 `spec.cluster.rkeConfig.etcdSnapshotRestore.name` 定义为 `/var/lib/rancher/<k3s/rke2>/server/db/snapshots/` 中磁盘上快照的文件名。

1. 还原成功后，你可以将 etcd 节点扩展至所需的冗余。

</TabItem>
</Tabs>

## 在没有快照的情况下恢复 etcd（RKE）

如果 etcd 节点组失去了仲裁（quorum），由于没有操作（例如部署工作负载）可以在 Kubernetes 集群中执行，Kubernetes 集群将报告失败。集群需要有三个 etcd 节点以防止仲裁丢失。如果你想恢复你的 etcd 节点集，请按照以下说明操作：

1. 通过删除所有其他 etcd 节点，从而仅在集群中保留一个 etcd 节点。

2. 在剩余的单个 etcd 节点上，运行以下命令：

   ```bash
   docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike etcd
   ```

   此命令会输出 etcd 要运行的命令，请保存此命令以备后用。

3. 停止正在运行的 `etcd` 容器并将其重命名为 `etcd-old`。

   ```bash
   docker stop etcd
   docker rename etcd etcd-old
   ```

4. 修改步骤 2 中获取保存的命令：

   - 如果你最初有超过 1 个 etcd 节点，则将 `--initial-cluster` 更改为仅包含剩余的单个节点。
   - 将 `--force-new-cluster` 添加到命令的末尾。

5. 运行修改后的命令。

6. 在单个节点启动并运行后，Rancher 建议向你的集群添加额外的 etcd 节点。如果你有一个[自定义集群](../../../pages-for-subheaders/use-existing-nodes.md)，并且想要复用旧节点，则需要先[清理节点](../manage-clusters/clean-cluster-nodes.md)，然后再尝试将它们重新添加到集群中。
