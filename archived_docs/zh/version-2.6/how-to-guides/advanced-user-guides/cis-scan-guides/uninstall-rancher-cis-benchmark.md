---
title: 卸载 Rancher CIS Benchmark
---

<Tabs>
<TabItem value="Rancher v2.6.5+">

1. 在**集群**仪表板中，单击左侧导航的 **Apps > Installed Apps**。
1. 前往 `cis-operator-system` 命名空间，并选中 `rancher-cis-benchmark-crd` 和 `rancher-cis-benchmark` 旁边的框。
1. 单击**删除**并确认**删除**。

</TabItem>
<TabItem value="Rancher 版本低于 v2.6.5">

1. 在**集群**仪表板中，单击左侧导航的**应用 & 应用市场 > 已安装的应用**。
1. 前往 `cis-operator-system` 命名空间，并选中 `rancher-cis-benchmark-crd` 和 `rancher-cis-benchmark` 旁边的框。
1. 单击**删除**并确认**删除**。

</TabItem>
</Tabs>

**结果**：已卸载 `rancher-cis-benchmark` 应用。