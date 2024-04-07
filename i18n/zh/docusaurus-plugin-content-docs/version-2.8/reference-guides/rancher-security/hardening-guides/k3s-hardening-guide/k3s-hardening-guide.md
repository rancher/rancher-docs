---
title: K3s 加固指南
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide"/>
</head>

本文档提供了针对生产环境的 K3s 集群进行加固的具体指导，以便在使用 Rancher 部署之前进行配置。它概述了满足信息安全中心（Center for Information Security, CIS）Kubernetes benchmark controls 所需的配置和控制。

:::note
这份加固指南描述了如何确保你集群中的节点安全。我们建议你在安装 Kubernetes 之前遵循本指南。
:::

此加固指南适用于 K3s 集群，并与以下版本的 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 相关联：

| Rancher 版本     | CIS Benchmark 版本    | Kubernetes 版本               |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.23             |
| Rancher v2.7    | Benchmark v1.24       | Kubernetes v1.24             |
| Rancher v2.7    | Benchmark v1.7        | Kubernetes v1.25 至 v1.26    |

:::note
在 Benchmark v1.7 中，不再需要 `--protect-kernel-defaults` (4.2.6) 参数，并已被 CIS 删除。
:::

有关如何评估加固的 K3s 集群与官方 CIS benchmark 的更多细节，请参考特定 Kubernetes 和 CIS benchmark 版本的 K3s 自我评估指南。

K3s 在不需要修改的情况下通过了许多 Kubernetes CIS controls，因为它默认应用了几个安全缓解措施。然而，有一些值得注意的例外情况，需要手动干预才能完全符合 CIS Benchmark 要求：

1. K3s 不修改主机操作系统。任何主机级别的修改都需要手动完成。
2. 某些 CIS policy controls，例如 `NetworkPolicies` 和 `PodSecurityStandards`（在 v1.24 及更早版本中为 `PodSecurityPolicies`），会限制集群功能。
   你必须选择让 K3s 配置这些策略。在你的命令行标志或配置文件中添加相应的选项（启用准入插件），并手动应用适当的策略。
   请参阅以下详细信息。

CIS Benchmark 的第一部分（1.1）主要关注于 Pod manifest 的权限和所有权。由于发行版中的所有内容都打包在一个二进制文件中，因此这一部分不适用于 K3s 的核心组件。

## 主机级别要求

### 确保 `protect-kernel-defaults`已经设置

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

此配置需要在设置 kubelet 标志之前完成，否则 K3s 将无法启动。

## Kubernetes 运行时要求

CIS Benchmark 的运行时要求主要围绕 Pod 安全（通过 PSP 或 PSA）、网络策略和 API 服务器审计日志展开。

默认情况下，K3s 不包含任何 Pod 安全或网络策略。然而，K3s 附带一个控制器，可以强制执行你创建的任何网络策略。默认情况下，K3s 启用了 `PodSecurity` 和 `NodeRestriction` 等多个准入控制器。

### Pod 安全

<Tabs groupId="k3s-version">
<TabItem value="v1.25 及更新版本" default>

