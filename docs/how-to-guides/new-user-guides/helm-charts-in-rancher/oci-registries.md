---
title: Using OCI Helm Chart Registries
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher/oci-registries"/>
</head>

Helm v3 introduced storing Helm charts as [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) artifacts in container registries. With Rancher v2.9.0, you can add [OCI-based Helm chart registries](https://helm.sh/docs/topics/registries/) alongside http- and Git-based repositories. This means you can deploy apps that are stored as OCI artifacts.

## Create <!-- Unedited draft -->

To create a OCI based helm repository, you need to click on Create in repositories page. 
Define a name and description for it. Select the target as OCI. 
Input the OCI URL. The OCI URl consists of three parts 
Registry Host 
Repository namespace 
Tag 
The different values of OCI URL can be 
oci://dp.apps.rancher.io/charts/etcd:1.0.1 - In this case, only one chart i.e etcd with one version 1.0.1 will be taken into account and will be available in the Charts page. 
oci://dp.apps.rancher.io/charts/etcd - In this case, only one chart i.e etcd with all versions aka tags available will be taken into account and will be available in the Charts page.
oci://dp.apps.rancher.io/charts -   In this case, all helm chart with all versions aka tags available in the charts repository namespace will be taken into account and will be available to install in the Charts page.
oci://dp.apps.rancher.io/ - In this case, all helm chart with all versions aka tags available in the entire registry will be taken into account and will be available to install in the Charts page.

It is recommended to use the 1st option if it suits you and second option and so on…and last option is the least recommended option since it might stress your OCI registries if it contains non helm charts and Rancher scans your entire registry. Note that your OCI registry needs to support v2/_catalog API endpoint for 4th option.

Select the authentication of basicauth and insert username and password is necessary. Right now OCI based helm repositories only support basicauth. 
Add labels and annotation if necessary. 

[Screenshot of the Create OCI based HElm repo page with values inserted]


Click on create and wait for sometime.if your OCI endpoint contains more repositories then it might take some time. So please be patient. 

Once the STATE of the reposutory changes to Active, click on Charts page and select the repository you created in the dropdown to view all the helm charts from the OCI url you added. 

[screenshot of Charts page]


The CRD that is linked to the OCI Helm Repository is ClusterRepo.

[Screenshot of the ClusterRepo YAML]

A new field has been introduced only for OCI URLs which is spec.insecurePlainHttp. This allows insecure connections to registry without SSL check and works exactly how the field works in ORAS CLI - https://oras.land/docs/commands/use_oras_cli since under the hood Rancher manager uses oras library

## Refresh <!-- Unedited draft -->

Rancher manager refreshes the repository every 6 hours But if you want to refresh immediately, select the repository and click on refresh on the top. 

For docs about how to install/unsintall/update a helm chart please refer to this doc link

## Update <!-- Unedited draft -->

Select on the repository and click on edit config to update the configuration. 

## Delete

Select on the repository and click on delete button on the top.

## Limitations of OCI-based Helm Registries in Rancher

Due to security concerns, there are limitations on how large a Helm chart you can deploy through an OCI-based registry, and how much metadata you can use to describe the Helm charts within a single OCI URL.

Rancher can deploy Helm charts stored as OCI artifacts up to 20 MB in size.

The metadata field in index.yaml can store up to 30 MB of information about the Helm charts within an OCI-based registry.

## Troubleshooting OCI-based Helm Registries <!-- Unedited draft -->

To view logs, please enable the debug option of rancher 

The first option if there is any discrepancy is to refresh a cluster repository 
The last option is to delete the oci helm repository clusterrepo and readd it. This will not delete any already installed helm charts.
