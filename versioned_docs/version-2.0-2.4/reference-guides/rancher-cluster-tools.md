---
title: Tools for Logging, Monitoring, and More
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-cluster-tools"/>
</head>

Rancher contains a variety of tools that aren't included in Kubernetes to assist in your DevOps operations. Rancher can integrate with external services to help your clusters run more efficiently.


## Logging

Logging is helpful because it allows you to:

- Capture and analyze the state of your cluster
- Look for trends in your environment
- Save your logs to a safe location outside of your cluster
- Stay informed of events like a container crashing, a pod eviction, or a node dying
- More easily debug and troubleshoot problems

Rancher can integrate with Elasticsearch, splunk, kafka, syslog, and fluentd.

Refer to the logging documentation [here.](../explanations/integrations-in-rancher/cluster-logging/cluster-logging.md)

## Monitoring

Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with [Prometheus](https://prometheus.io/), a leading open-source monitoring solution.

For details, refer to [Monitoring.](../explanations/integrations-in-rancher/cluster-monitoring/cluster-monitoring.md)

## Alerts

After monitoring is enabled, you can set up alerts and notifiers that provide the mechanism to receive them.

Alerts are rules that trigger notifications. Before you can receive alerts, you must configure one or more notifier in Rancher. The scope for alerts can be set at either the cluster or project level.

For details, refer to [Alerts.](../explanations/integrations-in-rancher/cluster-alerts/cluster-alerts.md)

## Notifiers

Notifiers are services that inform you of alert events. You can configure notifiers to send alert notifications to staff best suited to take corrective action. Notifications can be sent with Slack, email, PagerDuty, WeChat, and webhooks.

For details, refer to [Notifiers.](../explanations/integrations-in-rancher/notifiers.md)

## Istio

_Available as of v2.3_

[Istio](https://istio.io/) is an open-source tool that makes it easier for DevOps teams to observe, control, troubleshoot, and secure the traffic within a complex network of microservices.

Refer to the Istio documentation [here.](../explanations/integrations-in-rancher/istio/istio.md)

## OPA Gatekeeper

[OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper) is an open-source project that provides integration between OPA and Kubernetes to provide policy control via admission controller webhooks. For details on how to enable Gatekeeper in Rancher, refer to the [OPA Gatekeeper section.](../explanations/integrations-in-rancher/opa-gatekeeper.md)

## CIS Scans

Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark.

Refer to the CIS scan documentation [here.](../explanations/integrations-in-rancher/cis-scans/cis-scans.md)