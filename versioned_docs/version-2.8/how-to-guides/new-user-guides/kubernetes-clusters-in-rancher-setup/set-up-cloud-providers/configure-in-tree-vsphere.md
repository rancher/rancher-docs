---
title: Setting Up an In-tree VMware vSphere Cloud Provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"/>
</head>

To set up the in-tree VMware vSphere cloud provider, follow these steps while creating the vSphere cluster in Rancher:

1. Set **Cloud Provider** option to `Custom` or `Custom (In-Tree)`.
1. Click on **Edit as YAML**
1. Insert the following structure to the pre-populated cluster YAML. This structure must be placed under `rancher_kubernetes_engine_config`. Note that the `name` *must* be set to `vsphere`.

    ```yaml
    rancher_kubernetes_engine_config:
      cloud_provider:
          name: vsphere
          vsphereCloudProvider:
              [Insert provider configuration]
    ```

Rancher uses RKE (the Rancher Kubernetes Engine) to provision Kubernetes clusters. Refer to the [vSphere configuration reference in the RKE documentation](https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/vsphere/config-reference/) for details about the properties of the `vsphereCloudProvider` directive.
