---
title: Configuring Authentication
weight: 10
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config"/>
</head>

One of the key features that Rancher adds to Kubernetes is centralized user authentication. This feature allows your users to use one set of credentials to authenticate with any of your Kubernetes clusters.

This centralized user authentication is accomplished using the Rancher authentication proxy, which is installed along with the rest of Rancher. This proxy authenticates your users and forwards their requests to your Kubernetes clusters using a service account.

:::warning

The account used to enable the external provider will be granted admin permissions. If you use a test account or non-admin account, that account will still be granted admin-level permissions. See [External Authentication Configuration and Principal Users](#external-authentication-configuration-and-principal-users) to understand why.

:::

## External vs. Local Authentication

The Rancher authentication proxy integrates with the following external authentication services.

| Auth Service                                                                                     |
| ------------------------------------------------------------------------------------------------ |
| [Microsoft Active Directory](configure-active-directory.md)  |
| [GitHub](configure-github.md)                  |
| [Microsoft Azure AD](configure-azure-ad.md)    |
| [FreeIPA](configure-freeipa.md)                |
| [OpenLDAP](../configure-openldap/configure-openldap.md)              |
| [Microsoft AD FS](../configure-microsoft-ad-federation-service-saml/configure-microsoft-ad-federation-service-saml.md) |
| [PingIdentity](configure-pingidentity.md)     |
| [Keycloak (OIDC)](configure-keycloak-oidc.md)  |
| [Keycloak (SAML)](configure-keycloak-saml.md)  |
| [Okta](configure-okta-saml.md)                      |
| [Google OAuth](configure-google-oauth.md)            |
| [Shibboleth](../configure-shibboleth-saml/configure-shibboleth-saml.md)           |

However, Rancher also provides [local authentication](create-local-users.md).

In most cases, you should use an external authentication service over local authentication, as external authentication allows user management from a central location. However, you may want a few local authentication users for managing Rancher under rare circumstances, such as if your external authentication provider is unavailable or undergoing maintenance.

## Users and Groups

:::note

- Local authentication does not support creating or managing groups.

- Once an external authentication provider is configured, note that local Rancher scoped administrative users only display resources such as users and groups that they are a member of in the respective authentication provider.

:::

Rancher relies on users and groups to determine who is allowed to log in to Rancher and which resources they can access. When authenticating with an external provider, groups are provided from the external provider based on the user. These users and groups are given specific roles to resources like clusters, projects, multi-cluster apps, and global DNS providers and entries. When you give access to a group, all users who are a member of that group in the authentication provider will be able to access the resource with the permissions that you've specified. For more information on roles and permissions, see [Role Based Access Control](../manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md).

For more information, see [Users and Groups](manage-users-and-groups.md)

## Scope of Rancher Authorization

After you configure Rancher to allow sign on using an external authentication service, you should configure who should be allowed to log in and use Rancher. The following options are available:

| Access Level | Description |
|----------------------------------------------|-------------|
| Allow any valid Users                   | _Any_ user in the authorization service can access Rancher. We generally discourage use of this setting! |
| Allow members of Clusters, Projects, plus Authorized Users and Organizations | Any user in the authorization service and any group added as a **Cluster Member** or **Project Member** can log in to Rancher. Additionally, any user in the authentication service or group you add to the **Authorized Users and Organizations** list may log in to Rancher. |
| Restrict access to only Authorized Users and Organizations | Only users in the authentication service or groups added to the Authorized Users and Organizations can log in to Rancher. |

:::warning 

Only trusted admin-level users should have access to the local cluster, which manages all of the other clusters in a Rancher instance. Rancher is directly installed on the local cluster, and Rancher's management features allow admins on the local cluster to provision, modify, connect to, and view details about downstream clusters. Since the local cluster is key to a Rancher instance's architecture, inappropriate access carries security risks.

:::

To set the Rancher access level for users in the authorization service, follow these steps:

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Auth Provider**.
1. After setting up the configuration details for an auth provider, use the **Site Access** options to configure the scope of user authorization. The table above explains the access level for each option.
1. Optional: If you choose an option other than **Allow any valid Users,** you can add users to the list of authorized users and organizations by searching for them in the text field that appears.
1. Click **Save**.

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

:::note Reconfiguring a previously set up auth provider

If you need to reconfigure or disable then re-enable a provider that had been previously set up, ensure that the user who attempts to do so
is logged in to Rancher as an external user, not the local admin.

:::

## Disabling An Auth Provider

When you disable an auth provider, Rancher deletes all resources associated with it, such as:
- Secrets
- Global role bindings
- Cluster role template bindings
- Project role template bindings
- External users associated with the provider, who never logged in as local users to Rancher

As this operation may lead to a loss of many resources, you may want to add a safeguard on the provider.
To ensure this cleanup process doesn't run when the auth provider is disabled, add a special annoation to the corresponding auth config.

For example, to add a safeguard to the Azure AD provider, annotate the `azuread` authconfig object:

`kubectl annotate --overwrite authconfig azuread management.cattle.io/auth-provider-cleanup='user-locked'`

Rancher won't perform cleanup until you set the annotation to `unlocked`.

### Running Resource Cleanup Manually

Rancher might retain resources from a previously disabled auth provider configuration in the local cluster, even after you configure another auth provider. For example, if you used Provider A, then disabled it and started using Provider B, when you upgrade to a new version of Rancher, you can manually trigger cleanup on resources configured by Provider A.

To manually trigger cleanup for a disabled auth provider, add the `management.cattle.io/auth-provider-cleanup` annotation with the `unlocked` value
to its auth config.
