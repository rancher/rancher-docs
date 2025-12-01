---
title: Projects
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/workflows/projects"/>
</head>

## Creating a Project

Project resources may only be created on the management cluster. See below for [creating namespaces under projects in a managed cluster](#creating-a-namespace-in-a-project).

### Creating a Basic Project

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: Project
metadata:
  generateName: p-
  namespace: c-m-abcde
spec:
  clusterName: c-m-abcde
  displayName: myproject
EOF
```

When creating a new project, you have two primary options for setting the name:

- **Automatic Generation:** Use `metadata.generateName` to ensure a unique project ID. However, note that you must use `kubectl create` (instead of `kubectl apply`) with this option, as `kubectl apply` does not support it.
- **Manual Naming:** You can explicitly set the project ID using `metadata.name`. If a project with that exact name already exists, the name request is denied.
The display name seen in the UI is set by `spec.displayName`. If `spec.displayName` is not provided, the field `metadata.name` is used instead.

Set `metadata.namespace` and `spec.clusterName` to the ID for the cluster the project belongs to.

If you create a project through a cluster member account and want that account to be able to access the project, you must include the annotation `field.cattle.io/creatorId`, and set it to the cluster member account's user ID.

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: Project
metadata:
  annotations: 
  field.cattle.io/creatorId:
    user-id
  generateName: p-
  namespace: c-m-abcde
spec:
  clusterName: c-m-abcde
  displayName: myproject
EOF
```

Setting the `field.cattle.io/creatorId` field creates a `ProjectRoleTemplateBinding` that grants the specified user the ability to see project resources with the `get` command and view the project in the Rancher UI. Cluster owner and admin accounts don't need to set this annotation to perform these tasks.

Setting the  `field.cattle.io/creator-principal-name` annotation to the user's principal preserves it in a projectroletemplatebinding automatically created for the project owner.

If you don't want the creator to be added as the owner member (e.g. if the creator is a cluster administrator) to the project you may set the `field.cattle.io/no-creator-rbac` annotation to `true`, which will prevent the corresponding projectroletemplatebinding from being created.

### Creating a Project With a Resource Quota

Refer to [Kubernetes Resource Quota](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: Project
metadata:
  generateName: p-
  namespace: c-m-abcde
spec:
  clusterName: c-m-abcde
  displayName: myproject
  resourceQuota:
    limit:
      limitsCpu: 1000m
  namespaceDefaultResourceQuota:
    limit:
      limitsCpu: 50m
EOF
```

### Creating a Project With Container Limit Ranges

Refer to [Kubernetes Limit Ranges](https://kubernetes.io/docs/concepts/policy/limit-range/).

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: Project
metadata:
  generateName: p-
  namespace: c-m-abcde
spec:
  clusterName: c-m-abcde
  displayName: myproject
  containerDefaultResourceLimit:
    limitsCpu:    100m
    limitsMemory: 100Mi
    requestsCpu:  50m
    requestsMemory: 50Mi
EOF
```

### Backing Namespace

After creating the project, the field `status.backingNamespace` gets populated. This represents the namespace in the management cluster that is created to manage project related resources. Examples of resources stored in the backing namespace are [project scoped secrets](../../how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md#creating-secrets-in-projects) and [project role template bindings](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#project-roles).

## Adding a Member to a Project

Look up the project's [backing namespace](#backing-namespace) to specify the `metadata.namespace` field value and look up the project's ID to specify the `projectName` field value.

```bash
kubectl --namespace c-m-abcde get projects
```

Look up the role template ID to specify the `roleTemplateName` field value (e.g. `project-member` or `project-owner`).

```bash
kubectl get roletemplates
```

When adding a user member specify the `userPrincipalName` field:

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: ProjectRoleTemplateBinding
metadata:
  generateName: prtb-
  namespace: c-m-abcde-p-vwxyz
projectName: c-m-abcde:p-vwxyz
roleTemplateName: project-member
userPrincipalName: keycloak_user://user
EOF
```

When adding a group member specify the `groupPrincipalName` field instead:

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: ProjectRoleTemplateBinding
metadata:
  generateName: prtb-
  namespace: p-vwxyz
projectName: c-m-abcde:p-vwxyz
roleTemplateName: project-member
groupPrincipalName: keycloak_group://group
EOF
```

Create a projectroletemplatebinding for each role you want to assign to the project member.

## Listing Project Members

Look up the project backing namespace:

```bash
kubectl --namespace c-m-abcde get projects
```

To list projectroletemplatebindings in the project's backing namespace:

```bash
kubectl --namespace c-m-abcde-p-vwxyz get projectroletemplatebindings
```

## Deleting a Member From a Project

Lookup the projectroletemplatebinding IDs containing the member in the project's namespace as decribed in the [Listing Project Members](#listing-project-members) section.

Delete the projectroletemplatebinding from the project's namespace:

```bash
kubectl --namespace c-m-abcde-p-vwxyz delete projectroletemplatebindings prtb-qx874 prtb-7zw7s
```

## Creating a Namespace in a Project

The Project resource resides in the management cluster, even if the Project is for a managed cluster. The namespaces under the project reside in the managed cluster.

On the management cluster, look up the project ID for the cluster you are administrating if generated using `metadata.generateName`:

```bash
kubectl --namespace c-m-abcde get projects
```

On the managed cluster, create a namespace with a project annotation:

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: Namespace
metadata:
  name: mynamespace
  annotations:
    field.cattle.io/projectId: c-m-abcde:p-vwxyz
EOF
```

Note the format, `<cluster ID>:<project ID>`.

## Deleting a Project

Look up the project to delete in the cluster namespace:

```bash
kubectl --namespace c-m-abcde get projects
```

Delete the project under the cluster namespace:

```bash
kubectl --namespace c-m-abcde delete project p-vwxyz
```

Note that this command doesn't delete the namespaces and resources that formerly belonged to the project.

It does delete all project role template bindings for the projects, so recreating the project will not restore members added to the project, and you have to add users as members again.
