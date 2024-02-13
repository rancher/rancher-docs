---
title: Common Issues for Rancher Prime PAYG on AWS
---

This page covers some common issues that might arise when setting up the Rancher Prime PAYG offering on Amazon's AWS Marketplace.

### Migrating Rancher to a different EKS Cluster

When you migrate Rancher to a different EKS cluster by following the steps in [Rancher Backups and Disaster Recovery](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/backup-restore-and-disaster-recovery.md), you must reinstall Rancher Prime on the target EKS cluster after restoring from the backup. Furthermore, the restored Rancher version must not be newer than the version available in the AWS Marketplace.
