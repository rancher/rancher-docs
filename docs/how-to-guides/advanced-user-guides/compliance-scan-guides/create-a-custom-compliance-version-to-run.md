---
title: Create a Custom Compliance Version for Running a Cluster Scan
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/compliance-scan-guides/create-a-custom-compliance-version-to-run"/>
</head>

There could be some Kubernetes cluster setups that require custom configurations of the Compliance tests. For example, the path to the Kubernetes config files or certs might be different than the standard location where the upstream Compliance look for them.

It is now possible to create a custom compliance version for running a cluster scan using the `rancher-compliance` application.

For details, see [this page.](../../../integrations-in-rancher/cis-scans/custom-benchmark.md)