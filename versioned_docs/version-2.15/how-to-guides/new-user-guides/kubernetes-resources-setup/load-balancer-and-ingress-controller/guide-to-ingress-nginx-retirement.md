---
title: Guide to Ingress NGINX Retirement
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/guide-to-ingress-nginx-retirement"/>
</head>

The Kubernetes SIG Network and the Security Response Committee announced the [retirement of the Ingress NGINX project](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/). Upstream best-effort maintenance, and all associated upstream releases, bug fixes, or security updates, ended March 2026.

To support users during this transition, Rancher provides clear migration paths to Traefik. This guide centralizes the information on how to proceed based on your specific deployment scenario.

## Support and timelines

Rancher and RKE2 life cycles align with the upstream retirement schedule.

:::warning
After March 2026, upstream Ingress NGINX images no longer receive updates. Any images built with patches after this date are restricted to commercial customers. Users must migrate to Traefik or another supported Ingress controller before this deadline to ensure continued security and compatibility.
:::

## Migration paths by environment

For organizations ready to move, there is a supported path to Traefik. Traefik includes a compatibility layer that can interpret many existing Ingress NGINX annotations. Identify your cluster environment below to find the correct migration approach.

### Standalone RKE2 clusters

For standalone or imported RKE2 clusters currently using Ingress NGINX, follow the official migration [guide for standalone RKE2 clusters](https://support.scc.suse.com/s/kb/Migrating-from-Ingress-NGINX-to-Traefik-in-a-standalone-RKE2-cluster?language=en_US).

The migration process involves a four-phase strategy:

1. **Dual ingress controller setup:** Enable Traefik alongside Ingress NGINX using temporary, non-conflicting ports.
1. **Parallel migration and validation:** Duplicate Ingress resources and test Traefik's handling of the existing annotations.
1. **Final switchover:** Remove Ingress NGINX and configure Traefik to use the standard ports.
1. **Cleanup:** Delete the legacy Ingress objects.

### Rancher server on RKE2 (local clusters)

When migrating a Rancher local cluster, the Rancher Ingress resource requires specific handling to prevent lockouts. Follow the specific [guide for migrating the Rancher Ingress to Traefik in an RKE2 cluster](https://support.scc.suse.com/s/kb/How-to-migrate-the-Rancher-Ingress-to-Traefik-in-an-RKE2-cluster?language=en_US). This guide builds upon the standalone migration phases but includes steps tailored to the Rancher management server.

### Downstream RKE2 clusters (provisioned by Rancher)

For RKE2 clusters provisioned and managed by Rancher, migration options are integrated directly into the user interface.

:::note
This migration option is only possible in Rancher v2.14.0+.
:::

The cluster configuration interface provides a Dual Mode migration option. This allows you to safely test and migrate traffic from Ingress NGINX to Traefik directly from the cluster management page. For more information, refer to the documentation.

### Rancher on managed Kubernetes (Amazon EKS, Azure AKS, Google GKE)

If you run Rancher on a managed Kubernetes service such as [Amazon Elastic Kubernetes Service (EKS)](../../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md#5-install-an-ingress), [Azure Kubernetes Service (AKS)](../../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md#5-install-an-ingress), or [Google Kubernetes Engine (GKE)](../../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md#7-install-an-ingress), the recommendation is to migrate to Traefik.

Users should deploy and migrate to the upstream Traefik proxy distribution.

## Impact on other open source projects

The retirement of Ingress NGINX impacts other related projects in the following ways:

- Longhorn: There is no impact on the Longhorn backend. However, administrators must reconfigure their Ingress to upgrade the Longhorn UI. For more information, refer to [Create an Ingress with Basic Authentication (Traefik)](https://longhorn.io/docs/1.11.1/deploy/accessing-the-ui/longhorn-ingress-traefik/).
- Fleet: Configuring a webhook service is affected. Refer to the [Fleet documentation](https://fleet.rancher.io/0.15/how-tos-for-users/webhook#_1_configure_the_webhook_service) for more information.
- Ingress NGINX references in documentation for other projects have been removed.
