---
title: Dockershim
---

Dockershim 是 Kubelet 和 Docker Daemon 之间的 CRI 兼容层。Kubernetes 1.20 版本宣布了[移除树内 Dockershim](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/)。目前计划在 Kubernetes 1.24 中移除。有关此移除的更多信息以及时间线，请参见 [Kubernetes Dockershim 弃用相关的常见问题](https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed)。

要启用外部 Dockershim，配置以下选项：

```
enable_cri_dockerd: true
```

如果你想使用其他容器运行时，Rancher 也提供使用 Containerd 作为默认运行时的，以边缘为中心的 K3s，和以数据中心为中心的 RKE2 Kubernetes 发行版。即使在 Kubernetes 1.24 删除了树内 Dockershim 之后，你也可以通过 Rancher 升级和管理导入的 RKE2 和 K3s Kubernetes 集群。

## 常见问题

<EOLRKE1Warning />

<br/>

Q: 如果我不想再依赖 Dockershim，我还有什么选择？

A: 你可以为 Kubernetes 使用不需要 Dockershim 支持的运行时，如 Containerd。RKE2 和 K3s 就是其中的两个选项。

<br/>

Q: 如果我目前使用 RKE1，但想切换到 RKE2，我可以怎样进行迁移？

A: Rancher 也在探索就地升级路径的可能性。此外，你始终可以使用 kubectl 将工作负载迁移到另一个集群。

<br/>
