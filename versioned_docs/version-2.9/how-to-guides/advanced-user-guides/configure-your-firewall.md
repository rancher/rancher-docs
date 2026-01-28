---
title: Configuring Your Firewall
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/configure-your-firewall"/>
</head>


If you use an external firewall, you must configure it so that Rancher and Rancher-managed clusters can access the sites and ports required to function correctly. This section provides the firewall rules and network access requirements for Rancher deployments in secure environments.



## Outbound Internet Access Requirements

Rancher server nodes and managed cluster nodes require outbound HTTPS access to container registries and related services.  

Set the following registry URLs for your firewall’s allowlist:

| URL                                | Port | Function                                                                 |
|------------------------------------|------|---------------------------------------------------------------------------|
| `registry.rancher.com`, `registry.suse.com` | 443  | Provide Rancher system images, system-agent installer images, and RKE2/K3s artifacts. Both URLs resolve to the same SUSE registry backend, but either may appear in manifests or image references. |
| `*.suse.com`                       | 443  | Provides dynamic content and installation bundles required during RKE2/K3s provisioning |
| `docker.io`                        | 443  | Provides community container images used by optional Rancher features |
| `ghcr.io`                          | 443  | Provides Rancher dependencies stored in the GitHub Container Registry |


## Inbound Access Requirements

External clients and managed clusters require inbound access to the Rancher server.  

| Port | Protocol | Source                  | Purpose                                         |
|------|----------|-------------------------|-------------------------------------------------|
| 80   | TCP      | End users / clusters    | HTTP access to Rancher (redirects to HTTPS)     |
| 443  | TCP      | End users / clusters    | HTTPS access to Rancher UI and API              |


- You can use the wildcard `*.suse.com` to simplify configuration and ensure that all required SUSE domains are allowed.