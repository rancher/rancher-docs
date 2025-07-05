---
title: RKE2 集群配置参考
---

本文介绍 Rancher 中可用于新的或现有的 RKE2 Kubernetes 集群的配置选项。

## 概述

你可以通过以下两种方式之一来配置 Kubernetes 选项：

- [Rancher UI](#rancher-ui-中的配置选项)：使用 Rancher UI 来选择设置 Kubernetes 集群时常用的自定义选项。
- [集群配置文件](#集群配置文件参考)：高级用户可以创建一个 RKE2 配置文件，而不是使用 Rancher UI 来为集群选择 Kubernetes 选项。配置文件让你能设置更多可用于 RKE2 的其他[安装选项](https://docs.rke2.io/install/configuration)。

## 在 Rancher UI 中使用表单编辑集群

要编辑你的集群：

1. 在左上角，单击 **☰ > 集群管理**。
1. 转到要配置的集群，然后单击 **⋮ > 编辑配置**。

## 使用 YAML 编辑集群

高级用户可以创建一个 RKE2 配置文件，而不是使用 Rancher UI 来为集群选择 Kubernetes 选项。配置文件可以让你使用 YAML 来指定 RKE2 安装中可用的任何选项。

要直接从 Rancher UI 中编辑 RKE2 配置文件：

1. 点击 **☰ > 集群管理**。
1. 转到你要配置的集群，然后单击 **⋮ > 以 YAML 文件编辑**。
1. 编辑 `rkeConfig` 参数下的 RKE 选项。

## Rancher UI 中的配置选项

:::tip

一些高级配置选项没有在 Rancher UI 表单中开放，但你可以通过在 YAML 中编辑 RKE2 集群配置文件来启用这些选项。有关 YAML 中 RKE2 Kubernetes 集群的可配置选项的完整参考，请参阅 [RKE2 文档](https://docs.rke2.io/install/configuration)。

:::

## 主机池

本小节介绍了通用的主机池配置。对于针对特定基础设施提供商的配置，请参阅以下页面：

- [Azure](../downstream-cluster-configuration/machine-configuration/azure.md)
- [DigitalOcean](../downstream-cluster-configuration/machine-configuration/digitalocean.md)
- [EC2](../downstream-cluster-configuration/machine-configuration/amazon-ec2.md)

### 池名称

主机池的名称。

### 主机数量

池中的主机数。

### 角色

将 etcd、controlplane 和 worker 角色分配给节点的选项。

### 高级配置

#### 自动替换

如果节点无法访问的持续时间达到该值，则会被自动删除和替换。

#### 删除前清空

通过在删除节点之前驱逐所有 pod 来清空节点。

#### Kubernetes 节点标签

将[标签](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)（label）添加到节点，让对象选择更加简便。

有关标签语法的详细信息，请参阅 [Kubernetes 文档](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。

#### 污点

将[污点](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/)（taint）添加到节点，防止 pod 被调度或在节点上执行（除非 pod 具有匹配的容忍度）。

## 集群配置

### 基本信息
#### Kubernetes 版本

这指的是集群节点上安装的 Kubernetes 版本。Rancher 基于 [hyperkube](https://github.com/rancher/hyperkube) 打包了自己的 Kubernetes 版本。

有关更多详细信息，请参阅[升级 Kubernetes](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md)。

#### 容器网络提供商

这指的是集群使用的[网络提供商](https://kubernetes.io/docs/concepts/cluster-administration/networking/)。

:::caution

启动集群后，你无法更改网络提供商。由于 Kubernetes 不允许在网络提供商之间切换，因此，请谨慎选择要使用的网络提供商。使用网络提供商创建集群后，如果你需要更改网络提供商，你将需要拆除整个集群以及其中的所有应用。

:::

Rancher 与以下开箱即用的网络提供商兼容：

- [Canal](https://github.com/projectcalico/canal)
- [Cilium](https://cilium.io/)\*
- [Calico](https://docs.projectcalico.org/v3.11/introduction/)
- [Multus](https://github.com/k8snetworkplumbingwg/multus-cni)

\* 在 [Cilium CNI](../../../faq/container-network-interface-providers.md#cilium) 中使用[项目网络隔离](#项目网络隔离)时，你可以开启跨节点入口路由。详情请参见 [CNI 提供商文档](../../../faq/container-network-interface-providers.md#cilium-中跨节点的-ingress-路由)。

有关不同网络提供商以及如何配置它们的更多详细信息，请查阅 [RKE2 文档](https://docs.rke2.io/install/network_options)。

##### 双栈网络

所有 CNI 网络插件都支持[双栈](https://docs.rke2.io/install/network_options#dual-stack-configuration)网络。要在双栈模式下配置 RKE2，请为你的[集群 CIDR](#集群-cidr) 和/或 [Service CIDR](#service-cidr) 设置有效的 IPv4/IPv6 CIDR。

###### 额外配置

使用 `cilium` 或 `multus,cilium` 作为容器网络接口提供商时，请确保**启用 IPv6 支持**选项。

#### 云提供商

你可以配置 [Kubernetes 云提供商](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/set-up-cloud-providers.md)。如果你想在 Kubernetes 中使用动态配置的[卷和存储](../../../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md)，你通常需要选择特定的云提供商。例如，如果你想使用 Amazon EBS，则需要选择 `aws` 云提供商。

:::note

如果你要使用的云提供商未作为选项列出，你需要使用[配置文件选项](#集群配置文件参考)来配置云提供商。请参考[本文档](https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/)来了解如何配置云提供商。

:::

#### 默认 Pod 安全策略

为集群选择默认的 [pod 安全策略](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md)。请参阅 [RKE2 文档](https://docs.rke2.io/security/pod_security_policies)来了解每个可用策略的规范。

#### Worker CIS 配置文件

选择一个 [CIS benchmark](../../../how-to-guides/advanced-user-guides/cis-scan-guides/cis-scan-guides.md) 来验证系统配置。

#### 项目网络隔离

如果你的网络提供商允许项目网络隔离，你可以选择启用或禁用项目间的通信。

如果你使用支持执行 Kubernetes 网络策略的 RKE2 网络插件（例如 Canal），则可以使用项目网络隔离。

#### CoreDNS

默认情况下，[CoreDNS](https://coredns.io/) 会安装为默认 DNS 提供程序。如果未安装 CoreDNS，则必须自己安装备用 DNS 提供程序。有关其他 CoreDNS 配置，请参阅 [RKE2 文档](https://docs.rke2.io/networking/networking_services#coredns)。

#### NGINX Ingress

如果你想使用高可用性配置来发布应用，并且你使用没有原生负载均衡功能的云提供商来托管主机，请启用此选项以在集群中使用 NGINX Ingress。有关其他配置选项，请参阅 [RKE2 文档](https://docs.rke2.io/networking/networking_services#nginx-ingress-controller)。

有关其他配置选项，请参阅 [RKE2 文档](https://docs.rke2.io/networking/networking_services#nginx-ingress-controller)。

#### Metrics Server

这是启用或禁用 [Metrics Server](https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/) 的选项。

每个能够使用 RKE2 启动集群的云提供商都可以收集指标并监控你的集群节点。如果启用此选项，你可以从你的云提供商门户查看你的节点指标。

### 附加配置

集群启动时将应用的其他 Kubernetes 清单，会作为[附加组件](https://kubernetes.io/docs/concepts/cluster-administration/addons/)来管理。有关详细信息，请参阅 [RKE2 文档](https://docs.rke2.io/helm#automatically-deploying-manifests-and-helm-charts)。

### Agent 环境变量

为 [Rancher agent](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents.md) 设置环境变量的选项。你可以使用键值对设置环境变量。有关详细信息，请参阅 [RKE2 文档](https://docs.rke2.io/reference/linux_agent_config)。

### etcd

#### 自动快照

启用或禁用定期 etcd 快照的选项。如果启用，用户可以配置快照的频率。有关详细信息，请参阅 [RKE2 文档](https://docs.rke2.io/backup_restore#creating-snapshots)。请注意，如果使用 RKE2，快照会存储在每个 etcd 节点上，这与 RKE1 不同（RKE1 每个集群只存储一个快照）。

#### 指标

选择向公众公开或仅在集群内公开 etcd 指标的选项。

### 网络

#### 集群 CIDR

用于 pod IP 的 IPv4 和/或 IPv6 网络 CIDR（默认：10.42.0.0/16）。

##### 双栈网络

要配置[双栈](https://docs.rke2.io/install/network_options#dual-stack-configuration)模式，请输入有效的 IPv4/IPv6 CIDR。例如 `10.42.0.0/16,2001:cafe:42:0::/56`。

使用 `cilium` 或 `multus,cilium` 作为[容器网络](#容器网络提供商)接口提供商时，你需要进行[附加配置](#额外配置)。

#### Service CIDR

用于 Service IP 的 IPv4/IPv6 网络 CIDR（默认：10.43.0.0/16）。

##### 双栈网络

要配置[双栈](https://docs.rke2.io/install/network_options#dual-stack-configuration)模式，请输入有效的 IPv4/IPv6 CIDR。例如 `10.42.0.0/16,2001:cafe:42:0::/56`。

使用 `cilium` 或 `multus,cilium` 作为[容器网络](#容器网络提供商)接口提供商时，你需要进行[附加配置](#额外配置)。

#### 集群 DNS

用于 coredns 服务的 IPv4 集群 IP。应该在你的 service-cidr 范围内（默认：10.43.0.10）。

#### 集群域名

选择集群的域。默认值为 `cluster.local`。

#### NodePort 服务端口范围

更改可用于 [NodePort 服务](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport)的端口范围的选项。默认值为 `30000-32767`。

#### 截断主机名

将主机名截断为 15 个或更少字符。该字段只能在集群初始创建时设置。创建集群后，你无法再启用或禁用 15 个字符的限制。

此设置仅影响配置了机器的集群。由于自定义集群在创建节点时设置主机名（发生在 Rancher 之外），因此该字段不限制自定义集群的主机名长度。

截断集群中的主机名可提高与基于 Windows 的系统的兼容性。虽然 Kubernetes 允许最长的主机名长度为 63 个字符，但使用 NetBIOS 的系统将主机名限制为 15 个字符之内。

#### TLS 可选名称

在服务器 TLS 证书上添加其他主机名或 IPv4/IPv6 地址作为 Subject Alternative Name。

#### 授权集群端点

授权集群端点（ACE）可用于直接访问 Kubernetes API server，而无需通过 Rancher 进行通信。

在 Rancher 启动的 Kubernetes 集群中，它默认启用，使用具有 `controlplane` 角色的节点的 IP 和默认的 Kubernetes 自签名证书。

有关授权集群端点的工作原理以及使用的原因，请参阅[架构介绍](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点)。

我们建议使用具有授权集群端点的负载均衡器。有关详细信息，请参阅[推荐的架构](../../rancher-manager-architecture/architecture-recommendations.md#授权集群端点架构)。

### 镜像仓库

选择要从中拉取 Rancher 镜像的镜像仓库。有关更多详细信息和配置选项，请参阅 [RKE2 文档](https://docs.rke2.io/install/containerd_registry_configuration)。

### 升级策略

#### controlplane 并发

选择可以同时升级多少个节点。可以是固定数字或百分比。

#### Worker 并发

选择可以同时升级多少个节点。可以是固定数字或百分比。

#### 清空节点（controlplane）

在升级之前从节点中删除所有 pod 的选项。

#### 清空节点（worker 节点）

在升级之前从节点中删除所有 pod 的选项。

### 高级配置

为不同节点设置 kubelet 选项。有关可用选项，请参阅 [Kubernetes 文档](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)。

## 集群配置文件参考

高级用户可以创建一个配置文件，而不是使用 Rancher UI 来为集群选择 Kubernetes 选项。配置文件允许你为 RKE2 设置[可用的选项](https://docs.rke2.io/install/configuration)，其中包括已经在 [Rancher UI 配置选项](#rancher-ui-中的配置选项)中列出的选项以及 Rancher 特定的参数。

<details>
    <summary>
        <b>集群配置文件片段示例</b>
    </summary>

```yaml
spec:
  cloudCredentialSecretName: cattle-global-data:cc-s879v
  kubernetesVersion: v1.23.6+rke2r2
  localClusterAuthEndpoint: {}
  rkeConfig:
    chartValues:
      rke2-calico: {}
    etcd:
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
      profile: null
    machinePools:
    - controlPlaneRole: true
      etcdRole: true
      machineConfigRef:
        kind: Amazonec2Config
        name: nc-test-pool1-pwl5h
      name: pool1
      quantity: 1
      unhealthyNodeTimeout: 0s
      workerRole: true
    machineSelectorConfig:
    - config:
        protect-kernel-defaults: false
    registries: {}
    upgradeStrategy:
      controlPlaneConcurrency: "1"
      controlPlaneDrainOptions:
        deleteEmptyDirData: true
        enabled: true
        gracePeriod: -1
        ignoreDaemonSets: true
        timeout: 120
      workerConcurrency: "1"
      workerDrainOptions:
        deleteEmptyDirData: true
        enabled: true
        gracePeriod: -1
        ignoreDaemonSets: true
        timeout: 120
```
</details>

### chartValues

此选项用于为 RKE2/K3s 安装的 System Chart 指定值。

示例：

```yaml
chartValues:
    chart-name:
        key: value
```
### machineGlobalConfig

RKE2/K3s 配置嵌套在 `machineGlobalConfig` 参数下。在这里所做的任何配置更改都将应用到每个节点。你可以在此处应用[RKE2 的独立版本](https://docs.rke2.io/reference/server_config)中可用的配置选项。

示例：

```yaml
machineGlobalConfig:
    etcd-arg:
        - key1=value1
        - key2=value2
```

### machineSelectorConfig

此参数与 [`machineGlobalConfig`](#machineglobalconfig) 相同，只是可以在配置中指定 [label](#kubernetes-节点标签) 选择器。该配置仅应用于与标签选择器匹配的节点。

允许多个 `config` 条目，可以为每个条目指定各自的 `machineLabelSelector`。用户可以指定 `matchExpressions`、`matchLabels`、指定二者或都不指定。如果你省略了 `machineLabelSelector`，则与将 config 放入 `machineGlobalConfig` 的效果相同。

示例：

```yaml
machineSelectorConfig
  - config:
      config-key: config-value
    machineLabelSelector:
      matchExpressions:
        - key: example-key
          operator: string # 有效的运算符：In、NotIn、Exists 和 DoesNotExist
          values:
            - example-value1
            - example-value2
      matchLabels:
        key1: value1
        key2: value2
```
