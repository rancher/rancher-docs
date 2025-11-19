---
title: Launching Kubernetes on New Nodes in an Infrastructure Provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider"/>
</head>

When you [create an RKE2 cluster](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md#cluster-config-file-reference) using a machine config in Rancher, each resulting node pool is shown in a new **Machine Pools** tab. You can see the machine pools by doing the following:

1. Click **☰ > Cluster Management**.
1. Click the name of the RKE2 cluster.

## RKE2 Clusters

Rancher v2.6 introduces provisioning for [RKE2](https://docs.rke2.io/) clusters directly from the Rancher UI. RKE2, also known as RKE Government, is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.

:::note

For RKE2 cluster templates, please refer to [this page](../../manage-clusters/manage-cluster-templates.md#rke2-cluster-template) for additional information.

:::

### Node Roles

The RKE2 CLI exposes two roles, `server` and `agent`, which represent the Kubernetes node-roles `etcd` + `controlplane` and `worker` respectively. With RKE2 integration in Rancher v2.6, RKE2 node pools can represent more fine-grained role assignments such that `etcd` and `controlplane` roles can be represented.

The same functionality of using `etcd`, `controlplane` and `worker` nodes is possible in the RKE2 CLI by using flags and node tainting to control where workloads and the Kubernetes master were scheduled. The reason those roles were not implemented as first-class roles in the RKE2 CLI is that RKE2 is conceptualized as a set of raw building blocks that are best leveraged through an orchestration system such as Rancher.

In our [recommended cluster architecture](../../kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md), we outline how many nodes of each role clusters should have:

- At least three nodes with the role etcd to survive losing one node
- At least two nodes with the role controlplane for master component high availability
- At least two nodes with the role worker for workload rescheduling upon node failure
