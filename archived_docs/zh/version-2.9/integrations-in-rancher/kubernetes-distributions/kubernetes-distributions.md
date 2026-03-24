---
title: Kubernetes 发行版
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/kubernetes-distributions"/>
</head>

## K3s

K3s 是一款轻量级、完全兼容的 Kubernetes 发行版，专为一系列用例设计，包括边缘计算、物联网、CI/CD、开发和将 Kubernetes 嵌入到应用程序中。它将系统打包为单个二进制文件，使用 sqlite3 作为默认存储，并提供用户友好的启动器，从而简化了 Kubernetes 的管理。K3s 包括 Local Storage 和负载均衡、Helm Chart 控制器和 Traefik CNI 等基本功能。它最大限度地减少了外部依赖，并提供了精简的 Kubernetes 体验。K3s 于 2020 年 6 月作为沙箱项目捐赠给 CNCF。

### K3s 与 Rancher

- Rancher 允许在一系列平台上轻松配置 K3s，包括 Amazon EC2、DigitalOcean、Azure、vSphere 或现有服务器。
- Kubernetes 集群的标准 Rancher 管理，包括所有概述[集群管理功能](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup#cluster-management-capabilities-by-cluster-type)。

## RKE2

RKE2 是 Rancher 开发的一款兼容 Kubernetes 的发行版。它是专门为美国联邦政府部门的安全性和合规性而设计的。

RKE2 的主要特性包括:

1. **安全性和合规性重点**：RKE2 非常重视安全性和合规性，在“默认安全”框架下运行，适用于政府服务以及金融和医疗保健等高度监管的行业。
1. **CIS Kubernetes Benchmark 一致性**：RKE2 经过预配置，符合 CIS Kubernetes Hardening Benchmark（目前支持 v1.23 和 v1.7），并且只需最少的手动干预。
1. **FIPS 140-2 合规性**：RKE2 符合 FIPS 140-2 标准，使用经过 FIPS 验证的加密模块作为其组件。
1. **嵌入式 ETCD**：RKE2 默认使用嵌入式 ETCD 作为其数据存储。这使其与标准的 Kubernetes 实践更加紧密地结合在一起，从而可以更好地与其他 Kubernetes 工具集成并降低错误配置的风险。
1. **与上游 Kubernetes 保持一致**：RKE2 旨在与上游 Kubernetes 保持密切一致，降低在使用偏离标准 Kubernetes 实践的发行版时可能出现的不一致风险。
1. **多重 CNI 支持**：RKE2 支持多个容器网络接口（CNI）插件，包括 Cilium、Calico 和 Multus。这对于具有各种生产设施的电信分发中心和工厂等用例至关重要。

## RKE2 与 Rancher

- Rancher 允许在一系列平台上轻松配置 RKE2，包括 Amazon EC2、DigitalOcean、Azure、vSphere 或现有服务器。
- Kubernetes 集群的标准 Rancher 管理，包括所有概述[集群管理功能](../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup#cluster-management-capabilities-by-cluster-type)。
