---
title: Locked Roles
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"/>
</head>

You can set roles to a status of `locked`. Locking roles prevent them from being assigned to users in the future.

Locked roles:

- Cannot be assigned to users that don't already have it assigned.
- Are not listed in the **Member Roles** drop-down when you are adding a user to a cluster or project.
- Do not affect users assigned the role before you lock the role. These users retain access that the role provides.

    **Example:** let's say your organization creates an internal policy that users assigned to a cluster are prohibited from creating new projects. It's your job to enforce this policy.

    To enforce it, before you add new users to the cluster, you should lock the following roles: `Cluster Owner`, `Cluster Member`, and `Create Projects`. Then you could create a new custom role that includes the same permissions as a __Cluster Member__, except the ability to create projects. Then, you use this new custom role when adding users to a cluster.

Roles can be locked by the following users:

- Any user assigned the `Administrator` global permission.
- Any user assigned the `Custom Users` permission, along with the `Manage Roles` role.


## Locking/Unlocking Roles

If you want to prevent a role from being assigned to users, you can set it to a status of `locked`.

You can lock roles in two contexts:

- When you're [adding a custom role](custom-roles.md).
- When you editing an existing role (see below).

Cluster roles and project/namespace roles can be locked, but global roles cannot.

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Role Templates**. 
    * In Rancher v2.7.6 and earlier, the **Role Templates** page is labeled **Roles**.
1. Go to the **Cluster** tab or the **Project/Namespaces** tab.
1. From the role that you want to lock (or unlock), select **⋮ > Edit Config**.
1. From the **Locked** option, choose the **Yes** or **No** radio button. Then click **Save**.
