---
title: Pod Security Standards
---

[Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) are a built-in replacement for Pod Security Policies which broadly define security restrictions. 

## Upgrade to Pod Security Standards
You should implement a working Pod Security Standard (PSS) policy before you upgrade.
This will secure your cluster throughout the upgrade process. Once you have a PSS policy in place,
clean up all configurations related to Pod Security Policies (PSPs) before you begin your upgrade.

## Pod Security Admission Configuration Templates

Rancher comes with two Pod Security Admission Configuration (PSAC) templates that you can assign to a cluster:
* `rancher-privileged`:  This is the most permissive configuration and doesn't restrict the behavior of any pod.
* `rancher-restricted`:  This policy follows current pod-hardening best practices.


If you are an Rancher administrator or have restricted administrator privileges,
you can customize restrictions and permissions by creating additional PSAC templates, 
or by editing existing templates.

:::caution
If you edit an existing PSAC template while it is still in use, it *will* affect all clusters
that have been assigned that template.

:::

If you want to allow users other than the Rancher administrator to manage PSAC templates,
you can create a role/binding that grants the user all verbs
on `management.cattle.io/podsecurityadmissionconfigurationtemplates`.

:::warning
Any user that is bound to the above permission will be able to change the restriction levels on all managed clusters.
:::


### Running Rancher on a local cluster that is PSA restricted by default

When running Rancher on a Kubernetes cluster that is enforcing the "restricted"
Pod Security Standard by default, you will need to add some exemptions to that policy
for the namespaces used by Rancher to allow the Rancher system pods to perform actions
that would not otherwise be permitted.

* Here is a list of the namespaces that require an exemption:
    * _kube-system, kube-public, cattle-system, cattle-alerting, cattle-logging, cattle-prometheus,
ingress-nginx, cattle-global-data, cattle-istio, kube-node-lease, cert-manager,
cattle-global-nt, security-scan, cattle-fleet-system, cattle-fleet-local-system,
calico-system, tigera-operator, cattle-impersonation-system, rancher-operator-system,
cattle-csp-adapter-system, calico-apiserver_ 

* A sample AdmissionConfiguration with all the required exemptions to run Rancher
can be found [here](psa-restricted-exemptions.yaml)
