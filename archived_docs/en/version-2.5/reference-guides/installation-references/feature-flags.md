---
title: Feature Flags
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/feature-flags"/>
</head>

With feature flags, you can try out optional or experimental features.

To learn more about feature values and how to enable them, see [Enabling Experimental Features](../../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/enable-experimental-features.md).

:::note

Some feature flags require a restart of the Rancher container. Features that require a restart are marked in the Rancher UI.

:::

The following is a list of feature flags available in Rancher. If you've upgraded from a previous Rancher version, you may see additional flags in the Rancher UI, such as `proxy` or `dashboard`:

- `fleet`: Rancher comes with Fleet preinstalled in v2.5+.
- `istio-virtual-service-ui`: This feature enables a [UI to create, read, update, and delete Istio virtual services and destination rules,](../../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md) which are traffic management features of Istio.
- `unsupported-storage-drivers`: Enables types for storage providers and provisioners that aren't enabled by default. See [Allow Unsupported Storage Drivers](../../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md) for more information.

The following table shows the availability and default value for some feature flags in Rancher. Features marked "GA" are generally available:

| Feature Flag Name | Default Value | Status | Available As Of |
| ----------------- | ------------- | ------ | --------------- |
| `dashboard` | `true` | GA and no longer a feature flag | v2.5.0 |
| `dashboard` | `true` | Experimental | v2.4.0 |
| `fleet` | `true` | GA | v2.5.0 |
| `proxy` | N/A | Discontinued | v2.5.0 |
| `proxy` | `false` | Experimental | v2.4.0 |
