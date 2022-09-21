---
title: Rancher Deployment Strategy
weight: 100
---

There are two recommended deployment strategies for a Rancher Manager server that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:

* [Hub and Spoke](#hub-and-spoke-strategy)
* [Regional](#regional-strategy)

## Hub & Spoke Strategy
---

In this deployment scenario, there is a single Rancher Manager instance managing Kubernetes clusters across the globe. The Rancher Manager would be run on a high-availability Kubernetes cluster, and there would be impact due to latencies.

### Pros

* Single control plane interface to view/see all regions and environments.
* Kubernetes does not require Rancher to operate and can tolerate losing connectivity to the Rancher Manager instance.

### Cons

* Subject to network latencies.
* If the Rancher Manager instance goes down, global provisioning of new services is unavailable until it is restored. However, each Kubernetes cluster can continue to be managed individually.

## Regional Strategy
---
In the regional deployment model a Rancher Manager instance is deployed in close proximity to the downstream Kubernetes clusters.

### Pros

* Rancher functionality in regions stay operational if a Rancher Manager in another region goes down.
* Network latency between Rancher Manager and downstream clusters is greatly reduced, improving the performance of functionality in Rancher.
* Upgrades of Rancher Manager can be done independently per region.

### Cons

* Overhead of managing multiple Rancher installations.
* Visibility into Kubernetes clusters in different regions requires multiple interfaces/panes of glass.
* Deploying multi-cluster apps in Rancher requires repeating the process for each Rancher server.
