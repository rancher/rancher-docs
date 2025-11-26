---
title: Global Permissions
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"/>
</head>

<PermissionsWarning />

_Permissions_ are individual access rights that you can assign when selecting a custom permission for a user.

Global Permissions define user authorization outside the scope of any particular cluster. Out-of-the-box, there are four default global permissions: `Administrator`, `Standard User` and `User-base`.

- **Administrator:** These users have full control over the entire Rancher system and all clusters within it.

- **Standard User:** These users can create new clusters and use them. Standard users can also assign other users permissions to their clusters.

- **User-Base:** User-Base users have login-access only.

You cannot update or delete the built-in Global Permissions.

## Global Permission Assignment

Global permissions for local users are assigned differently than users who log in to Rancher using external authentication.

### Global Permissions for New Local Users

When you create a new local user, you assign them a global permission as you complete the **Add User** form.

To see the default permissions for new users,

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Role Templates**.
1. The **Role Templates** page has tabs for roles grouped by scope. Each table lists the roles in that scope. In the **Global** tab, in the **New User Default** column, the permissions given to new users by default are indicated with a checkmark.

You can [change the default global permissions to meet your needs.](#configuring-default-global-permissions)

### Global Permissions for Users with External Authentication

When a user logs into Rancher using an external authentication provider for the first time, they are automatically assigned the  **New User Default** global permissions. By default, Rancher assigns the **Standard User** permission for new users.

To see the default permissions for new users,

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Role Templates**.
1. The **Role Templates** page has tabs for roles grouped by scope. Each table lists the roles in that scope. In the **New User Default** column on each page, the permissions given to new users by default are indicated with a checkmark.

You can [change the default permissions to meet your needs.](#configuring-default-global-permissions)

Permissions can be [assigned](#configuring-global-permissions-for-individual-users) to an individual user.

You can [assign a role to everyone in the group at the same time](#configuring-global-permissions-for-groups) if the external authentication provider supports groups.

## Custom Global Permissions

Using custom permissions is convenient for providing users with narrow or specialized access to Rancher.

When a user from an [external authentication source](../authentication-config/authentication-config.md) signs into Rancher for the first time, they're automatically assigned a set of global permissions (hereafter, permissions). By default, after a user logs in for the first time, they are created as a user and assigned the default `user` permission. The standard `user` permission allows users to login and create clusters.

However, in some organizations, these permissions may extend too much access. Rather than assigning users the default global permissions of `Administrator` or `Standard User`, you can assign them a more restrictive set of custom global permissions.

The default roles, Administrator and Standard User, each come with multiple global permissions built into them. The Administrator role includes all global permissions, while the default user role includes three global permissions: Create Clusters, Use Catalog Templates, and User Base, which is equivalent to the minimum permission to log in to Rancher. In other words, the custom global permissions are modularized so that if you want to change the default user role permissions, you can choose which subset of global permissions are included in the new default user role.

Administrators can enforce custom global permissions in multiple ways:

- [Creating custom global roles](#custom-globalroles).
- [Changing the default permissions for new users](#configuring-default-global-permissions).
- [Configuring global permissions for individual users](#configuring-global-permissions-for-individual-users).
- [Configuring global permissions for groups](#configuring-global-permissions-for-groups).

### Combining Built-in GlobalRoles

Rancher provides several GlobalRoles which grant granular permissions for certain common use cases.
The following table lists each built-in global permission and whether it is included in the default global permissions, `Administrator`, `Standard User` and `User-Base`.

| Custom Global Permission           | Administrator | Standard User | User-Base |
| ---------------------------------- | ------------- | ------------- |-----------|
| Create Clusters                    | ✓             | ✓             |           |
| Create RKE Templates               | ✓             | ✓             |           |
| Manage Authentication              | ✓             |               |           |
| Manage Catalogs                    | ✓             |               |           |
| Manage Cluster Drivers             | ✓             |               |           |
| Manage Node Drivers                | ✓             |               |           |
| Manage PodSecurityPolicy Templates | ✓             |               |           |
| Manage Roles                       | ✓             |               |           |
| Manage Settings                    | ✓             |               |           |
| Manage Users                       | ✓             |               |           |
| Use Catalog Templates              | ✓             | ✓             |           |
| User-Base (Basic log-in access)  | ✓             | ✓             |           |

For details on which Kubernetes resources correspond to each global permission,

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Role Templates**.
1.  If you click the name of an individual role, a table shows all of the operations and resources that are permitted by the role.

:::note Notes:

- Each permission listed above is comprised of multiple individual permissions not listed in the Rancher UI. For a full list of these permissions and the rules they are comprised of, access through the API at `/v3/globalRoles`.
- When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have `(Custom)` appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.

:::

:::danger

The built-in GlobalRole `Manage Users` allows users to create, modify and delete other users within the Rancher environment. While this permission may be necessary for administrative workflows in trusted environments, granting it to non-trusted or lower-privileged users, such as standard users, poses a serious security risk and may result in privilege escalation.

:::

### Custom GlobalRoles

You can create custom GlobalRoles to satisfy use cases not directly addressed by built-in GlobalRoles. 

Create custom GlobalRoles through the UI or through automation (such as the Rancher Kubernetes API). You can specify the same type of rules as the rules for upstream roles and clusterRoles. 

#### Escalate and Bind verbs

When giving permissions on GlobalRoles, keep in mind that Rancher respects the `escalate` and `bind` verbs, in a similar fashion to [Kubernetes](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#restrictions-on-role-creation-or-update).

Both of these verbs, which are given on the GlobalRoles resource, can grant users the permission to bypass Rancher's privilege escalation checks. This potentially allows users to become admins. Since this represents a serious security risk, `bind` and `escalate` should be distributed to users with great caution. 

The `escalate` verb allows users to change a GlobalRole and add any permission, even if the users doesn't have the permissions in the current GlobalRole or the new version of the GlobalRole. 

The `bind` verb allows users to create a GlobalRoleBinding to the specified GlobalRole, even if they do not have the permissions in the GlobalRole. 

:::danger

The wildcard verb `*` also includes the `bind` and `escalate` verbs. This means that giving `*` on GlobalRoles to a user also gives them both `escalate` and `bind`.

:::

##### Custom GlobalRole Examples

To grant permission to escalate only the `test-gr` GlobalRole:

```yaml
rules:
- apiGroups:
  - 'management.cattle.io'
  resources:
  - 'globalroles'
  resourceNames:
  - 'test-gr'
  verbs:
  - 'escalate'
```

To grant permission to escalate all GlobalRoles:

```yaml
rules:
- apiGroups:
  - 'management.cattle.io'
  resources:
  - 'globalroles'
  verbs:
  - 'escalate'
```

To grant permission to create bindings (which bypass escalation checks) to only the `test-gr` GlobalRole:

```yaml
rules:
- apiGroups:
  - 'management.cattle.io'
  resources:
  - 'globalroles'
  resourceNames:
  - 'test-gr'
  verbs:
  - 'bind'
- apiGroups:
  - 'management.cattle.io'
  resources:
  - 'globalrolebindings'
  verbs:
  - 'create'
```

Granting `*` permissions (which includes both `escalate` and `bind`):

```yaml
rules:
- apiGroups:
  - 'management.cattle.io'
  resources:
  - 'globalroles'
  verbs:
  - '*'
```

#### GlobalRole Permissions on Downstream Clusters

GlobalRoles can grant one or more RoleTemplates on every downstream cluster through the `inheritedClusterRoles` field. Values in this field must refer to a RoleTemplate which exists and has a `context` of Cluster.

With this field, users gain the specified permissions on all current or future downstream clusters. For example, consider the following GlobalRole:

```yaml
apiVersion: management.cattle.io/v3
kind: GlobalRole
displayName: All Downstream Owner 
metadata:
  name: all-downstream-owner
inheritedClusterRoles:
- cluster-owner
```

Any user with this permission will be a cluster-owner on all downstream clusters. If a new cluster is added, regardless of type, the user will be an owner on that cluster as well.

:::danger

Using this field on [default GlobalRoles](#configuring-default-global-permissions) may result in users gaining excessive permissions.

:::

### Configuring Default Global Permissions

If you want to restrict the default permissions for new users, you can remove the `user` permission as default role and then assign multiple individual permissions as default instead. Conversely, you can also add administrative permissions on top of a set of other standard permissions.

:::note

Default roles are only assigned to users added from an external authentication provider. For local users, you must explicitly assign global permissions when adding a user to Rancher. You can customize these global permissions when adding the user.

:::

To change the default global permissions that are assigned to external users upon their first log in, follow these steps:

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Role Templates**. On the **Role Templates** page, make sure the **Global** tab is selected.
1. Find the permissions set that you want to add or remove as a default. Then edit the permission by selecting **⋮ > Edit Config**.
1. If you want to add the permission as a default, Select **Yes: Default role for new users** and then click **Save**. If you want to remove a default permission, edit the permission and select **No**.

**Result:** The default global permissions are configured based on your changes. Permissions assigned to new users display a check in the **New User Default** column.

### Configuring Global Permissions for Individual Users

To configure permission for a user,

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Users**.
1. Go to the user whose access level you want to change and click **⋮ > Edit Config**.
1. In the **Global Permissions** and **Built-in** sections, check the boxes for each permission you want the user to have. If you have created roles from the **Role Templates** page, they will appear in the **Custom** section and you can choose from them as well.
1. Click **Save**.

**Result:** The user's global permissions have been updated.

### Configuring Global Permissions for Groups

If you have a group of individuals that need the same level of access in Rancher, it can save time to assign permissions to the entire group at once, so that the users in the group have the appropriate level of access the first time they sign into Rancher.

After you assign a custom global role to a group, the custom global role will be assigned to a user in the group when they log in to Rancher.

For existing users, the new permissions will take effect when the users log out of Rancher and back in again, or when an administrator [refreshes the group memberships.](#refreshing-group-memberships)

For new users, the new permissions take effect when the users log in to Rancher for the first time. New users from this group will receive the permissions from the custom global role in addition to the **New User Default** global permissions. By default, the **New User Default** permissions are equivalent to the **Standard User** global role, but the default permissions can be [configured.](#configuring-default-global-permissions)

If a user is removed from the external authentication provider group, they would lose their permissions from the custom global role that was assigned to the group. They would continue to have any remaining roles that were assigned to them, which would typically include the roles marked as **New User Default**. Rancher will remove the permissions that are associated with the group when the user logs out, or when an administrator [refreshes group memberships,](#refreshing-group-memberships) whichever comes first.

:::note Prerequisites:

You can only assign a global role to a group if:

* You have set up an [external authentication provider](../authentication-config/authentication-config.md#external-vs-local-authentication)
* The external authentication provider supports [user groups](../authentication-config/manage-users-and-groups.md)
* You have already set up at least one user group with the authentication provider

:::

To assign a custom global role to a group, follow these steps:

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Groups**.
1. Go to the group you want to assign a custom global role to and click **⋮ > Edit Config**.
1. In the **Global Permissions,** **Custom,** and/or **Built-in** sections, select the permissions that the group should have.
1. Click **Create**.

**Result:** The custom global role will take effect when the users in the group log into Rancher.

### Refreshing Group Memberships

When an administrator updates the global permissions for a group, the changes take effect for individual group members after they log out of Rancher and log in again.

To make the changes take effect immediately, an administrator or cluster owner can refresh group memberships.

An administrator might also want to refresh group memberships if a user is removed from a group in the external authentication service. In that case, the refresh makes Rancher aware that the user was removed from the group.

To refresh group memberships,

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Users**.
1. Click **Refresh Group Memberships**.

**Result:** Any changes to the group members' permissions will take effect.
