---
title: Kubernetes Clusters in Rancher Setup
description: Provisioning Kubernetes Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup"/>
</head>

Rancher simplifies the creation of clusters by allowing you to create them through the Rancher UI rather than more complex alternatives. Rancher provides multiple options for launching a cluster. Use the option that best fits your use case.

This section assumes a basic familiarity with Docker and Kubernetes. For a brief explanation of how Kubernetes components work together, refer to the [concepts](../../../reference-guides/kubernetes-concepts.md) page.

For a conceptual overview of how the Rancher server provisions clusters and what tools it uses to provision them, refer to the [architecture](../../../reference-guides/rancher-manager-architecture/rancher-manager-architecture.md) page.



### Cluster Management Capabilities by Cluster Type

The following table summarizes the options and settings available for each cluster type:

import ClusterCapabilitiesTable from '../../../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />

## Setting up Clusters in a Hosted Kubernetes Provider

In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service.

If you use a Kubernetes provider such as Google GKE, Rancher integrates with its cloud APIs, allowing you to create and manage role-based access control for the hosted cluster from the Rancher UI.

For more information, refer to the section on [hosted Kubernetes clusters.](set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md)

## Launching Kubernetes with Rancher

Rancher uses [RKE2](https://docs.rke2.io/) or [K3s](https://docs.k3s.io/) as a library when provisioning Kubernetes on your own nodes. RKE2 is Rancher’s own lightweight Kubernetes installer.

In RKE2 clusters, Rancher manages the deployment of Kubernetes. These clusters can be deployed on any bare metal server, cloud provider, or virtualization platform.

If you already have a node that you want to add to an RKE2 cluster, you can add it to the cluster by running a Rancher RKE2 agent container on it.

For more information, refer to [Launching Kubernetes with Rancher](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md).

### Launching Kubernetes and Provisioning Nodes in an Infrastructure Provider

Rancher can dynamically provision nodes in infrastructure providers such as Amazon EC2, DigitalOcean, Azure, or vSphere, then install Kubernetes on them.

One benefit of using nodes hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically replace it, thus maintaining the expected cluster configuration.

For more information, refer to [Launching Kubernetes on New Nodes in an Infrastructure Provider](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)

### Launching Kubernetes on Existing Custom Nodes

When setting up this type of cluster, Rancher installs Kubernetes on existing [custom nodes,](../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md) which creates a custom cluster.

You can bring any nodes you want to Rancher and use them to create a cluster.

These nodes include on-prem bare metal servers, cloud-hosted virtual machines, or on-prem virtual machines.

## Registering Existing Clusters

The cluster registration feature replaces the feature to import clusters.

Registering EKS clusters now provides additional benefits. For the most part, registered EKS clusters and EKS clusters created in Rancher are treated the same way in the Rancher UI, except for deletion.

When you delete an EKS cluster that was created in Rancher, the cluster is destroyed. When you delete an EKS cluster that was registered in Rancher, it is disconnected from the Rancher server, but it still exists and you can still access it in the same way you did before it was registered in Rancher.

For more information, refer to [Registering Existing Clusters](register-existing-clusters.md).

## Programmatically Creating Clusters

The most common way to programmatically deploy Kubernetes clusters through Rancher is by using the Rancher2 Terraform provider. Refer to the documentation for [creating clusters with Terraform](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster).

EKS, GKE, and AKS clusters can be created or imported with Terraform.
