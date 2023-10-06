---
title: 安装 Rancher CIS Benchmark
---

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要安装 CIS Benchmark 的集群，然后单击 **Explore**。
1. 在左侧导航栏中，单击 **Apps > Charts**。
1. 单击 **CIS Benchmark**。
1. 单击**安装**。

**结果**：CIS 扫描应用已经部署在 Kubernetes 集群上。

:::note

如果你使用 Kubernetes v1.24 或更早版本，并且具有使用 [Pod 安全策略](../../new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md) (PSP) 加固的集群，则 CIS Benchmark 4.0.0 及更高版本会默认禁用 PSP。要在 PSP 加固集群上安装 CIS Benchmark，请在安装 Chart 之前将 values 中的 `global.psp.enabled` 设置为 `true`。[Pod 安全准入](../../new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md) (PSA) 加固集群不受影响。

:::
