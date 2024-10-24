---
title: Deprecated Features in Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/deprecated-features"/>
</head>

## What is Rancher's deprecation policy?

We have published our official deprecation policy in the support [terms of service](https://rancher.com/support-maintenance-terms).

## Where can I find out which features have been deprecated in Rancher?

Rancher will publish deprecated features as part of the [release notes](https://github.com/rancher/rancher/releases) for Rancher found on GitHub. Please consult the following patch releases for deprecated features:

| Patch Version |  Release Date |
|---------------|---------------|
| [2.8.9](https://github.com/rancher/rancher/releases/tag/v2.8.9) | Oct 24, 2024 |
| [2.8.8](https://github.com/rancher/rancher/releases/tag/v2.8.8) | Sep 19, 2024 |
| [2.8.7](https://github.com/rancher/rancher/releases/tag/v2.8.7) | Aug 26, 2024 |
| [2.8.6](https://github.com/rancher/rancher/releases/tag/v2.8.6) | Jul 31, 2024 |
| [2.8.5](https://github.com/rancher/rancher/releases/tag/v2.8.5) | Jun 17, 2024 |
| [2.8.4](https://github.com/rancher/rancher/releases/tag/v2.8.4) | May 16, 2024  |
| [2.8.3](https://github.com/rancher/rancher/releases/tag/v2.8.3) | Mar 28, 2024  |
| [2.8.2](https://github.com/rancher/rancher/releases/tag/v2.8.2) | Feb 8, 2024   |
| [2.8.1](https://github.com/rancher/rancher/releases/tag/v2.8.1) | Jan 22, 2024  |
| [2.8.0](https://github.com/rancher/rancher/releases/tag/v2.8.0) | Dec 6, 2023   |

## What can I expect when a feature is marked for deprecation?

In the release where functionality is marked as "Deprecated", it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature.