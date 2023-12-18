---
title: Azure Marketplace Pay-as-you-go (PAYG) Integration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/pages-for-subheaders/azure-marketplace-payg-integration"/>
</head>

## Overview

Rancher Prime integrates with the Azure Marketplace as a pay-as-you-go (PAYG) offering. This brings the value of running and managing Kubernetes environments to Azure customers, with the benefit of a new pay monthly pricing model available through the Azure Marketplace. This listing will enable you to manage any CNCF-certified Kubernetes distribution in Azure, on-prem, or at the edge. To learn more, see our non-EMEMA and EMEA Azure Marketplace offerings for Rancher Prime:
- [Rancher Prime (non-EMEA)](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suse.rancher-prime-llc/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suse.rancher-prime-llcpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%221dafcf16-920e-46ea-80c9-dc85c6bd3a17%22%7D/searchTelemetryId/c2300fb7-ba7b-462a-ba57-a37cb5e2822d)
- [Rancher Prime (EMEA)](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suseirelandltd1692213356027.rancher-prime-ltd/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suseirelandltd1692213356027.rancher-prime-ltdpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%22c6b1d79a-b577-47b0-90e5-41e6c49688ab%22%7D/searchTelemetryId/1793144d-e0d9-466e-8e36-dfeddc73163b)

## Limitations

- Currently, you must be running Rancher Manager v2.7.9. When you deploy a supported PAYG version, you will be able to update to newer versions of Rancher Manager when the listing is updated.

## How to Use

1. Complete the [prerequisite steps](../integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/rancher-prime-azure.md).
2. [Install the Rancher Prime PAYG offering on the Azure Marketplace](../integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/installing-rancher-prime.md).

## FAQ

The following is a list of frequently asked questions.

### Marketplace Listing

**What is the Rancher Prime listing on the Azure Marketplace?**

By selecting the Rancher Prime listing in the Azure Marketplace, customers can deploy Rancher to their Microsoft Azure Kubernetes Service (AKS) cluster environment to manage any downstream CNCF-certified Kubernetes distribution with the advantage of having monthly billing for Rancher Prime via Microsoft Azure.

**Where do I find the Rancher Prime listings?**

There are two listings in the Azure Marketplace. They are:

- Rancher Prime with 24x7 Support
- Rancher Prime with 24x7 Support (EMEA Orders Only)

**Why are there 2 listings, which one should I use?**

There are two listings for Rancher Prime to accommodate Microsoft Azure billing regions. You should pick the listing that reflects where your Azure account gets billed.

**Are these listings available in all countries?**

No, due to billing limitations and other restrictions, the Rancher Prime Azure Marketplace listing may not be purchasable in all countries. The Azure account you use for deployment determines your billing country. Contact your Azure Sales Team for more details.

**My Azure account is in the USA, but I want to deploy Rancher in another Azure region, a region that is in a country where I currently cannot transact Rancher Prime, is this possible?**

Yes, as long as your Azure account is billed to one of the allowed countries, it is possible to deploy Rancher Prime in any Azure region.

**Is this listing available in China?**

While it is not possible to transact/bill Rancher Prime in China, it is possible to deploy into Azure regions in China.

### Billing

**I have an existing Rancher Prime subscription; can I use this on Azure?**

Self-installed BYOS (Bring Your Own Subscription) Rancher Prime deployments are supported on Azure; however, billing will not be via the Azure Marketplace. Once the existing subscription term ends, you can purchase Rancher Prime via the Azure Marketplace and reconfigure your cluster to support monthly billing via Azure.

**I have an existing deployment covered by a Rancher subscription; can I use this new listing in the Azure Marketplace for new deployments?**

Yes, the listing works independently from your existing Rancher Prime subscriptions. Only deployments through the marketplace listing will be billed through Azure. Support is always direct from SUSE.

**Tell me more about how the billing for Rancher Prime works via Azure?**

When purchasing Rancher Prime via the Azure Marketplace, the billing is as follows:

