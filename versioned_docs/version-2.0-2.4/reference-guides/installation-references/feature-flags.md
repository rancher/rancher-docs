---
title: Feature Flags
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/feature-flags"/>
</head>

Feature flags were introduced to allow you to try experimental features that are not enabled by default.

To learn about feature values and how to enable features, refer [here](../../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/enable-experimental-features.md).

:::note 

As of v2.4.0, there are some feature flags that may require a restart of the Rancher server container. These features that require a restart are marked in the table of these docs and in the UI.

:::

The following is a list of the feature flags available in Rancher:

- `dashboard`: This feature enables the new experimental UI that has a new look and feel. The dashboard also leverages a new API in Rancher which allows the UI to access the default Kubernetes resources without any intervention from Rancher.
- `istio-virtual-service-ui`: This feature enables a [UI to create, read, update, and delete Istio virtual services and destination rules](../../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features.md), which are traffic management features of Istio.
- `proxy`: This feature enables Rancher to use a new simplified code base for the proxy, which can help enhance performance and security. The proxy feature is known to have issues with Helm deployments, which prevents any catalog applications to be deployed which includes Rancher's tools like monitoring, logging, Istio, etc.
- `unsupported-storage-drivers`: This feature [allows unsupported storage drivers.](../../getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md) In other words, it enables types for storage providers and provisioners that are not enabled by default.

The below table shows the availability and default value for feature flags in Rancher:

| Feature Flag Name             | Default Value | Status       | Available as of | Rancher Restart Required? |
| ----------------------------- | ------------- | ------------ | --------------- |---|
| `dashboard` | `true` | Experimental | v2.4.0 | x |
| `istio-virtual-service-ui`    | `false`       | Experimental | v2.3.0          | |
| `istio-virtual-service-ui`    | `true`        | GA           | v2.3.2          | |
| `proxy` | `false` | Experimental | v2.4.0 | |
| `unsupported-storage-drivers` | `false`       | Experimental | v2.3.0          | |