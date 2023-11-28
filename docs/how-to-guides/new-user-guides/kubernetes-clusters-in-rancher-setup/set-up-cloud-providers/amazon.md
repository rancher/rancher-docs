---
title: Setting up the Amazon Cloud Provider
weight: 1
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon"/>
</head>

When you use Amazon as a cloud provider, you can leverage the following capabilities:

- **Load Balancers:** Launch an AWS Elastic Load Balancer (ELB) when you select `Layer-4 Load Balancer` in **Port Mapping** or when you launch a `Service` with `type: LoadBalancer`.
- **Persistent Volumes**: Use AWS Elastic Block Stores (EBS) for persistent volumes.

See the [cloud-provider-aws README](https://kubernetes.github.io/cloud-provider-aws/) for more information about the Amazon cloud provider.

To set up the Amazon cloud provider,

1. [Create an IAM role and attach to the instances](#1-create-an-iam-role-and-attach-to-the-instances)
2. [Configure the ClusterID](#2-configure-the-clusterid)

:::note Important:

In Kubernetes 1.27 and later, you must use an out-of-tree AWS cloud provider. In-tree cloud providers have been deprecated, and the amazon cloud provider has been removed completely, and won't work after an upgrade to Kubernetes 1.27. The steps listed below are still required to set up an Amazon cloud provider. You can [set up an out-of-tree cloud provider for RKE](#using-the-out-of-tree-aws-cloud-provider-for-rke) after creating an IAM role and configuring the ClusterID.

You can also [migrate from an in-tree to an out-of-tree AWS cloud provider](#migrating-to-the-out-of-tree-aws-cloud-provider-for-rke) on Kubernetes 1.26 and earlier. All existing clusters must migrate prior to upgrading to v1.27 in order to stay functional.

Starting with Kubernetes 1.23, you must deactivate the `CSIMigrationAWS` feature gate to use the in-tree AWS cloud provider. You can do this by setting `feature-gates=CSIMigrationAWS=false` as an additional argument for the cluster's Kubelet, Controller Manager, API Server and Scheduler in the advanced cluster configuration.

:::

### 1. Create an IAM Role and attach to the instances

All nodes added to the cluster must be able to interact with EC2 so that they can create and remove resources. You can enable this interaction by using an IAM role attached to the instance. See [Amazon documentation: Creating an IAM Role](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#create-iam-role) how to create an IAM role. There are two example policies:

* The first policy is for the nodes with the `controlplane` role. These nodes have to be able to create/remove EC2 resources. The following IAM policy is an example, please remove any unneeded permissions for your use case.
* The second policy is for the nodes with the `etcd` or `worker` role. These nodes only have to be able to retrieve information from EC2.

While creating an [Amazon EC2 cluster](../../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md), you must fill in the **IAM Instance Profile Name** (not ARN) of the created IAM role when creating the **Node Template**.

While creating a [Custom cluster](../../../../pages-for-subheaders/use-existing-nodes.md), you must manually attach the IAM role to the instance(s).

IAM Policy for nodes with the `controlplane` role:

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

IAM policy for nodes with the `etcd` or `worker` role:

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

### 2. Configure the ClusterID

The following resources need to tagged with a `ClusterID`:

- **Nodes**: All hosts added in Rancher.
- **Subnet**: The subnet used for your cluster.
- **Security Group**: The security group used for your cluster.

:::note

Do not tag multiple security groups. Tagging multiple groups generates an error when creating an Elastic Load Balancer (ELB).

:::

When you create an [Amazon EC2 Cluster](../../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md), the `ClusterID` is automatically configured for the created nodes. Other resources still need to be manually tagged.

Use the following tag:

**Key** = `kubernetes.io/cluster/<cluster-id>` **Value** = `owned`

Setting the value of the tag to `owned` tells the cluster that all resources with this tag are owned and managed by this cluster. 

If you share resources between clusters, you can change the tag to:

**Key** = `kubernetes.io/cluster/<cluster-id>` **Value** = `shared`.

The string value, `<cluster-id>`, is the Kubernetes cluster's ID. 

:::note

Do not tag a resource with multiple owned or shared tags.

:::

### Using Amazon Elastic Container Registry (ECR)

The kubelet component has the ability to automatically obtain ECR credentials, when the IAM profile mentioned in [Create an IAM Role and attach to the instances](#1-create-an-iam-role-and-attach-to-the-instances) is attached to the instance(s). When using a Kubernetes version older than v1.15.0, the Amazon cloud provider needs be configured in the cluster. Starting with Kubernetes version v1.15.0, the kubelet can obtain ECR credentials without having the Amazon cloud provider configured in the cluster.

### Using the Out-of-Tree AWS Cloud Provider for RKE

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

You must not enable `useInstanceMetadataHostname` when setting custom values for `hostname-override` for custom clusters. When you create a [custom cluster](../../../../pages-for-subheaders/use-existing-nodes.md), add [`--node-name`](../../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md) to the `docker run` node registration command to set `hostname-override` — for example, `"$(hostname -f)"`. This can be done manually or by using **Show Advanced Options** in the Rancher UI to add **Node Name**.

2. Select the cloud provider. 

Selecting **External Amazon (out-of-tree)** sets `--cloud-provider=external` and enables `useInstanceMetadataHostname`. As mentioned in step 1, enabling `useInstanceMetadataHostname` will query the EC2 metadata service and set `http://169.254.169.254/latest/meta-data/hostname` as `hostname-override` for `kubelet` and `kube-proxy`.

::: note

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

### Helm Chart Installation from CLI

Official upstream docs for [Helm chart installation](https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager) can be found on Github.

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

3. Install the helm chart:

```shell
helm upgrade --install aws-cloud-controller-manager -n kube-system aws-cloud-controller-manager/aws-cloud-controller-manager --values values.yaml
```

Verify that the Helm chart installed successfully:

```shell
helm status -n kube-system aws-cloud-controller-manager
```

4. If present, edit daemonset to remove the default node selector `node-role.kubernetes.io/control-plane: ""`:

```shell
kubectl edit daemonset aws-cloud-controller-manager -n kube-system
```

5. (Optional) Verify that the cloud controller manager update succeeded:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

### Helm Chart Installation from UI

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

10. Install the chart and confirm that the daemonset `aws-cloud-controller-manager` deploys successfully:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

### Migrating to the Out-of-Tree AWS Cloud Provider for RKE

To migrate from an in-tree cloud provider to the out-of-tree AWS cloud provider, you must stop the existing cluster's kube controller manager and install the AWS cloud controller manager. There are many ways to do this. Refer to the official AWS documentation on the [external cloud controller manager](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for details.

If it's acceptable to have some downtime, you can [switch to an external cloud provider](#using-out-of-tree-aws-cloud-provider), which removes in-tree components and then deploy charts to install the AWS cloud controller manager.

If your setup can't tolerate any control plane downtime, you must enable leader migration. This facilitates a smooth transition from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to the official AWS documentation on [Using leader migration](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for more details.

:::note Important

The Kubernetes [cloud controller migration documentation](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) mentions that it is possible to migrate with the same Kubernetes version, but assumes that migration is part of a Kubernetes upgrade.

Refer to the Kubernetes documentation on [migrating to use the cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to see if you need to customize your setup before migrating. Confirm your [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration). If your cloud provider provides an implementation of the Node IPAM controller, you also need to [migrate the IPAM controller](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).

:::

1. Update the cluster config to enable leader migration in `cluster.yml`:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

Note that the cloud provider is still `aws` at this step:

```yaml
cloud_provider:
  name: aws
```

2. Cordon the control plane nodes, so that the AWS cloud controller pods run on nodes only after upgrading to the external cloud provider.

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. To install the AWS cloud controller manager, you must enable leader migration and follow the same steps as when installing AWS on a new cluster. To enable leader migration, add the following to the container arguments in step 7 while following the [steps to install the chart](#helm-chart-installation-from-ui):

```yaml
- '--enable-leader-migration=true' 
```

4. Confirm that the chart is installed but the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, RKE will uncordon each node after upgrading and `aws-controller-manager` pods will be scheduled.

5. Update `cluster.yml` to change the cloud provider and remove the leader migration arguments from the kube-controller.

Selecting **External Amazon (out-of-tree)** sets `--cloud-provider=external` and lets you enable `useInstanceMetadataHostname`. You must enable `useInstanceMetadataHostname` for node-driver clusters and for custom clusters if not you don't provide a custom node name via `--node-name`. Enabling `useInstanceMetadataHostname` will query ec2 metadata service and set `/hostname` as `hostname-override` for `kubelet` and `kube-proxy`:

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

**Remove** `enable-leader-migration` from:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

6. If  you're upgrading the cluster's Kubernetes version, set the Kubernetes version as well.

7. Update the cluster. The `aws-cloud-controller-manager` pods should now be running.

8. (Optional) After the upgrade, leader migration is no longer required due to only one cloud-controller-manager and can be removed. Upgrade the chart and remove the following section from the container arguments:

```shell
- --enable-leader-migration=true 
```

Verify the cloud controller manager update was successfully rolled out with the following command:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

### Using Out-of-tree AWS Cloud Provider for RKE2

1. [Node name conventions and other prerequisites](https://cloud-provider-aws.sigs.k8s.io/prerequisites/) must be followed for cloud provider to find the instance correctly.

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

3. Specify the `aws-cloud-controller-manager` helm chart as an additional manifest to install:

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

### Helm Chart Installation from CLI

Official upstream docs for [helm chart installation](https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager) can be found on Github.

1. Add the helm repository:

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

3. Install the helm chart:

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

### Helm Chart Installation from UI

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

There's currently a [known issue](https://github.com/rancher/dashboard/issues/9249) where nodeSelector can't be updated from the Rancher UI.  Continue installing the chart and then edit the Daemonset manually to set the `nodeSelector`:

```yaml
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
```

:::

10. Install the chart and confirm that the daemonset `aws-cloud-controller-manager` is running. Verify `aws-cloud-controller-manager` pods are running in target namespace (`kube-system` unless modified in step 6). 

### Migrating to the Out-of-Tree AWS Cloud Provider 

To migrate from the in-tree cloud provider to the out-of-tree AWS cloud provider, you must stop the existing cluster's kube controller manager and install the AWS cloud controller manager. There are many ways to do this. Refer to the official AWS documentation on the [external cloud controller manager](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for details.

If it's acceptable to have some downtime, you can [switch to an external cloud provider](#using-the-out-of-tree-aws-cloud-provider), which removes in-tree components and then deploy charts to install the AWS cloud controller manager.

If your setup can't tolerate any control plane downtime, you must enable leader migration. This facilitates a smooth transition from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to the official AWS documentation on [Using leader migration](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for more details.

:::note Important:
The Kubernetes [cloud controller migration documentation](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) states that it's possible to migrate with the same Kubernetes version, but assumes that the migration is part of a  Kubernetes upgrade. Refer to the Kubernetes documentation on [migrating to use the cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to see if you need to customize your setup before migrating. Confirm your [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration). If your cloud provider provides an implementation of the Node IPAM controller,  you also need to [migrate the IPAM controller](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).
:::

#### Migrating to the Out-of-Tree AWS Cloud Provider for RKE

1. Update the cluster config to enable leader migration in `cluster.yml`

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

Note that the cloud provider is still `aws` at this step.

```yaml
cloud_provider:
  name: aws
```

2. Cordon the control plane nodes, so that AWS cloud controller pods run on nodes only after upgrading to the external cloud provider:

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. To install the AWS cloud controller manager, enable leader migration and follow the same steps as when installing AWS on a new cluster. To enable leader migration, add the following to the container arguments in step 7 while following the [steps to install the chart](#helm-chart-installation-from-ui):

```shell
- '--enable-leader-migration=true' 
```

4. Confirm that the chart is installed but that the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, RKE will upgrade and uncordon each node, and schedule `aws-controller-manager` pods.

5. Update cluster.yml to change the cloud provider and remove the leader migration arguments from the kube-controller.

Selecting **External Amazon (out-of-tree)** will set `--cloud-provider=external` and allow enabling `useInstanceMetadataHostname`. You must enable `useInstanceMetadataHostname` for node-driver clusters and for custom clusters if you don't provide a custom node name via `--node-name`. Enabling `useInstanceMetadataHostname` queries the EC2 metadata service and sets `/hostname` as `hostname-override` for `kubelet` and `kube-proxy`:

```yaml
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

Remove `enable-leader-migration` if you don't want it enabled in your cluster:

```yaml
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

:::tip
You can also disable leader migration after step 7. Upgrade the chart and remove the following section from the container arguments:

```yaml
- --enable-leader-migration=true 
```

:::

6. If  you're upgrading the cluster's Kubernetes version, set the Kubernetes version as well.

7. Update the cluster. The `aws-cloud-controller-manager` pods should now be running.

#### Migrating to the Out-of-Tree AWS Cloud Provider for RKE2

1. Update the cluster config to enable leader migration:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kube-controller-manager-arg:
            - enable-leader-migration
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/control-plane-role
              operator: In
              values:
                - 'true'
```

Note that the cloud provider is still `aws` at this step:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: aws
```

2. Cordon control plane nodes so that AWS cloud controller pods run on nodes only after upgrading to the external cloud provider:

```shell
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. To install the AWS cloud controller manager with leader migration enabled, follow Steps 1-3 for [deploying the cloud controller manager chart](#using-out-of-tree-aws-cloud-provider-for-rke2)
From Kubernetes 1.22 onwards, the kube-controller-manager will utilize a default configuration which will satisfy the controller-to-manager migration. 
Update container args of the `aws-cloud-controller-manager` under `spec.rkeConfig.additionalManifest` to enable leader migration:

```shell
- '--enable-leader-migration=true' 
```

4. Install the chart and confirm that the daemonset `aws-cloud-controller-manager` successfully deployed:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

5. Update the provisioning cluster to change the cloud provider and remove leader migration args from the kube controller. 
If upgrading the Kubernetes version, set the Kubernetes version as well in the `spec.kubernetesVersion` section of the cluster YAML file

:::note Important

Only remove `cloud-provider-name: aws` if not relying on the rke2 supervisor to correctly set the providerID.

:::

Remove `enable-leader-migration` if you don't want it enabled in your cluster:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: external
```

Remove `enable-leader-migration` from:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kube-controller-manager-arg:
            - enable-leader-migration
        machineLabelSelector:
          matchExpressions:
            - key: rke.cattle.io/control-plane-role
              operator: In
              values:
                - 'true'
```

:::tip
You can also disable leader migration after the upgrade, as leader migration is no longer required due to only one cloud-controller-manager and can be removed.
Upgrade the chart and remove the following section from the container arguments:

```yaml
- --enable-leader-migration=true 
```

Verify the cloud controller manager update was successfully rolled out with the following command:

```shell
kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager
```

:::

6. The cloud provider is responsible for setting the ProviderID of the node. Check if all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```
