---
title: Helm CLI 快速入门
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"/>
</head>

本文提供了快速安装 Rancher 的方法。

这些说明假设你有一个 Linux 虚拟机，并能从本地工作站与之通信。Rancher 将安装在 Linux 主机上。你将需要检索该主机的 IP 地址，以便从本地工作站访问 Rancher。Rancher 旨在远程管理 Kubernetes 集群，因此 Rancher 管理的任何 Kubernetes 集群也都需要能够访问该 IP 地址。

我们不建议在本地安装 Rancher，因为它会产生网络问题。如果你在 localhost 上安装 Rancher，Rancher 无法与下游 Kubernetes 集群通信，因此在 localhost 上你无法测试 Rancher 的集群配置和集群管理功能。

你的 Linux 主机可以位于任何地方。例如，它可以是 Amazon EC2 实例、Digital Ocean Droplet 或 Azure 虚拟机。其他 Rancher 文档也经常称它们为“节点”。部署 Linux 主机的一种方法是设置一个 Amazon EC2 实例，如[本教程](../../../how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md)中所示。

完整的安装要求在[这里](../../installation-and-upgrade/installation-requirements/installation-requirements.md)。

## 在 Linux 上安装 K3s

Rancher 需要安装在支持的 Kubernetes 版本上。如需了解你使用的 Rancher 版本支持哪些 Kubernetes 版本，请参见 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/)。

如需指定 K3s（Kubernetes）版本，在运行 K3s 安装脚本时使用 `INSTALL_K3S_VERSION` 环境变量（例如 `INSTALL_K3S_VERSION="v1.24.10+k3s1"`）。

在 Linux 主机上运行以下命令来安装 K3s 集群：

```
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=<VERSION> sh -s - server --cluster-init
```

`--cluster-init` 允许 K3s 使用嵌入式 etcd 作为数据存储，并能够转换为 HA 设置。请参阅[嵌入式数据库的高可用性](https://rancher.com/docs/k3s/latest/en/installation/ha-embedded/)。

保存 Linux 主机的 IP。

## 将 kubeconfig 保存到你的工作站

kubeconfig 文件对于访问 Kubernetes 集群非常重要。从 Linux 主机复制 `/etc/rancher/k3s/k3s.yaml` 中的文件，并将其保存到本地工作站的 `~/.kube/config` 目录中。一种方法是使用 `scp` 工具并在本地计算机上运行此命令：

<Tabs>
<TabItem value="Mac 和 Linux">

```
scp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml ~/.kube/config
```

在某些情况下，它可能需要确保你的 shell 定义了环境变量 `KUBECONFIG=~/.kube/config`，例如，它可以在你的配置文件或 rc 文件中导出。

</TabItem>
<TabItem value="Windows">

默认情况下不能识别“scp”命令，所以我们需要先安装一个模块。

在 Windows Powershell 中：

```
Find-Module Posh-SSH
Install-Module Posh-SSH

## 获取远程 kubeconfig 文件
scp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml $env:USERPROFILE\.kube\config
```

</TabItem>
</Tabs>

## 在 kubeconfig 中编辑 Rancher Server URL

在 kubeconfig 文件中，你需要将 `server` 字段的值更改为 `<IP_OF_LINUX_NODE>:6443`。你可以通过端口 6443 访问 Kubernetes API Server，通过端口 80 和 443 访问 Rancher Server。你需要进行此编辑，以便你从本地工作站运行 Helm 或 kubectl 命令时，能够与安装了 Rancher 的 Kubernetes 集群进行通信。

<Tabs>
<TabItem value="Mac 和 Linux">

打开 kubeconfig 文件进行编辑的一种方法是使用 Vim：

```
vi ~/.kube/config
```

输入 `i` 以打开 Vim 的插入模式。要保存你的工作，请按 `Esc`。然后输入 `:wq` 并按 `Enter`。


</TabItem>
<TabItem value="Windows">

在 Windows Powershell 中，你可以使用 `notepad.exe` 来编辑 kubeconfig 文件：

```
notepad.exe $env:USERPROFILE\.kube\config
```

编辑完成后，按 `ctrl+s` 或转到 `File > Save` 来保存你的工作。

</TabItem>
</Tabs>

## 使用 Helm 来安装 Rancher

从本地工作站运行以下命令。你需要先安装 [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 和 [helm](https://helm.sh/docs/intro/install/)：

:::note

要查看自定义 cert-manager 安装的选项（包括集群使用 PodSecurityPolicies 的情况），请参阅 [cert-manager 文档](https://artifacthub.io/packages/helm/cert-manager/cert-manager#configuration)。

:::

```
helm repo add rancher-latest https://releases.rancher.com/server-charts/latest

kubectl create namespace cattle-system

kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/<VERSION>/cert-manager.crds.yaml

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace

# Windows Powershell
helm install cert-manager jetstack/cert-manager `
  --namespace cert-manager `
  --create-namespace
```

安装 Rancher 的最终命令如下。该命令需要一个将流量转发到 Linux 主机的域名。为了简化本教程，你可以使用假域名。`<IP_OF_LINUX_NODE>.sslip.io` 是一个假域名的例子。

要安装特定的 Rancher 版本，请使用 `--version` 标志（例如，`--version 2.6.6`）。否则，默认安装最新的 Rancher。请参阅[选择 Rancher 版本](../../installation-and-upgrade/resources/choose-a-rancher-version.md)。

对于 Kubernetes v1.25 或更高版本，使用 Rancher v2.7.2-v2.7.4 时，将 `global.cattle.psp.enabled` 设置为 `false`。对于 Rancher v2.7.5 及更高版本来说，这不是必需的，但你仍然可以手动设置该选项。

请注意，密码至少需要 12 个字符。

```
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=<IP_OF_LINUX_NODE>.sslip.io \
  --set replicas=1 \
  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>

# Windows Powershell
helm install rancher rancher-latest/rancher `
  --namespace cattle-system `
  --set hostname=<IP_OF_LINUX_NODE>.sslip.io `
  --set replicas=1 `
  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>
```

现在，如果你在 Web 浏览器中导航到 `<IP_OF_LINUX_NODE>.sslip.io`，你应该会看到 Rancher UI。

为了简化说明，我们使用了一个假域名和自签名证书来进行安装。因此，你可能需要在 Web 浏览器中添加一个安全例外来查看 Rancher UI。请注意，对于生产安装，你需要具有负载均衡器、真实域名和真实证书的高可用性设置。

这些说明还省略了完整的安装要求和其他安装选项。如果你对这些步骤有任何疑问，请参阅完整的 [Helm CLI 安装文档](../../installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)。

要使用新的 Rancher Server 来启动新的 Kubernetes 集群，你可能需要在 Rancher 中设置云凭证。有关更多信息，请参阅[使用 Rancher 启动 Kubernetes 集群](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)。
