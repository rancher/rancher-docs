---
title: 创建 vSphere 虚拟机模板
---

要重复且可靠地创建虚拟机通常非常困难。VMware vSphere 支持构建可以转换为模板的虚拟机。然后，你可以使用该模板来创建配置相同的虚拟机。Rancher 会在节点池中利用此功能来创建相同的 RKE1 和 RKE2 节点。

为了使用模板创建新的虚拟机，Rancher 有虚拟机必须预先安装的[特定要求](#要求)。根据这些要求配置虚拟机后，你需要[准备虚拟机](#准备虚拟机)，然后再[创建模板](#创建模板)。准备工作完成后，虚拟机可以[转换为模板](#转换为模板)并[移动到内容库中](#移动到内容库)，然后 Rancher 节点池就可以使用它了。


## 要求

Linux 和 Windows 虚拟机都需要特定工具才能供 vSphere 主机驱动使用。最关键的依赖项是 Linux 的 [cloud-init](https://cloud-init.io/) 和 Windows 的 [cloudbase-init](https://cloudbase.it/cloudbase-init/)。二者都用于通过配置主机名和设置 SSH 访问以及默认 Rancher 用户来配置虚拟机。如果需要其他配置，用户可以根据需要添加其他内容。此外，下面列出了其他要求以供参考。

:::note

如果你有任何特定的防火墙规则或配置，则需要在创建模板之前将其添加到虚拟机。

:::

## Linux 依赖项

下面列出了需要在模板上安装的包。不同的发行版对应的名称会略有不同，例如，某些发行版会默认提供。

* curl
* wget
* git
* net-tools
* unzip
* apparmor-parser
* ca-certificates
* cloud-init
* cloud-guest-utils
* cloud-image-utils
* growpart (part of cloud-guest-utils)
* cloud-initramfs-growroot
* open-iscsi
* openssh-server
* [open-vm-tools](https://docs.vmware.com/en/VMware-Tools/11.3.0/com.vmware.vsphere.vmwaretools.doc/GUID-8B6EA5B7-453B-48AA-92E5-DB7F061341D1.html)

## Windows 依赖项

模板上需要安装的包如下：

* Windows 容器功能
* [cloudbase-init](https://cloudbase.it/cloudbase-init/#download)
* [Docker EE](https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=Windows-Server#install-docker) - 仅限 RKE1

:::note

RKE1 和 RKE2 对应的 Windows 模板的配置有所不同：

- RKE1 使用 Docker，因此任何 RKE1 模板都需要预先安装 Docker EE
- RKE2 不需要 Docker EE，因此不需要安装

:::

## 创建模板

你可以手动创建虚拟机，也可以使用[其他替代方法](#手动创建的替代方案)来创建虚拟机。

### 手动创建
1. 在 VMware 中按照[这些说明](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-AE8AFBF1-75D1-4172-988C-378C35C9FAF2.html)手动创建虚拟机。虚拟机运行后，你可以手动安装上面列出的依赖项，以便为 vSphere 主机驱动正确配置虚拟机。
2. 根据你的特定环境和要求按需定制。
3. 在创建模板之前进行最后的准备工作。

### 手动创建的替代方案

下面列出了创建虚拟机的其他替代选项：

* [VMware PowerCLI](https://developer.vmware.com/powercli)
* [Packer](https://www.packer.io/)
* [SaltStack](https://saltproject.io/)
* [Ansible](https://www.ansible.com/)

Packer 是一种常用的替代方案。有关将其与 vSphere 一起使用的示例，请参阅[参考](https://github.com/vmware-samples/packer-examples-for-vsphere)。

## 准备虚拟机

创建具有所有必需依赖项（以及任何其他必需项）的虚拟机后，你必须执行最关键的下一个步骤，即准备将虚拟机转换为模板。此准备步骤会重置关键数据（例如虚拟机主机名、IP 等）以防止这些信息被带入新虚拟机。如果你无法执行此步骤，你也可以创建一个具有相同主机名、IP 地址等的虚拟机。

请注意，Linux 和 Windows 对应的准备步骤有所不同。

### Linux 准备

以下命令将在 Linux 中重置你的虚拟机：

```bash
# 清理日志。
if [ -f /var/log/audit/audit.log ]; then
  cat /dev/null > /var/log/audit/audit.log
fi
if [ -f /var/log/wtmp ]; then
  cat /dev/null > /var/log/wtmp
fi
if [ -f /var/log/lastlog ]; then
  cat /dev/null > /var/log/lastlog
fi

# 清理 udev 规则。
if [ -f /etc/udev/rules.d/70-persistent-net.rules ]; then
  rm /etc/udev/rules.d/70-persistent-net.rules
fi

# 清理 /tmp 路径。
rm -rf /tmp/*
rm -rf /var/tmp/*

# 清理 SSH 主机密钥。
rm -f /etc/ssh/ssh_host_*

# 清理 machine-id。
truncate -s 0 /etc/machine-id
rm /var/lib/dbus/machine-id
ln -s /etc/machine-id /var/lib/dbus/machine-id

# 清理 shell 历史。
unset HISTFILE
history -cw
echo > ~/.bash_history
rm -fr /root/.bash_history

# 截断主机名、主机和 resolv.conf，并将主机名设置为 localhost。
truncate -s 0 /etc/{hostname,hosts,resolv.conf}
hostnamectl set-hostname localhost

# 清理 cloud-init。
cloud-init clean -s -l
```

### Windows 准备

Windows 有一个名为 [sysprep](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep--generalize--a-windows-installation?view=windows-11) 的实用程序，用于一般化镜像并重置上述 Linux 项目。命令如下：

```PowerShell
sysprep.exe /generalize /shutdown /oobe
```

## 转换为模板

1. 关闭并停止虚拟机。
2. 右键单击清单列表中的虚拟机，然后选择**模板**。
3. 点击**转换为模板**。

**结果**：流程完成后，即可使用模板。

有关将虚拟机转换为模板的更多信息，请参阅 [VMware 指南](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-5B3737CC-28DB-4334-BD18-6E12011CDC9F.html)。

## 移动到内容库

Rancher 支持使用内容库提供的模板。内容库在 vSphere 中存储和管理内容，还支持发布和共享该内容。

以下是有关内容库的一些有用链接：

* [创建内容库](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-2A0F1C13-7336-45CE-B211-610D39A6E1F4.html)
* [将模板克隆到内容库](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-AC1545F0-F8BA-4CD2-96EB-21B3DFAA1DC1.html)

## 其他资源

以下是可能有用的其他资源列表：

* [Linux 模板创建教程](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/manage/hybrid/server/best-practices/vmware-ubuntu-template)
* [Windows 模板创建教程](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/manage/hybrid/server/best-practices/vmware-windows-template)
