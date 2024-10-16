---
title: '2. 安装 Kubernetes'
---

基础设施配置好后，你可以设置一个 Kubernetes 集群来安装 Rancher。

设置 RKE、RKE2 或 K3s 的步骤如下所示。

为方便起见，将代理的 IP 地址和端口导出到一个环境变量中，并在每个节点上为你当前的 shell 设置 HTTP_PROXY 变量：

```
export proxy_host="10.0.0.5:8888"
export HTTP_PROXY=http://${proxy_host}
export HTTPS_PROXY=http://${proxy_host}
export NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16
```

<Tabs>
<TabItem value="K3s">

首先在 K3s systemd 服务上配置 HTTP 代理设置，让 K3s 的 containerd 可以通过代理拉取镜像：

```
cat <<'EOF' | sudo tee /etc/default/k3s > /dev/null
HTTP_PROXY=http://${proxy_host}
HTTPS_PROXY=http://${proxy_host}"
NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local
EOF
```

Rancher 需要安装在支持的 Kubernetes 版本上。如需了解你使用的 Rancher 版本支持哪些 Kubernetes 版本，请参见 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/)。

如需指定 K3s（Kubernetes）版本，在运行 K3s 安装脚本时使用 `INSTALL_K3S_VERSION` 环境变量（例如 `INSTALL_K3S_VERSION="v1.24.10+k3s1"`）。

在第一个节点上，创建一个新集群：
```
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=<VERSION> K3S_TOKEN=<TOKEN> sh -s - server --cluster-init
```

然后加入其他节点：
```
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=<VERSION> K3S_TOKEN=<TOKEN> sh -s - server --server https://<SERVER>:6443
```

其中 `<SERVER>` 是 Server 的 IP 或有效 DNS，`<TOKEN>` 是可以在 `/var/lib/rancher/k3s/server/node-token` 中找到的 Server node-token。

