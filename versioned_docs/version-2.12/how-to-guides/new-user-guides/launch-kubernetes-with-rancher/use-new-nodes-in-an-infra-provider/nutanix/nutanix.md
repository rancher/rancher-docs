---
title: Creating a Nutanix AOS Cluster
description: Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix"/>
</head>

[Nutanix Acropolis Operating System](https://www.nutanix.com/products/acropolis) (Nutanix AOS) is an operating system for the Nutanix hyper-converged infrastructure platform. AOS comes with a built-in hypervisor called [Acropolis Hypervisor](https://www.nutanix.com/products/ahv), or AHV. By using Rancher with Nutanix AOS (AHV), you can bring cloud operations on-premises.

Rancher can provision nodes in AOS (AHV) and install Kubernetes on them. When creating a Kubernetes cluster in AOS, Rancher first provisions the specified number of virtual machines by communicating with the Prism Central API. Then it installs Kubernetes on top of the VMs.

A Nutanix cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role.

- [Creating a Nutanix Cluster](provision-kubernetes-clusters-in-aos.md#creating-a-nutanix-aos-cluster)
- [Provisioning Storage](provision-kubernetes-clusters-in-aos.md)

## Creating a Nutanix Cluster

In [this section,](provision-kubernetes-clusters-in-aos.md) you'll learn how to use Rancher to install an [RKE2](https://docs.rke2.io/)/[K3s](https://docs.k3s.io/) Kubernetes cluster in Nutanix AOS.