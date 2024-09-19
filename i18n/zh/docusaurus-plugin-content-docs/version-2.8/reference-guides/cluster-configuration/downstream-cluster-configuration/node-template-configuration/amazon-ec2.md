---
title: EC2 节点模板配置
---

有关 EC2 和节点的更多详细信息，请参阅 [EC2 管理控制台](https://aws.amazon.com/ec2)的官方文档。

## 区域

在**区域**字段中，选择创建云凭证时使用的同一区域。

## 云凭证

你的 AWS 账户访问信息，存储在[云凭证](../../../user-settings/manage-cloud-credentials.md)中。

请参阅 [Amazon 文档：创建访问密钥](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)来创建访问密钥和密文密钥。

请参阅 [Amazon 文档：创建 IAM 策略（控制台）](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start)来创建 IAM 策略。

请参阅 [Amazon 文档：为用户添加权限（控制台）](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console)了解如何绑定 IAM。

参阅下面的三个示例 JSON 策略：

- [IAM 策略示例](../../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#iam-策略示例)
- [带有 PassRole 的 IAM 策略示例](../../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#带有-passrole-的-iam-策略示例)（如果要使用 [Kubernetes 云提供商](../../../../pages-for-subheaders/set-up-cloud-providers.md)，或将 IAM 配置文件传递给实例，则需要）
- [允许用户加密 EBS 卷的 IAM 策略示例](../../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#允许加密-ebs-卷的-iam-策略示例)

## 验证和配置节点

为集群选择可用区和网络设置。

## 安全组

选择默认安全组或配置安全组。

请参考[使用主机驱动时的 Amazon EC2 安全组](../../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#rancher-aws-ec2-安全组)，了解 `rancher-nodes` 安全组中创建的规则。

如果你自行为 EC2 实例提供安全组，Rancher 不会对其进行修改。因此，你需要让你的安全组允许 [Rancher 配置实例所需的端口](../../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#rke-上-rancher-server-节点的端口)。有关使用安全组控制 EC2 实例的入站和出站流量的更多信息，请参阅[这里](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#WorkingWithSecurityGroups)。

## 实例选项

配置要创建的实例。确保为 AMI 配置正确的 **SSH 用户**。所选的区域可能不支持默认实例类型。在这种情况下，你必须选择一个确实存在的实例类型。否则将出现错误，表示请求的配置不受支持。

如果需要传递 **IAM 示例配置名称**（不是 ARN），例如要使用 [Kubernetes 云提供商](../../../../pages-for-subheaders/set-up-cloud-providers.md)时，策略则需要其他权限。有关示例策略，请参阅[带有 PassRole 的 IAM 策略示例](../../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md#带有-passrole-的-iam-策略示例)。

## 引擎选项

在节点模板的**引擎选项**中，你可以配置容器 daemon。你可能需要指定容器版本或容器镜像仓库 Mirror。
