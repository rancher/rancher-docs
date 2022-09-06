---
title: Feature Flags
---

Feature flags were introduced to allow you to try experimental features that are not enabled by default.

To learn about feature values and how to enable features, refer [here](../../pages-for-subheaders/enable-experimental-features.md).

:::note

There are some feature flags that may require a restart of the Rancher server container. These features that require a restart are marked in the table of these docs and in the UI.

:::

The following is a list of the feature flags available in Rancher:

- `fleet`: Rancher comes with Fleet preinstalled in v2.5+.
- `istio-virtual-service-ui`: This feature enables a [UI to create, read, update, and delete Istio virtual services and destination rules,](../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md) which are traffic management features of Istio.
- `unsupported-storage-drivers`: This feature [allows unsupported storage drivers.](../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md). In other words, it enables types for storage providers and provisioners that are not enabled by default.

The below table shows the availability and default value for feature flags in Rancher:

| Feature Flag Name             | Default Value | Status       | Available as of | Rancher Restart Required? |
| ----------------------------- | ------------- | ------------ | --------------- |---|
| `dashboard`  | `true`       | Experimental | v2.4.0          | X  |
| `dashboard`  | `true`       | GA* and no longer a feature flag | v2.5.0          | X  |
| `istio-virtual-service-ui`    | `false`       | Experimental | v2.3.0          | |
| `istio-virtual-service-ui`    | `true`        | GA*           | v2.3.2          | |
| `proxy`  | `false`       | Experimental | v2.4.0          | |
| `proxy`  | N/A       | Discontinued | v2.5.0          | X  |
| `unsupported-storage-drivers` | `false`       | Experimental | v2.3.0          | |
| `fleet`  | `true` | GA* | v2.5.0 |   |

\* Generally Available. This feature is included in Rancher and it is not experimental.