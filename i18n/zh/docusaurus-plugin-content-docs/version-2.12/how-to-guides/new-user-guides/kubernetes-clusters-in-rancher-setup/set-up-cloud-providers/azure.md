---
title: 设置 Azure 云提供商
---

使用 `Azure` 云提供商时，你可以使用以下功能：

- **负载均衡器**：在特定网络安全组中启动 Azure 负载均衡器。

- **持久卷**：支持将 Azure Blob 磁盘和 Azure 托管磁盘与标准和高级 Storage Account 一起使用。

- **网络存储**：通过 CIFS 挂载支持 Azure 文件。

Azure 订阅不支持以下账号类型：

- 单租户账号（即没有订阅的账号）。
- 多订阅账号。

## RKE 和 RKE2 的先决条件

要为 RKE 和 RKE2 设置 Azure 云提供商，你需要配置以下凭证：

1. [设置 Azure 租户 ID](#1-设置-azure-租户-id)
2. [设置 Azure 客户端 ID 和 Azure 客户端密码](#2-设置-azure-客户端-id-和-azure-客户端密码)
3. [配置应用注册权限](#3-配置应用注册权限)
4. [设置 Azure 网络安全组名称](#4-设置-azure-网络安全组名称)

### 1. 设置 Azure 租户 ID

访问 [Azure 门户](https://portal.azure.com)，登录并转到 **Azure Active Directory**，然后选择 **Properties**。你的 **Directory ID** 是你的 **Tenant ID** (tenantID)。

如果要使用 Azure CLI，你可以运行 `az account show` 命令来获取信息。

### 2. 设置 Azure 客户端 ID 和 Azure 客户端密码

访问 [Azure 门户](https://portal.azure.com)，登录并按照以下步骤创建 **App Registration** 和对应的 **Azure Client ID** (aadClientId) 以及 **Azure Client Secret** (aadClientSecret)。

1. 选择 **Azure Active Directory**。
1. 选择 **App registrations**。
1. 选择 **New application registration**。
1. 选择 **Name**，选择 `Web app/API` 作为 **Application Type**，并选择任意 **Sign-on URL**。
1. 选择 **Create**。

在 **App registrations** 视图中，你应该会看到你创建的应用注册。**APPLICATION ID** 列中显示的值是需要用作 **Azure Client ID** 的值。

下一步是生成 **Azure Client Secret**：

1. 打开你创建的应用注册。
1. 在 **Settings** 视图中，打开 **Keys**。
1. 输入 **Key description**，选择过期时间，然后选择 **Save**。
1. **Value** 列中显示的生成值是需要用作 **Azure Client Secret** 的值。该值只会显示一次。

### 3. 配置应用注册权限

最后，为你的应用注册分配适当的权限：

1. 前往 **More services**，搜索 **Subscriptions** 并打开它。
1. 打开 **Access control (IAM)**。
1. 选择 **Add**。
1. 在 **Role** 中选择 `Contributor`。
1. 在 **Select** 中选择你创建的应用注册的名称。
1. 选择 **Save**。

### 4. 设置 Azure 网络安全组名称

要使 Azure 负载均衡器正常工作，你需要自定义一个 Azure 网络安全组 (securityGroupName)。

如果你使用 Rancher Machine Azure 驱动来配置主机，则需要手动编辑主机，从而将主机分配给此网络安全组。

你需要在配置期间将自定义主机分配给此网络安全组。

只有需要成为负载均衡器后端的主机才需要分配到该组。

## Rancher 中的 RKE2 集群设置

1. 在**集群配置**中的**云提供商**下拉列表中选择 **Azure**。

1.
   * 配置云提供商。请注意，Rancher 会自动创建新的网络安全组、资源组、可用性集、子网和虚拟网络。如果你已经创建了其中的一部分或全部，则需要在创建集群之前指定它们。
   * 你可以单击**显示高级选项**以查看更多自动生成的名称，并在需要的时候更新它们。你的云提供商配置**必须**与**主机池**中的字段匹配。如果你有多个池，它们必须使用相同的资源组、可用性集、子网、虚拟网络和网络安全组。
   * 下面提供了一个示例。你可以根据需要对其进行修改。

<details id="v2.6.0-cloud-provider-config-file">
     <summary>云提供商配置示例</summary>

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

1. 在**集群配置 > 高级选项**、中，单击**补充的 Controller Manager 参数**下的**添加**，并添加 `--configure-cloud-routes=false` 标志。

1. 单击**创建**按钮来提交表单并创建集群。

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
      "aadClientSecret": "<client-secret>",
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
        "aadClientSecret": "<client-secret>",
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
