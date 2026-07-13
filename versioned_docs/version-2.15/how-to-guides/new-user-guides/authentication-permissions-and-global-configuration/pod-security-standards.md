---
title: Pod Security Standards (PSS) & Pod Security Admission (PSA)
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards"/>
</head>

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) and [Pod Security Admission (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) define security restrictions for a broad set of workloads.
They became available and were turned on by default in Kubernetes v1.23, and replace [Pod Security Policies (PSP)](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions.

## Pod Security Admission Configuration Templates

Rancher offers PSA configuration templates. These are pre-defined security configurations that you can apply to a cluster. Rancher admins (or those with the right permissions) can [create, manage, and edit](./psa-config-templates.md) PSA templates.

### Rancher on PSA-restricted Clusters

Rancher system namespaces are also affected by the restrictive security policies described by PSA templates. You need to exempt Rancher's system namespaces after you assign the template, or else the cluster won't operate correctly. See [Pod Security Admission (PSA) Configuration Templates](./psa-config-templates.md#exempting-required-rancher-namespaces) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](../../../reference-guides/rancher-security/psa-restricted-exemptions.md).
