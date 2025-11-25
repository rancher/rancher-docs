---
title: Managing Cloud Credentials
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/user-settings/manage-cloud-credentials"/>
</head>

You can create cloud credentials in the **User Settings**.

Cloud credentials are bound to their creator's user profile. They **cannot** be shared between non-admin users. However, admins can view and manage the cloud credentials of other users.

## Creating a Cloud Credential from User Settings

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click a cloud credential type. The values of this dropdown is based on the `active` [node drivers](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md) in Rancher.
1. Enter a name for the cloud credential.
1. Based on the selected cloud credential type, enter the required values to authenticate with the infrastructure provider.
1. Click **Create**.

**Result:** The cloud credential is created.

## Updating a Cloud Credential

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Choose the cloud credential you want to edit and click the **⋮ > Edit Config**.
1. Update the credential information and click **Save**.

**Result:** The cloud credential is updated with the new access credentials.

## Deleting a Cloud Credential

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. You can either individually delete a cloud credential or bulk delete.

    - To individually delete one, choose the cloud credential you want to edit and click the **⋮ > Delete**.
    - To bulk delete cloud credentials, select one or more cloud credentials from the list. Click **Delete**.
1. Confirm that you want to delete these cloud credentials.
