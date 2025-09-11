---
title: Setting up the Azure Cloud Provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure"/>
</head>

:::note Important:

In Kubernetes 1.30 and later, you must use an out-of-tree Azure cloud provider. The Azure cloud provider has been [removed completely](https://github.com/kubernetes/kubernetes/pull/122857), and won't work after an upgrade to Kubernetes 1.30. The steps listed below are still required to set up an Azure cloud provider. You can [set up an out-of-tree cloud provider](#using-the-out-of-tree-azure-cloud-provider) after completing the prerequisites for Azure.

You can also [migrate from an in-tree to an out-of-tree Azure cloud provider](../migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-azure.md) on Kubernetes 1.29 and earlier. All existing clusters must migrate prior to upgrading to v1.30 in order to stay functional.

Starting with Kubernetes 1.29, in-tree cloud providers have been disabled. You must disable `DisableCloudProviders` and `DisableKubeletCloudCredentialProvider` to use the in-tree Azure cloud provider. You can do this by setting `feature-gates=DisableCloudProviders=false` as an additional argument for the cluster's Kubelet, Controller Manager, and API Server in the advanced cluster configuration. Additionally, set `DisableKubeletCloudCredentialProvider=false` in the Kubelet's arguments to enable in-tree functionality for authenticating to Azure container registries for image pull credentials. See [upstream docs](https://github.com/kubernetes/kubernetes/pull/117503) for more details.

Starting with Kubernetes version 1.26, in-tree persistent volume types `kubernetes.io/azure-disk` and `kubernetes.io/azure-file` are deprecated and will no longer be supported. For new clusters, [install the CSI drivers](#installing-csi-drivers), or migrate to the corresponding CSI drivers `disk.csi.azure.com` and `file.csi.azure.com` by following the [upstream migration documentation](https://learn.microsoft.com/en-us/azure/aks/csi-migrate-in-tree-volumes).
:::

When using the `Azure` cloud provider, you can leverage the following capabilities:

- **Load Balancers:** Launches an Azure Load Balancer within a specific Network Security Group.

- **Persistent Volumes:** Supports using Azure Blob disks and Azure Managed Disks with standard and premium storage accounts.

- **Network Storage:** Support Azure Files via CIFS mounts.

The following account types are not supported for Azure Subscriptions:

- Single tenant accounts (i.e. accounts with no subscriptions).
- Multi-subscription accounts.

## Prerequisites for RKE and RKE2

To set up the Azure cloud provider for both RKE and RKE2, the following credentials need to be configured:

1. [Set up the Azure Tenant ID](#1-set-up-the-azure-tenant-id)
2. [Set up the Azure Client ID and Azure Client Secret](#2-set-up-the-azure-client-id-and-azure-client-secret)
3. [Configure App Registration Permissions](#3-configure-app-registration-permissions)
4. [Set up Azure Network Security Group Name](#4-set-up-azure-network-security-group-name)

### 1. Set up the Azure Tenant ID

Visit [Azure portal](https://portal.azure.com), login and go to **Azure Active Directory** and select **Properties**. Your **Directory ID** is your **Tenant ID** (tenantID).

If you want to use the Azure CLI, you can run the command `az account show` to get the information.

### 2. Set up the Azure Client ID and Azure Client Secret

Visit [Azure portal](https://portal.azure.com), login and follow the steps below to create an **App Registration** and the corresponding **Azure Client ID** (aadClientId) and **Azure Client Secret** (aadClientSecret).

1. Select **Azure Active Directory**.
1. Select **App registrations**.
1. Select **New application registration**.
1. Choose a **Name**, select `Web app / API` as **Application Type** and a **Sign-on URL** which can be anything in this case.
1. Select **Create**.

In the **App registrations** view, you should see your created App registration. The value shown in the column **APPLICATION ID** is what you need to use as **Azure Client ID**.

The next step is to generate the **Azure Client Secret**:

1. Open your created App registration.
1. In the **Settings** view, open **Keys**.
1. Enter a **Key description**, select an expiration time and select **Save**.
1. The generated value shown in the column **Value** is what you need to use as **Azure Client Secret**. This value will only be shown once.

### 3. Configure App Registration Permissions

The last thing you will need to do, is assign the appropriate permissions to your App registration.

1. Go to **More services**, search for **Subscriptions** and open it.
1. Open **Access control (IAM)**.
1. Select **Add**.
1. For **Role**, select `Contributor`.
1. For **Select**, select your created App registration name.
1. Select **Save**.

### 4. Set up Azure Network Security Group Name

A custom Azure Network Security Group (securityGroupName) is needed to allow Azure Load Balancers to work.

If you provision hosts using Rancher Machine Azure driver, you will need to edit them manually to assign them to this Network Security Group.

You should already assign custom hosts to this Network Security Group during provisioning.

Only hosts expected to be load balancer back ends need to be in this group.

## RKE2 Cluster Set-up in Rancher

:::note Important: 
This section is valid only for creating clusters with the in-tree cloud provider. 
::: 

1. Choose "Azure" from the Cloud Provider drop-down in the Cluster Configuration section.

2. Supply the Cloud Provider Configuration. Note that Rancher automatically creates a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you must specify them before creating the cluster.
   * Click **Show Advanced** to view or edit these automatically generated names. Your Cloud Provider Configuration **must** match the fields in the **Machine Pools** section. If you have multiple pools, they must all use the same Resource Group, Availability Set, Subnet, Virtual Network, and Network Security Group.
   * An example is provided below. Modify it as needed.

   <details id="v2.6.0-cloud-provider-config-file">
     <summary>Example Cloud Provider Config</summary>

    ```yaml
    {
        "cloud":"AzurePublicCloud",
        "tenantId": "YOUR TENANTID HERE",
        "aadClientId": "YOUR AADCLIENTID HERE",
        "aadClientSecret": "YOUR AADCLIENTSECRET HERE",
        "subscriptionId": "YOUR SUBSCRIPTIONID HERE",
        "resourceGroup": "docker-machine",
        "location": "westus",
        "subnetName": "docker-machine",
        "securityGroupName": "rancher-managed-KA4jV9V2",
        "securityGroupResourceGroup": "docker-machine",
        "vnetName": "docker-machine-vnet",
        "vnetResourceGroup": "docker-machine",
        "primaryAvailabilitySetName": "docker-machine",
        "routeTableResourceGroup": "docker-machine",
        "cloudProviderBackoff": false,
        "useManagedIdentityExtension": false,
        "useInstanceMetadata": true
    }
    ```

    </details>

3. Under the **Cluster Configuration > Advanced** section, click **Add** under **Additional Controller Manager Args** and add this flag: `--configure-cloud-routes=false`

4. Click **Create** to submit the form and create the cluster.

## Cloud Provider Configuration

Rancher automatically creates a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you will need to specify them before creating the cluster. You can check **RKE1 Node Templates** or **RKE2 Machine Pools** to view or edit these automatically generated names.

**Refer to the full list of configuration options in the [upstream docs](https://cloud-provider-azure.sigs.k8s.io/install/configs/).**

:::note 
1. `useInstanceMetadata` must be set to `true` for the cloud provider to correctly configure `providerID`.
2. `excludeMasterFromStandardLB` must be set to `false` if you need to add nodes labeled `node-role.kubernetes.io/master` to the backend of the Azure Load Balancer (ALB).
3. `loadBalancerSku` can be set to `basic` or `standard`. Basic SKU will be deprecated in September 2025. Refer to the [Azure upstream docs](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-basic-upgrade-guidance#basic-sku-vs-standard-sku) for more information.
:::

Azure supports reading the cloud config from Kubernetes secrets. The secret is a serialized version of the azure.json file. When the secret is changed, the cloud controller manager reconstructs itself without restarting the pod. It is recommended for the Helm chart to read the Cloud Provider Config from the secret.

Note that the chart reads the Cloud Provider Config from a given secret name in the `kube-system` namespace. Since Azure reads Kubernetes secrets, RBAC also needs to be configured. An example secret for the Cloud Provider Config is shown below. Modify it as needed and create the secret.

  ```yaml
# azure-cloud-config.yaml
apiVersion: v1
kind: Secret
metadata:
  name: azure-cloud-config
  namespace: kube-system
type: Opaque
stringData:
  cloud-config: |-
    {
      "cloud": "AzurePublicCloud",
      "tenantId": "<tenant-id>",
      "subscriptionId": "<subscription-id>",
      "aadClientId": "<client-id>",
      "aadClientSecret": "<tenant-id>",
      "resourceGroup": "docker-machine",
      "location": "westus",
      "subnetName": "docker-machine",  
      "securityGroupName": "rancher-managed-kqmtsjgJ",
      "securityGroupResourceGroup": "docker-machine",
      "vnetName": "docker-machine-vnet",
      "vnetResourceGroup": "docker-machine",
      "primaryAvailabilitySetName": "docker-machine",  
      "routeTableResourceGroup": "docker-machine",
      "cloudProviderBackoff": false,
      "useManagedIdentityExtension": false,
      "useInstanceMetadata": true,
      "loadBalancerSku": "standard",
      "excludeMasterFromStandardLB": false,
    }

   ``` 

## Using the Out-of-tree Azure Cloud Provider

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

1. Select **External** from the **Cloud Provider** drop-down in the **Cluster Configuration** section.

2. Under **Cluster Configuration > Advanced**, click **Add** under **Additional Controller Manager Args** and add this flag: `--configure-cloud-routes=false`.

3. Prepare the Cloud Provider Configuration to set it in the next step. Note that Rancher automatically creates a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you must specify them before creating the cluster.

    Click **Show Advanced** to view or edit these automatically generated names. Your Cloud Provider Configuration **must** match the fields in the **Machine Pools** section. If you have multiple pools, they must all use the same Resource Group, Availability Set, Subnet, Virtual Network, and Network Security Group.

4. Under **Cluster Configuration > Add-on Config**, add the cloud controller manager manifest shown below into **Additional Manifest**.
Note that this chart reads the Cloud Provider Config from the secret in the `kube-system` namespace. An example secret for the Cloud Provider Config is shown below; modify it as needed. Refer to the full list of configuration options in the [upstream docs](https://cloud-provider-azure.sigs.k8s.io/install/configs/).

  Alternatively, you can also install the cloud controller manager using the [Helm CLI](#helm-chart-installation-from-cli).

  ```yaml
  apiVersion: helm.cattle.io/v1
  kind: HelmChart
  metadata:
    name: azure-cloud-controller-manager
    namespace: kube-system
  spec:
    chart: cloud-provider-azure
    repo: https://raw.githubusercontent.com/kubernetes-sigs/cloud-provider-azure/master/helm/repo
    targetNamespace: kube-system
    bootstrap: true
    valuesContent: |-
      infra:
        clusterName: <cluster-name>
      cloudControllerManager:
        cloudConfigSecretName: azure-cloud-config
        cloudConfig: null
        clusterCIDR: null
        enableDynamicReloading: 'true'
        nodeSelector: 
          node-role.kubernetes.io/control-plane: 'true'
        allocateNodeCidrs: 'false' 
        hostNetworking: true
        caCertDir: /etc/ssl
        configureCloudRoutes: 'false'
        enabled: true
        tolerations:
          - effect: NoSchedule
            key: node-role.kubernetes.io/master
          - effect: NoSchedule
            key: node-role.kubernetes.io/control-plane
            value: 'true'
          - effect: NoSchedule
            key: node.cloudprovider.kubernetes.io/uninitialized
            value: 'true'
  ---
  apiVersion: v1
  kind: Secret
  metadata:
    name: azure-cloud-config
    namespace: kube-system
  type: Opaque
  stringData:
    cloud-config: |-
      {
        "cloud": "AzurePublicCloud",
        "tenantId": "<tenant-id>",
        "subscriptionId": "<subscription-id>",
        "aadClientId": "<client-id>",
        "aadClientSecret": "<tenant-id>",
        "resourceGroup": "docker-machine",
        "location": "westus",
        "subnetName": "docker-machine",
        "securityGroupName": "rancher-managed-kqmtsjgJ",
        "securityGroupResourceGroup": "docker-machine",
        "vnetName": "docker-machine-vnet",
        "vnetResourceGroup": "docker-machine",
        "primaryAvailabilitySetName": "docker-machine",  
        "routeTableResourceGroup": "docker-machine",
        "cloudProviderBackoff": false,
        "useManagedIdentityExtension": false,
        "useInstanceMetadata": true,
        "loadBalancerSku": "standard",
        "excludeMasterFromStandardLB": false,
      }
  ```

5. Click **Create** to submit the form and create the cluster.

</TabItem>

<TabItem value="RKE1">

1. Choose **External** from the **Cloud Provider** drop-down in the **Cluster Options** section. This sets `--cloud-provider=external` for Kubernetes components.

2. Install the `cloud-provider-azure` chart after the cluster finishes provisioning. Note that the cluster is not successfully provisioned and nodes are still in an `uninitialized` state until you deploy the cloud controller manager. This can be done [manually using CLI](#helm-chart-installation-from-cli), or via [Helm charts in UI](#helm-chart-installation-from-ui).

Refer to the [official Azure upstream documentation](https://cloud-provider-azure.sigs.k8s.io/install/azure-ccm/) for more details on deploying the Cloud Controller Manager.

</TabItem>
</Tabs>

### Helm Chart Installation from CLI

Official upstream docs for [Helm chart installation](https://github.com/kubernetes-sigs/cloud-provider-azure/tree/master/helm/cloud-provider-azure) can be found on Github.

1. Create a `azure-cloud-config` secret with the required [cloud provider config](#cloud-provider-configuration). 

```shell 
kubectl apply -f azure-cloud-config.yaml
```

2. Add the Helm repository:

```shell
helm repo add azure-cloud-controller-manager https://raw.githubusercontent.com/kubernetes-sigs/cloud-provider-azure/master/helm/repo
helm repo update
```

3. Create a `values.yaml` file with the following contents to override the default `values.yaml`:

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

```yaml
# values.yaml
infra:
  clusterName: <cluster-name>
cloudControllerManager:
  cloudConfigSecretName: azure-cloud-config
  cloudConfig: null
  clusterCIDR: null
  enableDynamicReloading: 'true'
  configureCloudRoutes: 'false'
  allocateNodeCidrs: 'false'
  caCertDir: /etc/ssl
  enabled: true
  replicas: 1
  hostNetworking: true
  nodeSelector:
    node-role.kubernetes.io/control-plane: 'true'
  tolerations:
    - effect: NoSchedule
      key: node-role.kubernetes.io/master
    - effect: NoSchedule
      key: node-role.kubernetes.io/control-plane
      value: 'true'
    - effect: NoSchedule
      key: node.cloudprovider.kubernetes.io/uninitialized
      value: 'true'
```

</TabItem>

<TabItem value="RKE">

```yaml
# values.yaml
cloudControllerManager:
  cloudConfigSecretName: azure-cloud-config
  cloudConfig: null
  clusterCIDR: null  
  enableDynamicReloading: 'true'
  configureCloudRoutes: 'false'
  allocateNodeCidrs: 'false'
  caCertDir: /etc/ssl
  enabled: true
  replicas: 1
  hostNetworking: true
  nodeSelector:
    node-role.kubernetes.io/controlplane: 'true'
    node-role.kubernetes.io/control-plane: null
  tolerations:
    - effect: NoSchedule
      key: node-role.kubernetes.io/controlplane
      value: 'true'
    - effect: NoSchedule
      key: node.cloudprovider.kubernetes.io/uninitialized
      value: 'true'
infra:
  clusterName: <cluster-name>
```

</TabItem>
</Tabs>

4. Install the Helm chart:

```shell
helm upgrade --install cloud-provider-azure azure-cloud-controller-manager/cloud-provider-azure -n kube-system --values values.yaml
```

Verify that the Helm chart installed successfully:

```shell
helm status cloud-provider-azure -n kube-system
```

5. (Optional) Verify that the cloud controller manager update succeeded:

```shell
kubectl rollout status deployment -n kube-system cloud-controller-manager
kubectl rollout status daemonset -n kube-system cloud-node-manager
```

6. The cloud provider is responsible for setting the ProviderID of the node. Check if all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```

### Helm Chart Installation from UI

1. Click **☰**, then select the name of the cluster from the left navigation.

2. Select **Apps** > **Repositories**.

3. Click the **Create** button.

4. Enter `https://raw.githubusercontent.com/kubernetes-sigs/cloud-provider-azure/master/helm/repo` in the **Index URL** field.

5. Select **Apps** > **Charts** from the left navigation and install **cloud-provider-azure** chart.

6. Select the namespace, `kube-system`, and enable **Customize Helm options before install**.

7. Replace `cloudConfig: /etc/kubernetes/azure.json` to read from the Cloud Config Secret and enable dynamic reloading:

```yaml
  cloudConfigSecretName: azure-cloud-config
  enableDynamicReloading: 'true'
```

8. Update the following fields as required:

```yaml 
  allocateNodeCidrs: 'false'
  configureCloudRoutes: 'false'
  clusterCIDR: null
```

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

9. Rancher-provisioned RKE2 nodes have the selector `node-role.kubernetes.io/control-plane` set to `true`. Update the nodeSelector:
```yaml
nodeSelector:
  node-role.kubernetes.io/control-plane: 'true'
```
</TabItem>

<TabItem value="RKE">

10. Rancher-provisioned RKE nodes are tainted `node-role.kubernetes.io/controlplane`. Update tolerations and the nodeSelector:

```yaml
tolerations:
  - effect: NoSchedule
    key: node.cloudprovider.kubernetes.io/uninitialized
    value: 'true'
  - effect: NoSchedule
    value: 'true'
    key: node-role.kubernetes.io/controlplane
```

```yaml
nodeSelector:
  node-role.kubernetes.io/controlplane: 'true'
```
</TabItem>
</Tabs>

11. Install the chart and confirm that the cloud controller and cloud node manager deployed successfully:

```shell
kubectl rollout status deployment -n kube-system cloud-controller-manager
kubectl rollout status daemonset -n kube-system cloud-node-manager
```

12. The cloud provider is responsible for setting the ProviderID of the node. Check if all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```

### Installing CSI Drivers

Install [Azure Disk CSI driver](https://github.com/kubernetes-sigs/azuredisk-csi-driver) or [Azure File CSI Driver](https://github.com/kubernetes-sigs/azurefile-csi-driver) to access [Azure Disk](https://azure.microsoft.com/en-us/services/storage/disks/) or [Azure File](https://azure.microsoft.com/en-us/services/storage/disks/) volumes respectively.

The steps to install the Azure Disk CSI driver are shown below. You can install the Azure File CSI Driver in a similar manner by following the [helm installation documentation](https://github.com/kubernetes-sigs/azurefile-csi-driver/blob/master/charts/README.md).

::: note Important: 

Clusters must be provisioned using `Managed Disk` to use Azure Disk. You can configure this when creating **RKE1 Node Templates** or **RKE2 Machine Pools*. 

::: 

Official upstream docs for [Helm chart installation](https://github.com/kubernetes-sigs/azuredisk-csi-driver/blob/master/charts/README.md) can be found on Github.

1. Add and update the helm repository:

```shell 
helm repo add azuredisk-csi-driver https://raw.githubusercontent.com/kubernetes-sigs/azuredisk-csi-driver/master/charts
helm repo update azuredisk-csi-driver
``` 

1. Install the chart as shown below, updating the --version argument as needed. Refer to the full list of latest chart configurations in the [upstream docs](https://github.com/kubernetes-sigs/azuredisk-csi-driver/blob/master/charts/README.md#latest-chart-configuration).

```shell
helm install azuredisk-csi-driver azuredisk-csi-driver/azuredisk-csi-driver --namespace kube-system --version v1.30.1 --set controller.cloudConfigSecretName=azure-cloud-config --set controller.cloudConfigSecretNamespace=kube-system --set controller.runOnControlPlane=true
``` 

2. (Optional) Verify that the azuredisk-csi-driver installation succeeded: 

```shell 
kubectl --namespace=kube-system get pods --selector="app.kubernetes.io/name=azuredisk-csi-driver" --watch 
``` 

3. Provision an example Storage Class: 

```shell
cat <<EOF | kubectl create -f -
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard
provisioner: kubernetes.io/azure-disk
parameters:
  storageaccounttype: Standard_LRS
  kind: Managed
EOF
```

Verify that the storage class has been provisioned: 
```shell 
kubectl get storageclasses
```

4. Create a PersistentVolumeClaim:
```shell 
cat <<EOF | kubectl create -f -
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: azure-disk-pvc
spec:
  storageClassName: standard
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
EOF
```

Verify that the PersistentVolumeClaim and PersistentVolume have been created: 
```shell
kubectl get persistentvolumeclaim 
kubectl get persistentvolume
```

5. Attach the new Azure Disk: 

You can now mount the Kubernetes PersistentVolume into a Kubernetes Pod. The disk can be consumed by any Kubernetes object type, including a Deployment, DaemonSet, or StatefulSet. However, the following example simply mounts the PersistentVolume into a standalone Pod. 

```shell
cat <<EOF | kubectl create -f -
kind: Pod
apiVersion: v1
metadata:
  name: mypod-dynamic-azuredisk
spec:
  containers:
    - name: mypod
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: storage
  volumes:
    - name: storage
      persistentVolumeClaim:
        claimName: azure-disk-pvc
EOF
```
