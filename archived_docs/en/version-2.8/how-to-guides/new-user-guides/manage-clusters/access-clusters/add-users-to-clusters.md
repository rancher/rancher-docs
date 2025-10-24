---
title: Adding Users to Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters"/>
</head>

To provide a user access to view certain cluster-level resources and create new projects, assign the user a **Cluster Membership**. Cluster members can create projects and manage resources in those projects. However, not all resources, namespaces and workloads in a cluster are accessible by cluster members.

:::tip

Want to provide a user with access to a _specific_ project within a cluster? See [Adding Project Members](../../../new-user-guides/add-users-to-projects.md) instead.

:::

There are two contexts where you can add cluster members:

- Adding Members to a New Cluster

    You can add members to a cluster as you create it (recommended if possible).

- [Adding Members to an Existing Cluster](#editing-cluster-membership)

    You can always add members to a cluster after a cluster is provisioned.

## Editing Cluster Membership

Cluster administrators can edit the membership for a cluster, controlling which Rancher users can access the cluster and what features they can use.

1. Click **☰ > Cluster Management**.
1. Go to the cluster you want to add members to and click **⋮ > Edit Config**.
1. In the **Member Roles** tab, click **Add Member**.
1. Search for the user or group that you want to add to the cluster.

    :::note Notes:

    - At least 2 characters must be typed in the search box for results to appear.
    - Users can be searched based on their username or display name.
    - Search is prefix-based (e.g., a user named `Stan Dard` will appear when searching for `Sta`, but not when searching for `Dar`) and case-sensitive.

    :::

    If external authentication is configured:

    - Rancher returns users from your [external authentication](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md) source as you type.

		:::note Using AD but can't find your users?

		There may be an issue with your search attribute configuration. See [Configuring Active Directory Authentication: Step 5](../../../new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory.md).

		:::

    - A drop-down allows you to add groups instead of individual users. The drop-down only lists groups that you, the logged in user, are part of.

		:::note

		If you are logged in as a local user, external users do not display in your search results. For more information, see [External Authentication Configuration and Principal Users](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md#external-authentication-configuration-and-principal-users).

		:::

1. Assign the user or group **Cluster** roles.

    [What are Cluster Roles?](../../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)

    :::tip

    For Custom Roles, you can modify the list of individual roles available for assignment.

    - To add roles to the list, [Add a Custom Role](../../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md).
    - To remove roles from the list, [Lock/Unlock Roles](../../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md).

    :::

**Result:** The chosen users are added to the cluster.

- To revoke cluster membership, select the user and click **Delete**. This action deletes membership, not the user.
- To modify a user's roles in the cluster, delete them from the cluster, and then re-add them with modified roles.
