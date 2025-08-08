---
title: Creating a Google Compute Engine cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-google-gce-cluster"/>
</head>


In this section, you'll learn how to use Rancher to provision an [RKE2](https://docs.rke2.io/)/[K3s](https://docs.k3s.io/) Kubernetes cluster on the Google Cloud Platform (GCP) using Google Compute Engine (GCE) through Rancher.


First, you will enable the GCE node driver in the Rancher UI. Then, you follow the steps to create a GCP service account with the necessary permissions, and generate a JSON key file. This key file will be used to create a cloud credential in Rancher. 


Then, you will create a GCE cluster in Rancher, and when configuring the cluster, you will define machine pools for it. Each machine pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE2 onto the new nodes, and it will set up each node with the Kubernetes role defined by the machine pool.


1. [Enable the GCE node driver](#1-enable-the-gce-node-driver)
1. [Create your cloud credential](#2-create-a-cloud-credential)
1. [Create a GCE cluster with your cloud credential](#3-create-a-cluster-using-the-cloud-credential)
1. [GCE Best Practices](#gce-best-practices)

### Prerequisites

1.   A valid Google Cloud Platform account and project.
1.   A GCP Service Account JSON key file. The service account associated with this key must have the following IAM roles:
      1. **Compute Admin**
      1. **Service Account User**
      1. **Viewer**
1. A VPC Network to provision VMs within. 

Refer to the [GCP documentation](https://cloud.google.com/iam/docs/service-account-overview) on creating and managing service account keys for more details.


### 1. Enable the GCE node driver

The GCE node driver is not enabled by default in Rancher. You must enable it before you can provision GCE clusters, or work with GCE specific CRDs.

1.  Click **☰ > Cluster Management**.
1.  On the left hand side, click **Drivers**.
1.  Open the **Node Drivers** tab.
1.  Find the **Google GCE** driver and select **⋮ > Activate**.


### 2. Create a cloud credential

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click **Google**.
1. Enter your GCP Service Account JSON key file.
1. Click **Create**.

**Result:** You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials in other clusters. Depending on the permissions granted to the service account, this credential may also be used for GKE clusters.


### 3. Create a cluster using the cloud credential

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Click **Google GCE**.
1. Select a **Cloud Credential** and provide the GCP project to create the VM in.
1. Enter a **Cluster Name**.
1. Create a machine pool for each Kubernetes role. Refer to the [best practices](use-new-nodes-in-an-infra-provider.md#node-roles) for recommendations on role assignments and counts.
  1. For each machine pool, define the machine configuration. Refer to the [Google GCE machine configuration reference](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/google-gce.md) for information on configuration options.
1. Use the **Cluster Configuration** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. For help configuring the cluster, refer to the [RKE2](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) and [K3s](../../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) cluster configuration reference.
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. Click **Create**.


**Result:**

Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces

### GCE Best Practices

#### External Firewall Rules, Open Ports, and ACE

If the cluster being provisioned will utilize the [Authorized Cluster Endpoint (ACE) feature](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster), controlplane nodes must expose port `6443`. This port is not exposed in the default machine pool configuration to prevent it from being exposed across all cluster nodes, and to reduce the number of firewall rules created by Rancher. 

In order for ACE to work as expected, you must specify this port in the Rancher UI when configuring the controlplane machine pool by enabling the `Expose external ports` checkbox, under the `Show Advanced` section of the machine pool configuration UI. Alternatively, you may manually create a custom firewall rule in GCP and provide the related network tag in the controlplane machine-pool configuration.

#### Internal Firewall Rules

Rancher will automatically create a firewall rule and network tag to facilitate communication between cluster nodes internally within the specified VPC network. This rule will contain the minimum number of ports required to create an RKE2/K3s cluster. 

If you need to extend the number of ports exposed internally between cluster nodes, a new firewall rule should be manually created, and the associated network tag assigned to the relevant machine pools. If desired, the automatic creation of the internal firewall rule can be disabled for each given machine pool when creating or updating the cluster. 

#### Cross Network Deployments

While it is possible to deploy different machine pools into different VPC networks, the internal firewall rule created by Rancher does not support this configuration by default. To create machine pools in different networks, additional firewall rules to facilitate communication between nodes in different networks must be manually created.


## Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.
