---
title: Global Resources
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-resources"/>
</head>

Global Resources are non-namespaced resources provided by Rancher. Users who are
cluster-owners/project-owners do not have access to several of these by
default. For example principals and roletemplates.

The resources are documented here to support administrators creating and/or
modifying custom sets of permissions with finding the minimum set of permissions
needed for a particular task in the dashboard.

As an example, to use the cluster/project permissions pages of the dashboard
requires permissions on principals to search/display a readable name for users,
and on roleTemplates, to see a list of usable roleTemplates as well as to
display a readable name for the role.

Please see the list below to determine what permissions you may need when creating a least-privilege user.

| Group                | Resource                       | Purpose                                                                     |
| -------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| auditlog.cattle.io   | auditpolicies                  | Specification of log filers, redactions, verbosity                          |
| catalog.cattle.io    | clusterrepos                   | Helm chart repository location and credentials                              |
| ext.cattle.io        | groupmembershiprefreshrequests | Creation triggers refresh of group membership for specific or all users     |
| ext.cattle.io        | kubeconfigs                    | Kubeconfig file for access to remote clusters                               |
| ext.cattle.io        | passwordchangerequests         | Creation triggers update of the referenced User's password                  |
| ext.cattle.io        | selfusers                      | Get delivers User making the request                                        |
| ext.cattle.io        | tokens                         | Raw API key. See Kubeconfig for wrapped API keys                            |
| management.cattle.io | authconfigs                    | Configuration of external auth service providers                            |
| management.cattle.io | clusters                       | Remote cluster management                                                   |
| management.cattle.io | features                       | Feature controlling rancher behaviour                                       |
| management.cattle.io | globalrolebindings             | Binding of user/group to a global role                                      |
| management.cattle.io | globalroles                    | Custom role for global permissions (applied local and remote)               |
| management.cattle.io | nodedrivers                    | Configuration of driver to provision clusters with a cloud service provider |
| management.cattle.io | roletemplates                  | Template for custom roles managing project- or cluster-specific permissions |
| management.cattle.io | settings                       | Setting controlling Rancher behaviour                                       |
| management.cattle.io | tokens                         | Raw API key, old style.                                                     |
| management.cattle.io | userattributes                 | Additional information about a managed User                                 |         
| management.cattle.io | users                          | User known to and managed by Rancher                                        |
| telemetry.cattle.io  | secretrequests                 | Request creation of a secret with arbitrary name, in any namespace          |
