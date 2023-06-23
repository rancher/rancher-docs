---
title: Installing Rancher on Amazon EKS
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"/>
</head>

This page covers two ways to install Rancher on EKS.

The first is a guide for deploying the Rancher server on an EKS cluster using CloudFormation. This guide was created in collaboration with Amazon Web Services to show how to deploy Rancher following best practices.

The second is a guide for installing an EKS cluster with an ingress by using command line tools. This guide may be useful if you want to use fewer resources while trying out Rancher on EKS.

If you already have an EKS Kubernetes cluster, skip to the step about [installing an ingress.](#5-install-an-ingress) Then install the Rancher Helm chart following the instructions on [this page.](../../../pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md#install-the-rancher-helm-chart)


## Automated Quickstart using AWS Best Practices

Rancher and Amazon Web Services collaborated on a quick start guide for deploying Rancher on an EKS cluster following AWS best practices. The deployment guide is [here.](https://aws-quickstart.github.io/quickstart-eks-rancher/)

The quick start guide provides three options for deploying Rancher on EKS:

- **Deploy Rancher into a new VPC and new Amazon EKS cluster**. This option builds a new AWS environment consisting of the VPC, subnets, NAT gateways, security groups, bastion hosts, Amazon EKS cluster, and other infrastructure components. It then deploys Rancher into this new EKS cluster.
- **Deploy Rancher into an existing VPC and a new Amazon EKS cluster**. This option provisions Rancher in your existing AWS infrastructure.
- **Deploy Rancher into an existing VPC and existing Amazon EKS cluster**. This option provisions Rancher in your existing AWS infrastructure.

Deploying this Quick Start for a new virtual private cloud (VPC) and new Amazon EKS cluster using default parameters builds the following Rancher environment in the AWS Cloud:

- A highly available architecture that spans three Availability Zones.*
- A VPC configured with public and private subnets, according to AWS best practices, to provide you with your own virtual network on AWS.*
- In the public subnets:
  - Managed network address translation (NAT) gateways to allow outbound internet access for resources.*
  - Linux bastion hosts in an Auto Scaling group to allow inbound Secure Shell (SSH) access to Amazon Elastic Compute Cloud (Amazon EC2) instances in public and private subnets.*
- In the private subnets:
  - Kubernetes nodes in an Auto Scaling group.*
  - A Network Load Balancer (not shown) for accessing the Rancher console.
- Rancher deployment using AWS Systems Manager automation.
- Amazon EKS service for the EKS cluster, which provides the Kubernetes control plane.*
- An Amazon Route 53 DNS record for accessing the Rancher deployment.

\* The CloudFormation template that deploys the Quick Start into an existing Amazon EKS cluster skips the components marked by asterisks and prompts you for your existing VPC configuration.

## Creating an EKS Cluster for the Rancher Server

In this section, you'll install an EKS cluster with an ingress by using command line tools. This guide may be useful if you want to use fewer resources while trying out Rancher on EKS.

:::note Prerequisites:

- You should already have an AWS account.
- It is recommended to use an IAM user instead of the root AWS account. You will need the IAM user's access key and secret key to configure the AWS command line interface.
- The IAM user needs the minimum IAM policies described in the official [eksctl documentation.](https://eksctl.io/usage/minimum-iam-policies/)

:::

### 1. Prepare your Workstation

Install the following command line tools on your workstation:

- **The AWS CLI v2:** For help, refer to these [installation steps.](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- **eksctl:** For help, refer to these [installation steps.](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- **kubectl:** For help, refer to these [installation steps.](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
- **helm:** For help, refer to these [installation steps.](https://helm.sh/docs/intro/install/)

### 2. Configure the AWS CLI

To configure the AWS CLI, run the following command:

```
aws configure
```

Then enter the following values:

| Value | Description |
|-------|-------------|
| AWS Access Key ID | The access key credential for the IAM user with EKS permissions. |
| AWS Secret Access Key | The secret key credential for the IAM user with EKS permissions. |
| Default region name | An [AWS region](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions) where the cluster nodes will be located. |
| Default output format | Enter `json`. |

### 3. Create the EKS Cluster

To create an EKS cluster, run the following command. Use the AWS region that applies to your use case. When choosing a Kubernetes version, be sure to first consult the [support matrix](https://rancher.com/support-matrix/) to find the highest version of Kubernetes that has been validated for your Rancher version.

**Note:** If you're updating from an older version of Kubernetes, to Kubernetes v1.22 or above, you also need to [update](https://kubernetes.github.io/ingress-nginx/user-guide/k8s-122-migration/) ingress-nginx.

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

The cluster will take some time to be deployed with CloudFormation.

### 4. Test the Cluster

To test the cluster, run:

```
eksctl get cluster
```

The result should look like the following:

```
eksctl get cluster
2021-03-18 15:09:35 [ℹ]  eksctl version 0.40.0
2021-03-18 15:09:35 [ℹ]  using region us-west-2
NAME		REGION		EKSCTL CREATED
rancher-server-cluster		us-west-2	True
```

### 5. Install an Ingress

The cluster needs an Ingress so that Rancher can be accessed from outside the cluster.

To make sure that you choose the correct Ingress-NGINX Helm chart, first find an `Ingress-NGINX version` that's compatible with your Kubernetes version in the [Kubernetes/ingress-nginx support table](https://github.com/kubernetes/ingress-nginx#supported-versions-table). 

Then, list the Helm charts available to you by running the following command:

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm search repo ingress-nginx -l
```

The `helm search` command's output contains an `APP VERSION` column. The versions under this column are equivalent to the `Ingress-NGINX version` you chose earlier. Using the app version, select a chart version that bundles an app compatible with your Kubernetes install. For example, if you have Kubernetes v1.23, you can select the v4.6.0 Helm chart, since Ingress-NGINX v1.7.0 comes bundled with that chart, and v1.7.0 is compatible with Kubernetes v1.23. When in doubt, select the most recent compatible version.

Now that you know which Helm chart `version` you need, run the following command. It installs an `nginx-ingress-controller` with a Kubernetes load balancer service:

```
helm upgrade --install \
  ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --set controller.service.type=LoadBalancer \
  --version 4.6.0 \
  --create-namespace
```

### 6. Get Load Balancer IP

To get the address of the load balancer, run:

```
kubectl get service ingress-nginx-controller --namespace=ingress-nginx
```

The result should look similar to the following:

```
NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP                                                              PORT(S)
 AGE
ingress-nginx-controller   LoadBalancer   10.100.90.18   a904a952c73bf4f668a17c46ac7c56ab-962521486.us-west-2.elb.amazonaws.com   80:31229/TCP,443:31050/TCP
 27m
```

Save the `EXTERNAL-IP`.

### 7. Set up DNS

External traffic to the Rancher server will need to be directed at the load balancer you created.

Set up a DNS to point at the external IP that you saved. This DNS will be used as the Rancher server URL.

There are many valid ways to set up the DNS. For help, refer to the AWS documentation on [routing traffic to an ELB load balancer.](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html)

### 8. Install the Rancher Helm Chart

Next, install the Rancher Helm chart by following the instructions on [this page.](../../../pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md#install-the-rancher-helm-chart) The Helm instructions are the same for installing Rancher on any Kubernetes distribution.

Use that DNS name from the previous step as the Rancher server URL when you install Rancher. It can be passed in as a Helm option. For example, if the DNS name is `rancher.my.org`, you could run the Helm installation command with the option `--set hostname=rancher.my.org`.

**_New in v2.6.7_**

When installing Rancher on top of this setup, you will also need to pass the value below into the Rancher Helm install command in order to set the name of the ingress controller to be used with Rancher's ingress resource:

```
--set ingress.ingressClassName=nginx
```

Refer [here for the Helm install command](../../../pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md#5-install-rancher-with-helm-and-your-chosen-certificate-option) for your chosen certificate option.
