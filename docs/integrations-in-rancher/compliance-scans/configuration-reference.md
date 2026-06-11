---
title: Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/compliance-scans/configuration-reference"/>
</head>

This configuration reference is intended to help you manage the custom resources created by the `rancher-compliance` application. These resources are used for performing compliance scans on a cluster, skipping tests, setting the test profile that will be used during a scan, and other customization.

To configure the custom resources, go to the **Cluster Dashboard** To configure the compliance scans,

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to configure compliance scans and click **Explore**.
1. In the left navigation bar, click **Compliance**.

## Scans

A scan is created to trigger a compliance scan on the cluster based on the defined profile. A report is created after the scan is completed.

When configuring a scan, you need to define the name of the scan profile that will be used with the `scanProfileName` directive.

An example ClusterScan custom resource is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScan
metadata:
  name: scan-smnr9
spec:
  scanProfileName: cis-1.10-profile
```

## Profiles

A profile contains the configuration for the compliance scan, which includes the benchmark version to use and any specific tests to skip in that benchmark.

:::caution

By default, a few ClusterScanProfiles are installed as part of the `rancher-compliance` chart. If a user edits these default benchmarks or profiles, the next chart update will reset them back. So it is advisable for users to not edit the default  ClusterScanProfiles.

:::

Users can clone the ClusterScanProfiles to create custom profiles.

Skipped tests are listed under the `skipTests` directive.

When you create a new profile, you will also need to give it a name.

An example `ClusterScanProfile` is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScanProfile
metadata:
  annotations:
    clusterscanprofile.compliance.cattle.io/builtin: 'true'
    meta.helm.sh/release-name: rancher-compliance
    meta.helm.sh/release-namespace: compliance-operator-system
  creationTimestamp: '2025-09-15T18:09:52Z'
  generation: 1
  labels:
    app.kubernetes.io/managed-by: Helm
  name: cis-1.10-profile
  resourceVersion: '93582'
  uid: 0baad187-1157-46ac-982d-014338847c27
spec:
  benchmarkVersion: cis-1.10
  skipTests:
    - '1.1.20'
    - '1.1.21'
```

## Benchmark Versions

A benchmark version is the name of benchmark to run using `kube-bench`, as well as the valid configuration parameters for that benchmark.

A `ClusterScanBenchmark` defines the Compliance `BenchmarkVersion` name and test configurations. The `BenchmarkVersion` name is a parameter provided to the `kube-bench` tool.

By default, a few `BenchmarkVersion` names and test configurations are packaged as part of the Compliance scan application. When this feature is enabled, these default BenchmarkVersions will be automatically installed and available for users to create a ClusterScanProfile.

:::caution

If the default BenchmarkVersions are edited, the next chart update will reset them back. Therefore we don't recommend editing the default ClusterScanBenchmarks.

:::

A ClusterScanBenchmark consists of the fields:

- `ClusterProvider`: This is the cluster provider name for which this benchmark is applicable. For example: RKE2, EKS, GKE, etc. Leave it empty if this benchmark can be run on any cluster type.
- `MinKubernetesVersion`: Specifies the cluster's minimum kubernetes version necessary to run this benchmark. Leave it empty if there is no dependency on a particular Kubernetes version.
- `MaxKubernetesVersion`: Specifies the cluster's maximum Kubernetes version necessary to run this benchmark. Leave it empty if there is no dependency on a particular k8s version.
- `customBenchmarkConfigMapName`: The name of the ConfigMap containing the custom benchmark config files. Required when creating a custom benchmark version.
- `customBenchmarkConfigMapNamespace`: The namespace where the custom benchmark ConfigMap is located. Required when creating a custom benchmark version.

An example `ClusterScanBenchmark` for a default benchmark is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScanBenchmark
metadata:
  annotations:
    meta.helm.sh/release-name: rancher-compliance
    meta.helm.sh/release-namespace: compliance-operator-system
  creationTimestamp: '2025-09-15T18:09:52Z'
  generation: 1
  labels:
    app.kubernetes.io/managed-by: Helm
  name: cis-1.10
  resourceVersion: '93569'
  uid: 309e543e-9102-4091-be91-08d7af7fb7a7
spec:
  clusterProvider: ''
  minKubernetesVersion: 1.28.0
```

An example `ClusterScanBenchmark` for a custom benchmark that references a ConfigMap is below:

```yaml
apiVersion: compliance.cattle.io/v1
kind: ClusterScanBenchmark
metadata:
  name: rke2-cis-1.8-custom
