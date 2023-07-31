---
title: 身份验证配置
weight: 10
---

Rancher 向 Kubernetes 添加的关键功能之一，就是集中式用户身份验证。此功能允许你的用户使用一组凭证对你的所有 Kubernetes 集群进行身份验证。

这种集中式的用户身份验证是使用 Rancher 身份验证代理完成的，该代理与 Rancher 的其他组件一起安装。这个代理验证你的用户，并使用一个 ServiceAccount 将用户请求转发到你的 Kubernetes 集群。

## 外部验证与本地验证

Rancher 身份验证代理支持与以下外部身份验证服务集成：

| 验证服务 |
| ------------------------------------------------------------------------------------------------ |
| [Microsoft Active Directory](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory.md) |
| [GitHub](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github.md) |
| [Microsoft Azure AD](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad.md) |
| [FreeIPA](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa.md) |
| [OpenLDAP](configure-openldap.md) |
| [Microsoft AD FS](configure-microsoft-ad-federation-service-saml.md) |
| [PingIdentity](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity.md) |
| [Keycloak (OIDC)](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc.md) |
| [Keycloak (SAML)](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml.md) |
| [Okta](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml.md) |
| [Google OAuth](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth.md) |
| [Shibboleth](configure-shibboleth-saml.md) |

同时，Rancher 也提供了[本地身份验证](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users.md)。

大多数情况下，应该使用外部身份验证服务，而不是本地身份验证，因为外部身份验证允许对用户进行集中管理。但是你可能需要一些本地身份验证用户，以便在特定的情况下（例如在外部身份验证系统不可用或正在进行维护时）管理 Rancher。

## 用户和组

Rancher 依赖用户和组来决定允许登录到 Rancher 的用户，以及他们可以访问哪些资源。使用外部系统进行身份验证时，将由外部系统提供用户和组。这些用户和组被赋予集群、项目、多集群应用、全局 DNS 提供商等资源的特定角色。当你将访问权限授予某个组时，身份验证提供程序中属于该组的所有用户都将能够使用你指定的权限访问该资源。有关角色和权限的更多信息，请参见 [RBAC](manage-role-based-access-control-rbac.md)。

:::note

本地认证不支持创建或管理用户组。

:::

详情请参见[用户和组](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups.md)。

## Rancher 授权范围

将 Rancher 配置成允许使用外部验证提供程序登录后，你需要配置允许登录和使用 Rancher 的用户。可用选项如下：

| 访问级别 | 描述 |
|----------------------------------------------|-------------|
| 允许任何有效用户 | 授权服务中的 _任何_ 用户都可以访问Rancher。通常不建议使用此设置。 |
| 允许集群和项目成员，以及授权的用户和组织 | 认证服务中的任何用户，以及添加为**集群成员**或**项目成员**的任何组都可以登录到 Rancher。此外，添加到**授权用户和组织**列表中的身份验证服务中的任何用户和组都能登录到 Rancher。 |
| 仅允许授权用户和组织 | 只有添加到**授权用户和组织**的身份验证服务中的用户和组能登录 Rancher。 |

要在授权服务中为用户设置 Rancher 访问级别，请执行以下步骤：

1. 在左上角，单击 **☰ > 用户 & 认证**。
1. 单击左侧导航栏的**认证**。
1. 设置好认证提供程序的配置后，使用 **Site Access** 选项来配置用户的授权范围。上表说明了每个选项的访问级别。
1. 可选：如果你选择**允许任何有效用户**以外的选项，你可以通过在显示的文本字段中搜索用户，将用户添加到**授权用户和组织**的列表中。
1. 单击**保存**。

**结果**：Rancher 访问配置已应用。

:::note SAML 身份提供商注意事项

- SAML 协议不支持搜索或查找用户或组。因此，将用户或组添加到 Rancher 时不会对其进行验证。
- 添加用户时，必须正确输入确切的用户 ID（即 `UID` 字段）。键入用户 ID 时，将不会搜索可能匹配的其他用户 ID。
- 添加组时，必须从文本框旁边的下拉列表中选择组。Rancher 假定来自文本框的任何输入都是用户。
- 用户组下拉列表仅显示你所属的用户组。如果你不是某个组的成员，你将无法添加该组。

:::

## 外部身份验证配置和用户主体

配置外部认证需要：

- 分配了管理员角色的本地用户，以下称为 _本地主体_。
- 可以使用外部认证服务进行认证的外部用户，以下称为 _外部主体_。

外部身份验证的配置将影响 Rancher 中主体用户的管理方式。按照下面的列表来更好地理解这些影响。

1. 作为本地主体登录到 Rancher 并完成外部身份验证的配置。

   ![Sign In](/img/sign-in.png)

2. Rancher 将外部主体与本地主体相关联。这两个用户共享本地主体的用户 ID。

   ![Principal ID Sharing](/img/principal-ID.png)

3. 完成配置后，Rancher 将自动退出本地主体。

   ![Sign Out Local Principal](/img/sign-out-local.png)

4. 然后，Rancher 会自动将你作为外部主体重新登录。

   ![Sign In External Principal](/img/sign-in-external.png)

5. 由于外部主体与本地主体共享一个 ID，因此**用户**页面不会再单独显示外部主体的对象。

   ![Sign In External Principal](/img/users-page.png)

6. 外部主体和本地主体共享相同的访问权限。

:::note 重新配置以前设置的身份验证提供程序

如果你需要重新配置或禁用以前设置的提供程序然后再重新启用它，请确保进行此操作的用户使用外部用户身份登录 Rancher，而不是本地管理员。

:::

## 禁用认证提供程序

禁用身份认证提供程序时，Rancher 会删除与其关联的所有资源，例如：
- Secrets
- 全局角色绑定。
- 集群角色模板绑定。
- 项目角色模板绑定。
- 与提供商关联的外部用户，但是这些用户从未以本地用户身份登录到 Rancher。

由于此操作可能会导致许多资源丢失，因此你可能希望在提供程序上添加保护措施。为确保在禁用身份认证提供程序时不会运行此清理，请向相应的身份认证配置添加特殊注释。

例如，要为 Azure AD 提供程序添加安全措施，请注释 `azuread` authconfig 对象：

`kubectl annotate --overwrite authconfig azuread management.cattle.io/auth-provider-cleanup='user-locked'`

在你将注释设置为 `unlocked` 之前，Rancher 不会执行清理。

### 手动运行资源清理

即使在你配置了另一个身份认证提供程序，Rancher 也可能会保留 local 集群中已禁用的身份认证提供程序配置的资源。例如，如果你使用 Provider A，然后禁用了它并开始使用 Provider B，当你升级到新版本的 Rancher 时，你可以手动触发对 Provider A 配置的资源的清理。

要为已禁用的身份认证提供程序手动触发清理，请将带有 `unlocked` 值的 `management.cattle.io/auth-provider-cleanup` 注释添加到 auth 配置中。
