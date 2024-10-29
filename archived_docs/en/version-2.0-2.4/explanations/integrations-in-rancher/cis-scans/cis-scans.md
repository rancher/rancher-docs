---
title: CIS Scans
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/cis-scans"/>
</head>

_Available as of v2.4.0_

- [Prerequisites](#prerequisites)
- [How-to Guides](#how-to-guides)

## Prerequisites

To run security scans on a cluster and access the generated reports, you must be an [Administrator](../../../how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md) or [Cluster Owner.](../../../how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)

Rancher can only run security scans on clusters that were created with RKE, which includes custom clusters and clusters that Rancher created in an infrastructure provider such as Amazon EC2 or GCE. Imported clusters and clusters in hosted Kubernetes providers can't be scanned by Rancher.

The security scan cannot run in a cluster that has Windows nodes.

You will only be able to see the CIS scan reports for clusters that you have access to.

## How-to Guides

Please refer [here](../../../how-to-guides/advanced-user-guides/cis-scan-guides/cis-scan-guides.md) for how-to guides on CIS scans.