spec:
  clusterProvider: rke2
  minKubernetesVersion: 1.28.0
  customBenchmarkConfigMapName: rke2-cis-1.8-custom
  customBenchmarkConfigMapNamespace: compliance-operator-system
```

## XCCDF Metadata for Custom Benchmarks

When downloading compliance scan reports in XCCDF format, the output can be enriched with benchmark-specific metadata by including an optional `metadata.yaml` file in the custom benchmark's ConfigMap. This file is mounted at the config root alongside `config.yaml` and its contents are read when generating XCCDF reports. This applies to any benchmark format, including CIS and STIG.

If `metadata.yaml` is not present, XCCDF output uses default placeholder values (for example, the title defaults to `Kubernetes CIS Benchmark <benchmarkVersion>` and other fields default to `not-applicable`).

For instructions on adding `metadata.yaml` to a custom benchmark ConfigMap, refer to [Creating a Custom Benchmark Version](./custom-benchmark.md).

### metadata.yaml Schema

The `metadata.yaml` file is a flat YAML file placed at the root of the custom benchmark directory. The following fields are supported:

| Field | Description |
|---|---|
| `title` | The benchmark title, used as the XCCDF `<title>` element. Defaults to `Kubernetes CIS Benchmark <benchmarkVersion>` if not set. |
| `description` | A description of the benchmark. |
| `publisher` | The name of the organization publishing the benchmark. |
| `contributor` | The name of the contributor. |
| `creator` | The name of the creator. |
| `source` | A URL or identifier for the source of the benchmark. |
| `platform` | A CPE identifier for the target platform (for example, `cpe:/a:kubernetes:kubernetes`). |
| `notice` | Legal or usage notice text. |
| `noticeId` | An identifier for the notice element. |
| `frontMatter` | Introductory text to include before the benchmark content. |
| `rearMatter` | Closing text to include after the benchmark content. |
| `referenceHref` | A URL for the benchmark reference. |
| `referenceTitle` | The title of the benchmark reference. |
| `referenceType` | The type of the benchmark reference. |
| `referenceSubject` | The subject of the benchmark reference. |
| `referenceIdentifier` | An identifier for the benchmark reference. |
| `checkHref` | A URL for the check content reference. |
| `checkName` | The name of the check content reference. |
| `clusterName` | Overrides the cluster name used in the XCCDF `<target>` element. |
| `benchmarkId` | Overrides the XCCDF benchmark ID. Defaults to `xccdf_compliance-operator_benchmark_kubernetes`. |

`metadata.yaml` also supports an optional `checks` map for per-check or per-group rule overrides. Each key is either a check ID (exact match, applied verbatim) or a group ID (applied to all checks in the group). This applies to any benchmark format, including CIS and STIG.

Each entry under `checks` supports the following fields:

| Field | Description |
|---|---|
| `ruleId` | The STIG rule ID (for example, `SV-254553r1016525_rule`). Overrides the default compliance-operator rule ID in the XCCDF output. |
| `version` | The rule version string. |
| `severity` | Overrides the rule severity (`high`, `medium`, or `low`). |
| `fixId` | The ID of the fix element. |
| `checkId` | The check system identifier (maps to the XCCDF `<check system>` attribute). |
| `idents` | A list of XCCDF ident objects, each with `system` and `value` fields. STIG benchmarks use `http://cyber.mil/cci` as the system; CIS benchmarks use the CIS controls URL. |

### Example metadata.yaml (CIS benchmark)

```yaml
title: "My Custom CIS Benchmark"
publisher: "My Organization"
contributor: "My Team"
creator: "My Team"
description: "Custom CIS benchmark for foo clusters."
platform: "cpe:/a:kubernetes:kubernetes"
notice: "For internal use only."
noticeId: "internal-notice"
referenceHref: "https://example.com/benchmark"
referenceTitle: "My Benchmark Reference"
source: "https://example.com"
```

### Example metadata.yaml (STIG benchmark)

```yaml
title: "RKE2 STIG Benchmark"
publisher: "Defense Information Systems Agency"
platform: "cpe:/a:kubernetes:kubernetes"
referenceHref: "https://public.cyber.mil/stigs/"
referenceTitle: "DISA STIG for Kubernetes"
checks:
  V-254553:
    ruleId: SV-254553r1016525_rule
    version: SV-254553r1016525_rule
    severity: high
    fixId: F-254553
    checkId: C-254553
    idents:
      - system: "http://cyber.mil/cci"
        value: "CCI-000366"
```
