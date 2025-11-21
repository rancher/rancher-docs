---
title: IPv4/IPv6 Dual-stack
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/dual-stack/"/>
</head>

Kubernetes supports IPv4-only, IPv6-only, and dual-stack networking configurations.
For more details, refer to the official [Kubernetes documentation](https://kubernetes.io/docs/concepts/services-networking/dual-stack/).

## Installing Rancher on IPv6-Only or Dual-Stack Clusters

Rancher can run on clusters using:

- IPv4-only
- IPv6-only
- Dual-stack (IPv4 + IPv6)

When you install Rancher on an **IPv6-only cluster**, it can communicate externally **only over IPv6**. This means it can provision:

- IPv6-only clusters
- Dual-stack clusters  
  _(IPv4-only downstream clusters are not possible in this case)_

When you install Rancher on a **dual-stack cluster**, it can communicate over both IPv4 and IPv6, and can therefore provision:

- IPv4-only clusters
- IPv6-only clusters
- Dual-stack clusters

For installation steps, see the guide: **[Installing and Upgrading Rancher](../getting-started/installation-and-upgrade/installation-and-upgrade.md)**.

### Requirement for the Rancher Server URL

When provisioning IPv6-only downstream clusters, the **Rancher Server URL must be reachable over IPv6** because downstream nodes connect back to the Rancher server using IPv6.

## Provisioning IPv6-Only or Dual-Stack Clusters

You can provision RKE2 and K3s **Node driver** (machine pools) or **Custom cluster** (existing hosts) clusters using IPv4-only, IPv6-only, or dual-stack networking.

### Network Configuration

To enable IPv6-only or dual-stack networking, you must configure:

- Cluster CIDR
- Service CIDR
- Stack Preference

Configuration references:

- [K3s Cluster Configuration Reference](cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md)
- [RKE2 Cluster Configuration Reference](cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md)

### Support for Windows

Kubernetes on Windows:

| Feature             | Support Status                |
|---------------------|-------------------------------|
| IPv6-only clusters  | Not supported                 |
| Dual-stack clusters | Supported                     |
| Services            | Limited to a single IP family |

For more information, see the [Kubernetes Documentation](https://kubernetes.io/docs/concepts/services-networking/dual-stack/#windows-support).

K3s does **not** support Windows ([FAQ](https://docs.k3s.io/faq#does-k3s-support-windows))

RKE2 supports Windows, but requires using either `Calico` or `Flannel` as the CNI.  
Note that Windows installations of RKE2 do not support dual-stack clusters using BGP.
For more details, see [RKE2 Network Options](https://docs.rke2.io/networking/basic_network_options).


### Provisioning Node Driver Clusters

Rancher currently supports assigning IPv6 addresses in **node driver** clusters with:

- [Amazon EC2](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md)
- [DigitalOcean](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster.md)

Support for additional providers will be introduced in future releases.

:::note DigitalOcean Limitation

Creating an **IPv6-only cluster** using the DigitalOcean node driver is currently **not supported**.
For more details, please see [rancher/rancher#52523](https://github.com/rancher/rancher/issues/52523#issuecomment-3457803572).

:::

#### Infrastructure Requirements

Cluster nodes must meet the requirements listed in the [Node Requirements for Rancher Managed Clusters](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md).

Machine pool configuration guides:

- [Amazon EC2 Configuration](cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2.md)
- [DigitalOcean Configuration](cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md)

### Provisioning Custom Clusters

To provision on your own nodes, follow the instructions in [Provision Kubernetes on Existing Nodes](cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md).

:::note

- **Node Public IP** and **Node Private IP** fields accept IPv4, IPv6, or both (comma-separated).  
    >   Example: `10.0.0.5,2001:db8::1`
- In **IPv6-only** and **dual-stack** clusters, specify the node’s **IPv6 address** as the **Private IP**.

:::

#### Infrastructure Requirements

Infrastructure requirements are the same as above for node-driver clusters.

## Other Limitations

### GitHub.com

GitHub.com does **not** support IPv6. As a result:

- Any application repositories ( `ClusterRepo.catalog.cattle.io/v1` CR) hosted on GitHub.com will **not be reachable** from IPv6-only clusters.
- Similarly, any **non-builtin node drivers** hosted on GitHub.com will also **not be accessible** in IPv6-only environments.
