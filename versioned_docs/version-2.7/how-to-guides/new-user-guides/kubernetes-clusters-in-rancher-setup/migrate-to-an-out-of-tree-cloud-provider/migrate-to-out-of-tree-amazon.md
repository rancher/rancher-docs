---
title: Migrating Amazon In-tree to Out-of-tree
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-amazon"/>
</head>

:::note
Rancher Prime provides access to Rancher v2.7.11, a version of Rancher v2.7.x which supports Kubernetes v1.27. If you use Rancher v2.7.11 and upgrade to Kubernetes 1.27, you must use an out-of-tree cloud provider.
:::

Kubernetes is moving away from maintaining cloud providers in-tree. In Kubernetes 1.27 and later, the in-tree cloud providers have been removed. The Rancher UI allows you to upgrade to Kubernetes v1.27 when you migrate from an in-tree to out-of-tree provider. 

However, if you're performing a manual migration, existing clusters must upgrade to Kubernetes v1.27 after you migrate in order to remain functional.

To migrate from the in-tree cloud provider to the out-of-tree AWS cloud provider, you must stop the existing cluster's kube controller manager and install the AWS cloud controller manager. There are many ways to do this. Refer to the official AWS documentation on the [external cloud controller manager](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for details.

If it's acceptable to have some downtime during migration, follow the instructions to [set up an external cloud provider](../set-up-cloud-providers/amazon.md#using-the-out-of-tree-aws-cloud-provider). These instructions outline how to configure the out-of-tree cloud provider for a newly provisioned cluster. During set up, there will be some downtime, as there is a time gap between when the old cloud provider stops running and when the new cloud provider starts to run.

If your setup can't tolerate any control plane downtime, you must enable leader migration. This facilitates a smooth transition from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to the official AWS documentation on [Using leader migration](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for more details.

:::note Important:
The Kubernetes [cloud controller migration documentation](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) states that it's possible to migrate with the same Kubernetes version, but assumes that the migration is part of a  Kubernetes upgrade. Refer to the Kubernetes documentation on [migrating to use the cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to see if you need to customize your setup before migrating. Confirm your [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration). If your cloud provider provides an implementation of the Node IPAM controller,  you also need to [migrate the IPAM controller](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).
:::

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

1. Update the cluster config to enable leader migration:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kube-controller-manager-arg:
            - enable-leader-migration
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/control-plane-role
              operator: In
              values:
                - 'true'
```

Note that the cloud provider is still `aws` at this step:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: aws
```

2. Cordon control plane nodes so that AWS cloud controller pods run on nodes only after upgrading to the external cloud provider:

```shell
kubectl cordon -l "node-role.kubernetes.io/control-plane=true"
```

3. To install the AWS cloud controller manager with leader migration enabled, follow Steps 1-3 for [deploying the cloud controller manager chart](../set-up-cloud-providers/amazon.md#using-the-out-of-tree-aws-cloud-provider). From Kubernetes 1.22 onwards, the kube-controller-manager will utilize a default configuration which will satisfy the controller-to-manager migration. Update container args of the `aws-cloud-controller-manager` under `spec.rkeConfig.additionalManifest` to enable leader migration:

```shell
- '--enable-leader-migration=true' 
```

4. Install the chart and confirm that the Daemonset `aws-cloud-controller-manager` successfully deployed:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

5. Update the provisioning cluster to change the cloud provider and remove leader migration args from the kube controller. 
If upgrading the Kubernetes version, set the Kubernetes version as well in the `spec.kubernetesVersion` section of the cluster YAML file

:::note Important

Only remove `cloud-provider-name: aws` if not relying on the rke2 supervisor to correctly set the providerID.

:::

Remove `enable-leader-migration` if you don't want it enabled in your cluster:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: external
```

Remove `enable-leader-migration` from:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kube-controller-manager-arg:
            - enable-leader-migration
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/control-plane-role
              operator: In
              values:
                - 'true'
```

:::tip
You can also disable leader migration after the upgrade, as leader migration is no longer required due to only one cloud-controller-manager and can be removed.
Upgrade the chart and remove the following section from the container arguments:

```yaml
- --enable-leader-migration=true 
```
:::

Verify the cloud controller manager update was successfully rolled out with the following command:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

6. The cloud provider is responsible for setting the ProviderID of the node. Check if all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```

</TabItem>

<TabItem value="RKE">

1. Update the cluster config to enable leader migration in `cluster.yml`:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

Note that the cloud provider is still `aws` at this step:

```yaml
cloud_provider:
  name: aws
```

2. Cordon the control plane nodes, so that AWS cloud controller pods run on nodes only after upgrading to the external cloud provider:

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. To install the AWS cloud controller manager, you must enable leader migration and follow the same steps as when installing AWS on a new cluster. To enable leader migration, add the following to the container arguments in step 7 while following the [steps to install the chart](../set-up-cloud-providers/amazon.md#helm-chart-installation-from-ui):

```yaml
- '--enable-leader-migration=true' 
```

4. Confirm that the chart is installed but that the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, RKE will upgrade and uncordon each node, and schedule `aws-controller-manager` pods.

5. Update `cluster.yml` to change the cloud provider and remove the leader migration arguments from the kube-controller.

  Selecting **External Amazon (out-of-tree)** sets `--cloud-provider=external` and lets you enable `useInstanceMetadataHostname`. You must enable `useInstanceMetadataHostname` for node-driver clusters and for custom clusters if not you don't provide a custom node name via `--node-name`. Enabling `useInstanceMetadataHostname` will query ec2 metadata service and set `/hostname` as `hostname-override` for `kubelet` and `kube-proxy`:

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

  Remove `enable-leader-migration` if you don't want it enabled in your cluster:

  ```yaml
  services:
    kube-controller:
      extra_args:
        enable-leader-migration: "true"
  ```

:::tip
You can also disable leader migration after you finish the migration. Upgrade the chart and remove the following section from the container arguments:

```yaml
- --enable-leader-migration=true 
```
:::

6. If  you're upgrading the cluster's Kubernetes version, set the Kubernetes version as well.

7. Update the cluster. The `aws-cloud-controller-manager` pods should now be running.

</TabItem>
</Tabs>
