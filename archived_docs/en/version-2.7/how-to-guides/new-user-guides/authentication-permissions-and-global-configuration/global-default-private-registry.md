---
title: Configuring a Global Default Private Registry
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"/>
</head>

:::note
This page describes how to configure a global default private registry from the Rancher UI, after Rancher is already installed. 

For instructions on how to set up a private registry during Rancher installation, refer to the [air-gapped installation guide](../../../getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md).

:::

A private registry is a private, consistent, and centralized source of truth for the container images in your clusters. You can use a private container image registry to share custom base images within your organization.

There are two main ways to set up a private registry in Rancher:

* Set up a global default registry through the **Settings** tab in the global view.
* Set up a private registry in the advanced options under cluster-level settings. 

The global default registry is intended to be used in air-gapped setups, for registries that don't require credentials. The cluster-level private registry is intended to be used in setups where the private registry requires credentials.

## Set a Private Registry with No Credentials as the Default Registry

1. Log into Rancher and configure the default administrator password.
1. Select **☰ > Global Settings**.
1. Go to `system-default-registry` and choose **⋮ > Edit Setting**.
1. Enter your registry's hostname and port (e.g. `registry.yourdomain.com:port`). Do not prefix the text with `http://` or `https://`.

**Result:** Rancher pulls system images from your private registry.

### Namespaced Private Registry with RKE2 Downstream Clusters

Most private registries should work, by default, with RKE2 downstream clusters.

However, you'll need to do some additional steps if you're trying to set a namespaced private registry whose URL is formatted like this: `website/subdomain:portnumber`.

1. Select **☰ > Cluster Management**.
1. Find the RKE2 cluster in the list and click **⋮ >Edit Config**.
1. From the **Cluster config** menu, select **Registries**.
1. In the **Registries** pane, select the **Configure advanced containerd mirroring and registry authentication options** option.
1. In the text fields under **Mirrors**, enter the **Registry Hostname** and **Mirror Endpoints**.
1. Click **Save**.
1. Repeat as necessary for each downstream RKE2 cluster.

## Configure a Private Registry with Credentials when Creating a Cluster

There is no global way to set up a private registry with authorization for every Rancher-provisioned cluster. Therefore, if you want a Rancher-provisioned cluster to pull images from a private registry that requires credentials, you'll have to pass the registry credentials through the advanced cluster options every time you create a new cluster. 

Since the private registry cannot be configured after the cluster is created, you'll need to perform these steps during initial cluster setup.

1. Select **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Choose a cluster type.
1. In the **Cluster Configuration** go to the **Registries** tab and select **Pull images for Rancher from a private registry**.
1. Enter the registry hostname and credentials.
1. Click **Create**.

**Result:** The new cluster pulls images from the private registry.
