---
title: Prerequisites
---

Before using Rancher Prime on Azure as a pay-as-you-go (PAYG) offering, you need the following resources, information, and tools:

- A Rancher-compatible AKS cluster. For more details, see the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/). You can only install the Rancher Prime PAYG offering onto clusters in regions where AKS and Azure Container Apps are available. See the [Azure documentation](https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?products=container-apps,kubernetes-service&regions=all) for details. Refer to [Creating an AKS cluster](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md#3-create-the-aks-cluster) for bringing up an AKS cluster to [install Rancher Prime PAYG](installing-rancher-prime.md).
- An ingress installed on the AKS cluster, so that Rancher is accessible outside the cluster. See the [Rancher documentation](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md#5-install-an-ingress) for instructions on deploying Ingress-NGINX on an AKS cluster.
- The Rancher hostname. The hostname must be a fully qualified domain name (FQDN), and its corresponding IP address must be resolvable from a public DNS. See the [Rancher documentation](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md#7-set-up-dns) for instructions on how to set up DNS.
