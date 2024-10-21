---
title: Backing up a Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"/>
</head>

In the Rancher UI, etcd backup and recovery for [Rancher launched Kubernetes clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) can be easily performed.

Rancher recommends configuring recurrent `etcd` snapshots for all production clusters. Additionally, one-time snapshots can be taken as well.

Snapshots of the etcd database are taken and saved either [locally onto the etcd nodes](#local-backup-target) or to a [S3 compatible target](#s3-backup-target). The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster.

## How Snapshots Work

### Snapshot Components

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

When Rancher creates a snapshot, it includes three components:

- The cluster data in etcd
- The Kubernetes version
- The cluster configuration in the form of the `cluster.yml`

Because the Kubernetes version is now included in the snapshot, it is possible to restore a cluster to a prior Kubernetes version.

</TabItem>
<TabItem value="RKE2/K3s">

Rancher delegates snapshot creation to the downstream Kubernetes engine. When the Kubernetes engine creates a snapshot, it includes three components:

- The cluster data in etcd
- The Kubernetes version
- The cluster configuration

Because the Kubernetes version is included in the snapshot, it is possible to restore a cluster to a prior Kubernetes version while also restoring an etcd snapshot.

</TabItem>
</Tabs>

The multiple components of the snapshot allow you to select from the following options if you need to restore a cluster from a snapshot:

- **Restore just the etcd contents:** This restore is similar to restoring to snapshots in Rancher before v2.4.0.
- **Restore etcd and Kubernetes version:** This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes.
- **Restore etcd, Kubernetes versions and cluster configuration:** This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.

It is always recommended to take a new snapshot before performing any configuration changes or upgrades.


### Generating the Snapshot from etcd Nodes

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

For each etcd node in the cluster, the etcd cluster health is checked. If the node reports that the etcd cluster is healthy, a snapshot is created from it and optionally uploaded to S3.

The snapshot is stored in `/opt/rke/etcd-snapshots`. If the directory is configured on the nodes as a shared mount, it will be overwritten. On S3, the snapshot will always be from the last node that uploads it, as all etcd nodes upload it and the last will remain.

In the case when multiple etcd nodes exist, any created snapshot is created after the cluster has been health checked, so it can be considered a valid snapshot of the data in the etcd cluster.

</TabItem>
<TabItem value="RKE2/K3s">

Snapshots are enabled by default.

The snapshot directory defaults to `/var/lib/rancher/<RUNTIME>/server/db/snapshots`, where `<RUNTIME>` is either `rke2` or `k3s`.

In RKE2, snapshots are stored on each etcd node. If you have multiple etcd or etcd + control-plane nodes, you will have multiple copies of local etcd snapshots.

</TabItem>
</Tabs>

### Snapshot Naming Conventions

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

The name of the snapshot is auto-generated. The `--name` option can be used to override the name of the snapshot when creating one-time snapshots with the RKE CLI.

When Rancher creates a snapshot of an RKE cluster, the snapshot name is based on the type (whether the snapshot  is manual or recurring) and the target (whether the snapshot is saved locally or uploaded to S3). The naming convention is as follows:

- `m` stands for manual
- `r` stands for recurring
- `l` stands for local
- `s` stands for S3

Some example snapshot names are:

- c-9dmxz-rl-8b2cx
- c-9dmxz-ml-kr56m
- c-9dmxz-ms-t6bjb
- c-9dmxz-rs-8gxc8

</TabItem>
<TabItem value="RKE2/K3s">

The name of the snapshot is auto-generated. The `--name` option can be used to override the base name of the snapshot when creating one-time snapshots with the RKE2 or K3s CLI.

When Rancher creates a snapshot of an RKE2 or K3s cluster, the snapshot name is based on the type (whether the snapshot is manual or recurring) and the target (whether the snapshot is saved locally or uploaded to S3). The naming convention is as follows:

`<name>-<node>-<timestamp>`

`<name>`: is the base name set by `--name` and can be one of the the following

- `etcd-snapshot` is prepended on recurring snapshots
- `on-demand` is prepended on manual, on-demand snapshots

`<node>`: Node is the name of the node that the snapshot was taken on.

`<timestamp>` is a unix-time stamp of the snapshot creation date.

Some example snapshot names are:

- `on-demand-my-super-rancher-k8s-node1-1652288934`
- `on-demand-my-super-rancher-k8s-node2-1652288936`
- `etcd-snapshot-my-super-rancher-k8s-node1-1652289945`
- `etcd-snapshot-my-super-rancher-k8s-node2-1652289948`

</TabItem>
</Tabs>

### How Restoring from a Snapshot Works

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

On restore, the following process is used:

1. The snapshot is retrieved from S3, if S3 is configured.
2. The snapshot is unzipped (if zipped).
3. One of the etcd nodes in the cluster serves that snapshot file to the other nodes.
4. The other etcd nodes download the snapshot and validate the checksum so that they all use the same snapshot for the restore.
5.  The cluster is restored and post-restore actions will be done in the cluster.

</TabItem>
<TabItem value="RKE2/K3s">

On restore, Rancher delivers a few sets of plans to perform a restoration. A set of phases are used, namely:

- Started
- Shutdown
- Restore
- RestartCluster
- Finished

If the etcd snapshot restore fails, the phase will be set to `Failed`.

1. The etcd snapshot restore request is received, and depending on `restoreRKEConfig`, the cluster configuration/kubernetes version are reconciled.
1. The phase is set to `Started`.
1. The phase is set to `Shutdown`, and the entire cluster is shut down using plans that run the distribution `killall.sh` script. A new init node is elected. If the snapshot being restored is a local snapshot, the node that the snapshot resides on will be selected as the init node. If the snapshot is being restored from S3, the existing init node will be used.
1. The phase is set to `Restore`, and the init node has the snapshot restored onto it.
1. The phase is set to `RestartCluster`, and the cluster is restarted/rejoined to the new init node that has the freshly restored snapshot information.
1. The phase is set to `Finished`, and the cluster is deemed successfully restored. The `cattle-cluster-agent` will reconnect, and the cluster will finish reconciliation.

</TabItem>
</Tabs>

## Configuring Recurring Snapshots

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

Select how often you want recurring snapshots to be taken as well as how many snapshots to keep. The amount of time is measured in hours. With timestamped snapshots, the user has the ability to do a point-in-time recovery.

By default, [Rancher launched Kubernetes clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) are configured to take recurring snapshots (saved to local disk). To protect against local disk failure, using the [S3 Target](#s3-backup-target) or replicating the path on disk is advised.

During cluster provisioning or editing the cluster, the configuration for snapshots can be found in the advanced section for **Cluster Options**. Click on **Show advanced options**.

In the **Advanced Cluster Options** section, there are several options available to configure:

| Option | Description | Default Value|
| --- | ---| --- |
| etcd Snapshot Backup Target | Select where you want the snapshots to be saved. Options are either local or in S3 | local|
|Recurring etcd Snapshot Enabled| Enable/Disable recurring snapshots | Yes|
| Recurring etcd Snapshot Creation Period | Time in hours between recurring snapshots| 12 hours |
| Recurring etcd Snapshot Retention Count | Number of snapshots to retain| 6 |

</TabItem>
<TabItem value="RKE2/K3s">

Set the schedule for how you want recurring snapshots to be taken as well as how many snapshots to keep. The schedule is conventional cron format. The retention policy dictates the number of snapshots matching a name to keep per node.

By default, [Rancher launched Kubernetes clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) are configured to take recurring snapshots (saved to local disk) every 5 hours starting at 12 AM. To protect against local disk failure, using the [S3 Target](#s3-backup-target) or replicating the path on disk is advised.

During cluster provisioning or editing the cluster, the configuration for snapshots can be found under **Cluster Configuration**. Click on **etcd**.

| Option | Description | Default Value|
| --- | ---| --- |
| Recurring etcd Snapshot Enabled | Enable/Disable recurring snapshots | Yes |
| Recurring etcd Snapshot Creation Period | Cron schedule for recurring snapshot | `0 */5 * * *` |
| Recurring etcd Snapshot Retention Count | Number of snapshots to retain | 5 |

</TabItem>
</Tabs>

## One-Time Snapshots

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

In addition to recurring snapshots, you may want to take a "one-time" snapshot. For example, before upgrading the Kubernetes version of a cluster it's best to backup the state of the cluster to protect against upgrade failure.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, navigate to the cluster where you want to take a one-time snapshot.
1. Click **⋮ > Take Snapshot**.

</TabItem>
<TabItem value="RKE2/K3s">

In addition to recurring snapshots, you may want to take a "one-time" snapshot. For example, before upgrading the Kubernetes version of a cluster it's best to backup the state of the cluster to protect against upgrade failure.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, navigate to the cluster where you want to take a one-time snapshot.
1. Navigate to the `Snapshots` tab and click `Snapshot Now`

### How Taking One-Time Snapshots Works

On one-time snapshot creation, the Rancher delivers a few sets of plans to perform snapshot creation. A set of phases are used, namely:

- Started
- RestartCluster
- Finished

If the etcd snapshot creation fails, the phase will be set to `Failed`.

1. The etcd snapshot creation request is received.
1. The phase is set to `Started`. All etcd nodes in the cluster receive a plan to create an etcd snapshot, per the cluster configuration.
1. The phase is set to `RestartCluster`, and the plans on every etcd node are reset to the original plan for the etcd nodes.
1. The phase is set to `Finished`.

</TabItem>
</Tabs>

**Result:** Based on your [snapshot backup target](#snapshot-backup-targets), a one-time snapshot will be taken and saved in the selected backup target.

## Snapshot Backup Targets

Rancher supports two different backup targets:

- [Local Target](#local-backup-target)
- [S3 Target](#s3-backup-target)

### Local Backup Target

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

By default, the `local` backup target is selected. The benefits of this option is that there is no external configuration. Snapshots are automatically saved locally to the etcd nodes in the [Rancher launched Kubernetes clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) in `/opt/rke/etcd-snapshots`. All recurring snapshots are taken at configured intervals. The downside of using the `local` backup target is that if there is a total disaster and _all_ etcd nodes are lost, there is no ability to restore the cluster.

</TabItem>
<TabItem value="RKE2/K3s">

By default, the `local` backup target is selected. The benefits of this option is that there is no external configuration. Snapshots are automatically saved locally to the etcd nodes in the [Rancher launched Kubernetes clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) in `/var/lib/rancher/<runtime>/server/db/snapshots` where `<runtime>` is either `k3s` or `rke2`. All recurring snapshots are taken per the cron schedule. The downside of using the `local` backup target is that if there is a total disaster and _all_ etcd nodes are lost, there is no ability to restore the cluster.

</TabItem>
</Tabs>

### S3 Backup Target

We recommend that you use the `S3` backup target. It lets you store snapshots externally, on an S3 compatible backend. Since the snapshots aren't stored locally, you can still restore the cluster even if you lose all etcd nodes. 

Although the `S3` target offers advantages over local backup, it does require extra configuration. 

:::caution

If you use an S3 backup target, make sure that every cluster has its own bucket or folder. Rancher populates snapshot information from any available snapshot listed in the S3 bucket or folder configured for that cluster.

:::

| Option | Description | Required|
|---|---|---|
|S3 Bucket Name| Name of S3 bucket to store backups| *|
|S3 Region|S3 region for the backup bucket| |
|S3 Region Endpoint|S3 regions endpoint for the backup bucket|* |
|S3 Access Key|S3 access key with permission to access the backup bucket|*|
|S3 Secret Key|S3 secret key with permission to access the backup bucket|*|
| Custom CA Certificate | A custom certificate used to access private S3 backends ||

### Using a custom CA certificate for S3

The backup snapshot can be stored on a custom `S3` backup like [minio](https://min.io/). If the S3 back end uses a self-signed or custom certificate, provide a custom certificate using the `Custom CA Certificate` option to connect to the S3 backend.

### IAM Support for Storing Snapshots in S3

The `S3` backup target supports using IAM authentication to AWS API in addition to using API credentials. An IAM role gives temporary permissions that an application can use when making API calls to S3 storage. To use IAM authentication, the following requirements must be met:

- The cluster etcd nodes must have an instance role that has read/write access to the designated backup bucket.
- The cluster etcd nodes must have network access to the specified S3 endpoint.
- The Rancher Server worker node(s) must have an instance role that has read/write to the designated backup bucket.
- The Rancher Server worker node(s) must have network access to the specified S3 endpoint.

 To give an application access to S3, refer to the AWS documentation on [Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)

## Viewing Available Snapshots

The list of all available snapshots for the cluster is available in the Rancher UI.

1. In the upper left corner, click **☰ > Cluster Management**.
1. In the **Clusters** page, go to the cluster where you want to view the snapshots and click its name.
1. Click the **Snapshots** tab to view the list of saved snapshots. These snapshots include a timestamp of when they were created.

## Safe Timestamps (RKE)

Snapshot files are timestamped to simplify processing the files using external tools and scripts, but in some S3 compatible backends, these timestamps were unusable.

The option `safe_timestamp` is added to support compatible file names. When this flag is set to `true`, all special characters in the snapshot filename timestamp are replaced.

This option is not available directly in the UI, and is only available through the `Edit as Yaml` interface.
