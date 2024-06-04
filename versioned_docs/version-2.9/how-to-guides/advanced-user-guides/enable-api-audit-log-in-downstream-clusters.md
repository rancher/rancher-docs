---
title: Enabling the API Audit Log in Downstream Clusters 
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-api-audit-log-in-downstream-clusters"/>
</head> 

Kubernetes auditing provides a security-relevant chronological set of records about a cluster. Kube-apiserver performs auditing. Requests generate an event at each stage of its execution, which is then preprocessed according to a certain policy and written to a backend. The policy determines what’s recorded and the backend persists the records.

You might want to configure the audit log as part of compliance with the Center for Internet Security (CIS) Kubernetes Benchmark controls.

For configuration details, refer to the [official Kubernetes documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/).


<Tabs groupId="k8s-distro">
<TabItem value="RKE2" default>

### Method 1 (Recommended): Set `audit-policy-file` in `machineGlobalConfig`

You can set `audit-policy-file` in the configuration file. Rancher delivers the file to the path `/var/lib/rancher/rke2/etc/config-files/audit-policy-file` in control plane nodes, and sets the proper options in the RKE2 server.

Example:
```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  rkeConfig:
    machineGlobalConfig:
      audit-policy-file: |
        apiVersion: audit.k8s.io/v1
        kind: Policy
        rules:
          - level: RequestResponse
            resources:
              - group: ""
                resources:
                  - pods
```

### Method 2: Use the Directives, `machineSelectorFiles` and `machineGlobalConfig`

:::note

This feature is available in Rancher v2.7.2 and later.

:::

You can use `machineSelectorFiles` to deliver the audit policy file to the control plane nodes, and `machineGlobalConfig` to set the options on kube-apiserver.

As a prerequisite, you must create a [secret](../new-user-guides/kubernetes-resources-setup/secrets.md) or [configmap](../new-user-guides/kubernetes-resources-setup/configmaps.md) to be the source of the audit policy.

The secret or configmap must meet the following requirements:

1. It must be in the `fleet-default` namespace where the Cluster object exists.
2. It must have the annotation `rke.cattle.io/object-authorized-for-clusters: <cluster-name1>,<cluster-name2>` which permits the target clusters to use it.

:::tip

Rancher Dashboard provides an easy-to-use form for creating the secret or configmap.

:::

Example:

```yaml
apiVersion: v1
data:
  audit-policy: >-
    IyBMb2cgYWxsIHJlcXVlc3RzIGF0IHRoZSBNZXRhZGF0YSBsZXZlbC4KYXBpVmVyc2lvbjogYXVkaXQuazhzLmlvL3YxCmtpbmQ6IFBvbGljeQpydWxlczoKLSBsZXZlbDogTWV0YWRhdGE=
kind: Secret
metadata:
  annotations:
    rke.cattle.io/object-authorized-for-clusters: cluster1
  name: <name1>
  namespace: fleet-default
```

Enable and configure the audit log by editing the cluster in YAML, and utilizing the `machineSelectorFiles` and `machineGlobalConfig` directives.

Example:

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - audit-policy-file=<customized-path>/dev-audit-policy.yaml
        - audit-log-path=<customized-path>/dev-audit.logs
    machineSelectorFiles:
      - fileSources:
          - configMap:
              name: ''
            secret:
              items:
                - key: audit-policy
                  path: <customized-path>/dev-audit-policy.yaml
              name: dev-audit-policy
        machineLabelSelector:
          matchLabels:
            rke.cattle.io/control-plane-role: 'true'
```

:::tip

You can also use the directive `machineSelectorConfig` with proper machineLabelSelectors to achieve the same effect.

:::

For more information about cluster configuration, refer to the [RKE2 cluster configuration reference](../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md) pages.

</TabItem>

<TabItem value="K3s">

:::note

This feature is available in Rancher v2.7.2 and later.

:::

You can use `machineSelectorFiles` to deliver the audit policy file to the control plane nodes, and `machineGlobalConfig` to set the options on kube-apiserver.

As a prerequisite, you must create a [secret](../new-user-guides/kubernetes-resources-setup/secrets.md) or [configmap](../new-user-guides/kubernetes-resources-setup/configmaps.md) to be the source of the audit policy.

The secret or configmap must meet the following requirements:

1. It must be in the `fleet-default` namespace where the Cluster object exists.
2. It must have the annotation `rke.cattle.io/object-authorized-for-clusters: <cluster-name1>,<cluster-name2>` which permits the target clusters to use it.

:::tip

Rancher Dashboard provides an easy-to-use form for creating the [secret](../new-user-guides/kubernetes-resources-setup/secrets.md) or [configmap](../new-user-guides/kubernetes-resources-setup/configmaps.md).

:::

Example:

```yaml
apiVersion: v1
data:
  audit-policy: >-
    IyBMb2cgYWxsIHJlcXVlc3RzIGF0IHRoZSBNZXRhZGF0YSBsZXZlbC4KYXBpVmVyc2lvbjogYXVkaXQuazhzLmlvL3YxCmtpbmQ6IFBvbGljeQpydWxlczoKLSBsZXZlbDogTWV0YWRhdGE=
kind: Secret
metadata:
  annotations:
    rke.cattle.io/object-authorized-for-clusters: cluster1
  name: <name1>
  namespace: fleet-default
```

Enable and configure the audit log by editing the cluster in YAML, and utilizing the `machineSelectorFiles` and `machineGlobalConfig` directives.

Example:

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  rkeConfig:
    machineGlobalConfig:
      kube-apiserver-arg:
        - audit-policy-file=<customized-path>/dev-audit-policy.yaml
        - audit-log-path=<customized-path>/dev-audit.logs
    machineSelectorFiles:
      - fileSources:
          - configMap:
              name: ''
            secret:
              items:
                - key: audit-policy
                  path: <customized-path>/dev-audit-policy.yaml
              name: dev-audit-policy
        machineLabelSelector:
          matchLabels:
            rke.cattle.io/control-plane-role: 'true'
```

:::tip

You can also use the directive `machineSelectorConfig` with proper machineLabelSelectors to achieve the same effect.

:::

For more information about cluster configuration, refer to the [K3s cluster configuration reference](../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) pages.

</TabItem>

<TabItem value="RKE1">

The audit log can be enabled and configured by editing the cluster with YAML.

When the audit log is enabled, RKE1 default values will be applied.

```yaml
# 
# Rancher Config
# 
rancher_kubernetes_engine_config:
  services:
    kube-api:
      audit_log:
        enabled: true
```

You can customize the audit log by using the configuration directive.

```yaml
# 
# Rancher Config
# 
rancher_kubernetes_engine_config:
  services:
    kube-api:
      audit_log:
        enabled: true
        configuration:
          max_age: 6
          max_backup: 6
          max_size: 110
          path: /var/log/kube-audit/audit-log.json
          format: json
          policy:
            apiVersion: audit.k8s.io/v1 # This is required.
            kind: Policy
            omitStages:
              - "RequestReceived"
            rules:
              # Log pod changes at RequestResponse level
              - level: RequestResponse
                resources:
                  - group: ""
                    # Resource "pods" doesn't match requests to any subresource of pods,
                    # which is consistent with the RBAC policy.
                    resources: ["pods"]
              # Log "pods/log", "pods/status" at Metadata level
              - level: Metadata
                resources:
                  - group: ""
                    resources: ["pods/log", "pods/status"]
```

For configuration details, refer to the official [RKE1 documentation](https://rke.docs.rancher.com/config-options/audit-log).

</TabItem>
</Tabs>

