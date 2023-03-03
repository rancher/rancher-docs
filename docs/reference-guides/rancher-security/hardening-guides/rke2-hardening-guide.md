---
title: RKE2 Hardening Guide
---

This document provides prescriptive guidance for how to harden an RKE2 cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls.

:::note
This hardening guide describes how to secure the nodes in your cluster. We recommended that you follow this guide before you install Kubernetes.
:::

This hardening guide is intended to be used for RKE2 clusters and associated with the following versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:

| Rancher Version | CIS Benchmark Version | Kubernetes Version           |
|-----------------|-----------------------|------------------------------|
| Rancher v2.7    | Benchmark v1.23       | Kubernetes v1.22 up to v1.25 |

For more details on how to evaluate a hardened RKE2 cluster against the official CIS benchmark, refer to the RKE2 self-assessment guides for specific CIS benchmark versions.

RKE2 passes a number of the Kubernetes CIS controls without modification, as it applies several security mitigations by default. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:

1. RKE2 will not modify the host operating system. Therefore, you, the operator, must make a few host-level modifications. 
2. Certain CIS controls for Network Policies and Pod Security Standards (or Pod Security Policies (PSP) on RKE2 versions prior to v1.25) will restrict the functionality of the cluster. You must opt into having RKE2 configure these for you. To help ensure these requirements are met, RKE2 can be started with the profile flag set to `cis-1.5`, `cis-1.6`, or `cis-1.23`.

## Host-level requirements

There are two areas of host-level requirements: kernel parameters and etcd process/directory configuration. These are outlined in this section.

### Set kernel parameters

The following `sysctl` configuration is recommended for all nodes type in the cluster. Set the following parameters in `/etc/sysctl.d/90-kubelet.conf`:

```ini
vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
```

Run `sudo sysctl -p /etc/sysctl.d/90-kubelet.conf` to enable the settings.

### Ensure etcd is configured properly

The CIS Benchmark requires that the etcd data directory be owned by the `etcd` user and group. This implicitly requires the etcd process run as the host-level `etcd` user. To achieve this, RKE2 takes several steps when started with a valid `cis-1.xx` profile:

1. Check that the `etcd` user and group exists on the host. If they don't, exit with an error.
2. Create etcd's data directory with `etcd` as the user and group owner.
3. Ensure the etcd process is ran as the `etcd` user and group by setting the etcd static pod's `SecurityContext` appropriately.

To meet the above requirements, you must:

#### Create the etcd user

On some Linux distributions, the `useradd` command will not create a group. The `-U` flag is included below to account for that. This flag tells `useradd` to create a group with the same name as the user.

```bash
sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U
```

## Kubernetes runtime requirements

### Ensure `protect-kernel-defaults` is set

This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults.

Both `protect-kernel-defaults` and `profile` flags can be set in the RKE2 template configuration file.
When the `profile` flag is set, RKE2 will set the flag to `true` if it is unset.

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.23
          protect-kernel-defaults: true
```

The runtime requirements to pass the CIS Benchmark are centered around pod security and network policies. Most of this is automatically handled by RKE2 when using a valid `cis-1.XX` profile, but some additional operator intervention is required. These are outlined in this section.

### PodSecurity 

RKE2 always runs with some amount of pod security.

<Tabs groupId="rke2-version">
<TabItem value='v1.25 and Newer' default>

On v1.25 and newer, [Pod Security Admission (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) are used for pod security.

Below is the minimum necessary configuration needed for hardening RKE2 to pass CIS v1.23 hardened profile `rke2-cis-1.23-profile-hardened` available in Rancher.

```yaml
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.23
          protect-kernel-defaults: true
```

When both the `defaultPodSecurityAdmissionConfigurationTemplateName` and `profile` flags are set, Rancher and RKE2 does the following:

1. Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements.
2. Applies network policies that allow the cluster to pass associated controls.
3. Configures the Pod Security Admission Controller with the Pod Security Admission Configuration Template (PSACT) `rancher-restricted`, to enforce restricted mode in all namespaces, except the ones in the PSACT's exemption list.
   These namespaces are exempted to allow system pods to run without restrictions, which is required for proper operation of the cluster.

</TabItem>

<TabItem value='v1.22 up to v1.24'>

On Kubernetes v1.22 to v1.24, the `PodSecurityPolicy` admission controller is always enabled.

Below is the minimum necessary configuration needed for hardening RKE2 to pass CIS v1.23 hardened profile `rke2-cis-1.23-profile-hardened` available in Rancher.

:::note
In the following example the profile is set to `cis-1.6` which is the value defined in the upstream RKE2, but the cluster is actually configured to pass the CIS v1.23 hardened profile
:::

```yaml
spec:
  defaultPodSecurityPolicyTemplateName: restricted-noroot
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
```


When both the `defaultPodSecurityPolicyTemplateName` and `profile` flags are set, Rancher and RKE2 does the following:

1. Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements.
2. Applies network policies that allow the cluster to pass associated controls.
3. Configures runtime pod security policies that allow the cluster to pass associated controls.

</TabItem>
</Tabs>

:::note
The Kubernetes control plane components and critical additions such as CNI, DNS, and Ingress are ran as pods in the `kube-system` namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly.
:::

### NetworkPolicies

When ran with a valid `cis-1.XX` profile, RKE2 will put `NetworkPolicies` in place that passes the CIS Benchmark for Kubernetes' built-in namespaces. These namespaces are: `kube-system`, `kube-public`, `kube-node-lease`, and `default`.

The `NetworkPolicy` used will only allow pods within the same namespace to talk to each other. The notable exception to this is that it allows DNS requests to be resolved.

:::caution Operator Intervention Required
Operators must manage network policies as normal for additional namespaces that are created.
:::

### Configure `default` service account

**Set `automountServiceAccountToken` to `false` for `default` service accounts**

Kubernetes provides a `default` service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account. The `default` service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments.

For each namespace including `default` and `kube-system` on a standard RKE2 install, the `default` service account must include this value:

```yaml
automountServiceAccountToken: false
```

For namespaces created by the cluster operator, the following script and configuration file can be used to configure the `default` service account.

The configuration bellow must be saved to a file called `account_update.yaml`.

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

Execute this script to apply the `account_update.yaml` configuration to `default` service account in all namespaces.

### API Server audit configuration

CIS requirements 1.2.19 to 1.2.22 are related to configuring audit logs for the API Server. When RKE2 is started with the `profile` flag set, it will automatically configure hardened `--audit-log-` parameters in the API Server to pass those CIS checks.

RKE2's default audit policy is configured to not log requests in the API Server. This is done to allow cluster operators flexibility to customize an audit policy that suits their auditing requirements and needs, as these are specific to each users' environment and policies.

A default audit policy is created by RKE2 when started with the `profile` flag set. The policy is defined in `/etc/rancher/rke2/audit-policy.yaml`.

```yaml
apiVersion: audit.k8s.io/v1
kind: Policy
metadata:
  creationTimestamp: null
