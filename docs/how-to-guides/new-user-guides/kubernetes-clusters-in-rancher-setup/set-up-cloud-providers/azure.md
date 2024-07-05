---
title: Setting up the Azure Cloud Provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure"/>
</head>

:::note Important:

In Kubernetes 1.30 and later, you must use an out-of-tree Azure cloud provider. In-tree cloud providers have been deprecated. The Azure cloud provider has been removed completely, and won't work after an upgrade to Kubernetes 1.30. The steps listed below are still required to set up an Azure cloud provider. You can [set up an out-of-tree cloud provider](#using-the-out-of-tree-azure-cloud-provider) after completing the prerequisites for Azure cloud provider.

You can also [migrate from an in-tree to an out-of-tree Azure cloud provider](../migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-azure.md) on Kubernetes 1.29 and earlier. All existing clusters must migrate prior to upgrading to v1.30 in order to stay functional.

Starting with Kubernetes 1.29, you must disable the `DisableCloudProviders` and `DisableKubeletCloudCredentialProvider` to use the in-tree Azure cloud provider. You can do this by setting `feature-gates=DisableCloudProviders=false` as an additional argument for the cluster's Kubelet, Controller Manager, and API Server in the advanced cluster configuration. Additionally, set `DisableKubeletCloudCredentialProvider=false` in the Kubelet's arguments to enable in-tree functionality for authenticating to Azure container registries for image pull credentials.

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
This section is valid only for creating clusters with in-tree cloud provider. 
::: 

1. Choose "Azure" from the Cloud Provider drop-down in the Cluster Configuration section.

2. * Supply the Cloud Provider Configuration. Note that Rancher will automatically create a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you will need to specify them before creating the cluster.
   * You can click on "Show Advanced" to see more of these automatically generated names and update them if
   necessary. Your Cloud Provider Configuration **must** match the fields in the Machine Pools section. If you have multiple pools, they must all use the same Resource Group, Availability Set, Subnet, Virtual Network, and Network Security Group.
   * An example is provided below. You will modify it as needed.

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

4. Click the **Create** button to submit the form and create the cluster.

## Cloud Provider Configuration

Rancher will automatically create a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you will need to specify them before creating the cluster. You can check RKE1 Node Templates for or RKE2 Machine Pools to see more of these automatically generated names and update them if necessary.

