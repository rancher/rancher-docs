---
title: 配置 Azure AD
---

<Tabs>
   <TabItem value="Rancher v2.6.7+">

## Microsoft Graph API

Microsoft Graph API 现在是设置 Azure AD 的流程。下文将帮助[新用户](#新用户设置)使用新实例来配置 Azure AD，并帮助现有 Azure 应用所有者[迁移到新流程](#从-azure-ad-graph-api-迁移到-microsoft-graph-api)。

Rancher 中的 Microsoft Graph API 流程正在不断发展。建议你使用最新的 2.6 补丁版本，该版本仍在积极开发中，并将持续获得新功能和改进。

### 新用户设置

如果你在 Azure 中托管了一个 Active Directory（AD）实例，你可以将 Rancher 配置为允许你的用户使用 AD 账号登录。你需要在 Azure 和 Rancher 中进行 Azure AD 外部身份验证。

:::note 注意事项

- Azure AD 集成仅支持服务提供商发起的登录。
- 大部分操作是从 [Microsoft Azure 门户](https://portal.azure.com/)执行的。

:::

#### Azure Active Directory 配置概述

要将 Rancher 配置为允许用户使用其 Azure AD 账号进行身份验证，你需要执行多个步骤。在你开始之前，请查看下文操作步骤大纲。

:::tip

在开始之前，打开两个浏览器选项卡：一个用于 Rancher，另一个用于 Azure 门户。这样，你可以将门户的配置值复制并粘贴到 Rancher 中。

:::


#### 1. 在 Azure 注册 Rancher

在 Rancher 中启用 Azure AD 之前，你必须先向 Azure 注册 Rancher。

1. 以管理用户身份登录 [Microsoft Azure](https://portal.azure.com/)。后续配置步骤中需要管理访问权限。

1. 使用搜索功能打开 **App registrations** 服务。

1. 点击 **New registration** 并填写表单。

   ![New App Registration](/img/new-app-registration.png)

   1. 输入 **Name**（例如 `Rancher`）。
      <a id="3.2"></a>

   1. 在 **Supported account types** 中，选择 **Accounts in this organizational directory only (AzureADTest only - Single tenant)**。这对应于旧版应用注册选项。

      :::note

      在更新后的 Azure 门户中，Redirect URI 与 Reply URL 的意思相同。为了将 Azure AD 与 Rancher 一起使用，你必须将 Rancher 列入 Azure 白名单（之前通过 Reply URL 完成）。因此，请确保使用你的 Rancher Server URL 填写 Redirect URI，以包含下面列出的验证路径。

      :::

   1. 在 [**Redirect URI**](https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url) 中，确保从下拉列表中选择 **Web**，并在旁边的文本框中输入 Rancher Server 的 URL。Rancher Server URL 后需要追加验证路径，例如 `<MY_RANCHER_URL>/verify-auth-azure`。

      :::tip

      你可以在 Azure AD 身份验证页面（全局视图 > Authentication > Web）中找到你 Rancher 中的个性化 Azure Redirect URI（Reply URL）。

      :::

   1. 单击 **Register**。

:::note

此更改可能需要五分钟才能生效。因此，如果在配置 Azure AD 之后无法立即进行身份验证，请不要惊慌。

:::

#### 2. 创建客户端密文

在 Azure 门户中，创建一个客户端密文。Rancher 将使用此密钥向 Azure AD 进行身份验证。

1. 使用搜索功能打开 **App registrations** 服务。然后打开你在上一个步骤中创建的 Rancher 项。

   ![Open Rancher Registration](/img/open-rancher-app-reg.png)

1. 在导航窗格中，单击 **Certificates & secrets**。

1. 单击 **New client secret**。
   ![创建新的客户端密文](/img/new-client-secret.png)
1. 输入 **Description**（例如 `Rancher`）。
1. 从 **Expires** 下的选项中选择持续时间。此下拉菜单设置的是密钥的到期日期。日期越短则越安全，但需要你更频繁地创建新密钥。
   请注意，如果检测到应用程序 Secret 已过期，用户将无法登录 Rancher。为避免此问题，请在 Azure 中轮换 Secret 并在过期前在 Rancher 中更新它。
1. 单击 **Add**（无需输入值，保存后会自动填充）。
   <a id="secret"></a>

1. 稍后你将在 Rancher UI 中输入此密钥作为你的 **Application Secret**。由于你将无法在 Azure UI 中再次访问键值，因此请在其余设置过程中保持打开此窗口。

#### 3. 设置 Rancher 所需的权限

接下来，在 Azure 中为 Rancher 设置 API 权限。

:::caution

确保你设置了 Application 权限，而*不是* Delegated 权限。否则，你将无法登录 Azure AD。

:::

1. 在导航窗格中，选择 **API permissions**。

1. 单击 **Add a permission**。

1. 从 Microsoft Graph API 中，选择以下 **Application Permissions**: `Directory.Read.All`。

   ![选择 API 权限](/img/api-permissions.png)

:::note

在 Rancher 2.6.7-2.6.10 版本中，你需要使用 `User.Read.All` 和 `Group.Read.All` 来获取权限。在 v2.6.11 中已更改为允许范围较小的权限（例如 `Directory.Read.All`）。

:::

1. 返回导航栏中的 **API permissions**。在那里，单击 **Grant admin consent**。然后单击 **Yes**。该应用程序的权限应如下所示：

![Open Required Permissions](/img/select-req-permissions.png)

:::note

Rancher 不会验证你授予 Azure 应用程序的权限。你可以自由使用任何你所需的权限，只要这些权限允许 Rancher 使用 AD 用户和组。

具体来说，Rancher 需要允许以下操作的权限：
- 获取一个用户。
- 列出所有用户。
- 列出给定用户所属的组。
- 获取一个组。
- 列出所有组。

Rancher 执行这些操作来登录用户或搜索用户/组。请记住，权限必须是 `Application` 类型。

下面是几个满足 Rancher 需求的权限组合示例：
- `Directory.Read.All`
- `User.Read.All` 和 `GroupMember.Read.All`
- `User.Read.All` 和 `Group.Read.All`

:::

#### 4. 复制 Azure 应用数据

![Application ID](/img/app-configuration.png)

1. 获取你的 Rancher **租户 ID**。

   1. 使用搜索打开 **App registrations**。

   1. 找到你为 Rancher 创建的项。

   1. 复制 **Directory ID** 并将其作为 **Tenant ID** 粘贴到 Rancher 中。

1. 获取你的 Rancher **Application (Client) ID**。

   1. 如果你还未在该位置，请使用搜索打开 **App registrations**。

   1. 在 **Overview**中，找到你为 Rancher 创建的条目。

   1. 复制 **Application (Client) ID** 并将其作为 **Application ID** 粘贴到 Rancher 中。

1. 你的端点选项通常是 [Standard](#global) 或 [China](#中国)。对于这两个选项，你只需要输入 **Tenant ID**、**Application ID** 和 **Application Secret**。

![标准端点选项](/img/tenant-application-id-secret.png)

**对于自定义端点**：

**警告**：Rancher 未测试也未完全支持自定义端点。

你还需要手动输入 Graph、Token 和 Auth Endpoints。

- 从 <b>App registrations</b> 中，点击 <b>Endpoints</b>：

![点击端点](/img/endpoints.png)

- 以下端点将是你的 Rancher 端点值。请使用这些端点的 v1 版本。
   - **Microsoft Graph API endpoint**（Graph 端点）
   - **OAuth 2.0 token endpoint (v1)**（Token 端点）
   - **OAuth 2.0 authorization endpoint (v1)** (Auth 端点)

#### 5. 在 Rancher 中配置 Azure AD

在 Rancher UI 中，输入托管在 Azure 中的 AD 实例的信息以完成配置。

1. 登录到 Rancher。

1. 在左上角，单击 **☰ > 用户 & 认证**。

1. 在左侧导航栏，单击**认证**。

1. 单击 **AzureAD**。

1. 使用你在[复制 Azure 应用数据](#4-复制-azure-应用数据)时复制的信息，填写**配置 Azure AD 账号**的表单。

   :::caution

   Azure AD 帐户将被授予管理员权限，因为其详细信息将映射到 Rancher 本地主体帐户。在继续之前确保此权限级别是适当的。

   :::

   **对于标准或中国端点：**

   下表介绍了你在 Azure 门户中复制的值与 Rancher 中字段的映射：

   | Rancher 字段 | Azure 值 |
   | ------------------ | ------------------------------------- |
   | 租户 ID | Directory ID |
   | Application ID | Application ID |
   | 应用密文 | Key Value |
   | 端点 | https://login.microsoftonline.com/ |

   **对于自定义端点**：

   下表介绍了你在 Azure 门户中复制的自定义配置值与 Rancher 中字段的映射：

   | Rancher 字段 | Azure 值 |
   | ------------------ | ------------------------------------- |
   | Graph 端点 | Microsoft Graph API Endpoint |
   | Token 端点 | OAuth 2.0 Token Endpoint |
   | Auth 端点 | OAuth 2.0 Authorization Endpoint |

   **重要提示**：在自定义配置中输入 Graph Endpoint 时，请从 URL 中删除 Tenant ID：

   <code>http<span>s://g</span>raph.microsoft.com<del>/abb5adde-bee8-4821-8b03-e63efdc7701c</del></code>

1. 点击**启用**。

**结果**：Azure Active Directory 身份验证已配置。


### 从 Azure AD Graph API 迁移到 Microsoft Graph API

由于 [Azure AD Graph API](https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview) 已弃用并计划于 2023 年 6 月停用，管理员应更新他们的 Azure AD 应用程序以在 Rancher 中使用 [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api)。
你需要在端点弃用之前完成操作。
如果在停用后 Rancher 仍配置为使用 Azure AD Graph API，用户可能无法使用 Azure AD 登录 Rancher。

#### 在 Rancher UI 中更新端点

:::caution

管理员需要在迁移下述端点之前创建一个 [Rancher 备份](../../../new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md)。

:::

1. [更新](#3-设置-rancher-所需的权限) Azure AD 应用程序注册的权限。这个步骤非常关键。

1. 登录到 Rancher。

1. 在 Rancher UI 主页中，记下屏幕顶部的横幅，该横幅建议用户更新 Azure AD 身份验证。单击提供的链接以执行此操作。

   ![Rancher UI 横幅](/img/rancher-ui-azure-update.png)

1. 要完成新的 Microsoft Graph API 迁移，请单击 **Update Endpoint**。

   **注意**：在开始更新之前，请确保你的 Azure 应用程序具有[新的权限集](#3-设置-rancher-所需的权限)。

   ![更新端点](/img/rancher-button-to-update.png)

1. 在收到弹出警告消息时，单击 **Update**：

   ![Azure 更新弹出窗口](/img/azure-update-popup.png)

1. 有关 Rancher 执行的完整端点更改，请参阅下面的[表格](#global)。管理员不需要手动执行此操作。

#### 离线环境

在离线环境中，由于 Graph Endpoint URL 正在更改，因此管理员需要确保其端点被[列入白名单](#3.2)。

#### 回滚迁移

如果你需要回滚迁移，请注意以下事项：

1. 如果管理员想要回滚，我们建议他们使用正确的恢复流程。有关参考信息，请参阅[备份文档](../../../new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md)、[恢复文档](../../../new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md)和[示例](../../../../reference-guides/backup-restore-configuration/examples.md)。

1. 如果 Azure 应用程序所有者想要轮换应用程序密钥，他们也需要在 Rancher 中进行轮换（因为在 Azure 中更改应用程序密钥时，Rancher 不会自动更新应用程序密钥）。在 Rancher 中，它存储在名为 `azureadconfig-applicationsecret` 的 Kubernetes 密文中，该密文位于 `cattle-global-data` 命名空间中。

:::caution

如果你使用现有的 Azure AD 设置升级到 Rancher v2.6.7+，并选择了禁用认证提供程序，你将无法恢复以前的设置。你也无法使用旧流程设置 Azure AD。你需要使用新的认证流程重新注册。由于 Rancher 现在使用 Graph API，因此用户需要[在 Azure 门户中设置适当的权限](#3-设置-rancher-所需的权限)。

:::

#### Global:

| Rancher 字段 | 已弃用的端点 |
---------------- | -------------------------------------------------------------
| Auth 端点 | https://login.microsoftonline.com/{tenantID}/oauth2/authorize |
| 端点 | https://login.microsoftonline.com/ |
| Graph 端点 | https://graph.windows.net/ |
| Token 端点 | https://login.microsoftonline.com/{tenantID}/oauth2/token |

| Rancher 字段 | 新端点 |
---------------- | ------------------------------------------------------------------
| Auth 端点 | https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/authorize |
| 端点 | https://login.microsoftonline.com/ |
| Graph 端点 | https://graph.microsoft.com |
| Token 端点 | https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/token |

#### 中国：

| Rancher 字段 | 已弃用的端点 |
---------------- | ----------------------------------------------------------
| Auth 端点 | https://login.chinacloudapi.cn/{tenantID}/oauth2/authorize |
| 端点 | https://login.chinacloudapi.cn/ |
| Graph 端点 | https://graph.chinacloudapi.cn/ |
| Token 端点 | https://login.chinacloudapi.cn/{tenantID}/oauth2/token |

| Rancher 字段 | 新端点 |
---------------- | -------------------------------------------------------------------------
| Auth 端点 | https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/authorize |
| 端点 | https://login.partner.microsoftonline.cn/ |
| Graph 端点 | https://microsoftgraph.chinacloudapi.cn |
| Token 端点 | https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/token |


</TabItem>
<TabItem value="Rancher v2.6.0 - v2.6.6">

## 已弃用的 Azure AD Graph API

> **重要提示**：
>
> - [Azure AD Graph API](https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview) 已被弃用，Microsoft 将在 2023 年 6 月 30 日后随时停用它且不会另行通知。我们将更新我们的文档，以便在停用时向社区提供建议。Rancher 现在使用 [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api) 来将 Azure AD 设置为外部身份验证提供程序。
>
>
> - 如果你是新用户或希望进行迁移，请参阅新的流程说明： <a href="#microsoft-graph-api/" target="_blank">Rancher v2.6.7+</a>。
>
>
> - 如果你不想在 Azure AD Graph API 停用后升级到 v2.6.7+，你需要：
>    - 使用内置的 Rancher 身份认证，或者
>    - 使用另一个第三方身份认证系统并在 Rancher 中进行设置。请参阅[身份验证文档](../../../../pages-for-subheaders/authentication-config.md)，了解如何配置其他开放式身份验证提供程序。

</TabItem>
</Tabs>
