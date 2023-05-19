---
title: Install Rancher CIS Benchmark
---

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to install CIS Benchmark and click **Explore**.
1. In the left navigation bar, click **Apps > Charts**.
1. Click **CIS Benchmark**
1. Click **Install**.

**Result:** The CIS scan application is deployed on the Kubernetes cluster.

:::note

CIS Benchmark 4.0.0 and above have PSPs disabled by default. To install CIS Benchmark on a hardened cluster, set `global.psp.enabled` to `true` in the values before installing the chart.

:::
