---
title: Set up Istio's Components for Traffic Management
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"/>
</head>

:::warning

[Rancher-Istio](https://github.com/rancher/charts/tree/release-v2.11/charts/rancher-istio) will be deprecated in Rancher v2.12.0; turn to the [SUSE Rancher Application Collection](https://apps.rancher.io) build of Istio for enhanced security (included in SUSE Rancher Prime subscriptions).

Detailed information can be found in [this announcement](https://forums.suse.com/t/deprecation-of-rancher-istio/45043).

:::

A central advantage of traffic management in Istio is that it allows dynamic request routing. Some common applications for dynamic request routing include canary deployments and blue/green deployments. The two key resources in Istio traffic management are *virtual services* and *destination rules*.

- [Virtual services](https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/) intercept and direct traffic to your Kubernetes services, allowing you to divide percentages of traffic from a request to different services. You can use them to define a set of routing rules to apply when a host is addressed.
- [Destination rules](https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule/) serve as the single source of truth about which service versions are available to receive traffic from virtual services. You can use these resources to define policies that apply to traffic that is intended for a service after routing has occurred.

This section describes how to add an example virtual service that corresponds to the `reviews` microservice in the sample BookInfo app. The purpose of this service is to divide traffic between two versions of the `reviews` service.

In this example, we take the traffic to the `reviews` service and intercept it so that 50 percent of it goes to `v1` of the service and 50 percent goes to `v2`.

After this virtual service is deployed, we will generate traffic and see from the Kiali visualization that traffic is being routed evenly between the two versions of the service.

To deploy the virtual service and destination rules for the `reviews` service,
1.  Click **☰ > Cluster Management**.
1. Go to the cluster where Istio is installed and click **Explore**.
1. In the cluster where Istio is installed, click **Istio > DestinationRules** in the left navigation bar.
1. Click **Create**.
1. Copy and paste the DestinationRule yaml provided below.
1. Click **Create**.
1. Click **Edit as YAML** and use this configuration:

    ```yaml
    apiVersion: networking.istio.io/v1alpha3
    kind: DestinationRule
    metadata:
      name: reviews
    spec:
      host: reviews
      subsets:
      - name: v1
        labels:
          version: v1
      - name: v2
        labels:
          version: v2
      - name: v3
        labels:
          version: v3
    ```
1. Click **Create**.

Then to deploy the VirtualService that provides the traffic routing that utilizes the DestinationRule:

1. Click **VirtualService** in the side nav bar.
1. Click **Create from Yaml**.
1. Copy and paste the VirtualService yaml provided below.
1. Click **Create**.

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
  - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1
      weight: 50
    - destination:
        host: reviews
        subset: v3
      weight: 50
---
```

**Result:** When you generate traffic to this service (for example, by refreshing the ingress gateway URL), the Kiali traffic graph will reflect that traffic to the `reviews` service is divided evenly between `v1` and `v3`.

### [Next: Generate and View Traffic](generate-and-view-traffic.md)
