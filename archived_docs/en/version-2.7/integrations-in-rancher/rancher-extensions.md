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

In v2.7.0, the built-in extensions will not be displayed under the **Available** tab. Therefore, you will need to manually add the desired repos to install extensions. We will update the community once these extensions have been pulled out to be available for selection.

:::
<br/>

4. If no extensions are showing as available, you may manually add repos as follows:

    4.1. On the upper right of screen, click on **⋮ > Manage Repositories > Create**.

    4.2. Add the desired repo name, making sure to also specify the Git Repo URL and the Git Branch.

    4.3. Click **Create** in the lower right again to complete.

    ![Manage repositories](/img/manage-repos.png)

5. Under the **Available** tab, click **Install** on the desired extension and version as in the example below. Note that you can easily update your extension as the button to **Update** will appear on the extension if one is available.

    ![Install Kubewarden](/img/install-kubewarden.png)

6. Click the **Reload** page button that will appear after your extension successfully installs. Note that a logged-in user who has just installed an extension will not see a change to the UI **unless** they reload the page.

    ![Reload button](/img/reload-button.png)

## Uninstalling Extensions

There are two ways in which you can uninstall or disable your extensions:

1. Under the **Installed** tab, click the **Uninstall** button on the extension you wish to remove.

    ![Uninstall extensions](/img/uninstall-extension.png)

1. On the extensions management page, click **⋮ > Disable Extension Support**. This will disable all installed extensions.

    ![Disable extensions](/img/disable-extension-support.png)

:::caution

You must reload the page after disabling extensions or display issues may occur.

:::

## Rolling Back Extensions

Under the **Installed** tab, click the **Rollback** button on the extension you wish to roll back.

![Roll back extensions](/img/roll-back-extension.png)

:::caution

You must reload the page after rolling back extensions or display issues may occur.

:::

## Developing Extensions

To learn how to develop your own extensions, refer to the official [Getting Started](https://rancher.github.io/dashboard/extensions/extensions-getting-started) guide.
