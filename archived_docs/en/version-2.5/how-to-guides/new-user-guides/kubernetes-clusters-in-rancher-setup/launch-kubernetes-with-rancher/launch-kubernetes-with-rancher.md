---
title: Launching Kubernetes with Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/pages-for-subheaders/launch-kubernetes-with-rancher"/>
</head>

You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses [Rancher Kubernetes Engine](https://rancher.com/docs/rke/latest/en/) (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:

- Bare-metal servers
- On-premise virtual machines
- Virtual machines hosted by an infrastructure provider

Rancher can install Kubernetes on existing nodes, or it can dynamically provision nodes in an infrastructure provider and install Kubernetes on them.

RKE clusters include clusters that Rancher launched on Windows nodes or other existing custom nodes, as well as clusters that Rancher launched with new nodes on Azure, Digital Ocean, EC2, or vSphere.

### Requirements

If you use RKE to set up a cluster, your nodes must meet the [requirements](../node-requirements-for-rancher-managed-clusters.md) for nodes in downstream user clusters.

### Launching Kubernetes on New Nodes in an Infrastructure Provider

Using Rancher, you can create pools of nodes based on a [node template](use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md#node-templates). This node template defines the parameters you want to use to launch nodes in your cloud providers.

One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected.

For more information, refer to the section on [launching Kubernetes on new nodes.](use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)

### Launching Kubernetes on Existing Custom Nodes

In this scenario, you want to install Kubernetes on bare-metal servers, on-prem virtual machines, or virtual machines that already exist in a cloud provider. With this option, you will run a Rancher agent Docker container on the machine.

If you want to reuse a node from a previous custom cluster, [clean the node](../../../advanced-user-guides/manage-clusters/clean-cluster-nodes.md) before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail.

For more information, refer to the section on [custom nodes.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md)
