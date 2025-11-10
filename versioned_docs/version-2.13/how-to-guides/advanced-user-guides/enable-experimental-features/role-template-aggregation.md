---
title: RoleTemplate Aggregation
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features/role-template-aggregation"/>
</head>

:::caution
RoleTemplate aggregation is an experimental feature in v2.13 that changes the RBAC architecture used for RoleTemplates, ClusterRoleTemplateBindings and ProjectRoleTemplateBindings. **It is not supported for production environments**. Breaking changes may occur between v2.13 and v2.14.
:::

RoleTemplate aggregation implements RoleTemplates, ClusterRoleTemplateBindings and ProjectRoleTemplateBindings using the Kubernetes feature [Aggregated ClusterRoles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles). The new architecture results in a net reduction in RBAC objects (Roles, RoleBindings, ClusterRoles and ClusterRoleBindings) both in the Rancher cluster and the downstream clusters.

For more information on how the feature can improve scalability and performance, please see the [Rancher Blog post](https://www.suse.com/c/rancher_blog/fewer-bindings-more-power-ranchers-rbac-boost-for-enhanced-performance-and-scalability/).

| Environment Variable Key | Default Value | Description |
| --- | --- | --- |
| `aggregated-roletemplates` | `false` | [Beta] Make RoleTemplates use aggregation for generated RBAC roles. |

The value of this feature flag is locked on installation, which shows up in the UI as a lock symbol beside the feature flag. That means the feature can only be set on the first ever installation of Rancher. After that, attempting to modify the value will be denied.
