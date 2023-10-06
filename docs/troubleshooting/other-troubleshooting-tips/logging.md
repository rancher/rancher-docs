---
title: Logging
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/troubleshooting/other-troubleshooting-tips/logging"/>
</head>

## Log Levels

The following log levels are used in Rancher:

| Name    | Description |
|---------|-------------|
| `info`  | Logs informational messages. This is the default log level. |
| `debug` | Logs more detailed messages that can be used to debug. |
| `trace` | Logs very detailed messages on internal functions. This is very verbose and can contain sensitive information. |

### How to Configure a Log Level

#### Kubernetes Install

* Configure debug log level

```
$ KUBECONFIG=./kube_config_cluster.yml
$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set debug; done
OK
OK
OK
$ kubectl -n cattle-system logs -l app=rancher -c rancher
```

* Configure info log level

```
$ KUBECONFIG=./kube_config_cluster.yml
$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set info; done
OK
OK
OK
```

#### Docker Install

* Configure debug log level

```
$ docker exec -ti <container_id> loglevel --set debug
OK
$ docker logs -f <container_id>
```

* Configure info log level

```
$ docker exec -ti <container_id> loglevel --set info
OK
```

## Rancher Machine Debug Logs
If you need to troubleshoot the creation of objects in your infrastructure provider of choice, `rancher-machine`
debug logs might be helpful to you.

It's possible to enable debug logs for `rancher-machine` by setting environment variables when launching Rancher.

The `CATTLE_WHITELIST_ENVVARS` environment variable allows users to whitelist specific environment variables to be
passed down to `rancher-machine` during provisioning.

The `MACHINE_DEBUG` variable enables debug logs in `rancher-machine`.

Thus, by setting `MACHINE_DEBUG=true` and adding `MACHINE_DEBUG` to the default list of variables in
`CATTLE_WHITELIST_ENVVARS` (e.g. `CATTLE_WHITELIST_ENVVARS=HTTP_PROXY,HTTPS_PROXY,NO_PROXY,MACHINE_DEBUG`) it is
possible to enable debug logs in `rancher-machine` when provisioning RKE1, RKE2 and k3s clusters.

:::caution

Just like the `trace` log level above, `rancher-machine` debug logs can contain sensitive information.

:::


## Cattle-cluster-agent Debug Logs

The `cattle-cluster-agent` log levels can be set when you initialize downstream clusters.

When you create a cluster under **Cluster Configuration > Agent Environment Vars** you can set variables to define the log level.
- Trace-level logging: Set `CATTLE_TRACE` or `RANCHER_TRACE` to `true`

- Debug-level logging: Set `CATTLE_DEBUG` or `RANCHER_DEBUG` to `true`

:::caution

The `cattle-cluster-agent` debug logs may contain sensitive information.

:::
