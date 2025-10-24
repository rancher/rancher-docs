---
title: Creating an Azure Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"/>
</head>

In this section, you'll learn how to deploy an [RKE2](https://docs.rke2.io/)/[K3s](https://docs.k3s.io/) Kubernetes cluster in Azure through Rancher.

First, you will set up your Azure cloud credentials in Rancher.

Then you will create an Azure cluster in Rancher, and when configuring the new cluster, you will define machine pools for it. Each machine pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the machine pool.

:::caution

When the Rancher RKE2/K3s cluster is running in Azure and has an Azure load balancer in front, the outbound flow will fail. The workaround for this problem is as follows:

- Terminate the SSL/TLS on the internal load balancer
- Use the L7 load balancer

For more information, refer to the documentation on [Azure load balancer limitations](https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations).

:::

For more information on configuring the Kubernetes cluster that Rancher will install on the Azure nodes, refer to the [RKE2](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) and [K3s](../../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) cluster configuration references.

For more information on configuring Azure machines, refer to the [Azure machine configuration reference](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure.md).

- [Preparation in Azure](#preparation-in-azure)
- [Creating an Azure Cluster](#creating-an-azure-cluster)

## Preparation in Azure

Before a cluster can be deployed, we must configure our Azure subscription to allow the manipulation of its resources by a third party, such as Rancher.

To do this, we will first create a new Azure **service principal (SP)** in Azure **Active Directory (AD)**, which, in Azure, is an application user who has permission to manage Azure resources.

The following is a template `az cli` script that you have to run for creating an service principal, where you have to enter your SP name, role, and scope:

```
az ad sp create-for-rbac \
  --name="<Rancher ServicePrincipal name>" \
  --role="Contributor" \
  --scopes="/subscriptions/<subscription Id>"
```

The creation of this service principal returns the **application ID**, also called the **client ID**, and the **client secret**. This information is used when you create your cloud credentials.

## Creating an Azure Cluster

### 1. Create your cloud credentials

If you already have a set of cloud credentials to use, skip this section.

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click **Azure**.
1. Enter your Azure credentials.
1. Click **Create**.

**Result:** You have created the cloud credentials that will be used to provision nodes in your cluster.

### 2. Create your cluster

Use Rancher to create a Kubernetes cluster in Azure.

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Toggle the switch to **RKE2/K3s**.
1. Click **Azure**.
1. Select a **Cloud Credential**, if more than one exists. Otherwise, it's preselected.
1. Enter a **Cluster Name**.
1. Create a machine pool for each Kubernetes role. Refer to the [best practices](use-new-nodes-in-an-infra-provider.md#node-roles) for recommendations on role assignments and counts.
    1. For each machine pool, define the machine configuration. Refer to the [Azure machine configuration reference](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure.md) for information on configuration options.
1. Use the **Cluster Configuration** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation.  For help configuring the cluster, refer to the [RKE2](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) and [K3s](../../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) cluster configuration reference.
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. Click **Create**.

**Result:**

Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces


### Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.