有关安装 K3s 的更多信息，请参阅 [K3s 安装文档](https://docs.k3s.io/installation)。

如需查看集群，请运行以下命令：

```
kubectl cluster-info
kubectl get pods --all-namespaces
```

</TabItem>
<TabItem value="RKE2">

在每个节点上，运行 RKE2 安装脚本。确保你安装的 RKE2 版本受 [Rancher 支持](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/)。

```
curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.xx sh -
```

然后，你必须在 RKE2 systemd 服务上配置 HTTP 代理设置，让 RKE2 的 containerd 可以通过代理拉取镜像：

```
cat <<'EOF' | sudo tee /etc/default/rke2-server > /dev/null
HTTP_PROXY=http://${proxy_host}
HTTPS_PROXY=http://${proxy_host}"
NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local
EOF
```

接下来，按照 [RKE2 高可用性文档](https://docs.rke2.io/install/ha)在每个节点上创建 RKE2 配置文件。

之后启动并启用 `rke2-server` 服务：

```
systemctl enable rke2-server.service
systemctl start rke2-server.service
```

有关安装 RKE2 的更多信息，请参阅 [RKE2 文档](https://docs.rke2.io)。

如需查看集群，请运行以下命令：

```
export KUBECONFIG=/etc/rancher/rke2/rke2.yaml
alias kubectl=/var/lib/rancher/rke2/bin/kubectl
kubectl cluster-info
kubectl get pods --all-namespaces
```

</TabItem>
<TabItem value="RKE">

首先，你需要在所有三个 Linux 节点上安装 Docker 并设置 HTTP 代理。因此，你可以在这三个节点上执行以下步骤。

接下来配置 apt 以在安装包时使用这个代理。如果你使用的不是 Ubuntu，请相应调整步骤。

```
cat <<'EOF' | sudo tee /etc/apt/apt.conf.d/proxy.conf > /dev/null
Acquire::http::Proxy "http://${proxy_host}/";
Acquire::https::Proxy "http://${proxy_host}/";
EOF
```

安装 Docker：

```
curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh
```

然后，确保你的当前用户能够在没有 sudo 的情况下访问 Docker Daemon：

```
sudo usermod -aG docker YOUR_USERNAME
```

配置 Docker Daemon 使用代理来拉取镜像：

```
sudo mkdir -p /etc/systemd/system/docker.service.d
cat <<'EOF' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf > /dev/null
[Service]
Environment="HTTP_PROXY=http://${proxy_host}"
Environment="HTTPS_PROXY=http://${proxy_host}"
Environment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"
EOF
```

要应用配置，请重新启动 Docker Daemon：

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### 离线代理

你现在可以在配置的离线集群中配置主机驱动集群，以使用代理进行出站连接。

除了为代理服务器设置默认规则外，你还需要额外添加如下所示的规则，以从代理的 Rancher 环境中配置主机驱动集群。

根据你的设置配置文件路径，例如 `/etc/apt/apt.conf.d/proxy.conf`：

```
acl SSL_ports port 22
acl SSL_ports port 2376

acl Safe_ports port 22      # ssh
acl Safe_ports port 2376    # docker port
```

### 创建 RKE 集群

在能通过 SSH 访问 Linux 节点的主机上，你需要有几个命令行工具，来创建集群并与之交互：

* [RKE CLI binary](https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary)

```
sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64
sudo chmod +x /usr/local/bin/rke
```

* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

接下来，创建一个描述 RKE 集群的 YAML 文件。确保节点的 IP 地址和 SSH 用户名是正确的。有关集群 YAML 的详情，请参见 [RKE 官方文档](https://rancher.com/docs/rke/latest/en/example-yamls/)。

```yml
nodes:
  - address: 10.0.1.200
    user: ubuntu
    role: [controlplane,worker,etcd]
  - address: 10.0.1.201
    user: ubuntu
    role: [controlplane,worker,etcd]
  - address: 10.0.1.202
    user: ubuntu
    role: [controlplane,worker,etcd]

services:
  etcd:
    backup_config:
      interval_hours: 12
      retention: 6
```

之后，你可以通过运行以下命令来创建 Kubernetes 集群：

```
rke up --config rancher-cluster.yaml
```

RKE 会创建一个名为 `rancher-cluster.rkestate` 的状态文件。如果你需要更新或修改集群配置，或使用备份恢复集群，则需要使用该文件。RKE 还会创建一个 `kube_config_cluster.yaml` 文件，你可以使用该文件在本地使用 kubectl 或 Helm 等工具连接到远端的 Kubernetes 集群。请将这些文件保存在安全的位置，例如版本控制系统中。

如需查看集群，请运行以下命令：

```
export KUBECONFIG=kube_config_cluster.yaml
kubectl cluster-info
kubectl get pods --all-namespaces
```

你也可以验证你的外部负载均衡器是否工作，DNS 条目是否设置正确。如果你向其中之一发送请求，你会收到来自 Ingress Controller 的 HTTP 404 响应：

```
$ curl 10.0.1.100
default backend - 404
$ curl rancher.example.com
default backend - 404
```

### 保存你的文件

:::note 重要提示：

维护、排除问题和升级集群需要用到以下文件，请妥善保管这些文件：

:::

将以下文件的副本保存在安全位置：

- `rancher-cluster.yml`：RKE 集群配置文件。
- `kube_config_cluster.yml`：集群的 [Kubeconfig 文件](https://rancher.com/docs/rke/latest/en/kubeconfig/)。该文件包含可完全访问集群的凭证。
- `rancher-cluster.rkestate`：[Kubernetes 集群状态文件](https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state)。此文件包含集群的当前状态，包括 RKE 配置和证书。

:::note

后两个文件名中的 `rancher-cluster` 部分取决于你命名 RKE 集群配置文件的方式。

:::

</TabItem>
</Tabs>

### 故障排除

参见[故障排除](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)页面。

### 后续操作
[安装 Rancher](install-rancher.md)
