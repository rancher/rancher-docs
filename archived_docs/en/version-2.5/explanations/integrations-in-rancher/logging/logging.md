---
title: Rancher Integration with Logging Services
description: Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/logging"/>
</head>

The [Logging operator](https://kube-logging.github.io/docs/) now powers Rancher's logging solution in place of the former, in-house solution.

For an overview of the changes in v2.5, see [this section.](logging-architecture.md#changes-in-rancher-v25) For information about migrating from Logging V1, see [this page.](migrate-to-rancher-v2.5+-logging.md)


## Enabling Logging

You can enable the logging for a Rancher managed cluster by going to the Apps page and installing the logging app.

1. In the Rancher UI, go to the cluster where you want to install logging and click **Cluster Explorer**.
1. Click **Apps**.
1. Click the `rancher-logging` app.
1. Scroll to the bottom of the Helm chart README and click **Install**.

**Result:** The logging app is deployed in the `cattle-logging-system` namespace.

## Uninstall Logging

1. From the **Cluster Explorer**, click **Apps & Marketplace**.
1. Click **Installed Apps**.
1. Go to the `cattle-logging-system` namespace and check the boxes for `rancher-logging` and `rancher-logging-crd`.
1. Click **Delete**.
1. Confirm **Delete**.

**Result** `rancher-logging` is uninstalled.

## Architecture

For more information about how the logging application works, see [this section.](logging-architecture.md)



## Role-based Access Control

Rancher logging has two roles, `logging-admin` and `logging-view`. For more information on how and when to use these roles, see [this page.](rbac-for-logging.md)

## Configuring Logging Custom Resources

To manage `Flows,` `ClusterFlows`, `Outputs`, and `ClusterOutputs`, go to the **Cluster Explorer** in the Rancher UI. In the upper left corner, click **Cluster Explorer > Logging**.

### Flows and ClusterFlows

For help with configuring `Flows` and `ClusterFlows`, see [this page.](custom-resource-configuration/flows-and-clusterflows.md)

### Outputs and ClusterOutputs

For help with configuring `Outputs` and `ClusterOutputs`, see [this page.](custom-resource-configuration/outputs-and-clusteroutputs.md)

## Configuring the Logging Helm Chart

For a list of options that can be configured when the logging application is installed or upgraded, see [this page.](logging-helm-chart-options.md)

### Windows Support

<Tabs>
<TabItem value="Rancher v2.5.8+">

As of Rancher v2.5.8, logging support for Windows clusters has been added and logs can be collected from Windows nodes.

For details on how to enable or disable Windows node logging, see [this section.](logging-helm-chart-options.md#enabledisable-windows-node-logging)


</TabItem>
<TabItem value="Rancher before v2.5.8">

Clusters with Windows workers support exporting logs from Linux nodes, but Windows node logs are currently unable to be exported.
Only Linux node logs are able to be exported.

To allow the logging pods to be scheduled on Linux nodes, tolerations must be added to the pods. Refer to the [Working with Taints and Tolerations](taints-and-tolerations.md) section for details and an example.

</TabItem>
</Tabs>


### Working with a Custom Docker Root Directory

For details on using a custom Docker root directory, see [this section.](logging-helm-chart-options.md#working-with-a-custom-docker-root-directory)


### Working with Taints and Tolerations

For information on how to use taints and tolerations with the logging application, see [this page.](taints-and-tolerations.md)


### Logging V2 with SELinux

_Available as of v2.5.8_

For information on enabling the logging application for SELinux-enabled nodes, see [this section.](logging-helm-chart-options.md#enabling-the-logging-application-to-work-with-selinux)

### Additional Logging Sources

By default, Rancher collects logs for control plane components and node components for all cluster types. In some cases additional logs can be collected. For details, see [this section.](logging-helm-chart-options.md#additional-logging-sources)


## Troubleshooting

### The Logging Buffer Overloads Pods

Depending on your configuration, the default buffer size may be too large and cause pod failures. One way to reduce the load is to lower the logger's flush interval. This prevents logs from overfilling the buffer. You can also add more flush threads to handle moments when many logs are attempting to fill the buffer at once.

For a more complete description of how to configure the logging buffer to suit your organization's needs, see the official Logging operator documentation on [buffers](https://kube-logging.github.io/docs/configuration/plugins/outputs/buffer/) and on [Fluentd configuration](https://kube-logging.github.io/docs/logging-infrastructure/fluentd/).

### The `cattle-logging` Namespace Being Recreated

If your cluster previously deployed logging from the Cluster Manager UI, you may encounter an issue where its `cattle-logging` namespace is continually being recreated.

The solution is to delete all `clusterloggings.management.cattle.io` and `projectloggings.management.cattle.io` custom resources from the cluster specific namespace in the management cluster.
The existence of these custom resources causes Rancher to create the `cattle-logging` namespace in the downstream cluster if it does not exist.

The cluster namespace matches the cluster ID, so we need to find the cluster ID for each cluster.

1. In your web browser, navigate to your cluster(s) in either the Cluster Manager UI or the Cluster Explorer UI.
2. Copy the `<cluster-id>` portion from one of the URLs below. The `<cluster-id>` portion is the cluster namespace name.

```bash
# Cluster Management UI
https://<your-url>/c/<cluster-id>/

# Cluster Explorer UI (Dashboard)
https://<your-url>/dashboard/c/<cluster-id>/
```

Now that we have the `<cluster-id>` namespace, we can delete the CRs that cause `cattle-logging` to be continually recreated.
*Warning:* ensure that logging, the version installed from the Cluster Manager UI, is not currently in use.

```bash
kubectl delete clusterloggings.management.cattle.io -n <cluster-id>
kubectl delete projectloggings.management.cattle.io -n <cluster-id>
```
