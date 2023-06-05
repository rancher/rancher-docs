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

CIS Benchmark 4.0.0 及更高版本默认禁用 PSP。要在加固集群上安装 CIS Benchmark，在安装 Chart 之前将 values 中的 `golbal.psp.enabled` 设置为 `true`。

:::