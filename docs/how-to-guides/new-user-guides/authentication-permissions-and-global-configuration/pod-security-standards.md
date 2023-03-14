---
title: Pod Security Standards (PSS) & Pod Security Admissions (PSA)
---

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) and [Pod Security admissions (PSAs)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) define security restrictions for a broad set of workloads. They replace [Pod Security Policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions on pods.

## Upgrade to Pod Security Standards (PSS)

Make sure that you migrate all Pod Security Policies (PSPs). This should grant equivalent security controls through [Pod Security Admissions](https://kubernetes.io/docs/concepts/security/pod-security-admission/), or through solutions such as [Gatekeeper](https://github.com/open-policy-agent/gatekeeper), [Kubewarden](https://www.kubewarden.io/), [Kyverno](https://kyverno.io/), and [NeuVector](https://neuvector.com/). Remove all `PodSecurityPolicy` objects from the cluster.

:::info important
You must add your new policy enforcement mechanisms _before_ you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.
:::

## Pod Security Admission (PSA) Configuration Templates

Rancher offers PSA configuration templates. These are pre-defined security configurations that you can apply to a cluster. Rancher admins (or those with the right permissions) can [create, manage, and edit](./psa-config-templates.md) PSA templates.

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
