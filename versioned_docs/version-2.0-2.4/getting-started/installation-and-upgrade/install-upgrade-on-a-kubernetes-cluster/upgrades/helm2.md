---
title: Upgrading Rancher Installed on Kubernetes with Helm 2
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"/>
</head>

> Helm 3 has been released.  If you are using Helm 2, we recommend [migrating to Helm 3](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/) because it is simpler to use and more secure than Helm 2.
>
> The [current instructions for Upgrading Rancher Installed on Kubernetes](../../../../pages-for-subheaders/upgrades.md) use Helm 3.
>
> This section provides a copy of the older instructions for upgrading Rancher with Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.

The following instructions will guide you through using Helm to upgrade a Rancher server that is installed on a Kubernetes cluster.

To upgrade the components in your Kubernetes cluster, or the definition of the [Kubernetes services](https://rancher.com/docs/rke/latest/en/config-options/services/) or [add-ons](https://rancher.com/docs/rke/latest/en/config-options/add-ons/), refer to the [upgrade documentation for RKE](https://rancher.com/docs/rke/latest/en/upgrades/), the Rancher Kubernetes Engine.

If you installed Rancher using the RKE Add-on yaml, follow the directions to [migrate or upgrade](./migrating-from-rke-add-on.md).

>**Notes:**
>
> - [Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.](https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753) Upgrade cert-manager to the latest version by following [these instructions.](../../resources/upgrade-cert-manager.md)
> - If you are upgrading Rancher from v2.x to v2.3+, and you are using external TLS termination, you will need to edit the cluster.yml to [enable using forwarded host headers.](../../../../reference-guides/installation-references/helm-chart-options.md#configuring-ingress-for-external-tls-when-using-nginx-v025)
> - The upgrade instructions assume you are using Helm 3. For migration of installs started with Helm 2, refer to the official [Helm 2 to 3 migration docs.](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/) This [section](../../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2.md) provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.

## Prerequisites

- **Review the [known upgrade issues](../../../../pages-for-subheaders/upgrades.md)** in the Rancher documentation for the most noteworthy issues to consider when upgrading Rancher. A more complete list of known issues for each Rancher version can be found in the release notes on [GitHub](https://github.com/rancher/rancher/releases) and on the [Rancher forums.](https://forums.rancher.com/c/announcements/12)
- **For [air gap installs only,](../../../../pages-for-subheaders/air-gapped-helm-cli-install.md) collect and populate images for the new Rancher server version.** Follow the guide to [populate your private registry](../../other-installation-methods/air-gapped-helm-cli-install/publish-images.md) with the images for the Rancher version that you want to upgrade to.

## Upgrade Outline

Follow the steps to upgrade Rancher server:

- [A. Back up your Kubernetes cluster that is running Rancher server](#a-back-up-your-kubernetes-cluster-that-is-running-rancher-server)
- [B. Update the Helm chart repository](#b-update-the-helm-chart-repository)
- [C. Upgrade Rancher](#c-upgrade-rancher)
- [D. Verify the Upgrade](#d-verify-the-upgrade)

### A. Back up Your Kubernetes Cluster that is Running Rancher Server

[Take a one-time snapshot](../../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md#option-b-one-time-snapshots)
of your Kubernetes cluster running Rancher server. You'll use the snapshot as a restore point if something goes wrong during upgrade.

### B. Update the Helm chart repository

1. Update your local Helm repo cache.

    ```
    helm repo update
    ```

1. Get the repository name that you used to install Rancher.

    For information about the repos and their differences, see [Helm Chart Repositories](../../resources/choose-a-rancher-version.md#helm-chart-repositories).

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

    ```
    helm repo list

    NAME          	       URL
    stable        	       https://charts.helm.sh/stable
    rancher-<CHART_REPO>	 https://releases.rancher.com/server-charts/<CHART_REPO>
    ```

    > **Note:** If you want to switch to a different Helm chart repository, please follow the [steps on how to switch repositories](../../resources/choose-a-rancher-version.md#switching-to-a-different-helm-chart-repository). If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added.


1. Fetch the latest chart to install Rancher from the Helm chart repository.

    This command will pull down the latest charts and save it in the current directory as a `.tgz` file.

    ```plain
    helm fetch rancher-<CHART_REPO>/rancher
    ```

### C. Upgrade Rancher

This section describes how to upgrade normal (Internet-connected) or air gap installations of Rancher with Helm.

<Tabs>
<TabItem value="Kubernetes Upgrade">

Get the values, which were passed with `--set`, from the current Rancher Helm chart that is installed.

```
helm get values rancher

hostname: rancher.my.org
```

> **Note:** There will be more values that are listed with this command. This is just an example of one of the values.

If you are also upgrading cert-manager to the latest version from a version older than 0.11.0, follow `Option B: Reinstalling Rancher`. Otherwise, follow `Option A: Upgrading Rancher`.

<details>
  <summary>Option A: Upgrading Rancher</summary>

Upgrade Rancher to the latest version with all your settings.

Take all the values from the previous step and append them to the command using `--set key=value`. Note: There will be many more options from the previous step that need to be appended.

```
helm upgrade --install rancher rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org
```
</details>

<details>
  <summary>Option B: Reinstalling Rancher chart</summary>

If you are currently running the cert-manager whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, then you need to reinstall both Rancher and cert-manager due to the API change in cert-manager v0.11.

1. Uninstall Rancher

    ```
    helm delete rancher
    ```
    In case this results in an error that the release "rancher" was not found, make sure you are using the correct deployment name. Use `helm list` to list the helm-deployed releases.

2. Uninstall and reinstall `cert-manager` according to the instructions on the [Upgrading Cert-Manager](../../resources/upgrade-cert-manager-helm-2.md) page.

3. Reinstall Rancher to the latest version with all your settings. Take all the values from the step 1 and append them to the command using `--set key=value`. Note: There will be many more options from the step 1 that need to be appended.

    ```
    helm install rancher-<CHART_REPO>/rancher \
    --name rancher \
    --namespace cattle-system \
    --set hostname=rancher.my.org
    ```

</details>

</TabItem>
<TabItem value="Kubernetes Air Gap Upgrade">

1. Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools.

    Based on the choice you made during installation, complete one of the procedures below.

    Placeholder | Description
    ------------|-------------
    `<VERSION>` | The version number of the output tarball.
    `<RANCHER.YOURDOMAIN.COM>` | The DNS name you pointed at your load balancer.
    `<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.
    `<CERTMANAGER_VERSION>` | Cert-manager version running on k8s cluster.

<details id="self-signed">
  <summary>Option A-Default Self-Signed Certificate</summary>

 ```plain
helm template ./rancher-<VERSION>.tgz --output-dir . \
 --name rancher \
 --namespace cattle-system \
 --set hostname=<RANCHER.YOURDOMAIN.COM> \
 --set certmanager.version=<CERTMANAGER_VERSION> \
 --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
 --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Available as of v2.2.0, set a default private registry to be used in Rancher
 --set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts
```

</details>
<details id="secret">
  <summary>Option B: Certificates From Files using Kubernetes Secrets</summary>

```plain
helm template ./rancher-<VERSION>.tgz --output-dir . \
--name rancher \
--namespace cattle-system \
--set hostname=<RANCHER.YOURDOMAIN.COM> \
--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
--set ingress.tls.source=secret \
--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Available as of v2.2.0, set a default private registry to be used in Rancher
--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts
```

If you are using a Private CA signed cert, add `--set privateCA=true` following `--set ingress.tls.source=secret`:

```plain
helm template ./rancher-<VERSION>.tgz --output-dir . \
--name rancher \
--namespace cattle-system \
--set hostname=<RANCHER.YOURDOMAIN.COM> \
--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
--set ingress.tls.source=secret \
--set privateCA=true \
--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Available as of v2.2.0, set a default private registry to be used in Rancher
--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts
```

</details>

2. Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates.

    Use `kubectl` to apply the rendered manifests.

    ```plain
    kubectl -n cattle-system apply -R -f ./rancher
    ```

</TabItem>
</Tabs>

### D. Verify the Upgrade

Log into Rancher to confirm that the upgrade succeeded.

>**Having network issues following upgrade?**
>
> See [Restoring Cluster Networking](namespace-migration.md#restoring-cluster-networking).

## Rolling Back

Should something go wrong, follow the [roll back](../rollbacks.md) instructions to restore the snapshot you took before you preformed the upgrade.
