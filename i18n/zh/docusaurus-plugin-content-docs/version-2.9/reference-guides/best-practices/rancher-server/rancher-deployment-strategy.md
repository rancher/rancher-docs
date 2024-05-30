---
title: Rancher 部署策略
---

本文提供 Rancher 实例的两种部署策略，用于管理下游 Kubernetes 集群。每种策略都有优缺点。请按照你的实际情况选择最适合的部署策略。

## 中心辐射型策略
---

在中心辐射型部署中，一个 Rancher 实例就可以管理遍布全球的 Kubernetes 集群。Rancher 实例运行在高可用 Kubernetes 集群上，并且会受延迟影响。

### 优点

* 可以通过一个 controlplane 界面查看所有区域和环境。
* Kubernetes 不需要 Rancher 进行操作，并且可以容忍与 Rancher 实例断开连接。

### 缺点

* 受限于网络延迟。
* 如果 Rancher 出现故障，在恢复之前不可以在全球范围内创建新服务。但是每个 Kubernetes 集群都可以继续单独管理。

## 区域型策略
---
在区域型部署模型中，Rancher 实例部署在靠近下游 Kubernetes 集群的位置。

### 优点

* 如果某个区域的 Rancher 实例出现故障，其他区域内的 Rancher 功能仍然可以保持正常。
* Rancher 和下游集群之间的网络延迟大大降低，提高了 Rancher 的性能。
* 你可以在每个区域内独立升级 Rancher。

### 缺点

* 管理多个 Rancher 安装的开销较大。
* 需要在多个界面中查看不同区域的 Kubernetes 集群。
* 在 Rancher 中部署多集群应用时，需要在每个 Rancher Server 中重复部署步骤。
