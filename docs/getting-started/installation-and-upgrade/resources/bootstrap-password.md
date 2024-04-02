---
title: Setting up the Bootstrap Password
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/bootstrap-password"/>
</head>

:::tip

If you choose not to set a bootstrap password, Rancher randomly generates a bootstrap password for the first admin account.

:::

When you install Rancher, you can use a variable to set a bootstrap password for the first admin account.

For details on how to use a variable to set the bootstrap password, see below.

## Password Requirements

The bootstrap password can be any length.

When you reset the first admin account's password after first login, the new password must be at least 12 characters long.

## Specifying the Bootstrap Password 

To specify the bootstrap password during initial Rancher installation, run the following commands.

<Tabs>
<TabItem value="Helm">
Set the following value in the Rancher Helm chart:

```yaml
.Values.bootstrapPassword
```

</TabItem>
<TabItem value="Docker">
Pass the following value to the Docker install command:

```bash
-e CATTLE_BOOTSTRAP_PASSWORD=$PASSWORD
```

`$PASSWORD` represents your chosen boostrap password.

</TabItem>
</Tabs>

## Retrieving the Bootstrap Password

The bootstrap password is stored in the Docker container logs. After Rancher is installed, the UI shows instructions for how to retrieve the password based on your installation method. 

<Tabs>
<TabItem value="Helm">
To retrieve the password, use kubectl:

```bash
kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{ .data.bootstrapPassword|base64decode}}{{ "\n" }}'
```

</TabItem>
<TabItem value="Docker">
To retrieve the password, use the Docker container ID:

```bash
docker logs  container-id  2>&1 | grep "Bootstrap Password:"
```

</TabItem>
</Tabs>