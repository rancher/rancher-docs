---
title: Enable Alerting for Rancher CIS Benchmark
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"/>
</head>

Alerts can be configured to be sent out for a scan that runs on a schedule.

:::note Prerequisite:

Before enabling alerts for `rancher-cis-benchmark`, make sure to install the `rancher-monitoring` application and configure the Receivers and Routes. For more information, see [this section.](../../../reference-guides/monitoring-v2-configuration/receivers.md)

While configuring the routes for `rancher-cis-benchmark` alerts, you can specify the matching using the key-value pair `job: rancher-cis-scan`. An example route configuration is [here.](../../../reference-guides/monitoring-v2-configuration/receivers.md#example-route-config-for-cis-scan-alerts)

:::

While installing or upgrading the `rancher-cis-benchmark` Helm chart, set the following flag to `true` in the `values.yaml`:

```yaml
alerts:
  enabled: true
```