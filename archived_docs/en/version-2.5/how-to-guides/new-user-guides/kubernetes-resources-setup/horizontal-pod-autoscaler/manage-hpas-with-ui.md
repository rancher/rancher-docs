---
title: Managing HPAs with the Rancher UI
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"/>
</head>

The Rancher UI supports creating, managing, and deleting HPAs. You can configure CPU or memory usage as the metric that the HPA uses to scale.

If you want to create HPAs that scale based on other metrics than CPU and memory, refer to [Configuring HPA to Scale Using Custom Metrics with Prometheus](manage-hpas-with-kubectl.md#configuring-hpa-to-scale-using-custom-metrics-with-prometheus).

## Creating an HPA

1. From the **Global** view, open the project that you want to deploy a HPA to.

1. Click **Resources > HPA.**

1. Click **Add HPA.**

1. Enter a **Name** for the HPA.

1. Select a **Namespace** for the HPA.

1. Select a **Deployment** as scale target for the HPA.

1. Specify the **Minimum Scale** and **Maximum Scale** for the HPA.

1. Configure the metrics for the HPA. You can choose memory or CPU usage as the metric that will cause the HPA to scale the service up or down. In the **Quantity** field, enter the percentage of the workload's memory or CPU usage that will cause the HPA to scale the service. To configure other HPA metrics, including metrics available from Prometheus, you need to [manage HPAs using kubectl](manage-hpas-with-kubectl.md#configuring-hpa-to-scale-using-custom-metrics-with-prometheus).

1. Click **Create** to create the HPA.

> **Result:** The HPA is deployed to the chosen namespace. You can view the HPA's status from the project's Resources > HPA view.

## Get HPA Metrics and Status

1. From the **Global** view, open the project with the HPAs you want to look at.

1. Click **Resources > HPA.** The **HPA** tab shows the number of current replicas.

1. For more detailed metrics and status of a specific HPA, click the name of the HPA. This leads to the HPA detail page.


## Deleting an HPA

1. From the **Global** view, open the project that you want to delete an HPA from.

1. Click **Resources > HPA.**

1. Find the HPA which you would like to delete.

1. Click **&#8942; > Delete**.

1. Click **Delete** to confirm.

> **Result:** The HPA is deleted from the current cluster.
