---
title: K3s Hardening Guide with CIS Benchmark
---

This document provides prescriptive guidance for hardening a production installation of a K3s cluster to be provisioned with Rancher v2.7. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS).

:::note

This hardening guide describes how to secure the nodes in your cluster, and it is recommended to follow this guide before installing Kubernetes.

:::

This hardening guide is intended to be used for K3s clusters and associated with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:

| Rancher Version | CIS Benchmark Version | Kubernetes Version |
| --------------- | --------------------- | ------------------ |
| Rancher v2.7    | Benchmark v1.20       | Kubernetes v1.21   |
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.22 up to v1.24 |

### Overview

For more details about evaluating a hardened K3s cluster against the official CIS benchmark, refer to K3s - CIS Benchmark - Self-Assessment Guide - Rancher v2.7 for [CIS v1.20](k3s-self-assessment-guide-with-cis-v1.20-benchmark.md) and [CIS v1.23](k3s-self-assessment-guide-with-cis-v1.23-benchmark.md).

K3s has a number of security mitigations applied and turned on by default and will pass a number of the Kubernetes CIS controls without modification. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:

1. K3s will not modify the host operating system. Any host-level modifications will need to be done manually.
2. Certain CIS policy controls for `PodSecurityPolicies` and `NetworkPolicies` will restrict the functionality of the cluster. You must opt into having K3s configure these by adding the appropriate options (enabling of admission plugins) to your command-line flags or configuration file as well as manually applying appropriate policies. Further details are presented in the sections below.

The first section (1.1) of the CIS Benchmark concerns itself primarily with pod manifest permissions and ownership. K3s doesn't utilize these for the core components since everything is packaged into a single binary.

## Host-level Requirements

### Ensure `protect-kernel-defaults` is set (control 4.2.6)

This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults.

This can be remediated by adding the following argument line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
    - config:
        protect-kernel-defaults: true          # Control 4.2.6
```

#### Set kernel parameters

Create a file called `/etc/sysctl.d/90-kubelet.conf` and add the snippet below. Then run `sysctl -p /etc/sysctl.d/90-kubelet.conf`.

```bash
vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
```

This configuration needs to be done before setting the kubelet flag, otherwise K3s will fail to start.

## Kubernetes Runtime Requirements

The runtime requirements to comply with the CIS Benchmark are centered around pod security policies (PSPs) and its admission control plugin, network policies and API Server auditing logs. These are outlined in this section. K3s doesn't apply any default PSPs or network policies. However, K3s ships with a controller that is meant to apply a given set of network policies. By default, K3s runs with the `NodeRestriction` admission controller. To enable PSPs, add the following line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
      - enable-admission-plugins=NodeRestriction,PodSecurityPolicy    # CIS 1.2.16 and CIS 5.2
```

This will have the effect of maintaining the `NodeRestriction` plugin as well as enabling the `PodSecurityPolicy`.

### Pod Security Policies (control 5.2)

When PSPs are enabled, a policy can be applied to satisfy the necessary controls described in section 5.2 of the CIS Benchmark.

Here is an example of a compliant PSP.

```yaml
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

For the above PSP to be effective, we need to create a `ClusterRole` and a `ClusterRoleBinding`. We also need to include a "system unrestricted policy" which is needed for system-level pods that require additional privileges, as exemplified below.

```yaml
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
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:restricted-psp
  labels:
    addonmanager.kubernetes.io/mode: EnsureExists
rules:
- apiGroups: ['extensions']
  resources: ['podsecuritypolicies']
  verbs:     ['use']
  resourceNames:
  - restricted-psp
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: default:restricted-psp
  labels:
    addonmanager.kubernetes.io/mode: EnsureExists
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp:restricted-psp
subjects:
- kind: Group
  name: system:authenticated
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: system-unrestricted-psp
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
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system-unrestricted-node-psp-rolebinding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system-unrestricted-psp-role
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system:nodes
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: system-unrestricted-psp-role
rules:
- apiGroups:
  - policy
  resourceNames:
  - system-unrestricted-psp
  resources:
  - podsecuritypolicies
  verbs:
  - use
