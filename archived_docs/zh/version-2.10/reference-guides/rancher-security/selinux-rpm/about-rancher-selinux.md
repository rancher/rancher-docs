---
title: 关于 rancher-selinux
---

要让 Rancher 使用 SELinux，你必须手动为 SELinux 节点启用一些功能。为了解决这个问题，Rancher 提供了一个 SELinux RPM。

The `rancher-selinux` RPM contains a set of SELinux policies designed to grant the necessary privileges to various Rancher components running on Linux systems with SELinux enabled.

`rancher-selinux` 的 GitHub 仓库在[这里](https://github.com/rancher/rancher-selinux)。

## 安装 rancher-selinux RPM

:::note 要求

rancher-selinux RPM 已在 CentOS 7 和 8 上进行了测试。

:::

### 1. 设置 yum 仓库

设置 yum 仓库，从而直接在集群中的所有主机上安装 `rancher-selinux`。

要使用 RPM 仓库，在 CentOS 7 或 RHEL 7 系统上运行以下 bash 代码片段：

```
# cat << EOF > /etc/yum.repos.d/rancher.repo
[rancher]
name=Rancher
baseurl=https://rpm.rancher.io/rancher/production/centos/7/noarch
enabled=1
gpgcheck=1
gpgkey=https://rpm.rancher.io/public.key
EOF
```

要使用 RPM 仓库，在 CentOS 8 或 RHEL 8 系统上运行以下 bash 代码片段：

```
# cat << EOF > /etc/yum.repos.d/rancher.repo
[rancher]
name=Rancher
baseurl=https://rpm.rancher.io/rancher/production/centos/8/noarch
enabled=1
gpgcheck=1
gpgkey=https://rpm.rancher.io/public.key
EOF
```
### 2. 安装 RPM

安装 RPM：

```
yum -y install rancher-selinux
```

## 配置 Logging 应用程序以使用 SELinux

:::note 要求

Logging v2 已在 RHEL/CentOS 7 和 8 上使用 SELinux 进行了测试。

:::

在主机上安装 `rancher-selinux` RPM 后，应用程序不会自动运行。它们需要在 RPM 提供的允许的 SELinux 容器域中运行。

要将 `rancher-logging` Chart 配置为支持 SELinux，请在安装 Chart 时将 `values.yaml` 中的 `global.seLinux.enabled` 更改为 true。