rules:
- level: None
```

## Known issues

The following are controls that RKE2 currently does not pass. Each gap will be explained and whether it can be passed through manual operator intervention or if it will be addressed in a future release.

<Tabs groupId="rke2-version">
<TabItem value='v1.25 and Newer' default>

#### CIS v1.23 - Control  5.2.2 - Minimize the admission of privileged containers (Manual)
#### CIS v1.23 - Control  5.2.8 - Minimize the admission of containers with the NET_RAW capability (Automated)

**Rationale**

The benchmark scanner expects to see a PodSecurityPolicy resource named `global-restricted-psp` in the cluster. However, the PodSecurityPolicy resource Rancher creates is named `restricted-noroot-psp`.

**Remediation**

Create a PodSecurityPolicy resource named `global-restricted-psp` by cloning `restricted-noroot-psp`.

</TabItem>
<TabItem value='v1.22 up to v1.24'>

#### CIS v1.23 - Control  5.2.2 - Minimize the admission of privileged containers (Manual)
#### CIS v1.23 - Control  5.2.3 - Minimize the admission of containers wishing to share the host process ID namespace (Automated)
#### CIS v1.23 - Control  5.2.5 - Minimize the admission of containers wishing to share the host network namespace (Automated)
#### CIS v1.23 - Control  5.2.6 - Minimize the admission of containers with allowPrivilegeEscalation (Automated)
#### CIS v1.23 - Control  5.2.7 - Minimize the admission of root containers (Automated)
#### CIS v1.23 - Control  5.2.8 - Minimize the admission of containers with the NET_RAW capability (Automated)

**Rationale**

Those controls are defined to evaluate certain PodSecurityPolicy resources in the benchmark, but the PodSecurityPolicy API is removed starting in Kubernetes v1.25, therefore those controls fail in the scan.

**Remediation**

Pod Security Admission is configured by setting the Pod Security Admission Configuration Template (PSACT) `rancher-restricted` in the cluster to enforce the restriction on applicable namespaces.
Due to the lack of utilizing PSA in the current version of the benchmark, the above controls will not be addressed until an updated version of the benchmark is available.

</TabItem>
</Tabs>

## Reference Hardened RKE2 Template Configuration

The reference template configuration is used in Rancher to create a hardened RKE2 custom cluster. This reference does not include other required **cluster configuration** directives which will vary depending on your environment.


<Tabs groupId="rke2-version">
<TabItem value='v1.25 and Newer' default>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: rke2-125-new
  namespace: fleet-default
spec:
  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted
  kubernetesVersion: v1.25.6+rke2r1
  rkeConfig:
    etcd:
      disableSnapshots: false
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
    machineSelectorConfig:
      - config:
          profile: cis-1.23
          protect-kernel-defaults: true
    upgradeStrategy:
      controlPlaneConcurrency: '1'
      controlPlaneDrainOptions:
        deleteEmptyDirData: true
        disableEviction: false
        enabled: false
        force: false
        gracePeriod: -1
        ignoreDaemonSets: true
        skipWaitForDeleteTimeoutSeconds: 0
        timeout: 120
      workerConcurrency: '1'
      workerDrainOptions:
        deleteEmptyDirData: true
        disableEviction: false
        enabled: false
        force: false
        gracePeriod: -1
        ignoreDaemonSets: true
        skipWaitForDeleteTimeoutSeconds: 0
        timeout: 120
```
</TabItem>

<TabItem value='v1.22 up to 1.24'>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: rke2-v124
  namespace: fleet-default
spec:
  defaultPodSecurityPolicyTemplateName: restricted-noroot
  kubernetesVersion: v1.24.10+rke2r1
  rkeConfig:
    etcd:
      disableSnapshots: false
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
    upgradeStrategy:
      controlPlaneConcurrency: '1'
      controlPlaneDrainOptions:
        deleteEmptyDirData: true
        disableEviction: false
        enabled: false
        force: false
        gracePeriod: -1
        ignoreDaemonSets: true
        skipWaitForDeleteTimeoutSeconds: 0
        timeout: 120
      workerConcurrency: '1'
      workerDrainOptions:
        deleteEmptyDirData: true
        disableEviction: false
        enabled: false
        force: false
        gracePeriod: -1
        ignoreDaemonSets: true
        skipWaitForDeleteTimeoutSeconds: 0
        timeout: 120
```

</TabItem>
</Tabs>

## Conclusion

If you have followed this guide, your RKE2 custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our RKE2 self-assessment guides to understand how we verified each of the benchmarks and how you can do the same on your cluster.
