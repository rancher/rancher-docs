---
title: View Reports
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/compliance-scan-guides/view-reports"/>
</head>

To view the generated Compliance scan reports,

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to run a Compliance scan and click **Explore**.
1. Click **Compliance > Scan**.
1. The **Scans** page will show the generated reports. To see a detailed report, go to a scan report and click the name.

You can download the report from the Scans list or from the scan detail page in one of two formats:
- **CSV:** A flat file containing all test results for the scan.
- **XCCDF (XML):** A per-node report packaged as a `.zip` file with one `.xml` file per node in the cluster.

To get the verbose version of the compliance scan results, run the following command on the cluster that was scanned. Note that the scan must be completed before this can be done.

```console
export REPORT="scan-report-name"
kubectl get clusterscanreports.compliance.cattle.io $REPORT -o json |jq ".spec.reportJSON | fromjson" | jq -r ".actual_value_map_data" | base64 -d | gunzip | jq .
```
