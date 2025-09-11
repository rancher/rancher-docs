---
title: Tips for Running Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-server/tips-for-running-rancher"/>
</head>

This guide is geared toward use cases where Rancher is used to manage downstream Kubernetes clusters. The high-availability setup is intended to prevent losing access to downstream clusters if the Rancher server is not available.

A high-availability Kubernetes installation, defined as an installation of Rancher on a Kubernetes cluster with at least three nodes, should be used in any production installation of Rancher, as well as any installation deemed "important." Multiple Rancher instances running on multiple nodes ensure high availability that cannot be accomplished with a single node environment.

If you are installing Rancher in a vSphere environment, refer to the best practices documented [here.](on-premises-rancher-in-vsphere.md)

When you set up your high-availability Rancher installation, consider the following:

### Minimize Third-Party Software on the Upstream Cluster

We generally recommend running Rancher on a dedicated cluster, free of other workloads, to avoid potential performance and compatibility issues.

Rancher, especially when managing a growing number of clusters, nodes, and workloads, places a significant load on core Kubernetes components like `etcd` and `kube-apiserver` on the upstream cluster. Third-party software can interfere with the performance of these components and Rancher, potentially leading to instability.

Furthermore, third-party software can functionally interfere with Rancher. To minimize compatibility risks, deploy only essential Kubernetes system components and Rancher on the upstream cluster.

The following applications and components generally do not interfere with Rancher or the Kubernetes system:
 * Rancher internal components, such as Fleet
 * Rancher extensions
 * Cluster API components
 * CNIs, CPIs, CSIs
 * Cloud controller managers
 * Observability and monitoring tools (except prometheus-rancher-exporter)

Note that each of these components has its own minimum resource requirements, which must be met in addition to Rancher's. For high-scale deployments, also consider dedicating separate nodes to non-Rancher software using [taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) to minimize interference.

The following software can interfere with Rancher performance and is therefore discouraged on the upstream cluster:
 * [CrossPlane](https://www.crossplane.io/)
 * [Argo CD](https://argoproj.github.io/cd/)
 * [Flux](https://fluxcd.io/)
 * [prometheus-rancher-exporter](https://github.com/David-VTUK/prometheus-rancher-exporter) (see [issue 33](https://github.com/David-VTUK/prometheus-rancher-exporter/issues/33))
 * Container registries such as [Harbor](https://goharbor.io/), which can require significant bandwidth for serving images

### Guidance for Container Registries

Container registries, such as [Harbor](https://goharbor.io/), can consume significant network bandwidth when serving images. This demand increases with the number of images, the frequency of image pulls, and the quantity of clusters and container runtimes they serve. Due to this potential for interference with Rancher UI and API traffic, we recommend against running container registries on the same cluster as the Rancher management server.

Regardless of your deployment strategy for a container registry, ensure sufficient bandwidth is available, ideally reserved using Quality of Service (QoS) mechanisms.

Consider the following recommendations based on your needs:

* **Simple Setups (HA Not a Primary Concern):** A container registry deployed as a single Virtual Machine (VM) can be a viable solution.
* **High Availability (HA) Requirements:** We recommend running the registry in a dedicated Kubernetes cluster. All other clusters should then be configured to pull images from this centralized, HA registry.
* **Very Large-Scale or Complex Network Topologies:** Multiple registry clusters might be necessary. These can be deployed in a hierarchical or federated model to efficiently distribute images and manage traffic.

### Make sure nodes are configured correctly for Kubernetes
It's important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node, checking that all correct ports are opened, and deploying with ssd backed etcd. More details can be found in the [kubernetes docs](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin) and [etcd's performance op guide](https://etcd.io/docs/v3.5/op-guide/performance/).

### When using RKE: Back up the Statefile
RKE keeps record of the cluster state in a file called `cluster.rkestate`. This file is important for the recovery of a cluster and/or the continued maintenance of the cluster through RKE. Because this file contains certificate material, we strongly recommend encrypting this file before backing up. After each run of `rke up` you should backup the state file.

### Run All Nodes in the Cluster in the Same Datacenter
For best performance, run all three of your nodes in the same geographic datacenter. If you are running nodes in the cloud, such as AWS, run each node in a separate Availability Zone. For example, launch node 1 in us-west-2a, node 2 in us-west-2b, and node 3 in us-west-2c.

### Development and Production Environments Should be Similar
It's strongly recommended to have a "staging" or "pre-production" environment of the Kubernetes cluster that Rancher runs on. This environment should mirror your production environment as closely as possible in terms of software and hardware configuration.

### Monitor Your Clusters to Plan Capacity
The Rancher server's Kubernetes cluster should run within the [system and hardware requirements](../../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md) as closely as possible. The more you deviate from the system and hardware requirements, the more risk you take.

However, metrics-driven capacity planning analysis should be the ultimate guidance for scaling Rancher, because the published requirements take into account a variety of workload types.

Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution, and Grafana, which lets you visualize the metrics from Prometheus.

After you [enable monitoring](../../../integrations-in-rancher/monitoring-and-alerting/monitoring-and-alerting.md) in the cluster, you can set up alerts to let you know if your cluster is approaching its capacity. You can also use the Prometheus and Grafana monitoring framework to establish a baseline for key metrics as you scale.
