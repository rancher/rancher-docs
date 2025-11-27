---
title: API 令牌
---

默认情况下，某些集群级别的 API 令牌是使用无限期 TTL（`ttl=0`）生成的。换言之，除非你让令牌失效，否则 `ttl=0` 的 API 令牌永远不会过期。令牌不会因为更改密码而失效。

要停用 API 令牌，你可以删除令牌或停用用户账号。

## 删除令牌
要删除令牌：

1. 转到 `https://<Rancher-Server-IP>/v3/tokens`，在 Rancher API 视图中查看包含所有令牌的列表。

1. 通过 ID 访问要删除的令牌。例如，`https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt`。

1. 单击**删除**。

以下是使用 `ttl=0` 生成的完整令牌列表：

| 令牌 | 描述 |
| ----------------- | -------------------------------------------------------------------------------------- |
| `kubeconfig-*` | Kubeconfig 令牌 |
| `kubectl-shell-*` | 在浏览器中访问 `kubectl` shell |
| `agent-*` | Agent deployment 令牌 |
| `compose-token-*` | compose 令牌 |
| `helm-token-*` | Helm Chart deployment 令牌 |
| `telemetry-*` | 遥测令牌 |
| `drain-node-*` | 用于清空的令牌（由于没有原生 Kubernetes API，我们使用 `kubectl` 来清空） |


## 在 Kubeconfig 令牌上设置 TTL

管理员可以在 Kubeconfig 令牌上设置全局存活时间 (time-to-live，TTL)。如需更改默认 kubeconfig TTL，你可以导航到全局设置并将 [`kubeconfig-default-token-ttl-minutes`](#kubeconfig-default-token-ttl-minutes) 设置为所需的持续时间（单位：分钟）。[`kubeconfig-default-token-ttl-minutes`](#kubeconfig-default-token-ttl-minutes) 的默认值为 0，表示令牌永不过期。

:::note

除了由 CLI 创建的用于[生成 kubeconfig 令牌](#在生成的-kubeconfig-中禁用令牌)的令牌之外，所有 kubeconfig 令牌都使用此设置。

:::

## 在生成的 Kubeconfig 中禁用令牌

1. 将 `kubeconfig-generate-token` 设置为 `false`。此设置让 Rancher 不再在用户单击下载 kubeconfig 文件时自动生成令牌。如果停用此设置，生成的 kubeconfig 将引用 [Rancher CLI](../reference-guides/cli-with-rancher/kubectl-utility.md#使用-kubectl-和-kubeconfig-令牌进行-ttl-认证) 来检索集群的短期令牌。当这个 kubeconfig 在客户端（例如 `kubectl`）中使用时，你需要安装 Rancher CLI 来完成登录请求。

2. 将 `kubeconfig-token-ttl-minutes` 设置为所需的时长（单位：分钟）。`kubeconfig-token-ttl-minutes` 默认设置为 960（即 16 小时）。

## 令牌哈希

你可以启用令牌哈希，令牌将使用 SHA256 算法进行单向哈希。这是一个不可逆的操作，一旦启用，此功能将无法禁用。在启用功能或在测试环境中评估之前，建议你先进行备份。

要启用令牌哈希，请参阅[本节](../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md)。

此功能将影响所有令牌，包括但不限于以下内容：

- Kubeconfig 令牌
- 持有者令牌 API 密钥/调用
- 内部操作使用的令牌

## 令牌设置

以下全局设置会影响 Rancher 令牌的行为：

| 设置 | 描述 |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`auth-user-session-ttl-minutes`](#auth-user-session-ttl-minutes) | 用户认证会话令牌的 TTL（单位：分钟）。 |
| [`auth-user-session-idle-ttl-minutes`](#auth-user-session-idle-ttl-minutes) | TTL in minutes on a user auth session token, without user activity. |
| [`kubeconfig-default-token-TTL-minutes`](#kubeconfig-default-token-ttl-minutes) | 默认 TTL，应用于所有 kubeconfig 令牌（除了[由 Rancher CLI 生成的令牌](#在生成的-kubeconfig-中禁用令牌)）。**此设置从 2.6.6 版本开始引入。** |
| [`kubeconfig-token-ttl-minutes`](#kubeconfig-token-ttl-minutes) | 在 CLI 中生成的令牌 TTL。**自 2.6.6 起已弃用，并将在 2.8.0 中删除**。请知悉，`kubeconfig-default-token-TTL-minutes` 将用于所有 kubeconfig 令牌。 |
| [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes) | 除了由 [`auth-user-session-ttl-minutes`](#auth-user-session-ttl-minutes) 控制的令牌外，所有令牌的最大 TTL。 |
| [`kubeconfig-generate-token`](#kubeconfig-generate-token) | 如果为 true，则在用户下载 kubeconfig 时自动生成令牌。 |

### auth-user-session-ttl-minutes
存活时间（TTL）（单位：分钟），用于确定用户身份验证会话令牌的到期时间。过期后，用户将需要登录并获取新令牌。此设置不受 [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes) 的影响。会话令牌是在用户登录 Rancher 时创建的。

### auth-user-session-idle-ttl-minutes

Time to live (TTL) without user activity for login sessions tokens, in minutes.
By default, [`auth-user-session-idle-ttl-minutes`](#auth-user-session-idle-ttl-minutes) is set to the same value as [`auth-user-session-ttl-minutes`](#auth-user-session-ttl-minutes) (for backward compatibility). It must never exceed the value of `auth-user-session-ttl-minutes`.

### kubeconfig-default-token-TTL-minutes
存活时间（TTL）（单位：分钟），用于确定 kubeconfig 令牌的到期时间。令牌过期后，API 将拒绝令牌。此设置的值不能大于 [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes) 的值。此设置适用于在请求的 kubeconfig 文件中生成的令牌，不包括[由 Rancher CLI 生成的](#在生成的-kubeconfig-中禁用令牌)令牌。
**此设置从 2.6.6 版本开始引入**。

### kubeconfig-token-ttl-minutes
存活时间（TTL）（单位：分钟），用于确定由 CLI 生成的 kubeconfig 令牌的到期时间。当 [`kubeconfig-generate-token`](#kubeconfig-generate-token) 设为 false 时，则由 CLI 生成令牌。令牌过期后，API 将拒绝令牌。此设置的值不能大于 [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes) 的值。
**自版本 2.6.6 起已弃用，并将在 2.8.0 中删除。请知悉，此设置将被 [`kubeconfig-default-token-TTL-minutes`](#kubeconfig-default-token-ttl-minutes) 的值替换**。

### auth-token-max-ttl-minutes
身份验证令牌的最大生存时间 (TTL)（单位：分钟）。如果用户尝试创建一个 TTL 大于 `auth-token-max-ttl-minutes` 的令牌，Rancher 会将令牌 TTL 设置为 `auth-token-max-ttl-minutes` 的值。身份验证令牌是为验证 API 请求而创建的。
**2.6.6 版本更改：适用于所有 kubeconfig 令牌和 API 令牌。**

### kubeconfig-generate-token
如果设置为 true，则通过 UI 请求的 kubeconfig 将包含一个有效的令牌。如果设置为 false，kubeconfig 将包含一个使用 Rancher CLI 提示用户登录的命令。然后，[CLI 将为用户检索和缓存令牌](../reference-guides/cli-with-rancher/kubectl-utility.md#使用-kubectl-和-kubeconfig-令牌进行-ttl-认证)。
