---
title: 项目工具：Logging，Monitoring 和可视化
---

Rancher 包含 Kubernetes 中未包含的各种工具来协助你进行 DevOps 操作。Rancher 可以与外部服务集成，让你的集群更高效地运行。


## Notifiers 和告警

通知器和告警是两个协同工作的功能，它们可以将 Rancher 系统中的事件告知你。在启用它们之前，你必须先安装监控应用。

通知器是通知你告警事件的服务。你可以通过配置通知器来向最适合采取纠正措施的员工发送告警通知。支持使用 Slack、电子邮件、PagerDuty、微信和 webhook 发送通知。

告警是触发这些通知的规则。在接收告警之前，你必须在 Rancher 中配置一个或多个通知器。你可以在集群或项目级别设置告警范围。

## Logging

Logging 支持：

- 获取和分析集群的状态
- 在你的环境中发现趋势
- 将日志保存到集群外部的安全位置
- 随时了解容器崩溃、pod 驱逐或节点死亡等事件
- 更轻松地调试和解决问题

Rancher 可以与 Elasticsearch、splunk、kafka、syslog 和 fluentd 集成。

有关详细信息，请参阅 [Logging](../integrations-in-rancher/logging/logging.md)。

## Monitoring

你可以使用 Rancher，通过业界领先并开源的 [Prometheus](https://prometheus.io/) 来监控集群节点、Kubernetes 组件和软件部署的状态和进程。有关详细信息，请参阅 [Monitoring](../integrations-in-rancher/monitoring-and-alerting/monitoring-and-alerting.md)。
