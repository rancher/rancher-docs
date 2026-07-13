---
title: Supportconfig Bundle
---

安装 CSP Adapter 后，你将能够生成一个 Supportconfig Bundle。此 Bundle 是一个 tar 包，可用于快速提供支持信息。

你可以通过 Rancher 或通过直接访问安装 Rancher 的集群来创建这些 Bundle。请注意，建议通过 Rancher 访问。

> **注意**：无论采用何种方法，只有管理员可以生成/下载 Supportconfig Bundle。

## 通过 Rancher 访问

首先，点击汉堡菜单。然后单击 `Get Support` 按钮。

![Get Support](/img/support-help.png)

在下一页中，单击 `Generate Support Config` 按钮。

> **注意**：如果未安装 Adapter ，则不会出现生成 Supportconfig Bundle 的选项。你必须安装 CSP Adapter 才能生成 Supportconfig Bundle。

![Get Support](/img/generate-support-config.png)

## 不通过 Rancher 进行访问

首先，为安装 Rancher 的集群生成 kubeconfig。

> **注意**：如果 Rancher 宕机，你将无法使用 Rancher 生成的 kubeconfig 令牌访问集群。

配置你的 shell 环境以使用此 kubeconfig 令牌：

```bash
export KUBECONFIG=$MY_KUBECONFIG_PATH
```

建议在运行此命令时创建一个临时工作目录，如下所示：

```bash
mkdir temp && cd temp
```

然后，检索 Supportconfig Bundle：

```bash
mkdir rancher && kubectl get configmap csp-config -n cattle-csp-adapter-system -o=jsonpath='{.data.data}' >> rancher/config.json && tar -c -f supportconfig_rancher.tar rancher && rm -rf rancher
```

这将在你的当前目录中创建一个 `supportconfig_rancher.tar` 文件。

由于 gnu-tar 和 bsd-tar 不兼容，在 Mac 上运行这些命令的用户可能会遇到问题。如果支持部门在读取你制作的 Supportconfig 时出现问题，你可以先尝试在你的路径上将 gnu-tar 作为 `gtar` 进行访问，然后运行以下命令：

```bash
mkdir rancher && kubectl get configmap csp-config -n cattle-csp-adapter-system -o=jsonpath='{.data.data}' >> rancher/config.json && gtar -c -f supportconfig_rancher.tar rancher && rm -rf rancher
```
