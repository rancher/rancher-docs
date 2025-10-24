---
title: Kubernetes 组件
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/troubleshooting/kubernetes-components"/>
</head>

本文列出的命令和步骤适用于 [Rancher 启动的 Kubernetes](../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) 集群上的核心 Kubernetes 组件。

本文包括以下类别的故障排除提示：

- [etcd 节点故障排除](troubleshooting-etcd-nodes.md)
- [Controlplane 节点故障排除](troubleshooting-controlplane-nodes.md)
- [nginx-proxy 节点故障排除](troubleshooting-nginx-proxy.md)
- [Worker 节点和通用组件故障排除](troubleshooting-worker-nodes-and-generic-components.md)

## Kubernetes 组件图

![集群图](/img/clusterdiagram.svg)<br/>
<sup>线条表示组件之间的通信。而颜色纯粹用于视觉辅助。</sup>