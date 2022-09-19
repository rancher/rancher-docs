---
title: RKE CIS v1.23 Benchmark - Self-Assessment Guide - Rancher v2.6
weight: 101
---

### RKE CIS v1.23 Kubernetes Benchmark - Rancher v2.6 with Kubernetes v1.22 to v1.24

[Click here to download a PDF version of this document](https://releases.rancher.com/documents/security/2.6/Rancher_v2-6_CIS_v1-23_Benchmark_Assessment.pdf).

#### Overview

This document is a companion to the [Rancher v2.6 RKE security hardening guide]({{<baseurl>}}/rancher/v2.6/en/security/hardening-guides/rke-1.23-hardening-2.6/). The hardening guide provides prescriptive guidance for hardening a production installation of Rancher, and this benchmark guide is meant to help you evaluate the level of security of the hardened cluster against each control in the benchmark.

This guide corresponds to specific versions of the hardening guide, Rancher, CIS Benchmark and Kubernetes:

| Hardening Guide Version | Rancher Version | CIS Benchmark Version |  Kubernetes Version |
| ----------------------- | --------------- | --------------------- | ------------------- |
| Hardening Guide CIS v1.23 Benchmark | Rancher v2.6 | CIS v1.23 | Kubernetes v1.22 up to v1.24 |

Because Rancher and RKE install Kubernetes services as Docker containers, many of the control verification checks in the CIS Kubernetes Benchmark do not apply and will have a result of \`Not Applicable\`. This guide will walk through the various controls and provide updated example commands to audit compliance in Rancher created clusters.

This document is to be used by Rancher operators, security teams, auditors and decision makers.

For more detail about each audit, including rationales and remediations for failing tests, you can refer to the corresponding section of the CIS Kubernetes Benchmark v1.23. You can download the benchmark, after creating a free account, in [Center for Internet Security (CIS)](https://www.cisecurity.org/benchmark/kubernetes/).

#### Testing controls methodology

Rancher and RKE install Kubernetes services via Docker containers. Configuration is defined by arguments passed to the container at the time of initialization, not via configuration files.

Where control audits differ from the original CIS benchmark, the audit commands specific to Rancher are provided for testing. When performing the tests, you will need access to the command line on the hosts of all RKE nodes. The commands also make use of the [kubectl](https://kubernetes.io/docs/tasks/tools/) (with a valid configuration file) and [jq](https://stedolan.github.io/jq/) tools, which are required in the testing and evaluation of test results.

> NOTE: Only `automated` tests (previously called `scored`) are covered in this guide.

### Controls

---
## 1.1 Control Plane Node Configuration Files
### 1.1.1 Ensure that the API server pod specification file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the
control plane node.
For example, chmod 644 /etc/kubernetes/manifests/kube-apiserver.yaml

### 1.1.2 Ensure that the API server pod specification file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chown root:root /etc/kubernetes/manifests/kube-apiserver.yaml

### 1.1.3 Ensure that the controller manager pod specification file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chmod 644 /etc/kubernetes/manifests/kube-controller-manager.yaml

### 1.1.4 Ensure that the controller manager pod specification file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chown root:root /etc/kubernetes/manifests/kube-controller-manager.yaml

### 1.1.5 Ensure that the scheduler pod specification file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chmod 644 /etc/kubernetes/manifests/kube-scheduler.yaml

### 1.1.6 Ensure that the scheduler pod specification file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chown root:root /etc/kubernetes/manifests/kube-scheduler.yaml

### 1.1.7 Ensure that the etcd pod specification file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chmod 644 /etc/kubernetes/manifests/etcd.yaml

### 1.1.8 Ensure that the etcd pod specification file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chown root:root /etc/kubernetes/manifests/etcd.yaml

### 1.1.9 Ensure that the Container Network Interface file permissions are set to 644 or more restrictive (Manual)


**Result:** warn

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chmod 644 <path/to/cni/files>

**Audit:**

```bash
ps -ef | grep $kubeletbin | grep -- --cni-conf-dir | sed 's%.*cni-conf-dir[= ]\([^ ]*\).*%\1%' | xargs -I{} find {} -mindepth 1 | xargs --no-run-if-empty stat -c permissions=%a find /var/lib/cni/networks -type f 2> /dev/null | xargs --no-run-if-empty stat -c permissions=%a
```

**Expected Result**:

```console
'permissions' is present
```

**Returned Value**:

```console
Usage: grep [OPTION]... PATTERN [FILE]... Try 'grep --help' for more information.
```

### 1.1.10 Ensure that the Container Network Interface file ownership is set to root:root (Manual)


**Result:** warn

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chown root:root <path/to/cni/files>

**Audit:**

```bash
ps -ef | grep $kubeletbin | grep -- --cni-conf-dir | sed 's%.*cni-conf-dir[= ]\([^ ]*\).*%\1%' | xargs -I{} find {} -mindepth 1 | xargs --no-run-if-empty stat -c %U:%G find /var/lib/cni/networks -type f 2> /dev/null | xargs --no-run-if-empty stat -c %U:%G
```

**Expected Result**:

```console
'root:root' is present
```

**Returned Value**:

```console
Usage: grep [OPTION]... PATTERN [FILE]... Try 'grep --help' for more information.
```

### 1.1.11 Ensure that the etcd data directory permissions are set to 700 or more restrictive (Automated)


**Result:** pass

**Remediation:**
On the etcd server node, get the etcd data directory, passed as an argument --data-dir,
from the command 'ps -ef | grep etcd'.
Run the below command (based on the etcd data directory found above). For example,
chmod 700 /var/lib/etcd

**Audit:**

```bash
stat -c %a /node/var/lib/etcd
```

**Expected Result**:

```console
'700' is equal to '700'
```

**Returned Value**:

```console
700
```

### 1.1.12 Ensure that the etcd data directory ownership is set to etcd:etcd (Automated)


**Result:** Not Applicable

**Remediation:**
On the etcd server node, get the etcd data directory, passed as an argument --data-dir,
from the command 'ps -ef | grep etcd'.
Run the below command (based on the etcd data directory found above).
For example, chown etcd:etcd /var/lib/etcd

### 1.1.13 Ensure that the admin.conf file permissions are set to 600 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chmod 600 /etc/kubernetes/admin.conf

### 1.1.14 Ensure that the admin.conf file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example, chown root:root /etc/kubernetes/admin.conf

### 1.1.15 Ensure that the scheduler.conf file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chmod 644 scheduler

### 1.1.16 Ensure that the scheduler.conf file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chown root:root scheduler

### 1.1.17 Ensure that the controller-manager.conf file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chmod 644 controllermanager

### 1.1.18 Ensure that the controller-manager.conf file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chown root:root controllermanager

### 1.1.19 Ensure that the Kubernetes PKI directory and file ownership is set to root:root (Automated)


**Result:** pass

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chown -R root:root /etc/kubernetes/pki/

**Audit Script:** `check_files_owner_in_dir.sh`

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

**Audit Execution:**

```bash
./check_files_owner_in_dir.sh /node/etc/kubernetes/ssl
```

**Expected Result**:

```console
'true' is equal to 'true'
```

**Returned Value**:

```console
true
```

### 1.1.20 Ensure that the Kubernetes PKI certificate file permissions are set to 644 or more restrictive (Manual)


**Result:** warn

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chmod -R 644 /etc/kubernetes/pki/*.crt

**Audit:**

```bash
find /etc/kubernetes/pki/ -name '*.crt' | xargs stat -c permissions=%a
```

### 1.1.21 Ensure that the Kubernetes PKI key file permissions are set to 600 (Manual)


**Result:** warn

**Remediation:**
Run the below command (based on the file location on your system) on the control plane node.
For example,
chmod -R 600 /etc/kubernetes/pki/*.key

**Audit:**

```bash
find /etc/kubernetes/pki/ -name '*.key' | xargs stat -c permissions=%a
```

## 1.2 API Server
### 1.2.1 Ensure that the --anonymous-auth argument is set to false (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--anonymous-auth=false

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--anonymous-auth' is equal to 'false'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.2 Ensure that the --token-auth-file parameter is not set (Automated)


**Result:** pass

**Remediation:**
Follow the documentation and configure alternate mechanisms for authentication. Then,
edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and remove the --token-auth-file=<filename> parameter.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--token-auth-file' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.3 Ensure that the --DenyServiceExternalIPs is not set (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and remove the `DenyServiceExternalIPs`
from enabled admission plugins.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--enable-admission-plugins' does not have 'DenyServiceExternalIPs' OR '--enable-admission-plugins' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.4 Ensure that the --kubelet-https argument is set to true (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and remove the --kubelet-https parameter.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--kubelet-https' is present OR '--kubelet-https' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.5 Ensure that the --kubelet-client-certificate and --kubelet-client-key arguments are set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the Kubernetes documentation and set up the TLS connection between the
apiserver and kubelets. Then, edit API server pod specification file
/etc/kubernetes/manifests/kube-apiserver.yaml on the control plane node and set the
kubelet client certificate and key parameters as below.
--kubelet-client-certificate=<path/to/client-certificate-file>
--kubelet-client-key=<path/to/client-key-file>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--kubelet-client-certificate' is present AND '--kubelet-client-key' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.6 Ensure that the --kubelet-certificate-authority argument is set as appropriate (Automated)


**Result:** Not Applicable

**Remediation:**
Follow the Kubernetes documentation and setup the TLS connection between
the apiserver and kubelets. Then, edit the API server pod specification file
/etc/kubernetes/manifests/kube-apiserver.yaml on the control plane node and set the
--kubelet-certificate-authority parameter to the path to the cert file for the certificate authority.
--kubelet-certificate-authority=<ca-string>
When generating serving certificates, functionality could break in conjunction with hostname overrides which are required for certain cloud providers.

### 1.2.7 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --authorization-mode parameter to values other than AlwaysAllow.
One such example could be as below.
--authorization-mode=RBAC

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--authorization-mode' does not have 'AlwaysAllow'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.8 Ensure that the --authorization-mode argument includes Node (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --authorization-mode parameter to a value that includes Node.
--authorization-mode=Node,RBAC

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--authorization-mode' has 'Node'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.9 Ensure that the --authorization-mode argument includes RBAC (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --authorization-mode parameter to a value that includes RBAC,
for example `--authorization-mode=Node,RBAC`.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--authorization-mode' has 'RBAC'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.10 Ensure that the admission control plugin EventRateLimit is set (Manual)


**Result:** warn

**Remediation:**
Follow the Kubernetes documentation and set the desired limits in a configuration file.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
and set the below parameters.
--enable-admission-plugins=...,EventRateLimit,...
--admission-control-config-file=<path/to/configuration/file>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--enable-admission-plugins' has 'EventRateLimit'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.11 Ensure that the admission control plugin AlwaysAdmit is not set (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and either remove the --enable-admission-plugins parameter, or set it to a
value that does not include AlwaysAdmit.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--enable-admission-plugins' does not have 'AlwaysAdmit' OR '--enable-admission-plugins' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.12 Ensure that the admission control plugin AlwaysPullImages is set (Manual)


**Result:** warn

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --enable-admission-plugins parameter to include
AlwaysPullImages.
--enable-admission-plugins=...,AlwaysPullImages,...

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.13 Ensure that the admission control plugin SecurityContextDeny is set if PodSecurityPolicy is not used (Manual)


**Result:** warn

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --enable-admission-plugins parameter to include
SecurityContextDeny, unless PodSecurityPolicy is already in place.
--enable-admission-plugins=...,SecurityContextDeny,...

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.14 Ensure that the admission control plugin ServiceAccount is set (Automated)


**Result:** pass

**Remediation:**
Follow the documentation and create ServiceAccount objects as per your environment.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and ensure that the --disable-admission-plugins parameter is set to a
value that does not include ServiceAccount.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--disable-admission-plugins' is present OR '--disable-admission-plugins' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.15 Ensure that the admission control plugin NamespaceLifecycle is set (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --disable-admission-plugins parameter to
ensure it does not include NamespaceLifecycle.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--disable-admission-plugins' is present OR '--disable-admission-plugins' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.16 Ensure that the admission control plugin NodeRestriction is set (Automated)


**Result:** pass

**Remediation:**
Follow the Kubernetes documentation and configure NodeRestriction plug-in on kubelets.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --enable-admission-plugins parameter to a
value that includes NodeRestriction.
--enable-admission-plugins=...,NodeRestriction,...

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--enable-admission-plugins' has 'NodeRestriction'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.17 Ensure that the --secure-port argument is not set to 0 (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and either remove the --secure-port parameter or
set it to a different (non-zero) desired port.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--secure-port' is greater than 0 OR '--secure-port' is not present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.18 Ensure that the --profiling argument is set to false (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--profiling=false

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--profiling' is equal to 'false'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.19 Ensure that the --audit-log-path argument is set (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-path parameter to a suitable path and
file where you would like audit logs to be written, for example,
--audit-log-path=/var/log/apiserver/audit.log

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--audit-log-path' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.20 Ensure that the --audit-log-maxage argument is set to 30 or as appropriate (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-maxage parameter to 30
or as an appropriate number of days, for example,
--audit-log-maxage=30

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--audit-log-maxage' is greater or equal to 30
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.21 Ensure that the --audit-log-maxbackup argument is set to 10 or as appropriate (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-maxbackup parameter to 10 or to an appropriate
value. For example,
--audit-log-maxbackup=10

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--audit-log-maxbackup' is greater or equal to 10
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.22 Ensure that the --audit-log-maxsize argument is set to 100 or as appropriate (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-maxsize parameter to an appropriate size in MB.
For example, to set it as 100 MB, --audit-log-maxsize=100

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--audit-log-maxsize' is greater or equal to 100
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.23 Ensure that the --request-timeout argument is set as appropriate (Manual)


**Result:** warn

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
and set the below parameter as appropriate and if needed.
For example, --request-timeout=300s

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

### 1.2.24 Ensure that the --service-account-lookup argument is set to true (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--service-account-lookup=true
Alternatively, you can delete the --service-account-lookup parameter from this file so
that the default takes effect.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--service-account-lookup' is not present OR '--service-account-lookup' is equal to 'true'
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.25 Ensure that the --service-account-key-file argument is set as appropriate (Automated)


**Result:** pass

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --service-account-key-file parameter
to the public key file for service accounts. For example,
--service-account-key-file=<filename>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--service-account-key-file' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.26 Ensure that the --etcd-certfile and --etcd-keyfile arguments are set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the Kubernetes documentation and set up the TLS connection between the apiserver and etcd.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the etcd certificate and key file parameters.
--etcd-certfile=<path/to/client-certificate-file>
--etcd-keyfile=<path/to/client-key-file>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--etcd-certfile' is present AND '--etcd-keyfile' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.27 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the Kubernetes documentation and set up the TLS connection on the apiserver.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the TLS certificate and private key file parameters.
--tls-cert-file=<path/to/tls-certificate-file>
--tls-private-key-file=<path/to/tls-key-file>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--tls-cert-file' is present AND '--tls-private-key-file' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.28 Ensure that the --client-ca-file argument is set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the Kubernetes documentation and set up the TLS connection on the apiserver.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the client certificate authority file.
--client-ca-file=<path/to/client-ca-file>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--client-ca-file' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.29 Ensure that the --etcd-cafile argument is set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the Kubernetes documentation and set up the TLS connection between the apiserver and etcd.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the etcd certificate authority file parameter.
--etcd-cafile=<path/to/ca-file>

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--etcd-cafile' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 1.2.30 Ensure that the --encryption-provider-config argument is set as appropriate (Manual)


**Result:** Not Applicable

**Remediation:**
Follow the Kubernetes documentation and configure a EncryptionConfig file.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --encryption-provider-config parameter to the path of that file.
For example, --encryption-provider-config=</path/to/EncryptionConfig/File>

### 1.2.31 Ensure that encryption providers are appropriately configured (Manual)


**Result:** Not Applicable

**Remediation:**
Follow the Kubernetes documentation and configure a EncryptionConfig file.
In this file, choose aescbc, kms or secretbox as the encryption provider.
Enabling encryption changes how data can be recovered as data is encrypted.

### 1.2.32 Ensure that the API Server only makes use of Strong Cryptographic Ciphers (Manual)


**Result:** warn

**Remediation:**
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--tls-cipher-suites=TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,
TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256,TLS_RSA_WITH_3DES_EDE_CBC_SHA,TLS_RSA_WITH_AES_128_CBC_SHA,
TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_256_GCM_SHA384

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

## 1.3 Controller Manager
### 1.3.1 Ensure that the --terminated-pod-gc-threshold argument is set as appropriate (Manual)


**Result:** pass

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --terminated-pod-gc-threshold to an appropriate threshold,
for example, --terminated-pod-gc-threshold=10

**Audit:**

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**Expected Result**:

```console
'--terminated-pod-gc-threshold' is present
```

**Returned Value**:

```console
root 13538 13518 1 10:27 ? 00:00:08 kube-controller-manager --service-cluster-ip-range=10.43.0.0/16 --leader-elect=true --allow-untagged-cloud=true --node-monitor-grace-period=40s --pod-eviction-timeout=5m0s --cloud-provider= --terminated-pod-gc-threshold=1000 --configure-cloud-routes=false --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --v=2 --allocate-node-cidrs=true --enable-hostpath-provisioner=false --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --profiling=false --use-service-account-credentials=true
```

### 1.3.2 Ensure that the --profiling argument is set to false (Automated)


**Result:** pass

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the below parameter.
--profiling=false

**Audit:**

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**Expected Result**:

```console
'--profiling' is equal to 'false'
```

**Returned Value**:

```console
root 13538 13518 1 10:27 ? 00:00:08 kube-controller-manager --service-cluster-ip-range=10.43.0.0/16 --leader-elect=true --allow-untagged-cloud=true --node-monitor-grace-period=40s --pod-eviction-timeout=5m0s --cloud-provider= --terminated-pod-gc-threshold=1000 --configure-cloud-routes=false --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --v=2 --allocate-node-cidrs=true --enable-hostpath-provisioner=false --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --profiling=false --use-service-account-credentials=true
```

### 1.3.3 Ensure that the --use-service-account-credentials argument is set to true (Automated)


**Result:** pass

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node to set the below parameter.
--use-service-account-credentials=true

**Audit:**

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**Expected Result**:

```console
'--use-service-account-credentials' is not equal to 'false'
```

**Returned Value**:

```console
root 13538 13518 1 10:27 ? 00:00:08 kube-controller-manager --service-cluster-ip-range=10.43.0.0/16 --leader-elect=true --allow-untagged-cloud=true --node-monitor-grace-period=40s --pod-eviction-timeout=5m0s --cloud-provider= --terminated-pod-gc-threshold=1000 --configure-cloud-routes=false --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --v=2 --allocate-node-cidrs=true --enable-hostpath-provisioner=false --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --profiling=false --use-service-account-credentials=true
```

### 1.3.4 Ensure that the --service-account-private-key-file argument is set as appropriate (Automated)


**Result:** pass

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --service-account-private-key-file parameter
to the private key file for service accounts.
--service-account-private-key-file=<filename>

**Audit:**

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**Expected Result**:

```console
'--service-account-private-key-file' is present
```

**Returned Value**:

```console
root 13538 13518 1 10:27 ? 00:00:08 kube-controller-manager --service-cluster-ip-range=10.43.0.0/16 --leader-elect=true --allow-untagged-cloud=true --node-monitor-grace-period=40s --pod-eviction-timeout=5m0s --cloud-provider= --terminated-pod-gc-threshold=1000 --configure-cloud-routes=false --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --v=2 --allocate-node-cidrs=true --enable-hostpath-provisioner=false --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --profiling=false --use-service-account-credentials=true
```

### 1.3.5 Ensure that the --root-ca-file argument is set as appropriate (Automated)


**Result:** pass

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --root-ca-file parameter to the certificate bundle file`.
--root-ca-file=<path/to/file>

**Audit:**

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**Expected Result**:

```console
'--root-ca-file' is present
```

**Returned Value**:

```console
root 13538 13518 1 10:27 ? 00:00:08 kube-controller-manager --service-cluster-ip-range=10.43.0.0/16 --leader-elect=true --allow-untagged-cloud=true --node-monitor-grace-period=40s --pod-eviction-timeout=5m0s --cloud-provider= --terminated-pod-gc-threshold=1000 --configure-cloud-routes=false --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --v=2 --allocate-node-cidrs=true --enable-hostpath-provisioner=false --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --profiling=false --use-service-account-credentials=true
```

### 1.3.6 Ensure that the RotateKubeletServerCertificate argument is set to true (Automated)


**Result:** Not Applicable

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --feature-gates parameter to include RotateKubeletServerCertificate=true.
--feature-gates=RotateKubeletServerCertificate=true
Cluster provisioned by RKE handles certificate rotation directly through RKE.

### 1.3.7 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated)


**Result:** pass

**Remediation:**
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and ensure the correct value for the --bind-address parameter

**Audit:**

```bash
/bin/ps -ef | grep kube-controller-manager | grep -v grep
```

**Expected Result**:

```console
'--bind-address' is present OR '--bind-address' is not present
```

**Returned Value**:

```console
root 13538 13518 1 10:27 ? 00:00:08 kube-controller-manager --service-cluster-ip-range=10.43.0.0/16 --leader-elect=true --allow-untagged-cloud=true --node-monitor-grace-period=40s --pod-eviction-timeout=5m0s --cloud-provider= --terminated-pod-gc-threshold=1000 --configure-cloud-routes=false --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --cluster-cidr=10.42.0.0/16 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --v=2 --allocate-node-cidrs=true --enable-hostpath-provisioner=false --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --profiling=false --use-service-account-credentials=true
```

## 1.4 Scheduler
### 1.4.1 Ensure that the --profiling argument is set to false (Automated)


**Result:** pass

**Remediation:**
Edit the Scheduler pod specification file /etc/kubernetes/manifests/kube-scheduler.yaml file
on the control plane node and set the below parameter.
--profiling=false

**Audit:**

```bash
/bin/ps -ef | grep kube-scheduler | grep -v grep
```

**Expected Result**:

```console
'--profiling' is equal to 'false'
```

**Returned Value**:

```console
root 13693 13672 0 10:27 ? 00:00:02 kube-scheduler --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --leader-elect=true --profiling=false --v=2 --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml
```

### 1.4.2 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated)


**Result:** pass

**Remediation:**
Edit the Scheduler pod specification file /etc/kubernetes/manifests/kube-scheduler.yaml
on the control plane node and ensure the correct value for the --bind-address parameter

**Audit:**

```bash
/bin/ps -ef | grep kube-scheduler | grep -v grep
```

**Expected Result**:

```console
'--bind-address' is present OR '--bind-address' is not present
```

**Returned Value**:

```console
root 13693 13672 0 10:27 ? 00:00:02 kube-scheduler --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --leader-elect=true --profiling=false --v=2 --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml
```

## 2 Etcd Node Configuration
### 2.1 Ensure that the --cert-file and --key-file arguments are set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the etcd service documentation and configure TLS encryption.
Then, edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml
on the master node and set the below parameters.
--cert-file=</path/to/ca-file>
--key-file=</path/to/key-file>

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'--cert-file' is present AND '--key-file' is present
```

**Returned Value**:

```console
root 13128 13107 3 10:27 ? 00:00:13 /usr/local/bin/etcd --listen-peer-urls=https://172.31.6.132:2380 --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 --initial-cluster-token=etcd-cluster-1 --listen-client-urls=https://172.31.6.132:2379 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --client-cert-auth=true --peer-client-cert-auth=true --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --initial-cluster-state=new --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --election-timeout=5000 --heartbeat-interval=500 --data-dir=/var/lib/rancher/etcd/ --initial-cluster=etcd-rke1-123-cis-e1=https://172.31.6.132:2380 --advertise-client-urls=https://172.31.6.132:2379 --name=etcd-rke1-123-cis-e1 --initial-advertise-peer-urls=https://172.31.6.132:2380 root 24347 24328 7 10:34 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-permissive --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
```

### 2.2 Ensure that the --client-cert-auth argument is set to true (Automated)


**Result:** pass

**Remediation:**
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and set the below parameter.
--client-cert-auth="true"

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'--client-cert-auth' is present OR '--client-cert-auth' is equal to 'true'
```

**Returned Value**:

```console
root 13128 13107 3 10:27 ? 00:00:13 /usr/local/bin/etcd --listen-peer-urls=https://172.31.6.132:2380 --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 --initial-cluster-token=etcd-cluster-1 --listen-client-urls=https://172.31.6.132:2379 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --client-cert-auth=true --peer-client-cert-auth=true --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --initial-cluster-state=new --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --election-timeout=5000 --heartbeat-interval=500 --data-dir=/var/lib/rancher/etcd/ --initial-cluster=etcd-rke1-123-cis-e1=https://172.31.6.132:2380 --advertise-client-urls=https://172.31.6.132:2379 --name=etcd-rke1-123-cis-e1 --initial-advertise-peer-urls=https://172.31.6.132:2380 root 24347 24328 5 10:34 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-permissive --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
```

### 2.3 Ensure that the --auto-tls argument is not set to true (Automated)


**Result:** pass

**Remediation:**
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and either remove the --auto-tls parameter or set it to false.
 --auto-tls=false

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'ETCD_AUTO_TLS' is not present OR 'ETCD_AUTO_TLS' is present
```

**Returned Value**:

```console
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin HOSTNAME=rke1-123-cis-e1 ETCDCTL_API=3 ETCDCTL_CACERT=/etc/kubernetes/ssl/kube-ca.pem ETCDCTL_CERT=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem ETCDCTL_KEY=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem ETCDCTL_ENDPOINTS=https://172.31.6.132:2379 ETCD_UNSUPPORTED_ARCH=x86_64 HOME=/root
```

### 2.4 Ensure that the --peer-cert-file and --peer-key-file arguments are set as appropriate (Automated)


**Result:** pass

**Remediation:**
Follow the etcd service documentation and configure peer TLS encryption as appropriate
for your etcd cluster.
Then, edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the
master node and set the below parameters.
--peer-client-file=</path/to/peer-cert-file>
--peer-key-file=</path/to/peer-key-file>

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'--peer-cert-file' is present AND '--peer-key-file' is present
```

**Returned Value**:

```console
root 13128 13107 3 10:27 ? 00:00:13 /usr/local/bin/etcd --listen-peer-urls=https://172.31.6.132:2380 --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 --initial-cluster-token=etcd-cluster-1 --listen-client-urls=https://172.31.6.132:2379 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --client-cert-auth=true --peer-client-cert-auth=true --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --initial-cluster-state=new --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --election-timeout=5000 --heartbeat-interval=500 --data-dir=/var/lib/rancher/etcd/ --initial-cluster=etcd-rke1-123-cis-e1=https://172.31.6.132:2380 --advertise-client-urls=https://172.31.6.132:2379 --name=etcd-rke1-123-cis-e1 --initial-advertise-peer-urls=https://172.31.6.132:2380 root 24347 24328 2 10:34 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-permissive --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
```

### 2.5 Ensure that the --peer-client-cert-auth argument is set to true (Automated)


**Result:** pass

**Remediation:**
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and set the below parameter.
--peer-client-cert-auth=true

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'--peer-client-cert-auth' is present OR '--peer-client-cert-auth' is equal to 'true'
```

**Returned Value**:

```console
root 13128 13107 3 10:27 ? 00:00:13 /usr/local/bin/etcd --listen-peer-urls=https://172.31.6.132:2380 --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 --initial-cluster-token=etcd-cluster-1 --listen-client-urls=https://172.31.6.132:2379 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --client-cert-auth=true --peer-client-cert-auth=true --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --initial-cluster-state=new --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --election-timeout=5000 --heartbeat-interval=500 --data-dir=/var/lib/rancher/etcd/ --initial-cluster=etcd-rke1-123-cis-e1=https://172.31.6.132:2380 --advertise-client-urls=https://172.31.6.132:2379 --name=etcd-rke1-123-cis-e1 --initial-advertise-peer-urls=https://172.31.6.132:2380 root 24347 24328 4 10:34 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-permissive --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
```

### 2.6 Ensure that the --peer-auto-tls argument is not set to true (Automated)


**Result:** pass

**Remediation:**
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and either remove the --peer-auto-tls parameter or set it to false.
--peer-auto-tls=false

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'ETCD_PEER_AUTO_TLS' is not present OR 'ETCD_PEER_AUTO_TLS' is not present
```

**Returned Value**:

```console
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin HOSTNAME=rke1-123-cis-e1 ETCDCTL_API=3 ETCDCTL_CACERT=/etc/kubernetes/ssl/kube-ca.pem ETCDCTL_CERT=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem ETCDCTL_KEY=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem ETCDCTL_ENDPOINTS=https://172.31.6.132:2379 ETCD_UNSUPPORTED_ARCH=x86_64 HOME=/root
```

### 2.7 Ensure that a unique Certificate Authority is used for etcd (Automated)


**Result:** pass

**Remediation:**
[Manual test]
Follow the etcd documentation and create a dedicated certificate authority setup for the
etcd service.
Then, edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the
master node and set the below parameter.
--trusted-ca-file=</path/to/ca-file>

**Audit:**

```bash
/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
```

**Expected Result**:

```console
'--trusted-ca-file' is present
```

**Returned Value**:

```console
root 13128 13107 3 10:27 ? 00:00:13 /usr/local/bin/etcd --listen-peer-urls=https://172.31.6.132:2380 --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 --initial-cluster-token=etcd-cluster-1 --listen-client-urls=https://172.31.6.132:2379 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132-key.pem --client-cert-auth=true --peer-client-cert-auth=true --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --initial-cluster-state=new --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-6-132.pem --election-timeout=5000 --heartbeat-interval=500 --data-dir=/var/lib/rancher/etcd/ --initial-cluster=etcd-rke1-123-cis-e1=https://172.31.6.132:2380 --advertise-client-urls=https://172.31.6.132:2379 --name=etcd-rke1-123-cis-e1 --initial-advertise-peer-urls=https://172.31.6.132:2380 root 24347 24328 3 10:34 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-permissive --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
```

## 3.1 Authentication and Authorization
### 3.1.1 Client certificate authentication should not be used for users (Manual)


**Result:** warn

**Remediation:**
Alternative mechanisms provided by Kubernetes such as the use of OIDC should be
implemented in place of client certificates.

## 3.2 Logging
### 3.2.1 Ensure that a minimal audit policy is created (Manual)


**Result:** pass

**Remediation:**
Create an audit policy file for your cluster.

**Audit:**

```bash
/bin/ps -ef | grep kube-apiserver | grep -v grep
```

**Expected Result**:

```console
'--audit-policy-file' is present
```

**Returned Value**:

```console
root 13376 13354 13 10:27 ? 00:00:56 kube-apiserver --runtime-config=authorization.k8s.io/v1beta1=true --requestheader-username-headers=X-Remote-User --cloud-provider= --service-cluster-ip-range=10.43.0.0/16 --requestheader-group-headers=X-Remote-Group --storage-backend=etcd3 --audit-log-maxage=30 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-lookup=true --bind-address=0.0.0.0 --audit-log-path=/var/log/kube-audit/audit-log.json --audit-log-format=json --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-account-issuer=rke --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --profiling=false --audit-log-maxbackup=10 --requestheader-allowed-names=kube-apiserver-proxy-client --etcd-servers=https://172.31.6.132:2379 --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-node-port-range=30000-32767 --authentication-token-webhook-cache-ttl=5s --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-extra-headers-prefix=X-Remote-Extra- --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --anonymous-auth=false --advertise-address=172.31.13.71 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --secure-port=6443 --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --allow-privileged=true --api-audiences=unknown --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-prefix=/registry --audit-log-maxsize=100 --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authorization-mode=Node,RBAC
```

### 3.2.2 Ensure that the audit policy covers key security concerns (Manual)


**Result:** warn

**Remediation:**
Review the audit policy provided for the cluster and ensure that it covers
at least the following areas,
- Access to Secrets managed by the cluster. Care should be taken to only
 log Metadata for requests to Secrets, ConfigMaps, and TokenReviews, in
 order to avoid risk of logging sensitive data.
- Modification of Pod and Deployment objects.
- Use of `pods/exec`, `pods/portforward`, `pods/proxy` and `services/proxy`.
For most requests, minimally logging at the Metadata level is recommended
(the most basic level of logging).

## 4.1 Worker Node Configuration Files
### 4.1.1 Ensure that the kubelet service file permissions are set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the each worker node.
For example, chmod 644 /etc/systemd/system/kubelet.service.d/10-kubeadm.conf

### 4.1.2 Ensure that the kubelet service file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Run the below command (based on the file location on your system) on the each worker node.
For example,
chown root:root /etc/systemd/system/kubelet.service.d/10-kubeadm.conf

### 4.1.3 If proxy kubeconfig file exists ensure permissions are set to 644 or more restrictive (Manual)


**Result:** pass

**Remediation:**
Run the below command (based on the file location on your system) on the each worker node.
For example,
chmod 644 /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml

**Audit:**

```bash
/bin/sh -c 'if test -e /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; then stat -c permissions=%a /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; fi'
```

**Expected Result**:

```console
'permissions' is present OR '/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml' is not present
```

### 4.1.4 If proxy kubeconfig file exists ensure ownership is set to root:root (Manual)


**Result:** pass

**Remediation:**
Run the below command (based on the file location on your system) on the each worker node.
For example, chown root:root /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml

**Audit:**

```bash
/bin/sh -c 'if test -e /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; then stat -c %U:%G /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; fi'
```

**Expected Result**:

```console
'root:root' is present OR '/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml' is not present
```

### 4.1.5 Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated)


**Result:** pass

**Remediation:**
Run the below command (based on the file location on your system) on the each worker node.
For example,
chmod 644 /etc/kubernetes/ssl/kubecfg-kube-node.yaml

**Audit:**

```bash
/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; then stat -c permissions=%a /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; fi'
```

**Expected Result**:

```console
permissions has permissions 600, expected 644 or more restrictive
```

**Returned Value**:

```console
permissions=600 permissions=600 permissions=600
```

### 4.1.6 Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)


**Result:** pass

**Remediation:**
Run the below command (based on the file location on your system) on the each worker node.
For example,
chown root:root /etc/kubernetes/ssl/kubecfg-kube-node.yaml

**Audit:**

```bash
/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; then stat -c %U:%G /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; fi'
```

**Expected Result**:

```console
'root:root' is present
```

**Returned Value**:

```console
root:root root:root root:root
```

### 4.1.7 Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated)


**Result:** pass

**Remediation:**
Run the following command to modify the file permissions of the
--client-ca-file chmod 644 <filename>

**Audit:**

```bash
stat -c permissions=%a /node/etc/kubernetes/ssl/kube-ca.pem
```

**Expected Result**:

```console
permissions has permissions 600, expected 644 or more restrictive
```

**Returned Value**:

```console
permissions=600 permissions=600 permissions=600
```

### 4.1.8 Ensure that the client certificate authorities file ownership is set to root:root (Automated)


**Result:** pass

**Remediation:**
Run the following command to modify the ownership of the --client-ca-file.
chown root:root <filename>

**Audit:**

```bash
stat -c %U:%G /node/etc/kubernetes/ssl/kube-ca.pem
```

**Expected Result**:

```console
'root:root' is equal to 'root:root'
```

**Returned Value**:

```console
root:root root:root root:root
```

### 4.1.9 Ensure that the kubelet --config configuration file has permissions set to 644 or more restrictive (Automated)


**Result:** Not Applicable

**Remediation:**
Clusters provisioned by RKE doesn’t require or maintain a configuration file for the kubelet.
All configuration is passed in as arguments at container run time.

### 4.1.10 Ensure that the kubelet --config configuration file ownership is set to root:root (Automated)


**Result:** Not Applicable

**Remediation:**
Clusters provisioned by RKE doesn’t require or maintain a configuration file for the kubelet.
All configuration is passed in as arguments at container run time.

## 4.2 Kubelet
### 4.2.1 Ensure that the --anonymous-auth argument is set to false (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `authentication: anonymous: enabled` to
`false`.
If using executable arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
`--anonymous-auth=false`
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--anonymous-auth' is equal to 'false'
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.2 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `authorization.mode` to Webhook. If
using executable arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_AUTHZ_ARGS variable.
--authorization-mode=Webhook
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--authorization-mode' does not have 'AlwaysAllow'
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.3 Ensure that the --client-ca-file argument is set as appropriate (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `authentication.x509.clientCAFile` to
the location of the client CA file.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_AUTHZ_ARGS variable.
--client-ca-file=<path/to/client-ca-file>
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--client-ca-file' is present
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.4 Ensure that the --read-only-port argument is set to 0 (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `readOnlyPort` to 0.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
--read-only-port=0
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--read-only-port' is equal to '0' OR '--read-only-port' is not present
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.5 Ensure that the --streaming-connection-idle-timeout argument is not set to 0 (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `streamingConnectionIdleTimeout` to a
value other than 0.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
--streaming-connection-idle-timeout=5m
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--streaming-connection-idle-timeout' is not equal to '0' OR '--streaming-connection-idle-timeout' is not present
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.6 Ensure that the --protect-kernel-defaults argument is set to true (Automated)


**Result:** Not Applicable

**Remediation:**
If using a Kubelet config file, edit the file to set `protectKernelDefaults` to `true`.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
--protect-kernel-defaults=true
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service
System level configurations are required prior to provisioning the cluster in order for this argument to be set to true.

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

### 4.2.7 Ensure that the --make-iptables-util-chains argument is set to true (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `makeIPTablesUtilChains` to `true`.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
remove the --make-iptables-util-chains argument from the
KUBELET_SYSTEM_PODS_ARGS variable.
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--make-iptables-util-chains' is equal to 'true' OR '--make-iptables-util-chains' is not present
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.8 Ensure that the --hostname-override argument is not set (Manual)


**Result:** Not Applicable

**Remediation:**
Edit the kubelet service file /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
on each worker node and remove the --hostname-override argument from the
KUBELET_SYSTEM_PODS_ARGS variable.
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service
Clusters provisioned by RKE set the --hostname-override to avoid any hostname configuration errors 

### 4.2.9 Ensure that the --event-qps argument is set to 0 or a level which ensures appropriate event capture (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `eventRecordQPS` to an appropriate level.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--event-qps' is equal to '0'
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

### 4.2.10 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Manual)


**Result:** Not Applicable

**Remediation:**
If using a Kubelet config file, edit the file to set `tlsCertFile` to the location
of the certificate file to use to identify this Kubelet, and `tlsPrivateKeyFile`
to the location of the corresponding private key file.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameters in KUBELET_CERTIFICATE_ARGS variable.
--tls-cert-file=<path/to/tls-certificate-file>
--tls-private-key-file=<path/to/tls-key-file>
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service
When generating serving certificates, functionality could break in conjunction with hostname overrides which are required for certain cloud providers.

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

### 4.2.11 Ensure that the --rotate-certificates argument is not set to false (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to add the line `rotateCertificates` to `true` or
remove it altogether to use the default value.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
remove --rotate-certificates=false argument from the KUBELET_CERTIFICATE_ARGS
variable.
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'{.rotateCertificates}' is present OR '{.rotateCertificates}' is not present
```

### 4.2.12 Verify that the RotateKubeletServerCertificate argument is set to true (Manual)


**Result:** Not Applicable

**Remediation:**
Edit the kubelet service file /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
on each worker node and set the below parameter in KUBELET_CERTIFICATE_ARGS variable.
--feature-gates=RotateKubeletServerCertificate=true
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service
Clusters provisioned by RKE handles certificate rotation directly through RKE. 

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

### 4.2.13 Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers (Automated)


**Result:** pass

**Remediation:**
If using a Kubelet config file, edit the file to set `TLSCipherSuites` to
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
or to a subset of these values.
If using executable arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the --tls-cipher-suites parameter as follows, or to a subset of these values.
--tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service

**Audit:**

```bash
/bin/ps -fC kubelet
```

**Audit Config:**

```bash
/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
```

**Expected Result**:

```console
'--tls-cipher-suites' contains valid elements from 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256'
```

**Returned Value**:

```console
UID PID PPID C STIME TTY TIME CMD root 14253 13858 1 10:27 ? 00:00:06 kubelet --fail-swap-on=false --root-dir=/var/lib/kubelet --node-ip=172.31.13.71 --streaming-connection-idle-timeout=30m --address=0.0.0.0 --resolv-conf=/etc/resolv.conf --volume-plugin-dir=/var/lib/kubelet/volumeplugins --anonymous-auth=false --cloud-provider= --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --authentication-token-webhook=true --make-iptables-util-chains=true --v=2 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --hostname-override=rke1-123-cis-c1 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --read-only-port=0 --event-qps=0 --register-with-taints=node-role.kubernetes.io/controlplane=true:NoSchedule --container-runtime=remote --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --cgroups-per-qos=True --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13859 13462 1 10:27 ? 00:00:06 kubelet --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --hostname-override=rke1-123-cis-e1 --root-dir=/var/lib/kubelet --node-ip=172.31.6.132 --anonymous-auth=false --streaming-connection-idle-timeout=30m --cgroups-per-qos=True --v=2 --pod-infra-container-image=rancher/mirrored-pause:3.6 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --address=0.0.0.0 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cluster-dns=10.43.0.10 --cluster-domain=cluster.local --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --container-runtime=remote --authorization-mode=Webhook --read-only-port=0 --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --cloud-provider= --make-iptables-util-chains=true --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf UID PID PPID C STIME TTY TIME CMD root 13286 12673 2 10:30 ? 00:00:05 kubelet --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --v=2 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --address=0.0.0.0 --authorization-mode=Webhook --event-qps=0 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --fail-swap-on=false --node-ip=172.31.0.64 --pod-infra-container-image=rancher/mirrored-pause:3.6 --make-iptables-util-chains=true --read-only-port=0 --streaming-connection-idle-timeout=30m --cloud-provider= --cluster-domain=cluster.local --hostname-override=rke1-123-cis-w1 --container-runtime-endpoint=unix:///var/run/cri-dockerd.sock --cgroups-per-qos=True --resolv-conf=/etc/resolv.conf --authentication-token-webhook=true --anonymous-auth=false --cluster-dns=10.43.0.10 --root-dir=/var/lib/kubelet --container-runtime=remote --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
```

## 5.1 RBAC and Service Accounts
### 5.1.1 Ensure that the cluster-admin role is only used where required (Manual)


**Result:** warn

**Remediation:**
Identify all clusterrolebindings to the cluster-admin role. Check if they are used and
if they need this role or if they could use a role with fewer privileges.
Where possible, first bind users to a lower privileged role and then remove the
clusterrolebinding to the cluster-admin role :
kubectl delete clusterrolebinding [name]

### 5.1.2 Minimize access to secrets (Manual)


**Result:** warn

**Remediation:**
Where possible, remove get, list and watch access to Secret objects in the cluster.

### 5.1.3 Minimize wildcard use in Roles and ClusterRoles (Manual)


**Result:** warn

**Remediation:**
Where possible replace any use of wildcards in clusterroles and roles with specific
objects or actions.

### 5.1.4 Minimize access to create pods (Manual)


**Result:** warn

**Remediation:**
Where possible, remove create access to pod objects in the cluster.

### 5.1.5 Ensure that default service accounts are not actively used. (Automated)


**Result:** Not Applicable

**Remediation:**
Create explicit service accounts wherever a Kubernetes workload requires specific access
to the Kubernetes API server.
Modify the configuration of each default service account to include this value
automountServiceAccountToken: false

### 5.1.6 Ensure that Service Account Tokens are only mounted where necessary (Manual)


**Result:** warn

**Remediation:**
Modify the definition of pods and service accounts which do not need to mount service
account tokens to disable it.

### 5.1.7 Avoid use of system:masters group (Manual)


**Result:** warn

**Remediation:**
Remove the system:masters group from all users in the cluster.

### 5.1.8 Limit use of the Bind, Impersonate and Escalate permissions in the Kubernetes cluster (Manual)


**Result:** warn

**Remediation:**
Where possible, remove the impersonate, bind and escalate rights from subjects.

## 5.2 Pod Security Standards
### 5.2.1 Ensure that the cluster has at least one active policy control mechanism in place (Manual)


**Result:** warn

**Remediation:**
Ensure that either Pod Security Admission or an external policy control system is in place
for every namespace which contains user workloads.

### 5.2.2 Minimize the admission of privileged containers (Manual)


**Result:** warn

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of privileged containers.

### 5.2.3 Minimize the admission of containers wishing to share the host process ID namespace (Automated)


**Result:** Not Applicable

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of `hostPID` containers.

### 5.2.4 Minimize the admission of containers wishing to share the host IPC namespace (Automated)


**Result:** Not Applicable

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of `hostIPC` containers.

### 5.2.5 Minimize the admission of containers wishing to share the host network namespace (Automated)


**Result:** Not Applicable

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of `hostNetwork` containers.

### 5.2.6 Minimize the admission of containers with allowPrivilegeEscalation (Automated)


**Result:** warn

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers with `.spec.allowPrivilegeEscalation` set to `true`.

### 5.2.7 Minimize the admission of root containers (Automated)


**Result:** warn

**Remediation:**
Create a policy for each namespace in the cluster, ensuring that either `MustRunAsNonRoot`
or `MustRunAs` with the range of UIDs not including 0, is set.

### 5.2.8 Minimize the admission of containers with the NET_RAW capability (Automated)


**Result:** warn

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers with the `NET_RAW` capability.

### 5.2.9 Minimize the admission of containers with added capabilities (Automated)


**Result:** warn

**Remediation:**
Ensure that `allowedCapabilities` is not present in policies for the cluster unless
it is set to an empty array.

### 5.2.10 Minimize the admission of containers with capabilities assigned (Manual)


**Result:** warn

**Remediation:**
Review the use of capabilites in applications running on your cluster. Where a namespace
contains applicaions which do not require any Linux capabities to operate consider adding
a PSP which forbids the admission of containers which do not drop all capabilities.

### 5.2.11 Minimize the admission of Windows HostProcess containers (Manual)


**Result:** warn

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers that have `.securityContext.windowsOptions.hostProcess` set to `true`.

### 5.2.12 Minimize the admission of HostPath volumes (Manual)


**Result:** warn

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers with `hostPath` volumes.

### 5.2.13 Minimize the admission of containers which use HostPorts (Manual)


**Result:** warn

**Remediation:**
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers which use `hostPort` sections.

## 5.3 Network Policies and CNI
### 5.3.1 Ensure that the CNI in use supports NetworkPolicies (Manual)


**Result:** warn

**Remediation:**
If the CNI plugin in use does not support network policies, consideration should be given to
making use of a different plugin, or finding an alternate mechanism for restricting traffic
in the Kubernetes cluster.

### 5.3.2 Ensure that all Namespaces have NetworkPolicies defined (Manual)


**Result:** Not Applicable

**Remediation:**
Follow the documentation and create NetworkPolicy objects as you need them.

## 5.4 Secrets Management
### 5.4.1 Prefer using Secrets as files over Secrets as environment variables (Manual)


**Result:** warn

**Remediation:**
If possible, rewrite application code to read Secrets from mounted secret files, rather than
from environment variables.

### 5.4.2 Consider external secret storage (Manual)


**Result:** warn

**Remediation:**
Refer to the Secrets management options offered by your cloud provider or a third-party
secrets management solution.

## 5.5 Extensible Admission Control
### 5.5.1 Configure Image Provenance using ImagePolicyWebhook admission controller (Manual)


**Result:** warn

**Remediation:**
Follow the Kubernetes documentation and setup image provenance.

## 5.7 General Policies
### 5.7.1 Create administrative boundaries between resources using namespaces (Manual)


**Result:** warn

**Remediation:**
Follow the documentation and create namespaces for objects in your deployment as you need
them.

### 5.7.2 Ensure that the seccomp profile is set to docker/default in your Pod definitions (Manual)


**Result:** warn

**Remediation:**
Use `securityContext` to enable the docker/default seccomp profile in your pod definitions.
An example is as below:
 securityContext:
 seccompProfile:
 type: RuntimeDefault

### 5.7.3 Apply SecurityContext to your Pods and Containers (Manual)


**Result:** warn

**Remediation:**
Follow the Kubernetes documentation and apply SecurityContexts to your Pods. For a
suggested list of SecurityContexts, you may refer to the CIS Security Benchmark for Docker
Containers.

### 5.7.4 The default namespace should not be used (Manual)


**Result:** Not Applicable

**Remediation:**
Ensure that namespaces are created to allow for appropriate segregation of Kubernetes
resources and that all new resources are created in a specific namespace.

