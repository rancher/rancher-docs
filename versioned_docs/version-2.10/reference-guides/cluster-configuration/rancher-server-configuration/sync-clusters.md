---
title: Syncing Hosted Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"/>
</head>

Syncing allows Rancher to update cluster values so that they're up to date with the corresponding cluster object hosted in AKS, EKS or GKE. This enables sources other than Rancher to own a hosted cluster’s state. 

:::warning
You may accidentally overwrite the state from one source if you simultaneously process an update from another source. This may also occur if you process an update from one source within 5 minutes of finishing an update from another source.
:::

### How it works

There are two fields on the Rancher Cluster object that must be understood to understand how syncing works:

1. The config object for the cluster, located on the Spec of the Cluster:

   * For AKS, the field is called AKSConfig
   * For EKS, the field is called EKSConfig
   * For GKE, the field is called GKEConfig

2. The UpstreamSpec object

   * For AKS, this is located on the AKSStatus field on the Status of the Cluster.
   * For EKS, this is located on the EKSStatus field on the Status of the Cluster.
   * For GKE, this is located on the GKEStatus field on the Status of the Cluster.

The struct types that define these objects can be found in their corresponding operator projects:

  * [aks-operator](https://github.com/rancher/aks-operator/blob/master/pkg/apis/aks.cattle.io/v1/types.go)
  * [eks-operator](https://github.com/rancher/eks-operator/blob/master/pkg/apis/eks.cattle.io/v1/types.go)
  * [gke-operator](https://github.com/rancher/gke-operator/blob/master/pkg/apis/gke.cattle.io/v1/types.go)

All fields  are nillable, except for the following: the cluster name, the location (region or zone), Imported, and the cloud credential reference.

The AKSConfig, EKSConfig or GKEConfig represents the desired state. Nil values are ignored. Fields that are non-nil in the config object can be thought of as managed. When a cluster is created in Rancher, all fields are non-nil and therefore managed. When a pre-existing cluster is registered in Rancher all nillable fields are set to nil and aren't managed. Those fields become managed once their value has been changed by Rancher.

UpstreamSpec represents the cluster as it is in the hosted Kubernetes provider. It's refreshed every 5 minutes. After the UpstreamSpec is refreshed, Rancher checks if the cluster has an update in progress. If it's currently updating, nothing further is done. If it is not currently updating, any managed fields on AKSConfig, EKSConfig or GKEConfig are overwritten with their corresponding value from the recently updated UpstreamSpec.

:::warning
When you import a cluster from a cloud provider into Rancher, UpstreamSpec represents the cluster state and Config is empty. If you then update the imported cluster through the Rancher UI, both UpstreamSpec and Config become non-null. Any further updates to the cluster should be applied through Rancher. This is because there is no safe way to determine if changes originating from UpstreamSpec represent the desired state or just a mismatch with Config. If you update the imported cluster through the cloud provider console after you apply any updates through the Rancher UI, the controller will deploy a rollback and the content of Config will be considered the desired state.
:::

The effective desired state can be thought of as the UpstreamSpec, plus all non-nil fields in the AKSConfig, EKSConfig or GKEConfig. This is what is displayed in the UI.

If Rancher and another source attempt to update a cluster at the same time, or within 5 minutes of an update finishing, any managed fields are likely to get caught in a race condition. To use EKS as an example, a cluster may have PrivateAccess as a managed field. If PrivateAccess is false and then enabled in EKS console at 11:01, and tags are updated from Rancher before 11:05, then the value is likely to be overwritten. This can also occur if tags are updated while the cluster is still processing the update. The issue described in this example shouldn't occur if the cluster is registered and the PrivateAccess fields are nil.
