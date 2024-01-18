---
title: Upgrading Rancher Prime PAYG Cluster in Azure
---

The Azure Marketplace PAYG offering is periodically updated when a new version of Rancher Prime is released, and to optimize integration with Azure.

To update to the latest supported version of the Rancher Prime PAYG offering, run the following command in the cluster Cloud Shell:

```shell
az k8s-extension update  --name $CLUSTER_EXTENSION_RESOURCE_NAME  --cluster-name $CLUSTER_NAME --resource-group $RESOURCE_GROUP --cluster-type managedClusters --version $VERSION_TO_BE_UPGRADED
```

:::warning

Rancher Prime PAYG customers have constraints on getting updates, based on the latest version SUSE has published to Azure. The latest available Rancher Prime version may trail slightly behind the latest Rancher release.

:::
