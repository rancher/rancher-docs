---
title: 项目
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/api/workflows/projects"/>
</head>

## 创建项目

项目资源只能在管理集群上创建，请参考下文了解如何[在管理集群中的项目下创建命名空间](#在项目中创建命名空间)

### 创建一个基本项目

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

使用 `metadata.generateName` 来确保一个唯一的项目 ID，但是需要注意 `kubectl apply` 不能与 `metadata.generateName` 一起使用，因此必须使用 `kubectl create` 来替代。

将 `metadata.namespace` 和 `spec.clusterName` 设置为项目所属的集群 ID。

如果你通过集群成员账户创建项目，则必须包含注释 `field.cattle.io/creatorId`，并将注释值设置为集群成员账号的用户 ID。

```bash
kubectl create -f - <<EOF
apiVersion: management.cattle.io/v3
kind: Project
metadata:
  annotations: 
    field.cattle.io/creatorId: user-id
  generateName: p-
  namespace: c-m-abcde
spec:
  clusterName: c-m-abcde
  displayName: myproject
EOF
```

设置 `field.cattle.io/creatorId` 字段允许集群成员账户通过 `get` 命令查看项目资源，并可以在 Rancher UI 中查看项目。集群所有者和管理员账号不需要设置此注释。

### 创建一个具有 Resource Quota 的项目

请查看 [Kubernetes Resource Quota](https://kubernetes.io/docs/concepts/policy/resource-quotas/)。

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

### 创建一个具有 Container Limit Ranges 的项目

请查看 [Kubernetes Limit Ranges](https://kubernetes.io/docs/concepts/policy/limit-range/)。

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

## 在项目中创建命名空间

项目资源保存在管理集群中，即使该项目使用于托管集群也是如此。项目下的命名空间保存在托管集群中。

在管理集群上查找你正在管理的集群的项目 ID，因为它是使用 `metadata.generateName` 生成的：

```bash
kubectl --namespace c-m-abcde get projects
```

在托管集群上，使用项目注释创建命名空间:

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

注意格式：`<cluster ID>:<project ID>`

## 删除项目

在集群命名空间中查找要删除的项目：

```bash
kubectl --namespace c-m-abcde get projects
```

删除集群命名空间下的项目：

```bash
kubectl --namespace c-m-abcde delete project p-vwxyz
```

请注意此命令不会删除以前属于该项目的命名空间和资源。
