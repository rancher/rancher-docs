---
title: Istio
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/istio"/>
</head>

[Istio](https://istio.io/) is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices.

As a network of microservices changes and grows, the interactions between them can become increasingly difficult to manage and understand. In such a situation, it is useful to have a service mesh as a separate infrastructure layer. Istio's service mesh lets you manipulate traffic between microservices without changing the microservices directly.

Our integration of Istio is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to a team of developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing.

This core service mesh provides features that include but are not limited to the following:

- **Traffic Management** such as ingress and egress routing, circuit breaking, mirroring.
- **Security** with resources to authenticate and authorize traffic and users, mTLS included.
- **Observability** of logs, metrics, and distributed traffic flows.

After [setting up istio](../../how-to-guides/advanced-user-guides/istio-setup-guide/istio-setup-guide.md) you can leverage Istio's control plane functionality through the Rancher UI, `kubectl`, or `istioctl`.

Istio needs to be set up by a `cluster-admin` before it can be used in a project.


## What's New in Rancher v2.5

The overall architecture of Istio has been simplified. A single component, Istiod, has been created by combining Pilot, Citadel, Galley and the sidecar injector. Node Agent functionality has also been merged into istio-agent.

Addons that were previously installed by Istio (cert-manager, Grafana, Jaeger, Kiali, Prometheus, Zipkin) will now need to be installed separately. Istio will support installation of integrations that are from the Istio Project and will maintain compatibility with those that are not.

A Prometheus integration will still be available through an installation of [Rancher Monitoring](../monitoring-and-alerting/monitoring-and-alerting.md), or by installing your own Prometheus operator. Rancher's Istio chart will also install Kiali by default to ensure you can get a full picture of your microservices out of the box.

Istio has migrated away from Helm as a way to install Istio and now provides installation through the istioctl binary or Istio Operator. To ensure the easiest interaction with Istio, Rancher's Istio will maintain a Helm chart that utilizes the istioctl binary to manage your Istio installation.

This Helm chart will be available via the Apps and Marketplace in the UI. A user that has access to the Rancher Chart's catalog will need to set up Istio before it can be used in the project.

## Tools Bundled with Istio

Our [Istio](https://istio.io/) installer wraps the istioctl binary commands in a handy Helm chart, including an overlay file option to allow complex customization.

It also includes the following:

### Kiali

[Kiali](https://kiali.io/) is a comprehensive visualization aid used for graphing traffic flow throughout the service mesh. It allows you to see how they are connected, including the traffic rates and latencies between them.

You can check the health of the service mesh, or drill down to see the incoming and outgoing requests to a single component.

:::note
For Istio installations `103.1.0+up1.19.6` and later, Kiali uses a token value for its authentication strategy. The name of the Kiali service account in Rancher is `kiali`. Use this name if you are writing commands that require you to enter the name of the Kiali service account (for example, if you are trying to generate or retrieve a session token). For more information, refer to the [Kiali token authentication FAQ](https://kiali.io/docs/faq/authentication/).
:::

### Jaeger

Our Istio installer includes a quick-start, all-in-one installation of [Jaeger,](https://www.jaegertracing.io/) a tool used for tracing distributed systems.

Note that this is not a production-qualified deployment of Jaeger. This deployment uses an in-memory storage component, while a persistent storage component is recommended for production. For more information on which deployment strategy you may need, refer to the [Jaeger documentation.](https://www.jaegertracing.io/docs/latest/operator/#production-strategy)

## Prerequisites

Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough [CPU and memory](cpu-and-memory-allocations.md) to run all of the components of Istio.

If you are installing Istio on RKE2 cluster, some additional steps are required. For details, see [this section.](#additional-steps-for-installing-istio-on-an-rke2-cluster)

## Setup Guide

Refer to the [setup guide](../../how-to-guides/advanced-user-guides/istio-setup-guide/istio-setup-guide.md) for instructions on how to set up Istio and use it in a project.

## Remove Istio

To remove Istio components from a cluster, namespace, or workload, refer to the section on [uninstalling Istio.](disable-istio.md)

## Accessing Visualizations

> By default, only cluster-admins have access to Kiali. For instructions on how to allow admin, edit or views roles to access them, see [this section.](rbac-for-istio.md)

:::note
For Istio installations `103.1.0+up1.19.6` and later, Kiali uses a token value for its authentication strategy. The name of the Kiali service account in Rancher is `kiali`. Use this name if you are writing commands that require you to enter the name of the Kiali service account (for example, if you are trying to generate or retrieve a session token). For more information, refer to the [Kiali token authentication FAQ](https://kiali.io/docs/faq/authentication/).
:::

After Istio is set up in a cluster, Grafana, Prometheus, and Kiali are available in the Rancher UI.

To access the Grafana and Prometheus visualizations,

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to see the visualizations and click **Explore**.
1. In the left navigation bar, click **Monitoring**.
1. Click **Grafana** or any of the other dashboards.

To access the Kiali visualization,

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to see Kiali and click **Explore**.
1. In the left navigation bar, click **Istio**.
1. Click **Kiali**. From here you can access the **Traffic Graph** tab or the **Traffic Metrics** tab to see network visualizations and metrics.

By default, all namespace will picked up by prometheus and make data available for Kiali graphs. Refer to [selector/scrape config setup](configuration-options/selectors-and-scrape-configurations.md) if you would like to use a different configuration for prometheus data scraping.

Your access to the visualizations depend on your role. Grafana and Prometheus are only available for `cluster-admin` roles. The Kiali UI is available only to `cluster-admin` by default, but `cluster-admin` can allow other roles to access them by editing the Istio values.yaml.

## Architecture

Istio installs a service mesh that uses [Envoy](https://www.envoyproxy.io) sidecar proxies to intercept traffic to each workload. These sidecars intercept and manage service-to-service communication, allowing fine-grained observation and control over traffic within the cluster.

Only workloads that have the Istio sidecar injected can be tracked and controlled by Istio.

When a namespace has Istio enabled, new workloads deployed in the namespace will automatically have the Istio sidecar. You need to manually enable Istio in preexisting workloads.

For more information on the Istio sidecar, refer to the [Istio sidecare-injection docs](https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/) and for more information on Istio's architecture, refer to the [Istio Architecture docs](https://istio.io/latest/docs/ops/deployment/architecture/)

### Multiple Ingresses

By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster. Istio also installs an ingress gateway by default into the `istio-system` namespace.  The result is that your cluster will have two ingresses in your cluster.

![In an Istio-enabled cluster, you can have two ingresses: the default Nginx ingress, and the default Istio controller.](/img/istio-ingress.svg)

 Additional Istio Ingress gateways can be enabled via the [overlay file](configuration-options/configuration-options.md#overlay-file).

### Egress Support

By default the Egress gateway is disabled, but can be enabled on install or upgrade through the values.yaml or via the [overlay file](configuration-options/configuration-options.md#overlay-file).

## Additional Steps for Installing Istio on an RKE2 Cluster

To install Istio on an RKE2 cluster, follow the steps in [this section.](configuration-options/install-istio-on-rke2-cluster.md)

## Upgrading Istio in an Air-Gapped Environment

The Istio pod security policy is now enabled by default. A new value, `installer.releaseMirror.enabled`, has been added to the rancher-istio chart to enable and disable the server that supports air-gapped upgrades. Note that `installer.releaseMirror.enabled` is set to `false` by default. You can set this value as needed when you install or upgrade. Follow the steps below:

1. Provision an air-gapped Rancher instance and an air-gapped custom cluster in the Rancher UI.
2. Install Monitoring in the cluster: **Cluster Explorer -> Apps & Marketplace -> Charts -> Monitoring**.
3. Pull all required images for Istio into the private registry you will use in the air-gapped environment.
4. Install Istio in the cluster: **Cluster Explorer -> Apps & Marketplace -> Charts -> Istio**.

:::note

You can enable [Jaeger](https://www.jaegertracing.io/) and [Kiali](https://kiali.io/) on a fresh Istio install. To ensure that Jaeger and Kiali work, set `installer.releaseMirror.enabled` to `true` in `values.yaml` during installation.

:::

5. Upgrade the Istio installation.

:::caution

If you haven't already, set `installer.releaseMirror.enabled=true` to upgrade Istio.

:::
