---
title: Enable Istio in the Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"/>
</head>

:::note Prerequisites:

- Only a user with the `cluster-admin` [Kubernetes default role](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles) assigned can configure and install Istio in a Kubernetes cluster.
- If you have pod security policies, you will need to install Istio with the CNI enabled. For details, see [this section.](../../../integrations-in-rancher/istio/configuration-options/pod-security-policies.md)
- To install Istio on an RKE2 cluster, additional steps are required. For details, see [this section.](../../../integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md)
- To install Istio in a cluster where project network isolation is enabled, additional steps are required. For details, see [this section.](../../../integrations-in-rancher/istio/configuration-options/project-network-isolation.md)

:::

<Tabs>
<TabItem value="Rancher v2.6.5+">

1.  Click **☰ > Cluster Management**.
1. Go to the where you want to enable Istio and click **Explore**.
1. Click **Apps**.
1. Click **Charts**.
1. Click **Istio**.
1. If you have not already installed your own monitoring app, you will be prompted to install the rancher-monitoring app. Optional: Set your Selector or Scrape config options on rancher-monitoring app install.
1. Optional: Configure member access and [resource limits](../../../integrations-in-rancher/istio/cpu-and-memory-allocations.md) for the Istio components. Ensure you have enough resources on your worker nodes to enable Istio.
1. Optional: Make additional configuration changes to values.yaml if needed.
1. Optional: Add further resources or configuration via the [overlay file](../../../integrations-in-rancher/istio/configuration-options/configuration-options.md#overlay-file).
1. Click **Install**.

</TabItem>
<TabItem value="Rancher before v2.6.5">

1.  Click **☰ > Cluster Management**.
1. Go to the where you want to enable Istio and click **Explore**.
1. Click **Apps & Marketplace**.
1. Click **Charts**.
1. Click **Istio**.
1. If you have not already installed your own monitoring app, you will be prompted to install the rancher-monitoring app. Optional: Set your Selector or Scrape config options on rancher-monitoring app install.
1. Optional: Configure member access and [resource limits](../../../integrations-in-rancher/istio/cpu-and-memory-allocations.md) for the Istio components. Ensure you have enough resources on your worker nodes to enable Istio.
1. Optional: Make additional configuration changes to values.yaml if needed.
1. Optional: Add further resources or configuration via the [overlay file](../../../integrations-in-rancher/istio/configuration-options/configuration-options.md#overlay-file).
1. Click **Install**.

</TabItem>
</Tabs>

**Result:** Istio is installed at the cluster level.

## Additional Config Options

For more information on configuring Istio, refer to the [configuration reference.](../../../integrations-in-rancher/istio/configuration-options/configuration-options.md)