**Refer to the full list of configuration options in the [upstream docs](https://cloud-provider-azure.sigs.k8s.io/install/configs/).**

:::note 
1. `useInstanceMetadata` must be set to true for `providerID` to be configured correctly by the cloud provider.
2. `excludeMasterFromStandardLB` must be set to false if nodes labeled `node-role.kubernetes.io/master` are required to be added to the backends of Azure Load Balancer (ALB).
3. `loadBalancerSku` can be `basic` or `standard`. Basic SKU will be deprecated in September 2025. Refer to the [Azure upstream docs](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-basic-upgrade-guidance#basic-sku-vs-standard-sku) for more information.
:::

Azure cloud provider supports reading the cloud config from Kubernetes secrets. The secret is a serialized version of azure.json file. When the secret is changed, the cloud controller manager will re-constructing itself without restarting the pod. It is recommended for the helm chart to read the Cloud Provider Config from secret.

Note that the chart reads the Cloud Provider Config from a given secret name in the `kube-system` namespace. Since Azure cloud provider would read Kubernetes secrets, RBAC also needs to be configured. An example secret for the Cloud Provider Config is shown below, modify it as needed and create the secret.

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
      "resourceGroup": "docker-machine-ks",
      "location": "westus",
      "subnetName": "docker-machine-ks",  
      "securityGroupName": "rancher-managed-kqmtsjgJ",
      "securityGroupResourceGroup": "docker-machine-ks",
      "vnetName": "docker-machine-ks-vnet",
      "vnetResourceGroup": "docker-machine-ks",
      "primaryAvailabilitySetName": "docker-machine-ks",  
      "routeTableResourceGroup": "docker-machine-ks",
      "cloudProviderBackoff": false,
      "useManagedIdentityExtension": false,
      "useInstanceMetadata": true,
      "loadBalancerSku": "standard",
      "excludeMasterFromStandardLB": false,
    }
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  labels:
    kubernetes.io/cluster-service: "true"
  name: system:azure-cloud-provider-secret-getter
rules:
  - apiGroups: [""]
resources: ["secrets"]
resourceNames: ["azure-cloud-config"]
verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  labels:
    kubernetes.io/cluster-service: "true"
  name: system:azure-cloud-provider-secret-getter
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:azure-cloud-provider-secret-getter
  subjects:
    - kind: ServiceAccount
      name: azure-cloud-config
      namespace: kube-system
   ``` 

## Using the out-of-tree Azure cloud provider

<Tabs groupId="k8s-distro">
<TabItem value="RKE2">

1. Choose **External** from the Cloud Provider drop-down in the **Cluster Configuration** section. 

2. - Prepare the Cloud Provider Configuration to set for the Cloud Provider Config in the next step. Note that Rancher will automatically create a new Network Security Group, Resource Group, Availability Set, Subnet, and Virtual Network. If you already have some or all of these created, you will need to specify them before creating the cluster. 
   - You can click on "Show Advanced" to see more of these automatically generated names and update them if
   necessary. Your Cloud Provider Configuration **must** match the fields in the Machine Pools section. If you have multiple pools, they must all use the same Resource Group, Availability Set, Subnet, Virtual Network, and Network Security Group.

3. Under the **Cluster Configuration > Add-on Config** section, specify the `cloud-provider-azure` Helm chart in **Additional Manifest**. 

Note that the chart reads the Cloud Provider Config from secret in `kube-system` namespace. An example secret for the Cloud Provider Config is shown below, modify it as needed. Please refer to the full list of configuration options in the [upstream docs](https://cloud-provider-azure.sigs.k8s.io/install/configs/).

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
      "resourceGroup": "docker-machine-ks",
      "location": "westus",
      "subnetName": "docker-machine-ks",
      "securityGroupName": "rancher-managed-kqmtsjgJ",
      "securityGroupResourceGroup": "docker-machine-ks",
      "vnetName": "docker-machine-ks-vnet",
      "vnetResourceGroup": "docker-machine-ks",
      "primaryAvailabilitySetName": "docker-machine-ks",  
      "routeTableResourceGroup": "docker-machine-ks",
      "cloudProviderBackoff": false,
      "useManagedIdentityExtension": false,
      "useInstanceMetadata": true,
      "loadBalancerSku": "standard",
      "excludeMasterFromStandardLB": false,
    }
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  labels:
    kubernetes.io/cluster-service: "true"
  name: system:azure-cloud-provider-secret-getter
rules:
  - apiGroups: [""]
resources: ["secrets"]
resourceNames: ["azure-cloud-config"]
verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  labels:
    kubernetes.io/cluster-service: "true"
  name: system:azure-cloud-provider-secret-getter
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:azure-cloud-provider-secret-getter
  subjects:
    - kind: ServiceAccount
      name: azure-cloud-config
      namespace: kube-system
  ```

4. Click the **Create** button to submit the form and create the cluster.

</TabItem>

<TabItem value="RKE1">

1. Choose "External" from the Cloud Provider drop-down in the **Cluster Options** section. This sets `--cloud-provider=external` for Kubernetes components.

2. Install the `cloud-provider-azure` chart after the cluster finishes provisioning. Note that the cluster isn't successfully provisioned and nodes are still in an `uninitialized` state until you deploy the cloud controller manager. This can be done [manually using CLI](#helm-chart-installation-from-cli), or via [Helm charts in UI](#helm-chart-installation-from-ui). 

Refer to the official Azure upstream documentation for the [cloud provider](https://cloud-provider-azure.sigs.k8s.io/install/azure-ccm/).

</TabItem>
</Tabs>

### Helm Chart Installation from CLI

Official upstream docs for [Helm chart installation](https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager) can be found on Github.

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

7. Replace `cloudConfig: /etc/kubernetes/azure.json` to read from Cloud Config Secret and enable dynamic reloading.

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

9. Rancher-provisioned RKE2 nodes have selector `node-role.kubernetes.io/control-plane: 'true'`. Update the nodeSelector:
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

11. Install the chart and confirm that the cloud controller and cloud node manager deploy successfully:

```shell
kubectl rollout status deployment -n kube-system cloud-controller-manager
kubectl rollout status daemonset -n kube-system cloud-node-manager
```

12. The cloud provider is responsible for setting the ProviderID of the node. Check if all nodes are initialized with the ProviderID:

```shell
kubectl describe nodes | grep "ProviderID"
```
