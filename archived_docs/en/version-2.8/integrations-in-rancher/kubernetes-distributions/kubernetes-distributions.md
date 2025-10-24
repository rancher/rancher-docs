---
title: Kubernetes Distributions
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/kubernetes-distributions"/>
</head>

## K3s

K3s is a lightweight, fully compliant Kubernetes distribution designed for a range of use cases, including edge computing, IoT, CI/CD, development and embedding Kubernetes into applications. It simplifies Kubernetes management by packaging the system as a single binary, using sqlite3 as the default storage, and offering a user-friendly launcher. K3s includes essential features like local storage and load balancing, Helm chart controller and the Traefik CNI. It minimizes external dependencies and provides a streamlined Kubernetes experience. K3s was donated to the CNCF as a Sandbox Project in June 2020.

### K3s with Rancher

- Rancher allows easy provision of K3s across a range of platforms including Amazon EC2, DigitalOcean, Azure, vSphere, or existing servers.
- Standard Rancher management of Kubernetes clusters including all outlined [cluster management capabilities](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md#cluster-management-capabilities-by-cluster-type).


## RKE2

RKE2 is a compliant Kubernetes distribution developed by Rancher. It is specifically designed for security and compliance within the U.S. Federal Government sector.

Primary characteristics of RKE2 include:

1. **Security and Compliance Focus**: RKE2 places a strong emphasis on security and compliance, operating under a "secure by default" framework, making it suitable for government services and highly regulated industries like finance and healthcare.
1. **CIS Kubernetes Benchmark Conformance**: RKE2 comes pre-configured to meet the CIS Kubernetes Hardening Benchmark (currently supporting v1.23 and v1.7), with minimal manual intervention required.
1. **FIPS 140-2 Compliance**: RKE2 complies with the FIPS 140-2 standard using FIPS-validated crypto modules for its components.
1. **Embedded etcd**: RKE2 defaults to using an embedded etcd as its data store. This aligns it more closely with standard Kubernetes practices, allowing better integration with other Kubernetes tools and reducing the risk of misconfiguration.
1. **Alignment with Upstream Kubernetes**: RKE2 aims to stay closely aligned with upstream Kubernetes, reducing the risk of non-conformance that may occur when using distributions that deviate from standard Kubernetes practices.
1. **Multiple CNI Support**: RKE2 offers support for multiple Container Network Interface (CNI) plugins, including Cilium, Calico, and Multus. This is essential for use cases such as telco distribution centers and factories with various production facilities.

## RKE2 with Rancher

- Rancher allows easy provision of RKE2 across a range of platforms including Amazon EC2, DigitalOcean, Azure, vSphere, or existing servers.
- Standard Rancher management of Kubernetes clusters including all outlined [cluster management capabilities](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md#cluster-management-capabilities-by-cluster-type).
