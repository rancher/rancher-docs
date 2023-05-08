---
title: Azure 节点模板配置
---

有关 Azure 的更多信息，请参阅官方 [Azure 文档](https://docs.microsoft.com/en-us/azure/?product=featured)。

账户访问信息存储在云凭证中。云凭证存储在 Kubernetes 密文中。多个节点模板可以使用相同的云凭证。你可以使用现有的云凭证或创建新的凭证。

- **Placement** 设置托管集群的地理区域以及其他位置元数据。
- **Network** 配置集群中使用的网络。
- **Instance** 自定义你的 VM 配置。

  :::note

  如果在与 VM 不同的资源组中使用 VNet，则 VNet 名称需要以资源组名称作为前缀。例如，`<resource group>:<vnet>`。

  :::

[Docker daemon](https://docs.docker.com/engine/docker-overview/#the-docker-daemon) 配置选项包括：

- **标签**：有关标签的信息，请参阅 [Docker 对象标签文档](https://docs.docker.com/config/labels-custom-metadata/)。
- **Docker 引擎安装 URL**：确定要在实例上安装的 Docker 版本。

  :::note

  如果要配置 Red Hat Enterprise Linux (RHEL) 或 CentOS 节点，请将 **Docker Install URL** 字段保留为默认值，或选择 **none**。由于 Docker 已经安装在这些节点上，因此将绕过 Docker 安装检查。

  如果没有将 **Docker Install URL** 设置为默认值或 **none**，你可能会看到错误消息：`Error creating machine: RHEL ssh command error: command: sudo -E yum install -y curl err: exit status 1 output: Updating Subscription Management repositories`。

  :::

- **镜像仓库 mirror**：Docker daemon 使用的 Docker 镜像仓库镜像。
- **其他高级选项**：参见 [Docker daemon 选项参考](https://docs.docker.com/engine/reference/commandline/dockerd/)。