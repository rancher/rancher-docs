---
title: Rancher Security Best Practices
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/rancher-security-best-practices"/>
</head>

### Restrict Public Access to /version and /rancherversion Path

The upstream (local) Rancher instance provides information about the Rancher version it is running and the Go version that was used to build it. That information is accessible via the `/version` path, which is used for tasks such as automating version bumps, or confirming that a deployment was successful. The upstream instance also provides Rancher version information accessible via the `/rancherversion` path.

Adversaries can misuse this information to identify the running Rancher version and cross-relate it with potential bugs to exploit. If your upstream Rancher instance is publicly available on the web, use a Layer 7 firewall to block `/version` and `/rancherversion`.

See [OWASP Web Application Security Testing - Enumerate Infrastructure and Application Admin Interfaces](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/05-Enumerate_Infrastructure_and_Application_Admin_Interfaces.html) for more information on protecting your server.

## Session Management

Some environments may require additional security controls for session management. For example, you may want to limit users' concurrent active sessions or restrict which geolocations those sessions can be initiated from. Such features are not supported by Rancher out of the box. 

If you require such features, combine Layer 7 firewalls with [external authentication providers](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md#external-vs-local-authentication).

## Use External Load Balancers to Protect Vulnerable Ports

You should protect the following ports behind an [external load balancer](../../how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md#layer-4-load-balancer) that has SSL offload enabled:

- **K3s:** Port 6443, used by the Kubernetes API.
- **RKE2:** Port 6443, used by the Kubernetes API, and port 9345, used for node registration. 

These ports have TSL SAN certificates which list nodes' public IP addresses. An attacker could use that information to gain unauthorized access or monitor activity on the cluster. Protecting these ports helps mitigate against nodes' public IP addresses being disclosed to potential attackers.
