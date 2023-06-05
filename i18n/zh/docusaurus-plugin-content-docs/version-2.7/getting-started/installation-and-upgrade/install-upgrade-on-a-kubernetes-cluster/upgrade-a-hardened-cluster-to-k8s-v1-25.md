---
title: 将加固的自定义/导入集群升级到 Kubernetes v1.25
---

Kubernetes v1.25 改变了集群描述和执行安全策略的方式。从这个版本开始，[Pod 安全策略 (PSP)](https://kubernetes.io/docs/concepts/security/pod-security-policy/)不再可用。Kubernetes v1.25 将它们替换为新的安全对象：[Pod 安全标准 (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) 和 [Pod 安全准入 (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/)。

如果你具有自定义或导入的加固集群，你需要做好准备，确保将旧版本的 Kubernetes 顺利升级到 v1.25 或更高版本。

:::note

升级到 v1.25 后，添加必要的 Rancher 命名空间豁免。有关详细信息，请参阅 [Pod 安全准入 (PSA) 配置模板](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md#豁免必须的-rancher-命名空间)。

:::

## 将导入的加固集群升级到 Kubernetes v1.25 或更高版本

<Tabs groupId="k8s-distro">
<TabItem value="RKE2" default>

在集群中的每个节点上执行以下操作：
1. 将 [`rancher-psact.yaml`](./rancher-psact.yaml) 保存到 `/etc/rancher/rke2` 中。
1. 编辑 RKE2 配置文件：
   1. 将 `profile` 字段更新为 `cis-1.23`。
   1. 指定刚才添加的配置文件的路径：`pod-security-admission-config-file: /etc/rancher/rke2/rancher-psact.yaml`。

</TabItem>
<TabItem value="K3s">

在集群中的每个节点上执行以下操作：

遵循 K3s [将加固集群从 v1.24.x 升级到 v1.25.x](https://docs.k3s.io/known-issues#hardened-125)的官方说明，但使用[自定义](./rancher-psact.yaml)Rancher PSA 配置模板，而不是 K3s 官方网站上提供的配置。
</TabItem>
</Tabs>

执行这些步骤后，你可以通过 Rancher UI 升级集群的 Kubernetes 版本：

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**表中找到要更新的集群，点击 **⋮**。
1. 选择**编辑配置**。
1. 在 **Kubernetes 版本**下拉菜单中，选择要使用的版本。
1. 单击**保存**。

## 将自定义加固集群升级到 Kubernetes v1.25 或更高版本

<Tabs groupId="k8s-distro">
<TabItem value="RKE2" default>

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**表中找到要更新的集群，点击 **⋮**。
1. 选择**编辑配置**。
1. 在**基本信息 > 安全**下的 **CIS 配置文件**下拉菜单中，选择 `cis-1.23`。
1. 在 **PSA 配置模板**下拉菜单中，选择 `rancher-restricted`。
1. 在 **Kubernetes 版本**下拉菜单中，选择要使用的版本。
1. 单击**保存**。

</TabItem>
<TabItem value="K3s">

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**表中找到要更新的集群，点击 **⋮**。
1. 选择**编辑 YAML**。
1. 从 `kube-apiserver-arg.enable-admission-plugins` 中删除 `PodSecurityPolicy`。
1. 在 `spec` 字段中，添加一行：`defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted`
1. 将 `kubernetesVersion` 更新为你选择的版本（v1.25 或更高版本）。
1. 单击**保存**。

</TabItem>
</Tabs>
