---
title: Installing Docker
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements/install-docker"/>
</head>

Docker is required to be installed on nodes where the Rancher server will be installed with Helm on an RKE cluster or with Docker. Docker is not required for RKE2 or K3s clusters.

There are a couple of options for installing Docker. One option is to refer to the [official Docker documentation](https://docs.docker.com/install/) about how to install Docker on Linux. The steps will vary based on the Linux distribution.

Another option is to use one of Rancher's Docker installation scripts, which are available for most recent versions of Docker.

For example, this command could be used to install Docker 20.10 on Ubuntu:

```
curl https://releases.rancher.com/install-docker/20.10.sh | sh
```

Rancher has installation scripts for every version of upstream Docker that Kubernetes supports. To find out whether a script is available for installing a certain Docker version, refer to this [GitHub repository,](https://github.com/rancher/install-docker) which contains all of Rancher's Docker installation scripts.

Note that the following sysctl setting must be applied:

```
net.bridge.bridge-nf-call-iptables=1
```
