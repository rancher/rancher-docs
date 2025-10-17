---
title: Kubeconfigs
---

<head>
    <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/workflows/kubeconfigs"/>
</head>

## Kubeconfig Resource

Kubeconfig is a Rancher resource `kubeconfigs.ext.cattle.io` that allows generating `v1.Config` kubeconfig files for interacting with Rancher and clusters managed by Rancher.

```sh
kubectl api-resources --api-group=ext.cattle.io
```

To get a description of the fields and structure of the Kubeconfig resource, run:

```sh
kubectl explain kubeconfigs.ext.cattle.io
```

## Feature Flag

The Kubeconfigs Public API is available since Rancher v2.12.0 and is enabled by default. It can be disabled by setting the `ext-kubeconfigs` feature flag to `false`.

```sh
kubectl patch feature ext-kubeconfigs -p '{"spec":{"value":false}}'
```

## Creating a Kubeconfig

Only a **valid and active** Rancher user can create a Kubeconfig. For example, trying to create a Kubeconfig using a `system:admin` service account will lead to an error:

```bash
kubectl create -o jsonpath='{.status.value}' -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: Kubeconfig
EOF
Error from server (Forbidden): error when creating "STDIN": kubeconfigs.ext.cattle.io is forbidden: user system:admin is not a Rancher user
```

:::warning Important

The kubeconfig content is generated and returned in the `.status.value` field **only once** when the Kubeconfig is successfully created because it contains secret values for created tokens. Therefore it has to be captured by using an appropriate output option, such as `-o jsonpath='{.status.value}'`, or `-o yaml`.

:::

A kubeconfig can be created for more than one cluster at a time by specifying a list of cluster names in the `spec.clusters` field. You can look up cluster names by listing `clusters.management.cattle.io` resources.

```sh
kubectl get clusters.management.cattle.io -o=jsonpath="{.items[*]['metadata.name', 'spec.displayName']}{'\n'}"
local local
c-m-p66cdvlj downstream1
```

The `metadata.name` and `metadata.generateName` fields are ignored, and the name of the new Kubeconfig is automatically generated using the prefix `kubeconfig-`.

You can use the `spec.currentContext` field to set the cluster name, and it is used to set the current context in the kubeconfig. If you do not set the `spec.currentContext` field, then the first cluster in the `spec.clusters` list will be used as the current context. For ACE-enabled clusters that don't have an FQDN set, the first control plane node will be used as the current context.

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

Listing previously generated Kubeconfigs can be useful for cleaning up backing tokens if the Kubeconfig is no longer needed (e.g., it was issued temporarily). Admins can list all Kubeconfigs, while regular users can only view their own.

```sh
kubectl get kubeconfig
NAME               TTL   TOKENS   STATUS     AGE
kubeconfig-zp786   30d   2/2      Complete   18d
kubeconfig-7zvzp   30d   1/1      Complete   12d
kubeconfig-jznml   30d   1/1      Complete   12d
```
Use `-o wide` to get more details:

```sh
kubectl get kubeconfig -o wide
NAME               TTL   TOKENS   STATUS     AGE     USER         CLUSTERS       DESCRIPTION
kubeconfig-zp786   30d   2/2      Complete   18d     user-w5gcf   *              all clusters
kubeconfig-7zvzp   30d   1/1      Complete   12d     u-w7drc      *
kubeconfig-jznml   30d   1/1      Complete   12d     u-w7drc      *
```

## Viewing a Kubeconfig

Admins can get any Kubeconfig, while regular users can only get their own.

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

## Deleting a Kubeconfig

Admins can delete any Kubeconfig, while regular users can only delete their own. When a Kubeconfig is deleted, the kubeconfig tokens are also deleted.

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

## Deleting a Collection of Kubeconfigs

Admins can delete any Kubeconfig, while regular users can only delete their own.

To delete all Kubeconfigs:

```sh
kubectl delete --raw /apis/ext.cattle.io/v1/kubeconfigs
```

To delete a collection of Kubeconfigs by label:

```sh
kubectl delete --raw /apis/ext.cattle.io/v1/kubeconfigs?labelSelector=foo%3Dbar
```

## Updating a Kubeconfig

Only the `metadata`, e.g. adding a label or an annotation, and the `spec.description` field can be updated. All other `spec` fields are immutable.

To edit a Kubeconfig:

```sh
kubectl edit kubeconfig kubeconfig-zp786
```

To patch a Kubeconfig and update its description:

```sh
kubectl patch kubeconfig kubeconfig-zp786 -type merge -p '{"spec":{"description":"Updated description"}}'
kubeconfig.ext.cattle.io/kubeconfig-zp786 patched

kubectl get kubeconfig kubeconfig-fdcpl -o jsonpath='{.spec.description}'
Updated description
```

To patch a Kubeconfig and add a label:

```sh
kubectl patch kubeconfig kubeconfig-zp786 -type merge -p '{"metadata":{"labels":{"foo":"bar"}}}'
kubeconfig.ext.cattle.io/kubeconfig-zp786 patched

kubectl get kubeconfig kubeconfig-zp786 -o jsonpath='{.metadata.labels.foo}'
bar
```
