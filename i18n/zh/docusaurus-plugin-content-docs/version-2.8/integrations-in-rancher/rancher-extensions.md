---
title: Rancher 扩展
---

Rancher v2.7.0 引入了**扩展（Extension）**的新功能。扩展允许用户、开发人员、合作伙伴和客户扩展和增强 Rancher UI。此外，用户可以独立于 Rancher 版本对其 UI 功能进行更改和增强。有了扩展，用户能够在 Rancher 之上进行构建，从而更好地根据环境进行定制。用户还可以更新到新版本以及回滚到以前的版本。

扩展是只能在集群中安装一次的 Helm Chart。因此，这些 Chart 已经过简化，并与 **Apps** 下列出的常规 Helm Chart 分开。

内置的 Rancher 扩展示例包括 Fleet、Explorer 和 Harvester。使用可手动添加的 Extensions API 的其他扩展示例包括 Kubewarden 和 Elemental。

## 先决条件

> 你必须以管理员身份登录才能查看扩展管理页面并与之交互。

## 安装扩展

1. 点击 **Configuration** 下的 **☰ > Extensions**。

2. 如果它尚未安装到 **Apps** 中，则你必须通过单击 **Enable** 按钮启用扩展 operator。

   - 如果不是离线安装环境，请单击 **OK** 添加 Rancher 扩展仓库。否则，取消选中复选框并单击 **OK**。

   ![Rancher extension repository](/img/add-rancher-extension-repo.png)

3. 在 **Extensions** 页面上，单击 **Available** 选项卡选择要安装的扩展。

:::info

在 v2.7.0 中，**Available** 选项卡下不会显示内置扩展。因此，你需要手动添加所需的仓库以安装扩展。一旦这些扩展可用了，我们将同步社区。

:::
<br/>

4. 如果没有显示可用的扩展，你可以手动添加仓库，如下所示：

   4.1. 在屏幕右上角，点击 **⋮ > Manage Repositories > Create**。

   4.2. 添加所需的仓库名称，确保指定了 Git 仓库 URL 和 Git 分支。

   4.3. 再次点击右下方的 **Create**。

   ![Manage repositories](/img/manage-repos.png)

5. 在 **Available** 选项卡下，单击所需扩展和版本上的 **Install** 按钮，如下例所示。请注意，如果扩展程序可用，**Update** 按钮将出现在该扩展上，因此你可以轻松更新扩展。

   ![Install Kubewarden](/img/install-kubewarden.png)

6. 点击 **Reload** 按钮，该按钮将在你的扩展成功安装后出现。请注意，对于刚刚安装扩展的登录用户而言，**除非**他们重新加载页面，否则他们不会看到 UI 的变化。

   ![Reload button](/img/reload-button.png)

## 卸载扩展

你可以通过两种方式卸载或禁用扩展：

1. 在 **Installed** 选项卡下，单击要删除的扩展上的 **Uninstall** 按钮。

   ![Uninstall extensions](/img/uninstall-extension.png)

1. 在扩展管理页面，点击 **⋮ > Disable Extension Support**。这将禁用所有已安装的扩展。

   ![Disable extensions](/img/disable-extension-support.png)

:::caution

你必须在禁用扩展后重新加载页面，否则可能会出现显示问题。

:::

## 回滚扩展

在 **Installed** 选项卡下，单击要回滚的扩展上的 **Rollback** 按钮。

![Roll back extensions](/img/roll-back-extension.png)

:::caution

回滚扩展后必须重新加载页面，否则可能会出现显示问题。

:::

## 开发扩展

要了解如何开发你自己的扩展，请参阅官方[入门指南](https://rancher.github.io/dashboard/extensions/extensions-getting-started)。
