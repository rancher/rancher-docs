---
title: 在 vSphere 控制台中创建凭证
---

本节介绍如何创建 vSphere 用户名和密码。你需要将这些 vSphere 凭证提供给 Rancher，Rancher 才能在 vSphere 中配置资源。

下表列出了 vSphere 用户账号所需的权限：

| 特权组 | 操作 |
|:-------------------------|:-----------------------------------------------------------------------|
| Cns Privileges | Searchable |
| Content library | Read Storage <br/> (Required only if deploying Template from Content Library) |
| Cryptographic operations | Direct Access |
| Datastore | AllocateSpace <br/> Browse <br/> FileManagement (Low level file operations) <br/> UpdateVirtualMachineFiles <br/> UpdateVirtualMachineMetadata |
| 全局 | Set custom attribute |
| 网络 | Assign |
| 资源 | AssignVMToPool |
| 虚拟机 | Config (All) <br/> GuestOperations (All) <br/> Interact (All) <br/> Inventory (All) <br/> Provisioning (All) |
| vSphere 标签 | Assign or Unassign vSphere Tag <br/> Assign or Unassign vSphere Tag on Object |

以下步骤创建具有所需权限的角色，然后在 vSphere 控制台中将角色分配给新用户：

1. 在 **vSphere** 控制台中转到 **Administration** 页面。

2. 转到 **Roles** 选项卡。

3. 创建一个新角色。为新角色命名，并选择上面权限表中列出的权限。

   ![](/img/rancherroles1.png)

4. 转到 **Users and Groups** 选项卡。

5. 创建一个新用户。填写表单，然后单击 **OK**。请务必记下用户名和密码，因为在 Rancher 中配置节点模板时将需要用到这些信息。

   ![](/img/rancheruser.png)

6. 转到 **Global Permissions** 选项卡。

7. 创建一个新的全局权限。添加之前创建的用户，并为其分配之前创建的角色。单击 **OK**。

   ![](/img/globalpermissionuser.png)

   ![](/img/globalpermissionrole.png)

**结果**：你已拥有 Rancher 所需的操作 vSphere 资源的凭证。
