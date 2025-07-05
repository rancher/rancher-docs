---
title: 离线安装中设置本地 System Charts
---

[Charts](https://github.com/rancher/charts) 仓库包含 Monitoring、Logging、告警和 Istio 等功能所需的所有 Helm 目录项。

在 Rancher 的离线安装中，你需要配置 Rancher 以使用 System Charts 的本地副本。本节介绍如何通过 CLI 标志使用本地 System Charts。

## 使用本地 System Charts

`system-charts` 的一个本地副本已经打包到 `rancher/rancher` 容器中。为了在离线安装中使用这些功能，你需要使用额外的环境变量 `CATTLE_SYSTEM_CATALOG=bundled` 来运行 Rancher 安装命令，该环境变量告诉 Rancher 使用 Chart 的本地副本，而不是尝试从 GitHub 获取 Chart。

带有 `system-charts` 的 Rancher 安装命令示例包含在 Docker 和 Helm 的[离线安装说明](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md)中。
