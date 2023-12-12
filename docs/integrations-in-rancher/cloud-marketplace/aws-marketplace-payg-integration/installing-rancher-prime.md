---
title: Installing Rancher Prime PAYG on AWS
---

This page covers how to install the Rancher Prime PAYG offering on Amazon's AWS Marketplace.

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

## Installing Rancher  

1. Log helm into the AWS Marketplace Elastic Container Registry (ECR) to fetch the application. The AWS Marketplace ECR is always in the `us-east-1` region:

  ```shell
  export HELM_EXPERIMENTAL_OCI=1

  aws --region us-east-1 ecr get-login-password \
    | helm registry login --username AWS \
    --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com
  ```

1. Install Rancher into your cluster using `helm`. Customize your `helm` installation values if needed:

  :::note

  Rancher Prime utilizes cert-manager to issue and maintain its certificates. Rancher will generate a CA certificate of its own, and sign a cert using that CA.

  :::

  The Rancher hostname must be resolvable by a public DNS. Please refer to the [Prerequisites](./rancher-prime-aws.md#prerequisites) section for more details. For example, if the DNS name is rancher.my.org, HOST_NAME=rancher.my.org.

  ```shell
  helm install -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
  oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/$REPOSITORY/rancher-cloud-helm/rancher-cloud \
    --version $CHART_VERSION \
    --set rancherHostname=$HOST_NAME \
    --set rancherServerURL=https://$HOST_NAME \
    --set rancherReplicas=$REPLICAS \
    --set rancherBootstrapPassword=$BOOTSTRAP_PASSWORD \
    --set rancherIngressClassName=nginx \
    --set global.aws.accountNumber=$AWS_ACCOUNT_ID \
    --set global.aws.roleName=$ROLE_NAME
  ```

  :::note

  Monitor the rancher-cloud pod logs as the rancher-cloud pod is deleted 1 minute after a successful or failed installation.

  :::

  ```shell
  kubectl logs -f $POD -n cattle-rancher-csp-deployer-system
  ```

1. After a successful deployment, running the following command should produce a similar output.

  ```shell
  kubectl get deployments --all-namespaces
  ```

  ```shell
  NAMESPACE                           NAME                          READY   UP-TO-DATE   AVAILABLE   AGE
  cattle-csp-billing-adapter-system   csp-rancher-usage-operator    1/1     1            1           30m
  cattle-csp-billing-adapter-system   rancher-csp-billing-adapter   1/1     1            1           30m
  cattle-fleet-local-system           fleet-agent                   1/1     1            1           29m
  cattle-fleet-system                 fleet-controller              1/1     1            1           29m
  cattle-fleet-system                 gitjob                        1/1     1            1           29m
  cattle-provisioning-capi-system     capi-controller-manager       1/1     1            1           28m
  cattle-system                       rancher                       1/1     1            1           32m
  cattle-system                       rancher-webhook               1/1     1            1           29m
  cert-manager                        cert-manager                  1/1     1            1           32m
  cert-manager                        cert-manager-cainjector       1/1     1            1           32m
  cert-manager                        cert-manager-webhook          1/1     1            1           32m
  ingress-nginx                       ingress-nginx-controller      1/1     1            1           33m
  kube-system                         coredns                       2/2     2            2           38m
  ```

### Check Helm Chart Installation

Check that the helm chart installation is completed:

```shell
helm ls -n cattle-rancher-csp-deployer-system
```

After completing the helm chart installation, you can verify the installation was successful:

```shell
helm status rancher-cloud -n cattle-rancher-csp-deployer-system
```

Refer to the [Troubleshooting](troubleshooting.md) section for a failed installation.

After the helm chart installation is completed, Rancher Prime is successfully installed.

## Log into the Rancher Dashboard

You may now login to Rancher dashboard by pointing your browser to the Rancher server URL *https://<Rancher hostname\>*, where *Rancher hostname* is the [hostname](#installing-rancher) you have chosen when installing Rancher.

:::note

The Rancher hostname must be resolvable by public DNS. Please refer to the [Prerequisites](rancher-prime-aws.md#prerequisites) section for more details.

:::

## Uninstalling Rancher Prime PAYG Offering

To uninstall the Rancher Prime PAYG offering, migrate any non-Rancher workloads to a different cluster and destroy the Rancher cluster.
