---
title: Prerequisites
---

Before using Rancher Prime on AWS as a pay-as-you-go (PAYG) offering, you need the following resources, information, and tools:

- A Rancher-compatible EKS cluster. Please see the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/) for more details. Please refer to [Creating an EKS cluster](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#creating-an-eks-cluster-for-the-rancher-server) for bringing up an EKS cluster to [install Rancher Prime PAYG](installing-rancher-prime.md).
- An ingress installed on the EKS cluster so that Rancher is accessible outside of the cluster. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#5-install-an-ingress) for instructions on how to deploy Ingress-INGINX on an EKS cluster.
- Get the Load Balancer IP. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#6-get-load-balancer-ip) and Save the EXTERNAL-IP.
- The Rancher hostname must be a fully qualified domain name (FQDN) and its corresponding IP address must be resolvable from a public DNS. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#7-set-up-dns) for instructions on how to setup DNS. This DNS is setup to point at the EXTERNAL-IP saved.
- Installation requires you have the following tools available and properly configured to access your AWS account, and your EKS cluster:
  - `aws`
  - `curl`
  - `eksctl`
  - `helm` (v3 or greater)
