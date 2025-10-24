---
title: 管理 RBAC
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac"/>
</head>

Rancher 通过 _用户_ 进行授权管理。如[认证](../authentication-config/authentication-config.md)中所述，用户可以是本地用户，也可以是外部用户。

配置外部认证后，**用户**页面上显示的用户会发生变化。

- 如果你以本地用户身份登录，则仅显示本地用户。

- 如果你以外部用户身份登录，则会同时显示外部用户和本地用户。

## 用户和角色

一旦用户登录到 Rancher，他们的 _授权_，也就是他们在系统中的访问权限，将由 _全局权限_ 和 _集群和项目角色_ 决定。

- [全局权限](global-permissions.md):

  定义用户在任何特定集群之外的授权。

- [集群和项目角色](cluster-and-project-roles.md):

  定义用户在分配了角色的特定集群或项目中的授权。

全局权限以及集群和项目角色都是基于 [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) 实现的。因此，权限和角色的底层实现是由 Kubernetes 完成的。
