---
title: 身份验证、权限和全局设置
---

安装完成后，[系统管理员](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)需要配置 Rancher 来配置身份验证，安全，默认设定，安全策略，驱动和全局 DNS 条目。

## 首次登录

首次登录 Rancher 后，Rancher 会提示你输入 **Rancher Server URL**。你需要将 URL 设置为 Rancher Server 的主要入口点。当负载均衡器位于 Rancher Server 集群前面时，URL 需要设置为负载均衡器地址。系统会自动尝试从运行 Rancher Server 的主机的 IP 地址或主机名推断 Rancher Server 的URL，上述推断仅在你运行单节点 Rancher Server 时才正确。因此，在大多数情况下，你需要自己将 Rancher Server 的 URL 设置为正确的值。

:::danger

Rancher Server 的 URL 在设置后不可再更新。因此，你需要谨慎设置该 URL。

:::

## 身份验证

Rancher 向 Kubernetes 添加的关键功能之一，就是集中式用户身份验证。此功能允许将本地用户连接到外部身份验证系统，使用该系统的用户和组进行身份验证。

有关身份验证如何工作及如何设置外部身份认证系统，请参见[身份验证](authentication-config.md)。

## 授权

Rancher 通过 _用户_ 进行授权管理。用户的 _授权_ 或系统访问权限由用户角色决定。Rancher 提供了预设角色，让你轻松配置用户对资源的权限，还提供了为每个 Kubernetes 资源定制角色的能力。

有关授权如何工作及如何自定义角色，请参见 [RBAC](manage-role-based-access-control-rbac.md)。

## Pod 安全策略

_Pod 安全策略（PSP）_ 是用来控制安全敏感相关 Pod 规范（例如 root 特权）的对象。如果某个 Pod 不满足 PSP 指定的条件，Kubernetes 将不允许它启动，并在 Rancher 中显示错误消息。

有关如何创建和使用 PSP，请参见 [Pod 安全策略](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md)。

## 配置驱动

使用 Rancher 中的驱动，你可以管理可以使用哪些供应商来配置[托管的 Kubernetes 集群](set-up-clusters-from-hosted-kubernetes-providers.md)或[云服务器节点](use-new-nodes-in-an-infra-provider.md)，以允许 Rancher 部署和管理 Kubernetes。

详情请参考[配置驱动](about-provisioning-drivers.md)。

## 添加 Kubernetes 版本到 Rancher

你可以通过这个功能，在不升级 Rancher 的情况下，升级到最新发布的 Kubernetes 版本。Kubernetes 倾向于在次要版本删除或新增 API 接口。本功能让你轻松升级 Kubernetes 补丁版本（即 `v1.15.X`），但不升级 Kubernetes 次要版本（即 `v1.X.0`）。

Rancher 用于配置 [RKE 集群](launch-kubernetes-with-rancher.md) 的信息现在位于 Rancher Kubernetes 元数据中。有关元数据配置以及如何更改用于配置 RKE 集群的 Kubernetes 版本，请参见 [Rancher Kubernetes 元数据。](../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)

Rancher 用于配置 [RKE 集群](launch-kubernetes-with-rancher.md)的 Kubernetes 版本信息包含在 Rancher Kubernetes 元数据中。

有关元数据如何工作以及如何配置元数据，请参见 [Rancher Kubernetes 元数据](../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)。

## 全局设置

顶部导航栏中提供了控制全局级别 Rancher 设置的选项。

点击左上角的 **☰**，然后选择**全局设置**来查看并进行配置：

- **设置**：各种 Rancher 默认值，例如用户密码的最小长度 (`password-min-length`)。需要小心修改这些设置，因为无效的值可能会破坏 Rancher 安装。
- **功能开关**：打开或关闭的 Rancher 功能。其中一些是[实验功能](#启用实验功能)。
- **横幅**：可以添加到门户上固定位置的元素。例如，你可以使用这些选项在用户登录 Rancher 时[设置自定义横幅](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding.md#固定横幅)。
- **品牌**：可以[自定义](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding.md)的 Rancher UI 设计元素。你可以添加自定义徽标或图标，并修改 UI 颜色。
- **性能**：Rancher UI 的性能设置，例如增量资源加载。
- **主页链接**：Rancher UI **主页**上显示的链接。你可以修改默认链接的可见性或添加你自己的链接。

### 启用实验功能

Rancher 包含一些实验性或默认禁用的功能。你可以使用功能开关来启用这些功能。详情请参见[功能开关](enable-experimental-features.md)的章节。

### 全局设置

除非你激活了**旧版**[功能开关](enable-experimental-features.md)，否则**全局配置**选项不可见。v2.6 及更高版本的 Rancher 默认禁用 **legacy** 标志。如果你从旧 Rancher 版本升级，或者在 Rancher v2.6 及更高版本上激活了 **legacy** 功能开关，则可以从顶部导航菜单访问**全局设置**：

1. 点击左上角的 **☰**。
1. 从**旧版应用**中选择**全局设置**。

**全局设置**提供了以下功能：

- **应用商店**
- **全局 DNS 条目**
- **全局 DNS 提供商**

由于这些是旧版功能，因此请参阅有关[应用商店](/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm-charts-in-rancher.md)、[全局 DNS 条目](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns.md#adding-a-global-dns-entry)和[全局 DNS 提供商](/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns.md#editing-a-global-dns-provider)的 Rancher v2.0-v2.4 文档了解更多详情。