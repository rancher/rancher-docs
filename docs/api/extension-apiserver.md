---
title: Extension Apiserver
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/extension-apiserver"/>
</head>

Rancher extends Kubernetes with additional APIs by registering an extension
apiserver using [Kubernetes's Aggregation
layer](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/).

## Disabling the extension apiserver

The [aggregation layer must be
configured](https://kubernetes.io/docs/tasks/extend-kubernetes/configure-aggregation-layer/)
on the local Kubernetes cluster for the `imperative-api-extension` feature to be
enabled and to work correctly. The feature assumes this is configured and is
enabled by default. If it is not possible to configure the aggregation layer for
your local Kubernetes cluster, then you must turn off the feature.

It will still be possible to access the additional APIs when the feature is
turned off. The additional APIs are available at `https://<rancher url>/ext` and
they are compatible with Kubernetes apiserver. This means you can use `curl` or
even `kubectl` to interact with the APIs.
