---
title: 将 Windows 工作负载从 RKE2 迁移到 RKE2
---

**注意**：Rancher Support 的 SLA 不涵盖本文档的内容。因此，请谨慎继续。

本文档介绍了如何将 Windows 工作负载从 RKE1 迁移到 RKE2。

## RKE1 Windows 调度

RKE1 Windows 工作负载是基于污点和容忍度调度的。

RKE1 Windows 集群中的每个 Linux 节点（无论分配了什么角色）都会有一个默认污点，除非工作负载配置了容忍度，否则该污点会阻止工作负载调度到节点上。这是 RKE1 Windows 集群的一个主要特性，目的是为了仅运行 Windows 工作负载。

- 默认 RKE1 Linux 节点 `NoSchedule` 污点：

```yml
apiVersion: v1
kind: Node
spec:
  ...
  taints:
  - effect: NoSchedule
    key: cattle.io/os
    value: linux
```
<br/>

- RKE1 Linux `NoSchedule` 对工作负载的容忍度

以下容忍度允许将最终用户的工作负载调度到 RKE1 Windows 集群中的任何 Linux 节点上。这些容忍度用于核心的 Rancher 服务和工作负载：

```yml
apiVersion: apps/v1
kind: Deployment
spec:
  ...
  template:
    ...
    spec:
      tolerations:
      - effect: NoSchedule
        key: cattle.io/os
        operator: Equal
        value: linux
```
<br/>

- 根据最佳实践，在 Linux 节点上运行的任何最终用户工作负载都将仅调度到具有 worker 角色的节点上：

```yml
apiVersion: apps/v1
kind: Deployment
spec:
  ...
  template:
    ...
    spec:
      tolerations:
      - effect: NoSchedule
        key: cattle.io/os
        operator: Equal
        value: linux
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - preference:
              matchExpressions:
              - key: node-role.kubernetes.io/worker
                operator: In
                values:
                - "true"
            weight: 100
      ...
```

## RKE2 Windows 调度

根据对混合工作负载支持的反馈和请求，RKE2 Windows 默认支持 Linux 和 Windows 工作负载。RKE2 调度默认依赖节点选择器。这是不同于 RKE1 的一个显着变化，因为 RKE2 中没有包含污点和容忍。节点选择器是 RKE1 Windows 集群的关键部分，可以帮助你轻松迁移工作负载。

## 示例迁移

### 将 Windows 工作负载从 RKE1 迁移到 RKE2

- 迁移前的 RKE1 Windows Deployment：

```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  ...
  template:
    ...
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/os
                operator: NotIn
                values:
                - linux
```
<br/>

- 使用 `nodeAffinity` 迁移后的 RKE2 Windows Deployment：

```yaml
apiVersion: apps/v1
kind: Deployment
...
spec:
  ...
  template:
    ...
    spec:
      ...
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: kubernetes.io/os
                    operator: In
                    values:
                      - windows
```

### RKE1 Windows 集群的 Linux-Only Deployment

> **重要提示**：在利用 `nodeSelector` 和 `nodeAffinity` 时，请注意以下几点：
>
> - 如果同时指定了 `nodeSelector` 和 `nodeAffinity`，则必须满足这两个条件才能将 `Pod` 调度到节点上。
> - 如果指定了与单个 `nodeSelectorTerms` 关联的多个 `matchExpressions`，则只有当所有 `matchExpressions` 都符合要求时才会调度 `Pod`。

<br/>

- 迁移前的 RKE1 Windows 集群 Linux-only Deployment（针对 RKE1 Linux Worker 节点）：

```yml
apiVersion: apps/v1
kind: Deployment
spec:
  ...
  template:
    ...
    spec:
      tolerations:
      - effect: NoSchedule
        key: cattle.io/os
        operator: Equal
        value: linux
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            preference:
              matchExpressions:
              - key: node-role.kubernetes.io/worker
                operator: In
                values:
                - "true"

```
<br/>

- 使用 `nodeSelector` 迁移后的 RKE2 混合集群 Linux-only Deployment（针对 RKE2 Linux Worker 节点）

```yml
apiVersion: apps/v1
kind: Deployment
spec:
  ...
  template:
    ...
    spec:
      nodeSelector:
        kubernetes.io/os: "linux"
        node-role.kubernetes.io/worker: "true"
```
<br/>

- 使用 `nodeAffinity` 迁移后的 RKE2 混合集群 Linux-only Deployment（针对 RKE2 Linux Worker 节点）

```yaml
apiVersion: apps/v1
kind: Deployment
spec:
 ...
 template:
   ...
   spec:
      affinity:
       nodeAffinity:
         requiredDuringSchedulingIgnoredDuringExecution:
         - weight: 100
           preference:
             matchExpressions:
             - key: node-role.kubernetes.io/worker
               operator: In
               values:
               - "true"
           nodeSelectorTerms:
             - matchExpressions:
                 - key: kubernetes.io/os
                   operator: In
                   values:
                     - linux
```
## RKE1 Windows - 支持的 Windows Server 版本

### 长期服务渠道（LTSC）

- Windows Server 2019 LTSC &#9989; 将于 2024 年 1 月 9 日 达到 Mainstream EOL 并于 2029 年 1 月 9 日 达到 Extended EOL

### 半年频道 (SAC)

