---
title: 将 Amazon 从树内迁移到树外
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-amazon"/>
</head>

Kubernetes 不再在树内维护云提供商。在 Kubernetes v1.27 及更高版本中，树内云提供商已被移除。当你从树内提供商迁移到树外提供商时，Rancher UI 允许你升级到 Kubernetes v1.27。

不过，如果你执行的是手动迁移，现有集群必须在迁移后升级到 Kubernetes v1.27 才能继续运行。

要从树内云提供商迁移到树外 AWS 云提供商，必须停止现有集群的 kube 控制器管理器，并安装 AWS 云控制器管理器。有许多方法可以做到这一点。有关详情，请参阅有关[外部云控制器管理器](https://cloud-provider-aws.sigs.k8s.io/getting_started/)的 AWS 官方文档。

如果可以接受迁移过程中出现一些停机，请按照说明[设置外部云提供商](../set-up-cloud-providers/amazon.md#using-the-out-of-tree-aws-cloud-provider)。这些说明概述了如何为新配置的集群配置树外云提供商。在设置过程中，会有一些停机，因为从旧云提供商停止运行到新云提供商开始运行之间会有一段时间的间隔。

如果您的设置不能容忍任何控制平面停机，则必须启用领导者迁移。这有助于从 kube 控制器管理器中的控制器顺利过渡到云控制器管理器中的对应控制器。有关详细信息，请参阅 AWS 官方文档[使用领导者迁移](https://cloud-provider-aws.sigs.k8s.io/getting_started/)。

:::note Important:
Kubernetes [云控制器迁移文档](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin)指出，可以使用相同的 Kubernetes 版本进行迁移，但假设迁移是 Kubernetes 升级的一部分。请参考有关[迁移到要使用的云控制器管理器](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/)的 Kubernetes 文档，了解迁移前是否需要自定义设置。确认[迁移配置值](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration)。如果您的云提供商提供 Node IPAM 控制器的实现，您还需要迁移 [IPAM 控制器](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration)。
:::

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

1. 更新集群配置，启用领导者迁移：

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
                - "true"
```

请注意，云提供商在此步骤中仍是`aws`

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: aws
```

2. 标记控制平面节点不可调度，以便 AWS 云控制器 pod 仅在升级到外部云提供商后才在节点上运行：

```shell
kubectl cordon -l "node-role.kubernetes.io/control-plane=true"
```

3. 要安装启用了领导者迁移的 AWS 云控制器管理器，请遵循[部署云控制器管理器 Chart](../set-up-cloud-providers/amazon.md#using-the-out-of-tree-aws-cloud-provider) 的步骤 1-3。从 Kubernetes 1.22 起，kube-controller-manager 将使用默认配置，该配置将满足 controller-to-manager 的迁移。更新 `spec.rkeConfig.additionalManifest` 下 `aws-cloud-controller-manager` 的容器参数，以启用领导者迁移：

```shell
- '--enable-leader-migration=true'
```

4. 安装 Chart 并确认 Daemonset `aws-cloud-controller-manager` 已成功部署：

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

5. 更新配置集群以更改云提供商，并从 kube 控制器中移除领导者迁移 参数。如果升级 Kubernetes 版本，也要在集群 YAML 文件的 `spec.kubernetesVersion` 部分设置 Kubernetes 版本

:::note Important

如果不依赖 rke2 监管程序正确设置提供商 ID，则只移除 `cloud-provider-name: aws`。

:::

如果不想在集群中启用 `enable-leader-migration` 功能，请将其移除：

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: external
```

移除 `enable-leader-migration`：

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
                - "true"
```

:::tip

您也可以在升级后禁用领导者迁移，因为由于只有一个云控制器管理器，不再需要领导者迁移，可以将其移除。升级 Chart 并从容器参数中删除以下部分：

```yaml
- --enable-leader-migration=true
```

:::

使用以下命令验证云控制器管理器更新是否成功上线：

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

6. 云提供商负责设置节点的 ProviderID。检查是否所有节点都用 ProviderID 进行了初始化：

```shell
kubectl describe nodes | grep "ProviderID"
```

</TabItem>

<TabItem value="RKE">

1. 更新集群配置，在 `cluster.yml` 中启用领导者迁移：

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

请注意，云提供商在此步骤中仍是`aws`

```yaml
cloud_provider:
  name: aws
```

2. 标记控制平面节点不可调度，以便 AWS 云控制器 pod 仅在升级到外部云提供商后才在节点上运行：

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. 要安装 AWS 云控制器管理器，必须启用领导者迁移，并遵循在新集群上安装 AWS 时的相同步骤。要启用领导者迁移，请在步骤 7 中的容器参数中添加以下内容，同时[按照步骤安装 Chart](../set-up-cloud-providers/amazon.md#helm-chart-installation-from-ui)：

```yaml
- "--enable-leader-migration=true"
```

4. 确认 Chart 已安装，但由于控制面板节点不可调度，新的 pod 尚未运行。在下一步更新集群后，RKE 将升级并允许对每个节点的调度，并调度 `aws-controller-manager` pod。

5. 更新 `cluster.yml`以更改云提供商，并从 kube-controller 中移除领导者迁移参数。

选择 **External Amazon (out-of-tree)** 可设置 `--cloud-provider=external`，并启用 `useInstanceMetadataHostname`。节点驱动集群和自定义集群必须启用 `useInstanceMetadataHostname`，否则无法通过 `--node-name`提供自定义节点名称。启用 `useInstanceMetadataHostname` 会查询 ec2 元数据服务，并为 `kubelet` 和 `kube-proxy`将 `/hostname` 设置为 `hostname-override` ：

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

如果不想在集群中启用 `enable-leader-migration`，请移除它：

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

:::tip
完成迁移后，还可以禁用领导者迁移。升级 Chart 并从容器参数中删除以下部分：

```yaml
- --enable-leader-migration=true
```

:::

6. 如果要升级集群的 Kubernetes 版本，也要设置 Kubernetes 版本。

7. 更新集群。现在，`aws-cloud-controller-manager` pod 应该已经运行。

</TabItem>
</Tabs>
