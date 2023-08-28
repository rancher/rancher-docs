---
title: Run a Scan Periodically on a Schedule
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule"/>
</head>

Recurring scans can be scheduled to run on any RKE Kubernetes cluster.

To enable recurring scans, edit the advanced options in the cluster configuration during cluster creation or after the cluster has been created.

To schedule scans for an existing cluster:

1. Go to the cluster view in Rancher.
1. Click **Tools > CIS Scans.**
1. Click **Add Schedule.** This takes you to the section of the cluster editing page that is applicable to configuring a schedule for CIS scans. (This section can also be reached by going to the cluster view, clicking **⋮ > Edit,** and going to the **Advanced Options.**)
1. In the **CIS Scan Enabled** field, click **Yes.**
[defined in a separate ConfigMap](./skip-tests.md)
1. In the **CIS Scan Interval (cron)** job, enter a [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) to define how often the cluster will be scanned.
1. In the **CIS Scan Report Retention** field, enter the number of past reports that should be kept.

**Result:** The security scan will run and generate reports at the scheduled intervals.

The test schedule can be configured in the `cluster.yml`:

```yaml
scheduled_cluster_scan:
    enabled: true
    scan_config:
        cis_scan_config:
            override_benchmark_version: rke-cis-1.4
            profile: permissive
    schedule_config:
        cron_schedule: 0 0 * * *
        retention: 24
```