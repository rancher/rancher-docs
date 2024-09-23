---
title: Monitoring V2 Configuration Examples
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/monitoring-v2-configuration/examples"/>
</head>

## ServiceMonitor

See the official prometheus-operator GitHub repo for an example [ServiceMonitor](https://github.com/prometheus-operator/prometheus-operator/blob/master/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml) YAML.

## PodMonitor

See the [Prometheus Operator documentation](https://prometheus-operator.dev/docs/user-guides/getting-started/#using-podmonitors) for an example PodMonitor and an example Prometheus resource that refers to a PodMonitor.

## PrometheusRule

A PrometheusRule contains the alerting and recording rules that you would usually place in a [Prometheus rule file](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/).

For a more fine-grained approach, the `ruleSelector` field on a Prometheus resource can select which PrometheusRules should be loaded onto Prometheus, based on the labels attached to the PrometheusRules resources.

See the [Prometheus Operator documentation](https://prometheus-operator.dev/docs/user-guides/alerting/) for an example PrometheusRule.

## Alertmanager Config

See the Rancher docs page on Receivers for an example [Alertmanager config](./receivers.md#example-alertmanager-configs).
