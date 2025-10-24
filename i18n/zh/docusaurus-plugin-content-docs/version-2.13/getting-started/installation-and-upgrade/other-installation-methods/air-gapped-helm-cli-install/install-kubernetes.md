---
title: '3. 安装 Kubernetes（Docker 安装请跳过）'
---

:::note

如果你使用 Docker 在单个节点上安装 Rancher，请跳过本节。

:::

本文描述了如何根据 [Rancher Server 环境的最佳实践](../../../../reference-guides/rancher-manager-architecture/architecture-recommendations.md#kubernetes-安装环境)来安装 Kubernetes 集群。该集群需要专用于运行 Rancher Server。

Rancher 可以安装在任何 Kubernetes 集群上，包括托管的 Kubernetes。

在 RKE2 或 K3s 上离线安装 Kubernetes 集群的步骤如下所示：

<Tabs>
<TabItem value="K3s">

在本指南中，我们假设你已经在离线环境中创建了节点，并且在堡垒服务器上有一个安全的 Docker 私有镜像仓库。

### 安装概要

1. [准备镜像目录](#1-准备镜像目录)
2. [创建镜像仓库 YAML](#2-创建镜像仓库-yaml)
3. [安装 K3s](#3-安装-k3s)
4. [保存并开始使用 kubeconfig 文件](#4-保存并开始使用-kubeconfig-文件)

### 1. 准备镜像目录
从 [Releases](https://github.com/k3s-io/k3s/releases) 页面获取要运行的 K3s 版本的镜像 tar 文件。

在每个节点上启动 K3s 之前，将这个 tar 文件放在 `images` 目录中，例如：

```sh
sudo mkdir -p /var/lib/rancher/k3s/agent/images/
sudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/
```

### 2. 创建镜像仓库 YAML
把 `registries.yaml` 文件创建到 `/etc/rancher/k3s/registries.yaml` 中。此文件为 K3s 提供连接到你的私有镜像仓库的详细信息。

在加入必要信息之前，`registries.yaml` 文件是这样的：

```yaml
---
mirrors:
  customreg:
    endpoint:
      - "https://ip-to-server:5000"
configs:
  customreg:
    auth:
      username: xxxxxx # 镜像仓库的用户名
      password: xxxxxx # 镜像仓库的密码
    tls:
      cert_file: <镜像仓库所用的证书文件路径>
      key_file:  <镜像仓库所用的密钥文件路径>
      ca_file: <镜像仓库所用的 CA 文件路径>
```

请注意，目前，K3s 仅支持安全的镜像仓库（带有自定义 CA 的 SSL）。

有关 K3s 的私有镜像仓库配置文件的详情，请参见 [K3s 官方文档](https://rancher.com/docs/k3s/latest/en/installation/private-registry/)。

### 3. 安装 K3s

Rancher 需要安装在支持的 Kubernetes 版本上。如需了解你使用的 Rancher 版本支持哪些 Kubernetes 版本，请参见 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/)。

如需指定 K3s（Kubernetes）版本，在运行 K3s 安装脚本时使用 `INSTALL_K3S_VERSION` 环境变量（例如 `INSTALL_K3S_VERSION="v1.24.10+k3s1"`）。

从 [Releases](https://github.com/k3s-io/k3s/releases) 页面获取 K3s 的二进制文件，该文件要匹配用于获取离线镜像的 tar 版本。
访问 [K3s 安装脚本](https://get.k3s.io)以获取 K3s 的安装脚本。

将二进制文件放到每个节点的 `/usr/local/bin` 中。
将安装脚本放在每个节点的任意位置，并将脚本命名为 `install.sh`。

在每个 Server 上安装 K3s：

```
INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_VERSION=<VERSION> ./install.sh
```

在每个 Agent 上安装 K3s：

```
INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_VERSION=<VERSION> K3S_URL=https://<SERVER>:6443 K3S_TOKEN=<TOKEN> ./install.sh
```

其中 `<SERVER>` 是 Server 的 IP 或有效 DNS，`<TOKEN>` 是可以在 `/var/lib/rancher/k3s/server/node-token` 中找到的 Server node-token。

:::note

K3s 自动为 kubelets 提供 `--resolv-conf` 标志，该标志可能对在离线环境中配置 DNS 有帮助。

:::

### 4. 保存并开始使用 kubeconfig 文件

在每个 Rancher Server 节点安装 K3s 时，会在每个节点的 `/etc/rancher/k3s/k3s.yaml` 中生成一个 `kubeconfig` 文件。该文件包含访问集群的凭证。请将该文件保存在安全的位置。

如要使用该 `kubeconfig` 文件：

1. 安装 Kubernetes 命令行工具 [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)。
2. 复制 `/etc/rancher/k3s/k3s.yaml` 文件并保存到本地主机的 `~/.kube/config` 目录上。
3. 在 kubeconfig 文件中，`server` 的参数为 localhost。你需要将 `server` 配置为负载均衡器的 DNS，并指定端口 6443（通过端口 6443 访问 Kubernetes API Server，通过端口 80 和 443 访问 Rancher Server）。以下是一个 `k3s.yaml` 示例：

```yaml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: [CERTIFICATE-DATA]
    server: [LOAD-BALANCER-DNS]:6443 # 编辑此行
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name: default
  user:
    password: [PASSWORD]
    username: admin
```

**结果**：你可以开始使用 `kubectl` 来管理你的 K3s 集群。如果你有多个 `kubeconfig` 文件，在使用 `kubectl` 时，你可以传入文件路径来指定要使用的 `kubeconfig` 文件：

```
kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces
```

有关 `kubeconfig` 文件的详情，请参见 [K3s 官方文档](https://rancher.com/docs/k3s/latest/en/cluster-access/) 或 [ Kubernetes 官方文档](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)中关于使用 `kubeconfig` 文件管理集群访问的部分。

### 升级注意事项

你可以通过以下方式完成离线环境的升级：

1. 从 [Releases](https://github.com/k3s-io/k3s/releases) 页面下载要升级的 K3s 版本的新离线镜像 tar 包。将 tar 文件放在每个节点上的 `/var/lib/rancher/k3s/agent/images/` 目录中。删除旧的 tar 文件。
2. 复制并替换每个节点上 `/usr/local/bin` 中的旧 K3s 二进制文件。复制 [K3s 安装脚本](https://get.k3s.io)（因为脚本可能自上次版本发布以来已更改）。使用相同的环境变量再次运行脚本。
3. 重启 K3s 服务（如果安装程序没有自动重启 K3s 的话）。

</TabItem>
<TabItem value="RKE2">

在本指南中，我们假设你已经在离线环境中创建了节点，并且在堡垒服务器上有一个安全的 Docker 私有镜像仓库。

### 安装概要

1. [创建 RKE2 配置](#1-创建-rke2-配置)
2. [创建镜像仓库 YAML](#2-创建镜像仓库-yaml)
3. [安装 RKE2](#3-安装-rke2)
4. [保存并开始使用 kubeconfig 文件](#4-保存并开始使用-kubeconfig-文件)

### 1. 创建 RKE2 配置
把 config.yaml 文件创建到 `/etc/rancher/rke2/config.yaml` 中。这将包含创建高可用 RKE2 集群所需的所有配置选项。

第一台服务器的最低配置是：

```
token: my-shared-secret
tls-san:
  - loadbalancer-dns-domain.com
```

其他服务器的配置文件应该包含相同的令牌，并让 RKE2 知道要连接到现有的第一台服务器：

```
server: https://ip-of-first-server:9345
token: my-shared-secret
tls-san:
  - loadbalancer-dns-domain.com
```

有关详细信息，请参阅 [RKE2 文档](https://docs.rke2.io/install/ha)。

:::note

RKE2 自动为 kubelets 提供 `resolv-conf` 选项，该标志可能对在离线环境中配置 DNS 有帮助。

:::

### 2. 创建镜像仓库 YAML
把 `registries.yaml` 文件创建到 `/etc/rancher/rke2/registries.yaml` 中。此文件为 RKE2 提供连接到你的私有镜像仓库的详细信息。

在加入必要信息之前，`registries.yaml` 文件是这样的：

```
---
mirrors:
  customreg:
    endpoint:
      - "https://ip-to-server:5000"
configs:
  customreg:
    auth:
      username: xxxxxx # 镜像仓库的用户名
      password: xxxxxx # 镜像仓库的密码
    tls:
      cert_file: <镜像仓库所用的证书文件路径>
      key_file:  <镜像仓库所用的密钥文件路径>
      ca_file: <镜像仓库所用的 CA 文件路径>
```

有关 RKE2 的私有镜像仓库配置文件的详情，请参见 [RKE2 官方文档](https://docs.rke2.io/install/private_registry)。

### 3. 安装 RKE2

Rancher 需要安装在支持的 Kubernetes 版本上。如需了解你使用的 Rancher 版本支持哪些 Kubernetes 版本，请参见[支持维护条款](https://rancher.com/support-maintenance-terms/)。

从 Release 页面下载安装脚本、rke2、rke2-images 和 sha256sum 存档，并将它们上传到每个服务器上的目录中：

```
mkdir /tmp/rke2-artifacts && cd /tmp/rke2-artifacts/
wget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2-images.linux-amd64.tar.zst
wget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2.linux-amd64.tar.gz
wget https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/sha256sum-amd64.txt
curl -sfL https://get.rke2.io --output install.sh
```

接下来，使用每个服务器上的目录运行 install.sh，如下例所示：

```
INSTALL_RKE2_ARTIFACT_PATH=/tmp/rke2-artifacts sh install.sh
```

然后在所有服务器上启用并启动该服务：

``
systemctl enable rke2-server.service
systemctl start rke2-server.service
``

有关详细信息，请参阅 [RKE2 文档](https://docs.rke2.io/install/airgap)。

### 4. 保存并开始使用 kubeconfig 文件

在每个 Rancher Server 节点安装 RKE2 时，会在每个节点的 `/etc/rancher/rke2/rke2.yaml` 中生成一个 `kubeconfig`  文件。该文件包含访问集群的凭证。请将该文件保存在安全的位置。

如要使用该 `kubeconfig` 文件：

1. 安装 [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)（Kubernetes 命令行工具）。
2. 复制 `/etc/rancher/rke2/rke2.yaml` 文件并保存到本地主机的 `~/.kube/config` 目录上。
3. 在 kubeconfig 文件中，`server` 的参数为 localhost。你需要将 `server` 配置为负载均衡器的 DNS，并指定端口 6443（通过端口 6443 访问 Kubernetes API Server，通过端口 80 和 443 访问 Rancher Server）。以下是一个 `rke2.yaml` 示例：

```
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: [CERTIFICATE-DATA]
    server: [LOAD-BALANCER-DNS]:6443 # 编辑此行
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name: default
  user:
    password: [PASSWORD]
    username: admin
```

**结果**：你可以开始使用 `kubectl` 来管理你的 RKE2 集群。如果你有多个 `kubeconfig` 文件，在使用 `kubectl` 时，你可以传入文件路径来指定要使用的 `kubeconfig` 文件：

```
kubectl --kubeconfig ~/.kube/config/rke2.yaml get pods --all-namespaces
```

有关 `kubeconfig` 文件的详情，请参见 [RKE2 官方文档](https://docs.rke2.io/cluster_access)或 [ Kubernetes 官方文档](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)中关于使用 `kubeconfig` 文件管理集群访问的部分。

### 升级注意事项

你可以通过以下方式完成离线环境的升级：

1. 从 [Releases](https://github.com/rancher/rke2/releases) 页面下载新的离线工件，并安装升级 RKE2 版本的脚本。
2. 使用相同的环境变量再次运行脚本。
3. 重启 RKE2 服务。

</TabItem>
</Tabs>

### 故障排除

参见[故障排除](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)页面。

### 后续操作
[安装 Rancher](install-rancher-ha.md)
