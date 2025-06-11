---
title: 认证、权限和全局配置
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration"/>
</head>

安装完成后，[系统管理员](manage-role-based-access-control-rbac/global-permissions.md)需要配置 Rancher 来配置认证、授权、安全性、默认设置、安全策略、驱动和全局 DNS 条目。

## 首次登录

首次登录 Rancher 后，Rancher 会提示你输入 **Rancher Server URL**。你需要将 URL 设置为 Rancher Server 的主要入口点。当负载均衡器位于 Rancher Server 集群前面时，URL 需要设置为负载均衡器地址。系统会自动尝试从运行 Rancher Server 的主机的 IP 地址或主机名推断 Rancher Server 的 URL，上述推断仅在你运行单节点 Rancher Server 时才正确。因此，在大多数情况下，你需要自己将 Rancher Server 的 URL 设置为正确的值。

:::danger

Rancher Server 的 URL 在设置后不可再更新。因此，你需要谨慎设置该 URL。

:::

## 认证

Rancher 为 Kubernetes 增加了一项关键特性是集中式的用户认证。此特性允许设置本地用户和/或连接到外部认证程序。通过连接到外部认证程序，你可以使用该程序提供的用户和组。

更多关于认证的工作原理以及如何配置对接各个认证程序，请参考[认证](authentication-config/authentication-config.md)。

## 授权

在 Rancher 中，每个人都是以 _用户_ 的身份进行鉴权，这是一个授予你访问 Rancher 的登录身份。用户登录 Rancher 后，他们的 _授权_ 或者他们在系统中的访问权限由用户的角色决定。Rancher 提供了内置的角色，允许你你轻松地配置用户对资源的权限，但是 Rancher 还提供了为每个 Kubernetes 资源自定义角色的功能。

更多关于授权的工作原理以及自定义角色的使用，请参考 [RBAC](manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)。

## Pod 安全策略

_Pod 安全策略_ (或 PSPs) 是控制 Pod 安全敏感方面规范的对象，例如 root 权限。如果一个 Pod 不满足 PSP 中指定的条件，Kubernetes 将不允许 Pod 启动，同时 Rancher 会显示一条错误信息。

更多关于如何创建和使用 PSPs 的内容，请参考 [Pod 安全策略](create-pod-security-policies.md)。

## Provisioning Drivers

Rancher 中的驱动允许你管理哪些程序可以预置[托管的 Kubernetes 集群](../kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md)或[云服务器节点](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)，允许 Rancher 部署和管理 Kubernetes。

更多信息请参考 [Provisioning Drivers](about-provisioning-drivers/about-provisioning-drivers.md)。

## 添加 Kubernetes 版本到 Rancher 中

使用此功能，你可以在最新版本的 Kubernetes 发布后立即升级，而不需要升级 Rancher。此功能允许你轻松升级 Kubernetes 的补丁版本（例如 `v1.15.X`），但不打算升级 Kubernetes 的次要版本（例如 `v1.X.0`），因为 Kubernetes 倾向于在次要版本之间弃用或添加 API。

Rancher 用于配置 [RKE 集群](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) 的信息现在存储于 Rancher Kubernetes 元数据中，更多关于元数据的配置以及如何更改用于配置 RKE 集群的 Kubernetes 版本的信息，请参考 [Rancher Kubernetes 元数据](../../../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)。

Rancher Kubernetes 元数据包含 Kubernetes 版本信息，Rancher 使用这些信息来配置 [RKE 集群](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)。

关于元数据的工作原理以及如何配置元数据，请参考 [Rancher Kubernetes 元数据](../../../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)。

## 启用实验性功能

Rancher 包含一些默认处于实验性和/或禁用的功能，功能开关允许你启用这些特性。更多信息请参考[功能开关](../../advanced-user-guides/enable-experimental-features/enable-experimental-features.md)。
