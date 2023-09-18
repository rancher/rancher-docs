---
title: Uninstall Rancher CIS Benchmark
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark"/>
</head>

<Tabs>
<TabItem value="Rancher v2.6.5+">

1. From the **Cluster Dashboard,** go to the left navigation bar and click **Apps > Installed Apps**.
1. Go to the `cis-operator-system` namespace and check the boxes next to `rancher-cis-benchmark-crd` and `rancher-cis-benchmark`.
1. Click **Delete** and confirm **Delete**.

</TabItem>
<TabItem value="Rancher before v2.6.5">

1. From the **Cluster Dashboard,** go to the left navigation bar and click **Apps & Marketplace > Installed Apps**.
1. Go to the `cis-operator-system` namespace and check the boxes next to `rancher-cis-benchmark-crd` and `rancher-cis-benchmark`.
1. Click **Delete** and confirm **Delete**.

</TabItem>
</Tabs>

**Result:** The `rancher-cis-benchmark` application is uninstalled.