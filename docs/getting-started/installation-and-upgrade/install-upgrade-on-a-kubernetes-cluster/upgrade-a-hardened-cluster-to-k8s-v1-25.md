---
title: Upgrading a Hardened Custom/Imported Cluster to Kubernetes v1.25
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrade-a-hardened-cluster-to-k8s-v1-25"/>
</head>

Kubernetes v1.25 changes how clusters describe and implement security policies. From this version forward, [Pod Security Policies (PSPs)](https://kubernetes.io/docs/concepts/security/pod-security-policy/) are no longer available. Kubernetes v1.25 replaces them with new security objects: [Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/), and [Pod Security Admissions (PSAs)](https://kubernetes.io/docs/concepts/security/pod-security-admission/).

If you have custom or imported hardened clusters, you must take special preparations to ensure that the upgrade from an earlier version of Kubernetes to v1.25 or later goes smoothly.

:::note

After you upgrade to v1.25, add the necessary Rancher namespace exemptions. See [Pod Security Admission (PSA) Configuration Templates](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md#exempting-required-rancher-namespaces) for more details.

:::

## Upgrading Imported Hardened Clusters to Kubernetes v1.25 or Later

<Tabs groupId="k8s-distro">
<TabItem value="RKE2" default>

Perform the following on each node in the cluster:
1. Save [`rancher-psact.yaml`](./rancher-psact.yaml) in `/etc/rancher/rke2`.
1. Edit the RKE2 configuration file:
   1. Update the `profile` field to `cis-1.23`.
   1. Specify the path for the configuration file that you just added: `pod-security-admission-config-file: /etc/rancher/rke2/rancher-psact.yaml`.

</TabItem>
<TabItem value="K3s">

Perform the following on each node in the cluster:

Follow the official K3s instructions on [Upgrading Hardened Clusters from v1.24.x to v1.25.x](https://docs.k3s.io/known-issues#hardened-125), but use a [custom](./rancher-psact.yaml) Rancher PSA configuration template, instead of the configuration provided on the official K3s site.
</TabItem>
</Tabs>

After you perform these steps, you can upgrade the cluster's Kubernetes version through the Rancher UI:

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. Select **Edit Config**.
1. In the **Kubernetes Version** dropdown menu, select the version that you would like to use.
1. Click **Save**.

## Upgrading Custom Hardened Clusters to Kubernetes v1.25 or Later

<Tabs groupId="k8s-distro">
<TabItem value="RKE2" default>

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. Select **Edit Config**.
1. Under **Basics > Security**, in the **CIS Profile** dropdown menu, select `cis-1.23`.
1. In the **Pod Security Admission Configuration Template** dropdown menu, select `rancher-restricted`.
1. In the **Kubernetes Version** dropdown menu, select the version that you would like to use.
1. Click **Save**.

</TabItem>
<TabItem value="K3s">

1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. Select **Edit YAML**.
1. Delete `PodSecurityPolicy` from `kube-apiserver-arg.enable-admission-plugins`
1. Add this line to the `spec` field: `defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted`
1. Update `kubernetesVersion` to your chosen version (v1.25 or later).
1. Click **Save**.

</TabItem>
</Tabs>
