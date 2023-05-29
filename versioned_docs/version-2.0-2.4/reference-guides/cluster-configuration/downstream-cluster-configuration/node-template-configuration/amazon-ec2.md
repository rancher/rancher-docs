---
title: EC2 Node Template Configuration
---

For more details about EC2, nodes, refer to the official documentation for the [EC2 Management Console](https://aws.amazon.com/ec2).

<Tabs>
<TabItem value="Rancher v2.2.0+">

### Region

In the **Region** field, select the same region that you used when creating your cloud credentials.

### Cloud Credentials

Your AWS account access information, stored in a [cloud credential.](../../../user-settings/manage-cloud-credentials.md)

See [Amazon Documentation: Creating Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey) how to create an Access Key and Secret Key.

See [Amazon Documentation: Creating IAM Policies (Console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start) how to create an IAM policy.

See [Amazon Documentation: Adding Permissions to a User (Console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console) how to attach an IAM

See our three example JSON policies:

- [Example IAM Policy](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy)
- [Example IAM Policy with PassRole](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy-with-passrole) (needed if you want to use [Kubernetes Cloud Provider](../../../../pages-for-subheaders/set-up-cloud-providers.md) or want to pass an IAM Profile to an instance)
- [Example IAM Policy to allow encrypted EBS volumes](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy-to-allow-encrypted-ebs-volumes) policy to an user.

### Authenticate & Configure Nodes

Choose an availability zone and network settings for your cluster.

### Security Group

Choose the default security group or configure a security group.

Please refer to [Amazon EC2 security group when using Node Driver](../../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#rancher-aws-ec2-security-group) to see what rules are created in the `rancher-nodes` Security Group.

### Instance Options

Configure the instances that will be created. Make sure you configure the correct **SSH User** for the configured AMI.

If you need to pass an **IAM Instance Profile Name** (not ARN), for example, when you want to use a [Kubernetes Cloud Provider](../../../../pages-for-subheaders/set-up-cloud-providers.md), you will need an additional permission in your policy. See [Example IAM policy with PassRole](#example-iam-policy-with-passrole) for an example policy.

### Engine Options

In the **Engine Options** section of the node template, you can configure the Docker daemon. You may want to specify the docker version or a Docker registry mirror.

</TabItem>
<TabItem value="Rancher before v2.2.0">

### Account Access

**Account Access** is where you configure the region of the nodes, and the credentials (Access Key and Secret Key) used to create the machine.

See [Amazon Documentation: Creating Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey) how to create an Access Key and Secret Key.

See [Amazon Documentation: Creating IAM Policies (Console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start) how to create an IAM policy.

See [Amazon Documentation: Adding Permissions to a User (Console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console) how to attach an IAM

See our three example JSON policies:

- [Example IAM Policy](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy)
- [Example IAM Policy with PassRole](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy-with-passrole) (needed if you want to use [Kubernetes Cloud Provider](../../../../pages-for-subheaders/set-up-cloud-providers.md) or want to pass an IAM Profile to an instance)
- [Example IAM Policy to allow encrypted EBS volumes](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy-to-allow-encrypted-ebs-volumes) policy to an user.

### Zone and Network

**Zone and Network** configures the availability zone and network settings for your cluster.

### Security Groups

**Security Groups** creates or configures the Security Groups applied to your nodes. Please refer to [Amazon EC2 security group when using Node Driver](../../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#rancher-aws-ec2-security-group) to see what rules are created in the `rancher-nodes` Security Group.

### Instance

**Instance** configures the instances that will be created.

### SSH User

Make sure you configure the correct **SSH User** for the configured AMI.

### IAM Instance Profile Name

If you need to pass an **IAM Instance Profile Name** (not ARN), for example, when you want to use a [Kubernetes Cloud Provider](../../../../pages-for-subheaders/set-up-cloud-providers.md), you will need an additional permission in your policy. See [Example IAM policy with PassRole](../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#example-iam-policy-with-passrole) for an example policy.

### Docker Daemon

The [Docker daemon](https://docs.docker.com/engine/docker-overview/#the-docker-daemon) configuration options include:

- **Labels:** For information on labels, refer to the [Docker object label documentation.](https://docs.docker.com/config/labels-custom-metadata/)
- **Docker Engine Install URL:** Determines what Docker version will be installed on the instance.
- **Registry mirrors:** Docker Registry mirror to be used by the Docker daemon
- **Other advanced options:** Refer to the [Docker daemon option reference](https://docs.docker.com/engine/reference/commandline/dockerd/)

</TabItem>
</Tabs>
