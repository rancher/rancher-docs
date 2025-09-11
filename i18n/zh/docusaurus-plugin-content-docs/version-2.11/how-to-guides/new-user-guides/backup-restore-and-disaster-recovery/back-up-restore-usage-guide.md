---
title: 备份恢复使用指南
---

Rancher Backups Chart 是我们的灾难恢复和迁移解决方案。此 Chart 用于备份 Kubernetes 资源并将其保存到各种持久存储位置。

这个 Chart 是一个非常简单的工具，适用于 Rancher 生态系统的许多不同领域。但是，也因此出现了未记录功能的边缘用例。本文档旨在强调 Rancher Backups 正确的用法，并讨论我们遇到的一些边缘情况。

## 功能概述

### 备份

该 Operator 将 Chart 中的 resourceSet 捕获的所有资源收集为内存中的非结构化对象。收集资源后，资源的 tar 包将保存为 JSON 格式的清单集合，然后上传到用户定义的对象存储。该备份可以按重复计划进行，也可以进行加密。由于某些资源是敏感的，并且值以未加密的明文形式存储，因此此加密选项很重要。

有关配置备份的选项（包括加密），请参阅[备份配置文档](../../../reference-guides/backup-restore-configuration/backup-configuration.md)。

:::note

如[备份 Rancher 文档](./back-up-rancher.md)所述，你必须手动保存加密配置文件的内容，因为 Operator **不会**备份它。

:::

### 还原

