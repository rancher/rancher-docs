---
title: Migrating Rancher to a New Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"/>
</head>

If you are migrating Rancher to a new Kubernetes cluster, you don't need to install Rancher on the new cluster first. If Rancher is restored to a new cluster with Rancher already installed, it can cause problems.


### Prerequisites

These instructions assume that you have [created a backup](back-up-rancher.md) and  already installed a new Kubernetes cluster where Rancher will be deployed. The backup is specific to the Rancher application and can only migrate the Rancher application.

:::caution

You must use the same hostname that was set as the server URL in the original cluster. If you don't, downstream clusters will show as unavailable in the cluster management page of the UI, and you won't be able to click inside the cluster or on the cluster's **Explore** button.

:::

Rancher version must be v2.5.0 and up

Rancher can be installed on any Kubernetes cluster, including hosted Kubernetes clusters such as Amazon EKS clusters. For help installing Kubernetes, refer to the documentation of the Kubernetes distribution. A Rancher-created Kubernetes distributions such as, but not limited to, [RKE](https://rke.docs.rancher.com/installation) or [K3s](https://docs.k3s.io/installation) may also be used.

Since Rancher can be installed on any Kubernetes cluster, you can use this backup and restore method to migrate Rancher from one Kubernetes cluster to any other Kubernetes cluster. This method *only* migrates Rancher-related resources and won't affect other applications on the cluster. Refer to the [support matrix](https://www.suse.com/lifecycle/) to identify which Kubernetes cluster types and versions are supported for your Rancher version.


### 1. Install the rancher-backup Helm chart

Install the [`rancher-backup chart`](https://github.com/rancher/backup-restore-operator/tags):

  1. Add the Helm repository:

     ```bash
     helm repo add rancher-charts https://charts.rancher.io
     helm repo update
     ```

  1. Set a `CHART_VERSION` variable, selecting a `rancher-backup` chart version compatible with your version of Rancher. See the [support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions), within the **Rancher Apps / Cluster Tools** section, to see which `rancher-backup` versions are supported:

     ```bash
     CHART_VERSION=<chart-version>
     ```

  1. Install the charts:
   
     ```bash
     helm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace --version $CHART_VERSION
     helm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system --version $CHART_VERSION
     ```

     :::note

     The above assumes an environment with outbound connectivity to Docker Hub.

     For an **air-gapped environment**, set a `$REGISTRY` variable to point to the path to your registry. Then, use the following Helm value to pull the `backup-restore-operator` image from your private registry when you install the rancher-backup Helm chart.

     ```bash
     --set image.repository $REGISTRY/rancher/backup-restore-operator
     ```

     :::

### 2. Restore from backup using a Restore custom resource

:::note Important:

Kubernetes v1.22, available as an experimental feature of v2.6.3, does not support restoring from backup files containing CRDs with the apiVersion `apiextensions.k8s.io/v1beta1`. In v1.22, the default `resourceSet` in the rancher-backup app is updated to collect only CRDs that use `apiextensions.k8s.io/v1`. There are currently two ways to work around this issue:

1. Update the default `resourceSet` to collect the CRDs with the apiVersion v1.
1. Update the default `resourceSet` and the client to use the new APIs internally, with `apiextensions.k8s.io/v1` as the replacement.

    :::note

    When making or restoring backups for v1.22, the Rancher version and the local cluster's Kubernetes version should be the same. The Kubernetes version should be considered when restoring a backup since the supported apiVersion in the cluster and in the backup file could be different.

    :::

:::

1. When using S3 object storage as the backup source for a restore that requires credentials, create a `Secret` object in this cluster to add the S3 credentials. The secret data must have two keys - `accessKey`, and `secretKey`, that contain the S3 credentials.

   The secret can be created in any namespace, this example uses the default namespace.

   ```bash
   kubectl create secret generic s3-creds \
     --from-literal=accessKey=<access key> \
     --from-literal=secretKey=<secret key>
   ```

   :::note

   Add your access key and secret key as values for `accessKey` and `secretKey` in the command above.

   :::

1. Create a `Restore` object:

   During a migration, `prune` must be set to `false`. See the example below:

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

   :::note Important

   The field `encryptionConfigSecretName` should be used only if your backup was created with encryption enabled.

   If this applies, provide the name of the `Secret` object containing the encryption config file. If you only have the encryption config file, but don't have the secret created in this cluster, use the following steps to create the secret:

   1. Create an [encryption configuration file](../../../reference-guides/backup-restore-configuration/backup-configuration.md#encryption)
   1. The command below uses a file named `encryption-provider-config.yaml`, with the `--from-file` flag. Run the below once the `EncryptionConfiguration` is saved in a file called `encryption-provider-config.yaml`:

      ```bash
      kubectl create secret generic encryptionconfig \
        --from-file=./encryption-provider-config.yaml \
        -n cattle-resources-system
      ```

   :::

1. Apply the manifest, and monitor the Restore status:
   1. Apply the `Restore` object resource:

      ```bash
      kubectl apply -f restore-migration.yaml
      ```

   1. Watch the Restore status:
      ```bash
      kubectl get restore
      ```

   1. Watch the restoration logs:
      ```bash
      kubectl logs -n cattle-resources-system --tail 100 -f -l app.kubernetes.io/instance=rancher-backup
      ```

   1. Once the Restore resource has the status `Completed`, you can continue the cert-manager and Rancher installation.

### 3. Install cert-manager

Follow the steps to [install cert-manager](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md#4-install-cert-manager) in the documentation about installing cert-manager on Kubernetes.

### 4. Bring up Rancher with Helm

Use the same version of Helm to install Rancher, that was used on the first cluster.

For Kubernetes v1.25 or later, set `global.cattle.psp.enabled` to `false` when using Rancher v2.7.2-v2.7.4. This is not necessary for Rancher v2.7.5 and above, but you can still manually set the option if you choose.

```bash
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=<same hostname as the server URL from the first Rancher server> \
  --version x.y.z
```

:::note

If the original Rancher environment is running, you can collect the current values with a kubeconfig for the original environment:

```bash
helm get values rancher -n cattle-system -o yaml > rancher-values.yaml
```

These values can be reused using the `rancher-values.yaml` file. Be sure to switch the kubeconfig to the new Rancher environment.

```bash
helm install rancher rancher-latest/rancher -n cattle-system -f rancher-values.yaml --version x.y.z
```

:::

### 5. Redirect Traffic to the New Cluster

After migration completes, update your DNS records and any load balancers, so that traffic is routed correctly to the migrated cluster. Remember that you must use the same hostname that was set as the server URL in the original cluster.

Full instructions on how to redirect traffic to the migrated cluster differ based on your specific environment. Refer to your hosting provider's documentation for more details.
