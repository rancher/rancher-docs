---
title: Pod Security Standards
---

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) and [Pod Security admissions (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) define security restrictions for a broad set of workloads. They replace [Pod Security Policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions.

## Upgrade to Pod Security Standards

Make sure that you migrate all Pod Security Policies. This should grant equivalent security controls through [Pod Security Admissions](https://kubernetes.io/docs/concepts/security/pod-security-admission/), or through solutions such as [Gatekeeper](https://github.com/open-policy-agent/gatekeeper), [Kubewarden](https://www.kubewarden.io/), [Kyverno](https://kyverno.io/), and [NeuVector](https://neuvector.com/). Remove all PodSecurityPolicy objects from the cluster.

:::info important
You must add your new policy enforcement mechanisms _before_ you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.
:::

## Pod Security Admission Configuration Templates

Rancher comes with two Pod Security Admission (PSA) configuration templates that you can assign to a cluster:

- `rancher-privileged`: This is the most permissive configuration and doesn't restrict the behavior of the pod, allowing for known privilege escalations. This policy has no exemptions.
- `rancher-restricted`: This configuration is heavily restricted and follows current best practices for hardening pods. There are namespace-level exemptions for Rancher components, as described below.

If you are a Rancher administrator or have restricted administrator privileges, you can customize restrictions and permissions by creating additional templates, or by editing existing templates.

:::caution
If you edit an existing template while it is still in use, it *will* affect all clusters that have been assigned that template.
:::

If you want to allow users other than the Rancher administrator to manage templates, you can bind the user to a role that grants the user all verbs (`"*"`) on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::warning
Any user that is bound to the above permission will be able to change the restriction levels on all managed clusters which use this template, including ones they have no permissions on.
:::

### Rancher on PSA-restricted Clusters

When you run Rancher on a Kubernetes cluster that enforces a restrictive security policy by default, you will need to exempt the following namespaces, otherwise the policy might prevent Rancher system pods from properly running.

- `calico-apiserver`
- `calico-system`
- `cattle-alerting`
- `cattle-csp-adapter-system`
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
- `cattle-sriov-system`
- `cattle-system`
- `cattle-ui-plugin-system`
- `cattle-windows-gmsa-system`
- `cert-manager`
- `cis-operator-system`
- `ingress-nginx`
- `istio-system`
- `kube-node-lease`
- `kube-public`
- `kube-system`
- `longhorn-system`
- `rancher-alerting-drivers`
- `security-scan`
- `tigera-operator`

Rancher, some Rancher owned charts, and RKE2 and K3s distributions all use these namespaces. A subset of the listed namespaces are already exempt in the built-in Rancher `rancher-restricted` policy, for use in downstream clusters. For a complete template which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](psa-restricted-exemptions.yaml).
