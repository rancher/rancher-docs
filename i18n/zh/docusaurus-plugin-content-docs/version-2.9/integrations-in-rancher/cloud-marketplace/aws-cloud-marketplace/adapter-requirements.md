---
title: 先决条件
---

### 1. 设置许可证管理器和购买支持

首先，完成许可证管理器设置的[第一步](https://docs.aws.amazon.com/license-manager/latest/userguide/getting-started.html)。
然后，转到 AWS Marketplace。找到 “Rancher Premium Support Billing Container Starter Pack”。最后，购买至少一项 Entitlement。

如果你已使用 “Rancher Setup” AWS Marketplace 产品安装了 Rancher，请跳至[步骤 4](#4-创建-oidc-提供程序)。

> **注意**：每项 Entitlement 都对一定数量的节点授予访问支持的权限。你可以后续根据需要购买更多许可证。

### 2. 创建 EKS 集群
按照 [Rancher 文档](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md)创建 EKS 集群。进行到[安装 Rancher Helm Chart](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md#8-安装-rancher-helm-chart)（最后一步）时，**停止并返回此页面**。该集群需要满足以下要求：

- EKS 1.22 版本。
- 集群中的每个节点都可以访问包含 Rancher 及其相关镜像的镜像仓库。
- 集群中的每个节点都可以访问存储 CSP Adapter 的 ECR 仓库。
- 集群中的每个节点都可以访问许可证管理器服务。
- 集群中的每个节点都可以访问 STS 服务的全局端点。

### 3. 安装 Rancher

除了在 [Rancher 文档](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md#8-安装-rancher-helm-chart)中指定的 Rancher 安装选项外，你还需要启用其它指标。
你可以通过 Helm CLI 使用以下选项来完成：

```bash
--set extraEnv\[0\].name="CATTLE_PROMETHEUS_METRICS" --set-string extraEnv\[0\].value=true
```

你还可以使用 values.yaml，如下所示：

```yaml
extraEnv:
  - name: "CATTLE_PROMETHEUS_METRICS"
    value: "true"
```

你还需要安装 Rancher 2.6.7 或更高版本。

### 4. 创建 OIDC 提供程序

按照 [AWS 文档](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)为上一节中指定的集群创建 OIDC 提供程序。

### 5. 创建 IAM 角色

CSP Adapter 需要 IAM 角色才能签入/签出 Entitlement。

首先，配置如下的信任策略。你需要将 `MY_AWS_ACC` 替换为你的 AWS 帐号，将 `MY_AWS_REGION` 替换为你的 AWS 区域，并将 `MY_OIDC_PROVIDER` 替换为你的 OIDC 提供商 ID：

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::${MY_AWS_ACC}:oidc-provider/oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}:sub": "system:serviceaccount:cattle-csp-adapter-system:rancher-csp-adapter",
                    "oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```

接下来，为具有以下权限的角色使用策略：

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "RancherCSPAdapterPermissions",
            "Effect": "Allow",
            "Action": [
                "license-manager:ListReceivedLicenses",
                "license-manager:CheckoutLicense",
                "license-manager:ExtendLicenseConsumption",
                "license-manager:CheckInLicense",
                "license-manager:GetLicense",
                "license-manager:GetLicenseUsage"
            ],
            "Resource": "*"
        }
    ]
}
```

保存角色的名称。稍后安装 CSP Adapter 时将需要它。
