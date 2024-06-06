---
title: 使用 Feet 进行持续交付
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/fleet-gitops-at-scale"/>
</head>

使用 Fleet 进行持续交付是大规模的 GitOps。Fleet 旨在管理多达一百万个集群。它也足够轻量级，对于[单个集群](https://fleet.rancher.io/installation#default-install)也很有效，但当你达到[大规模](https://fleet.rancher.io/installation#configuration-for-multi-cluster)时，它真的会大放异彩。大规模是指单个组织中的大量集群、大量部署或大量团队。

Fleet 是 Rancher 的一个独立项目，可以通过 Helm 安装在任何 Kubernetes 集群上。

## 架构

有关 Fleet 如何运作的信息，请参阅[此处](./fleet-gitops-at-scale/architecture)。

## 在 Rancher UI 中访问 Fleet

Fleet 预安装在 Rancher 中，并由 Rancher UI 中的**持续交付**选项进行管理。有关持续交付和其他 Fleet 故障排除技巧的更多信息，请参阅[此处](https://fleet.rancher.io/troubleshooting)。

用户可以按照 **gitops** 实践，利用持续交付将应用程序部署到 git 仓库中的 Kubernetes 集群，而无需任何手动操作。

按照以下步骤在 Rancher UI 中访问持续交付：

1. 单击 **☰ > 持续交付**。

1. 在菜单顶部选择命名空间 ，注意以下事项：

   - 默认情况下，选择 **fleet-default**，包括通过 Rancher 注册的所有下游集群。

   - 你可以切换到 **fleet-local**，它仅包含 **local** 集群，或者你可以创建自己的工作空间，将集群分配和移动到其中。

   - 然后，你可以通过单击左侧导航栏上的**集群**来管理集群。

1. 单击左侧导航栏上的 **Gitrepos**，将 gitrepo 部署到当前工作空间的集群中。

1. 选择 [git 仓库](https://fleet.rancher.io/gitrepo-add)和[目标集群/集群组](https://fleet.rancher.io/gitrepo-targets)。你也可以通过单击左侧导航栏中的**集群组**在 UI 中创建集群组。

1. 部署 gitrepo 后，你可以通过 Rancher UI 监控应用程序。

## Windows 支持

有关对具有 Windows 节点的集群的支持的详细信息，请参阅[此页面](./fleet-gitops-at-scale/windows-support)。

## GitHub 仓库

Fleet Helm charts 可在[此处](https://github.com/rancher/fleet/releases/tag/v0.3.10)获取。

## 在代理后使用 Fleet

有关在代理后面使用 Fleet 的详细信息，请参阅[此页面](./fleet-gitops-at-scale/use-fleet-behind-a-proxy)。

## Helm Chart 依赖

为了成功部署具有依赖项的 Helm Chart，你必须运行一个手动命令（如下所示），因为用户需要满足依赖列表。如果不执行此操作，继续克隆你的仓库并运行 `helm install`，则会因依赖项丢失而导致安装失败。

git 仓库中的 Helm Chart 必须在 Chart 子目录中包含其依赖。 你必须手动运行 `helm dependencies update $chart` 或在本地运行 `helm dependencies build $chart`，然后将完整的 Chart 目录提交到 git 仓库。请注意，你需要使用适当的参数更新你的命令。

## 故障排除

- **已知问题**：Fleet gitrepos 的 clientSecretName 和 helmSecretName 密文不包含在 [backup-restore-operator](../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md#1-install-the-rancher-backup-operator) 创建的备份或恢复中。一旦有永久的解决方案，我们将更新社区内容。

- **临时解决方法**：默认情况下，用户定义的密文不会在 Fleet 中备份。如果执行灾难恢复或将 Rancher 迁移到新集群，则有必要重新创建密文。要修改 ResourceSet 以包含要备份的额外资源，请参阅文档[此处](https://github.com/rancher/backup-restore-operator#user-flow)。

## 文档

Fleet 文档位于 https://fleet.rancher.io/ 。
