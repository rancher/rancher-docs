---
title: Installing Rancher Prime PAYG on Azure
---

This page covers how to install the Rancher Prime PAYG offering on Microsoft's Azure Marketplace.

## How to Install Rancher Prime PAYG

Refer to the following steps for creating a new deployment of Rancher Prime from the Azure Marketplace page.

1. Select the **Rancher Prime with 24x7 Support** offer (either **EU and UK only** or **non-EU and non-UK only**) that corresponds to the location where your account is registered.
1. Choose the plan from the dropdown list. View the **Plans + Pricing** tab for more details about the plan.
1. Select **Create**.

### Basics

On the **Basics** tab, specify the **Project details** and **Instance details**:

1. Select an existing subscription from the dropdown list.
1. Select an existing Resource group from the dropdown list.
   :::note

   The **Create new** resource group feature is not supported.

   :::
   ![Create new resource group not supported](/img/install-rancher-prime-basics-create-new.png)
1. Select an existing AKS Cluster Name from the dropdown list.
1. Choose a name for the Cluster extension resource name. It can consist of alphanumeric characters and dots, and the length must be between 2 and 253 characters.
![Basics tab](/img/install-rancher-prime-basics.png)
1. Select **Next**.

### Rancher Configuration

On the **Rancher Configuraion** tab, specify the following informaiton:

1. Enter the **Hostname** for Rancher. The Rancher hostname must be a fully qualified domain name (FQDN) and the Rancher server URL will be created using this hostname.

   :::note

   The IP address of the Rancher hostname must be resolvable by a public DNS.

   :::

1. Using the slide bar, select the number of **Replicas**.
1. Choose and confirm a **Bootstrap Password**. During the first login, you will use the bootstrap password to authenticate to the Rancher dashboard.
   :::note

   The current Rancher deployment exposes the bootstrap password in the Cluster configuration settings in Azure Portal. Until this is resolved, we suggest changing the Admin password after initial login by editing your profile in the Rancher dashboard.

   :::
   ![Rancher Confgiuration](/img/install-rancher-prime-configuration.png)
1. Select **Next**.

### Review + create

1. On the **Review + create** tab, review the summary of the offer (Price, Basics, Rancher Configuration) and the link to **view automation template** (Azure Resource Manager Template).
1. Select **Create** to start the deployment.

### Deployment Complete

After the deployment is completed, the Rancher Prime Kubernetes service extension is successfully installed.

:::note

On the **Extensions + applications** page, the **Provisioning State** may show **Succeeded** even though the deployment may still be in progress. You can monitor the deployment progress by logging into the AKS cluster and looking at the **rancher-cloud** deployment.

:::

## Log into the Rancher Dashboard

You may now login to Rancher dashboard by pointing your browser to the Rancher server URL *https://<Rancher hostname\>*, where *Rancher hostname* is the [hostname](#rancher-configuration) you have chosen when configuring Rancher.

:::note

The Rancher hostname must be resolvable by public DNS. Please refer to the [Prerequisites](./rancher-prime-azure.md#prerequisites) section for more details.

:::

## Rancher Prime PAYG Billing

View billing information in the Azure Portal by going to **Home** > **Subscriptions** > **Cost Management - Cost analysis**.

## Uninstalling Rancher Prime PAYG Offering

To uninstall the Rancher Prime PAYG offering, migrate any non-Rancher workloads to a different cluster and destroy the Rancher cluster.
