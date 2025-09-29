---
title: Compliance Scans
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/compliance-scans"/>
</head>

Rancher can run a security scan to check whether a cluster is deployed according to security best practices as defined in Kubernetes security benchmarks, such as the ones provided by STIG, BSI or CIS. The Compliance scans can run on any Kubernetes cluster, including hosted Kubernetes providers such as EKS, AKS, and GKE.

The `rancher-compliance` app leverages <a href="https://github.com/aquasecurity/kube-bench" target="_blank">kube-bench,</a> an open-source tool from Aqua Security, to check the compliance of clusters against Kubernetes Benchmarks. Also, to generate a cluster-wide report, the application utilizes <a href="https://github.com/vmware-tanzu/sonobuoy" target="_blank">Sonobuoy</a> for report aggregation.


## About the CIS Benchmark

The Center for Internet Security is a 501(c\)(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace". The organization is headquartered in East Greenbush, New York, with members including large corporations, government agencies, and academic institutions.

CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team.

[Sign up](https://learn.cisecurity.org/benchmarks) at the CIS website to view the official Benchmark documents.

## About the Generated Report

Each scan generates a report can be viewed in the Rancher UI and can be downloaded in CSV format.

By default, the CIS Benchmark v1.6 is used.

The Benchmark version is included in the generated report.

The Benchmark provides recommendations of two types: Automated and Manual. Recommendations marked as Manual in the Benchmark are not included in the generated report.

Some tests are designated as "Not Applicable." These tests will not be run on any CIS scan because of the way that Rancher provisions RKE2/K3s clusters. For information on how test results can be audited, and why some tests are designated to be not applicable, refer to Rancher's [self-assessment guide](../../reference-guides/rancher-security/rancher-security.md#the-cis-benchmark-and-self-assessment) for the corresponding Kubernetes version.

The report contains the following information:

| Column in Report  | Description                                                                                                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`              | The ID number of the CIS Benchmark.                                                                                                                                                     |
| `description`     | The description of the CIS Benchmark test.                                                                                                                                              |
| `remediation`     | What needs to be fixed in order to pass the test.                                                                                                                                       |
| `state`           | Indicates if the test passed, failed, was skipped, or was not applicable.                                                                                                               |
| `node_type`       | The node role, which affects which tests are run on the node. Master tests are run on controlplane nodes, etcd tests are run on etcd nodes, and node tests are run on the worker nodes. |
| `audit`           | This is the audit check that `kube-bench` runs for this test.                                                                                                                           |
| `audit_config`    | Any configuration applicable to the audit script.                                                                                                                                       |
| `test_info`       | Test-related info as reported by `kube-bench`, if any.                                                                                                                                  |
| `commands`        | Test-related commands as reported by `kube-bench`, if any.                                                                                                                              |
| `config_commands` | Test-related configuration data as reported by `kube-bench`, if any.                                                                                                                    |
| `actual_value`    | The test's actual value, present if reported by `kube-bench`.                                                                                                                           |
| `expected_result` | The test's expected result, present if reported by `kube-bench`.                                                                                                                        |

Refer to [the table in the cluster hardening guide](../../reference-guides/rancher-security/rancher-security.md) for information on which versions of Kubernetes, the Benchmark, Rancher, and our cluster hardening guide correspond to each other. Also refer to the hardening guide for configuration files of CIS-compliant clusters and information on remediating failed tests.

## Test Profiles

The following profiles are available:

- Generic CIS 1.6
- Generic CIS 1.20
- Generic CIS 1.23
- RKE2 permissive 1.6
- RKE2 hardened 1.6
- RKE2 permissive 1.20
- RKE2 hardened 1.20
- RKE2 permissive 1.23
- RKE2 hardened 1.23
- K3s permissive 1.6
- K3s hardened 1.6
- K3s permissive 1.20
- K3s hardened 1.20
- K3s permissive 1.23
- K3s hardened 1.23
- AKS
- EKS
- GKE

You also have the ability to customize a profile by saving a set of tests to skip.

All profiles will have a set of not applicable tests that will be skipped during the CIS scan. These tests are not applicable based on how a RKE2/K3s cluster manages Kubernetes.

There are two types of RKE2/K3s cluster scan profiles:

- **Permissive:** This profile has a set of tests that have been will be skipped as these tests will fail on a default RKE2/K3s Kubernetes cluster. Besides the list of skipped tests, the profile will also not run the not applicable tests.
- **Hardened:** This profile will not skip any tests, except for the non-applicable tests.

The EKS and GKE cluster scan profiles are based on CIS Benchmark versions that are specific to those types of clusters.

In order to pass the "Hardened" profile, you will need to follow the steps on the [hardening guide](../../reference-guides/rancher-security/rancher-security.md#rancher-hardening-guide) and use the `cluster.yml` defined in the hardening guide to provision a hardened cluster.

The default profile and the supported CIS benchmark version depends on the type of cluster that will be scanned:

The `rancher-compliance` supports the CIS 1.9 Benchmark version.

- For RKE2 Kubernetes clusters, the RKE2 Permissive 1.9 profile is the default.
- EKS and GKE have their own CIS Benchmarks published by `kube-bench`. The corresponding test profiles are used by default for those clusters.
- For cluster types other than RKE2, EKS and GKE, the Generic CIS 1.5 profile is used by default.

## About Skipped and Not Applicable Tests

For now, only user-defined skipped tests are marked as skipped in the generated report.

Any skipped tests that are defined as being skipped by one of the default profiles are marked as not applicable.

## Roles-based Access Control

For information about permissions, refer to [this page](rbac-for-compliance-scans.md)

## Configuration

For more information about configuring the custom resources for the scans, profiles, and benchmark versions, refer to [this page](configuration-reference.md)

## How-to Guides

Please refer to the [Compliance Scan Guides](../../how-to-guides/advanced-user-guides/compliance-scan-guides/compliance-scan-guides.md) to learn how to run Compliance scans.
