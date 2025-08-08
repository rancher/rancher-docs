---
title: Creating Credentials in the VMware vSphere Console
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"/>
</head>

This section describes how to create a VMware vSphere username and password. You must provide these vSphere credentials to Rancher, which allows Rancher to provision resources in vSphere.

The following table lists the permissions required for the vSphere user account:

| Privilege Group          | Operations  |
|:-------------------------|:-----------------------------------------------------------------------|
| Cns Privileges           | Searchable |
| Content library          | Read Storage <br/> (Required only if deploying Template from Content Library) |
| Cryptographic operations | Direct Access |
| Datastore                | AllocateSpace <br/> Browse <br/> FileManagement (Low level file operations) <br/> UpdateVirtualMachineFiles <br/> UpdateVirtualMachineMetadata |
| Global                   | Set custom attribute |
| Network                  | Assign |
| Resource                 | AssignVMToPool |
| Virtual Machine          | Config (All) <br/> GuestOperations (All) <br/> Interact (All) <br/> Inventory (All) <br/> Provisioning (All) |
| vSphere Tagging          | Assign or Unassign vSphere Tag <br/> Assign or Unassign vSphere Tag on Object |

The following steps create a role with the required privileges and then assign it to a new user in the vSphere console:

1. From the **vSphere** console, go to the **Administration** page.

2. Go to the **Roles** tab.

3. Create a new role.  Give it a name and select the privileges listed in the permissions table above.

    ![](/img/rancherroles1.png)

4. Go to the **Users and Groups** tab.

5. Create a new user. Fill out the form and then click **OK**. Make sure to note the username and password, because you will need it when creating cloud credentials in Rancher.

    ![](/img/rancheruser.png)

6. Go to the **Global Permissions** tab.

7. Create a new Global Permission. Add the user you created earlier and assign it the role you created earlier. Click **OK**.

    ![](/img/globalpermissionuser.png)

    ![](/img/globalpermissionrole.png)

**Result:** You now have credentials that Rancher can use to manipulate vSphere resources.
