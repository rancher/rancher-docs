---
title: RKE Hardening Guide
---

This document provides prescriptive guidance for how to harden an RKE cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls.

:::note
This hardening guide describes how to secure the nodes in your cluster. We recommended that you follow this guide before you install Kubernetes.
:::

This hardening guide is intended to be used for RKE clusters and is associated with the following versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:

| Rancher Version | CIS Benchmark Version | Kubernetes Version           |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.23 up to v1.25 |

:::note
At the time of writing, the upstream CIS Kubernetes v1.25 benchmark is not yet available in Rancher. At this time Rancher is using the CIS v1.23 benchmark when scanning Kubernetes v1.25 clusters. Due to that, the CIS checks 5.2.3, 5.2.4, 5.2.5 and 5.2.6 might fail.
:::

For more details on how to evaluate a hardened RKE cluster against the official CIS benchmark, refer to the RKE self-assessment guides for specific Kubernetes and CIS benchmark versions.

## Host-level requirements

### Configure Kernel Runtime Parameters

The following `sysctl` configuration is recommended for all nodes types in the cluster. Set the following parameters in `/etc/sysctl.d/90-kubelet.conf`:

```ini
vm.overcommit_memory=1
vm.panic_on_oom=0
kernel.panic=10
kernel.panic_on_oops=1
```

Run `sysctl -p /etc/sysctl.d/90-kubelet.conf` to enable the settings.

### Configure `etcd` user and group

A user account and group for the **etcd** service is required to be set up before installing RKE.

#### Create `etcd` user and group

To create the **etcd** user and group run the following console commands.
The commands below use `52034` for **uid** and **gid** for example purposes.
Any valid unused **uid** or **gid** could also be used in lieu of `52034`.

```bash
groupadd --gid 52034 etcd
useradd --comment "etcd service account" --uid 52034 --gid 52034 etcd --shell /usr/sbin/nologin
```

When deploying RKE through its cluster configuration `config.yml` file, update the `uid` and `gid` of the `etcd` user:

```yaml
services:
  etcd:
    gid: 52034
    uid: 52034
```

## Kubernetes runtime requirements

### Configure `default` Service Account

#### Set `automountServiceAccountToken` to `false` for `default` service accounts

Kubernetes provides a default service account which is used by cluster workloads where no specific service account is assigned to the pod.
Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account.
The default service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments.

For each namespace including `default` and `kube-system` on a standard RKE install, the `default` service account must include this value:

```yaml
automountServiceAccountToken: false
```

Save the following configuration to a file called `account_update.yaml`.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
```

Create a bash script file called `account_update.sh`.
Be sure to `chmod +x account_update.sh` so the script has execute permissions.

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"
done
```

Execute this script to apply the `account_update.yaml` configuration to `default` service account in all namespaces.

### Configure Network Policy

#### Ensure that all Namespaces have Network Policies defined

Running different applications on the same Kubernetes cluster creates a risk of one compromised application attacking a neighboring application. Network segmentation is important to ensure that containers can communicate only with those they are supposed to. A network policy is a specification of how selections of pods are allowed to communicate with each other and other network endpoints.

