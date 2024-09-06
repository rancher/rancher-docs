---
title: Cloud Marketplace Pay-as-you-go (PAYG) Integration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/v2.7/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration"/>
</head>

Rancher Prime integrates with the [AWS Marketplace](https://aws.amazon.com/marketplace) and [Azure Marketplace](https://azuremarketplace.microsoft.com/) as a pay-as-you-go (PAYG) offering. This brings the value of running and managing Kubernetes environments to cloud customers, who benefit from a new pay-monthly pricing model available through their preferred cloud provider's marketplace. This listing will enable you to manage any CNCF-certified Kubernetes distribution in AWS, Azure, on-prem, or at the edge.

## Supported Versions

Rancher v2.7.9 is still a supported PAYG version. However, the PAYG offering is now available for Rancher v2.8.4, and we recommend using this version for the latest features and security fixes. When you deploy a supported PAYG version, you can update to newer versions of Rancher when the listing is updated.

## How to Use

<Tabs>
<TabItem value="AWS">

1. Complete the [prerequisite steps](../cloud-marketplace/aws-marketplace-payg-integration/prerequisites.md).
2. [Install the Rancher Prime PAYG offering on the AWS Marketplace](../cloud-marketplace/aws-marketplace-payg-integration/installing-rancher-prime.md).

</TabItem>
<TabItem value="Azure">

1. Complete the [prerequisite steps](../cloud-marketplace/azure-marketplace-payg-integration/prerequisites.md).
2. [Install the Rancher Prime PAYG offering on the Azure Marketplace](../cloud-marketplace/azure-marketplace-payg-integration/installing-rancher-prime.md).

</TabItem>
</Tabs>

## FAQ

The following is a list of frequently asked questions.

### Marketplace Listings

#### What is the Rancher Prime listing on the cloud marketplace?

By selecting the Rancher Prime listing from the AWS or Azure Marketplace, you can deploy Rancher to your Kubernetes environment with the advantage of having monthly billing via the cloud.

#### Where do I find the Rancher Prime listings?

There are two listings in each respective cloud marketplace. They are:

**AWS**
- [Rancher Prime](https://aws.amazon.com/marketplace/pp/prodview-f2bvszurj2p2c)
- [Rancher Prime (EMEA Orders Only)](https://aws.amazon.com/marketplace/pp/prodview-ocgjwd5c2aj5i)

**Azure**
- [Rancher Prime with 24x7 Support](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suse.rancher-prime-llc/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suse.rancher-prime-llcpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%221dafcf16-920e-46ea-80c9-dc85c6bd3a17%22%7D/searchTelemetryId/c2300fb7-ba7b-462a-ba57-a37cb5e2822d)
- [Rancher Prime with 24x7 Support (EMEA Orders Only)](https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suseirelandltd1692213356027.rancher-prime-ltd/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suseirelandltd1692213356027.rancher-prime-ltdpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%22c6b1d79a-b577-47b0-90e5-41e6c49688ab%22%7D/searchTelemetryId/1793144d-e0d9-466e-8e36-dfeddc73163b)

#### Why are there two listings? Which one should I use?

We have two listings for Rancher Prime, a EU/EMEA version and a non-EU, non-UK version, due to different regulations in different locations. Whichever listing you choose, the images and support offered are identical. You should pick the listing for the location of your cloud provider account.

#### Are these listings available in all countries?

No. The PAYG listing isn't available in all countries.

Your billing country is based on the cloud provider Account ID for the deployment.

Please refer to [Geographical availability](https://documentation.suse.com/sle-public-cloud/all/html/public-cloud/countrylist.html) for a list of countries that can and cannot access Rancher Prime via the AWS and Azure cloud marketplaces.

#### My cloud provider account is in the USA, but I want to deploy Rancher in another region, a region that is in a country where I currently cannot transact Rancher Prime. Is this possible?

Yes. As long as your account is billed to one of the allowed countries, it is possible to deploy Rancher in any region.

#### Is this listing available in China?

While it is not possible to transact or bill Rancher Prime in China, it is possible to deploy into regions in China.

#### Can I still deploy Rancher using the "Rancher Setup" listing from the AWS Marketplace?

The Rancher Setup listing is no longer available via AWS Marketplace. Customers should deploy an EKS Cluster to host Rancher. Follow the steps in this [guide](../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md) except for the Rancher installation. The Rancher product installation should be carried out as per [installing the Rancher Prime PAYG offering on Amazon's AWS Marketplace](../cloud-marketplace/aws-marketplace-payg-integration/installing-rancher-prime.md).

### Billing

#### I have an existing Rancher Prime subscription. Can I use this on the cloud?

BYOS (Bring Your Own Subscription) Rancher deployments are supported on the cloud; however, you won't be billed for your BYOS via the cloud marketplace. Once the existing subscription term ends, you can purchase Rancher Prime via the cloud marketplace and reconfigure your cluster to support monthly billing via the cloud.

#### I have an existing Rancher Subscription purchased via the Rancher Premium Support listing on AWS. Is this transferable to the new model?

No. A new deployment of Rancher Prime is required to benefit from the new monthly billing model.

#### I have an existing deployment covered by a Rancher subscription; can I use this new marketplace listing for new deployments?

Yes. The listing works independently of your existing subscriptions. Please remember that support processes may be different for deployments using your existing subscription and deployments billed via the cloud marketplace.

#### Can you tell me more about how the billing for Rancher Prime works for the cloud marketplace?

When purchasing Rancher Prime via the cloud marketplace, the billing is as follows:

- Billing is monthly and handled via the marketplace.
- Managed nodes are counted hourly when Rancher is active and added to a usage total.
- An average node count is calculated for the month.
- There is a monthly usage charge for each node in the average node count.
- The monthly usage charge depends on the number of nodes in use.
- There is a 5-node minimum; if the average node count is less than 5 nodes, the charge will be for 5 nodes.

#### What are the pricing tiers?

Pricing tiers are based on the number of nodes which Rancher is managing. Details of the tiers are below. Please check the respective listing for further price information.

| Tier     | Nodes (from) |  Nodes (to) |
| :------: | :----------: | :---------: |
| **1**    | 5            | 15          |
| **2**    | 16           | 50          |
| **3**    | 51           | 100         |
| **4**    | 101          | 250         |
| **5**    | 251          | 1000        |
| **6**    | 1001         |             |

#### Is there a way to try Rancher before purchasing?

If you use the Rancher Prime listing in a cloud provider marketplace, billing commences from the time of deployment.

Rancher can be deployed manually using the standard documentation and repositories. When you're ready to benefit from a supported platform and have this billed via the marketplace, follow the available [documentation](../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md) to deploy Rancher Prime from the marketplace and migrate.

#### How does SUSE calculate the average number of managed nodes to bill for?

The average node count is calculated by adding together the number of managed nodes (counted hourly), and dividing this sum by the number of hours Rancher has been active in the billing cycle.

Here are three examples of how the average node count is calculated. Check the following table for details.

:::note

In our example month, we are using 730 hours; this may differ depending on the number of days in the month and the billing cycle.

:::

- **Static usage:** Using Rancher to manage 10 nodes, for 1 month (730 hours) with no additional nodes added in the month.
- **Bursting Model:** Using Rancher to manage 10 nodes for 3 weeks (562 hours) in the month, bursting to 30 nodes for 1 week (168 hours).
- **Transient cluster:** A temporary deployment of Rancher on 20 nodes for 2 weeks (336 hours).

|                   | Hours Active (Hours Rancher is active in the month) | Nodes (Managed Nodes counted at each check-in) | Usage total (Sum of nodes reported at each check-in) | Average Node Count (Usage total / hours active) | Note                |
| ----------------- | :--:                                        | :------------------------:                     | :----:                                          | :--:                                       | :------------------------------:  |
| **Static Usage**  | 730                                         | 10                                             | 7300                                            | 10                                         | 10 @ Tier 1                       |
| **Bursting Model**    | 730                                         | 10 (562 hrs), 30 (168 hrs)                      | 10660                                           | 15                                         | 15 @ Tier 1 (rounded from 14.6)   |
| **Transient Cluster** | 336                                         | 20                                             | 6720                                            | 20                                         | 20 @ Tier 2                       |

#### Are special commercial terms available?

Depending on the deployment, and the cloud provider, securing special commercial terms (e.g., an annual subscription) may be possible. For example, in AWS this is handled via an AWS Private offer. Please contact SUSE for more information.

#### Can my spend on Rancher Prime count towards my cloud provider discount program?

Yes. This should be possible through the:

- Azure MACC Program
- AWS Enterprise Discount Program

Please contact your AWS or Azure sales team for more details.

#### How do I purchase Rancher for additional nodes?

Once Rancher is deployed from the listing on the cloud marketplace and billing is active, there is no need to make a specific purchase for additional nodes. Billing is dynamic and based on the number of nodes Rancher is managing. Just deploy or onboard additional clusters to Rancher as needed.

#### Is this an annual commitment, or does it auto-renew?

By default, the Rancher Prime listing in the cloud is billed on a monthly cycle, based on usage. Billing is ongoing for as long as Rancher is deployed.

### Technical (Billing)

#### Do I need a Kubernetes cluster running in the cloud to install Rancher and be billed via the cloud marketplace?

Yes. To benefit from monthly billing via the cloud marketplace, the primary Rancher cluster must be an on the cloud provider's Kubernetes service.  In AWS an EKS cluster is required, while in Azure an AKS cluster is required.

#### Which Kubernetes distributions can the marketplace listings be deployed on?

The cloud marketplace listings for Rancher Prime must be deployed on Amazon EKS or Azure AKS. Downstream clusters and  managed worker nodes can run on any CNCF-compliant Kubernetes platform, such as AKS, EKS, EKS-A, or Rancher Kubernetes Engine (RKE).

#### What is the deployment mechanism?

The cloud marketplace listings for Rancher Prime are deployed using Helm.

#### What is the easiest way to get started?

Deploy a listing for Rancher Prime to an existing EKS or AKS cluster. Follow the instructions in the usage section. a Helm chart takes care of the installation and setup for billing.

#### What version of Rancher is installed when using a marketplace listing?

Each marketplace listing for Rancher Prime is tied to a specific version of Rancher, typically the latest version available at the time of the listing update. Please check the listing for further information.

#### I need a prior version of Rancher, can I still use a marketplace listing?

No. There is no choice over the Rancher version when deploying Rancher through a cloud marketplace listing. If a prior version of Rancher is required, it must be installed manually using the standard documentation.

:::note

Billing through the cloud provider marketplace may not be supported with previous versions.

:::

#### How often are the listings updated (including the version of Rancher, etc.)?

Marketplace listings are tied to a specific version of Rancher, usually the latest version available at the time of listing. Typically, listings are updated quarterly, or more frequently if there are security issues.

#### I have many Kubernetes clusters across multiple cloud accounts, does the Rancher Prime billing still work and enable tiered pricing?

Yes. Downstream clusters managed by Rancher can be deployed across single or multiple cloud accounts, on-premises, or even in other public clouds. Downstream nodes report up to the primary Rancher deployment. Tiered pricing is enabled and billing is routed to the cloud account in which the primary cluster is running.

#### I have multiple independent clusters, each running a separate installation of the marketplace listing for Rancher Prime. How is this billed?

As the Rancher Prime deployments are independent, each deployment is billed separately from the others within the cloud marketplace. It is not possible to benefit from tiered pricing. Please contact SUSE.

#### I have purchased multiple SUSE products from the cloud marketplace (e.g., SUSE Manager, NeuVector Prime and now Rancher Prime). Does the cloud marketplace billing method still apply?

Yes. Since the billing mechanism of each deployment is independent, each product will be billed separately via the cloud marketplace.

#### I already have an existing cluster, with Rancher deployed. Can I just install the marketplace version and have support billed via the cloud provider marketplace?

In order to benefit from monthly billing via the marketplace, the primary Rancher cluster needs to be deployed from the listing. It is then possible to migrate the existing Rancher configuration to the new deployment.

Please follow the [documentation](../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md) and be sure to back up the existing Rancher configuration.

### Technical (Product)

#### How do I contact support?

It is very simple to [open a support case](https://scc.suse.com/cloudsupport) with SUSE for Rancher Prime. Create a support config via the Rancher UI and upload the output to the SUSE Customer Center. The support config bundle can be exported from the Rancher console using the **Get Support** button at the bottom of the page. For deployments where Rancher is managing multiple downstream clusters, export the support config bundle only from the primary cluster.

If the billing mechanism on the primary cluster is active, a support case will be opened. Further details can be found in the [documentation](../cloud-marketplace/supportconfig.md).

#### What are the resource requirements for installing Rancher on AKS or EKS?

Please check the documentation for best practices.

#### Is there any difference between Rancher Prime from the cloud marketplace and the versions I can run in my own data center?

Rancher Prime available in the cloud marketplace is the same product, with the same functionality that you would run on-premises or with a manual installation. The only difference between deploying manually and deploying via a marketplace listing is the billing route.

#### Does the primary cluster (responsible for billing) need to run 24/7?

To ensure continuity with support, the primary Rancher cluster should always remains active.

#### What if the primary cluster responsible for billing is unable to connect to the cloud provider billing framework?

There may be multiple reasons why the primary cluster is unable to connect to the billing framework, but it is the customer’s responsibility to ensure that the primary cluster is active and connected. When the cluster is not connected to the billing framework, it is not possible to raise a support request.

#### My primary cluster has been offline. What will happen with billing when reconnected?

If the primary cluster is offline or disconnected from the cloud provider billing framework for a period of time, when it reconnects, the stored usage data will be uploaded and appear on your next marketplace bill.

Depending on when in the month the primary cluster gets reconnected you may have several months of usage on your next billing cycle.

#### Can the managed worker nodes reside on premises, at the edge or even on another cloud?

Yes. Managed nodes (managed clusters) can run anywhere. SUSE Rancher will count the total number of nodes managed regardless of where they are deployed.

#### How do I get fixes and updates for Rancher?

To update to the latest supported version of the Rancher Prime PAYG offering, please see:
  - [Upgrading Rancher Prime PAYG cluster in AWS](../cloud-marketplace/aws-marketplace-payg-integration/upgrading-rancher-payg-cluster.md)
  - [Upgrading Rancher Prime PAYG cluster in Azure](../cloud-marketplace/azure-marketplace-payg-integration/upgrading-rancher-payg-cluster.md)
