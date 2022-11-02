---
title: Rancher Extensions
---

New in Rancher v2.7.0, Rancher introduces **extensions**. Extensions allow admins to make changes and create enhancements to their UI functionality independent of Rancher Manager releases.

### Installing Extensions with Rancher

The  Helm Chart is used to manage access to the NeuVector UI in Rancher where users can navigate directly to deploy and manage their NeuVector clusters.

**To navigate to and install the Extensions chart:**

1. Click **☰ > Extensions** under **Configuration**.

    ![Extensions](/img/extensions-left-nav-bar.png)

1. If not already installed in **Apps & Marketplace**, you must enable the extension operator by clicking on **Enable** here:

    ![Enable extensions](/img/enable-extensions.png)

   Click **OK** to add the Rancher extension repository if your installation is not air-gapped. Otherwise, click **Cancel**.

    ![Rancher extension repository](/img/add-rancher-extension-repo.png)

1. On the Extensions page, click on the **Available** tab to select which extensions you want to install. Click **Install** on the desired extension, such as Kubewarden as an example:

    ![Install extension](/img/install-extension.png)

