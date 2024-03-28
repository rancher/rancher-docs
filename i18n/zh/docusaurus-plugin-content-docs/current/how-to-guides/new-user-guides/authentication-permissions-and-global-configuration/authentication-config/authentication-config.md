---
title: 配置认证
weight: 10
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config"/>
</head>

Rancher 为 Kubernetes 添加的一个关键功能是集中式用户认证，这个特性允许用户使用一组凭证对任何 Kubernetes 集群进行身份认证。

这种集中式用户认证是通过 Rancher 的认证代理完成的，该代理与 Rancher 的其余部分一并安装，此代理对用户进行认证并通过一个 Service Acount 将请求转发到 Kubernetes 集群中。

:::warning

用来启用外部认证的账户将被授予管理员权限。如果你使用一个测试账号或非管理员账号，该账号仍然会被授予管理员级别权限。请查看[外部认证配置和主体用户](#外部认证配置和用户主体)了解原因。

:::

## 外部认证与本地认证

Rancher 认证代理可以与以下外部认证服务集成。

| 认证服务                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- |
| [Microsoft Active Directory](configure-active-directory.md)                                                            |
| [GitHub](configure-github.md)                                                                                          |
| [Microsoft Azure AD](configure-azure-ad.md)                                                                            |
| [FreeIPA](configure-freeipa.md)                                                                                        |
| [OpenLDAP](../configure-openldap/configure-openldap.md)                                                                |
| [Microsoft AD FS](../configure-microsoft-ad-federation-service-saml/configure-microsoft-ad-federation-service-saml.md) |
| [PingIdentity](configure-pingidentity.md)                                                                              |
| [Keycloak (OIDC)](configure-keycloak-oidc.md)                                                                          |
| [Keycloak (SAML)](configure-keycloak-saml.md)                                                                          |
| [Okta](configure-okta-saml.md)                                                                                         |
| [Google OAuth](configure-google-oauth.md)                                                                              |
| [Shibboleth](../configure-shibboleth-saml/configure-shibboleth-saml.md)                                                |

当然，Rancher 也提供[本地认证](create-local-users.md).

在多数情况下，你应该使用外部认证服务而不是使用本地认证，因为外部认证服务可以集中式的对用户进行管理。但是在极少数情况下，例如外部认证服务不可用或正在维护时，你可能需要使用本地认证用户来管理 Rancher。

## 用户和组

Rancher 依赖用户和组来决定允许谁登录 Rancher 以及他们可以访问哪些资源。当使用外部认证时，外部认证系统会根据用户提供组的信息。这些用户和组被赋予了集群、项目、多集群应用以及全局 DNS 提供商和条目等资源的特定角色。当你对组进行授权时，在认证服务中所有属于这个组中的用户都有访问指定的资源的权限。有关角色和权限的更多信息，请查看 [RBAC](../manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)。

:::note

本地认证不支持创建或管理组

:::

更多信息，请查看[用户和组](manage-users-and-groups.md)

## Rancher 授权范围

当你配置完 Rancher 使用外部认证服务后，你可以配置允许谁登录和使用 Rancher，包含如下的选项：

| 访问级别                                 | 描述                                                                                                                                               |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允许任何有效用户                         | 在认证服务中的*任何*用户都可以访问 Rancher。通常情况下不建议使用该设置！                                                                           |
| 允许集群和项目成员，以及授权的用户和组织 | 认证服务中属于**集群成员**或**项目成员**的用户或组成员都可以登录 Rancher。此外添加在**授权的用户和组织**列表中的用户和组成员也可以登录到 Rancher。 |
| 仅限于授权的用户可以访问                 | 仅有在授权用户和组织列表中的用户和组成员可以登录到 Rancher。                                                                                       |

要在授权服务中为用户设置 Rancher 访问级别，请执行以下步骤：

1. 在左上角，点击 **☰ > 用户 & 认证**。
1. 在左侧导航栏，点击 **认证**.
1. 设置完外部认证详细信息后，使用 **站点访问** 选项配置用户权限范围，上面的表格说明了每个选项的访问级别。
1. 可选：如果你选择 **允许任何有效用户** 以外的选项，你可以通过在出现的文本框中搜索用户，将用户添加到授权用户和组织的列表中。
1. 点击 **保存**。

**结果:** Rancher 的访问配置被应用。

:::note SAML 认证警告:

- SAML 协议不支持搜索或查找用户或组。因此，将用户或组添加到 Rancher 时不会对其进行验证。
- 添加用户时，必须正确输入确切的用户 ID（即 UID 字段）。键入用户 ID 时，将不会搜索可能匹配的其他用户 ID。
- 添加组时，必须从文本框旁边的下拉列表中选择组。Rancher 假定来自文本框的任何输入都是用户。
- 用户组下拉列表仅显示您所属的用户组。您将无法添加您不是其成员的组。

:::

## 外部认证配置和用户主体

配置外部认证需要：

- 分配了管理员角色的本地用户，以下称为 _本地主体_。
- 可以使用外部认证服务进行认证的外部用户，以下简称为 _外部主体_。

外部认证的配置也会影响 Rancher 中主体用户的管理方式，具体地说，当用户账户启用了外部认证时，将授予其管理员级别的权限。这是因为本地主体和外部主体共享相同的用户 ID 和访问权限。

以下说明演示了这些效果：

1. 作为本地主体登录到 Rancher 并完成外部身份验证的配置。

   ![Sign In](/img/sign-in.png)

2. Rancher 将外部主体与本地主体相关联。这两个用户共享本地主体的用户 ID。

   ![Principal ID Sharing](/img/principal-ID.png)

3. 完成配置后，Rancher 将自动退出本地主体。

   ![Sign Out Local Principal](/img/sign-out-local.png)

4. 然后，Rancher 会自动将您登录外部主体。

   ![Sign In External Principal](/img/sign-in-external.png)

5. 因为外部主体和本地主体共享一个 ID，所以用户列中不会再单独显示一个另外的外部主体的对象。

   ![Sign In External Principal](/img/users-page.png)

6. 外部主体和本地主体共享相同的访问权限。

:::note 重新配置先前设置的认证

如果需要重新配置或禁用后重新启用先前设置过的认证，请确保尝试这样做的用户以外部用户身份登录到 Rancher，而不是使用本地管理员登录。

:::

## 禁用认证

当你禁用认证时，Rancher 会删除所有与之关联的资源，例如：

- 密文
- 绑定的全局角色。
- 绑定的集群角色。
- 绑定的项目角色。
- 与外部认证关联但从未以本地用户身份登录 Rancher 的外部用户。

由于此操作可能会导致许多资源丢失，因此你可能需要添加一些保护措施。若要确保禁用外部认证时不执行清理流程，需要为外部认证的配置添加特殊的注释。

例如，若要对 Azure AD 认证增加保护措施，你需要在 authconfig 对象上增加 `azuread` 注释：

`kubectl annotate --overwrite authconfig azuread management.cattle.io/auth-provider-cleanup='user-locked'`

禁用 Azure AD 认证后，Rancher 不会执行清理流程，直到你将该注解设置为 `unlocked`。

### 手动运行资源清理

Rancher 可能会在本地集群中保留之前禁用的外部认证配置的资源，即使你配置对接了另一种认证也是如此。例如，如果你对接了 A 认证，然后禁用它，并重新对接使用 B 认证，当你升级到新版本的 Rancher 时，你可以手动触发对认证 A 配置的资源清理。

要手动触发已禁用的认证配置的清理，请将 `unlocked` 值添加到对应认证配置的 `management.cattle.io/auth-provider-cleanup` 注解中。
