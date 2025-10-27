---
title: Enable Alerting for Rancher Compliance
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/compliance-scan-guides/enable-alerting-for-rancher-compliance"/>
</head>

Alerts can be configured to be sent out for a scan that runs on a schedule.

:::note Prerequisite:

Before enabling alerts for `rancher-compliance`, make sure to install the `rancher-monitoring` application and configure the Receivers and Routes. For more information, see [this section.](../../../reference-guides/monitoring-v2-configuration/receivers.md)

While configuring the routes for `rancher-compliance` alerts, you can specify the matching using the key-value pair `job: rancher-compliance-scan`. An example route configuration is [here.](../../../reference-guides/monitoring-v2-configuration/receivers.md#example-route-config-for-compliance-scan-alerts)

:::

While installing or upgrading the `rancher-compliance` Helm chart, set the following flag to `true` in the `values.yaml`:

```yaml
alerts:
  enabled: true
```