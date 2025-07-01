---
title: Dockershim
---

Dockershim 是 Kubelet 和 Docker Daemon 之间的 CRI 兼容层。Kubernetes 1.20 版本宣布了[移除树内 Dockershim](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/)。有关此移除的更多信息以及时间线，请参见 [Kubernetes Dockershim 弃用相关的常见问题](https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed)。

RKE 集群现在支持外部 Dockershim，来让用户继续使用 Docker 作为 CRI 运行时。现在，我们通过使用 [Mirantis 和 Docker ](https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/) 来确保 RKE 集群可以继续使用 Docker，从而实现上游开源社区的外部 Dockershim。

RKE2 和 K3s 集群使用嵌入的 containerd 作为容器运行时，因此不受影响。

要在 1.24 之前的 RKE 版本中启用外部 Dockershim，请配置以下选项：

```
enable_cri_dockerd: true
```

从 1.24 版本开始，以上默认为 true。

如果你想使用其他容器运行时，Rancher 也提供使用 Containerd 作为默认运行时的，以边缘为中心的 K3s，和以数据中心为中心的 RKE2 Kubernetes 发行版。然后，你就可以通过 Rancher 对导入的 RKE2 和 K3s Kubernetes 集群进行升级和管理。

### 常见问题

<br/>

Q：是否必须升级 Rancher 才能获得 Rancher 对上游外部 Dockershim 替换的支持？

A：对于 RKE，Dockershim `cri_dockerd` 替换的上游支持从 Kubernetes 1.21 开始。你需要使用支持 RKE 1.21 的 Rancher 版本。详情请参见我们的支持矩阵。

<br/>

Q：我目前的 RKE 使用 Kubernetes 1.23。如果上游最终在 1.24 中删除 Dockershim，会发生什么？

A：RKE 中带有 Kubernetes 的 Dockershim 版本将继续工作到 1.23。有关时间线的更多信息，请参见 [Kubernetes Dockershim 弃用相关的常见问题](https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed)。从 1.24 开始，RKE 将默认启用 `cri_dockerd` 并在之后的版本中继续启用。

<br/>

Q: 如果我不想再依赖 Dockershim 或 cri_dockerd，我还有什么选择？

A: 你可以为 Kubernetes 使用不需要 Dockershim 支持的运行时，如 Containerd。RKE2 和 K3s 就是其中的两个选项。

<br/>

Q: 如果我目前使用 RKE1，但想切换到 RKE2，我可以怎样进行迁移？

A: 你可以构建一个新集群，然后将工作负载迁移到使用 Containerd 的新 RKE2 集群。Rancher 也在探索就地升级路径的可能性。

<br/>
