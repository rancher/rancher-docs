---
title: Pod 安全标准 (PSS) 和 Pod 安全准入 (PSA)
---

[Pod 安全标准 (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) 和 [Pod 安全准入 (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) 为大量工作负载定义了安全限制。
它们在 Kubernetes v1.23 中可用并默认打开，并在 Kubernetes v1.25 及更高版本中替换了 [Pod Security Policies (PSP)](https://kubernetes.io/docs/concepts/security/pod-security-policy/)。

PSS 定义了工作负载的安全级别。PSA 描述了 Pod 安全上下文和相关字段的要求。PSA 参考 PSS 级别来定义安全限制。

## Pod 安全准入配置模板

Rancher 提供了 PSA 配置模板。它们是可以应用到集群的预定义安全配置。Rancher 管理员（或具有权限的人员）可以[创建、管理和编辑](./psa-config-templates.md) PSA 模板。

### 受 PSA 限制的集群上的 Rancher

Rancher system 命名空间也受到 PSA 模板描述的限制性安全策略的影响。你需要在分配模板后豁免 Rancher 的 system 命名空间，否则集群将无法正常运行。有关详细信息，请参阅 [Pod 安全准入 (PSA) 配置模板](./psa-config-templates.md#豁免必须的-rancher-命名空间)。

有关运行 Rancher 所需的所有豁免的完整文件，请参阅此[准入配置示例](../../../reference-guides/rancher-security/psa-restricted-exemptions.md)。
