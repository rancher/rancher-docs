---
title: RKE 加固指南
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide"/>
</head>

<EOLRKE1Warning />

本文档提供了针对生产环境的 RKE 集群进行加固的具体指导，以便在使用 Rancher 部署之前进行配置。它概述了满足信息安全中心（Center for Information Security, CIS）Kubernetes benchmark controls 所需的配置和控制。

:::note
这份加固指南描述了如何确保你集群中的节点安全。我们建议你在安装 Kubernetes 之前遵循本指南。
:::

此加固指南适用于 RKE 集群，并与以下版本的 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 相关联：

| Rancher 版本     | CIS Benchmark 版本    | Kubernetes 版本               |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.23             |
| Rancher v2.7    | Benchmark v1.24       | Kubernetes v1.24             |
| Rancher v2.7    | Benchmark v1.7        | Kubernetes v1.25 至 v1.26    |

:::note
- 在 Benchmark v1.24 及更高版本中，检查 id `4.1.7 Ensure that the certificate authorities file permissions are set to 600 or more restrictive (Automated)` 可能会失败，因为 `/etc/kubernetes/ssl/kube-ca.pem` 默认设置为 644。
- 在 Benchmark v1.7 中，不再需要 `--protect-kernel-defaults` (`4.2.6`) 参数，并已被 CIS 删除。
:::

有关如何评估加固的 RKE 集群与官方 CIS benchmark 的更多细节，请参考特定 Kubernetes 和 CIS benchmark 版本的 RKE 自我评估指南。

## 主机级别要求

### 配置 Kernel 运行时参数

建议对群集中的所有节点类型使用以下 `sysctl` 配置。在 `/etc/sysctl.d/90-kubelet.conf` 中设置以下参数：

```ini
vm.overcommit_memory=1
vm.panic_on_oom=0
kernel.panic=10
kernel.panic_on_oops=1
```

运行 `sysctl -p /etc/sysctl.d/90-kubelet.conf` 以启用设置。

### 配置 `etcd` 用户和组

在安装 RKE 之前，需要设置 **etcd** 服务的用户帐户和组。

#### 创建 `etcd` 用户和组

要创建 **etcd** 用户和组，请运行以下控制台命令。
下面的命令示例中使用 `52034` 作为 **uid** 和 **gid** 。
任何有效且未使用的 **uid** 或 **gid** 都可以代替 `52034`。

```bash
groupadd --gid 52034 etcd
useradd --comment "etcd service account" --uid 52034 --gid 52034 etcd --shell /usr/sbin/nologin
```

在通过集群配置文件 `config.yml` 部署RKE时，请更新 `etcd` 用户的 `uid` 和 `gid`：

```yaml
services:
  etcd:
    gid: 52034
    uid: 52034
```

## Kubernetes 运行时要求

### 配置 `default` Service Account

#### 设置 `automountServiceAccountToken` 为 `false` 用于 `default` service accounts

Kubernetes 提供了一个 default service account，供集群工作负载使用，其中没有为 pod 分配特定的 service account。
如果需要从 pod 访问 Kubernetes API，则应为该 pod 创建特定的 service account，并向该 service account 授予权限。
应配置 default service account，使其不提供 service account 令牌，并且不应具有任何明确的权限分配。

对于标准 RKE 安装上的每个命名空间（包括 `default` 和 `kube-system`），`default` service account 必须包含以下值：

```yaml
automountServiceAccountToken: false
```

将以下配置保存到名为 `account_update.yaml` 的文件中。

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

创建一个名为 `account_update.yaml` 的 bash 脚本文件。
确保执行 `chmod +x account_update.sh` 命令，以赋予脚本执行权限。

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

执行此脚本将 `account_update.yaml` 配置应用到所有命名空间中的 `default` service account。

### 配置网络策略

#### 确保所有命名空间都定义了网络策略

在同一个 Kubernetes 集群上运行不同的应用程序会带来风险，即某个受感染的应用程序可能会攻击相邻的应用程序。为确保容器只与其预期通信的容器进行通信，网络分段至关重要。网络策略规定了哪些 Pod 可以互相通信，以及与其他网络终端通信的方式。

