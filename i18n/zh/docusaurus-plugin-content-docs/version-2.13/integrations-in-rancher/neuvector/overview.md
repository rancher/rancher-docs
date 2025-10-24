---
title: 概述
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/neuvector/overview"/>
</head>

## Rancher 中的 NeuVector 集成

[NeuVector 5.x](https://open-docs.neuvector.com/) 是一个开源的，以容器为中心的安全应用程序，Rancher 已集成 NeuVector。NeuVector 在运行时为关键应用程序和数据提供实时的合规、可见和保护功能。NeuVector 提供具有 CIS Benchmark 和漏洞扫描的防火墙、容器进程/文件系统监控和安全审计。有关 Rancher 安全性的更多信息，请参阅[安全文档](../../reference-guides/rancher-security)。

NeuVector 可以通过 Helm Chart 启用。你可以在 **Apps** 或 Rancher UI 中的 **Cluster Tools** 中安装该 Chart。安装 Helm Chart 后，用户可以轻松地[在 Rancher 中部署和管理 NeuVector 集群](https://open-docs.neuvector.com/deploying/rancher#deploy-and-manage-neuvector-through-rancher-apps-marketplace)。

## 使用 Rancher 安装 NeuVector

Harvester Helm Chart 用于管理 Rancher 中 NeuVector UI 的访问，用户可以在 Rancher 中直接跳转，然后部署和管理 NeuVector 集群。

**通过 Apps 导航并安装 NeuVector Chart：**

1. 单击 **☰ > 集群管理**。
1. 在 Clusters 页面上，转到要部署 NeuVector 的集群，然后单击 **Explore**。
1. 转到 **Apps > Charts**，然后从 Chart 仓库中安装 **NeuVector**。
1. 不同的集群类型需要不同的容器运行时。配置 Helm Chart 值时，转到**容器运行时**，然后根据集群类型选择运行时。最后，再次单击**安装**。

以下是一些例子：

- K3s 和 RKE2：`k3scontainerd`
- AKS：`containerd` 适用于 v1.19 及更高版本
- EKS：`docker` 适用于 v1.22 及以下版本；`containerd` 适用于 v1.23 及更高版本
- GKE：`containerd` (请参阅 [Google 文档](https://cloud.google.com/kubernetes-engine/docs/concepts/using-containerd)了解更多信息)

  :::note

  在安装过程中一次只能选择一个容器运行时引擎。

  :::

**通过集群工具导航并安装 NeuVector Chart：**

1. 单击 **☰ > 集群管理**。
1. 在 Clusters 页面上，转到要部署 NeuVector 的集群，然后单击 **Explore**。
1. 点击左侧导航栏底部的**集群工具**。
1. 按照上面的步骤 4 相应地选择你的容器运行时，然后再次单击**安装**。

## 从 Rancher UI 访问 NeuVector

1. 导航到安装了 NeuVector 的集群的 Cluster Explorer。在左侧导航栏中，单击 **NeuVector**。
1. 单击外部链接以转到 NeuVector UI。选择链接后，用户必须接受`最终用户许可协议`才能访问 NeuVector UI。

## 从 Rancher UI 卸载 NeuVector

**通过 Apps 卸载：**

1. 单击 **☰ > 集群管理**。
1. 在 **Apps** 下，点击 **Installed Apps**。
1. 在 `cattle-neuvector-system` 下，选择 NeuVector 应用程序（如果需要，还可以选择相关的 CRD），然后单击**删除**。

**通过集群工具卸载：**

1. 单击 **☰ > 集群管理**。
1. 单击屏幕左下角的**集群工具**，然后单击 NeuVector Chart 下方的垃圾桶图标。如果需要，选择`删除与此应用关联的 CRD`，然后单击**删除**。

## GitHub 仓库

NeuVector 项目在[这里](https://github.com/neuvector/neuvector)。

## 文档

NeuVector 文档在[这里](https://open-docs.neuvector.com/)。

## 架构

NeuVector 安全解决方案包含四种类型的安全容器，分别是 Controller、Enforcer、Manager 和 Scanner。它还提供了一个称为 All-in-One 的特殊容器（主要用于 Docker 原生部署），能将 Controller、Enforcer 和 Manager 功能组合在一个容器中。此外，还有一个 Updater，运行该程序时会更新 CVE 数据库。

- **Controller：** 管理 NeuVector Enforcer 容器；为管理控制台提供 REST API。
- **Enforcer：** 执行安全策略。
- **Manager：** 提供一个 web-UI 和 CLI 控制台来管理 NeuVector 平台。
- **All-in-One：** 包括 Controller、Enforcer 和 Manager。
- **Scanner：** 对镜像、容器和节点执行漏洞和合规性扫描。
- **Updater：** 更新 Neuvector 的 CVE 数据库（运行的时候）；重新部署 scanner pod。

<figcaption>**NeuVector 安全容器：**</figcaption>

![NeuVector 安全容器](/img/neuvector-security-containers.png)

<figcaption>**NeuVector 架构：**</figcaption>

![NeuVector 架构](/img/neuvector-architecture.png)

要了解有关 NeuVector 架构的更多信息，请参阅[此处](https://open-docs.neuvector.com/basics/overview#architecture)。

## CPU 和内存分配

以下是默认 NeuVector Chart 安装部署的最低计算资源推荐。请注意，未设置资源限制。

| 容器       | CPU - 请求                    | 内存 - 请求 |
| ---------- | ----------------------------- | ----------- |
| Controller | 3（每个控制器需要 1GB 1vCPU） | \*          |
| Enforcer   | 所有节点上 (500MB .5vCPU)     | 1GB         |
| Manager    | 1 (500MB .5vCPU)              | \*          |
| Scanner    | 3 (100MB .5vCPU)              | \*          |

\* Controller、Manager 和 Scanner 容器合计至少需要 1GB 内存。

## 强化集群支持 - Calico 和 Canal

<Tabs>
<TabItem value="RKE1">

- 如果 PSP 设置为 true，则所有 NeuVector 组件都是可部署的。

你需要为强化集群环境进行额外的配置，如下所示：

1. 单击 **☰ > 集群管理**。
1. 选择你创建的集群，并点击 **Explore**。
1. 在左侧导航栏中，点击 **Apps**。
1. 安装（或升级到）NeuVector 版本 `100.0.1+up2.2.2`。

- 在**编辑选项** > **其它配置**下，选中复选框来启用 **Pod 安全策略**（无需其他配置）：

  ![为 RKE1 强化集群启用 PSP](/img/psp-nv-rke.png)

1. 点击右下角的**安装**。

</TabItem>
<TabItem value="RKE2">

- 如果 PSP 设置为 true，则可以部署 NeuVector 组件 Controller 和 Enforcer。

**仅适用于 NeuVector Chart 版本 100.0.0+up2.2.0：**

- 对于 Manager、Scanner 和 Updater 组件，需要进行额外的配置，如下所示：

```
kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch '{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}'
kubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch '{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}'
kubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch '{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}'
```

  <br/>

你需要为强化集群环境进行额外的配置。

> **注意：**你必须更新 RKE2 和 K3s 强化集群中的配置，如下所示。

1. 单击 **☰ > 集群管理**。
1. 选择你创建的集群，并点击 **Explore**。
1. 在左侧导航栏中，点击 **Apps**。
1. 安装（或升级到）NeuVector 版本 `100.0.1+up2.2.2`。

- 在**编辑选项** > **其它配置**下，选中复选框来启用 **Pod 安全策略**。请注意，对于 `Manager runAsUser ID`，`Scanner runAsUser ID` 和 `Updater runAsUser ID`，你还必须输入大于 `0` 的值：

  ![为 RKE2 和 K3s 强化集群启用 PSP](/img/psp-nv-rke2.png)

1. 点击右下角的**安装**。

</TabItem>
</Tabs>

## 启用 SELinux 的集群支持 - Calico 和 Canal

要在 RKE2 集群上启用 SELinux，请执行以下步骤：

- 如果 PSP 设置为 true，则可以部署 NeuVector 组件 Controller 和 Enforcer。

**仅适用于 NeuVector Chart 版本 100.0.0+up2.2.0：**

- 对于 Manager、Scanner 和 Updater 组件，需要进行额外的配置，如下所示：

```
kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch '{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}'
kubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch '{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}'
kubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch '{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}'
```

## 离线环境中的集群支持

- 所有 NeuVector 组件都可部署在离线环境中的集群上，无需任何额外配置。

## 支持限制

- 目前仅支持管理员和集群所有者。

- 不支持 Fleet 多集群部署。

- Windows 集群不支持 NeuVector。

## 其他限制

- 目前，如果 NeuVector partner Chart 已存在，则 NeuVector 功能 Chart 的安装会失败。要解决此问题，请卸载 NeuVector partner Chart 并重新安装 NeuVector 功能 Chart。

- Controller 未准备好时，有可能无法从 Rancher UI 访问 NeuVector UI。在此期间，Controller 将尝试重新启动，并且需要几分钟才能进入 active 状态。

- 安装 NeuVector Chart 时，不会针对不同的集群类型自动检测容器运行时。要解决此问题，你可以手动指定运行时。
