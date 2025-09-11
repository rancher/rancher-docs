---
title: 4. Install Rancher
---


<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"/>
</head>

This section is about how to deploy Rancher for your air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy. There are _tabs_ for either a high availability (recommended) or a Docker installation.

<Tabs>
<TabItem value="Kubernetes Install (Recommended)">

Rancher recommends installing Rancher on a Kubernetes cluster. A highly available Kubernetes install is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails.

## 1. Add the Helm Chart Repository

From a system that has access to the internet, fetch the latest Helm chart and copy the resulting manifests to a system that has access to the Rancher server cluster.

1. If you haven't already, install `helm` locally on a workstation that has internet access. Note: Refer to the [Helm version requirements](../../resources/helm-version-requirements.md) to choose a version of Helm to install Rancher.

2. Use `helm repo add` command to add the Helm chart repository that contains charts to install Rancher. For more information about the repository choices and which is best for your use case, see [Choosing a Rancher Version](../../resources/choose-a-rancher-version.md).
    - Latest: Recommended for trying out the newest features
        ```
        helm repo add rancher-latest https://releases.rancher.com/server-charts/latest
        ```
    - Stable: Recommended for production environments
        ```
        helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
        ```
    - Alpha: Experimental preview of upcoming releases.
        ```
        helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
        ```
        Note: Upgrades are not supported to, from, or between Alphas.

3. Fetch the latest Rancher chart. This will pull down the chart and save it in the current directory as a `.tgz` file.
    ```plain
    helm fetch rancher-<CHART_REPO>/rancher
    ```

    If you require a specific version of Rancher, you can fetch this with the Helm `--version` parameter like in the following example:
    ```plain
    helm fetch rancher-stable/rancher --version=v2.4.8
    ```

## 2. Choose your SSL Configuration

Rancher Server is designed to be secure by default and requires SSL/TLS configuration.

When Rancher is installed on an air gapped Kubernetes cluster, there are two recommended options for the source of the certificate.

