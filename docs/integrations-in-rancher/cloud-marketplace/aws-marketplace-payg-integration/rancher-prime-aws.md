---
title: Rancher Prime in AWS
---

## Prerequisites

Before using Rancher Prime on AWS as a PAYG offering, you need the following resources, information, and tools:

- A Rancher-compatible EKS cluster. Please see
   [Rancher support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/)
   for more details.
   Please see [Creating an EKS cluster](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#creating-an-eks-cluster-for-the-rancher-server)
   for bringing up an EKS cluster to install Rancher Prime PAYG which is covered in the later section of this document.
- An ingress installed on the EKS cluster so that Rancher is accessible outside
   of the cluster. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#5-install-an-ingress)
   for instructions on how to deploy Ingress-INGINX on EKS cluster.
- Get the Load Balancer IP. Please refer to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#6-get-load-balancer-ip) and Save the EXTERNAL-IP.
- The Rancher hostname must be a fully qualified domain name (FQDN) and its
   corresponding IP address must be resolvable from a public DNS. Please refer
   to [Rancher documentation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#7-set-up-dns)
   for instructions on how to setup DNS. This DNS is setup to point at the EXTERNAL-IP saved. 
- Installation requires you have the following tools available and properly configured to access your AWS account, and your EKS cluster:
    - `aws`
    - `curl`
    - `eksctl`
    - `helm` (v3 or greater)

## Preparing your cluster

### OIDC provider

Your EKS cluster is required to have an OIDC provider installed. To check for an OIDC provider first find the OIDC issuer with the following command. Substitute `$CLUSTER_NAME` with the *Name* of your EKS cluster and $REGION with *region* where it is running:

```shell
aws eks describe-cluster --name $CLUSTER_NAME --region $REGION --query cluster.identity.oidc.issuer --output text
```

A URL is returned, like `https://oidc.eks.region.amazonaws.com/id/1234567890ABCDEF`. The part after `https://` will be referred to in later instructions as the *OIDC Provider Identity* (e.g. `oidc.eks.region.amazonaws.com/id/1234567890ABCDEF`). The final section of the URL, `1234567890ABCDEF`, is the $OIDC_ID.

Using the $OIDC_ID of the issuer found above, you can check if a provider is installed with the following command:

```shell
aws iam list-open-id-connect-providers | grep $OIDC_ID
```

If there is no output, you will need to create an OIDC provider:

```shell
eksctl utils associate-iam-oidc-provider --cluster $CLUSTER_NAME --region $REGION --approve
```

### IAM Role

To provide the necessary permissions, an IAM role and an attached policy are required. The role name is passed as an argument during the *helm* deployment.

Create the role with a *role name* of your choosing (for example, `rancher-csp-iam-role`), and the required policy attached to it:

```shell
eksctl create iamserviceaccount \
  --name rancher-csp-billing-adapter \
  --namespace cattle-csp-billing-adapter-system \
  --cluster $CLUSTER_NAME \
  --region $REGION \
  --role-name $ROLE_NAME --role-only \
  --attach-policy-arn 'arn:aws:iam::aws:policy/AWSMarketplaceMeteringFullAccess' \
  --approve
```

