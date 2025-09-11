---
title: Helm Version Requirements
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/helm-version-requirements"/>
</head>

This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster.

> The installation instructions have been updated for Helm 3. For migration of installs started with Helm 2, refer to the official [Helm 2 to 3 Migration Docs.](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/) [This section](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm2.md) provides a copy of the older high-availability Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.

<DeprecationHelm2 />

## Identifying the Proper Helm v3 Version

Select any Helm v3 version that is officially compatible with the Kubernetes version range you are using from our [Rancher Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions).

To apply this rule, you may need to reference two external resources:

- **Helm Version Compatibility:** Refer to the [Helm Version Support Policy](https://helm.sh/docs/topics/version_skew/) and select the version matching the rule for your Rancher minor target.
- **Rancher's Kubernetes Support Range:** Use the [Rancher Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions) to identify the Kubernetes versions supported by your target Rancher minor version.

### Example

- **Scenario:** You are targeting Rancher v2.10.8, which supports Kubernetes versions v1.28 through v1.31.
- **Application:** Our rule requires a Helm version that supports this range. You can verify this by checking the Helm version's compatibility with the highest version in the range, Kubernetes v1.31.
- **Result:** You find that Helm v3.16 support the Kubernetes v1.28-v1.31 range.
- We recommend Helm v3.16 because matches Rancher's range exactly. 

## Additional Notes

- Helm v3.2.x or higher is required to install or upgrade Rancher v2.5.
- Helm v2 support was removed in Rancher v2.9.x.
- When using tools that run Helm commands for you (like Terraform), you must make sure they are configured to use the correct Helm version.
