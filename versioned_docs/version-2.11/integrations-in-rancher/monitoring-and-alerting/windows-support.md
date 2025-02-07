---
title: Windows Cluster Support for Monitoring V2
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/monitoring-and-alerting/windows-support"/>
</head>

Monitoring V2 can be deployed on a Windows cluster to scrape metrics from Windows nodes using [prometheus-community/windows_exporter](https://github.com/prometheus-community/windows_exporter) (previously named `wmi_exporter`).

## Cluster Requirements

Monitoring V2 for Windows can only scrape metrics from Windows hosts that have a minimum `wins` version of v0.1.0.  To be able to fully deploy Monitoring V2 for Windows, all of your hosts must meet this requirement.

If you provision a fresh RKE1 cluster in Rancher 2.5.8, your cluster should already meet this requirement.

### Upgrading Existing Clusters to wins v0.1.0

If the cluster was provisioned before Rancher 2.5.8 (even if the current Rancher version is 2.5.8), you will not be able to successfully deploy Monitoring V2 for Windows until you upgrade the wins version on each host to at least v0.1.0.

To facilitate this upgrade, Rancher 2.5.8 has released a brand new Helm chart called `rancher-wins-upgrader`.

1. Deploy `rancher-wins-upgrader` with the following override:
    ```yaml
    # Masquerading bootstraps the wins-upgrader installation via
    # a previously whitelisted process path since the normal install path,
    # c:\etc\rancher\wins\wins-upgrade.exe is not normally whitelisted.
    # In this case, we are using the previously whitelisted process
    # path used by Monitoring V1.
    masquerade:
      enabled: true
      as: c:\\etc\wmi-exporter\wmi-exporter.exe
    ```
    :::note Note for Non-Default Windows Prefix Path:

    - If you set up the RKE cluster with a `cluster.yml` that has a non-default `win_prefix_path`, you will need to update the `masquerade.as` field with your prefix path in place of  `c:\\`.

    - For example, if you have `win_prefix_path: 'c:\host\opt\'`, then you will need to set `as: c:\host\opt\etc\wmi-exporter\wmi-exporter.exe`.

    :::

2. Once all your hosts have been successfully upgraded, please ensure that you deploy the Helm chart once again with default values to avoid conflicts with the following settings:
    ```yaml
    masquerade:
      enabled: false
    ```

**Result:** The hosts are ready for Monitoring V2 to be installed. You may choose to uninstall the `rancher-wins-upgrader` chart or keep it in your cluster to facilitate future upgrades.

For more information on how it can be used, please see the [README.md](https://github.com/rancher/wins/blob/master/charts/rancher-wins-upgrader/README.md) of the chart.
