---
title: Rancher Webhook
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-webhook"/>
</head>

Rancher-Webhook is an essential component of Rancher that works in conjunction with Kubernetes to enhance security and enable critical features for Rancher-managed clusters. 

It integrates with Kubernetes' extensible admission controllers, as described in the [Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/), which allows Rancher-Webhook to inspect specific requests sent to the Kubernetes API server, and add custom, Rancher-specific validation and mutations to the requests that are specific to Rancher. Rancher-Webhook manages the resources to be validated using the `rancher.cattle.io` `ValidatingWebhookConfiguration` and the `rancher.cattle.io` `MutatingWebhookConfiguration`, and will override any manual edits.
Rancher deploys Rancher-Webhook as a separate deployment and service in both local and downstream clusters. Rancher manages Rancher-Webhook using Helm. It's important to note that Rancher may override modifications made by users to the Helm release.

Each Rancher version is designed to be compatible with a single version of the webhook. The compatible versions are provided below for convenience.

**Note:** Rancher manages deployment and upgrade of the webhook. Under most circumstances, no user intervention should be needed to ensure that the webhook version is compatible with the version of Rancher that you are running.

<!-- releaseTask -->

| Rancher Version | Webhook Version |
|-----------------|:---------------:|
| v2.8.0          |     v0.4.2      |

## Why Do We Need It?

Rancher-Webhook is crucial for Rancher to protect clusters against malicious attacks and enable various features.
Rancher relies on the Rancher-Webhook as an integral part of its functionality. Without the webhook, Rancher would not be a complete product. 
It provides essential protection for Rancher-managed clusters, preventing security vulnerabilities and ensuring the consistency and stability of the cluster.

## What Resources Does the Webhook Validate?

You can find an in-progress list of the resources that the webhook validates in the [webhook's repo](https://github.com/rancher/webhook/blob/release/v0.4/docs.md). These docs are organized by group/version and resource (top-level header is group/version, next level header is resource). Checks specific to one version can be found by viewing the `docs.md` file associated with a particular tag (note that webhook versions prior to `v0.3.6` won't have this file).

## Bypassing the Webhook

Sometimes, you must bypass Rancher's webhook validation to perform emergency restore operations or fix other critical issues. The bypass operation is exhaustive, meaning no webhook validations or mutations apply when you use it. It is not possible to bypass some validations or mutations and have others still apply - they are either all bypassed or all active.

:::danger

Rancher's webhook provides critical security protections. Bypassing the webhook should only be done by administrators in specific scenarios, after all other options have been exhausted. In addition, permission to bypass the webhook should be carefully controlled, and never given to users who are not admins.

:::

To bypass the webhook, impersonate both the `rancher-webhook-sudo` service account and the `system:masters` group (both are required):

```bash
kubectl create -f example.yaml --as=system:serviceaccount:cattle-system:rancher-webhook-sudo --as-group=system:masters
```

## Common Issues

### EKS Cluster with Calico CNI

Users running an EKS cluster with Calico CNI may run into errors when the Kubernetes API server attempts to contact the Rancher-Webhook. 
One workaround for this issue [documented by Calico](https://docs.tigera.io/calico/latest/getting-started/kubernetes/managed-public-cloud/eks#install-eks-with-calico-networking) involves setting `hostNetwork=true` for the webhook deployment. Users can change this using the Helm commands below on the affected clusters.

``` bash
helm repo add rancher-charts https://charts.rancher.io 
helm upgrade --reuse-values rancher-webhook rancher-charts/rancher-webhook  -n cattle-system --set global.hostNetwork=true
```
**Note:** This temporary workaround may violate an environment's security policy. This workaround also requires that port 9443 is unused on the host network.

**Note:** Helm uses secrets by default. This is a datatype that some webhook versions validate to store information. In these cases, directly update the deployment with the hostNetwork=true value using kubectl, then run the Helm commands listed above to prevent drift between the Helm configuration and the actual state of the cluster.

### Private GKE Cluster

When using a private GKE cluster, errors may occur that prevent the Kubernetes API server from communicating with the webhook. The following error message may appear:

```
Internal error occurred: failed calling webhook "rancher.cattle.io.namespaces.create-non-kubesystem": failed to call webhook: Post "https://rancher-webhook.cattle-system.svc:443/v1/webhook/validation/namespaces?timeout=10s": context deadline exceeded
```
This issue occurs because firewall rules restrict communication between the API server and the private cluster. To resolve this communication problem, users must add firewall rules to allow the GKE control plane to communicate with the Rancher-Webhook on port 9443. Please refer to the [GKE documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules) for detailed information and steps on updating the firewall rules.

### Application Fails to Deploy Due to rancher-webhook Blocking Access

The webhook provides extra validations on [namespaces](https://github.com/rancher/webhook/blob/release/v0.4/docs.md#psa-label-validation). One of these validations ensures that users can only update PSA relevant labels if they have the proper permissions (`updatepsa` for `projects` in `management.cattle.io`). This can result in specific operators, such as Tigera or Trident, failing when they attempt to deploy namespaces with PSA labels. There are several ways to resolve this issue:

- Configure the application to create a namespace with no PSA labels. If users wish to apply a PSA to these namespaces, they can add them to a project with the desired PSA after configuration. See the [docs on PSS and PSA resources](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md) for instructions on how.
  - This is the preferred option, though not all applications can be configured in this fashion.
- Manually grant the operator permissions to manage PSAs for namespaces.
  - This option will introduce security risks, since the operator will now be able to set the PSA for the namespaces it has access to. This could allow the operator to deploy a privileged pod, or effect cluster takeover through other means.
- A user account with the proper permissions can pre-create the namespace with the appropriate configuration.
  - This option depends on the ability of the application to handle existing resources.

## Issues on Specific Versions

**Note:** The following is an incomplete list of high-severity issues affecting specific Rancher/webhook versions. In most cases, these issues can be resolved by upgrading to a more recent Rancher version.

### Incompatible Webhook Version on Rollback

**Note:** This affects rolling back to Rancher v2.7.5 or earlier.

If you roll back to Rancher v2.7.5 or earlier, you may see webhook versions that are too recent to be compatible with downstream clusters running pre-v2.7.5 version of Rancher. This may cause various incompatibility issues. For example, project members may be unable to create namespaces. In addition, when you roll back to versions before the webhook was installed in downstream clusters, the webhook may remain installed, which can result in similar incompatibility issues.

To help alleviate these issues, you can run the [adjust-downstream-webhook](https://github.com/rancherlabs/support-tools/tree/master/adjust-downstream-webhook) shell script after roll back. This script selects and installs the proper webhook version (or removes the webhook entirely) for the corresponding Rancher version. 

### Project Users Can't Create Namespaces 

**Note:** The following affects Rancher v2.7.2 - v2.7.4.

Project users may not be able to create namespaces in projects. This includes project owners. This issue is caused by Rancher automatically upgrading the webhook to a version compatible with a more recent version of Rancher than the one currently installed. 

To help alleviate these issues, you can run the [adjust-downstream-webhook](https://github.com/rancherlabs/support-tools/tree/master/adjust-downstream-webhook) shell script after roll back. This script selects and installs the proper webhook version (or removes the webhook entirely) for the corresponding Rancher version. 
