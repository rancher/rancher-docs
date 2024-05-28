---
title: 认证、权限和全局配置
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration"/>
</head>

安装完成后，[系统管理员](manage-role-based-access-control-rbac/global-permissions.md) 应该通过 Rancher 配置认证、授权、安全性、默认设置、安全策略、驱动和全局 DNS 条目。

## 首次登录

首次登录 Rancher 后，Rancher 会提示你输入 **Rancher Server URL**，你应该将 URL 设置为访问 Rancher Server 的主入口点。当负载均衡器运行在 Rancher Server 集群前面时，URL 应该设置为负载均衡地址。系统会自动尝试根据运行 Rancher Server 的主机 IP 地址或主机名推断 Rancher Server URL，但只有当 Rancher Server 以单节点方式安装时才有效。因此在大多数情况下，你都需要将 Rancher Server URL 设置为正确的值。

:::danger

当设置完 Rancher Server URL 后，我们不支持修改它。请格外小心的设置此项配置。

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

Rancher 中的驱动允许你管理哪些程序可以预置[托管的 Kubernetes 集群](../kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md) 或 [云服务器节点](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md)，允许 Rancher 部署和管理 Kubernetes。

更多信息请参考 [Provisioning Drivers](about-provisioning-drivers/about-provisioning-drivers.md)。

## 添加 Kubernetes 版本到 Rancher 中

使用此功能，你可以在最新版本的 Kubernetes 发布后立即升级，而不需要升级 Rancher。此功能允许你轻松升级 Kubernetes 的补丁版本（例如 `v1.15.X`），但不打算升级 Kubernetes 的次要版本（例如 `v1.X.0`），因为 Kubernetes 倾向于在次要版本之间弃用或添加 API。

Rancher 用于配置 [RKE 集群](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) 的信息现在存储于 Rancher Kubernetes 元数据中，更多关于元数据的配置以及如何更改用于配置 RKE 集群的 Kubernetes 版本的信息，请参考 [Rancher Kubernetes 元数据](../../../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)。

Rancher Kubernetes 元数据包含 Kubernetes 版本信息，Rancher 使用这些信息来配置 [RKE 集群](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)。

关于元数据的工作原理以及如何配置元数据，请参考 [Rancher Kubernetes 元数据](../../../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)。

## 全局设置

控制某些全局级别 Rancher 配置项可以在顶部的导航栏中找到。

点击左上角的 **☰** ，然后选择 **全局设置**，查看和配置以下设置：

- **设置**: 各种 Rancher 默认值，例如用户密码的最小长度 (`password-min-length`)。在修改这些设置项时应该谨慎，因为设置无效的值可能会破坏 Rancher 的安装。
- **功能开关**: 可以打开或关闭 Rancher 的某些功能，一些标志用于 [实验性功能](#启用实验性功能).
- **横幅**: 可以添加到门户上固定位置的元素，例如你可以使用这些选项在用户登录 Rancher 时为他们设置[自定义的横幅](custom-branding.md#固定横幅)。
- **品牌**: 你可以[自定义](custom-branding.md) Rancher UI 的设计元素，你可以增加一个自定义的 logo 或 favicon，也可以修改 UI 的颜色。
- **性能**: Rancher UI 的性能设置，例如增量资源加载。
- **主页链接**: Rancher UI **主页**页面上显示的链接，你可以修改默认链接的可见性或者增加自己的链接。

### 启用实验性功能

Rancher 包含一些默认处于实验性和/或禁用的功能，功能开关允许你启用这些特性。更多信息请参考[功能开关](../../advanced-user-guides/enable-experimental-features/enable-experimental-features.md)。

### 全局配置

仅在激活 **legacy** [功能开关](../../advanced-user-guides/enable-experimental-features/enable-experimental-features.md) 时才可以看见**全局配置**选项。在 v2.6 及更新版本新安装的 Rancher 已经默认禁用了 **legacy** 特性。如果你是从早期的 Rancher 版本升级，或者在 Rancher v2.6 及更新版本上启用了 **legacy** 特性，顶部导航菜单中将会显示**全局配置**：

1. 点击左上角的 **☰**。
1. 在 **旧版应用** 中选择 **全局配置**。

**全局配置**提供以下功能：

- **应用商店**
- **全局 DNS 条目**
- **全局 DNS 提供商**

由于这些是旧版特性，请参考 Rancher v2.0-v2.4 的[应用商店](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md), [全局 DNS 条目](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns.md#adding-a-global-dns-entry), 以及 [全局 DNS 提供商](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns.md#editing-a-global-dns-provider)。
