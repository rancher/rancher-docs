---
title: Prometheus Federator
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/prometheus-federator"/>
</head>

Prometheus Federator（也称为 Project Monitoring V2）基于 [rancher/helm-project-operator](https://github.com/rancher/helm-project-operator) 部署一个 Helm Project Operator。该 Operator 管理 Helm Chart 的部署，每个 Operator 都包含一个 Project Monitoring Stack，而每个堆栈都包含：

- [Prometheus](https://prometheus.io/)（由 [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) 在外部管理）
- [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/)（由 [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) 在外部管理）
- [Grafana](https://github.com/helm/charts/tree/master/stable/grafana)（通过嵌入式 Helm Chart 部署）
- 基于 [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus/) 社区策划资源集合的默认 PrometheusRules 和 Grafana 仪表板
- 监视已部署资源的默认 ServiceMonitor

:::note 重要提示：

Prometheus Federator 适合在已安装 Prometheus Operator CRD 的集群中与现有的 Prometheus Operator Deployment 一起部署。

:::

## Operator 工作原理

1. 在部署此 Chart 时，用户可以创建 ProjectHelmCharts CR，并在**项目 Registration 命名空间 (`cattle-project-<id>`)** 中将 `spec.helmApiVersion` 设置为 `monitoring.cattle.io/v1alpha1`（在 Rancher UI 中也称为“项目监控”）。
2. 在看到每个 ProjectHelmChartCR 时，Operator 会代表项目所有者在**项目 Release 命名空间 (`cattle-project-<id>-monitoring`)** 中自动部署一个 Project Prometheus 堆栈（基于 ProjectHelmChart 控制器在 **Operator / System Namespace** 中创建的 HelmChart CR 和 HelmRelease CR）。
3. RBAC 将自动分配到项目 Release 命名空间中，从而允许用户查看 Prometheus、Alertmanager 以及已部署的 Project Monitoring Stack 的 Grafana UI（基于在项目 Registration 命名空间上针对[面向用户的默认 Kubernetes 角色](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles)定义的 RBAC）。有关详细信息，请参阅[配置 RBAC](rbac.md)。

### 什么是项目？

在 Prometheus Federator 中，项目是一组可以由 `metav1.LabelSelector` 标识的命名空间。默认情况下，用于标识项目的标签是 `field.cattle.io/projectId`，该标签用于标识给定 Rancher 项目中包含的命名空间。

### 配置由 ProjectHelmChart 创建的 Helm 版本

此 ProjectHelmChart 资源的 `spec.values` 对应于为底层 Helm Chart 配置的 `values.yaml` 覆盖，该 Helm Chart 是 Operator 代表用户部署的。要查看底层 Chart 的 `values.yaml` 规范，你可以选择以下其中一种方式：

- 查看位于 [`charts/rancher-project-monitoring` 中的 `rancher/prometheus-federator`](https://github.com/rancher/prometheus-federator/blob/main/charts/rancher-project-monitoring) 的 Chart 定义（Chart 版本会绑定到 Operator 版本）。
- 查找在每个项目 Registration 命名空间中自动创建的名为 `monitoring.cattle.io.v1alpha1` 的 ConfigMap，其中包含用于配置 Chart（直接嵌入到 `prometheus-federator` 二进制文件中）的`values.yaml` 和 `questions.yaml`。

### 命名空间

Prometheus Federator 是基于 [rancher/helm-project-operator](https://github.com/rancher/helm-project-operator) 的 Project Operator，Prometheus Federator 提供了三类命名空间供 Operator 查找：

1. **Operator / System 命名空间**：部署 Operator 的命名空间（例如 `cattle-monitoring-system`）。此命名空间将包含该 Operator 监视的所有 ProjectHelmChart 的所有 HelmChart 和 HelmRelease。**只有集群管理员才能访问此命名空间**。

2. **项目 Registration 命名空间 (`cattle-project-<id>`)**：Operator 在这些命名空间中监视 ProjectHelmChart。对于在项目发布命名空​​间中创建的自动分配的 RBAC，应用于此命名空间的 RoleBinding 和 ClusterRoleBinding 也会作为 RBAC 的真实来源。有关详细信息，请参阅 [RBAC 页面](rbac.md)。**项目所有者（admin）、项目成员（edit）和只读成员（view）应该有权访问此命名空间。**

   :::note 注意事项：

   - 如果提供了 `.Values.global.cattle.projectLabel`（默认设置为 `field.cattle.io/projectId`），则 Operator 会自动生成项目注册命名空间，并将它导入到命名空间绑定的项目中。换言之，如果观察到至少一个带有该标签的命名空间，则 Operator 会创建一个项目 Registration 命名空间。除非出现以下两种情况，否则 Operator 不会让这些命名空间被删除。第一种情况是带有该标签的所有命名空间都消失了（例如，这是该项目中的最后一个命名空间，在这种情况下，命名空间将标有标签 `"helm.cattle.io/helm-project-operator-orphaned": "true"`，表示可以删除）。第二种情况是由于项目 ID 是在 `.Values.helmProjectOperator.otherSystemProjectLabelValues` 下提供的（用作项目的拒绝名单），导致 Operator 不再监视该项目。这些命名空间不会被自动删除，这样能避免破坏用户数据。如果需要，建议用户在创建或删除项目时手动清理这些命名空间。

   - 如果未提供 `.Values.global.cattle.projectLabel`，则 Operator / System 命名空间也是项目注册命名空间。

   :::

3. **项目发布命名空​​间（`cattle-project-<id>-monitoring`）**：Operator 代表 ProjectHelmChart 在其中部署项目监控堆栈的命名空间集。Operator 还将根据在项目 Registration 命名空间中找到的绑定，自动为项目监控堆栈在此命名空间中创建的角色分配 RBAC。**只有集群管理员才能访问这个命名空间。部署的 Helm Chart 和 Prometheus Federator 将为项目所有者（admin）、项目成员（edit）和只读成员（view）分配该命名空间的有限访问权限。**

   :::note 注意事项：

   - 项目发布命名空间会自动部署并导入到 ID 在 `.Values.helmProjectOperator.projectReleaseNamespaces.labelValue` 下指定的项目中，如果未指定，且项目注册命名空间中指定了 ProjectHelmChart，则默认为 `.Values.global.cattle.systemProjectId` 的值。

   - 项目发布命名空​​间的孤立约定与项目注册命名空间的相同（参见上面的注释）。

   - 如果 `.Values.projectReleaseNamespaces.enabled` 为 false，则项目发布命名空​​间与项目注册命名空间是相同的。

   :::

### Helm 资源（HelmChart、HelmRelease）

在部署 ProjectHelmChart 时，Prometheus Federator 将自动创建和管理两个子自定义资源，它们依次管理以下底层 Helm 资源：

- HelmChart CR（通过 Operator 中的嵌入式 [k3s-io​​/helm-contoller](https://github.com/k3s-io/helm-controller) 管理）：此自定义资源会根据应用到 HelmChart CR 的变更，在触发 `helm install`、`helm upgrade` 或 `helm uninstall` 的同一命名空间中自动创建一个 Job。此 CR 会根据 ProjectHelmChart 的更改（例如，修改 `values.yaml`）或底层项目定义的更改（例如，从项目中添加或删除命名空间）自动更新。

:::note 重要提示：

如果 ProjectHelmChart 没有部署或更新底层项目监控堆栈，你可以先使用此资源在 Operator / System 命名空间中创建的 Job 来检查 Helm 操作是否有问题。通常只能由**集群管理员访问**。

:::

- HelmRelease CR（通过 Operator 中的嵌入式 [rancher/helm-locker](https://github.com/rancher/helm-locker) 管理）：此自定义资源会自动锁定已部署的 Helm 版本并自动覆盖对底层资源的更新，除非更改是 Helm 操作导致的（`helm install`、`helm upgrade` 或 `helm uninstall` 由 HelmChart CR 执行）。

:::note

HelmRelease CR 会发出 Kubernetes 事件，用于检测底层 Helm 版本修改并将其锁定回原位。要查看这些事件，你可以使用 `kubectl describe helmrelease <helm-release-name> -n <operator/system-namespace>`。你还可以查看此 Operator 的日志，了解检测到更改的时间以及哪些资源被尝试更改。

:::

这两种资源都是为 Operator / System 命名空间中的所有 Helm Chart 创建的，用于避免低权限用户的权限升级。

### 高级 Helm Project Operator 配置

有关高级配置的更多信息，请参阅[此页面](https://github.com/rancher/prometheus-federator/blob/main/charts/prometheus-federator/README.md#advanced-helm-project-operator-configuration)。

<!--
|Value|Configuration|
|---|---------------------------|
|`helmProjectOperator.valuesOverride`| Allows an Operator to override values that are set on each ProjectHelmChart deployment on an operator-level; user-provided options (specified on the `spec.values` of the ProjectHelmChart) are automatically overridden if operator-level values are provided. For an example, see how the default value overrides `federate.targets`. Note: When overriding list values like `federate.targets`, user-provided list values will **not** be concatenated. |
|`helmProjectOperator.projectReleaseNamespaces.labelValues`| The value of the Project that all Project Release Namespaces should be auto-imported into via label and annotation. Not recommended to be overridden on a Rancher setup. |
|`helmProjectOperator.otherSystemProjectLabelValues`| Other namespaces that the operator should treat as a system namespace that should not be monitored. By default, all namespaces that match `global.cattle.systemProjectId` will not be matched. `cattle-monitoring-system`, `cattle-dashboards`, and `kube-system` are explicitly marked as system namespaces as well, regardless of label or annotation. |
|`helmProjectOperator.releaseRoleBindings.aggregate`| Whether to automatically create RBAC resources in Project Release namespaces.
|`helmProjectOperator.releaseRoleBindings.clusterRoleRefs.<admin\|edit\|view>`| ClusterRoles to reference to discover subjects to create RoleBindings for in the Project Release Namespace for all corresponding Project Release Roles. See RBAC above for more information. |
|`helmProjectOperator.hardenedNamespaces.enabled`| Whether to automatically patch the default ServiceAccount with `automountServiceAccountToken: false` and create a default NetworkPolicy in all managed namespaces in the cluster; the default values ensure that the creation of the namespace does not break a CIS 1.16 hardened scan. |
|`helmProjectOperator.hardenedNamespaces.configuration`| The configuration to be supplied to the default ServiceAccount or auto-generated NetworkPolicy on managing a namespace. |
-->

### Local 集群上的 Prometheus Federator

Prometheus Federator 是一个资源密集型应用程序。你可以将其安装到 Local 集群（**不推荐**）。