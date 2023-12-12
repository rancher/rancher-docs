---
title: Upgrading Rancher Prime PAYG Cluster in Azure
---

The Azure Marketplace PAYG offering is periodically updated as a new version of Rancher Prime is released and for optimizations in the integration with Azure.

To update to the latest version of the Rancher Prime PAYG offering supported in the marketplace listing, use the `az k8s-extension update` command.

Run the following command in Cluster Cloud Shell:

```shell
az k8s-extension update  --name <cluster extension resource name>   --cluster-name <cluster name> --resource-group <resource group> --cluster-type managedClusters --version <version to be upgraded>
```
