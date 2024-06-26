---
title: Configure Okta (SAML)
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml"/>
</head>

If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials.

:::note

Okta integration only supports Service Provider initiated logins.

:::
## Prerequisites

In Okta, create a SAML Application with the settings below. See the [Okta documentation](https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta) for help.

Setting | Value
------------|------------
`Single Sign on URL` | `https://yourRancherHostURL/v1-saml/okta/saml/acs`
`Audience URI (SP Entity ID)` | `https://yourRancherHostURL/v1-saml/okta/saml/metadata`

## Configuring Okta in Rancher

You can integrate Okta with Rancher, so that authenticated users can access Rancher resources through their group permissions. Okta returns a SAML assertion that authenticates a user, including which groups a user belongs to.

1. In the top left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, click **Auth Provider**.
1. Click **Okta**.
1. Complete the **Configure Okta Account** form. The examples below describe how you can map Okta attributes from attribute statements to fields within Rancher.

    | Field                     | Description                                                                   |
    | ------------------------- | ----------------------------------------------------------------------------- |
    | Display Name Field        | The attribute name from an attribute statement that contains the display name of users.                        |
    | User Name Field           | The attribute name from an attribute statement that contains the user name/given name.                         |
    | UID Field                 | The attribute name from an attribute statement that is unique to every user.                                    |
    | Groups Field              | The attribute name in a group attribute statement that exposes your groups.        |
    | Rancher API Host          | The URL for your Rancher Server.                                              |
    | Private Key / Certificate | A key/certificate pair used for Assertion Encryption.                         |
    | Metadata XML              | The `Identity Provider metadata` file that you find in the application `Sign On` section.  |

    :::tip

    You can generate a key/certificate pair using an openssl command. For example:

    ```
    openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt
    ```

    :::

1. After you complete the **Configure Okta Account** form, click **Enable**.

    Rancher redirects you to the IdP login page. Enter credentials that authenticate with Okta IdP to validate your Rancher Okta configuration.

    :::note

    If nothing seems to happen, it's likely because your browser blocked the pop-up. Make sure you disable the pop-up blocker for your rancher domain and whitelist it in any other extensions you might utilize.

    :::

**Result:** Rancher is configured to work with Okta. Your users can now sign into Rancher using their Okta logins.

:::note SAML Provider Caveats:

If you configure Okta without OpenLDAP, you won't be able to search for or directly lookup users or groups. This brings several caveats:

- Users and groups aren't validated when you assign permissions to them in Rancher.
- When adding users, the exact user IDs (i.e. `UID Field`) must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match.
- When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user.
- The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.

:::

## Okta with OpenLDAP search

You can add an OpenLDAP backend to assist with user and group search. Rancher will display additional users and groups from the OpenLDAP service. This allows assigning permissions to groups that the logged-in user is not already a member of.

### OpenLDAP Prerequisites

If you use Okta as your IdP, you can [set up an LDAP interface](https://help.okta.com/en-us/Content/Topics/Directory/LDAP-interface-main.htm) for Rancher to use. You can also configure an external OpenLDAP server.

You must configure Rancher with a LDAP bind account (aka service account) so that you can search and retrieve LDAP entries for users and groups that should have access. Don't use an administrator account or personal account as an LDAP bind account. [Create](https://help.okta.com/en-us/Content/Topics/users-groups-profiles/usgp-add-users.htm) a dedicated account in OpenLDAP, with read-only access to users and groups under the configured searchbase.

:::warning Security Considerations

The OpenLDAP service account is used for all searches. Rancher users will see users and groups that the OpenLDAP service account can view, regardless of their individual SAML permissions.

:::


> **Using TLS?**
>
> If the certificate used by the OpenLDAP server is self-signed or from an unrecognized certificate authority, Rancher needs the CA certificate (concatenated with any intermediate certificates) in PEM format. Provide this certificate during the configuration so that Rancher can validate the certificate chain.

### Configure OpenLDAP in Rancher

[Configure the settings](../configure-openldap/openldap-config-reference.md) for the OpenLDAP server, groups and users. Note that nested group membership isn't available.

> Before you proceed with the configuration, please familiarise yourself with [external authentication configuration and principal users](authentication-config.md#external-authentication-configuration-and-principal-users).

1. Sign into Rancher using a local user assigned the [administrator](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions) role (i.e., the _local principal_).
1. In the top left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, click **Auth Provider**.
1. Click **Okta** or, if SAML is already configured, **Edit Config**
1. Under **User and Group Search**, check **Configure an OpenLDAP server**

If you experience issues when you test the connection to the OpenLDAP server, ensure that you entered the credentials for the service account and configured the search base correctly. Inspecting the Rancher logs can help pinpoint the root cause. Debug logs may contain more detailed information about the error. Please refer to [How can I enable debug logging](../../../../faq/technical-items.md#how-can-i-enable-debug-logging) for more information.

## Configuring SAML Single Logout (SLO)

1. Sign into Rancher using a local user assigned the [administrator](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions) role (i.e., the _local principal_).
1. In the top left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, click **Auth Provider**.
1. Under the section **Configure Single Logout (SLO)**, choose the appropriate SLO setting as described below:

    | Setting                   | Description                                                                   |
    | ------------------------- | ----------------------------------------------------------------------------- |
    | Only log out of Rancher | Choosing this option will only logout the Rancher application and not external authentication providers. |
    | Log out of Okta (including Rancher and all other application registered with the provider) | Choosing this option will logout Rancher and external authentication providers along with any registered application linked to the provider. |
    | Allow the user to choose in an extra step | Choosing this option presents users with a choice of logout method as described above. |
