---
title: Pod Security Standards (PSS) & Pod Security Admissions (PSA)
---

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) and [Pod Security admissions (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) define security restrictions for a broad set of workloads. They replace [Pod Security Policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions on pods.

## Upgrade to Pod Security Standards (PSS)

Make sure that you migrate all Pod Security Policies (PSPs). This should grant equivalent security controls through [Pod Security Admissions](https://kubernetes.io/docs/concepts/security/pod-security-admission/), or through solutions such as [Gatekeeper](https://github.com/open-policy-agent/gatekeeper), [Kubewarden](https://www.kubewarden.io/), [Kyverno](https://kyverno.io/), and [NeuVector](https://neuvector.com/). Remove all `PodSecurityPolicy` objects from the cluster.

:::info important
You must add your new policy enforcement mechanisms _before_ you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.
:::

## Pod Security Admission (PSA) Configuration Templates

Rancher offers PSA configuration templates. These are pre-defined security configurations that you can apply to a cluster. Rancher admins (or those with the right permissions) can [create, manage, and edit](./psa-config-templates.md) PSA templates.

### Rancher on PSA-restricted Clusters

Rancher system namespaces are also affected by the restrictive security policies described by PSA templates. You need to exempt Rancher's system namespaces after you assign the template, or else the cluster won't operate correctly. See [Pod Security Admission (PSA) Configuration Templates](./psa-config-templates.md#exempting-required-rancher-namespaces) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](psa-restricted-exemptions.md).
