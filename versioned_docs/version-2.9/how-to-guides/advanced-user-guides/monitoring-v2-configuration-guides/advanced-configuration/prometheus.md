---
title: Prometheus Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"/>
</head>

It is usually not necessary to directly edit the Prometheus custom resource because the monitoring application automatically updates it based on changes to ServiceMonitors and PodMonitors.

:::note

This section assumes familiarity with how monitoring components work together. For more information, see [this section.](../../../../integrations-in-rancher/monitoring-and-alerting/how-monitoring-works.md)

:::

## About the Prometheus Custom Resource

The Prometheus CR defines a desired Prometheus deployment. The Prometheus Operator observes the Prometheus CR. When the CR changes, the Prometheus Operator creates `prometheus-rancher-monitoring-prometheus`, a Prometheus deployment based on the CR configuration.

The Prometheus CR specifies details such as rules and what Alertmanagers are connected to Prometheus. Rancher builds this CR for you.

Monitoring V2 only supports one Prometheus per cluster. However, you might want to edit the Prometheus CR if you want to limit monitoring to certain namespaces.