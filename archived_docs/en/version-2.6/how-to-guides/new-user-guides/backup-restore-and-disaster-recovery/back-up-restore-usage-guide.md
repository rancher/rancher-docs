---
title: Backup Restore Usage Guide
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-restore-usage-guide"/>
</head>

The Rancher Backups chart is our solution for disaster recovery and migration. This chart allows you to take backups of your Kubernetes resources and save them to a variety of persistent storage locations.

This chart is a very simple tool which has its hands in many different areas of the Rancher ecosystem. As a result, edge cases have arisen which lead to undocumented functionality. The purpose of this document is to highlight the proper and defined usage for Rancher Backups, as well as discussing some of these edge cases we’ve run into.

## Functionality Overview

### Backup

The operator collects all the resources captured by the resourceSet in the chart as in-memory unstructured objects. After the resources have been collected, a compressed tar file of the resources are saved as a collection of manifests in JSON and then uploaded to a user-defined object store. This backup can be put on a repeating schedule and can also be encrypted. This encryption option is important since some of the resources are sensitive and the values are stored in plaintext without encryption.

See the [Backup Configuration documentation](../../../reference-guides/backup-restore-configuration/backup-configuration.md) for more information about the options, including encryption, to configure a backup.

:::note

As noted in the [Backing up Rancher documentation](./back-up-rancher.md), you must manually save the encryption configuration file contents since the operator will **not** back it up.

:::

### Restore

There are two main restore scenarios, restoring to a cluster with Rancher running and restoring to a fresh cluster. You can only restore to a cluster with Rancher running if it's the same cluster the backup was taken from and the [`prune` option](../../../reference-guides/backup-restore-configuration/restore-configuration.md#prune-during-restore) is enabled during the restore. A restore has similar inputs as a backup. It requires a backup filename, the encryptionConfigSecret name, and the storage location.

Resources are restored in this order:

1. Custom Resource Definitions (CRDs)
2. Cluster-scoped resources
3. Namespaced resources

See the [Restore Configuration documentation](../../../reference-guides/backup-restore-configuration/restore-configuration.md) for more information about the options to configure a restore.

### Resource Sets

The resourceSet determines which resources the backup-restore-operator collects in a backup. It's a set of ResourceSelectors, which define the selection requirements using key/value matching, regular expression matching, or the Kubernetes client labelSelector.

These are the different fields available for a resourceSelector:

- apiVersion
- excludeKinds
- excludeResourceNameRegexp
- kinds
- kindsRegexp
- labelSelectors
- namespaceRegexp
- namespaces
- resourceNameRegexp
- resourceNames

