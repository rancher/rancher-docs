---
title: Install Rancher CIS Benchmark
---

<Tabs>
<TabItem value="Kubernetes v1.24 and earlier">
The following instructions apply to PSP-hardened clusters, which were available in Kubernetes v1.24 and earlier.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to install CIS Benchmark and click **Explore**.
1. In the left navigation bar, click **Apps > Charts**.
1. Click **CIS Benchmark**
1. Click **Install**.

**Result:** The CIS scan application is deployed on the Kubernetes cluster.

:::note

CIS Benchmark 4.0.0 and above have PSPs disabled by default. To install CIS Benchmark on a hardened cluster, set `global.psp.enabled` to `true` in the values before installing the chart.

:::

</TabItem>
<TabItem value = "Kubernetes v1.25+">
If you have a cluster running Kubernetes v1.25 or later, you can set the Rancher CIS benchmark by [assigning](../../new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md) the `rancher-restricted` [PSA](../../new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md) configuration template to the cluster and selecting a CIS profile.  
</TabItem>
</Tabs>
