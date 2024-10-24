---
title: Best Practices for Disconnected Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/disconnected-clusters"/>
</head>

Rancher supports managing clusters that may not always be online due to network disruptions, control plane availability, or because all cluster nodes are down. At the moment there are no known issues with disconnected clusters in the latest released Rancher version.

While a managed cluster is disconnected from Rancher, management operations will be unavailable, and the Rancher UI will not allow navigation to the cluster. However, once the connection is reestablished, functionality is fully restored.

### Best Practices for Managing Disconnected Clusters

- **Cluster Availability During Rancher Upgrades**: It is recommended to have all, or at least most, managed clusters online during a Rancher upgrade. The reason is that upgrading Rancher automatically upgrades the Rancher agent software running on managed clusters. Keeping the agent and Rancher versions aligned ensures consistent functionality. Any clusters that are disconnected during the upgrade will have their agents updated as soon as they reconnect.

- **Cleaning Up Disconnected Clusters**: Regularly remove clusters that will no longer reconnect to Rancher (e.g., clusters that have been decommissioned or destroyed). Keeping such clusters in the Rancher management system consumes unnecessary resources, which could impact Rancher's performance over time.

- **Certificate Rotation Considerations**: When designing processes that involve regularly shutting down clusters, whether connected to Rancher or not, keep into account for certificate rotation policies. For example, RKE/RKE2/k3s clusters may rotate certificates on startup if they exceeded their lifetime.
