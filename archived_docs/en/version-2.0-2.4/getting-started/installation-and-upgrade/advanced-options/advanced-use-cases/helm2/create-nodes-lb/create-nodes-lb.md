---
title: "1. Create Nodes and Load Balancer"
---

Use your provider of choice to provision 3 nodes and a Load Balancer endpoint for your RKE install.

> **Note:** These nodes must be in the same region/datacenter.  You may place these servers in separate availability zones.

### Node Requirements

View the supported operating systems and hardware/software/networking requirements for nodes running Rancher at [Node Requirements](../../../../installation-requirements/installation-requirements.md).

View the OS requirements for RKE at [RKE Requirements](https://rancher.com/docs/rke/latest/en/os/)

### Load Balancer

RKE will configure an Ingress controller pod, on each of your nodes. The Ingress controller pods are bound to ports TCP/80 and TCP/443 on the host network and are the entry point for HTTPS traffic to the Rancher server.

Configure a load balancer as a basic Layer 4 TCP forwarder. The exact configuration will vary depending on your environment.

>**Important:**
>Do not use this load balancer (i.e, the `local` cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the `local` cluster to Rancher and no other applications.

#### Examples

* [Nginx](nginx.md)
* [Amazon NLB](nlb.md)

### [Next: Install Kubernetes with RKE](../kubernetes-rke/kubernetes-rke.md)
