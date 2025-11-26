---
title: Access Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/access-clusters"/>
</head>

This section is about what tools can be used to access clusters managed by Rancher.

For information on how to give users permission to access a cluster, see the section on [adding users to clusters.](add-users-to-clusters.md)

For more information on roles-based access control, see [this section.](../../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)

For information on how to set up an authentication system, see [this section.](../../authentication-permissions-and-global-configuration/authentication-config/authentication-config.md)

## Clusters in Rancher UI

There are several paths to view and manage clusters through the Rancher UI.

### Clusters Page

You can access the **Clusters** page from the **☰** menu:

1. Click **☰**.
1. Select **Cluster Management**.

You can also access the **Clusters** page by clicking the **Manage** button above the clusters table on the Rancher UI **Home** page.

On the **Clusters** page, select **⁝** at the end of each row to view a submenu with the following options:

* [Kubectl Shell](use-kubectl-and-kubeconfig.md)
* Download KubeConfig
* Copy KubeConfig to Clipboard
* Edit Config
* View YAML
* Download YAML 

### Cluster Dashboard

On the **Clusters** page, select the **Explore** button at the end of each row to view that cluster's **Cluster Dashboard**. You can also view the dashboard by clicking the name of a cluster in the table, then clicking the **Explore** button on the **Cluster** page.

The **Cluster Dashboard** is also accessible from the Rancher UI **Home** page, by clicking on the name of a cluster.

You can also access the **Cluster Dashboard** from the **☰** in the top navigation bar:

1. Click **☰**.
1. Select the name of a cluster from the **Explore Cluster** menu option.

The **Cluster Dashboard** lists information about a specific cluster, such as number of nodes, memory usage, events, and resources.

## kubectl

You can use the Kubernetes command-line tool, [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/), to manage   your clusters. You have two options for using kubectl:

- **Rancher kubectl shell:** Interact with your clusters by launching a kubectl shell available in the Rancher UI. This option requires no configuration actions on your part. For more information, see [Accessing Clusters with kubectl Shell](use-kubectl-and-kubeconfig.md).
- **Terminal remote connection:** You can also interact with your clusters by installing [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) on your local desktop and then copying the cluster's kubeconfig file to your local `~/.kube/config` directory. For more information, see [Accessing Clusters with kubectl and a kubeconfig File](use-kubectl-and-kubeconfig.md).

## Rancher CLI

You can control your clusters by downloading Rancher's own command-line interface, [Rancher CLI](../../../../reference-guides/cli-with-rancher/cli-with-rancher.md). This CLI tool can interact directly with different clusters and projects or pass them `kubectl` commands.

## Rancher API

Finally, you can interact with your clusters over the Rancher API. Before you use the API, you must obtain an [API key](../../../../reference-guides/user-settings/api-keys.md). To view the different resource fields and actions for an API object, open the API UI, which can be accessed by clicking on **View in API** for any Rancher UI object.
