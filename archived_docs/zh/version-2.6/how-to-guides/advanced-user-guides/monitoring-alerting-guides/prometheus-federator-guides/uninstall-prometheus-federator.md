---
title: 卸载 Prometheus Federator
---

<Tabs>
<TabItem value="Rancher v2.6.5+">

1. 点击 **☰ > 集群管理**。
1. 选择你创建的集群，并点击 **Explore**。
1. 在左侧导航栏中，点击 **Apps**。
1. 点击**已安装的应用**。
1. 转到 `cattle-monitoring-system` 命名空间并选中 `rancher-monitoring-crd` 和 `rancher-monitoring`。
1. 单击**删除**。
1. 确认**删除**。

</TabItem>
<TabItem value="Rancher 版本低于 v2.6.5">

1. 点击 **☰ > 集群管理**。
1. 选择你创建的集群，并点击 **Explore**。
1. 在左侧导航栏中，点击**应用 & 应用市场**。
1. 点击**已安装的应用**。
1. 转到 `cattle-monitoring-system` 命名空间并选中 `rancher-monitoring-crd` 和 `rancher-monitoring`。
1. 单击**删除**。
1. 确认**删除**。

</TabItem>
</Tabs>

**结果**：已卸载 `prometheus-federator`。