- Billing is monthly and handled via Azure.
- Managed nodes are counted hourly when Rancher is active and added to a usage total.
- An average node count is calculated for the month.
- There is a monthly usage charge for each node in the average node count.
- The monthly usage charge depends on the number of nodes in use.
- There is a 5-node minimum, if the average node count is less than 5 nodes, the charge will be for 5 nodes.

**What are the pricing tiers?**

Rancher Prime has different pricing tiers when purchasing via the Azure Marketplace. This is based on the number of nodes which Rancher is managing.Details of the tiers are shown below, please check the listing for further pricing information.

**Is there a way to try Rancher before purchasing?**

If using the Rancher Prime listing in the Azure Marketplace, billing will commence from the time of deployment. You can try Rancher by deploying it per standard documentation. When ready to benefit from a supported platform and have this billed through Azure, deploy Rancher Prime via the Azure Marketplace and migrate your configuration.

**How does SUSE calculate the ‘average number of managed nodes’ to bill for?**

The average node count is calculated by adding the number of managed nodes (counted hourly) and dividing by the number of hours Rancher has been active in the billing cycle. Three examples are shown in the table below.

:::note
In our example month, we are using 730 hours; this may differ depending on the number of days in the month and the billing cycle.
:::

**Static Usage:**
Using Rancher to manage 10 nodes, for 1 month (730 hours) with no additional nodes added in the month.
**Bursting Model:**
Using Rancher to manage 10 nodes for 3 weeks (562 hours) in the month and bursting to 30 nodes for 1 week (168 hours).
**Transient Cluster:**
A temporary deployment of Rancher on 20 nodes for 2 weeks (336 hours).

**Are special commercial terms available?**

Depending on the deployment, it may be possible to secure special commercial terms, such as an annual subscription. This will be handled via an Azure private offer, contact SUSE for more information.

**Can my spend on Rancher Prime count towards my MACC Program?**

Yes, it can. Contact your Azure Sales Team for more details.

**How do I purchase Rancher for additional nodes?**

Once Rancher Prime has been deployed from the Azure Marketplace and billing is active, there is no need to make a specific purchase for additional nodes. Billing is dynamic and based on the number of nodes Rancher is managing. Just deploy or on-board additional clusters to Rancher as needed.

**Is this an annual commitment, will it auto-renew?**

By default, the Rancher Prime listing is billed on a monthly cycle, based on usage. Billing is on-going for as long as Rancher Prime is deployed.

It is possible to set up an annual commitment via an Azure Private Offer, these will need to be reviewed and renewed at the end of the term, or the deployment will drop back to the default monthly billing cycle.

### Technical

**Do I need a Kubernetes cluster running in Azure to install Rancher and be billed via the Azure Marketplace?**

Yes. To benefit from monthly billing via Azure, the primary Rancher cluster must be an Azure Kubernetes Service (AKS) cluster running in your Azure account. 

**On which Kubernetes distributions can the Rancher Prime Azure Marketplace listing be deployed?**

The Rancher Prime marketplace listing must be deployed on Azure Kubernetes Service (AKS). Downstream/managed clusters can run any supported Kubernetes platform: RKE, RKE2, EKS, GKE, vanilla Kubernetes, OpenShift, Mirantis Kubernetes Engine, etc. See Supported Platforms for more details.

**What is the deployment mechanism?**

The Rancher Prime marketplace listing is deployed using Azure’s CNAB (with Helm inside).

**What is the easiest way to get started?**

One of the easiest ways to get started is to deploy the Rancher Prime marketplace listing to an existing AKS cluster. Follow the instructions in the usage section of the listing. A Helm chart takes care of installation and billing setup.

**What is the minimum version of Rancher required to support Azure Marketplace billing?**

The minimum version supporting marketplace billing is Rancher 2.7.8.

**What version of Rancher is installed when using the marketplace listing?**

The Rancher Prime marketplace listing is tied to a specific version of Rancher, typically the latest version available at the time of the listing update. Check the listing for further information.

**I need a prior version of Rancher; can I still use the listing?**

