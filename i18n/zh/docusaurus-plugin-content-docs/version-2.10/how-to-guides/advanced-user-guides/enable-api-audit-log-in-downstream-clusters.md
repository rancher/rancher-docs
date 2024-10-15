---
title: 下游集群开启 API 审计日志
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/advanced-user-guides/enable-api-audit-log-in-downstream-clusters"/>
</head>

Kubernetes 审计提供了由 Kube-apiserver 执行的与安全相关的、按时间顺序排列的集群审计记录。Kube API 会在请求执行的每个阶段都生成一个事件，然后根据策略进行预处理并保存，审计策略配置了要记录的内容。

你可能希望将审计日志配置为遵守互联网安全中心 (CIS) Kubernetes 基准控制的一部分。

有关配置的详细信息，请参阅 [Kubernetes 官方文档](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)。

<Tabs groupId="k8s-distro">
<TabItem value="RKE2" default>

### 方法1（建议）：设置 `machineGlobalConfig` 字段的 `audit-policy-file`

你可以在配置文件中设置 `audit-policy-file`，Rancher 会将该文件保存在 Control Plane 节点的 `/var/lib/rancher/rke2/etc/config-files/audit-policy-file` 目录中，并在 RKE2 服务器中配置相应的选项。

例子：
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

### 方法2：直接使用 `machineSelectorFiles` 和 `machineGlobalConfig` 配置

:::note

Rancher v2.7.2 及以上版本提供此功能。

:::

你可以使用 `machineSelectorFiles` 将审计策略文件传递到 Control Plane 节点，并使用 `machineGlobalConfig` 设置 kube-apiserver 的选项。

在此之前，你需要创建 [Secret](../new-user-guides/kubernetes-resources-setup/secrets.md) 或 [ConfigMap](../new-user-guides/kubernetes-resources-setup/configmaps.md) 作为审计策略的来源。

Secret 或 ConfigMap 必须满足以下要求：

1. 必须位于 Cluster 对象所在的 `fleet-default` 命名空间中。
2. 它必须含有 Annotation `rke.cattle.io/object-authorized-for-clusters: <cluster-name1>,<cluster-name2>`，以允许目标集群使用它。

:::tip

Rancher Dashboard 提供了易用的表单页面用于创建 Secret 或 ConfigMap。

:::

例子：

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

可以通过编辑集群 YAML 的 `machineSelectorFiles` 和 `machineGlobalConfig` 字段来启用和配置审计日志。

例子：

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

你还可以使用指令 `machineSelectorConfig` 和适当的 `machineLabelSelectors` 来达到相同的效果。

:::

有关集群配置的更多信息，请参阅 [RKE2 集群配置参考](../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md)页面。

</TabItem>

<TabItem value="K3s">

:::note

Rancher v2.7.2 及以上版本提供此功能。

:::

你可以使用 `machineSelectorFiles` 将审计策略文件传递到 Control Plane 节点，并使用 `machineGlobalConfig` 设置 kube-apiserver 的选项。

在此之前，你需要创建 [Secret](../new-user-guides/kubernetes-resources-setup/secrets.md) 或 [ConfigMap](../new-user-guides/kubernetes-resources-setup/configmaps.md) 作为审计策略的来源。

Secret 或 ConfigMap 必须满足以下要求：

1. 必须位于 Cluster 对象所在的 `fleet-default` 命名空间中。
2. 它必须含有 Annotation `rke.cattle.io/object-authorized-for-clusters: <cluster-name1>,<cluster-name2>`，以允许目标集群使用它。

:::tip

Rancher Dashboard 提供了易于使用的表单页面用于创建 [Secret](../new-user-guides/kubernetes-resources-setup/secrets.md) 或 [ConfigMap](../new-user-guides/kubernetes-resources-setup/configmaps.md)。

:::

例子：

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

可以通过编辑集群 YAML 的 `machineSelectorFiles` 和 `machineGlobalConfig` 字段来启用和配置审计日志。

例子：

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

你还可以使用指令 `machineSelectorConfig` 和适当的 `machineLabelSelectors` 来达到相同的效果。

:::

有关集群配置的更多信息，请参阅 [K3s 集群配置参考](../../reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md) 页面。

</TabItem>

<TabItem value="RKE1">

可通过编辑集群 YAML 来启用和配置审计日志。

在启用审计日志后，将使用 RKE1 的默认值。

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

你还可以自定义审计日志配置。

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
            apiVersion: audit.k8s.io/v1 # 这里必须填写
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

配置详情请参考 [RKE1 官方文档](https://rke.docs.rancher.com/config-options/audit-log)。

</TabItem>
</Tabs>
