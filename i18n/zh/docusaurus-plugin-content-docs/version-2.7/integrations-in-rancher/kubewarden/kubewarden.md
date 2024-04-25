---
title: 使用 Kubewarden 进行高级策略管理
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/kubewarden"/>
</head>

Kubewarden 是一个策略引擎，用于保护和帮助管理集群资源。它允许通过策略验证和更改资源请求，包括上下文感知策略和验证镜像签名。它可以在监视或强制模式下运行策略，并提供集群状态的概述。

Kubewarden 旨在通过启用和简化“策略即代码”来成为通用策略引擎。Kubewarden 策略被编译到 WebAssembly 中： 它们体积小（400KB~2MB），沙箱式，安全且便携。它旨在通过迎合组织中的每个人来实现通用性：

- 策略用户：使用 Kubernetes 自定义资源管理和声明策略，重新使用 Rego（OPA 和 Gatekeeper）中编写的现有策略。在 CI/CD 中测试群集外部的策略。
- 策略开发人员：使用你喜欢的 Wasm 编译语言（Rego、Go、Rust、C#、Swift、Typescript 等）编写策略。重新使用你已经熟悉的工具、库和工作流的生态系统。
- 策略分发器：策略是 OCI 工件，通过 OCI 仓库为它们提供服务，并在你的基础设施中使用行业标准，如 Software-Bill-Of-Materials 和工件签名。
- 集群操作员：Kubewarden 是模块化的（OCI 注册表、PolicyServers、Audit Scanner、Controller）。配置你的部署以满足你的需求，隔离不同的租户。使用审核扫描程序和策略报告在集群中获取过去、当前和可能的违规行为的概述。
- Kubewarden Integrator：将其用作编写新的 Kubewarden 模块和自定义策略的平台。

## Kubewarden 和 Rancher

Kubewarden 的上游 Helm Chart 完全集成为 Rancher 应用程序，为安装选项提供了 UI。这些 Chart 还附带了尊重 Rancher 堆栈的默认设置（例如：不监管 Rancher 系统命名空间）以及默认的 PolicyServer 和策略。用户可以访问所有 Kubewarden 功能，并可以通过与 Kubernetes API 交互（例如：使用 kubectl）手动部署 PolicyServer 和策略。

Kubewarden 提供了对已删除的 Kubernetes Pod 安全策略的完全替换。 Kubewarden 还通过增强其安全功能，与最新版本的 Kubernetes 引入的新 Pod Security Admission 功能进行了集成。

## Kubewarden 和 Rancher Prime

Kubewarden 的 Rancher UI 扩展将其集成到 Rancher UI 中。UI 扩展可自动安装和配置 Kubewarden 堆栈，并配置对 SUSE 维护的策略的访问。UI 扩展提供了对现成策略的策划目录的访问。使用 UI 扩展，人们可以浏览、安装和配置这些策略。

UI 扩展提供了 Kubewarden 堆栈组件及其行为的概述。这包括对 Kubewarden 指标和跟踪事件的访问。操作员可以了解策略对集群的影响并排查问题。

此外，UI 扩展还提供了 Policy Reporter UI，它可以直观地概述 Kubernetes 集群的合规性状态。通过此 UI，操作员可以快速识别所有不合规的 Kubernetes 资源，了解违规原因并采取相应行动。所有这一切都得益于 Rancher Prime 的支持。
