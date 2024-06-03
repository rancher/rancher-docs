---
title: 一般常见问题解答
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/faq/general-faq"/>
</head>

本文包含了用户常见的 Rancher 2.x 问题。

有关常见技术问题，请参阅[常见技术问题解答](technical-items.md)。

## Rancher 2.x 支持 Docker Swarm 和 Mesos 作为环境类型吗？

如果你在 Rancher 2.x 中创建环境，Swarm 和 Mesos 将不再是可选的标准选项。但是，Swarm 和 Mesos 还能继续作为可以部署的商店应用程序。这是一个艰难的决定，但这是大势所趋。比如说，15,000 多个集群可能只有大约 200 个在运行 Swarm。

## 是否可以使用 Rancher 2.x 管理 Azure Kubernetes 服务？

是的。请参阅我们的[集群管理]((../how-to-guides/new-user-guides/manage-clusters/manage-clusters.md))指南，了解 AKS 上可用的 Rancher 功能，以及相关的 [AKS 的文档](../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md)

## Rancher 是否支持 Windows？

Rancher 支持 Windows Server 1809 容器。有关如何使用 Windows Worker 节点设置集群的详细信息，请参阅[为 Windows 配置自定义集群](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/use-windows-clusters.md)。

## Rancher 是否支持 Istio？

Rancher 支持 [Istio](../pages-for-subheaders/istio.md)。

## Rancher 2.x 是否支持使用 Hashicorp 的 Vault 来存储密文？

密文管理已在我们的 roadmap 上，但我们尚未将该功能分配给特定版本。

## Rancher 2.x 是否也支持 RKT 容器？

目前，我们只支持 Docker。

## Rancher 2.x 是否支持将 Calico、Contiv、Contrail、Flannel、Weave net 等网络插件用于嵌入和已注册的 Kubernetes？

Rancher 开箱即用地为 Kubernetes 集群提供了几个 CNI 网络插件，分别是 Canal、Flannel、Calico 和 Weave。有关官方支持的详细信息，请参阅 [Rancher 支持矩阵](https://rancher.com/support-maintenance-terms/)。

## Rancher 是否计划支持 Traefik？

目前，我们不打算提供嵌入式 Traefik 支持，但我们仍在探索负载均衡方案。

## 我可以将 OpenShift Kubernetes 集群导入 2.x 吗？

我们的目标是运行任何上游 Kubernetes 集群。因此，Rancher 2.x 应该可以与 OpenShift 一起使用，但我们尚未对此进行测试。

## Rancher 会集成 Longhorn 吗？

是的。Longhorn 已集成到 Rancher 2.5+ 中。
