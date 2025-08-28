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
| [2.9.11](https://github.com/rancher/rancher/releases/tag/v2.9.11) | August 27, 2025 |
| [2.9.10](https://github.com/rancher/rancher/releases/tag/v2.9.10) | May 22, 2025 |
| [2.9.9](https://github.com/rancher/rancher/releases/tag/v2.9.9) | Apr 24, 2025 |
| [2.9.8](https://github.com/rancher/rancher/releases/tag/v2.9.8) | Mar 31, 2025 |
| [2.9.7](https://github.com/rancher/rancher/releases/tag/v2.9.7) | Feb 27, 2025 |
| [2.9.6](https://github.com/rancher/rancher/releases/tag/v2.9.6) | Jan 29, 2025 |
| [2.9.5](https://github.com/rancher/rancher/releases/tag/v2.9.5) | Dec 19, 2024 |
| [2.9.4](https://github.com/rancher/rancher/releases/tag/v2.9.4) | Nov 18, 2024 |
| [2.9.3](https://github.com/rancher/rancher/releases/tag/v2.9.3) | Oct 24, 2024 |
| [2.9.2](https://github.com/rancher/rancher/releases/tag/v2.9.2) | Sep 19, 2024 |
| [2.9.1](https://github.com/rancher/rancher/releases/tag/v2.9.1) | Aug 26, 2024 |
| [2.9.0](https://github.com/rancher/rancher/releases/tag/v2.9.0) | Jul 31, 2024 |

## What can I expect when a feature is marked for deprecation?

In the release where functionality is marked as "Deprecated", it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature.