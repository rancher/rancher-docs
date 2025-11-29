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
1. In the **Cluster Configuration** go to the **Registries** tab.
1. Check the box next to **Enable cluster scoped container registry for Rancher system container images**.
1. Enter the registry hostname.
1. Under **Authentication** select **Create a HTTP Basic Auth Secret** and fill in the credential fields.
1. Click **Create**.

**Result:** The new cluster pulls images from the private registry.

### Working with Private Registry Credentials

When working with private registries, it is important to ensure that any secrets created for these registries are properly backed up. When you add a private registry credential secret through the Rancher GUI and select **Create a HTTP Basic Auth Secret**, the secret is included in backup operations using Rancher Backups.

However, if you create a credential secret outside of the Rancher GUI, such as by using kubectl or Terraform, you must add the `fleet.cattle.io/managed=true` label to indicate that the secret should be included in backups created by Rancher Backups.

For example, if you have a custom private registry named "my-private-registry" and create a secret called "my-reg-creds" for it, apply the `fleet.cattle.io/managed=true` label to this secret. This ensures that your backup process captures the secret, providing easy restoration if needed.

By following this guidance, you can ensure that all of your private registry credentials are backed up and easily accessible in the event of a restore or migration.
