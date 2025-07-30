---
title: Extension API Server
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/extension-apiserver"/>
</head>

Rancher extends Kubernetes with additional APIs by registering an extension API server using the [Kubernetes API Aggregation Layer](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/).

## Aggregation Layer is Required

The API aggregation layer must be configured on the local Kubernetes cluster for the `v1.ext.cattle.io` `APIService` to work correctly. If the `APIService` does not receive a registration request after the Rancher server starts, the pod will crash with a log entry indicating the error. If your pods are consistently failing to detect registration despite having a correctly configured cluster, you can increase the timeout by setting the `.Values.aggregationRegistrationTimeout` in Helm.

All versions of Kubernetes supported by Rancher with the feature will have the aggregation layer configured by default. However, if you suspect that your cluster configuration is incorrect, refer to the [Kubernetes Aggregation Layer documentation](https://kubernetes.io/docs/tasks/extend-kubernetes/configure-aggregation-layer/) for information on configuring the aggregation layer.

:::note
If the underlying Kubernetes distribution does not support the aggregation layer, you must migrate to a Kubernetes distribution that does before upgrading.
:::