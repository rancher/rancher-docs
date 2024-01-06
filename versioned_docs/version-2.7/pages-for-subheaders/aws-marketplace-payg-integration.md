---
title: AWS Marketplace Pay-as-you-go (PAYG) Integration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/pages-for-subheaders/aws-marketplace-payg-integration"/>
</head>

## Overview

Rancher Prime integrates with the AWS Marketplace as a pay-as-you-go (PAYG) offering. This brings the value of running and managing Kubernetes environments to AWS customers, benefiting from a new pay-monthly pricing model available through the AWS Marketplace. This listing will enable you to manage any CNCF-certified Kubernetes distribution in AWS, on-prem, or at the edge. To learn more, see our non-EMEA and EMEA AWS Marketplace offerings for Rancher Prime:

- [Rancher Prime](https://aws.amazon.com/marketplace/pp/prodview-f2bvszurj2p2c)
- [Rancher Prime (EMEA Orders Only)](https://aws.amazon.com/marketplace/pp/prodview-ocgjwd5c2aj5i)

## Limitations

- Currently, you must be running Rancher v2.7.9. When you deploy a supported PAYG version, you can update to newer versions of Rancher when the listing is updated.

## How to Use

1. Complete the [prerequisite steps](../integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/prerequisites.md).
2. [Install the Rancher Prime PAYG offering on the AWS Marketplace](../integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/installing-rancher-prime.md).

## FAQ

The following is a list of frequently asked questions.

### Marketplace Listing

#### What is the Rancher Prime listing on the AWS Marketplace?

By selecting the Rancher Prime listing from the AWS Marketplace, customers can deploy Rancher to their Kubernetes environment with the advantage of having monthly billing via AWS.

#### Where do I find the Rancher Prime listings?

There are two listings in the AWS Marketplace. They are:

- [Rancher Prime](https://aws.amazon.com/marketplace/pp/prodview-f2bvszurj2p2c)
- [Rancher Prime (EMEA Orders Only)](https://aws.amazon.com/marketplace/pp/prodview-ocgjwd5c2aj5i)

#### Why are there two listings? Which one should I use?

We have two listings for Rancher Prime, "EU, EEA, or UK Orders" and "non EU, EEA, or UK Orders." You should pick the listing that reflects where your AWS account gets billed.

#### Are these listings available in all countries?

No. The Rancher listing on AWS is not available to purchase in all countries.

Your billing country is based on the AWS Account ID used to do the deployment.

Please refer to the following lists of countries that can and cannot transact Rancher Prime via the AWS Marketplace.

<details>
  <summary>Countries that can transact SUSE Rancher Support through the AWS Marketplace</summary>
    <div>
      <li>Australia, AU</li>
      <li>Austria, AT</li>
      <li>Bangladesh, BD</li>
      <li>Belgium, BE</li>
      <li>Bulgaria, BG</li>
      <li>Cameroon, CM</li>
      <li>Canada, CA</li>
      <li>Chile, CL</li>
      <li>Croatia, HR</li>
      <li>Cyprus, CY</li>
      <li>Czech Republic, CZ</li>
      <li>Denmark, DK</li>
      <li>Egypt, EG</li>
      <li>Estonia, EE</li>
      <li>Finland, FI</li>
      <li>France, FR</li>
      <li>Germany, DE</li>
      <li>Greece, GR</li>
      <li>Hungary, HU</li>
      <li>Iceland, IS</li>
      <li>India, IN</li>
      <li>Indonesia, ID</li>
      <li>Ireland, IE</li>
      <li>Isle of Man, IM</li>
      <li>Italy, IT</li>
      <li>Kenya, KE</li>
      <li>Kingdom of Saudi Arabia, SA</li>
      <li>Korea, Republic of, KR</li>
      <li>Latvia, LV</li>
      <li>Lithuania, LT</li>
      <li>Liechtenstein, LI</li>
      <li>Luxembourg, LU</li>
      <li>Malaysia, MY</li>
      <li>Malta, MT</li>
      <li>Netherlands, NL</li>
      <li>New Zealand, NZ</li>
      <li>Norway, NO</li>
      <li>Poland, PL</li>
      <li>Portugal, PT</li>
      <li>Romania, RO</li>
      <li>Russian Federation, RU</li>
      <li>Singapore, SG</li>
      <li>Slovakia, SK</li>
      <li>Slovenia, SI</li>
      <li>South Africa, ZA</li>
      <li>Spain, ES</li>
      <li>Sweden, SE</li>
      <li>Switzerland, CH</li>
      <li>Taiwan, Province of China, TW</li>
      <li>Turkey, TR</li>
      <li>United Kingdom, GB</li>
      <li>United States, US</li>
  </div>
</details>

<details>
  <summary>Countries that cannot transact SUSE Rancher Support via the AWS Marketplace</summary>
    <div>
      <li>Afghanistan, AF</li>
      <li>Åland Islands, AX</li>
      <li>Albania, AL</li>
      <li>Algeria, DZ</li>
      <li>American Samoa, AS</li>
      <li>Andorra, AD</li>
      <li>Angola, AO</li>
      <li>Anguilla, AI</li>
      <li>Antarctica, AQ</li>
      <li>Antigua and Barbuda, AG</li>
      <li>Argentina, AR</li>
      <li>Armenia, AM</li>
      <li>Aruba, AW</li>
      <li>Azerbaijan, AZ</li>
      <li>Bahamas, BS</li>
      <li>Bahrain, BH</li>
      <li>Barbados, BB</li>
      <li>Belarus, BY</li>
      <li>Belize, BZ</li>
      <li>Benin, BJ</li>
      <li>Bermuda, BM</li>
      <li>Bhutan, BT</li>
      <li>Bonaire, BQ</li>
      <li>Bolivarian Republic of Venezuela, VE</li>
      <li>Bosnia and Herzegovina, BA</li>
      <li>Botswana, BW</li>
      <li>Bouvet Island, BV</li>
      <li>Brazil, BR</li>
      <li>British Indian Ocean Territory, IO</li>
      <li>Brunei Darussalam, BN</li>
      <li>Burkina Faso, BF</li>
      <li>Burundi, BI</li>
      <li>Cambodia, KH</li>
      <li>Cape Verde, CV</li>
      <li>Cayman Islands, KY</li>
      <li>Central African Republic, CF</li>
      <li>Chad, TD</li>
      <li>China, CN</li>
      <li>Christmas Island, CX</li>
      <li>Cocos (Keeling) Islands, CC</li>
      <li>Colombia, CO</li>
      <li>Comoros, KM</li>
      <li>Congo, CG</li>
      <li>Cook Islands, CK</li>
      <li>Costa Rica, CR</li>
      <li>Côte d'Ivoire, CI</li>
      <li>Curaçao, CW</li>
      <li>Democratic Republic of the Congo, CD</li>
      <li>Djibouti, DJ</li>
      <li>Dominica, DM</li>
      <li>Dominican Republic, DO</li>
      <li>Ecuador, EC</li>
      <li>El Salvador, SV</li>
      <li>Equatorial Guinea, GQ</li>
      <li>Eritrea, ER</li>
      <li>Ethiopia, ET</li>
      <li>Falkland Islands (Malvinas), FK</li>
      <li>Faroe Islands, FO</li>
      <li>Federated States of Micronesia, FM</li>
      <li>Fiji, FJ</li>
      <li>Former Yugoslav Republic of Macedonia, MK</li>
      <li>French Guiana, GF</li>
      <li>French Polynesia, PF</li>
      <li>French Southern Territories, TF</li>
      <li>Gabon, GA</li>
      <li>Gambia, GM</li>
      <li>Georgia, GE</li>
      <li>Ghana, GH</li>
      <li>Gibraltar, GI</li>
      <li>Greenland, GL</li>
      <li>Grenada, GD</li>
      <li>Guadeloupe, GP</li>
      <li>Guam, GU</li>
      <li>Guatemala, GT</li>
      <li>Guernsey, GG</li>
      <li>Guinea, GN</li>
      <li>Guinea-Bissau, GW</li>
      <li>Guyana, GY</li>
      <li>Haiti, HT</li>
      <li>Heard Island and McDonald Islands, HM</li>
      <li>Holy See (Vatican  City State), VA</li>
      <li>Honduras, HN</li>
      <li>Hong Kong, HK</li>
      <li>Iraq, IQ</li>
      <li>Israel, IL</li>
      <li>Jamaica, JM</li>
      <li>Japan, JP</li>
      <li>Jersey, JE</li>
      <li>Jordan, JO</li>
      <li>Kazakhstan, KZ</li>
      <li>Kiribati, KI</li>
      <li>Kuwait, KW</li>
      <li>Kyrgyzstan, KG</li>
      <li>Lao People's Democratic Republic, LA</li>
      <li>Lebanon, LB</li>
      <li>Lesotho, LS</li>
      <li>Liberia, LR</li>
      <li>Libyan Arab Jamahiriya, LY</li>
      <li>Macao, MO</li>
      <li>Madagascar, MG</li>
      <li>Malawi, MW</li>
      <li>Maldives, MV</li>
      <li>Mali, ML</li>
      <li>Marshall Islands, MH</li>
      <li>Martinique, MQ</li>
      <li>Mauritania, MR</li>
      <li>Mauritius, MU</li>
      <li>Mayotte, YT</li>
      <li>Mexico, MX</li>
      <li>Mongolia, MN</li>
      <li>Montenegro, ME</li>
      <li>Montserrat, MS</li>
      <li>Morocco, MA</li>
      <li>Mozambique, MZ</li>
      <li>Myanmar, MM</li>
      <li>Namibia, NA</li>
      <li>Nauru, NR</li>
      <li>Nepal, NP</li>
      <li>New Caledonia, NC</li>
      <li>Nicaragua, NI</li>
      <li>Niger, NE</li>
      <li>Nigeria, NG</li>
      <li>Niue, NU</li>
      <li>Norfolk Island, NF</li>
      <li>Northern Mariana Islands, MP</li>
      <li>Oman, OM</li>
      <li>Pakistan, PK</li>
      <li>Palau, PW</li>
      <li>Occupied Palestinian Territory, PS</li>
      <li>Panama, PA</li>
      <li>Papua New Guinea, PG</li>
      <li>Paraguay, PY</li>
      <li>Peru, PE</li>
      <li>Philippines, PH</li>
      <li>Pitcairn, PN</li>
      <li>Plurinational State of Bolivia, BO</li>
      <li>Puerto Rico, PR</li>
      <li>Qatar, QA</li>
      <li>Republic of Moldova, MD</li>
      <li>Réunion, RE</li>
      <li>Rwanda, RW</li>
      <li>Saint Barthélemy, BL</li>
      <li>Saint Helena, Ascension and Tristan da Cunha, SH</li>
      <li>Saint Kitts and Nevis, KN</li>
      <li>Saint Lucia, LC</li>
      <li>Saint Martin, MF</li>
      <li>Saint Pierre and Miquelon, PM</li>
      <li>Saint Vincent and the Grenadines, VC</li>
      <li>Samoa, WS</li>
      <li>San Marino, SM</li>
      <li>Sao Tome and Principe, ST</li>
      <li>Senegal, SN</li>
      <li>Serbia, RS</li>
      <li>Seychelles, SC</li>
      <li>Sierra Leone, SL</li>
      <li>Sint Maarten, SX</li>
      <li>Solomon Islands, SB</li>
      <li>Somalia, SO</li>
      <li>South Georgia and the South Sandwich Islands, GS</li>
      <li>South Sudan, SS</li>
      <li>Sri Lanka, LK</li>
      <li>Suriname, SR</li>
      <li>Svalbard and Jan Mayen, SJ</li>
      <li>Swaziland, SZ</li>
      <li>Tajikistan, TJ</li>
      <li>Thailand, TH</li>
      <li>Timor-Leste, TL</li>
      <li>Togo, TG</li>
      <li>Tokelau, TK</li>
      <li>Tonga, TO</li>
      <li>Trinidad and Tobago, TT</li>
      <li>Tunisia, TN</li>
      <li>Turkmenistan, TM</li>
      <li>Turks and Caicos Islands, TC</li>
      <li>Tuvalu, TV</li>
      <li>Uganda, UG</li>
      <li>Ukraine, UA</li>
      <li>United Arab Emirates, AE</li>
      <li>United Republic of Tanzania, TZ</li>
      <li>United States Minor Outlying Islands, UM</li>
      <li>Uruguay, UY</li>
      <li>Uzbekistan, UZ</li>
      <li>Vanuatu, VU</li>
      <li>Viet Nam, VN</li>
      <li>Virgin Islands, British, VG</li>
      <li>Virgin Islands, U.S., VI</li>
      <li>Wallis and Futuna, WF</li>
      <li>Western Sahara, EH</li>
      <li>Yemen, YE</li>
      <li>Zambia, ZM</li>
      <li>Zimbabwe, ZW</li>
    </div>
</details>

#### My AWS account is in the USA, but I want to deploy Rancher in another AWS region, a region that is in a country where I currently cannot transact Rancher Prime. Is this possible?

Yes. As long as your AWS account is billed to one of the allowed countries, it is possible to deploy Rancher in any AWS regions.

#### Is this listing available in China?

While it is not possible to transact/bill Rancher Prime in China, it is possible to deploy into AWS regions in China.

#### Can I still deploy Rancher using the "Rancher Setup" listing from the AWS Marketplace?

"Rancher Setup" is no longer available via AWS Marketplace. Customers should deploy an EKS Cluster to host Rancher. Follow the steps in this [guide](../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md) except for the Rancher installation. The Rancher product installation should be carried out as per [installing the Rancher Prime PAYG offering on Amazon's AWS Marketplace](../integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/installing-rancher-prime.md).

### Billing

#### I have an existing Rancher Prime subscription. Can I use this on AWS?

BYOS (Bring Your Own Subscription) Rancher deployments are supported on AWS; however, billing will not be via the AWS Marketplace. Once the existing subscription term ends, you can purchase Rancher Prime via the AWS Marketplace and reconfigure your cluster to support monthly billing via AWS.

#### I have an existing Rancher Subscription purchased via the ’Rancher Premium Support’ listing on AWS. Isthis transferable to the new model?

No. A new deployment of Rancher Prime is required to benefit from the new monthly billing model.

#### I have an existing deployment covered by a Rancher subscription; can I use this new listing in AWS for new deployments?

Yes. the listing works independently from your existing subscriptions. Please remember that support processes may be different for deployments using your existing subscription and those billed via the AWS Marketplace.

#### Tell me more about how the billing for Rancher Prime works via AWS?

When purchasing Rancher Prime via the AWS Marketplace, the billing is as follows:

- Billing is monthly and handled via AWS Marketplace.
- Managed nodes are counted hourly when Rancher is active and added to a usage
total.
- An average node count is calculated for the month.
- There is a monthly usage charge for each node in the average node count.
- The monthly usage charge depends on the number of nodes in use.
- There is a 5-node minimum; if the average node count is less than 5 nodes, the
charge will be for 5 nodes.

#### What are the pricing tiers?

Rancher Prime has different pricing tiers when purchasing via the AWS Marketplace. This is based on the number of nodes which Rancher is managing. Details of the tiers are below. Please check the listing for further pricing information.

| Tier     | Nodes (from) |  Nodes (to) |
| :------: | :----------: | :---------: |
| **1**    | 5            | 15          |
| **2**    | 16           | 50          |
| **3**    | 51           | 100         |
| **4**    | 101          | 250         |
| **5**    | 251          | 1000        |
| **6**    | 1001         |             |

#### Is there a way to try Rancher before purchasing?

If using the Rancher Prime listing in the AWS Marketplace, billing will commence from the time of deployment.

Rancher can be deployed manually using the standard documentation and repositories. When ready to benefit from a supported platform and have this billed via the AWS Marketplace, follow the available [documentation](../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md) to deploy Rancher Prime from the AWS Marketplace and migrate.

#### How does SUSE calculate the ‘average number of managed nodes’ to bill for?

The average node count is calculated by adding the number of managed nodes (counted hourly) and dividing by the number of hours Rancher has been active in the billing cycle.

Below are three examples of how the average node count is calculated. Check the table below for the details.

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

Depending on the deployment, securing special commercial terms (e.g., an annual subscription) may be possible. This will be handled via an AWS Private offer. Please contact SUSE for more information.

#### Can my spend on Rancher Prime count towards my AWS Enterprise Discount Program?

Yes. Please contact your AWS Sales Team for more details.

#### How do I purchase Rancher for additional nodes?

Once Rancher has been deployed from the listing on AWS and billing is active, there is no need to make a specific purchase for additional nodes. Billing is dynamic and based on the number of nodes Rancher is managing. Just deploy or onboard additional clusters to Rancher as needed.

#### Is this an annual commitment, will it auto-renew?

By default, the Rancher Prime listing in AWS is billed on a monthly cycle, based on usage. Billing is ongoing for as long as Rancher is deployed.

It is possible to set up an annual commitment via an AWS Private Offer; these will need to be reviewed and renewed at the end of the term, or the deployment will drop back to the default monthly billing cycle.

### Technical (Billing)

#### Do I need a Kubernetes cluster running in AWS to install Rancher and be billed via the AWS Marketplace?

Yes. To benefit from monthly billing via the Marketplace, the primary Rancher cluster must be an EKS Cluster running in your AWS Account.

#### Which Kubernetes distributions can the AWS Marketplace listing be deployed on?

The AWS Marketplace listing for Rancher Prime with Marketplace billing must be deployed on Amazon EKS. Downstream clusters / managed worker nodes can run on any CNCF compliant Kubernetes platform, EKS, EKS-A, Rancher Kubernetes Engine, etc.

#### What is the deployment mechanism?

The AWS Marketplace listing for Rancher Prime is deployed using Helm.

#### What is the easiest way to get started?

One of the easiest ways to get started is to deploy the AWS Marketplace listing for Rancher Prime to an existing EKS cluster. Follow the instructions in the usage section, a Helm chart takes care of the installation and the setup for billing.

#### What is the minimum version of Rancher required to support AWS Marketplace billing?

The minimum version supporting marketplace billing is Rancher 2.7.9.

#### What version of Rancher is installed when using the Marketplace listing?

The AWS Marketplace listing for Rancher Prime is tied to a specific version of Rancher, typically the latest version available at the time of the listing update. Please check the listing for further information.

#### I need a prior version of Rancher, can I still use the listing?

No. There is no choice over the Rancher version when deploying using the AWS Marketplace listing. If a prior version of Rancher is required, this must be installed manually using the standard documentation.

:::note

Billing through AWS Marketplace may not be supported with previous versions.

:::

#### How often is the listing updated (including the version of Rancher, etc.)?

The marketplace listing is tied to a specific version of Rancher, usually the latest version available at the time of listing. Typically, these are updated quarterly, or more frequently if there are security issues.

#### I have many Kubernetes clusters across multiple AWS accounts, does the Rancher Prime billing still work and enable tiered pricing?

Yes. Downstream clusters managed by Rancher can be deployed across single or multiple AWS accounts, on-premises, or even in other public clouds. Downstream nodes will report up to the primary Rancher deployment. Tiered pricing is enabled and billing will be routed to the AWS account in which the primary cluster is running.

#### I have multiple independent clusters, each running a separate installation of the AWS Marketplace listing for Rancher Prime. How is this billed?

As the Rancher Prime deployments are independent, each deployment is billed separately from the others. It is not possible to benefit from tiered pricing.

#### If managing multiple independent Rancher clusters, consider custom terms from SUSE. How can I benefit from tiered pricing across all Rancher deployments?

The primary Rancher cluster must be running on EKS in the AWS Cloud and running the AWS Marketplace listing for Rancher. To benefit from tiered pricing, managed clusters (downstream clusters) should be connected to the primary Rancher cluster.

#### I have purchased multiple SUSE products from the AWS Marketplace (e.g., SUSE Manager, NeuVector Prime and now Rancher Prime). Does the AWS Marketplace billing method still work?

Yes. The billing mechanism of each deployment is independent, each product will be billed separately via the AWS Marketplace.

#### I already have an existing EKS cluster in place and want to add Rancher and have this billed via Marketplace. Is this possible?

Yes. Simply deploy the AWS Marketplace listing for Rancher Prime.

#### I already have an existing cluster, with Rancher deployed. Can I just install the marketplace version and have support billed via the AWS Marketplace?

In order to benefit from monthly billing via the AWS Marketplace, the primary Rancher cluster needs to be deployed from the listing, it is then possible to migrate the existing Rancher configuration to the new deployment.

Please follow the [documentation](../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md) and be sure to back up the existing Rancher configuration.

### Technical (Product)

#### How do I get support?

It is very simple to [open a support case](https://scc.suse.com/cloudsupport) with SUSE for Rancher Prime. Create a ‘supportconfig’ via the Rancher UI and upload the output to the SUSE Customer Center. The support config bundle can be exported from the Rancher console using the ‘Get Support’ button at the bottom of the page. For deployments when Rancher is managing multiple downstream clusters, export the support config bundle from the primary cluster only.

If the billing mechanism on the primary cluster is active, a support case will be opened. Further details can be found in the [documentation](../integrations-in-rancher/cloud-marketplace/supportconfig.md).

#### What are the resource requirements for installing Rancher on EKS?

Please check the documentation for best practices.

#### Is there any difference between Rancher Prime from the AWS Marketplace and the versions I can run in my own data center?

Rancher Prime available in the AWS Marketplace is the same product, with the same functionality that you would run on-premises or with a manual installation. The only difference between deploying manually and deploying via the AWS Marketplace listing is the billing route.

#### Does the primary cluster (responsible for billing) need to run 24/7?

To ensure continuity with support, it is recommended that the primary Rancher cluster always remains active.

#### What if the primary cluster responsible for billing is unable to connect to the AWS Billing framework?

There may be multiple reasons why the primary cluster is unable to connect to the AWS framework, but it is the customer’s responsibility to ensure that the primary cluster is active and connected. Whilst the cluster is not connected to the billing framework, it is not possible to raise a support request.

#### My primary cluster has been offline. What will happen with billing when reconnected?

If the primary cluster is offline or disconnected from the AWS billing framework for a period of time, when it reconnects, the stored usage data will be uploaded to AWS and will appear on your next AWS bill.

Depending on when in the month the primary cluster gets reconnected you may have several months of usage on your next billing cycle.

#### Can the managed worker nodes reside on premises, at the edge or even on another cloud provider?

Yes. Nodes can run anywhere. SUSE Rancher will count the total number of nodes managed regardless of where they are deployed.

#### How do I get fixes and updates for Rancher?

To update to the latest version of the Rancher Prime PAYG offering supported in the marketplace listing, please see [upgrading Rancher Prime PAYG cluster in AWS](../integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/upgrading-rancher-payg-cluster.md).
