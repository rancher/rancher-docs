---
title: 资源配额类型参考
---

When you create a resource quota, you are configuring the pool of resources available to the project. Rancher supports the use of arbitrary resource references and their quotas. This allows you to utilize all upstream [Kubernetes `ResourceQuota`](https://kubernetes.io/docs/concepts/policy/resource-quotas/#types-of-resource-quota) types when managing project resource quotas.

You can set resource limits for the following predefined resource types, where the `Custom` type enables specification of arbitrary resources and their quotas.

:::note
Support for arbitrary resource references using the `Custom` type does not cover resources in the `ext.cattle.io` API group.
:::

| 资源类型 | 描述 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CPU 限制\* | 分配给项目/命名空间的最大 CPU 量（以[毫核](https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu)为单位）<sup>1</sup> |
| CPU 预留\* | 预留给项目/命名空间的最小 CPU 量（以毫核为单位）<sup>1</sup> |
| 内存限制\* | 分配给项目/命名空间的最大内存量（[以字节为单位](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory)）<sup>1</sup> |
| 内存预留\* | 预留给项目/命名空间的最小内存量（以字节为单位）<sup>1</sup> |
| 存储预留 | 预留给项目/命名空间的最小存储量（以千兆字节为单位） |
| 服务负载均衡器 | 项目/命名空间中可以存在的负载均衡器服务的最大数量 |
| 服务节点端口 | 项目/命名空间中可以存在的节点端口服务的最大数量 |
| Pod | 可以在项目/命名空间中以非终端状态存在的 pod 的最大数量（即 `.status.phase in (Failed, Succeeded)` 等于 true 的 pod） |
| Services | 项目/命名空间中可以存在的最大 service 数量 |
| ConfigMap | 项目/命名空间中可以存在的 ConfigMap 的最大数量 |
| 持久卷声明 | 项目/命名空间中可以存在的持久卷声明的最大数量 |
| ReplicationController | 项目/命名空间中可以存在的最大 ReplicationController 数量 |
| 密文 | 项目/命名空间中可以存在的最大密文数量 |
| Custom\*\* | The specification of arbitrary resources and their quotas, beyond the resource types built into projects, as listed above. |

:::note **<sup>*</sup>**

在设置资源配额时，如果你在项目或命名空间上设置了任何与 CPU 或内存相关的内容（即限制或预留），所有容器都需要在创建期间设置各自的 CPU 或内存字段。你可以同时设置容器的默认资源限制，以避免为每个工作负载显式设置这些限制。详情请参阅 [Kubernetes 文档](https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits)。

:::

:::note **<sup>\*\*</sup>**

For example:

  - `requests.nvidia.com/gpu: 4`
  - `gold.storageclass.storage.k8s.io/requests.storage: 500Gi`
  - `count/podtemplates: 10`

See the [Kubernetes documentation](https://kubernetes.io/docs/concepts/policy/resource-quotas/#quota-for-extended-resources) for many more examples.

:::
