---
title: Troubleshooting HA RKE Add-On Install
---

> #### **Important: RKE add-on install is only supported up to Rancher v2.0.8**
>
>Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the [Kubernetes Install ](../../../../../resources/helm-version-requirements.md).
>
>If you are currently using the RKE add-on install method, see [Migrating from a Kubernetes Install with an RKE Add-on](../../../../../install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on.md) for details on how to start using the Helm chart.

This section contains common errors seen when setting up a Kubernetes installation.

Choose from the following options:

- [Generic troubleshooting](generic-troubleshooting.md)

    In this section, you can find generic ways to debug your Kubernetes cluster.

- [Failed to set up SSH tunneling for host](https://rancher.com/docs/rke/latest/en/troubleshooting/ssh-connectivity-errors/)

    In this section, you can find errors related to SSH tunneling when you run the `rke` command to setup your nodes.

- [Failed to get job complete status](job-complete-status.md)

    In this section, you can find errors related to deploying addons.

- [404 - default backend](404-default-backend.md)

    In this section, you can find errors related to the `404 - default backend` page that is shown when trying to access Rancher.
