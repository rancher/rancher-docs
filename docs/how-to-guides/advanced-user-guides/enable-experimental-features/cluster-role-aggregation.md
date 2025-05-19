---
title: ClusterRole Aggregation
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features/cluster-role-aggregation"/>
</head>

:::caution
ClusterRole aggregation is a highly experimental feature that changes the RBAC architecture used for RoleTemplates, ClusterRoleTemplateBindings and ProjectRoleTemplateBindings. **It is not supported for production environments**. This feature is meant exclusively for internal testing in v2.11. It is expected to be available as a beta for users in v2.12 with a prospective GA in Rancher v2.13.
:::

ClusterRole aggregation implements RoleTemplates, ClusterRoleTemplateBindings and ProjectRoleTemplateBindings using the Kubernetes feature [Aggregated ClusterRoles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles). The new architecture results in a net reduction in RBAC objects (Roles, RoleBindings, ClusterRoles and ClusterRoleBindings) both in the Rancher cluster and the downstream clusters.

| Environment Variable Key | Default Value | Description |
| --- | --- | --- |
| `aggregated-roletemplates` | `false` | [Experimental] Make RoleTemplates use aggregation for generated RBAC roles. |

The value of this feature flag is locked on installation, which shows up in the UI as a lock symbol beside the feature flag. That means the feature can only be set on the first ever installation of Rancher. After that, attempting to modify the value will be denied.
