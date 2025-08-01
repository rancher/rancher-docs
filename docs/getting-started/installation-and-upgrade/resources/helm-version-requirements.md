---
title: Helm Version Requirements
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/helm-version-requirements"/>
</head>

This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster.

> The installation instructions have been updated for Helm 3. For migration of installs started with Helm 2, refer to the official [Helm 2 to 3 Migration Docs.](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/) [This section](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm2.md) provides a copy of the older high-availability Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.

<DeprecationHelm2 />

## Identifying the proper Helm 3 version

Select any Helm 3 version that is officially compatible with the Kubernetes version range you are using from our supported list.

To apply this rule, you may need to reference two external resources:
- **Helm Version Compatibility:** Refer to the [Helm Version Support Policy](https://helm.sh/docs/topics/version_skew/) and select the version matching the rule for your Rancher minor target.
- **Rancher's Kubernetes Support Range:** Use the [Rancher Support Matrix](https://rancher.com/support-maintenance-terms/) to identify the Kubernetes versions supported by your target Rancher minor version.

### Example:
- **Scenario:** You are targeting Rancher 2.11.4, which supports Kubernetes versions 1.30 through 1.32
- **Application:** Our rule requires a Helm version that supports this range. You can verify this by checking the Helm version's compatibility with the highest version in the range, Kubernetes 1.32.
- **Result:** You find that both Helm 3.17 and Helm 3.18 support the Kubernetes 1.30-1.32 range.
- Both will work, however selecting 3.18 is preferred because it is the newest Helm minor with overlapping support range.

## Additional Notes

- Helm v3.2.x or higher is required to install or upgrade Rancher v2.5.
- Helm v2.16.0 or higher is required for Kubernetes v1.16. For the default Kubernetes version, refer to the [release notes](https://github.com/rancher/rke/releases) for the version of RKE that you are using.
- Helm v2.15.0 should not be used, because of an issue with converting/comparing numbers.
- Helm v2.12.0 should not be used, because of an issue with `cert-manager`.
