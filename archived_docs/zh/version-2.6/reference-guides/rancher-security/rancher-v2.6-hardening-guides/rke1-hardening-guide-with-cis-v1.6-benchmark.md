---
title: 使用 CIS 1.6 Benchmark 的 RKE 强化指南
---

<EOLRKE1Warning />

本文档提供了用于强化 RKE 集群（使用 Rancher 2.6 进行配置）生产安装的说明。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置和控制。

:::note

本强化指南介绍了如何保护集群中的节点。建议你在安装 Kubernetes 之前参考本指南。

:::

本强化指南适用于 RKE 集群，并对应以下 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 版本：

| Rancher 版本 | CIS Benchmark 版本 | Kubernetes 版本 |
| --------------- | --------------------- | ------------------ |
| Rancher v2.6 | Benchmark v1.6 | Kubernetes v1.18 到 v1.23 |

[点击此处下载本文档的 PDF 版本](https://releases.rancher.com/documents/security/2.6/Rancher_v2-6_CIS_v1-6_Hardening_Guide.pdf)。


### 概述

本文档介绍了强化 RKE 集群的说明，该集群使用 Kubernetes 1.18 至 1.23 版本安装 Rancher 2.6，或在 Rancher 2.6 中配置使用 Kubernetes 1.18 至 1.23 版本的 RKE 集群。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置。

有关根据官方 CIS Benchmark 评估强化集群的更多详细信息，请参阅 [CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6](./rke1-self-assessment-guide-with-cis-v1.6-benchmark.md)。

#### 已知问题

- 如果注册自定义节点时仅提供公共 IP，CIS 1.6 强化设置中用于 Pod 的 Rancher **exec shell** 和 **view logs** 将**不起作用**。此功能要求在注册自定义节点时提供私有 IP。
- 如果把 `default_pod_security_policy_template_id:` 设置为 `restricted` 或 `restricted-noroot`，根据 Rancher 提供的 [Pod 安全策略 (PSP)](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md)，Rancher 会在默认 ServiceAccount 上创建 **RoleBindings** 和 **ClusterRoleBindings**。CIS 1.6 检查 5.1.5 时会要求默认 ServiceAccount 除了默认值之外没有绑定到其他角色或集群角色。此外，你还需要配置默认 ServiceAccount，使其不提供 ServiceAccount 令牌并且没有显式分配任何权限。

### 配置内核运行时参数

建议为集群中所有类型的节点使用以下 `sysctl` 配置。在 `/etc/sysctl.d/90-kubelet.conf` 中设置如下参数：

```ini
vm.overcommit_memory=1
vm.panic_on_oom=0
kernel.panic=10
kernel.panic_on_oops=1
kernel.keys.root_maxbytes=25000000
```

运行 `sysctl -p /etc/sysctl.d/90-kubelet.conf` 以启用设置。

### 配置 `etcd` 用户和组

在安装 RKE 之前，你需要设置 **etcd** 服务的用户账号和组。在安装期间，**etcd** 用户的 **uid** 和 **gid** 将用于在 RKE **config.yml** 中设置适当的文件和目录权限。

#### 创建 `etcd` 用户和组

要创建 **etcd** 用户和组，请运行以下控制台命令。下面的命令使用 `52034` 作为 **uid** 和 **gid**。该值只是一个示例。你可以使用有效且未被使用的 **uid** 或 **gid** 来代替 `52034`。

```bash
groupadd --gid 52034 etcd
useradd --comment "etcd service account" --uid 52034 --gid 52034 etcd --shell /usr/sbin/nologin
```

使用 **etcd** 用户的 **uid** 和 **gid** 来更新 RKE **config.yml**：

```yaml
services:
  etcd:
    gid: 52034
    uid: 52034
```

### 配置 `default` ServiceAccount

#### 将 `default` ServiceAccount 的 `automountServiceAccountToken` 设置为 `false`

Kubernetes 为集群工作负载提供了一个 default ServiceAccount，但没有为 pod 分配特定 ServiceAccount。如果需要从 pod 访问 Kubernetes API，则需要为该 pod 创建一个特定的 ServiceAccount 并授予权限。你还需要配置 default  ServiceAccount，使其不提供 ServiceAccount 令牌并且没有任何显式的权限分配。

对于标准 RKE 中的每个命名空间（包括 **default** 和 **kube-system**），**default** ServiceAccount 必须包含以下值：

```yaml
automountServiceAccountToken: false
```

将以下配置保存到名为 `account_update.yaml` 的文件中:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

创建一个名为 `account_update.sh` 的 bash 脚本文件。确保为脚本设置了 `chmod +x account_update.sh`，使脚本具有执行权限：

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

### 配置网络策略

#### 确保所有命名空间都定义了网络策略

如果你在同一个 Kubernetes 集群上运行不同的应用程序，被感染的应用程序可能会攻击相邻的应用程序。要确保容器只进行所需的通信，网络分段非常重要。网络策略指的是如何允许 Pod 与其他 Pod 以及与其他网络端点进行通信。

网络策略是命名空间范围的。为某个命名空间配置网络策略后，该策略不允许的所有其他流量都会被拒绝。但是，如果命名空间没有配置网络策略，则所有流量都会允许进出该命名空间中的 Pod。要执行网络策略，你必须启用 CNI（容器网络接口）插件。本指南使用 [Canal](https://github.com/projectcalico/canal) 来执行策略。有关 CNI 网络插件的更多信息，请参阅[这里](https://www.suse.com/c/rancher_blog/comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/)。

在集群上启用了 CNI 网络插件后，你就可以应用默认网络策略了。以下提供了一个供参考的 **permissive** 示例。如果要允许所有流量发送到命名空间中的所有 pod（即使添加了导致某些 pod 被“隔离”的策略），你可以显式创建一个策略来允许该命名空间中的所有流量。将以下配置保存为 `default-allow-all.yaml`。如需查看网络策略相关的其他[文档](https://kubernetes.io/docs/concepts/services-networking/network-policies/)，请前往 Kubernetes 网站。

:::note

此 `NetworkPolicy` 只是一个示例，不建议用于生产环境。

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

创建一个名为 `apply_networkPolicy_to_all_ns.sh` 的 bash 脚本文件。确保为脚本设置了 `chmod +x apply_networkPolicy_to_all_ns.sh`，使脚本具有执行权限：

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl apply -f default-allow-all.yaml -n ${namespace}
done
```

执行此脚本能将具有 **permissive** `NetworkPolicy` 的 `default-allow-all.yaml` 配置应用于所有命名空间。

### 强化 RKE `cluster.yml` 配置参考

RKE CLI 能使用 `cluster.yml` 配置参考，该文件提供了实现 Rancher Kubernetes Engine (RKE) 的强化安装所需的配置。RKE 的[安装文档](https://rancher.com/docs/rke/latest/en/installation/)介绍了有关配置项的其他详细信息。此 `cluster.yml` 参考不包括所需的 **nodes** 参数，该参数会因你的环境而异。如需查看 RKE 中节点配置的文档，请参阅[此处](https://rancher.com/docs/rke/latest/en/config-options/nodes/)。

:::note 重要提示：

对于 Kubernetes 1.18 集群，请从 `PodSecurityPolicy` 中删除 `spec.volumes: 'ephemeral'` 配置，因为此 Kubernetes 版本不支持它。

:::

```yaml
# 如果你打算在离线环境中部署 Kubernetes，
# 请查阅配置自定义 RKE 镜像的文档。
# https://rancher.com/docs/rke/latest/en/installation/

# nodes 参数是必需的，并且会根据你的环境而有所不同。
# 节点配置的文档可以在这里找到：
# https://rancher.com/docs/rke/latest/en/config-options/nodes/
nodes: []
services:
  etcd:
    image: ""
    extra_args: {}
    extra_binds: []
    extra_env: []
    win_extra_args: {}
    win_extra_binds: []
    win_extra_env: []
    external_urls: []
    ca_cert: ""
    cert: ""
    key: ""
    path: ""
    uid: 52034
    gid: 52034
    snapshot: false
    retention: ""
    creation: ""
    backup_config: null
  kube-api:
    image: ""
    extra_args: {}
    extra_binds: []
    extra_env: []
    win_extra_args: {}
    win_extra_binds: []
    win_extra_env: []
    service_cluster_ip_range: ""
    service_node_port_range: ""
    pod_security_policy: true
    always_pull_images: false
    secrets_encryption_config:
      enabled: true
      custom_config: null
    audit_log:
      enabled: true
      configuration: null
    admission_configuration: null
    event_rate_limit:
      enabled: true
      configuration: null
  kube-controller:
    image: ""
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
      tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      bind-address: 127.0.0.1
    extra_binds: []
    extra_env: []
    win_extra_args: {}
    win_extra_binds: []
    win_extra_env: []
    cluster_cidr: ""
    service_cluster_ip_range: ""
  scheduler:
    image: ""
    extra_args:
      tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      bind-address: 127.0.0.1
    extra_binds: []
    extra_env: []
    win_extra_args: {}
    win_extra_binds: []
    win_extra_env: []
  kubelet:
    image: ""
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
      protect-kernel-defaults: true
      tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
    extra_binds: []
    extra_env: []
    win_extra_args: {}
    win_extra_binds: []
    win_extra_env: []
    cluster_domain: cluster.local
    infra_container_image: ""
    cluster_dns_server: ""
    fail_swap_on: false
    generate_serving_certificate: true
  kubeproxy:
    image: ""
    extra_args: {}
    extra_binds: []
    extra_env: []
    win_extra_args: {}
    win_extra_binds: []
    win_extra_env: []
network:
  plugin: ""
  options: {}
  mtu: 0
  node_selector: {}
  update_strategy: null
authentication:
  strategy: ""
  sans: []
  webhook: null
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
addons_include: []
system_images:
  etcd: ""
  alpine: ""
  nginx_proxy: ""
  cert_downloader: ""
  kubernetes_services_sidecar: ""
  kubedns: ""
  dnsmasq: ""
  kubedns_sidecar: ""
  kubedns_autoscaler: ""
  coredns: ""
  coredns_autoscaler: ""
  nodelocal: ""
  kubernetes: ""
  flannel: ""
  flannel_cni: ""
  calico_node: ""
  calico_cni: ""
  calico_controllers: ""
  calico_ctl: ""
  calico_flexvol: ""
  canal_node: ""
  canal_cni: ""
  canal_controllers: ""
  canal_flannel: ""
  canal_flexvol: ""
  weave_node: ""
  weave_cni: ""
  pod_infra_container: ""
  ingress: ""
  ingress_backend: ""
  metrics_server: ""
  windows_pod_infra_container: ""
ssh_key_path: ""
ssh_cert_path: ""
ssh_agent_auth: false
authorization:
  mode: ""
  options: {}
ignore_docker_version: false
kubernetes_version: ""
private_registries: []
ingress:
  provider: ""
  options: {}
  node_selector: {}
  extra_args: {}
  dns_policy: ""
  extra_envs: []
  extra_volumes: []
  extra_volume_mounts: []
  update_strategy: null
  http_port: 0
  https_port: 0
  network_mode: ""
cluster_name:
cloud_provider:
  name: ""
prefix_path: ""
win_prefix_path: ""
addon_job_timeout: 0
bastion_host:
  address: ""
  port: ""
  user: ""
  ssh_key: ""
  ssh_key_path: ""
  ssh_cert: ""
  ssh_cert_path: ""
monitoring:
  provider: ""
  options: {}
  node_selector: {}
  update_strategy: null
  replicas: null
restore:
  restore: false
  snapshot_name: ""
dns: null
upgrade_strategy:
  max_unavailable_worker: ""
  max_unavailable_controlplane: ""
  drain: null
  node_drain_input: null
```

### 强化 RKE 模板配置参考

RKE 模板参考提供了实现 Kubernetes 强化安装所需的配置。RKE 模板用于配置 Kubernetes 和定义 Rancher 设置。如需了解安装以及 RKE 模板的详细信息，请参阅 Rancher [文档](../../../pages-for-subheaders/installation-and-upgrade.md)。

```yaml
#
# Cluster Config
#
default_pod_security_policy_template_id: restricted-noroot
docker_root_dir: /var/lib/docker
enable_cluster_alerting: false
enable_cluster_monitoring: false
enable_network_policy: true
local_cluster_auth_endpoint:
  enabled: true
name: ''
#
# Rancher Config
#
rancher_kubernetes_engine_config:
  addon_job_timeout: 45
  authentication:
    strategy: x509
  dns:
    nodelocal:
      ip_address: ''
      node_selector: null
      update_strategy: {}
  enable_cri_dockerd: false
  ignore_docker_version: true
#
# # 目前仅支持 Nginx ingress provider
# # 要禁用 Ingress controller，设置 `provider: none`
# # 要在指定节点上禁用 Ingress，使用 node_selector，例如：
#    provider: nginx
#    node_selector:
#      app: ingress
#
  ingress:
    default_backend: false
    default_ingress_class: true
    http_port: 0
    https_port: 0
    provider: nginx
  kubernetes_version: v1.21.8-rancher1-1
  monitoring:
    provider: metrics-server
    replicas: 1
#
#   如果你在 AWS 使用 Calico
#
#    network:
#      plugin: calico
#      calico_network_provider:
#        cloud_provider: aws
#
# # 要指定 Flannel 接口
#
#    network:
#      plugin: flannel
#      flannel_network_provider:
#      iface: eth1
#
# # 要为 Canal 插件指定 Flannel 接口
#
#    network:
#      plugin: canal
#      canal_network_provider:
#        iface: eth1
#
  network:
    mtu: 0
    options:
      flannel_backend_type: vxlan
    plugin: canal
  rotate_encryption_key: false
#
#    services:
#      kube-api:
#        service_cluster_ip_range: 10.43.0.0/16
#      kube-controller:
#        cluster_cidr: 10.42.0.0/16
#        service_cluster_ip_range: 10.43.0.0/16
#      kubelet:
#        cluster_domain: cluster.local
#        cluster_dns_server: 10.43.0.10
#
  services:
    scheduler:
      extra_args:
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      bind-address: 127.0.0.1
    etcd:
      backup_config:
        enabled: true
        interval_hours: 12
        retention: 6
        safe_timestamp: false
        timeout: 300
      creation: 12h
      extra_args:
        election-timeout: 5000
        heartbeat-interval: 500
      retention: 72h
      snapshot: false
      uid: 52034
      gid: 52034
    kube_api:
      always_pull_images: false
      audit_log:
        enabled: true
      event_rate_limit:
        enabled: true
      pod_security_policy: true
      secrets_encryption_config:
        enabled: true
      service_node_port_range: 30000-32767
    kube-controller:
      extra_args:
        feature-gates: RotateKubeletServerCertificate=true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      bind-address: 127.0.0.1
    kubelet:
      extra_args:
        feature-gates: RotateKubeletServerCertificate=true
        protect-kernel-defaults: true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      fail_swap_on: false
      generate_serving_certificate: true
  ssh_agent_auth: false
  upgrade_strategy:
    max_unavailable_controlplane: '1'
    max_unavailable_worker: 10%
windows_prefered_cluster: false
```

### 强化 `cloud-config` 配置参考

**cloud-config** 配置文件通常用于云基础设施环境中，能让你管理计算实例的配置。此参考 config 配置了安装 Kubernetes 之前所需的 SUSE Linux Enterprise Server (SLES)、openSUSE Leap、Red Hat Enterprise Linux (RHEL) 和 Ubuntu 操作系统级别的设置。

#### 针对 SUSE Linux Enterprise Server 15 (SLES 15) 和 openSUSE Leap 15 的强化 **cloud-config** 参考

```yaml
#cloud-config
system_info:
  default_user:
    groups:
    - docker
write_files:
- path: "/etc/sysctl.d/90-kubelet.conf"
  owner: root:root
  permissions: '0644'
  content: |
    vm.overcommit_memory=1
    vm.panic_on_oom=0
    kernel.panic=10
    kernel.panic_on_oops=1
    kernel.keys.root_maxbytes=25000000
package_update: true
ssh_pwauth: false
runcmd:
# Docker 应该已在 SLES 15 SP3 中安装
- zypper install docker containerd
- systemctl daemon-reload
- systemctl enable docker.service
- systemctl start --no-block docker.service
- sysctl -p /etc/sysctl.d/90-kubelet.conf
- groupadd --gid 52034 etcd
- useradd --comment "etcd service account" --uid 52034 --gid 52034 etcd --shell /usr/sbin/nologin
```

#### 针对 Red Hat Enterprise Linux 8 (RHEL 8) 和 Ubuntu 20.04 LTS 的强化 **cloud-config** 参考

```yaml
#cloud-config
system_info:
  default_user:
    groups:
    - docker
write_files:
- path: "/etc/sysctl.d/90-kubelet.conf"
  owner: root:root
  permissions: '0644'
  content: |
    vm.overcommit_memory=1
    vm.panic_on_oom=0
    kernel.panic=10
    kernel.panic_on_oops=1
    kernel.keys.root_maxbytes=25000000
package_update: true
ssh_pwauth: false
runcmd:
# 使用 Rancher 的 Docker 安装脚本来安装 Docker - github.com/rancher/install-docker
- curl https://releases.rancher.com/install-docker/20.10.sh | sh
- sysctl -p /etc/sysctl.d/90-kubelet.conf
- groupadd --gid 52034 etcd
- useradd --comment "etcd service account" --uid 52034 --gid 52034 etcd --shell /usr/sbin/nologin
```
