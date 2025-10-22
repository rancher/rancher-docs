---
title: 设置 Amazon 云提供商
weight: 1
---

使用 `Amazon` 云提供商时，你可以利用以下功能：

- **负载均衡器**：在 **Port Mapping** 中选择 `Layer-4 Load Balancer` 或使用 `type: LoadBalancer` 启动 `Service` 时，启动 AWS 弹性负载均衡器 (ELB)。
- **持久卷**：允许你将 AWS 弹性块存储 (EBS) 用于持久卷。

有关 Amazon 云提供商的所有信息，请参阅 [cloud-provider-aws 自述文件](https://kubernetes.github.io/cloud-provider-aws/)。

要设置 Amazon 云提供商：

1. [创建一个 IAM 角色并附加到实例](#1-创建-iam-角色并附加到实例)
2. [配置 ClusterID](#2-创建-clusterid)

:::note 重要提示：

从 Kubernetes 1.23 开始，你必须停用 `CSIMigrationAWS` 特性开关才能使用树内 AWS 云提供商。为此，你可以在高级集群配置中将 `feature-gates=CSIMigrationAWS=false` 设置为集群 Kubelet、Controller Manager、API Server 和 Scheduler 的附加参数。

:::

## 1. 创建 IAM 角色并附加到实例

添加到集群的所有节点都必须能够与 EC2 交互，以便它们可以创建和删除资源。你可以使用附加到实例的 IAM 角色来启用交互。请参阅 [Amazon 文档：创建 IAM 角色](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#create-iam-role) 来创建 IAM 角色。有两个示例策略：

* 第一个策略适用于具有 `controlplane` 角色的节点。这些节点必须能够创建/删除 EC2 资源。以下 IAM 策略是一个示例，请根据你的实际用例移除不需要的权限。
* 第二个策略适用于具有 `etcd` 或 `worker` 角色的节点。这些节点只需能够从 EC2 检索信息。

在创建 [Amazon EC2 集群](../../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md)时，你必须在创建**节点模板**时填写创建的 IAM 角色的 **IAM Instance Profile Name**（不是 ARN）。

创建[自定义集群](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md)时，你必须手动将 IAM 角色附加到实例。

具有 `controlplane` 角色的节点的 IAM 策略：

```json
{
"Version": "2012-10-17",
"Statement": [
  {
    "Effect": "Allow",
    "Action": [
      "autoscaling:DescribeAutoScalingGroups",
      "autoscaling:DescribeLaunchConfigurations",
      "autoscaling:DescribeTags",
      "ec2:DescribeInstances",
      "ec2:DescribeRegions",
      "ec2:DescribeRouteTables",
      "ec2:DescribeSecurityGroups",
      "ec2:DescribeSubnets",
      "ec2:DescribeVolumes",
      "ec2:CreateSecurityGroup",
      "ec2:CreateTags",
      "ec2:CreateVolume",
      "ec2:ModifyInstanceAttribute",
      "ec2:ModifyVolume",
      "ec2:AttachVolume",
      "ec2:AuthorizeSecurityGroupIngress",
      "ec2:CreateRoute",
      "ec2:DeleteRoute",
      "ec2:DeleteSecurityGroup",
      "ec2:DeleteVolume",
      "ec2:DetachVolume",
      "ec2:RevokeSecurityGroupIngress",
      "ec2:DescribeVpcs",
      "elasticloadbalancing:AddTags",
      "elasticloadbalancing:AttachLoadBalancerToSubnets",
      "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
      "elasticloadbalancing:CreateLoadBalancer",
      "elasticloadbalancing:CreateLoadBalancerPolicy",
      "elasticloadbalancing:CreateLoadBalancerListeners",
      "elasticloadbalancing:ConfigureHealthCheck",
      "elasticloadbalancing:DeleteLoadBalancer",
      "elasticloadbalancing:DeleteLoadBalancerListeners",
      "elasticloadbalancing:DescribeLoadBalancers",
      "elasticloadbalancing:DescribeLoadBalancerAttributes",
      "elasticloadbalancing:DetachLoadBalancerFromSubnets",
      "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
      "elasticloadbalancing:ModifyLoadBalancerAttributes",
      "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
      "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",
      "elasticloadbalancing:AddTags",
      "elasticloadbalancing:CreateListener",
      "elasticloadbalancing:CreateTargetGroup",
      "elasticloadbalancing:DeleteListener",
      "elasticloadbalancing:DeleteTargetGroup",
      "elasticloadbalancing:DescribeListeners",
      "elasticloadbalancing:DescribeLoadBalancerPolicies",
      "elasticloadbalancing:DescribeTargetGroups",
      "elasticloadbalancing:DescribeTargetHealth",
      "elasticloadbalancing:ModifyListener",
      "elasticloadbalancing:ModifyTargetGroup",
      "elasticloadbalancing:RegisterTargets",
      "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",
      "iam:CreateServiceLinkedRole",
      "kms:DescribeKey"
    ],
    "Resource": [
      "*"
    ]
  }
]
}
```

具有 `etcd` 或 `worker` 角色的节点的 IAM 策略：

```json
{
"Version": "2012-10-17",
"Statement": [
    {
        "Effect": "Allow",
        "Action": [
            "ec2:DescribeInstances",
            "ec2:DescribeRegions",
            "ecr:GetAuthorizationToken",
            "ecr:BatchCheckLayerAvailability",
            "ecr:GetDownloadUrlForLayer",
            "ecr:GetRepositoryPolicy",
            "ecr:DescribeRepositories",
            "ecr:ListImages",
            "ecr:BatchGetImage"
        ],
        "Resource": "*"
    }
]
}
```

## 2. 创建 ClusterID

以下资源需要使用 `ClusterID` 进行标记：

- **Nodes**：Rancher 中添加的所有主机。
- **Subnet**：集群使用的子网。
- **Security Group**：用于你的集群的安全组。

:::note

不要标记多个安全组。创建弹性负载均衡器 (ELB) 时，标记多个组会产生错误。

:::

创建 [Amazon EC2 集群](../../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md)时，会自动为创建的节点配置 `ClusterID`。其他资源仍然需要手动标记。

使用以下标签：

**Key** = `kubernetes.io/cluster/CLUSTERID` **Value** = `owned`

`CLUSTERID` 可以是任何字符串，只要它在所有标签集中相同即可。

将标签的值设置为 `owned` 会通知集群带有该标签的所有资源都由该集群拥有和管理。如果你在集群之间共享资源，你可以将标签更改为：

**Key** = `kubernetes.io/cluster/CLUSTERID` **Value** = `shared`.

## 使用 Amazon Elastic Container Registry (ECR)

在将[创建 IAM 角色并附加到实例](#1-创建-iam-角色并附加到实例)中的 IAM 配置文件附加到实例时，kubelet 组件能够自动获取 ECR 凭证。使用低于 v1.15.0 的 Kubernetes 版本时，需要在集群中配置 Amazon 云提供商。从 Kubernetes 版本 v1.15.0 开始，kubelet 无需在集群中配置 Amazon 云提供商即可获取 ECR 凭证。

### Using the Out-of-Tree AWS Cloud Provider

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

1. [Node name conventions and other prerequisites](https://cloud-provider-aws.sigs.k8s.io/prerequisites/) must be followed for the cloud provider to find the instance correctly.

2. Rancher managed RKE2/K3s clusters don't support configuring `providerID`. However, the engine will set the node name correctly if the following configuration is set on the provisioning cluster object:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: aws
```

This option will be passed to the configuration of the various Kubernetes components that run on the node, and must be overridden per component to prevent the in-tree provider from running unintentionally:


**Override on Etcd:**

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - cloud-provider=external
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/etcd-role
              operator: In
              values:
                - 'true'
```

**Override on Control Plane:**

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
        disable-cloud-controller: true
        kube-apiserver-arg:
          - cloud-provider=external
        kube-controller-manager-arg:
          - cloud-provider=external
        kubelet-arg:
          - cloud-provider=external
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/control-plane-role
              operator: In
              values:
                - 'true'
```

**Override on Worker:**

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - cloud-provider=external
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/worker-role
              operator: In
              values:
                - 'true'
```

2. Select `Amazon` if relying on the above mechanism to set the provider ID. Otherwise, select **External (out-of-tree)** cloud provider, which sets `--cloud-provider=external` for Kubernetes components.

3. Specify the `aws-cloud-controller-manager` Helm chart as an additional manifest to install:

```yaml
spec:
  rkeConfig:
    additionalManifest: |-
      apiVersion: helm.cattle.io/v1
      kind: HelmChart
      metadata:
        name: aws-cloud-controller-manager
        namespace: kube-system
      spec:
        chart: aws-cloud-controller-manager
        repo: https://kubernetes.github.io/cloud-provider-aws
        targetNamespace: kube-system
        bootstrap: true
        valuesContent: |-
          hostNetworking: true
          nodeSelector:
            node-role.kubernetes.io/control-plane: "true"
          args:
            - --configure-cloud-routes=false
            - --v=5
            - --cloud-provider=aws
```

</TabItem>

<TabItem value="RKE">

1. [Node name conventions and other prerequisites ](https://cloud-provider-aws.sigs.k8s.io/prerequisites/) must be followed so that the cloud provider can find the instance. Rancher provisioned clusters don't support configuring `providerID`. 

:::note

If you use IP-based naming, the nodes must be named after the instance followed by the regional domain name (`ip-xxx-xxx-xxx-xxx.ec2.<region>.internal`). If you have a custom domain name set in the DHCP options, you must set `--hostname-override` on `kube-proxy` and `kubelet` to match this naming convention.

:::

To meet node naming conventions, Rancher allows setting `useInstanceMetadataHostname` when the `External Amazon` cloud provider is selected. Enabling `useInstanceMetadataHostname` will query ec2 metadata service and set `/hostname` as `hostname-override` for `kubelet` and `kube-proxy`:

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true
```

You must not enable `useInstanceMetadataHostname` when setting custom values for `hostname-override` for custom clusters. When you create a [custom cluster](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md), add [`--node-name`](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md) to the `docker run` node registration command to set `hostname-override` — for example, `"$(hostname -f)"`. This can be done manually or by using **Show Advanced Options** in the Rancher UI to add **Node Name**.

2. Select the cloud provider. 

Selecting **External Amazon (out-of-tree)** sets `--cloud-provider=external` and enables `useInstanceMetadataHostname`. As mentioned in step 1, enabling `useInstanceMetadataHostname` will query the EC2 metadata service and set `http://169.254.169.254/latest/meta-data/hostname` as `hostname-override` for `kubelet` and `kube-proxy`.

:::note

You must disable `useInstanceMetadataHostname` when setting a custom node name for custom clusters via `node-name`.

::: 

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

Existing clusters that use an **External** cloud provider will set `--cloud-provider=external` for Kubernetes components but won't set the node name.

3. Install the AWS cloud controller manager after the cluster finishes provisioning. Note that the cluster isn't successfully provisioned and nodes are still in an `uninitialized` state until you deploy the cloud controller manager. This can be done manually, or via [Helm charts in UI](#helm-chart-installation-from-ui).

Refer to the offical AWS upstream documentation for the [cloud controller manager](https://kubernetes.github.io/cloud-provider-aws).

</TabItem>
</Tabs>

### Helm Chart Installation from CLI

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

Official upstream docs for [Helm chart installation](https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager) can be found on GitHub.

1. Add the Helm repository:

```shell
helm repo add aws-cloud-controller-manager https://kubernetes.github.io/cloud-provider-aws
helm repo update
```

2. Create a `values.yaml` file with the following contents to override the default `values.yaml`:

```yaml
# values.yaml
hostNetworking: true
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/control-plane
nodeSelector:
  node-role.kubernetes.io/control-plane: 'true'
args:
  - --configure-cloud-routes=false
  - --use-service-account-credentials=true
  - --v=2
  - --cloud-provider=aws
clusterRoleRules:
  - apiGroups:
      - ""
    resources:
      - events
    verbs:
      - create
      - patch
      - update
  - apiGroups:
      - ""
    resources:
      - nodes
    verbs:
      - '*'
  - apiGroups:
      - ""
    resources:
      - nodes/status
    verbs:
      - patch
  - apiGroups:
      - ""
    resources:
      - services
    verbs:
      - list
      - patch
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - services/status
    verbs:
      - list
      - patch
      - update
      - watch
  - apiGroups:
     - ''
    resources:
      - serviceaccounts
    verbs:
    - create
    - get
  - apiGroups:
      - ""
    resources:
      - persistentvolumes
    verbs:
      - get
      - list
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - endpoints
    verbs:
      - create
      - get
      - list
      - watch
      - update
  - apiGroups:
      - coordination.k8s.io
    resources:
      - leases
    verbs:
      - create
      - get
      - list
      - watch
      - update
  - apiGroups:
      - ""
    resources:
      - serviceaccounts/token
    verbs:
      - create
```

3. Install the Helm chart:

```shell
helm upgrade --install aws-cloud-controller-manager aws-cloud-controller-manager/aws-cloud-controller-manager --values values.yaml
```

Verify that the Helm chart installed successfully:

```shell
helm status -n kube-system aws-cloud-controller-manager
```

4. (Optional) Verify that the cloud controller manager update succeeded:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

</TabItem>

<TabItem value="RKE">

Official upstream docs for [Helm chart installation](https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager) can be found on GitHub.

1. Add the Helm repository:

```shell
helm repo add aws-cloud-controller-manager https://kubernetes.github.io/cloud-provider-aws
helm repo update
```

2. Create a `values.yaml` file with the following contents, to override the default `values.yaml`:

```yaml
# values.yaml
hostNetworking: true
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/controlplane
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
args:
  - --configure-cloud-routes=false
  - --use-service-account-credentials=true
  - --v=2
  - --cloud-provider=aws
clusterRoleRules:
  - apiGroups:
      - ""
    resources:
      - events
    verbs:
      - create
      - patch
      - update
  - apiGroups:
      - ""
    resources:
      - nodes
    verbs:
      - '*'
  - apiGroups:
      - ""
    resources:
      - nodes/status
    verbs:
      - patch
  - apiGroups:
      - ""
    resources:
      - services
    verbs:
      - list
      - patch
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - services/status
    verbs:
      - list
      - patch
      - update
      - watch
  - apiGroups:
     - ''
    resources:
      - serviceaccounts
    verbs:
    - create
    - get
  - apiGroups:
      - ""
    resources:
      - persistentvolumes
    verbs:
      - get
      - list
      - update
      - watch
  - apiGroups:
      - ""
    resources:
      - endpoints
    verbs:
      - create
      - get
      - list
      - watch
      - update
  - apiGroups:
      - coordination.k8s.io
    resources:
      - leases
    verbs:
      - create
      - get
      - list
      - watch
      - update
  - apiGroups:
      - ""
    resources:
      - serviceaccounts/token
    verbs:
      - create
```

3. Install the Helm chart:

```shell
helm upgrade --install aws-cloud-controller-manager -n kube-system aws-cloud-controller-manager/aws-cloud-controller-manager --values values.yaml
```

Verify that the Helm chart installed successfully:

```shell
helm status -n kube-system aws-cloud-controller-manager
```

4. If present, edit the Daemonset to remove the default node selector `node-role.kubernetes.io/control-plane: ""`:

```shell
kubectl edit daemonset aws-cloud-controller-manager -n kube-system
```

5. (Optional) Verify that the cloud controller manager update succeeded:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

</TabItem>
</Tabs>

### Helm Chart Installation from UI

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

1. Click **☰**, then select the name of the cluster from the left navigation.

2. Select **Apps** > **Repositories**.

3. Click the **Create** button.

4. Enter `https://kubernetes.github.io/cloud-provider-aws` in the **Index URL** field.

5. Select **Apps** > **Charts** from the left navigation and install **aws-cloud-controller-manager**.

6. Select the namespace, `kube-system`, and enable **Customize Helm options before install**.

7. Add the following container arguments: 

```yaml
  - '--use-service-account-credentials=true'
  - '--configure-cloud-routes=false'
```   

8. Add `get` to `verbs` for `serviceaccounts` resources in `clusterRoleRules`. This allows the cloud controller manager to get service accounts upon startup.

```yaml
  - apiGroups:
      - ''
    resources:
      - serviceaccounts
    verbs:
      - create
      - get
```

9. Rancher-provisioned RKE2 nodes are tainted `node-role.kubernetes.io/control-plane`. Update tolerations and the nodeSelector:

```yaml
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/control-plane

```

```yaml
nodeSelector:
  node-role.kubernetes.io/control-plane: 'true'
```

:::note

There's currently a [known issue](https://github.com/rancher/dashboard/issues/9249) where nodeSelector can't be updated from the Rancher UI.  Continue installing the chart and then edit the Daemonset manually to set the `nodeSelector`:

```yaml
nodeSelector:
  node-role.kubernetes.io/control-plane: 'true'
```

:::

10. Install the chart and confirm that the Daemonset `aws-cloud-controller-manager` is running. Verify `aws-cloud-controller-manager` pods are running in target namespace (`kube-system` unless modified in step 6). 

</TabItem>

<TabItem value="RKE">

1. Click **☰**, then select the name of the cluster from the left navigation.

2. Select **Apps** > **Repositories**.

3. Click the **Create** button.

4. Enter `https://kubernetes.github.io/cloud-provider-aws` in the **Index URL** field.

5. Select **Apps** > **Charts** from the left navigation and install **aws-cloud-controller-manager**.

6. Select the namespace, `kube-system`, and enable **Customize Helm options before install**.

7. Add the following container arguments: 

```yaml
  - '--use-service-account-credentials=true'
  - '--configure-cloud-routes=false'
```   

8. Add `get` to `verbs` for `serviceaccounts` resources in `clusterRoleRules`. This allows the cloud controller manager to get service accounts upon startup:

```yaml
  - apiGroups:
      - ''
    resources:
      - serviceaccounts
    verbs:
      - create
      - get
```

9. Rancher-provisioned RKE nodes are tainted `node-role.kubernetes.io/controlplane`. Update tolerations and the nodeSelector:

```yaml
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/controlplane

```

```yaml
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
```

:::note

There's currently a [known issue](https://github.com/rancher/dashboard/issues/9249) where `nodeSelector` can't be updated from the Rancher UI.  Continue installing the chart and then Daemonset manually to set the `nodeSelector`:

``` yaml 
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
```

:::

10. Install the chart and confirm that the Daemonset `aws-cloud-controller-manager` deploys successfully:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

</TabItem>
</Tabs>
