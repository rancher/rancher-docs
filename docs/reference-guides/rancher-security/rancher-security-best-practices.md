---
title: Rancher Security Best Practices
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/rancher-security-best-practices"/>
</head>

### Restrict public access to /version and /rancherversion path

The Rancher Manager server provides information about the version it is running and the Go version that was used to built it. That information is accessible via the `/version` path, and is generally used to automate version bumps, confirm a deployment was successful, amongst other things. The server also provides Rancher Manager version information accessible via the `/rancherversion` path.

Such informations can be used by adversaries to identify the running version and cross relate it with potential bugs that it may have. In cases where the Rancher server is publicly available through the internet, it is recommended that the path `/version` and `/rancherversion` be blocked by using a Layer 7 firewall.

Further references: 
- OWASP Web Application Security Testing - [Enumerate Infrastructure and Application Admin Interfaces](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/05-Enumerate_Infrastructure_and_Application_Admin_Interfaces.html).
- [Expose `/rancherversion` endpoint](https://github.com/rancher/rancher/pull/38445)