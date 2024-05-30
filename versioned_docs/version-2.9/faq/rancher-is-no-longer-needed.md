---
title: Rancher is No Longer Needed
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/rancher-is-no-longer-needed"/>
</head>

This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted.


### If the Rancher server is deleted, what happens to the workloads in my downstream clusters?

If Rancher is ever deleted or unrecoverable, all workloads in the downstream Kubernetes clusters managed by Rancher will continue to function as normal.

### If the Rancher server is deleted, how do I access my downstream clusters?

The capability to access a downstream cluster without Rancher depends on the type of cluster and the way that the cluster was created. To summarize:

- **Registered clusters:** The cluster will be unaffected and you can access the cluster using the same methods that you did before the cluster was registered into Rancher.
- **Hosted Kubernetes clusters:** If you created the cluster in a cloud-hosted Kubernetes provider such as EKS, GKE, or AKS, you can continue to manage the cluster using your provider's cloud credentials.
- **RKE clusters:** To access an [RKE cluster,](../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) the cluster must have the [authorized cluster endpoint](../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint) enabled, and you must have already downloaded the cluster's kubeconfig file from the Rancher UI. (The authorized cluster endpoint is enabled by default for RKE clusters.) With this endpoint, you can access your cluster with kubectl directly instead of communicating through the Rancher server's [authentication proxy.](../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#1-the-authentication-proxy) For instructions on how to configure kubectl to use the authorized cluster endpoint, refer to the section about directly accessing clusters with [kubectl and the kubeconfig file.](../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) These clusters will use a snapshot of the authentication as it was configured when Rancher was removed.

### What if I don't want Rancher anymore?

:::note

The previously recommended [System Tools](../reference-guides/system-tools.md) has been deprecated since June 2022.

:::

If you [installed Rancher on a Kubernetes cluster,](../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md) remove Rancher by using the [Rancher Cleanup](https://github.com/rancher/rancher-cleanup) tool.

Uninstalling Rancher in high-availability (HA) mode will also remove all `helm-operation-*` pods and the following apps:

- fleet
- fleet-agent
- rancher-operator
- rancher-webhook

Custom resources (CRDs) and custom namespaces will still need to be manually removed.

If you installed Rancher with Docker, you can uninstall Rancher by removing the single Docker container that it runs in.

Imported clusters will not be affected by Rancher being removed. For other types of clusters, refer to the section on [accessing downstream clusters when Rancher is removed.](#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters)

### What if I don't want my registered cluster managed by Rancher?

If a registered cluster is deleted from the Rancher UI, the cluster is detached from Rancher, leaving it intact and accessible by the same methods that were used to access it before it was registered in Rancher.

To detach the cluster,

1. In the upper left corner, click **☰ > Cluster Management**.
2. Go to the registered cluster that should be detached from Rancher and click **⋮ > Delete**.
3. Click **Delete**.

**Result:** The registered cluster is detached from Rancher and functions normally outside of Rancher.

### What if I don't want my RKE cluster or hosted Kubernetes cluster managed by Rancher?

At this time, there is no functionality to detach these clusters from Rancher. In this context, "detach" is defined as the ability to remove Rancher components from the cluster and manage access to the cluster independently of Rancher.

The capability to manage these clusters without Rancher is being tracked in this [issue.](https://github.com/rancher/rancher/issues/25234)

For information about how to access clusters if the Rancher server is deleted, refer to [this section.](#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters)
