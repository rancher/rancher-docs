---
title: Vagrant 快速入门
---

你可以参考以下步骤快速部署 Rancher Server，并附加一个单节点集群。

:::caution

本章节中提供的指南，旨在帮助你快速启动一个用于 Rancher 的沙盒，以评估 Rancher 是否能满足你的使用需求。快速入门指南不适用于生产环境。如果你需要获取生产环境的操作指导，请参见[安装](../../installation-and-upgrade/installation-and-upgrade.md)。

:::

## 先决条件

- [Vagrant](https://www.vagrantup.com)：Vagrant 是必需的，用于根据 Vagrantfile 配置主机。
- [Virtualbox](https://www.virtualbox.org)：需要把 Vagrant 配置的虚拟机配置到 VirtualBox。
- 至少 4GB 的可用内存。

### 注意
- Vagrant 需要使用插件来创建 VirtualBox 虚拟机。请执行以下命令进行安装：

   `vagrant plugin install vagrant-vboxmanage`

   `vagrant plugin install vagrant-vbguest`

## 开始使用

1. 使用命令行工具，执行 `git clone https://github.com/rancher/quickstart` 把 [Rancher Quickstart](https://github.com/rancher/quickstart) 克隆到本地。

2. 执行 `cd quickstart/rancher/vagrant` 命令，进入包含 Vagrantfile 文件的文件夹。

3. **可选**：编辑 `config.yaml` 文件：

   - 根据需要更改节点数和内存分配（`node.count`, `node.cpus`, `node.memory`）
   - 更改 `admin` 的密码以登录 Rancher。（`admin_password`，最少 12 个字符）

4. 执行 `vagrant up --provider=virtualbox` 以初始化环境。

5. 配置完成后，在浏览器中打开 `https://192.168.56.101`。默认的用户名和密码是 `admin/adminPassword`。

**结果**：Rancher Server 和你的 Kubernetes 集群已安装在 VirtualBox 上。

### 后续操作

使用 Rancher 创建 deployment。详情请参见[创建 Deployment](../deploy-workloads/deploy-workloads.md)。

## 销毁环境

1. 进入 `quickstart/rancher/vagrant` 文件夹，然后执行 `vagrant destroy -f`。

2. 等待所有资源已删除的确认消息。
