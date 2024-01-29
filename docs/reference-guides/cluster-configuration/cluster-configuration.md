---
title: Cluster Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration"/>
</head>

After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster.

For information on editing cluster membership, go to [this page.](../../how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md)

### Cluster Configuration References

The cluster configuration options depend on the type of Kubernetes cluster:

- [RKE Cluster Configuration](rancher-server-configuration/rke1-cluster-configuration.md)
- [RKE2 Cluster Configuration](rancher-server-configuration/rke2-cluster-configuration.md)
- [K3s Cluster Configuration](rancher-server-configuration/k3s-cluster-configuration.md)
- [EKS Cluster Configuration](rancher-server-configuration/eks-cluster-configuration.md)
- [GKE Cluster Configuration](rancher-server-configuration/gke-cluster-configuration/gke-cluster-configuration.md)
- [AKS Cluster Configuration](rancher-server-configuration/aks-cluster-configuration.md)

### Cluster Management Capabilities by Cluster Type

The options and settings available for an existing cluster change based on the method that you used to provision it.

The following table summarizes the options and settings available for each cluster type:

import ClusterCapabilitiesTable from '../../shared-files/_cluster-capabilities-table.md';

<ClusterCapabilitiesTable />

