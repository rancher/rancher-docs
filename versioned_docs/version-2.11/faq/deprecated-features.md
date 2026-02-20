---
title: Deprecated Features in Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/deprecated-features"/>
</head>

## What is Rancher's deprecation policy?

The community version of Rancher follows the same deprecation policy as Rancher Prime. The official deprecation policy is documented in the [Rancher Prime Deprecation Policy](https://www.suse.com/support/rancher-prime/#Rancher-Prime-Deprecation-Policy).

## Where can I find out which features have been deprecated in Rancher?

Rancher will publish deprecated features as part of the [release notes](https://github.com/rancher/rancher/releases) for Rancher found on GitHub. Please consult the following patch releases for deprecated features:

| Patch Version |  Release Date |
|---------------|---------------|
| [2.11.10](https://github.com/rancher/rancher/releases/tag/v2.11.10) | January 29, 2026 |
| [2.11.9](https://github.com/rancher/rancher/releases/tag/v2.11.9) | December 18, 2025 |
| [2.11.8](https://github.com/rancher/rancher/releases/tag/v2.11.8) | November 24, 2025 |
| [2.11.7](https://github.com/rancher/rancher/releases/tag/v2.11.7) | October 23, 2025 |
| [2.11.6](https://github.com/rancher/rancher/releases/tag/v2.11.6) | September 25, 2025 |
| [2.11.5](https://github.com/rancher/rancher/releases/tag/v2.11.5) | August 28, 2025 |
| [2.11.4](https://github.com/rancher/rancher/releases/tag/v2.11.4) | July 30, 2025 |
| [2.11.3](https://github.com/rancher/rancher/releases/tag/v2.11.3) | June 25, 2025 |
| [2.11.2](https://github.com/rancher/rancher/releases/tag/v2.11.2) | May 22, 2025 |
| [2.11.1](https://github.com/rancher/rancher/releases/tag/v2.11.1) | Apr 24, 2025 |
| [2.11.0](https://github.com/rancher/rancher/releases/tag/v2.11.0) | Mar 31, 2025 |

## What can I expect when a feature is marked for deprecation?

In the release where functionality is marked as "Deprecated", it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature.