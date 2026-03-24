---
title: K3s Hardening Guide
---

This document provides prescriptive guidance for how to harden a K3s cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls.

:::note
This hardening guide describes how to secure the nodes in your cluster. We recommended that you follow this guide before you install Kubernetes.
:::

This hardening guide is intended to be used for K3s clusters and is associated with the following versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:

| Rancher Version | CIS Benchmark Version | Kubernetes Version           |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.23 up to v1.25 |

:::note
At the time of writing, the upstream CIS Kubernetes v1.25 benchmark is not yet available in Rancher. At this time Rancher is using the CIS v1.23 benchmark when scanning Kubernetes v1.25 clusters.
:::

For more details on how to evaluate a hardened K3s cluster against the official CIS benchmark, refer to the K3s self-assessment guides for specific Kubernetes and CIS benchmark versions.

K3s passes a number of the Kubernetes CIS controls without modification, as it applies several security mitigations by default. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:

1. K3s does not modify the host operating system. Any host-level modifications need to be done manually.
2. Certain CIS policy controls for `NetworkPolicies` and `PodSecurityStandards` (`PodSecurityPolicies` on v1.24 and older) restrict cluster functionality.
   You must opt into having K3s configure these policies. Add the appropriate options to your command-line flags or configuration file (enable admission plugins), and manually apply the appropriate policies.
   See further for more details.

The first section (1.1) of the CIS Benchmark primarily focuses on  pod manifest permissions and ownership. Since everything in the distribution is packaged in a single binary, this section does not apply to the core components of K3s.

## Host-level Requirements

### Ensure `protect-kernel-defaults` is set

This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults.

The `protect-kernel-defaults` flag can be set in the cluster configuration in Rancher.

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          protect-kernel-defaults: true
```

### Set kernel parameters

The following `sysctl` configuration is recommended for all nodes type in the cluster. Set the following parameters in `/etc/sysctl.d/90-kubelet.conf`:

```ini
vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
```

Run `sudo sysctl -p /etc/sysctl.d/90-kubelet.conf` to enable the settings.

This configuration needs to be done before setting the kubelet flag, otherwise K3s will fail to start.

## Kubernetes Runtime Requirements

The CIS Benchmark runtime requirements center around pod security (via PSA), network policies and API Server auditing logs.

By default, K3s does not include any pod security or network policies. However, K3s ships with a controller that enforces any network policies you create. By default, K3s enables both the `PodSecurity` and `NodeRestriction` admission controllers, among others.

### Pod Security

<Tabs groupId="k3s-version">
<TabItem value="v1.25 and Newer" default>

K3s v1.25 and newer support [Pod Security admission (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) for controlling pod security.

You can specify the PSA configuration by setting the `defaultPodSecurityAdmissionConfigurationTemplateName` field in the cluster configuration in Rancher:

```yaml
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
```

The `rancher-restricted` template is provided by Rancher to enforce the highly-restrictive Kubernetes upstream [`Restricted`](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted) profile with best practices for pod hardening.

</TabItem>
<TabItem value="v1.24 and Older">

K3s v1.24 and older support [Pod Security Policy (PSP)](https://v1-24.docs.kubernetes.io/docs/concepts/security/pod-security-policy/) for controlling pod security.

You can enable PSPs by passing the following flags in the cluster configuration in Rancher:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount
```

This maintains the `NodeRestriction` plugin and enables the `PodSecurityPolicy`.

Once you enable PSPs, you can apply a policy to satisfy the necessary controls described in section 5.2 of the CIS Benchmark.

:::note
These are manual checks in the CIS Benchmark. The CIS scan flags the results as `warning`, because manual inspection is necessary by the cluster operator.
:::

Here is an example of a compliant PSP:

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

For the example PSP to be effective, we need to create a `ClusterRole` and a `ClusterRoleBinding`. We also need to include a "system unrestricted policy" for system-level pods that require additional privileges, and an additional policy that allows the necessary sysctls for full functionality of ServiceLB.

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

The policies presented above can be placed in a file named `policy.yaml` in the `/var/lib/rancher/k3s/server/manifests` directory. Both the policy file and the its directory hierarchy must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information.

