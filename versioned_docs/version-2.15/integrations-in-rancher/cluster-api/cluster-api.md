---
title: Cluster API (CAPI) with Rancher Turtles
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/cluster-api"/>
</head>

[Rancher Turtles](https://turtles.docs.rancher.com/) is a [Kubernetes Operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/#operators-in-kubernetes) that manages the lifecycle of provisioned Kubernetes clusters, by providing integration between your Cluster API (CAPI) and Rancher. With Rancher Turtles, you can:

- Import CAPI clusters into Rancher, by installing the Rancher Cluster Agent in CAPI provisioned clusters.
- Manage the [CAPI Operator](https://cluster-api-operator.sigs.k8s.io/) using the [CAPIProvider](https://turtles.docs.rancher.com/turtles/stable/en/reference/capiprovider.html) resource.

The [Overview](./overview.md) section outlines installation options, Rancher Turtles architecture, and a brief demo. For more details, see the [Rancher Turtles documentation](https://turtles.docs.rancher.com/).
