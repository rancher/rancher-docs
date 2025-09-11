---
title: 4. Install Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"/>
</head>

This section is about how to deploy Rancher for your air gapped environment in a high-availability Kubernetes installation. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.

## Privileged Access for Rancher

When the Rancher server is deployed in the Docker container, a local Kubernetes cluster is installed within the container for Rancher to use. Because many features of Rancher run as deployments, and privileged mode is required to run containers within containers, you will need to install Rancher with the `--privileged` option.

## Docker Instructions

If you want to continue the air gapped installation using Docker commands, skip the rest of this page and follow the instructions on [this page.](docker-install-commands.md)

## Kubernetes Instructions

Rancher recommends installing Rancher on a Kubernetes cluster. A highly available Kubernetes install is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails.

### 1. Add the Helm Chart Repository

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
        helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha
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

### 2. Choose your SSL Configuration

Rancher Server is designed to be secure by default and requires SSL/TLS configuration.

When Rancher is installed on an air gapped Kubernetes cluster, there are two recommended options for the source of the certificate.

:::note

If you want terminate SSL/TLS externally, see [TLS termination on an External Load Balancer](../../installation-references/helm-chart-options.md#external-tls-termination).

:::

| Configuration                              | Chart option                 | Description                                                                                                                                                 | Requires cert-manager |
| ------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Rancher Generated Self-Signed Certificates | `ingress.tls.source=rancher` | Use certificates issued by Rancher's generated CA (self signed)<br/> This is the **default** and does not need to be added when rendering the Helm template. | yes                   |
| Certificates from Files                    | `ingress.tls.source=secret`  | Use your own certificate files by creating Kubernetes Secret(s). <br/> This option must be passed when rendering the Rancher Helm template.                  | no                    |

### Helm Chart Options for Air Gap Installations

When setting up the Rancher Helm template, there are several options in the Helm chart that are designed specifically for air gap installations.

| Chart Option            | Chart Value                      | Description   |
| ----------------------- | -------------------------------- | ---- |
| `certmanager.version` | `<version>` | Configure proper Rancher TLS issuer depending of running cert-manager version. |
| `systemDefaultRegistry` | `<REGISTRY.YOURDOMAIN.COM:PORT>` | Configure Rancher server to always pull from your private registry when provisioning clusters.  |
| `useBundledSystemChart` | `true`                           | Configure Rancher server to use the packaged copy of Helm system charts. The [system charts](https://github.com/rancher/system-charts) repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These [Helm charts](https://github.com/rancher/system-charts) are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror. |

### 3. Fetch the Cert-Manager Chart

Based on the choice your made in [2. Choose your SSL Configuration](#2-choose-your-ssl-configuration), complete one of the procedures below.

#### Option A: Default Self-Signed Certificate

By default, Rancher generates a CA and uses cert-manager to issue the certificate for access to the Rancher server interface.

:::note

Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.11.0, please see our [upgrade cert-manager documentation](../../resources/upgrade-cert-manager.md).

:::

##### 1. Add the cert-manager Repo

From a system connected to the internet, add the cert-manager repo to Helm:

```plain
helm repo add jetstack https://charts.jetstack.io
helm repo update
```

##### 2. Fetch the cert-manager Chart

Fetch the latest cert-manager chart available from the [Helm chart repository](https://artifacthub.io/packages/helm/cert-manager/cert-manager).

```plain
helm fetch jetstack/cert-manager --version v1.11.0
```

##### 3. Retrieve the cert-manager CRDs

Download the required CRD file for cert-manager:
   ```plain
   curl -L -o cert-manager-crd.yaml https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.crds.yaml
   ```

### 4. Install Rancher

Copy the fetched charts to a system that has access to the Rancher server cluster to complete installation.

#### 1. Install cert-manager

Install cert-manager with the same options you would use to install the chart. Remember to set the `image.repository` option to pull the image from your private registry.

:::note

To see options on how to customize the cert-manager install (including for cases where your cluster uses PodSecurityPolicies), see the [cert-manager docs](https://artifacthub.io/packages/helm/cert-manager/cert-manager#configuration).

:::

<details id="install-cert-manager">
  <summary>Click to expand</summary>

If you are using self-signed certificates, install cert-manager:

1. Create the namespace for cert-manager.

    ```plain
    kubectl create namespace cert-manager
    ```

2. Create the cert-manager CustomResourceDefinitions (CRDs).

    ```plain
    kubectl apply -f cert-manager-crd.yaml
    ```

3. Install cert-manager.

    ```plain
    helm install cert-manager ./cert-manager-v1.11.0.tgz \
        --namespace cert-manager \
        --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller \
        --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook \
        --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector \
        --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-ctl
    ```

</details>

#### 2. Install Rancher

First, refer to [Adding TLS Secrets](../../resources/add-tls-secrets.md) to publish the certificate files so Rancher and the ingress controller can use them.

Then, create the namespace for Rancher using kubectl:

```plain
kubectl create namespace cattle-system
```

Next, install Rancher, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools.

For Kubernetes v1.25 or later, set `global.cattle.psp.enabled` to `false` when using Rancher v2.7.2-v2.7.4. This is not necessary for Rancher v2.7.5 and above, but you can still manually set the option if you choose.

Placeholder | Description
------------|-------------
`<VERSION>` | The version number of the output tarball.
`<RANCHER.YOURDOMAIN.COM>` | The DNS name you pointed at your load balancer.
`<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.
`<CERTMANAGER_VERSION>` | Cert-manager version running on k8s cluster.

```plain
   helm install rancher ./rancher-<VERSION>.tgz \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set certmanager.version=<CERTMANAGER_VERSION> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    --set useBundledSystemChart=true # Use the packaged Rancher system charts
```

**Optional**: To install a specific Rancher version, set the `rancherImageTag` value, example: `--set rancherImageTag=v2.5.8`

#### Option B: Certificates From Files Using Kubernetes Secrets

##### 1. Create Secrets

Create Kubernetes secrets from your own certificates for Rancher to use. The common name for the cert will need to match the `hostname` option in the command below, or the ingress controller will fail to provision the site for Rancher.

##### 2. Install Rancher

Install Rancher, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools.

For Kubernetes v1.25 or later, set `global.cattle.psp.enabled` to `false` when using Rancher v2.7.2-v2.7.4. This is not necessary for Rancher v2.7.5 and above, but you can still manually set the option if you choose.

| Placeholder                      | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| `<VERSION>`                      | The version number of the output tarball.       |
| `<RANCHER.YOURDOMAIN.COM>`       | The DNS name you pointed at your load balancer. |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.         |

```plain
   helm install rancher ./rancher-<VERSION>.tgz \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set ingress.tls.source=secret \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    --set useBundledSystemChart=true # Use the packaged Rancher system charts
```

If you are using a Private CA signed cert, add `--set privateCA=true` following `--set ingress.tls.source=secret`:

```plain
   helm install rancher ./rancher-<VERSION>.tgz \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set ingress.tls.source=secret \
    --set privateCA=true \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    --set useBundledSystemChart=true # Use the packaged Rancher system charts
```


The installation is complete.
:::caution

If you don't intend to send telemetry data, opt out [telemetry](../../../../faq/telemetry.md) during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully.

:::

## Additional Resources

These resources could be helpful when installing Rancher:

- [Importing and installing extensions in an air-gapped environment](../../../../integrations-in-rancher/rancher-extensions.md#importing-and-installing-extensions-in-an-air-gapped-environment)
- [Rancher Helm chart options](../../installation-references/helm-chart-options.md)
- [Adding TLS secrets](../../resources/add-tls-secrets.md)
- [Troubleshooting Rancher Kubernetes Installations](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)
