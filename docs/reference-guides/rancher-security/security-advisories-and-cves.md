---
title: Security Advisories and CVEs
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/security-advisories-and-cves"/>
</head>

Rancher is committed to informing the community of security issues in our products. Rancher will publish security advisories and CVEs (Common Vulnerabilities and Exposures) for issues we have resolved. New security advisories are also published in Rancher's GitHub [security page](https://github.com/rancher/rancher/security/advisories).

| ID | Description | Date | Resolution |
|----|-------------|------|------------|
| [CVE-2024-58259](https://github.com/rancher/rancher/security/advisories/GHSA-4h45-jpvh-6p5j) | POSTs to the Rancher API endpoints are now limited to 1 Mi; this is configurable through the settings if you need a larger limit. The Rancher authentication endpoints are configured independently of the main public API (as you might need bigger payloads in the other API endpoints). Suppose you need to increase the maximum allowed payload for authentication. In that case, you can set the environment variable `CATTLE_AUTH_API_BODY_LIMIT` to a quantity, e.g., 2 Mi, which would allow larger payloads for the authentication endpoints. | 28 Aug 2025 | Rancher [v2.12.1](https://github.com/rancher/rancher/releases/tag/v2.12.1), [v2.11.5](https://github.com/rancher/rancher/releases/tag/v2.11.5), [v2.10.9](https://github.com/rancher/rancher/releases/tag/v2.10.9) and [v2.9.11](https://github.com/rancher/rancher/releases/tag/v2.9.11) |
| [CVE-2023-32198](https://github.com/rancher/fleet/security/advisories/GHSA-6h9x-9j5v-7w9h) | Following a recent [change](https://github.com/rancher/fleet/pull/3403) excluding Helm values files from bundles, an edge case subsisted where the values files referenced in `fleet.yaml` with your directory name (e.g., `my-dir/values.yaml` instead of `values.yaml`) would not be excluded, which would potentially expose confidential data in bundle resources. Helm values files are now excluded from bundle resources regardless of how you reference them. | 28 Aug 2025 | Rancher [v2.12.1](https://github.com/rancher/rancher/releases/tag/v2.12.1), [v2.11.5](https://github.com/rancher/rancher/releases/tag/v2.11.5) and [v2.10.9](https://github.com/rancher/rancher/releases/tag/v2.10.9) |
