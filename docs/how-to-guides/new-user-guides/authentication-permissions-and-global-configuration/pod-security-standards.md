---
title: Pod Security Standards
---

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) define security restrictions for a broad set of workloads.  They replace [Pod Security Policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/), which are now deprecated.


## Upgrade to Pod Security Standards

Make sure that all Pod Security Policies have been migrated, which should result in equivalent security controls still being enforced (e.g. Pod Security Admission, Gatekeeper, Kyverno) and all PodSecurityPolicy objects removed from the cluster.

:::info important
The new policy enforcement must be added before the PodSecurityPolicy objects are removed, or you risk creating a window of opportunity for privilege escalation within the cluster.

:::

## Pod Security Admission Configuration Templates

Rancher comes with two Pod Security Admission Configuration (PSAC) templates that you can assign to a cluster:
- `rancher-privileged`: This is the most permissive configuration and doesn't restrict the behavior of any pod.
- `rancher-restricted`: This policy follows current pod-hardening best practices.


If you are a Rancher administrator or have restricted administrator privileges, you can customize restrictions and permissions by creating additional PSAC templates, or by editing existing templates.

:::caution

If you edit an existing PSAC template while it is still in use, it *will* affect all clusters that have been assigned that template.

:::

If you want to allow users other than the Rancher administrator to manage PSAC templates, you can bind the user to a role that grants the user all verbs ("*") on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::warning

Any user that is bound to the above permission will be able to change the restriction levels on all managed clusters which use this template, including ones they have no permissions on.

:::


### Rancher On PSA-restricted Clusters

When you run Rancher on a Kubernetes cluster that enforces the `rancher-restricted` PSS policy by default, you'll need to exempt the following namespaces. This prevents the policy from blocking Rancher system pods:

Here is the list of the namespaces that require an exemption:
- `kube-system`
- `kube-public`
- `cattle-system`
- `cattle-alerting`
- `cattle-logging`
- `cattle-prometheus`
- `ingress-nginx`
- `cattle-global-data`
- `cattle-istio`
- `kube-node-lease`
- `cert-manager`
- `cattle-global-nt`
- `security-scan`
- `cattle-fleet-system`
- `cattle-fleet-local-system`
- `calico-system`
- `tigera-operator`
- `cattle-impersonation-system`
- `rancher-operator-system`
- `cattle-csp-adapter-system`
- `calico-apiserver`

A sample AdmissionConfiguration with all the required exemptions to run Rancher can be found [here](psa-restricted-exemptions.yaml).
