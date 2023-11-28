---
title: Upgrading Rancher PAYG Cluster
---

The Azure marketplace PAYG offer is periodically updated as a new version of
Rancher Prime are released, and for optimizations in the integration with Azure.
To update the latest version of the Rancher Prime PAYG offering supported in
the marketplace listing, use the "az k8s-extension update" command.

Execute the following command in Cluster Cloud Shell:

```
az k8s-extension update  --name <cluster extension resource name>   --cluster-name <cluster name> --resource-group <resource group> --cluster-type managedClusters --version <version to be upgraded>
```