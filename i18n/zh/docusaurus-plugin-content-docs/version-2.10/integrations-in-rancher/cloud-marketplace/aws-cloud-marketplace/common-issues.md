---
title: 常见问题
---

**安装 Adapter 后，Rancher 中出现一条横幅消息，上面写着 "AWS Marketplace Adapter: Unable to run the adapter, please check the adapter logs"**

此错误表示 Adapter 安装到集群中时发生了一个错误，导致它无法正确签入/签出许可证。

这通常是因为 IAM 角色设置不正确。请查看[先决条件](./adapter-requirements.md)并确认：

- 已创建一个 OIDC 提供程序，并且它已关联到运行 Rancher 的集群。
- IAM 角色已配置为信任此 OIDC 提供程序。
- IAM 角色至少具有策略中概述的权限。

如果上述所有配置均已正确配置，请联系支持寻求帮助。

**我看到一条横幅消息，上面写着 "AWS Marketplace Adapter: You have exceeded your licensed node count. At least x more license(s) are required in AWS to become compliant"**

此消息表明你没有足够的 Entitlement 来满足 Rancher 当前管理的节点数量。

请记住以下限制：

- 每个 Entitlement 仅对一定数量的节点有效。
- 当前由 Rancher 管理的每个节点都计入你的总使用量（安装了集群 Rancher 的节点除外）。
- 每个 Entitlement 最多可以被一个 Rancher 实例使用。例如，如果你的账户中有两个正在运行的 Rancher 实例（每个都安装在单独的 EKS 集群上），那么你至少需要两个 Entitlement。

你最近可能还卸载/重新安装了 Adapter。如果 Adapter 丢失了它当前管理的许可证的跟踪，则可能需要一个小时来解析许可证的实际状态。

