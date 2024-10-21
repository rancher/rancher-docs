---
title: 安装 Docker
---

在使用 Helm 在 RKE 集群节点上或使用 Docker 安装 Rancher Server 前，你需要在节点中先安装 Docker。RKE2 和 K3s 集群不要求使用 Docker。

Docker 有几个安装方法。一种方法是参见 [Docker 官方文档](https://docs.docker.com/install/)以了解如何在 Linux 上安装 Docker。不同 Linux 发行版的安装步骤可能有所不同。

另一种方式是使用 Rancher 的 Docker 安装脚本，该脚本可用于较新的 Docker 版本。 Rancher 为每个 Kubernetes 支持的上游 Docker 版本提供了安装脚本。

例如，此命令可用于在 SUSE Linux Enterprise 或 Ubuntu 等主要 Linux 发行版上安装 Docker ：

```bash
curl https://releases.rancher.com/install-docker/<version-number>.sh | sh
```

请参阅 [Rancher 支持矩阵](https://www.suse.com/suse-rancher/support-matrix)，使用匹配你的操作系统和 Rancher 版本并且经过验证的 Docker 版本。 尽管支持矩阵列出了经过验证的 Docker 版本直至补丁版本，但只有发行版的主要版本和次要版本与 Docker 安装脚本相关。

请注意，必须应用以下 sysctl 设置：

```bash
net.bridge.bridge-nf-call-iptables=1
```
