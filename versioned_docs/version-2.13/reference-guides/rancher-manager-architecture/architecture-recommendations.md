---
title: Architecture Recommendations
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-manager-architecture/architecture-recommendations"/>
</head>

If you are installing Rancher on a single node, the main architecture recommendation that applies to your installation is that the node running Rancher should be [separate from downstream clusters.](#separation-of-rancher-and-user-clusters)

## Separation of Rancher and User Clusters

A user cluster is a downstream Kubernetes cluster that runs your apps and services.

If you have a Docker installation of Rancher, the node running the Rancher server should be separate from your downstream clusters.

If Rancher is intended to manage downstream Kubernetes clusters, the Kubernetes cluster that the Rancher server runs on should also be separate from the downstream user clusters.

![Separation of Rancher Server from User Clusters](/img/rancher-architecture-separation-of-rancher-server.svg)

## Why HA is Better for Rancher in Production

We recommend installing the Rancher server on a high-availability Kubernetes cluster, primarily because it protects the Rancher server data. In a high-availability installation, a load balancer serves as the single point of contact for clients, distributing network traffic across multiple servers in the cluster and helping to prevent any one server from becoming a point of failure.

We don't recommend installing Rancher in a single Docker container, because if the node goes down, there is no copy of the cluster data available on other nodes and you could lose the data on your Rancher server.

### K3s Kubernetes Cluster Installations

One option for the underlying Kubernetes cluster is to use K3s Kubernetes. K3s is Rancher's CNCF certified Kubernetes distribution. It is easy to install and uses half the memory of Kubernetes, all in a binary of less than 100 MB. Another advantage of K3s is that it allows an external datastore to hold the cluster data, allowing the K3s server nodes to be treated as ephemeral.

<figcaption>Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server</figcaption>

![Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server](/img/k3s-server-storage.svg)

## Recommended Load Balancer Configuration for Kubernetes Installations

We recommend the following configurations for the load balancer and Ingress controllers:

* The DNS for Rancher should resolve to a Layer 4 load balancer (TCP).
* The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster.
* The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443.
* The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.

<figcaption>Rancher installed on a Kubernetes cluster with layer 4 load balancer, depicting SSL termination at Ingress controllers</figcaption>

![Rancher HA](/img/ha/rancher2ha.svg)

## Environment for Kubernetes Installations

It is strongly recommended to install Rancher on a Kubernetes cluster on hosted infrastructure such as Amazon's EC2 or Google Compute Engine.

For the best performance and greater security, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can [create or import clusters](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md) for running your workloads.

## Recommended Node Roles for Kubernetes Installations

The below recommendations apply when Rancher is installed on a K3s Kubernetes cluster.

### K3s Cluster Roles

In K3s clusters, there are two types of nodes: server nodes and agent nodes. Both servers and agents can have workloads scheduled on them. Server nodes run the Kubernetes master.

For the cluster running the Rancher management server, we recommend using two server nodes. Agent nodes are not required.

## Architecture for an Authorized Cluster Endpoint (ACE)

If you are using an [authorized cluster endpoint (ACE),](../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint) we recommend creating an FQDN pointing to a load balancer which balances traffic across your nodes with the `controlplane` role.

If you are using private CA signed certificates on the load balancer, you have to supply the CA certificate, which will be included in the generated kubeconfig file to validate the certificate chain. See the documentation on [kubeconfig files](../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md) and [API keys](../user-settings/api-keys.md#creating-an-api-key) for more information.

ACE support is available for registered RKE2 and K3s clusters. To view the manual steps to perform on the downstream cluster to enable the ACE, click [here](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters).
