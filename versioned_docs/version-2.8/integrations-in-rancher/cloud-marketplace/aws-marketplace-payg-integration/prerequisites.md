---
title: Prerequisites
---

Before using Rancher Prime on AWS as a pay-as-you-go (PAYG) offering, you need the following resources, information, and tools:

- A Rancher-compatible EKS cluster. For more details, see the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/). Refer to [Creating an EKS cluster](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md) for bringing up an EKS cluster to [install Rancher Prime PAYG](installing-rancher-prime.md).
- An ingress on the EKS cluster, so that Rancher is accessible from outside the cluster. See the [Rancher documentation](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md#5-install-an-ingress) for instructions on deploying Ingress-NGINX on an EKS cluster.
- The Load Balancer IP address. See the [Rancher documentation](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md#6-get-load-balancer-ip) for how to find it, then save the `EXTERNAL-IP`.
- The Rancher hostname. The hostname must be a fully qualified domain name (FQDN), and its corresponding IP address must be resolvable from a public DNS. See the [Rancher documentation](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md#7-set-up-dns) for instructions on how to set up DNS. This DNS points to the `EXTERNAL-IP`.
- [`aws`](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- [`curl`](https://curl.se/docs/install.html).
- [`eksctl`](https://eksctl.io/installation/).
- [`helm` (v3 or greater)](https://helm.sh/docs/intro/quickstart/#install-helm).
