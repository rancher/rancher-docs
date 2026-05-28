---
title: About rancher-selinux
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"/>
</head>

To allow Rancher to work with SELinux, some functionality has to be manually enabled for the SELinux nodes. To help with that, Rancher provides an SELinux RPM.

:::tip Why SELinux?

By assigning a dedicated SELinux type to each container, we ensure that containers are limited to their minimal needs and cannot pivot to other resources if compromised.

:::

The `rancher-selinux` RPM contains a set of SELinux policies designed to grant the necessary privileges to various Rancher components running on Linux systems with SELinux enabled.

The `rancher-selinux` GitHub repository is [here.](https://github.com/rancher/rancher-selinux)

## Installing the rancher-selinux RPM

:::note Requirement:

The `rancher-selinux` RPM was tested with CentOS 7, 8, 9, and 10.

:::

### 1. Set up the yum repo

Set up the yum repo to install `rancher-selinux` directly on all hosts in the cluster.

In order to use the RPM repository, on a CentOS 7 or RHEL 7 system, run the following bash snippet:

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

In order to use the RPM repository, on a CentOS 8 or RHEL 8 system, run the following bash snippet:

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

In order to use the RPM repository, on a CentOS 9 or RHEL 9 system, run the following bash snippet:

```
# cat << EOF > /etc/yum.repos.d/rancher.repo 
[rancher] 
name=Rancher 
baseurl=https://rpm.rancher.io/rancher/production/centos/9/noarch
enabled=1 
gpgcheck=1 
gpgkey=https://rpm.rancher.io/public.key 
EOF
```

In order to use the RPM repository, on a CentOS 10 or RHEL 10 system, run the following bash snippet:

```
# cat << EOF > /etc/yum.repos.d/rancher.repo 
[rancher] 
name=Rancher 
baseurl=https://rpm.rancher.io/rancher/production/centos/10/noarch
enabled=1 
gpgcheck=1 
gpgkey=https://rpm.rancher.io/public.key 
EOF
```

### 2. Installing the RPM

Install the RPM:

```
yum -y install rancher-selinux
```

## Configuring the Logging Application to Work with SELinux

:::note Requirement:

Logging v2 was tested with SELinux on RHEL/CentOS 7, 8, 9, and 10.

:::

Applications do not automatically work once the `rancher-selinux` RPM is installed on the host. They need to be configured to run in an allowed SELinux container domain provided by the RPM. 

To configure the `rancher-logging` chart to be SELinux aware, change `global.seLinux.enabled` to true in the `values.yaml` when installing the chart.

## Rancher AI SELinux Policies

Starting with `rancher-selinux` v0.9, SELinux policies are included for Rancher AI components:

- **rancher-ai-agent** — runs under the `rancher_aiagent_container_t` SELinux domain
- **rancher-ai-mcp** — runs under the `rancher_aimcp_container_t` SELinux domain

These policies are supported on all platforms: EL9, EL10, Fedora 42, and MicroOS.
