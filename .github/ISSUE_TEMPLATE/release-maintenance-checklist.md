---
name: Release Maintenance Task Checklist
about: Track tasks that need to be done every release.
title: '<VERSION> - Rancher Manager Release Maintenance Task Checklist'
---

> [!IMPORTANT]
> Hello, our team is currently in the process of consolidating our Rancher documentation repositories. With this change, the contents of this repository was moved to [rancher/rancher-product-docs](https://github.com/rancher/rancher-product-docs).
>
> We understand this is a significant change and disruption to the standard process and wish to note the Rancher documentation team is here to assist in any way it can to make the transition process straight forward. Going forward, we kindly ask that any new issue reports or contributions be made to the `rancher-product-docs` repository instead. If you wish to make contributions, please refer to our updated [README](https://github.com/rancher/rancher-product-docs/blob/main/README.md) for guidance.
>
> Please note as part of this change, the Chinese portion of the site was dropped. No URLs for the Community documentation site changed.

This issue is to track tasks that need to be done every release regardless of whether the release has new feature content or not.

- [ ] Create a new branch for the release. Release-specific updates should use this branch as its base
- [ ] Update the [versions table](https://ranchermanager.docs.rancher.com/versions)
- [ ] Update the [Rancher:webhook version mapping table](https://ranchermanager.docs.rancher.com/reference-guides/rancher-webhook)
- [ ] Update the [CNI popularity table](https://ranchermanager.docs.rancher.com/faq/container-network-interface-providers#cni-community-popularity)
- [ ] Update the [CSP adapter compatibility matrix](https://ranchermanager.docs.rancher.com/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter#rancher-vs-adapter-compatibility-matrix)
- [ ] Update the [deprecated features table](https://ranchermanager.docs.rancher.com/faq/deprecated-features)
- [ ] Update the swagger-<VERSION>.json file
- [ ] Create a PR merging the release branch back into the main branch
- [ ] Create a new [release](https://github.com/rancher/rancher-docs/releases)
- [ ] Update Algolia search index
