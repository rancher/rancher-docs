---
title: 使用 Fleet 进行持续交付
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/fleet"/>
</head>

Fleet 通过集群 Fleet 的供应链协调和管理应用程序的持续交付。Fleet 使用 GitOps 作为一种安全的运营模式，组织供应链，帮助团队及时自信地交付。

## Fleet 和 Rancher

许多用户经常同时管理 10 个以上的集群。鉴于集群的激增，持续交付是 Rancher 的重要组成部分。Fleet 使用 GitOps 确保可靠的持续交付体验，这是一种安全且越来越常见的运营模式。

### 我什么时候应该使用 Fleet?

- 我需要跨地理区域部署我的监控堆栈（例如 Grafana、Prometheus），每个区域都有不同的保留策略。
- 我是一名平台运营商，希望使用可扩展且安全的操作模型（GitOps）为集群配置所有组件。
- 我是一名应用程序开发人员，希望我的最新更改自动进入我的开发环境。

## Fleet 和 Rancher Prime

Fleet 已经作为持续交付工具和 GitOps 引擎深度集成到 Rancher 中。

<!--
- In future, we can have additional value adds like sharding controller (Manage shards for user) or notification controller (Event dispatcher/receiver) for prime customer only.
-->
