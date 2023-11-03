---
title: Setting up the Google Compute Engine Cloud Provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine"/>
</head>

In this section, you'll learn how to enable the Google Compute Engine (GCE) cloud provider for custom clusters in Rancher. A custom cluster is one in which Rancher installs Kubernetes on existing nodes.

The official Kubernetes documentation for the GCE cloud provider is [here.](https://github.com/kubernetes/website/blob/release-1.18/content/en/docs/concepts/cluster-administration/cloud-providers.md#gce)

:::note Prerequisites:

The service account of `Identity and API` access on GCE needs the `Computer Admin` permission.

:::

If you are using Calico,

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the custom cluster and click **⋮ > Edit YAML.* Enter the following configuration:

    ```yaml
    rancher_kubernetes_engine_config:
      cloud_provider:
        name: gce
        customCloudProvider: |-
          [Global]
          project-id=<your project ID, optional>
          network-name=<your network, optional if using default network>
          subnetwork-name=<your subnetwork of the above network, optional if using default network>
          node-instance-prefix=<your instance group name/your instance name specific prefix, required>
          node-tags=<your network tags, must patch one or some tags, required>
      network:
        options:
          calico_cloud_provider: "gce"
        plugin: "calico"
    ```

If you are using Canal or Flannel,

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the custom cluster and click **⋮ > Edit YAML.* Enter the following configuration:

    ```yaml
    rancher_kubernetes_engine_config:
      cloud_provider:
        name: gce
        customCloudProvider: |-
          [Global]
          project-id=<your project ID, optional>
          network-name=<your network, optional if using default network>
          subnetwork-name=<your subnetwork of the above network, optional if using default network>
          node-instance-prefix=<your instance group name/your instance name specific prefix, required>
          node-tags=<your network tags, must patch one or some tags, required>
      services:
        kube_controller:
          extra_args:
            configure-cloud-routes: true # we need to allow the cloud provider configure the routes for the hosts
    ```