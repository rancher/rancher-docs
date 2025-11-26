---
title: Creating a DigitalOcean Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster"/>
</head>

In this section, you'll learn how to deploy an [RKE2](https://docs.rke2.io/)/[K3s](https://docs.k3s.io/) Kubernetes cluster in DigitalOcean.

First, you will set up your DigitalOcean cloud credentials in Rancher.

Then you will create a DigitalOcean cluster in Rancher, and when configuring the new cluster, you will define machine pools for it. Each machine pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the machine pool.

### 1. Create your cloud credentials

If you already have a set of cloud credentials to use, skip this section.

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click **DigitalOcean**.
1. Enter your Digital Ocean credentials.
1. Click **Create**.

### 2. Create your cluster

Use Rancher to create a Kubernetes cluster in DigitalOcean.

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Toggle the switch to **RKE2/K3s**.
1. Click **DigitalOcean**.
1. Select a **Cloud Credential**, if more than one exists. Otherwise, it's preselected.
1. Enter a **Cluster Name**.
1. Create a machine pool for each Kubernetes role. Refer to the [best practices](use-new-nodes-in-an-infra-provider.md#node-roles) for recommendations on role assignments and counts.
    1. For each machine pool, define the machine configuration. Refer to the [DigitalOcean machine configuration reference](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md) for information on configuration options.
1. Use the **Cluster Configuration** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. For help configuring the cluster, refer to the [RKE2](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) and [K3s](../../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) cluster configuration reference.
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. Click **Create**.

**Result:**

Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces

## Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.
