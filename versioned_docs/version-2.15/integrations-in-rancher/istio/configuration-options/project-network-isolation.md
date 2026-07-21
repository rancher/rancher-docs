---
title: Additional Steps for Project Network Isolation
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/istio/configuration-options/project-network-isolation"/>
</head>

:::warning

[Rancher-Istio](https://github.com/rancher/charts/tree/release-v2.11/charts/rancher-istio) has been deprecated since Rancher v2.12.0; turn to the [SUSE Rancher Application Collection](https://apps.rancher.io) build of Istio for enhanced security (included in SUSE Rancher Prime subscriptions).

Detailed information can be found in [this announcement](https://forums.suse.com/t/deprecation-of-rancher-istio/45043).

:::

In clusters where:

- You are using Rancher v2.5.8+ with an any RKE2 network plug-in that supports the enforcement of Kubernetes network policies, such as Canal
- The Project Network Isolation option is enabled
- You install the Istio Ingress module

The Istio Ingress Gateway pod won't be able to redirect ingress traffic to the workloads by default. This is because all the namespaces will be inaccessible from the namespace where Istio is installed. You have two options.

The first option is to add a new Network Policy in each of the namespaces where you intend to have ingress controlled by Istio. Your policy should include the following lines:

```
- podSelector:
    matchLabels:
      app: istio-ingressgateway
```

The second option is to move the `istio-system` namespace to the `system` project, which by default is excluded from the network isolation.