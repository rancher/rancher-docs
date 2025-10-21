---
title: 配置 Microsoft AD FS (SAML)
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml"/>
</head>

如果你的组织使用 Active Directory Federation Service (AD FS) 进行用户身份认证，你可以通过配置 Rancher 来允许用户使用 AD FS 凭证登录。

## 先决条件

已安装 Rancher。

- 获取你的 Rancher Server URL。配置 AD FS 时，请使用该 URL 替换 `<RANCHER_SERVER>` 占位符。
- 你必须在 Rancher 安装时具有全局管理员账号。

你必须配置 [Microsoft AD FS 服务器](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services)。

- 获取你的 AD FS 服务器 IP/DNS 名称。配置 AD FS 时，请使用该 IP/DNS 名称替换 `<AD_SERVER>` 占位符。
- 你必须有在 AD FS 服务器上添加 [Relying Party Trusts](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-relying-party-trust) 的权限。

## 配置概要

要让 Rancher Server 使用 Microsoft AD FS，你需要在 Active Directory 服务器上配置 AD FS，并将 Rancher 配置为使用 AD FS 服务器。如果需要获取在 Rancher 中设置 Microsoft AD FS 身份认证的指南，请参见：

- [1. 在 Microsoft AD FS 中配置 Rancher](configure-ms-adfs-for-rancher.md)
- [2. 在 Rancher 中配置 Microsoft AD FS](configure-rancher-for-ms-adfs.md)

:::note SAML 认证警告

- Users and groups aren't validated when you assign permissions to them in Rancher.
- 添加用户时，必须正确输入确切的用户 ID（即 UID 字段）。键入用户 ID 时，将不会搜索可能匹配的其他用户 ID。
- 添加组时，必须从文本框旁边的下拉列表中选择组。Rancher 假定来自文本框的任何输入都是用户。
- The group drop-down shows only the groups that you are a member of. However, if you have Administrator permissions or restricted Administrator permissions, you can join a group that you are not a member of.

:::

### [后续操作：在 Microsoft AD FS 中配置 Rancher](configure-ms-adfs-for-rancher.md)
