---
title: Setting up the Amazon Cloud Provider
weight: 1
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon"/>
</head>

When using the `Amazon` cloud provider, you can leverage the following capabilities:

- **Load Balancers:** Launches an AWS Elastic Load Balancer (ELB) when choosing `Layer-4 Load Balancer` in **Port Mapping** or when launching a `Service` with `type: LoadBalancer`.
- **Persistent Volumes**: Allows you to use AWS Elastic Block Stores (EBS) for persistent volumes.

See [cloud-provider-aws README](https://kubernetes.github.io/cloud-provider-aws/) for all information regarding the Amazon cloud provider.

To set up the Amazon cloud provider,

1. [Create an IAM role and attach to the instances](#1-create-an-iam-role-and-attach-to-the-instances)
2. [Configure the ClusterID](#2-configure-the-clusterid)

:::note Important:

In Kubernetes 1.27 and later, you must use an out-of-tree AWS cloud provider. In-tree Cloud Providers have been removed completely, and will no longer continue to function post-upgrade to Kubernetes 1.27. The steps listed below are still required to set up an Amazon cloud provider. You can proceed to [set up an out-of-tree cloud provider for RKE1](#using-out-of-tree-aws-cloud-provider-for-rke1) after creating an IAM role and configuring the ClusterID.

You can also [migrate from an in-tree to out-of-tree AWS cloud provider](#migrating-to-out-of-tree-aws-cloud-provider-for-rke1) on Kubernetes 1.26 and earlier. All existing clusters must migrate prior to upgrading to 1.27 in order to stay functional.

Starting with Kubernetes 1.23, you have to deactivate the `CSIMigrationAWS` feature gate in order to use the in-tree AWS cloud provider. You can do this by setting `feature-gates=CSIMigrationAWS=false` as an additional argument for the cluster's Kubelet, Controller Manager, API Server and Scheduler in the advanced cluster configuration.

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

When you create an [Amazon EC2 Cluster](../../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md), the `ClusterID` is automatically configured for the created nodes. Other resources still need to be tagged manually.

Use the following tag:

**Key** = `kubernetes.io/cluster/CLUSTERID` **Value** = `owned`

`CLUSTERID` can be any string you like, as long as it is equal across all tags set.

Setting the value of the tag to `owned` tells the cluster that all resources with this tag are owned and managed by this cluster. If you share resources between clusters, you can change the tag to:

**Key** = `kubernetes.io/cluster/CLUSTERID` **Value** = `shared`.

:::note

Do not tag a resource with multiple owned or shared tags.

:::

### Using Amazon Elastic Container Registry (ECR)

The kubelet component has the ability to automatically obtain ECR credentials, when the IAM profile mentioned in [Create an IAM Role and attach to the instances](#1-create-an-iam-role-and-attach-to-the-instances) is attached to the instance(s). When using a Kubernetes version older than v1.15.0, the Amazon cloud provider needs be configured in the cluster. Starting with Kubernetes version v1.15.0, the kubelet can obtain ECR credentials without having the Amazon cloud provider configured in the cluster.

### Using the Out-of-Tree AWS Cloud Provider for RKE1

1. [Node name conventions and other prerequisities ](https://cloud-provider-aws.sigs.k8s.io/prerequisites/) must be followed so that the cloud provider can find the instance. Rancher provisioned clusters don't support configuring `providerID`. 

> When IP-based naming is used, the nodes must be named after the instance followed by the regional domain name (`ip-xxx-xxx-xxx-xxx.ec2.<region>.internal`). If you have a custom domain name set in the DHCP options, you must set `--hostname-override` on `kube-proxy` and `kubelet` to match this naming convention.

To meet node naming conventions, Rancher allows setting `useInstanceMetadataHostname` when `External Amazon` cloud provider is selected. Enabling `useInstanceMetadataHostname` will query ec2 metadata service and set `/hostname` as `hostname-override` for `kubelet` and `kube-proxy`:

```
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true
```

You must not enable `useInstanceMetadataHostname` when setting custom values for `hostname-override` for custom clusters. When you create a [custom cluster](../../../../pages-for-subheaders/use-existing-nodes.md), you can add [`--node-name`](../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options) to the `docker run` node registration command to set `hostname-override` - for example, `"$(hostname -f)"`). This can be done manually or by using **Show Advanced Options** in the Rancher UI to add **Node Name**.

2. Select cloud provider. 

Selecting **External Amazon (out-of-tree)** will set `--cloud-provider=external` and enable `useInstanceMetadataHostname`. As mentioned in step 1, enabling `useInstanceMetadataHostname` will query ec2 metadata service and set `http://169.254.169.254/latest/meta-data/hostname` as `hostname-override` for `kubelet` and `kube-proxy`. 

::: note

You must disable `useInstanceMetadataHostname` when setting custom node name via `node-name` for custom clusters.

::: 

```
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

Existing clusters using **External** cloud provider will set `--cloud-provider=external` for Kubernetes components but not facilitate setting node name.

3. Install the AWS cloud controller manager after the cluster finishes provisioning. Note that the cluster isn't successfully provisioned and nodes are still in an `uninitialized` state until you deploy the cloud controller manager. This can be done via [Helm charts in UI](#helm-chart-installation) or manually.

:::note

The upstream documentation for the AWS cloud controller manager can be found [here](https://kubernetes.github.io/cloud-provider-aws).

:::

### Helm Chart Installation

1. Click **☰**, then select the name of the cluster from the left navigation.

2. Select **Apps** > **Repositories**.

3. Click the **Create** button.

4. Enter `https://kubernetes.github.io/cloud-provider-aws` in the **Index URL** field.

5. Select **Apps** > **Charts** from the left navigation and install **aws-cloud-controller-manager**.

6. Select the namespace, `kube-system`, and enable **Customize Helm options before install**.

7. Add the following container args: 

```
  - '--use-service-account-credentials=true'
  - '--configure-cloud-routes=false'
```   

8. Add `get` to `verbs` for `serviceaccounts` resources in `clusterRoleRules`. This allows the cloud controller manager to get service accounts upon startup.

```
  - apiGroups:
      - ''
    resources:
      - serviceaccounts
    verbs:
      - create
      - get
```

9. Rancher-provisioned RKE nodes are tainted `node-role.kubernetes.io/controlplane` so you must update tolerations and the nodeSelector:

```
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/controlplane

```

```
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
```

:::note for Rancher `<v2.8.0`:
	
There's currently [a known issue](https://github.com/rancher/dashboard/issues/9249) which doesn't allow nodeSelector to be updated from the Rancher UI.  Continue installing the chart and then edit the daemonset manually to set the `nodeSelector`. 

:::

10. Install the chart and confirm that daemonset `aws-cloud-controller-manager` is running - verify `aws-cloud-controller-manager` pods are running in target namespace (`kube-system` unless modified in step 6). 

```

```

### Migrating to the Out-of-Tree AWS Cloud Provider for RKE1

In order to upgrade existing cluster with in-tree cloud provider to AWS cloud controller manager, you can run stop kube controller manager and install AWS cloud controller manager in many ways. Refer to [External cloud controller manager](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for details.

When downtime is acceptable, you can switch to external cloud provider which removes in-tree components and then deploy charts to install AWS cloud controller manager as explained in [using out of tree cloud provider](#using-out-of-tree-aws-cloud-provider).

When control plane cannot tolerate downtime, leader migration must be enabled to facilitate a smooth migration from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to [Using leader migration](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for more details.

**Important**
- [Cloud controller migration docs](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) mentions that it is possible to migrate with the same Kubernetes version, but assumes that migration is part of Kubernetes upgrade.

- Refer [Migrate to use cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to confirm if any customizations are required before migrating.
  Confirm [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration) and special case around [migrating IPAM controllers](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).


1. Update cluster config to enable leader migration in `cluster.yml`

```
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```
Note that cloud provider is still `aws` at this step.
```
cloud_provider:
  name: aws
```

2. Cordon control plane nodes so aws cloud controller pods run on nodes only after upgrading to external cloud provider.

```
kubectl cordon -l "node-role.kubernetes.io/controlplane=true"
```

3. The steps to install AWS cloud controller manager for migration are same as fresh installation, but you must enable leader migration. 
Add the following to the container arguments in step 7 when following the [steps to install chart](#helm-chart-installation):

```
- '--enable-leader-migration=true' 
```

4. Confirm the chart is installed but the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, rke will uncordon each node after upgrading and `aws-controller-manager` pods will be scheduled.

5. Update cluster.yml to change cloud provider and remove leader migration args from kube-controller.

Selecting **External Amazon (out-of-tree)** will set `--cloud-provider=external` and allow enabling `useInstanceMetadataHostname`. You must enable `useInstanceMetadataHostname` for node-driver clusters and for custom clusters if not providing custom node name via `--node-name`. Enabling `useInstanceMetadataHostname` will query ec2 metadata service and set `/hostname` as `hostname-override` for `kubelet` and `kube-proxy`:

```
rancher_kubernetes_engine_config:
  cloud_provider:
    name: external-aws
    useInstanceMetadataHostname: true/false
```

**Remove** `enable-leader-migration` from:
```
services:
  kube-controller:
    extra_args:
      enable-leader-migration: "true"
```

6. If upgrading Kubernetes version, set Kubernetes version as well.

7. Update the cluster. There should be new `aws-cloud-controller-manager` pods running in the cluster.  

8. Optionally after the upgrade, AWS cloud controller manager can be updated to disable leader migration. Upgrade the chart and remove following section from container arguments:
```
- --enable-leader-migration=true 
```

### Using Out-of-tree AWS Cloud Provider for RKE2

1. [Node name conventions and other prerequisites](https://cloud-provider-aws.sigs.k8s.io/prerequisites/) must be followed for cloud provider to find the instance correctly.
2. Rancher managed RKE2/K3s clusters don't support configuring `providerID`, however the engine will set the node name correctly if the following configuration is set on the provisioning cluster object:

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: aws
```

:::note

This option will be passed to the configuration of the various kubernetes components that run on the node, and must be overridden per component:

:::

- Etcd

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - cloud-provider=external
        machineLabelSelector: rke.cattle.io/etcd-role:true
```

- Control Plane

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
        machineLabelSelector: rke.cattle.io/control-plane-role:true
```

- Worker

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kubelet-arg:
            - cloud-provider=external
        machineLabelSelector: rke.cattle.io/worker-role:true
```

2. Select `Amazon` if relying on the above mechanism to set the provider ID.
   Otherwise, select `External (out-of-tree)` cloud provider, which sets `--cloud-provider=external` for Kubernetes components.

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

### Migrating to the Out-of-Tree AWS Cloud Provider for RKE2

In order to upgrade existing cluster with in-tree cloud provider to AWS cloud controller manager, you can run stop kube controller manager and install AWS cloud controller manager in many ways. Refer to [External cloud controller manager](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for details.

When downtime is acceptable, you can switch to external cloud provider which removes in-tree components and then deploy charts to install AWS cloud controller manager as explained in [using out of tree cloud provider](#using-out-of-tree-aws-cloud-provider).

When control plane cannot tolerate downtime, leader migration must be enabled to facilitate a smooth migration from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to [Using leader migration](https://cloud-provider-aws.sigs.k8s.io/getting_started/) for more details.

**Important**
- [Cloud controller migration docs](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin) mentions that it is possible to migrate with the same Kubernetes version, but assumes that migration is part of Kubernetes upgrade.

- Refer [Migrate to use cloud controller manager](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/) to confirm if any customizations are required before migrating.
  Confirm [migration configuration values](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration) and special case around [migrating IPAM controllers](https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration).


1. Update cluster config to enable leader migration

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kube-controller-manager-arg:
            - enable-leader-migration=true
```

Note that cloud provider is still `aws` at this step.

```yaml
spec:
  rkeConfig:
    machineGlobalConfig:
      cloud-provider-name: aws
```

2. Cordon control plane nodes so aws cloud controller pods run on nodes onlyafter upgrading to external cloud provider.

3. To install AWS cloud controller manager with leader migration enabled, follow Steps 1-3 for [deploying cloud controller manager chart](#using-out-of-tree-aws-cloud-provider-for-rke2)

Update container args to enable leader migration,
```
- '--enable-leader-migration=true' 
```

4. Install chart and confirm daemonset `aws-cloud-controller-manager` deploys successfully.

5. Update provisioning cluster to change cloud provider and remove leader migration args from kube-controller.

If upgrading Kubernetes version, set Kubernetes version as well.

```
cloud_provider:
  name: external
```
Remove `enable-leader-migration` from:

```yaml
spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          kube-controller-manager-arg:
            - enable-leader-migration=true
```

6. Optionally, AWS cloud controller manager can be updated to disable leader migration. Upgrade the chart and remove following section from container args:
```
- --enable-leader-migration=true 
```

7. The Cloud Provider is responsible for setting the ProviderID of the node on successful 

Check if all nodes are initialized with the ProviderID with the following command:

```
kubectl describe nodes | grep "ProviderID"
```
