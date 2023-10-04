---
title: Rancher Security Best Practices
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/rancher-security-best-practices"/>
</head>

### Restricting public access to /version path

It is well-known that attackers might want to gather any information related to services running online. When running a Rancher server, the `/version` path can disclose some information about the server. We know that this path can be commonly used to monitor uptime from the service or any other monitoring metrics. In this case, we recommend customers block the `/version` path at the infrastructure level, through Firewall rules, keeping it accessible only for monitoring tools or intranet.

Further references: OWASP Web Application Security Testing - [Enumerate Infrastructure and Application Admin Interfaces](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/05-Enumerate_Infrastructure_and_Application_Admin_Interfaces.html).
