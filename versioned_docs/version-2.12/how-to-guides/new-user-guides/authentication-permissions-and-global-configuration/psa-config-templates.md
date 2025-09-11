---
title: Pod Security Admission (PSA) Configuration Templates
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates"/>
</head>

[Pod Security admission (PSA)](./pod-security-standards.md) configuration templates are a Rancher custom-defined resource (CRD), available in Rancher v2.7.2 and above. The templates provide pre-defined security configurations that you can apply to a cluster:

:::info important
The policies shipped by default in Rancher aim to provide a trade-off between security and convenience. If a more strict policy configuration is needed, users are able to craft such policies themselves based on their specific requirements. In the case Rancher policies are preferred, you will need to deploy admission controllers that block the creation of any [exempted namespaces](#exempting-required-rancher-namespaces) that won't be used within your environments.
:::

- `rancher-privileged`: The most permissive configuration. It doesn't restrict the behavior of any pods. This allows for known privilege escalations. This policy has no exemptions.
- `rancher-restricted`: A heavily restricted configuration that follows current best practices for hardening pods. You must make [namespace-level exemptions](./pod-security-standards.md#rancher-on-psa-restricted-clusters) for Rancher components.

## Assign a Pod Security Admissions (PSA) Configuration Template

You can assign a PSA template at the same time that you create a downstream cluster. You can also add a template by configuring an existing cluster.

### Assign a Template During Cluster Creation
<Tabs>
<TabItem value="RKE2 and K3s">

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, click the **Create** button.
1. Select a provider.
1. On the **Cluster: Create** page, go to **Basics > Security**.
1. In the **Pod Security Admission Configuration Template** dropdown menu, select the template you want to assign.
1. Click **Create**.

### Assign a Template to an Existing Cluster

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. Select **Edit Config** .
1. In the **Pod Security Admission Configuration Template** dropdown menu, select the template you want to assign.
1. Click **Save**.


</TabItem>
<TabItem value="RKE1">

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, click the **Create** button.
1. Select a provider.
1. On the **Add Cluster** page, under **Cluster Options**, click **Advanced Options**.
1. In the **Pod Security Admission Configuration Template** dropdown menu, select the template you want to assign.
1. Click **Create**.

### Assign a Template to an Existing Cluster

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. Select **Edit Config**.
1. On the **Edit Cluster** page, go to **Cluster Options > Advanced Options**.
1. In the **Pod Security Admission Configuration Template**, select the template you want to assign.
1. Click **Save**.

</TabItem>
</Tabs>

## Add or Edit a Pod Security Admissions (PSA) Configuration Template

If you have administrator privileges, you can customize security restrictions and permissions by creating additional PSA templates, or by editing existing templates.

:::caution
If you edit an existing PSA template while it is still in use, changes will be applied to all clusters that have been assigned to that template.
:::

1. In the upper left corner, click **☰ > Cluster Management**.
1. Click **Advanced** to open the dropdown menu.
1. Select **Pod Security Admissions**.
1. Find the template you want to modify, and click the **⋮**.
1. Select **Edit Config** to edit the template.
1. When you're done editing the configuration, click **Save**.

### Allow Non-Admin Users to Manage PSA Templates

If you want to allow other users to manage templates, you can bind that user to a role that grants all verbs (`"*"`) on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::caution
Any user that is bound to the above permission will be able to change the restriction levels on _all_ managed clusters which use a given PSA template, including ones that they have no permissions on.
:::

## Exempting Required Rancher Namespaces

When you run Rancher on a Kubernetes cluster that enforces a restrictive security policy by default, you'll need to [exempt the following namespaces](#exempting-namespaces), otherwise the policy might prevent Rancher system pods from running properly.

- `calico-apiserver`
- `calico-system`
- `cattle-alerting`
- `cattle-csp-adapter-system`
- `cattle-elemental-system`
- `cattle-epinio-system`
- `cattle-externalip-system`
- `cattle-fleet-local-system`
- `cattle-fleet-system`
- `cattle-gatekeeper-system`
- `cattle-global-data`
- `cattle-global-nt`
- `cattle-impersonation-system`
- `cattle-istio`
- `cattle-istio-system`
- `cattle-logging`
- `cattle-logging-system`
- `cattle-monitoring-system`
- `cattle-neuvector-system`
- `cattle-prometheus`
- `cattle-provisioning-capi-system`
- `cattle-resources-system`
- `cattle-sriov-system`
- `cattle-system`
- `cattle-ui-plugin-system`
- `cattle-windows-gmsa-system`
- `cert-manager`
- `cis-operator-system`
- `fleet-default`
- `fleet-local`
- `ingress-nginx`
- `istio-system`
- `kube-node-lease`
- `kube-public`
- `kube-system`
- `longhorn-system`
- `rancher-alerting-drivers`
- `security-scan`
- `tigera-operator`

Rancher, some Rancher owned charts, and RKE2 and K3s distributions all use these namespaces. A subset of the listed namespaces are already exempt in the built-in Rancher `rancher-restricted` policy, for use in downstream clusters. For a complete template which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](../../../reference-guides/rancher-security/psa-restricted-exemptions.md).

## Exempting Namespaces

If you assign the `rancher-restricted` template to a cluster, by default the restrictions are applied across the entire cluster at the namespace level. To exempt certain namespaces from this highly restricted policy, do the following:

1. In the upper left corner, click **☰ > Cluster Management**.
1. Click **Advanced** to open the dropdown menu.
1. Select **Pod Security Admissions**.
1. Find the template you want to modify, and click the **⋮**.
1. Select **Edit Config**.
1. Click the **Namespaces** checkbox under **Exemptions** to edit the **Namespaces** field.
1. When you're done exempting namespaces, click **Save**.

:::note
You need to update the target cluster to make the new template take effect in that cluster. An update can be triggered by editing and saving the cluster without changing values.
:::
