---
title: RBAC
---

本文介绍 Prometheus Federator RBAC。

如[命名空间](../../pages-for-subheaders/prometheus-federator.md#命名空间)部分所述，Prometheus Federator 期望集群中具有项目级别权限（例如，具有由单个标签选择器确定的命名空间组的权限）的项目所有者、项目成员和其他用户，除了项目 Registration 命名空间（默认导入到项目中）和那些已经包含其项目的命名空间之外，在任何其他命名空间中都只有最低权限。因此，为了让项目所有者将特定 Chart 权限分配给其项目命名空间中的其他用户，Helm Project Operator 将自动监视以下绑定：

- ClusterRoleBindings
- 项目发布命名空​​间中的 RoleBindings

如果 Helm Project Operator 观察到其中一种绑定的更改，Helm Project Operator 会检查绑定指向的 `roleRef` 是否与具有以下名称的 ClusterRole 匹配：

- `helmProjectOperator.releaseRoleBindings.clusterRoleRefs.admin`
- `helmProjectOperator.releaseRoleBindings.clusterRoleRefs.edit`
- `helmProjectOperator.releaseRoleBindings.clusterRoleRefs.view`

默认情况下，这些 roleRef 分别对应 `admin`、`edit` 和 `view`，它们都是 [Kubernetes 面向用户的默认角色](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles)。

:::note

对于 Rancher RBAC 用户，这些 [Kubernetes 面向用户的默认角色](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles)与`项目所有者`、`项目成员`和`只读`默认项目角色模板直接对应。

:::

如果 `roleRef` 匹配，Helm Project Operator 将为所有用户和组过滤绑定的 `subjects`，并使用它为项目 Release 命名空间中的每个角色自动构造一个 RoleBinding，该 RoleBinding 的名称与角色相同并带有以下标签：

- `helm.cattle.io/project-helm-chart-role: {{ .Release.Name }}`
- `helm.cattle.io/project-helm-chart-role-aggregate-from: <admin|edit|view>`

默认情况下，Prometheus Federator 部署的底层 Chart `rancher-project-monitoring` 会为每个项目发布命名空​​间创建三个默认角色，这些角色能授权 `admin`、`edit` 和 `view` 用户查看项目监控堆栈的 Prometheus、Alertmanager 和 Grafana UI，从而提供最低权限。如果集群管理员想要为某些用户分配额外的权限，一种做法是直接将项目 Release 命名空间中的 RoleBinding 分配给某些用户。另一种做法是创建带有上述两个标签的角色，然后，项目所有者可以控制在项目 Registration 命名空间中分配这些 RBAC 角色的用户。