---
title: Logging Architecture
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/logging/logging-architecture"/>
</head>

This section summarizes the architecture of the Rancher logging application.

For more details about how the Logging operator works, see the [official documentation.](https://kube-logging.github.io/docs/#architecture)

## How the Logging Operator Works

The Logging operator automates the deployment and configuration of a Kubernetes logging pipeline. It deploys and configures a Fluent Bit DaemonSet on every node to collect container and application logs from the node file system.

Fluent Bit queries the Kubernetes API and enriches the logs with metadata about the pods, and transfers both the logs and the metadata to Fluentd. Fluentd receives, filters, and transfers logs to multiple `Outputs`.

The following custom resources are used to define how logs are filtered and sent to their `Outputs`:

- A `Flow` is a namespaced custom resource that uses filters and selectors to route log messages to the appropriate `Outputs`.
- A `ClusterFlow` is used to route cluster-level log messages.
- An `Output` is a namespaced resource that defines where the log messages are sent.
- A `ClusterOutput` defines an `Output` that is available from all `Flows` and `ClusterFlows`.

Each `Flow` must reference an `Output`, and each `ClusterFlow` must reference a `ClusterOutput`.

The following figure from the [Logging Operator documentation](https://kube-logging.github.io/docs/#architecture) shows the new logging architecture:

<figcaption>How the Logging Operator Works with Fluentd and Fluent Bit</figcaption>

![How the Logging Operator Works with Fluentd](/img/banzai-cloud-logging-operator.png)
