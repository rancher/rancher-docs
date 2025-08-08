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

## Pod 安全准入配置模板

Rancher 提供了 PSA 配置模板。它们是可以应用到集群的预定义安全配置。Rancher 管理员（或具有权限的人员）可以[创建、管理和编辑](./psa-config-templates.md) PSA 模板。

### 受 PSA 限制的集群上的 Rancher

Rancher system 命名空间也受到 PSA 模板描述的限制性安全策略的影响。你需要在分配模板后豁免 Rancher 的 system 命名空间，否则集群将无法正常运行。有关详细信息，请参阅 [Pod 安全准入 (PSA) 配置模板](./psa-config-templates.md#豁免必须的-rancher-命名空间)。

有关运行 Rancher 所需的所有豁免的完整文件，请参阅此[准入配置示例](../../../reference-guides/rancher-security/psa-restricted-exemptions.md)。
