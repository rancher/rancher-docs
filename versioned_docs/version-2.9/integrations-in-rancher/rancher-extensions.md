---
title: Rancher Extensions
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions"/>
</head>

Extensions allow users, developers, partners, and customers to extend and enhance the Rancher UI. In addition, users can make changes and create enhancements to their UI functionality independent of Rancher releases. Extensions will enable users to build on top of Rancher to better tailor it to their respective environments. Note that users will also have the ability to update to new versions as well as roll back to a previous version.

Extensions are Helm charts that can only be installed once into a cluster; therefore, these charts have been simplified and separated from the general Helm charts listed under **Apps**.

Examples of built-in Rancher extensions are Fleet, Explorer, and Harvester. Examples of other extensions that use the Extensions API that can be manually added are Kubewarden and Elemental.

## Prerequisites

> 1. You must log in as an administrator to view and interact with the extensions management page.
> 2. You must enable extension support.

## Enabling Extension Support in Rancher

Rancher v2.9.0 and later includes extension support.

You can confirm if extension support is enabled by checking the `uiextension` feature flag. Any changes to this feature flag cause the Rancher pod to restart.

When you enable extension support for the first time, it creates resources, such as the CRDs, so that UI Extensions can work. When extension support is disabled, it disables the endpoints and does not cache any files. However, it does not remove any CRs or delete any extensions that were installed before. If re-enabled, it exposes the required endpoints again and creates CRDs as needed. The extensions that were already installed load after the Rancher pod restarts.

### Caching Extension Files

By default, Rancher caches every extension file in the file system. You can change that behavior by setting `plugin.noCache` to `true`.

Rancher does have a cached file size limit of 30MB. If an extension has a file bigger than that, the cache is disabled and `plugin.noCache` is set to `true`, regardless of user input.


## Installing Extensions

1. Click **☰ > Extensions** under **Configuration**.

2. On the **Extensions** page, select the **Available** tab to choose the extensions that you want to install.

3. If no extensions are listed as available, you can manually add the repos:

    3.1. On the upper right, click **⋮ > Manage Repositories > Create**.

    3.2. Add the desired repo name, making sure to also specify the Git repo URL and the Git branch.

    3.3. Click **Create** in the lower right again to complete.

    ![Manage repositories](/img/manage-repos.png)

4. Under the **Available** tab, click **Install** on the desired extension and version, as in the example below. You can also update your extension from this screen. The button to **Update** appears on the extension card if an update is available.

    ![Install Kubewarden](/img/install-kubewarden.png)

5. Click **Reload** after your extension successfully installs to check its status. Updates to the UI aren't visible until you reload the page.

    ![Reload button](/img/reload-button.png)

## Updating and Upgrading Extensions

1. Click **☰ > Extensions** under **Configuration**.
2. Select the **Updates** tab. 
3. Click **Update**.

If there is a new version of the extension, there will also be an **Update** button visible on the associated card for the extension in the **Available** tab.

## Deleting Extensions

1. Click **☰**, then click on the name of your local cluster.
2. From the sidebar, select **Apps > Installed Apps**.
3. Find the name of the chart you want to delete and select the checkbox next to it. 
4. Click **Delete**.

## Deleting Extension Repositories

1. Click **☰ > Extensions** under **Configuration**.
2. On the top right, click **⋮ > Manage Repositories**.
3. Find the name of the extension repository you want to delete. Select the checkbox next to the repository name, then click **Delete**.

## Deleting Extension Repository Container Images

1. Click **☰**, then select **Extensions**, under **Configuration**.
2. On the top right, click **⋮ > Manage Extension Catalogs**.
3. Find the name of the container image you want to delete, then click **⋮ > Uninstall**.

## Uninstalling Extensions

There are two ways to uninstall or disable an extension:

1. Under the **Installed** tab, click the **Uninstall** button on the extension you wish to remove.

    ![Uninstall extensions](/img/uninstall-extension.png)

2. On the extensions management page, click **⋮ > Disable Extension Support**. This will disable all installed extensions.

    ![Disable extensions](/img/disable-extension-support.png)

:::caution

You must reload the page after disabling extensions or display issues may occur.

:::

## Enabling Unauthenticated Access to an Extension

In Rancher v2.9.0, you can allow unauthenticated access to an extension. You may want to enable unauthenticated access if the extension enables a new locale or adds custom branding. By default, all extensions require user authentication to load. 

To enable unauthenticated access to an extension, set `plugin.noAuth` to `true` in the CR used by the extension.

