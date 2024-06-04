---
title: AWS Marketplace 集成
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace"/>
</head>

## 概述

Rancher 提供与 AWS Marketplace 的集成，允许用户购买 SUSE 的支持合同。当你开始支持更多集群时，这种集成使你可以轻松调整支持需求。

## 限制

- 你必须运行 Rancher v2.6.7 或更高版本。
- Rancher 的部署必须启用额外的指标。
- Rancher 必须安装在 EKS 集群上。
- 你必须通过 AWS Marketplace 购买至少一项 Rancher 支持的权限。
- 你可能需要额外的设置来支持代理/离线用例。有关更多信息，请参阅[先决条件](adapter-requirements.md)。

## 如何使用

1. 完成[先决条件](adapter-requirements.md)。
2. [安装 CSP Adapter](install-adapter.md)。

## 常见问题

**我以后可以购买对更多节点的支持吗？**

可以。只需转到你最初用于购买支持的 AWS Marketplace 条目并增加权限数量即可。

**我可以在同一个 AWS 账户中使用多个 Rancher 实例吗？**

可以。但是，Rancher 安装的每个集群都需要遵守先决条件。

此外，一个给定的权限一次只能由一个 Rancher 管理服务器使用。
