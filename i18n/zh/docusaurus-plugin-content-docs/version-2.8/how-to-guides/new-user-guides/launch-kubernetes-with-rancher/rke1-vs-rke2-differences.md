---
title: RKE1 和 RKE2 差​​异
---

RKE2，也称为 RKE Government，是一个完全符合标准的 Kubernetes 发行版，它专注于安全性和合规性。它被认为是 Rancher Kubernetes Engine（即 RKE1）的下一个迭代。

RKE1 和 RKE2 有一些细微的差异，本文将重点介绍这些差异。

### controlplane 组件

RKE1 使用 Docker 来部署和管理 controlplane 组件，还使用 Docker 作为 Kubernetes 的容器运行时。相比之下，RKE2 将 controlplane 组件作为由 kubelet 管理的静态 pod 启动。RKE2 的容器运行时是 Containerd，它允许 Mirror 容器镜像仓库等内容。使用 Docker 的 RKE1 不允许 Mirror。

### Cluster API

RKE2/K3s 配置是基于 Cluster API (CAPI) 上游框架之上构建的，这导致 RKE2 配置的集群的行为通常与 RKE1 配置的集群不同。

如果你在 RKE2 中更改集群配置，节点**可能**会重新配置。这是由 CAPI 控制器而不是 Rancher 控制的。请注意，etcd 节点不适用相同的行为。

以下是一些可能导致上述行为的配置更改示例：

- 编辑集群并启用`删除前清空`时，会删除现有的 controlplane 节点和 worker 并创建新节点。

如果你是习惯于 RKE1 配置的用户，请注意新的 RKE2 行为。

### 名词解释

从 RKE1 到 RKE2，某些术语已更改或已不再使用。例如，在 RKE1中，你使用**节点模板**，而在 RKE2 中，你可以在创建或编辑集群时配置集群节点池。另一个例子是 RKE1 中的**节点池（node pool）** 现在在 RKE2 中称为**主机池（machine pool）**。