网络策略是命名空间范围的。当在特定命名空间引入网络策略时，所有未被策略允许的流量将被拒绝。然而，如果在命名空间中没有网络策略，那么所有流量将被允许进入和离开该命名空间中的 Pod。要强制执行网络策略，必须启用容器网络接口（container network interface, CNI）插件。本指南使用 [Canal](https://github.com/projectcalico/canal) 来提供策略执行。有关 CNI 提供程序的其他信息可以在[这里](https://www.suse.com/c/rancher_blog/comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/)找到。

一旦在集群上启用了 CNI 提供程序，就可以应用默认的网络策略。下面提供了一个 **permissive** 的示例供参考。如果你希望允许匹配某个命名空间中所有 Pod 的所有入站和出站流量（即使添加了策略导致某些 Pod 被视为”隔离”），你可以创建一个明确允许该命名空间中所有流量的策略。请将以下配置保存为 `default-allow-all.yaml`。有关网络策略的其他[文档](https://kubernetes.io/docs/concepts/services-networking/network-policies/)可以在 Kubernetes 站点上找到。

:::caution
此网络策略只是一个示例，不建议用于生产用途。
:::

```yaml
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-allow-all
spec:
  podSelector: {}
  ingress:
  - {}
  egress:
  - {}
  policyTypes:
  - Ingress
  - Egress
```

创建一个名为 `apply_networkPolicy_to_all_ns.sh`的 Bash 脚本文件。

确保运行 `chmod +x apply_networkPolicy_to_all_ns.sh` 命令，以赋予脚本执行权限。

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl apply -f default-allow-all.yaml -n ${namespace}
done
```

执行此脚本以将 `default-allow-all.yaml` 配置和 **permissive** 的 `NetworkPolicy` 应用于所有命名空间。

## 已知限制

- 当注册自定义节点仅提供公共 IP 时，Rancher **exec shell** 和 **查看 pod 日志** 在加固设置中**不起作用**。 此功能需要在注册自定义节点时提供私有 IP。

## 加固的 RKE `cluster.yml` 配置参考

参考的 `cluster.yml` 文件是由 RKE CLI 使用的，它提供了实现 RKE 加固安装所需的配置。
RKE [文档](https://rancher.com/docs/rke/latest/en/installation/)提供了有关配置项的更多详细信息。这里参考的 `cluster.yml` 不包括必需的 `nodes` 指令，因为它取决于你的环境。在 RKE 中有关节点配置的文档可以在[这里](https://rancher.com/docs/rke/latest/en/config-options/nodes/)找到。

示例 `cluster.yml` 配置文件中包含了一个 Admission Configuration 策略，在 `services.kube-api.admission_configuration` 字段中指定。这个[示例](../../psa-restricted-exemptions.md)策略包含了命名空间的豁免规则，这对于在Rancher中正确运行导入的RKE集群非常必要，类似于Rancher预定义的 [`rancher-restricted`](../../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md)  策略。

如果你希望使用 RKE 的默认 `restricted` 策略，则将 `services.kube-api.admission_configuration` 字段留空，并将 `services.pod_security_configuration` 设置为 `restricted`。你可以在 [RKE 文档](https://rke.docs.rancher.com/config-options/services/pod-security-admission)中找到更多信息。

<Tabs groupId="rke1-version">
<TabItem value="v1.25 及更新版本" default>

:::note
如果你打算将一个 RKE 集群导入到 Rancher 中，请参考此[文档](../../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md)以了解如何配置 PSA 以豁免 Rancher 系统命名空间。
:::

```yaml
# 如果你打算在离线环境部署 Kubernetes，
# 请查阅文档以了解如何配置自定义的 RKE 镜像。
nodes: []
kubernetes_version: # 定义 RKE 版本
services:
  etcd:
    uid: 52034
    gid: 52034
  kube-api:
    secrets_encryption_config:
      enabled: true
    audit_log:
      enabled: true
    event_rate_limit:
      enabled: true
    # 如果你在 `admission_configuration` 中设置了自定义策略，
    # 请将 `pod_security_configuration` 字段留空。
    # 否则，将其设置为 `restricted` 以使用 RKE 预定义的受限策略，
    # 并删除 `admission_configuration` 字段中的所有内容。
    #
    # pod_security_configuration: restricted
    #
    admission_configuration:
      apiVersion: apiserver.config.k8s.io/v1
      kind: AdmissionConfiguration
      plugins:
        - name: PodSecurity
          configuration:
            apiVersion: pod-security.admission.config.k8s.io/v1
            kind: PodSecurityConfiguration
            defaults:
              enforce: "restricted"
              enforce-version: "latest"
              audit: "restricted"
              audit-version: "latest"
              warn: "restricted"
              warn-version: "latest"
            exemptions:
              usernames: []
              runtimeClasses: []
              namespaces: [calico-apiserver,
                           calico-system,
                           cattle-alerting,
                           cattle-csp-adapter-system,
                           cattle-elemental-system,
                           cattle-epinio-system,
                           cattle-externalip-system,
                           cattle-fleet-local-system,
                           cattle-fleet-system,
                           cattle-gatekeeper-system,
                           cattle-global-data,
                           cattle-global-nt,
                           cattle-impersonation-system,
                           cattle-istio,
                           cattle-istio-system,
                           cattle-logging,
                           cattle-logging-system,
                           cattle-monitoring-system,
                           cattle-neuvector-system,
                           cattle-prometheus,
                           cattle-provisioning-capi-system,
                           cattle-resources-system,
                           cattle-sriov-system,
                           cattle-system,
                           cattle-ui-plugin-system,
                           cattle-windows-gmsa-system,
                           cert-manager,
                           cis-operator-system,
                           fleet-default,
                           ingress-nginx,
                           istio-system,
                           kube-node-lease,
                           kube-public,
                           kube-system,
                           longhorn-system,
                           rancher-alerting-drivers,
                           security-scan,
                           tigera-operator]
  kube-controller:
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
  kubelet:
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
    generate_serving_certificate: true
addons: |
  apiVersion: networking.k8s.io/v1
  kind: NetworkPolicy
  metadata:
    name: default-allow-all
  spec:
    podSelector: {}
    ingress:
    - {}
    egress:
    - {}
    policyTypes:
    - Ingress
    - Egress
  ---
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    name: default
  automountServiceAccountToken: false
```

</TabItem>
<TabItem value="v1.24 及更早版本">

```yaml
# 如果你打算在离线环境部署 Kubernetes，
# 请查阅文档以了解如何配置自定义的 RKE 镜像。
nodes: []
kubernetes_version: # 定义 RKE 版本
services:
  etcd:
    uid: 52034
    gid: 52034
  kube-api:
    secrets_encryption_config:
      enabled: true
    audit_log:
      enabled: true
    event_rate_limit:
      enabled: true
    pod_security_policy: true
  kube-controller:
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
  kubelet:
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
      protect-kernel-defaults: true
    generate_serving_certificate: true
addons: |
  # Upstream Kubernetes restricted PSP policy
  # https://github.com/kubernetes/website/blob/564baf15c102412522e9c8fc6ef2b5ff5b6e766c/content/en/examples/policy/restricted-psp.yaml
  apiVersion: policy/v1beta1
  kind: PodSecurityPolicy
  metadata:
    name: restricted-noroot
  spec:
    privileged: false
    # Required to prevent escalations to root.
    allowPrivilegeEscalation: false
    requiredDropCapabilities:
      - ALL
    # Allow core volume types.
    volumes:
      - 'configMap'
      - 'emptyDir'
      - 'projected'
      - 'secret'
      - 'downwardAPI'
      # Assume that ephemeral CSI drivers & persistentVolumes set up by the cluster admin are safe to use.
      - 'csi'
      - 'persistentVolumeClaim'
      - 'ephemeral'
    hostNetwork: false
    hostIPC: false
    hostPID: false
    runAsUser:
      # Require the container to run without root privileges.
      rule: 'MustRunAsNonRoot'
    seLinux:
      # This policy assumes the nodes are using AppArmor rather than SELinux.
      rule: 'RunAsAny'
    supplementalGroups:
      rule: 'MustRunAs'
      ranges:
        # Forbid adding the root group.
        - min: 1
          max: 65535
    fsGroup:
      rule: 'MustRunAs'
      ranges:
        # Forbid adding the root group.
        - min: 1
          max: 65535
    readOnlyRootFilesystem: false
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: psp:restricted-noroot
  rules:
  - apiGroups:
    - extensions
    resourceNames:
    - restricted-noroot
    resources:
    - podsecuritypolicies
    verbs:
    - use
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRoleBinding
  metadata:
    name: psp:restricted-noroot
  roleRef:
    apiGroup: rbac.authorization.k8s.io
    kind: ClusterRole
    name: psp:restricted-noroot
  subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: Group
    name: system:serviceaccounts
  - apiGroup: rbac.authorization.k8s.io
    kind: Group
    name: system:authenticated
  ---
  apiVersion: networking.k8s.io/v1
  kind: NetworkPolicy
  metadata:
    name: default-allow-all
  spec:
    podSelector: {}
    ingress:
    - {}
    egress:
    - {}
    policyTypes:
    - Ingress
    - Egress
  ---
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    name: default
  automountServiceAccountToken: false
```

</TabItem>
</Tabs>

## 加固后的 RKE 集群模板配置参考

参考的 RKE 集群模板提供了实现 Kubernetes 加固安装所需的最低配置。RKE 模板用于提供 Kubernetes 并定义 Rancher 设置。有关安装 RKE 及其模板详情的其他信息，请参考 Rancher [文档](../../../../getting-started/installation-and-upgrade/installation-and-upgrade.md) 。

<Tabs groupId="rke1-version">
<TabItem value="v1.25 及更新版本" default>

```yaml
#
# 集群配置
#
default_pod_security_admission_configuration_template_name: rancher-restricted
enable_network_policy: true
local_cluster_auth_endpoint:
  enabled: true
name: # 定义集群名称

#
# Rancher 配置
#
rancher_kubernetes_engine_config:
  addon_job_timeout: 45
  authentication:
    strategy: x509|webhook
  kubernetes_version: # 定义 RKE 版本
  services:
    etcd:
      uid: 52034
      gid: 52034
    kube-api:
      audit_log:
        enabled: true
      event_rate_limit:
        enabled: true
      pod_security_policy: false
      secrets_encryption_config:
        enabled: true
    kube-controller:
      extra_args:
        feature-gates: RotateKubeletServerCertificate=true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
    kubelet:
      extra_args:
        feature-gates: RotateKubeletServerCertificate=true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      generate_serving_certificate: true
    scheduler:
      extra_args:
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
```

</TabItem>
<TabItem value="v1.24 及更早版本">

```yaml
#
# 集群配置
#
default_pod_security_policy_template_id: restricted-noroot
enable_network_policy: true
local_cluster_auth_endpoint:
  enabled: true
name: # 定义集群名称

#
# Rancher 配置
#
rancher_kubernetes_engine_config:
  addon_job_timeout: 45
  authentication:
    strategy: x509|webhook
  kubernetes_version: # 定义 RKE 版本
  services:
    etcd:
      uid: 52034
      gid: 52034
    kube-api:
      audit_log:
        enabled: true
      event_rate_limit:
        enabled: true
      pod_security_policy: true
      secrets_encryption_config:
        enabled: true
    kube-controller:
      extra_args:
        feature-gates: RotateKubeletServerCertificate=true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
    kubelet:
      extra_args:
        feature-gates: RotateKubeletServerCertificate=true
        protect-kernel-defaults: true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      generate_serving_certificate: true
    scheduler:
      extra_args:
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
```

</TabItem>
</Tabs>

## 结论

如果你按照本指南操作，由 Rancher 提供的 RKE 自定义集群将配置为通过 CIS Kubernetes Benchmark 测试。你可以查看我们的 RKE 自我评估指南，了解我们是如何验证每个 benchmarks 的，并且你可以在你的集群上执行相同的操作。