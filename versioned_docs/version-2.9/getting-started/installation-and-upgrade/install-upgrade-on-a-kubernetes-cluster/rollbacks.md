---
title: Rollbacks
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"/>
</head>

This page outlines how to rollback Rancher to a previous version after an upgrade.

Follow the instructions from this page when:
- The running Rancher instance has been upgraded to a newer version after the backup was made.
- The upstream (local) cluster is the same as where the backup was made.

:::tip

* Follow these steps to [migrate Rancher](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md).
* If you need to restore Rancher to its previous state at the same Rancher version, see the [restore documentation](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md).

:::

## Alternative Steps for Special Scenarios

Alternative steps need to be performed for rollbacks in the following scenarios:
- Rolling back from v2.6.4 and later to an earlier version of v2.6.x.
- Rolling back from v2.7.7 and later to an earlier version of v2.7.x.

In Rancher v2.6.4, the cluster-api module is upgraded from v0.4.4 to v1.0.2. The cluster-api v1.0.2, in turn, upgrades the apiVersions of its Custom Resource Definitions (CRDs) from `cluster.x-k8s.io/v1alpha4` to `cluster.x-k8s.io/v1beta1`. Custom Resources (CRs) that use the older apiVersion (v1alpha4) are incompatible with v1beta1, which  causes rollbacks to fail when you attempt to move from Rancher v2.6.4 to any previous version of Rancher v2.6.x.

In Rancher v2.7.7, the app `rancher-provisioning-capi` is installed on the upstream (local) cluster automatically as a replacement for the embedded cluster-api controllers. Conflicts and unexpected errors will occur if the upstream cluster contains both the app, and Rancher v2.7.6 and earlier. Therefore, alternative steps are needed if you attempt to move from Rancher v2.7.7 to any previous version of Rancher v2.7.x.

### Step 1: Clean Up the Upstream (Local) Cluster

To avoid rollback failure, follow these [instructions](https://github.com/rancher/rancher-cleanup/blob/main/README.md) to run the scripts **before** you attempt a restore operation or rollback:

* `cleanup.sh`: Cleans up the cluster.
* `verify.sh`:  Checks for any Rancher-related resources in the cluster.

:::caution

There will be downtime while `cleanup.sh` runs, since the script deletes resources created by Rancher.

:::

**Result:** all Rancher-related resources should be cleaned up on the upstream (local) cluster.

See the [rancher/rancher-cleanup repo](https://github.com/rancher/rancher-cleanup) for more details and source code.

### Step 2: Restore the Backup and Bring Up Rancher

At this point, there should be no Rancher-related resources on the upstream cluster. Therefore, the next step will be the same as if you were migrating Rancher to a new cluster that contains no Rancher resources.

Follow these [instructions](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md) to install the Rancher-Backup Helm chart and restore Rancher to its previous state.
Please keep in mind that:
1. Step 3 can be skipped, because the Cert-Manager app should still exist on the upstream (local) cluster if it was installed before.
2. At Step 4, install the Rancher version you intend to roll back to.

## Rolling Back to Rancher v2.5.0+

To roll back to Rancher v2.5.0+, use the **Rancher Backups** application and restore Rancher from backup.

Rancher has to be started with the lower/previous version after a rollback.

A restore is performed by creating a Restore custom resource.

:::note Important:

* Follow the instructions from this page for restoring Rancher on the same cluster where it was backed up from. In order to migrate Rancher to a new cluster, follow the steps to [migrate Rancher.](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md)

* While restoring Rancher on the same setup, the Rancher deployment is manually scaled down before the restore starts, then the operator will scale it back up once the restore completes. As a result, Rancher and its UI will be unavailable until the restore is complete. While the UI is unavailable, use the original cluster kubeconfig with the restore YAML file: `kubectl create -f restore.yaml`.

:::

### Step 1: Create the Restore Custom Resource

1. Click **☰ > Cluster Management**.
1. Go to the local cluster and click **Explore**.
1. In the left navigation bar, click **Rancher Backups > Restore**.
    :::note

    If the Rancher Backups app is not visible, you will need to install it from the Charts page in **Apps**. Refer [here](../../../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md#access-charts) for more information.

    :::

1. Click **Create**.
1. Create the Restore with the form or with YAML. For help creating the Restore resource using the online form, refer to the [configuration reference](../../../reference-guides/backup-restore-configuration/restore-configuration.md) and to the [examples.](../../../reference-guides/backup-restore-configuration/examples.md)
1. To use the YAML editor, you can click **Create > Create from YAML.** Enter the Restore YAML. The following is an example Restore custom resource:

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
    For help configuring the Restore, refer to the [configuration reference](../../../reference-guides/backup-restore-configuration/restore-configuration.md) and to the [examples.](../../../reference-guides/backup-restore-configuration/examples.md)

1. Click **Create**.

**Result:** The backup file is created and updated to the target storage location. The resources are restored in this order:

1. Custom Resource Definitions (CRDs)
2. Cluster-scoped resources
3. Namespaced resources

To check how the restore is progressing, you can check the logs of the operator. Follow these steps to get the logs:

```yaml
kubectl get pods -n cattle-resources-system
kubectl logs -n cattle-resources-system -f
```

### Step 2: Roll Back to a Previous Rancher Version

Rancher can be rolled back using the Helm CLI. To roll back to the previous version:

```yaml
helm rollback rancher -n cattle-system
```

If the previous revision is not the intended target, you can specify a revision to roll back to. To see the deployment history:

```yaml
helm history rancher -n cattle-system
```

When the target revision is determined, perform the rollback. This example will roll back to revision `3`:

```yaml
helm rollback rancher 3 -n cattle-system
```

## Rolling Back to Rancher v2.2-v2.4+

To roll back to Rancher before v2.5, follow the procedure detailed here: [Restoring Backups — Kubernetes installs](https://github.com/rancher/rancher-docs/tree/main/archived_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md) Restoring a snapshot of the Rancher server cluster will revert Rancher to the version and state at the time of the snapshot.

For information on how to roll back Rancher installed with Docker, refer to [this page.](../other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher.md)

:::note

Managed clusters are authoritative for their state. This means restoring the Rancher server will not revert workload deployments or changes made on managed clusters after the snapshot was taken.

:::

## Rolling Back to Rancher v2.0-v2.1

Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved [here](https://github.com/rancher/rancher-docs/tree/main/archived_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1.md) and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible.
