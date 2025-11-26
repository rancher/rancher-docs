---
title: Rancher 2.6 的自我评估和强化指南
---

Rancher 为每个受支持的 Rancher Kubernetes 发行版提供了对应的安全强化指南。


## Rancher Kubernetes 发行版

Rancher 使用以下 Kubernetes 发行版：

- [**RKE**](https://rancher.com/docs/rke/latest/en/)：全称是 Rancher Kubernetes Engine，一个 CNCF 认证的 Kubernetes 发行版，能完全在 Docker 容器中运行。
- [**RKE2**](https://docs.rke2.io/)：一个完全合规的 Kubernetes 发行版，专注于安全和合规性。
- [**K3s**](https://rancher.com/docs/k3s/latest/en/)：一个完全符合要求的轻量级 Kubernetes 发行版。它易于安装，仅需要上游 Kubernetes 内存的一半，所有组件都在一个小于 100 MB 的二进制文件中。

要在 Rancher 发行版之外强化 Kubernetes 集群，请参阅你的 Kubernetes 提供商文档。

## 强化指南和 Benchmark 版本

这些指南已与 Rancher 2.6 版本一起测试。每个自我评估指南都附有强化指南，并在特定的 Kubernetes 版本和 CIS Benchmark 版本上进行了测试。如果 CIS Benchmark 测试尚未针对你的 Kubernetes 版本进行验证，你可以先使用现有指南。

### RKE 指南

| Kubernetes 版本 | CIS Benchmark 版本 | 自我评估指南 | 强化指南 |
| ------------------ | --------------------- | --------------------- | ---------------- |
| Kubernetes v1.18 到 v1.23 | CIS v1.6 | [链接](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-self-assessment-guide-with-cis-v1.6-benchmark.md) | [链接](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-hardening-guide-with-cis-v1.6-benchmark.md) |

:::note

- Kubernetes v1.19 和 v1.20 的 CIS v1.20 Benchmark 版本尚未作为配置文件发布在 Rancher 的 CIS Benchmark Chart 中。

:::

### RKE2 指南

| 类型 | Kubernetes 版本 | CIS Benchmark 版本 | 自我评估指南 | 强化指南 |
| ---- | ------------------ | --------------------- | --------------------- | ---------------- |
| Rancher 配置的 RKE2 集群 | Kubernetes v1.21 到 v1.23 | CIS v1.6 | [链接](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark.md) | [链接](../reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark.md) |
| 独立 RKE2 | Kubernetes v1.21 到 v1.23 | CIS v1.6 | [链接](https://docs.rke2.io/security/cis_self_assessment16/) | [链接](https://docs.rke2.io/security/hardening_guide/) |

### K3s 指南

| Kubernetes 版本 | CIS Benchmark 版本 | 自我评估指南 | 强化指南 |
| ------------------ | --------------------- | --------------------- | ---------------- |
| Kubernetes v1.21 和 v1.22 | CIS v1.6 | [链接](https://rancher.com/docs/k3s/latest/en/security/self_assessment/) | [链接](https://rancher.com/docs/k3s/latest/en/security/hardening_guide/) |

## 使用 SELinux 的 Rancher

[安全增强型 Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) 是对 Linux 的安全增强。被政府机构使用之后，SELinux 已成为行业标准，并在 RHEL 和 CentOS 上默认启用。

要配合使用 Rancher 与 SELinux，我们建议你根据[此页面](../reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md#安装-rancher-selinux-rpm)的安装说明安装 `rancher-selinux` RPM。
