---
title: RKE2 加固指南
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide"/>
</head>

本文档提供了针对生产环境的 RKE2 集群进行加固的具体指导，以便在使用 Rancher 部署之前进行配置。它概述了满足信息安全中心（Center for Information Security, CIS）Kubernetes benchmark controls 制所需的配置和控制。

:::note
这份加固指南描述了如何确保你集群中的节点安全。我们建议你在安装 Kubernetes 之前遵循本指南。
:::

此加固指南适用于 RKE2 集群，并与以下版本的 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 相关联：

| Rancher 版本    | CIS Benchmark 版本     | Kubernetes 版本               |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.23             |
| Rancher v2.7    | Benchmark v1.24       | Kubernetes v1.24             |
| Rancher v2.7    | Benchmark v1.7        | Kubernetes v1.25 至 v1.26 |

:::note
- 在 Benchmark v1.24 及更高版本中，由于新的文件权限要求（600 而不是 644），一些检查 ID 可能会失败。受影响的检查 ID 包括：`1.1.1`, `1.1.3`, `1.1.5`, `1.1.7`, `1.1.13`, `1.1.15`, `1.1.17`, `4.1.3`, `4.1.5` 和 `4.1.9`。
- 在 Benchmark v1.7 中，不再需要 `--protect-kernel-defaults` (4.2.6) 参数，并已被 CIS 删除。
:::

有关如何评估加固的 RKE2 集群与官方 CIS benchmark 的更多细节，请参考特定 Kubernetes 和 CIS benchmark 版本的 RKE2 自我评估指南。

RKE2 在不需要修改的情况下通过了许多 Kubernetes CIS controls，因为它默认应用了几个安全缓解措施。然而，有一些值得注意的例外情况，需要手动干预才能完全符合 CIS Benchmark 要求：

1. RKE2 不会修改主机操作系统。因此，作为运维人员，你必须进行一些主机级别的修改。
2. 某些 CIS controls 对于网络策略和 Pod 安全标准（或 RKE2 v1.25 之前的 Pod 安全策略 (PSP)）将限制集群的功能。你必须选择让 RKE2 为你配置这些功能。为了确保满足这些要求，可以启动 RKE2 并设置 profile 标志为 `cis-1.23`（适用于 v1.25 及更新版本）或 `cis-1.6`（适用于 v1.24 及更早版本）。

## 主机级别要求

主机级要求有两个方面：内核参数和 etcd 进程/目录配置。这些在本节中进行了概述。

### 确保 `protect-kernel-defaults` 已经设置

<Tabs groupId="k3s-version">
<TabItem value="v1.25 及更新版本" default>

自 CIS benchmark 1.7 开始，不再需要`protect-kernel-defaults`。

</TabItem>
<TabItem value="v1.24 及更早版本">

这是一个 kubelet 标志，如果所需的内核参数未设置或设置为与 kubelet 的默认值不同的值，将导致 kubelet 退出。

