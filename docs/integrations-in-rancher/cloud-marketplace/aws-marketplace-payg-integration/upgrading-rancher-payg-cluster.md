---
title: Upgrading Rancher PAYG Cluster
---

## Upgrading a Rancher Prime PAYG Cluster

The marketplace PAYG offer is tied to a billing adapter AND Rancher Prime version. These are updated periodically as new version of the billing adapter or Rancher are released.

In that case the helm chart will be updated with new tags and digests and new version of helm chart will be uploaded. In order to upgrade the deployed helm chart with new version, execute the following helm command:

```shell
helm upgrade -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/{{repository}}/rancher-cloud-helm/rancher-cloud \
  --version <upgraded_chart_version> \
  --set rancherHostname=$HOST_NAME \
  --set rancherServerURL=https://$HOST_NAME \
  --set rancherReplicas=$REPLICAS \
  --set rancherIngressClassName=nginx \
  --set global.aws.accountNumber=$AWS_ACCOUNT_ID \
  --set global.aws.roleName=$ROLE_NAME
```

To check if upgraded helm chart installation is deployed, run following command. It should display the upgraded chart version and REVISION incremented by 1 from previous install.

```
helm ls -n cattle-rancher-csp-deployer-system
```
