---
title: Configure PingIdentity (SAML)
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity"/>
</head>

If your organization uses Ping Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials.

>**Prerequisites:**
>
>- You must have a [Ping IdP Server](https://www.pingidentity.com/) configured.
>- Following are the Rancher Service Provider URLs needed for configuration:
Metadata URL: `https://<rancher-server>/v1-saml/ping/saml/metadata`
Assertion Consumer Service (ACS) URL: `https://<rancher-server>/v1-saml/ping/saml/acs`
Note that these URLs will not return valid data until the authentication configuration is saved in Rancher.
>- Export a `metadata.xml` file from your IdP Server. For more information, see the [PingIdentity documentation](https://documentation.pingidentity.com/pingfederate/pf83/index.shtml#concept_exportingMetadata.html).

1.	In the top left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, click **Auth Provider**.
1. Click **Ping Identity**.
1.	Complete the **Configure a Ping Account** form. Ping IdP lets you specify what data store you want to use. You can either add a database or use an existing ldap server. For example, if you select your Active Directory (AD) server, the examples below describe how you can map AD attributes to fields within Rancher.

    1. **Display Name Field**: Enter the AD attribute that contains the display name of users (example: `displayName`).

    1. **User Name Field**: Enter the AD attribute that contains the user name/given name (example: `givenName`).

    1. **UID Field**: Enter an AD attribute that is unique to every user (example: `sAMAccountName`, `distinguishedName`).

    1. **Groups Field**: Make entries for managing group memberships (example: `memberOf`).

    1. **Entity ID Field** (optional): The published, protocol-dependent, unique identifier of your partner. This ID defines your organization as the entity operating the server for SAML 2.0 transactions. This ID may have been obtained out-of-band or via a SAML metadata file.

    1. **Rancher API Host**: Enter the URL for your Rancher Server.

    1. **Private Key** and **Certificate**: This is a key-certificate pair to create a secure shell between Rancher and your IdP.

        You can generate one using an openssl command. For example:

        ```
        openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"
        ```
    1. **IDP-metadata**: The `metadata.xml` file that you [exported from your IdP server](https://documentation.pingidentity.com/pingfederate/pf83/index.shtml#concept_exportingMetadata.html).


1. After you complete the **Configure Ping Account** form, click **Enable**.

    Rancher redirects you to the IdP login page. Enter credentials that authenticate with Ping IdP to validate your Rancher PingIdentity configuration.

    :::note

    You may have to disable your popup blocker to see the IdP login page.

    :::

**Result:** Rancher is configured to work with PingIdentity. Your users can now sign into Rancher using their PingIdentity logins.

:::note SAML Provider Caveats:

- SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher.
- When adding users, the exact user IDs (i.e. `UID Field`) must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match.
- When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user.
- The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.

:::

## Configuring SAML Single Logout (SLO)
