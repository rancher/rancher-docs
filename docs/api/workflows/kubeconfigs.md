---
title: Kubeconfigs
---

<head>
    <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/workflows/kubeconfigs"/>
</head>

## Feature Flag

The Kubeconfigs Public API is available since Rancher v2.12.0 and is enabled by default. It can be disabled by setting the `ext-kubeconfigs` feature flag to `false`.

```sh
kubectl patch feature ext-kubeconfigs -p '{"spec":{"value":false}}'
```

## Creating a Kubeconfig

Only a **valid and active** Rancher user can create a Kubeconfig.
E.g. using a service account `system:admin` will lead to the following error: 

```bash
kubectl create -o jsonpath='{.status.value}' -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: Kubeconfig
EOF
Error from server (Forbidden): error when creating "STDIN": kubeconfigs.ext.cattle.io is forbidden: user system:admin is not a Rancher user
```

:::note Important:

The kubeconfig content is generated and returned in the `.status.value` field **only once** when the Kubeconfig is successfully created because it contains secret values for created tokens. Therefore it has to be captured by using an appropriate output options, such as `-o jsonpath='{.status.value}'` or `-o yaml`.

:::

A kubeconfig can be created for more than one cluster at a time by specifying a list of cluster names in the `spec.clusters` field.  
Note: Cluster names can be retrieved by listing `clusters.management.cattle.io` resources.

The `spec.currentContext` field can be used to set the cluster name that will be set as the current context in the kubeconfig.  
If the `spec.currentContext` field is not set, then the first cluster in the `spec.clusters` list will be used as the current context. For ACE-enabled clusters that don't have an FQDN set, the first control plane node will be used as the current context.

For ACE-enabled clusters, if the FQDN is set, then that will be used as a cluster entry in the kubeconfig; otherwise, entries for all control plane nodes will be created.

```bash
kubectl create -o jsonpath='{.status.value}' -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: Kubeconfig
spec:
  clusters: [c-m-p66cdvlj, c-m-fcd3g5h]
  description: My Kubeconfig
  currentContext: c-m-p66cdvlj
EOF
```

If `"*"` is specified as the first item in the `spec.clusters` field, the kubeconfig will be created for all clusters that the user has access to, if any.

```bash
kubectl create -o jsonpath='{.status.value}' -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: Kubeconfig
spec:
  clusters: ["*"]
  description: My Kubeconfig
EOF
```

If `spec.ttl` is not specified, the Kubeconfig's tokens will be created with the expiration time defined in the `kubeconfig-default-token-ttl-minutes` setting, which is 30 days by default. If `spec.ttl` is specified, it should be greater than 0 and less than or equal to the value of the `kubeconfig-default-token-ttl-minutes` setting expressed in seconds.

```bash
kubectl create -o jsonpath='{.status.value}' -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: Kubeconfig
spec:
  clusters: [c-m-p66cdvlj] # Downstream cluster
  ttl: 7200 # 2 hours
EOF
```

## Listing Kubeconfigs

Listing previously generated Kubeconfigs can be useful in order to clean up backing tokens if the Kubeconfig is no longer needed (e.g., it was issued temporarily).  
Admins can list all Kubeconfigs, while regular users can only see theirs.

```sh
kubectl get kubeconfig
NAME               TTL   TOKENS   STATUS     AGE
kubeconfig-zp786   30d   2/2      Complete   18d
kubeconfig-7zvzp   30d   1/1      Complete   12d
kubeconfig-jznml   30d   1/1      Complete   12d
```
Use `-o wide` to get more details:

```sh
NAME               TTL   TOKENS   STATUS     AGE     USER         CLUSTERS       DESCRIPTION
kubeconfig-zp786   30d   2/2      Complete   18d     user-w5gcf   *              all clusters
kubeconfig-7zvzp   30d   1/1      Complete   12d     u-w7drc      *
kubeconfig-jznml   30d   1/1      Complete   12d     u-w7drc      *
```

#### Viewing a Kubeconfig

Admins can get any Kubeconfig, while regular users can only get theirs.

```sh
kubectl get kubeconfig kubeconfig-zp786
NAME               TTL   TOKENS   STATUS     AGE
kubeconfig-zp786   30d   2/2      Complete   18d
```

Use `-o wide` to get more details:

```sh
kubectl get kubeconfig kubeconfig-zp786 -o wide
NAME               TTL   TOKENS   STATUS     AGE     USER         CLUSTERS       DESCRIPTION
kubeconfig-zp786   30d   2/2      Complete   18d     user-w5gcf   *              all clusters
```

#### Deleting a Kubeconfig

Admins can delete any Kubeconfig, while regular users can only delete theirs.  
When a Kubeconfig is deleted, the kubeconfig tokens are also deleted.

```sh
kubectl delete kubeconfig kubeconfig-zp786
kubeconfig.ext.cattle.io "kubeconfig-zp786" deleted
```

To delete a Kubeconfig using preconditions:
```sh
cat <<EOF | k delete --raw /apis/ext.cattle.io/v1/kubeconfigs/kubeconfig-zp786 -f -
{
  "apiVersion": "v1",
  "kind": "DeleteOptions",
  "preconditions": {
    "uid": "52183e05-d382-47d2-b4b9-d0735823ce90",
    "resourceVersion": "31331505"
  }
}
EOF
```

#### Deleting a Collection of Kubeconfigs

Admins can delete any Kubeconfig, while regular users can only delete theirs.

To delete all Kubeconfigs:
```sh
kubectl delete --raw /apis/ext.cattle.io/v1/kubeconfigs
```

To delete a collection of Kubeconfigs by label:

```sh
kubectl delete --raw /apis/ext.cattle.io/v1/kubeconfigs?labelSelector=foo%3Dbar
```

#### Updating a Kubeconfig

Only the metadata and the `spec.description` field can be updated. All other `spec` fields are immutable.

To add a label to a Kubeconfig:

```sh
kubectl patch kubeconfig kubeconfig-zp786 -p '{"metadata":{"labels":{"foo":"bar"}}}'
```

To change the description of a Kubeconfig:

```sh
kubectl patch kubeconfig kubeconfig-zp786 -p '{"spec":{"description":"Updated description"}}'
```