有两种主要的还原场景：还原正在运行 Rancher 的集群以及还原新集群。只有将备份还原到该备份的源集群，且在还原过程中启用了 [`prune` 选项](../../../reference-guides/backup-restore-configuration/restore-configuration.md#还原过程中修剪)时，你才能还原正在运行 Rancher 的集群。还原具有与备份类似的输入。它需要备份文件名、encryptionConfigSecret 名称和存储位置。

资源按以下顺序还原：

1. 自定义资源定义（CRD）
2. 集群范围资源
3. 命名空间资源

有关配置还原的选项，请参阅[还原配置文档](../../../reference-guides/backup-restore-configuration/restore-configuration.md)。

### 资源集

ResourceSet 确定了 backup-restore-operator 在备份中收集哪些资源。它是一组 ResourceSelector，使用键/值对匹配、正则表达式匹配或 Kubernetes 客户端 labelSelector 来定义选择要求。

以下是可用于 resourceSelector 的字段：

- apiVersion
- excludeKinds
- excludeResourceNameRegexp
- kinds
- kindsRegexp
- labelSelectors
- namespaceRegexp
- namespaces
- resourceNameRegexp
- resourceNames

Rancher Backups Chart 包含了一个[默认 resourceSet](https://github.com/rancher/backup-restore-operator/tree/release/v3.0/charts/rancher-backup/files/default-resourceset-contents)，它是安装 Chart 时附加到一个大型 resourceSet 的 YAML 文件组合。文件顺序并不重要。不同版本的 resourceSet 可能有所不同。

:::caution

如果你希望编辑 resourceSet，请在安装 Chart 之前进行**编辑**。

:::

## 正确使用

本节概述了如何根据用例正确使用 Rancher Backups Chart。

### 所有案例

- Rancher Backups 必须安装在 local 集群上。
   - 注意：Rancher Backups 只会处理安装了它的集群。它可能会还原 local 集群上的集群资源，但不会联系或备份下游集群。
- 要还原的 Rancher 版本必须与备份中的 Rancher 版本匹配。
- 由于你可能需要还原已过时的资源（要还原的 Kubernetes 版本已弃用的资源），因此你需要考虑 Kubernetes 版本。

### 备份

- 用户生成的某些资源不会被备份，除非这些资源可以被默认 resourceSet 捕获，或者 resourceSet 已被更改为捕获这些资源。
   - 我们提供了一个 `resources.cattle.io/backup:true` 标签，将该标签添加到任何命名空间中的 Secret 时，命名空间将被备份。
- 备份是不可改变的
- 仅备份 local 集群

### 还原

- 还原是指将备份还原到原来的集群。可以在安装了 Rancher 的情况下进行（**必须启用 prune**），也可以在未安装 Rancher 的情况下进行（无特殊说明）。
- 还原时需要注意的一件事是，你可能需要“擦除”集群中的所有 Rancher 资源。你可以通过将 [Rancher cleanup script](https://github.com/rancher/rancher-cleanup) 脚本作为 job 部署到集群来完成这点。这样，你可以再次安装 Rancher Backups 并还原到全新的集群。
   - 确保使用了 kubectl 来部署脚本。

### 迁移

由于我们要还原到不同的集群，因此对应的迁移有一些细微差别。以下是需要记住但又容易被忘记的事情。

- 迁移时 Rancher 域必须相同。换言之，你旧集群的域名现在必须指向新集群。
- Rancher **不应该**已运行在你要迁移到的集群，这可能会导致 Rancher 备份和某些 Rancher 服务出现许多问题。
- **还原备份后**，安装与备份**相同**的 Rancher 版本。
- 在其他 Kubernetes 版本上配置新集群可能会出现各种不受支持的情况，这是因为可用的 Kubernetes API 可能与你备份的 API 不同。这可能会导致已弃用的资源被恢复，从而导致问题。
- 在迁移期间**不要**执行任何升级操作。

## 边缘案例和不当使用

以下是 Rancher Backups 的一些**不当**使用示例。

### 升级

- 使用 Rancher Backups 来升级 Rancher 版本不是一个有效用法。推荐的做法是：先备份当前版本，然后按照[说明](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md)升级你的 Rancher 实例，在升级完成后再进行**另一个**备份。这样，如果升级失败，你就有一个可以用来还原的备份，而第二个备份将能用于还原到升级后的 Rancher 版本。
- 使用 Rancher Backups 来升级 Kubernetes 版本也不是一个有效用法。由于 Kubernetes API 以及可用资源与版本相关，因此使用备份还原的方法来进行升级可能会导致资源集不对齐的问题，这些资源可能已被弃用、不受支持或已更新。升级集群版本的方式取决于其配置方式，但建议使用上述的流程（备份、升级、备份）。

### ResourceSet

- 由于不同团队的资源和服务会不断发展，开发人员应要注意是否需要向默认 resourceSet 添加或删除新资源。
- Rancher Backups 仅备份默认 resourceSet 捕获的内容（除非进行编辑）。我们为用户创建的 Secret 添加了特定标签，无论 Secret 的名称是什么，无论它属于哪个命名空间，具有该标签 Secret 都会被备份（请参阅[备份的正确用法](#备份)）。

### 下游集群

- Rancher Backups **仅**备份 local 集群上的 Kubernetes 资源。换言之，除了存在于 local 集群中的资源，下游集群**不会**被触及或备份。下游集群的更新和通信由 rancher-agent 和 rancher-webhook 负责。

### 还原已删除的资源

- 有些资源会产生外部结果，例如会配置下游集群。删除下游集群并还原 local 集群上的集群资源**不会**导致 Rancher 重新配置所述集群。某些资源可能无法通过还原回到可用状态。
- “还原已删除的集群”**不是**受支持的功能。涉及下游集群时，无论集群是配置的还是导入的，删除集群都会执行一系列清理任务，导致我们无法还原已删除的集群。配置的集群节点以及与 Rancher 相关的配置资源将被销毁，而导入的集群的 Rancher Agent 以及与 local 集群注册相关的其他资源/服务可能会被销毁。

:::caution

尝试删除和还原下游集群可能会导致 Rancher、Rancher Backups、rancher-webhook、Fleet 等出现各种问题。因此，我们不建议你这样做。

:::

### Fleet、Harvester 和其他服务

由 Rancher Backups 支持的其他服务会经常发生变化和发展。发生这种情况时，他们的资源和备份需求也可能会发生变化。有些资源可能根本不需要备份。团队需要在开发过程中考虑这一点，并评估相关 resourceSet 是否能正确捕获正确的资源集来还原其服务。

## 结论

Rancher Backups 是一个非常有用的工具，但它的使用范围和使用目的有限的。为了避免出现问题，请遵循本文所述的流程来确保 Chart 能正确运作。
