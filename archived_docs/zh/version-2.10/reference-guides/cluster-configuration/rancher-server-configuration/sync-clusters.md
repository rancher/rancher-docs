---
title: 同步
---

同步允许 Rancher 更新集群值，以便与托管在 AKS、EKS 或 GKE 中的集群对象保持同步。这使得 Rancher 以外的来源能够获取托管集群的状态。这是 UI 中显示的内容。

:::caution
如果你同时处理来自另一个来源的更新，你可能会不小心覆盖一个来源的状态。如果你在完成一个来源的更新后 5 分钟内处理另一个来源的更新，也可能会发生这种情况。
:::

## 工作原理

要理解同步是如何工作的，则必须理解 Rancher Cluster 对象上的两个字段：

1. 集群的 config 对象，位于集群的规范上：

   * 对于 AKS，该字段称为 AKSConfig
   * 对于 EKS，该字段称为 EKSConfig
   * 对于 GKE，该字段称为 GKEConfig

2. UpstreamSpec 对象

   * 对于 AKS，它位于群集状态的 AKSStatus 字段中。
   * 对于 EKS，它位于集群状态的 EKSStatus 字段中。
   * 对于 GKE，它位于集群状态的 GKEStatus 字段中。

定义这些对象的结构类型可以在它们对应的 operator 项目中找到：

* [aks-operator](https://github.com/rancher/aks-operator/blob/master/pkg/apis/aks.cattle.io/v1/types.go)
* [eks-operator](https://github.com/rancher/eks-operator/blob/master/pkg/apis/eks.cattle.io/v1/types.go)
* [gke-operator](https://github.com/rancher/gke-operator/blob/master/pkg/apis/gke.cattle.io/v1/types.go)

除集群名称、位置（区域或地区）、导入和云凭证引用外，所有字段均可为空。

AKSConfig、EKSConfig 或 GKEConfig 表示所需的状态。零值会被忽略。配置对象中非零的字段可以被认为是“管理的”。在 Rancher 中创建集群时，所有字段都是非零的，因此都是“管理”的。在把一个已存在的集群注册到 Rancher 时，所有可为空字段都是 nil 并且不是“管理”的。一旦 Rancher 更改了这些字段的值，这些字段就会被管理。

UpstreamSpec 代表集群在托管的 Kubernetes 提供商中的情况。它每 5 分钟刷新一次。刷新 UpstreamSpec 后，Rancher 会检查集群是否正在进行更新。如果它正在更新，则不做任何进一步处理。如果它目前没有更新，AKSConfig、EKSConfig 或 GKEConfig 上的任何 "管理" 字段都会被最近更新的 UpstreamSpec 上的相应值覆盖。

有效的期望状态可以被认为是 UpstreamSpec，加上 AKSConfig、EKSConfig 或 GKEConfig 中的所有非零字段。这是 UI 中显示的内容。

如果 Rancher 和另一个来源试图在同一时间或在更新完成后的 5 分钟尝试更新集群，任何管理字段都可能陷入竞争状态。以 EKS 为例，集群可能将 PrivateAccess 作为管理字段。如果 PrivateAccess 为 false，在 11:01 在 EKS 控制台中启用，然后 Rancher 在 11:05 之前更新标签，那么该值很可能被覆盖。如果在集群处理更新时更新了标签，也会发生这种情况。如果集群已注册并且 PrivateAccess 字段为 nil，则不应发生此示例中描述的问题。
