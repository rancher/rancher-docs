---
title: Ingress 配置
description: Ingress 配置
---

:::note

在 Kubernetes v1.21 及更高版本中，NGINX Ingress Controller 不再默认运行在 hostNetwork 中。它改为将 hostPorts 用于端口 80 和端口 443，因此你可以将准入 Webhook 配置为只能通过 ClusterIP 访问。这确保了只能从集群内部访问 webhook。

由于 controller 的这一更改，默认 RKE1 配置不再将 `hostNetwork` 设置为 `true`。但是，你必须将 `hostNetwork` 设置为 `true` 才能使基于 TCP 和 UDP 的 Service 正常工作。为此，请[编辑](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md#使用-yaml-编辑集群)集群的 YAML 并按照[官方 RKE1 文档](https://rke.docs.rancher.com/config-options/add-ons/ingress-controllers#configuring-network-options)中的步骤操作。


:::


- [指定要使用的主机名](#指定要使用的主机名)
- [证书](#证书)
- [标签和注释](#标签和注释)

## 指定要使用的主机名

如果使用此选项，Ingress 会将主机名请求路由到你指定的服务或工作负载。

1. 输入**请求主机**，你的 Ingress Controller 会为它处理请求转发。例如，`www.mysite.com`。
1. 指定类型为 `Prefix` 的路径并指定路径，例如 `/`。
1. 添加一个**目标服务**。
1. **可选**：如果你想在将请求发送到特定主机名路径时指定工作负载或服务，请为目标添加**路径**。例如，如果你希望将 `www.mysite.com/contact-us` 的请求发送到与 `www.mysite.com` 不同的服务，在**路径**字段中输入 `/contact-us`。通常情况下，你创建的第一条规则不包含路径。
1. 输入每个目标操作的**端口**号。

## 证书

:::note

你必须具有 SSL 证书，Ingress Controller 可使用该证书来加密/解密通信。有关详细信息，请参阅[添加 SSL 证书](../encrypt-http-communication.md)。

:::

1. 要创建 Ingress Controller，单击**证书**选项卡。
1. 单击**添加证书**。
1. 从下拉列表中选择一个**证书 - 密文名称**。
1. 使用加密通信进入主机。
1. 要添加使用证书的其他主机，请单击**添加主机**。

## 标签和注释

添加[标签](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)和/或[注释](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/)来为你的 Ingress Controller 提供元数据。

有关可用的注释列表，请参阅 [Nginx Ingress Controller 文档](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/)。
