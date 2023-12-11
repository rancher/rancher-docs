---
title: AWS Marketplace Common Issues
---

1. Uninstalling Rancher Prime may not cleanly remove all the resources that were created by Rancher. Users are encouraged to use the [Rancher resource cleanup script](https://github.com/rancher/rancher-cleanup) to perform a more comprehensive cleanup if necessary. However, it is recommended to migrate any other workloads off the cluster and prepare to destroy the cluster to complete the uninstallation since cleanup is not recoverable.

   ```shell
   helm uninstall -n cattle-rancher-csp-deployer-system rancher-cloud
   ```

1. When migrating Rancher to a different EKS cluster by following the steps specified in [Rancher Backups and Disaster Recovery](https://ranchermanager.docs.rancher.com/pages-for-subheaders/backup-restore-and-disaster-recovery), Rancher Prime must be reinstalled on the target EKS cluster after restoring from the backup. Furthermore, the restored Rancher version must not be newer than the version available in the AWS marketplace.
