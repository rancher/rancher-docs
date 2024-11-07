---
title: Pod 安全标准 (PSS) 和 Pod 安全准入 (PSA)
---

[Pod 安全标准 (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) 和 [Pod 安全准入 (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) 为大量工作负载定义了安全限制。
它们在 Kubernetes v1.23 中可用并默认打开，并在 Kubernetes v1.25 及更高版本中替换了 [Pod Security Policies (PSP)](https://kubernetes.io/docs/concepts/security/pod-security-policy/)。

PSS 定义了工作负载的安全级别。PSA 描述了 Pod 安全上下文和相关字段的要求。PSA 参考 PSS 级别来定义安全限制。

## 升级到 Pod 安全标准 (PSS)

确保将所有 PSP 都迁移到了另一个工作负载安全机制，包括将你当前的 PSP 映射到 Pod 安全标准，以便使用 [PSA 控制器](https://kubernetes.io/docs/concepts/security/pod-security-admission/)执行。如果 PSA 控制器不能满足企业的所有需求，建议你使用策略引擎，例如 [Kubewarden](https://www.kubewarden.io/)、[Kyverno](https://kyverno.io/) 或 [NeuVector](https://neuvector.com/)。有关如何迁移 PSP 的更多信息，请参阅你选择的策略引擎的文档。

:::caution
必须在删除 PodSecurityPolicy 对象_之前_添加新的策略执行机制。否则，你可能会为集群内的特权升级攻击创造机会。
:::

### 从 Rancher 维护的应用程序和市场工作负载中删除 PodSecurityPolicies

Rancher v2.7.2 提供了 Rancher 维护的 Helm Chart 的新主要版本。v102.x.y 允许你删除与以前的 Chart 版本一起安装的 PSP。这个新版本使用标准化的 `global.cattle.psp.enabled` 开关（默认关闭）替换了非标准的 PSP 开关。

你必须在_仍使用 Kubernetes v1.24_ 时执行以下步骤：
1. 根据需要配置 PSA 控制器。你可以使用 Rancher 的内置 [PSA 配置模板](#pod-安全准入配置模板)，或创建自定义模板并将其应用于正在迁移的集群。

1. 将活动的 PSP 映射到 Pod 安全标准：
   1. 查看集群中哪些 PSP 仍处于活动状态：
      :::caution
      此策略可能会错过当前未运行的工作负载，例如 CronJobs、当前缩放为零的工作负载或尚未推出的工作负载。
      :::

      ```shell
      kubectl get pods \
        --all-namespaces \
        --output jsonpath='{.items[*].metadata.annotations.kubernetes\.io\/psp}' \
        | tr " " "\n" | sort -u
      ```

   1. 按照[将 PSP 映射到 Pod 安全标准](https://kubernetes.io/docs/reference/access-authn-authz/psp-to-pod-security-standards/)的 Kubernetes 指南将 PSS 应用于依赖 PSP 的工作负载。有关详细信息，请参阅[从 PodSecurityPolicy 迁移到内置 PodSecurity Admission 控制器](https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/)。

1. 要从 Rancher Chart 中删除 PSP，请在升级到 Kubernetes v1.25 _之前_将 Chart 升级到最新的 v102.x.y 版本。确保 **Enable PodSecurityPolicies** 选项**已禁用**。这将删除与以前的 Chart 版本一起安装的所有 PSP。

:::info 重要提示
如果你想将 Chart 升级到 v102.x.y，但不打算将集群升级到 Kubernetes v1.25 和弃用 PSP，请确保为每个要升级的 Chart 选择 **Enable PodSecurityPolicies** 选项。
:::

### 在 Kubernetes v1.25 升级后清理版本

如果你在删除 Chart 的 PSP 时遇到问题，或者 Chart 不包含用于删除 PSP 的内置机制，Chart 升级或删除可能会失败并显示如下错误消息：
```console
Error: UPGRADE FAILED: resource mapping not found for name: "<object-name>" namespace: "<object-namespace>" from "": no matches for kind "PodSecurityPolicy" in version "policy/v1beta1"
ensure CRDs are installed first
```

Helm 尝试在集群中查询存储在先前版本的数据 blob 中的对象时，就会发生这种情况。要清理这些版本并避免此错误，请使用 `helm-mapkubeapis` Helm 插件。要详细了解 `helm-mapkubeapis`、它的工作原理以及如何针对你的用例进行微调，请参阅 [Helm 官方文档](https://github.com/helm/helm-mapkubeapis#readme)。

请注意，Helm 插件安装在你运行命令的机器本地。因此，请确保从同一台机器运行安装和清理。

#### 安装 `helm-mapkubeapis`

1. 在打算使用 `helm-mapkubeapis` 的机器上打开你的终端并安装插件：
   ```shell
   helm plugin install https://github.com/helm/helm-mapkubeapis
   ```

   你将看到类似于以下的输出：
   ```console
   Downloading and installing helm-mapkubeapis v0.4.1 ...
   https://github.com/helm/helm-mapkubeapis/releases/download/v0.4.1/helm-mapkubeapis_0.4.1_darwin_amd64.tar.gz
   Installed plugin: mapkubeapis
   ```

   :::info 重要提示
   确保 `helm-mapkubeapis` 插件至少为 v0.4.1，因为旧版本_不_支持资源删除。
   :::

1. 验证插件是否已正确安装：
   ```shell
   helm mapkubeapis --help
   ```

   你将看到类似于以下的输出：
   ```console
   Map release deprecated or removed Kubernetes APIs in-place

   Usage:
   mapkubeapis [flags] RELEASE

   Flags:
   --dry-run               simulate a command
   -h, --help              help for mapkubeapis
   --kube-context string   name of the kubeconfig context to use
   --kubeconfig string     path to the kubeconfig file
   --mapfile string        path to the API mapping file
   --namespace string      namespace scope of the release
   ```

#### 清理损坏的版本

安装 `helm-mapkubeapis` 插件后，清理升级到 Kubernetes v1.25 后损坏的版本。

1. 打开你的首选终端并通过运行 `kubectl cluster-info` 确保终端已连接到所需集群。

1. 运行 `helm list --all-namespaces` 列出你在集群中安装的所有版本。

1. 通过运行 `helm mapkubeapis --dry-run <release-name> --namespace <release-namespace>` 为要清理的每个版本执行试运行。你可以通过此命令的结果了解要替换或删除哪些资源。

1. 最后，在查看更改后，使用 `helm mapkubeapis <release-name> --namespace <release-namespace>` 执行完整运行。

#### 将 Chart 升级到支持 Kubernetes v1.25 的版本

清理了具有 PSP 的所有版本后，你就可以继续升级了。对于 Rancher 维护的工作负载，请按照本文档[从 Rancher 维护的应用程序和市场工作负载中删除 PodSecurityPolicies](#从-rancher-维护的应用程序和市场工作负载中删除-podsecuritypolicies) 部分中的步骤进行操作。
如果工作负载不是由 Rancher 维护的，请参阅对应的提供商的文档。

:::caution
不要跳过此步骤。与 Kubernetes v1.25 不兼容的应用程序不能保证在清理后正常工作。
:::

## Pod 安全准入配置模板

Rancher 提供了 PSA 配置模板。它们是可以应用到集群的预定义安全配置。Rancher 管理员（或具有权限的人员）可以[创建、管理和编辑](./psa-config-templates.md) PSA 模板。

### 受 PSA 限制的集群上的 Rancher

Rancher system 命名空间也受到 PSA 模板描述的限制性安全策略的影响。你需要在分配模板后豁免 Rancher 的 system 命名空间，否则集群将无法正常运行。有关详细信息，请参阅 [Pod 安全准入 (PSA) 配置模板](./psa-config-templates.md#豁免必须的-rancher-命名空间)。

有关运行 Rancher 所需的所有豁免的完整文件，请参阅此[准入配置示例](../../../reference-guides/rancher-security/psa-restricted-exemptions.md)。
