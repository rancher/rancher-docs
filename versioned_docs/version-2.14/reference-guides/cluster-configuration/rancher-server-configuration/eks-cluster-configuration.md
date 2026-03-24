---
title: EKS Cluster Configuration Reference
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"/>
</head>

### Account Access

Complete each drop-down and field using the information obtained for your IAM policy.

| Setting    | Description       |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Region     | From the drop-down choose the geographical region in which to build your cluster.                                    |
| Cloud Credentials | Select the cloud credentials that you created for your IAM policy. For more information on creating cloud credentials in Rancher, refer to [this page.](../../user-settings/manage-cloud-credentials.md) |

### Service Role

Choose a [service role](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html).

Service Role | Description
-------------|---------------------------
Standard: Rancher generated service role | If you choose this role, Rancher automatically adds a service role for use with the cluster.
Custom: Choose from your existing service roles | If you choose this role, Rancher lets you choose from service roles that you're already created within AWS. For more information on creating a custom service role in AWS, see the [Amazon documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#create-service-linked-role).

### Secrets Encryption

Optional: To encrypt secrets, select or enter a key created in [AWS Key Management Service (KMS)](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)

### API Server Endpoint Access

Configuring Public/Private API access is an advanced use case. For details, refer to the EKS cluster endpoint access control [documentation.](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html)

### Private-only API Endpoints

If you enable private and disable public API endpoint access when creating a cluster, then there is an extra step you must take in order for Rancher to connect to the cluster successfully. In this case, a pop-up will be displayed with a command that you will run on the cluster to register it with Rancher. Once the cluster is provisioned, you can run the displayed command anywhere you can connect to the cluster's Kubernetes API.

There are two ways to avoid this extra manual step:
- You can create the cluster with both private and public API endpoint access on cluster creation. You can disable public access after the cluster is created and in an active state and Rancher will continue to communicate with the EKS cluster.
- You can ensure that Rancher shares a subnet with the EKS cluster. Then security groups can be used to enable Rancher to communicate with the cluster's API endpoint. In this case, the command to register the cluster is not needed, and Rancher will be able to communicate with your cluster. For more information on configuring security groups, refer to the [security groups documentation](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).

### Public Access Endpoints

Optionally limit access to the public endpoint via explicit CIDR blocks.

If you limit access to specific CIDR blocks, then it is recommended that you also enable the private access to avoid losing network communication to the cluster.

One of the following is required to enable private access:
- Rancher's IP must be part of an allowed CIDR block
- Private access should be enabled, and Rancher must share a subnet with the cluster and have network access to the cluster, which can be configured with a security group

For more information about public and private access to the cluster endpoint, refer to the [Amazon EKS documentation.](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html)

### IPv6 / Dual-stack Networking

Rancher supports provisioning and managing Amazon EKS clusters with IPv6 network routing. When IPv6 is enabled, Kubernetes pods and services are assigned IPv6 addresses. However, the underlying EC2 worker nodes operate in a **dual-stack mode** (receiving both IPv4 and IPv6 addresses). This dual-stack architecture ensures that the nodes can still communicate with the AWS API and the Kubernetes control plane over IPv4, while your application workloads communicate over IPv6.

To provision a dual-stack cluster from the Rancher UI:
1. During cluster creation, expand the **Networking** section.
2. Under **IP Family**, select the **IPv6** radio button. 
   > **Note:** Changing the IP Family will clear any current subnet selections you have made in the form.
3. Under **VPCs and Subnets**, choose either to **Create a new vpc and subnet automatically** or **Select from existing subnets**.
   > **Warning for Custom VPCs:** If you choose to select existing subnets, you **must** select Dual-Stack subnets. The selected subnets must have both an IPv4 CIDR block and an IPv6 CIDR block. IPv6-only subnets are not supported.
4. Complete the remainder of the cluster configuration (Node Groups, etc.).
5. Click **Create**.

> **Important:** The IP Family setting is **immutable**. Once an EKS cluster is created, you cannot convert an IPv4 cluster to IPv6, nor can you convert an IPv6 cluster to IPv4.

### Importing Existing IPv6 Clusters

Rancher fully supports registering (importing) existing Amazon EKS clusters that were configured with IPv6 networking outside of Rancher (e.g., via Terraform or the AWS Console).

When you register an existing EKS cluster:
1. Follow the standard cluster registration process (**Cluster Management > Add Cluster > Generic**).
2. Rancher will query the AWS EKS API to read the cluster's upstream state.
3. Rancher automatically detects if the cluster was provisioned with IPv6.

