---
title: Upgrading in an Air-Gapped Environment
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"/>
</head>

:::note

These instructions assume you have already followed the instructions for a Kubernetes upgrade on [this page,](upgrades.md) including the prerequisites, up until step 3. Upgrade Rancher.

:::

## Rancher Helm Upgrade Options

To upgrade with Helm, apply the same options that you used when installing Rancher. Refer to the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools.

Based on the choice you made during installation, complete one of the procedures below.

Placeholder | Description
------------|-------------
`<VERSION>` | The version number of the output tarball.
`<RANCHER.YOURDOMAIN.COM>` | The DNS name you pointed at your load balancer.
`<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.
`<CERTMANAGER_VERSION>` | Cert-manager version running on k8s cluster.


### Option A: Default Self-signed Certificate

```
helm upgrade rancher ./rancher-<VERSION>.tgz \
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set certmanager.version=<CERTMANAGER_VERSION> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

#### Resolving UPGRADE FAILED Error

If you encounter the error message, `Error: UPGRADE FAILED: "rancher" has no deployed releases`, Rancher might have been installed via the `helm template` command. To successfully upgrade Rancher, use the following command instead:

```
helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
    --no-hooks \ # prevent files for Helm hooks from being generated
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set certmanager.version=<CERTMANAGER_VERSION> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

After you run the Helm command, apply the rendered template:

```
kubectl -n cattle-system apply -R -f ./rancher
```

### Option B: Certificates from Files using Kubernetes Secrets

```plain
helm upgrade rancher ./rancher-<VERSION>.tgz \
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set ingress.tls.source=secret \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

If you are using a Private CA signed cert, add `--set privateCA=true` following `--set ingress.tls.source=secret`:

```plain
helm upgrade rancher ./rancher-<VERSION>.tgz \
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set ingress.tls.source=secret \
	--set privateCA=true \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

## Verify the Upgrade

Log into Rancher to confirm that the upgrade succeeded.

:::tip

Having network issues following upgrade?

See [Restoring Cluster Networking](https://github.com/rancher/rancher-docs/tree/main/archived_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md).

:::

## Known Upgrade Issues

A list of known issues for each Rancher version can be found in the release notes on [GitHub](https://github.com/rancher/rancher/releases) and on the [Rancher forums.](https://forums.rancher.com/c/announcements/12)
