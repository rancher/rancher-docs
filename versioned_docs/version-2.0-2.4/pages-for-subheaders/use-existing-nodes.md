---
title: Launching Kubernetes on Existing Custom Nodes
description: To create a cluster with custom nodes, you’ll need to access servers in your cluster and provision them according to Rancher requirements
---

When you create a custom cluster, Rancher uses RKE (the Rancher Kubernetes Engine) to create a Kubernetes cluster in on-prem bare-metal servers, on-prem virtual machines, or in any node hosted by an infrastructure provider.

To use this option you'll need access to servers you intend to use in your Kubernetes cluster. Provision each server according to the [requirements](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md), which includes some hardware specifications and Docker. After you install Docker on each server, you willl also run the command provided in the Rancher UI on each server to turn each one into a Kubernetes node.

This section describes how to set up a custom cluster.

## Creating a Cluster with Custom Nodes

>**Want to use Windows hosts as Kubernetes workers?**
>
>See [Configuring Custom Clusters for Windows](use-windows-clusters.md) before you start.


### 1. Provision a Linux Host

Begin creation of a custom cluster by provisioning a Linux host. Your host can be:

- A cloud-host virtual machine (VM)
- An on-prem VM
- A bare-metal server

If you want to reuse a node from a previous custom cluster, [clean the node](../how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes.md) before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail.

Provision the host according to the [installation requirements](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md) and the [checklist for production-ready clusters.](checklist-for-production-ready-clusters.md)

### 2. Create the Custom Cluster

1. From the **Clusters** page, click **Add Cluster**.

2. Choose **Custom**.

3. Enter a **Cluster Name**.

4. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.

5. Use **Cluster Options** to choose the version of Kubernetes, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on **Show advanced options.**

    >**Using Windows nodes as Kubernetes workers?**
    >
    >- See [Enable the Windows Support Option](use-windows-clusters.md).
    >- The only Network Provider available for clusters with Windows support is Flannel.
6.	<a id="step-6"></a>Click **Next**.

7.	From **Node Role**, choose the roles that you want filled by a cluster node.

    >**Notes:**
    >
    >- Using Windows nodes as Kubernetes workers? See [this section](use-windows-clusters.md).
    >- Bare-Metal Server Reminder: If you plan on dedicating bare-metal servers to each role, you must provision a bare-metal server for each role (i.e. provision multiple bare-metal servers).

8.	<a id="step-8"></a>**Optional**: Click **[Show advanced options](admin-settings/agent-options/)** to specify IP address(es) to use when registering the node, override the hostname of the node, or to add [labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) or [taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/) to the node.

9. Copy the command displayed on screen to your clipboard.

10. Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard.

    >**Note:** Repeat steps 7-10 if you want to dedicate specific hosts to specific node roles. Repeat the steps as many times as needed.

11. When you finish running the command(s) on your Linux host(s), click **Done**.

**Result:**

Your cluster is created and assigned a state of **Provisioning.** Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active.**

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces


### 3. Amazon Only: Tag Resources

If you have configured your cluster to use Amazon as **Cloud Provider**, tag your AWS resources with a cluster ID.

[Amazon Documentation: Tagging Your Amazon EC2 Resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)

>**Note:** You can use Amazon EC2 instances without configuring a cloud provider in Kubernetes. You only have to configure the cloud provider if you want to use specific Kubernetes cloud provider functionality. For more information, see [Kubernetes Cloud Providers](https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/)


The following resources need to tagged with a `ClusterID`:

- **Nodes**: All hosts added in Rancher.
- **Subnet**: The subnet used for your cluster
- **Security Group**: The security group used for your cluster.

    >**Note:** Do not tag multiple security groups. Tagging multiple groups generates an error when creating Elastic Load Balancer.

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

- **Access your cluster with the kubectl CLI:** Follow [these steps](../how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.