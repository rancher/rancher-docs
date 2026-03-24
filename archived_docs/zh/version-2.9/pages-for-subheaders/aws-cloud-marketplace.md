---
title: AWS Marketplace 集成
---

## 概述

Rancher 提供了与 AWS Marketplace 的集成，允许用户向 SUSE 购买支持。此集成帮助你在需要使用更多集群时轻松调整支持需求。

## 限制

- 必须使用 Rancher v2.6.7 或更高版本。
- Rancher 必须在启用其他指标的情况下进行部署。
- Rancher 必须安装在 EKS 集群上。
- 必须通过 AWS Marketplace 购买至少一项 Rancher 支持的 Entitlement。
- 你可能需要额外的设置来支持代理/离线用例。有关详细信息，请参阅[先决条件](../integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements.md)。

## 如何使用

1. 完成[先决条件步骤](../integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements.md)。
2. [安装 CSP Adapter](../integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter.md)。

## 常见问题

**我以后后续再购买更多节点的支持吗？**

是的。你需要转到最初购买支持的 AWS Marketplace 条目并增加 Entitlement 的数量。

**我可以在同一个 AWS 账户中使用多个 Rancher 实例吗？**

是的。但是，安装 Rancher 的每个集群都需要遵守先决条件。

此外，一个 Entitlement 每次只能由一台 Rancher management server 使用。
