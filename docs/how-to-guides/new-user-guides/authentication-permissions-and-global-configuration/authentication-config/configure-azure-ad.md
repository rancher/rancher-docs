---
title: Configure Azure AD
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad"/>
</head>

## Microsoft Graph API

Microsoft Graph API is now the flow through which you will set up Azure AD. The below sections will assist [new users](#new-user-setup) in configuring Azure AD with a new instance as well as assist existing Azure app owners in [migrating to the new flow](#migrating-from-azure-ad-graph-api-to-microsoft-graph-api).

The Microsoft Graph API flow in Rancher is constantly evolving. We recommend that you use the latest patched version of 2.7, as it is still in active development and will continue to receive new features and improvements.

### New User Setup

If you have an instance of Active Directory (AD) hosted in Azure, you can configure Rancher to allow your users to log in using their AD accounts. Configuration of Azure AD external authentication requires you to make configurations in both Azure and Rancher.

:::note Notes

- Azure AD integration only supports Service Provider initiated logins.
- Most of this procedure takes place from the [Microsoft Azure Portal](https://portal.azure.com/).

:::

#### Azure Active Directory Configuration Outline

Configuring Rancher to allow your users to authenticate with their Azure AD accounts involves multiple procedures. Review the outline below before getting started.

:::tip

Before you start, open two browser tabs: one for Rancher, and one for the Azure portal. This will help with copying and pasting configuration values from the portal to Rancher.

:::

#### 1. Register Rancher with Azure

Before enabling Azure AD within Rancher, you must register Rancher with Azure.

1. Log in to [Microsoft Azure](https://portal.azure.com/) as an administrative user. Configuration in future steps requires administrative access rights.

1. Use search to open the **App registrations** service.

1. Click **New registration** and complete the form.

    ![New App Registration](/img/new-app-registration.png)

    1. Enter a **Name** (something like `Rancher`).

    1. From **Supported account types**, select "Accounts in this organizational directory only (AzureADTest only - Single tenant)" This corresponds to the legacy app registration options.

        :::note

        In the updated Azure portal, Redirect URIs are synonymous with Reply URLs. In order to use Azure AD with Rancher, you must whitelist Rancher with Azure (previously done through Reply URLs). Therefore, you must ensure to fill in the Redirect URI with your Rancher server URL, to include the verification path as listed below.

        :::

    1. In the [**Redirect URI**](https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url) section, make sure **Web** is selected from the dropdown and enter the URL of your Rancher Server in the text box next to the dropdown. This Rancher server URL should be appended with the verification path: `<MY_RANCHER_URL>/verify-auth-azure`.

       :::tip

       You can find your personalized Azure Redirect URI (reply URL) in Rancher on the Azure AD Authentication page (Global View > Authentication > Web).

       :::

    1. Click **Register**.

:::note

It can take up to five minutes for this change to take affect, so don't be alarmed if you can't authenticate immediately after Azure AD configuration.

:::

#### 2. Create a new client secret

From the Azure portal, create a client secret. Rancher will use this key to authenticate with Azure AD.

1. Use search to open **App registrations** services. Then open the entry for Rancher that you created in the last procedure.

     ![Open Rancher Registration](/img/open-rancher-app-reg.png)

1. From the navigation pane, click **Certificates & secrets**.

1. Click **New client secret**.
    ![Create new client secret](/img/new-client-secret.png)
1. Enter a **Description** (something like `Rancher`).
1. Select the duration from the options under **Expires**. This drop-down menu sets the expiration date for the key. Shorter durations are more secure, but require you to create a new key more frequently.
Note that users won't be able to log in to Rancher if it detects that the application secret has expired. To avoid this problem, rotate the secret in Azure and update it in Rancher before it expires.
1. Click **Add** (you don't need to enter a value—it will automatically populate after you save).
<a id="secret"></a>

1. You'll enter this key into the Rancher UI later as your **Application Secret**. Since you won't be able to access the key value again within the Azure UI, keep this window open for the rest of the setup process.

#### 3. Set Required Permissions for Rancher

Next, set API permissions for Rancher within Azure.

:::caution

Ensure that you set Application permissions, and *not* Delegated permissions. Otherwise, you won't be able to login to Azure AD.

:::

1. From the navigation pane on, select **API permissions**.

1. Click **Add a permission**.

1. From the Microsoft Graph API, select the following **Application Permissions**: `Directory.Read.All`

    ![Select API Permissions](/img/api-permissions.png)

1. Return to **API permissions** in the nav bar. From there, click **Grant admin consent**. Then click **Yes**. The app's permissions should look like the following:

![Open Required Permissions](/img/select-req-permissions.png)

:::note

Rancher doesn't validate the permissions you grant to the app in Azure. You're free to try any permissions you want, as long as they allow Rancher to work with AD users and groups.

Specifically, Rancher needs permissions that allow the following actions:
- Get a user.
- List all users.
- List groups of which a given user is a member.
- Get a group.
- List all groups.

Rancher performs these actions either to log in a user or to run a user/group search. Keep in mind that the permissions must be of type `Application`.

Here are a few examples of permission combinations that satisfy Rancher's needs:
- `Directory.Read.All`
- `User.Read.All` and `GroupMember.Read.All`
- `User.Read.All` and `Group.Read.All`

:::

#### 4. Copy Azure Application Data

![Application ID](/img/app-configuration.png)

1. Obtain your Rancher **Tenant ID**.

    1. Use search to open **App registrations**.

    1. Find the entry you created for Rancher.

    1. Copy the **Directory ID** and paste it into Rancher as your **Tenant ID**.

1. Obtain your Rancher **Application (Client) ID**.

    1. If you aren't already there, use search to open **App registrations**.

    1. In **Overview**, find the entry you created for Rancher.

    1. Copy the **Application (Client) ID** and paste it into Rancher as your **Application ID**.

1. In most cases, your endpoint options will either be [Standard](#global) or [China](#china). For either of these options, you only need to enter the **Tenant ID**, **Application ID**, and **Application Secret**.

![Standard Endpoint Options](/img/tenant-application-id-secret.png)

**For Custom Endpoints:**

:::caution

Custom Endpoints are not tested or fully supported by Rancher.

:::

You'll also need to manually enter the Graph, Token, and Auth Endpoints.

- From <b>App registrations</b>, click <b>Endpoints</b>:

![Click Endpoints](/img/endpoints.png)

- The following endpoints will be your Rancher endpoint values. Make sure to use the v1 version of these endpoints:
  - **Microsoft Graph API endpoint** (Graph Endpoint)
  - **OAuth 2.0 token endpoint (v1)** (Token Endpoint)
  - **OAuth 2.0 authorization endpoint (v1)** (Auth Endpoint)

#### 5. Configure Azure AD in Rancher

To complete configuration, enter information about your AD instance in the Rancher UI.

1. Log into Rancher.

1. In the top left corner, click **☰ > Users & Authentication**.

1. In the left navigation menu, click **Auth Provider**.

1. Click **AzureAD**.

1. Complete the **Configure Azure AD Account** form using the information you copied while completing [Copy Azure Application Data](#4-copy-azure-application-data).

    :::caution

    The Azure AD account will be granted administrator privileges, since its details will be mapped to the Rancher local principal account. Make sure that this level of privilege is appropriate before you continue.

    :::

    **For Standard or China Endpoints:**

    The following table maps the values you copied in the Azure portal to the fields in Rancher:

    | Rancher Field      | Azure Value                           |
    | ------------------ | ------------------------------------- |
    | Tenant ID          | Directory ID                          |
    | Application ID     | Application ID                        |
    | Application Secret | Key Value                             |
    | Endpoint           | https://login.microsoftonline.com/    |

    **For Custom Endpoints:**

    The following table maps your custom config values to Rancher fields:

    | Rancher Field      | Azure Value                           |
    | ------------------ | ------------------------------------- |
    | Graph Endpoint     | Microsoft Graph API Endpoint          |
    | Token Endpoint     | OAuth 2.0 Token Endpoint              |
    | Auth Endpoint      | OAuth 2.0 Authorization Endpoint      |

    **Important:** When entering the Graph Endpoint in a custom config, remove the tenant ID from the URL:

    <code>http<span>s://g</span>raph.microsoft.com<del>/abb5adde-bee8-4821-8b03-e63efdc7701c</del></code>

1. Click **Enable**.

**Result:** Azure Active Directory authentication is configured.

#### (Optional) Configure Authentication with Multiple Rancher Domains

If you have multiple Rancher domains, you must manually edit the Azure AD configuration file, `azuread`. This allows you to adjust the redirect URI as needed for your domains. If you don't manually edit `azuread`, then upon a successful login attempt, all of your Rancher domains will automatically redirect to the same address — the **Redirect URI** value you entered when you registered the app in [Step 1. Register Rancher with Azure](#1-register-rancher-with-azure). For example, if you have two domains, _rancher.primary-site.io_ and _rancher.alt-site.io_, you must manually edit `azuread`; otherwise, upon a successful login to _rancher.alt-site.org_, users will be sent to the redirect URI originally intended for _rancher.primary-site.org_.

### Migrating from Azure AD Graph API to Microsoft Graph API

Since the [Azure AD Graph API](https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview) is deprecated and slated to retire in June 2023, admins should update their Azure AD App to use the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api) in Rancher.
This needs to be done well in advance of the endpoint being retired.
If Rancher is still configured to use the Azure AD Graph API when it is retired, users may not be able to log into Rancher using Azure AD.

#### Updating Endpoints in the Rancher UI

:::caution

Admins should create a [Rancher backup](../../../new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md) before they commit to the endpoint migration described below.

:::

1. [Update](#3-set-required-permissions-for-rancher) the permissions of your Azure AD app registration. This is critical.

1. Log into Rancher.

1. In the Rancher UI homepage, make note of the banner at the top of screen that advises users to update their Azure AD authentication. Click on the link provided to do so.

    ![Rancher UI Banner](/img/rancher-ui-azure-update.png)

1. To complete the move to the new Microsoft Graph API, click **Update Endpoint**.

    **Note:** Ensure that your Azure app has a [new set of permissions](#3-set-required-permissions-for-rancher) before starting the update.

    ![Update Endpoint](/img/rancher-button-to-update.png)

1. When you receive the pop-up warning message, click **Update**.

    ![Azure Update Pop-up](/img/azure-update-popup.png)

1. Refer to the [tables](#global) below for the full list of endpoint changes that Rancher performs. Admins do not need to do this manually.

#### Air-Gapped Environments

In air-gapped environments, admins should ensure that their endpoints are whitelisted (see note on [Step 3.2 of Register Rancher with Azure](#1-register-rancher-with-azure)) since the Graph Endpoint URL is changing.

#### Rolling Back the Migration

If you need to roll back your migration, please note the following:

1. Admins are encouraged to use the proper restore process if they want to go back. Please see [backup docs](../../../new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md), [restore docs](../../../new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md), and [examples](../../../../reference-guides/backup-restore-configuration/examples.md) for reference.

1. Azure app owners who want to rotate the Application Secret will need to also rotate it in Rancher as Rancher does not automatically update the Application Secret when it is changed in Azure. In Rancher, note that it is stored in a Kubernetes secret called `azureadconfig-applicationsecret` which is in the `cattle-global-data` namespace.

:::caution

If you upgrade to Rancher v2.7.0+ with an existing Azure AD setup, and choose to disable the auth provider, you won't be able to restore the previous setup. You also won't be able to set up Azure AD using the old flow. You'll need to re-register with the new auth flow. Since Rancher now uses the Graph API, users need set up the [proper permissions in the Azure portal](#3-set-required-permissions-for-rancher).

:::


#### Global:

Rancher Field    | Deprecated Endpoints
---------------- | -------------------------------------------------------------
Auth Endpoint    | https://login.microsoftonline.com/{tenantID}/oauth2/authorize
Endpoint         | https://login.microsoftonline.com/
Graph Endpoint   | https://graph.windows.net/
Token Endpoint   | https://login.microsoftonline.com/{tenantID}/oauth2/token

Rancher Field    | New Endpoints
---------------- | ------------------------------------------------------------------
Auth Endpoint    | https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/authorize
Endpoint         | https://login.microsoftonline.com/
Graph Endpoint   | https://graph.microsoft.com
Token Endpoint   | https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/token

#### China:

Rancher Field    | Deprecated Endpoints
---------------- | ----------------------------------------------------------
Auth Endpoint    | https://login.chinacloudapi.cn/{tenantID}/oauth2/authorize
Endpoint         | https://login.chinacloudapi.cn/
Graph Endpoint   | https://graph.chinacloudapi.cn/
Token Endpoint   | https://login.chinacloudapi.cn/{tenantID}/oauth2/token

Rancher Field    | New Endpoints
---------------- | -------------------------------------------------------------------------
Auth Endpoint    | https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/authorize
Endpoint         | https://login.partner.microsoftonline.cn/
Graph Endpoint   | https://microsoftgraph.chinacloudapi.cn
Token Endpoint   | https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/token


## Deprecated Azure AD Graph API

>**Important:**
>
>- The [Azure AD Graph API](https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview) is deprecated and will be retired by Microsoft at any time after June 30, 2023, without advance notice. We will update our docs to advise the community when it is retired. Rancher now uses the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/use-the-api) as the new flow to set up Azure AD as the external auth provider.
>
>
>- If you're a new user, or wish to migrate, refer to the new flow instructions for <a href="#microsoft-graph-api/" target="_blank">Rancher v2.7.0+</a>.
>
>
>- If you don't wish to upgrade to v2.7.0+ after the Azure AD Graph API is retired, you'll need to either:
    - Use the built-in Rancher auth or
    - Use another third-party auth system and set that up in Rancher. Please see the [authentication docs](authentication-config.md) to learn how to configure other open authentication providers.

