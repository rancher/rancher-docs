---
title: Upgrading Rancher Prime PAYG Cluster in AWS
---

The AWS Marketplace PAYG offering is tied to a billing adapter and the Rancher Prime version. These are periodically updated as new versions of the billing adapter or Rancher Prime are released. When this happens, the Helm chart is updated with new tags and digests, and a new version of the Helm chart is uploaded.

To upgrade the deployed Helm chart to the latest version, run the following Helm command:

```shell
helm upgrade -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/$REPOSITORY/rancher-cloud-helm/rancher-cloud \
  --version $UPGRADED_CHART_VERSION \
  --set rancherHostname=$HOST_NAME \
  --set rancherServerURL=https://$HOST_NAME \
  --set rancherReplicas=$REPLICAS \
  --set rancherIngressClassName=nginx \
  --set global.aws.accountNumber=$AWS_ACCOUNT_ID \
  --set global.aws.roleName=$ROLE_NAME
```

To check if the upgraded Helm chart deployed successfully, run the following Helm command:

```shell
helm ls -n cattle-rancher-csp-deployer-system
```

:::warning

Rancher Prime PAYG customers have constraints on getting updates, based on the latest version SUSE has published to AWS. The latest available Rancher Prime version may trail slightly behind the latest Rancher release.

:::
