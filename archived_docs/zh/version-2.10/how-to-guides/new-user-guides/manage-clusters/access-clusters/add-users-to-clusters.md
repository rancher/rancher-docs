---
title: 将用户添加到集群
---

To provide a user access to view certain cluster-level resources and create new projects, assign the user a **Cluster Membership**. Cluster members can create projects and manage resources in those projects. However, not all resources, namespaces and workloads in a cluster are accessible by cluster members.

:::tip

如果你想为用户提供对集群内 _特定_ 项目的访问权限，请参见[添加项目成员](../../../new-user-guides/add-users-to-projects.md)。

:::

你可以在两种情况下添加集群成员：

- 将成员添加到新集群

   你可以在创建集群时将成员添加到集群（推荐）。

- [向现有集群添加成员](#编辑集群成员)

   配置集群后，你始终可以向集群添加成员。

## 编辑集群成员

集群管理员可以编辑集群的成员，控制哪些 Rancher 用户可以访问集群以及他们可以使用哪些功能。

1. 点击 **☰ > 集群管理**。
1. 转到要添加成员的集群，然后单击 **⋮ > 编辑配置**。
1. 在**成员角色**选项卡中，单击**添加成员**。
1. 搜索要添加到集群的用户或组。

   :::note Notes:

   - At least 2 characters must be typed in the search box for results to appear.
   - Users can be searched based on their username or display name.
   - Search is prefix-based (e.g., a user named `Stan Dard` will appear when searching for `Sta`, but not when searching for `Dar`) and case-sensitive.

   :::
   
   如果配置了外部身份验证：

   - 在你键入时，Rancher 会从你的[外部身份验证](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md)源返回用户。

      :::note 使用 AD 但找不到你的用户？

      你的搜索属性配置可能存在问题。请参阅[配置 Active Directory 身份验证：步骤 5](../../../new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory.md)。

      :::

   - 你可以在下拉菜单中添加组，而不是单个用户。下拉列表仅列出你（登录用户）所属的组。

      :::note

      如果你以本地用户身份登录，外部用户不会显示在你的搜索结果中。有关详细信息，请参阅[外部身份验证配置和主体用户](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md#外部认证配置和用户主体)。

      :::

1. 分配用户或组的**集群**角色。

   [什么是集群角色？](../../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)

   :::tip

   对于自定义角色，你可以修改可分配的单个角色列表。

   - 要将角色添加到列表中，请[添加自定义角色](../../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md)。
   - 要从列表中删除角色，请[锁定/解锁角色](../../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md)。

   :::

**结果**：已将选中的用户添加到集群中。

- 要撤销集群成员资格，请选择用户并单击**删除**。此操作会删除成员资格，而不会删除用户。
- 要修改集群中的用户角色，请将其从集群中删除，然后使用修改后的角色重新添加用户。
