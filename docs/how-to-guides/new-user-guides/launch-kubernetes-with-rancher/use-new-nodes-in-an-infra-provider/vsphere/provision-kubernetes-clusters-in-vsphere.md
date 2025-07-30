---
title: Provisioning Kubernetes Clusters in VMware vSphere
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"/>
</head>

In this section, you'll learn how to deploy an [RKE2](https://docs.rke2.io/)/[K3s](https://docs.k3s.io/) Kubernetes cluster in VMware vSphere.

First, you will set up your vSphere cloud credentials in Rancher.

Then you will create a vSphere cluster in Rancher, and when configuring the new cluster, you will define machine pools for it. Each machine pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the machine pool.

- [Preparation in vSphere](#preparation-in-vmware-vsphere)
- [Creating a vSphere Cluster](#creating-a-vmware-vsphere-cluster)

## Preparation in VMware vSphere

This section describes the requirements for setting up vSphere so that Rancher can provision VMs and clusters.### Create Credentials in VMware vSphere

Before proceeding to create a cluster, you must ensure that you have a vSphere user with sufficient permissions.

Refer to this [how-to guide](create-credentials.md) for instructions on how to create a user in vSphere with the required permissions. These steps result in a username and password that you will need to provide to Rancher, which allows Rancher to provision resources in vSphere.

### Network Permissions

It must be ensured that the hosts running the Rancher server are able to establish the following network connections:

- To the vSphere API on the vCenter server (usually port 443/TCP).
- To the Host API (port 443/TCP) on all ESXi hosts used to instantiate virtual machines for the clusters (*only required when using the ISO creation method*).
- To port 22/TCP and 2376/TCP on the created VMs

See [Node Networking Requirements](../../../kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md#networking-requirements) for a detailed list of port requirements applicable for creating nodes on an infrastructure provider.

### Valid ESXi License for VMware vSphere API Access

The free ESXi license does not support API access. The vSphere servers must have a valid or evaluation ESXi license.

### VM-VM Affinity Rules for Clusters with DRS

If you have a cluster with DRS enabled, setting up [VM-VM Affinity Rules](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-7297C302-378F-4AF2-9BD6-6EDB1E0A850A.html) is recommended. These rules allow VMs assigned the etcd and control-plane roles to operate on separate ESXi hosts when they are assigned to different node pools. This practice ensures that the failure of a single physical machine does not affect the availability of those planes.

## Creating a VMware vSphere Cluster

:::note

User-data.iso files may have become orphaned upon node deletion due to a vSphere node driver or custom clusters created before v2.9.1. While [this issue](https://github.com/rancher/rancher/issues/25073) is resolved, no automatic cleanup exists for these previously orphaned files. vSphere administrators can manually remove orphaned files, but be careful not to remove files being used by existing machines, as this may cause outages for downstream virtual machines.

:::

### 1. Create your cloud credentials

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click **VMware vSphere**.
1. Enter your vSphere credentials. For help, refer to **Account Access** in the [node template configuration reference.](../../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere.md)
1. Click **Create**.

**Result:** You have created the cloud credentials that will be used to provision nodes in your cluster.

### 2. Create your cluster

Use Rancher to create a Kubernetes cluster in vSphere.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Click **VMware vSphere**.
1. Enter a **Cluster Name** and use your vSphere cloud credentials.
1. Create a machine pool for each Kubernetes role. Refer to the [best practices](../use-new-nodes-in-an-infra-provider.md#node-roles) for recommendations on role assignments and counts.
    1. For each machine pool, define the machine configuration.
1. Use **Cluster Configuration** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. For help configuring the cluster, refer to the [RKE2](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) and [K3s](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) cluster configuration reference.
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. If you want to dynamically provision persistent storage or other infrastructure later, you will need to enable the vSphere cloud provider by modifying the cluster YAML file. For details, refer to [in-tree vSphere cloud provider docs](../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere.md) and [out-of-tree vSphere cloud provider docs](../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md).
1. Review your options to confirm they're correct. Then click **Create**.

**Result:**

Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces


## Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.
- **Provision Storage:** For an example of how to provision storage in vSphere using Rancher, refer to [this section.](../../../manage-clusters/provisioning-storage-examples/provisioning-storage-examples.md) In order to dynamically provision storage in vSphere, the vSphere provider must be enabled. For details, refer to [in-tree vSphere cloud provider docs](../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere.md) and [out-of-tree vSphere cloud provider docs](../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md).
