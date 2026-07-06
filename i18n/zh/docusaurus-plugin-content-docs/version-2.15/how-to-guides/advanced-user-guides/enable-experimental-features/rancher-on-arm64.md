---
title: "在 ARM64 上运行 Rancher（实验性）"
---

:::caution

在使用 ARM64 架构的节点上运行 Rancher 目前还处在实验阶段，Rancher 尚未正式支持该功能。因此，我们不建议你在生产环境中使用 ARM64 架构的节点。

:::

如果你的节点使用 ARM64 架构，你可以使用以下选项：

- 在 ARM64 架构的节点上运行 Rancher
   - 此选项仅适用于 Docker 安装。请知悉，以下安装命令取代了 [Docker 安装链接](../../../getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/rancher-on-a-single-node-with-docker.md)中的示例：

   ```
   # 在最后一行 `rancher/rancher:vX.Y.Z` 中，请务必将 "X.Y.Z" 替换为包含 ARM64 版本的发布版本。例如，如果你的匹配版本是 v2.5.8，请在此行填写 `rancher/rancher:v2.5.8`。
   docker run -d --restart=unless-stopped \
     -p 80:80 -p 443:443 \
     --privileged \
     rancher/rancher:vX.Y.Z
   ```

:::note

要检查你的发行版本是否与 ARM64 架构兼容，你可以使用以下两种方式找到对应版本的发行说明：

- 访问 [Rancher 发行版本](https://github.com/rancher/rancher/releases)自行查询。
- 根据标签和版本号直接找到你的版本。例如，你使用的版本为 2.5.8，你可以访问 [Rancher 发行版本 - 2.5.8](https://github.com/rancher/rancher/releases/tag/v2.5.8)。

:::

- 创建自定义集群并添加使用 ARM64 架构的节点
   - Kubernetes 集群必须为 1.12 或更高版本
   - CNI 网络插件必须是 [Flannel](../../../faq/container-network-interface-providers.md#flannel)
- 导入包含使用 ARM64 架构的节点的集群
   - Kubernetes 集群必须为 1.12 或更高版本

Depending on your cluster provisioning refer to [RKE2 cluster configuration options](../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) or [K3s cluster configuration options](../../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) for more information.

以下是未经测试的功能：

- Monitoring、告警、Notifiers、流水线和 Logging
- 通过应用商店发布应用
