---
title: Rancher 大规模部署的调优和最佳实践
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale"/>
</head>

本指南介绍了扩容 Rancher 相关场景的最佳实践和调优方法。随着系统规模的不断增长，性能自然会降低，但是可以采取一些步骤将 Rancher 的负载最小化，以优化 Rancher 管理较大基础设施的能力。

## 优化 Rancher 性能

* 及时升级 Rancher 的 Patch 更新。我们会不断的对 Rancher 进行性能增强和错误修复，最新的 Rancher 版本包含了基于开发人员和用户反馈的所有性能和稳定性的优化改进。
* 逐渐的执行扩容操作，在操作的过程中观察并监控任何变化，在性能刚出现异常时发现问题并修复，避免其他干扰因素。
* 尽可能地减少上游 Rancher 集群和下游集群之间的网络延时。需要注意的是，排除掉其他因素，延时与地理距离成正比，如果你的集群或节点分布在全球各地，请考虑改为安装多个 Rancher。

## 最小化上游集群的负载

在 Rancher 扩容时，一个典型的性能瓶颈是上游（local）Kubernetes 集群的资源增长。上游集群包含所有下游集群的数据信息，许多对下游集群的操作会在上游集群中创建新的对象，并需要在上游集群中进行计算处理。

### 最大限度地减少上游集群上的第三方软件

大规模运行 Rancher 可能会给内部 Kubernetes 组件（例如 `etcd` 或 `kubeapiserver`）带来大量负载。如果第三方软件干扰了这些组件或 Rancher 的性能，则可能会出现性能问题。

每个第三方软件都存在干扰性能的风险。为了防止上游集群出现性能问题，你应该避免运行除 Kubernetes 系统组件和 Rancher 本身之外的任何应用程序或组件。

以下类别的软件通常不会干扰 Rancher 或 Kubernetes 系统性能：
 * Rancher 内部组件，例如 Fleet
 * Rancher 扩展
 * 集群 API 组件
 * CNI 网络插件
 * 云控制器管理器
 * 观察和监控工具（`prometheus-rancher-exporter` 除外）

