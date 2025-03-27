---
title: Enabling Cluster Agent Scheduling Customization
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-cluster-agent-scheduling-customization"/>
</head>

In Rancher v2.11.0 and later, you can enable the automatic deployment of a Priority Class and Pod Disruption Budget for the `cattle-cluster-agent`.

When this feature is enabled, all newly provisioned Node Driver, Custom, and Imported RKE2 and K3s clusters will automatically deploy a Priority Class and Pod Disruption Budget during the provisioning process. Existing clusters can be gradually updated with this new behavior using the [Rancher UI or by setting a specific annotation](#updating-existing-clusters) on cluster objects.

This feature is disabled by default.

## Enabling Cluster Agent Scheduling Customization

:::info
Enabling or disabling this feature only impacts new clusters. Existing downstream clusters will not be automatically updated. See [_Updating Existing Clusters_](#updating-existing-clusters).
:::

1. In the upper left corner, click **☰ > Global Settings**
1. Select **Feature Flags**
1. Find the `cluster-agent-scheduling-customization` feature and click **⋮ > Activate**

## Configuring the Global Settings

You can customize the default Priority Class (PC) and Pod Disruption Budget (PDB) by updating the `cluster-agent-default-priority-class` and `cluster-agent-default-pod-disruption-budget` global settings in the Rancher UI. Note that both the Priority Class and Pod Disruption Budget have configuration restrictions:

+ The `Value` set for the default PC cannot be less than negative 1 billion, or greater than 1 billion.
+ The `PreemptionPolicy` set for the PC must be equal to `PreemptLowerPriority` or `Never`.
+ You cannot configure the PDB `minAvailable` and `maxUnavailable` fields to both have a non-zero value.
+ The PDB `minAvailable` must either be a non-negative whole number integer, or a non-negative whole number percent (e.g. `1` or `100%`).
+ The PDB `maxUnavailable` must either be a non-negative whole number integer, or a non-negative whole number percent (e.g. `1` or `100%`).


## Updating Existing Clusters

:::info
When this feature is disabled, you cannot modify the cluster agent scheduling customization fields for existing clusters. However, you can always remove the configuration, regardless of the feature's status.
:::

After enabling this feature, you can configure scheduling customization for existing clusters in two ways:

+ **Using the Rancher UI**
  + Edit the desired cluster and navigate to the **Cluster Agent** tab within the **Cluster Configuration** section.
  + Enable the `Prevent Rancher cluster agent pod eviction` checkbox.
    + The necessary fields on the associated `clusters.provisioning.cattle.io` or `clusters.management.cattle.io` object will be automatically configured using the values set in the global settings.
  + Save the cluster.
+ **Using an annotation**
  + The `provisioning.cattle.io/enable-scheduling-customization` annotation can be used to update clusters without requiring the use of the Rancher UI. This annotation will be automatically removed from the cluster after the Priority Class and Pod Disruption Budget are configured.
    + The value of this annotation can be either `true` or `false`, to add or remove scheduling customization automatically.
    + For Node Driver Provisioned and Custom clusters, apply this annotation on the associated `clusters.provisioning.cattle.io` object.
    + For Imported clusters, apply the annotation on the associated `clusters.management.cattle.io` object.

## Applying Updated Global Settings

In order to prevent unexpected changes in scheduler behavior, Rancher does not update existing downstream clusters when the `cluster-agent-default-priority-class` and `cluster-agent-default-pod-disruption-budget` global settings are changed. There are two ways to update existing clusters to use the most recent global settings:

+ **Using the Rancher UI**
  + When configuring a cluster, an additional checkbox will be shown in the **Cluster Agent** tab within the **Cluster Configuration** section. Checking the `Apply global settings for Priority Class and Pod Disruption Budget` checkbox will automatically update the Priority Class and Pod Disruption Budget to match the global settings once the cluster is saved.
+ **Adjusting the cluster yaml**
  + You may manually adjust the relevant fields in the cluster object using `kubectl` or the Rancher UI 'Edit As Yaml' feature. Scheduling customization can be found in the `spec.ClusterAgentDeploymentCustomization.SchedulingCustomization` section of the cluster object.
  + Alternatively, the `provisioning.cattle.io/enable-scheduling-customization` annotation can be used to remove and re-add the updated scheduling customization fields set on a specific cluster.

## Downstream Objects

When this feature is enabled for a given cluster, two downstream resources will be automatically created by Rancher:

+ A Pod Disruption Budget will be automatically created in the `cattle-system` namespace, named `cattle-cluster-agent-pod-disruption-budget`.
+ A Priority Class will be automatically created, named `cattle-cluster-agent-priority-class`.

These objects are maintained by Rancher and must not be modified or deleted. The Rancher server will automatically update these objects to match the configuration set on the Cluster object and remove them when they are no longer needed.

### RBAC considerations

Before enabling this feature on a downstream cluster, cluster administrators should assess their current RBAC configuration to prevent common access to the `cattle-cluster-agent-priority-class`. In cases where external users have access to a cluster, such as when offering clusters as a service, it is recommended to limit access to the `cattle-cluster-agent-priority-class` object to prevent changes or deletion.

Similar considerations do not need to be made for the `cattle-cluster-agent-pod-disruption-budget` object, as Pod Disruption Budgets are namespaced objects. Rancher will create the `cattle-cluster-agent-pod-disruption-budget` in the privileged `cattle-system` namespace.
