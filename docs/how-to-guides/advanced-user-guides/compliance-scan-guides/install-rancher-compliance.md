---
title: Install Rancher Compliance
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/compliance-scan-guides/install-rancher-compliance"/>
</head>

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to install Compliance and click **Explore**.
1. In the left navigation bar, click **Apps > Charts**.
1. Click **Compliance**
1. Click **Install**.

**Result:** The compliance scan application is deployed on the Kubernetes cluster.

:::note

If you are running Kubernetes v1.24 or earlier, and have a [Pod Security Policy](../../new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md) (PSP) hardened cluster, Compliance 4.0.0 and later disable PSPs by default. To install Compliance on a PSP-hardened cluster, set `global.psp.enabled` to `true` in the values before installing the chart. [Pod Security Admission](../../new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md) (PSA) hardened clusters aren't affected.

:::