The Rancher Backups chart contains a [default resourceSet](https://github.com/rancher/backup-restore-operator/tree/release/v3.0/charts/rancher-backup/files/default-resourceset-contents), which is a combination of YAML files that are appended to one large resourceSet when the chart is installed. The file order does not matter. The resourceSets may differ between versions.

:::caution

If you wish to make edits to the resourceSet please edit it **before** installing the chart.

:::

## Proper Usage

This section outlines the guidelines for the proper usage of the Rancher Backups chart according to its use case.

### All Cases

- Rancher Backups must be installed on the local cluster.
  - Note: Rancher Backups does not handle any cluster other than the one it is installed on to. It may restore cluster resources that are on the local cluster but will not communicate with the downstream clusters or back them up.
- The Rancher version being restored to must match the Rancher version from backup.
- The Kubernetes version should be be considered since you may be restoring outdated resources (resources deprecated from the version of Kubernetes you are restoring to).

### Backups

- Some user generated resources will not be backed up unless they can are captured by the default resourceSet or the resourceSet was altered to capture them.
  - We provide a label `resources.cattle.io/backup:true` that when added to a secret in any namespace, will result in it being backed up.
- Backups are non-mutating
- Backups are only of the local cluster

### Restores

- A restore refers to restoring a backup to the same cluster it was taken from. This can be with Rancher installed (**prune must be enabled**) or with it not installed (no special instructions).
- One thing to note when restoring is that you may find yourself needing to “wipe” the cluster of any Rancher resources. This can be done by deploying the [Rancher cleanup script](https://github.com/rancher/rancher-cleanup) as a job to the cluster. This allows you to install Rancher Backups again and restore to a completely fresh cluster.
  - Make sure to use kubectl to deploy the scripts.

### Migrations

Migration have some more nuance since we are restoring to a different cluster. These are a few things to remember that are commonly missed or forgotten.

- The Rancher domain must be the same when migrating. This means your previous cluster’s domain name must now point to the new cluster.
- Rancher should **not** be running already on the cluster you are migrating to. This can cause many issues with Rancher backups and certain Rancher services as well.
- Install the **same** version of Rancher from the backup **after** the backup has been restored.
- If you choose to provision the new cluster on a different Kubernetes version know that this can cause a wide variety of unsupported behaviors because the Kubernetes API available may be different from the one you took a backup from. This can lead to deprecated resources being restored which will cause issues.
- You should **not** perform any upgrades during a migration.

## Edge Cases and Improper Usage

Below are some examples of some **incorrect** uses or expectations of Rancher Backups.

### Upgrades

- Using Rancher backups for upgrading Rancher versions is not a valid use case. The recommended procedure is to take a backup of the current version, then upgrade your Rancher instance using [these instructions](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md), and then taking **another** backup after the upgrade is complete. This way if the upgrade fails you have a backup to restore to, and the second backup will be valid to restore to the upgraded Rancher version.
- Using Rancher backups for upgrading Kubernetes versions is not a valid use case either. Because the Kubernetes API and available resources are tied to the version, upgrading using backup restore can lead to issues with misaligned sets of resources which may be deprecated, unsupported, or updated. How to upgrade your cluster version will depend on how it was provisioned however the same format as above is recommended (backup, upgrade, backup).

### ResourceSet

- Because of evolving resources and services from various teams, developers should take note if new resources need to be added to or removed from the default resourceSet.
- Rancher backups only backs up what is captured by the default resourceSets (unless edited).  We have added a specific label for user created secrets that will back up a secret of any name and namespace that has said label (see [Proper Usage on Backups](#backups)).

### Downstream Clusters

- Rancher Backups **only** backs up Kubernetes resources on the local cluster. This means downstream clusters are **not** touched or backed up other than their presence in resources in the local cluster. The updating and communication of downstream clusters falls upon the rancher-agent and rancher-webhook.

### Restoring Deleted Resources

- Some resources have external results produced, such as provisioning a downstream cluster. Deleting a downstream cluster and restoring the cluster resource on the local cluster does **not** cause Rancher to reprovision said cluster. Depending on the resource, restoring may not fully bring back the resource to an available state.
- The corner case of "restoring a deleted cluster" is **not** a supported feature. When it comes to downstream clusters, whether provisioned or imported, deleting them causes a series of cleanup tasks which doesn't allow the user to restore the deleted clusters. Provisioned clusters will have their nodes and Rancher-related provisioning resources destroyed, and imported clusters will likely have their Rancher agents and other resources/services related to registration with a local cluster destroyed.

:::caution

Trying to delete and restore a downstream cluster can lead to a variety of issues with Rancher, Rancher Backups, rancher-webhook, Fleet, and more. It is not recommended to do this.

:::

### Fleet, Harvester, and Other Services

Other services, which are backed up by Rancher Backups, often change and evolve. As this happens, their resources and backup needs may change as well. Some resources may not need to be backed up and some may not be backed up at all. It is important for teams to consider this in their development process and assess whether their related resourceSets are correctly capturing the proper set of resources for their services to be restored correctly.

## Conclusion

Rancher Backups is a very useful tool, however it is somewhat limited in its scope and intended purposes. In order to avoid possible difficulties, it is important to follow the specific procedures described to ensure the proper operation of the chart.
