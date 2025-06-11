---
title: Helm 版本要求
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/resources/helm-version-requirements"/>
</head>

本文介绍 Helm 的要求。Helm 是用于把 Rancher 安装在高可用 Kubernetes 集群上的工具。

> 我们已针对 Helm 3 更新了安装指南。如果你使用 Helm 2 进行安装，请参见 [Helm 2 迁移到 Helm 3 文档](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/)。[本文](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm2.md)提供了较早的使用 Helm 2 的 Rancher 高可用安装指南的副本。如果你如果无法升级到 Helm 3，可以使用这个说明安装。

<DeprecationHelm2 />

- 如需安装或升级 Rancher 2.5，请使用 Helm 3.2.x 或更高版本。
- Kubernetes 1.16 要求 Helm 2.16.0 或更高版本。如果使用的是默认 Kubernetes 版本，请参见[发行说明](https://github.com/rancher/rke/releases)获取所使用的 RKE 版本。
- 请不要使用 Helm 2.15.0，因为这个版本有转换/比较数字的问题。
- 请不要使用 Helm 2.12.0，因为该版本有 `cert-manager` 的兼容问题。
