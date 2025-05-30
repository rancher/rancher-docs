---
title: Helm Version Requirements
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/helm-version-requirements"/>
</head>

This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster.

> The installation instructions have been updated for Helm 3. For migration of installs started with Helm 2, refer to the official [Helm 2 to 3 Migration Docs.](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/) [This section](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm2.md) provides a copy of the older high-availability Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.

- Helm v3.2.x or higher is required to install or upgrade Rancher v2.5.
- Helm v2.16.0 or higher is required for Kubernetes v1.16. For the default Kubernetes version, refer to the [release notes](https://github.com/rancher/rke/releases) for the version of RKE that you are using.
- Helm v2.15.0 should not be used, because of an issue with converting/comparing numbers.
- Helm v2.12.0 should not be used, because of an issue with `cert-manager`.