When configuring an IPv6 cluster, several automated behaviors and strict requirements apply:
* **Service CIDR:** AWS automatically assigns the Service CIDR from a fixed IPv6 range (`fd00::/108`). You cannot customize the Service CIDR for an IPv6 cluster.
* **OIDC Provider (IRSA) Requirement:** In an IPv6 cluster, the Amazon VPC CNI plugin strictly requires IAM permissions to assign IPv6 prefixes to Elastic Network Interfaces (ENIs). This authentication is handled via IAM Roles for Service Accounts (IRSA). Therefore, **an IAM OIDC provider is mandatory and is automatically enabled by Rancher** when provisioning an IPv6 cluster. Without it, pods will fail to acquire IP addresses.


### EKSClusterConfig Reference Example (IPv6)

If you are programmatically deploying EKS clusters using the `eksclusterconfigs.eks.cattle.io` Custom Resource, you can enable IPv6 by setting the `ipFamily` field to `ipv6`. 

Below is an example of a minimal `EKSClusterConfig` configured for IPv6. Notice that the `ipFamily` is set, and standard IPv4 fields like `serviceCidr` are omitted because AWS manages them automatically in IPv6 mode.

```yaml
apiVersion: eks.cattle.io/v1
kind: EKSClusterConfig
metadata:
  name: my-ipv6-cluster
  namespace: cluster-fleet-default
spec:
  amazonCredentialSecret: cattle-global-data/my-aws-credentials
  displayName: my-ipv6-cluster
  region: us-west-2
  imported: false
  kubernetesVersion: "1.33"
  ipFamily: "ipv6" # Enables Dual-Stack IPv6 networking. Triggers automatic OIDC creation.
  nodeGroups:
    - nodegroupName: initial-nodegroup
      desiredSize: 2
      maxSize: 3
      minSize: 1
      instanceType: t3.medium
      diskSize: 20
      requestSpotInstances: false
      version: "1.33"
  privateAccess: false
  publicAccess: true
  secretsEncryption: false
  ```


### Subnet

| Option | Description |
| ------- | ------------ |
| Standard: Rancher generated VPC and Subnet | While provisioning your cluster, Rancher generates a new VPC with 3 public subnets. |
| Custom: Choose from your existing VPC and Subnets | While provisioning your cluster, Rancher configures your Control Plane and nodes to use a VPC and Subnet that you've already [created in AWS](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).  |

 For more information, refer to the AWS documentation for [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html). Follow one of the sets of instructions below based on your selection from the previous step.

> **Warning for Custom IPv6 VPCs:** If you have selected `IPv6` as your IP Family and are bringing a custom VPC, you **must** select Dual-Stack subnets. The selected subnets must have **both an IPv4 CIDR block and an IPv6 CIDR block**. "IPv6-only" subnets are not supported by EKS; EC2 worker nodes still require an IPv4 address to join the cluster and communicate with AWS services.

- [What Is Amazon VPC?](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)

### Security Group

Amazon Documentation:

