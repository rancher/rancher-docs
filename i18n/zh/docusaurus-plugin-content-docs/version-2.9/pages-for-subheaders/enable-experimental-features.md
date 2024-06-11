---
title: 启用实验功能
---

Rancher 包含一些默认关闭的实验功能。在某些情况下，例如当你认为使用[不支持的存储类型](../how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers.md)的好处大于使用未经测试的功能的风险时，你可能想要启用实验功能。为了让你能够试用这些默认关闭的功能，我们引入了功能开关（feature flag）。

实验功能可以通过以下三种方式启用：

- [使用 CLI](#启动-rancher-时启用功能)：在使用 CLI 安装 Rancher 时，使用功能开关默认启用某个功能。
- [使用 Rancher UI](#使用-rancher-ui-启用功能)：在**设置**页面启用功能。
- [使用 Rancher API](#使用-rancher-api-启用功能)：安装 Rancher 后启用功能。

每个功能均有以下两个值：

- 默认值：可以通过在命令行使用标志或环境变量进行配置。
- 设置值：可以通过 Rancher API 或 UI 进行配置。

如果没有设置值，Rancher 会使用默认值。

设置值是通过 API 设置的，而默认值是通过命令行设置。因此，如果你使用 API 或 UI 启用或禁用某个功能，命令行中设置的值将被覆盖。

如果你安装 Rancher 后使用 Rancher API 将功能开关设置为 true，然后在使用命令升级 Rancher 时将功能开关设置为 false，在这种情况下，虽然默认值会是 false，但是该功能依然会被启用，因为它是通过 API 设置的。如果你随后使用 Rancher API 删除设置值（true）并将它设置为 NULL，则默认值（false）将生效。有关详细信息，请参阅[功能开关页面](../getting-started/installation-and-upgrade/installation-references/feature-flags.md)。

## 启动 Rancher 时启用功能

安装 Rancher 时，使用功能开关启用你所需的功能。通过单节点容器安装 Rancher，和在 Kubernetes 集群上安装 Rancher 对应的命令有所不同。

### Kubernetes 安装的情况下启用功能

:::note

通过 Rancher API 设置的值会覆盖命令行传入的值。

:::

使用 Helm Chart 安装 Rancher 时，使用 `--set` 选项。下面的示例通过传递功能开关名称（用逗号分隔）来启用两个功能：

对于 Kubernetes v1.25 或更高版本，使用 Rancher v2.7.2-v2.7.4 时，将 `global.cattle.psp.enabled` 设置为 `false`。对于 Rancher v2.7.5 及更高版本来说，这不是必需的，但你仍然可以手动设置该选项。

```
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org \
  --set 'extraEnv[0].name=CATTLE_FEATURES'
  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'
```

:::note

如果你安装的是 alpha 版本，Helm 要求你在命令中添加 `--devel` 选项。

:::

### 离线安装的情况下渲染 Helm Chart

如果你是在离线环境安装 Rancher 的，在使用 Helm 安装 Rancher 之前，你需要添加一个 Helm Chart 仓库并渲染一个 Helm 模板。详情请参见[离线安装文档](../getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md)。

以下是在渲染 Helm 模板时传入功能开关名称的命令示例。下面的示例通过传递功能开关名称（用逗号分隔）来启用两个功能。

Helm 命令如下：

```
helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
  --no-hooks \ # 避免生成 Helm 钩子文件
  --namespace cattle-system \
  --set hostname=<RANCHER.YOURDOMAIN.COM> \
  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
  --set ingress.tls.source=secret \
  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # 设置在 Rancher 中使用的默认私有镜像仓库
  --set useBundledSystemChart=true # 使用打包的 Rancher System Chart
  --set 'extraEnv[0].name=CATTLE_FEATURES'
  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'
```

### Docker 安装的情况下启用功能

如果 Rancher 是使用 Docker 安装的，请使用 `--features` 选项。下面的示例通过传递功能开关名称（用逗号分隔）来启用两个功能：

```
docker run -d -p 80:80 -p 443:443 \
  --restart=unless-stopped \
  rancher/rancher:rancher-latest \
  --features=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true
```


## 使用 Rancher UI 启用功能

1. 在左上角，单击 **☰ > 全局设置**。
1. 单击**功能开关**。
1. 如需启用某个功能，找到该已禁用的功能，并点击**⋮ > 激活**。

**结果**：该功能已启用。

### 使用 Rancher UI 禁用功能

1. 在左上角，单击 **☰ > 全局设置**。
1. 单击**功能开关**。你将看到实验功能列表。
1. 如需禁用某个功能，找到该已启用的功能，并点击**⋮ > 停用**。

**结果**：该功能已禁用。

## 使用 Rancher API 启用功能

1. 前往 `<RANCHER-SERVER-URL>/v3/features`。
1. 在 `data` 中，你会看到一个数组，该数组包含所有能通过功能开关启用的功能。功能的名称在 `id` 字段中。单击要启用的功能的名称。
1. 在左上角的 **Operations** 下，点击 **Edit**。
1. 在 **Value** 下拉菜单中，单击 **True**。
1. 单击 **Show Request**。
1. 单击 **Send Request**。
1. 点击 **Close**。

**结果**：该功能已启用。

### 使用 Rancher API 禁用功能

1. 前往 `<RANCHER-SERVER-URL>/v3/features`。
1. 在 `data` 中，你会看到一个数组，该数组包含所有能通过功能开关启用的功能。功能的名称在 `id` 字段中。单击要启用的功能的名称。
1. 在左上角的 **Operations** 下，点击 **Edit**。
1. 在 **Value** 下拉菜单中，单击 **False**。
1. 单击 **Show Request**。
1. 单击 **Send Request**。
1. 点击 **Close**。

**结果**：该功能已禁用。
