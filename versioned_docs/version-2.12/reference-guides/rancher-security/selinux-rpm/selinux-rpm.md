---
title: SELinux RPM
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/selinux-rpm"/>
</head>

[Security-Enhanced Linux (SELinux)](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) is a security enhancement to Linux.

Developed by Red Hat, it is an implementation of mandatory access controls (MAC) on Linux. Mandatory access controls allow an administrator of a system to define how applications and users can access different resources such as files, devices, networks and inter-process communication. SELinux also enhances security by making an OS restrictive by default.

After being historically used by government agencies, SELinux is now industry standard and is enabled by default on SUSE distributions such as SUSE Linux Enterprise 16, openSUSE Distributions such as openSUSE Tumbleweed and RHEL-based OS such as RockyLinux. To check whether SELinux is enabled and enforcing on your system, use `getenforce`:

```
# getenforce
Enforcing
```

We provide three RPMs (Red Hat packages) that enable Rancher products to function properly on SELinux-enforcing hosts: 
- [`rancher-selinux`](about-rancher-selinux.md)
- [`rke2-selinux`](about-rke2-selinux.md)
- [`k3s-selinux`](about-k3s-selinux.md)