## Developing Extensions

To learn how to develop your own extensions, refer to the official [Getting Started](https://rancher.github.io/dashboard/extensions/extensions-getting-started) guide.

## Working with Extensions in an Air-gapped Environment

If you intend to work with extensions in an air-gapped environment, you must perform some extra steps before you can complete certain tasks.

### Accessing Rancher UI Extensions in an Air-Gapped Environment

Rancher provides some extensions, such as Kubewarden and Elemental, through the `ui-plugin-catalog` container image at https://hub.docker.com/r/rancher/ui-plugin-catalog/tags. If you're trying to install these extensions in an air-gapped environment, you must make the `ui-plugin-catalog` image accessible.

1. Mirror the `ui-plugin-catalog` image to a private registry:

  ```bash
  export REGISTRY_ENDPOINT=<my-private-registry-endpoint> # e.g. "my-private-registry.com"
  docker pull rancher/ui-plugin-catalog:<tag>
  docker tag rancher/ui-plugin-catalog:<tag> $REGISTRY_ENDPOINT/rancher/ui-plugin-catalog:<tag>
  docker push $REGISTRY_ENDPOINT/rancher/ui-plugin-catalog:<tag>
2. Use the mirrored image to create a Kubernetes [deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/):
  ```yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: ui-plugin-catalog
    namespace: cattle-ui-plugin-system
    labels:
      catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
  spec:
    replicas: 1
    selector:
      matchLabels:
        catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
    template:
      metadata:
        namespace: cattle-ui-plugin-system
        labels:
          catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
      spec:
        containers:
        - name: server
          image: <my-private-registry-endpoint>/rancher/ui-plugin-catalog:<tag>
          imagePullPolicy: Always
        imagePullSecrets:
          - name: <my-registry-credentials>
  ```
3. Expose the deployment by creating a [ClusterIP service](https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip):
  ```yaml
  apiVersion: v1
  kind: Service
  metadata:
    name: ui-plugin-catalog-svc
    namespace: cattle-ui-plugin-system
  spec:
    ports:
      - name: catalog-svc-port
        port: 8080
        protocol: TCP
        targetPort: 8080
    selector:
      catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
    type: ClusterIP
  ```
4. Create a [ClusterRepo](../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md) that targets the ClusterIP service:
  ```yaml
  apiVersion: catalog.cattle.io/v1
  kind: ClusterRepo
  metadata:
    name: ui-plugin-catalog-repo
  spec:
    url: http://ui-plugin-catalog-svc.cattle-ui-plugin-system:8080
  ```

After you successfully set up these resources, you can install the extensions from the `ui-plugin-charts` manifest into your air-gapped environment.

### Importing and Installing Extensions in an Air-gapped Environment

1. Find the address of the container image repository that you want to import as an extension. You should import and use the latest tagged version of the image to ensure you receive the latest features and security updates.
    - **(Optional)** If the container image is private: [Create](../how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md) a registry secret within the `cattle-ui-plugin-system` namespace. Enter the domain of the image address in the **Registry Domain Name** field.
1. Click **☰**, then select **Extensions**, under **Configuration**.
1. On the top right, click **⋮ > Manage Extension Catalogs**.
1. Select the **Import Extension Catalog** button.
1. Enter the image address in the **Catalog Image Reference** field. 
    * **(Optional)** If the container image is private, select the secret you just created from the **Pull Secrets** drop-down menu.
1. Click **Load**. The extension will now be **Pending**.
1. Return to the **Extensions** page.
1. Select the **Available** tab, and click **Reload** to make sure that the list of extensions is up to date.
1. Find the extension you just added, and click **Install**.

### Updating and Upgrading an Extensions Repository in an Air-gapped Environment

Extensions repositories that aren't air-gapped are automatically updated. If the repository is air-gapped, you must update it manually.

First, mirror the latest changes to your private registry by following the same steps for initially [importing and installing an extension repository](#importing-and-installing-extensions-in-an-air-gapped-environment).

After you mirror the latest changes, follow these steps:

1. Click **☰ > Local**.
1. From the sidebar, select **Workloads > Deployments**.
1. From the namespaces dropdown menu, select **cattle-ui-plugin-system**.
1. Find the **cattle-ui-plugin-system** namespace. 
1. Select the `ui-plugin-catalog` deployment.
1. Click **⋮ > Edit config**.
1. Update the **Container Image** field within the deployment's container with the latest image.
1. Click **Save**.
