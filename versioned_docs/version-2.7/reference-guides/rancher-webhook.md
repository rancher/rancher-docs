---
title: Rancher Webhook
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-webhook"/>
</head>

Rancher-Webhook is an essential component of Rancher that works in conjunction with Kubernetes to enhance security and enable critical features for Rancher-managed clusters. 

It integrates with Kubernetes' extensible admission controllers, as described in the [Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), which allows Rancher-Webhook to inspect specific requests sent to the Kubernetes API server, and add custom, Rancher-specific validation and mutations to the requests that are specific to Rancher. Rancher-Webhook manages the resources to be validated using the `rancher.cattle.io` `ValidatingWebhookConfiguration` and the `rancher.cattle.io` `MutatingWebhookConfiguration`, and will override any manual edits.
Rancher deploys Rancher-Webhook as a separate deployment and service in both local and downstream clusters. Rancher manages Rancher-Webhook using Helm. It's important to note that Rancher may override modifications made by users to the Helm release.

## Why do we need it?

Rancher-Webhook is crucial for Rancher to protect clusters against malicious attacks and enable various features.
Rancher relies on the Rancher-Webhook as an integral part of its functionality. Without the webhook, Rancher would not be a complete product. 
It provides essential protection for Rancher-managed clusters, preventing security vulnerabilities and ensuring the consistency and stability of the cluster.

## Common Issues

### EKS Cluster with Calico CNI

Users running an EKS cluster with Calico CNI may run into errors when the Kubernetes API server attempts to contact the Rancher-Webhook. 
One workaround for this issue [documented by Calico](https://docs.tigera.io/calico/latest/getting-started/kubernetes/managed-public-cloud/eks#install-eks-with-calico-networking) involves setting `hostNetwork=true` for the webhook deployment. Users can change this using the Helm commands below on the affected clusters.

``` bash
helm repo add rancher-charts https://charts.rancher.io 
helm upgrade --reuse-values rancher-webhook rancher-chart/rancher-webhook  -n cattle-system --set global.hostNetwork=true
```
**Note:** This temporary workaround may violate an environment's security policy. This workaround also requires that port 9443 is unused on the host network.

### Private GKE Cluster

When using a private GKE cluster, errors may occur that prevent the Kubernetes API server from communicating with the webhook. The following error message may appear:

```
Internal error occurred: failed calling webhook "rancher.cattle.io.namespaces.create-non-kubesystem": failed to call webhook: Post "https://rancher-webhook.cattle-system.svc:443/v1/webhook/validation/namespaces?timeout=10s": context deadline exceeded
```
This issue occurs because firewall rules restrict communication between the API server and the private cluster. To resolve this communication problem, users must add firewall rules to allow the GKE control plane to communicate with the Rancher-Webhook on port 9443. Please refer to the [GKE documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules) for detailed information and steps on updating the firewall rules.
