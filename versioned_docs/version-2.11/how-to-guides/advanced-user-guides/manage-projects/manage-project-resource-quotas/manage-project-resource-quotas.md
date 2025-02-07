---
title: Project Resource Quotas
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas"/>
</head>

In situations where several teams share a cluster, one team may overconsume the resources available: CPU, memory, storage, services, Kubernetes objects like pods or secrets, and so on.  To prevent this overconsumption, you can apply a _resource quota_, which is a Rancher feature that limits the resources available to a project or namespace.

This page is a how-to guide for creating resource quotas in existing projects.

Resource quotas can also be set when a new project is created. For details, refer to the section on [creating new projects.](../../../new-user-guides/manage-clusters/projects-and-namespaces.md#creating-projects)

Resource quotas in Rancher include the same functionality as the [native version of Kubernetes](https://kubernetes.io/docs/concepts/policy/resource-quotas/). In Rancher, resource quotas have been extended so that you can apply them to projects. For details on how resource quotas work with projects in Rancher, refer to [this page.](about-project-resource-quotas.md)

### Applying Resource Quotas to Existing Projects

Edit resource quotas when:

- You want to limit the resources that a project and its namespaces can use.
- You want to scale the resources available to a project up or down when a resource quota is already in effect.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to apply a resource quota and click **Explore**.
1. Click **Cluster > Projects/Namespaces**.
1. Make sure that the **Projects/Namespaces** page is in **Group by Project** view mode.
    ![Screenshot highlighting the "Group by Project" icon, above the list of projects. It resembles a folder.](/img/edit-project-config-for-resource-quotas-group-by-project.png)

1. Find the project that you want to add a resource quota to, and select the **⋮** that's on the same row as the project's name.
    ![Screenshot highlighting triple dots icon at the end of the same row as the project name.](/img/edit-project-config-for-resource-quotas-dots.png)

1. Select **Edit Config**.

1. Expand **Resource Quotas** and click **Add Resource**. Alternatively, you can edit existing quotas.

1. Select a Resource Type. For more information on types, see the [quota type reference.](resource-quota-types.md)

1. Enter values for the **Project Limit** and the **Namespace Default Limit**.

    | Field                   | Description                                                                                              |
    | ----------------------- | -------------------------------------------------------------------------------------------------------- |
    | Project Limit           | The overall resource limit for the project.                                                              |
    | Namespace Default Limit | The default resource limit available for each namespace. This limit is propagated to each namespace in the project. The combined limit of all project namespaces shouldn't exceed the project limit. |

1. **Optional:** Add more quotas.

1. Click **Create**.

**Result:** The resource quota is applied to your project and namespaces. When you add more namespaces in the future, Rancher validates that the project can accommodate the namespace. If the project can't allocate the resources, you may still create namespaces, but they will be given a resource quota of 0. Subsequently, Rancher will not allow you to create any resources restricted by this quota.
