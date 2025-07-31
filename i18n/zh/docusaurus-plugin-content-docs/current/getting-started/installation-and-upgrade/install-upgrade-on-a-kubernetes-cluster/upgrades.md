---
title: 升级
---

本文介绍如何升级使用 Helm 安装在 Kubernetes 集群上的 Rancher Server。这些步骤也适用于使用 Helm 进行的离线安装。

有关使用 Docker 安装的 Rancher 的升级说明，请参见[本页。](../other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher.md)

## 先决条件

### 访问 Kubeconfig

Helm 的运行位置，应该与你的 Kubeconfig 文件，或你运行 kubectl 命令的位置相同。

If you installed Kubernetes with RKE2/K3s, the Kubeconfig is stored in the `/etc/rancher/rke2/rke2.yaml` or `/etc/rancher/k3s/k3s.yaml` directory depending on your chosen distribution.

Kubeconfig 也可以通过 `--kubeconfig` 标签（详情请参见 https://helm.sh/docs/helm/helm/ ）来手动指定所需的集群。

### 查看已知问题

如需查看每个 Rancher 版本的已知问题，请参见 [GitHub](https://github.com/rancher/rancher/releases) 中的发行说明，或查看 [Rancher 论坛](https://forums.rancher.com/c/announcements/12)。

不支持 _升级_ 或 _升级到_ [rancher-alpha 仓库](../resources/choose-a-rancher-version.md#helm-chart-仓库)中的任何 Chart。
### Helm 版本

本安装指南假定你使用的是 Helm 3。

<DeprecationHelm2 />

如果你使用 Helm 2，请参见 [Helm 2 迁移到 Helm 3 文档](https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/)。如果你不能升级到 Helm 3，[Helm 2 升级页面](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2.md) 提供了使用 Helm 2 升级的旧升级指南。

### 离线安装：推送镜像到私有镜像仓库

[仅适用于离线安装](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md)：为新的 Rancher Server 版本收集和推送镜像。使用你需要针对 Rancher 版本升级的镜像，按照步骤[推送镜像到私有镜像仓库](../other-installation-methods/air-gapped-helm-cli-install/publish-images.md)。

### 使用 cert-manager 0.8.0 之前的版本升级

[从 2019 年 11 月 1 日开始，Let's Encrypt 已屏蔽早于 0.8.0 的 cert-manager 实例](https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753)。因此，请参见[说明](../resources/upgrade-cert-manager.md)把 cert-manager 升级到最新版本。

## 升级概要

按照以下步骤升级 Rancher Server：


### 1. 备份运行 Rancher Server 的 Kubernetes 集群

使用[备份应用](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md)来备份 Rancher。

如果升级过程中出现问题，你将使用备份作为还原点。

### 2. 更新 Helm Chart 仓库

1. 更新本地 Helm 仓库缓存。

   ```
   helm repo update
   ```

1. 获取你用来安装 Rancher 的仓库名称。

   关于仓库及其区别，请参见 [Helm Chart 仓库](../resources/choose-a-rancher-version.md#helm-chart-仓库)。

   - Latest：建议用于试用最新功能
      ```
      helm repo add rancher-latest https://releases.rancher.com/server-charts/latest
      ```
   - Stable：建议用于生产环境
      ```
      helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
      ```
   - Alpha：即将发布的实验性预览。
      ```
      helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha
      ```
      注意：不支持升级到 Alpha 版、从 Alpha 版升级或在 Alpha 版之间升级。

   ```
   helm repo list

   NAME          	       URL
   stable        	       https://charts.helm.sh/stable
   rancher-<CHART_REPO>	 https://releases.rancher.com/server-charts/<CHART_REPO>
   ```

   :::note

   如果你想切换到不同的 Helm Chart 仓库，请按照[切换仓库步骤](../resources/choose-a-rancher-version.md#切换到不同-helm-chart-仓库)进行操作。如果你要切换仓库，请先再次列出仓库，再继续执行步骤 3，以确保添加了正确的仓库。

   :::

1. 从 Helm Chart 仓库获取最新的 Chart 来安装 Rancher。

   该命令将提取最新的 Chart，并将其作为 `.tgz`文件保存在当前目录中。

   ```plain
   helm fetch rancher-<CHART_REPO>/rancher
   ```
   你可以通过 `--version=` 标记，来指定要升级的目标 Chart 版本。例如：

   ```plain
   helm fetch rancher-<CHART_REPO>/rancher --version=2.6.8
   ```

### 3. 升级 Rancher

本节介绍了如何使用 Helm 升级 Rancher 的一般（互联网连接）或离线安装。

:::note 离线说明：

如果你在离线环境中安装 Rancher，请跳过本页的其余部分，按照[本页](air-gapped-upgrades.md)上的说明渲染 Helm 模板。

:::


从当前安装的 Rancher Helm Chart 中获取用 `--set`传递的值。

```
helm get values rancher -n cattle-system

hostname: rancher.my.org
```

:::note

这个命令会列出更多的值。此处展示的只是其中一个值的例子。

:::

:::tip

Deployment 的名称可能会有所不同。例如，如果你通过 AWS Marketplace 部署 Rancher，则 Deployment 的名称为“rancher-stable”。
因此：
```
helm get values rancher-stable -n cattle-system

hostname: rancher.my.org
```

:::

如果要将 cert-manager 从 v1.5 或更早的版本升级到最新版本，请参阅 [cert-manager upgrade docs](../resources/upgrade-cert-manager.md#选项-c升级-15-及以下版本的-cert-manager) 了解如何在不卸载或重新安装 Rancher 的情况下升级 cert-manager。否则，请按照以下[ Rancher 升级步骤](#rancher-升级步骤)进行操作。

#### Rancher 升级步骤

保留你的所有设置把 Rancher 升级到最新版本。

将上一步中的所有值用 `--set key=value` 追加到命令中。

```
helm upgrade rancher rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org
```

:::note

以上是一个例子，可能有更多上一步的值需要追加。

:::

:::tip

如果你通过 AWS Marketplace 部署 Rancher，则 Deployment 的名称为“rancher-stable”。
因此：
```
helm upgrade rancher-stable rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org
```

:::

另外，你也可以将当前的值导出到一个文件中，并在升级时引用该文件。例如，如果你只需要改变 Rancher 的版本：

1. 将当前值导出到文件：
   ```
   helm get values rancher -n cattle-system -o yaml > values.yaml
   ```
1. 只更新 Rancher 版本：

   ```
   helm upgrade rancher rancher-<CHART_REPO>/rancher \
     --namespace cattle-system \
     -f values.yaml \
     --version=2.6.8
   ```

### 4. 验证升级

登录 Rancher 以确认升级成功。

:::tip

升级后出现网络问题？

请参见[恢复集群网络](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md)。

:::

## 已知升级问题

你可以在 [GitHub](https://github.com/rancher/rancher/releases) 发布说明以及 [Rancher 论坛](https://forums.rancher.com/c/announcements/12)中找到每个 Rancher 版本的已知问题。
