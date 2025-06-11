---
title: 使用 CIS 1.6 Benchmark 的 RKE2 强化指南
---

本文档提供了用于强化 RKE2 集群（使用 Rancher 2.6.5 进行配置）生产安装的说明。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置和控制。

:::note

本强化指南介绍了如何保护集群中的节点。建议你在安装 Kubernetes 之前参考本指南。

:::

本强化指南适用于 RKE2 集群，并对应以下 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 版本：

| Rancher 版本 | CIS Benchmark 版本 | Kubernetes 版本 |
| --------------- | --------------------- | ------------------ |
| Rancher v2.6.5+ | Benchmark v1.6 | Kubernetes v1.21 到 v1.23 |

[点击此处下载本文档的 PDF 版本](https://releases.rancher.com/documents/security/2.6/Rancher_RKE2_v2-6_CIS_v1-6_Hardening_Guide.pdf)。


### 概述

本文档提供了强化使用了 Rancher 2.6.5+ 和 Kubernetes 1.21 到 1.23 版本的 RKE2 集群的说明。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置。

有关根据官方 CIS Benchmark 评估强化 RKE2 集群的更多详细信息，请参阅 [RKE2 - CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6](rke2-self-assessment-guide-with-cis-v1.6-benchmark.md)。

RKE2 是“默认强化”的，因此无需进行修改即可通过大部分 Kubernetes CIS 管控。但是也有一些例外情况是需要人工干预才能完全通过 CIS Benchmark：

1. RKE2 不会修改主机操作系统。因此，操作人员必须进行一些主机级别的修改。
2. `PodSecurityPolicies` 和 `NetworkPolicies` 的某些 CIS 策略会限制集群功能。你必须让 RKE2 开箱即用地配置它们。

要满足上述要求，你可以在 `profile` 标志设置为 `cis-1.6` 的情况下启动 RKE2。该标志通常执行以下两个操作：

1. 检查是否满足主机级别的要求。如果没有，RKE2 将退出并显示未满足要求的致命错误描述。
2. 配置能让集群通过相关管控的运行时 pod 安全策略和网络策略。

:::note

配置文件标志的有效值是 `cis-1.5` 或 `cis-1.6`。它接受一个字符串值以允许以后使用其他配置文件。

:::

以下概述了当 `profile` 标志设置为 `cis-1.6` 时采取的具体操作。

### 主机级别要求

主机级别的要求有两个方面，分别是内核参数和 etcd 进程/目录配置。本节会概述这些内容。

#### 确保设置了 `protect-kernel-defaults`

这是一个 kubelet 标志，如果所需的内核参数未设置或设置为与 kubelet 默认值不同的值，它会导致 kubelet 退出。

如果设置了 `profile` 标志，RKE2 会将标志设置为 `true`。

:::caution

`protect-kernel-defaults` 作为 RKE2 的配置标志公开。如果你已将 `profile` 设置为 `cis-1.x` 并将 `protect-kernel-defaults` 设置为 `false`，则 RKE2 将退出并提示错误。

:::

RKE2 还将检查与 kubelet 相同的内核参数，并按照 kubelet 相同的规则退出并提示错误。这样，操作人员可以更快、更轻松地识别出与 kubelet 默认值不一致的内核参数。

`protect-kernel-defaults` 和 `profile` 标志都可以在 RKE2 模板配置文件中设置。

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
```

#### 确保 etcd 配置正确

CIS Benchmark 要求 etcd 数据目录由 `etcd` 用户和组拥有。换言之，它要求 etcd 进程由主机级别的 `etcd` 用户运行。为了实现这一点，RKE2 在使用有效的 `cis-1.x` 配置文件启动时采取了几个步骤：

1. 检查主机上是否存在 `etcd` 用户和组。如果没有，则退出并提示错误。
2. 以 `etcd` 作为用户和组所有者来创建 etcd 的数据目录。
3. 正确设置 etcd 静态 pod 的 `SecurityContext`，从而确保 etcd 进程以 `etcd` 用户和组的身份运行。

### 设置主机

本节提供了满足上述要求所需的主机配置命令。

#### 设置内核参数

建议为集群中所有类型的节点使用以下 `sysctl` 配置。在 `/etc/sysctl.d/90-kubelet.conf` 中设置如下参数：

```ini
vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
```

运行 `sudo sysctl -p /etc/sysctl.d/90-kubelet.conf` 以启用设置。

在通过 Rancher 实际部署 RKE2 之前，请仅在全新安装上执行此步骤。

#### 创建 etcd 用户

在某些 Linux 发行版上，`useradd` 命令不会创建组。以下命令使用了 `-U` 标志来解决这一问题。这个标志能让 `useradd` 创建一个与用户同名的组。

```bash
sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U
```

### Kubernetes 运行时要求

如果运行时要通过 CIS Benchmark，则需要重视 pod 安全和网络策略。本节会概述这些内容。

#### `PodSecurityPolicies`

RKE2 总是在 `PodSecurityPolicy` 准入控制器打开的情况下运行。但是，当它**不是**使用有效的 `cis-1.x` 配置文件启动时，RKE2 将设置一个不受限制的策略，该策略允许 Kubernetes 像 `PodSecurityPolicy` 准入控制器未启用一样运行。

使用有效的 `cis-1.x` 配置文件运行时，RKE2 将设置一组更具限制性的策略。这些策略符合 CIS Benchmark 5.2 节中的要求。

> Kubernetes controlplane 组件和关键附加组件（例如 CNI、DNS 和 Ingress）在 `kube-system` 命名空间中作为 pod 运行。因此，此命名空间的策略限制会更低，以便这些组件可以正常运行。

#### `NetworkPolicies`

使用有效的 `cis-1.x` 配置文件运行时，RKE2 将设置 `NetworkPolicies` 以通过 Kubernetes 内置命名空间的 CIS Benchmark。这些命名空间是分别是 `kube-system`、`kube-public`、`kube-node-lease` 和 `default`。

使用的 `NetworkPolicy` 只允许同一命名空间内的 Pod 相互通信。一个例外情况是它允许解析 DNS 请求。

:::note

操作人员需要照常管理其他命名空间的网络策略。

:::
#### 配置 `default` ServiceAccount

**将 `default` ServiceAccount 的 `automountServiceAccountToken` 设置为 `false`**

Kubernetes 为集群工作负载提供了一个 `default` ServiceAccount，但没有为 pod 分配特定 ServiceAccount 。如果需要从 pod 访问 Kubernetes API，则需要为该 pod 创建一个特定的 ServiceAccount 并授予权限。你还需要配置 `default`  ServiceAccount，使其不提供 ServiceAccount 令牌并且没有任何显式的权限分配。

对于标准 RKE2 中的每个命名空间（包括 `default` 和 `kube-system`），`default` ServiceAccount 必须包含以下值：

```yaml
automountServiceAccountToken: false
```

对于集群操作人员创建的命名空间，你可以使用以下脚本和配置文件来配置 `default` ServiceAccount。

请将下面的配置保存到名为 `account_update.yaml` 的文件中：

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

创建一个名为 `account_update.sh` 的 bash 脚本文件。确保为脚本设置了 `sudo chmod +x account_update.sh`，使脚本具有执行权限：

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  echo -n "Patching namespace $namespace - "
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

执行此脚本，将 `account_update.yaml` 配置应用到所有命名空间中的 `default` ServiceAccount。

### API Server 审计配置

CIS 1.2.22 到 1.2.25 要求为 API Server 配置审计日志。如果 RKE2 在 `profile` 标志设置为 `cis-1.6` 的情况下启动，它会自动在 API Server 中配置强化的 `--audit-log-` 参数来通过这些 CIS 检查。

RKE2 的默认审计策略不会在 API Server 中记录请求。这样，集群操作人员就能灵活地定制符合其审计要求和需求的审计策略，从而满足不同用户的不同环境和策略需求。

如果启动时 `profile` 标志设置为 `cis-1.6`，RKE2 会创建默认审计策略。该策略在 `/etc/rancher/rke2/audit-policy.yaml` 中定义。

```yaml
apiVersion: audit.k8s.io/v1
kind: Policy
metadata:
  creationTimestamp: null
rules:
- level: None
```

要开始记录对 API Server 的请求，你至少必须修改 `level` 参数，例如将其修改为 `Metadata`。有关 API Server 策略配置的详细信息，请参阅 [Kubernetes 文档](https://kubernetes.io/docs/tasks/debug-application-cluster/audit/)。

调整审计策略后，RKE2 必须重新启动才能加载新配置。

```shell
sudo systemctl restart rke2-server.service
```

API Server 审计日志将写入 `/var/lib/rancher/rke2/server/logs/audit.log`。

### 已知问题

以下是 RKE2 目前没有通过的管控。此处将解释各个差距，以及这些差距是否可以通过手动干预或在未来的版本中解决。

#### 管控  1.1.12
确保 etcd 数据目录所有权设置为 `etcd:etcd`

**原因**
etcd 是 Kubernetes deployment 使用的高可用键值存储，用于持久存储其所有 REST API 对象。你需要保护此数据目录，避免任何未经授权的读取或写入。它的所有者应该是 `etcd:etcd`。

**修正措施**
创建如上所述的 `etcd` 用户和组。

#### 管控 5.1.5
确保未主动使用默认 ServiceAccount

**原因**：Kubernetes 为集群工作负载提供了一个 `default` ServiceAccount，但没有为 pod 分配特定 ServiceAccount 。

如果需要从 pod 访问 Kubernetes API，则需要为该 pod 创建一个特定的 ServiceAccount 并授予权限。

你还需要配置 `default` ServiceAccount，使其不提供 ServiceAccount 令牌并且没有任何显式的权限分配。

可以通过将每个命名空间中 `default` ServiceAccount 的 `automountServiceAccountToken` 字段更新为 `false` 来解决此问题。

**修正措施**
手动更新集群中服务账户上的此字段。

#### 管控 5.3.2
确保所有命名空间都定义了网络策略

**原因**
如果你在同一个 Kubernetes 集群上运行不同的应用程序，被感染的应用程序可能会攻击相邻的应用程序。要确保容器只进行所需的通信，网络分段非常重要。网络策略指的是如何允许 Pod 与其他 Pod 以及与其他网络端点进行通信。

网络策略是命名空间范围的。为某个命名空间配置网络策略后，该策略不允许的所有其他流量都会被拒绝。但是，如果命名空间没有配置网络策略，则所有流量都会允许进出该命名空间中的 Pod。

**修正措施**
在 RKE2 模板配置文件中设置 `profile: "cis-1.6"`。你可以在下方找到示例。

### 强化 RKE2 模板配置参考

模板配置参考可用于在 Rancher 中创建强化的 RKE2 自定义集群。此参考不包括其他必需的**集群配置**参数，该参数会因你的环境而异。

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: <replace_with_cluster_name>
  annotations:
    {}
#    key: string
  labels:
    {}
#    key: string
  namespace: fleet-default
spec:
  defaultPodSecurityPolicyTemplateName: ''
  kubernetesVersion: <replace_with_kubernetes_version>
  localClusterAuthEndpoint:
    caCerts: ''
    enabled: false
    fqdn: ''
  rkeConfig:
    chartValues:
      rke2-canal:
        {}
    etcd:
      disableSnapshots: false
      s3:
#        bucket: string
#        cloudCredentialName: string
#        endpoint: string
#        endpointCA: string
#        folder: string
#        region: string
#        skipSSLVerify: boolean
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      cni: canal
    machinePools:
#      - cloudCredentialSecretName: string
#        controlPlaneRole: boolean
#        displayName: string
#        drainBeforeDelete: boolean
#        etcdRole: boolean
#        labels:
#          key: string
#        machineConfigRef:
#          apiVersion: string
#          fieldPath: string
#          kind: string
#          name: string
#          namespace: string
#          resourceVersion: string
#          uid: string
#        machineDeploymentAnnotations:
#          key: string
#        machineDeploymentLabels:
#          key: string
#        machineOS: string
#        maxUnhealthy: string
#        name: string
#        nodeStartupTimeout: string
#        paused: boolean
#        quantity: int
#        rollingUpdate:
#          maxSurge: string
#          maxUnavailable: string
#        taints:
#          - effect: string
#            key: string
#            timeAdded: string
#            value: string
#        unhealthyNodeTimeout: string
#        unhealthyRange: string
#        workerRole: boolean
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
#      - config:
#
#        machineLabelSelector:
#          matchExpressions:
#            - key: string
#              operator: string
#              values:
#                - string
#          matchLabels:
#            key: string
    registries:
      configs:
        {}
        #authConfigSecretName: string
#          caBundle: string
#          insecureSkipVerify: boolean
#          tlsSecretName: string
      mirrors:
        {}
        #endpoint:
#            - string
#          rewrite:
#            key: string
    upgradeStrategy:
      controlPlaneConcurrency: 10%
      controlPlaneDrainOptions:
#        deleteEmptyDirData: boolean
#        disableEviction: boolean
#        enabled: boolean
#        force: boolean
#        gracePeriod: int
#        ignoreDaemonSets: boolean
#        ignoreErrors: boolean
#        postDrainHooks:
#          - annotation: string
#        preDrainHooks:
#          - annotation: string
#        skipWaitForDeleteTimeoutSeconds: int
#        timeout: int
      workerConcurrency: 10%
      workerDrainOptions:
#        deleteEmptyDirData: boolean
#        disableEviction: boolean
#        enabled: boolean
#        force: boolean
#        gracePeriod: int
#        ignoreDaemonSets: boolean
#        ignoreErrors: boolean
#        postDrainHooks:
#          - annotation: string
#        preDrainHooks:
#          - annotation: string
#        skipWaitForDeleteTimeoutSeconds: int
#        timeout: int
#    additionalManifest: string
#    etcdSnapshotCreate:
#      generation: int
#    etcdSnapshotRestore:
#      generation: int
#      name: string
#      restoreRKEConfig: string
#    infrastructureRef:
#      apiVersion: string
#      fieldPath: string
#      kind: string
#      name: string
#      namespace: string
#      resourceVersion: string
#      uid: string
#    provisionGeneration: int
#    rotateCertificates:
#      generation: int
#      services:
#        - string
#    rotateEncryptionKeys:
#      generation: int
  machineSelectorConfig:
    - config: {}
#  agentEnvVars:
#    - name: string
#      value: string
#  cloudCredentialSecretName: string
#  clusterAPIConfig:
#    clusterName: string
#  defaultClusterRoleForProjectMembers: string
#  enableNetworkPolicy: boolean
#  redeploySystemAgentGeneration: int
__clone: true
```

### 结论

如果你遵循本指南，Rancher 配置的 RKE2 自定义集群将能通过 CIS Kubernetes Benchmark。如需了解我们验证 Benchmark 的方式，以及你如何在集群上执行相同的操作，请参阅 Rancher 的 [RKE2 CIS Benchmark 自我评估指南 1.6](rke2-self-assessment-guide-with-cis-v1.6-benchmark.md)。
