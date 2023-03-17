---
title: Preparing to Upgrade a Hardened Custom/Imported Cluster to Kubernetes v1.25
---

Kubernetes v1.25 changes how clusters describe and implement security policies. From this version forward, [Pod Security Policies (PSPs)](https://kubernetes.io/docs/concepts/security/pod-security-policy/) are no longer available. Kubernetes v1.25 replaces them with new security objects: [Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/), and [Pod Security Admissions (PSAs)](https://kubernetes.io/docs/concepts/security/pod-security-admission/). 

If you have custom or imported hardened clusters, you must make special preparations to ensure that the upgrade from an earlier version of Kubernetes to ≥v1.25 goes smoothly.

## Upgrading Imported Hardened Clusters to Kubernetes ≥v1.25

<Tabs>
<TabItem value="RKE2" default>
1. Save [`rancher-psact.yaml`](./rancher-psact.yaml) in `/etc/rancher/rke2` on each node in the cluster.
1. Edit the RKE2 configuration file:
  1. Update the `profile` field to `cis-1.23`.
  1. Specify the path for the configuration file that you just added: `pod-security-admission-config-file: /etc/rancher/rke2/rancher-psact.yaml`.

After you perform these steps, you can upgrade the cluster's Kubernetes version through the Rancher UI.
</TabItem>
<TabItem value="K3s">
Follow the [official K3s instructions](https://docs.k3s.io/known-issues#:~:text=Upgrading%20Hardened%20Clusters%20from%20v1.24.x%20to%20v1.25.x), but use a [custom](./rancher-psact.yaml) Rancher PSA configuration template, instead of the configuration provided on the official K3s site.

After you perform these steps, you can upgrade the cluster's Kubernetes version through the Rancher UI.
</TabItem>
</Tabs>

## Upgrading Custom Hardened Clusters to Kubernetes ≥v1.25

<Tabs>
<TabItem value="RKE2" default>
1. In the upper left corner, click **☰ > Cluster Management**.
1. Find the cluster you want to update in the **Clusters** table, and click the **⋮**.
1. Select **Edit Config**.
1. Under **Basics > Security**, in the **CIS Profile** dropdown menu, select `cis-1.23`. 
1. In the **Default Pod Security Admission** dropdown menu, select `rancher-restricted`.
1. Click **Save**.
1. Upgrade the cluster's Kubernetes version through the Rancher UI.
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