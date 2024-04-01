---
title: Setting up the Bootstrap Password
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/bootstrap-password"/>
</head>

When you install Rancher, you can use a variable to set a bootstrap password for the first admin account. If you choose not to set a bootstrap password, Rancher randomly generates a bootstrap password for this account.

For details on how to use a variable to set the bootstrap password, see below.

## Bootstrap Password Requirements

The bootstrap password must be at least 12 characters long.

## Specifying the Bootstrap Password in Helm Installs

For a Helm install, users can specify the bootstrap password variable by configuring it in the Helm chart values with `.Values.bootstrapPassword`.

The password will be stored in a Kubernetes secret. After Rancher is installed, the UI will show instructions for how to retrieve the password using kubectl:

```
kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{ .data.bootstrapPassword|base64decode}}{{ "\n" }}'
```

## Specifying the Bootstrap Password in Docker Installs

For a Docker install, you can specify the bootstrap password by passing `-e CATTLE_BOOTSTRAP_PASSWORD=password` to the Docker install command.

The password will be stored in the Docker container logs. After Rancher is installed, the UI will show instructions for how to retrieve the password using the Docker container ID:

```
docker logs  container-id  2>&1 | grep "Bootstrap Password:"
```