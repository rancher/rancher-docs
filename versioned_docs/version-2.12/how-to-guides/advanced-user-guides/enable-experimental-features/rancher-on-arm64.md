---
title: "Running on ARM64 Mixed Architecture (Experimental)"
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64"/>
</head>

:::caution

Running on an ARM64 mixed architecture platform is currently an experimental feature and is not yet officially supported in Rancher. Therefore, we do not recommend using ARM64 mixed architecture based nodes in a production environment.

:::

The following options are available when using an ARM64 platform:

- Create custom cluster and adding ARM64 based node(s)
  - Kubernetes cluster version must be 1.12 or higher
- Importing clusters that contain ARM64 based nodes
  - Kubernetes cluster version must be 1.12 or higher

Please refer to the [Cluster Configuration documentation](../../../reference-guides/cluster-configuration/cluster-configuration.md) for cluster options and configuration information.

The following features are not tested:

- Monitoring, alerts, notifiers, pipelines and logging
- Launching apps from the catalog
