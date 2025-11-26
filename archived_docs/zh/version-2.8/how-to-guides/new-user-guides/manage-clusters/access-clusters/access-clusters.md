---
title: 集群访问
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters"/>
</head>

本节介绍可以用来访问 Rancher 管理的集群的工具。

有关如何授予用户访问集群的权限的信息，请参阅[将用户添加到集群](add-users-to-clusters.md)部分。

有关 RBAC 的更多信息，请参阅[本节](../../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)。

有关如何设置认证的信息，请参阅[本节](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md)。

## Rancher UI 中的集群

我们提供了多种通过 Rancher UI 查看和管理集群的方法。

### 集群页面

从 **☰** 菜单访问**集群**页面：

1. 单击 **☰**。
1. 选择**集群管理**。

你还可以通过单击 Rancher UI **主页**集群表格上方的**管理**按钮来访问**集群**页面。

在**集群**页面上，选择每行末尾的 **⁝** 以查看包含以下选项的子菜单：

* [Kubectl Shell](use-kubectl-and-kubeconfig.md)
* 下载 KubeConfig
* 将 KubeConfig 复制到剪切板
* 编辑配置
* 查看 YAML
* 下载 YAML 

## 集群仪表板

在**集群**页面上，选择每行末尾的**浏览**按钮查看该集群的**集群仪表板**。你还可以通过单击表中集群的名称，然后单击**集群**页面上的**浏览**按钮来查看仪表板。

也可以通过单击集群名称从 Rancher UI **主页**访问**集群仪表板**。

你还可以从顶部导航栏中的 **☰** 访问**集群仪表板**：

1. 单击 **☰**。
1. 从**浏览集群**菜单中选择集群的名称。

**集群仪表板**列出了集群相关的信息，例如节点数量、内存使用情况、事件和资源。

## kubectl

你可以使用 Kubernetes 命令行工具 [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)，来管理你的集群。使用 kubectl 有两种选择：

- **Rancher kubectl shell**：通过启动 Rancher UI 中可用的 kubectl shell 与集群交互。此选项不需要你进行任何配置操作。有关详细信息，请参阅[使用 kubectl Shell 访问集群](use-kubectl-and-kubeconfig.md)。
- **终端远程连接**：你也可以通过在本地桌面上安装 [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)，然后将集群的 kubeconfig 文件复制到本地 `~/.kube/config` 目录来与集群交互。有关更多信息，请参阅[使用 kubectl 和 kubeconfig 文件访问集群](use-kubectl-and-kubeconfig.md)。

## Rancher CLI

你可以下载 Rancher 自己的命令行工具 [Rancher CLI](../../../../reference-guides/cli-with-rancher/cli-with-rancher.md) 来控制你的集群。这个 CLI 工具可以直接与不同的集群和项目进行交互，或者向它们传递 `kubectl` 命令。

## Rancher API

最后，你可以通过 Rancher API 与集群进行交互。在使用 API 之前，你必须先获取 [API 密钥](../../../../reference-guides/user-settings/api-keys.md)。要查看 API 对象的不同资源字段和操作，请打开 API UI（API UI 可以通过单击 Rancher UI 对象的**在 API 中查看**访问）。
