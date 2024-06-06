---
title: Rolling Back Workloads
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"/>
</head>

Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned.

1. In the upper left corner, click **☰ > Cluster Management**.
1. Go to the cluster where you want to upgrade a workload and click **Explore**.
1. In the left navigation bar, click **Workload**.
1. Find the workload that you want to rollback and select **⋮ > Rollback**.

1. Choose the revision that you want to roll back to. Click **Rollback**.

**Result:** Your workload reverts to the previous version that you chose. Wait a few minutes for the action to complete.
