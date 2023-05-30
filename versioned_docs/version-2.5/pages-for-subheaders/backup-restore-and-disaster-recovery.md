---
title: Backups and Disaster Recovery
keywords: [rancher v2.5 backup restore, rancher v2.5 backup and restore, backup restore rancher v2.5, backup and restore rancher v2.5]
---

In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster.

As of Rancher v2.5, the `rancher-backup` operator is used to backup and restore Rancher. The `rancher-backup` Helm chart is [here.](https://github.com/rancher/charts/tree/release-v2.5/charts/rancher-backup)

The backup-restore operator needs to be installed in the local cluster, and only backs up the Rancher app. The backup and restore operations are performed only in the local Kubernetes cluster.

> When restoring a backup into a new Rancher setup, the version of the new setup should be the same as the one where the backup is made.

## Changes in Rancher v2.5

The new `rancher-backup` operator allows Rancher to be backed up and restored on any Kubernetes cluster. This application is a Helm chart, and it can be deployed through the Rancher **Apps & Marketplace** page, or by using the Helm CLI.

Previously, the way that cluster data was backed up depended on the type of Kubernetes cluster that was used.

In Rancher v2.4, it was only supported to install Rancher on two types of Kubernetes clusters: an RKE cluster, or a K3s cluster with an external database. If Rancher was installed on an RKE cluster, RKE would be used to take a snapshot of the etcd database and restore the cluster. If Rancher was installed on a K3s cluster with an external database, the database would need to be backed up and restored using the upstream documentation for the database.

In Rancher v2.5, it is now supported to install Rancher hosted Kubernetes clusters, such as Amazon EKS clusters, which do not expose etcd to a degree that would allow snapshots to be created by an external tool. etcd doesn't need to be exposed for `rancher-backup` to work, because the operator gathers resources by making calls to `kube-apiserver`.

### Backup and Restore for Rancher v2.5 installed with Docker

For Rancher installed with Docker, refer to the same steps used up till 2.5 for [backups](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md) and [restores.](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md)

## How Backups and Restores Work

The `rancher-backup` operator introduces three custom resources: Backups, Restores, and ResourceSets. The following cluster-scoped custom resource definitions are added to the cluster:

- `backups.resources.cattle.io`
- `resourcesets.resources.cattle.io`
- `restores.resources.cattle.io`

The ResourceSet defines which Kubernetes resources need to be backed up. The ResourceSet is not available to be configured in the Rancher UI because the values required to back up Rancher are predefined. This ResourceSet should not be modified.

When a Backup custom resource is created, the `rancher-backup` operator calls the `kube-apiserver` to get the resources in the ResourceSet (specifically, the predefined `rancher-resource-set`) that the Backup custom resource refers to.

The operator then creates the backup file in the .tar.gz format and stores it in the location configured in the Backup resource.

When a Restore custom resource is created, the operator accesses the backup .tar.gz file specified by the Restore, and restores the application from that file.

The Backup and Restore custom resources can be created in the Rancher UI, or by using `kubectl apply`.

## Installing the rancher-backup Operator

The `rancher-backup` operator can be installed from the Rancher UI, or with the Helm CLI. In both cases, the `rancher-backup` Helm chart is installed on the Kubernetes cluster running the Rancher server. It is a cluster-admin only feature and available only for the **local** cluster.  (*If you do not see `rancher-backup` in the Rancher UI, you may have selected the wrong cluster.*)

>**NOTE:** There are two known issues in Fleet that occur after performing a restoration using the backup-restore-operator: Fleet agents are inoperable and clientSecretName and helmSecretName are not included in Fleet gitrepos. Refer [here](../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md#troubleshooting) for workarounds.

### Installing rancher-backup with the Rancher UI

1. In the Rancher UI's Cluster Manager, choose the cluster named **local**
1. On the upper-right click on the **Cluster Explorer.**
1. Click **Apps.**
1. Click the `rancher-backup` operator.
1. Optional: Configure the default storage location. For help, refer to the [configuration section.](../reference-guides/backup-restore-configuration/storage-configuration.md)

**Result:** The `rancher-backup` operator is installed.

From the **Cluster Explorer,** you can see the `rancher-backup` operator listed under **Deployments.**

To configure the backup app in Rancher, click **Cluster Explorer** in the upper left corner and click **Rancher Backups.**

### Installing rancher-backup with the Helm CLI

Install the backup app as a Helm chart:

```
helm repo add rancher-charts https://charts.rancher.io
helm repo update
helm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace
helm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system
```

### RBAC

Only the rancher admins and the local cluster’s cluster-owner can:

* Install the Chart
* See the navigation links for Backup and Restore CRDs
* Perform a backup or restore by creating a Backup CR and Restore CR respectively
* List backups/restores performed so far

## Backing up Rancher

A backup is performed by creating a Backup custom resource. For a tutorial, refer to [this page.](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md)

## Restoring Rancher

A restore is performed by creating a Restore custom resource. For a tutorial, refer to [this page.](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md)

## Migrating Rancher to a New Cluster

A migration is performed by following [these steps.](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md)

## Default Storage Location Configuration

Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible or Minio object store.

For information on configuring these options, refer to [this page.](../reference-guides/backup-restore-configuration/storage-configuration.md)

### Example values.yaml for the rancher-backup Helm Chart

The example [values.yaml file](../reference-guides/backup-restore-configuration/storage-configuration.md#example-valuesyaml-for-the-rancher-backup-helm-chart) can be used to configure the `rancher-backup` operator when the Helm CLI is used to install it.