No. There is no choice over the Rancher version when deploying using the Azure Marketplace listing. If a prior version of Rancher is required, this must be installed manually using the standard documentation. NOTE: Billing through the Azure Marketplace may not be supported with earlier versions.

**How often is the listing updated (including the version of Rancher, etc.)?**

The marketplace listing is tied to a specific version of Rancher, usually it is the latest version available at the time the listing was last updated. Typically, the marketplace listing is updated quarterly, or more frequently to address any new security issues. To update Rancher to a current version before the marketplace listing is updated, please see the product documentation.

**I have many Kubernetes clusters across multiple Azure accounts; does the Rancher Prime billing still work and enable tiered pricing?**

Yes. Downstream/managed clusters can be deployed across single or multiple Azure accounts, on-premises, and in other public clouds. Downstream/managed nodes report up to Rancher Prime, enabling tiered pricing with billing routed to the Azure account in which the managing Rancher Prime cluster is running.

**I have multiple independent clusters, each running a separate installation of the Rancher Prime Azure Marketplace listing; how is this billed?**

As the Rancher Prime deployments are independent, each deployment is billed separately from the others. It is not possible to benefit from tiered pricing. If managing multiple independent Rancher Prime clusters, consider custom terms from SUSE.

**How can I benefit from tiered pricing across all Rancher deployments?**

The primary Rancher Prime cluster must be running on AKS in Microsoft Azure, deployed through the marketplace listing. To benefit from tiered pricing, downstream/managed clusters should be imported into the primary Rancher Prime cluster.

**I have purchased multiple SUSE products from the Azure Marketplace (e.g., SUSE Manager, NeuVector Prime, Rancher Prime); does the Azure Marketplace billing method still work?**

Yes. The billing mechanisms for the deployments are independent and are billed separately via the Azure Marketplace.

**I already have an existing AKS cluster in place and want to add Rancher Prime to it and be billed through the Azure Marketplace; is this possible?**

Yes, simply deploy the Rancher Prime to the cluster with the Azure Marketplace listing.

**I already deployed Rancher to an existing AKS cluster; can I just install the marketplace version to enable Azure Marketplace billing?**

No. You need to deploy Rancher Prime with the Azure Marketplace listing and migrate the existing Rancher configuration to this new deployment. Be sure that you back up your existing Rancher configuration.

**How do I get support?**

It is very simple to open a support case with SUSE for Rancher Prime. Create a ‘supportconfig’ via the Rancher UI (click Get Support under the hamburger menu and follow instructions), then upload the ‘supportconfig’ output to the SUSE Customer Center. If the billing mechanism is active, a support case will be opened. See Supportconfig bundle in the Rancher documentation for more details.

:::note

For deployments where Rancher Prime is managing multiple downstream clusters, be sure to export the ‘supportconfig’ bundle from the primary cluster only.

:::

**What are the resource requirements for installing Rancher on AKS?**

Check the official documentation for best practices. Is there any difference between Rancher Prime from the Azure

**Marketplace and the versions I can run in my own data center?**

Rancher Prime available in the Azure Marketplace is the same product, with the same functionality that you would install manually in the cloud or on-premises.The only difference between deploying manually and deploying via the marketplace listing is the billing route.

**Does the primary cluster (responsible for billing) need to run 24/7?**

To ensure continuity of support, it is recommended that the primary Rancher Prime cluster always remain active.

**What if the primary cluster responsible for billing is unable to connect to the Azure billing framework?**

There may be multiple reasons why the primary cluster is unable to connect to the Azure billing framework, but it is the customer’s responsibility to ensure that the primary cluster is active and connected. While the cluster is not connected to the billing framework, it is not possible to raise a support request.

**My primary cluster has been offline; what will happen with billing when reconnected?**

If the Racher Prime cluster is offline or disconnected from the Azure billing framework for a period of time, when it reconnects, the stored usage data will be uploaded to Azure and will appear on your next Azure bill. Depending on the month when the primary cluster gets reconnected you may have several months of usage on your next billing cycle.

**How do I get fixes and updates for Rancher?**

To update the Rancher product to a current version before the marketplace listing is updated, see Upgrades in the official documentation.
