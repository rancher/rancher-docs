---
title: Rancher Deployment Strategy
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"/>
</head>

There are two recommended deployment strategies for a Rancher instance that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case.

## Hub & Spoke Strategy
---

In this deployment scenario, there is a single Rancher instance managing Kubernetes clusters across the globe. The Rancher instance would be run on a high-availability Kubernetes cluster, and there would be impact due to latencies.

### Pros

* Single control plane interface to view/see all regions and environments.
* Kubernetes does not require Rancher to operate and can tolerate losing connectivity to the Rancher instance.

### Cons

* Subject to network latencies.
* If Rancher goes down, global provisioning of new services is unavailable until it is restored. However, each Kubernetes cluster can continue to be managed individually.

## Regional Strategy
---
In the regional deployment model a Rancher instance is deployed in close proximity to the downstream Kubernetes clusters.

### Pros

* Rancher functionality in regions stay operational if a Rancher instance in another region goes down.
* Network latency between Rancher and downstream clusters is greatly reduced, improving the performance of functionality in Rancher.
* Upgrades of Rancher can be done independently per region.

### Cons

* Overhead of managing multiple Rancher installations.
* Visibility into Kubernetes clusters in different regions requires multiple interfaces/panes of glass.
* Deploying multi-cluster apps in Rancher requires repeating the process for each Rancher server.
