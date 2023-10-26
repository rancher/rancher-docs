---
title: Rancher Webhook
---

Rancher-Webhook 是 Rancher 的重要组件，它与 Kubernetes 结合使用，用于增强安全性并为 Rancher 管理的集群启用关键功能。

如 [Kubernetes 文档](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/)中所述，它与 Kubernetes 的可扩展准入控制器集成，允许 Rancher-Webhook 检查发送到 Kubernetes API Server 的特定请求，添加自定义和 Rancher 相关的验证，以及 Rancher 相关请求的变化。Rancher-Webhook 使用 `rancher.cattle.io` `ValidatingWebhookConfiguration` 和 `rancher.cattle.io` `MutatingWebhookConfiguration` 管理要验证的资源，并覆盖任何手动编辑。
Rancher 将 Rancher-Webhook 作为单独的 deployment 和服务部署在 local 和下游集群中。Rancher 使用 Helm 管理 Rancher-Webhook。需要注意的是，Rancher 可能会覆盖用户对 Helm 版本所做的修改。

## 为什么我们需要它？

Rancher-Webhook 对于让 Rancher 保护集群免受恶意攻击并启用各种功能至关重要。
Rancher 依赖 Rancher-Webhook 作为其功能的组成部分。如果没有 Webhook，Rancher 将不是一个完整的产品。
它为 Rancher 管理的集群提供了必要的保护，防止安全漏洞并确保集群的一致性和稳定性。

## 常见问题

### 带有 Calico CNI 的 EKS 集群

当 Kubernetes API Server 尝试联系 Rancher-Webhook 时，使用 Calico CNI 运行 EKS 集群的用户可能会遇到错误。
根据 [Calico 文档](https://docs.tigera.io/calico/latest/getting-started/kubernetes/managed-public-cloud/eks#install-eks-with-calico-networking)，此问题的解决方法是为 Webhook 部署设置 `hostNetwork=true`。用户可以在受影响的集群上使用下面的 Helm 命令更改此设置。

```bash
helm repo add rancher-charts https://charts.rancher.io
helm upgrade --reuse-values rancher-webhook rancher-chart/rancher-webhook  -n cattle-system --set global.hostNetwork=true
```
**注意**：这个临时解决方法可能会违反环境的安全策略。此解决方法还要求主机网络上未使用端口 9443。

### 私有 GKE 集群

使用私有 GKE 集群时可能会发生错误，导致 Kubernetes API Server 无法与 Webhook 通信。以下错误消息可能会出现：

```
Internal error occurred: failed calling webhook "rancher.cattle.io.namespaces.create-non-kubesystem": failed to call webhook: Post "https://rancher-webhook.cattle-system.svc:443/v1/webhook/validation/namespaces?timeout=10s": context deadline exceeded
```
出现此问题的原因是防火墙规则限制了 API Server 与私有集群之间的通信。要解决此通信问题，你必须通过添加防火墙规则来允许 GKE Control Plane 通过端口 9443 与 Rancher-Webhook 进行通信。请参阅 [GKE 文档](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules)，了解更新防火墙规则的详细信息和步骤。
