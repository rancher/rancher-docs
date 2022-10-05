---
title: Self-Assessment and Hardening Guides for Rancher v2.7
---

Rancher provides specific security hardening guides for each supported Rancher's Kubernetes distributions.


## Rancher Kubernetes Distributions

Rancher uses the following Kubernetes distributions:

- [**RKE**](https://rancher.com/docs/rke/latest/en/), Rancher Kubernetes Engine, is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers.
- [**RKE2**](https://docs.rke2.io/) is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.
- [**K3s**](https://rancher.com/docs/k3s/latest/en/) is a fully conformant, lightweight Kubernetes distribution. It is easy to install, with half the memory of upstream Kubernetes, all in a binary of less than 100 MB.

To harden a Kubernetes cluster outside of Rancher's distributions, refer to your Kubernetes provider docs.

## Hardening Guides and Benchmark Versions

These guides have been tested along with the Rancher v2.7 release. Each self-assessment guide is accompanied with a hardening guide and tested on a specific Kubernetes version and CIS benchmark version. If a CIS benchmark has not been validated for your Kubernetes version, you can choose to use the existing guides until a newer version is added.

### RKE Guides

| Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guides |
| ------------------ | --------------------- | --------------------- | ---------------- |
| Kubernetes v1.18 up to v1.23 | CIS v1.6 | [Link](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-self-assessment-guide-with-cis-v1.6-benchmark.md) | [Link](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-hardening-guide-with-cis-v1.6-benchmark.md) |

:::note

- CIS v1.20 benchmark version for Kubernetes v1.19 and v1.20 is not yet released as a profile in Rancher's CIS Benchmark chart.

:::

### RKE2 Guides

| Type | Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guides |
| ---- | ------------------ | --------------------- | --------------------- | ---------------- |
| Rancher provisioned RKE2 cluster |  Kubernetes v1.21 up to v1.23 | CIS v1.6 | [Link](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark.md) | [Link](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark.md) |
| Standalone RKE2 | Kubernetes v1.21 up to v1.23 | CIS v1.6 | [Link](https://docs.rke2.io/security/cis_self_assessment16/) | [Link](https://docs.rke2.io/security/hardening_guide/) |

### K3s Guides

| Type | Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guides |
| ---- | ------------------ | --------------------- | --------------------- | ---------------- |
| Rancher provisioned K3s cluster | Kubernetes v1.21 up to v1.24 | CIS v1.20 and v1.23 | [CIS v1.20](../reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.20-benchmark.md) and [CIS v1.23](../reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.23-benchmark.md) | [Link](../reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark.md) |
| Standalone K3s | Kubernetes v1.21 and v1.22 | CIS v1.6 | [Link](https://docs.k3s.io/security/self-assessment) | [Link](https://docs.k3s.io/security/hardening-guide) |

## Rancher with SELinux

[Security-Enhanced Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on RHEL and CentOS.

To use Rancher with SELinux, we recommend installing the `rancher-selinux` RPM according to the instructions on [this page.](selinux-rpm.md#installing-the-rancher-selinux-rpm)
