---
title: 集群访问
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters"/>
</head>

本节介绍可以用来访问 Rancher 管理的集群的工具。

有关如何授予用户访问集群的权限的信息，请参阅[将用户添加到集群](add-users-to-clusters.md)。

有关 RBAC 的更多信息，请参阅[本节](../../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)。

有关如何设置身份验证系统的信息，请参阅[本节](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md)。


### Rancher UI

Rancher 提供了一个直观的用户界面来让你与集群进行交互。UI 中所有可用的选项都使用 Rancher API。因此，UI 中的任何操作都可以在 Rancher CLI 或 Rancher API 中进行。

### kubectl

你可以使用 Kubernetes 命令行工具 [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) 来管理你的集群。使用 kubectl 有两种选择：

- **Rancher kubectl shell**：通过启动 Rancher UI 中可用的 kubectl shell 与集群交互。此选项不需要你进行任何配置操作。有关详细信息，请参阅[使用 kubectl Shell 访问集群](use-kubectl-and-kubeconfig.md)。
- **终端远程连接**：你也可以通过在本地桌面上安装 [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) ，然后将集群的 kubeconfig 文件复制到本地 `~/.kube/config` 目录来与集群交互。有关更多信息，请参阅[使用 kubectl 和 kubeconfig 文件访问集群](use-kubectl-and-kubeconfig.md)。

### Rancher CLI

你可以下载 Rancher 自己的命令行工具 [Rancher CLI](../../../../reference-guides/cli-with-rancher/cli-with-rancher.md) 来控制你的集群。这个 CLI 工具可以直接与不同的集群和项目进行交互，或者向它们传递 `kubectl` 命令。

### Rancher API

最后，你可以通过 Rancher API 与集群进行交互。在使用 API 之前，你必须先获取 [API 密钥](../../../../reference-guides/user-settings/api-keys.md)。要查看 API 对象的不同资源字段和操作，请打开 API UI（API UI 可以通过单击 Rancher UI 对象的**在 API 中查看**访问）。
