---
title: Rancher 自我评估和加固指南
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/hardening-guides"/>
</head>

Rancher 为每个受支持的 Rancher 版本的 Kubernetes 发行版提供了特定的安全强化指南。

## Rancher Kubernetes 发行版

Rancher 使用以下 Kubernetes 发行版：

- [**RKE**](https://rancher.com/docs/rke/latest/en/)（Rancher Kubernetes Engine）是经过 CNCF 认证的 Kubernetes 发行版，完全在 Docker 容器中运行。
- [**RKE2**](https://docs.rke2.io/) 是一个完全合规的 Kubernetes 发行版，专注于安全和合规性。
- [**K3s**](https://docs.k3s.io/) 是一个完全合规的，轻量级 Kubernetes 发行版。它易于安装，内存需求只有上游 Kubernetes 的一半，所有组件都在一个小于 100 MB 的二进制文件中。

要加固运行未列出的发行版的 Kubernetes 集群，请参阅 Kubernetes 提供商文档。

## 加固指南和 Benchmark 版本

每个自我评估指南都附有强化指南。这些指南与列出的 Rancher 版本一起进行了测试。每个自我评估指南都在特定的 Kubernetes 版本和 CIS Benchmark 版本上进行了测试。如果 CIS Benchmark 尚未针对你的 Kubernetes 版本进行验证，你可以使用现有指南，直到添加适合你的版本的指南。

### RKE 指南

| Kubernetes 版本 | CIS Benchmark 版本 | 自我评估指南 | 加固指南 |
|--------------------|-----------------------|-----------------------|------------------|
| Kubernetes v1.23 | CIS v1.23 | [链接](rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md) | [链接](rke1-hardening-guide/rke1-hardening-guide.md) |
| Kubernetes v1.24 | CIS v1.24 | [链接](rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.24-k8s-v1.24.md) | [链接](rke1-hardening-guide/rke1-hardening-guide.md) |
| Kubernetes v1.25/v1.26/v1.27 | CIS v1.7 | [链接](rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27.md) | [链接](rke1-hardening-guide/rke1-hardening-guide.md) |

### RKE2 指南

| 类型 | Kubernetes 版本 | CIS Benchmark 版本 | 自我评估指南 | 加固指南 |
|------|--------------------|-----------------------|-----------------------|------------------|
| Rancher provisioned RKE2 | Kubernetes v1.23 | CIS v1.23 | [链接](rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md) | [链接](rke2-hardening-guide/rke2-hardening-guide.md) |
| Rancher provisioned RKE2 | Kubernetes v1.24 | CIS v1.24 | [链接](rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.24-k8s-v1.24.md) | [链接](rke2-hardening-guide/rke2-hardening-guide.md) |
| Rancher provisioned RKE2 | Kubernetes v1.25/v1.26/v1.27 | CIS v1.7 | [链接](rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27.md) | [链接](rke2-hardening-guide/rke2-hardening-guide.md) |
| Standalone RKE2 | Kubernetes v1.25/v1.26/v1.27 | CIS v1.7 | [链接](https://docs.rke2.io/security/cis_self_assessment123) | [链接](https://docs.rke2.io/security/hardening_guide) |

### K3s 指南

| 类型 | Kubernetes 版本 | CIS Benchmark 版本 | 自我评估指南 | 加固指南 |
|------|--------------------|-----------------------|-----------------------|------------------|
| Rancher provisioned K3s cluster | Kubernetes v1.23 | CIS v1.23 | [链接](k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md) | [链接](k3s-hardening-guide/k3s-hardening-guide.md) |
| Rancher provisioned K3s cluster | Kubernetes v1.24 | CIS v1.24 | [链接](k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.24-k8s-v1.24.md) | [链接](k3s-hardening-guide/k3s-hardening-guide.md) |
| Rancher provisioned K3s cluster | Kubernetes v1.25/v1.26/v1.27 | CIS v1.7 | [链接](k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27.md) | [链接](k3s-hardening-guide/k3s-hardening-guide.md) |
| Standalone K3s | Kubernetes v1.22 up to v1.24 | CIS v1.23 | [链接](https://docs.k3s.io/security/self-assessment) | [链接](https://docs.k3s.io/security/hardening-guide) |

## 在 SELinux 上使用 Rancher

[Security-Enhanced Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) 是一个内核模块，为 Linux 添加了额外的访问控制和安全工具。SELinux 过去曾被政府机构使用，现在已成为行业标准。SELinux 在 RHEL 和 CentOS 上默认启用。

要将 Rancher 与 SELinux 结合使用，我们建议[安装](../selinux-rpm/about-rancher-selinux.md) `rancher-selinux`。
