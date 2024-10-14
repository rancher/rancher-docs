---
title: Updating the Rancher Certificate
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/update-rancher-certificate"/>
</head>

## Updating a Private CA Certificate

Follow these steps to rotate an SSL certificate and private CA used by Rancher [installed on a Kubernetes cluster](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md), or migrate to an SSL certificate signed by a private CA.

A summary of the steps is as follows:

1. Create or update the `tls-rancher-ingress` Kubernetes secret object with the new certificate and private key.
1. Create or update the `tls-ca` Kubernetes secret object with the root CA certificate (only required when using a private CA).
1. Update the Rancher installation using the Helm CLI.
1. Reconfigure the Rancher agents to trust the new CA certificate.
1. Select Force Update of Fleet clusters to connect fleet-agent to Rancher.

The details of these instructions are below.

### 1. Create/update the certificate secret object

First, concatenate the server certificate followed by any intermediate certificate(s) to a file named `tls.crt` and provide the corresponding certificate key in a file named `tls.key`.

Use the following command to create the `tls-rancher-ingress` secret object in the Rancher (local) management cluster:

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

Alternatively, to update an existing `tls-rancher-ingress` secret:

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 2. Create/update the CA certificate secret object

If the new certificate was signed by a private CA, you will need to copy the corresponding root CA certificate into a file named `cacerts.pem` and create or update the `tls-ca` secret in the `cattle-system` namespace. If the certificate was signed by an intermediate CA, then the `cacerts.pem` must contain both the intermediate and root CA certificates (in this order).

To create the initial `tls-ca` secret:

```bash
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem
```

To update an existing `tls-ca` secret:

```bash
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 3. Reconfigure the Rancher deployment

If the certificate source remains the same (for example, `secret`), please follow the steps in Step 3a.

However, if the certificate source is changing (for example, `letsEncrypt` to `secret`), follow the steps in 3b.

#### 3a. Redeploy the Rancher pods

This step is required when the certificate source remains the same, but the CA certificate is being updated.

In this scenario a redeploy of the Rancher pods is needed, this is because the `tls-ca` secret is read by the Rancher pods when starting.

The command below can be used to redeploy the Rancher pods:
```bash
kubectl rollout restart deploy/rancher -n cattle-system
```

When the change is completed, navigate to `https://<RANCHER_SERVER_URL>/v3/settings/cacerts` to verify that the value matches the CA certificate written in the `tls-ca` secret earlier. The CA `cacerts` value may not update until all of the redeployed Rancher pods start.

#### 3b. Update the Helm values for Rancher

This step is required if the certificate source is changing. If Rancher was previously configured to use the default self-signed certificate (`ingress.tls.source=rancher`) or Let's Encrypt (`ingress.tls.source=letsEncrypt`), and is now using a certificate signed by a private CA (`ingress.tls.source=secret`).

