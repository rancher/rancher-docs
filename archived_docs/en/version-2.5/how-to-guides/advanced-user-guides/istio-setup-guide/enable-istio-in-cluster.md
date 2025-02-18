---
title: Enable Istio in the Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"/>
</head>

>**Prerequisites:**
>
>- Only a user with the `cluster-admin` [Kubernetes default role](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles) assigned can configure and install Istio in a Kubernetes cluster.
>- If you have pod security policies, you will need to install Istio with the CNI enabled. For details, see [this section.](../../../explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md)
>- To install Istio on an RKE2 cluster, additional steps are required. For details, see [this section.](../../../explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md)
>- To install Istio in a cluster where project network isolation is enabled, additional steps are required. For details, see [this section.](../../../explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation.md)

1. From the **Cluster Explorer**, navigate to available **Charts** in **Apps & Marketplace**
1. Select the Istio chart from the rancher provided charts
1. If you have not already installed your own monitoring app, you will be prompted to install the rancher-monitoring app. Optional: Set your Selector or Scrape config options on rancher-monitoring app install.
1. Optional: Configure member access and [resource limits](../../../explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md) for the Istio components. Ensure you have enough resources on your worker nodes to enable Istio.
1. Optional: Make additional configuration changes to values.yaml if needed.
1. Optional: Add further resources or configuration via the [overlay file](../../../explanations/integrations-in-rancher/istio/configuration-options/configuration-options.md#overlay-file).
1. Click **Install**.

**Result:** Istio is installed at the cluster level.

## Additional Config Options

For more information on configuring Istio, refer to the [configuration reference.](../../../explanations/integrations-in-rancher/istio/configuration-options/configuration-options.md)
