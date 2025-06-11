---
title: SELinux RPM
---

[安全增强型 Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) 是对 Linux 的安全增强。

它由 Red Hat 开发，是 Linux 上 MAC（mandatory access controls，强制访问控制）的实现。系统管理员可以使用 MAC 设置应用程序和用户是如何访问不同资源的，例如文件、设备、网络和进程间的通信。SELinux 还通过默认限制操作系统来增强安全性。

被政府机构使用之后，SELinux 已成为行业标准，并在 CentOS 7 和 8 上默认启用。要检查 SELinux 是否在你的系统上启用和执行，请使用 `getenforce`：

```
# getenforce
Enforcing
```

我们提供了 [`rancher-selinux`](../reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md) 和 [`rke2-selinux`](../reference-guides/rancher-security/selinux-rpm/about-rke2-selinux.md) 两个 RPM（Red Hat 软件包），让 Rancher 产品能够在 SELinux 主机上正常运行。