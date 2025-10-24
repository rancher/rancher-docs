---
title: '2. 安装 Kubernetes'
---

基础设施配置好后，你可以设置一个 Kubernetes 集群来安装 Rancher。

设置 RKE2 或 K3s 的步骤如下所示。

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
</Tabs>

### 故障排除

参见[故障排除](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)页面。

### 后续操作
[安装 Rancher](install-rancher.md)
