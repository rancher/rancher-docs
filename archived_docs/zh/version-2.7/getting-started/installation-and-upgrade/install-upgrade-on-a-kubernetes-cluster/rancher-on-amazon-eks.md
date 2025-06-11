---
title: 在 Amazon EKS 上安装 Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"/>
</head>

本文介绍了如何在 Amazon EKS 集群上安装 Rancher。你也可以[通过 AWS Marketplace 安装 Rancher](../../quick-start-guides/deploy-rancher-manager/aws-marketplace.md)。

如果你已经有一个 EKS Kubernetes 集群，请直接跳转到[安装 Ingress](#5-安装-ingress)这个步骤。然后按照[此处](install-upgrade-on-a-kubernetes-cluster.md#安装-rancher-helm-chart)的步骤安装 Rancher Helm Chart。

## 为 Rancher Server 创建 EKS 集群

在本节中，你将使用命令行工具安装一个带有 Ingress 的 EKS 集群。如果你想在 EKS 上使用 Rancher 时使用较少的资源，请使用此方法。

:::note 先决条件：

- 已有一个 AWS 账户。
- 建议使用 IAM 用户而不是 AWS 根账户。你将需要 IAM 用户的访问密钥 (access key) 和密文秘钥 (secret key) 来配置 AWS 命令行界面。
- IAM 用户需要具备[eksctl 文档](https://eksctl.io/usage/minimum-iam-policies/)中描述的最低 IAM 策略。

:::

### 1. 准备你的工作站

在工作站上安装以下命令行工具：

- **AWS CLI v2**：如需获取帮助，请参见[安装步骤](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)。
- **eksctl**：如需获取帮助，请参见[安装步骤](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)。
- **kubectl**：如需获得帮助，请参见[安装步骤](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)。
- **helm**：如需获取帮助，请参见[安装步骤](https://helm.sh/docs/intro/install/)。

### 2. 配置 AWS CLI

运行以下命令，配置 AWS CLI：

```
aws configure
```

输入以下参数：

| 值                    | 描述                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Access Key ID     | 具有 EKS 权限的 IAM 用户的访问密钥凭证。                                                                                                                                   |
| AWS Secret Access Key | 具有 EKS 权限的 IAM 用户的密文密钥凭证。                                                                                                                                   |
| Default region name   | 集群节点所在的 [AWS 区域](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions)。 |
| Default output format | 输入 `json`。                                                                                                                                                              |

### 3. 创建 EKS 集群

运行以下命令创建一个 EKS 集群。使用适用于你的用例的 AWS 区域。在选择 Kubernetes 版本时，请务必先查阅[支持矩阵](https://rancher.com/support-matrix/)，以找出已针对你的 Rancher 版本验证的最新 Kubernetes 版本。

**注意**：如果你要从旧的 Kubernetes 版本更新到 Kubernetes v1.22 或更高版本，你还需要[更新](https://kubernetes.github.io/ingress-nginx/user-guide/k8s-122-migration/) ingress-nginx。

```
eksctl create cluster \
  --name rancher-server \
  --version <VERSION> \
  --region us-west-2 \
  --nodegroup-name ranchernodes \
  --nodes 3 \
  --nodes-min 1 \
  --nodes-max 4 \
  --managed
```

使用 CloudFormation 进行的集群部署可能需要一些时间才能完成。

### 4. 测试集群

运行以下命令测试集群：

```
eksctl get cluster
```

返回的结果应与以下内容类似：

```
eksctl get cluster
2021-03-18 15:09:35 [ℹ]  eksctl version 0.40.0
2021-03-18 15:09:35 [ℹ]  using region us-west-2
NAME		REGION		EKSCTL CREATED
rancher-server-cluster		us-west-2	True
```

### 5. 安装 Ingress

集群需要一个 Ingress，以从集群外部访问 Rancher。

为确保你选择了正确的 Ingress-NGINX Helm Chart，首先在 [Kubernetes/ingress-nginx 支持表](https://github.com/kubernetes/ingress-nginx#supported-versions-table)中找到与你的 Kubernetes 版本兼容的 `Ingress-NGINX 版本`。

然后，运行以下命令列出可用的 Helm Chart：

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm search repo ingress-nginx -l
```

`helm search` 命令的输出包含一个 `APP VERSION` 列。此列下的版本等同于你之前选择的 `Ingress-NGINX 版本`。使用应用程序版本，选择一个 Chart 版本，该版本打包了与你的 Kubernetes 兼容的应用程序。例如，如果使用的是 Kubernetes v1.23，则可以选择 v4.6.0 Helm Chart，因为 Ingress-NGINX v1.7.0 与该 Chart 打包在一起，而 v1.7.0 与 Kubernetes v1.23 兼容。如有疑问，请选择最新的兼容版本。

了解你需要的 Helm chart `版本`后，运行以下命令。它安装一个带有 Kubernetes 负载均衡器服务的 `nginx-ingress-controller`：

```
helm upgrade --install \
  ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --set controller.service.type=LoadBalancer \
  --version 4.6.0 \
  --create-namespace
```

### 6. 获取负载均衡器的 IP

运行以下命令获取负载均衡器的 IP 地址：

```
kubectl get service ingress-nginx-controller --namespace=ingress-nginx
```

返回的结果应与以下内容类似：

```
NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP                                                              PORT(S)
 AGE
ingress-nginx-controller   LoadBalancer   10.100.90.18   a904a952c73bf4f668a17c46ac7c56ab-962521486.us-west-2.elb.amazonaws.com   80:31229/TCP,443:31050/TCP
 27m
```

保存 `EXTERNAL-IP`。

### 7. 设置 DNS

到 Rancher Server 的外部流量需要重定向到你创建的负载均衡器。

创建指向你保存的外部 IP 地址的 DNS。这个 DNS 会用作 Rancher Server 的 URL。

设置 DNS 的有效方法有很多。如需获得帮助，请参见 AWS 文档中心的[转发流量到 ELB 负载均衡器](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html)。

### 8. 安装 Rancher Helm Chart

按照[本页](install-upgrade-on-a-kubernetes-cluster.md#安装-rancher-helm-chart)的说明安装 Rancher Helm Chart。任何 Kubernetes 发行版上安装的 Rancher 的 Helm 说明都是一样的。

安装 Rancher 时，使用上一步获取的 DNS 名称作为 Rancher Server 的 URL。它可以作为 Helm 选项传递进来。例如，如果 DNS 名称是 `rancher.my.org`，你需要使用 `--set hostname=rancher.my.org` 选项来运行 Helm 安装命令。

在此设置之上安装 Rancher 时，你还需要将以下值传递到 Rancher Helm 安装命令，以设置与 Rancher 的 Ingress 资源一起使用的 Ingress Controller 的名称：

```
--set ingress.ingressClassName=nginx
```

请参阅[Helm 安装命令](install-upgrade-on-a-kubernetes-cluster.md#5-根据你选择的证书选项通过-helm-安装-rancher)了解你的证书选项。