除此之外，已发现以下软件会在 Rancher 扩容时影响性能：
  * [CrossPlane](https://www.crossplane.io/)
  * [Argo CD](https://argoproj.github.io/cd/)
  * [Flux](https://fluxcd.io/)
  * [prometheus-rancher-exporter](https://github.com/David-VTUK/prometheus-rancher-exporter)（请参阅 [issue 33](https://github.com/David-VTUK/prometheus-rancher-exporter/issues/33)）

### 管理你的 Object 计数

Etcd 是 Kubernetes 和 Rancher 的后端数据库，该数据库可能会遇到单个 Kubernetes 资源类型数量的限制，确切的限制因素各不相同，取决于诸多因素。经验表明，一旦单个资源类型的对象数量超过 60000，通常会出现性能问题，通常该资源类型是 RoleBinding 对象。

这在 Rancher 中很常见，因为许多操作会在上游集群中创建新的 RoleBinding 对象。

你可以通过以下方法减少上游集群的 `RoleBinding` 数量：
* 减少使用 [Restricted Admin（受限管理员）](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md#受限管理员) 角色，改为使用其他角色。
* 如果你使用了 [外部认证](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md)，配置其按组分配角色。
* 仅在必要情况下将用户添加到集群和项目中。
* 移除不需要的集群和项目。
* 仅在必要情况下使用自定义角色。
* 在自定义角色中，尽可能的减少规则数量。
* 避免为用户添加多余的角色。
* 考虑使用数量更少，但性能更强大的集群。
* Kubernetes 权限始终是 “附加”（允许列表）而不是“减去”（拒绝列表）。尽量减少允许访问集群、项目或命名空间等方面的配置，因为这将导致创建大量的 RoleBinding 对象。
* 实验一下，创建新项目或集群后，在你的特定用例场景是否表现出更少的 RoleBinding 的效果。

### RoleBinding 计数估计

预测给定的配置将创建多少个 RoleBinding 对象很复杂，但是以下注意事项可以提供粗略的估算：
* 对于最小的数量估计，请使用公式 `32C + U + 2UaC + 8P + 5Pa`。
   * `C` 是集群数量。
   * `U` 是用户数量。
   * `Ua` 是集群中具有成员资格的用户的平均数量。
   * `P` 是项目总数。
   * `Pa` 是项目中具有成员资格的平均用户数。
* 受限管理员角色（Restricted Admin）遵循不同的公式，因为具有此角色的每个用户都会额外产生至少 `7C + 2P + 2` 个 `RoleBinding` 对象。
* `RoleBinding` 的数量会随着集群、项目和用户的数量线性增加。

### 使用新的应用代替旧版应用

Rancher 使用两个 Kubernetes 应用程序资源：`apps.projects.cattle.io` 和 `apps.cattle.cattle.io`。以`apps.projects.cattle.io` 为代表的旧版应用程序在低版本的 Cluster Manager UI 中引入，现已弃用。新的应用程序（由 `apps.catalog.cattle.io` 表示）可以在 Cluster Explorer UI 中安装部署。新的 `apps.cattle.cattle.io` 应用程序数据保存在下游集群中，这可以减少上游集群中的资源数量。

你应当删除 Cluster Manager UI 中遗留的所有旧版应用程序，并将其替换为 Cluster Explorer UI 中的应用程序。只在 Cluster Explorer UI 中创建任何新应用程序。

### 使用授权集群端点 (ACE)

[授权集群端点](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点) (ACE) 提供了 Rancher 部署的 RKE、RKE2 和 K3s 集群的 Kubernetes API 访问。启用后，ACE 会为生成的 `kubeconfig` 文件配置直接访问下游集群 Endpoint，从而绕过 Rancher 代理。在可以直接访问下游集群 Kubernetes API 的场景下，可以减少 Rancher 负载。有关更多信息，请参阅[授权集群端点](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-授权集群端点)配置说明。

### 减少 Event Handler 执行

Rancher 的大部分逻辑发生在 Event Handler 上。每当资源对象产生更新或 Rancher 启动时，这些资源对应的 Event Handler 都会执行。除此之外，它们会每隔 15 小时在 Rancher 计划的同步缓存时再运行一次，这可能会导致 Rancher 运行过程中出现大量性能消耗。可使用 `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` 环境变量禁用计划的 Handler 处理程序执行。如果每 15 小时出现一次性能资源高峰，此设置会有所帮助。

`CATTLE_SYNC_ONLY_CHANGED_OBJECTS` 的值可被设置为以下内容，以逗号分隔。这些值代表了处理程序的种类，将处理程序添加到该变量会禁止其在定期的缓存重新同步过程中运行。

* `mgmt`：在 Rancher 节点上运行的 Management 管理控制器。
* `user`：所有集群运行的用户控制器。其中一部分与 Management 管理控制器运行在同一节点上，而另一部分运行在下游集群中，该选项针对的是前者。
* `scaled`：每个 Rancher 节点上运行的规模控制器。因规模控制器负责关键功能，应当避免设置此值。如果设置可能会破坏集群稳定。

简而言之，如果你发现 CPU 使用率每 15 小时出现一次峰值，请将 `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` 环境变量添加到 Rancher Deployment 中（添加至 `spec.containers.env` 列表），其值为 `mgmt,user`。

## Rancher 之外的优化

集群底层自身的配置也是影响性能的重要因素。如果上游集群存在错误配置，会带来 Rancher 软件所无法解决的性能瓶颈。

### 使用 RKE2 直接管理上游集群节点

由于 Rancher 对上游集群的要求非常高，尤其是在大规模部署场景，你需要拥有上游集群和节点的所有管理员权限，要找出资源消耗过高的根本原因，请使用标准的 Linux 故障排除工具，这有助于区分是 Rancher、Kubernetes 还是操作系统组件出现的问题。

尽管托管 Kubernetes 服务使部署和运行 Kubernetes 集群变得更加容易，但在大规模场景中，不鼓励将其用于上游集群。 托管 Kubernetes 服务通常会限制对单个节点和服务配置的访问。

建议在大规模用例场景中使用 RKE2 集群。

### 及时更新 Kubernetes 版本

你应当及时更新上游集群的 Kubernetes 版本，以确保你的集群具备最新的性能增强和问题修复。

### 优化 Etcd

Etcd 是 Kubernetes 和 Rancher 的后端数据库，在 Rancher 性能中扮演重要的角色。

[Etcd 性能](https://etcd.io/docs/v3.4/op-guide/performance/)的两个主要瓶颈是磁盘和网络速度。Etcd 应当在具有高速网络和高读写速度 (IOPS) SSD 硬盘的专用节点上运行。有关 etcd 性能的更多信息，请参阅 [etcd 性能缓慢（性能测试和优化）](https://www.suse.com/support/kb/doc/?id=000020100)和[为大型安装进行 etcd 调优](../../../how-to-guides/advanced-user-guides/tune-etcd-for-large-installs.md)。有关磁盘的信息可以在[安装要求](../../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md#磁盘)中找到。

根据 etcd 的[复制机制](https://etcd.io/docs/v3.5/faq/#what-is-maximum-cluster-size)，建议在三个节点上运行 etcd，运行在更多的节点上反而会降低速度。

Etcd 性能也会受节点之间的网络延迟影响，因此 etcd 节点应与 Rancher 节点部署在一起。
