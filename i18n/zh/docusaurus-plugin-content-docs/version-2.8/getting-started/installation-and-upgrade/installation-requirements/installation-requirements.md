---
title: 安装要求
description: 如果 Rancher 配置在 Docker 或 Kubernetes 中运行时，了解运行 Rancher Server 的每个节点的节点要求
---

本文描述了对需要安装 Rancher Server 的节点的软件、硬件和网络要求。Rancher Server 可以安装在单个节点或高可用的 Kubernetes 集群上。

:::note 重要提示：

如果你需要在 Kubernetes 集群上安装 Rancher，该节点的要求与用于运行应用和服务的[下游集群的节点要求](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md)不同。

:::

Rancher UI 在基于 Firefox 或 Chromium 的浏览器（Chrome、Edge、Opera、Brave）中效果最佳。

查看我们的[最佳实践](../../../reference-guides/best-practices/rancher-server/tips-for-running-rancher.md)页面，获取在生产环境中运行 Rancher Server 的建议。

## Kubernetes 与 Rancher 的兼容性

Rancher 需要安装在支持的 Kubernetes 版本上。请查阅 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions)，确保你的 Kubernetes 版本受支持。

## 操作系统和容器运行时要求

所有支持的操作系统都使用 64-bit x86 架构。Rancher 兼容当前所有的主流 Linux 发行版。

[Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions)列出了每个 Rancher 版本测试过的操作系统和 Docker 版本。

运行 RKE 集群的节点需要安装 Docker。RKE2 或 K3s 集群不需要它。

请安装 `ntp`（Network Time Protocol），以防止在客户端和服务器之间由于时间不同步造成的证书验证错误。

某些 Linux 发行版的默认防火墙规则可能会阻止 Kubernetes 集群内的通信。从 Kubernetes v1.19 开始，你必须关闭 firewalld，因为它与 Kubernetes 网络插件冲突。

如果你不太想这样做的话，你可以查看[相关问题](https://github.com/rancher/rancher/issues/28840)中的建议。某些用户已能成功[使用 ACCEPT 策略 为 Pod CIDR 创建一个独立的 firewalld 区域](https://github.com/rancher/rancher/issues/28840#issuecomment-787404822)。

如果你需要在 ARM64 上使用 Rancher，请参见[在 ARM64（实验功能）上运行 Rancher](../../../how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64.md)。

### RKE2 要求

对于容器运行时，RKE2 附带了自己的 containerd。RKE2 安装不需要 Docker。

如需了解 RKE2 通过了哪些操作系统版本的测试，请参见 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions)。


### K3s 要求

对于容器运行时，K3s 默认附带了自己的 containerd。你也可以将 K3s 配置为使用已安装的 Docker 运行时。有关在 Docker 中使用 K3s 的更多信息，请参阅 [K3s 文档](https://docs.k3s.io/advanced#using-docker-as-the-container-runtime)。

Rancher 需要安装在支持的 Kubernetes 版本上。如需了解你使用的 Rancher 版本支持哪些 Kubernetes 版本，请参见 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions)。如需指定 K3s 版本，在运行 K3s 安装脚本时，使用 `INSTALL_K3S_VERSION` 环境变量。

如果你使用 **Raspbian Buster** 在 K3s 集群上安装 Rancher，请按照[这些步骤](https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster)切换到旧版 iptables。

如果你使用 Alpine Linux 的 K3s 集群上安装 Rancher，请按照[这些步骤](https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup)进行其他设置。

### RKE 要求

RKE 需要 Docker 容器运行时。支持的 Docker 版本请参见 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions)

有关详细信息，请参阅[安装 Docker](install-docker.md)。

## 硬件要求

本节描述安装 Rancher Server 的节点的 CPU、内存和磁盘要求。硬件要求根据你的 Rancher 部署规模而定。

### 实际考虑

Rancher 的硬件占用空间取决于许多因素，包括：

 - 托管的基础设施规模 (例如： 节点数量，集群数量)。
 - 所需访问控制规则的复杂性（例如：RoleBinding 对象计数）。
 - 工作负载数量 (例如： Kubernetes 部署，Fleet 部署)。
 - 使用模式 (例如：主动使用的功能集合，使用频率，并发用户数量).

