---
title: Secrets
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"/>
</head>

[Secrets](https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets) store sensitive data like passwords, tokens, or keys. They may contain one or more key value pairs.

:::note

This page is about secrets in general. For details on setting up a private registry, refer to the section on [registries.](kubernetes-and-docker-registries.md)

:::

When configuring a workload, you'll be able to choose which secrets to include. Like config maps, secrets can be referenced by workloads as either an environment variable or a volume mount.

Mounted secrets will be updated automatically unless they are mounted as subpath volumes. For details on how updated secrets are propagated, refer to the [Kubernetes documentation.](https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically)

## Creating Secrets in Namespaces

1. In the upper left corner, click **☰ > Cluster Management**.
1. Go to the cluster where you want to add a secret and click **Explore**.
1. To navigate to secrets, you may click either **Storage > Secrets** or **More Resources > Core > Secrets**.
1. Select the **Namespaced** tab.
1. Click **Create**.
1. Select the type of secret you want to create.
1. Select a **Namespace** for the secret.
1. Enter a **Name** for the secret.

    :::note

    Kubernetes classifies secrets, certificates, and registries all as [secrets](https://kubernetes.io/docs/concepts/configuration/secret/), and no two secrets in a namespace can have duplicate names. Therefore, to prevent conflicts, your secret must have a unique name among all secrets within your workspace.

    :::

1. From **Data**, click **Add** to add a key-value pair. Add as many values as you need.

    :::tip

    You can add multiple key value pairs to the secret by copying and pasting.

    :::

    ![](/img/bulk-key-values.gif)

1. Click **Save**.

**Result:** Your secret is added to the namespace you chose. You can view the secret in the Rancher UI by clicking either **Storage > Secrets** or **More Resources > Core > Secrets**.

Mounted secrets will be updated automatically unless they are mounted as subpath volumes. For details on how updated secrets are propagated, refer to the [Kubernetes documentation.](https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically)


## Creating Secrets in Projects

When creating a secret in a project scope, the secret will be copied into all namespaces within the project.

### Creating a Project Scoped Secret in the UI

1. In the upper left corner, click **☰ > Cluster Management**.
1. Go to the cluster where you want to add a secret and click **Explore**.
1. To navigate to secrets, you may click either **Storage > Secrets** or **More Resources > Core > Secrets**.
1. Select the **Project Scoped** tab.
1. Click **Create Project Scoped Secret**.
1. Select the type of secret you want to create.
1. Select a **Project** for the secret.
1. Enter a **Name** for the secret.

    :::note

    Kubernetes classifies secrets, certificates, and registries all as [secrets](https://kubernetes.io/docs/concepts/configuration/secret/), and no two secrets in a namespace can have duplicate names. If you create a project scoped secret that has the same name as an existing secret in one of the project namespaces, the existing secret will be overwritten.

    :::

1. From **Data**, click **Add** to add a key-value pair. Add as many values as you need.

    :::tip

    You can add multiple key value pairs to the secret by copying and pasting.

    :::

    ![](/img/bulk-key-values.gif)

1. Click **Save**.

**Result:** Your secret is added to each namespace within the project. You can view the secret in the Rancher UI by clicking either **Storage > Secrets** or **More Resources > Core > Secrets**.

### Creating a Project Scoped Secret with kubectl

Project scoped secrets works by creating the original secret on the management cluster in what's known as the "Project Backing Namespace". Rancher stores important project related information in this namespace. You can find it in the `status.backingNamespace` field in the project CRD, or by doing `kubectl get projects -A` in the management cluster.

In order for the secret to be acknowledged by Rancher as a project scoped secret, it also needs the label `management.cattle.io/project-scoped-secret: <projectID>`.

Example yaml:

```
apiVersion: v1
data:
  key: ZG9n
kind: Secret
metadata:
  labels:
    management.cattle.io/project-scoped-secret: p-vwxyz
  name: test-secret
  namespace: c-abc123-p-vwxyz
type: Opaque
```

In the above yaml, the namespace is the backing namespace of project `p-vwxyz` and the project scoped secret label references the projectID. When applied to the management cluster, all namespaces within the project `p-vwxyz` will contain a copy of `test-secret`.

## What's Next?

Now that you have a secret added to a namespace, you can add it to a workload that you deploy.

For more information on adding secret to a workload, see [Deploying Workloads](workloads-and-pods/deploy-workloads.md).
