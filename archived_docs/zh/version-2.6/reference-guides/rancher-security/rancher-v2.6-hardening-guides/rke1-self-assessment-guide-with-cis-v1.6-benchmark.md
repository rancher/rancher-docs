---
title: RKE CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6
---

<EOLRKE1Warning />

### RKE CIS 1.6 Kubernetes Benchmark - Rancher 2.6 与 Kubernetes 1.18 到 1.23

[点击此处下载本文档的 PDF 版本](https://releases.rancher.com/documents/security/2.6/Rancher_v2-6_CIS_v1-6_Benchmark_Assessment.pdf)。

#### 概述

本文档是 [Rancher 2.6 RKE 安全强化指南](rke1-hardening-guide-with-cis-v1.6-benchmark.md)的配套文件。强化指南（Hardening Guide）为 Rancher 的强化生产安装提供了说明，本 Benchmark 指南旨在帮助你根据 Benchmark 来评估强化集群的安全级别。

本指南对应以下强化指南、Rancher、CIS Benchmark 和 Kubernetes 版本：

| 强化指南版本 | Rancher 版本 | CIS Benchmark 版本 | Kubernetes 版本 |
| ----------------------- | --------------- | --------------------- | ------------------- |
| 强化指南 CIS v1.6 Benchmark | Rancher v2.6 | CIS v1.6 | Kubernetes v1.18 到 v1.23 |

由于 Rancher 和 RKE 将 Kubernetes 服务安装为 Docker 容器，因此 CIS Kubernetes Benchmark 中的许多管控验证检查都不适用，且结果会是 `Not Applicable`。本指南将介绍各种管控，并提供更新的示例命令来审核 Rancher 创建的集群的合规性。

本文档供 Rancher 开发、安全团队、审计员和决策者使用。

有关各个审核的更多详细信息，包括失败测试的理由和修正措施，你可以参考 CIS Kubernetes Benchmark v1.6 的对应内容。创建免费帐户后，你可以在 [Center for Internet Security (CIS)](https://www.cisecurity.org/benchmark/kubernetes/) 下载 Benchmark。

#### 测试管控方法

Rancher 和 RKE 通过 Docker 容器来安装 Kubernetes 服务。配置是通过初始化时传递给容器的参数定义的，而不是通过配置文件定义的。

如果管控审计与原始 CIS Benchmark 出现差异，针对 Rancher 提供的的审计命令可用于进行测试。执行测试时，你需要访问所有 RKE 节点主机上的命令行。这些命令还使用了测试和评估测试结果所需的 [kubectl](https://kubernetes.io/docs/tasks/tools/)（带有有效的配置文件）和 [jq](https://stedolan.github.io/jq/) 工具。

:::note

本指南仅介绍 `automated` 测试（以前称为 `scored`）。

:::

### 管控
## 1.1Master 节点配置文件
### 1.1.1确保 API Server pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 kube-apiserver 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.2确保 API Server pod 规范文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 kube-apiserver 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.3确保 Controller Manager pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 controller-manager 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.4确保 Controller Manager pod 规范文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 controller-manager 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.5确保 Scheduler pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 Scheduler 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.6确保 Scheduler pod 规范文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 Scheduler 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.7确保 etcd pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 etcd 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.8确保 etcd pod 规范文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 etcd 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.9确保容器网络接口文件权限设置为 644 或更严格的设置（手动）


**结果**：warn

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 <path/to/cni/files>

**审计**：

```bash
stat -c permissions=%a <path/to/cni/files>
```

### 1.1.10确保容器网络接口文件所有权设置为 root:root（手动）


**结果**：warn

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root <path/to/cni/files>

**审计**：

```bash
stat -c %U:%G <path/to/cni/files>
```

### 1.1.11确保 etcd 数据目录权限设置为 700 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 etcd 服务器节点上，通过以下命令获取 etcd 数据目录（作为 `--data-dir` 参数传递）。
ps -ef | grep etcd
基于上面找到的 etcd 数据目录运行以下命令。例如：chmod 700 /var/lib/etcd

**审计**：

```bash
stat -c %a /node/var/lib/etcd
```

**预期结果**：

```console
'700' is equal to '700'
```

**返回值**：

```console
700
```

### 1.1.12确保 etcd 数据目录所有权设置为 etcd:etcd（自动）


**结果**：pass

**修正措施**：
在 etcd 服务器节点上，通过以下命令获取 etcd 数据目录（作为 `--data-dir` 参数传递）。
ps -ef | grep etcd
基于上面找到的 etcd 数据目录运行以下命令。
例如：chown etcd:etcd /var/lib/etcd

etcd 数据目录所有权需要系统 ServiceAccount。
有关如何配置所有权的更多信息，请参阅 Rancher 的强化指南。

**审计**：

```bash
stat -c %U:%G /node/var/lib/etcd
```

**预期结果**：

```console
'etcd:etcd' is present
```

**返回值**：

```console
etcd:etcd
```

### 1.1.13确保 admin.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不会在节点上存储 kubernetes 的默认 kubeconfig 凭证文件。

### 1.1.14确保 admin.conf 文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不会在节点上存储 kubernetes 的默认 kubeconfig 凭证文件。

### 1.1.15确保 scheduler.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 Scheduler 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.16确保 scheduler.conf 文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 Scheduler 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.17确保 controller-manager.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 controller-manager 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.18确保将 controller-manager.conf 文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 controller-manager 的配置文件。
所有配置在容器运行时作为参数传入。

### 1.1.19确保 Kubernetes PKI 目录和文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown -R root:root /etc/kubernetes/pki/

**审计脚本**：`check_files_owner_in_dir.sh`

```bash
#!/usr/bin/env bash

# This script is used to ensure the owner is set to root:root for
# the given directory and all the files in it
#
# inputs:
#   $1 = /full/path/to/directory
#
# outputs:
#   true/false

INPUT_DIR=$1

if [[ "${INPUT_DIR}" == "" ]]; then
    echo "false"
    exit
fi

if [[ $(stat -c %U:%G ${INPUT_DIR}) != "root:root" ]]; then
    echo "false"
    exit
fi

statInfoLines=$(stat -c "%n %U:%G" ${INPUT_DIR}/*)
while read -r statInfoLine; do
  f=$(echo ${statInfoLine} | cut -d' ' -f1)
  p=$(echo ${statInfoLine} | cut -d' ' -f2)

  if [[ $(basename "$f" .pem) == "kube-etcd-"* ]]; then
    if [[ "$p" != "root:root" && "$p" != "etcd:etcd" ]]; then
      echo "false"
      exit
    fi
  else
    if [[ "$p" != "root:root" ]]; then
      echo "false"
      exit
    fi
  fi
done <<< "${statInfoLines}"


echo "true"
exit

```

**审计执行**：

```bash
./check_files_owner_in_dir.sh /node/etc/kubernetes/ssl
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
true
```

### 1.1.20确保将 Kubernetes PKI 证书文件权限设置为 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod -R 644 /etc/kubernetes/pki/*.crt

**审计脚本**：`check_files_permissions.sh`

```bash
#!/usr/bin/env bash

# This script is used to ensure the file permissions are set to 644 or
# more restrictive for all files in a given directory or a wildcard
# selection of files
#
# inputs:
#   $1 = /full/path/to/directory or /path/to/fileswithpattern
#                                   ex: !(*key).pem
#
#   $2 (optional) = permission (ex: 600)
#
# outputs:
#   true/false

# Turn on "extended glob" for use of '!' in wildcard
shopt -s extglob

# Turn off history to avoid surprises when using '!'
set -H

USER_INPUT=$1

if [[ "${USER_INPUT}" == "" ]]; then
  echo "false"
  exit
fi


if [[ -d ${USER_INPUT} ]]; then
  PATTERN="${USER_INPUT}/*"
else
  PATTERN="${USER_INPUT}"
fi

PERMISSION=""
if [[ "$2" != "" ]]; then
  PERMISSION=$2
fi

FILES_PERMISSIONS=$(stat -c %n\ %a ${PATTERN})

while read -r fileInfo; do
  p=$(echo ${fileInfo} | cut -d' ' -f2)

  if [[ "${PERMISSION}" != "" ]]; then
    if [[ "$p" != "${PERMISSION}" ]]; then
      echo "false"
      exit
    fi
  else
    if [[ "$p" != "644" && "$p" != "640" && "$p" != "600" ]]; then
      echo "false"
      exit
    fi
  fi
done <<< "${FILES_PERMISSIONS}"


echo "true"
exit

```

**审计执行**：

```bash
./check_files_permissions.sh /node/etc/kubernetes/ssl/!(*key).pem
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
true
```

### 1.1.21确保 Kubernetes PKI 密钥文件权限设置为 600（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod -R 600 /etc/kubernetes/ssl/*key.pem

**审计脚本**：`check_files_permissions.sh`

```bash
#!/usr/bin/env bash

# This script is used to ensure the file permissions are set to 644 or
# more restrictive for all files in a given directory or a wildcard
# selection of files
#
# inputs:
#   $1 = /full/path/to/directory or /path/to/fileswithpattern
#                                   ex: !(*key).pem
#
#   $2 (optional) = permission (ex: 600)
#
# outputs:
#   true/false

# Turn on "extended glob" for use of '!' in wildcard
shopt -s extglob

# Turn off history to avoid surprises when using '!'
set -H

USER_INPUT=$1

if [[ "${USER_INPUT}" == "" ]]; then
  echo "false"
  exit
fi


if [[ -d ${USER_INPUT} ]]; then
  PATTERN="${USER_INPUT}/*"
else
  PATTERN="${USER_INPUT}"
fi

PERMISSION=""
if [[ "$2" != "" ]]; then
  PERMISSION=$2
fi

FILES_PERMISSIONS=$(stat -c %n\ %a ${PATTERN})

while read -r fileInfo; do
  p=$(echo ${fileInfo} | cut -d' ' -f2)

  if [[ "${PERMISSION}" != "" ]]; then
    if [[ "$p" != "${PERMISSION}" ]]; then
      echo "false"
      exit
    fi
  else
    if [[ "$p" != "644" && "$p" != "640" && "$p" != "600" ]]; then
      echo "false"
      exit
    fi
  fi
done <<< "${FILES_PERMISSIONS}"


echo "true"
exit

```

**审计执行**：

```bash
./check_files_permissions.sh /node/etc/kubernetes/ssl/*key.pem
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
true
```

## 1.2API Server
### 1.2.1确保 --anonymous-auth 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并设置以下参数。
--anonymous-auth=false

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'false' is equal to 'false'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.2确保未设置 --basic-auth-file 参数（自动）


**结果**：pass

**修正措施**：
遵循文档并配置身份验证的替代机制。然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并移除 `--basic-auth-file=<filename>` 参数。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--basic-auth-file' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.3确保未设置 --token-auth-file 参数（自动）


**结果**：pass

**修正措施**：
遵循文档并配置身份验证的替代机制。然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并移除 `--token-auth-file=<filename>` 参数。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--token-auth-file' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.4确保 --kubelet-https 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并移除 `--kubelet-https` 参数。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--kubelet-https' is not present OR '--kubelet-https' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.5确保正确设置了 --kubelet-client-certificate 和 --kubelet-client-key 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 kubelets 的 TLS 连接。然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置以下 kubelet 客户端证书和密钥参数。
--kubelet-client-certificate=<path/to/client-certificate-file>
--kubelet-client-key=<path/to/client-key-file>

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--kubelet-client-certificate' is present AND '--kubelet-client-key' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.6确保根据需要设置 --kubelet-certificate-authority 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 kubelets 的 TLS 连接。然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--kubelet-certificate-authority` 参数设置为 CA 证书文件的路径。
`--kubelet-certificate-authority=<ca-string>`

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--kubelet-certificate-authority' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.7确保 --authorization-mode 参数未设置为 AlwaysAllow（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--authorization-mode` 参数设置为 `AlwaysAllow` 以外的值。
示例如下。
--authorization-mode=RBAC

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'Node,RBAC' not have 'AlwaysAllow'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.8确保 --authorization-mode 参数包括 Node（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--authorization-mode` 参数设置为包含 `Node` 的值。
--authorization-mode=Node,RBAC

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'Node,RBAC' has 'Node'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.9确保 --authorization-mode 参数包括 RBAC（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--authorization-mode` 参数设置为包含 `RBAC` 的值。
例如：--authorization-mode=Node,RBAC

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'Node,RBAC' has 'RBAC'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.10确保设置了准入控制插件 EventRateLimit（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档并在配置文件中设置所需的限制。
然后，编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置以下参数。
--enable-admission-plugins=...,EventRateLimit,...
--admission-control-config-file=<path/to/configuration/file>

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit' has 'EventRateLimit'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.11确保未设置准入控制插件 AlwaysAdmit（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并删除 `--enable-admission-plugins` 参数，或将其设置为不包含 `AlwaysAdmit` 的值。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit' not have 'AlwaysAdmit' OR '--enable-admission-plugins' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.12确保设置了准入控制插件 AlwaysPullImages（手动）


**结果**：warn

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包含 `AlwaysPullImages`。
--enable-admission-plugins=...,AlwaysPullImages,...

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.13如果没有使用 PodSecurityPolicy，请确保设置了准入控制插件 SecurityContextDeny（手动）


**结果**：warn

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包括 `SecurityContextDeny`，除非已设置了 PodSecurityPolicy。
--enable-admission-plugins=...,SecurityContextDeny,...

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.14确保设置了准入控制插件 ServiceAccount（自动）


**结果**：pass

**修正措施**：
遵循文档并根据你的环境创建 ServiceAccount 对象。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并确保 `--disable-admission-plugins` 参数设置为不包含 ServiceAccount 的值。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--disable-admission-plugins' is not present OR '--disable-admission-plugins' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.15确保设置了准入控制插件 NamespaceLifecycle（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置 `--disable-admission-plugins` 参数，确保它不包含 NamespaceLifecycle。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--disable-admission-plugins' is not present OR '--disable-admission-plugins' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.16确保设置了准入控制插件 PodSecurityPolicy（自动）


**结果**：pass

**修正措施**：
遵循文档并根据你的环境创建 Pod 安全策略对象。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包含 PodSecurityPolicy 的值：
--enable-admission-plugins=...,PodSecurityPolicy,...
然后重新启动 API Server。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit' has 'PodSecurityPolicy'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.17确保设置了准入控制插件 NodeRestriction（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档，在 kubelets 上配置 NodeRestriction 插件。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包含 NodeRestriction 的值。
--enable-admission-plugins=...,NodeRestriction,...

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit' has 'NodeRestriction'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.18确保未设置 --insecure-bind-address 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并移除 `--insecure-bind-address` 参数。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--insecure-bind-address' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.19确保 --insecure-port 参数设置为 0（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并设置以下参数。
--insecure-port=0

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'0' is equal to '0'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.20确保 --secure-port 参数未设置为 0（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并删除 `--secure-port` 参数或将其设置为另一个所需端口（非零）。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
6443 is greater than 0 OR '--secure-port' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.21确保 --profiling 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并设置以下参数。
--profiling=false

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'false' is equal to 'false'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.22确保设置了 --audit-log-path 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--audit-log-path` 参数设置为所需的路径以及要写入审计日志的文件。
例如：--audit-log-path=/var/log/apiserver/audit.log

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--audit-log-path' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.23确保将 --audit-log-maxage 参数设置为 30 或适当的数值（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--audit-log-maxage` 参数设置为 30 或适当的天数：
--audit-log-maxage=30

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
30 is greater or equal to 30
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.24确保 --audit-log-maxbackup 参数设置为 10 或适当的数值（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--audit-log-maxbackup` 参数设置为 10 或适当的数值。
--audit-log-maxbackup=10

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
10 is greater or equal to 10
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.25确保 --audit-log-maxsize 参数设置为 100 或适当的数值（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--audit-log-maxsize` 参数设置为适当的大小（以 MB 为单位）。
例如，要将其设置为 100 MB：
--audit-log-maxsize=100

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
100 is greater or equal to 100
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.26确保能根据需要设置 --request-timeout 参数（自动）


**结果**：pass

**修正措施**：
编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并根据需要设置以下参数。
例如：--request-timeout=300s

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--request-timeout' is not present OR '--request-timeout' is not present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.27确保 --service-account-lookup 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并设置以下参数。
--service-account-lookup=true

你也可以删除此文件的 --service-account-lookup 参数，从而使默认设置生效。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--service-account-lookup' is not present OR 'true' is equal to 'true'
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.28确保根据需要设置 --service-account-key-file 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并为 ServiceAccount 将 `--service-account-key-file` 参数设置为公钥文件：
`--service-account-key-file=<filename>`

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--service-account-key-file' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.29确保根据需要设置 --etcd-certfile 和 --etcd-keyfile 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 etcd 的 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置 etcd 证书和密钥文件参数。
`--etcd-certfile=<path/to/client-certificate-file>`
`--etcd-keyfile=<path/to/client-key-file>`

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--etcd-certfile' is present AND '--etcd-keyfile' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.30确保根据需要设置 --tls-cert-file 和 --tls-private-key-file 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档并在 apiserver 上设置 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置 TLS 证书和私钥文件参数。
`--tls-cert-file=<path/to/tls-certificate-file>`
`--tls-private-key-file=<path/to/tls-key-file>`

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--tls-cert-file' is present AND '--tls-private-key-file' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.31确保根据需要设置 --client-ca-file 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档并在 apiserver 上设置 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置客户端 CA 文件。
`--client-ca-file=<path/to/client-ca-file>`

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--client-ca-file' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.32确保 --etcd-cafile 参数设置正确（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 etcd 的 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并设置 etcd CA 文件参数。
`--etcd-cafile=<path/to/ca-file>`

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--etcd-cafile' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.33确保根据需要设置 --encryption-provider-config 参数（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档并配置 EncryptionConfig 文件。
然后，在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml，并将 `--encryption-provider-config` 参数设置为该文件的路径：
--encryption-provider-config=</path/to/EncryptionConfig/File>

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--encryption-provider-config' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 1.2.34确保正确配置加密提供程序（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档并配置 EncryptionConfig 文件。
在此文件中，选择 aescbc、kms 或 secretbox 作为加密提供程序。

**审计脚本**：`check_encryption_provider_config.sh`

```bash
#!/usr/bin/env bash

# This script is used to check the encrption provider config is set to aesbc
#
# outputs:
#   true/false

# TODO: Figure out the file location from the kube-apiserver commandline args
ENCRYPTION_CONFIG_FILE="/node/etc/kubernetes/ssl/encryption.yaml"

if [[ !-f "${ENCRYPTION_CONFIG_FILE}" ]]; then
  echo "false"
  exit
fi

for provider in "$@"
do
  if grep "$provider" "${ENCRYPTION_CONFIG_FILE}"; then
    echo "true"
    exit
  fi
done

echo "false"
exit

```

**审计执行**：

```bash
./check_encryption_provider_config.sh aescbc
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
- aescbc: true
```

### 1.2.35确保 API Server 仅使用强密码（自动）


**结果**：warn

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /etc/kubernetes/manifests/kube-apiserver.yaml 并设置以下参数。
--tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM
_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM
_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM
_SHA384

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

## 1.3Controller Manager
### 1.3.1确保正确设置 --terminated-pod-gc-threshold 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并将 `--terminated-pod-gc-threshold` 设置为适当的阈值。
例如：--terminated-pod-gc-threshold=10

**审计**：

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**预期结果**：

```console
'--terminated-pod-gc-threshold' is present
```

**返回值**：

```console
root 121366 121346 1 12:27 ?00:01:13 kube-controller-manager --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --allocate-node-cidrs=true --configure-cloud-routes=false --leader-elect=true --pod-eviction-timeout=5m0s --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --bind-address=127.0.0.1 --enable-hostpath-provisioner=false --address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --cloud-provider= --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --node-monitor-grace-period=40s --profiling=false --terminated-pod-gc-threshold=1000 --v=2 --allow-untagged-cloud=true --use-service-account-credentials=true
```

### 1.3.2确保 --profiling 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并设置以下参数。
--profiling=false

**审计**：

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**预期结果**：

```console
'false' is equal to 'false'
```

**返回值**：

```console
root 121366 121346 1 12:27 ?00:01:13 kube-controller-manager --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --allocate-node-cidrs=true --configure-cloud-routes=false --leader-elect=true --pod-eviction-timeout=5m0s --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --bind-address=127.0.0.1 --enable-hostpath-provisioner=false --address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --cloud-provider= --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --node-monitor-grace-period=40s --profiling=false --terminated-pod-gc-threshold=1000 --v=2 --allow-untagged-cloud=true --use-service-account-credentials=true
```

### 1.3.3确保 --use-service-account-credentials 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并设置以下参数。
--use-service-account-credentials=true

**审计**：

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**预期结果**：

```console
'true' is not equal to 'false'
```

**返回值**：

```console
root 121366 121346 1 12:27 ?00:01:13 kube-controller-manager --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --allocate-node-cidrs=true --configure-cloud-routes=false --leader-elect=true --pod-eviction-timeout=5m0s --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --bind-address=127.0.0.1 --enable-hostpath-provisioner=false --address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --cloud-provider= --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --node-monitor-grace-period=40s --profiling=false --terminated-pod-gc-threshold=1000 --v=2 --allow-untagged-cloud=true --use-service-account-credentials=true
```

### 1.3.4确保根据需要设置 --service-account-private-key-file 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并为 ServiceAccount 将 `--service-account-private-key-file` 参数设置为私钥文件。
`--service-account-private-key-file=<filename>`

**审计**：

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**预期结果**：

```console
'--service-account-private-key-file' is present
```

**返回值**：

```console
root 121366 121346 1 12:27 ?00:01:13 kube-controller-manager --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --allocate-node-cidrs=true --configure-cloud-routes=false --leader-elect=true --pod-eviction-timeout=5m0s --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --bind-address=127.0.0.1 --enable-hostpath-provisioner=false --address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --cloud-provider= --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --node-monitor-grace-period=40s --profiling=false --terminated-pod-gc-threshold=1000 --v=2 --allow-untagged-cloud=true --use-service-account-credentials=true
```

### 1.3.5确保根据需要设置 --root-ca-file 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并将 `--root-ca-file` 参数设置为证书绑定文件。
`--root-ca-file=<path/to/file>`

**审计**：

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**预期结果**：

```console
'--root-ca-file' is present
```

**返回值**：

```console
root 121366 121346 1 12:27 ?00:01:13 kube-controller-manager --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --allocate-node-cidrs=true --configure-cloud-routes=false --leader-elect=true --pod-eviction-timeout=5m0s --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --bind-address=127.0.0.1 --enable-hostpath-provisioner=false --address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --cloud-provider= --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --node-monitor-grace-period=40s --profiling=false --terminated-pod-gc-threshold=1000 --v=2 --allow-untagged-cloud=true --use-service-account-credentials=true
```

### 1.3.6确保 RotateKubeletServerCertificate 参数设置为 true（自动）


**结果**：Not Applicable

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并将 `--feature-gates` 参数设置为包含 `RotateKubeletServerCertificate=true`。
--feature-gates=RotateKubeletServerCertificate=true

RKE 配置的集群直接使用 RKE 处理证书轮换。

### 1.3.7确保 --bind-address 参数设置为 127.0.0.1（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /etc/kubernetes/manifests/kube-controller-manager.yaml，并确保 `--bind-address` 参数的值正确。

**审计**：

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**预期结果**：

```console
'127.0.0.1' is equal to '127.0.0.1' OR '--bind-address' is not present
```

**返回值**：

```console
root 121366 121346 1 12:27 ?00:01:13 kube-controller-manager --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --allocate-node-cidrs=true --configure-cloud-routes=false --leader-elect=true --pod-eviction-timeout=5m0s --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --bind-address=127.0.0.1 --enable-hostpath-provisioner=false --address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --cloud-provider= --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --node-monitor-grace-period=40s --profiling=false --terminated-pod-gc-threshold=1000 --v=2 --allow-untagged-cloud=true --use-service-account-credentials=true
```

## 1.4Scheduler
### 1.4.1确保 --profiling 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Scheduler pod 规范文件 /etc/kubernetes/manifests/kube-scheduler.yaml 文件，并设置以下参数。
--profiling=false

**审计**：

```bash
/bin/ps -ef | grep kube-scheduler | grep -v grep
```

**预期结果**：

```console
'false' is equal to 'false'
```

**返回值**：

```console
root 121587 121567 0 12:27 ?00:00:12 kube-scheduler --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --address=127.0.0.1 --leader-elect=true --profiling=false --v=2 --bind-address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
```

### 1.4.2确保 --bind-address 参数设置为 127.0.0.1（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Scheduler pod 规范文件 /etc/kubernetes/manifests/kube-scheduler.yaml，并确保 `--bind-address` 参数的值正确。

**审计**：

```bash
/bin/ps -ef | grep kube-scheduler | grep -v grep
```

**预期结果**：

```console
'127.0.0.1' is equal to '127.0.0.1' OR '--bind-address' is not present
```

**返回值**：

```console
root 121587 121567 0 12:27 ?00:00:12 kube-scheduler --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --address=127.0.0.1 --leader-elect=true --profiling=false --v=2 --bind-address=127.0.0.1 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
```

## 2 Etcd Node Configuration Files
### 2.1确保根据需要设置 --cert-file 和 --key-file 参数（自动）


**结果**：pass

**修正措施**：
按照 etcd 服务文档配置 TLS 加密。
然后，在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并设置以下参数。
`--cert-file=</path/to/ca-file>`
`--key-file=</path/to/key-file>`

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--cert-file' is present AND '--key-file' is present
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 2 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.2确保 --client-cert-auth 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并设置以下参数。
--client-cert-auth="true"

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--client-cert-auth' is present OR 'true' is equal to 'true'
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 2 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.3确保 --auto-tls 参数未设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并删除 `--auto-tls` 参数或将其设置为 false。
--auto-tls=false

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--auto-tls' is not present OR '--auto-tls' is not present
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 1 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.4确保根据需要设置 --peer-cert-file 和 --peer-key-file 参数（自动）


**结果**：pass

**修正措施**：
遵循 etcd 服务文档，根据需要为你的 etcd 集群配置对等 TLS 加密。
然后，在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并设置以下参数。
`--peer-client-file=</path/to/peer-cert-file>`
`--peer-key-file=</path/to/peer-key-file>`

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--peer-cert-file' is present AND '--peer-key-file' is present
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 5 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.5确保 --peer-client-cert-auth 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并设置以下参数。
--peer-client-cert-auth=true

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--peer-client-cert-auth' is present OR 'true' is equal to 'true'
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 4 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.6确保 --peer-auto-tls 参数未设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并删除 `--peer-auto-tls` 参数或将其设置为 false。
--peer-auto-tls=false

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--peer-auto-tls' is not present OR '--peer-auto-tls' is present
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 4 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.7确保 etcd 使用唯一的 CA（自动）


**结果**：pass

**修正措施**：
[手动测试]
遵循 etcd 文档，为 etcd 服务创建专用的 CA 设置。
然后，在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并设置以下参数。
`--trusted-ca-file=</path/to/ca-file>`

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--trusted-ca-file' is present
```

**返回值**：

```console
etcd 120679 120657 1 12:27 ?00:01:17 /usr/local/bin/etcd --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --heartbeat-interval=500 --election-timeout=5000 --initial-cluster-token=etcd-cluster-1 --initial-cluster=etcd-<external_ip>=https://<node_ip>:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --initial-advertise-peer-urls=https://<node_ip>:2380 --initial-cluster-state=new --advertise-client-urls=https://<node_ip>:2379 --client-cert-auth=true --enable-v2=true --name=etcd-<external_ip> --listen-client-urls=https://<node_ip>:2379 --listen-peer-urls=https://<node_ip>:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-<node_ip>-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 120728 120707 0 12:27 ?00:00:00 /opt/rke-tools/rke-etcd-backup etcd-backup save --cacert /etc/kubernetes/ssl/kube-ca.pem --cert /etc/kubernetes/ssl/kube-node.pem --key /etc/kubernetes/ssl/kube-node-key.pem --name etcd-rolling-snapshots --endpoints=<node_ip>:2379 --retention=72h --creation=12h root 121142 121120 7 12:27 ?00:06:27 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json root 214939 214868 3 13:56 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

## 3.1认证和授权
### 3.1.1不能将客户端证书身份验证应用于用户（手动）


**结果**：warn

**修正措施**：
Kubernetes 提供的替代机制（例如 OIDC）应该代替客户端证书的实现。

## 3.2Logging
### 3.2.1确保创建最小审计策略（自动）


**结果**：pass

**修正措施**：
为你的集群创建一个审计策略文件。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--audit-policy-file' is present
```

**返回值**：

```console
root 121142 121120 7 12:27 ?00:06:28 kube-apiserver --audit-log-maxsize=100 --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --service-cluster-ip-range=10.43.0.0/16 --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --advertise-address=<node_ip> --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --allow-privileged=true --requestheader-extra-headers-prefix=X-Remote-Extra- --admission-control-config-file=/etc/kubernetes/admission.yaml --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --service-account-lookup=true --runtime-config=policy/v1beta1/podsecuritypolicy=true --authorization-mode=Node,RBAC --audit-log-maxage=30 --profiling=false --storage-backend=etcd3 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-servers=https://<node_ip>:2379 --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --secure-port=6443 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --insecure-port=0 --api-audiences=unknown --audit-policy-file=/etc/kubernetes/audit-policy.yaml --etcd-prefix=/registry --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --requestheader-group-headers=X-Remote-Group --cloud-provider= --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --anonymous-auth=false --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-maxbackup=10 --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --audit-log-format=json
```

### 3.2.2确保审计策略涵盖关键安全问题（手动）


**结果**：warn

**修正措施**：
考虑修改集群上使用的审计策略，至少要包括这些项目。

## 4.1Worker 节点配置文件
### 4.1.1确保 kubelet 服务文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 kubelet 服务的配置文件。
所有配置在容器运行时作为参数传入。

### 4.1.2确保 kubelet 服务文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
RKE 配置的集群不需要或维护 kubelet 服务的配置文件。
所有配置在容器运行时作为参数传入。

### 4.1.3如果代理 kubeconfig 文件存在，请确保权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 $proykubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; then stat -c %a /node/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; fi'
```

**预期结果**：

```console
'644' is present OR '640' is present OR '600' is equal to '600' OR '444' is present OR '440' is present OR '400' is present OR '000' is present
```

**返回值**：

```console
600
```

### 4.1.4确保代理 kubeconfig 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; then stat -c %U:%G /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; fi'
```

**预期结果**：

```console
'root:root' is not present OR '/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml' is not present
```

### 4.1.5确保 --kubeconfig kubelet.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /etc/kubernetes/ssl/kubecfg-kube-node.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /etc/kubernetes/ssl/kubecfg-kube-node.yaml; then stat -c permissions=%a /etc/kubernetes/ssl/kubecfg-kube-node.yaml; fi'
```

**预期结果**：

```console
'permissions' is not present
```

### 4.1.6确保 --kubeconfig kubelet.conf 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /etc/kubernetes/ssl/kubecfg-kube-node.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; then stat -c %U:%G /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; fi'
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 4.1.7确保 CA 文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
运行以下命令修改 `--client-ca-file chmod 644 <filename>` 的文件权限。

**审计脚本**：`check_cafile_permissions.sh`

```bash
#!/usr/bin/env bash

CAFILE=$(ps -ef | grep kubelet | grep -v apiserver | grep -- --client-ca-file= | awk -F '--client-ca-file=' '{print $2}' | awk '{print $1}')
if test -z $CAFILE; then CAFILE=$kubeletcafile; fi
if test -e $CAFILE; then stat -c permissions=%a $CAFILE; fi

```

**审计执行**：

```bash
./check_cafile_permissions.sh
```

**预期结果**：

```console
'permissions' is not present
```

### 4.1.8确保客户端 CA 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
运行以下命令来修改 `--client-ca-file` 的所有权。
`chown root:root <filename>`

**审计脚本**：`check_cafile_ownership.sh`

```bash
#!/usr/bin/env bash

CAFILE=$(ps -ef | grep kubelet | grep -v apiserver | grep -- --client-ca-file= | awk -F '--client-ca-file=' '{print $2}' | awk '{print $1}')
if test -z $CAFILE; then CAFILE=$kubeletcafile; fi
if test -e $CAFILE; then stat -c %U:%G $CAFILE; fi

```

**审计执行**：

```bash
./check_cafile_ownership.sh
```

**预期结果**：

```console
'root:root' is not present
```

### 4.1.9确保 kubelet --config 配置文件权限具有 644 或更严格的设置（自动）


**结果**：Not Applicable

**修正措施**：
运行以下命令（使用审计步骤中确定的配置文件位置）：
chmod 644 /var/lib/kubelet/config.yaml

RKE 配置的集群不需要或维护 kubelet 的配置文件。
所有配置在容器运行时作为参数传入。

### 4.1.10确保 kubelet --config 配置文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
运行以下命令（使用审计步骤中确定的配置文件位置）：
chown root:root /var/lib/kubelet/config.yaml

RKE 配置的集群不需要或维护 kubelet 的配置文件。
所有配置在容器运行时作为参数传入。

## 4.2Kubelet
### 4.2.1确保将 anonymous-auth 参数设置为 false（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件，将 authentication: anonymous 设置为 `false`。
如果使用可执行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_SYSTEM_PODS_ARGS` 变量中设置以下参数。
--anonymous-auth=false
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present
```

### 4.2.2确保 --authorization-mode 参数未设置为 AlwaysAllow（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件，将 authorization: mode 设置为 `Webhook`。如果使用可执行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_AUTHZ_ARGS` 变量中设置以下参数。
--authorization-mode=Webhook
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present
```

### 4.2.3确保根据需要设置 --client-ca-file 参数（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑文件，将 authentication: x509: clientCAFile 设置为客户端 CA 文件的位置。
如果使用命令行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_AUTHZ_ARGS` 变量中设置以下参数。
`--client-ca-file=<path/to/client-ca-file>`
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present
```

### 4.2.4确保 --read-only-port 参数设置为 0（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件，将 `readOnlyPort` 设置为 0。
如果使用命令行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_SYSTEM_PODS_ARGS` 变量中设置以下参数。
--read-only-port=0
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present OR '' is not present
```

### 4.2.5确保 --streaming-connection-idle-timeout 参数未设置为 0（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件，将 `streamingConnectionIdleTimeout` 设置为 0 以外的值。
如果使用命令行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_SYSTEM_PODS_ARGS` 变量中设置以下参数。
--streaming-connection-idle-timeout=5m
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'30m' is not equal to '0' OR '--streaming-connection-idle-timeout' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 121813 121792 4 12:27 ?00:03:37 kubelet --fail-swap-on=false --resolv-conf=/etc/resolv.conf --authorization-mode=Webhook --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --make-iptables-util-chains=true --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --hostname-override=<external_ip> --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-<node_ip>.pem --network-plugin=cni --streaming-connection-idle-timeout=30m --root-dir=/var/lib/kubelet --event-qps=0 --feature-gates=RotateKubeletServerCertificate=true --protect-kernel-defaults=true --cloud-provider= --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-<node_ip>-key.pem --cgroups-per-qos=True --cni-bin-dir=/opt/cni/bin --cni-conf-dir=/etc/cni/net.d --pod-infra-container-image=rancher/mirrored-pause:3.5 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --anonymous-auth=false --authentication-token-webhook=true --node-ip=<node_ip> --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --read-only-port=0 --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.6确保 --protect-kernel-defaults 参数设置为 true（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件以设置 `protectKernelDefaults: true`。
如果使用命令行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_SYSTEM_PODS_ARGS` 变量中设置以下参数。
--protect-kernel-defaults=true
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present
```

### 4.2.7确保 --make-iptables-util-chains 参数设置为 true（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件以设置 `makeIPTablesUtilChains: true`。
如果使用命令行参数，请在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并删除 `KUBELET_SYSTEM_PODS_ARGS` 变量中的 `--make-iptables-util-chains` 参数。
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present OR '' is not present
```

### 4.2.8确保未设置 --hostname-override 参数（手动）


**结果**：Not Applicable

**修正措施**：
在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并删除 `KUBELET_SYSTEM_PODS_ARGS` 变量中的 `--hostname-override` 参数。
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

RKE 配置的集群会设置 `--hostname-override`，从而避免主机名配置错误。

### 4.2.9确保 --event-qps 参数设置为 0 或能适当抓取事件的级别（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件以将 `eventRecordQPS` 设置为适当的级别。
如果使用命令行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_SYSTEM_PODS_ARGS` 变量中设置以下参数。
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present
```

### 4.2.10确保根据需要设置 --tls-cert-file 和 --tls-private-key-file 参数（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件以将 `tlsCertFile` 设置为证书文件的位置来使用 Kubelet 的标识符，并将 `tlsPrivateKeyFile` 设置为对应的私钥文件的位置。
如果使用命令行参数，请在每个 Worker 节点中编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_CERTIFICATE_ARGS` 变量中设置以下参数。
`--tls-cert-file=<path/to/tls-certificate-file>`
`--tls-private-key-file=<path/to/tls-key-file>`
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present AND '' is not present
```

### 4.2.11确保 --rotate-certificates 参数未设置为 false（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑文件以添加行 `rotateCertificates: true`，或完全删除它以使用默认值。
如果使用命令行参数，请在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并删除 `KUBELET_CERTIFICATE_ARGS` 变量中的 `--rotate-certificates=false` 参数。
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'--rotate-certificates' is not present OR '--rotate-certificates' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 121813 121792 4 12:27 ?00:03:37 kubelet --fail-swap-on=false --resolv-conf=/etc/resolv.conf --authorization-mode=Webhook --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --make-iptables-util-chains=true --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --hostname-override=<external_ip> --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-<node_ip>.pem --network-plugin=cni --streaming-connection-idle-timeout=30m --root-dir=/var/lib/kubelet --event-qps=0 --feature-gates=RotateKubeletServerCertificate=true --protect-kernel-defaults=true --cloud-provider= --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-<node_ip>-key.pem --cgroups-per-qos=True --cni-bin-dir=/opt/cni/bin --cni-conf-dir=/etc/cni/net.d --pod-infra-container-image=rancher/mirrored-pause:3.5 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --anonymous-auth=false --authentication-token-webhook=true --node-ip=<node_ip> --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --read-only-port=0 --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.12验证 RotateKubeletServerCertificate 参数是否设置为 true（自动）


**结果**：Not Applicable

**修正措施**：
在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_CERTIFICATE_ARGS` 变量中设置以下参数。
--feature-gates=RotateKubeletServerCertificate=true
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

RKE 配置的集群直接使用 RKE 处理证书轮换。

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

### 4.2.13确保 Kubelet 仅使用强密码（自动）


**结果**：pass

**修正措施**：
如果使用 Kubelet 配置文件，请编辑该文件以将 `TLSCipherSuites` 设置为
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 或这些值的子集。
如果使用可执行参数，请在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并将 `--tls-cipher-suites` 参数设置如下值，或这些值的子集。
--tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/kubelet/config.yaml
```

**预期结果**：

```console
'' is not present
```

## 5.1RBAC 和 ServiceAccount
### 5.1.1确保仅在需要时使用 cluster-admin 角色（手动）


**结果**：warn

**修正措施**：
识别 cluster-admin 角色的所有 clusterrolebindings。检查它们是否被使用，它们是否需要这个角色，或者是否可以使用较低权限的角色。
在可能的情况下，先将用户绑定到较低权限的角色，然后删除绑定到 cluster-admin 角色的 clusterrolebinding：
kubectl delete clusterrolebinding [name]

### 5.1.2尽量减少对密文的访问（手动）


**结果**：warn

**修正措施**：
在可能的情况下，删除对集群中密文对象的 get、list 和 watch 访问。

### 5.1.3尽量减少角色和 ClusterRoles 中通配符的使用（手动）


**结果**：warn

**修正措施**：
在可能的情况下，将集群角色和角色中的通配符替换为特定的对象或动作。

### 5.1.4尽量减少创建 pod 的访问（手动）


**结果**：warn

**修正措施**：
在可能的情况下，删除对集群中 pod 对象的创建访问权限。

### 5.1.5确保未主动使用默认 ServiceAccount。（自动）


**结果**：pass

**修正措施**：
在 Kubernetes 工作负载需要对 Kubernetes API Server 进行特定访问时，创建显式的 ServiceAccount。
修改每个默认 ServiceAccount 的配置以包含此值
automountServiceAccountToken: false

**审计脚本**：`check_for_default_sa.sh`

```bash
#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

count_sa=$(kubectl get serviceaccounts --all-namespaces -o json | jq -r '.items[] | select(.metadata.name=="default") | select((.automountServiceAccountToken == null) or (.automountServiceAccountToken == true))' | jq .metadata.namespace | wc -l)
if [[ ${count_sa} -gt 0 ]]; then
    echo "false"
    exit
fi

for ns in $(kubectl get ns --no-headers -o custom-columns=":metadata.name")
do
    for result in $(kubectl get clusterrolebinding,rolebinding -n $ns -o json | jq -r '.items[] | select((.subjects[].kind=="ServiceAccount" and .subjects[].name=="default") or (.subjects[].kind=="Group" and .subjects[].name=="system:serviceaccounts"))' | jq -r '"\(.roleRef.kind),\(.roleRef.name)"')
    do
        read kind name <<<$(IFS=","; echo $result)
        resource_count=$(kubectl get $kind $name -n $ns -o json | jq -r '.rules[] | select(.resources[] != "podsecuritypolicies")' | wc -l)
        if [[ ${resource_count} -gt 0 ]]; then
            echo "false"
            exit
        fi
    done
done


echo "true"
```

**审计执行**：

```bash
./check_for_default_sa.sh
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
true
```

### 5.1.6确保仅在必要时挂载 ServiceAccount 令牌（手动）


**结果**：warn

**修正措施**：
修改不需要挂载 ServiceAccount 令牌的 pod 和 ServiceAccount 的定义，使其禁用。

## 5.2Pod 安全策略
### 5.2.1最小化特权容器的准入（手动）


**结果**：warn

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.privileged` 字段被省略或设置为 false。

### 5.2.2最小化需要共享主机进程 ID 命名空间的容器准入（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.hostPID` 字段被省略或设置为 false。

**审计**：

```bash
kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.hostPID == null) or (.spec.hostPID == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
```

**预期结果**：

```console
1 is greater than 0
```

**返回值**：

```console
--count=1
```

### 5.2.3最小化需要共享主机 IPC 命名空间的容器准入（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.hostIPC` 字段被省略或设置为 false。

**审计**：

```bash
kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.hostIPC == null) or (.spec.hostIPC == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
```

**预期结果**：

```console
1 is greater than 0
```

**返回值**：

```console
--count=1
```

### 5.2.4最小化需要共享主机网络命名空间的容器准入（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.hostNetwork` 字段被省略或设置为 false。

**审计**：

```bash
kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.hostNetwork == null) or (.spec.hostNetwork == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
```

**预期结果**：

```console
1 is greater than 0
```

**返回值**：

```console
--count=1
```

### 5.2.5使用 allowPrivilegeEscalation（自动）最小化容器的准入


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.allowPrivilegeEscalation` 字段被省略或设置为 false。

**审计**：

```bash
kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.allowPrivilegeEscalation == null) or (.spec.allowPrivilegeEscalation == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
```

**预期结果**：

```console
1 is greater than 0
```

**返回值**：

```console
--count=1
```

### 5.2.6最小化根容器的准入（手动）


**结果**：warn

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.runAsUser.rule` 设置为 `MustRunAsNonRoot` 或 `MustRunAs`，范围为不包括 0 的 UID。

### 5.2.7使用 NET_RAW 功能最大限度地减少容器的准入（手动）


**结果**：warn

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.requiredDropCapabilities` 包括 `NET_RAW` 或 `ALL`。

### 5.2.8使用添加的功能最大限度地减少容器的准入（手动）


**结果**：warn

**修正措施**：
确保集群的 PSP 中不存在 `allowedCapabilities`，除非它被设置为一个空数组。

### 5.2.9使用分配的功能最大限度地减少容器的准入（手动）


**结果**：warn

**修正措施**：
查看集群上运行的应用程序中功能的使用情况。如果一个命名空间包含不需要任何 Linux 功能的应用，你可以考虑添加一个 PSP，禁止不丢弃所有功能的容器的准入。

## 5.3网络策略和 ​​CNI
### 5.3.1确保使用的 CNI 支持网络策略（手动）


**结果**：warn

**修正措施**：
如果使用的 CNI 插件不支持网络策略，则应考虑使用不同的插件，或在 Kubernetes 集群中寻找替代机制来限制流量。

### 5.3.2确保所有命名空间都定义了网络策略（自动）


**结果**：pass

**修正措施**：
遵循文档并根据需要创建 NetworkPolicy 对象。

**审计脚本**：`check_for_network_policies.sh`

```bash
#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

for namespace in $(kubectl get namespaces --all-namespaces -o json | jq -r '.items[].metadata.name'); do
  policy_count=$(kubectl get networkpolicy -n ${namespace} -o json | jq '.items | length')
  if [[ ${policy_count} -eq 0 ]]; then
    echo "false"
    exit
  fi
done

echo "true"

```

**审计执行**：

```bash
./check_for_network_policies.sh
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
true
```

## 5.4密文管理
### 5.4.1优先使用密文文件而不是密文环境变量（手动）


**结果**：warn

**修正措施**：
如果可能，重写应用程序代码，从挂载的密文文件而不是环境变量中读取密文。

### 5.4.2考虑外部密文存储（手动）


**结果**：warn

**修正措施**：
请参阅你的云提供商或第三方密文管理解决方案的密文管理选项。

## 5.5可扩展准入控制
### 5.5.1使用 ImagePolicyWebhook 准入控制器配置镜像来源（手动）


**结果**：warn

**修正措施**：
遵循 Kubernetes 文档并设置镜像来源。

## 5.7通用策略
### 5.7.1使用命名空间在资源之间创建管理边界（手动）


**结果**：warn

**修正措施**：
遵循文档并根据需要为 Deployment 中的对象创建命名空间。

### 5.7.2确保 seccomp 配置文件在你的 pod 定义中设置为 docker/default（手动）


**结果**：warn

**修正措施**：
Seccomp 目前是一个 alpha 功能。默认情况下，所有 alpha 功能都是禁用的。因此，你需要通过传入 `--feature-
gates=AllAlpha=true` 参数来启用 apiserver 中的 alpha 功能。
编辑 Master 节点上的 /etc/kubernetes/apiserver 文件，并将 `KUBE_API_ARGS` 参数设置为 `--feature-gates=AllAlpha=true`
KUBE_API_ARGS="--feature-gates=AllAlpha=true"
根据你的系统，重新启动 kube-apiserver 服务。例如：systemctl restart kube-apiserver.service
使用注释在你的 pod 定义中启用 docker/default seccomp 配置文件。以下是一个示例：
apiVersion: v1
kind: Pod
metadata:
name: trustworthy-pod
annotations:
seccomp.security.alpha.kubernetes.io/pod: docker/default
spec:
containers:
- name: trustworthy-container
   image: sotrustworthy:latest

### 5.7.3将安全上下文应用到你的 Pod 和容器（手动）


**结果**：warn

**修正措施**：
遵循 Kubernetes 文档，将安全上下文应用到你的 pod。关于安全上下文的建议清单，你可以参考 CIS 的 Docker 容器安全 Benchmark。

### 5.7.4确保不使用 Default 命名空间（自动）


**结果**：pass

**修正措施**：
确保创建命名空间以允许对 Kubernetes 进行适当的隔离资源，并且所有新资源都创建在特定的命名空间中。

**审计脚本**：`check_for_default_ns.sh`

```bash
#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

count=$(kubectl get all -n default -o json | jq .items[] | jq -r 'select((.metadata.name!="kubernetes"))' | jq .metadata.name | wc -l)
if [[ ${count} -gt 0 ]]; then
    echo "false"
    exit
fi

echo "true"


```

**审计执行**：

```bash
./check_for_default_ns.sh
```

**预期结果**：

```console
'true' is equal to 'true'
```

**返回值**：

```console
true
```

