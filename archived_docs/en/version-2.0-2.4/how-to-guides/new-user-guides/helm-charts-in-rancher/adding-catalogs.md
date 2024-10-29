---
title: Creating Custom Catalogs
---

Custom catalogs can be added into Rancher at a global scope, cluster scope, or project scope.

## Adding Catalog Repositories

Adding a catalog is as simple as adding a catalog name, a URL and a branch name.

**Prerequisite:** An [admin](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md) of Rancher has the ability to add or remove catalogs globally in Rancher.

### Add Custom Git Repositories
The Git URL needs to be one that `git clone` [can handle](https://git-scm.com/docs/git-clone#_git_urls_a_id_urls_a) and must end in `.git`. The branch name must be a branch that is in your catalog URL. If no branch name is provided, it will use the `master` branch by default. Whenever you add a catalog to Rancher, it will be available immediately.

### Add Custom Helm Chart Repositories

You can add your own Helm chart repositories to serve chart packages to Rancher. You can use any HTTP server, as long as the server can respond to GET requests and serve YAML files and tar archives.

For more information on Helm chart repositories, see the [official Helm docs](https://helm.sh/docs/topics/chart_repository/).

In Rancher, you can add the custom Helm chart repository with only a catalog name and the URL address of the chart repository.

### Add Private Git/Helm Chart Repositories
_Available as of v2.2.0_

Private catalog repositories can be added using credentials like Username and Password. You may also want to use the OAuth token if your Git or Helm repository server supports that.

For more information on private Git/Helm catalogs, refer to the [custom catalog configuration reference.](./catalog-config.md)

 1. From the **Global** view, choose **Tools > Catalogs** in the navigation bar. In versions before v2.2.0, you can select **Catalogs** directly in the navigation bar.
 2. Click **Add Catalog**.
 3. Complete the form and click **Create**.

 **Result:** Your catalog is added to Rancher.

## Adding Global Catalogs

>**Prerequisites:** In order to manage the [built-in catalogs](./built-in.md) or manage global catalogs, you need _one_ of the following permissions:
>
>- [Administrator Global Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)
>- [Custom Global Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md#custom-global-permissions) with the [Manage Catalogs](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md) role assigned.

 1. From the **Global** view, choose **Tools > Catalogs** in the navigation bar. In versions before v2.2.0, you can select **Catalogs** directly in the navigation bar.
 2. Click **Add Catalog**.
 3. Complete the form. Select the Helm version that will be used to launch all of the apps in the catalog. For more information about the Helm version, refer to [this section.](helm-charts-in-rancher.md#catalog-helm-deployment-versions)
4. Click **Create**.

 **Result**: Your custom global catalog is added to Rancher. Once it is in `Active` state, it has completed synchronization and you will be able to start deploying [multi-cluster apps](../deploy-apps-across-clusters.md) or [applications in any project](./launching-apps.md) from this catalog.

## Adding Cluster Level Catalogs

_Available as of v2.2.0_

>**Prerequisites:** In order to manage cluster scoped catalogs, you need _one_ of the following permissions:
>
>- [Administrator Global Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)
>- [Cluster Owner Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles)
>- [Custom Cluster Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles) with the [Manage Cluster Catalogs](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-role-reference) role assigned.

1. From the **Global** view, navigate to your cluster that you want to start adding custom catalogs.
2. Choose the **Tools > Catalogs** in the navigation bar.
2. Click **Add Catalog**.
3. Complete the form. By default, the form will provide the ability to select `Scope` of the catalog. When you have added a catalog from the **Cluster** scope, it is defaulted to `Cluster`. Select the Helm version that will be used to launch all of the apps in the catalog. For more information about the Helm version, refer to [this section.](helm-charts-in-rancher.md#catalog-helm-deployment-versions)
5. Click **Create**.

**Result**: Your custom cluster catalog is added to Rancher. Once it is in `Active` state, it has completed synchronization and you will be able to start deploying  [applications in any project in that cluster](helm-charts-in-rancher.md) from this catalog.

## Adding Project Level Catalogs

_Available as of v2.2.0_

>**Prerequisites:** In order to manage project scoped catalogs, you need _one_ of the following permissions:
>
>- [Administrator Global Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)
>- [Cluster Owner Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles)
>- [Project Owner Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#project-roles)
>- [Custom Project Permissions](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles) with the [Manage Project Catalogs](../../advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#project-role-reference) role assigned.

1. From the **Global** view, navigate to your project that you want to start adding custom catalogs.
2. Choose the **Tools > Catalogs** in the navigation bar.
2. Click **Add Catalog**.
3. Complete the form. By default, the form will provide the ability to select `Scope` of the catalog. When you have added a catalog from the **Project** scope, it is defaulted to `Cluster`. Select the Helm version that will be used to launch all of the apps in the catalog. For more information about the Helm version, refer to [this section.](helm-charts-in-rancher.md#catalog-helm-deployment-versions)
5. Click **Create**.

**Result**: Your custom project catalog is added to Rancher. Once it is in `Active` state, it has completed synchronization and you will be able to start deploying  [applications in that project](helm-charts-in-rancher.md) from this catalog.

## Custom Catalog Configuration Reference

Refer to [this page](./catalog-config.md) more information on configuring custom catalogs.