由于存在许多可能随时间变化的影响因素，因此此处列出的要求为适合大多数用例的起点。 然而，你的用例可能有不同的要求。 若你需要对于特定场景的咨询，请[联系 Rancher]((https://rancher.com/contact/)) 以获得进一步指导。


特别指出，本页面中的要求基于以下假设的环境提出，包括：
 - 每种类型的 Kubernetes 资源数量小于 60,000 个。
 - 每个节点最多 120 个 Pod。
 - 上游（本地）集群中最多 200 个 CRD。
 - 下游集群中最多 100 个 CRD。
 - 最多 50 个 Fleet 部署。

更多的数量也是能够达到的，但需要更高的硬件要求。 如果你有超过 20,000 个相同类型的资源，通过 Rancher UI 加载整个列表的时间可能需要几秒钟。

:::note Evolution:

Rancher 的代码库不断发展，用例不断变化，Rancher 积累的经验也在不断增长。

随着指导方针的准确性不断的提高并且变得更加具体，硬件要求也会发生变化。

如果你发现你的 Rancher 部署不再符合列出的建议，请[联系 Rancher](https://rancher.com/contact/) 进行重新评估。

:::

### RKE2 Kubernetes

下面的表格列出了[上游集群](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)中每个节点最小的 CPU 和内存要求。

请注意，生产环境下的高可用安装最少需要 3 个节点。

| 部署规模 | 最大集群数量 | 最大节点数量 | vCPUs | 内存 |
| --------------- | -------- | --------- | ----- | ---- |
| 小                       | 150                        | 1500                    | 4     | 16 GB |
| 中                      | 300                        | 3000                    | 8     | 32 GB |
| 大 (*)                   | 500                        | 5000                    | 16    | 64 GB |
| 更大 (†)                  | (†)                        | (†)                     | (†)   | (†)   |

(*)： 大规模的部署需要你[遵循最佳实践](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md)以获得足够的性能。

(†)： 通过特别的硬件建议和调整能够实现更大的部署规模。 你可以[联系 Rancher](https://rancher.com/contact/) 进行定制评估。

有关 RKE2 一般要求的更多详细信息，请参见 [RKE2 文档](https://docs.rke2.io/install/requirements)。

### K3s Kubernetes

下面的表格列出了[上游集群](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)中每个节点最小的 CPU 和内存要求。

请注意，生产环境下的高可用安装最少需要 3 个节点。

| 部署规模 | 最大集群数量 | 最大节点数量 | vCPUs | 内存 | 外部数据库(*) |
| --------------- | ---------- | ------------ | -------| ---------| ------------------------- |
| Small                       | 150                        | 1500                    | 4     | 16 GB | 2 vCPUs, 8 GB + 1000 IOPS  |
| Medium                      | 300                        | 3000                    | 8     | 32 GB | 4 vCPUs, 16 GB + 2000 IOPS |
| Large (†)                   | 500                        | 5000                    | 16    | 64 GB | 8 vCPUs, 32 GB + 4000 IOPS |

(*)：外部数据库是指将 K3s 集群数据存储在[专用的外部主机](https://docs.k3s.io/datastore)上。 这是可选的。 具体要求取决于使用的外部数据库。

(†)：大规模的部署需要你[遵循最佳实践](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md)以获得足够的性能。

有关 K3s 一般要求的更多详细信息，请参见 [K3s 文档](https://docs.k3s.io/installation/requirements)。

### 托管 Kubernetes

下面的表格列出了[上游集群](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)中每个节点最小的 CPU 和内存要求。

请注意，生产环境下的高可用安装最少需要 3 个节点。

这些要求适用于托管 Kubernetes 集群，例如 Amazon Elastic Kubernetes Service (EKS)、Azure Kubernetes Service (AKS) 或 Google Kubernetes Engine (GKE)。 它们不适用于 Rancher SaaS 解决方案，例如 [Rancher Prime Hosted](https://www.rancher.com/products/rancher)。

| 部署规模 | 最大集群数量 | 最大节点数量 | vCPUs | 内存   |
|-----------------------------|----------------------------|-------------------------|-------|-------|
| 小                       | 150                        | 1500                    | 4     | 16 GB |
| 中                      | 300                        | 3000                    | 8     | 32 GB |
| 大 (*)                   | 500                        | 5000                    | 16    | 64 GB |

(*)：大规模的部署需要你[遵循最佳实践](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md)以获得足够的性能。


### RKE

下面的表格列出了[上游集群](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)中每个节点最小的 CPU 和内存要求。

请注意，生产环境下的高可用安装最少需要 3 个节点。

| 部署规模 | 最大集群数量 | 最大节点数量 | vCPUs | 内存   |
|-----------------------------|----------------------------|-------------------------|-------|-------|
| 小                       | 150                        | 1500                    | 4     | 16 GB |
| 中                      | 300                        | 3000                    | 8     | 32 GB |
| 大 (*)                   | 500                        | 5000                    | 16    | 64 GB |

(*)： 大规模的部署需要你[遵循最佳实践](../../../reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md)以获得足够的性能。

有关 RKE 一般要求的更多详细信息，请参见 [RKE 文档](https://rke.docs.rancher.com/os)。

### Docker

下面的表格列出了[上游集群](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)中每个节点最小的 CPU 和内存要求。

请注意，在 Docker 中安装 Rancher 仅适用于开发或测试目的。不建议在生产环境中使用。

| 部署规模 | 最大集群数量 | 最大节点数量 | vCPUs | 内存  |
|-----------------------------|----------------------------|-------------------------|-------|------|
| 小                       | 5                          | 50                      | 1     | 4 GB |
| 中                      | 15                         | 200                     | 2     | 8 GB |

## Ingress

安装 Rancher 的 Kubernetes 集群中的每个节点都应该运行一个 Ingress。

Ingress 需要部署为 DaemonSet 以确保负载均衡器能成功把流量转发到各个节点。

如果是 RKE，RKE2 和 K3s 安装，你不需要手动安装 Ingress，因为它是默认安装的。

对于托管的 Kubernetes 集群（EKS、GKE、AKS），你需要设置 Ingress。

- **Amazon EKS**：[在 Amazon EKS 上安装 Rancher 以及如何安装 Ingress 以访问 Rancher Server](../install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md)。
- **AKS**：[使用 Azure Kubernetes 服务安装 Rancher 以及如何安装 Ingress 以访问 Rancher Server](../install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md)。
- **GKE**：[使用 GKE 安装 Rancher 以及如何安装 Ingress 以访问 Rancher Server](../install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md)。

## 磁盘

etcd 在集群中的性能决定了 Rancher 的性能。因此，为了获得最佳速度，我们建议使用 SSD 磁盘来支持 Rancher 管理的 Kubernetes 集群。在云提供商上，你还需使用能获得最大 IOPS 的最小大小。在较大的集群中，请考虑使用专用存储设备存储 etcd 数据和 wal 目录。

## 网络要求

本节描述了安装 Rancher Server 的节点的网络要求。

:::caution

如果包含 Rancher 的服务器带有 `X-Frame-Options=DENY` 标头，在升级旧版 UI 之后，Rancher UI 中的某些页面可能无法渲染。这是因为某些旧版页面在新 UI 中是以 iFrames 模式嵌入的。

:::

### 节点 IP 地址

无论你是在单个节点还是高可用集群上安装 Rancher，每个节点都应配置一个静态 IP。如果使用 DHCP，则每个节点都应该有一个 DHCP 预留，以确保节点分配到相同的 IP 地址。

### 端口要求

为了确保能正常运行，Rancher 需要在 Rancher 节点和下游 Kubernetes 集群节点上开放一些端口。不同集群类型的 Rancher 和下游集群的所有必要端口，请参见[端口要求](port-requirements.md)。

## Dockershim 支持

有关 Dockershim 支持的详情，请参见[此页面](dockershim.md)。
