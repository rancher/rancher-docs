---
title: Configure Generic OIDC
description: Create an OpenID Connect (OIDC) client and configure Rancher to work with your authentication provider. Your users can then sign into Rancher using their login from the authentication provider.
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-generic-oidc"/>
</head>

If your organization uses an OIDC provider for user authentication, you can configure Rancher to allow login using Identity Provider (IdP) credentials. Rancher supports integration with the OpenID Connect (OIDC) protocol and the SAML protocol. Both implementations are functionally equivalent when used with Rancher. The following instructions describe how to configure Rancher to work using the OIDC protocol.

## Prerequisites

:::note 
Consult the documentation for your specific IdP to complete the listed prerequisites.
:::

- In Rancher:
    - Generic OIDC is disabled.
- In your IdP:
      - Create a new client with the settings below:

     Setting | Value
     ------------|------------
     `Client ID` | &lt;CLIENT_ID> (e.g. `rancher`)
     `Name` | &lt;CLIENT_NAME> (e.g. `rancher`)
     `Client Protocol` | `openid-connect`
     `Access Type` | `confidential`
     `Valid Redirect URI` | `https://yourRancherHostURL/verify-auth`

    - In the new OIDC client, create mappers to expose the users fields.
      - Create a new Groups Mapper with the settings below:

    Setting | Value
    ------------|------------
    `Name` | `Groups Mapper`
    `Mapper Type` | `Group Membership`
    `Token Claim Name` | `groups`
    `Add to ID token` | `OFF`
    `Add to access token` | `OFF`
    `Add to user info` | `ON`

      - Create a new Client Audience with the settings below:

    Setting | Value
    ------------|------------
    `Name` | `Client Audience`
    `Mapper Type` | `Audience`
    `Included Client Audience` | &lt;CLIENT_NAME>
    `Add to access token` | `ON`

  - Create a new "Groups Path" with the settings below.

    Setting | Value
    ------------|------------
    `Name` | `Group Path`
    `Mapper Type` | `Group Membership`
    `Token Claim Name` | `full_group_path`
    `Full group path` | `ON`
    `Add to user info` | `ON`

 - Important:  Rancher will use the value received in the "sub" claim to form the PrincipalID which is the unique identifier in Rancher.  It is important to make this a value that will be unique and immutable.

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

**Result:** Rancher is configured to work with your provider using the OIDC protocol. Your users can now sign into Rancher using their logins.

## Configuration Reference

| Field                     | Description                                                                                                                                        |
| ------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------|
| Client ID                 | The `Client ID` of your OIDC client.                                                                                                               |
| Client Secret             | The generated `Secret` of your OIDC client.                                                                                                        |
| Private Key / Certificate | A key/certificate pair to create a secure shell between Rancher and your IdP. Required if HTTPS/SSL is enabled on your OIDC server.                |
| Endpoints                 | Choose whether to use the generated values for the `Rancher URL`, `Issue`, and `Auth Endpoint` fields or to provide manual overrides if incorrect. |
| Rancher URL               | The URL for your Rancher Server.                                                                                                                   |
| Issuer                    | The URL of your IdP.  If your provider has discovery enabled, Rancher will use the Issuer URL to fetch all of the required URLs.                   |
| Auth Endpoint             | The URL where users are redirected to authenticate.                                                                                                |

:::

## Annex: Troubleshooting

If you are experiencing issues while testing the connection to the OIDC server, first double-check the configuration options of your OIDC client. You may also inspect the Rancher logs to help pinpoint what's causing issues. Debug logs may contain more detailed information about the error. Please refer to [How can I enable debug logging](../../../../faq/technical-items.md#how-can-i-enable-debug-logging) in this documentation.

All Generic OIDC related log entries will be prepended with either `[generic oidc]` or `[oidc]`.

### You are not redirected to your authentication provider

When you fill the **Configure a Generic OIDC account** form and click on **Enable**, you are not redirected to your IdP.

* Verify your OIDC client configuration.

### The generated `Issuer` and `Auth Endpoint` are incorrect

* On the **Configure an OIDC account** form, change **Endpoints** to `Specify (advanced)` and override the `Issuer` value.

### Error: "Invalid grant_type"

* In some cases, this error message may be misleading and is actually caused by setting the `Valid Redirect URI` incorrectly.
