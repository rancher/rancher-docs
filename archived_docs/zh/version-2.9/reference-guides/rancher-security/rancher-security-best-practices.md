---
title: Rancher 安全最佳实践
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/rancher-security-best-practices"/>
</head>

### 限制对 /version 和 /rancherversion 的公共访问

上游（本地） Rancher 实例提供正在运行的 Rancher 版本和用于构建它的 Go 版本信息。这些信息可以通过 `/version` 路径访问，该路径用于诸如自动化版本升级或确认部署成功等任务。上游实例还提供了可通过 `/rancherversion` 路径访问的 Rancher 版本信息。

攻击者可能会滥用这些信息来识别正在运行的 Rancher 版本，并与潜在的漏洞相关联以进行利用。如果你的上游 Rancher 实例在网上是公开可访问的，请使用 7 层防火墙来阻止 `/version` 和 `/rancherversion` 路径。

更多关于保护服务器的详细信息，请参阅 [OWASP Web Application Security Testing - Enumerate Infrastructure and Application Admin Interfaces](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/05-Enumerate_Infrastructure_and_Application_Admin_Interfaces.html)。

### 会话管理

某些环境可能需要额外的安全控制来管理会话。例如，你可能希望限制用户的并发活动会话或限制可以从哪些地理位置发起这些会话。Rancher 默认情况下不支持这些功能。

如果你需要此类功能，请将 7 层防火墙与[外部认证](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md#外部认证与本地认证)结合使用。
