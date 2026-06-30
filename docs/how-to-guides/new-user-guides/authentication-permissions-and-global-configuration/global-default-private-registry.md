---
title: Configuring a Global System Default Private Registry
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"/>
</head>

:::note
This page describes how to configure a global default private registry from the Rancher UI, after Rancher is already installed. 

For instructions on how to set up a private registry during Rancher installation, refer to the [air-gapped installation guide](../../../getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md).

:::

A private registry is a private, consistent, and centralized source of truth for the container images in your clusters. You can use a private container image registry to share custom images within your organization, or to prevent rate limiting issues encountered when pulling images from public registries.

There are two main ways to set up a private registry in Rancher:

* Set up a _global_ system default registry through the **Settings** tab in the global view.
* Set up a _cluster level_ system default private registry in the advanced options when provisioning or updating a downstream cluster. 

The global system default registry is intended to be used in air-gapped setups, or other environments where all clusters should share the same default registry host. Rancher will use this registry to pull core images required for system-components, and will configure downstream clusters to do the same by default.

Cluster level default registries are intended to be used in scenarios where a specific downstream environment should access a different registry than the global default, or to access the same registry using different credentials. 

## Set an unauthenticated Private Registry as the Default Global Registry

1. Log into Rancher and configure the default administrator password.
1. Select **☰ > Global Settings**.
1. Go to `system-default-registry` and choose **⋮ > Edit Setting**.
1. Enter your registry's hostname and port (e.g. `registry.yourdomain.com:port`). Do not prefix the text with `http://` or `https://`.

**Result:** Rancher pulls system images from your private registry.

## Set an authenticated Private Registry as the Default Global Registry

If the desired registry requires authentication (i.e. `.dockerconfigjson`),

1. Log into Rancher and configure the default administrator password.
1. Using `kubectl`, `terraform`, or the Rancher UI, create a new registry secret in the `cattle-system` namespace
    1. If the secret is created outside of the Rancher UI, ensure that the appropriate [backup labels are set](#working-with-private-registry-credentials) 
1. Select **☰ > Global Settings**.
1. Go to `system-default-registry-pull-secrets` and choose **⋮ > Edit Setting**.
1. Enter the name of the registry pull secret within the `cattle-system` namespace created in step 2 (e.g. `my-reg-cred`).
1. Go to `system-default-registry` and choose **⋮ > Edit Setting**.
1. Enter your registry's hostname and port (e.g. `registry.yourdomain.com:port`). Do not prefix the text with `http://` or `https://`.

**Result:** Rancher propagates the configured pull secret into the required rancher-managed namespaces in the local cluster, and configures rancher-managed workloads to use that secret. Newly created and existing downstream clusters are automatically configured to point to the configured registry. All Rancher system images across all clusters are then pulled from your registry.

 
:::note
For more detailed information on how Rancher works with **authenticated** default registries, view [this page](/how-to-guides/advanced-user-guides/rancher-deployment-guides/authenticated-private-registries)
:::

:::important
Reconfiguring registry details at the global level may result in the redeployment of system components in the local cluster, and all downstream clusters which do not define their own cluster-level registry configurations. This may temporarily prevent access to downstream clusters via the Rancher UI.
:::

## Configure a Cluster Level Private Registry

In addition to configuring a private registry at the global level, Rancher also supports defining cluster scoped registry configurations. To do so, you'll have to define the registry information in the advanced cluster options when you create a new cluster or update an existing cluster.

:::important
Reconfiguring registry details on an existing cluster may result in the redeployment of system-components in that cluster. This may temporarily prevent access to the cluster via the Rancher UI.
:::

### Using a Cluster Level Private Registry With Provisioned Clusters

1. Select **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Choose a cluster type.
1. In the **Cluster Configuration** go to the **Registries** tab.
1. Check the box next to **Enable cluster scoped container registry for Rancher system container images**.
1. Enter the registry hostname.
1. Optional: Configure Credentials for the Cluster-Level Registry
  1. Under **Authentication** select **Create a HTTP Basic Auth Secret** and fill in the credential fields.
1. Click **Create**.

**Result:** The new cluster pulls images from the private registry.

This same process can also be followed when later updating the cluster configuration.


### Namespaced Private Registry with RKE2 Downstream Clusters

You'll need to do some additional steps if you're trying to set a namespaced private registry whose URL is formated like this: `website/subdomain:portnumber`.

1. Select **☰ > Cluster Management**.
1. Find the RKE2 cluster in the list and click **⋮ >Edit Config**.
1. From the **Cluster config** menu, select **Registries**.
1. In the **Registries** pane, select the **Configure advanced containerd mirroring and registry authentication options** option.
1. In the text fields under **Mirrors**, enter the **Registry Hostname** and **Mirror Endpoints**.
1. Click **Save**.
1. Repeat as necessary for each downstream RKE2 cluster.


### Configure a Cluster Level Private Registry When Importing Clusters

1. Select **☰ > Cluster Management**.
1. On the **Clusters** page, click **Import Existing**.
1. Choose a cluster type.
1. Go to the **Registries** tab.
1. Check the box next to **Enable cluster scoped container registry for Rancher system container images**.
1. Enter the registry hostname.
1. Optional: Select an optional image pull secret to authenticate with the registry
1. Click **Create**.

## Working with Private Registry Credentials

When working with private registries, it is important to ensure that any secrets created for these registries are properly backed up. When you add a private registry credential secret through the Rancher GUI and select **Create a HTTP Basic Auth Secret**, the secret is included in backup operations using Rancher Backups.

However, if you create a credential secret outside of the Rancher GUI, such as by using kubectl or Terraform, you must add the `fleet.cattle.io/managed=true` label to indicate that the secret should be included in backups created by Rancher Backups.

For example, if you have a custom private registry named "my-private-registry" and create a secret called "my-reg-creds" for it, apply the `fleet.cattle.io/managed=true` label to this secret. This ensures that your backup process captures the secret, providing easy restoration if needed.

By following this guidance, you can ensure that all of your private registry credentials are backed up and easily accessible in the event of a restore or migration.