Network Policies are namespace scoped. When a network policy is introduced to a given namespace, all traffic not allowed by the policy is denied. However, if there are no network policies in a namespace all traffic will be allowed into and out of the pods in that namespace. To enforce network policies, a container network interface (CNI) plugin must be enabled. This guide uses [Canal](https://github.com/projectcalico/canal) to provide the policy enforcement. Additional information about CNI providers can be found [here](https://www.suse.com/c/rancher_blog/comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/).

Once a CNI provider is enabled on a cluster a default network policy can be applied. For reference purposes a **permissive** example is provided below. If you want to allow all traffic to all pods in a namespace (even if policies are added that cause some pods to be treated as “isolated”), you can create a policy that explicitly allows all traffic in that namespace. Save the following configuration as `default-allow-all.yaml`. Additional [documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/) about network policies can be found on the Kubernetes site.

:::caution
This network policy is just an example and is not recommended for production use.
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

Create a bash script file called `apply_networkPolicy_to_all_ns.sh`. Be sure to `chmod +x apply_networkPolicy_to_all_ns.sh` so the script has execute permissions.

```bash
#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  kubectl apply -f default-allow-all.yaml -n ${namespace}
done
```

Execute this script to apply the `default-allow-all.yaml` configuration with the **permissive** `NetworkPolicy` to all namespaces.

## Known Limitations

- Rancher **exec shell** and **view logs** for pods are **not** functional in a hardened setup when only a public IP is provided when registering custom nodes. This functionality requires a private IP to be provided when registering the custom nodes.
- When setting `default_pod_security_policy_template_id:` to `restricted` or `restricted-noroot`, based on the pod security policies (PSP) [provided](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md) by Rancher, Rancher creates `RoleBindings` and `ClusterRoleBindings` on the `default` service accounts. The CIS check 5.1.5 requires that the `default` service accounts have no roles or cluster roles bound to it apart from the defaults. In addition, the `default` service accounts should be configured such that it does not provide a service account token and does not have any explicit rights assignments.

## Reference Hardened RKE `cluster.yml` Configuration

The reference `cluster.yml` is used by the RKE CLI that provides the configuration needed to achieve a hardened installation of RKE. RKE [documentation](https://rancher.com/docs/rke/latest/en/installation/) provides additional details about the configuration items. This reference `cluster.yml` does not include the required `nodes` directive which will vary depending on your environment. Documentation for node configuration in RKE can be found [here](https://rancher.com/docs/rke/latest/en/config-options/nodes/).

The example `cluster.yml` configuration file contains an Admission Configuration policy in the `services.kube-api.admission_configuration` field. This [sample](../reference-guides/rancher-security/psa-restricted-exemptions.md) policy contains the namespace exemptions necessary for an imported RKE cluster to run properly in Rancher, similar to Rancher's pre-defined [`rancher-restricted`](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md) policy.

If you prefer to use RKE's default `restricted` policy, then leave the `services.kube-api.admission_configuration` field empty and set `services.pod_security_configuration` to `restricted`. See [the RKE docs](https://rke.docs.rancher.com/config-options/services/pod-security-admission) for more information.

<Tabs groupId="rke1-version">
<TabItem value="v1.25 and Newer" default>

:::note
If you intend to import an RKE cluster into Rancher, please consult the [documentation](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md) for how to configure the PSA to exempt Rancher system namespaces.
:::

```yaml
# If you intend to deploy Kubernetes in an air-gapped environment,
# please consult the documentation on how to configure custom RKE images.
nodes: []
kubernetes_version: # Define RKE version
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
    # Leave `pod_security_configuration` out if you are setting a
    # custom policy in `admission_configuration`. Otherwise set
    # it to `restricted` to use RKE's pre-defined restricted policy,
    # and remove everything inside `admission_configuration` field.
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
              namespaces: [ calico-apiserver,
                            calico-system,
                            cattle-alerting,
                            cattle-csp-adapter-system,
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
                            tigera-operator ]
  kube-controller:
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
  kubelet:
    extra_args:
      feature-gates: RotateKubeletServerCertificate=true
      protect-kernel-defaults: "true"
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
<TabItem value="v1.24 and Older">

```yaml
# If you intend to deploy Kubernetes in an air-gapped environment,
# please consult the documentation on how to configure custom RKE images.
nodes: []
kubernetes_version: # Define RKE version
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

## Reference Hardened RKE Cluster Template Configuration

The reference RKE cluster template provides the minimum required configuration to achieve a hardened installation of Kubernetes. RKE templates are used to provision Kubernetes and define Rancher settings. Follow the Rancher [documentation](installation-and-upgrade.md) for additional information about installing RKE and its template details.

<Tabs groupId="rke1-version">
<TabItem value="v1.25 and Newer" default>

```yaml
#
# Cluster Config
#
default_pod_security_admission_configuration_template_name: rancher-restricted
enable_network_policy: true
local_cluster_auth_endpoint:
  enabled: true
name: # Define cluster name

#
# Rancher Config
#
rancher_kubernetes_engine_config:
  addon_job_timeout: 45
  authentication:
    strategy: x509|webhook
  kubernetes_version: # Define RKE version
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
        protect-kernel-defaults: true
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
      generate_serving_certificate: true
    scheduler:
      extra_args:
        tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
```

</TabItem>
<TabItem value="v1.24 and Older">

```yaml
#
# Cluster Config
#
default_pod_security_policy_template_id: restricted-noroot
enable_network_policy: true
local_cluster_auth_endpoint:
  enabled: true
name: # Define cluster name

#
# Rancher Config
#
rancher_kubernetes_engine_config:
  addon_job_timeout: 45
  authentication:
    strategy: x509|webhook
  kubernetes_version: # Define RKE version
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

## Conclusion

If you have followed this guide, your RKE custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our RKE self-assessment guides to understand how we verified each of the benchmarks and how you can do the same on your cluster.
