---
title: Pod Security Admissions (PSA) Configuration Templates 
---

[Pod Security admission (PSA)](./pod-security-standards.md) configuration templates are a Rancher custom-defined resource (CRD), available in Rancher v2.7.2 and above. The templates provide pre-defined security configurations that you can apply to a cluster:

- `rancher-privileged`: The most permissive configuration. It doesn't restrict the behavior of any pods. This allows for known privilege escalations. This policy has no exemptions.
- `rancher-restricted`: A heavily restricted configuration that follows current best practices for hardening pods. You must make [namespace-level exemptions](./pod-security-standards.md#rancher-on-psa-restricted-clusters) for Rancher components.

## Assign a Pod Security Admissions (PSA) Configuration Template

You can assign a PSA template at the same time that you create a downstream cluster. You can also add a template by configuring an existing cluster.

### Assign a Template During Cluster Creation 

For RKE2 and K3s:

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, click the **Create** button.
1. Select a provider.
1. On the **Cluster: Create** page, go to **Basics > Security**. 
1. In the **Default Pod Security Admission** dropdown menu, select the template you want to assign.

For RKE1:

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, click the **Create** button.
1. Select a provider.
1. On the **Add Cluster** page, under **Cluster Options**, click **Advanced Options**.
1. In the **Pod Security Admission Configuration Template** dropdown menu, select the template you want to assign. 

### Assign a Template to an Existing Cluster

For RKE2 and K3s:

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. In the **Default Pod Security Admission** dropdown menu, select the template you want to assign.

For RKE1:

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. On the **Add Cluster** page, go to **Cluster Options > Advanced Options**.
1. In the **Pod Security Admission Configuration Template**, select the template you want to assign. 

### Hardening the Cluster

If you select the **rancher-restricted** template but don't select a **CIS Profile**, you won't meet required CIS benchmarks. See the [hardening guide](../../../pages-for-subheaders/rancher-security.md#rancher-hardening-guide) for more details.

## Add or Edit a Pod Security Admissions (PSA) Configuration Template

If you are have administrator privileges, you can customize security restrictions and permissions by creating additional PSA templates, or by editing existing templates.

:::note caution
If you edit an existing PSA template while it is still in use, changes will be applied to all clusters that have been assigned to that template.
:::

1. In the upper left corner, click **☰ > Cluster Management**.
1. Click **Advanced** to open the dropdown menu.
1. Select **Pod Security Admissions**.
1. Find the template you want to modify, and click the **⋮**.
1. Select **Edit Config** to edit the template.

### Allow Non-Admin Users to Manage PSA Templates

If you want to allow other users to manage templates, you can bind that user to a role that grants all verbs (`"*"`) on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::note warning
Any user that is bound to the above permission will be able to change the restriction levels on _all_ managed clusters which use a given PSA template, including ones that they have no permissions on.
:::

## Exempting Namespaces

If you assign the `rancher-restricted` template to a cluster, by default the restrictions are applied across the entire cluster at the namespace level. To exempt certain namespaces from this highly restricted policy, do the following: 

1. In the upper left corner, click **☰ > Cluster Management**.
1. Click **Advanced** to open the dropdown menu.
1. Select **Pod Security Admissions**.
1. Find the template you want to modify, and click the **⋮**.
1. Select **Edit Config**.
1. Click the **Namespaces** checkbox under **Exemptions** to edit the **Namespaces** field. 

### Exempting Required Rancher Namespaces

Rancher system namespaces are also affected by the restrictive security policies applied by PSA templates. You need to exempt Rancher's system namespaces after you assign the template, or else the cluster won't operate correctly. See [Pod Security Standards (PSS) & Pod Security Admissions (PSA)](./pod-security-standards.md#rancher-on-psa-restricted-clusters) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](psa-restricted-exemptions.yaml).
