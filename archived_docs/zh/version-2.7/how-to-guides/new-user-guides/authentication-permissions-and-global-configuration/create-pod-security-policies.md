---
title: Pod 安全策略
---

:::caution
Pod 安全策略仅在 Kubernetes v1.24 之前可用。[Pod 安全标准](pod-security-standards.md) 是内置的替代方案。
:::

[Pod 安全策略（PSP）](https://kubernetes.io/docs/concepts/security/pod-security-policy/)是用来控制安全敏感相关 Pod 规范（例如 root 特权）的对象。

如果某个 Pod 不满足 PSP 指定的条件，Kubernetes 将不允许它启动，Rancher 中将显示错误消息 `Pod <NAME> is forbidden: unable to validate...`。


## PSP 工作原理

你可以在集群或项目级别分配 PSP。

PSP 通过继承的方式工作：

- 默认情况下，分配给集群的 PSP 由其项目以及添加到这些项目的任何命名空间继承。
- **例外**：无论 PSP 是分配给集群还是项目，未分配给项目的命名空间不会继承 PSP。因为这些命名空间没有 PSP，所以这些命名空间的工作负载 deployment 将失败，这是 Kubernetes 的默认行为。
- 你可以通过将不同的 PSP 直接分配给项目来覆盖默认 PSP。

在分配 PSP 之前已经在集群或项目中运行的任何工作负载如果符合 PSP，则不会被检查。你需要克隆或升级工作负载以查看它们是否通过 PSP。

在 [Kubernetes 文档](https://kubernetes.io/docs/concepts/policy/pod-security-policy/)中阅读有关 Pod 安全策略的更多信息。

## 默认 PSP

Rancher 内置了三个默认 Pod 安全策略 (PSP)，分别是 `restricted-noroot`（受限 noroot），`restricted`（受限）和 `unrestricted`（不受限）策略。

### 受限-NoRoot

此策略基于 Kubernetes [示例受限策略](https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/policy/restricted-psp.yaml)。它极大地限制了可以将哪些类型的 Pod 部署到集群或项目中。这项策略：

- 阻止 Pod 以特权用户身份运行，并防止特权升级。
- 验证服务器所需的安全机制是否到位，例如限制哪些卷只能挂载到核心卷类型，并防止添加 root 补充组。

### 受限

该策略是宽松版的 `restricted-noroot` 策略，除了允许以特权用户身份运行容器外，几乎所有限制都到位。

### 不受限

该策略等效于在禁用 PSP 控制器的情况下运行 Kubernetes。对于可以将哪些 Pod 部署到集群或项目中，它没有任何限制。

:::note 重要提示：

禁用 PSP 时，默认 PSP **不会**自动从集群中删除。如果不再需要它们，你必须手动删除它们。

:::

## 创建 PSP

使用 Rancher，你可以使用我们的 GUI 创建 Pod 安全策略，而不是创建 YAML 文件。

### 要求

Rancher 只能为[使用 RKE 启动的集群](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md)分配 PSP。

你必须先在集群级别启用 PSP，然后才能将它们分配给项目。这可以通过[编辑集群](../../../pages-for-subheaders/cluster-configuration.md)来配置。

最好的做法是在集群级别设置 PSP。

我们建议在集群和项目创建期间添加 PSP，而不是将其添加到现有的项目或集群中。

### 在 Rancher UI 中创建 PSP

1. 在左上角，单击 **☰ > 集群管理**。
1. 在左侧导航栏中，单击 **Pod 安全策略**。
1. 单击**添加策略**。
1. 为策略命名。
1. 填写表格的每个部分。请参阅 [Kubernetes 文档](https://kubernetes.io/docs/concepts/policy/pod-security-policy/)，了解每个策略的作用。
1. 单击**创建**。

## 配置

关于 PSP 的 Kubernetes 文档，请参阅[这里](https://kubernetes.io/docs/concepts/policy/pod-security-policy/)。
