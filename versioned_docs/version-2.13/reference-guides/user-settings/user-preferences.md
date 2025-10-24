---
title: User Preferences
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/user-settings/user-preferences"/>
</head>

You can set preferences to personalize your Rancher experience. To change preference settings:

1. Click on your user avatar in the upper right corner.
1. Click **Preferences**.

## Language

Choose your language for the Rancher UI. Options include:

- English
- 简体中文 (Simplified Chinese)

## Theme

Choose your background color for the Rancher UI. If you choose **Auto**, the background color changes from light to dark at 6 PM, and then changes back at 6 AM.

## Login Landing Page

Choose the page displayed after logging in. Options include:

- The home page.
- The area you last visited.
- A specific cluster of your choosing.

## Display Settings

Choose how certain information is displayed:

- Date format
- Time format
- Table rows per page
- Number of clusters to show in side menu

## Confirmation Setting

Choose whether to ask for confirmation when scaling down node pools.

## Advanced Features

- Enable "View in API".
- Show system Namespaces managed by Rancher (not intended for editing or deletion).
- Enable Dark/Light Theme keyboard shortcut toggle (shift+T).
- Hide All Type Descriptions.
- Enable Extension developer features.

![](/img/user-preferences-2-7.png)

## YAML Editor Key Mapping

- Normal human (Sublime)
- Emacs
- Vim

## Helm Charts

Choose whether to display released Helm charts only or to include prerelease versions as well. A version is considered to be a prerelease if it adheres to [the specification](https://semver.org/#spec-item-9) defined by [Semantic Versioning 2.0.0](https://semver.org/). For example, a Helm chart with a version of `0.1.3-dev.12ab4f` requires `Include Prerelease Versions` to be selected in order to be displayed.