The below steps update the Helm values for the Rancher chart, so the Rancher pods and ingress are reconfigured to use the new private CA certificate created in Step 1 & 2.

   1. Adjust the values that were used during initial installation, store the current values with:
   ```bash
   helm get values rancher -n cattle-system -o yaml > values.yaml
   ```
   1. Retrieve the version string of the currently deployed Rancher chart to use below:
   ```bash
   helm ls -n cattle-system
   ```
   1. Update the current Helm values in the `values.yaml` file to contain:
   ```yaml
   ingress:
     tls:
       source: secret
   privateCA: true
   ```
   :::note Important:
   As the certificate is signed by a private CA, it is important to ensure [`privateCA: true`](../installation-references/helm-chart-options.md#common-options) is set in the `values.yaml` file.
   :::
   1. Upgrade the Helm application instance using the `values.yaml` file and the current chart version. The version must match to prevent an upgrade of Rancher.
   ```bash
    helm upgrade rancher rancher-stable/rancher \
     --namespace cattle-system \
     -f values.yaml \
     --version <DEPLOYED_RANCHER_VERSION>
   ```

When the change is completed, navigate to `https://<RANCHER_SERVER_URL>/v3/settings/cacerts` to verify that the value matches the CA certificate written in the `tls-ca` secret earlier. The CA `cacerts` value may not update until all Rancher pods start.

### 4. Reconfigure Rancher agents to trust the private CA

This section covers three methods to reconfigure Rancher agents to trust the private CA. This step is required if either of the following is true:

- Rancher was previously configured to use the Rancher self-signed certificate (`ingress.tls.source=rancher`) or with a Let's Encrypt issued certificate (`ingress.tls.source=letsEncrypt`)
- The certificate was signed by a different private CA

#### Why is this step required?

When Rancher is configured with a certificate signed by a private CA, the CA certificate chain is trusted by Rancher agent containers. Agents compare the checksum of the downloaded certificate against the `CATTLE_CA_CHECKSUM` environment variable. This means that, when the private CA certificate used by Rancher has changed, the environment variable `CATTLE_CA_CHECKSUM` must be updated accordingly.

#### Which method should I choose?

Method 1 is the easiest, but requires all clusters to be connected to Rancher after the certificates have been rotated. This is usually the case if the process is performed right after updating or redeploying the Rancher deployment (Step 3).

If the clusters have lost connection to Rancher but [Authorized Cluster Endpoint](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md) (ACE) is enabled on all clusters, then go with method 2.

Method 3 can be used as a fallback if method 1 and 2 are not possible.

#### Method 1: Force a redeploy of the Rancher agents

For each downstream cluster run the following command using the Kubeconfig file of the Rancher (local) management cluster.

```bash
kubectl annotate clusters.management.cattle.io <CLUSTER_ID> io.cattle.agent.force.deploy=true
```

:::note
Locate the cluster ID (c-xxxxx) for the downstream cluster, this can be seen in the browser URL bar when viewing the cluster in the Rancher UI, under Cluster Management.
:::

This command will cause the agent manifest to be reapplied with the checksum of the new certificate.

#### Method 2: Manually update the checksum environment variable

Manually patch the agent Kubernetes objects by updating the `CATTLE_CA_CHECKSUM` environment variable to the value matching the checksum of the new CA certificate. Generate the new checksum value like so:

```bash
curl -k -s -fL <RANCHER_SERVER_URL>/v3/settings/cacerts | jq -r .value | sha256sum | awk '{print $1}'
```

Using a Kubeconfig for each downstream cluster update the environment variable for the two agent deployments. If the [ACE](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md) is enabled for the cluster, [the kubectl context can be adjusted](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to connect directly to the downstream cluster.

```bash
kubectl edit -n cattle-system ds/cattle-node-agent
kubectl edit -n cattle-system deployment/cattle-cluster-agent
```

#### Method 3: Manually redeploy the Rancher agents

With this method the Rancher agents are reapplied by running a set of commands on a control plane node of each downstream cluster.

Repeat the below steps for each downstream cluster:

  1. Retrieve the agent registration kubectl command:
      1. Locate the cluster ID (c-xxxxx) for the downstream cluster, this can be seen in the URL when viewing the cluster in the Rancher UI under Cluster Management
      1. Add the Rancher server URL and cluster ID to the following URL: `https://<RANCHER_SERVER_URL>/v3/clusterregistrationtokens?clusterId=<CLUSTER_ID>`
      1. Copy the command from the `insecureCommand` field, this command is used because a private CA is un use

  2. Run the kubectl command from the previous step using a kubeconfig for the downstream cluster with one of the following methods:
      1. If the [ACE](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md) is enabled for the cluster, [the context can be adjusted](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to connect directly to the downstream cluster
      1. Alternatively, SSH into the control plane node:
          - RKE: Use the [steps in the document here](https://github.com/rancherlabs/support-tools/tree/master/how-to-retrieve-kubeconfig-from-custom-cluster) to generate a kubeconfig
          - RKE2/K3s: Use the kubeconfig populated during installation

### 5. Force Update Fleet clusters to reconnect the fleet-agent to Rancher

Select 'Force Update' for the clusters within the [Continuous Delivery](../../../integrations-in-rancher/fleet-gitops-at-scale/fleet-gitops-at-scale.md#accessing-fleet-in-the-rancher-ui) view of the Rancher UI to allow the fleet-agent in downstream clusters to successfully connect to Rancher.

#### Why is this step required?

Fleet agents in Rancher managed clusters store a kubeconfig that is used to connect to Rancher. The kubeconfig contains a `certificate-authority-data` field containing the CA for the certificate used by Rancher. When changing the CA, this block needs to be updated to allow the fleet-agent to trust the certificate used by Rancher.

## Updating from a Private CA Certificate to a Public CA Certificate

Follow these steps to perform the opposite procedure as shown above, to change from a certificate issued by a private CA, to a public or self-signed CA.

### 1. Create/update the certificate secret object

First, concatenate the server certificate followed by any intermediate certificate(s) to a file named `tls.crt` and provide the corresponding certificate key in a file named `tls.key`.

Use the following command to create the `tls-rancher-ingress` secret object in the Rancher (local) management cluster:

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

Alternatively, to update an existing `tls-rancher-ingress` secret:

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 2. Delete the CA certificate secret object

You will delete the `tls-ca` secret in the `cattle-system` namespace as it is no longer needed. You may also optionally save a copy of the `tls-ca` secret if desired.

To save the existing `tls-ca` secret:

```bash
kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml
```

To delete the existing `tls-ca` secret:

```bash
kubectl -n cattle-system delete secret tls-ca
```

### 3. Reconfigure the Rancher deployment

This step is required if the certificate source is changing. In this scenario it's likely only changing because Rancher was previously configured to use the default self-signed certificate (`ingress.tls.source=rancher`).

The below steps update the Helm values for the Rancher chart, so the Rancher pods and ingress are reconfigured to use the new certificate created in Step 1.

  1. Adjust the values that were used during initial installation, store the current values with:
   ```bash
   helm get values rancher -n cattle-system -o yaml > values.yaml
   ```
  1. Also get the version string of the currently deployed Rancher chart:
   ```bash
   helm ls -n cattle-system
   ```
  1. Update the current Helm values in the `values.yaml` file:
      1. As a private CA is no longer being used, remove the `privateCA: true` field, or set this to `false`
      1. Adjust the `ingress.tls.source` field as necessary. Please [refer to the chart options](../installation-references/helm-chart-options.md#common-options) for more details. Here are some examples:
          1. If using a public CA continue with a value of: `secret`
          1. If using Let's Encrypt update the value to: `letsEncrypt`
  1. Update the Helm values for the Rancher chart using the `values.yaml` file, and the current chart version to prevent an upgrade:
  ```bash
    helm upgrade rancher rancher-stable/rancher \
     --namespace cattle-system \
     -f values.yaml \
     --version <DEPLOYED_RANCHER_VERSION>
   ```

### 4. Reconfigure Rancher agents for the non-private/common certificate

As a private CA is no longer being used, the `CATTLE_CA_CHECKSUM` environment variable on the downstream cluster agents should be removed or set to "" (an empty string).

### 5. Force Update Fleet clusters to reconnect the fleet-agent to Rancher

Select 'Force Update' for the clusters within the [Continuous Delivery](../../../integrations-in-rancher/fleet-gitops-at-scale/fleet-gitops-at-scale.md#accessing-fleet-in-the-rancher-ui) view of the Rancher UI to allow the fleet-agent in downstream clusters to successfully connect to Rancher.

#### Why is this step required?

Fleet agents in Rancher managed clusters store a kubeconfig that is used to connect to Rancher. The kubeconfig contains a `certificate-authority-data` field containing the CA for the certificate used by Rancher. When changing the CA, this block needs to be updated to allow the fleet-agent to trust the certificate used by Rancher.
