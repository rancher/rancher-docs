---
title: Prerequisites
---

Before using Rancher Prime on Azure as a pay-as-you-go (PAYG) offering, you need the following resources, information, and tools:

- A Rancher-compatible AKS cluster. Please see the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/) for more details. The Rancher Prime PAYG offering can only be installed onto clusters in regions where both the AKS and Azure Container Apps service are available. See the [Azure documentation](https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?products=container-apps,kubernetes-service&regions=all) for details. Please see [Creating an AKS cluster](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks#3-create-the-aks-cluster) for bringing up an AKS cluster to [install Rancher Prime PAYG](installing-rancher-prime.md).
- An ingress installed on the AKS cluster so that Rancher is accessible outside of the cluster. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks#5-install-an-ingress) for instructions on how to deploy Ingress-INGINX on AKS cluster.
- The Rancher hostname must be a fully qualified domain name (FQDN) and its corresponding IP address must be resolvable from a public DNS. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks#7-set-up-dns) for instructions on how to setup DNS.
