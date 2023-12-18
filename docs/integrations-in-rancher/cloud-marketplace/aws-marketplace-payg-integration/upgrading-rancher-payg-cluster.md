---
title: Upgrading Rancher Prime PAYG Cluster in AWS
---

The AWS Marketplace PAYG offering is tied to a billing adapter and the Rancher Prime version. These are updated periodically as new version of the billing adapter or Rancher Prime are released. In this situation, the helm chart will be updated with new tags and digests, and a new version of the helm chart will be uploaded.

To upgrade the deployed helm chart with the latest version, run the following helm command:

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

To check if the upgraded Helm chart deployed successfully:

```shell
helm ls -n cattle-rancher-csp-deployer-system
```

:::warning

PAYG customers will have constraints on getting updates to the offer based on the latest version SUSE has published to AWS, which may trail slightly behind the latest Rancher release.

:::
