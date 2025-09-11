---
title: Creating an AKS Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"/>
</head>

You can use Rancher to create a cluster hosted in Microsoft Azure Kubernetes Service (AKS).

## Prerequisites in Microsoft Azure

:::caution

Deploying to AKS will incur charges.

:::

To interact with Azure APIs, an AKS cluster requires an Azure Active Directory (AD) service principal. The service principal is needed to dynamically create and manage other Azure resources, and it provides credentials for your cluster to communicate with AKS. For more information about the service principal, refer to the [AKS documentation](https://docs.microsoft.com/en-us/azure/aks/kubernetes-service-principal).

Before creating the service principal, you need to obtain the following information from the [Microsoft Azure Portal](https://portal.azure.com):

- Subscription ID
- Client ID (also known as app ID)
- Client secret

The below sections describe how to set up these prerequisites using either the Azure command line tool or the Azure portal.

### Setting Up the Service Principal with the Azure Command Line Tool

You must assign roles to the service principal so that it has communication privileges with the AKS API. It also needs access to create and list virtual networks. 

In the following example, the command creates the service principal and gives it the Contributor role. The Contributor role can manage anything on AKS but cannot give access to others. Note that you must provide `scopes` a full path to at least one Azure resource: 

```
az ad sp create-for-rbac --role Contributor --scopes /subscriptions/<subscription-id>/resourceGroups/<resource-group-name>
```

The result should show information about the new service principal:

```
{
  "appId": "xxxx--xxx",
  "displayName": "<service-principal-name>",
  "name": "http://<service-principal-name>",
  "password": "<secret>",
  "tenant": "<tenant-name>"
}
```

The following creates a [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-cli) to contain your Azure resources:

```
az group create --location <azure-location-name> --resource-group <resource-group-name>
```

### Setting Up the Service Principal from the Azure Portal

Follow these instructions to set up a service principal and give it role-based access from the Azure Portal.

1. Go to the Microsoft Azure Portal [home page](https://portal.azure.com).
1. Click **Azure Active Directory**.
1. Click **App registrations**.
1. Click **New registration**.
1. Enter a name for your service principal.
1. Optional: Choose which accounts can use the service principal.
1. Click **Register**.
1. You should now see the name of your service principal under **Azure Active Directory > App registrations**.
1. Click the name of your service principal. Take note of the application ID (also called app ID or client ID) so that you can use it when provisioning your AKS cluster. Then click **Certificates & secrets**.
1. Click **New client secret**.
1. Enter a short description, pick an expiration time, and click **Add**. Take note of the client secret so that you can use it when provisioning the AKS cluster.

**Result:** You have created a service principal and you should be able to see it listed in the **Azure Active Directory** section under **App registrations**. You still need to give the service principal access to AKS.

To give role-based access to your service principal,

1. Click **All Services** in the left navigation bar. Then click **Subscriptions**.
1. Click the name of the subscription that you want to associate with your Kubernetes cluster. Take note of the subscription ID so that you can use it when provisioning your AKS cluster.
1. Click **Access Control (IAM)**.
1. In the **Add role assignment** section, click **Add**.
1. In the **Role** field, select a role that will have access to AKS. For example, you can use the **Contributor** role, which has permission to manage everything except for giving access to other users.
1. In the **Assign access to** field, select **Azure AD user, group, or service principal**.
1. In the **Select** field, select the name of your service principal and click **Save**.

**Result:** Your service principal now has access to AKS.

## Create the AKS Cloud Credentials

1. In the Rancher UI, click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click **Azure**.
1. Fill out the form. For help with filling out the form, see the [configuration reference.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md#cloud-credentials)
1. Click **Create**.

## Create the AKS Cluster

Use Rancher to set up and configure your Kubernetes cluster.

1. Click **☰ > Cluster Management**.
1. In the **Clusters** section, click **Create**.
1. Click **Azure AKS**.
1. Fill out the form. For help with filling out the form, see the [configuration reference.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md)
1. Click **Create**.

**Result:** Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

## Configure Role-based Access Control

When provisioning an AKS cluster in the Rancher UI, RBAC is not configurable because it is required to be enabled.

RBAC is required for AKS clusters that are registered or imported into Rancher.

### Setting Up the Role Assignment to Service Principal with the Azure Command Line Tool

Assign the Rancher AKSv2 role to the service principal with the Azure Command Line Tool:

```
az role assignment create \
--assignee <client-id> \
--scope "/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>" \
--role "Rancher AKSv2"
```

## AKS Cluster Configuration Reference

For more information about how to configure AKS clusters from the Rancher UI, see the [configuration reference.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md)

## Private Clusters

Typically, AKS worker nodes do not get public IPs, regardless of whether the cluster is private. In a private cluster, the control plane does not have a public endpoint.

Rancher can connect to a private AKS cluster in one of two ways.

The first way to ensure that Rancher is running on the same [NAT](https://docs.microsoft.com/en-us/azure/virtual-network/nat-overview) as the AKS nodes.

The second way is to run a command to register the cluster with Rancher. Once the cluster is provisioned, you can run the displayed command anywhere you can connect to the cluster’s Kubernetes API. This command is displayed in a pop-up when you provision an AKS cluster with a private API endpoint enabled.

:::note

Please be aware that when registering an existing AKS cluster, the cluster might take some time, possibly hours, to appear in the `Cluster To register` dropdown list. This outcome will be based on region.

:::

For more information about connecting to an AKS private cluster, see the [AKS documentation.](https://docs.microsoft.com/en-us/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster)

## Setting Up the Minimum Permission Role with the Azure Command Line Tool

1. Create the Minimum Rancher AKSv2 Permission Role by running this command:

  ```
  cat >> rancher-azure.json << EOF
  
  {
      "Name": "Rancher AKSv2",
      "IsCustom": true,
      "Description": "Everything needed by Rancher AKSv2 operator",
      "Actions": [
          "Microsoft.Compute/disks/delete",
          "Microsoft.Compute/disks/read",
          "Microsoft.Compute/disks/write",
          "Microsoft.Compute/diskEncryptionSets/read",
          "Microsoft.Compute/locations/DiskOperations/read",
          "Microsoft.Compute/locations/vmSizes/read",
          "Microsoft.Compute/locations/operations/read",
          "Microsoft.Compute/proximityPlacementGroups/write",
          "Microsoft.Compute/snapshots/delete",
          "Microsoft.Compute/snapshots/read",
          "Microsoft.Compute/snapshots/write",
          "Microsoft.Compute/virtualMachineScaleSets/manualUpgrade/action",
          "Microsoft.Compute/virtualMachineScaleSets/delete",
          "Microsoft.Compute/virtualMachineScaleSets/read",
          "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/read",
          "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses/read",
          "Microsoft.Compute/virtualMachineScaleSets/virtualmachines/instanceView/read",
          "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/read",
          "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/write",
          "Microsoft.Compute/virtualMachineScaleSets/write",
          "Microsoft.Compute/virtualMachines/read",
          "Microsoft.Compute/virtualMachines/write",
          "Microsoft.ContainerService/managedClusters/read",
          "Microsoft.ContainerService/managedClusters/write",
          "Microsoft.ContainerService/managedClusters/delete",
          "Microsoft.ContainerService/managedClusters/accessProfiles/listCredential/action",
          "Microsoft.ContainerService/managedClusters/agentPools/read",
          "Microsoft.ContainerService/managedClusters/agentPools/write",
          "Microsoft.ContainerService/managedClusters/agentPools/delete",
          "Microsoft.ManagedIdentity/userAssignedIdentities/assign/action",
          "Microsoft.Network/applicationGateways/read",
          "Microsoft.Network/applicationGateways/write",
          "Microsoft.Network/loadBalancers/write",
          "Microsoft.Network/loadBalancers/backendAddressPools/join/action",
          "Microsoft.Network/loadBalancers/delete",
          "Microsoft.Network/loadBalancers/read",
          "Microsoft.Network/networkInterfaces/join/action",
          "Microsoft.Network/networkInterfaces/read",
          "Microsoft.Network/networkInterfaces/write",
          "Microsoft.Network/networkSecurityGroups/read",
          "Microsoft.Network/networkSecurityGroups/write",
          "Microsoft.Network/publicIPAddresses/delete",
          "Microsoft.Network/publicIPAddresses/join/action",
          "Microsoft.Network/publicIPAddresses/read",
          "Microsoft.Network/publicIPAddresses/write",
          "Microsoft.Network/publicIPPrefixes/join/action",
          "Microsoft.Network/privatednszones/*",
          "Microsoft.Network/routeTables/read",
          "Microsoft.Network/routeTables/routes/delete",
          "Microsoft.Network/routeTables/routes/read",
          "Microsoft.Network/routeTables/routes/write",
          "Microsoft.Network/routeTables/write",
          "Microsoft.Network/virtualNetworks/read",
          "Microsoft.Network/virtualNetworks/subnets/join/action",
          "Microsoft.Network/virtualNetworks/subnets/read",
          "Microsoft.Network/virtualNetworks/joinLoadBalancer/action",
          "Microsoft.OperationalInsights/workspaces/sharedkeys/read",
          "Microsoft.OperationalInsights/workspaces/read",
          "Microsoft.OperationsManagement/solutions/write",
          "Microsoft.OperationsManagement/solutions/read",
          "Microsoft.Resources/subscriptions/resourcegroups/read",
          "Microsoft.Resources/subscriptions/resourcegroups/write",
          "Microsoft.Storage/operations/read",
          "Microsoft.Storage/storageAccounts/listKeys/action",
          "Microsoft.Storage/storageAccounts/delete",
          "Microsoft.Storage/storageAccounts/read",
          "Microsoft.Storage/storageAccounts/write"
      ],
      "NotActions": [],
      "DataActions": [],
      "NotDataActions": [],
      "AssignableScopes": [
          "/subscriptions/SUBSCRIPTION_ID"
      ]
  }
  EOF
  ```

2. Apply the Rancher AKSv2 Role:

  ```
  az role definition create --role-definition rancher-azure.json
  ```

3. Verify if the Rancher AKSv2 Role was created:

  ```
  az role definition list | grep "Rancher AKSv2"
  ```

## Syncing

The AKS provisioner can synchronize the state of an AKS cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see [Syncing.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md)

For information on configuring the refresh interval, see [this section.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-cluster-configuration.md#configuring-the-refresh-interval)


## Programmatically Creating AKS Clusters

The most common way to programmatically deploy AKS clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is [here](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster).
