---
title: Pod Security Admissions (PSA) Configuration Templates 
---

[Pod Security admissions (PSA)](./pod-security-standards.md) configuration templates are a Rancher custom-defined resource (CRD), available in Rancher v2.7.2 and above. They provide pre-defined security configurations that you can apply to a cluster:

- `rancher-privileged`: The most permissive configuration. It doesn't restrict the behavior of any pods. This allows for known privilege escalations. This policy has no exemptions.
- `rancher-restricted`: A heavily restricted configuration that follows current best practices for hardening pods. There are [namespace-level exemptions](./pod-security-standards.md#rancher-on-psa-restricted-clusters) for Rancher components.

## Assign a Pod Security Admissions (PSA) Configuration Template

You can assign a PSA template at the same time that you create a downstream cluster. You can also add a template by configuring an existing cluster.

### Assign a Template During RKE2/K3s Cluster Creation 

1. Click the **☰**.
1. Select **Cluster Management**
1. On the **Clusters** page, click the **Create** button.
1. Click **Advanced Options**. 
1. In the **Pod Security Admission Configuration Template** dropdown menu, select the template you want to assign.

:::note

If you need to harden the cluster, select a profile from the **CIS Profile** dropdown menu, and click the checkbox, **Allow PSA Default Template to be overridden when using a CIS Profile**. This will force the cluster to use the **rancher-restricted** template. If you select **rancher-restricted** but don't select a **CIS Profile**, you won't meet required CIS benchmarks. See the [hardening guide](tba) for more details.

:::

// insert image here //

### Assign a Template to an Existing RKE2/K3s Cluster

1. Click the **☰**.
1. Select **Cluster Management**
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. In the **Pod Security Admission Configuration Template** dropdown menu, select the template you want to assign.

## Add or Edit a Pod Security Admissions (PSA) Configuration Template

If you are have administrator privileges, you can customize security restrictions and permissions by creating additional PSA templates, or by editing existing templates.

:::caution
If you edit an existing PSA template while it is still in use, changes will be applied to all clusters that have been assigned that template.
:::

1. Click the **☰**.
1. Select **Cluster Management**
1. Click **Advanced** to open the dropdown menu.
1. Select **Pod Security Admissions**.
1. Find the template you want to modify, and click the **⋮**.
1. Select **Edit Config** to edit the template.

// insert image here //

### Allow Non-Admin Users to Manage PSA Templates

If you want to allow other users to manage templates, you can bind the user to a role that grants all verbs (`"*"`) on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::warning
Any user that is bound to the above permission will be able to change the restriction levels on _all_ managed clusters which use a given PSA template, including ones that they have no permissions on.
:::

### Configure a PSA Template on RKE

### Configure a PSA Template on RKE2

### Configure a PSA Template on K3s 

## Exempting Namespaces

1. Click the **☰**.
1. Select **Cluster Management**
1. Click **Advanced** to open the dropdown menu.
1. Select **Pod Security Admissions**.
1. Find the template you want to modify, and click the **⋮**.
1. Select **Edit Config**.
1. Click the **Namespaces** checkbox under **Exemptions** to edit the **Namespaces** field. 

### Exempt Required Rancher Namespaces

When you run Rancher on a Kubernetes cluster that enforces a restrictive security policy by default, you need to exempt Rancher's system namespaces, or else the cluster won't operate correctly. See [Pod Security Standards (PSS) & Pod Security Admissions (PSA)](./pod-security-standards.md#rancher-on-psa-restricted-clusters) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](psa-restricted-exemptions.yaml).

## Troubleshooting PSA Configuration Templates
