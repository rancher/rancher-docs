---
title: Common Issues for Rancher Prime PAYG on Azure
---

This page covers some common issues that might arise when setting up the Rancher Prime PAYG offering on Microsoft's Azure Marketplace.

### Migrating Rancher to a Different AKS Cluster

When you migrate Rancher to a different AKS cluster by following the steps in [Rancher Backups and Disaster Recovery](../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/backup-restore-and-disaster-recovery.md), you must reinstall Rancher Prime on the target AKS cluster after restoring from the backup. Furthermore, the restored Rancher version must not be newer than the version available in the Azure Marketplace.
