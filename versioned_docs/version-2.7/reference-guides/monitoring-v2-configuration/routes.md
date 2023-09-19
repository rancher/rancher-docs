---
title: Route Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/monitoring-v2-configuration/routes"/>
</head>

The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver.

When a Route is changed, the Prometheus Operator regenerates the Alertmanager custom resource to reflect the changes.

For more information about configuring routes, refer to the [official Alertmanager documentation.](https://www.prometheus.io/docs/alerting/latest/configuration/#route)

:::note

This section assumes familiarity with how monitoring components work together. For more information, see [this section.](../../integrations-in-rancher/monitoring-and-alerting/how-monitoring-works.md)

:::



## Route Restrictions

Alertmanager proxies alerts for Prometheus based on its receivers and a routing tree that filters alerts to certain receivers based on labels.

Alerting drivers proxy alerts for Alertmanager to non-native receivers, such as Microsoft Teams and SMS.

In the Rancher UI for configuring routes and receivers, you can configure routing trees with one root and then a depth of one more level, for a tree with a depth of two. But if you use a `continue` route when configuring Alertmanager directly, you can make the tree deeper.

Each receiver is for one or more notification providers. So if you know that every alert for Slack should also go to PagerDuty, you can configure both in the same receiver.

## Route Configuration

### Note on Labels and Annotations

Labels should be used for identifying information that can affect the routing of notifications. Identifying information about the alert could consist of a container name, or the name of the team that should be notified.

Annotations should be used for information that does not affect who receives the alert, such as a runbook url or error message.


### Receiver
The route needs to refer to a [receiver](./receivers.md) that has already been configured.

### Grouping

| Field |    Default | Description |
|-------|--------------|---------|
| Group By |  N/a | List of labels to group by. Labels must be unique. Special label "..." (aggregate by all possible labels), if provided, must be the only element in the list. Accepts a list of strings. See the [upstream documentation](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#route) for details. |
| Group Wait | 30s | How long to wait to buffer alerts of the same group before sending initially. |
| Group Interval | 5m | How long to wait before sending an alert that has been added to a group of alerts for which an initial notification has already been sent. |
| Repeat Interval |  4h | How long to wait before re-sending a given alert that has already been sent. |

### Matching

The **Match** field refers to a set of equality matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs to the Rancher UI, they correspond to the YAML in this format:

```yaml
match:
  [ <labelname>: <labelvalue>, ... ]
```

The **Match Regex** field refers to a set of regex-matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs in the Rancher UI, they correspond to the YAML in this format:

```yaml
match_re:
  [ <labelname>: <regex>, ... ]
```
