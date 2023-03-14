---
title: Pod Security Admissions (PSA) Configuration Templates 
---

[Pod Security admissions (PSA)](./pod-security-standards.md) configuration templates are a Rancher custom-defined resource (CRD), available in Rancher v2.7.2 and above. They provide pre-defined security configurations that you can apply to a cluster:

- `rancher-privileged`: The most permissive configuration. It doesn't restrict the behavior of any pods. This allows for known privilege escalations. This policy has no exemptions.
- `rancher-restricted`: A heavily restricted configuration that follows current best practices for hardening pods. There are namespace-level exemptions for Rancher components, as described below.

## Configure a Pod Security Admissions (PSA) Configuration Template

If you are a Rancher administrator or have restricted administrator privileges, you can customize restrictions and permissions by creating additional templates, or by editing existing templates.

:::caution
If you edit an existing PSA template while it is still in use, it affects all clusters that have been assigned that template.
:::

### Allow Non-Admin Users to Manage PSA Templates

If you want to allow other users to manage templates, you can bind the user to a role that grants all verbs (`"*"`) on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::warning
Any user that is bound to the above permission will be able to change the restriction levels on _all_ managed clusters which use a given PSA template, including ones that they have no permissions on.
:::

### Configure a PSA Template on RKE

### Configure a PSA Template on RKE2

### Configure a PSA Template on K3s 

## Allowlist Rancher Namespaces

When you run Rancher on a Kubernetes cluster that enforces a restrictive security policy by default, you need to exempt Rancher's system namespaces, or else the cluster won't operate correctly. See [Pod Security Standards (PSS) & Pod Security Admissions (PSA)](./pod-security-standards.md#rancher-on-psa-restricted-clusters) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](psa-restricted-exemptions.yaml).

## Troubleshooting PSA Configuration Templates