---
title: Rancher CLI
description: Rancher CLI 是一个命令行工具，用于在工作站中与 Rancher 进行交互。
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/cli-with-rancher/rancher-cli"/>
</head>

Rancher CLI（命令行界面）是一个命令行工具，可用于与 Rancher 进行交互。使用此工具，你可以使用命令行而不用通过 GUI 来操作 Rancher。

## 下载 Rancher CLI

你可以直接 UI 下载二进制文件。

1. 点击左上角的 **☰**。
1. 在导航侧边栏菜单底部，单击**简介**。
1. 在 **CLI 下载**中，有 Windows、Mac 和 Linux 的二进制文件下载链接。你还可以访问我们的 CLI [发布页面](https://github.com/rancher/cli/releases)直接下载二进制文件。

## 要求

下载 Rancher CLI 后，你需要进行一些配置。Rancher CLI 需要：

- 你的 Rancher Server URL，用于连接到 Rancher Server。
- API 持有者令牌（Bearer Token），用于向 Rancher 进行身份验证。有关获取持有者令牌的更多信息，请参阅[创建 API 密钥](../user-settings/api-keys.md)。

## CLI 身份验证

在使用 Rancher CLI 控制你的 Rancher Server 之前，你必须使用 API 持有者令牌进行身份验证。运行以下命令进行登录（将 `<BEARER_TOKEN>` 和 `<SERVER_URL>` 替换为你的实际信息）：

```bash
$ ./rancher login https://<SERVER_URL> --token <BEARER_TOKEN>
```

如果 Rancher Server 使用自签名证书，Rancher CLI 会提示你继续连接。

## 项目选择

在执行命令之前，你必须先选择一个 Rancher 项目来执行这些命令。要选择[项目](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md)，请运行 `./rancher context switch` 命令。输入此命令后，会显示可用项目的列表。输入一个数字以选择项目。

**示例：`./rancher context switch` 输出**
```
User:rancher-cli-directory user$ ./rancher context switch
NUMBER    CLUSTER NAME   PROJECT ID              PROJECT NAME
1         cluster-2      c-7q96s:p-h4tmb         project-2
2         cluster-2      c-7q96s:project-j6z6d   Default
3         cluster-1      c-lchzv:p-xbpdt         project-1
4         cluster-1      c-lchzv:project-s2mch   Default
Select a Project:
```

输入数字后，控制台会显示你所选项目的消息。

```
INFO[0005] Setting new context to project project-1
INFO[0005] Saving config to /Users/markbishop/.ranchcli2.json
```

请确保你可以成功运行 `rancher kubectl get pods`。

## 命令

以下命令可用于 Rancher CLI：

| 命令 | 结果 |
|---|---|
| `apps, [app]` | 对商店应用（即单个 [Helm Chart](https://docs.helm.sh/developing_charts/)）或 Rancher Chart 执行操作。 |
| `catalog` | 对[应用商店](../../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md)执行操作。 |
| `clusters, [cluster]` | 对[集群](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md)执行操作。 |
| `context` | 在 Rancher [项目](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md)之间切换。有关示例，请参阅[项目选择](#项目选择)。 |
| `inspect [OPTIONS] [RESOURCEID RESOURCENAME]` | 显示 [Kubernetes 资源](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#resource-types)或 Rancher 资源（即[项目](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md)和[工作负载](../../how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/workloads-and-pods.md)）的详细信息。按名称或 ID 指定资源。 |
| `kubectl` | 运行 [kubectl 命令](https://kubernetes.io/docs/reference/kubectl/overview/#operations)。 |
| `login, [l]` | 登录 Rancher Server。有关示例，请参阅 [CLI 身份验证](#cli-身份验证)。 |
| `namespaces, [namespace]` | 执行命名空间操作。 |
| `nodes, [node]` | 执行节点空间操作。 |
| `projects, [project]` | 执行[项目](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md)操作。 |
| `ps` | 显示项目中的[工作负载](../../how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/workloads-and-pods.md)。 |
| `settings, [setting]` | 显示 Rancher Server 的当前设置。 |
| `ssh` | 使用 SSH 协议连接到你的某个集群节点。 |
| `help, [h]` | 显示命令列表或某个命令的帮助。 |


## Rancher CLI 帮助

使用 CLI 登录 Rancher Server 后，输入 `./rancher --help` 以获取命令列表。

所有命令都支持 `--help` 标志，该标志解释了每个命令的用法。

## 限制

Rancher CLI **不能**用于安装[仪表板应用程序或 Rancher 功能 Chart](../../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md)。
