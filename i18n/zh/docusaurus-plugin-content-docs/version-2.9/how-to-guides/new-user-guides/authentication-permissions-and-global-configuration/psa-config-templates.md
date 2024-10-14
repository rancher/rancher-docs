---
title: Pod 安全准入 (PSA) 配置模板
---

[Pod Security admission (PSA)](./pod-security-standards.md) 配置模板是 Rancher 自定义资源 (CRD)，在 Rancher v2.7.2 及更高版本中可用。这些模板提供了可应用于集群的预定义安全配置：

- `rancher-privileged`：最宽松的配置。它不限制任何 Pod 行为，允许已知的权限升级。该策略没有豁免。
- `rancher-restricted`：严格限制的配置，遵循当前加固 pod 的最佳实践。你必须对 Rancher 组件进行[命名空间级别豁免](./pod-security-standards.md#受-psa-限制的集群上的-rancher)。

## 分配 Pod 安全准入 (PSA) 配置模板

你可以在创建下游集群的同时分配 PSA 模板。你还可以通过配置现有集群来添加模板。

### 在集群创建期间分配模板
<Tabs>
<TabItem value="RKE2 和 K3s">

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，单击**创建**按钮。
1. 选择提供商。
1. 在**集群: 创建**页面上，转到**基本信息 > 安全**。
1. 在 **PSA 配置模板**下拉菜单中，选择要分配的模板。
1. 单击**创建**。

### 将模板分配给现有集群

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**表中找到要更新的集群，点击 **⋮**。
1. 选择**编辑配置**。
1. 在 **PSA 配置模板**下拉菜单中，选择要分配的模板。
1. 单击**保存**。

### 加固集群

如果选择 **rancher-restricted** 模板但不选择 **CIS 配置文件**，你将无法满足 CIS Benchmark。有关详细信息，请参阅 [RKE2 加固指南](../../../pages-for-subheaders/rke2-hardening-guide.md)。

</TabItem>
<TabItem value="RKE1">

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，单击**创建**按钮。
1. 选择提供商。
1. 在**添加集群**页面上的**集群选项**下，单击 **高级选项**。
1. 在 **PSA 配置模板**下拉菜单中，选择要分配的模板。
1. 单击**创建**。

### 将模板分配给现有集群

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**表中找到要更新的集群，点击 **⋮**。
1. 选择**编辑配置**。
1. 在**编辑集群**页面上，转到**集群选项 > 高级选项**。
1. 在 **PSA 配置模板**中，选择要分配的模板。
1. 单击**保存**。

</TabItem>
</Tabs>

## 添加或编辑 Pod 安全准入 (PSA) 配置模板

如果你拥有管理员权限，则可以通过创建其他 PSA 模板或编辑现有模板来自定义安全限制和权限。

:::caution
如果编辑使用中的现有 PSA 模板，更改将应用​​于已分配给该模板的所有集群。
:::

1. 在左上角，单击 **☰ > 集群管理**。
1. 点击**高级选项**打开下拉菜单。
1. 选择 **Pod 安全准入**。
1. 找到要修改的模板，点击 **⋮**。
1. 选择**编辑配置**来编辑模板。
1. 完成配置编辑后，单击**保存**。

### 允许非管理员用户管理 PSA 模板

如果你想允许其他用户管理模板，你可以将该用户绑定到一个角色，并为该角色授予 `management.cattle.io/podsecurityadmissionconfigurationtemplates` 上的所有操作 (`"*"`)。

:::caution
绑定到上述权限的用户都能够更改使用该 PSA 模板的_所有_托管集群的限制级别，包括用户没有权限的集群。
:::

## 豁免必须的 Rancher 命名空间

在默认执行限制性安全策略的 Kubernetes 集群上运行 Rancher 时，你需要[豁免以下命名空间](#豁免命名空间)，否则该策略可能会阻止 Rancher system pod 正常运行。

- `calico-apiserver`
- `calico-system`
- `cattle-alerting`
- `cattle-csp-adapter-system`
- `cattle-epinio-system`
- `cattle-externalip-system`
- `cattle-fleet-local-system`
- `cattle-fleet-system`
- `cattle-gatekeeper-system`
- `cattle-global-data`
- `cattle-global-nt`
- `cattle-impersonation-system`
- `cattle-istio`
- `cattle-istio-system`
- `cattle-logging`
- `cattle-logging-system`
- `cattle-monitoring-system`
- `cattle-neuvector-system`
- `cattle-prometheus`
- `cattle-sriov-system`
- `cattle-system`
- `cattle-ui-plugin-system`
- `cattle-windows-gmsa-system`
- `cert-manager`
- `cis-operator-system`
- `fleet-default`
- `ingress-nginx`
- `istio-system`
- `kube-node-lease`
- `kube-public`
- `kube-system`
- `longhorn-system`
- `rancher-alerting-drivers`
- `security-scan`
- `tigera-operator`

Rancher、Rancher 拥有的一些 Chart 以及 RKE2 和 K3s 发行版都使用这些命名空间。列出的命名空间的一个子集已经在内置的 Rancher `rancher-restricted` 策略中被豁免，用于下游集群。有关运行 Rancher 所需的所有豁免的完整模板，请参阅此[准入配置示例](../../../reference-guides/rancher-security/psa-restricted-exemptions.md)。

## 豁免命名空间

如果你将 `rancher-restricted` 模板分配给集群，默认情况下，限制会在命名空间级别应用于整个集群。要在此高度受限的策略下豁免特定的命名空间，执行以下操作：

1. 在左上角，单击 **☰ > 集群管理**。
1. 点击**高级选项**打开下拉菜单。
1. 选择 **Pod 安全准入**。
1. 找到要修改的模板，点击 **⋮**。
1. 选择**编辑配置**。
1. 选中**豁免**下的**命名空间**复选框以编辑**命名空间**字段。
1. 豁免命名空间后，单击**保存**。

:::note
你需要更新目标集群才能让新模板在集群中生效。要触发更新，在不更改值的情况下编辑和保存集群。
:::
