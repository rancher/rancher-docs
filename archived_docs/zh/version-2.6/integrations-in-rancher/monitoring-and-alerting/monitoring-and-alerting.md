---
title: 监控和告警
description: Prometheus 允许你查看来自不同 Rancher 和 Kubernetes 对象的指标。了解监控范围以及如何启用集群监控
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/monitoring-and-alerting"/>
</head>

你可以使用 `rancher-monitoring` 应用，将业界领先的开源监控和告警解决方案快速部署到你的集群中。

### 功能

Prometheus 支持查看 Rancher 和 Kubernetes 对象的指标。通过使用时间戳，Prometheus 能让你通过 Rancher UI 或 Grafana（与 Prometheus 一起部署的分析查看平台）以更容易阅读的图表和视觉形式来查询和查看这些指标。

通过查看 Prometheus 从集群的 controlplane、节点和 deployment 中抓取的数据，你可以随时了解集群中发生的所有事件。然后，你可以使用这些分析来更好地运行你的环境，例如在系统紧急情况发生之前阻止它们、制定维护策略，或恢复崩溃的服务器。

Rancher v2.5 的 `rancher-monitoring` operator 由 [Prometheus](https://prometheus.io/)，[Grafana](https://grafana.com/grafana/)，[Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/)，[Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) 和 [Prometheus adapter](https://github.com/DirectXMan12/k8s-prometheus-adapter) 组成。

Monitoring 应用：

- 监控集群节点、Kubernetes 组件和软件部署的状态和进程。
- 根据 Prometheus 收集的指标定义告警。
- 创建自定义 Grafana 仪表板。
- 使用 Prometheus Alertmanager 通过电子邮件、Slack、PagerDuty 等配置告警通知。
- 根据 Prometheus 收集的指标，将预先计算的、经常需要的，或计算成本高的表达式定义为新的时间序列。
- 通过 Prometheus Adapter，将从 Prometheus 收集的指标公开给 Kubernetes Custom Metrics API，以便在 HPA 中使用。

## Monitoring 工作原理

有关监控组件如何协同工作的说明，请参阅 [Monitoring 工作原理](how-monitoring-works.md)。

## 默认组件和部署

### 内置仪表板

默认情况下，监控应用将 Grafana 仪表板（由 [kube-prometheus](https://github.com/prometheus-operator/kube-prometheus) 项目策划）部署到集群上。

它还部署一个 Alertmanager UI 和一个 Prometheus UI。有关这些工具的更多信息，请参见[内置仪表板](built-in-dashboards.md)。

### 默认指标 Exporter

默认情况下，Rancher Monitoring 会部署 Exporter（例如 [node-exporter](https://github.com/prometheus/node_exporter) 和 [kube-state-metrics](https://github.com/kubernetes/kube-state-metrics)）。

这些默认 Exporter 会自动从 Kubernetes 集群的所有组件（包括工作负载）中抓取 CPU 和内存的指标。

### 默认告警

Monitoring 应用会默认部署一些告警。要查看默认告警，请转到 [Alertmanager UI](built-in-dashboards.md#alertmanager-ui) 并单击**展开所有组**。

### Rancher UI 中公开的组件

有关 Rancher UI 中公开的监控组件列表，以及编辑它们的常见用例，请参阅[本节](how-monitoring-works.md#rancher-ui-中公开的组件)。

## RBAC

有关配置 monitoring 访问权限的信息，请参阅[此页面](rbac-for-monitoring.md)。


## 指南

- [启用 monitoring](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md)
- [卸载 monitoring](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md)
- [Monitoring 工作负载](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md)
- [自定义 Grafana 仪表板](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md)
- [持久化 Grafana 仪表板](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md)
- [调试高内存使用率](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md)
- [迁移 Monitoring V1 到 V2](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring.md)

## 配置

### 在 Rancher 中配置 Monitoring 资源

此处的配置参考假设你已经熟悉 monitoring 组件的协同工作方式。如需更多信息，请参阅 [monitoring 的工作原理](how-monitoring-works.md)。

- [ServiceMonitor 和 PodMonitor](../../reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md)
- [接收器](../../reference-guides/monitoring-v2-configuration/receivers.md)
- [路由](../../reference-guides/monitoring-v2-configuration/routes.md)
- [PrometheusRule](../../how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md)
- [Prometheus](../../how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md)
- [Alertmanager](../../how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md)

### 配置 Helm Chart 选项

有关 `rancher-monitoring` Chart 选项的更多信息，包括设置资源限制和请求的选项，请参阅 [Helm Chart 选项](../../reference-guides/monitoring-v2-configuration/helm-chart-options.md)。

## Windows 集群支持

如果 Monitoring 部署到 RKE1 Windows 集群，Monitoring V2 将自动部署 [windows-exporter](https://github.com/prometheus-community/windows_exporter) DaemonSet 并设置 ServiceMonitor，以从每个部署的 Pod 中收集指标。这将使用 `windows_` 指标填充 Prometheus，这些指标与 [node_exporter](https://github.com/prometheus/node_exporter) 为 Linux 主机导出的 `node_` 指标类似。

为了能够为 Windows 完全部署 Monitoring V2，你的所有 Windows 主机都必须至少具有 v0.1.0 的 [wins](https://github.com/rancher/wins) 版本。

有关如何在现有 Windows 主机上升级 wins 版本的更多信息，请参阅 [Windows 集群对 Monitoring V2 的支持](windows-support.md)。


## 已知问题

有一个[已知问题](https://github.com/rancher/rancher/issues/28787#issuecomment-693611821)，即 K3s 集群需要的内存超过分配的默认内存。如果你在 K3s 集群上启用 Monitoring，将 `prometheus.prometheusSpec.resources.memory.limit` 设置为 2500 Mi，并将 `prometheus.prometheusSpec.resources.memory.request` 设置为 1750 Mi。

如需获取意见和建议，请参阅[调试高内存使用情况](../../how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md)。