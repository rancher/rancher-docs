---
title: 架构
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/fleet/architecture"/>
</head>

Fleet 可以管理来自 Git 的原始 Kubernetes YAML、Helm Chart、Kustomize 或三者的任何组合的部署。无论来源如何，所有资源都会动态转化为 Helm Chart，并使用 Helm 作为引擎来部署到集群中的所有内容。这为你提供了高度的控制力、一致性和可审计性。Fleet 不仅关注扩展能力，而且还提供高度的控制和可见性，从而让用户准确了解集群上安装的内容。

![架构](/img/fleet-architecture.svg)

