---
title: AWS Marketplace Common Issues
---

1. Uninstalling Rancher Prime may not cleanly remove all the resources that Rancher created. You are encouraged to use the [Rancher resource cleanup script](https://github.com/rancher/rancher-cleanup) to perform a more comprehensive cleanup if necessary. However, we recommend first preparing and migrating any other workloads off the cluster to destroy the cluster to complete the uninstallation since cleanup is not recoverable.

   ```shell
   helm uninstall -n cattle-rancher-csp-deployer-system rancher-cloud
   ```

1. When migrating Rancher to a different EKS by following the steps specified in [Rancher Backups and Disaster Recovery](../../../pages-for-subheaders/backup-restore-and-disaster-recovery.md), you must reinstall Rancher Prime on the target EKS cluster after restoring from the backup. Furthermore, the restored Rancher version must not be newer than the version available in the AWS marketplace.