- [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html)
- [Security Groups for Your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)
- [Create a Security Group](https://docs.aws.amazon.com/vpc/latest/userguide/getting-started-ipv4.html#getting-started-create-security-group)

### Logging

Configure control plane logs to send to Amazon CloudWatch. You are charged the standard CloudWatch Logs data ingestion and storage costs for any logs sent to CloudWatch Logs from your clusters.

Each log type corresponds to a component of the Kubernetes control plane. To learn more about these components, see [Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/) in the Kubernetes documentation.

For more information on EKS control plane logging, refer to the official [documentation.](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html)

### Managed Node Groups

Amazon EKS managed node groups automate the provisioning and lifecycle management of nodes (Amazon EC2 instances) for Amazon EKS Kubernetes clusters.

For more information about how node groups work and how they are configured, refer to the [EKS documentation.](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html)

#### User-provided Launch Templates

You can provide your own launch template ID and version to configure the EC2 instances in a node group. If you provide the launch template, none of the template settings will be configurable from Rancher. You must set all of the required options listed below in your launch template.

Also, if you provide the launch template, you can only update the template version, not the template ID. To use a new template ID, create a new managed node group.

| Option | Description | Required/Optional |
| ------ | ----------- | ----------------- |
| Instance Type | Choose the [hardware specs](https://aws.amazon.com/ec2/instance-types/) for the instance you're provisioning. | Required |
| Image ID | Specify a custom AMI for the nodes. Custom AMIs used with EKS must be [configured properly](https://aws.amazon.com/premiumsupport/knowledge-center/eks-custom-linux-ami/) | Optional |
| Node Volume Size | The launch template must specify an EBS volume with the desired size | Required |
| SSH Key | A key to be added to the instances to provide SSH access to the nodes | Optional |
| User Data | Cloud init script in [MIME multi-part format](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html#launch-template-user-data) | Optional |
| Instance Resource Tags | Tag each EC2 instance and its volumes in the node group | Optional |

:::caution

You can't directly update a node group to a newer Kubernetes version if the node group was created from a custom launch template. You must create a new launch template with the proper Kubernetes version, and associate the node group with the new template.

:::


#### Rancher-managed Launch Templates

If you do not specify a launch template, then you will be able to configure the above options in the Rancher UI and all of them can be updated after creation. In order to take advantage of all of these options, Rancher will create and manage a launch template for you. Each cluster in Rancher will have one Rancher-managed launch template and each managed node group that does not have a specified launch template will have one version of the managed launch template. The name of this launch template will have the prefix "rancher-managed-lt-" followed by the display name of the cluster. In addition, the Rancher-managed launch template will be tagged with the key "rancher-managed-template" and value "do-not-modify-or-delete" to help identify it as Rancher-managed. It is important that this launch template and its versions not be modified, deleted, or used with any other clusters or managed node groups. Doing so could result in your node groups being "degraded" and needing to be destroyed and recreated.

#### Custom AMIs

If you specify a custom AMI, whether in a launch template or in Rancher, then the image must be [configured properly](https://aws.amazon.com/premiumsupport/knowledge-center/eks-custom-linux-ami/) and you must provide user data to [bootstrap the node](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html#launch-template-custom-ami). This is considered an advanced use case and understanding the requirements is imperative.

If you specify a launch template that does not contain a custom AMI, then Amazon will use the [EKS-optimized AMI](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html) for the Kubernetes version and selected region. You can also select a [GPU enabled instance](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html#gpu-ami) for workloads that would benefit from it.

:::note

The GPU enabled instance setting in Rancher is ignored if a custom AMI is provided, either in the dropdown or in a launch template.

:::

#### Spot instances

Spot instances are now [supported by EKS](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types-spot). If a launch template is specified, Amazon recommends that the template not provide an instance type. Instead, Amazon recommends providing multiple instance types. If the "Request Spot Instances" checkbox is enabled for a node group, then you will have the opportunity to provide multiple instance types.

:::note

Any selection you made in the instance type dropdown will be ignored in this situation and you must specify at least one instance type to the "Spot Instance Types" section. Furthermore, a launch template used with EKS cannot request spot instances. Requesting spot instances must be part of the EKS configuration.

:::

#### Node Group Settings

The following settings are also configurable. All of these except for the "Node Group Name" are editable after the node group is created.

| Option | Description |
| ------- | ------------ |
| Node Group Name | The name of the node group. |
| Desired ASG Size | The desired number of instances. |
| Maximum ASG Size | The maximum number of instances. This setting won't take effect until the [Cluster Autoscaler](https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html) is installed. |
| Minimum ASG Size | The minimum number of instances. This setting won't take effect until the [Cluster Autoscaler](https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html) is installed. |
| Labels | Kubernetes labels applied to the nodes in the managed node group. |
| Tags | These are tags for the managed node group and do not propagate to any of the associated resources. |

### Self-managed Amazon Linux Nodes

You can register an EKS cluster containing self-managed Amazon Linux nodes. You must configure this type of cluster according to the instructions in the official AWS documentation for [launching self-managed Amazon Linux nodes](https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html). EKS clusters containing self-managed Amazon Linux nodes are usually operated by the [Karpenter](https://karpenter.sh/docs/) project. After you provision an EKS cluster containing self-managed Amazon Linux nodes, [register the cluster](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md) so it can be managed by Rancher. However, the nodes won't be visible in the Rancher UI.

### IAM Roles for Service Accounts

An Applications Deployment running on an EKS cluster can make requests to AWS services via IAM permissions. These applications must sign their requests with AWS credentials. IAM roles for service accounts manage these credentials using an AWS OIDC endpoint. Rather than distributing AWS credentials to containers or relying on an EC2 instance's role, you can link an [IAM role to a Kubernetes service account](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) and configure your Pods to use this account.

:::note

Linking to an IAM role is not supported for Rancher pods in an EKS cluster.

:::

To enable IAM roles for service accounts:
1. [Create an IAM OIDC provider for your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)
1. [Configure a Kubernetes service account to assume an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html)
1. [Configure Pods to use a Kubernetes service account](https://docs.aws.amazon.com/eks/latest/userguide/pod-configuration.html)
1. [Use a supported AWS SDK](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-minimum-sdk.html)

### Configuring the Refresh Interval

The `eks-refresh-cron` setting is deprecated. It has been migrated to the `eks-refresh` setting, which is an integer representing seconds.

The default value is 300 seconds.

The syncing interval can be changed by running `kubectl edit setting eks-refresh`.

If the `eks-refresh-cron` setting was previously set, the migration will happen automatically.

The shorter the refresh window, the less likely any race conditions will occur, but it does increase the likelihood of encountering request limits that may be in place for AWS APIs.
