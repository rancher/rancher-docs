---
title: K3s Hardening Guide
---

This document provides prescriptive guidance for hardening a production installation of a K3s cluster to be provisioned with Rancher. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS).

:::note
This hardening guide describes how to secure the nodes in your cluster, and it is recommended to follow this guide before installing Kubernetes.
:::

This hardening guide is intended to be used for K3s clusters and associated with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:

| Rancher Version | CIS Benchmark Version | Kubernetes Version           |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.22 up to v1.25 |

For more details about evaluating a hardened K3s cluster against the official CIS benchmark, refer to the K3s self-assessment guides for specific CIS benchmark versions.

K3s has a number of security mitigations applied and turned on by default and will pass a number of the Kubernetes CIS controls without modification. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:

1. K3s will not modify the host operating system. Any host-level modifications will need to be done manually. 
2. Certain CIS policy controls for `NetworkPolicies` and `PodSecurityStandards` (`PodSecurityPolicies` on v1.24 and older) will restrict the functionality of the cluster. 
   You must opt into having K3s configure these by adding the appropriate options (enabling of admission plugins) to your command-line flags or configuration file as well as manually applying appropriate policies. 
   Further details are presented in the sections below.

The first section (1.1) of the CIS Benchmark concerns itself primarily with pod manifest permissions and ownership. K3s doesn't utilize these for the core components since everything is packaged into a single binary.

## Host-level Requirements

### Set kernel parameters

The following `sysctl` configuration is recommended for all nodes type in the cluster. Set the following parameters in `/etc/sysctl.d/90-kubelet.conf`:

```ini
vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
```

Run `sudo sysctl -p /etc/sysctl.d/90-kubelet.conf` to enable the settings.


## Kubernetes Runtime Requirements

The runtime requirements to comply with the CIS Benchmark are centered around pod security (via PSP or PSA), network policies and API Server auditing logs. These are outlined in this section.

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


### Pod Security

By default, K3s does not include any pod security or network policies. However, K3s ships with a controller that will enforce network policies, if any are created. K3s doesn't enable auditing by default, so audit log configuration and audit policy must be created manually. By default, K3s runs with the both the `PodSecurity` and `NodeRestriction` admission controllers enabled, among others.

<Tabs>
<TabItem value="v1.25 and Newer" default>

K3s v1.25 and newer support [Pod Security Admissions (PSAs)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) for controlling pod security.

The Pod Security Admission configuration can be specified by setting the `defaultPodSecurityAdmissionConfigurationTemplateName` field in the cluster configuration in Rancher:

```yaml
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
```
</TabItem>
<TabItem value="v1.24 and Older" default>

K3s v1.24 and older support [Pod Security Policies (PSPs)](https://v1-24.docs.kubernetes.io/docs/concepts/security/pod-security-policy/) for controlling pod security. 

PSPs can be enabled by passing the following flags in the cluster configuration in Rancher:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount
```
This will have the effect of maintaining the `NodeRestriction` plugin as well as enabling the `PodSecurityPolicy`.

When PSPs are enabled, a policy can be applied to satisfy the necessary controls described in section 5.2 of the CIS Benchmark.

Here is an example of a compliant PSP:

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

For the above PSP to be effective, we need to create a ClusterRole and a ClusterRoleBinding. We also need to include a "system unrestricted policy" which is needed for system-level pods that require additional privileges, and an additional policy that allows sysctls necessary for servicelb to function properly.

Combining the configuration above with the Network Policy described in the next section, a single file can be placed in the `/var/lib/rancher/k3s/server/manifests` directory. Here is an example of a `policy.yaml` file:

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

:::note
The Kubernetes critical additions such as CNI, DNS, and Ingress are run as pods in the `kube-system` namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly.
:::

</TabItem>
</Tabs>
 

### Network Policies

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

<Tabs>
<TabItem value="v1.21 and Newer" default>

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
---
```
</TabItem>

<TabItem value="v1.20 and Older" default>

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
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-traefik-v120-ingress
  namespace: kube-system
spec:
  podSelector:
    matchLabels:
      app: traefik
  ingress:
  - {}
  policyTypes:
  - Ingress
---
```
</TabItem>
</Tabs>

:::note
Operators must manage network policies as normal for additional namespaces that are created.
:::

### API Server audit configuration

K3s doesn't create the log directory and audit policy by default, as auditing requirements are specific to each user's policies and environment.

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

Combined, to enable and configure audit logs, add the following lines to K3s cluster configuration file in Rancher:

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

## Reference Hardened K3s Template Configuration

The reference template configuration below is used in Rancher to create a hardened K3s custom cluster based on each CIS control presented in this guide. This reference does not include other required **cluster configuration** directives which will vary depending on your environment.

<Tabs groupId="rke2-version">
<TabItem value='v1.25 and Newer' default>

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
        - enable-admission-plugins=NodeRestriction,ServiceAccount    # CIS 1.2.16, CIS 5.2 and CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14
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

</TabItem>

<TabItem value='v1.22 up to 1.24'>

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

</TabItem>
</Tabs>

## Conclusion

If you have followed this guide, your K3s custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our K3s self-assessment guides to understand how we verified each of the benchmarks and how you can do the same on your cluster.
