---
title: Setting up the Bootstrap Password
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/bootstrap-password"/>
</head>

When you install Rancher, you can set a bootstrap password for the first admin account.

If you choose not to set a bootstrap password, Rancher randomly generates a bootstrap password for the first admin account.

For details on how to set the bootstrap password, see below.

## Password Requirements

The bootstrap password can be any length.

When you reset the first admin account's password after first login, the new password must be at least 12 characters long.

You can [customize the minimum password length](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups.md#minimum-password-length) for user accounts, within limitations.

Minimum password length can be any positive integer value between 2 and 256. Decimal values and leading zeroes are not allowed.

## Specifying the Bootstrap Password

<Tabs>
<TabItem value="Helm">

During [Rancher installation](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md), set `bootstrapPassword` alongside any other flags for the Rancher Helm chart. For example:

```bash
helm install rancher rancher-<CHART_REPO>/rancher \
  --set bootstrapPassword=<password>
```

</TabItem>
<TabItem value="Docker">

Pass the following value to the Docker install command:

```bash
-e CATTLE_BOOTSTRAP_PASSWORD=<password>
```

</TabItem>
</Tabs>

## Retrieving the Bootstrap Password

The bootstrap password is stored in the Docker container logs. After Rancher is installed, the UI shows instructions for how to retrieve the password based on your installation method. 

<Tabs>
<TabItem value="Helm">

```bash
kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{ .data.bootstrapPassword|base64decode}}{{ "\n" }}'
```

</TabItem>
<TabItem value="Docker">

```bash
docker logs container-id  2>&1 | grep "Bootstrap Password:"
```

</TabItem>
</Tabs>