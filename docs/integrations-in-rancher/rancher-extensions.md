---
title: Rancher Extensions
---

New in Rancher v2.7.0, Rancher introduces **extensions**. Extensions allow users, developers, partners, and customers to extend and enhance the Rancher Manager UI. In addition, users can make changes and create enhancements to their UI functionality independent of Rancher Manager releases. Extensions will enable users to build on top of Rancher to better tailor it to their respective environments.

Extensions are Helm charts that can only be installed once into a cluster; therefore, these charts have been simplified and separated from the general Helm charts listed under **Apps & Marketplace**.

Examples of built-in Rancher Manager extensions are Fleet, Explorer, and Harvester. Examples of other extensions that use the Extensions API that can be manually added are Kubewarden and Elemental.

### Installing Extensions

:::note

> You must log in as an admin in order to view and install extensions.

:::

1. Click **☰ > Extensions** under **Configuration**.

1. If not already installed in **Apps & Marketplace**, you must enable the extension operator by clicking the **Enable** button.

    - Click **OK** to add the Rancher extension repository if your installation is not air-gapped. Otherwise, uncheck the box to do so and click **OK**.

    ![Rancher extension repository](/img/add-rancher-extension-repo.png)

1. On the Extensions page, click on the **Available** tab to select which extensions you want to install.

:::info

In v2.7.0, the built-in extensions will not be displayed under the **Available** tab. Therefore, you will need to manually add the desired repos to install extensions. We will update the community once these extensions have been pulled out to be available for selection.

:::

- If no extensions are showing as available, you may manually add repos: On the upper right of screen, click on **⋮ > Manage Repositories > Create**, add the desired repo, then click **Create** again to complete:

    ![Manage repositories](/img/manage-repos.png)

- Refresh your screen to ensure the extension is now visible.

- Click **Install** on the desired extension and version as in the example below. Note that you can easily update your extension as the button to **Update** will appear on the extension if one is available.

    ![Install Kubewarden](/img/install-kubewarden.png)

### Uninstalling Extensions 

Under the **Installed** tab, click the **Uninstall** button on the extension you wish to remove.