```shell
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests
```

:::note
The critical Kubernetes additions such as CNI, DNS, and Ingress are run as pods in the `kube-system` namespace. Therefore, this namespace has a less restrictive policy, so that these components can run properly.
:::

</TabItem>
</Tabs>

### Network Policies

CIS requires that all namespaces apply a network policy that reasonably limits traffic into namespaces and pods.

:::note
This is a manual check in the CIS Benchmark. The CIS scan flags the result as a `warning`, because manual inspection is necessary by the cluster operator.
:::

The network policies can be placed in the `policy.yaml` file in `/var/lib/rancher/k3s/server/manifests` directory. If the directory was not created as part of the PSP (as described above), it must be created first.

```shell
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests
```

Here is an example of a compliant network policy:

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

The active restrictions block DNS unless purposely allowed. Below is a network policy that allows DNS-related traffic:

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

The metrics-server and Traefik ingress controller are blocked by default if network policies are not created to allow access.

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
You must manage network policies as normal for any additional namespaces you create.
:::

### API Server audit configuration

CIS requirements 1.2.22 to 1.2.25 are related to configuring audit logs for the API Server. K3s does not create by default the log directory and audit policy, as auditing requirements are specific to each user's policies and environment.

If you need a log directory, it must be created before you start K3s. We recommend a restrictive access permission to avoid leaking sensitive information.

```bash
sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/logs
```

The following is a starter audit policy to log request metadata. This policy should be written to a file named `audit.yaml` in the `/var/lib/rancher/k3s/server` directory. Detailed information about policy configuration for the API server can be found in the [official Kubernetes documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/).

```yaml
---
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: Metadata
```

Further configurations are also needed to pass CIS checks. These are not configured by default in K3s, because they vary based on your environment and needs:

- Ensure that the `--audit-log-path` argument is set.
- Ensure that the `--audit-log-maxage` argument is set to 30 or as appropriate.
- Ensure that the `--audit-log-maxbackup` argument is set to 10 or as appropriate.
- Ensure that the `--audit-log-maxsize` argument is set to 100 or as appropriate.

Combined, to enable and configure audit logs, add the following lines to the K3s cluster configuration file in Rancher:

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

### Controller Manager Requirements

CIS requirement 1.3.1 checks for garbage collection settings in the Controller Manager. Garbage collection is important to ensure sufficient resource availability and avoid degraded performance and availability. Based on your system resources and tests, choose an appropriate threshold value to activate garbage collection.

This can be remediated by setting the following configuration in the K3s cluster file in Rancher. The value below is only an example. The appropriate threshold value is specific to each user's environment.

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-controller-manager-arg:
        - terminated-pod-gc-threshold=10                              # CIS 1.3.1
```

### Configure `default` Service Account

Kubernetes provides a `default` service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account.

For CIS requirement 5.1.5 the `default` service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments.

This can be remediated by updating the `automountServiceAccountToken` field to `false` for the `default` service account in each namespace.

For `default` service accounts in the built-in namespaces (`kube-system`, `kube-public`, `kube-node-lease`, and `default)`, K3s does not automatically do this.

Save the following configuration to a file called `account_update.yaml`.

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

Create a bash script file called `account_update.sh`. Be sure to `chmod +x account_update.sh` so the script has execute permissions.

```shell
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

Run the script every time a new service account is added to your cluster.

## Reference Hardened K3s Template Configuration

The following reference template configuration is used in Rancher to create a hardened K3s custom cluster based on each CIS control in this guide. This reference does not include other required **cluster configuration** directives, which vary based on your environment.

<Tabs groupId="k3s-version">
<TabItem value="v1.25 and Newer" default>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # Define cluster name
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
  enableNetworkPolicy: true
  kubernetesVersion: # Define K3s version
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
          protect-kernel-defaults: true                               # CIS 4.2.6
```

</TabItem>
<TabItem value="v1.24 and Older">

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: # Define cluster name
spec:
  enableNetworkPolicy: true
  kubernetesVersion: # Define K3s version
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

## Conclusion

If you have followed this guide, your K3s custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our K3s self-assessment guides to understand how we verified each of the benchmarks and how you can do the same on your cluster.
