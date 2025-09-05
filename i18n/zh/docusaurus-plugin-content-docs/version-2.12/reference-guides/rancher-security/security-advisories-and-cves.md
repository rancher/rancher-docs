---
title: 安全公告和 CVE
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/security-advisories-and-cves"/>
</head>

Rancher 致力于向社区披露我们产品的安全问题。我们会针对已解决的问题发布安全公告和 CVE（Common Vulnerabilities and Exposures，通用漏洞披露）。Rancher GitHub 上的[安全页面](https://github.com/rancher/rancher/security/advisories)也会发布新的安全公告。

| ID | 描述 | 日期 | 解决 |
|----|-------------|------|------------|
| [CVE-2024-58259](https://github.com/rancher/rancher/security/advisories/GHSA-4h45-jpvh-6p5j) | POSTs to the Rancher API endpoints are now limited to 1 Mi; this is configurable through the settings if you need a larger limit. The Rancher authentication endpoints are configured independently of the main public API (as you might need bigger payloads in the other API endpoints). Suppose you need to increase the maximum allowed payload for authentication. In that case, you can set the environment variable `CATTLE_AUTH_API_BODY_LIMIT` to a quantity, e.g., 2 Mi, which would allow larger payloads for the authentication endpoints. | 28 Aug 2025 | Rancher [v2.12.1](https://github.com/rancher/rancher/releases/tag/v2.12.1), [v2.11.5](https://github.com/rancher/rancher/releases/tag/v2.11.5), [v2.10.9](https://github.com/rancher/rancher/releases/tag/v2.10.9) and [v2.9.11](https://github.com/rancher/rancher/releases/tag/v2.9.11) |
| [CVE-2024-52284](https://github.com/rancher/fleet/security/advisories/GHSA-6h9x-9j5v-7w9h) | Following a recent [change](https://github.com/rancher/fleet/pull/3403) excluding Helm values files from bundles, an edge case subsisted where the values files referenced in `fleet.yaml` with your directory name (e.g., `my-dir/values.yaml` instead of `values.yaml`) would not be excluded, which would potentially expose confidential data in bundle resources. Helm values files are now excluded from bundle resources regardless of how you reference them. | 28 Aug 2025 | Rancher [v2.12.1](https://github.com/rancher/rancher/releases/tag/v2.12.1), [v2.11.5](https://github.com/rancher/rancher/releases/tag/v2.11.5) and [v2.10.9](https://github.com/rancher/rancher/releases/tag/v2.10.9) |
