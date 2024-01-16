---
title: AWS Marketplace Common Issues
---
### Migrating Rancher to a different EKS Cluster

When you migrate Rancher to a different EKS cluster by following the steps in [Rancher Backups and Disaster Recovery](../../../pages-for-subheaders/backup-restore-and-disaster-recovery.md), you must reinstall Rancher Prime on the target EKS cluster after restoring from the backup. Furthermore, the restored Rancher version must not be newer than the version available in the AWS marketplace.
