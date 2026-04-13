| Action | Rancher Launched Kubernetes Clusters |  EKS, GKE and AKS Clusters<sup>1</sup> | Other Hosted Kubernetes Clusters | Non-EKS or GKE Imported Clusters | Turtles/CAPI Clusters |
| --- | --- | ---| ---|----|----|
| [Using kubectl and a kubeconfig file to Access a Cluster](../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Managing Cluster Members](../how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Editing and Upgrading Clusters](../reference-guides/cluster-configuration/cluster-configuration.md) | ✓ | ✓ | ✓ | ✓<sup>2</sup> | ✓<sup>5</sup> |
| [Managing Nodes](../how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md) | ✓ | ✓ | ✓ | ✓<sup>3</sup> | ✓<sup>5</sup> |
| [Managing Persistent Volumes and Storage Classes](../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Managing Projects, Namespaces and Workloads](../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Using App Catalogs](../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Configuring Tools ([Alerts, Notifiers, Monitoring](../integrations-in-rancher/monitoring-and-alerting/monitoring-and-alerting.md), [Logging](../integrations-in-rancher/logging/logging.md), [Istio](../integrations-in-rancher/istio/istio.md)) | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Running Security Scans](../how-to-guides/advanced-user-guides/compliance-scan-guides/compliance-scan-guides.md) | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Ability to rotate certificates](../how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md) | ✓ | ✓  |  | | |
| Ability to [backup](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md) and [restore](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md) Rancher-launched clusters | ✓ | ✓ |  | ✓<sup>4</sup> | |
| [Cleaning Kubernetes components when clusters are no longer reachable from Rancher](../how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes.md) | ✓ | | | | |

1. Imported EKS, GKE and AKS clusters have the same options available as EKS, GKE, and AKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed. Note that does not include EKS, GKE, and AKS clusters created via Turtles/CAPI, refer to the "Turtles/CAPI Clusters" column for those.

2. For imported clusters, cluster configuration options can only be edited for [K3s and RKE2 clusters.](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md)

3. For imported cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.

4. For imported clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery.

5. Exclusively via the Cluster API.
