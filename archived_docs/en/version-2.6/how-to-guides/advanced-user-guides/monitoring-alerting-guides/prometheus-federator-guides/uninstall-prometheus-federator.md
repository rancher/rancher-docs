---
title: Uninstall Prometheus Federator
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/uninstall-prometheus-federator"/>
</head>

<Tabs>
<TabItem value="Rancher v2.6.5+">

1. Click **☰ > Cluster Management**.
1. Go to the cluster that you created and click **Explore**.
1. In the left navigation bar, click **Apps**.
1. Click **Installed Apps**.
1. Go to the `cattle-monitoring-system` namespace and check the boxes for `rancher-monitoring-crd` and `rancher-monitoring`.
1. Click **Delete**.
1. Confirm **Delete**.

</TabItem>
<TabItem value="Rancher before v2.6.5">

1. Click **☰ > Cluster Management**.
1. Go to the cluster that you created and click **Explore**.
1. In the left navigation bar, click **Apps & Marketplace**.
1. Click **Installed Apps**.
1. Go to the `cattle-monitoring-system` namespace and check the boxes for `rancher-monitoring-crd` and `rancher-monitoring`.
1. Click **Delete**.
1. Confirm **Delete**.

</TabItem>
</Tabs>

**Result:** `prometheus-federator` is uninstalled.
