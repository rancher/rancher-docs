---
title: Self-Assessment and Hardening Guides for Rancher
---

Rancher provides specific security hardening guides for each supported Rancher version's Kubernetes distributions.

## Rancher Kubernetes Distributions

Rancher uses the following Kubernetes distributions:

- [**RKE**](https://rancher.com/docs/rke/latest/en/), Rancher Kubernetes Engine, is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers.
- [**RKE2**](https://docs.rke2.io/) is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.
- [**K3s**](https://docs.k3s.io/) is a fully conformant, lightweight Kubernetes distribution. It is easy to install, with half the memory requirement of upstream Kubernetes, all in a binary of less than 100 MB.

To harden a Kubernetes cluster that's running a distribution other than those listed, refer to your Kubernetes provider docs.

## Hardening Guides and Benchmark Versions

Each self-assessment guide is accompanied by a hardening guide. These guides were tested alongside the listed Rancher releases. Each self-assessment guides was tested on a specific Kubernetes version and CIS benchmark version. If a CIS benchmark has not been validated for your Kubernetes version, you can use the existing guides until a guide for your version is added.

### RKE Guides

| Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guides |
|--------------------|-----------------------|-----------------------|------------------|
| Kubernetes v1.23 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md) | [Link](rke1-hardening-guide.md) |
| Kubernetes v1.24 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.24.md) | [Link](rke1-hardening-guide.md) |
| Kubernetes v1.25 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.7-k8s-v1.25.md) | [Link](rke1-hardening-guide.md) |

### RKE2 Guides

| Type | Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guides |
|------|--------------------|-----------------------|-----------------------|------------------|
| Rancher provisioned RKE2 | Kubernetes v1.23 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md) | [Link](rke2-hardening-guide.md) |
| Rancher provisioned RKE2 | Kubernetes v1.24 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.24.md) | [Link](rke2-hardening-guide.md) |
| Rancher provisioned RKE2 | Kubernetes v1.25 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.7-k8s-v1.25.md) | [Link](rke2-hardening-guide.md) |
| Standalone RKE2 | Kubernetes v1.25 | CIS v1.23 | [Link](https://docs.rke2.io/security/cis_self_assessment123) | [Link](https://docs.rke2.io/security/hardening_guide) |

### K3s Guides

| Type | Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guides |
|------|--------------------|-----------------------|-----------------------|------------------|
| Rancher provisioned K3s cluster | Kubernetes v1.23 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md) | [Link](k3s-hardening-guide.md) |
| Rancher provisioned K3s cluster | Kubernetes v1.24 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.24.md) | [Link](k3s-hardening-guide.md) |
| Rancher provisioned K3s cluster | Kubernetes v1.25 | CIS v1.23 | [Link](../reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.7-k8s-v1.25.md) | [Link](k3s-hardening-guide.md) |
| Standalone K3s | Kubernetes v1.22 up to v1.24 | CIS v1.23 | [Link](https://docs.k3s.io/security/self-assessment) | [Link](https://docs.k3s.io/security/hardening-guide) |

## Rancher with SELinux

[Security-Enhanced Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) is a kernel module that adds extra access controls and security tools to Linux. Historically used by government agencies, SELinux is now industry-standard. SELinux is enabled by default on RHEL and CentOS.

To use Rancher with SELinux, we recommend [installing](../reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md) the `rancher-selinux` RPM.

