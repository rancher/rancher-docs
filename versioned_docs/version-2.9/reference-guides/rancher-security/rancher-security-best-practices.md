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

### Session Management

Some environments may require additional security controls for session management. For example, you may want to limit users' concurrent active sessions or restrict which geolocations those sessions can be initiated from. Such features are not supported by Rancher out of the box. 

If you require such features, combine Layer 7 firewalls with [external authentication providers](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md#external-vs-local-authentication).

## Use External Load Balancers to Protect Vulnerable Ports

You should protect the following ports behind an [external load balancer](../../how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md#layer-4-load-balancer) that has SSL offload enabled:

- **K3s:** Port 6443, used by the Kubernetes API.
- **RKE and RKE2:** Port 6443, used by the Kubernetes API, and port 9345, used for node registration. 

These ports have TLS SAN certificates which list nodes' public IP addresses. An attacker could use that information to gain unauthorized access or monitor activity on the cluster. Protecting these ports helps mitigate against nodes' public IP addresses being disclosed to potential attackers.

## Rancher Username Policy

By default, Kubernetes does not provide enforcement mechanisms for baseline username policies. In Rancher, this means that any enforcement of username formats, naming conventions, or baseline policies is expected to be handled by the external identity provider's policies, if such policies are in place.

In Rancher, `admin` is the default username for the Administrator user, as highlighted [here](../../getting-started/installation-and-upgrade/resources/bootstrap-password.md)

Examples of potential baseline policies include:

- Requiring usernames to follow an organizational convention (e.g., `firstname.lastname`)
- Enforcing minimum or maximum length requirements
- Disallowing certain special characters
- Preventing impersonation by disallowing reserved names (e.g., `admin`, `root`)

Without these controls at the identity provider layer, there is a risk of inconsistent or insecure username practices, which can complicate access audits and lead to privilege escalation attempts.

:::note Important

Rancher currently enforces only a [minimum password length](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups.md#minimum-password-length).

:::

**Recommendation:**
We strongly advice that customers:

- Review and configure username baseline policies directly in their external identity providers (e.g., LDAP, Active Directory, SAML, or OIDC).
- Ensure that those policies align with the organization’s security and compliance requirements.
- Regularly audit user accounts to detect naming inconsistencies or policy violations.

For more information, see:

- [OWASP Cheat Sheet: Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Identity Management](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication)

## WAF Rules

Rancher is designed to support a wide range of deployment scenarios, including environments where customers may programmatically automate the creation or provisioning of large numbers of clusters. Imposing strict application-level limits within Rancher itself could interfere with legitimate workloads that require dynamic scaling.

For example:

- CI/CD pipelines may create and tear down clusters frequently.
- Self-service portals could provision clusters on-demand for developers.
- Test environments may generate high volumes of API calls.

**Risk:**
Without appropriate rate limiting, adversaries could exploit unauthenticated or authenticated endpoints to:

- Exhaust resources (Denial of Service).
- Inflate storage costs.
- Degrade performance for legitimate users.

**Recommendation:**
The most effective way to mitigate this risk is to implement rate limiting and abuse protection at the infrastructure or Web Application Firewall (WAF) layer. This approach allows thresholds to be tuned for each environment's expected usage and scaling characteristics. Some examples of controls can be:

- Configuring a Web Application Firewall or API Gateway to enforce rate limits on sensitive operations, such as cluster creation and provisioning.
- Defining thresholds based on baseline workload expectations (e.g., max requests per minute per client).
- Monitoring logs and alerting on anomalies to detect potential abuse.
- Apply a resource quota, which is a Rancher feature that limits the resources available to a project or namespace.

For more information, see:

- [Project Resource Quotas](../../how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/manage-project-resource-quotas.md)
- [OWASP API Security Top 10 - API4:2019 - Lack of Resources & Rate Limiting](https://owasp.org/API-Security/editions/2023/en/0xa4-lack-of-resources-rate-limiting/)
- [OWASP Cheat Sheet: Rate Limiting](https://cheatsheetseries.owasp.org/cheatsheets/Rate_Limiting_Cheat_Sheet.html)