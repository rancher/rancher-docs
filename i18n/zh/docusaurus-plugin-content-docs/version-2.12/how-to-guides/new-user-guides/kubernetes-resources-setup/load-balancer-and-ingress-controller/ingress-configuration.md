---
title: Ingress 配置
description: Ingress 配置
---

## 指定要使用的主机名

如果使用此选项，Ingress 会将主机名请求路由到你指定的服务或工作负载。

1. 指定类型为 `Prefix` 的路径并指定路径，例如 `/`。
1. 添加一个**目标服务**。
1. **可选**：如果你想在将请求发送到特定主机名路径时指定工作负载或服务，请为目标添加**路径**。例如，如果你希望将 `www.mysite.com/contact-us` 的请求发送到与 `www.mysite.com` 不同的服务，在**路径**字段中输入 `/contact-us`。通常情况下，你创建的第一条规则不包含路径。
1. 输入每个目标操作的**端口**号。

## 证书

:::note

你必须具有 SSL 证书，Ingress 可使用该证书来加密和解密通信。有关详细信息，请参阅[添加 SSL 证书](../encrypt-http-communication.md)。

:::

1. 要创建 Ingress Controller，单击**证书**选项卡。
1. 单击**添加证书**。
1. 从下拉列表中选择一个**证书 - 密文名称**。
1. 使用加密通信进入主机。
1. 要添加使用证书的其他主机，请单击**添加主机**。

## 标签和注释

Please refer to the Traefik documentation for the full list of Ingress NGINX annotations that are [supported](https://doc.traefik.io/traefik/reference/routing-configuration/kubernetes/ingress-nginx/#annotations-support) and [unsupported](https://doc.traefik.io/traefik/reference/routing-configuration/kubernetes/ingress-nginx/#unsupported-annotations) by Traefik's kubernetesIngressNginx provider.
