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

The `rancher-selinux` RPM was tested on openSUSE MicroOS, Fedora 42, and RHEL-based distributions including CentOS/RockyLinux 8, 9, and 10.

:::

### 1. Set up the yum repo

Set up the yum repo to install `rancher-selinux` directly on all hosts in the cluster.

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

## Configuring Applications to Work with SELinux

:::note Requirement:

Logging v2, Monitoring v2, and Rancher AI were tested with SELinux on RHEL/CentOS 8, 9, 10, and Tumbleweed.

:::

The `rancher-selinux` RPM currently covers the following charts: **Logging**, **Monitoring**, and **Rancher AI**.

Applications do not automatically work once the `rancher-selinux` RPM is installed on the host. They need to be configured to run in an allowed SELinux container domain provided by the RPM.

To configure these charts to be SELinux aware, change `global.seLinux.enabled` to true in the `values.yaml` when installing the charts.
