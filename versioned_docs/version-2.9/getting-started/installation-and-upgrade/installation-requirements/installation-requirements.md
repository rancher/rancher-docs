---
title: Installation Requirements
description: Learn the node requirements for each node running Rancher server when you’re configuring  Rancher to run either in a Docker or Kubernetes setup
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements"/>
</head>

This page describes the software, hardware, and networking requirements for the nodes where the Rancher server will be installed. The Rancher server can be installed on a single node or a high-availability Kubernetes cluster.

:::note Important:

If you install Rancher on a Kubernetes cluster, requirements are different from the [node requirements for downstream user clusters,](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md) which will run your apps and services.

:::

The Rancher UI works best in Firefox or Chromium based browsers (Chrome, Edge, Opera, Brave, etc).

See our page on [best practices](../../../reference-guides/best-practices/rancher-server/tips-for-running-rancher.md) for a list of recommendations for running a Rancher server in production.

## Kubernetes Compatibility with Rancher

Rancher needs to be installed on a supported Kubernetes version. Consult the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions) to ensure that your intended version of Kubernetes is supported.

### Install Rancher on a Hardened Kubernetes cluster

If you install Rancher on a hardened Kubernetes cluster, check the [Exempting Required Rancher Namespaces](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md#exempting-required-rancher-namespaces) section for detailed requirements.

## Operating Systems and Container Runtime Requirements

All supported operating systems are 64-bit x86. Rancher should work with any modern Linux distribution.

The [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions) lists which OS and Docker versions were tested for each Rancher version.

Docker is required for nodes that will run RKE clusters. It is not required for RKE2 or K3s clusters.

The `ntp` (Network Time Protocol) package should be installed. This prevents errors with certificate validation that can occur when the time is not synchronized between the client and server.

Some distributions of Linux may have default firewall rules that block communication within the Kubernetes cluster. Since Kubernetes v1.19, firewalld must be turned off, because it conflicts with the Kubernetes networking plugins.

If you don't feel comfortable doing so, you might check suggestions in the [respective issue](https://github.com/rancher/rancher/issues/28840). Some users were successful [creating a separate firewalld zone with a policy of ACCEPT for the Pod CIDR](https://github.com/rancher/rancher/issues/28840#issuecomment-787404822).

If you plan to run Rancher on ARM64, see [Running on ARM64 (Experimental).](../../../how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64.md)

### RKE2 Specific Requirements

RKE2 bundles its own container runtime, containerd. Docker is not required for RKE2 installs.

For details on which OS versions were tested with RKE2, refer to the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions).

### K3s Specific Requirements

For the container runtime, K3s bundles its own containerd by default. Alternatively, you can configure K3s to use an already installed Docker runtime. For more information on using K3s with Docker see the [K3s documentation.](https://docs.k3s.io/advanced#using-docker-as-the-container-runtime)

Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions). To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script.

If you are installing Rancher on a K3s cluster with **Raspbian Buster**, follow [these steps](https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster) to switch to legacy iptables.

If you are installing Rancher on a K3s cluster with Alpine Linux, follow [these steps](https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup) for additional setup.

### RKE Specific Requirements

RKE requires a Docker container runtime. Supported Docker versions are specified in the [Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/) page.

For more information, see [Installing Docker](install-docker.md).

## Hardware Requirements

The following sections describe the CPU, memory, and I/O requirements for nodes where Rancher is installed. Requirements vary based on the size of the infrastructure.

### Practical Considerations

Rancher's hardware footprint depends on a number of factors, including:

 - Size of the managed infrastructure (e.g., node count, cluster count).
 - Complexity of the desired access control rules (e.g., `RoleBinding` object count).
 - Number of workloads (e.g., Kubernetes deployments, Fleet deployments).
 - Usage patterns (e.g., subset of functionality actively used, frequency of use, number of concurrent users).

