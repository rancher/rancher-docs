---
title: Pod Security Standards
---


[Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) are a built-in replacement for Pod Security Policies which broadly define security restrictions. 








###  TODO

* PSAC templates
	* How they work, what the flow is
	* That updating a template will affect live clusters
	* Who can edit. Including a template management role workaround with it's own warning/caveat.
* How to upgrade
	* Ensure that a replacement is in place before you upgrade and PSPs are off


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
