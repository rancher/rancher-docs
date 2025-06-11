---
title: Rancher v2.6 的自我评估和强化指南
---

Rancher 为每个受支持的 Rancher 的 Kubernetes 发行版提供了特定的安全强化指南。

## Rancher Kubernetes 发行版

Rancher 使用以下 Kubernetes 发行版：

- [**RKE**](https://rancher.com/docs/rke/latest/en/), Rancher Kubernetes Engine 是一个经过 CNCF 认证的 Kubernetes 发行版，完全在 Docker 容器中运行。
- [**RKE2**](https://docs.rke2.io/) 是一个完全符合的 Kubernetes 发行版，专注于安全性和合规性。
- [**K3s**](https://rancher.com/docs/k3s/latest/en/) 是一个完全合规的，轻量级 Kubernetes 发行版。它易于安装，内存需求只有上游 Kubernetes 的一半，所有组件都在一个小于 100 MB 的二进制文件中。

要加固运行未列出的发行版的 Kubernetes 集群，请参阅 Kubernetes 提供商文档。

## 强化指南和 Benchmark 版本

这些指南已经与 Rancher v2.6 版本一起进行了测试。每个自我评估指南都附有强化指南，并在特定的 Kubernetes 版本和 CIS 基准版本上进行了测试。如果 CIS 基准尚未针对你的 Kubernetes 版本进行验证，你可以选择使用现有指南，直到添加更新版本。

### RKE 指南

| Kubernetes 版本           | CIS Benchmark 版本 | 自我评估指南                                                  | 强化指南                                                |
| ------------------------- | ------------------ | ------------------------------------------------------------- | ------------------------------------------------------- |
| Kubernetes v1.18 至 v1.23 | CIS v1.6           | [链接](rke1-self-assessment-guide-with-cis-v1.6-benchmark.md) | [链接](rke1-hardening-guide-with-cis-v1.6-benchmark.md) |

:::note

- Kubernetes v1.19 和 v1.20 的 CIS v1.20 Benchmark 测试版本尚未作为 Rancher 的 CIS Benchmark chart 中的配置文件发布。

:::

### RKE2 指南

| 类型                             | Kubernetes 版本           | CIS Benchmark 版本 | 自我评估指南                                                  | 强化指南                                                |
| -------------------------------- | ------------------------- | ------------------ | ------------------------------------------------------------- | ------------------------------------------------------- |
| Rancher provisioned RKE2 cluster | Kubernetes v1.21 至 v1.23 | CIS v1.6           | [链接](rke2-self-assessment-guide-with-cis-v1.6-benchmark.md) | [链接](rke2-hardening-guide-with-cis-v1.6-benchmark.md) |
| Standalone RKE2                  | Kubernetes v1.21 至 v1.23 | CIS v1.6           | [链接](https://docs.rke2.io/security/cis_self_assessment16)   | [链接](https://docs.rke2.io/security/hardening_guide)   |

### K3s 指南

| Kubernetes 版本           | CIS Benchmark 版本 | 自我评估指南                                                             | 强化指南                                                                 |
| ------------------------- | ------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Kubernetes v1.21 和 v1.22 | CIS v1.6           | [链接](https://rancher.com/docs/k3s/latest/en/security/self_assessment/) | [链接](https://rancher.com/docs/k3s/latest/en/security/hardening_guide/) |

## 在 SELinux 上使用 Rancher

[Security-Enhanced Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) 是对 Linux 的安全性增强。SELinux 在历史上被政府机构使用后，现在是行业标准，并且在 RHEL 和 CentOS 上默认启用。

要将 Rancher 与 SELinux 结合使用，我们建议按照[此页面](../selinux-rpm/about-rancher-selinux.md#installing-the-rancher-selinux-rpm)上的说明安装 `rancher-selinux`。
