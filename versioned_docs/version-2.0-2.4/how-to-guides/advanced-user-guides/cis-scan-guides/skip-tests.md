---
title: Skip Tests
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"/>
</head>

You can define a set of tests that will be skipped by the CIS scan when the next report is generated.

These tests will be skipped for subsequent CIS scans, including both manually triggered and scheduled scans, and the tests will be skipped with any profile.

The skipped tests will be listed alongside the test profile name in the cluster configuration options when a test profile is selected for a recurring cluster scan. The skipped tests will also be shown every time a scan is triggered manually from the Rancher UI by clicking **Run Scan.** The display of skipped tests allows you to know ahead of time which tests will be run in each scan.

To skip tests, you will need to define them in a Kubernetes ConfigMap resource. Each skipped CIS scan test is listed in the ConfigMap alongside the version of the CIS benchmark that the test belongs to.

To skip tests by editing a ConfigMap resource,

1. Create a `security-scan` namespace.
1. Create a ConfigMap named `security-scan-cfg`.
1. Enter the skip information under the key `config.json` in the following format:

    ```json
    {
      "skip": {
        "rke-cis-1.4": [
          "1.1.1",
          "1.2.2"
        ]
      }
    }
    ```

    In the example above, the CIS benchmark version is specified alongside the tests to be skipped for that version.

**Result:** These tests will be skipped on subsequent scans that use the defined CIS Benchmark version.