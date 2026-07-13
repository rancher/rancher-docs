---
title: 使用 Elemental 进行操作系统管理
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/elemental"/>
</head>

Elemental 支持云原生主机管理。Elemental 允许你在任何位置装载任何机器，无论是在数据中心还是在边缘，并将它们无缝集成到 Kubernetes 中，同时管理你的工作流程（例如操作系统更新）。

## Elemental 和 Rancher

Rancher 中的 Elemental：

- 是 Kubernetes 原生的，它允许你通过 Kubernetes 集群中的 Elemental 管理操作系统。
- 从 Kubernetes 的操作角度来看，不会造成干扰。
- 是声明性的，并且 GitOps 友好。
- 允许可信的、确定性的和可预测的 OCI Image-based flows。
- 大规模运作。它支持 Fleet 规模的操作系统管理。

### 我什么时候应该使用 Elemental？

- Elemental 通过 Rancher manager 实现云原生操作系统管理。它适用于任何操作系统（例如，SLE Micro vanilla）。
- Elemental 允许对数据中心和边缘的机器进行云原生管理。
- Elemental 非常灵活，允许平台团队在其机器群中执行各种工作流。

## Elemental 和 Rancher Prime

- 已作为 GUI 扩展深度集成到 Rancher 中。
- 将 Rancher 的用例扩展到操作系统，如今 SLE Micro 与 Rancher 可以完美配合。
