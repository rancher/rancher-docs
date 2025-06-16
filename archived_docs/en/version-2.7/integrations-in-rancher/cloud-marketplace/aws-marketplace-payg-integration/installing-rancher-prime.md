---
title: Installing Rancher Prime PAYG on AWS
---

This page covers installing the Rancher Prime PAYG offering on Amazon's AWS Marketplace.

## Preparing your cluster

### OIDC provider

Your EKS cluster requires that you install an OIDC provider. To check that you've installed an OIDC provider, find the OIDC issuer with the following command. Substitute `<cluster-name>` with the name of your EKS cluster and `<region>` with the region where it is running:

```shell
aws eks describe-cluster --name <cluster-name> --region <region> --query cluster.identity.oidc.issuer --output text
```

This should return a URL, such as `https://oidc.eks.region.amazonaws.com/id/1234567890ABCDEF`. The part after `https://` (e.g. `oidc.eks.region.amazonaws.com/id/1234567890ABCDEF`) is the OIDC Provider Identity. The final section of the URL, `1234567890ABCDEF`, is the OIDC ID.

Use the OIDC ID to check if the EKS cluster has a provider:

```shell
aws iam list-open-id-connect-providers | grep <oidc-id>
```

If the last command produces no output, create an OIDC provider:

```shell
eksctl utils associate-iam-oidc-provider --cluster <cluster-name> --region <region> --approve
```

### IAM Role

You must create an IAM role and an attached policy to provide the necessary permissions. The role name is passed as an argument during the Helm deployment.

Create the role with a `<role-name>` of your choosing (for example, `rancher-csp-iam-role`) and attach the required policy:

```shell
eksctl create iamserviceaccount \
  --name rancher-csp-billing-adapter \
  --namespace cattle-csp-billing-adapter-system \
  --cluster <cluster-name> \
  --region <region> \
  --role-name <role-name> --role-only \
  --attach-policy-arn 'arn:aws:iam::aws:policy/AWSMarketplaceMeteringFullAccess' \
  --approve
```

## Installing Rancher  

1. Log Helm into the AWS Marketplace Elastic Container Registry (ECR) to fetch the application. The AWS Marketplace ECR is always in the `us-east-1` region:

  ```shell
  export HELM_EXPERIMENTAL_OCI=1

  aws --region us-east-1 ecr get-login-password \
    | helm registry login --username AWS \
    --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com
  ```

1. Install Rancher with Helm. Customize your Helm installation values if needed.

  :::note

  Rancher Prime uses cert-manager to issue and maintain its certificates. Rancher generates its own CA certificate and signs certificates with that CA.

  :::

  The Rancher hostname must be resolvable by a public DNS. For more details, see [Prerequisites](prerequisites.md). For example, if the DNS name is `rancher.my.org`, then replace `<host-name>` with `rancher.my.org` when running the `helm install` command.

  ```shell
  helm install -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
  oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/$REPOSITORY/rancher-cloud-helm/rancher-cloud \
    --version <chart-version> \
    --set rancherHostname=<host-name>\
    --set rancherServerURL=https://<host-name>\
    --set rancherReplicas=<replicas> \
    --set rancherBootstrapPassword=<bootstrap-password>\
    --set rancherIngressClassName=nginx \
    --set global.aws.accountNumber=<aws-account-id>\
    --set global.aws.roleName=<role-name>
  ```

  :::note

  Monitor the logs for the `rancher-cloud` pod since it is deleted one minute after a successful or failed installation.

  ```shell
  kubectl logs -f rancher-cloud -n cattle-rancher-csp-deployer-system
  ```

  :::

1. After a successful deployment, the following command should produce similar output:

  ```shell
  kubectl get deployments --all-namespaces
  ```

**Response:**

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

1. Check that the Helm chart installation completed:

```shell
helm ls -n cattle-rancher-csp-deployer-system
```

2. Verify the status of the installation:

```shell
helm status rancher-cloud -n cattle-rancher-csp-deployer-system
```

Refer to the [Troubleshooting](troubleshooting.md) section if installation fails.

When Helm chart installation successfully completes, Rancher Prime will be installed.

## Log into the Rancher Dashboard

You may now log in to the Rancher dashboard by pointing your browser to the Rancher server URL, `https://<host-name>`. The `<host-name>` is the hostname you entered when you [installed Rancher](#installing-rancher).

:::note

The Rancher hostname must be resolvable by public DNS. For more details, see [Prerequisites](prerequisites.md).

:::

## Uninstalling Rancher Prime PAYG Offering

Run the following command to uninstall Rancher Prime:

```shell
helm uninstall -n cattle-rancher-csp-deployer-system rancher-cloud
```

Uninstalling Rancher Prime may not remove all of the Kubernetes resources created by Rancher. Run the [Rancher resource cleanup script](https://github.com/rancher/rancher-cleanup) to perform a more comprehensive cleanup.

The best practice for uninstalling the Rancher Prime PAYG offering is to migrate any non-Rancher workloads to a different cluster and destroy the Rancher cluster.

:::warning
Ensure that you prepare and migrate any non-Rancher workloads off of the cluster before you destroy the cluster. These resources are nonrecoverable.
:::