> **Note:** If you want terminate SSL/TLS externally, see [TLS termination on an External Load Balancer](../../../../reference-guides/installation-references/helm-chart-options.md#external-tls-termination).

| Configuration                              | Chart option                 | Description                                                                                                                                                 | Requires cert-manager |
| ------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Rancher Generated Self-Signed Certificates | `ingress.tls.source=rancher` | Use certificates issued by Rancher's generated CA (self signed)<br/> This is the **default** and does not need to be added when rendering the Helm template. | yes                   |
| Certificates from Files                    | `ingress.tls.source=secret`  | Use your own certificate files by creating Kubernetes Secret(s). <br/> This option must be passed when rendering the Rancher Helm template.                  | no                    |

## 3. Render the Rancher Helm Template

When setting up the Rancher Helm template, there are several options in the Helm chart that are designed specifically for air gap installations.

| Chart Option            | Chart Value                      | Description   |
| ----------------------- | -------------------------------- | ---- |
| `certmanager.version` | `<version>` | Configure proper Rancher TLS issuer depending of running cert-manager version. |
| `systemDefaultRegistry` | `<REGISTRY.YOURDOMAIN.COM:PORT>` | Configure Rancher server to always pull from your private registry when provisioning clusters.  |
| `useBundledSystemChart` | `true`                           | Configure Rancher server to use the packaged copy of Helm system charts. The [system charts](https://github.com/rancher/system-charts) repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These [Helm charts](https://github.com/rancher/system-charts) are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror. _Available as of v2.3.0_ |

Based on the choice your made in [2. Choose your SSL Configuration](#2-choose-your-ssl-configuration), complete one of the procedures below.

### Option A: Default Self-Signed Certificate

<details id="k8s-1">
  <summary>Click to expand</summary>

By default, Rancher generates a CA and uses cert-manager to issue the certificate for access to the Rancher server interface.

> **Note:**
> Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.11.0, please see our [upgrade cert-manager documentation](../../resources/upgrade-cert-manager.md).

1. From a system connected to the internet, add the cert-manager repo to Helm.
    ```plain
    helm repo add jetstack https://charts.jetstack.io
    helm repo update
    ```

1. Fetch the latest cert-manager chart available from the [Helm chart repository](https://hub.helm.sh/charts/jetstack/cert-manager).

    ```plain
    helm fetch jetstack/cert-manager --version v1.0.4
    ```

1. Render the cert manager template with the options you would like to use to install the chart. Remember to set the `image.repository` option to pull the image from your private registry. This will create a `cert-manager` directory with the Kubernetes manifest files.
   ```plain
   helm template cert-manager ./cert-manager-v1.0.4.tgz --output-dir . \
       --namespace cert-manager \
       --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller \
       --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook \
       --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector
   ```

1. Download the required CRD file for cert-manager
   ```plain
   curl -L -o cert-manager-crd.yaml https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.crds.yaml
   ```

1. Render the Rancher template, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools.


    Placeholder | Description
    ------------|-------------
    `<VERSION>` | The version number of the output tarball.
    `<RANCHER.YOURDOMAIN.COM>` | The DNS name you pointed at your load balancer.
    `<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.
    `<CERTMANAGER_VERSION>` | Cert-manager version running on k8s cluster.

     ```plain
    helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
     --namespace cattle-system \
     --set hostname=<RANCHER.YOURDOMAIN.COM> \
     --set certmanager.version=<CERTMANAGER_VERSION> \
     --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
     --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Available as of v2.2.0, set a default private registry to be used in Rancher
     --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts
```

**Optional**: To install a specific Rancher version, set the `rancherImageTag` value, example: `--set rancherImageTag=v2.3.6`

</details>

### Option B: Certificates From Files using Kubernetes Secrets

<details id="k8s-2">
  <summary>Click to expand</summary>

Create Kubernetes secrets from your own certificates for Rancher to use. The common name for the cert will need to match the `hostname` option in the command below, or the ingress controller will fail to provision the site for Rancher.

Render the Rancher template, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools.

| Placeholder                      | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| `<VERSION>`                      | The version number of the output tarball.       |
| `<RANCHER.YOURDOMAIN.COM>`       | The DNS name you pointed at your load balancer. |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.         |

```plain
   helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set ingress.tls.source=secret \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Available as of v2.2.0, set a default private registry to be used in Rancher
    --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts
```

If you are using a Private CA signed cert, add `--set privateCA=true` following `--set ingress.tls.source=secret`:

```plain
   helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set ingress.tls.source=secret \
    --set privateCA=true \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Available as of v2.2.0, set a default private registry to be used in Rancher
    --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts
```

**Optional**: To install a specific Rancher version, set the `rancherImageTag` value, example: `--set rancherImageTag=v2.3.6`

Then refer to [Adding TLS Secrets](../../resources/add-tls-secrets.md) to publish the certificate files so Rancher and the ingress controller can use them.

</details>

## 4. Install Rancher

Copy the rendered manifest directories to a system that has access to the Rancher server cluster to complete installation.

Use `kubectl` to create namespaces and apply the rendered manifests.

If you choose to use self-signed certificates in [2. Choose your SSL Configuration](#2-choose-your-ssl-configuration), install cert-manager.

### For Self-Signed Certificate Installs, Install cert-manager

<details id="install-cert-manager">
  <summary>Click to expand</summary>

If you are using self-signed certificates, install cert-manager:

1. Create the namespace for cert-manager.
```plain
kubectl create namespace cert-manager
```

1. Create the cert-manager CustomResourceDefinitions (CRDs).
```plain
kubectl apply -f cert-manager/cert-manager-crd.yaml
```

    > **Note:**
    > If you are running Kubernetes v1.15 or below, you will need to add the `--validate=false` flag to your `kubectl apply` command above, or else you will receive a validation error relating to the `x-kubernetes-preserve-unknown-fields` field in cert-manager’s CustomResourceDefinition resources. This is a benign error and occurs due to the way kubectl performs resource validation.

1. Launch cert-manager.
```plain
kubectl apply -R -f ./cert-manager
```

</details>

### Install Rancher with kubectl

```plain
kubectl create namespace cattle-system
kubectl -n cattle-system apply -R -f ./rancher
```
**Step Result:** If you are installing Rancher v2.3.0+, the installation is complete.

> **Note:** If you don't intend to send telemetry data, opt out [telemetry](../../../../faq/telemetry.md) during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully.

## 5. For Rancher Versions Before v2.3.0, Configure System Charts

If you are installing Rancher versions before v2.3.0, you will not be able to use the packaged system charts. Since the Rancher system charts are hosted in GitHub, an air gapped installation will not be able to access these charts. Therefore, you must [configure the Rancher system charts](../../resources/local-system-charts.md).

## Additional Resources

These resources could be helpful when installing Rancher:

- [Rancher Helm chart options](../../../../reference-guides/installation-references/helm-chart-options.md)
- [Adding TLS secrets](../../resources/add-tls-secrets.md)
- [Troubleshooting Rancher Kubernetes Installations](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)

</TabItem>
<TabItem value="Docker Install">

The Docker installation is for Rancher users who want to test out Rancher.

Instead of running on a Kubernetes cluster, you install the Rancher server component on a single node using a `docker run` command. Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server.

> **Important:** There is no upgrade path to transition your Docker installation to a Kubernetes Installation.** Instead of running the single node installation, you have the option to follow the Kubernetes Install guide, but only use one node to install Rancher. Afterwards, you can scale up the etcd nodes in your Kubernetes cluster to make it a Kubernetes Installation.

For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster.

| Environment Variable Key         | Environment Variable Value       | Description     |
| -------------------------------- | -------------------------------- | ---- |
| `CATTLE_SYSTEM_DEFAULT_REGISTRY` | `<REGISTRY.YOURDOMAIN.COM:PORT>` | Configure Rancher server to always pull from your private registry when provisioning clusters.  |
| `CATTLE_SYSTEM_CATALOG`          | `bundled`                        | Configure Rancher server to use the packaged copy of Helm system charts. The [system charts](https://github.com/rancher/system-charts) repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These [Helm charts](https://github.com/rancher/system-charts) are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror. _Available as of v2.3.0_ |

> **Do you want to...**
>
> - Configure custom CA root certificate to access your services? See [Custom CA root certificate](../../resources/custom-ca-root-certificates.md).
> - Record all transactions with the Rancher API? See [API Auditing](../../../../reference-guides/single-node-rancher-in-docker/advanced-options.md#api-audit-log).

- For Rancher before v2.3.0, you will need to mirror the `system-charts` repository to a location in your network that Rancher can reach. Then, after Rancher is installed, you will need to configure Rancher to use that repository. For details, refer to the documentation on [setting up the system charts for Rancher before v2.3.0.](../../resources/local-system-charts.md)

Choose from the following options:

### Option A: Default Self-Signed Certificate

<details id="option-a">
  <summary>Click to expand</summary>

If you are installing Rancher in a development or testing environment where identity verification isn't a concern, install Rancher using the self-signed certificate that it generates. This installation option omits the hassle of generating a certificate yourself.

Log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder.

| Placeholder                      | Description                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.                                                                                           |
| `<RANCHER_VERSION_TAG>`          | The release tag of the [Rancher version](../../../../reference-guides/installation-references/helm-chart-options.md) that you want to install. |

```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ #Available as of v2.3.0, use the packaged Rancher system charts
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

</details>

### Option B: Bring Your Own Certificate: Self-Signed

<details id="option-b">
  <summary>Click to expand</summary>

In development or testing environments where your team will access your Rancher server, create a self-signed certificate for use with your install so that your team can verify they're connecting to your instance of Rancher.

> **Prerequisites:**
> From a computer with an internet connection, create a self-signed certificate using [OpenSSL](https://www.openssl.org/) or another method of your choice.
>
> - The certificate files must be in PEM format.
> - In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see [Certificate Troubleshooting.](../rancher-on-a-single-node-with-docker/certificate-troubleshooting.md)

After creating your certificate, log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder. Use the `-v` flag and provide the path to your certificates to mount them in your container.

| Placeholder                      | Description                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<CERT_DIRECTORY>`               | The path to the directory containing your certificate files.                                                                  |
| `<FULL_CHAIN.pem>`               | The path to your full certificate chain.                                                                                      |
| `<PRIVATE_KEY.pem>`              | The path to the private key for your certificate.                                                                             |
| `<CA_CERTS.pem>`                     | The path to the certificate authority's certificate.                                                                          |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.                                                                                           |
| `<RANCHER_VERSION_TAG>`          | The release tag of the [Rancher version](../../../../reference-guides/installation-references/helm-chart-options.md) that you want to install. |



```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
    -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ #Available as of v2.3.0, use the packaged Rancher system charts
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

</details>

### Option C: Bring Your Own Certificate: Signed by Recognized CA

<details id="option-c">
  <summary>Click to expand</summary>

In development or testing environments where you're exposing an app publicly, use a certificate signed by a recognized CA so that your user base doesn't encounter security warnings.

> **Prerequisite:** The certificate files must be in PEM format.

After obtaining your certificate, log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder. Because your certificate is signed by a recognized CA, mounting an additional CA certificate file is unnecessary.

| Placeholder                      | Description                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<CERT_DIRECTORY>`               | The path to the directory containing your certificate files.                                                                  |
| `<FULL_CHAIN.pem>`               | The path to your full certificate chain.                                                                                      |
| `<PRIVATE_KEY.pem>`              | The path to the private key for your certificate.                                                                             |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.                                                                                           |
| `<RANCHER_VERSION_TAG>`          | The release tag of the [Rancher version](../../../../reference-guides/installation-references/helm-chart-options.md) that you want to install. |

> **Note:** Use the `--no-cacerts` as argument to the container to disable the default CA certificate generated by Rancher.

```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    --no-cacerts \
    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ #Available as of v2.3.0, use the packaged Rancher system charts
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

</details>

If you are installing Rancher v2.3.0+, the installation is complete.

> **Note:** If you don't intend to send telemetry data, opt out [telemetry](../../../../faq/telemetry.md) during the initial login.

If you are installing Rancher versions before v2.3.0, you will not be able to use the packaged system charts. Since the Rancher system charts are hosted in GitHub, an air gapped installation will not be able to access these charts. Therefore, you must [configure the Rancher system charts](../../resources/local-system-charts.md).

</TabItem>
</Tabs>
