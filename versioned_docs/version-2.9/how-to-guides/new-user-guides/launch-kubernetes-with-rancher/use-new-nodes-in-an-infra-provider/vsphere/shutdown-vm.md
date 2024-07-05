---
title: Graceful Shutdown for VMware vSphere Virtual Machines
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/shutdown-vm"/>
</head>

You can configure the graceful shutdown of virtual machines (VMs) for clusters hosted on VMware vSphere infrastructure. Graceful shutdown introduces a delay before the VM is forcibly deleted, which allows time for terminating any running processes and open connections.

In RKE2/K3s, you can set up graceful shutdown when you create the cluster, or edit the cluster configuration to add it afterward. 

In RKE, you can edit node templates to similar results.

## Set Up Graceful Shutdown During VMware vSphere Cluster Creation 

<Tabs>
<TabItem value="RKE2/K3s">

In RKE2/K3s, you can configure new VMware vSphere clusters with graceful shutdown for VMs. 

1. Click **☰ > Cluster Management**.
1. Click **Import Existing** to add your cluster, or click **Create** and select **VMware vSphere** to provision a new cluster.
1. Under **Machine Pools > Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

</TabItem>
<TabItem value="RKE">

In RKE, you can't directly configure a new cluster with graceful shutdown. However, you can create node templates which create node pools with graceful shutdown specified. The node template can then be used to provision new VMware vSphere clusters that have a graceful shutdown delay. 

1. Click **☰ > Cluster Management**.
1. From the left navigation, select **RKE1 Configuration > Node Templates**.
1. Click **Add Template** and select **vSphere** to create a node template.
1. Under **2. Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

When you [use this node template to create node pools](../use-new-nodes-in-an-infra-provider.md), the nodes will gracefully shutdown of VMs according to the **Graceful Shutdown Timeout** value you have set.

</TabItem>
</Tabs>

## Set Up Graceful Shutdown On An Existing VMware vSphere Cluster in RKE2/K3s

In RKE2/K3s, you can edit the configuration of an existing cluster to add a delay before deleting VMs.

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, find the VMware vSphere hosted cluster you want to edit. Click **⋮** at the end of the row associated with the cluster. Select **Edit Config**.
1. Under **Machine Pools > Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

## Set up Graceful Shutdown on Existing VMware vSphere Node Templates in RKE

In RKE, you can't edit the cluster configuration to add graceful shutdown to existing clusters. however, you can edit the configuration of existing node templates:

1. Click **☰ > Cluster Management**.
1. From the left navigation, select **RKE1 Configuration > Node Templates**.
1. Find the VMware vSphere node template you want to edit. Click **⋮** at the end of the row associated with the template. Select **Edit**.
1. Under **2. Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

