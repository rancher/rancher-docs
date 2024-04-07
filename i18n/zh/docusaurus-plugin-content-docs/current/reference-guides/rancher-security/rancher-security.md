---
title: 安全
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security"/>
</head>

<table width="100%">
<tr style={{verticalAlign: 'top'}}>
<td width="30%" style={{border: 'none'}}>
<h4>安全策略</h4>
<p style={{padding: '8px'}}>Rancher Labs 会负责任地披露问题，并致力于在合理的时间内解决所有问题。 </p>
</td>
<td width="30%" style={{border: 'none'}}>
<h4>报告流程</h4>
<p style={{padding: '8px'}}>请将安全问题发送至 <a href="mailto:security-rancher@suse.com">security-rancher@suse.com</a>。</p>
</td>
<td width="30%" style={{border: 'none'}}>
<h4>公告</h4>
<p style={{padding:'8px'}}>订阅 <a href="https://forums.rancher.com/c/announcements">Rancher 公告论坛</a>以获取版本更新。</p>
</td>
</tr>
</table>

安全是 Rancher 全部功能的基础。Rancher 集成了全部主流身份验证工具和服务，并提供了企业级的 [RBAC 功能](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md)，让你的 Kubernetes 集群更加安全。

本文介绍了安全相关的文档以及资源，让你的 Rancher 安装和下游 Kubernetes 集群更加安全。

### NeuVector 与 Rancher 的集成

NeuVector 是一个开源的、以容器为中心的安全应用程序，现已集成到 Rancher 中。NeuVector 提供生产安全、DevOps 漏洞保护和容器防火墙等功能。请参阅 [Rancher 文档](../../integrations-in-rancher/neuvector/neuvector.md) 和 [NeuVector 文档](https://open-docs.neuvector.com/)了解更多信息。

### 在 Kubernetes 集群上运行 CIS 安全扫描

Rancher 使用 [kube-bench](https://github.com/aquasecurity/kube-bench) 来运行安全扫描，从而检查 Kubernetes 是否按照 [CIS](https://www.cisecurity.org/cis-benchmarks/)（Center for Internet Security，互联网安全中心）Kubernetes Benchmark 中定义的安全最佳实践进行部署。

CIS Kubernetes Benchmark 是一个参考文档，用于为 Kubernetes 建立安全配置基线。

CIS 是一个 501(c\)(3) 非营利组织，成立于 2000 年 10 月，其使命是识别、开发、验证、促进和维持网络防御的最佳实践方案，并建立和指导社区，以在网络空间中营造信任的环境。

CIS Benchmark 是目标系统安全配置的最佳实践。CIS Benchmark 是由安全专家、技术供应商、公开和私人社区成员，以及 CIS Benchmark 开发团队共同志愿开发的。

Benchmark 提供两种类型的建议，分别是自动（Automated）和手动（Manual）。我们只运行 Automated 相关的测试。

Rancher 在集群上运行 CIS 安全扫描时会生成一份报告，该报告会显示每个测试的结果，包括测试概要以及 `passed`、`skipped` 和 `failed` 的测试数量。报告还包括失败测试的修正步骤。

有关详细信息，请参阅[安全扫描](../../how-to-guides/advanced-user-guides/cis-scan-guides/cis-scan-guides.md)。

### SELinux RPM

[安全增强型 Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) 是对 Linux 的安全增强。被政府机构使用之后，SELinux 已成为行业标准，并在 CentOS 7 和 8 上默认启用。

我们提供了 `rancher-selinux` 和 `rke2-selinux` 两个 RPM（Red Hat 软件包），让 Rancher 产品能够在 SELinux 主机上正常运行。有关详细信息，请参阅[此页面](selinux-rpm/selinux-rpm.md)。

### Rancher 加固指南

Rancher 加固指南基于 <a href="https://www.cisecurity.org/benchmark/kubernetes/" target="_blank">CIS Kubernetes Benchmark</a>。

加固指南为加固 Rancher 的生产安装提供了说明性指导。有关安全管控的完整列表，请参阅 Rancher 的 [CIS Kubernetes Benchmark自我评估](#cis-benchmark-和自我评估)指南。

> 加固指南描述了如何保护集群中的节点，建议在安装 Kubernetes 之前参考加固指南中的步骤。

每个加固指南版本都针对特定的 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 版本。

### CIS Benchmark 和自我评估

Benchmark 自我评估是 Rancher 安全加固指南的辅助。加固指南展示了如何加固集群，而 Benchmark 指南旨在帮助你评估加固集群的安全级别。

由于 Rancher 和 RKE 将 Kubernetes 服务安装为 Docker 容器，因此 CIS Kubernetes Benchmark 中的许多管控验证检查都不适用。本指南将介绍各种 controls，并提供更新的示例命令来审计 Rancher 创建的集群的合规性。你可以前往 [CIS 网站](https://www.cisecurity.org/benchmark/kubernetes/)下载原始的 Benchmark 文档。

Rancher 自我评估指南的每个版本都对应于强化指南、Rancher、Kubernetes 和 CIS Benchmark 的特定版本。

### 第三方渗透测试报告

Rancher 会定期聘请第三方对 Rancher 软件栈进行安全审计和渗透测试。被测环境遵循 Rancher 在测试时提供的强化指南。以前的渗透测试报告如下。

结果：

- [Cure53 渗透测试 - 2019 年 7 月](https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf)
- [Untamed Theory 渗透测试 - 2019 年 3 月](https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf)

请注意，新报告不再共享或公开发布。

### Rancher 安全公告和 CVE

Rancher 致力于向社区通报我们产品中的安全问题。有关我们已解决的问题的 CVE（常见漏洞和暴露）列表，请参阅[此页](security-advisories-and-cves.md)。

### Kubernetes 安全最佳实践

有关保护 Kubernetes 集群的建议，请参阅 [Kubernetes 安全最佳实践](kubernetes-security-best-practices.md) 指南。

### Rancher 安全最佳实践

有关保护 Rancher Manager 部署的建议，请参阅 [Rancher 安全最佳实践](rancher-security-best-practices.md) 指南。
