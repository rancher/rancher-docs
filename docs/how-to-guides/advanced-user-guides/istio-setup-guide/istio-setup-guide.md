---
title: Istio Setup Guides
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/istio-setup-guide"/>
</head>

:::warning

[Rancher-Istio](https://github.com/rancher/charts/tree/release-v2.11/charts/rancher-istio) will be deprecated in Rancher v2.12.0; turn to the [SUSE Rancher Application Collection](https://apps.rancher.io) build of Istio for enhanced security (included in SUSE Rancher Prime subscriptions).

Detailed information can be found in [this announcement](https://forums.suse.com/t/deprecation-of-rancher-istio/45043).

:::

This section describes how to enable Istio and start using it in your projects.

If you use Istio for traffic management, you will need to allow external traffic to the cluster. In that case, you will need to follow all of the steps below.

## Prerequisites

This guide assumes you have already [installed Rancher,](../../../getting-started/installation-and-upgrade/installation-and-upgrade.md) and you have already [provisioned a separate Kubernetes cluster](../../new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md) on which you will install Istio.

The nodes in your cluster must meet the [CPU and memory requirements.](../../../integrations-in-rancher/istio/cpu-and-memory-allocations.md)

The workloads and services that you want to be controlled by Istio must meet [Istio's requirements.](https://istio.io/docs/setup/additional-setup/requirements/)

## Install

:::tip Quick Setup Tip:

If you don't need external traffic to reach Istio, and you just want to set up Istio for monitoring and tracing traffic within the cluster, skip the steps for [setting up the Istio gateway](set-up-istio-gateway.md) and [setting up Istio's components for traffic management.](set-up-traffic-management.md)

:::

1. [Enable Istio in the cluster.](enable-istio-in-cluster.md)
1. [Enable Istio in all the namespaces where you want to use it.](enable-istio-in-namespace.md)
1. [Add deployments and services that have the Istio sidecar injected.](use-istio-sidecar.md)
1. [Set up the Istio gateway. ](set-up-istio-gateway.md)
1. [Set up Istio's components for traffic management.](set-up-traffic-management.md)
1. [Generate traffic and see Istio in action.](generate-and-view-traffic.md)
