---
title: Helm Chart Options
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/monitoring-v2-configuration/helm-chart-options"/>
</head>

## Configuring Resource Limits and Requests

The resource requests and limits can be configured when installing `rancher-monitoring`.

The default values are in the [values.yaml](https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/values.yaml) in the `rancher-monitoring` Helm chart.

The default values in the table below are the minimum required resource limits and requests.

| Resource Name | Memory Limit | CPU Limit | Memory Request | CPU Request |
| ------------- | ------------ | ----------- | ---------------- | ------------------ |
| alertmanager | 500Mi | 1000m | 100Mi |  100m |
| grafana | 200Mi | 200m | 100Mi | 100m |
| kube-state-metrics subchart | 200Mi  | 100m | 130Mi | 100m |
| prometheus-node-exporter subchart | 50Mi | 200m | 30Mi | 100m |
| prometheusOperator | 500Mi | 200m | 100Mi | 100m |
| prometheus | 2500Mi | 1000m | 1750Mi | 750m |
| **Total**                 | **3950Mi** | **2700m** | **2210Mi** | **1250m** |

At least 50Gi storage is recommended.


## Trusted CA for Notifiers

If you need to add a trusted CA to your notifier, follow these steps:

1. Create the `cattle-monitoring-system` namespace.
1. Add your trusted CA secret to the `cattle-monitoring-system` namespace.
1. Deploy or upgrade the `rancher-monitoring` Helm chart. In the chart options, reference the secret in **Alerting > Additional Secrets**.

**Result:** The default Alertmanager custom resource will have access to your trusted CA.


## Additional Scrape Configurations

If the scrape configuration you want cannot be specified via a ServiceMonitor or PodMonitor at the moment, you can provide an `additionalScrapeConfigSecret` on deploying or upgrading `rancher-monitoring`.

A [scrape_config section](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config) specifies a set of targets and parameters describing how to scrape them. In the general case, one scrape configuration specifies a single job.

An example of where this might be used is with Istio. For more information, see [this section.](../../integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md)


## Configuring Applications Packaged within Monitoring v2

We deploy kube-state-metrics and node-exporter with monitoring v2. The node exporters are deployed as DaemonSets. Each of these entities are deployed as sub-charts through the monitoring v2 Helm chart, values.yaml.

We also deploy Grafana, which is not managed by Prometheus.

Many values aren’t exposed in the top level chart. However, you can add values to the top level chart to override values that exist in the sub-charts.

### Increase the Replicas of Alertmanager

As part of the chart deployment options, you can opt to increase the number of replicas of the Alertmanager deployed onto your cluster. The replicas can all be managed using the same underlying Alertmanager Config Secret. For more information on the Alertmanager Config Secret, refer to [this section.](../../how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md#multiple-alertmanager-replicas)

### Configuring the Namespace for a Persistent Grafana Dashboard

To specify that you would like Grafana to watch for ConfigMaps across all namespaces, set this value in the `rancher-monitoring` Helm chart:

```
grafana.sidecar.dashboards.searchNamespace=ALL
```

Note that the RBAC roles exposed by the Monitoring chart to add Grafana Dashboards are still restricted to giving permissions for users to add dashboards in the namespace defined in `grafana.dashboards.namespace`, which defaults to `cattle-dashboards`.