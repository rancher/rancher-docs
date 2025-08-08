---
title: Creating a VMware vSphere Cluster
description: Use Rancher to create a VMware vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere"/>
</head>

import YouTube from '@site/src/components/YouTube'

By using Rancher with VMware vSphere, you can bring cloud operations on-premises.

Rancher can provision nodes in vSphere and install Kubernetes on them. When creating a Kubernetes cluster in vSphere, Rancher first provisions the specified number of virtual machines by communicating with the vCenter API. Then it installs Kubernetes on top of them.

A vSphere cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role.

## Creating a VMware vSphere Cluster

In [this section,](provision-kubernetes-clusters-in-vsphere.md) you'll learn how to use Rancher to install an [RKE2](https://docs.rke2.io/)/[K3s](https://docs.k3s.io/) Kubernetes cluster in vSphere.

## Provisioning Storage

For an example of how to provision storage in vSphere using Rancher, refer to [this section.](../../../manage-clusters/provisioning-storage-examples/vsphere-storage.md) In order to dynamically provision storage in vSphere, the vSphere provider must be enabled. Refer to [in-tree vSphere config](../../../kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere.md) and [out-of-tree vSphere config](../../../kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md).

## Enabling the VMware vSphere Cloud Provider

When a cloud provider is set up in Rancher, the Rancher server can automatically provision new infrastructure for the cluster, including new nodes or persistent storage devices.

For details on enabling the vSphere cloud provider, refer to [in-tree vSphere config](../../../kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere.md) and [out-of-tree vSphere config](../../../kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md).
