---
title: Feature Flags
---

With feature flags, you can try out experimental features that aren't enabled by default.

To learn more about feature values and how to enable them, see [Enabling Experimental Features](../../../pages-for-subheaders/enable-experimental-features.md).

:::note

Some feature flags require a restart of the Rancher container. Features that require a restart are marked in the Rancher UI, and in the table at the end of this document.

:::

The following is a list of feature flags available in Rancher:

- `continuous-delivery`: In Rancher v2.5.x, Fleet came with a GitOps feature that couldn't be disabled separately from Fleet. In Rancher v2.6, the `continuous-delivery` feature flag was introduced to allow Fleet GitOps to be disabled. See [Continuous Delivery.](../../../how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery.md) for more information.
- `dashboard` (v2.7.1): Enables an experimental cluster resource management UI.
- `fleet`: You must enable this flag in Rancher versions v2.6 and later, since Fleet features are required by the provisioning framework. If you had this flag disabled in earlier versions of Rancher, the flag will be automatically enabled when you upgrade to v2.6 or later. See [Fleet - GitOps at Scale](../../../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md) for more information.
- `harvester` (Rancher v2.6.1 and later): Manages access to the Virtualization Management page, where users can navigate directly to Harvester clusters and access the Harvester UI. See [Fleet - GitOps at Scale](../../../integrations-in-rancher/harvester.md#feature-flag/) for more information.
- `istio-virtual-service-ui`: This flag enables a [visual interface](../../../how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md) to create, read, update, and delete Istio virtual services and destination rules, which are Istio traffic management features.
- `legacy`: There are a set of features from previous versions of Rancher that are slowly being phased out in favor of newer implementations. These are a mix of deprecated features as well as features that will eventually move to newer versions. This flag is disabled by default on new Rancher installations. If you're upgrading from a previous version of Rancher, this flag is enabled.
- `multi-cluster-management`: Allows multi-cluster provisioning and management of Kubernetes clusters. This flag can only be set at install time.
- `proxy` (v2.7.1): Enables an experimental proxy for Kubernetes API requests. 
- `rke1-custom-node-cleanup` (v2.6.1 and later): Enables cleanup of deleted RKE1 custom nodes. 
- `rke2`: Enables provisioning RKE2 clusters. This flag is enabled bt default.
- `token-hashing`: Enables token-hashing. Once enabled, existing tokens will be hashed and all new tokens will be hashed automatically, using the SHA256 algorithm. Once a token is hashed it can't be undone. This flag can't be disabled after its enabled. See [API Tokens](../../../reference-guides/about-the-api/api-tokens.md#token-hashing) for more information.
- `unsupported-storage-drivers`: Enables types for storage providers and provisioners that aren't enabled by default. See [Allow Unsupported Storage Drivers](../../../how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers.md) for more information.

The below table shows the availability and default value for feature flags in Rancher:

| Feature Flag Name             | Default Value | Status       | Available as of | Rancher Restart Required? |
| ----------------------------- | ------------- | ------------ | --------------- |---|
| `istio-virtual-service-ui`    | `false`       | Experimental | v2.3.0          | |
| `istio-virtual-service-ui`    | `true`        | GA*           | v2.3.2          | |
| `unsupported-storage-drivers` | `false`       | Experimental | v2.3.0          | |
| `fleet`  | `true` | GA* | v2.5.0 |   |
| `fleet`  | `true` | Can no longer be disabled | v2.6.0 | N/A  |
| `continuous-delivery` | `true` | GA* | v2.6.0 | |
| `token-hashing` | `false` for new installs, `true` for upgrades | GA* | v2.6.0 | |
| `legacy` | `false` for new installs, `true` for upgrades | GA* | v2.6.0 | |
| `multi-cluster-management` | `false` | GA* | v2.5.0 | |
| `harvester` | `true` | Experimental | v2.6.1 | |
| `rke2` | `true` | Experimental | v2.6.0 | |

\* Generally Available. This feature is included in Rancher and it is not experimental.