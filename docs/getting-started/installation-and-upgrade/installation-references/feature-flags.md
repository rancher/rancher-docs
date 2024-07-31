---
title: Feature Flags
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/feature-flags"/>
</head>

With feature flags, you can try out optional or experimental features, and enable legacy features that are being phased out.

To learn more about feature values and how to enable them, see [Enabling Experimental Features](../../../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md).

:::note

Some feature flags require a restart of the Rancher container. Features that require a restart are marked in the Rancher UI.

:::

The following is a list of feature flags available in Rancher. If you've upgraded from a previous Rancher version, you may see additional flags in the Rancher UI, such as `proxy` or `dashboard` (both [discontinued](/versioned_docs/version-2.5/reference-guides/installation-references/feature-flags.md)):

- `continuous-delivery`: Allows Fleet GitOps to be disabled separately from Fleet. See [Continuous Delivery.](../../../how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery.md) for more information.
- `external-rules`: This flag is enabled by default. Only admin users can enable/disable the flag, and note that `escalate` permissions on `RoleTemplates` are required to create external `RoleTemplates` with `ExternalRules`. Restricted admin users can only enable the flag. If enabled, external `RoleTemplates` can be created only if the backing `ClusterRole` exists in the local cluster or the `ExternalRules` is set. For context, the backing `ClusterRole` holds cluster rules and privileges, and shares the same `metadata.name` used in the `RoleTemplate` in your respective cluster referenced by the `ClusterRoleTemplateBinding/ProjectRoleTemplateBinding`. Previous external `RoleTemplates` that don’t have a backing `ClusterRole` won’t be granted or modifiable unless a backing `ClusterRole` is created or the `ExternalRules` field is set. If disabled, external `RoleTemplates` with `.context=project` or `.context=””` can be created even if the backing `ClusterRole` does not exist.
- `fleet`: The Rancher provisioning framework in v2.6 and later requires Fleet. The flag will be automatically enabled when you upgrade, even if you disabled this flag in an earlier version of Rancher. See [Continuous Delivery with Fleet](../../../integrations-in-rancher/fleet/fleet.md) for more information.
- `harvester`: Manages access to the Virtualization Management page, where users can navigate directly to Harvester clusters and access the Harvester UI. See [Harvester Integration Overview](../../../integrations-in-rancher/harvester/overview.md) for more information.
- `istio-virtual-service-ui`: Enables a [visual interface](../../../how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md) to create, read, update, and delete Istio virtual services and destination rules, which are Istio traffic management features.
- `legacy`: Enables a set of features from 2.5.x and earlier, that are slowly being phased out in favor of newer implementations. These are a mix of deprecated features as well as features that will eventually be available to newer versions. This flag is disabled by default on new Rancher installations. If you're upgrading from a previous version of Rancher, this flag is enabled.
- `multi-cluster-management`: Allows multi-cluster provisioning and management of Kubernetes clusters. This flag can only be set at install time. It can't be enabled or disabled later.
- `rke1-custom-node-cleanup`: Enables cleanup of deleted RKE1 custom nodes. We recommend that you keep this flag enabled, to prevent removed nodes from attempting to rejoin the cluster.
- `rke2`: Enables provisioning RKE2 clusters. This flag is enabled by default.
- `token-hashing`: Enables token hashing. Once enabled, existing tokens will be hashed and all new tokens will be hashed automatically with the SHA256 algorithm. Once a token is hashed it can't be undone. This flag can't be disabled after its enabled. See [API Tokens](../../../api/api-tokens.md#token-hashing) for more information.
- `unsupported-storage-drivers`: Enables types for storage providers and provisioners that aren't enabled by default. See [Allow Unsupported Storage Drivers](../../../how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers.md) for more information.
- `ui-sql-cache`: Enables a SQLite-based cache for UI tables. See [UI Server-Side Pagination](../../../how-to-guides/advanced-user-guides/enable-experimental-features/ui-server-side-pagination.md) for more information.


The following table shows the availability and default values for some feature flags in Rancher. Features marked "GA" are generally available:

| Feature Flag Name             | Default Value | Status       | Available As Of |
| ----------------------------- | ------------- | ------------ | --------------- |
| `continuous-delivery` | `true` | GA | v2.6.0 |
| `fleet`  | `true` | Can no longer be disabled | v2.6.0 |
| `fleet`  | `true` | GA | v2.5.0 |
| `harvester` | `true` | Experimental | v2.6.1 |
| `legacy` | `false` for new installs, `true` for upgrades | GA | v2.6.0 |
| `rke1-custom-node-cleanup`| `true` | GA | v2.6.0 |
| `rke2` | `true` | Experimental | v2.6.0 |
| `token-hashing` | `false` for new installs, `true` for upgrades | GA | v2.6.0 |
| `ui-sql-cache` | `false` | Highly experimental | v2.9.0 |
