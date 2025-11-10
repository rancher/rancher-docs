---
title: 配置 Okta (SAML)
---

如果你的组织使用 Okta Identity Provider (IdP) 进行用户身份验证，你可以通过配置 Rancher 来允许用户使用 IdP 凭证登录。

:::note

Okta 集成仅支持服务提供商发起的登录。

:::
## 先决条件

在 Okta 中，使用以下设置创建一个新的 SAML 应用。如需获取帮助，请参见 [Okta 文档](https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta)。

| 设置 | 值 |
------------|------------
| `Single Sign on URL` | `https://yourRancherHostURL/v1-saml/okta/saml/acs` |
| `Audience URI (SP Entity ID)` | `https://yourRancherHostURL/v1-saml/okta/saml/metadata` |

## 在 Rancher 中配置 Okta

你可以将 Okta 与 Rancher 集成，以便经过身份认证的用户通过组权限访问 Rancher 资源。Okta 会返回一个对用户进行身份认证的 SAML 断言，包括用户所属的组。

1. 在左上角，单击 **☰ > 用户 & 认证**。
1. 在左侧导航栏，单击**认证**。
1. 单击 **Okta**。
1. 填写**配置 Okta 账号**表单。下面的示例描述了如何将 Okta 属性从属性语句映射到 Rancher 中的字段：

   | 字段 | 描述 |
   | ------------------------- | ----------------------------------------------------------------------------- |
   | 显示名称字段 | 属性语句中包含用户显示名称的属性名称。 |
   | 用户名字段 | 属性语句中包含用户名/给定名称的属性名称。 |
   | UID 字段 | 属性语句中每个用户唯一的属性名称。 |
   | 用户组字段 | 组属性语句中公开你的组的属性名称。 |
   | Rancher API 主机 | Rancher Server 的 URL。 |
   | 私钥/证书 | 密钥/证书对，用于断言加密。 |
   | 元数据 XML | 你在应用 `Sign On` 部分中找到的 `Identity Provider metadata` 文件。 |

   :::tip

   你可以使用 openssl 命令生成一个密钥/证书对。例如：

   ```
   openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt
   ```

   :::


1. 完成**配置 Okta 账号**表单后，单击**启用**。

   Rancher 会将你重定向到 IdP 登录页面。输入使用 Okta IdP 进行身份验证的凭证，来验证你的 Rancher Okta 配置。

   :::note

   如果什么都没有发生，很可能是因为你的浏览器阻止了弹出窗口。请在弹出窗口阻止程序中禁用 Rancher 域，并在其他类似扩展中将 Rancher 列入白名单。

   :::

**结果**：已将 Rancher 配置为使用 Okta。你的用户现在可以使用 Okta 登录名登录 Rancher。

:::note SAML 身份提供商注意事项

如果你在没有 OpenLDAP 的情况下配置 Okta，你将无法搜索或直接查找用户或组。相关的警告如下：

- 在 Rancher 中为用户和组分配权限时将不会验证用户和组。
- 添加用户时，必须正确输入确切的用户 ID（即 `UID` 字段）。键入用户 ID 时，将不会搜索可能匹配的其他用户 ID。
- 添加组时，必须从文本框旁边的下拉列表中选择组。Rancher 假定来自文本框的任何输入都是用户。
- The group drop-down shows only the groups that you are a member of. However, if you have Administrator permissions or restricted Administrator permissions, you can join a group that you are not a member of.

:::

## Okta 与 OpenLDAP 搜索

你可以添加 OpenLDAP 后端来协助用户和组搜索。Rancher 将显示来自 OpenLDAP 服务的其他用户和组。这允许你将权限分配给用户不属于的组。

### OpenLDAP 先决条件

如果你使用 Okta 作为 IdP，你可以[设置 LDAP 接口](https://help.okta.com/en-us/Content/Topics/Directory/LDAP-interface-main.htm)以供 Rancher 使用。你还可以配置外部 OpenLDAP Server。

你必须使用 LDAP 绑定帐户（也称为 ServiceAccount）来配置 Rancher，以便搜索和检索应具有访问权限的用户和组的 LDAP 条目。不要使用管理员帐户或个人帐户作为 LDAP 绑定帐户。在 OpenLDAP 中[创建](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-add-users.htm)一个专用帐户，对搜索库下的用户和组具有只读访问权限。

:::warning 安全注意事项

OpenLDAP ServiceAccount 用于所有搜索。无论用户个人的 SAML 权限是什么，Rancher 用户都将看到 OpenLDAP ServiceAccount 可以查看的用户和组。

:::


> **使用 TLS？**
>
> 如果 OpenLDAP Server 使用的证书是自签名的或来自无法识别的证书颁发机构，则 Rancher 需要 PEM 格式的 CA 证书（包含所有中间证书）。你需要在配置期间提供此证书，以便 Rancher 能够验证证书链。

### 在 Rancher 中配置 OpenLDAP

[配置 OpenLDAP Server、组和用户的设置](../configure-openldap/openldap-config-reference.md)。请注意，不支持嵌套组成员。

> 在继续配置之前，请熟悉[外部身份认证配置和主要用户](./authentication-config.md#外部认证配置和用户主体)。

1. 使用分配了 [administrator](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions) 角色（即 _本地主体_）的本地用户登录到 Rancher。
1. 在左上角，单击 **☰ > 用户 & 认证**。
1. 在左侧导航栏，单击**认证**。
1. 单击 **Okta**，如果已配置 SAML，则单击**编辑配置**。
1. 在**用户和组搜索**下，选中**配置 OpenLDAP Server**。

如果你在测试与 OpenLDAP Server 的连接时遇到问题，请确保你输入了ServiceAccount 的凭证并正确配置了搜索库。你可以检查 Rancher 日志来查明根本原因。调试日志可能包含有关错误的更详细信息。请参阅[如何启用调试日志](../../../../faq/technical-items.md#如何启用调试日志记录)了解更多信息。

## Configuring SAML Single Logout (SLO)

<ConfigureSLO />
