---
title: Upgrading Rancher Prime PAYG Cluster in AWS
---

The AWS Marketplace PAYG offering is tied to a billing adapter and the Rancher Prime version. These are periodically updated as new versions of the billing adapter or Rancher Prime are released. When a new update is available, the Helm chart is updated with new tags and digests, and a new version of the Helm chart is uploaded.

To upgrade the deployed Helm chart to the latest version, run the following Helm command:

```shell
helm upgrade -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/<respository>/rancher-cloud-helm/rancher-cloud \
  --version <upgraded-chart-version> \
  --set rancherHostname=<host-name> \
  --set rancherServerURL=https://<host-name> \
  --set rancherReplicas=<replicas> \
  --set rancherIngressClassName=nginx \
  --set global.aws.accountNumber=<aws-account-id> \
  --set global.aws.roleName=<role-name>
```

To check if the upgraded Helm chart deployed successfully, run the following Helm command:

```shell
helm ls -n cattle-rancher-csp-deployer-system
```

:::warning

Rancher Prime PAYG customers have constraints on getting updates, based on the latest version SUSE has published to AWS. The latest available Rancher Prime version may trail slightly behind the latest Rancher release.

:::
