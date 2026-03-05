---
title: Rancher Security Guides
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security"/>
</head>

<table width="100%">
<tr style={{verticalAlign: 'top'}}>
<td width="30%" style={{border: 'none'}}>
<h4>Security policy</h4>
<p style={{padding: '8px'}}>Rancher Labs supports responsible disclosure, and endeavours to resolve all issues in a reasonable time frame. </p>
</td>
<td width="30%" style={{border: 'none'}}>
<h4>Reporting process</h4>
<p style={{padding: '8px'}}>Please submit possible security issues by emailing <a href="mailto:security-rancher@suse.com">security-rancher@suse.com</a> .</p>
</td>
<td width="30%" style={{border: 'none'}}>
<h4>Announcements</h4>
<p style={{padding:'8px'}}>Subscribe to the <a href="https://forums.rancher.com/c/announcements">Rancher announcements forum</a> for release updates.</p>
</td>
</tr>
</table>

Security is at the heart of all Rancher features. From integrating with all the popular authentication tools and services, to an enterprise grade [RBAC capability](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md), Rancher makes your Kubernetes clusters even more secure.

On this page, we provide security related documentation along with resources to help you secure your Rancher installation and your downstream Kubernetes clusters.

## NeuVector Integration with Rancher

NeuVector is an open-source, container-focused security application that is now integrated into Rancher. NeuVector provides production security, DevOps vulnerability protection, and a container firewall, et al. Please see the [Rancher docs](../../integrations-in-rancher/neuvector/neuvector.md) and the [NeuVector docs](https://open-docs.neuvector.com/) for more information.

## Running a Compliance Security Scan on a Kubernetes Cluster

Rancher leverages [kube-bench](https://github.com/aquasecurity/kube-bench) to run a security scan to check whether Kubernetes is deployed according to security best practices.

When Rancher runs a Compliance scan on a cluster, it generates a report showing the results of each test, including a summary with the number of passed, skipped and failed tests. The report also includes remediation steps for any failed tests.

For details, refer to the section on [security scans](../../how-to-guides/advanced-user-guides/compliance-scan-guides/compliance-scan-guides.md).
`
## SELinux RPM

We provide three RPMs (RPM Package Manager) that enable Rancher products to function properly on SELinux-enforcing hosts: `rancher-selinux`, `rke2-selinux` and `k3s-selinux`. For details, see [this page](selinux-rpm/selinux-rpm.md).

## Rancher Hardening Guide

The Rancher Hardening Guide is based on controls and best practices found in the <a href="https://www.cisecurity.org/benchmark/kubernetes/" target="_blank">CIS Kubernetes Benchmark</a> from the Center for Internet Security.

The hardening guides provide prescriptive guidance for hardening a production installation of Rancher. See Rancher's guides for [Self Assessment of the CIS Kubernetes Benchmark](#the-cis-benchmark-and-self-assessment) for the full list of security controls.

> The hardening guides describe how to secure the nodes in your cluster, and it is recommended to follow a hardening guide before installing Kubernetes.

Each version of the hardening guide is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher.

## The CIS Benchmark and Self-Assessment

The benchmark self-assessment is a companion to the Rancher security hardening guide. While the hardening guide shows you how to harden the cluster, the benchmark guide is meant to help you evaluate the level of security of the hardened cluster.

This guide walks through the various controls and provide updated example commands to audit compliance in Rancher created clusters. The original benchmark documents can be downloaded from the [CIS website](https://www.cisecurity.org/benchmark/kubernetes/).

Each version of Rancher's self-assessment guide corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark.

## Third-party Penetration Test Reports

Rancher periodically hires third parties to perform security audits and penetration tests of the Rancher software stack. The environments under test follow the Rancher provided hardening guides at the time of the testing. Previous penetration test reports are available below.

Results:

- [Cure53 Pen Test - July 2019](https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf)
- [Untamed Theory Pen Test - March 2019](https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf)

Please note that new reports are no longer shared or made publicly available.

## Rancher Security Advisories and CVEs

Rancher is committed to informing the community of security issues in our products. For the list of CVEs (Common Vulnerabilities and Exposures) for issues we have resolved, refer to [this page.](security-advisories-and-cves.md)

## Kubernetes Security Best Practices

For recommendations on securing your Kubernetes cluster, refer to the [Kubernetes Cluster Security Best Practices](https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/) guide.

## Rancher Security Best Practices

For recommendations on securing your Rancher Manager deployments, refer to the [Rancher Security Best Practices](rancher-security-best-practices.md) guide.

## Rancher Kubernetes Distributions (K3s/RKE2) Self-Assessment and Hardening Guides

Rancher uses the following Kubernetes distributions:

- [**RKE2**](https://docs.rke2.io/) is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.
- [**K3s**](https://docs.k3s.io/) is a fully conformant, lightweight Kubernetes distribution. It is easy to install, with half the memory requirement of upstream Kubernetes, all in a binary of less than 100 MB.

To harden a Kubernetes cluster that's running a distribution other than those listed, refer to your Kubernetes provider's docs.

### Hardening Guides and Benchmark Versions

Each self-assessment guide is accompanied by a hardening guide. These guides were tested alongside the listed Rancher releases. Each self-assessment guide was tested on a specific Kubernetes version and CIS benchmark version. If a CIS benchmark has not been validated for your Kubernetes version, you can use the existing guides until a guide for your version is added.

### RKE2 Guides

| Type | Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guide |
|------|--------------------|-----------------------|-----------------------|------------------|
| Standalone RKE2 | Kubernetes v1.26 | CIS v1.8 | [Link](https://docs.rke2.io/security/cis_self_assessment18) | [Link](https://docs.rke2.io/security/hardening_guide) |
| Standalone RKE2 | Kubernetes v1.27 | CIS v1.9 | [Link](https://docs.rke2.io/security/cis_self_assessment19) | [Link](https://docs.rke2.io/security/hardening_guide) |
| Standalone RKE2 | Kubernetes v1.28 | CIS v1.10 | [Link](https://docs.rke2.io/security/cis_self_assessment110) | [Link](https://docs.rke2.io/security/hardening_guide) |
| Standalone RKE2 | Kubernetes v1.29 and above | CIS v1.11 | [Link](https://docs.rke2.io/security/cis_self_assessment111) | [Link](https://docs.rke2.io/security/hardening_guide) |

### K3s Guides

| Type | Kubernetes Version | CIS Benchmark Version | Self Assessment Guide | Hardening Guide |
|------|--------------------|-----------------------|-----------------------|------------------|
| Standalone K3s | Kubernetes v1.26 | CIS v1.8 | [Link](https://docs.k3s.io/security/self-assessment-1.8) | [Link](https://docs.k3s.io/security/hardening-guide) |
| Standalone K3s | Kubernetes v1.27 | CIS v1.9 | [Link](https://docs.k3s.io/security/self-assessment-1.9) | [Link](https://docs.k3s.io/security/hardening-guide) |
| Standalone K3s | Kubernetes v1.28 | CIS v1.10 | [Link](https://docs.k3s.io/security/self-assessment-1.10) | [Link](https://docs.k3s.io/security/hardening-guide) |
| Standalone K3s | Kubernetes v1.29 and above | CIS v1.11 | [Link](https://docs.k3s.io/security/self-assessment-1.11) | [Link](https://docs.k3s.io/security/hardening-guide) |
