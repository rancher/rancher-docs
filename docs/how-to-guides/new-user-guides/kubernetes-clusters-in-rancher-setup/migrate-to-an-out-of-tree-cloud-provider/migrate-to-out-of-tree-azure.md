---
title: Migrating Azure In-tree to Out-of-tree
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-azure"/>
</head>

Kubernetes is moving away from maintaining cloud providers in-tree.

Starting with Kubernetes 1.29, in-tree cloud providers have been disabled. You must disable `DisableCloudProviders` and `DisableKubeletCloudCredentialProvider` to use the in-tree Azure cloud provider or migrate from in-tree cloud provider to out-of-tree provider. You can disable the required feature gates by setting `feature-gates=DisableCloudProviders=false` as an additional argument for the cluster's Kubelet, Controller Manager, and API Server in the advanced cluster configuration. Additionally, set `DisableKubeletCloudCredentialProvider=false` in the Kubelet's arguments to enable in-tree functionality for authenticating to Azure container registries for image pull credentials. See [upstream docs](https://github.com/kubernetes/kubernetes/pull/117503) for more details.

 In Kubernetes v1.30 and later, the in-tree cloud providers have been removed. Rancher allows you to upgrade to Kubernetes v1.30 when you migrate from an in-tree to out-of-tree provider.

To migrate from the in-tree cloud provider to the out-of-tree Azure cloud provider, you must stop the existing cluster's kube controller manager and install the Azure cloud controller manager.

If it's acceptable to have some downtime during migration, follow the instructions to [set up an external cloud provider](../set-up-cloud-providers/azure.md#using-the-out-of-tree-azure-cloud-provider). These instructions outline how to configure the out-of-tree cloud provider for a newly provisioned cluster. During set up, there will be some downtime, as there is a time gap between when the old cloud provider stops running and when the new cloud provider starts to run.

If your setup can't tolerate any control plane downtime, you must enable leader migration. This facilitates a smooth transition from the controllers in the kube controller manager to their counterparts in the cloud controller manager.

:::note Important:
The Kubernetes [cloud controller migration documentation](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) states that it's possible to migrate with the same Kubernetes version, but assumes that the migration is part of a Kubernetes upgrade. Refer to the Kubernetes documentation on [migrating to use the cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to see if you need to customize your setup before migrating. Confirm your [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration). If your cloud provider provides an implementation of the Node IPAM controller,  you also need to [migrate the IPAM controller](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).

Starting with Kubernetes v1.26, in-tree persistent volume types `kubernetes.io/azure-disk` and `kubernetes.io/azure-file` are deprecated and no longer supported. There are no plans to remove these drivers following their deprecation, however you should migrate to the corresponding CSI drivers, `disk.csi.azure.com` and `file.csi.azure.com`. To review the migration options for your storage classes and upgrade your cluster to use Azure Disks and Azure Files CSI drivers, see [Migrate from in-tree to CSI drivers](https://learn.microsoft.com/en-us/azure/aks/csi-migrate-in-tree-volumes).
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

Note that the cloud provider is still `azure` at this step:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: azure
```

2. Cordon control plane nodes so that Azure cloud controller pods run on nodes only after upgrading to the external cloud provider:

```shell
kubectl cordon -l "node-role.kubernetes.io/control-plane=true"
```

3. To deploy the Azure cloud controller manager, use any of the available options: 
- UI: Follow steps 1-10 of [Helm chart installation from UI](../set-up-cloud-providers/azure.md#helm-chart-installation-from-ui) to install the cloud controller manager chart.
- CLI: Follow steps 1-4 of [Helm chart installation from CLI](../set-up-cloud-providers/azure.md#helm-chart-installation-from-cli).
- Update the cluster's additional manifest: Follow steps 2-3 to [install the cloud controller manager chart](../set-up-cloud-providers/azure.md#using-the-out-of-tree-azure-cloud-provider).

Confirm that the chart is installed but that the new pods aren't running yet due to cordoned controlplane nodes.

4. To enable leader migration, add `--enable-leader-migration` to the container arguments of `cloud-controller-manager`:

```shell 
kubectl -n kube-system patch deployment cloud-controller-manager \
--type=json \
-p='[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--enable-leader-migration"}]'
```

5. Update the provisioning cluster to change the cloud provider and remove leader migration args from the kube controller manager.
   If upgrading the Kubernetes version, set the Kubernetes version as well in the `spec.kubernetesVersion` section of the cluster YAML file.

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: external
```

Remove `enable-leader-migration` from the kube controller manager:

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

6. Uncordon control plane nodes so that Azure cloud controller pods now run on nodes:

```shell
kubectl uncordon -l "node-role.kubernetes.io/control-plane=true"
```

7. Update the cluster. The `cloud-controller-manager` pods should now be running.

```shell
kubectl rollout status deployment -n kube-system cloud-controller-manager
kubectl rollout status daemonset -n kube-system cloud-node-manager
```

8. The cloud provider is responsible for setting the ProviderID of the node. Check if all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```

9. You can also disable leader migration after the upgrade, as leader migration is no longer required. Since there is now only one cloud-controller-manager, leader migration can be removed.
    Update the `cloud-controller-manager` deployment to remove leader migration from the container arguments:

```yaml
- --enable-leader-migration=true 
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

Note that the cloud provider is still `azure` at this step:

```yaml
cloud_provider:
  name: azure
```

2. Cordon the control plane nodes, so that Azure cloud controller pods run on nodes only after upgrading to the external cloud provider:

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. To install the Azure cloud controller manager, follow the same steps as when installing Azure cloud provider on a new cluster:
- UI: Follow steps 1-10 of [Helm chart installation from UI](../set-up-cloud-providers/azure.md#helm-chart-installation-from-ui) to install the cloud controller manager chart.
- CLI: Follow steps 1-4 of [Helm chart installation from CLI](../set-up-cloud-providers/azure.md#helm-chart-installation-from-cli) to install the cloud controller manager chart.

4. Confirm that the chart is installed but that the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, RKE will upgrade and uncordon each node, and schedule `cloud-controller-manager` pods.

5. To enable leader migration, add `--enable-leader-migration` to the container arguments of `cloud-controller-manager`:

```shell 
kubectl -n kube-system patch deployment cloud-controller-manager \
--type=json \
-p='[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--enable-leader-migration"}]'
```

6. Update `cluster.yml` to change the cloud provider to `external` and remove the leader migration arguments from the kube-controller.

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external
```

Remove `enable-leader-migration` if you don't want it enabled in your cluster:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

7. If you're upgrading the cluster's Kubernetes version, set the Kubernetes version as well.

8. Update the cluster. The `cloud-controller-manager` pods should now be running. 

```shell
kubectl rollout status deployment -n kube-system cloud-controller-manager
kubectl rollout status daemonset -n kube-system cloud-node-manager
```

9. The cloud provider is responsible for setting the ProviderID of the node. Verify that all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```

10. (Optional) You can also disable leader migration after the upgrade, as leader migration is not required with only one cloud-controller-manager.
Update the `cloud-controller-manager` deployment to remove leader migration from the container arguments:

```yaml
- --enable-leader-migration=true 
```

</TabItem>
</Tabs>

