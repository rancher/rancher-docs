---
title: 架构推荐
---

如果你准备在单个节点上安装 Rancher，我们推荐你[分开部署 Rancher 与下游集群](#分开部署-rancher-与下游集群)。

## 分开部署 Rancher 与下游集群

下游集群，是运行你自己的应用和服务的下游 Kubernetes 集群。

如果你通过 Docker 安装了 Rancher，运行 Rancher Server 的节点应该与你的下游集群分开。

如果你需要使用 Rancher 管理下游 Kubernetes 集群，那么运行 Rancher Server 的 Kubernetes 集群也应该与下游集群分开。

![分开部署 Rancher Server 与下游集群](/img/rancher-architecture-separation-of-rancher-server.svg)

## 为什么高可用（HA）更适合生产环境中的 Rancher

我们建议在高可用 Kubernetes 集群上安装 Rancher Server，以保护 Rancher Server 的数据。在高可用安装中，负载均衡器充当客户端的单点入口，并在集群中的多台服务器之间分配网络流量，这有助于防止任何一台服务器成为单点故障。

我们不建议在单个 Docker 容器中安装 Rancher，因为如果该节点发生故障，则其他节点上将没有可用的集群数据副本，并且你可能会丢失 Rancher Server 上的数据。

### K3s Kubernetes 集群安装

底层 Kubernetes 集群的一种选择是使用 K3s Kubernetes。K3s 是 Rancher CNCF 认证的 Kubernetes 发行版。K3s 易于安装，仅需要 Kubernetes 内存的一半，所有组件都在一个小于 100 MB 的二进制文件中。K3s 的另一个优点是允许外部 Datastore 保存集群数据，因此可以把 K3s 服务器节点视为无状态。

<figcaption>运行 Rancher Management Server 的 K3s Kubernetes 集群的架构</figcaption>

![运行 Rancher Management Server 的 K3s Kubernetes 集群的架构](/img/k3s-server-storage.svg)

## Kubernetes 安装的负载均衡器推荐配置

我们建议你为负载均衡器和 Ingress Controller 使用以下配置：

* 把 Rancher 的 DNS 解析到四层负载均衡器上。
* 负载均衡器应该把 TCP/80 端口和 TCP/443 端口的流量转发到 Kubernetes 集群的全部 3 个节点上。
* Ingress Controller 会把 HTTP 重定向到 HTTPS，在 TCP/443 端口终结 SSL/TLS。
* Ingress Controller 会把流量转发到 Rancher deployment 的 Pod 上的 TCP/80 端口。

<figcaption>在 Kubernetes 集群中安装 Rancher，并使用四层负载均衡器，SSL 终止在 Ingress Controller 中</figcaption>

![Rancher HA](/img/ha/rancher2ha.svg)

## Kubernetes 安装环境

我们强烈建议你把 Rancher 安装到托管在云提供商（如 AWS EC2 和 Google Compute Engine（GCE）等）上的 Kubernetes 集群上。

为了达到最佳性能和安全性，我们建议你为 Rancher Management Server 创建一个专用的 Kubernetes 集群。不建议在此集群上运行用户工作负载。部署 Rancher 后，你可以[创建或导入集群](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md)来运行你的工作负载。

## Kubernetes 安装的推荐节点角色

如果 Rancher 安装在 K3s Kubernetes 上，则适用以下建议。

### K3s 集群角色

在 K3s 集群中有两种类型的节点，分别是 Server 节点和 Agent 节点。你可以把工作负载调度到 Server 节点和 Agent 节点上。Server 节点运行 Kubernetes master。

对于运行 Rancher Management Server 的集群，我们建议使用两个 server 节点。不需要 Agent 节点。

## 授权集群端点架构

如果你使用[授权集群端点（ACE）](../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点)，我们建议你创建一个指向负载均衡器的 FQDN，这个负载均衡器把流量转到所有角色为 `controlplane` 的节点。

如果你在负载均衡器上使用了私有 CA 签发的证书，你需要提供 CA 证书，这个证书会包含在生成的 kubeconfig 文件中，以校验证书链。详情请参见 [kubeconfig 文件](../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md)和 [API 密钥](../user-settings/api-keys.md#创建-api-密钥)的相关文档。

注册的 RKE2 和 K3s 集群可以使用 ACE 支持。点击[这里](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#对-rke2-和-k3s-集群的授权集群端点支持)了解在下游集群中开启 ACE 的步骤。
