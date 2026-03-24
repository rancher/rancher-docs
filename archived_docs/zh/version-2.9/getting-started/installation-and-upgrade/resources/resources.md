---
title: 资源
---

### Docker 安装

[单节点 Docker 安装](../other-installation-methods/rancher-on-a-single-node-with-docker/rancher-on-a-single-node-with-docker.md)适用于想要测试 Rancher 的用户。你无需使用 Helm 在 Kubernetes 集群上运行 Rancher，你可以使用 `docker run` 命令，把 Rancher Server 组件安装到单个节点上。

由于只有一个节点和一个 Docker 容器，因此，如果该节点发生故障，由于其他节点上没有可用的 etcd 数据副本，你将丢失 Rancher Server 的所有数据。

### 离线安装

按照[以下步骤](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md)在离线环境中安装 Rancher Server。

离线环境可以是 Rancher Server 离线安装、防火墙后面或代理后面。

### 高级选项

安装 Rancher 时，有如下几个可开启的高级选项：每个安装指南中都提供了对应的选项。了解选项详情：

- [自定义 CA 证书](custom-ca-root-certificates.md)
- [API 审计日志](../../../how-to-guides/advanced-user-guides/enable-api-audit-log.md)
- [TLS 设置](../installation-references/tls-settings.md)
- [etcd 配置](../../../how-to-guides/advanced-user-guides/tune-etcd-for-large-installs.md)
- [离线安装 Local System Chart](local-system-charts.md)
