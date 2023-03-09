---
title: Pod Security Standards
---

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) define security restrictions for a broad set of workloads. They replace [Pod Security Policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

## Upgrade to Pod Security Standards

Make sure that you migrate all Pod Security Policies. This should grant equivalent security controls through [Pod Security Admissions](https://kubernetes.io/docs/concepts/security/pod-security-admission/), or through solutions such as [Gatekeeper](https://github.com/open-policy-agent/gatekeeper), [Kubewarden](https://www.kubewarden.io/), [Kyverno](https://kyverno.io/), and [NeuVector](https://neuvector.com/). Remove all PodSecurityPolicy objects from the cluster.

:::info important
You must add your new policy enforcement mechanisms _before_ you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.
:::

## Pod Security Admission Configuration Templates

Rancher comes with two Pod Security Admission (PSA) configuration templates that you can assign to a cluster:

- `rancher-privileged`: This is the most permissive configuration and doesn't restrict the behavior of the pod, allowing for known privilege escalations. This policy has no exemptions.
- `rancher-restricted`: This configuration is heavily restricted and follows current best practices for hardening pods. There are namespace-level exemptions for Rancher components, as described below.

If you are a Rancher administrator or have restricted administrator privileges, you can customize restrictions and permissions by creating additional PSA templates, or by editing existing templates.

:::caution
If you edit an existing PSA template while it is still in use, it *will* affect all clusters that have been assigned that template.
:::

If you want to allow users other than the Rancher administrator to manage PSA templates, you can bind the user to a role that grants the user all verbs (`"*"`) on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::warning
Any user that is bound to the above permission will be able to change the restriction levels on all managed clusters which use this template, including ones they have no permissions on.
:::

### Rancher on PSA-restricted Clusters

When you run Rancher on a Kubernetes cluster that enforces a restrictive security policy by default, such as the `rancher-restricted` policy, you will need to exempt the following namespaces, otherwise the policy might prevent Rancher system pods from properly running.


- `ingress-nginx`
- `kube-system`
- `cattle-system`
- `cattle-epinio-system`
- `cattle-fleet-system`
- `longhorn-system`
- `cattle-neuvector-system`
- `cattle-monitoring-system`
- `rancher-alerting-drivers`
- `cis-operator-system`
- `cattle-csp-adapter-system`
- `cattle-externalip-system`
- `cattle-gatekeeper-system`
- `istio-system`
- `cattle-istio-system`
- `cattle-logging-system`
- `cattle-windows-gmsa-system`
- `cattle-sriov-system`
- `cattle-ui-plugin-system`
- `tigera-operator`

The listed namespaces are already exempt in the built-in Rancher `rancher-restricted` policy. Refer to this [sample Admission Configuration](psa-restricted-exemptions.yaml), which has all the exemptions you need to run Rancher.
