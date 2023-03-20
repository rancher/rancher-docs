---
title: Backing up a K3s/RKE2 Cluster
---

In the Rancher UI, etcd backup and recovery for [Rancher launched RKE2 or K3s clusters](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md) can be easily performed.

Rancher recommends configuring recurrent `etcd` snapshots for all production clusters. Additionally, one-time snapshots can be taken as well.

Snapshots of the etcd database are taken and saved either [locally onto the etcd nodes](#local-backup-target) or to a [S3 compatible target](#s3-backup-target). The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster.

## How Snapshots Work

### Snapshot Components

Rancher delegates snapshot creation to the downstream Kubernetes engine. When the Kubernetes engine creates a snapshot, it includes three components:

- The cluster data in etcd
- The Kubernetes version
- The cluster configuration

Because the Kubernetes version is included in the snapshot, it is possible to restore a cluster to a prior Kubernetes version while also restoring an etcd snapshot.

The multiple components of the snapshot allow you to select from the following options if you need to restore a cluster from a snapshot:

- **Restore just the etcd contents:** This restore is similar to restoring to snapshots in Rancher before v2.4.0.
- **Restore etcd and Kubernetes version:** This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes.
- **Restore etcd, Kubernetes versions and cluster configuration:** This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.

It is always recommended to take a new snapshot before performing any configuration changes or upgrades.

### Snapshot Naming Conventions

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

### How Restoring from a Snapshot Works

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

## Configuring Recurring Snapshots

Set the schedule for how you want recurring snapshots to be taken as well as how many snapshots to keep. The schedule is conventional cron format. The retention policy dictates the number of snapshots matching a name to keep per node.

By default, [Rancher launched RKE2 or K3s clusters](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md) are configured to take recurring snapshots (saved to local disk) every 5 hours starting at 12 AM. To protect against local disk failure, using the [S3 Target](#s3-backup-target) or replicating the path on disk is advised.

During cluster provisioning or editing the cluster, the configuration for snapshots can be found under **Cluster Configuration**. Click on **etcd**.

| Option | Description | Default Value|
| --- | ---| --- |
| Recurring etcd Snapshot Enabled | Enable/Disable recurring snapshots | Yes |
| Recurring etcd Snapshot Creation Period | Cron schedule for recurring snapshot | `0 */5 * * *` |
| Recurring etcd Snapshot Retention Count | Number of snapshots to retain | 5 |

## One-Time Snapshots

In addition to recurring snapshots, you may want to take a "one-time" snapshot. For example, before upgrading the Kubernetes version of a cluster it's best to backup the state of the cluster to protect against upgrade failure.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, navigate to the cluster where you want to take a one-time snapshot.
1. Navigate to the **Snapshots** tab and click **Snapshot Now**.

**Result:** Based on your [snapshot backup target](#snapshot-backup-targets), a one-time snapshot will be taken and saved in the selected backup target.

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

## Snapshot Backup Targets

Rancher supports two different backup targets:

- [Local Target](#local-backup-target)
- [S3 Target](#s3-backup-target)

### Local Backup Target

By default, the `local` backup target is selected. The benefits of this option is that there is no external configuration. Snapshots are automatically saved locally to the etcd nodes in the [Rancher launched RKE2 or K3s clusters](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md) in `/var/lib/rancher/<runtime>/server/db/snapshots` where `<runtime>` is either `k3s` or `rke2`. All recurring snapshots are taken per the cron schedule. The downside of using the `local` backup target is that if there is a total disaster and _all_ etcd nodes are lost, there is no ability to restore the cluster.

### S3 Backup Target

The `S3` backup target allows users to configure a S3 compatible backend to store the snapshots. The primary benefit of this option is that if the cluster loses all the etcd nodes, the cluster can still be restored as the snapshots are stored externally. Rancher recommends external targets like `S3` backup, however its configuration requirements do require additional effort that should be considered. Additionally, it is recommended to ensure that every cluster has a unique bucket and/or folder, as Rancher will populate snapshot information for any available snapshot that is listed in the S3 bucket/folder that is configured for the cluster.

| Option | Description | Required|
|---|---|---|
|S3 Bucket Name| S3 bucket name where backups will be stored| *|
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