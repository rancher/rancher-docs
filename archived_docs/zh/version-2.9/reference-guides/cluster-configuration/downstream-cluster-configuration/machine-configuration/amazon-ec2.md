---
title: EC2 主机配置参考
---

有关 EC2 和节点的更多详细信息，请参阅 [EC2 管理控制台](https://aws.amazon.com/ec2)的官方文档。

### 区域

构建集群的地理[区域](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)。

### 地区

[地区](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones)，一个区域内用于构建集群的隔离位置。

### 实例类型

[实例类型](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html)用于配置集群，能确定硬件特性。

### 根磁盘大小

配置[根设备](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/RootDeviceStorage.html)的大小（以 GB 为单位）。

### VPC/子网

[VPC](https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html) 或特定的[子网](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)（VPC 中的一个 IP 范围），用于添加你的资源。

### IAM 实例配置文件名称

示例配置文件的名称，用于将 IAM 角色传递给 EC2 实例。

## 高级选项

### AMI ID

用于集群中节点的 [Amazon Machine Image（AMI）](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)。

### 用于 AMI 的 SSH 用户名

用于连接到你启动的实例的用户名。有关选定 AMI 的默认用户名，请参阅[此处](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html)。对于未列出的 AMI，请咨询 AMI 提供商。

### 安全组

选择默认安全组或配置安全组。

请参考[使用主机驱动时的 Amazon EC2 安全组](../../../../getting-started/installation-and-upgrade/installation-requirements/port-requirements.md#rancher-aws-ec2-安全组)，了解 `rancher-nodes` 安全组中创建的规则。

### EBS 根卷类型

用于根设备的 [EBS 卷类型](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)。

### 加密 EBS 卷

启用 [Amazon EBS 加密](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html)。

### 请求 Spot 实例

开启[请求 Spot 实例](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html)选项，并指定你愿意支付的最高实例价格（每小时）。

### 仅使用私有地址

启用仅使用[私人地址](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html)的选项。

### EBS 优化实例

使用 [EBS 优化实例](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html)。

### 允许访问 EC2 元数据

启用对 [EC2 元数据](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)的访问。

### 为元数据使用 Token

使用 [Instance Metadata Service Version 2 (IMDSv2)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html)，即基于令牌访问元数据的方法。

### 添加标签

使用[标签](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)添加元数据，从而对资源进行分类。

