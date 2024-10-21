---
title: Rancher 扩展技巧
---

本指南介绍了扩展 Rancher 时应该考虑的方法，以及这样做的难度。随着系统的增长，性能自然会降低，但我们可以采取一些措施来最大限度地减少 Rancher 的负载，并优化 Rancher 处理这些大型设置的能力。

## 优化 Rancher 性能的技巧
* 建议及时更新 Rancher 的补丁版本。在次要版本的整个生命周期中，我们都会进行性能改进和错误修复。你可以查看发行说明决定是否需要升级，但在大多数情况下，我们建议你使用最新版本。

* 性能会受 Rancher 的基础设施和下游集群的基础设施之间的延迟影响（例如，地理距离）。如果用户需要遍布全球或分布在许多地区的集群/节点，最好使用多个 Rancher。

* 请始终尝试逐渐扩大规模，同时监控和观察变化。通常情况下，性能问题越早解决越好，而且在其他问题出现之前更容易解决。

## 最小化本地集群的负载
扩展 Rancher 最大的瓶颈是本地 Kubernetes 集群中的资源增长。local 集群包含所有下游集群的信息。下游集群的许多操作将在 local 集群中创建新对象，并需要使用 local 集群中运行的处理程序进行计算。

### 管理对象数量
ETCD 最终会遇到存储的 Kubernetes 资源数量超过限制的问题。暂时没有这些数字的确切记录。根据内部观察，一旦单个资源类型的对象数量超过 60k（通常是 Rolebindings），就很有可能遇到性能问题。

Rolebindings 是在 local 集群中创建的，是许多操作的结果。

尝试减少 local 集群中的 rolebindings 时需要注意：
* 仅在必要时将用户添加到集群和项目中
* 删除不需要的集群和项目
* 仅在必要时使用自定义角色
* 在自定义角色中使用尽可能少的规则
* 考虑给用户添加角色是否多余
* 使用更少但更强大的集群可能更高效
* 检查是否能通过创建新项目或新集群为你的用例减少 rolebindings。

### 使用新版应用程序而不是旧版应用程序
Rancher 使用了两个应用程序 kubernetes 资源，分别是 apps.projects.cattle.io 和 apps.cattle.cattle.io。旧版应用程序 apps.projects.cattle.io 最初是在 Cluster Manager 中引入的，现在已经过时。新版应用程序 apps.catalog.cattle.io 可在其各自集群的 Cluster Explorer 中找到。新版应用程序更受欢迎，因为它们位于下游集群中，而旧版应用程序位于 local 集群中。

我们建议删除 Cluster Manager 中出现的应用程序，如有必要，可以为目标集群替换为 Cluster Explorer 中的应用程序，并仅在集群的 Cluster Explorer 中创建后续的应用程序。

### 使用授权集群端点（ACE）
Rancher 配置的 RKE1、RKE2 和 K3s 集群有一个 _授权集群端点_ 选项。启用后，会在为集群生成的 kubeconfigs 中添加一个上下文，该上下文使用一个直接到集群的端点，并绕过 Rancher。但是，仅启用此选项是不够的。Kubeconfig 的用户需要使用 `kubectl use-context <ace context name>` 才能开始使用它。

如果不使用 ACE，所有 kubeconfig 请求都会先通过 Rancher 进行路由。

### 实验功能：减少事件处理程序执行的选项
Rancher 的大部分逻辑都发生在事件处理程序上。每当更新对象以及启动 Rancher 时，这些事件处理程序都会在对象上运行。此外，当缓存同步时，它们每 15 小时会运行一次。在缩放设置中，由于每个处理程序都会在每个适用对象上运行，因此运行这些计划会消耗巨大的性能。但是，你可以使用 `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` 环境变量来禁用处理程序的这些计划执行。如果在大约 15 小时的间隔内看到资源分配峰值，则此设置可能有帮助。

环境变量的值可以是以下选项的逗号分隔列表。这些值指的是控制器的类型（包含和运行处理程序的 struct）及其处理程序。如果将控制器类型添加到变量中，那么该组控制器将无法在重新同步缓存时运行其处理程序。

* `mgmt` 指的是只运行在一个 Rancher 节点上的管理控制器。
* `user` 指的是为每个集群运行的用户控制器。其中一些运行在与管理控制器相同的节点上，而其他则运行在下游集群中。该选项针对前者。
* `scaled` 指的是在每个 Rancher 节点上运行的缩放控制器。由于缩放处理程序负责的关键功能，因此不建议设置。

简而言之，如果你发现 CPU 使用率每 15 小时出现一次峰值，请将 `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` 环境变量添加到你的 Rancher 部署中，其值为 `mgmt,user`。

## Rancher 之外的优化
影响性能的一个重要因素是 local 集群及其配置方式。该集群可能会在 Rancher 运行之前引入瓶颈。当 Rancher 节点出现资源占用过高的情况时，你可以使用 top 命令来判断是 Rancher 还是 Kubernetes 组件在超额消耗资源。

### 保持使用最新版本的 Kubernetes
与 Rancher 版本类似，我们建议让你的 kubernetes 集群保持使用最新版本。这将确保你的集群能包含可用的性能增强或错误修复。

### 优化 ETCD
[ETCD 性能](https://etcd.io/docs/v3.5/op-guide/performance/)的两个主要瓶颈是磁盘速度和网络速度。对任何一个进行优化都应该能提高性能。有关 ETCD 性能的信息，请参阅 [etcd 性能慢（性能测试和优化）](https://www.suse.com/support/kb/doc/?id=000020100)和[为大型安装调优 etcd](https://docs.ranchermanager.rancher.io/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs)。有关磁盘的信息，你也可以参阅[我们的文档](https://docs.Ranchermanager.Rancher.io/v2.5/pages-for-subheaders/installation-requirements#disks)。

理论上，ETCD 集群中的节点越多，由于复制要求 [source](https://etcd.io/docs/v3.3/faq)，它就会越慢。这可能与常见的缩放方法相悖。我们还可以推断，ETCD 的性能将受到节点间距离的反面影响，因为这将减慢网络通信。
