---
title: Installing Rancher Prime on Azure
---

## How to install Rancher Prime PAYG

The following is a step by step walk-through for creating a new deployment of
Rancher Prime from the Azure Marketplace page.

1. Click "Rancher Prime with 24x7 Support" offer (either "EU and UK only" or
   "non-EU and non-UK only") that corresponds to the location where your account
   is registered.
2. Choose the plan from the dropdown list. ( "Plans + Pricing" tab more details about Software plan)
3. Click 'Create' 

### Basics

1. Select existing subscription from the dropdown list.
2. Select existing Resource group from the dropdown list.
3. Select existing AKS Cluster Name from the dropdown list.
4. Choose name for Cluster extension resource name. It can be consisted of
   alphanumeric and dots, and the length must be between 2 and 253 characters.

   ---
   **NOTE**

   The **Create new** resource group feature is not supported.

   ---

click 'Next'

### Rancher Configuration

1. Enter the hostname for Rancher, and it must be a fully qualified domain
   name (FQDN). The Rancher server URL will be created using this hostname.

   ---
   **NOTE**

   The IP address of the Rancher hostname must be resolvable by a public DNS.

   ---

2. Using the slide bar, select the number of Rancher replicas.
3. Choose bootstrap password as it is suggested by the tip. The bootstrap
   password will be used to authenticate to the Rancher dashboard during first
   login.

   ---
   **NOTE**

   The current Rancher deployment exposes the bootstrap password in the Cluster
   configuration settings in Azure Portal. Until this is resolved, it is
   suggested to change the Admin password after the initial login. Edit profile
   in the Rancher dashboard to change password.

   ---

click 'Next'

### Review + create


  This will summarize the offer and link to "view automation template" (Azure Resource Manager Template) 


     Price
     Basics
     Rancher Configuration

click 'Create'

### Deployment Complete 

Deployment will be in progress. After it is completed, the Rancher Prime
Kubernetes service extension is successfully installed.

 ---
 ** NOTE: **

 In the "Extensions + applications" page, the "Provisioning State" may show
 "Succeeded" even though the provision may still be in progress. You may monitor
 the actual progragress by logging into the AKS cluster and follow the
 "rancher-cloud" deployment.

 ---

## Log into the Rancher dashboard

You may now login to Rancher dashboard by point your browser to Rancher server
URL **https://<Rancher hostname\>**, where **Rancher hostname** is the hostname
you have chosen previously.

 ---
 **NOTE**

 The Rancher hostname must be resolvable by public DNS. Please refer to the
 [Prerequisites](#prerequisites) section for more details.

 ---

## How To Use Rancher

Please refer to the [Rancher documentation](https://ranchermanager.docs.rancher.com/)
on how to use Rancher.

## Rancher Prime PAYG billing

Billing will be available in the Azure Portal billing

Home > Cost Management <subscription\> | Cost analysis