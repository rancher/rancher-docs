---
title: Other Installation Methods
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/pages-for-subheaders/other-installation-methods"/>
</head>

### Air Gapped Installations

Follow [these steps](air-gapped-helm-cli-install.md) to install the Rancher server in an air gapped environment.

An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.

### Docker Installations

The [single-node Docker installation](../rancher-on-a-single-node-with-docker/rancher-on-a-single-node-with-docker.md) is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster using Helm, you install the Rancher server component on a single node using a `docker run` command.

The Docker installation is for development and testing environments only.

Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server.

There is no migration path from a Docker installation to a high-availability installation. Therefore, you may want to use a Kubernetes installation from the start.