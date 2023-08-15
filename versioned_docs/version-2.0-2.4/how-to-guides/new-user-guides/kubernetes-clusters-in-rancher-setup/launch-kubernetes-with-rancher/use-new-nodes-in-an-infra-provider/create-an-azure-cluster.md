---
title: Creating an Azure Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"/>
</head>

In this section, you'll learn how to install an [RKE](https://rancher.com/docs/rke/latest/en/) Kubernetes cluster in Azure through Rancher.

First, you will set up your Azure cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision new nodes in Azure.

Then you will create an Azure cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool.

>**Warning:** When the Rancher RKE cluster is running in Azure and has an Azure load balancer in front, the outbound flow will fail. The workaround for this problem is as follows:

> - Terminate the SSL/TLS on the internal load balancer
> - Use the L7 load balancer

> For more information, refer to the documentation on [Azure load balancer limitations](https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations).

For more information on configuring the Kubernetes cluster that Rancher will install on the Azure nodes, refer to the [RKE cluster configuration reference.](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)

For more information on configuring Azure node templates, refer to the [Azure node template configuration reference.](../../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md)

- [Preparation in Azure](#preparation-in-azure)
- [Creating an Azure Cluster](#creating-an-azure-cluster)

## Preparation in Azure

Before creating a node template in Rancher using a cloud infrastructure such as Azure, we must configure Rancher to allow the manipulation of resources in an Azure subscription.

To do this, we will first create a new Azure **service principal (SP)** in Azure **Active Directory (AD)**, which, in Azure, is an application user who has permission to manage Azure resources.

The following is a template `az cli` script that you have to run for creating an service principal, where you have to enter your SP name, role, and scope:

```
az ad sp create-for-rbac \
  --name="<Rancher ServicePrincipal name>" \
  --role="Contributor" \
  --scopes="/subscriptions/<subscription Id>"
```

The creation of this service principal returns three pieces of identification information, *The application ID, also called the client ID*, *The client secret*, and *The tenant ID*. This information will be used when you create a node template for Azure.

## Creating an Azure Cluster

<Tabs>
<TabItem value="Rancher v2.2.0+">

1. [Create your cloud credentials](#1-create-your-cloud-credentials)
2. [Create a node template with your cloud credentials](#2-create-a-node-template-with-your-cloud-credentials)
3. [Create a cluster with node pools using the node template](#3-create-a-cluster-with-node-pools-using-the-node-template)

### 1. Create your cloud credentials

1. In the Rancher UI, click the user profile button in the upper right corner, and click **Cloud Credentials.**
1. Click **Add Cloud Credential.**
1. Enter a name for the cloud credential.
1. In the **Cloud Credential Type** field, select **Azure**.
1. Enter your Azure credentials.
1. Click **Create.**

**Result:** You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters.

### 2. Create a node template with your cloud credentials

Creating a [node template](../../../../../pages-for-subheaders/use-new-nodes-in-an-infra-provider.md#node-templates) for Azure will allow Rancher to provision new nodes in Azure. Node templates can be reused for other clusters.

1. In the Rancher UI, click the user profile button in the upper right corner, and click **Node Templates.**
1. Click **Add Template.**
1. Fill out a node template for Azure. For help filling out the form, refer to [Azure Node Template Configuration.](../../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md)

### 3. Create a cluster with node pools using the node template

Use Rancher to create a Kubernetes cluster in Azure.

1. From the **Clusters** page, click **Add Cluster**.
1. Choose **Azure**.
1. Enter a **Cluster Name**.
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. Use **Cluster Options** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on **Show advanced options.** For help configuring the cluster, refer to the [RKE cluster configuration reference.](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)
1. Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices, see [this section.](../../../../../pages-for-subheaders/use-new-nodes-in-an-infra-provider.md)
1. Review your options to confirm they're correct. Then click **Create**.

**Result:**

Your cluster is created and assigned a state of **Provisioning.** Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active.**

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces

</TabItem>
<TabItem value="Rancher before v2.2.0">

Use Rancher to create a Kubernetes cluster in Azure.

1. From the **Clusters** page, click **Add Cluster**.
1. Choose **Azure**.
1. Enter a **Cluster Name**.
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. Use **Cluster Options** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on **Show advanced options.** For help configuring the cluster, refer to the [RKE cluster configuration reference.](../../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md)
1. Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. To create a node template, click **Add Node Template** and complete the **Azure Options** form. For help filling out the form, refer to the [Azure node template configuration reference.](../../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure.md) For more information about node pools, including best practices for assigning Kubernetes roles to them, see [this section.](../../../../../pages-for-subheaders/use-new-nodes-in-an-infra-provider.md)
1. Review your options to confirm they're correct. Then click **Create**.

**Result:**

Your cluster is created and assigned a state of **Provisioning.** Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active.**

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces

</TabItem>
</Tabs>

### Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../../advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../../advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.