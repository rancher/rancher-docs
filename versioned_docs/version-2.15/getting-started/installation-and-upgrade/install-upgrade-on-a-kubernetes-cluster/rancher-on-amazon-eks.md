---
title: Installing Rancher on Amazon EKS
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"/>
</head>

This page covers installing Rancher on an Amazon EKS cluster.  You can also [install Rancher through the AWS Marketplace](../../quick-start-guides/deploy-rancher-manager/aws-marketplace.md).

If you already have an EKS Kubernetes cluster, skip to the step about [installing an ingress.](#5-install-an-ingress) Then install the Rancher Helm chart following the instructions on [this page.](install-upgrade-on-a-kubernetes-cluster.md#install-the-rancher-helm-chart)

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

The cluster needs an Ingress so that Rancher can be accessed from outside the cluster. Installing an Ingress requires allocating a public IP address. Ensure you have sufficient quota, otherwise it will fail to assign the IP address. Limits for public IP addresses are applicable at a regional level per subscription. You can use a managed ingress controller provided by AWS (ALB) or a third-party ingress controller like Traefik.

:::warning
It is not recommended to install a third-party ingress controller, like Traefik, if a managed ingress controller (ALB) is already being used.
:::


:::warning
**Ingress-NGINX EOL:** The community `ingress-nginx` controller reaches End-of-Life (EOL) in March 2026. This page uses Traefik, which is the recommended migration path for Rancher environments. 
:::

Traefik includes a native Ingress NGINX provider. This allows you to migrate from NGINX without rewriting your existing Ingress objects, as Traefik will automatically interpret `nginx.ingress.kubernetes.io` annotations. If you are upgrading a cluster that is already using `ingress-nginx`, follow this [guide](https://doc.traefik.io/traefik/migrate/nginx-to-traefik/) for more information.

To install Traefik (chart version 39.0.0) on a fresh cluster, run the following `helm` commands:
```bash
helm repo add traefik https://traefik.github.io/charts
helm repo update
helm upgrade --install \
  traefik traefik/traefik \
  --namespace traefik \
  --version 39.0.0 \
  --create-namespace \
  --set service.type=LoadBalancer \
  --set ping.enabled=true \
```


### 6. Get Load Balancer IP

To get the address of the load balancer, run:

```bash
kubectl get service traefik --namespace=traefik
```

The result should look similar to the following:

```bash
NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)
 AGE
traefik  LoadBalancer   10.100.90.18   a904a952c73bf4f668a17c46ac7c56ab-962521486.us-west-2.elb.amazonaws.com   80:31229/TCP,443:31050/TCP
 67s
```

Save the `EXTERNAL-IP`.

### 7. Set up DNS

External traffic to the Rancher server will need to be directed at the load balancer you created.

Set up a DNS to point at the external IP that you saved. This DNS will be used as the Rancher server URL.

There are many valid ways to set up the DNS. For help, refer to the AWS documentation on [routing traffic to an ELB load balancer.](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html)

### 8. Install the Rancher Helm Chart

Next, install the Rancher Helm chart by following the instructions on [this page.](install-upgrade-on-a-kubernetes-cluster.md#install-the-rancher-helm-chart) The Helm instructions are the same for installing Rancher on any Kubernetes distribution.

Use that DNS name from the previous step as the Rancher server URL when you install Rancher. It can be passed in as a Helm option. For example, if the DNS name is `rancher.my.org`, you could run the Helm installation command with the option `--set hostname=rancher.my.org`.

When installing Rancher on top of this setup, you will also need to pass the value below into the Rancher Helm install command in order to set the name of the ingress controller to be used with Rancher's ingress resource:

```
--set ingress.ingressClassName=traefik
```

Refer [here for the Helm install command](install-upgrade-on-a-kubernetes-cluster.md#5-install-rancher-with-helm-and-your-chosen-certificate-option) for your chosen certificate option.
