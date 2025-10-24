---
title: IPv4/IPv6 Dual-stack
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/dual-stack/"/>
</head>

Kubernetes supports single-stack IPv4, single-stack IPv6, and dual-stack networking configurations.
For more details, refer to the official [Kubernetes Dual-Stack Networking documentation](https://kubernetes.io/docs/concepts/services-networking/dual-stack/).

## Installing Rancher on IPv6-Only or Dual-Stack Clusters

Rancher can be deployed on clusters configured for single-stack IPv4, single-stack IPv6, or dual-stack networking.

When Rancher is deployed on an IPv6-only cluster, it can communicate externally only over IPv6. 
As a result, it can provision only single-stack IPv6 or dual-stack clusters.

Similarly, when Rancher is deployed on a dual-stack cluster, it can communicate externally over both IPv4 and IPv6. 
In this case, it can provision IPv4-only, IPv6-only, and dual-stack clusters.

For installation steps, see the guide on [Installing and Upgrading Rancher](../getting-started/installation-and-upgrade/installation-and-upgrade.md).

#### Requirement for the Rancher Server URL

When provisioning IPv6-only or dual-stack clusters, the Rancher server URL must be reachable over IPv6.
This is necessary because downstream cluster nodes in IPv6-only setups can communicate with the Rancher server only via IPv6.

## Provisioning IPv6-Only or Dual-Stack Clusters

Starting with Rancher v2.13.0, you can provision RKE2 and K3s **Node driver** (machine pools) or **Custom cluster** (existing hosts) clusters using IPv4-only, IPv6-only, or dual-stack networking.

### Network Configuration

To enable IPv6-only or dual-stack networking, you must configure:

- Cluster CIDR
- Service CIDR
- Relevant networking parameters

Refer to the following configuration guides:

- [K3s Cluster Configuration Reference](cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md)
- [RKE2 Cluster Configuration Reference](cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md)

### Support for Windows

Kubernetes on Windows does not support single-stack IPv6-only networking.
However, it does support dual-stack IPv4/IPv6 networking for pods and nodes, with services limited to a single IP family.
For more information, see the [Kubernetes Documentation](https://kubernetes.io/docs/concepts/services-networking/dual-stack/#windows-support).

K3s does not support Windows, see [K3s FAQ](https://docs.k3s.io/faq#does-k3s-support-windows).

RKE2 does support Windows, but Windows support requires using either `Calico` or `Flannel` as the CNI.
Note that dual-stack and BGP are currently not supported in Windows installations of RKE2.
For more details, see [RKE2 Network Options](https://docs.rke2.io/networking/basic_network_options).


### Provisioning Node Driver Clusters

Rancher currently supports assigning IPv6 addresses to nodes in node driver clusters using the following infrastructure providers:

- [Amazon EC2](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md)
- [DigitalOcean](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster.md)

Support for additional providers will be introduced in future releases.

:::note Limitation for DigitalOcean Node Driver Clusters

DigitalOcean assigns an IPv4 address to every droplet and this behavior cannot be disabled.  
Due to this limitation, creating an **IPv6-only cluster** with the DigitalOcean node driver is **not supported**.

:::

#### Infrastructure Requirements

Cluster nodes must meet the requirements listed in the [Node Requirements for Rancher Managed Clusters](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md).

To configure machine pools so Rancher can provision nodes with IPv4 and/or IPv6 addresses, refer to:

- [Amazon EC2 Configuration](cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2.md)
- [DigitalOcean Configuration](cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md)

### Provisioning Custom Clusters

To provision custom clusters, follow the instructions in [Provision Kubernetes on Existing Nodes](cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md).

:::note

- The **Node Public IP** and **Node Private IP** fields accept either a single IP address or a comma-separated list (e.g. `10.0.0.5,2001:db8::1`).
- In both IPv6-only and dual-stack clusters, the node’s **IPv6 address** should be set as the **Node Private IP**.

:::

#### Infrastructure Requirements

Nodes must also meet the requirements described in the [Node Requirements for Rancher Managed Clusters](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md).

