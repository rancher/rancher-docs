---
title: Deprecated Features in Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/deprecated-features-in-v2.5"/>
</head>

### What is Rancher's Deprecation policy?

We have published our official deprecation policy in the support [terms of service](https://rancher.com/support-maintenance-terms).

### Where can I find out which features have been deprecated in Rancher?

Rancher will publish deprecated features as part of the [release notes](https://github.com/rancher/rancher/releases) for Rancher found on GitHub. Please consult the following patch releases for deprecated features:

| Patch Version | Release Date |
|---------------|---------------|
| [2.6.14](https://github.com/rancher/rancher/releases/tag/v2.6.14) | Feb 8, 2024 |
| [2.6.13](https://github.com/rancher/rancher/releases/tag/v2.6.13) | May 31, 2023 |
| [2.6.12](https://github.com/rancher/rancher/releases/tag/v2.6.12) | Apr 27, 2023 |
| [2.6.11](https://github.com/rancher/rancher/releases/tag/v2.6.11) | Mar 8, 2023 |
| [2.6.10](https://github.com/rancher/rancher/releases/tag/v2.6.10) | Jan 24, 2023 |
| [2.6.9](https://github.com/rancher/rancher/releases/tag/v2.6.9) | Oct 18, 2022 |
| [2.6.8](https://github.com/rancher/rancher/releases/tag/v2.6.8) | Aug 29, 2022 |
| [2.6.7](https://github.com/rancher/rancher/releases/tag/v2.6.7) | Aug 18, 2022 |
| [2.6.6](https://github.com/rancher/rancher/releases/tag/v2.6.6) | Jun 30, 2022 |
| [2.6.5](https://github.com/rancher/rancher/releases/tag/v2.6.5) | May 12, 2022 |
| [2.6.4](https://github.com/rancher/rancher/releases/tag/v2.6.4) | Mar 31, 2022 |
| [2.6.3](https://github.com/rancher/rancher/releases/tag/v2.6.3) | Dec 21, 2021 |
| [2.6.2](https://github.com/rancher/rancher/releases/tag/v2.6.2) | Oct 19, 2021 |
| [2.6.1](https://github.com/rancher/rancher/releases/tag/v2.6.1) | Oct 11, 2021 |
| [2.6.0](https://github.com/rancher/rancher/releases/tag/v2.6.0) | Aug 31, 2021 |

### What can I expect when a feature is marked for deprecation?

In the release where functionality is marked as "Deprecated", it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature.