---
title: Resources
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources"/>
</head>

### Docker Installations

The [single-node Docker installation](../other-installation-methods/rancher-on-a-single-node-with-docker/rancher-on-a-single-node-with-docker.md) is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster using Helm, you install the Rancher server component on a single node using a `docker run` command.

Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server.

### Air Gapped Installations

Follow [these steps](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md) to install the Rancher server in an air gapped environment.

An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.

### Advanced Options

When installing Rancher, there are several advanced options that can be enabled during installation. Within each install guide, these options are presented. Learn more about these options:

| Advanced Option                                                                                                         | Available as of |
| ----------------------------------------------------------------------------------------------------------------------- | --------------- |
| [Custom CA Certificate](custom-ca-root-certificates.md)                 | v2.0.0          |
| [API Audit Log](../advanced-options/advanced-use-cases/enable-api-audit-log.md)                                      | v2.0.0          |
| [TLS Settings](../../../reference-guides/installation-references/tls-settings.md)                                        | v2.1.7          |
| [etcd configuration](../advanced-options/advanced-use-cases/tune-etcd-for-large-installs.md)                                          | v2.2.0          |
| [Local System Charts for Air Gap Installations](local-system-charts.md) | v2.3.0          |
