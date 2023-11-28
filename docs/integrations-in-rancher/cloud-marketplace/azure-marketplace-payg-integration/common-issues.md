---
title: Common Issues
---

1. When migrating Rancher to a different AKS by following the steps specified in
   [Rancher Backups and Disaster Recovery](https://ranchermanager.docs.rancher.com/pages-for-subheaders/backup-restore-and-disaster-recovery), Rancher Prime must be reinstalled via the Azure
   marketplace on the target AKS cluster after restoring from the backup.
   Furthermore, the restored Rancher version must not be newer than the version
   available in the Azure marketplace.

2. Uninstalling Rancher Prime may not cleanly remove all the resources that were
   created by Rancher. Users are encouraged to use
   [Rancher cleanup script](https://github.com/rancher/rancher-cleanup) to
   perform a more comprehensive cleanup if necessary. However, it is
   recommended to migrate any other workloads off the cluster and prepare
   to destroy the cluster to complete the uninstallation since cleanup is not
   recoverable.
