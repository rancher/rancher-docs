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

The following is a list of feature flags available in Rancher. If you've upgraded from a previous Rancher version, you may see additional flags in the Rancher UI, such as `proxy` or `dashboard` (both [discontinued](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.5/reference-guides/installation-references/feature-flags.md)):

- `aggregated-roletemplates`: Use cluster role aggregation architecture for RoleTemplates, ProjectRoleTemplateBindings, and ClusterRoleTemplateBindings. See [Cluster Role Aggregation](../../../how-to-guides/advanced-user-guides/enable-experimental-features/cluster-role-aggregation.md) for more information.
- `clean-stale-secrets`: Removes stale secrets from the `cattle-impersonation-system` namespace. This slowly cleans up old secrets which are no longer being used by the impersonation system.
- `continuous-delivery`: Allows Fleet GitOps to be disabled separately from Fleet. See [Continuous Delivery.](../../../how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery.md) for more information.
- `fleet`: The Rancher provisioning framework in v2.6 and later requires Fleet. The flag will be automatically enabled when you upgrade, even if you disabled this flag in an earlier version of Rancher. See [Continuous Delivery with Fleet](../../../integrations-in-rancher/fleet/fleet.md) for more information.
- `harvester`: Manages access to the Virtualization Management page, where users can navigate directly to Harvester clusters and access the Harvester UI. See [Harvester Integration Overview](../../../integrations-in-rancher/harvester/overview.md) for more information.
- `imperative-api-extension`: Enables Rancher's [extension API server](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/) to register new APIs to Kubernetes. This flag is enabled by default. See the [Extension API Server](../../../api/extension-apiserver.md) page for more information.
- `istio-virtual-service-ui`: Enables a [visual interface](../../../how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md) to create, read, update, and delete Istio virtual services and destination rules, which are Istio traffic management features.
- `legacy`: Enables a set of features from 2.5.x and earlier, that are slowly being phased out in favor of newer implementations. These are a mix of deprecated features as well as features that will eventually be available to newer versions. This flag is disabled by default on new Rancher installations. If you're upgrading from a previous version of Rancher, this flag is enabled.
- `managed-system-upgrade-controller`: Enables the installation of the system-upgrade-controller app in downstream imported RKE2/K3s clusters, as well as in the local cluster if it is an RKE2/K3s cluster.

:::note Important:

This `managed-system-upgrade-controller` flag is intended for **internal use only** and does not have an associated Feature CR. Use with caution.

To control whether Rancher should manage the Kubernetes version of imported RKE2/K3s clusters, it is recommended to use the [imported-cluster-version-management](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#configuring-version-management-for-rke2-and-k3s-clusters) feature that is available in Rancher 2.11.0 or newer.

:::

:::danger

If the `managed-system-upgrade-controller` flag was **disabled** in Rancher v2.10.x, and any imported RKE2/K3s clusters were upgraded **outside of Rancher**, follow the steps below to prevent the unexpected installation of the system-upgrade-controller app and to ensure the [imported-cluster-version-management](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#configuring-version-management-for-rke2-and-k3s-clusters) feature works correctly:

1. Upgrade Rancher to v2.11.0 or later, making sure to **retain** the `managed-system-upgrade-controller=false` feature flag in Helm values if it was set during the v2.10.x installation.
1. After Rancher is fully up and running, disable the `imported-cluster-version-management` setting. You can do this either through the Rancher UI by clicking **☰ > Global Settings > Settings > imported-cluster-version-management**, or by editing the corresponding `Setting.management.cattle.io/v3` custom resource via kubectl.
1. Perform a second Helm upgrade, this time omitting the `managed-system-upgrade-controller=false` feature flag.

Now, the imported cluster version management is disabled by default, and Rancher no longer installs the system-upgrade-controller app on imported clusters automatically.

You can enable this feature on a per-cluster basis. For more information, please refer to the [documentation](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#configuring-version-management-for-rke2-and-k3s-clusters).

:::

- `multi-cluster-management`: Allows multi-cluster provisioning and management of Kubernetes clusters. This flag can only be set at install time. It can't be enabled or disabled later.
- `rke1-custom-node-cleanup`: Enables cleanup of deleted RKE1 custom nodes. We recommend that you keep this flag enabled, to prevent removed nodes from attempting to rejoin the cluster.
- `rke2`: Enables provisioning RKE2 clusters. This flag is enabled by default.
- `token-hashing`: Enables token hashing. Once enabled, existing tokens will be hashed and all new tokens will be hashed automatically with the SHA256 algorithm. Once a token is hashed it can't be undone. This flag can't be disabled after its enabled. See [API Tokens](../../../api/api-tokens.md#token-hashing) for more information.
- `uiextension`: Enables UI extensions. This flag is enabled by default. Enabling or disabling the flag forces the Rancher pod to restart. The first time this flag is set to `true`, it creates a CRD and enables the controllers and endpoints necessary for the feature to work. If set to `false`, it disables the previously mentioned controllers and endpoints. Setting `uiextension` to `false` has no effect on the CRD -- it does not create a CRD if it does not yet exist, nor does it delete the CRD if it already exists. 
- `unsupported-storage-drivers`: Enables types for storage providers and provisioners that aren't enabled by default. See [Allow Unsupported Storage Drivers](../../../how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers.md) for more information.
- `ui-sql-cache`: Enables a SQLite-based cache for UI tables. See [UI Server-Side Pagination](../../../how-to-guides/advanced-user-guides/enable-experimental-features/ui-server-side-pagination.md) for more information.


The following table shows the availability and default values for some feature flags in Rancher. Features marked "GA" are generally available:

| Feature Flag Name             | Default Value | Status       | Available As Of | Additional Information |
| ----------------------------- | ------------- | ------------ | --------------- | ---------------------- |
| `aggregated-roletemplates` | `false` | Highly experimentatl | v2.11.0 | This flag value is locked on install and can't be changed. |
| `clean-stale-secrets` | `true` | GA | v2.10.2 | |
| `continuous-delivery` | `true` | GA | v2.6.0 | |
| `external-rules` | v2.7.14: `false`, v2.8.5: `true` | Removed | v2.7.14, v2.8.5 | This flag affected [external `RoleTemplate` behavior](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#external-roletemplate-behavior). It is removed in Rancher v2.9.0 and later as the behavior is enabled by default. |
| `fleet`  | `true` | Can no longer be disabled | v2.6.0 | |
| `fleet`  | `true` | GA | v2.5.0 | |
| `harvester` | `true` | Experimental | v2.6.1 | |
| `imperative-api-extension` | `true` | GA | v2.11.0 | |
| `legacy` | `false` for new installs, `true` for upgrades | GA | v2.6.0 | |
| `managed-system-upgrade-controller` | `true` | GA | v2.10.0 | |
| `rke1-custom-node-cleanup`| `true` | GA | v2.6.0 | |
| `rke2` | `true` | Experimental | v2.6.0 | |
| `token-hashing` | `false` for new installs, `true` for upgrades | GA | v2.6.0 | |
| `uiextension` | `true` | GA | v2.9.0 | |
| `ui-sql-cache` | `false` | Highly experimental | v2.9.0 | |
