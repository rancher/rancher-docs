---
title: 启用 Monitoring
---

[管理员](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)或[集群所有者](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#集群角色)可以通过配置 Rancher 来部署 Prometheus，从而监控 Kubernetes 集群。

本文介绍如何使用新的 monitoring 应用在集群内启用监控和告警。

不论是否使用 SSL，你都可以启用 monitoring。

## 要求

- 确保在每个节点上允许端口 9796 上的流量，因为 Prometheus 将从这里抓取指标。
- 确保你的集群满足资源要求。集群应至少有 1950Mi 可用内存、2700m CPU 和 50Gi 存储。要查看资源限制和请求的明细，请查看[此处](../../../reference-guides/monitoring-v2-configuration/helm-chart-options.md#配置资源限制和请求)。
- 在使用 RancherOS 或 Flatcar Linux 节点的 RKE 集群上安装 monitoring 时，请将 etcd 节点证书目录更改为 `/opt/rke/etc/kubernetes/ssl`。
- 如果集群是使用 RKE CLI 配置的，而且地址设置为主机名而不是 IP 地址，请在安装的 Values 配置步骤中将 `rkeEtcd.clients.useLocalhost` 设置为 `true`。YAML 片段如下所示：

```yaml
rkeEtcd:
  clients:
    useLocalhost: true
```

:::note

如果要设置 Alertmanager、Grafana 或 Ingress，必须通过 Helm chart 部署上的设置来完成。在部署之外创建 Ingress 可能会产生问题。

:::

# 设置资源限制和请求

安装 `rancher-monitoring` 时可以配置资源请求和限制。要从 Rancher UI 配置 Prometheus 资源，请单击左上角的 **Apps & Marketplace > Monitoring**（Rancher v2.6.5 之前的版本）或 **Apps > Monitoring**（Rancher v2.6.5+）。

有关默认限制的更多信息，请参阅[此页面](../../../reference-guides/monitoring-v2-configuration/helm-chart-options.md#配置资源限制和请求)。

## 安装 Monitoring 应用

### 在不使用 SSL 的情况下启用 Monitoring

1. 点击 **☰ > 集群管理**。
1. 选择你创建的集群，并点击 **Explore**。
1. 点击**集群工具**（左下角）。
1. 单击 Monitoring 的**安装**。
1. 可选：在 Values 步骤中为 Alerting、Prometheus 和 Grafana 自定义请求、限制等。如需帮助，请参阅[配置参考](../../../reference-guides/monitoring-v2-configuration/helm-chart-options.md)。

**结果**：Monitoring 应用已部署到 `cattle-monitoring-system` 命名空间中。

### 在使用 SSL 的情况下启用 Monitoring

<Tabs>
<TabItem value="Rancher v2.6.5+">

1. 按照[此页面](../../new-user-guides/kubernetes-resources-setup/secrets.md)上的步骤创建密文，以便将 SSL 用于告警。
- 密文应该创建到 `cattle-monitoring-system` 命名空间中。如果它不存在，请先创建它。
- 将 `ca`、`cert` 和 `key` 文件添加到密文中。
1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要启用 Monitoring 以与 SSL 一起使用的集群，然后单击 **Explore**。
1. 单击 **Apps > Charts**。
1. 单击 **Monitoring**。
1. 根据你是否已安装 Monitoring，单击**安装**或**更新**。
1. 选中**在安装前自定义 Helm 选项**，然后单击**下一步**。
1. 单击 **Alerting**。
1. 在**补充密文**字段中，添加之前创建的密文。

</TabItem>
<TabItem value="Rancher 版本低于 v2.6.5">

1. 按照[此页面](../../new-user-guides/kubernetes-resources-setup/secrets.md)上的步骤创建密文，以便将 SSL 用于告警。
- 密文应该创建到 `cattle-monitoring-system` 命名空间中。如果它不存在，请先创建它。
- 将 `ca`、`cert` 和 `key` 文件添加到密文中。
1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要启用 Monitoring 以与 SSL 一起使用的集群，然后单击 **Explore**。
1. 单击**应用 & 应用市场 > Chart**。
1. 单击 **Monitoring**。
1. 根据你是否已安装 Monitoring，单击**安装**或**更新**。
1. 选中**在安装前自定义 Helm 选项**，然后单击**下一步**。
1. 单击 **Alerting**。
1. 在**补充密文**字段中，添加之前创建的密文。

</TabItem>
</Tabs>

**结果**：Monitoring 应用已部署到 `cattle-monitoring-system` 命名空间中。

[创建接收器](../../../reference-guides/monitoring-v2-configuration/receivers.md#在-rancher-ui-中创建接收器)时，启用 SSL 的接收器（例如电子邮件或 webhook）将具有 **SSL**，其中包含 **CA 文件路径**、**证书文件路径**和**密钥文件路径**字段。使用 `ca`、`cert` 和 `key` 的路径填写这些字段。路径的格式为 `/etc/alertmanager/secrets/name-of-file-in-secret`。

例如，如果你使用以下键值对创建了一个密文：

```yaml
ca.crt=`base64-content`
cert.pem=`base64-content`
key.pfx=`base64-content`
```

则**证书文件路径**需要设为 `/etc/alertmanager/secrets/cert.pem`。
