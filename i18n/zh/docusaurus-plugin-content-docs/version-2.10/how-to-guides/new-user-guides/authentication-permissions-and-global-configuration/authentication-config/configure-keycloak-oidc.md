---
title: 配置 Keycloak (OIDC)
description: 创建 Keycloak OpenID Connect (OIDC) 客户端并配置 Rancher 以使用 Keycloak。你的用户将能够使用他们的 Keycloak 登录名登录 Rancher。
---

如果你的组织使用 [Keycloak Identity Provider (IdP)](https://www.keycloak.org) 进行用户身份验证，你可以通过配置 Rancher 来允许用户使用 IdP 凭证登录。Rancher 支持使用 OpenID Connect (OIDC) 协议和 SAML 协议来集成 Keycloak。与 Rancher 一起使用时，这两种实现在功能上是等效的。本文描述了配置 Rancher 以通过 OIDC 协议与 Keycloak 一起使用的流程。

如果你更喜欢将 Keycloak 与 SAML 协议一起使用，请参见[此页面](configure-keycloak-saml.md)。

如果你有使用 SAML 协议的现有配置并希望切换到 OIDC 协议，请参见[本节](#从-saml-迁移到-oidc)。

## 先决条件

- 已在 Rancher 上禁用 Keycloak (SAML)。
- 你必须配置了 [Keycloak IdP 服务器](https://www.keycloak.org/guides#getting-started)。
- Follow the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/#proc-creating-oidc-client_server_administration_guide) to create a new OIDC client with the settings below.

    | 设置 | 值 |
    |------------|------------|
    | `Client ID` | &lt;client-id> (例如 `rancher`) |
    | `Name` | &lt;client-name> (例如 `rancher`) |
    | `Client type` | `OpenID Connect` |
    | `Client authentication` | `ON` |
    | `Valid Redirect URI` | `https://yourRancherHostURL/verify-auth` |

- 在新的 OIDC 客户端中，创建 [Mappers](https://www.keycloak.org/docs/latest/server_admin/#_protocol-mappers) 来公开用户字段。
    1. In the navigation menu, click **Clients**.
    1. Click the **Clients list** tab.
    1. Find and click the client you created.
    1. Click the **Client scopes** tab.
    1. Find and click the link labeled `<client-name>-dedicated`. For example, if you named your client `rancher`, look for the link named `rancher-dedicated`.
    1. Click the **Mappers** tab.
    1. Click **Configure a new mapper**. If you already have existing mappers configured, click the arrow next to **Add mapper** and select **By configuration**. Repeat this process and create these mappers:
        - From the mappings table, select **Group Membership** and configure a new "Groups Mapper" with the settings below. For settings that are not mentioned, use the default value.

          | Setting | Value |
          | ------------|------------|
          | `Name` | `Groups Mapper` |
          | `Mapper Type` | `Group Membership` |
          | `Token Claim Name` | `groups` |
          | `Full group path` | `OFF` |
          | `Add to ID token` | `OFF` |
          | `Add to access token` | `OFF` |
          | `Add to user info` | `ON` |

        - From the mappings table, select **Audience** and configure a new "Client Audience" with the settings below. For settings that are not mentioned, use the default value.

          | Setting | Value |
          | ------------|------------|
          | `Name` | `Client Audience` |
          | `Mapper Type` | `Audience` |
          | `Included Client Audience` | &lt;client-name> |
          | `Add to ID token` | `OFF` |
          | `Add to access token` | `ON` |

        - From the mappings table, select **Group Membership** and configure a new "Groups Path" with the settings below. For settings that are not mentioned, use the default value.

          | Setting | Value |
          | ------------|------------|
          | `Name` | `Group Path` |
          | `Mapper Type` | `Group Membership` |
          | `Token Claim Name` | `full_group_path` |
          | `Full group path` | `ON` |
          | `Add to ID token` | `ON` |
          | `Add to access token` | `ON` |
          | `Add to user info` | `ON` |

- Add the following role mappings to all users or groups that need to query the Keycloak users.

<Tabs>
<TabItem value="Users">

1. In the navigation menu, click **Users**.
1. Click the user you want to add role mappings to.
1. Click the **Role mapping** tab.
1. Click **Assign role**.
1. Select the following roles:
    - query-users
    - query-groups
    - view-users
1. Click **Assign**.

</TabItem>
<TabItem value="Groups">

1. In the navigation menu, click **Groups**.
1. Click the group  you want to add role mappings to.
1. Click the **Role mapping** tab.
1. Click **Assign role**.
1. Select the following roles:
    - query-users
    - query-groups
    - view-users
1. Click **Assign**.

</TabItem>
</Tabs>
  
## 在 Rancher 中配置 Keycloak

1. 在 Rancher UI 中，单击 **☰ > 用户 & 认证**。
1. 单击左侧导航栏的**认证**。
1. 选择 **Keycloak (OIDC)**。
1. 填写**配置 Keycloak OIDC 账号**表单。有关填写表单的帮助，请参见[配置参考](#配置参考)。

    :::note

    When configuring the **Endpoints** section using the **Generate** option, Rancher includes `/auth` as part of the context path in the **Issuer** and **Auth Endpoint** fields, which is only valid for Keycloak 16 or older. You must configure endpoints using the **Specify** option for [Keycloak 17](https://www.keycloak.org/docs/latest/release_notes/index.html#keycloak-17-0-0) and newer, which have [migrated to Quarkus](https://www.keycloak.org/migration/migrating-to-quarkus).  

    :::

1. 完成**配置 Keycloak OIDC 账号**表单后，单击**启用**。

    Rancher 会将你重定向到 IdP 登录页面。输入使用 Keycloak IdP 进行身份验证的凭证，来验证你的 Rancher Keycloak 配置。

    :::note

    你可能需要禁用弹出窗口阻止程序才能看到 IdP 登录页面。

    :::

**结果**：已将 Rancher 配置为使用 OIDC 协议与 Keycloak 一起工作。你的用户现在可以使用 Keycloak 登录名登录 Rancher。

:::note SAML 认证警告

- Users and groups aren't validated when you assign permissions to them in Rancher.
- 添加用户时，必须正确输入确切的用户 ID（即 UID 字段）。键入用户 ID 时，将不会搜索可能匹配的其他用户 ID。
- 添加组时，必须从文本框旁边的下拉列表中选择组。Rancher 假定来自文本框的任何输入都是用户。
- The group drop-down shows only the groups that you are a member of. However, if you have Administrator permissions or Restricted Administrator permissions, you can join a group that you are not a member of.

:::

## 配置参考

| 字段 | 描述 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 客户端 ID | 你的 Keycloak 客户端的 `Client ID`。 |
| 客户端密码 | 你的 Keycloak 客户端生成的 `Secret`。在 Keycloak 控制台中，单击 **Clients**，选择你创建的客户端，选择 **Credentials** 选项卡，然后复制 `Secret` 字段的值。 |
| 私钥/证书 | 在 Rancher 和你的 IdP 之间创建安全外壳（SSH）的密钥/证书对。如果你的 Keycloak 服务器上启用了 HTTPS/SSL，则为必填。 |
| 端点 | 选择为 `Rancher URL`、`发行者`和 `Auth 端点`字段使用生成的值，还是在不正确时进行手动覆盖。 |
| Keycloak URL | 你的 Keycloak 服务器的 URL。 |
| Keycloak Realm | 创建 Keycloak 客户端的 Realm 的名称。 |
| Rancher URL | Rancher Server 的 URL。 |
| Issuer | 你的 IdP 的 URL。 |
| Auth 端点 | 重定向用户进行身份验证的 URL。 |

## 从 SAML 迁移到 OIDC

本节描述了将使用 Keycloak (SAML) 的 Rancher 过渡到 Keycloak (OIDC) 的过程。

1. Reconfigure Keycloak.
    1. Configure a new `OpenID Connect` client according to the [Prerequisites](#先决条件). Ensure the same `Valid Redirect URIs` are set.
    1. Configure mappers for the new client according to the [Prerequisites](#先决条件).
1. Before configuring Rancher to use Keycloak (OIDC), Keycloak (SAML) must be first disabled.
    1. In the Rancher UI, click **☰ > Users & Authentication**.
    1. In the left navigation bar, click **Auth Provider**.
    1. Select **Keycloak (SAML)**.
    1. Click **Disable**.
1. Follow the steps in [Configuring Keycloak in Rancher](#在-rancher-中配置-keycloak).

:::caution

配置完成后，由于用户权限不会自动迁移，你需要重新申请 Rancher 用户权限。

:::

## 附录：故障排除

如果你在测试与 Keycloak 服务器的连接时遇到问题，请先检查 OIDC 客户端的配置选项。你还可以检查 Rancher 日志来查明问题的原因。调试日志可能包含有关错误的更详细信息。详情请参见[如何启用调试日志](../../../../faq/technical-items.md#如何启用调试日志记录)。

所有与 Keycloak 相关的日志条目都将添加 `[generic oidc]` 或 `[keycloak oidc]`。

### 不能重定向到 Keycloak

完成**配置 Keycloak OIDC 账号**表单并单击**启用**后，你没有被重定向到你的 IdP。

验证你的 Keycloak 客户端配置。

### 生成的 `Issuer` 和 `Auth 端点`不正确

在**配置 Keycloak OIDC 账号**表单中，将**端点**更改为`指定（高级设置）`并覆盖`发行者` 和 `Auth 端点`的值。要查找这些值，前往 Keycloak 控制台并选择 **Realm Settings**，选择 **General** 选项卡，然后单击 **OpenID Endpoint Configuration**。JSON 输出将显示 `issuer` 和 `authorization_endpoint` 的值。

### Keycloak 错误："Invalid grant_type"

在某些情况下，这条错误提示信息可能有误导性，实际上造成错误的原因是 `Valid Redirect URI` 配置错误。
