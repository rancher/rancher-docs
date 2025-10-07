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

Depending on your cluster provisioning refer to [RKE2 cluster configuration options](../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) or [K3s cluster configuration options](../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) for more information.

The following features are not tested:

- Monitoring, alerts, notifiers, pipelines and logging
- Launching apps from the catalog
