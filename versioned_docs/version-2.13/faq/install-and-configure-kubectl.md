---
title: Installing and Configuring kubectl
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/install-and-configure-kubectl"/>
</head>

`kubectl` is a CLI utility for running commands against Kubernetes clusters. It's required for many maintenance and administrative tasks in Rancher 2.x.

## Installation

See [kubectl Installation](https://kubernetes.io/docs/tasks/tools/install-kubectl/) for installation on your operating system.

## Configuration

When you create a Kubernetes cluster with RKE2/K3s, the Kubeconfig file is stored at `/etc/rancher/rke2/rke2.yaml` or `/etc/rancher/k3s/k3s.yaml` depending on your chosen distribution. These files are used to configure access to the Kubernetes cluster.

Test your connectivity with `kubectl` and see if you can get the list of nodes back.

```shell
kubectl get nodes
 NAME                          STATUS    ROLES                      AGE       VERSION
165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.10.1
165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.10.1
165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.10.1
```
