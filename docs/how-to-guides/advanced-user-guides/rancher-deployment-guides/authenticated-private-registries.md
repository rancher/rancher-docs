---
title: Using Authenticated Default Registries
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/rancher-deployment-guides/authenticated-private-registries/"/>
</head>

:::caution
Changing global registry settings has the potential to redeploy downstream cluster components, such as the `cattle-cluster-agent`. It is highly recommended to evaluate this feature and its impacts on existing resources before making changes to production environments.
:::

:::note
This page provides a deeper explanation of the behavior and configuration options offered when working with authenticated private registries in the local and downstream clusters. If you're looking for straight forward steps on how to use a private registry, refer to **[this page](/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry).**
:::

Starting with Rancher `v2.15.0`, authenticated private registries can be leveraged at both the global and cluster levels. This is useful when an environment only has access to an authenticated registry, when meeting compliance requirements, or when accessing registries on the open internet that require credentials.

There are two main ways to leverage an authenticated registry in Rancher:

* Set one or more image pull secrets at the _global-level_, by configuring both the `system-default-registry-pull-secrets` and `system-default-registry` Rancher settings. 
  * This will configure both the local cluster and, by default, all downstream clusters to pull from this registry
* Set up a _cluster-level_ system default private registry for specific downstream imported or provisioned clusters.
  * When provisioning or importing a cluster in the Rancher UI, you can configure registry credentials in the **Advanced Options** or dedicated **Registries** section, depending on the cluster type.

:::note
Partial registry inheritance is not supported. A cluster that defines any cluster-level registry configuration will not inherit any global settings, it must redefine its own registry hostname and pull secrets independently.
:::

## Registry Behavior by Cluster Type

Because Rancher’s level of information and control varies across downstream environments, how it applies registry credentials depends on the specific cluster type. Understanding this behavior can help you better plan future deployments or troubleshoot existing setups.

### Provisioned Clusters (RKE2/K3s)

For provisioned RKE2 and K3s clusters, Rancher directly writes registries credentials into the container runtime (containerd) configuration on each node. Because authentication is handled at the node level, all workloads on the cluster, including user workloads, automatically benefit from registry authentication without needing image pull secrets defined on individual pods or deployments.

When multiple pull secrets are configured globally using the `system-default-registry-pull-secrets` setting, only the first secret that contains credentials matching the configured registry host is used when generating the containerd configuration. Any additional secrets will not be sent downstream. 

### Hosted (AKS, EKS, GKE, etc.) and Imported Clusters, and the Management Cluster 

For all other types of clusters, Rancher does not have a way to reliably configure the underlying container runtime. Instead, Kubernetes image pull secrets are propagated into Rancher-managed namespaces by the management cluster. These secrets will be propagated into the namespaces which belonging to the default `system` project and utilized by Rancher-managed components deployed into those namespaces.

Rancher owns the full life cycle of these propagated secrets, and any changes made to them will be reverted by Rancher upon cluster reconciliation. Changes to the registry configuration should always be done at the cluster or global levels using the Rancher UI, or by modifying the relevant `cluster.managment.cattle.io` object using `kubectl`. 

:::note
When manually specifying registry credentials on `clusters.management.cattle.io` objects, those credentials must be created within the `fleet-default` namespace. Only secrets of type `basic-auth`, `rke-auth`, or `.dockerconfigjson` are supported.
:::

Since Rancher isn't able to configure the underlying container runtime, user workloads will _not_ automatically receive registry authentication. Pull secrets must be created and configured independently when deploying the workload.

## Authenticated Registries and Chart Installation

When a cluster is configured to use an authenticated registry, Rancher automatically injects the configured pull secrets into the Helm values of charts offered through the built-in **rancher-charts** cluster repository. This allows those charts to pull images from the authenticated registry without any additional configuration during installation.

The credentials injected are determined by the cluster's registry configuration: if the cluster inherits the global registry settings, the global pull secrets are used. If the cluster has a cluster-level registry override configured, those cluster-specific secrets are used instead. This behavior will not occur if pull secrets are manually specified when installing the charts through the Rancher UI.

:::note
This behavior is specific to the built-in **rancher-charts** repository. Pull secret injection does not apply to custom repositories added by users and is not user-configurable.
:::

:::note
Unlike pull secrets propagated into the `system` namespace, chart specific pull secrets will only be updated during chart upgrades. 
:::

:::caution
Charts from **rancher-charts** may be installed into non-system namespaces. The pull secrets injected during installation will exist in those namespaces. Unlike system namespaces, user-accessible namespaces may not have RBAC policies that restrict who can read secrets. Review your cluster's RBAC configuration to ensure pull secret visibility is appropriately controlled.
:::

## Considerations When Using Global Settings

### Global Configuration Impacts

Changes to either `system-default-registry` or `system-default-registry-pull-secrets` affect all downstream clusters that inherit the global configuration, including triggering redeployments of Rancher-managed workloads such as the `cattle-cluster-agent` in those clusters. 

If registry credentials or the registry hostname are likely to change over time, configuring registry details at the cluster level rather than relying on global settings is recommended. This limits the impact of configuration changes to individual clusters and avoids unintended redeployments across your downstream environments.

### Use Read Only Registry Credentials

Registry credentials configured for use with Rancher should follow the principle of least privilege:

- Grant **read-only** (pull) access only. Rancher and the charts it deploys do not require write access to the registry.
- Scope credentials to only the images or repositories that the cluster needs to access.
- Avoid reusing the same credentials across environments with different trust boundaries.

Limiting credential scope reduces the impact if a secret is read by an unauthorized workload or user.