可以在 Rancher 的集群配置中设置 `protect-kernel-defaults` 标志。

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          protect-kernel-defaults: true
```

</TabItem>
</Tabs>

### 设置内核参数

建议为集群中的所有节点类型设置以下 `sysctl` 配置。在 `/etc/sysctl.d/90-kubelet.conf` 中设置以下参数：

```ini
vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
```

运行 `sudo sysctl -p /etc/sysctl.d/90-kubelet.conf` 以启用设置。

### 确保 etcd 配置正确

CIS Benchmark 要求 etcd 数据目录由 `etcd` 用户和组拥有。这意味着 etcd 进程必须以主机级别的 `etcd` 用户身份运行。为了实现这一点，在使用有效的 `cis-1.xx` 配置文件启动 RKE2 时，RKE2 会采取以下几个步骤：

1. 检查主机上是否存在 `etcd` 用户和组。如果不存在，则显示错误并退出。
2. 使用 `etcd` 作为用户和组所有者创建 etcd 的数据目录。
3. 通过适当设置 etcd 静态 Pod 的 `SecurityContext`，确保 etcd 进程以 `etcd` 用户和组的身份运行。

为满足上述要求，你必须执行以下操作：

#### 创建 etcd 用户

在某些 Linux 发行版中，`useradd` 命令不会创建组。下面包含了 `-U` 标志来解决这个问题。这个标志告诉 `useradd` 创建一个与用户同名的组。

```bash
sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U
```

## Kubernetes 运行时要求

通过 CIS Benchmark 测试的运行时要求主要集中在 Pod 安全、网络策略和内核参数上。当使用有效的 `cis-1.xx` 配置文件时，大部分都会被 RKE2 自动处理，但需要一些额外的运维人员干预是。本节概述了这些内容。

### Pod 安全

RKE2 始终以一定程度的 Pod 安全性运行。

<Tabs groupId="rke2-version">
<TabItem value="v1.25 及更新版本" default>

在 v1.25 及更高版本中，[Pod 安全准入(PSAs)](https://kubernetes.io/docs/concepts/security/pod-security-admission/)用于保证 pod 安全。

以下是确保加固 RKE2 通过 Rancher 中提供的 CIS v1.23 加固配置文件 `rke2-cis-1.7-hardened` 所需的最低配置。

```yaml
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.23
```

当同时设置了 `defaultPodSecurityAdmissionConfigurationTemplateName` 和 `profile` 标志时，Rancher 和 RKE2 会执行以下操作：

1. 检查是否已满足主机级要求。如果未满足，RKE2 将以致命错误退出，并描述未满足的要求。
2. 应用允许群集传递关联 controls 的网络策略。
3. 配置 Pod 安全准入控制器（PSA）使用 PSA 配置模板 `rancher-restricted`，以在所有命名空间中强制执行受限模式，除了模板豁免列表中的命名空间。
   这些命名空间被豁免，以允许系统 Pod 在没有限制的情况下运行，这是集群正常运行所必需的。

:::note
如果你打算将一个 RKE 集群导入到 Rancher 中，请参考[文档](../../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md)了解如何配置 PSA 以豁免 Rancher system 命名空间。
:::

</TabItem>

<TabItem value="v1.24 及更早版本">

在 Kubernetes v1.24 及更早版本中，`PodSecurityPolicy` 准入控制器始终是启用的。

以下是确保 RKE2 加固以通过 Rancher 中提供的 CIS v1.23 加固配置文件 `rke2-cis-1.23-hardened` 所需的最低配置。

:::note
在下面的示例中，配置文件设置为`cis-1.6`，这是在上游 RKE2 中定义的值，但集群实际上配置为传递 CIS v1.23 加固配置文件
:::

```yaml
spec:
  defaultPodSecurityPolicyTemplateName: restricted-noroot
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.6
```


当同时设置了 `defaultPodSecurityPolicyTemplateName` 和 `profile` 标志时，Rancher 和 RKE2 会执行以下操作：

1. 检查是否已满足主机级要求。如果未满足，RKE2 将以致命错误退出，并描述未满足的要求。
2. 应用网络策略，以确保集群通过相关的 controls 要求。
3. 配置运行时 Pod 安全策略，以确保集群通过相关的 controls 要求。

</TabItem>
</Tabs>

:::note
Kubernetes control plane 组件以及关键的附加组件，如 CNI、DNS 和 Ingress，都作为  `kube-system` 命名空间中的 Pod 运行。因此，这个命名空间的限制政策较少，从而使这些组件能够正常运行。
:::

### 网络策略

当使用有效的 `cis-1.xx` 配置文件运行时，RKE2 将设置适当的 `NetworkPolicies`，以满足 Kubernetes 内置命名空间的 CIS Benchmark 要求。这些命名空间包括：`kube-system`、`kube-public`、`kube-node-lease` 和 `default`。

所使用的 `NetworkPolicy` 仅允许同一命名空间内的 Pod 相互通信。值得注意的例外是允许 DNS 请求进行解析。

:::note
运维人员必须像管理其他命名空间一样管理额外创建的命名空间的网络策略。
:::

### 配置 `default` service account

**将 `default` service accountsSet 的 `automountServiceAccountToken` 设置为 `false`**

Kubernetes 提供了一个 `default` service account，用于集群工作负载，在 pod 没有分配特定 service account 时使用。如果需要从 pod 访问 Kubernetes API，则应为该 pod 创建一个特定的 service account，并授予该 service account 权限。`default` service account 应配置为不提供 service account 令牌，并且不具有任何明确的权限分配。

对于标准的 RKE2 安装中的每个命名空间，包括 `default` 和 `kube-system`，`default`  service account 必须包含此值：

```yaml
automountServiceAccountToken: false
```

对于由集群操作员创建的命名空间，可以使用以下脚本和配置文件来配置 `default` service account。

以下配置必须保存到一个名为 `account_update.yaml` 的文件中。

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

创建一个名为 `account_update.sh` 的 bash 脚本文件。确保运行 `sudo chmod +x account_update.sh` 命令，以便脚本具有执行权限。

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  echo -n "Patching namespace $namespace - "
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

执行此脚本以将 `account_update.yaml` 配置应用到所有命名空间中的 `default` service account。

### API server 审计配置

CIS 要求 1.2.19 至 1.2.22 与为 API server 配置审计日志有关。当 RKE2 在设置配置文件标志的情况下启动时，它将自动在 API server 中配置加固的 `--audit-log-` 参数以通过这些 CIS 检查。

RKE2 的默认审计策略被配置为不记录 API server 中的请求。这样做是为了允许集群操作员灵活地定制符合其审计要求和需求的审计策略，因为这些策略是针对每个用户的环境和政策而特定的。

当使用 `profile` 标志启动 RKE2 时，RKE2 会创建一个默认的审计策略。该策略定义在 `/etc/rancher/rke2/audit-policy.yaml` 中。

```yaml
apiVersion: audit.k8s.io/v1
kind: Policy
metadata:
  creationTimestamp: null
rules:
- level: None
```

## 加固的 RKE2 模板配置参考

参考模板配置用于在 Rancher 中创建加固的 RKE2 自定义集群。该参考不包括其他必需的**集群配置**指令，这些指令会根据你的环境而有所不同。

<Tabs groupId="rke2-version">
<TabItem value="v1.25 及更新版本" default>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # 定义集群名称
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
  kubernetesVersion: # 定义 RKE2 版本
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.23
```
</TabItem>

<TabItem value="v1.24 及更早版本">

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # 定义集群名称
spec:
  defaultPodSecurityPolicyTemplateName: restricted-noroot
  kubernetesVersion: # 定义 RKE2 版本
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
```

</TabItem>
</Tabs>

## 结论

如果你按照本指南操作，由 Rancher 提供的 RKE2 自定义集群将配置为通过 CIS Kubernetes Benchmark 测试。你可以查看我们的 RKE2 自我评估指南，了解我们是如何验证每个 benchmarks 的，并且你可以在你的集群上执行相同的操作。
