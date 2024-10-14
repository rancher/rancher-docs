---
title: 授权集群端点的工作原理
---

本文介绍 kubectl CLI、kubeconfig 文件和授权集群端点如何协同工作，使你可以直接访问下游 Kubernetes 集群，而无需通过 Rancher Server 进行身份验证。本文旨在为[设置 kubectl 以直接访问集群的说明](use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)提供背景信息和上下文。

## Kubeconfig 文件说明

kubeconfig 文件是与 kubectl 命令行工具（或其他客户端）结合使用时用于配置 Kubernetes 访问的文件。

kubeconfig 文件及其内容特定于各个集群。你可以从 Rancher 的**集群**页面进行下载：

1. 点击左上角的 **☰**。
1. 选择**集群管理**。
1. 找到要下载其 kubeconfig 的集群，然后选择行末尾的 **⁝**。
1. 从子菜单中选择**下载 KubeConfig**。

在 Rancher 中可以访问的每个集群都需要一个单独的 kubeconfig 文件。

下载 kubeconfig 文件后，你将能够使用 kubeconfig 文件及其 Kubernetes [上下文](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#kubectl-context-and-configuration)访问下游集群。

如果管理员[关闭了 kubeconfig 令牌生成](../../../../api/api-tokens.md#在生成的-kubeconfig-中禁用令牌)，则 kubeconfig 文件要求 [Rancher CLI](../../../../reference-guides/cli-with-rancher/rancher-cli.md) 存在于你的 PATH 中。

## RKE 集群的两种身份验证方法

如果集群不是 [RKE 集群](../../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)，kubeconfig 文件只允许你以一种方式访问​​集群，即通过 Rancher Server 进行身份验证，然后 Rancher 允许你在集群上运行 kubectl 命令。

对于 RKE 集群，kubeconfig 文件允许你通过两种方式进行身份验证：

- **通过 Rancher Server 身份验证代理**：Rancher 的身份验证代理会验证你的身份，然后将你连接到要访问的下游集群。
- **直接使用下游集群的 API Server**：RKE 集群默认启用授权集群端点。此端点允许你使用 kubectl CLI 和 kubeconfig 文件访问下游 Kubernetes 集群，且 RKE 集群默认启用该端点。在这种情况下，下游集群的 Kubernetes API server 通过调用 Rancher 设置的 webhook（`kube-api-auth` 微服务）对你进行身份验证。

第二种方法（即直接连接到集群的 Kubernetes API server）非常重要，因为如果你无法连接到 Rancher，这种方法可以让你访问下游集群。

要使用授权集群端点，你需要配置 kubectl，从而使用 Rancher 在创建 RKE 集群时生成的 kubeconfig 文件中的额外 kubectl 上下文。该文件可以从 Rancher UI 的**集群**视图中下载，配置 kubectl 的说明在[此页面](use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)。

[架构介绍](../../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md)也详细解释了这些与下游 Kubernetes 集群通信的方法，并介绍了 Rancher 的工作原理以及 Rancher 如何与下游集群通信的详细信息。

## 关于 kube-api-auth 身份验证 Webhook

`kube-api-auth` 微服务是为[授权集群端点](../../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点)提供用户认证功能而部署的。当你使用 `kubectl` 访问下游集群时，集群的 Kubernetes API server 会使用 `kube-api-auth` 服务作为 webhook 对你进行身份验证。

在集群配置期间会部署 `/etc/kubernetes/kube-api-authn-webhook.yaml` 文件，并使用 `--authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml` 配置 `kube-apiserver`。这会将 `kube-apiserver` 配置为通过查询 `http://127.0.0.1:6440/v1/authenticate` 来确定持有者 token 的身份验证。

`kube-api-auth` 的调度规则如下：

| 组件 | nodeAffinity nodeSelectorTerms | nodeSelector | 容忍度 |
| -------------------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------------ |
| kube-api-auth | `beta.kubernetes.io/os:NotIn:windows`<br/>`node-role.kubernetes.io/controlplane:In:"true"` | none | `operator:Exists` |
