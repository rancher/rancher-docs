---
title: 安装和配置 kubectl
---

`kubectl` 是一个 CLI 工具，用于运行 Kubernetes 集群相关的命令。Rancher 2.x 中的许多维护和管理任务都需要它。

## 安装

请参阅 [kubectl 安装](https://kubernetes.io/docs/tasks/tools/install-kubectl/)将 kubectl 安装到你的操作系统上。

## 配置

When you create a Kubernetes cluster with RKE2/K3s, the Kubeconfig file is stored at `/etc/rancher/rke2/rke2.yaml` or `/etc/rancher/k3s/k3s.yaml` depending on your chosen distribution. These files are used to configure access to the Kubernetes cluster.

使用 `kubectl` 测试你的连接性，并查看你是否可以获取节点列表：

```shell
kubectl get nodes
 NAME                          STATUS    ROLES                      AGE       VERSION
165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.10.1
165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.10.1
165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.10.1
```
