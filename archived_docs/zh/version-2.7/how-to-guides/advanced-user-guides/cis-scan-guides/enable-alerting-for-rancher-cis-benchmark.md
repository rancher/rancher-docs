---
title: 为 Rancher CIS Benchmark 启用告警
---

你可以配置告警，从而将告警发送给定时运行的扫描。

:::note 先决条件：

为 `rancher-cis-benchmark` 启用告警之前，确保安装了 `rancher-monitoring` 应用并配置了接收器（Receiver）和路由（Route）。详情请参见[本章节](../../../reference-guides/monitoring-v2-configuration/receivers.md)。

在为 `rancher-cis-benchmark` 告警配置路由时，你可以使用键值对 `job:rancher-cis-scan` 来指定匹配。详情请查看[路由配置示例](../../../reference-guides/monitoring-v2-configuration/receivers.md#cis-扫描告警的示例路由配置)。

:::

在安装或升级 `rancher-cis-benchmark` Helm Chart 时，在 `values.yaml` 中将以下标志设置为 `true`：

```yaml
alerts:
  enabled: true
```