K3s v1.25 及更新版本支持 [Pod 安全准入(PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/)，用于控制 Pod 安全性。

你可以在 Rancher 中通过集群配置，设置 `defaultPodSecurityAdmissionConfigurationTemplateName` 字段来指定 PSA 配置：

```yaml
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
```

Rancher 提供了 `rancher-restricted` 模板，用于强制执行高度限制性的 Kubernetes 上游 [`Restricted`](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted) 配置文件，其中包含了 Pod 加固的最佳实践。

</TabItem>
<TabItem value="v1.24 及更早版本">

K3s v1.24 及更早版本支持 [Pod 安全策略 (PSP)](https://v1-24.docs.kubernetes.io/docs/concepts/security/pod-security-policy/) 以控制 Pod 安全性。

你可以在 Rancher 中通过集群配置，传递以下标志来启用 PSPs：

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount
```

这会保留 `NodeRestriction` 插件并启用 `PodSecurityPolicy`。

启用 PSPs 后，你可以应用策略来满足 CIS Benchmark 第 5.2 节中描述的必要控制。

:::note
这些是 CIS Benchmark 中的手动检查。CIS 扫描结果将标记为 `warning`，因为需要集群操作员进行手动检查。
:::

以下是合规的 PSP 示例：

```yaml
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted-psp
spec:
  privileged: false                # CIS - 5.2.1
  allowPrivilegeEscalation: false  # CIS - 5.2.5
  requiredDropCapabilities:        # CIS - 5.2.7/8/9
    - ALL
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'downwardAPI'
    - 'csi'
    - 'persistentVolumeClaim'
    - 'ephemeral'
  hostNetwork: false               # CIS - 5.2.4
  hostIPC: false                   # CIS - 5.2.3
  hostPID: false                   # CIS - 5.2.2
  runAsUser:
    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  fsGroup:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  readOnlyRootFilesystem: false
```

要使示例 PSP 生效，我们需要创建一个 `ClusterRole` 和 一个`ClusterRoleBinding`。我们还需要为需要额外权限的系统级 Pod 提供“系统无限制策略”，以及允许必要的 sysctls 来实现 ServiceLB 完整功能的额外策略。

```yaml
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted-psp
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'downwardAPI'
    - 'csi'
    - 'persistentVolumeClaim'
    - 'ephemeral'
  hostNetwork: false
  hostIPC: false
  hostPID: false
  runAsUser:
    rule: 'MustRunAsNonRoot'
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  fsGroup:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  readOnlyRootFilesystem: false
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: system-unrestricted-psp
  annotations:
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'
spec:
  allowPrivilegeEscalation: true
  allowedCapabilities:
  - '*'
  fsGroup:
    rule: RunAsAny
  hostIPC: true
  hostNetwork: true
  hostPID: true
  hostPorts:
  - max: 65535
    min: 0
  privileged: true
  runAsUser:
    rule: RunAsAny
  seLinux:
    rule: RunAsAny
  supplementalGroups:
    rule: RunAsAny
  volumes:
  - '*'
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: svclb-psp
  annotations:
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'
spec:
  allowPrivilegeEscalation: false
  allowedCapabilities:
  - NET_ADMIN
  allowedUnsafeSysctls:
  - net.ipv4.ip_forward
  - net.ipv6.conf.all.forwarding
  fsGroup:
    rule: RunAsAny
  hostPorts:
  - max: 65535
    min: 0
  runAsUser:
    rule: RunAsAny
  seLinux:
    rule: RunAsAny
  supplementalGroups:
    rule: RunAsAny
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:restricted-psp
rules:
- apiGroups:
  - policy
  resources:
  - podsecuritypolicies
  verbs:
  - use
  resourceNames:
  - restricted-psp
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:system-unrestricted-psp
rules:
- apiGroups:
  - policy
  resources:
  - podsecuritypolicies
  resourceNames:
  - system-unrestricted-psp
  verbs:
  - use
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:svclb-psp
rules:
- apiGroups:
  - policy
  resources:
  - podsecuritypolicies
  resourceNames:
  - svclb-psp
  verbs:
  - use
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:svc-local-path-provisioner-psp
rules:
- apiGroups:
  - policy
  resources:
  - podsecuritypolicies
  resourceNames:
  - system-unrestricted-psp
  verbs:
  - use
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:svc-coredns-psp
rules:
- apiGroups:
  - policy
  resources:
  - podsecuritypolicies
  resourceNames:
  - system-unrestricted-psp
  verbs:
  - use
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:svc-cis-operator-psp
rules:
- apiGroups:
  - policy
  resources:
  - podsecuritypolicies
  resourceNames:
  - system-unrestricted-psp
  verbs:
  - use
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: default:restricted-psp
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:restricted-psp
subjects:
- kind: Group
  name: system:authenticated
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system-unrestricted-node-psp-rolebinding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:system-unrestricted-psp
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system:nodes
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: system-unrestricted-svc-acct-psp-rolebinding
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:system-unrestricted-psp
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system:serviceaccounts
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: svclb-psp-rolebinding
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:svclb-psp
subjects:
- kind: ServiceAccount
  name: svclb
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: svc-local-path-provisioner-psp-rolebinding
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:svc-local-path-provisioner-psp
subjects:
- kind: ServiceAccount
  name: local-path-provisioner-service-account
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: svc-coredns-psp-rolebinding
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:svc-coredns-psp
subjects:
- kind: ServiceAccount
  name: coredns
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: svc-cis-operator-psp-rolebinding
  namespace: cis-operator-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:svc-cis-operator-psp
subjects:
- kind: ServiceAccount
  name: cis-operator-serviceaccount
```

上述策略可以放置在 `/var/lib/rancher/k3s/server/manifests` 目录下名为 `policy.yaml` 的文件中。在启动 K3s 之前，必须创建策略文件和其目录结构。建议限制访问权限以避免泄露潜在的敏感信息。

```shell
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests
```

:::note
CNI、DNS 和 Ingress 等关键 Kubernetes 组件在 `kube-system` 命名空间中作为 Pod 运行。因此，这个命名空间的限制政策较少，从而使这些组件能够正常运行。
:::

</TabItem>
</Tabs>

### 网络策略

CIS 要求所有命名空间应用网络策略，合理限制进入命名空间和 Pod 的流量。

:::note
这些是 CIS Benchmark 中的手动检查。CIS 扫描结果将标记为 `warning`，因为需要集群操作员进行手动检查。
:::

网络策略可以放置在 `/var/lib/rancher/k3s/server/manifests` 目录下的 `policy.yaml` 文件中。如果该目录不是作为 PSP（如上所述）的一部分创建的，则必须首先创建该目录。

```shell
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests
```

以下是合规的网络策略示例：

```yaml
---
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: intra-namespace
  namespace: kube-system
spec:
  podSelector: {}
  ingress:
    - from:
      - namespaceSelector:
          matchLabels:
            name: kube-system
---
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: intra-namespace
  namespace: default
spec:
  podSelector: {}
  ingress:
    - from:
      - namespaceSelector:
          matchLabels:
            name: default
---
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: intra-namespace
  namespace: kube-public
spec:
  podSelector: {}
  ingress:
    - from:
      - namespaceSelector:
          matchLabels:
            name: kube-public
```

除非特意允许，否则活动限制会阻止 DNS。以下是允许 DNS 相关流量的网络策略示例：

```yaml
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-network-dns-policy
  namespace: <NAMESPACE>
spec:
  ingress:
  - ports:
    - port: 53
      protocol: TCP
    - port: 53
      protocol: UDP
  podSelector:
    matchLabels:
      k8s-app: kube-dns
  policyTypes:
  - Ingress
```

如果没有创建网络策略来允许访问，则默认情况下会阻止 metrics-server 和 Traefik Ingress 控制器。

```yaml
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-metrics-server
  namespace: kube-system
spec:
  podSelector:
    matchLabels:
      k8s-app: metrics-server
  ingress:
  - {}
  policyTypes:
  - Ingress
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-svclbtraefik-ingress
  namespace: kube-system
spec:
  podSelector:
    matchLabels:
      svccontroller.k3s.cattle.io/svcname: traefik
  ingress:
  - {}
  policyTypes:
  - Ingress
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-traefik-v121-ingress
  namespace: kube-system
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: traefik
  ingress:
  - {}
  policyTypes:
  - Ingress
```

:::note
你必须像平常一样管理你创建的任何其他命名空间的网络策略。
:::

### API server 审计配置

CIS 要求 1.2.19 至 1.2.22 与配置 API server 审核日志相关。默认情况下，K3s 不会创建日志目录和审计策略，因为每个用户的审计策略要求和环境都是特定的。

如果你需要日志目录，则必须在启动 K3s 之前创建它。我们建议限制访问权限以避免泄露敏感信息。

```bash
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/logs
```

以下是用于记录请求元数据的初始审计策略。应将策略写入到 `/var/lib/rancher/k3s/server` 目录下名为 `audit.yaml` 的文件中。有关 API server 的策略配置的详细信息，请参阅 [官方 Kubernetes 文档](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)。

```yaml
---
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: Metadata
```

还需要进一步配置才能通过 CIS 检查。这些在 K3s 中默认不配置，因为它们根据你的环境和需求而有所不同：

- 确保 `--audit-log-path` 参数已经设置。
- 确保 `--audit-log-maxage` 参数设置为 30 或适当的值。
- 确保 `--audit-log-maxbackup` 参数设置为 10 或适当的值。
- 确保 `--audit-log-maxsize` 参数设置为 100 或适当的值。

综合起来，要启用和配置审计日志，请将以下行添加到 Rancher 的 K3s 集群配置文件中：

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS 3.2.1
        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS 1.2.18
        - audit-log-maxage=30                                         # CIS 1.2.19
        - audit-log-maxbackup=10                                      # CIS 1.2.20
        - audit-log-maxsize=100                                       # CIS 1.2.21
```

### Controller Manager 要求

CIS 要求 1.3.1 检查 Controller Manager 中的垃圾收集设置。垃圾收集对于确保资源充足可用性并避免性能和可用性下降非常重要。根据你的系统资源和测试结果，选择一个适当的阈值来激活垃圾收集。

你可以在 Rancher 的 K3s 集群文件中设置以下配置来解决此问题。下面的值仅是一个示例，请根据当前环境设置适当的阈值。

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-controller-manager-arg:
        - terminated-pod-gc-threshold=10                              # CIS 1.3.1
```

### 配置 `default` Service Account

Kubernetes 提供了一个名为 `default` 的 service account，供集群工作负载使用，其中没有为 Pod 分配特定的 service account。当 Pod 需要从 Kubernetes API 获取访问权限时，应为该 Pod 创建一个特定的 service account，并为该 service account 授予权限。

对于 CIS 5.1.5，`default` service account 应配置为不提供 service account 令牌，并且不具有任何明确的权限分配。

可以通过在每个命名空间中将 `default` service account 的 `automountServiceAccountToken` 字段更新为 `false` 来解决此问题。

对于内置命名空间（`kube-system`、`kube-public`、`kube-node-lease` 和 `default`）中的 `default` service accounts，K3s 不会自动执行此操作。

将以下配置保存到名为 `account_update.yaml` 的文件中。

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

创建一个名为 `account_update.sh` 的 Bash 脚本文件。确保使用 `chmod +x account_update.sh` 给脚本添加可执行权限。

```shell
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

每次向你的集群添加新的 service account 时，运行该脚本。

## 加固版 K3s 模板配置参考

Rancher 使用以下参考模板配置，基于本指南中的每个 CIS 控件创建加固过的自定义 K3s 集群。此参考内容不包括其他必需的**集群配置**指令，这些指令因你的环境而异。

<Tabs groupId="k3s-version">
<TabItem value="v1.25 及更新的版本" default>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # 定义集群名称
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
  enableNetworkPolicy: true
  kubernetesVersion: # 定义 K3s 版本
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - enable-admission-plugins=NodeRestriction,ServiceAccount     # CIS 1.2.15, 1.2.13
        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS 3.2.1
        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS 1.2.18
        - audit-log-maxage=30                                         # CIS 1.2.19
        - audit-log-maxbackup=10                                      # CIS 1.2.20
        - audit-log-maxsize=100                                       # CIS 1.2.21
        - request-timeout=300s                                        # CIS 1.2.22
        - service-account-lookup=true                                 # CIS 1.2.24
      kube-controller-manager-arg:
        - terminated-pod-gc-threshold=10                              # CIS 1.3.1
      secrets-encryption: true
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - make-iptables-util-chains=true                          # CIS 4.2.7
```

</TabItem>
<TabItem value="v1.24 及更早的版本">

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # 定义集群名称
spec:
  enableNetworkPolicy: true
  kubernetesVersion:  # 定义 K3s 版本
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount    # CIS 1.2.15, 5.2, 1.2.13
        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS 3.2.1
        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS 1.2.18
        - audit-log-maxage=30                                         # CIS 1.2.19
        - audit-log-maxbackup=10                                      # CIS 1.2.20
        - audit-log-maxsize=100                                       # CIS 1.2.21
        - request-timeout=300s                                        # CIS 1.2.22
        - service-account-lookup=true                                 # CIS 1.2.24
      kube-controller-manager-arg:
        - terminated-pod-gc-threshold=10                              # CIS 1.3.1
      secrets-encryption: true
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - make-iptables-util-chains=true                          # CIS 4.2.7
          protect-kernel-defaults: true                               # CIS 4.2.6
```

</TabItem>
</Tabs>

## 结论

如果你按照本指南操作，由 Rancher 提供的 K3s 自定义集群将配置为通过 CIS Kubernetes Benchmark 测试。你可以查看我们的 K3s 自我评估指南，了解我们是如何验证每个 benchmarks 的，并且你可以在你的集群上执行相同的操作。
