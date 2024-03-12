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

Use `metadata.generateName` to ensure a unique project ID, but note that `kubectl apply` does not work with `metadata.generateName`, so `kubectl create` must be used instead.

Set `metadata.namespace` and `spec.clusterName` to the ID for the cluster the project belongs to.

If you create a project through a cluster member account, you must include the annotation, `field.cattle.io/creatorId`, and set it to the cluster member account's user ID.

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

Setting the `field.cattle.io/creatorId` field allows the cluster member account to see project resources with the `get` command and view the project in the Rancher UI. Cluster owner and admin accounts don't need to set this annotation to perform these tasks.

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
```

## Creating a Namespace in a Project

The Project resource resides in the management cluster, even if the Project is for a managed cluster. The namespaces under the project reside in the managed cluster.

On the management cluster, look up the project ID for the cluster you are administrating since it generated using `metadata.generateName`:

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
