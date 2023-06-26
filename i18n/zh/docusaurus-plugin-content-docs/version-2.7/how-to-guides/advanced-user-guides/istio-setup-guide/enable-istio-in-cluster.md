---
title: 1. 在集群中启用 Istio
---

:::note 先决条件：

- 只有分配了 `cluster-admin` [Kubernetes 默认角色](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles)的用户可以在 Kubernetes 集群中配置和安装 Istio。
- 如果你有 pod 安全策略，则需要安装启用了 CNI 的 Istio。有关详细信息，请参阅[本节](../../../integrations-in-rancher/istio/configuration-options/pod-security-policies.md)。
- 要在 RKE2 集群上安装 Istio，则需要执行额外的步骤。有关详细信息，请参阅[本节](../../../integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md)。
- 要在启用了项目网络隔离的集群中安装 Istio，则需要执行额外的步骤。有关详细信息，请参阅[本节](../../../integrations-in-rancher/istio/configuration-options/project-network-isolation.md)。

:::

1. 点击 **☰ > 集群管理**。
1. 转到要启用 Istio 的位置，然后单击 **Explore**。
1. 单击 **Apps**。
1. 单击 **Chart**。
1. 单击 **Istio**。
1. 如果你还没有安装 Monitoring 应用，系统会提示你安装 rancher-monitoring。你也可以选择在 Rancher-monitoring 安装上设置选择器或抓取配置选项。
1. 可选：为 Istio 组件配置成员访问和[资源限制](../../../integrations-in-rancher/istio/cpu-and-memory-allocations.md)。确保你的 Worker 节点上有足够的资源来启用 Istio。
1. 可选：如果需要，对 values.yaml 进行额外的配置更改。
1. 可选：通过[覆盖文件](../../../pages-for-subheaders/configuration-options.md#覆盖文件)来添加其他资源或配置。
1. 单击**安装**。

**结果**：已在集群级别安装 Istio。

## 其他配置选项

有关配置 Istio 的更多信息，请参阅[配置参考](../../../pages-for-subheaders/configuration-options.md)。
