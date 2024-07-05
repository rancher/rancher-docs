---
title: Generate and View Traffic from Istio
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"/>
</head>

## Prerequisites

To enable traffic to show up in the graph, ensure you have prometheus installed in the cluster. `Rancher-istio` installs Kiali configured by default to work with the `rancher-monitoring` chart. You can use `rancher-monitoring` or install your own monitoring solution.

Additionally, for Istio installations version `103.1.0+up1.19.6` and later, Kiali uses a token value for its authentication strategy. If you are trying to generate or retrieve the token (e.g. for login), note the name of the Kiali service account in Rancher is `kiali`. For more information, refer to the [Kiali token authentication FAQ](https://kiali.io/docs/faq/authentication/).

Optional: You can change configuration on how data scraping occurs by setting the [Selectors & Scrape Configs](../../../integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md) options.

## The Kiali Traffic Graph

The Istio overview page provides a link to the Kiali dashboard. From the Kiali dashboard, you are able to view graphs for each namespace. The Kiali graph provides a powerful way to visualize the topology of your Istio service mesh. It shows you which services communicate with each other.

### Traffic Visualization

To see the traffic graph follow the steps below:

1. In the cluster where Istio is installed, click **Istio** in the left navigation bar.
1. Click the **Kiali** link.
1. Click on **Graph** in the side nav.
1. Change the namespace in the **Namespace** dropdown to view the traffic for each namespace.

If you refresh the URL to the BookInfo app several times, you should be able to see green arrows on the Kiali graph showing traffic to `v1` and `v3` of the `reviews` service. The control panel on the right side of the graph lets you configure details including how many minutes of the most recent traffic should be shown on the graph.

For additional tools and visualizations, you can go to Grafana, and Prometheus dashboards from the **Monitoring** **Overview** page
