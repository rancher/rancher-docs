---
title: Graceful Shutdown for VMware vSphere Virtual Machines
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/shutdown-vm"/>
</head>

In Rancher v2.8.3 and later, you can configure the graceful shutdown of virtual machines (VMs) for VMware vSphere node driver clusters. Graceful shutdown introduces a delay before the VM is forcibly deleted, which allows time for terminating any running processes and open connections.

In RKE2/K3s, you can set up graceful shutdown when you create the cluster, or edit the cluster configuration to add it afterward. 

:::note 

Since Rancher can't detect the platform of an imported cluster, you cannot enable graceful shutdown on VMware vSphere clusters you have imported.

:::

## Enable Graceful Shutdown During VMware vSphere Cluster Creation 

In RKE2/K3s, you can configure new VMware vSphere clusters with graceful shutdown for VMs:

1. Click **☰ > Cluster Management**.
1. Click **Create** and select **VMware vSphere** to provision a new cluster.
1. Under **Machine Pools > Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

## Enable Graceful Shutdown in Existing RKE2/K3s Clusters

In RKE2/K3s, you can edit the configuration of an existing VMware vSphere cluster to enable graceful shutdown, which adds a delay before deleting VMs.

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, find the VMware vSphere hosted cluster you want to edit. Click **⋮** at the end of the row associated with the cluster. Select **Edit Config**.
1. Under **Machine Pools > Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

