---
title: Rollbacks
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"/>
</head>

## Additional Steps for Rollbacks with Rancher v2.6.4+

Rancher v2.6.4 upgrades the cluster-api module from v0.4.4 to v1.0.2. Version v1.0.2 of the cluster-api, in turn, upgrades the Cluster API's  Custom Resource Definitions (CRDs) from `cluster.x-k8s.io/v1alpha4` to `cluster.x-k8s.io/v1beta1`. The CRDs upgrade to v1beta1 causes rollbacks to fail when you attempt to move from Rancher v2.6.4 to any previous version of Rancher v2.6.x. This is because CRDs that use the older apiVersion (v1alpha4) are incompatible with v1beta1.

To avoid rollback failure, the following Rancher scripts should be run **before** you attempt a restore operation or rollback:

* `verify.sh`:  Checks for any Rancher-related resources in the cluster.
*  `cleanup.sh`: Cleans up the cluster.

See the [rancher/rancher-cleanup repo](https://github.com/rancher/rancher-cleanup) for more details and source code.

:::caution

 There will be downtime while `cleanup.sh` runs, since the script deletes resources created by Rancher.

:::

### Rolling back from v2.6.4+ to lower versions of v2.6.x

1. Follow these [instructions](https://github.com/rancher/rancher-cleanup/blob/main/README.md) to run the scripts.
1. Follow these [instructions](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md) to install the rancher-backup Helm chart on the existing cluster and restore the previous state.
    1. Omit Step 3.
    1. When you reach Step 4, install the Rancher v2.6.x version on the local cluster you intend to roll back to.

## Rolling Back to Rancher v2.5.0+

To roll back to Rancher v2.5.0+, use the **Rancher Backups** application and restore Rancher from backup.

Rancher has to be started with the lower/previous version after a rollback.

A restore is performed by creating a Restore custom resource.

:::note Important:

* Follow the instructions from this page for restoring Rancher on the same cluster where it was backed up from. In order to migrate Rancher to a new cluster, follow the steps to [migrate Rancher.](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md)

* While restoring Rancher on the same setup, the Rancher deployment is manually scaled down before the restore starts, then the operator will scale it back up once the restore completes. As a result, Rancher and its UI will be unavailable until the restore is complete. While the UI is unavailable, use the original cluster kubeconfig with the restore YAML file: `kubectl create -f restore.yaml`.

:::

### Create the Restore Custom Resource

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

### Roll back to a previous Rancher version

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