```

The policy file `policy.yaml` can be placed in the `/var/lib/rancher/k3s/server/manifests` directory. Both the policy file and the its directory hierarchy, ideally, must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information.

```bash
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests
```

### Network Policies (control 5.3.2)

CIS requires that all namespaces have a network policy applied that reasonably limits traffic into namespaces and pods.

:::note

This is a manual check in the CIS Benchmark. The CIS scan will flag the result as `warning`, because manual inspection is necessary by the cluster operator.

:::

Here is an example of a compliant network policy.

```yaml
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
```

:::note

Kubernetes' additions such as CNI, DNS, and Ingress are ran as pods in the `kube-system` namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly.

:::

With the applied restrictions, DNS will be blocked unless purposely allowed. Below is a network policy that will allow DNS related traffic.

```yaml
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

The metrics-server and Traefik ingress controller will be blocked by default if network policies are not created to allow access.

```yaml
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
```

:::note

Operators must manage network policies as normal for additional namespaces that are created.

:::

The network policies can be added in the same policy file used for PSPs in `/var/lib/rancher/k3s/server/manifests/policy.yaml` or on its own file.

### API Server audit configuration

CIS requirements v1.20 - 1.2.22 to 1.2.25 and v1.23 - 1.2.19 to 1.2.22 are related to configuring audit logs for the API Server. K3s doesn't create by default the log directory and audit policy, as auditing requirements are specific to each user's policies and environment.

The log directory, ideally, must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information.

```bash
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/logs
```

A starter audit policy to log request metadata is provided below. The policy should be written to a file named `audit.yaml` in `/var/lib/rancher/k3s/server` directory. Detailed information about policy configuration for the API server can be found in the Kubernetes [documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/).

```yaml
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: Metadata
```

Further configurations, as described below, are also needed to pass CIS checks and are not configured by default in K3s, because they vary depending on the users' environment and needs:

- Ensure that the `--audit-log-path` argument is set.
- Ensure that the `--audit-log-maxage` argument is set to 30 or as appropriate.
- Ensure that the `--audit-log-maxbackup` argument is set to 10 or as appropriate.
- Ensure that the `--audit-log-maxsize` argument is set to 100 or as appropriate.

To enable and configure audit logs, add the following line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
      - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS v1.20/v1.23 3.2.1
      - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS v1.20 1.2.21 and CIS v1.23 1.2.19
      - audit-log-maxage=30                                         # CIS v1.20 1.2.22 and CIS v1.23 1.2.20
      - audit-log-maxbackup=10                                      # CIS v1.20 1.2.23 and CIS v1.23 1.2.21
      - audit-log-maxsize=100                                       # CIS v1.20 1.2.24 and CIS v1.23 1.2.22
```

## Known Issues

The following are controls that K3s currently does not pass by default. Each gap will be explained, along with a note clarifying whether it can be passed through manual operator intervention, or if it will be addressed in a future release of K3s.

### Control CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14
Ensure that the admission control plugin `ServiceAccount` is set
<details>
<summary>Rationale</summary>
Follow the documentation and create `ServiceAccount` objects as per your environment. Then, edit the API server pod specification file $apiserverconf
on the control plane node and ensure that the `--disable-admission-plugins` parameter is set to a value that does not include `ServiceAccount`.

This can be remediated by adding the following argument line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
      kube-apiserver-arg:
        - enable-admission-plugins=ServiceAccount    # CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14
```
</details>

### Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23
Ensure that the `--request-timeout` argument is set as appropriate.
<details>
<summary>Rationale</summary>
Setting global request timeout allows extending the API server request timeout limit to a duration appropriate to the user's connection speed. By default, it is set to 60 seconds which might be problematic on slower connections making cluster resources inaccessible once the data volume for requests exceeds what can be transmitted in 60 seconds. But, setting this timeout limit to be too large can exhaust the API server resources making it prone to Denial-of-Service attack. Hence, it is recommended to set this limit as appropriate and change the default limit of 60 seconds only if needed.

This can be remediated by adding the following argument line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
      - request-timeout=300s          # Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23
```
</details>

### Control CIS v1.23 1.2.24
Ensure that the `--service-account-lookup` argument is set to true.
<details>
<summary>Rationale</summary>
If `--service-account-lookup` is not enabled, the apiserver only verifies that the authentication token is valid, and does not validate that the service account token mentioned in the request is actually present in etcd. This allows using a service account token even after the corresponding service account is deleted. This is an example of time of check to time of use security issue.

This can be remediated by adding the following argument line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
      - service-account-lookup=true   # Control CIS v1.23 1.2.24
```
</details>

