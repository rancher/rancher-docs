---
title: CIS 扫描
---

Rancher 可以通过运行安全扫描来检查 Kubernetes 是否按照 CIS Kubernetes Benchmark 中定义的安全最佳实践进行部署。CIS 扫描可以运行在任何 Kubernetes 集群，包括托管的 Kubernetes，例如 EKS、AKS 和 GKE。

`rancher-cis-benchmark` 应用使用了  <a href="https://github.com/aquasecurity/kube-bench" target="_blank">kube-bench</a> ，这是 Aqua Security 的开源工具，用于检查集群是否符合 CIS Kubernetes Benchmark。此外，为了生成集群级别的报告，此应用使用了  <a href="https://github.com/vmware-tanzu/sonobuoy" target="_blank">Sonobuoy</a> 来聚合报告。


## 关于 CIS Benchmark

CIS（Center for Internet Security）是一个 501(c\)(3) 非营利组织，成立于 2000 年 10 月，其使命是识别、开发、验证、促进和维持网络防御的最佳实践方案，并建立和指导社区，以在网络空间中营造信任的环境。该组织总部位于纽约东格林布什，其成员包括大公司、政府机构和学术机构。

CIS Benchmark 是目标系统安全配置的最佳实践。CIS Benchmark 是由安全专家、技术供应商、公开和私人社区成员，以及 CIS Benchmark 开发团队共同志愿开发的。

你可以访问 CIS 网站获取官方的 Benchmark 文件。要通过注册来访问文件，请前往
<a href="https://learn.cisecurity.org/benchmarks" target="_blank">这里</a>。

## 关于生成的报告

每次扫描都会生成一份报告，你可以在 Rancher UI 中查看该报告，并以 CSV 格式下载它。

默认情况下使用 CIS Benchmark v1.6。

Benchmark 版本包含在生成的报告中。

Benchmark 提供两种类型的建议，分别是自动（Automated）和手动（Manual）。Benchmark 中标记为 Manual 的建议不包含在生成的报告中。

一些测试会被标记为“不适用”。由于 Rancher 配置 RKE 集群的方式，这些测试不会在任何 CIS 扫描中运行。有关如何审核测试结果，以及为什么某些测试会被标记为不适用，请参阅 Rancher 的 Kubernetes 对应版本的[自测指南](./rancher-security.md#cis-benchmark-和自我评估)。

该报告包含以下信息：

| 报告中的列 | 描述 |
|------------------|-------------|
| `id` | CIS Benchmark 的 ID 号。 |
| `description` | CIS Benchmark 测试的描述。 |
| `remediation` | 为了通过测试需要修复的内容。 |
| `state` | 测试的状态，可以是通过、失败、跳过或不适用。 |
| `node_type` | 节点角色，角色决定了在节点上运行的测试。主测试在 controlplane 节点上运行，etcd 测试在 etcd 节点上运行，节点测试在 Worker 节点上运行。 |
| `audit` | 这是 `kube-bench` 为此测试运行的审计检查。 |
| `audit_config` | 适用于审计脚本的任何配置。 |
| `test_info` | `kube-bench` 报告的测试相关信息（如果存在）。 |
| `commands` | `kube-bench` 报告的测试相关的命令（如果存在）。 |
| `config_commands` | `kube-bench` 报告的测试相关的配置数据（如果存在）。 |
| `actual_value` | 测试的实际值。如果由 `kube-bench` 报告，则会显示。 |
| `expected_result` | 测试的预期值。如果由 `kube-bench` 报告，则会显示。 |

请参阅[集群加固指南中的表格](./rancher-security.md)，以了解 Kubernetes、Benchmark、Rancher 以及我们的集群强化指南的版本对应关系。另外，请参阅强化指南，以获取符合 CIS 的集群的配置文件以及修复失败测试的信息。

## 测试配置文件

以下是可用的配置文件：

- Generic CIS 1.5
- Generic CIS 1.6
- RKE permissive 1.5
- RKE hardened 1.5
- RKE permissive 1.6
- RKE hardened 1.6
- RKE2 permissive 1.5
- RKE2 hardened 1.5
- RKE2 permissive 1.6
- RKE2 hardened 1.6
- AKS
- EKS
- GKE

你还可以通过保存一组要跳过的测试来自定义配置文件。

所有配置文件都会有一组不适用的测试，CIS 扫描会跳过这些测试。RKE 集群管理 Kubernetes 的方式导致这些测试被认为不适用。

RKE 集群扫描配置文件有两种类型：

- **Permissive**：此配置文件有一组要跳过的测试，跳过的原因是这些测试会在默认的 RKE Kubernetes 集群上失败。除了跳过的测试列表之外，配置文件也不会运行不适用的测试。
- **Hardened**：此配置文件不会跳过任何测试（不适用的测试除外）。

EKS 和 GKE 集群扫描的配置文件基于这些集群类型特定的 CIS Benchmark 版本。

要通过 “Hardened” 配置文件，你需要遵从[强化指南](./rancher-security.md#rancher-强化指南)并使用强化指南中定义的 `cluster.yml` 来配置一个强化集群。

默认配置文件和支持的 CIS Benchmark 版本取决于扫描的集群类型：

`rancher-cis-benchmark` 支持 CIS 1.6 Benchmark 版本。

- RKE Kubernetes 集群默认使用 RKE Permissive 1.6 配置文件。
- EKS 和 GKE 有自己的 CIS Benchmark，由 `kube-bench` 发布。这些集群默认使用相应的测试配置文件。
- RKE2 Kubernetes 集群默认使用 RKE2 Permissive 1.6 配置文件。
- RKE、RKE2、EKS 和 GKE 以外的集群类型默认使用 Generic CIS 1.5 配置文件。

## 跳过和不适用的测试

有关要跳过和不适用的测试列表，请参阅[此页面](../how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md)。

目前，只有用户定义的跳过测试会在生成报告中标记为跳过。

如果某个默认配置文件将某个测试定义为跳过，则该测试也会标记为不适用。

## RBAC

有关权限的详细信息，请参阅[此页面](../integrations-in-rancher/cis-scans/rbac-for-cis-scans.md)。

## 配置

有关为扫描、配置文件和 Benchmark 版本配置自定义资源的更多信息，请参阅[此页面](../integrations-in-rancher/cis-scans/configuration-reference.md)。

## 操作指南

请参阅[此处](../pages-for-subheaders/cis-scan-guides.md)了解 CIS 扫描的操作指南。