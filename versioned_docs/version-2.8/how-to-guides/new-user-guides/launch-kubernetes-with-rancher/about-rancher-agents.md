---
title: Rancher Agents
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents"/>
</head>

There are two different agent resources deployed on Rancher managed clusters:

- [cattle-cluster-agent](#cattle-cluster-agent)
- [cattle-node-agent](#cattle-node-agent)

For a conceptual overview of how the Rancher server provisions clusters and communicates with them, refer to the [architecture](../../../reference-guides/rancher-manager-architecture/rancher-manager-architecture.md).

### cattle-cluster-agent

The `cattle-cluster-agent` is used to connect to the Kubernetes API of [Rancher Launched Kubernetes](launch-kubernetes-with-rancher.md) clusters. The `cattle-cluster-agent` is deployed using a Deployment resource.

### cattle-node-agent

The `cattle-node-agent` is used to interact with nodes in a [Rancher Launched Kubernetes](launch-kubernetes-with-rancher.md) cluster when performing cluster operations. Examples of cluster operations are upgrading Kubernetes version and creating/restoring etcd snapshots. The `cattle-node-agent` is deployed using a DaemonSet resource to make sure it runs on every node. The `cattle-node-agent` is used as fallback option to connect to the Kubernetes API of [Rancher Launched Kubernetes](launch-kubernetes-with-rancher.md) clusters when `cattle-cluster-agent` is unavailable.

### Requests

The `cattle-cluster-agent` pod does not define default CPU and memory request values. As a baseline, we recommend setting the CPU request at `50m` and memory request at `100Mi`. However, it is important that you ensure your cluster has the correct resources available and the use case has been assessed appropriately before doing so.

To configure request values through the UI:

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

1. When you create or edit an existing cluster, go to the **Cluster Options** section.
1. Expand the **Cluster Configuration** subsection.
1. Configure your request values using the **CPU Requests** and **Memory Requests** fields as needed.

</TabItem>
<TabItem value="RKE2/K3s">

1. When you create or edit an existing cluster, go to the **Cluster Configuration**.
1. Select the **Cluster Agent** subsection.
1. Configure your request values using the **CPU Reservation** and **Memory Reservation** fields as needed.

</TabItem>
</Tabs>

If you prefer to configure via YAML, add the following snippet to your configuration file:

<Tabs groupId="k8s-distro">
<TabItem value="RKE">

```yaml
cluster_agent_deployment_customization:
  override_resource_requirements:
    requests:
      cpu: 50m
      memory: 100Mi
```

</TabItem>
<TabItem value="RKE2/K3s">

```yaml
spec:
  clusterAgentDeploymentCustomization:
    overrideResourceRequirements:
      requests:
        cpu: 50m
        memory: 100Mi 
```

</TabItem>
</Tabs>

### Scheduling rules

The `cattle-cluster-agent` uses either a fixed set of tolerations, or dynamically-added tolerations based on taints applied to the control plane nodes. This structure allows [Taint based Evictions](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions) to work properly for `cattle-cluster-agent`.

If control plane nodes are present in the cluster, the default tolerations will be replaced with tolerations matching the taints on the control plane nodes. The default set of tolerations are described below.

| Component              | nodeAffinity nodeSelectorTerms             | nodeSelector | Tolerations                                                                    |
| ---------------------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------------ |
| `cattle-cluster-agent` | `beta.kubernetes.io/os:NotIn:windows`      | none         | **Note:** These are the default tolerations, and will be replaced by tolerations matching taints applied to controlplane nodes.<br/><br/>`effect:NoSchedule`<br/>`key:node-role.kubernetes.io/controlplane`<br/>`value:true`<br/><br/>`effect:NoSchedule`<br/>`key:node-role.kubernetes.io/control-plane`<br/>`operator:Exists`<br/><br/>`effect:NoSchedule`<br/>`key:node-role.kubernetes.io/master`<br/>`operator:Exists` |
| `cattle-node-agent`    | `beta.kubernetes.io/os:NotIn:windows`      | none         | `operator:Exists`                                                              |

The `cattle-cluster-agent` Deployment has preferred scheduling rules using `preferredDuringSchedulingIgnoredDuringExecution`, favoring to be scheduled on nodes with the `controlplane` node. When there are no controlplane nodes visible in the cluster (this is usually the case when using [Clusters from Hosted Kubernetes Providers](../kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md)), you can add the label `cattle.io/cluster-agent=true` on a node to prefer scheduling the `cattle-cluster-agent` pod to that node.

See [Kubernetes: Assigning Pods to Nodes](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/) to find more information about scheduling rules.

The `preferredDuringSchedulingIgnoredDuringExecution` configuration is shown in the table below:

| Weight | Expression                                       |
| ------ | ------------------------------------------------ |
| 100    | `node-role.kubernetes.io/controlplane:In:"true"` |
| 100    | `node-role.kubernetes.io/control-plane:In:"true"` |
| 100    | `node-role.kubernetes.io/master:In:"true"` |
| 1      | `cattle.io/cluster-agent:In:"true"`         |

