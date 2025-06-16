---
title: Rancher Linode 快速入门指南
description: 阅读此分步 Rancher Linode 指南，以快速部署带有单节点下游 Kubernetes 集群的 Rancher Server。
---

你可以参考以下步骤，在 Linode 的单节点 K3s Kubernetes 集群中快速部署 Rancher Server，并附加一个单节点下游 Kubernetes 集群。

:::caution

本章节中提供的指南，旨在帮助你快速启动一个用于 Rancher 的沙盒，以评估 Rancher 是否能满足你的使用需求。快速入门指南不适用于生产环境。如果你需要获取生产环境的操作指导，请参见[安装](../../installation-and-upgrade/installation-and-upgrade.md)。

:::

## 先决条件

:::caution

部署到 Linode 会产生费用。

:::

- [Linode 账号](https://linode.com): 用于运行服务器和集群。
- [Linode 访问密钥](https://www.linode.com/docs/products/tools/api/guides/manage-api-tokens/): 用于权限认证的 Linode 访问密钥。
- [Terraform](https://www.terraform.io/downloads.html): 用于在 Linode 中配置服务器和集群。


## 开始使用

1. 使用命令行工具，执行 `git clone https://github.com/rancher/quickstart` 把 [Rancher Quickstart](https://github.com/rancher/quickstart) 克隆到本地。

2. 执行 `cd quickstart/rancher/linode` 命令，进入包含 Terraform 文件的 Linode 文件夹。

3. 把 `terraform.tfvars.example` 文件重命名为 `terraform.tfvars`。

4. 编辑 `terraform.tfvars` 文件，并替换以下变量：
    - `linode_token` - 上面提到的 Linode 访问密钥。
    - `rancher_server_admin_password` - 替换为创建 Rancher Server 的 admin 账号的密码（最少 12 字符）

5. **可选**：修改 `terraform.tfvars` 中的可选参数。
   参见 [Quickstart Readme](https://github.com/rancher/quickstart) 以及 [Linode Quickstart Readme](https://github.com/rancher/quickstart/tree/master/rancher/linode) 了解更多信息。
   建议包括：
   - `linode_region` - 创建服务器以及集群的目标 Linode 区域。
     - 默认: `eu-central`
     - 完整的区域列表, 请参照[官方的可用区域页面](https://www.linode.com/global-infrastructure/availability/).
   - `prefix` - 所有创建资源的前缀
   - `linode_type` - 所有的 Linode 资源使用的类型/计划
     - 默认: `g6-standard-2` 
     - 完整的计划列表, 请参照[官方的计划类型页面](https://www.linode.com/docs/products/compute/compute-instances/plans/).

6. 执行 `terraform init`。

7. 执行 `terraform apply --auto-approve` 以初始化环境。然后，等待命令行工具返回以下信息：

    ```
    Apply complete! Resources: 15 added, 0 changed, 0 destroyed.

    Outputs:

    rancher_node_ip = xx.xx.xx.xx
    rancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io
    workload_node_ip = yy.yy.yy.yy
    ```

8. 将以上输出中的 `rancher_server_url` 粘贴到浏览器中。在登录页面中登录（默认用户名为 `admin`，密码为在 `rancher_server_admin_password` 中设置的密码）。
9. 使用 `quickstart/rancher/linode` 中生成的 `id_rsa` 密钥 SSH 到 Rancher Server。

#### 结果

两个 Kubernetes 集群已部署到你的 Linode 账户中，一个运行 Rancher Server，另一个为实验部署做好准备。请注意，虽然这种设置是探索 Rancher 功能的好方法，但在生产环境中，应遵循我们的高可用设置指南。用于虚拟机的 SSH 密钥是自动生成的，存储在模块目录中。

### 后续操作

使用 Rancher 创建 deployment。详情请参见[创建 Deployment](../deploy-workloads/deploy-workloads.md)。

## 销毁环境

1. 进入 `quickstart/rancher/linode` 文件夹，然后执行 `terraform destroy --auto-approve`。

2. 等待命令行界面显示资源已删除的消息。
