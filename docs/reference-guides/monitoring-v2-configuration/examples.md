---
title: Monitoring V2 Configuration Examples
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/monitoring-v2-configuration/examples"/>
</head>

### ServiceMonitor

See the official prometheus-operator Github for an example [ServiceMonitor](https://github.com/prometheus-operator/prometheus-operator/blob/master/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml) YAML.

### PodMonitor

See the official prometheus-operator Github for an example [PodMonitor](https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/example-app-pod-monitor.yaml) YAML.

Refer to the official prometheus-operator Github for an [example Prometheus resource](https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/prometheus-pod-monitor.yaml) that refers to a PodMonitor.

### PrometheusRule

A PrometheusRule contains the alerting and recording rules that you would usually place in a [Prometheus rule file](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/).

For a more fine-grained approach, the `ruleSelector` field on a Prometheus resource can select which PrometheusRules should be loaded onto Prometheus, based on the labels attached to the PrometheusRules resources.

See the official prometheus-operator Github for an example [PrometheusRule](https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/alerting.md).

### Alertmanager Config

See the Rancher docs page on Recievers for an example [Alertmanager config](./receivers.md#example-alertmanager-configs).
