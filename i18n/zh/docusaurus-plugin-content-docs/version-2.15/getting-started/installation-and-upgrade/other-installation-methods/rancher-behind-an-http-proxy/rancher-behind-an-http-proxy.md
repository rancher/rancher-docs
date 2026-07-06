---
title: 使用 HTTP 代理安装 Rancher
---

很多企业本地运行的服务器或虚拟机不能直接访问互联网，但是出于安全考虑，他们必须通过 HTTP(S) 代理连接到外部服务。本教程将分步介绍如何在这样的环境中进行高可用的 Rancher 安装。

另外，用户也可以在没有任何互联网访问的情况下离线设置 Rancher。详情请参见 [Rancher 官方文档](../air-gapped-helm-cli-install/air-gapped-helm-cli-install.md)。

## 安装概要

1. [配置基础设施](set-up-infrastructure.md)
2. [配置 Kubernetes 集群](install-kubernetes.md)
3. [安装 Rancher](install-rancher.md)
