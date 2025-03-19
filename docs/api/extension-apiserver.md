---
title: Extension API Server
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/extension-apiserver"/>
</head>

Rancher extends Kubernetes with additional APIs by registering an extension API server using the [Kubernetes API Aggregation Layer](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/).

## Disabling the extension API server

The [aggregation layer must be configured](https://kubernetes.io/docs/tasks/extend-kubernetes/configure-aggregation-layer/) on the local Kubernetes cluster for the `imperative-api-extension` feature to be enabled and to work correctly. The feature assumes this is configured and is enabled by default. If it is not possible to configure the aggregation layer for your local Kubernetes cluster, then you must disable the feature. The `imperative-api-extension` feature flag can be disabled by either using the [Rancher UI](../how-to-guides/advanced-user-guides/enable-experimental-features#disabling-features-with-the-rancher-ui) or [Rancher API](../how-to-guides/advanced-user-guides/enable-experimental-features#disabling-features-with-the-rancher-api).

It will still be possible to access the additional APIs when the feature is disabled. The additional APIs are available at `https://<rancher url>/ext` and they are compatible with the Kubernetes apiserver. This means you can use `curl` or `kubectl` to interact with the APIs.
