---
title: Windows and Linux Cluster Feature Parity
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity"/>
</head>

Windows clusters do not share the same feature support as Linux clusters.

The following chart describes the feature parity between Windows and Linux on Rancher:

**Component** | **Linux** | **Windows**
--- | --- | ---
**Distributions** |  |
RKE | Supported | Supported
RKE2 | Supported | Supported
K3S | Supported | Not Supported
EKS | Supported | Not Supported
GKE | Supported | Not Supported
AKS | Supported | Not Supported
**Rancher Components** |  |
Server | Supported | Not Supported
Agent | Supported | Supported
Fleet | Supported | Supported
EKS Operator | Supported | Not Supported
AKS Operator | Not Supported | Not Supported
GKE Operator | Not Supported | Not Supported
Monitoring/Alerting v2 | Supported | Supported
Logging v2 | Supported | Supported
Istio | Supported | Not Supported
Catalog v2 | Supported | Not Supported
OPA | Supported | Not Supported
Longhorn | Supported | Not Supported
CIS Scans | Supported | Not Supported
Backup/Restore Operator | Supported | Not Supported
**CNI / Add-ons** |  |
Flannel | Supported | Supported
Canal | Supported | Not Supported
Calico | Supported | Supported (RKE2 Only)
Cilium | Supported | Not Supported
Multus | Supported | Not Supported
Traefik | Supported | Not Supported
NGINX Ingress | Supported | Not Supported

For updated information on feature support, you may visit [rancher/windows](https://github.com/rancher/windows) on GitHub.
