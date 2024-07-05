---
title: Shutting Down VMware Vsphere Virtual Machines 
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/shutdown-vmware-vsphere-vm"/>
</head>

You can configure the graceful shutdown of virtual machines (VMs) for  clusters hosted on VMware vSphere infrastructure.

<Tabs>
<TabItem value="RKE2/K3s">

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, find the VMware vSphere hosted cluster you want to edit. Click **⋮** at the end of the row associated with the cluster. Select **Edit Config**.
  1. If there are no clusters hosted on VMware vSphere listed, click **Import Existing** to add your cluster, or click **Create** and select **VMware vSphere** to provision one.
1. Under **Machine Pools > Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

</TabItem>
<TabItem value="RKE">

1. Click **☰ > Cluster Management**.
1. From the left navigation, select **RKE1 Configuration > Node Templates**.
1. Find the VMware vSphere node template you want to edit. Click **⋮** at the end of the row associated with the template. Select **Edit**.
  1. If there are no VMware vSphere node templates listed, click **Add Template** and select **vSphere** to create one.
1. Under **2. Scheduling**, in the **Graceful Shutdown Timeout** field, enter an integer value greater than 0. The value you enter is the amount of time in seconds Rancher waits before deleting VMs on the cluster. If the value is set to `0`, graceful shutdown is disabled.

</TabItem>
</Tabs>