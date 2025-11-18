---
title: Configure Generic OIDC
description: Create an OpenID Connect (OIDC) client and configure Rancher to work with your authentication provider. Your users can then sign into Rancher using their login from the authentication provider.
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-generic-oidc"/>
</head>

Generic OpenID Connect (OIDC) allows users to sign in to Rancher using their credentials from their existing account at an OIDC Identity Provider (IdP). Rancher supports integration with the OIDC protocol and the SAML protocol. Both implementations are functionally equivalent when used with Rancher. The following instructions describe how to create an OpenID Connect (OIDC) client and configure Rancher to work with your authentication provider or your own custom IdP. Users can then sign into Rancher using their login from the OIDC IdP.

## Prerequisites

In Rancher, Generic OIDC is disabled.

:::note

Consult the documentation for your specific IdP to complete the listed prerequisites.

:::

### Identity Provider

In your IdP, create a new client with the settings below:

  Setting | Value
  ------------|------------
  `Client ID` | <CLIENT_ID> (e.g. `rancher`)
  `Name` | <CLIENT_NAME> (e.g. `rancher`)
  `Client Protocol` | `openid-connect`
  `Access Type` | `confidential`
  `Valid Redirect URI` | `https://yourRancherHostURL/verify-auth`

### OIDC client

In the new OIDC client, create mappers to expose the user's fields.

  1. Create a new `Groups Mapper` with the settings below:

    Setting | Value
    ------------|------------
    `Name` | `Groups Mapper`
    `Mapper Type` | `Group Membership`
    `Token Claim Name` | `groups`
    `Add to ID token` | `OFF`
    `Add to access token` | `OFF`
    `Add to user info` | `ON`

  1. Create a new `Client Audience` with the settings below:

    Setting | Value
    ------------|------------
    `Name` | `Client Audience`
    `Mapper Type` | `Audience`
    `Included Client Audience` | `CLIENT_NAME`
    `Add to access token` | `ON`

  1. Create a new `Groups Path` with the settings below.

    Setting | Value
    ------------|------------
    `Name` | `Group Path`
    `Mapper Type` | `Group Membership`
    `Token Claim Name` | `full_group_path`
    `Full group path` | `ON`
    `Add to user info` | `ON`

:::warning

Rancher uses the value received in the "sub" claim to form the PrincipalID which is the unique identifier in Rancher.  It is important to make this a value that is unique and immutable.

:::

## Configuring Generic OIDC in Rancher

1. In the upper left corner of the Rancher UI, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Auth Provider**.
1. Select **Generic OIDC**.
1. Complete the **Configure an OIDC account** form. For help with filling the form, see the [configuration reference](#configuration-reference).
1. Click **Enable**.

   Rancher will redirect you to the IdP login page. Enter your IdP credentials to validate your Rancher Keycloak configuration.

   :::note

   You may need to disable your popup blocker to see the IdP login page.

   :::

**Result:** Rancher is configured to work with your provider using the OIDC protocol. Your users can now sign into Rancher using their IdP logins.

### Configuration Reference

| Field                     | Description                                                                                                                                        |
| ------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------|
| Client ID                 | The Client ID of your OIDC client.                                                                                                               |
| Client Secret             | The generated Secret of your OIDC client.                                                                                                        |
| Private Key/Certificate | A key/certificate pair to create a secure shell between Rancher and your IdP. Required if HTTPS/SSL is enabled on your OIDC server.                |
| Endpoints                 | Choose whether to use the generated values for the Rancher URL, Issue, and Auth Endpoint fields or to provide manual overrides if incorrect. |
| Rancher URL               | The URL for your Rancher Server.                                                                                                                   |
| Issuer                    | The URL of your IdP.  If your provider has discovery enabled, Rancher uses the Issuer URL to fetch all of the required URLs.                   |
| Auth Endpoint             | The URL where users are redirected to authenticate.                                                                                                |

### Custom Claim Mapping

Custom claim mapping within the Generic OIDC configuration is supported for `name`, `email` and `groups` claims. This allows you to manually map these OIDC claims when your IdP doesn't use standard names in tokens.

When on the **Configure an OIDC account** form:

1. Select **Add custom claims**.
1. Add your custom name, email or `groups` claims to the appropriate **Custom Claim** field.

  | Custom Claim Field | Default OIDC Claim | Custom Claim Description |
  | ------------- | ------------------ | ------------------------ |
  | Custom Name Claim | `name`           | The name of the claim in the OIDC token that contains the user's full name or display name. |
  | Custom Email Claim | `email` | The name of the claim in the OIDC token that contains the user's email address. |
  | Custom Groups Claim | `groups` | The name of the claim in the OIDC token that contains the user's group memberships (used for RBAC). |

For example, if your IdP sends `groups` in a claim called `custom_roles`, enter `custom_roles` into the **Custom Groups Claim** field. Rancher then looks for that specific claim when processing the user's token.

## Troubleshooting

If you are experiencing issues while testing the connection to the OIDC server, first double-check the configuration options of your OIDC client. You can also inspect the Rancher logs to help pinpoint what's causing issues. Debug logs may contain more detailed information about the error. Please refer to [How can I enable debug logging](../../../../faq/technical-items.md#how-can-i-enable-debug-logging) in this documentation.

All Generic OIDC related log entries are prepended with either `[generic oidc]` or `[oidc]`.

### You are not redirected to your authentication provider

If you fill out the **Configure a Generic OIDC account** form and click on **Enable**, and you are not redirected to your IdP, verify your OIDC client configuration.

### The generated `Issuer` and `Auth Endpoint` are incorrect

If the `Issuer` and `Auth Endpoint` are generated incorrectly, open the **Configure an OIDC account** form, change **Endpoints** to `Specify (advanced)` and override the `Issuer` value.

### Error: "Invalid grant_type"

In some cases, the "Invalid grant_type" error message may be misleading and is actually caused by setting the `Valid Redirect URI` incorrectly.