Since there are a high number of influencing factors that may vary over time, the requirements listed here should be understood as reasonable starting points that work well for most use cases. Nevertheless, your use case may have different requirements. For inquiries about a specific scenario please [contact Rancher](https://rancher.com/contact/) for further guidance.

In particular, requirements on this page are subject to typical use assumptions, which include:
 - Under 60,000 total Kubernetes resources, per type.
 - Up to 120 pods per node.
 - Up to 200 CRDs in the upstream (local) cluster.
 - Up to 100 CRDs in downstream clusters.
 - Up to 50 Fleet deployments.

Higher numbers are possible but requirements might be higher. If you have more than 20,000 resources of the same type, loading time of the whole list through the Rancher UI might take several seconds.

:::note Evolution:

Rancher's codebase evolves, use cases change, and the body of accumulated Rancher experience grows every day.

Hardware requirement recommendations are subject to change over time, as guidelines improve in accuracy and become more concrete.

If you find that your Rancher deployment no longer complies with the listed recommendations, [contact Rancher](https://rancher.com/contact/) for a re-evaluation.

:::


### RKE2 Kubernetes

The following table lists minimum CPU and memory requirements for each node in the [upstream cluster](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md).

Please note that a highly available setup with at least three nodes is required for production.

| Managed Infrastructure Size | Maximum Number of Clusters | Maximum Number of Nodes | vCPUs | RAM   |
|-----------------------------|----------------------------|-------------------------|-------|-------|
| Small                       | 150                        | 1500                    | 4     | 16 GB |
| Medium                      | 300                        | 3000                    | 8     | 32 GB |
| Large (*)                   | 500                        | 5000                    | 16    | 64 GB |
| Larger (†)                  | (†)                        | (†)                     | (†)   | (†)   |

(*): Large deployments require that you [follow best practices](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md) for adequate performance.

(†): Larger deployment sizes are generally possible with ad-hoc hardware recommendations and tuning. You can [contact Rancher](https://rancher.com/contact/) for a custom evaluation.

Refer to RKE2 documentation for more detailed information on [RKE2 general requirements](https://docs.rke2.io/install/requirements).

### K3s Kubernetes

The following table lists minimum CPU and memory requirements for each node in the [upstream cluster](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md).

Please note that a highly available setup with at least three nodes is required for production.

| Managed Infrastructure Size | Maximum Number of Clusters | Maximum Number of Nodes | vCPUs | RAM   | External Database Host (*) |
|-----------------------------|----------------------------|-------------------------|-------|-------|----------------------------|
| Small                       | 150                        | 1500                    | 4     | 16 GB | 2 vCPUs, 8 GB + 1000 IOPS  |
| Medium                      | 300                        | 3000                    | 8     | 32 GB | 4 vCPUs, 16 GB + 2000 IOPS |
| Large (†)                   | 500                        | 5000                    | 16    | 64 GB | 8 vCPUs, 32 GB + 4000 IOPS |

(*): External Database Host refers to hosting the K3s cluster data store on an [dedicated external host](https://docs.k3s.io/datastore). This is optional. Exact requirements depend on the external data store.

(†): Large deployments require that you [follow best practices](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md) for adequate performance.

Refer to the K3s documentation for more detailed information on [general requirements](https://docs.k3s.io/installation/requirements).

### Hosted Kubernetes

The following table lists minimum CPU and memory requirements for each node in the [upstream cluster](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md).

Please note that a highly available setup with at least three nodes is required for production.

These requirements apply to hosted Kubernetes clusters such as Amazon Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), or Google Kubernetes Engine (GKE). They don't apply to Rancher SaaS solutions such as [Rancher Prime Hosted](https://www.rancher.com/products/rancher).

| Managed Infrastructure Size | Maximum Number of Clusters | Maximum Number of Nodes | vCPUs | RAM   |
|-----------------------------|----------------------------|-------------------------|-------|-------|
| Small                       | 150                        | 1500                    | 4     | 16 GB |
| Medium                      | 300                        | 3000                    | 8     | 32 GB |
| Large (*)                   | 500                        | 5000                    | 16    | 64 GB |

(*): Large deployments require that you [follow best practices](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md) for adequate performance.

### RKE

The following table lists minimum CPU and memory requirements for each node in the [upstream cluster](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md).

Please note that a highly available setup with at least three nodes is required for production.

| Managed Infrastructure Size | Maximum Number of Clusters | Maximum Number of Nodes | vCPUs | RAM   |
|-----------------------------|----------------------------|-------------------------|-------|-------|
| Small                       | 150                        | 1500                    | 4     | 16 GB |
| Medium                      | 300                        | 3000                    | 8     | 32 GB |
| Large (*)                   | 500                        | 5000                    | 16    | 64 GB |

(*): Large deployments require that you [follow best practices](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md) for adequate performance.

Refer to the RKE documentation for more detailed information on [general requirements](https://rke.docs.rancher.com/os).

### Docker

The following table lists minimum CPU and memory requirements for a [single Docker node installation of Rancher](../other-installation-methods/rancher-on-a-single-node-with-docker/rancher-on-a-single-node-with-docker.md).

Please note that a Docker installation is only suitable for development or testing purposes and is not meant to be used in production environments.

| Managed Infrastructure Size | Maximum Number of Clusters | Maximum Number of Nodes | vCPUs | RAM  |
|-----------------------------|----------------------------|-------------------------|-------|------|
| Small                       | 5                          | 50                      | 1     | 4 GB |
| Medium                      | 15                         | 200                     | 2     | 8 GB |

## Ingress

Each node in the Kubernetes cluster that Rancher is installed on should run an Ingress.

The Ingress should be deployed as DaemonSet to ensure your load balancer can successfully route traffic to all nodes.

For RKE, RKE2 and K3s installations, you don't have to install the Ingress manually because it is installed by default.

For hosted Kubernetes clusters (EKS, GKE, AKS), you will need to set up the ingress.

- **Amazon EKS:** For details on how to install Rancher on Amazon EKS, including how to install an ingress so that the Rancher server can be accessed, refer to [this page.](../install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md)
- **AKS:** For details on how to install Rancher with Azure Kubernetes Service, including how to install an ingress so that the Rancher server can be accessed, refer to [this page.](../install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md)
- **GKE:** For details on how to install Rancher with Google Kubernetes Engine, including how to install an ingress so that the Rancher server can be accessed, refer to [this page.](../install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md)

## Disks

Rancher performance depends on etcd in the cluster performance. To ensure optimal speed, we recommend always using SSD disks to back your Rancher management Kubernetes cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS. In larger clusters, consider using dedicated storage devices for etcd data and wal directories.

## Networking Requirements

This section describes the networking requirements for the node(s) where the Rancher server is installed.

:::caution

If a server containing Rancher has the `X-Frame-Options=DENY` header, some pages in the new Rancher UI will not be able to render after upgrading from the legacy UI. This is because some legacy pages are embedded as iFrames in the new UI.

:::

### Node IP Addresses

Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated.

### Port Requirements

To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes. [Port Requirements](port-requirements.md) lists all the necessary ports for Rancher and Downstream Clusters for the different cluster types.

### Load Balancer Requirements

If you use a load balancer, it should be be HTTP/2 compatible. 

To receive help from SUSE Support, Rancher Prime customers who use load balancers (or any other middleboxes such as firewalls), must use one that is HTTP/2 compatible.

When HTTP/2 is not available, Rancher falls back to HTTP/1.1. However, since HTTP/2 offers improved web application performance, using HTTP/1.1 can create performance issues.

## Dockershim Support

For more information on Dockershim support, refer to [this page](dockershim.md).
