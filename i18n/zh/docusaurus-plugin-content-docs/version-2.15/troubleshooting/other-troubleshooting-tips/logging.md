---
title: Logging
---

## 日志级别

Rancher 使用了以下日志级别：

| 名称 | 描述 |
|---------|-------------|
| `info` | 记录信息性消息。这是默认的日志级别。 |
| `debug` | 记录可用于调试的更详细消息。 |
| `trace` | 记录内部功能的非常详细的消息。非常冗长，并且可能包含敏感信息。 |

### 如何配置日志级别

#### Kubernetes 安装

* 配置 debug 日志级别

```
$ KUBECONFIG=./kube_config_cluster.yml
$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set debug; done
OK
OK
OK
$ kubectl -n cattle-system logs -l app=rancher -c rancher
```

* 配置 info 日志级别

```
$ KUBECONFIG=./kube_config_cluster.yml
$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set info; done
OK
OK
OK
```

#### Docker 安装

* 配置 debug 日志级别

```
$ docker exec -ti <container_id> loglevel --set debug
OK
$ docker logs -f <container_id>
```

* 配置 info 日志级别

```
$ docker exec -ti <container_id> loglevel --set info
OK
```

## Rancher 主机调试日志
如果需要解决在基础设施提供商中创建对象的问题，你可以使用 `rancher-machine` 调试日志。

你可以在启动 Rancher 时设置环境变量来为 `rancher-machine` 启用调试日志。

`CATTLE_WHITELIST_ENVVARS` 环境变量允许用户将特定环境变量列入白名单，让它们能在配置期间传递给 `rancher-machine`。

`MACHINE_DEBUG` 变量在 `rancher-machine` 中启用调试日志。

因此，通过设置 `MACHINE_DEBUG=true` 并将 `MACHINE_DEBUG` 添加到 `CATTLE_WHITELIST_ENVVARS` 中的变量默认列表（例如 `CATTLE_WHITELIST_ENVVARS=HTTP_PROXY,HTTPS_PROXY,NO_PROXY,MACHINE_DEBUG`），你可以在配置 RKE1、RKE2 和 K3s 集群时在 `rancher-machine` 中启用调试日志。

:::caution

像上面的 `trace` 日志级别一样，`rancher-machine` 调试日志可以包含敏感信息。

:::
