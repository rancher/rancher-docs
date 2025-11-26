---
title: Launching Kubernetes on Existing Custom Nodes
description: To create a cluster with custom nodes, you’ll need to access servers in your cluster and provision them according to Rancher requirements
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes"/>
</head>

When you create a custom cluster, Rancher can use RKE2/K3s to create a Kubernetes cluster in on-prem bare-metal servers, on-prem virtual machines, or in any node hosted by an infrastructure provider.

To use this option, you need access to the servers that will be part of your Kubernetes cluster. Provision each server according to the [requirements](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md). Then, run the command provided in the Rancher UI on each server to convert it into a Kubernetes node.

This section describes how to set up a custom cluster.

## Creating a Cluster with Custom Nodes

:::note Want to use Windows hosts as Kubernetes workers?

See [Configuring Custom Clusters for Windows](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/use-windows-clusters.md) before you start.

:::

### 1. Provision a Linux Host

Begin creation of a custom cluster by provisioning a Linux host. Your host can be:

- A cloud-host virtual machine (VM)
- An on-prem VM
- A bare-metal server

If you want to reuse a node from a previous custom cluster, [clean the node](../../../../how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes.md) before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail.

Provision the host according to the [installation requirements](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md) and the [checklist for production-ready clusters.](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/checklist-for-production-ready-clusters.md)

:::note IPv6-only cluster

For an IPv6-only cluster, ensure that your operating system correctly configures the `/etc/hosts` file.

```
::1       localhost
```

:::

### 2. Create the Custom Cluster

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Click **Custom**.
1. Enter a **Cluster Name**.
1. Use the **Cluster Configuration** section to set up the cluster. For more information, see [RKE2 Cluster Configuration Reference](../rke2-cluster-configuration.md) and [K3s Cluster Configuration Reference](../k3s-cluster-configuration.md).

   :::note Windows nodes

   To learn more about using Windows nodes as Kubernetes workers, see [Launching Kubernetes on Windows Clusters](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/use-windows-clusters.md).

   :::

1. Click **Create**.

**Result:** The UI redirects to the **Registration** page, where you can generate the registration command for your nodes.

1. From **Node Role**, select the roles you want a cluster node to fill. You must provision at least one node for each role: etcd, worker, and control plane. A custom cluster requires all three roles to finish provisioning. For more information on roles, see [Roles for Nodes in Kubernetes Clusters](../../../kubernetes-concepts.md#roles-for-nodes-in-kubernetes-clusters).

   :::note  Bare-Metal Server

   If you plan to dedicate bare-metal servers to each role, you must provision a bare-metal server for each role (i.e., provision multiple bare-metal servers).

   :::note

1. **Optional**: Click **Show Advanced** to configure additional settings such as specifying the IP address(es), overriding the node hostname, or adding [labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) or [taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/) to the node

   :::note

   The **Node Public IP** and **Node Private IP** fields can accept either a single address or a comma-separated list of addresses (for example: `10.0.0.5,2001:db8::1`). 

   :::

   :::note Ipv6-only or Dual-stack Cluster

   In both IPv6-only and dual-stack clusters, you should specify the node’s **IPv6 address** as the **Node Private IP**.

   :::

1. Copy the command displayed on screen to your clipboard.

1. Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard.

:::note

Repeat steps 7-10 if you want to dedicate specific hosts to specific node roles. Repeat the steps as many times as needed.

:::

**Result:**

The cluster is created and transitions to the **Updating** state while Rancher initializes and provisions cluster components.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces


### 3. Amazon Only: Tag Resources

If you have configured your cluster to use Amazon as **Cloud Provider**, tag your AWS resources with a cluster ID.

[Amazon Documentation: Tagging Your Amazon EC2 Resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)

:::note

You can use Amazon EC2 instances without configuring a cloud provider in Kubernetes. You only have to configure the cloud provider if you want to use specific Kubernetes cloud provider functionality. For more information, see [Kubernetes Cloud Providers](https://github.com/kubernetes/website/blob/release-1.18/content/en/docs/concepts/cluster-administration/cloud-providers.md)

:::

The following resources need to be tagged with a `ClusterID`:

- **Nodes**: All hosts added in Rancher.
- **Subnet**: The subnet used for your cluster
- **Security Group**: The security group used for your cluster.

:::note

Do not tag multiple security groups. Tagging multiple groups generates an error when creating Elastic Load Balancer.

:::

The tag that should be used is:

```
Key=kubernetes.io/cluster/<CLUSTERID>, Value=owned
```

`<CLUSTERID>` can be any string you choose. However, the same string must be used on every resource you tag. Setting the tag value to `owned` informs the cluster that all resources tagged with the `<CLUSTERID>` are owned and managed by this cluster.

If you share resources between clusters, you can change the tag to:

```
Key=kubernetes.io/cluster/CLUSTERID, Value=shared
```

## Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.
