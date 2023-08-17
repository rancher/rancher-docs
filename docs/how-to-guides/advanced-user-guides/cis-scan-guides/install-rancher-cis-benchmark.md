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

If you are running Kubernetes v1.24 or earlier, and have a [Pod Security Policy](../../new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md) (PSP) hardened cluster, CIS Benchmark 4.0.0 and later disable PSPs by default. To install CIS Benchmark on a Pod Security Policy (PSP) hardened cluster, set `global.psp.enabled` to `true` in the values before installing the chart. [Pod Security Admission](../../new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md) (PSA) hardened clusters aren't affected.

:::
