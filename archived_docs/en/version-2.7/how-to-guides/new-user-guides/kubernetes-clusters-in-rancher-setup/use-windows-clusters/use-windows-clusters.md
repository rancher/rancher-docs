---
title: Launching Kubernetes on Windows Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters"/>
</head>

When provisioning a [custom cluster](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md) Rancher uses RKE2 to install Kubernetes on your existing nodes.

In a Windows cluster provisioned with Rancher, the cluster must contain both Linux and Windows nodes. The Kubernetes controlplane can only run on Linux nodes, and the Windows nodes can only have the worker role. Windows nodes can only be used for deploying workloads.

For a summary of Kubernetes features supported in Windows, see the Kubernetes documentation on [supported functionality and limitations for using Kubernetes with Windows](https://kubernetes.io/docs/setup/production-environment/windows/intro-windows-in-kubernetes/#supported-functionality-and-limitations) or the [guide for scheduling Windows containers in Kubernetes](https://kubernetes.io/docs/setup/production-environment/windows/user-guide-windows-containers/).

### RKE2 Features for Windows Clusters

Listed below are the primary RKE2 features for Windows cluster provisioning:

- Windows Containers with RKE2 powered by containerd
- Added provisioning of Windows RKE2 custom clusters directly from the Rancher UI
- Calico CNI for Windows RKE2 custom clusters
- SAC releases of Windows Server (2004 and 20H2) are included in the technical preview

:::note

Rancher will allow Windows workload pods to deploy on both Windows and Linux worker nodes by default. When creating mixed clusters in RKE2, you must edit the `nodeSelector` in the chart to direct the pods to be placed onto a compatible Windows node. Refer to the [Kubernetes documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector) for more information on how to use `nodeSelector` to assign pods to nodes.

:::

- HostProcess containers in Windows RKE2 are supported in Kubernetes v1.24.1 and up. See [the upstream documentation](https://kubernetes.io/docs/tasks/configure-pod-container/create-hostprocess-pod/) for more information.

## General Requirements

The general networking and operating system requirements for Windows nodes are the same as for other [Rancher installations](../../../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md).

### OS Requirements

Our support for Windows Server and Windows containers match the Microsoft official lifecycle for LTSC (Long-Term Servicing Channel) and SAC (Semi-Annual Channel).

For the support lifecycle dates for Windows Server, see the [Microsoft Documentation.](https://docs.microsoft.com/en-us/windows-server/get-started/windows-server-release-info)

### Kubernetes Version

For more information regarding Kubernetes component versions, see the [support matrices for RKE2 versions](https://www.suse.com/suse-rke2/support-matrix/all-supported-versions/).

### Node Requirements

The hosts in the cluster need to have at least:

- 2 core CPUs
- 5 GB memory
- 50 GB disk space

Rancher will not provision the node if the node does not meet these requirements.

### Networking Requirements

Before provisioning a new cluster, be sure that you have already installed Rancher on a device that accepts inbound network traffic. This is required in order for the cluster nodes to communicate with Rancher. If you have not already installed Rancher, please refer to the [installation documentation](../../../../getting-started/installation-and-upgrade/installation-and-upgrade.md) before proceeding with this guide.

Rancher supports Windows using Calico as the network provider.

If you are configuring DHCP options sets for an AWS virtual private cloud, note that in the `domain-name` option field, only one domain name can be specified. According to the DHCP options [documentation:](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html)

:::note

Some Linux operating systems accept multiple domain names separated by spaces. However, other Linux operating systems and Windows treat the value as a single domain, which results in unexpected behavior. If your DHCP options set is associated with a VPC that has instances with multiple operating systems, specify only one domain name.

:::

### Rancher on VMware vSphere with ESXi 6.7u2 and above

If you are using Rancher on VMware vSphere with ESXi 6.7u2 or later with Red Hat Enterprise Linux 8.3, CentOS 8.3, or SUSE Enterprise Linux 15 SP2 or later, it is necessary to disable the `vmxnet3` virtual network adapter hardware offloading feature. Failure to do so will result in all network connections between pods on different cluster nodes to fail with timeout errors. All connections from Windows pods to critical services running on Linux nodes, such as CoreDNS, will fail as well. It is also possible that external connections may fail. This issue is the result of Linux distributions enabling the hardware offloading feature in `vmxnet3` and a bug in the `vmxnet3` hardware offloading feature that results in the discarding of packets for guest overlay traffic. To address this issue, it is necessary disable the `vmxnet3` hardware offloading feature. This setting does not survive reboot, so it is necessary to disable on every boot. The recommended course of action is to create a systemd unit file at `/etc/systemd/system/disable_hw_offloading.service`, which disables the `vmxnet3` hardware offloading feature on boot. A sample systemd unit file which disables the `vmxnet3` hardware offloading feature is as follows. Note that `<VM network interface>` must be customized to the host `vmxnet3` network interface, e.g., `ens192`:

```
[Unit]
Description=Disable vmxnet3 hardware offloading feature

[Service]
Type=oneshot
ExecStart=ethtool -K <VM network interface> tx-udp_tnl-segmentation off
ExecStart=ethtool -K <VM network interface> tx-udp_tnl-csum-segmentation off
StandardOutput=journal

[Install]
WantedBy=multi-user.target
```
Then set the appropriate permissions on the systemd unit file:
```
chmod 0644 /etc/systemd/system/disable_hw_offloading.service
```
Finally, enable the systemd service:
```
systemctl enable disable_hw_offloading.service
```

### Architecture Requirements

The Kubernetes cluster management nodes (`etcd` and `controlplane`) must be run on Linux nodes.

The `worker` nodes, which is where your workloads will be deployed on, will typically be Windows nodes, but there must be at least one `worker` node that is run on Linux in order to run the Rancher cluster agent, DNS, metrics server, and Ingress related containers.

#### Recommended Architecture

We recommend the minimum three-node architecture listed in the table below, but you can always add more Linux and Windows workers to scale up your cluster for redundancy:

| Node   | Operating System                                    | Kubernetes Cluster Role(s)                                                                                                                                                                                                                         | Purpose                                                                             |
| ------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Node 1 | Linux (Ubuntu Server 18.04 recommended)             | Control plane, etcd, worker | Manage the Kubernetes cluster                                                       |
| Node 2 | Linux (Ubuntu Server 18.04 recommended)             | Worker                                                                                                                                                                       | Support the Rancher Cluster agent, Metrics server, DNS, and Ingress for the cluster |
| Node 3 | Windows (Windows Server core version 1809 or above) | Worker                                                                                                                                                                       | Run your Windows containers                                                         |

### Container Requirements

Windows requires that containers must be built on the same Windows Server version that they are being deployed on. Therefore, containers must be built on Windows Server core version 1809 or above. If you have existing containers built for an earlier Windows Server core version, they must be re-built on Windows Server core version 1809 or above.

### Cloud Provider Specific Requirements

If you set a Kubernetes cloud provider in your cluster, some additional steps are required. You may wish to setup a cloud provider to leverage capabilities to automatically provision storage, load balancers, or other infrastructure for your cluster. Refer to [this page](../set-up-cloud-providers/set-up-cloud-providers.md) for details on how to configure a cloud provider cluster of nodes that meet the prerequisites.

If you are using the GCE (Google Compute Engine) cloud provider, you must do the following:

- Enable the GCE cloud provider in the `cluster.yml` by following [these steps.](../set-up-cloud-providers/google-compute-engine.md)
- When provisioning the cluster in Rancher, choose **Custom cloud provider** as the cloud provider in the Rancher UI.

## Tutorial: How to Create a Cluster with Windows Support

This tutorial describes how to create a Rancher-provisioned cluster with the three nodes in the [recommended architecture.](#recommended-architecture)

When you provision a cluster with Rancher on existing nodes, you add nodes to the cluster by installing the [Rancher agent](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md) on each one. To create or edit your cluster from the Rancher UI, run the **Registration Command** on each server to add it to your cluster.

To set up a cluster with support for Windows nodes and containers, you will need to complete the tasks below.

### 1. Provision Hosts

To begin provisioning a cluster on existing nodes with Windows support, prepare your hosts.

Your hosts can be:

- Cloud-hosted VMs
- VMs from virtualization clusters
- Bare-metal servers

You will provision three nodes:

- One Linux node, which manages the Kubernetes control plane and stores your `etcd`
- A second Linux node, which will be another worker node
- The Windows node, which will run your Windows containers as a worker node

| Node   | Operating System                                             |
| ------ | ------------------------------------------------------------ |
| Node 1 | Linux (Ubuntu Server 18.04 recommended)                      |
| Node 2 | Linux (Ubuntu Server 18.04 recommended)                      |
| Node 3 | Windows (Windows Server core version 1809 or above required) |

If your nodes are hosted by a **Cloud Provider** and you want automation support such as loadbalancers or persistent storage devices, your nodes have additional configuration requirements. For details, see [Selecting Cloud Providers.](../set-up-cloud-providers/set-up-cloud-providers.md)

### 2. Create the Cluster on Existing Nodes

The instructions for creating a Windows cluster on existing nodes are very similar to the general [instructions for creating a custom cluster](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md) with some Windows-specific requirements.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Click **Custom**.
1. Enter a name for your cluster in the **Cluster Name** field.
1. In the **Kubernetes Version** dropdown menu, select a supported Kubernetes version.
1. In the **Container Network** field, select **Calico**.
1. Click **Next**.

### 3. Add Nodes to the Cluster

This section describes how to register your Linux and Worker nodes to your cluster. You will run a command on each node, which will install the Rancher agent and allow Rancher to manage each node.

#### Add Linux Master Node

In this section, we fill out a form on the Rancher UI to get a custom command to install the Rancher agent on the Linux master node. Then we will copy the command and run it on our Linux master node to register the node in the cluster.

The first node in your cluster should be a Linux host that has both the **Control Plane** and **etcd** roles. At a minimum, both of these roles must be enabled for this node, and this node must be added to your cluster before you can add Windows hosts.

1. After cluster creation, navigate to the **Registration** tab.
1. In **Step 1** under the **Node Role** section, select at least **etcd** and **Control Plane**. We recommend selecting all three.
1. Optional: If you click **Show advanced options,** you can customize the settings for the [Rancher agent](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md) and [node labels.](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
1. In **Step 2**, under the **Registration** section, copy the command displayed on the screen to your clipboard.
1. SSH into your Linux host and run the command that you copied to your clipboard.

**Result:**

Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces

It may take a few minutes for the node to be registered in your cluster.

#### Add Linux Worker Node

In this section, we run a command to register the Linux worker node to the cluster.

After the initial provisioning of your cluster, your cluster only has a single Linux host. Add another Linux `worker` host to support the _Rancher cluster agent_, _Metrics server_, _DNS_ and _Ingress_ for your cluster.

1. After cluster creation, navigate to the **Registration** tab.
1. In **Step 1** under the **Node Role** section, select **Worker**.
1. Optional: If you click **Show advanced options,** you can customize the settings for the [Rancher agent](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md) and [node labels.](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
1. In **Step 2**, under the **Registration** section, copy the command displayed on the screen to your clipboard.
1. SSH into your Linux host and run the command that you copied to your clipboard.

**Result:** The **Worker** role is installed on your Linux host, and the node registers with Rancher. It may take a few minutes for the node to be registered in your cluster.

:::note

Taints on Linux Worker Nodes

For each Linux worker node added into the cluster, the following taints will be added to Linux worker node. By adding this taint to the Linux worker node, any workloads added to the Windows cluster will be automatically scheduled to the Windows worker node. If you want to schedule workloads specifically onto the Linux worker node, you will need to add tolerations to those workloads.

| Taint Key      | Taint Value | Taint Effect |
| -------------- | ----------- | ------------ |
| `cattle.io/os` | `linux`     | `NoSchedule` |

:::

#### Add a Windows Worker Node

In this section, we run a command to register the Windows worker node to the cluster.

:::note
The registration command to add the Windows workers only appears after the cluster is running with Linux etcd, control plane, and worker nodes.
:::

1. After cluster creation, navigate to the **Registration** tab.
1. In **Step 1** under the **Node Role** section, select **Worker**.
1. Optional: If you click **Show advanced options,** you can customize the settings for the [Rancher agent](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md) and [node labels.](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
1. In **Step 2**, under the **Registration** section, copy the command for Windows workers displayed on the screen to your clipboard.
1. Log in to your Windows host using your preferred tool, such as [Microsoft Remote Desktop](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients). Run the command copied to your clipboard in the **Command Prompt (CMD)**.
1. Optional: Repeat these instructions if you want to add more Windows nodes to your cluster.

**Result:** The **Worker** role is installed on your Windows host, and the node registers with Rancher. It may take a few minutes for the node to be registered in your cluster. You now have a Windows Kubernetes cluster.

### Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through the Rancher server. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.

## Configuration for Storage Classes in Azure

If you are using Azure VMs for your nodes, you can use [Azure files](https://docs.microsoft.com/en-us/azure/aks/azure-files-dynamic-pv) as a StorageClass for the cluster. For details, refer to [this section.](azure-storageclass-configuration.md)
