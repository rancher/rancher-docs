---
title: Kubernetes Concepts
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/kubernetes-concepts"/>
</head>

This page explains concepts related to Kubernetes that are important for understanding how Rancher works. The descriptions below provide a simplified overview of Kubernetes components. For more details, refer to the [official documentation on Kubernetes components.](https://kubernetes.io/docs/concepts/overview/components/)

## About Kubernetes

Kubernetes is the container cluster management standard. YAML files specify containers and other resources that form an application. Kubernetes performs functions such as scheduling, scaling, service discovery, health check, secret management, and configuration management.

## What is a Kubernetes Cluster?

A cluster is a group of computers that work together as a single system.

A _Kubernetes Cluster_ is a cluster that uses the [Kubernetes container-orchestration system](https://kubernetes.io/) to deploy, maintain, and scale containers, allowing your organization to automate application operations.

## Roles for Nodes in Kubernetes Clusters

Each computing resource in a Kubernetes cluster is called a _node_. Nodes can be either bare-metal servers or virtual machines. Kubernetes classifies nodes into three types: _etcd_ nodes, _control plane_ nodes, and _worker_ nodes.

A Kubernetes cluster consists of at least one etcd, controlplane, and worker node.

### etcd Nodes

Rancher uses etcd as a data store in both single node and high-availability installations. In Kubernetes, etcd is also a role for nodes that store the cluster state.

The state of a Kubernetes cluster is maintained in [etcd.](https://kubernetes.io/docs/concepts/overview/components/#etcd)  The etcd nodes run the etcd database.

The etcd database component is a distributed key-value store used as Kubernetes storage for all cluster data, such as cluster coordination and state management. It is recommended to run etcd on multiple nodes so that there's always a backup available for failover.

Although you can run etcd on just one node, etcd requires a majority of nodes, a quorum, to agree on updates to the cluster state. The cluster should always contain enough healthy etcd nodes to form a quorum. For a cluster with n members, a quorum is (n/2)+1. For any odd-sized cluster, adding one node will always increase the number of nodes necessary for a quorum.

Three etcd nodes is generally sufficient for smaller clusters and five etcd nodes for large clusters.

### Controlplane Nodes

Controlplane nodes run the Kubernetes API server, scheduler, and controller manager. These nodes take care of routine tasks to ensure that your cluster maintains your configuration. Because all cluster data is stored on your etcd nodes, control plane nodes are stateless. You can run control plane on a single node, although three or more nodes are recommended for redundancy. Additionally, a single node can share the control plane and etcd roles.

### Worker Nodes

Each [worker node](https://kubernetes.io/docs/concepts/architecture/nodes/) runs the following:

- **Kubelets:** An agent that monitors the state of the node, ensuring your containers are healthy.
- **Workloads:** The containers and pods that hold your apps, as well as other types of deployments.

Worker nodes also run storage and networking drivers, and ingress controllers when required. You create as many worker nodes as necessary to run your  [workloads](../how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/workloads-and-pods.md).

## About Helm

For high-availability installations of Rancher, Helm is the tool used to install Rancher on a Kubernetes cluster.

Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at [https://helm.sh/](https://helm.sh).

For more information on service accounts and cluster role binding, refer to the [Kubernetes documentation.](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)
