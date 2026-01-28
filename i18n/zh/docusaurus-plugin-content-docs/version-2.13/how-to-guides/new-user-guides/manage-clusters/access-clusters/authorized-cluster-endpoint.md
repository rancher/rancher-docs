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

## 关于 kube-api-auth 身份验证 Webhook

`kube-api-auth` 微服务是为[授权集群端点](../../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点)提供用户认证功能而部署的。当你使用 `kubectl` 访问下游集群时，集群的 Kubernetes API server 会使用 `kube-api-auth` 服务作为 webhook 对你进行身份验证。

在集群配置期间会部署 `/etc/kubernetes/kube-api-authn-webhook.yaml` 文件，并使用 `--authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml` 配置 `kube-apiserver`。这会将 `kube-apiserver` 配置为通过查询 `http://127.0.0.1:6440/v1/authenticate` 来确定持有者 token 的身份验证。

`kube-api-auth` 的调度规则如下：

| 组件 | nodeAffinity nodeSelectorTerms | nodeSelector | 容忍度 |
| -------------------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------------ |
| kube-api-auth | `beta.kubernetes.io/os:NotIn:windows`<br/>`node-role.kubernetes.io/controlplane:In:"true"` | none | `operator:Exists` |
