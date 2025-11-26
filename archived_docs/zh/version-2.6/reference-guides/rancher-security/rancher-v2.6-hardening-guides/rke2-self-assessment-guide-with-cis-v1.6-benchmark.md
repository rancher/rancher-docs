---
title: RKE2 CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6
---

### CIS 1.6 Kubernetes Benchmark - Rancher 2.6 RKE2 与 Kubernetes 1.21 到 1.23

[点击此处下载本文档的 PDF 版本](https://releases.rancher.com/documents/security/2.6/Rancher_RKE2_v2-6_CIS_v1-6_Benchmark_Assessment.pdf)。

#### 概述

本文档是 [Rancher 2.6 RKE2 安全强化指南](rke2-hardening-guide-with-cis-v1.6-benchmark.md)的配套文件。强化指南（Hardening Guide）为通过 RKE2 配置集群的 Rancher 强化生产安装提供了说明，本 Benchmark 指南旨在帮助你根据 Benchmark 来评估强化集群的安全级别。

本指南对应以下强化指南、Rancher、CIS Benchmark 和 Kubernetes 版本：

| 强化指南版本 | Rancher 版本 | CIS Benchmark 版本 | Kubernetes 版本 |
| ----------------------- | --------------- | --------------------- | ------------------- |
| 强化指南 CIS v1.6 Benchmark | Rancher v2.6.5+ | CIS v1.6 | Kubernetes v1.21 到 v1.23 |

由于 Rancher 和 RKE2 将 Kubernetes 服务安装为容器，因此 CIS Kubernetes Benchmark 中的许多管控验证检查都不适用，且结果会是 `Not Applicable`。本指南将介绍各种管控，并提供更新的示例命令来审核 Rancher 创建的集群的合规性。

本文档供 Rancher 开发、安全团队、审计员和决策者使用。

有关各个审核的更多详细信息，包括失败测试的理由和修正措施，你可以参考 CIS Kubernetes Benchmark v1.6 的对应内容。创建免费帐户后，你可以在 [Center for Internet Security (CIS)](https://www.cisecurity.org/benchmark/kubernetes/) 下载 Benchmark。

#### 测试管控方法

RKE2 将 controlplane 组件作为由 kubelet 管理的静态 pod 启动，并使用 containerd 作为容器运行时。配置是通过初始化时传递给容器的参数或配置文件定义的。

如果管控审计与原始 CIS Benchmark 出现差异，针对 Rancher 提供的的审计命令可用于进行测试。执行测试时，你需要访问所有 RKE2 节点主机上的命令行。这些命令还使用了测试和评估测试结果所需的 [kubectl](https://kubernetes.io/docs/tasks/tools/)（带有有效的配置文件）和 [jq](https://stedolan.github.io/jq/) 工具。

:::note

本指南仅介绍 `automated` 测试（以前称为 `scored`）。

:::

### 管控

---
## 1.1Master 节点配置文件
### 1.1.1确保 API Server pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml

**审计**：

```bash
stat -c %a /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml
```

**预期结果**：

```console
'permissions' is not present
```

**返回值**：

```console
644
```

### 1.1.2确保 API Server pod 规范文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml; then stat -c %U:%G /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml; fi'
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.3确保 Controller Manager pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml; then stat -c %a /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml; fi'
```

**预期结果**：

```console
'644' is equal to '644'
```

**返回值**：

```console
644
```

### 1.1.4确保 Controller Manager pod 规范文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml; then stat -c %U:%G /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml; fi'
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.5确保 Scheduler pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml; then stat -c %a /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml; fi'
```

**预期结果**：

```console
'permissions' is not present
```

**返回值**：

```console
644
```

### 1.1.6确保 Scheduler pod 规范文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml; then stat -c %U:%G /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml; fi'
```

**预期结果**：

```console
'root:root' is present
```

**返回值**：

```console
root:root
```

### 1.1.7确保 etcd pod 规范文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml; then stat -c %a /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml; fi'
```

**预期结果**：

```console
'644' is equal to '644'
```

**返回值**：

```console
644
```

### 1.1.8确保 etcd pod 规范文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml; then stat -c %U:%G /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml; fi'
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.9确保容器网络接口文件权限设置为 644 或更严格的设置（手动）


**结果**：warn

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 <path/to/cni/files>

**审计**：

```bash
stat -c %a <path/to/cni/files>
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
stat -c %a /var/lib/rancher/rke2/server/db/etcd
```

**预期结果**：

```console
'permissions' is not present
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

**审计**：

```bash
stat -c %U:%G /var/lib/rancher/rke2/server/db/etcd
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


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /etc/kubernetes/admin.conf

**审计**：

```bash
stat -c %a /var/lib/rancher/rke2/server/cred/admin.kubeconfig
```

**预期结果**：

```console
'permissions' is not present
```

**返回值**：

```console
644
```

### 1.1.14确保 admin.conf 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /etc/kubernetes/admin.conf

**审计**：

```bash
stat -c %U:%G /var/lib/rancher/rke2/server/cred/admin.kubeconfig
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.15确保 scheduler.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 scheduler

**审计**：

```bash
stat -c %a /var/lib/rancher/rke2/server/cred/scheduler.kubeconfig
```

**预期结果**：

```console
'permissions' is not present
```

**返回值**：

```console
644
```

### 1.1.16确保 scheduler.conf 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root scheduler

**审计**：

```bash
stat -c %U:%G /var/lib/rancher/rke2/server/cred/scheduler.kubeconfig
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.17确保 controller-manager.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 controllermanager

**审计**：

```bash
stat -c %a /var/lib/rancher/rke2/server/cred/controller.kubeconfig
```

**预期结果**：

```console
'permissions' is not present
```

**返回值**：

```console
644
```

### 1.1.18确保将 controller-manager.conf 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root controllermanager

**审计**：

```bash
stat -c %U:%G /var/lib/rancher/rke2/server/cred/controller.kubeconfig
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.19确保 Kubernetes PKI 目录和文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chown -R root:root /etc/kubernetes/pki/

**审计**：

```bash
stat -c %U:%G /var/lib/rancher/rke2/server/tls
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 1.1.20确保将 Kubernetes PKI 证书文件权限设置为 644 或更严格的设置（手动）


**结果**：warn

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod -R 644 /var/lib/rancher/rke2/server/tls/*.crt

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
./check_files_permissions.sh /var/lib/rancher/rke2/server/tls/*.crt
```

### 1.1.21确保 Kubernetes PKI 密钥文件权限设置为 600（手动）


**结果**：pass

**修正措施**：
在 Master 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod -R 600 /etc/kubernetes/pki/*.key

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
./check_files_permissions.sh /var/lib/rancher/rke2/server/tls/*.key
```

**预期结果**：

```console
'permissions' is not present
```

**返回值**：

```console
true
```

## 1.2API Server
### 1.2.1确保 --anonymous-auth 参数设置为 false（手动）


**结果**：warn

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并设置以下参数。
--anonymous-auth=false

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.2确保未设置 --basic-auth-file 参数（自动）


**结果**：pass

**修正措施**：
遵循文档并配置身份验证的替代机制。然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并移除 `--basic-auth-file=<filename>` 参数。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.3确保未设置 --token-auth-file 参数（自动）


**结果**：pass

**修正措施**：
遵循文档并配置身份验证的替代机制。然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并移除 `--token-auth-file=<filename>` 参数。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.4确保 --kubelet-https 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并移除 `--kubelet-https` 参数。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.5确保正确设置了 --kubelet-client-certificate 和 --kubelet-client-key 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 kubelets 的 TLS 连接。然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置以下 kubelet 客户端证书和密钥参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.6确保根据需要设置 --kubelet-certificate-authority 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 kubelets 的 TLS 连接。然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--kubelet-certificate-authority` 参数设置为 CA 证书文件的路径。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.7确保 --authorization-mode 参数未设置为 AlwaysAllow（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--authorization-mode` 参数设置为 `AlwaysAllow` 以外的值。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.8确保 --authorization-mode 参数包括 Node（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--authorization-mode` 参数设置为包含 `Node` 的值。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.9确保 --authorization-mode 参数包括 RBAC（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--authorization-mode` 参数设置为包含 `RBAC` 的值。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.10确保设置了准入控制插件 EventRateLimit（手动）


**结果**：warn

**修正措施**：
遵循 Kubernetes 文档并在配置文件中设置所需的限制。
然后，编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置以下参数。
--enable-admission-plugins=...,EventRateLimit,...
--admission-control-config-file=<path/to/configuration/file>

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.11确保未设置准入控制插件 AlwaysAdmit（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并删除 `--enable-admission-plugins` 参数，或将其设置为不包含 `AlwaysAdmit` 的值。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NodeRestriction,PodSecurityPolicy' not have 'AlwaysAdmit' OR '--enable-admission-plugins' is not present
```

**返回值**：

```console
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.12确保设置了准入控制插件 AlwaysPullImages（手动）


**结果**：warn

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包含 `AlwaysPullImages`。
--enable-admission-plugins=...,AlwaysPullImages,...

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.13如果没有使用 PodSecurityPolicy，请确保设置了准入控制插件 SecurityContextDeny（手动）


**结果**：warn

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包括 `SecurityContextDeny`，除非已设置了 PodSecurityPolicy。
--enable-admission-plugins=...,SecurityContextDeny,...

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.14确保设置了准入控制插件 ServiceAccount（自动）


**结果**：pass

**修正措施**：
遵循文档并根据你的环境创建 ServiceAccount 对象。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并确保 `--disable-admission-plugins` 参数设置为不包含 ServiceAccount 的值。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.15确保设置了准入控制插件 NamespaceLifecycle（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置 `--disable-admission-plugins` 参数，确保它不包含 NamespaceLifecycle。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.16确保设置了准入控制插件 PodSecurityPolicy（自动）


**结果**：pass

**修正措施**：
遵循文档并根据你的环境创建 Pod 安全策略对象。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包含 PodSecurityPolicy 的值：
--enable-admission-plugins=...,PodSecurityPolicy,...
然后重新启动 API Server。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NodeRestriction,PodSecurityPolicy' has 'PodSecurityPolicy'
```

**返回值**：

```console
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.17确保设置了准入控制插件 NodeRestriction（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档，在 kubelets 上配置 NodeRestriction 插件。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--enable-admission-plugins` 参数设置为包含 NodeRestriction 的值。
--enable-admission-plugins=...,NodeRestriction,...

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'NodeRestriction,PodSecurityPolicy' has 'NodeRestriction'
```

**返回值**：

```console
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.18确保未设置 --insecure-bind-address 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并移除 `--insecure-bind-address` 参数。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.19确保 --insecure-port 参数设置为 0（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并设置以下参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.20确保 --secure-port 参数未设置为 0（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并删除 `--secure-port` 参数或将其设置为另一个所需端口（非零）。

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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.21确保 --profiling 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并设置以下参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.22确保设置了 --audit-log-path 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--audit-log-path` 参数设置为所需的路径以及要写入审计日志的文件。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.23确保将 --audit-log-maxage 参数设置为 30 或适当的数值（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--audit-log-maxage` 参数设置为 30 或适当的天数：
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.24确保 --audit-log-maxbackup 参数设置为 10 或适当的数值（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--audit-log-maxbackup` 参数设置为 10 或适当的数值。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.25确保 --audit-log-maxsize 参数设置为 100 或适当的数值（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--audit-log-maxsize` 参数设置为适当的大小（以 MB 为单位）。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.26确保能根据需要设置 --request-timeout 参数（自动）


**结果**：pass

**修正措施**：
编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并根据需要设置以下参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.27确保 --service-account-lookup 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml 并设置以下参数。
--service-account-lookup=true

你也可以删除此文件的 --service-account-lookup 参数，从而使默认设置生效。

**审计**：

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**预期结果**：

```console
'--service-account-lookup' is not present OR '--service-account-lookup' is not present
```

**返回值**：

```console
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.28确保根据需要设置 --service-account-key-file 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并为 ServiceAccount 将 `--service-account-key-file` 参数设置为公钥文件：
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.29确保根据需要设置 --etcd-certfile 和 --etcd-keyfile 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 etcd 的 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置 etcd 证书和密钥文件参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.30确保根据需要设置 --tls-cert-file 和 --tls-private-key-file 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档并在 apiserver 上设置 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置 TLS 证书和私钥文件参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.31确保根据需要设置 --client-ca-file 参数（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档并在 apiserver 上设置 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置客户端 CA 文件。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.32确保 --etcd-cafile 参数设置正确（自动）


**结果**：pass

**修正措施**：
遵循 Kubernetes 文档设置 apiserver 和 etcd 的 TLS 连接。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并设置 etcd CA 文件参数。
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.33确保根据需要设置 --encryption-provider-config 参数（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档并配置 EncryptionConfig 文件。
然后，在 Master 节点上编辑 API Server pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-apiserver.yaml，并将 `--encryption-provider-config` 参数设置为该文件的路径：
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
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.2.34确保正确配置加密提供程序（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档并配置 EncryptionConfig 文件。
在此文件中，选择 aescbc、kms 或 secretbox 作为加密提供程序。

**审计**：

```bash
/bin/sh -c 'if grep aescbc /var/lib/rancher/rke2/server/cred/encryption-config.json; then echo 0; fi'
```

**预期结果**：

```console
'0' is present
```

**返回值**：

```console
{"kind":"EncryptionConfiguration","apiVersion":"apiserver.config.k8s.io/v1","resources":[{"resources":["secrets"],"providers":[{"aescbc":{"keys":[{"name":"aescbckey","secret":"ZP3yNnlCjzcKMBXfmNBmpGbiY+oXne+WP6EM42lZIbE="}]}},{"identity":{}}]}]} 0
```

### 1.2.35确保 API Server 仅使用强密码（手动）


**结果**：pass

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

**预期结果**：

```console
'--tls-cipher-suites' is not present
```

**返回值**：

```console
root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

## 1.3Controller Manager
### 1.3.1确保正确设置 --terminated-pod-gc-threshold 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml，并将 `--terminated-pod-gc-threshold` 设置为适当的阈值。
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
root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.3.2确保 --profiling 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml，并设置以下参数。
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
root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.3.3确保 --use-service-account-credentials 参数设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml 以设置以下参数。
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
root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.3.4确保根据需要设置 --service-account-private-key-file 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml，并为 ServiceAccount 将 `--service-account-private-key-file` 参数设置为私钥文件。
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
root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.3.5确保根据需要设置 --root-ca-file 参数（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml，并将 `--root-ca-file` 参数设置为证书绑定文件。
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
root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

### 1.3.6确保 RotateKubeletServerCertificate 参数设置为 true（自动）


**结果**：Not Applicable

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml，并将 `--feature-gates` 参数设置为包含 `RotateKubeletServerCertificate=true`。
--feature-gates=RotateKubeletServerCertificate=true

### 1.3.7确保 --bind-address 参数设置为 127.0.0.1（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Controller Manager pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-controller-manager.yaml，并确保 `--bind-address` 参数的值正确。

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
root 5522 5416 3 14:58 ?00:00:16 kube-controller-manager --flex-volume-plugin-dir=/var/lib/kubelet/volumeplugins --terminated-pod-gc-threshold=1000 --permit-port-sharing=true --address=127.0.0.1 --allocate-node-cidrs=true --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-controller-manager --cluster-cidr=10.42.0.0/16 --cluster-signing-kube-apiserver-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kube-apiserver-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-client-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-kubelet-client-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --cluster-signing-kubelet-serving-cert-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --cluster-signing-kubelet-serving-key-file=/var/lib/rancher/rke2/server/tls/server-ca.key --cluster-signing-legacy-unknown-cert-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --cluster-signing-legacy-unknown-key-file=/var/lib/rancher/rke2/server/tls/client-ca.key --configure-cloud-routes=false --controllers=*,-service,-route,-cloud-node-lifecycle --kubeconfig=/var/lib/rancher/rke2/server/cred/controller.kubeconfig --port=10252 --profiling=false --root-ca-file=/var/lib/rancher/rke2/server/tls/server-ca.crt --secure-port=10257 --service-account-private-key-file=/var/lib/rancher/rke2/server/tls/service.key --use-service-account-credentials=true
```

## 1.4Scheduler
### 1.4.1确保 --profiling 参数设置为 false（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Scheduler pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml 文件，并设置以下参数。
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
root 5533 5414 0 14:58 ?00:00:02 kube-scheduler --permit-port-sharing=true --address=127.0.0.1 --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-scheduler --kubeconfig=/var/lib/rancher/rke2/server/cred/scheduler.kubeconfig --port=10251 --profiling=false --secure-port=10259
```

### 1.4.2确保 --bind-address 参数设置为 127.0.0.1（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 Scheduler pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/kube-scheduler.yaml，并确保 `--bind-address` 参数的值正确。

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
root 5533 5414 0 14:58 ?00:00:02 kube-scheduler --permit-port-sharing=true --address=127.0.0.1 --bind-address=127.0.0.1 --cert-dir=/var/lib/rancher/rke2/server/tls/kube-scheduler --kubeconfig=/var/lib/rancher/rke2/server/cred/scheduler.kubeconfig --port=10251 --profiling=false --secure-port=10259
```

## 2 Etcd Node Configuration Files
### 2.1确保根据需要设置 --cert-file 和 --key-file 参数（自动）


**结果**：Not Applicable

**修正措施**：
按照 etcd 服务文档配置 TLS 加密。
然后，在 Master 节点上编辑 etcd pod 规范文件 /etc/kubernetes/manifests/etcd.yaml，并设置以下参数。
`--cert-file=</path/to/ca-file>`
`--key-file=</path/to/key-file>`

### 2.2确保 --client-cert-auth 参数设置为 true（自动）


**结果**：Not Applicable

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml，并设置以下参数。
--client-cert-auth="true"

### 2.3确保 --auto-tls 参数未设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml，并删除 `--auto-tls` 参数或将其设置为 false。
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
etcd 5059 5033 0 14:58 ?00:00:00 /pause etcd 5121 5033 3 14:58 ?00:00:18 etcd --config-file=/var/lib/rancher/rke2/server/db/etcd/config root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 16473 16413 0 15:07 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke2-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.4确保根据需要设置 --peer-cert-file 和 --peer-key-file 参数（自动）


**结果**：Not Applicable

**修正措施**：
遵循 etcd 服务文档，根据需要为你的 etcd 集群配置对等 TLS 加密。
然后，在 Master 节点上编辑 etcd pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml，并设置以下参数。
`--peer-client-file=</path/to/peer-cert-file>`
`--peer-key-file=</path/to/peer-key-file>`

### 2.5确保 --peer-client-cert-auth 参数设置为 true（自动）


**结果**：Not Applicable

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml，并设置以下参数。
--peer-client-cert-auth=true

### 2.6确保 --peer-auto-tls 参数未设置为 true（自动）


**结果**：pass

**修正措施**：
在 Master 节点上编辑 etcd pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml，并删除 `--peer-auto-tls` 参数或将其设置为 false。
--peer-auto-tls=false

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--peer-auto-tls' is not present OR '--peer-auto-tls' is not present
```

**返回值**：

```console
etcd 5059 5033 0 14:58 ?00:00:00 /pause etcd 5121 5033 3 14:58 ?00:00:18 etcd --config-file=/var/lib/rancher/rke2/server/db/etcd/config root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 16473 16413 6 15:07 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke2-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
```

### 2.7确保 etcd 使用唯一的 CA（手动）


**结果**：pass

**修正措施**：
[手动测试]
遵循 etcd 文档，为 etcd 服务创建专用的 CA 设置。
然后，在 Master 节点上编辑 etcd pod 规范文件 /var/lib/rancher/rke2/agent/pod-manifests/etcd.yaml，并设置以下参数。
`--trusted-ca-file=</path/to/ca-file>`

**审计**：

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**预期结果**：

```console
'--trusted-ca-file' is not present
```

**返回值**：

```console
etcd 5059 5033 0 14:58 ?00:00:00 /pause etcd 5121 5033 3 14:58 ?00:00:18 etcd --config-file=/var/lib/rancher/rke2/server/db/etcd/config root 5275 5222 15 14:58 ?00:01:26 kube-apiserver --audit-policy-file=/etc/rancher/rke2/audit-policy.yaml --audit-log-path=/var/lib/rancher/rke2/server/logs/audit.log --audit-log-maxage=30 --audit-log-maxbackup=10 --audit-log-maxsize=100 --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --allow-privileged=true --anonymous-auth=false --api-audiences=https://kubernetes.default.svc.cluster.local,rke2 --authorization-mode=Node,RBAC --bind-address=0.0.0.0 --cert-dir=/var/lib/rancher/rke2/server/tls/temporary-certs --client-ca-file=/var/lib/rancher/rke2/server/tls/client-ca.crt --enable-admission-plugins=NodeRestriction,PodSecurityPolicy --encryption-provider-config=/var/lib/rancher/rke2/server/cred/encryption-config.json --etcd-cafile=/var/lib/rancher/rke2/server/tls/etcd/server-ca.crt --etcd-certfile=/var/lib/rancher/rke2/server/tls/etcd/client.crt --etcd-keyfile=/var/lib/rancher/rke2/server/tls/etcd/client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-certificate-authority=/var/lib/rancher/rke2/server/tls/server-ca.crt --kubelet-client-certificate=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.crt --kubelet-client-key=/var/lib/rancher/rke2/server/tls/client-kube-apiserver.key --profiling=false --proxy-client-cert-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.crt --proxy-client-key-file=/var/lib/rancher/rke2/server/tls/client-auth-proxy.key --requestheader-allowed-names=system:auth-proxy --requestheader-client-ca-file=/var/lib/rancher/rke2/server/tls/request-header-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-issuer=https://kubernetes.default.svc.cluster.local --service-account-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-account-signing-key-file=/var/lib/rancher/rke2/server/tls/service.key --service-cluster-ip-range=10.43.0.0/16 --service-node-port-range=30000-32767 --storage-backend=etcd3 --tls-cert-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.crt --tls-private-key-file=/var/lib/rancher/rke2/server/tls/serving-kube-apiserver.key root 16473 16413 3 15:07 ?00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=5 --config-dir=/etc/kube-bench/cfg --benchmark rke2-cis-1.6-hardened --json --log_dir /tmp/results/logs --outputfile /tmp/results/etcd.json
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
/bin/ps -ef | grep kube-apiserver | grep -v grep | grep -o audit-policy-file
```

**预期结果**：

```console
'audit-policy-file' is equal to 'audit-policy-file'
```

**返回值**：

```console
audit-policy-file
```

### 3.2.2确保审计策略涵盖关键安全问题（手动）


**结果**：warn

**修正措施**：
考虑修改集群上使用的审计策略，至少要包括这些项目。

## 4.1Worker 节点配置文件
### 4.1.1确保 kubelet 服务文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf

**审计**：

```bash
/bin/sh -c 'if test -e /etc/systemd/system/kubelet.service.d/10-kubeadm.conf; then stat -c permissions=%a /etc/systemd/system/kubelet.service.d/10-kubeadm.conf; fi'
```

**预期结果**：

```console
'permissions' is not present
```

### 4.1.2确保 kubelet 服务文件所有权设置为 root:root（自动）


**结果**：Not Applicable

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /etc/systemd/system/kubelet.service.d/10-kubeadm.conf

### 4.1.3如果代理 kubeconfig 文件存在，请确保权限具有 644 或更严格的设置（手动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /var/lib/rancher/rke2/agent/kubeproxy.kubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /node/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig; then stat -c %a /node/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig; fi'
```

**预期结果**：

```console
'permissions' is present OR '/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig' is not present
```

**返回值**：

```console
644
```

### 4.1.4确保代理 kubeconfig 文件所有权设置为 root:root（手动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /var/lib/rancher/rke2/agent/kubeproxy.kubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/kubeproxy.kubeconfig; then stat -c %U:%G /var/lib/rancher/rke2/agent/kubeproxy.kubeconfig; fi'
```

**预期结果**：

```console
'root:root' is not present OR '/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig' is not present
```

**返回值**：

```console
root:root
```

### 4.1.5确保 --kubeconfig kubelet.conf 文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chmod 644 /var/lib/rancher/rke2/agent/kubelet.kubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/kubelet.kubeconfig; then stat -c permissions=%a /var/lib/rancher/rke2/agent/kubelet.kubeconfig; fi'
```

**预期结果**：

```console
'644' is equal to '644'
```

**返回值**：

```console
permissions=644
```

### 4.1.6确保 --kubeconfig kubelet.conf 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上运行以下命令（基于系统上的文件位置）。
例如：chown root:root /var/lib/rancher/rke2/agent/kubelet.kubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/kubelet.kubeconfig; then stat -c %U:%G /var/lib/rancher/rke2/agent/kubelet.kubeconfig; fi'
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 4.1.7确保 CA 文件权限具有 644 或更严格的设置（手动）


**结果**：warn

**修正措施**：
运行以下命令修改 `--client-ca-file chmod 644 <filename>` 的文件权限。

**审计**：

```bash
stat -c %a /var/lib/rancher/rke2/server/tls/server-ca.crt
```

### 4.1.8确保客户端 CA 文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
运行以下命令来修改 `--client-ca-file` 的所有权。
`chown root:roset: trueot <filename>`

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/client-ca.crt; then stat -c %U:%G /var/lib/rancher/rke2/agent/client-ca.crt; fi'
```

**预期结果**：

```console
'root:root' is equal to 'root:root'
```

**返回值**：

```console
root:root
```

### 4.1.9确保 kubelet --config 配置文件权限具有 644 或更严格的设置（自动）


**结果**：pass

**修正措施**：
运行以下命令（使用审计步骤中确定的配置文件位置）：
chmod 644 /var/lib/rancher/rke2/agent/kubelet.kubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/kubelet.kubeconfig; then stat -c permissions=%a /var/lib/rancher/rke2/agent/kubelet.kubeconfig; fi'
```

**预期结果**：

```console
'644' is equal to '644'
```

**返回值**：

```console
permissions=644
```

### 4.1.10确保 kubelet --config 配置文件所有权设置为 root:root（自动）


**结果**：pass

**修正措施**：
运行以下命令（使用审计步骤中确定的配置文件位置）：
chown root:root /var/lib/rancher/rke2/agent/kubelet.kubeconfig

**审计**：

```bash
/bin/sh -c 'if test -e /var/lib/rancher/rke2/agent/kubelet.kubeconfig; then stat -c %U:%G /var/lib/rancher/rke2/agent/kubelet.kubeconfig; fi'
```

**预期结果**：

```console
'root:root' is present
```

**返回值**：

```console
root:root
```

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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'false' is equal to 'false'
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'' is not present
```

**返回值**：

```console
apiVersion: v1 clusters: - cluster: server: https://127.0.0.1:6443 certificate-authority: /var/lib/rancher/rke2/agent/server-ca.crt name: local contexts: - context: cluster: local namespace: default user: user name: Default current-context: Default kind: Config preferences: {} users: - name: user user: client-certificate: /var/lib/rancher/rke2/agent/client-kubelet.crt client-key: /var/lib/rancher/rke2/agent/client-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'' is not present
```

**返回值**：

```console
apiVersion: v1 clusters: - cluster: server: https://127.0.0.1:6443 certificate-authority: /var/lib/rancher/rke2/agent/server-ca.crt name: local contexts: - context: cluster: local namespace: default user: user name: Default current-context: Default kind: Config preferences: {} users: - name: user user: client-certificate: /var/lib/rancher/rke2/agent/client-kubelet.crt client-key: /var/lib/rancher/rke2/agent/client-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'0' is equal to '0' AND '--read-only-port' is present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'--streaming-connection-idle-timeout' is not present OR '--streaming-connection-idle-timeout' is present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'' is not present
```

**返回值**：

```console
apiVersion: v1 clusters: - cluster: server: https://127.0.0.1:6443 certificate-authority: /var/lib/rancher/rke2/agent/server-ca.crt name: local contexts: - context: cluster: local namespace: default user: user name: Default current-context: Default kind: Config preferences: {} users: - name: user user: client-certificate: /var/lib/rancher/rke2/agent/client-kubelet.crt client-key: /var/lib/rancher/rke2/agent/client-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'--make-iptables-util-chains' is not present OR '--make-iptables-util-chains' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
```

### 4.2.8确保未设置 --hostname-override 参数（手动）


**结果**：warn

**修正措施**：
在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并删除 `KUBELET_SYSTEM_PODS_ARGS` 变量中的 `--hostname-override` 参数。
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

### 4.2.9确保 --event-qps 参数设置为 0 或能适当抓取事件的级别（手动）


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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'--event-qps' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'--tls-cert-file' is present AND '--tls-private-key-file' is present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
```

### 4.2.11确保 --rotate-certificates 参数未设置为 false（手动）


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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'--rotate-certificates' is not present OR '--rotate-certificates' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
```

### 4.2.12验证 RotateKubeletServerCertificate 参数是否设置为 true（手动）


**结果**：pass

**修正措施**：
在每个 Worker 节点上编辑 kubelet 服务文件 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf，并在 `KUBELET_CERTIFICATE_ARGS` 变量中设置以下参数。
--feature-gates=RotateKubeletServerCertificate=true
根据你的系统，重新启动 kubelet 服务。例如：
systemctl daemon-reload
systemctl restart kubelet.service

**审计**：

```bash
/bin/ps -fC kubelet
```

**审计配置**：

```bash
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'RotateKubeletServerCertificate' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
```

### 4.2.13确保 Kubelet 仅使用强密码（手动）


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
/bin/cat /var/lib/rancher/rke2/agent/kubelet.kubeconfig
```

**预期结果**：

```console
'--tls-cipher-suites' is not present
```

**返回值**：

```console
UID PID PPID C STIME TTY TIME CMD root 4785 4751 3 14:58 ?00:00:21 kubelet --volume-plugin-dir=/var/lib/kubelet/volumeplugins --file-check-frequency=5s --sync-frequency=30s --address=0.0.0.0 --alsologtostderr=false --anonymous-auth=false --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --client-ca-file=/var/lib/rancher/rke2/agent/client-ca.crt --cloud-provider=external --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --container-runtime-endpoint=unix:///run/k3s/containerd/containerd.sock --container-runtime=remote --containerd=/run/k3s/containerd/containerd.sock --eviction-hard=imagefs.available<5%,nodefs.available<5% --eviction-minimum-reclaim=imagefs.available=10%,nodefs.available=10% --fail-swap-on=false --healthz-bind-address=127.0.0.1 --hostname-override=<node_ip> --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig --log-file-max-size=50 --log-file=/var/lib/rancher/rke2/agent/logs/kubelet.log --logtostderr=false --node-labels=cattle.io/os=linux,rke.cattle.io/machine=7c32844c-359f-45f7-88c5-a7173d27690a --pod-manifest-path=/var/lib/rancher/rke2/agent/pod-manifests --protect-kernel-defaults=true --read-only-port=0 --resolv-conf=/run/systemd/resolve/resolv.conf --serialize-image-pulls=false --stderrthreshold=FATAL --tls-cert-file=/var/lib/rancher/rke2/agent/serving-kubelet.crt --tls-private-key-file=/var/lib/rancher/rke2/agent/serving-kubelet.key
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
### 5.2.1最小化特权容器的准入（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.privileged` 字段被省略或设置为 false。

**审计**：

```bash
kubectl get psp global-restricted-psp -o json | jq -r '.spec.runAsUser.rule'
```

**预期结果**：

```console
'MustRunAsNonRoot' is equal to 'MustRunAsNonRoot'
```

**返回值**：

```console
MustRunAsNonRoot
```

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

### 5.2.6最小化根容器的准入（自动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.runAsUser.rule` 设置为 `MustRunAsNonRoot` 或 `MustRunAs`，范围为不包括 0 的 UID。

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

### 5.2.7使用 NET_RAW 功能最大限度地减少容器的准入（手动）


**结果**：pass

**修正措施**：
按照 Kubernetes 文档中的说明创建 PSP，确保 `.spec.requiredDropCapabilities` 包括 `NET_RAW` 或 `ALL`。

**审计**：

```bash
kubectl get psp global-restricted-psp -o json | jq -r .spec.requiredDropCapabilities[]
```

**预期结果**：

```console
'ALL' is equal to 'ALL'
```

**返回值**：

```console
ALL
```

### 5.2.8使用添加的功能最大限度地减少容器的准入（手动）


**结果**：warn

**修正措施**：
确保集群的 PSP 中不存在 `allowedCapabilities`，除非它被设置为一个空数组。

### 5.2.9使用分配的功能最大限度地减少容器的准入（手动）


**结果**：warn

**修正措施**：
查看集群上运行的应用程序中功能的使用情况。如果一个命名空间包含不需要任何 Linux 功能的应用，你可以考虑添加一个 PSP，禁止不丢弃所有功能的容器的准入。

## 5.3网络策略和 ​​CNI
### 5.3.1确保使用的 CNI 支持网络策略（自动）


**结果**：pass

**修正措施**：
如果使用的 CNI 插件不支持网络策略，则应考虑使用不同的插件，或在 Kubernetes 集群中寻找替代机制来限制流量。

**审计**：

```bash
kubectl get pods -n kube-system -l k8s-app=canal -o json | jq .items[] | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
```

**预期结果**：

```console
1 is greater than 0
```

**返回值**：

```console
--count=1
```

### 5.3.2确保所有命名空间都定义了网络策略（自动）


**结果**：pass

**修正措施**：
遵循文档并根据需要创建 NetworkPolicy 对象。

**Audit Script:** `check_for_rke2_network_policies.sh`

```bash
#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

for namespace in kube-system kube-public default; do
  policy_count=$(/var/lib/rancher/rke2/bin/kubectl get networkpolicy -n ${namespace} -o json | jq -r '.items | length')
  if [ ${policy_count} -eq 0 ]; then
    echo "false"
    exit
  fi
done

echo "true"

```

**审计执行**：

```bash
./check_for_rke2_network_policies.sh
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

## 5.6v1.5.1 指南跳过 5.6 并从 5.5 转到 5.7。我们将它包含在这里只是为了进行解释。
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

### 5.7.3将安全上下文应用到你的 Pod 和容器（自动）


**结果**：warn

**修正措施**：
遵循 Kubernetes 文档，将安全上下文应用到你的 pod。关于安全上下文的建议清单，你可以参考 CIS 的 Docker 容器安全 Benchmark。

### 5.7.4确保不使用 Default 命名空间（手动）


**结果**：warn

**修正措施**：
确保创建命名空间以允许对 Kubernetes 进行适当的隔离资源，并且所有新资源都创建在特定的命名空间中。

