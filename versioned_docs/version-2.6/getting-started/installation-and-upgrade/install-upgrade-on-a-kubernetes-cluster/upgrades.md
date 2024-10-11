---
title: Upgrades
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"/>
</head>

The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air-gapped installs with Helm.

For the instructions to upgrade Rancher installed with Docker, refer to [this page.](../other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher.md)

To upgrade the components in your Kubernetes cluster, or the definition of the [Kubernetes services](https://rancher.com/docs/rke/latest/en/config-options/services/) or [add-ons](https://rancher.com/docs/rke/latest/en/config-options/add-ons/), refer to the [upgrade documentation for RKE](https://rancher.com/docs/rke/latest/en/upgrades/), the Rancher Kubernetes Engine.

## Prerequisites

### Access to kubeconfig

Helm should be run from the same location as your kubeconfig file, or the same location where you run your kubectl commands from.

If you installed Kubernetes with RKE, the config will have been created in the directory you ran `rke up` in.

The kubeconfig can also be manually targeted for the intended cluster with the `--kubeconfig` tag (see: https://helm.sh/docs/helm/helm/)

### Review Known Issues

Review the list of known issues for each Rancher version, which can be found in the release notes on [GitHub](https://github.com/rancher/rancher/releases) and on the [Rancher forums.](https://forums.rancher.com/c/announcements/12)

Note that upgrades _to_ or _from_ any chart in the [rancher-alpha repository](../resources/choose-a-rancher-version.md#helm-chart-repositories) aren't supported.
### Helm Version

The upgrade instructions assume you are using Helm 3.

For migration of installs started with Helm 2, refer to the official [Helm 2 to 3 migration docs.](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/) The [Helm 2 upgrade page here](../../../../version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2.md)provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.

### For air-gapped installs: Populate private registry

For [air-gapped installs only,](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md) collect and populate images for the new Rancher server version. Follow the guide to [populate your private registry](../other-installation-methods/air-gapped-helm-cli-install/publish-images.md) with the images for the Rancher version that you want to upgrade to.

### For upgrades with cert-manager older than 0.8.0

[Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.](https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753) Upgrade cert-manager to the latest version by following [these instructions.](../resources/upgrade-cert-manager.md)

## Upgrade Outline

Follow the steps to upgrade Rancher server:

### 1. Back up Your Kubernetes Cluster that is Running Rancher Server

Use the [backup application](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md) to back up Rancher.

You'll use the backup as a restore point if something goes wrong during upgrade.

### 2. Update the Helm chart repository

1. Update your local Helm repo cache:

    ```
    helm repo update
    ```

1. Get the repository name that you used to install Rancher.

    For information about the repos and their differences, see [Helm Chart Repositories](../resources/choose-a-rancher-version.md#helm-chart-repositories).

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

    ```
    helm repo list

    NAME          	       URL
    stable        	       https://charts.helm.sh/stable
    rancher-<CHART_REPO>	 https://releases.rancher.com/server-charts/<CHART_REPO>
    ```

    :::note

    If you want to switch to a different Helm chart repository, please follow the [steps on how to switch repositories](../resources/choose-a-rancher-version.md#switching-to-a-different-helm-chart-repository). If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added.

    :::

1. Fetch the latest chart to install Rancher from the Helm chart repository.

    This command will pull down the latest charts and save it in the current directory as a `.tgz` file.

    ```plain
    helm fetch rancher-<CHART_REPO>/rancher
    ```
    You can fetch the chart for the specific version you are upgrading to by adding in the `--version=` tag.  For example:

    ```plain
    helm fetch rancher-<CHART_REPO>/rancher --version=2.6.8
    ```

### 3. Upgrade Rancher

This section describes how to upgrade normal (Internet-connected) or air-gapped installations of Rancher with Helm.

:::note Air Gap Instructions:

If you are installing Rancher in an air-gapped environment, skip the rest of this page and render the Helm template by following the instructions on [this page.](air-gapped-upgrades.md)

:::


Get the values, which were passed with `--set`, from the current Rancher Helm chart that is installed.

```
helm get values rancher -n cattle-system

hostname: rancher.my.org
```

:::note

There will be more values that are listed with this command. This is just an example of one of the values.

:::

:::tip 
Your deployment name may vary; for example, if you're deploying Rancher through the AWS Marketplace, the deployment name is 'rancher-stable'. 
Thus: 
```
helm get values rancher-stable -n cattle-system

hostname: rancher.my.org
```
:::

If you are upgrading cert-manager to the latest version from v1.5 or below, follow the [cert-manager upgrade docs](../resources/upgrade-cert-manager.md#option-c-upgrade-cert-manager-from-versions-15-and-below) to learn how to upgrade cert-manager without needing to perform an uninstall or reinstall of Rancher. Otherwise, follow the [steps to upgrade Rancher](#steps-to-upgrade-rancher) below.

#### Steps to Upgrade Rancher

Upgrade Rancher to the latest version with all your settings.

Take all the values from the previous step and append them to the command using `--set key=value`:

```
helm upgrade rancher rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org
```

:::note

The above is an example, there may be more values from the previous step that need to be appended.

:::

:::tip 
If you deploy Rancher through the AWS Marketplace, the deployment name is 'rancher-stable'. 
Thus: 
```
helm upgrade rancher-stable rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org
```
:::

Alternatively, it's possible to export the current values to a file and reference that file during upgrade. For example, to only change the Rancher version:

```
helm get values rancher -n cattle-system -o yaml > values.yaml

helm upgrade rancher rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  -f values.yaml \
  --version=2.6.8
```

### 4. Verify the Upgrade

Log into Rancher to confirm that the upgrade succeeded.

:::tip

Having network issues following upgrade?

See [Restoring Cluster Networking](../../../../version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md).

:::

## Known Upgrade Issues

A list of known issues for each Rancher version can be found in the release notes on [GitHub](https://github.com/rancher/rancher/releases) and on the [Rancher forums.](https://forums.rancher.com/c/announcements/12)
