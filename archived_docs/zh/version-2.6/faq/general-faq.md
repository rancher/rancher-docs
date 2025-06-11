---
title: 一般常见问题解答
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/faq/general-faq"/>
</head>

此常见问题解答是一项正在进行的工作，旨在回答有关 Rancher v2.x 最常见的问题。

有关常见技术问题，请参阅[常见技术问题解答](technical-items.md)。

## Rancher v2.x 是否支持 Docker Swarm 和 Mesos 作为环境类型?

在 Rancher v2.x 中创建新环境时，Swarm 和 Mesos 不再是可选择的选项。但是，Swarm 和 Mesos 将继续作为你可以部署的目录应用程序提供。这是一个艰难的决定，但最终归结为采用。例如，在 15,000 多个集群中，只有大约 200 个在运行 Swarm。

## 可以使用 Rancher v2.x 管理 Azure Kubernetes 服务吗?

是的。请参阅我们的[集群管理](../how-to-guides/new-user-guides/manage-clusters/manage-clusters.md)指南，了解 AKS 上可用的 Rancher 功能，以及[有关 AKS 的文档](../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md)。

## Rancher 是否支持 Windows?

是的。Rancher 支持 Windows Server 1809 containers。有关如何使用 Windows worker 节点设置集群的详细信息，请参阅[为 Windows 配置自定义集群](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/use-windows-clusters.md)部分。

## Rancher 是否支持 Istio?

是的。Rancher 支持 [Istio](../integrations-in-rancher/istio/istio.md).

## Rancher v2.x 会支持 Hashicorp 的 Vault 来存储 secrets 吗?

Secrets 管理已在我们的 roadmap 上，但我们尚未将其分配给特定版本。

## Rancher v2.x 是否也支持 RKT containers?

目前，我们只支持 Docker。

## Rancher v2.x 是否支持 Calico、Contiv、Contrail、Flannel、Weave net 等嵌入式和注册的 Kubernetes？

Rancher 开箱即用，为 Kubernetes 集群提供了以下 CNI 网络提供商：Canal、Flannel、Calico 和 Weave。请务必参考 [Rancher 支持矩阵](https://rancher.com/support-maintenance-terms/)了解官方支持的内容。

## 你是否计划为现有设置支持 Traefik?

我们目前不打算提供嵌入式 Traefik 支持，但我们仍在探索负载均衡方法。

## 我可以将 OpenShift Kubernetes 集群导入 v2.x 吗?

我们的目标是运行任何 Kubernetes 集群。因此，Rancher v2.x 应该可以与 OpenShift 配合使用，但我们还没有测试过。

## Longhorn 是否与 Rancher 集成?

是的。 Longhorn 与 Rancher v2.5 及更高版本集成。
