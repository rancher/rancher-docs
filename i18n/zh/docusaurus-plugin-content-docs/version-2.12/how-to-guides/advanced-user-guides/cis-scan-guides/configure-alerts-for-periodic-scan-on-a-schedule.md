---
title: 为定时扫描配置告警
---

你可以定时运行 ClusterScan。

你还可以为定时扫描指定是否在扫描完成时发出告警。

只有定时运行的扫描才支持告警。

CIS Benchmark 应用支持两种类型的告警：

- 扫描完成告警：此告警在扫描运行完成时发出。告警包括详细信息，包括 ClusterScan 的名称和 ClusterScanProfile 的名称。
- 扫描失败告警：如果扫描中有一些测试失败或扫描处于 `Fail` 状态，则会发出此告警。

:::note 先决条件：

为 `rancher-cis-benchmark` 启用告警之前，确保安装了 `rancher-monitoring` 应用并配置了接收器（Receiver）和路由（Route）。详情请参见[本章节](../../../reference-guides/monitoring-v2-configuration/receivers.md)。

在为 `rancher-cis-benchmark` 告警配置路由时，你可以使用键值对 `job:rancher-cis-scan` 来指定匹配。详情请查看[路由配置示例](../../../reference-guides/monitoring-v2-configuration/receivers.md#cis-扫描告警的示例路由配置)。

:::

要为定时运行的扫描配置告警：

1. 请在 `rancher-cis-benchmark` 应用程序上启用告警。详情请参见[本页](../../../how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark.md)。
1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要运行 CIS 扫描的集群，然后单击 **Explore**。
1. 点击 **CIS Benchmark > 扫描**。
1. 单击**创建**。
1. 选择集群扫描配置文件。该配置文件确定要使用哪个 CIS Benchmark 版本以及要执行哪些测试。如果你选择 Default 配置文件，则 CIS Operator 将选择适用于它所在的 Kubernetes 集群类型的配置文件。
1. 选择**定时运行扫描**的选项。
1. 在**调度**字段中输入有效的 [Cron 表达式](https://en.wikipedia.org/wiki/Cron#CRON_expression)。
1. 选中**告警**下告警类型旁边的框。
1. （可选）选择一个**保留计数**，表示为这个定时扫描维护的报告数量。默认情况下，此计数为 3。超过此保留限制时，旧报告将被删除。
1. 单击**创建**。

**结果**：扫描运行，并根据设置的 cron 表达式重新调度。如果在 `rancher-monitoring` 应用下配置了路由和接收器，则会在扫描完成时发出告警。

每次运行扫描都会生成一份带有扫描结果的报告。如需查看最新的结果，请单击显示的扫描名称。