### CIS v1.20 1.2.32 and CIS v1.23 1.2.30
Ensure that the `--encryption-provider-config` argument is set as appropriate.
<details>
<summary>Rationale</summary>
`etcd` is a highly available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive in nature and should be encrypted at rest to avoid any disclosures.

Detailed steps on how to configure secrets encryption in K3s are available in [K3s Secrets Encryption Config](https://docs.k3s.io/security/secrets-encryption).
</details>

### Control CIS v1.20 1.2.33 and CIS v1.23 1.2.31
Ensure that encryption providers are appropriately configured.
<details>
<summary>Rationale</summary>
Where `etcd` encryption is used, it is important to ensure that the appropriate set of encryption providers is used. Currently, the `aescbc`, `kms` and `secretbox` are likely to be appropriate options.

This can be remediated by passing a valid configuration to `k3s` as outlined above. Detailed steps on how to configure secrets encryption in K3s are available in [K3s Secrets Encryption Config](https://docs.k3s.io/security/secrets-encryption).
</details>

### Control 4.2.7
Ensure that the `--make-iptables-util-chains` argument is set to true.
<details>
<summary>Rationale</summary>
Kubelets can automatically manage the required changes to iptables based on how you choose your networking options for the pods. It is recommended to let kubelets manage the changes to iptables. This ensures that the iptables configuration remains in sync with pods networking configuration. Manually configuring iptables with dynamic pod network configuration changes might hamper the communication between pods/containers and to the outside world. You might have iptables rules too restrictive or too open.

This can be remediated by adding the following argument line to K3s cluster configuration file:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
    - config:
        kubelet-arg:
        - make-iptables-util-chains=true          # Control 4.2.7
```
</details>

### Control 5.1.5
Ensure that default service accounts are not actively used
<details>
<summary>Rationale</summary>
Kubernetes provides a `default` service account which is used by cluster workloads where no specific service account is assigned to the pod.

Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account.

The default service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments.

This can be remediated by updating the `automountServiceAccountToken` field to `false` for the `default` service account in each namespace.

For `default` service accounts in the built-in namespaces (`kube-system`, `kube-public`, `kube-node-lease`, and `default`), K3s does not automatically do this. You can manually update this field on these service accounts to pass the control or use the script below to automate this task.

Save the follow configuration to a file called `account_update.yaml`.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

Create a bash script file called `account_update.sh`. Be sure to `sudo chmod +x account_update.sh` so the script has execute permissions.

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  echo -n "Patching namespace $namespace - "
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

Execute the script to update the default service account in each namespace.
</details>


### Reference Hardened K3s Template Configuration

The reference template configuration below is used in Rancher to create a hardened K3s custom cluster based on each CIS control presented in this guide. This reference does not include other required **cluster configuration** directives which will vary depending on your environment.

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # Define cluster name
  annotations:
spec:
  defaultPodSecurityPolicyTemplateName: '' # Define the PSP policy to use
  enableNetworkPolicy: true
  kubernetesVersion: # Define K3s version
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount    # CIS 1.2.16, CIS 5.2 and CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14
        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS v1.20/v1.23 3.2.1
        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS v1.20 1.2.21 and CIS v1.23 1.2.19
        - audit-log-maxage=30                                         # CIS v1.20 1.2.22 and CIS v1.23 1.2.20
        - audit-log-maxbackup=10                                      # CIS v1.20 1.2.23 and CIS v1.23 1.2.21
        - audit-log-maxsize=100                                       # CIS v1.20 1.2.24 and CIS v1.23 1.2.22
        - request-timeout=300s                                        # Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23
        - service-account-lookup=true                                 # Control CIS v1.23 1.2.24
      secrets-encryption: true
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - make-iptables-util-chains=true                          # Control 4.2.7
          protect-kernel-defaults: true                               # Control 4.2.6
```

### Conclusion

If you have followed this guide, your K3s custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our K3s CIS Benchmark Self-Assessment Guide for [CIS v1.20](k3s-self-assessment-guide-with-cis-v1.20-benchmark.md) and [CIS v1.23](k3s-self-assessment-guide-with-cis-v1.23-benchmark.md) to understand how we verified each of the benchmarks and how you can do the same on your cluster.
