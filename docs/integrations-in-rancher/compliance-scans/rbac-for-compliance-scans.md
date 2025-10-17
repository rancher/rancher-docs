---
title: Roles-based Access Control
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/compliance-scans/rbac-for-compliance-scans"/>
</head>

This section describes the permissions required to use the rancher-compliance App.

The rancher-compliance is a cluster-admin only feature by default.

However, the `rancher-compliance` chart installs these two default `ClusterRoles`:

- compliance-admin
- compliance-view

In Rancher, only cluster owners and global administrators have `compliance-admin` access by default.

## Cluster-Admin Access

Rancher Compliance Scans is a cluster-admin only feature by default.
This means only the Rancher global admins, and the cluster’s cluster-owner can:

- Install/Uninstall the rancher-compliance App
- See the navigation links for Compliance CRDs - ClusterScanBenchmarks, ClusterScanProfiles, ClusterScans
- List the default ClusterScanBenchmarks and ClusterScanProfiles
- Create/Edit/Delete new ClusterScanProfiles
- Create/Edit/Delete a new ClusterScan to run the Compliance scan on the cluster
- View and Download the ClusterScanReport created after the ClusterScan is complete


## Summary of Default Permissions for Kubernetes Default Roles

The rancher-compliance creates three `ClusterRoles` and adds the Compliance CRD access to the following default K8s `ClusterRoles`:

| ClusterRole created by chart | Default K8s ClusterRole  | Permissions given with Role
| ------------------------------| ---------------------------| ---------------------------|
| `compliance-admin` | `admin`| Ability to CRUD clusterscanbenchmarks, clusterscanprofiles, clusterscans, clusterscanreports CR
| `compliance-view` | `view `| Ability to List(R) clusterscanbenchmarks, clusterscanprofiles, clusterscans, clusterscanreports CR


By default only cluster-owner role will have ability to manage and use `rancher-compliance` feature.

The other Rancher roles (cluster-member, project-owner, project-member) do not have any default permissions to manage and use rancher-compliance resources.

But if a cluster-owner wants to delegate access to other users, they can do so by creating ClusterRoleBindings between these users and the above Compliance ClusterRoles manually.
There is no automatic role aggregation supported for the `rancher-compliance` ClusterRoles.
