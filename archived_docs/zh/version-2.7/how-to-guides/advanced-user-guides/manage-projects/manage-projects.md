---
title: 项目管理
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/advanced-user-guides/manage-projects"/>
</head>

_项目_ 是 Rancher 中引入的对象，可帮助你更有组织地管理 Kubernetes 集群中的命名空间。你可以使用项目创建多租户集群，这种集群允许一组用户共享相同的底层资源来创建应用，而应用之间不会相互影响。

在层次结构方面：

- 集群包含项目
- 项目包含命名空间

在 Rancher 中，你可以使用项目将多个命名空间作为一个实体进行管理。在原生 Kubernetes（没有项目这个概念）中，RBAC 或集群资源等功能被分配给了各个命名空间。如果集群中的多个命名空间需要分配同样的访问权限，分配权限会变得非常繁琐。即使所有命名空间都需要相同的权限，但也无法使用一个操作中将这些权限应用于所有命名空间。你必须重复地将这些权限分配给每个命名空间。

而 Rancher 通过引入项目的概念，通过允许你在项目级别应用资源和访问权限。然后，项目中的每个命名空间都会继承这些资源和策略。因此你只需将资源和策略分配给项目即可，不需要将它们分配给每个单独的命名空间。

你可以使用项目执行以下操作：

- [为用户分配一组命名空间的访问权限](../../new-user-guides/add-users-to-projects.md)
- 为用户分配[项目中的特定角色](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#项目角色)。角色可以是所有者、成员、只读或[自定义](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md)
- [设置资源配额](manage-project-resource-quotas/manage-project-resource-quotas.md)
- [管理命名空间](../../new-user-guides/manage-namespaces.md)
- [配置工具](../../../reference-guides/rancher-project-tools.md)
- [配置 Pod 安全策略](manage-pod-security-policies.md)

### 授权

非管理者用户只有在[管理员](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)、[集群所有者或成员](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#集群角色)或[项目所有者](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#项目角色)将非管理员用户添加到项目的**成员**选项卡后，才能获取项目的访问权限。

创建项目的人自动成为[项目所有者](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#项目角色)。

## 在项目之间切换

要在项目之间切换，请使用导航栏中的下拉菜单。你也可以直接在导航栏中切换项目：

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面，进入要切换项目的集群然后点击 **Explore**。
1. 在顶部导航栏中，选择要打开的项目。
