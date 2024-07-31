---
title: Rancher 管理集群的节点要求
---

本页描述了 Rancher 管理的 Kubernetes 集群的要求，你的应用和服务将安装在这些集群中。这些下游集群应该与运行 Rancher 的三节点集群分开。

:::note

如果 Rancher 安装在高可用的 Kubernetes 集群上，Rancher Server 的三节点集群和下游集群有不同的要求。有关 Rancher 的安装要求，请参考[安装文档](../../../pages-for-subheaders/installation-requirements.md)中的节点要求。

:::

## 操作系统和容器运行时要求

Rancher 兼容当前所有的主流 Linux 发行版和任何通用的 Docker 版本。所有下游集群的 etcd 和 controlplane 节点都需要运行在 Linux 上。而 Worker 节点可以运行在 Linux 或 [Windows Server](#windows-节点) 上。

如需了解各个 Rancher 版本通过了哪些操作系统和 Docker 版本测试，请参见[支持和维护条款](https://rancher.com/support-maintenance-terms/)。

所有支持的操作系统都使用 64-bit x86 架构。

如果你想使用 ARM64，请参阅[在 ARM64 上运行（实验功能）。](../../advanced-user-guides/enable-experimental-features/rancher-on-arm64.md)

有关如何安装 Docker 的信息，请参阅 [Docker 官方文档](https://docs.docker.com/)。

### Oracle Linux 和 RHEL 衍生的 Linux 节点

某些源自 RHEL 的 Linux 发行版（包括 Oracle Linux）的默认防火墙规则可能会阻止与 Helm 的通信。我们建议禁用 firewalld。如果你的 Kubernetes 版本是 1.19，请务必禁用 firewalld。

:::note

在 RHEL 8.4 中，NetworkManager 上有两个额外的服务，即 `nm-cloud-setup.service` 和 `nm-cloud-setup.timer`。这些服务增加了一个路由表，干扰了 CNI 插件的配置。如果启用了这些服务，你必须使用以下命令禁用它们，然后重新启动节点以恢复连接：

```
systemctl disable nm-cloud-setup.service nm-cloud-setup.timer
reboot
```

:::

### SUSE Linux 节点

SUSE Linux 可能有一个防火墙，默认情况下会阻止所有端口。在这种情况下，请按照[步骤](../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#打开-suse-linux-端口)打开将主机添加到自定义集群所需的端口。

### Flatcar Container Linux 节点

使用 Flatcar Container Linux 节点[通过 Rancher 启动 Kubernetes](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md) 时，需要在 [Cluster Config 文件](../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md#rke-集群配置文件参考)中使用如下配置：

<Tabs>
<TabItem value="Canal">

```yaml
rancher_kubernetes_engine_config:
  network:
    plugin: canal
    options:
      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds
      flannel_backend_type: vxlan

  services:
    kube-controller:
      extra_args:
        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/
```

</TabItem>
<TabItem value="Calico">

```yaml
rancher_kubernetes_engine_config:
  network:
    plugin: calico
    options:
      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds
      flannel_backend_type: vxlan

  services:
    kube-controller:
      extra_args:
        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/
```

</TabItem>
</Tabs>

还需要启用 Docker 服务，你可以使用以下命令启用 Docker 服务：

```
systemctl enable docker.service
```

使用[主机驱动](../../../pages-for-subheaders/about-provisioning-drivers.md#主机驱动)时会自动启用 Docker 服务。

### Windows 节点

运行 Windows Server 节点必须使用 Docker 企业版。

Windows 节点只能用于 Worker 节点。请参阅[配置 Windows 自定义集群](../../../pages-for-subheaders/use-windows-clusters.md)。

## 硬件要求

你的工作负载决定了具有 `worker` 角色的节点的硬件要求。运行 Kubernetes 节点组件的最低要求是 1 个 CPU（核心）和 1GB 内存。

关于 CPU 和内存，建议将 Kubernetes 集群的不同平面（etcd、controlplane 和 worker）托管在不同的节点上，以便它们可以相互独立扩展。

有关大型 Kubernetes 集群的硬件建议，请参阅[构建大型集群](https://kubernetes.io/docs/setup/best-practices/cluster-large/)的官方 Kubernetes 文档。

有关生产环境中 etcd 集群的硬件建议，请参阅官方 [etcd 文档](https://etcd.io/docs/v3.5/op-guide/hardware/)。

## 网络要求

对于生产集群，我们建议你通过仅打开以下端口要求中定义的端口来限制流量。

需要开放的端口根据下游集群的启动方式而有所不同。以下列出了需要为不同[集群创建选项](../../../pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md)打开的端口。

有关 Kubernetes 集群中 etcd 节点、controlplane 节点和 Worker 节点的端口要求的详细信息，请参阅 [Rancher Kubernetes Engine 的端口要求](https://rancher.com/docs/rke/latest/en/os/#ports)。

在[下游集群端口要求](../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#下游-kubernetes-集群节点)中，你可以找到在各种情况下使用的端口的详细信息。

:::caution

不要使用与现有节点相同的主机名或 IP 地址来注册节点。这样做会导致 RKE 阻止节点加入，并导致配置挂起。主机驱动和自定义集群都可能发生这种情况。如果节点必须重用现有节点的主机名或 IP，则必须在注册节点之前设置 `hostname_override` [RKE 选项](https://rke.docs.rancher.com/config-options/nodes#overriding-the-hostname)，以便节点能够正确加入。

:::

## 可选：安全注意事项

如果你要配置符合 CIS（互联网安全中心）Kubernetes 基准的 Kubernetes 集群，我们建议你在安装 Kubernetes 之前按照我们的强化指南来配置节点。

有关强化指南的更多信息，以及了解哪个指南版本对应于你的 Rancher 和 Kubernetes 版本，请参阅[安全](../../../pages-for-subheaders/rancher-security.md#rancher-强化指南)。
