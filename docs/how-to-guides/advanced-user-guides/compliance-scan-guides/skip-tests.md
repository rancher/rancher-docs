---
title: Skip Tests
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/compliance-scan-guides/skip-tests"/>
</head>

Compliancescans can be run using test profiles with user-defined skips.

To skip tests, you will create a custom Compliancescan profile. A profile contains the configuration for the Compliancescan, which includes the benchmark versions to use and any specific tests to skip in that benchmark.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to run a Compliancescan and click **Explore**.
1. Click **Compliance > Profile**.
1. From here, you can create a profile in multiple ways. To make a new profile, click **Create** and fill out the form in the UI. To make a new profile based on an existing profile, go to the existing profile and click **⋮ Clone**.  If you are filling out the form, add the tests to skip using the test IDs, using the relevant Compliance as a reference. If you are creating the new test profile as YAML, you will add the IDs of the tests to skip in the `skipTests` directive. You will also give the profile a name:

    ```yaml
    apiVersion: compliance.cattle.io/v1
    kind: ClusterScanProfile
    metadata:
      annotations:
        meta.helm.sh/release-name: clusterscan-operator
        meta.helm.sh/release-namespace: compliance-operator-system
      labels:
        app.kubernetes.io/managed-by: Helm
      name: "<example-profile>"
    spec:
      benchmarkVersion: rke2-cis-1.7
      skipTests:
        - "1.1.20"
        - "1.1.21"
    ```
1. Click **Create**.

**Result:** A new compliance profile is created.

When you [run a scan](./run-a-scan.md) that uses this profile, the defined tests will be skipped during the scan. The skipped tests will be marked in the generated report as `Skip`.
