---
title: 运行扫描
---

创建 ClusterScan 自定义资源后，它会在集群上为所选 ClusterScanProfile 启动新的 CIS 扫描。

:::note

请注意，目前一个集群每次只能运行一次 CIS 扫描。如果你创建了多个 ClusterScan 自定义资源，operator 只能一个接一个地运行这些资源。一个扫描完成之前，其余 ClusterScan 自定义资源将处于 “Pending” 状态。

:::

要运行扫描：

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要运行 CIS 扫描的集群，然后单击 **Explore**。
1. 点击 **CIS Benchmark > 扫描**。
1. 单击**创建**。
1. 选择集群扫描配置文件。该配置文件确定要使用哪个 CIS Benchmark 版本以及要执行哪些测试。如果你选择 Default 配置文件，则 CIS Operator 将选择适用于它所在的 Kubernetes 集群类型的配置文件。
1. 单击**创建**。

**结果**：已生成带有扫描结果的报告。如需查看结果，请单击显示的扫描名称。