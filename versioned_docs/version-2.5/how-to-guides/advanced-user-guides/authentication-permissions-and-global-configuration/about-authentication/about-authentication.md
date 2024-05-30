---
title: Authentication
---

One of the key features that Rancher adds to Kubernetes is centralized user authentication. This feature allows your users to use one set of credentials to authenticate with any of your Kubernetes clusters.

This centralized user authentication is accomplished using the Rancher authentication proxy, which is installed along with the rest of Rancher. This proxy authenticates your users and forwards their requests to your Kubernetes clusters using a service account.

:::warning

The account used to enable the external provider will be granted admin permissions. If you use a test account or non-admin account, that account will still be granted admin-level permissions. See [External Authentication Configuration and Principal Users](#external-authentication-configuration-and-principal-users) to understand why.

:::

## External vs. Local Authentication

The Rancher authentication proxy integrates with the following external authentication services. The following table lists the first version of Rancher each service debuted.

| Auth Service                                                                                     |
| ------------------------------------------------------------------------------------------------ |
| [Microsoft Active Directory](authentication-config/configure-active-directory.md)  |
| [GitHub](authentication-config/configure-github.md)                  |
| [Microsoft Azure AD](authentication-config/configure-azure-ad.md)    |
| [FreeIPA](authentication-config/configure-freeipa.md)                |
| [OpenLDAP](../../../../reference-guides/configure-openldap/configure-openldap.md)              |
| [Microsoft AD FS](configure-microsoft-ad-federation-service-saml/configure-microsoft-ad-federation-service-saml.md) |
| [PingIdentity](authentication-config/configure-pingidentity.md)     |
| [Keycloak](authentication-config/configure-keycloak.md)              |
| [Okta](authentication-config/configure-okta-saml.md)                      |
| [Google OAuth](authentication-config/configure-google-oauth.md)            |
| [Shibboleth](configure-shibboleth-saml/configure-shibboleth-saml.md)           |

<br/>
However, Rancher also provides [local authentication](authentication-config/create-local-users.md).

In most cases, you should use an external authentication service over local authentication, as external authentication allows user management from a central location. However, you may want a few local authentication users for managing Rancher under rare circumstances, such as if your external authentication provider is unavailable or undergoing maintenance.

## Users and Groups

Rancher relies on users and groups to determine who is allowed to log in to Rancher and which resources they can access. When authenticating with an external provider, groups are provided from the external provider based on the user. These users and groups are given specific roles to resources like clusters, projects, multi-cluster apps, and global DNS providers and entries. When you give access to a group, all users who are a member of that group in the authentication provider will be able to access the resource with the permissions that you've specified. For more information on roles and permissions, see [Role Based Access Control](../manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md).

> **Note:** Local authentication does not support creating or managing groups.

For more information, see [Users and Groups](authentication-config/manage-users-and-groups.md)

## Scope of Rancher Authorization

After you configure Rancher to allow sign on using an external authentication service, you should configure who should be allowed to log in and use Rancher. The following options are available:

| Access Level | Description |
|----------------------------------------------|-------------|
| Allow any valid Users                   | _Any_ user in the authorization service can access Rancher. We generally discourage use of this setting! |
| Allow members of Clusters, Projects, plus Authorized Users and Organizations | Any user in the authorization service and any group added as a **Cluster Member** or **Project Member** can log in to Rancher. Additionally, any user in the authentication service or group you add to the **Authorized Users and Organizations** list may log in to Rancher. |
| Restrict access to only Authorized Users and Organizations | Only users in the authentication service or groups added to the Authorized Users and Organizations can log in to Rancher. |

To set the Rancher access level for users in the authorization service, follow these steps:

1. From the **Global** view, click **Security > Authentication.**

1. Use the **Site Access** options to configure the scope of user authorization. The table above explains the access level for each option.

1. Optional: If you choose an option other than **Allow any valid Users,** you can add users to the list of authorized users and organizations by searching for them in the text field that appears.

1. Click **Save.**

**Result:** The Rancher access configuration settings are applied.

:::note SAML Provider Caveats:

- SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher.
- When adding users, the exact user IDs (i.e. `UID Field`) must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match.
- When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user.
- The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.

:::

## External Authentication Configuration and Principal Users

Configuring external authentication requires:

- A local user assigned the administrator role, called hereafter the _local principal_.
- An external user that can authenticate with your external authentication service, called hereafter the _external principal_.

The configuration of external authentication also affects how principal users are managed within Rancher. Specifically, when a user account enables an external provider, it is granted admin-level permissions. This is because the local principal and external principal share the same user ID and access rights.

The following instructions demonstrate these effects:

1. Sign into Rancher as the local principal and complete configuration of external authentication.

    ![Sign In](/img/sign-in.png)

2. Rancher associates the external principal with the local principal. These two users share the local principal's user ID.

    ![Principal ID Sharing](/img/principal-ID.png)

3. After you complete configuration, Rancher automatically signs out the local principal.

    ![Sign Out Local Principal](/img/sign-out-local.png)

4. Then, Rancher automatically signs you back in as the external principal.

    ![Sign In External Principal](/img/sign-in-external.png)

5. Because the external principal and the local principal share an ID, no unique object for the external principal displays on the Users page.

    ![Sign In External Principal](/img/users-page.png)

6. The external principal and the local principal share the same access rights.
