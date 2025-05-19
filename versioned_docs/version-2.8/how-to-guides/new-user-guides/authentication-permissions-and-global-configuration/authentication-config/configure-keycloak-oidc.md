---
title: Configure Keycloak (OIDC)
description: Create a Keycloak OpenID Connect (OIDC) client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc"/>
</head>

If your organization uses [Keycloak Identity Provider (IdP)](https://www.keycloak.org) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials. Rancher supports integration with Keycloak using the OpenID Connect (OIDC) protocol and the SAML protocol. Both implementations are functionally equivalent when used with Rancher. This page describes the process to configure Rancher to work with Keycloak using the OIDC protocol.

If you prefer to use Keycloak with the SAML protocol instead, refer to [this page](configure-keycloak-saml.md).

If you have an existing configuration using the SAML protocol and want to switch to the OIDC protocol, refer to [this section](#migrating-from-saml-to-oidc).

## Prerequisites

- On Rancher, Keycloak (SAML) is disabled.
- You must have a [Keycloak IdP Server](https://www.keycloak.org/guides#getting-started) configured.
- Follow the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/#proc-creating-oidc-client_server_administration_guide) to create a new OIDC client with the settings below.

    | Setting | Value |
    | ------------|------------|
    | `Client ID` | &lt;client-id> (e.g. `rancher`) |
    | `Name` | &lt;client-name> (e.g. `rancher`) |
    | `Client type` | `OpenID Connect` |
    | `Client authentication` | `ON` |
    | `Valid Redirect URI` | `https://yourRancherHostURL/verify-auth` |

- In the new OIDC client, create [Mappers](https://www.keycloak.org/docs/latest/server_admin/#_protocol-mappers) to expose the users fields.
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

## Configuring Keycloak in Rancher

1. In the Rancher UI, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Auth Provider**.
1. Select **Keycloak (OIDC)**.
1. Complete the **Configure a Keycloak OIDC account** form. For help with filling the form, see the [configuration reference](#configuration-reference).

    :::note

    When configuring the **Endpoints** section using the **Generate** option, Rancher includes `/auth` as part of the context path in the **Issuer** and **Auth Endpoint** fields, which is only valid for Keycloak 16 or older. You must configure endpoints using the **Specify** option for [Keycloak 17](https://www.keycloak.org/docs/latest/release_notes/index.html#keycloak-17-0-0) and newer, which have [migrated to Quarkus](https://www.keycloak.org/migration/migrating-to-quarkus).  

    :::

1. After you complete the **Configure a Keycloak OIDC account** form, click **Enable**.

    Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration.

    :::note

    You may need to disable your popup blocker to see the IdP login page.

    :::

**Result:** Rancher is configured to work with Keycloak using the OIDC protocol. Your users can now sign in to Rancher using their Keycloak logins.

## Configuration Reference

| Field                     | Description                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client ID                 | The `Client ID` of your Keycloak client.                                                                                                                 |
| Client Secret             | The generated `Secret` of your Keycloak client. In the Keycloak console, select **Clients**, select the client you created, select the **Credentials** tab and copy the value of the `Secret` field. |
| Private Key / Certificate | A key/certificate pair to create a secure shell between Rancher and your IdP. Required if HTTPS/SSL is enabled on your Keycloak server.                  |
| Endpoints                 | Choose whether to use the generated values for the `Rancher URL`, `Issue`, and `Auth Endpoint` fields or to provide manual overrides if incorrect.       |
| Keycloak URL              | The URL for your Keycloak server.                                                                                                                        |
| Keycloak Realm            | The name of the realm in which the Keycloak client was created in.                                                                                       |
| Rancher URL               | The URL for your Rancher Server.                                                                                                                         |
| Issuer                    | The URL of your IdP. |
| Auth Endpoint             | The URL where users are redirected to authenticate. |

## Migrating from SAML to OIDC

This section describes the process to transition from using Rancher with Keycloak (SAML) to Keycloak (OIDC).

1. Reconfigure Keycloak.
    1. Configure a new `OpenID Connect` client according to the [Prerequisites](#prerequisites). Ensure the same `Valid Redirect URIs` are set.
    1. Configure mappers for the new client according to the [Prerequisites](#prerequisites).
1. Before configuring Rancher to use Keycloak (OIDC), Keycloak (SAML) must be first disabled.
    1. In the Rancher UI, click **☰ > Users & Authentication**.
    1. In the left navigation bar, click **Auth Provider**.
    1. Select **Keycloak (SAML)**.
    1. Click **Disable**.
1. Follow the steps in [Configuring Keycloak in Rancher](#configuring-keycloak-in-rancher).

:::caution

After configuration is completed, Rancher user permissions need to be reapplied as they are not automatically migrated.

:::

## Annex: Troubleshooting

If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration options of your OIDC client. You may also inspect the Rancher logs to help pinpoint what's causing issues. Debug logs may contain more detailed information about the error. Please refer to [How can I enable debug logging](../../../../faq/technical-items.md#how-can-i-enable-debug-logging) in this documentation.

All Keycloak related log entries are prepended with either `[generic oidc]` or `[keycloak oidc]`.

### You are not redirected to Keycloak

When you fill the **Configure a Keycloak OIDC account** form and click **Enable**, you are not redirected to your IdP.

Verify your Keycloak client configuration.

### The generated `Issuer` and `Auth Endpoint` are incorrect

On the **Configure a Keycloak OIDC account** form, change **Endpoints** to `Specify (advanced)` and override the `Issuer` and `Auth Endpoint` values. To find the values, go to the Keycloak console and select **Realm Settings**, select the **General** tab, and click **OpenID Endpoint Configuration**. The JSON output displays values for `issuer` and `authorization_endpoint`.

### Keycloak Error: "Invalid grant_type"

In some cases, this error message may be misleading and is caused by setting the `Valid Redirect URI` incorrectly.
