---
title: Installing the Adapter
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"/>
</head>

> **Important:** If you are attempting to re-install the adapter, you may experience errant out-of-compliance messages for up to an hour.

### Rancher vs. Adapter Compatibility Matrix

:::note Important:

Different versions of the CSP adapter rely on features found in specific versions of Rancher.
In order to deploy and run the adapter successfully, you need to ensure its version corresponds to the necessary version of Rancher.

:::

| Rancher Version | Adapter Version  |
|-----------------|------------------|
| v2.10.11        | v105.0.0+up5.0.1 |
| v2.10.10        | v105.0.0+up5.0.1 |
| v2.10.9         | v105.0.0+up5.0.1 |
| v2.10.8         | v105.0.0+up5.0.1 |
| v2.10.7         | v105.0.0+up5.0.1 |
| v2.10.6         | v105.0.0+up5.0.1 |
| v2.10.5         | v105.0.0+up5.0.1 |
| v2.10.4         | v105.0.0+up5.0.1 |
| v2.10.3         | v105.0.0+up5.0.1 |
| v2.10.2         | v105.0.0+up5.0.1 |
| v2.10.1         | v105.0.0+up5.0.1 |
| v2.10.0         | v105.0.0+up5.0.1 |

### 1. Gain Access to the Local Cluster

> **Note:** Only admin users should have access to the local cluster. Because the CSP adapter must be installed in the local cluster, this installation must be carried out by an admin user.

First, click on the local cluster and download a kubeconfig token. You can then configure your CLI to use this new token with the following command, replacing `$TOKEN_PATH` with the path on your filesystem to the downloaded token:

```bash
export KUBECONFIG=$TOKEN_PATH
```

### 2. Create the Adapter Namespace

Create the namespace that the adapter will be installed in.

```bash
kubectl create ns cattle-csp-adapter-system
```

### 3. Create Certificate Secrets

The adapter requires access to the root CA that Rancher is using to communicate with the Rancher server. You can read more about which certificate options Rancher supports in the [chart options page](../../../getting-started/installation-and-upgrade/installation-references/helm-chart-options.md).

If your Rancher install uses a certificate signed by a recognized Certificate Authority such as Let's Encrypt, then you can safely skip to [Step 4](#4-install-the-chart).

However, if your Rancher install uses a custom certificate such as a Rancher-generated certificate or one signed by a private Certificate Authority, you will need to provide the certificate for this authority in PEM-encoded format so that the adapter can communicate with Rancher.

First, retrieve the certificate that Rancher is using and place in a file named `ca-additional.pem`. If you are using the Rancher-generated certs option, this can be done with the following command:

```bash
kubectl get secret tls-rancher -n cattle-system -o jsonpath="{.data.tls\.crt}" | base64 -d  >> ca-additional.pem
```

Then, create a secret which uses this cert:

```bash
kubectl -n cattle-csp-adapter-system create secret generic tls-ca-additional --from-file=ca-additional.pem
```

> **Important:** Do not change the names of the file or of the created secret. Making changes to these values may result in errors when the adapter runs.

### 4. Install the Chart

First, add the `rancher/charts` repo using the following command:

```bash
helm repo add rancher-charts https://charts.rancher.io
```

Next, install the CSP adapter. You must specify several values, including the account number, and the name of the role created in the prerequisites.

Ensure that you use the version of the CSP adapter that matches the version of Rancher that you are running, as defined [above](#rancher-vs-adapter-compatibility-matrix).

For the below instructions, replace `$MY_ACC_NUM` with your AWS account number and `$MY_ROLE_NAME` with the name of the role created in the prerequisites. In addition, replace `$CSP_ADAPTER_VERSION` with the version that matches your Rancher version in the [version matrix](#rancher-vs-adapter-compatibility-matrix).

> **Note:** If you use shell variables, do not specify quotation marks. For example, MY_ACC_NUM=123456789012 will work, but MY_ACC_NUM="123456789012" will fail.

> **Note:** Accounts using the AWS Marketplace listing for the EU and the UK will need to specify an additional `--set image.repository=rancher/rancher-csp-adapter-eu` option. To see if your account needs this option when installing the adapter, refer to the usage instructions of the marketplace listing.

<Tabs>
<TabItem value="Let's Encrypt/ Public Certificate Authority">

  ```bash
  helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --version $CSP_ADAPTER_VERSION
  ```


  Alternatively, you can use a `values.yaml` and specify options like below:

  ```yaml
  aws:
    enabled: true
    accountNumber: "$MY_ACC_NUM"
    roleName: $MY_ROLE_NAME
  ```

  > **Note:** The account number needs to be specified in a string format, like the above, or the installation will fail.

  You can then install the adapter with the following command:

  ```bash
  helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml --version $CSP_ADAPTER_VERSION
  ```

  </TabItem>
  <TabItem value="Private CA Authority / Rancher-generated Certificates">

  ```bash
  helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --set additionalTrustedCAs=true --version $CSP_ADAPTER_VERSION
  ```

  Alternatively, you can use a `values.yaml` and specify options the below:

  ```yaml
  aws:
    enabled: true
    accountNumber: "$MY_ACC_NUM"
    roleName: $MY_ROLE_NAME
  additionalTrustedCAs: true
  ```

  > **Note:** The account number needs to be specified in a string format, like the above, or the installation will fail.

  You can then install the adapter with the following command:

  ```bash
  helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml --version $CSP_ADAPTER_VERSION
  ```

  </TabItem>
</Tabs>

### 5. Managing Certificate Updates

If you had to create a secret storing a custom cert in [Step 3](#3-create-certificate-secrets), you will need to update this secret over time as the certificate is rotated.

First, delete the original secret in the cattle-csp-adapter-system namespace, using the below command:

```bash
kubectl delete secret tls-ca-additional -n cattle-csp-adapter-system
```

Then, follow the original installation steps in [Step 3](#3-create-certificate-secrets) to replace the content of the secret with the updated value.

Finally, restart the rancher-csp-adapter deployment to ensure that the updated value is made available to the adapter:

```bash
kubectl rollout restart deploy rancher-csp-adapter -n cattle-csp-adapter-system
```

> **Note:** Methods such as cert-manager's [trust operator](https://cert-manager.io/docs/projects/trust/) allow you to automate some of these tasks. Although these methods aren't officially supported, they can reduce how often you need to manually rotate certificates.
