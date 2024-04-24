---
title: Restoring a Cluster from Backup
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"/>
</head>

Etcd backup and recovery for [Rancher launched Kubernetes clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) can be easily performed. Snapshots of the etcd database are taken and saved either locally onto the etcd nodes or to a S3 compatible target. The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster.

Rancher recommends enabling the [ability to set up recurring snapshots of etcd](back-up-rancher-launched-kubernetes-clusters.md#configuring-recurring-snapshots), but [one-time snapshots](back-up-rancher-launched-kubernetes-clusters.md#one-time-snapshots) can easily be taken as well. Rancher allows restore from [saved snapshots](#restoring-a-cluster-from-a-snapshot) or if you don't have any snapshots, you can still [restore etcd](#recovering-etcd-without-a-snapshot-rke).

Clusters can also be restored to a prior Kubernetes version and cluster configuration.

## Viewing Available Snapshots

The list of all available snapshots for the cluster is available.

1. In the upper left corner, click **☰ > Cluster Management**.
1. In the **Clusters** page, go to the cluster where you want to view the snapshots and click the name of the cluster.
1. Click the **Snapshots** tab. The listed snapshots include a timestamp of when they were created.

## Restoring a Cluster from a Snapshot

If your Kubernetes cluster is broken, you can restore the cluster from a snapshot.

Snapshots are composed of the cluster data in etcd, the Kubernetes version, and the cluster configuration in the `cluster.yml.` These components allow you to select from the following options when restoring a cluster from a snapshot:

- **Restore just the etcd contents:** This restore is similar to restoring to snapshots in Rancher before v2.4.0.
- **Restore etcd and Kubernetes version:** This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes.
- **Restore etcd, Kubernetes versions and cluster configuration:** This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.

When rolling back to a prior Kubernetes version, the [upgrade strategy options](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md#configuring-the-upgrade-strategy) are ignored. Worker nodes are not cordoned or drained before being reverted to the older Kubernetes version, so that an unhealthy cluster can be more quickly restored to a healthy state.

:::note Prerequisite:

To restore snapshots from S3, the cluster needs to be configured to [take recurring snapshots on S3.](back-up-rancher-launched-kubernetes-clusters.md#configuring-recurring-snapshots)

:::

1. In the upper left corner, click **☰ > Cluster Management**.
1. In the **Clusters** page, go to the cluster where you want to view the snapshots and click the name of the cluster.
1. Click the **Snapshots** tab to view the list of saved snapshots.
1. Go to the snapshot you want to restore and click **⋮ > Restore**.
1. Select a **Restore Type**.
1. Click **Restore**.

**Result:** The cluster will go into `updating` state and the process of restoring the `etcd` nodes from the snapshot will start. The cluster is restored when it returns to an `active` state.

## Restoring a Cluster From a Snapshot When the controlplane/etcd Are Completely Unavailable

In a disaster recovery scenario, the control plane and etcd nodes managed by Rancher in a downstream cluster may no longer be available or functioning. The cluster can be rebuilt by adding control plane and etcd nodes again, followed by restoring from an available snapshot.

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

Follow the procedure described in the [SUSE Knowledgebase](https://www.suse.com/support/kb/doc/?id=000020695).

</TabItem>
<TabItem value="RKE2/K3s">

If you have a complete cluster failure, you must remove all etcd nodes/machines from your cluster before you can add a "new" etcd node for restore.

:::note

Due to a [known issue](https://github.com/rancher/rancher/issues/41080), this procedure requires Rancher v2.7.5 or newer.

:::

:::note

If you are using [local snapshots](./back-up-rancher-launched-kubernetes-clusters.md#local-backup-target), it is **VERY** important that you ensure you back up the corresponding snapshot you want to restore from the `/var/lib/rancher/<k3s/rke2>/server/db/snapshots/` folder on the etcd node you are going to be removing. You can copy the snapshot onto your new node in the `/var/lib/rancher/<k3s/rke2>/server/db/snapshots/` folder. Furthermore, if using local snapshots and restoring to a new node, restoration cannot be done via the UI as of now.

:::

1. Remove all etcd nodes from your cluster.

    1. In the upper left corner, click **☰ > Cluster Management**.
    1. In the **Clusters** page, go to the cluster where you want to remove nodes.
    1. In the **Machines** tab, click **⋮ > Delete** on each node you want to delete. Initially, you will see the nodes hang in a `deleting` state, but once all etcd nodes are deleting, they will be removed together. This is due to the fact that Rancher sees all etcd nodes deleting and proceeds to "short circuit" the etcd safe-removal logic.

1. After all etcd nodes are removed, add a new etcd node that you are planning to restore from. The new node must be assigned the role of `all` (etcd, controlplane, and worker).

    - If the node has previously been used in a cluster, [clean the node](../manage-clusters/clean-cluster-nodes.md#cleaning-up-nodes) first.
    - For custom clusters, go to the **Registration** tab and check the box for `etcd, controlplane, and worker`. Then copy and run the registration command on your node.
    - For node driver clusters, a new node is provisioned automatically.

    At this point, Rancher will indicate that restoration from etcd snapshot is required.

1. Restore from an etcd snapshot.

    :::note
    As the etcd node is a clean node, the path (`/var/lib/rancher/<k3s/rke2>/server/db/snapshots/`) may need to be manually created.
    :::

    - For S3 snapshots, restore using the UI.
      1. Click the **Snapshots** tab to view the list of saved snapshots.
      1. Go to the snapshot you want to restore and click **⋮ > Restore**.
      1. Select a **Restore Type**.
      1. Click **Restore**.
    - For local snapshots, restore using the UI is **not** available.
      1. In the upper right corner, click **⋮ > Edit YAML** to configure the setting `spec.cluster.rkeConfig.etcdSnapshotRestore.name` as the filename of the snapshot on disk in `/var/lib/rancher/<k3s/rke2>/server/db/snapshots/`.
      1. Example YAML that can be added under your `rkeConfig` configuration:

      ```yaml
        ...
        rkeConfig:
            etcdSnapshotRestore:
                name: <string> #Refers to the filename of the associated etcdsnapshot object.
                generation: <int> #Changing the generation initiates a snapshot restore.
                restoreRKEConfig: <string> #Set to either none (or empty string), all, or kubernetesVersion.
        ...
      ```

1. After restoration is successful, you can scale your etcd nodes back up to the desired redundancy.

</TabItem>
</Tabs>

## Recovering etcd without a Snapshot (RKE)

If the group of etcd nodes loses quorum, the Kubernetes cluster will report a failure because no operations, e.g. deploying workloads, can be executed in the Kubernetes cluster. The cluster should have three etcd nodes to prevent a loss of quorum. If you want to recover your set of etcd nodes, follow these instructions:

1. Keep only one etcd node in the cluster by removing all other etcd nodes.

2. On the single remaining etcd node, run the following command:

    ```bash
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike etcd
    ```

    This command outputs the running command for etcd, save this command to use later.

3. Stop the running `etcd` container and rename it to `etcd-old`.

    ```bash
    docker stop etcd
    docker rename etcd etcd-old
    ```

4. Take the saved command from Step 2 and revise it:

    - If you originally had more than 1 etcd node, then you need to change `--initial-cluster` to only contain the node that remains.
    - Add `--force-new-cluster` to the end of the command.

5. Run the revised command.

6. After the single nodes is up and running, Rancher recommends adding additional etcd nodes to your cluster. If you have a [custom cluster](../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md) and you want to reuse an old node, you are required to [clean up the nodes](../manage-clusters/clean-cluster-nodes.md) before attempting to add them back into a cluster.
