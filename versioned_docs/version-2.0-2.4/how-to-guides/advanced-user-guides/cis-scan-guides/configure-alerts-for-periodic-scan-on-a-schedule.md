---
title: Configure Alerts for Periodic Scan on a Schedule
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule"/>
</head>

Rancher provides a set of alerts for cluster scans. which are not configured to have notifiers by default:

- A manual cluster scan was completed
- A manual cluster scan has failures
- A scheduled cluster scan was completed
- A scheduled cluster scan has failures

:::note Prerequisite

You need to configure a [notifier](../../../explanations/integrations-in-rancher/notifiers.md) before configuring, sending, or receiving alerts.

:::

To activate an existing alert for a CIS scan result,

1. From the cluster view in Rancher, click **Tools > Alerts.**
1. Go to the section called **A set of alerts for cluster scans.**
1. Go to the alert you want to activate and click **⋮ > Activate.**
1. Go to the alert rule group **A set of alerts for cluster scans** and click **⋮ > Edit.**
1. Scroll down to the **Alert** section. In the **To** field, select the notifier that you would like to use for sending alert notifications.
1. Optional: To limit the frequency of the notifications, click on **Show advanced options** and configure the time interval of the alerts.
1. Click **Save.**

**Result:** The notifications will be triggered when the a scan is run on a cluster and the active alerts have satisfied conditions.

To create a new alert,

1. Go to the cluster view and click **Tools > CIS Scans.**
1. Click **Add Alert.**
1. Fill out the form.
1. Enter a name for the alert.
1. In the **Is** field, set the alert to be triggered when a scan is completed or when a scan has a failure.
1. In the **Send a** field, set the alert as a **Critical,** **Warning,** or **Info** alert level.
1. Choose a [notifier](../../../explanations/integrations-in-rancher/notifiers.md) for the alert.

**Result:** The alert is created and activated. The notifications will be triggered when the a scan is run on a cluster and the active alerts have satisfied conditions.

For more information about alerts, refer to [this page.](../../../explanations/integrations-in-rancher/cluster-alerts/cluster-alerts.md)