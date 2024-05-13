---
title: Node Drivers
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"/>
</head>

A node driver is the same as a [Docker Machine driver](https://docs.docker.com/machine/drivers/). Node drivers are used to provision hosts, which Rancher uses to launch and manage Kubernetes clusters. By default, Rancher is packaged with many node drivers, but you can also create and add custom node drivers to Rancher.

Only `Active` node drivers are displayed in the Rancher UI when you create node templates. If there are specific node drivers that you don't want to show your users, you must deactivate these node drivers.

## Managing Node Drivers

:::note Prerequisites:

To create, edit, or delete drivers, you need _one_ of the following permissions:

- [Administrator Global Permissions](../manage-role-based-access-control-rbac/global-permissions.md)
- [Custom Global Permissions](../manage-role-based-access-control-rbac/global-permissions.md#custom-global-permissions) with the [Manage Node Drivers](../manage-role-based-access-control-rbac/global-permissions.md) role assigned.

:::

### Activating/Deactivating Node Drivers

By default, Rancher only activates drivers for the most popular cloud providers, such as Amazon EC2, Azure, DigitalOcean, Linode and vSphere. If you want to show or hide any node driver, you can change its status.

1. In the upper left corner, click **☰ > Cluster Management**.
1.  In the left navigation menu, click **Drivers**.
1.	On the **Node Drivers** tab, select the driver that you wish to activate or deactivate and click **⋮ > Activate** or **⋮ > Deactivate**.

:::danger 

You can lose access to clusters after deactivating a node driver.

Deactivating a node driver doesn't just affect its visibility in the Rancher UI. When you deactivate or delete a node driver, any nodes deployed with that driver become inaccessible. 

For example, if you deactivate a vSphere node driver to hide it in the UI, and you have a vSphere cluster that was deployed with that driver, the initial node in the cluster will fail, and the entire cluster will become inaccessible. Attempts to delete the vSphere nodes will fail, with nodes stuck in an extended `Removing` state.

Before you deactivate a node driver, make sure that it has no associated clusters. One way to check is to see if the respective platform for a driver is listed among your clusters:

1. In the upper left corner, click **☰ > Cluster Management**.
1. Select **Clusters**.
1. Check the **Provider** column of the table for instances of the node driver you are deactivating.

:::

### Adding Custom Node Drivers

If you want to use a node driver that Rancher doesn't support out-of-the-box, you can add that provider's driver in order to start using them to create node templates and eventually node pools for your Kubernetes cluster.

1. In the upper left corner, click **☰ > Cluster Management**.
1. In the left navigation menu, click **Drivers**.
1. On **Node Drivers** tab, click **Add Node Driver**.
1.	Complete the **Add Node Driver** form. Then click **Create**.

### Developing Your Own Node Drivers

Node drivers are implemented with [Docker Desktop](https://docs.docker.com/desktop/).
