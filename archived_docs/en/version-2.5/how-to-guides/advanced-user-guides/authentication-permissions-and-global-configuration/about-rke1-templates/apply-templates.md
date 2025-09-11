---
title: Applying Templates
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates"/>
</head>

You can create a cluster from an RKE template that you created, or from a template that has been [shared with you.](access-or-share-templates.md)

RKE templates can be applied to new clusters.

You can [save the configuration of an existing cluster as an RKE template.](#converting-an-existing-cluster-to-use-an-rke-template) Then the cluster's settings can only be changed if the template is updated.

You can't change a cluster to use a different RKE template. You can only update the cluster to a new revision of the same template.

### Creating a Cluster from an RKE Template

To add a cluster [hosted by an infrastructure provider](../../../new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) using an RKE template, use these steps:

1. From the **Global** view, go to the **Clusters** tab.
1. Click **Add Cluster** and choose the infrastructure provider.
1. Provide the cluster name and node template details as usual.
1. To use an RKE template, under the **Cluster Options**, check the box for **Use an existing RKE template and revision.**
1. Choose an existing template and revision from the dropdown menu.
1. Optional: You can edit any settings that the RKE template owner marked as **Allow User Override** when the template was created. If there are settings that you want to change, but don't have the option to, you will need to contact the template owner to get a new revision of the template. Then you will need to edit the cluster to upgrade it to the new revision.
1. Click **Save** to launch the cluster.

### Updating a Cluster Created with an RKE Template

When the template owner creates a template, each setting has a switch in the Rancher UI that indicates if users can override the setting.

- If the setting allows a user override, you can update these settings in the cluster by [editing the cluster.](../../../../reference-guides/cluster-configuration/cluster-configuration.md)
- If the switch is turned off, you cannot change these settings unless the cluster owner creates a template revision that lets you override them. If there are settings that you want to change, but don't have the option to, you will need to contact the template owner to get a new revision of the template.

If a cluster was created from an RKE template, you can edit the cluster to update the cluster to a new revision of the template.

An existing cluster's settings can be [saved as an RKE template.](#converting-an-existing-cluster-to-use-an-rke-template) In that situation, you can also edit the cluster to update the cluster to a new revision of the template.

> **Note:** You can't change the cluster to use a different RKE template. You can only update the cluster to a new revision of the same template.

### Converting an Existing Cluster to Use an RKE Template

This section describes how to create an RKE template from an existing cluster.

RKE templates cannot be applied to existing clusters, except if you save an existing cluster's settings as an RKE template. This exports the cluster's settings as a new RKE template, and also binds the cluster to that template. The result is that the cluster can only be changed if the [template is updated,](manage-rke1-templates.md#updating-a-template) and the cluster is upgraded to [use a newer version of the template.](manage-rke1-templates.md#upgrading-a-cluster-to-use-a-new-template-revision)

To convert an existing cluster to use an RKE template,

1. From the **Global** view in Rancher, click the **Clusters** tab.
1. Go to the cluster that will be converted to use an RKE template. Click **&#8942;** > **Save as RKE Template.**
1. Enter a name for the template in the form that appears, and click **Create.**

**Results:**

- A new RKE template is created.
- The cluster is converted to use the new template.
- New clusters can be [created from the new template.](apply-templates.md#creating-a-cluster-from-an-rke-template)