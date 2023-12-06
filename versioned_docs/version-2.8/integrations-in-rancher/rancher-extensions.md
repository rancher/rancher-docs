---
title: Rancher Extensions
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions"/>
</head>

New in Rancher v2.7.0, Rancher introduces **extensions**. Extensions allow users, developers, partners, and customers to extend and enhance the Rancher UI. In addition, users can make changes and create enhancements to their UI functionality independent of Rancher releases. Extensions will enable users to build on top of Rancher to better tailor it to their respective environments. Note that users will also have the ability to update to new versions as well as roll back to a previous version.

Extensions are Helm charts that can only be installed once into a cluster; therefore, these charts have been simplified and separated from the general Helm charts listed under **Apps**.

Examples of built-in Rancher extensions are Fleet, Explorer, and Harvester. Examples of other extensions that use the Extensions API that can be manually added are Kubewarden and Elemental.

## Prerequisites

> You must log in as an admin in order to view and interact with the extensions management page.

## Installing Extensions

1. Click **☰ > Extensions** under **Configuration**.

2. If not already installed in **Apps**, you must enable the extension operator by clicking the **Enable** button.

    - Click **OK** to add the Rancher extension repository if your installation is not air-gapped. Otherwise, uncheck the box to do so and click **OK**.

    ![Rancher extension repository](/img/add-rancher-extension-repo.png)

3. On the **Extensions** page, click on the **Available** tab to select which extensions you want to install.

:::info

In v2.7.0, the built-in extensions aren't displayed under the **Available** tab. Therefore, you'll need to manually add the desired repos to install extensions.

:::
<br/>

4. If no extensions are showing as available, you may manually add repos as follows:

    4.1. On the upper right of screen, click on **⋮ > Manage Repositories > Create**.

    4.2. Add the desired repo name, making sure to also specify the Git Repo URL and the Git Branch.

    4.3. Click **Create** in the lower right again to complete.

    ![Manage repositories](/img/manage-repos.png)

5. Under the **Available** tab, click **Install** on the desired extension and version as in the example below. You can also update your extension from this screen, as the button to **Update** will appear on the extension if one is available.

    ![Install Kubewarden](/img/install-kubewarden.png)

6. Click the **Reload** page button that will appear after your extension successfully installs. Note that a logged-in user who has just installed an extension will not see a change to the UI **unless** they reload the page.

    ![Reload button](/img/reload-button.png)

### Importing and Installing Extensions in an Air-Gapped Environment

1. Find the address of the container image repository  that you want to import as an extension. Rancher provides some extensions, such as Kubewarden and Elemental, through the `ui-plugin-catalog` container image at https://hub.docker.com/r/rancher/ui-plugin-catalog/tags. You should import and use the latest tagged version of the image to ensure you receive the latest features and security updates.

    * **(Optional)** If the container image is private: [Create](../how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md) a registry secret within the `cattle-ui-plugin-system` namespace. Enter the domain of the image address in the **Registry Domain Name** field.

1. Click **☰**, then select **Extensions**, under **Configuration**.

1. On the top right, click **⋮ > Manage Extension Catalogs**.

1. Select the **Import Extension Catalog** button.

1. Enter the image address in the **Catalog Image Reference** field. 

    * **(Optional)** If the container image is private: Select the secret you just created from the **Pull Secrets** drop-down menu.

1. Click **Load**. The extension will now be **Pending**.

1. Return to the **Extensions** page.

1. Select the **Available** tab, and click the **Reload** button to make sure that the list of extensions is up to date.

1. Find the extension you just added, and click the **Install** button.

## Uninstalling Extensions

There are two ways to uninstall or disable an extension:

1. Under the **Installed** tab, click the **Uninstall** button on the extension you wish to remove.

    ![Uninstall extensions](/img/uninstall-extension.png)

1. On the extensions management page, click **⋮ > Disable Extension Support**. This will disable all installed extensions.

    ![Disable extensions](/img/disable-extension-support.png)

:::caution

You must reload the page after disabling extensions or display issues may occur.

:::

## Updating and Upgrading Extensions

1. Click **☰ > Extensions** under **Configuration**.
1. Select the **Updates** tab. 
1. Click **Update**.

If there is a new version of the extension, there will also be an **Update** button visible on the associated card for the extension in the **Available** tab.

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

## Deleting Helm Charts

1. Click **☰**, then click on the name of your local cluster.
1. From the sidebar, select **Apps > Installed Apps**.
1. Find the name of the chart you want to delete and select the checkbox next to it. 
1. Click **Delete**.

## Deleting Extension Repositories

1. Click **☰ > Extensions** under **Configuration**.
1. On the top right, click **⋮ > Manage Repositories**.
1. Find the name of the extension repository you want to delete. Select the checkbox next to the repository name, then click **Delete**.

## Deleting Extension Repository Container Images

1. Click **☰**, then select **Extensions**, under **Configuration**.
1. On the top right, click **⋮ > Manage Extension Catalogs**.
1. Find the name of the container image you want to delete. Click **⋮ > Uninstall**.

## Developing Extensions

To learn how to develop your own extensions, refer to the official [Getting Started](https://rancher.github.io/dashboard/extensions/extensions-getting-started) guide.
