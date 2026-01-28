---
title: Rancher Webhook
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-webhook"/>
</head>

Rancher-Webhook 是 Rancher 的重要组件，它与 Kubernetes 结合使用，用于增强安全性并为 Rancher 管理的集群启用关键功能。

如 [Kubernetes 文档](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/)中所述，它与 Kubernetes 的可扩展准入控制器集成，允许 Rancher-Webhook 检查发送到 Kubernetes API Server 的特定请求，添加自定义和 Rancher 相关的验证，以及 Rancher 相关请求的变化。Rancher-Webhook 使用 `rancher.cattle.io` `ValidatingWebhookConfiguration` 和 `rancher.cattle.io` `MutatingWebhookConfiguration` 管理要验证的资源，并覆盖任何手动编辑。

Rancher 将 Rancher-Webhook 作为单独的 deployment 和服务部署在 local 和下游集群中。Rancher 使用 Helm 管理 Rancher-Webhook。需要注意的是，Rancher 可能会覆盖用户对 Helm 版本所做的修改。要安全地修改这些值，请参阅[自定义 Rancher-Webhook 配置](#自定义-rancher-webhook-配置)

每个 Rancher 版本都设计为与某个具体版本的 Webhook 兼容，为方便起见，下面提供了各版本的兼容列表。

**注意：** Rancher 负责管理 webhook 的部署和升级。在多数情况下，不需要用户干预来确保 webhook 版本与你正在运行的 Rancher 版本兼容。

<!-- releaseTask -->

| Rancher Version | Webhook Version | Availability in Prime | Availability in Community |
|-----------------|-----------------|-----------------------|---------------------------|
| v2.11.10        |     v0.7.8      | &check;               | &cross;                   |
| v2.11.9         |     v0.7.8      | &check;               | &cross;                   |
| v2.11.8         |     v0.7.8      | &check;               | &cross;                   |
| v2.11.7         |     v0.7.7      | &check;               | &cross;                   |
| v2.11.6         |     v0.7.6      | &check;               | &cross;                   |
| v2.11.5         |     v0.7.5      | &check;               | &cross;                   |
| v2.11.4         |     v0.7.4      | &check;               | &cross;                   |
| v2.11.3         |     v0.7.3      | &check;               | &check;                   |
| v2.11.2         |     v0.7.2      | &check;               | &check;                   |
| v2.11.1         |     v0.7.1      | &check;               | &check;                   |
| v2.11.0         |     v0.7.0      | &cross;               | &check;                   |

## 为什么我们需要它？

Rancher-Webhook 对于让 Rancher 保护集群免受恶意攻击并启用各种功能至关重要。
Rancher 依赖 Rancher-Webhook 作为其功能的组成部分。如果没有 Webhook，Rancher 将不是一个完整的产品。
它为 Rancher 管理的集群提供了必要的保护，防止安全漏洞并确保集群的一致性和稳定性。

## Webhook 验证哪些资源?

你可以在 [webhook 仓库](https://github.com/rancher/webhook/blob/release/v0.4/docs.md)中找到 webhook 当前验证的资源列表。这些文档按组/版本（顶级标题）和资源（下一级标题）进行组织。可以通过查看与特定版本标签关联的 `docs.md` 文件来找到特定于一个版本的检查。请注意，`v0.3.6` 之前的 webhook 版本没有此文件。

## 绕过 Webhook

有时，你必须绕过 Rancher 的 webhook 验证才能执行紧急还原操作或修复其他关键问题。避开操作是彻底的，这意味着在使用它时不会应用任何 webhook 验证或更改。不可能指定绕过某些验证，而让其他验证仍然可用。它们要么全部被绕过，要么全部处于活动状态。

:::danger

Rancher 的 webhook 提供关键的安全保护。只有在所有其他选项都用尽之后，管理员才需要在特定情况下绕过 webhook。此外，应仔细控制绕过 webhook 的权限，切勿将该权限授予非管理员用户。

:::

要绕过 webhook，请模拟 `rancher-webhook-sudo` 服务账号和 `system:masters` 组（两者都是必需的）：

```bash
kubectl create -f example.yaml --as=system:serviceaccount:cattle-system:rancher-webhook-sudo --as-group=system:masters
```

## 自定义 Rancher-Webhook 配置

你可以通过 Helm 安装 Rancher-Webhook 时添加自定义 Helm values。在 Rancher-Webhook chart 的安装过程中，Rancher 会检查自定义的 Helm values。这些自定义值必须在 `cattle-system` 命名空间中，名称为 `rancher-config` 的 ConfigMap 的 data 属性下，增加 `rancher-webhook` 的配置定义。此键的值必须是有效的 YAML。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: rancher-config
  namespace: cattle-system
  labels:
    app.kubernetes.io/part-of: "rancher"
data:
  rancher-webhook: '{"port": 9553, "priorityClassName": "system-node-critical"}'
```

Rancher 会在检测到对 ConfigMap 值的更改时重新部署 Rancher-Webhook Chart。

### 在 Rancher 安装过程中自定义 Rancher-Webhook

使用 Helm 安装 Rancher chart 时，可以在 local 集群中将自定义的 Helm values 添加到 Rancher-Webhook。Rancher-Webhook Chart 中的所有值都可以通过 `webhook` 名称下的嵌套变量访问。

这些值在安装过程中会同步到 `rancher-config` ConfigMap 中。

```bash
helm install rancher rancher-<CHART_REPO>/rancher \
  --namespace cattle-system \
  ...
  --set webhook.port=9553 \
  --set webhook.priorityClassName="system-node-critical"
```

## 常见问题

### 带有 Calico CNI 的 EKS 集群

当 Kubernetes API Server 尝试联系 Rancher-Webhook 时，使用 Calico CNI 运行 EKS 集群的用户可能会遇到错误。
根据 [Calico 文档](https://docs.tigera.io/calico/latest/getting-started/kubernetes/managed-public-cloud/eks#install-eks-with-calico-networking)，此问题的解决方法是为 Webhook 部署设置 `hostNetwork=true`。用户可以在受影响的集群上使用下面的 Helm 命令更改此设置。

```bash
helm repo add rancher-charts https://charts.rancher.io
helm upgrade --reuse-values rancher-webhook rancher-chart/rancher-webhook  -n cattle-system --set global.hostNetwork=true
```

**注意**：这个临时解决方法可能会违反环境的安全策略。此解决方法还要求主机网络上未使用端口 9443。

**注意：** 默认情况下，Helm 使用 secrets。这是某些 webhook 版本验证用于存储信息的数据类型。在这种情况下，请使用 kubectl 更新 deployment 设置 `hostNetwork=true`，然后按照上述配置更新 webhook。

### 私有 GKE 集群

使用私有 GKE 集群时可能会发生错误，导致 Kubernetes API Server 无法与 Webhook 通信。以下错误消息可能会出现：

```
Internal error occurred: failed calling webhook "rancher.cattle.io.namespaces.create-non-kubesystem": failed to call webhook: Post "https://rancher-webhook.cattle-system.svc:443/v1/webhook/validation/namespaces?timeout=10s": context deadline exceeded
```

出现此问题的原因是防火墙规则限制了 API Server 与私有集群之间的通信。要解决此通信问题，你必须通过添加防火墙规则来允许 GKE Control Plane 通过端口 9443 与 Rancher-Webhook 进行通信。请参阅 [GKE 文档](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules)，了解更新防火墙规则的详细信息和步骤。

### 由于 rancher-webhook 阻止访问导致应用部署失败

webhook 在 [namespaces](https://github.com/rancher/webhook/blob/release/v0.4/docs.md#psa-label-validation) 上提供额外的验证。其中一项验证可确保用户只有在具有适当权限的情况下才能更新 PSA 相关标签（`updatepsa` for `projects` in `management.cattle.io`）。这可能导致特定 operator（如 Tigera 或 Trident）在尝试部署带有 PSA 标签的命名空间时失败。有几种方法可以解决此问题：

- 将应用程序配置为创建没有 PSA 标签的命名空间。如果用户希望将 PSA 应用于这些命名空间，则可以在配置后将它们添加到具有所需 PSA 的项目中。请参阅[设置 PSS 和 PSA 资源的文档](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md)获取更具体的操作方法。
  - 这是首选选项，但并非所有应用程序都可以以这种方式进行配置。
- 手动授予操作员管理命名空间下的 PSA 的权限。
  - 此选项将引入安全风险，因为运营商现在将能够为其有权访问的命名空间设置 PSA。这可能允许操作员部署特权 Pod，或通过其他方式实现集群接管。
- 具有适当权限的用户帐户可以使用适当的配置预先创建命名空间。
  - 此选项取决于应用程序处理现有资源的能力。

Another one of these validations ensures that the user has the proper permissions to update the `field.cattle.io/projectId` annotation on a namespace. This is the `manage-namespaces` permission for `projects` in `management.cattle.io`.

## 特定版本的问题

**注意：** 以下是影响特定 Rancher/webhook 版本的高严重性问题的不完整列表。在大多数情况下，这些问题可以通过升级到更新的 Rancher 版本来解决。

### 回滚到不兼容的 Webhook 版本

**注意：** 这会影响回滚到 Rancher v2.7.5 或更早版本。

如果回滚到 Rancher v2.7.5 或更早版本，您可能会看到 webhook 版本太新，无法与运行 v2.7.5 之前版本的 Rancher 的下游集群兼容。这可能会导致各种不兼容问题。例如，项目成员可能无法创建命名空间。此外，当您回滚到下游集群中安装 webhook 之前的版本时，webhook 可能仍保持安装状态，这会导致类似的不兼容问题。

为了帮助缓解这些问题，您可以在回滚后运行 [adjust-downstream-webhook](https://github.com/rancherlabs/support-tools/tree/master/adjust-downstream-webhook) shell 脚本。该脚本为相应的 Rancher 版本选择并安装正确的 webhook 版本（或完全删除 webhook）。

### 项目用户无法创建命名空间

**注意：** 以下内容影响 Rancher v2.7.2 - v2.7.4。

项目用户可能无法在项目中创建命名空间，这包括项目所有者。此问题是由于 Rancher 自动将 webhook 升级到与当前安装的 Rancher 版本更新的版本不兼容而导致的。

为了帮助缓解这些问题，您可以在回滚后运行 [adjust-downstream-webhook](https://github.com/rancherlabs/support-tools/tree/master/adjust-downstream-webhook) shell 脚本。该脚本为相应的 Rancher 版本选择并安装正确的 webhook 版本（或完全删除 webhook）。