- Windows Server 20H2 SAC &#10060; 2022 年 8 月 9 日已达到 EOL
- Windows Server 2004 SAC &#10060; 2021 年 12 月 14 日已达到 EOL
- Windows Server 1909 SAC &#10060; 2021 年 5 月 11 日已达到 EOL
- Windows Server 1903 SAC &#10060; 2020 年 12 月 8 日已达到 EOL
- Windows Server 1809 SAC &#10060; 2020 年 11 月 10 日已达到 EOL

## RKE2 Windows - 支持的 Windows Server 版本

### RKE2 中的长期服务通道（LTSC）

- Windows Server 2019 LTSC &#9989; 将于 2024 年 1 月 9 日 达到 Mainstream EOL 并于 2029 年 1 月 9 日 达到 Extended EOL
- Windows Server 2022 LTSC &#9989; 将于 2026 年 10 月 13 日达到 Mainstream EOL，并于 2031 年 10 月 13 日达到 Extended EOL

> **注意**：RKE2 不支持 SAC。


有关详细信息，请参阅以下参考资料：

- [Windows Server SAC 生命周期](https://docs.microsoft.com/en-us/lifecycle/products/windows-server)

- [Windows Server 2022 LTSC 生命周期](https://docs.microsoft.com/en-us/lifecycle/products/windows-server-2022)

- [Windows Server 2019 LTSC 生命周期](https://docs.microsoft.com/en-us/lifecycle/products/windows-server-2019)


## Kubernetes 版本支持

> **注意**：根据 [Rancher 2.6.7 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-7/)，下面列出的所有版本均支持 SLA。未列出的版本都视为为已达到 EOL 且不受 SUSE SLA 支持。

### 对比 Rancher 2.5 与 Rancher 2.6：Windows 集群的支持矩阵

**对比 RKE1 与 RKE2：Windows 集群支持的 Kubernetes 版本**：

| Kubernetes 版本 | RKE1 | RKE2 |
|--------------	|:----:	|:----:	|
| 1.18 | &check; |       |
| 1.19 | &check; |       |
| 1.20 | &check; |       |
| 1.21 | &check; |       |
| 1.22 | &check; | &check; |
| 1.23 |         | &check; |
| 1.24 |         | &check; |
| 1.25+ |         | &check; |


### 对比 Rancher 2.5 与 Rancher 2.6：支持用于配置 RKE1 和 RKE2 Windows 集群的 Kubernetes 版本

| Rancher 版本 | Kubernetes 版本 | RKE1 | RKE2 |
|:-----------------------:	|:------------------------:	|:----:	|:----:	|
| 2.5 - RKE1 配置 | 1.18 1.19 1.20 | &check; |       |
| 2.6 - RKE1 配置 | 1.18 1.19 1.20 1.21 1.22 | &check; |       |
| 2.6 - RKE2 配置 | 1.22 1.23 1.24 1.25+ |       | &check; |


## 将工作负载迁移到 RKE2 Windows 的指南

参考[对比 Rancher 2.5 与 Rancher 2.6：Windows 集群的支持矩阵](#对比-rancher-25-与-rancher-26windows-集群的支持矩阵)和[对比 Rancher 2.5 与 Rancher 2.6：支持用于配置 RKE1 和 RKE2 Windows 集群的 Kubernetes 版本](#对比-rancher-25-与-rancher-26支持用于配置-rke1-和-rke2-windows-集群的-kubernetes-版本)中的表格，你会发现 RKE1 和 RKE2 的 Kubernetes 1.22 版本发生了重叠。因此，当遵循 Rancher 推荐的方法时，这将是迁移 RKE1 Windows 工作负载所需的基本版本。

### Rancher 2.5 的就地升级

1. 将 Rancher 版本升级到 2.6.5+。
1. 使用最新的可用补丁版本将 RKE1 Windows 下游集群升级到 RKE1 v1.22。
1. 通过 RKE1 Windows 集群所在的匹配补丁版本，使用 RKE2 v1.22 配置新的 RKE2 Windows 下游集群。
1. 开始将 Windows 工作负载从 RKE1 迁移到 RKE2 集群。
1. 执行验证测试，确保在将应用程序从 RKE1 迁移到 RKE2 时没有丢失或更改功能。
1. 验证测试成功后，你可以选择将 RKE2 1.22.x 集群升级到新的次要版本，例如 1.23 或 1.24。


### 将 Windows 工作负载迁移到新的 Rancher 环境

> **重要提示**：要执行以下任一选项，你需要使用 Rancher 2.6.5 或更高版本。

**为 RKE1 和 RKE2 使用匹配的 Kubernetes 补丁版本时**：

1. 通过 RKE1 Windows 集群所在的匹配补丁版本，使用 RKE2 v1.22 配置新的 RKE2 Windows 下游集群。
1. 开始将 Windows 工作负载从 RKE1 迁移到 RKE2 集群。
1. 执行验证测试，确保在将应用程序从 RKE1 迁移到 RKE2 时没有丢失或更改功能。
1. 验证测试成功后，你可以选择将 RKE2 1.22.x 集群升级到新的次要版本，例如 1.23 或 1.24。


**为 RKE2 使用更新的 Kubernetes 补丁版本时**：

1. 使用 RKE2 v1.23 或 v1.24 配置新的 RKE2 Windows 下游集群。
1. 开始将 Windows 工作负载从 RKE1 迁移到 RKE2 集群。
1. 执行验证测试，确保在将应用程序从 RKE1 迁移到 RKE2 时没有丢失或更改功能。