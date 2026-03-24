---
title: "四层和七层负载均衡"
description: "Kubernetes 支持四层负载均衡和七层负载均衡。了解对不同 deployment 的支持"
---

Kubernetes 支持四层负载均衡和七层负载均衡。

## 四层负载均衡器

Layer-4 load balancer (or the external load balancer) forwards traffic to NodePorts. Layer-4 load balancer allows you to forward both HTTP and TCP traffic.

:::note

It is possible to deploy a cluster with a non-cloud load balancer, such as [MetalLB.](https://metallb.universe.tf/) However, that use case is more advanced than the Layer-4 load balancer supported by a cloud provider, and it is not configurable in Rancher.

:::

### 四层负载均衡支持

不同底层云提供商对四层负载均衡器的支持有所不同：

| 集群部署 | 四层负载均衡器支持 |
----------------------------------------------|--------------------------------
| Amazon EKS | 由 AWS 云提供商支持 |
| Google GKE | 由 GCE 云提供商支持 |
| Azure AKS | 由 Azure 云提供商支持 |
| 第三方 MetalLB | third-party Ingress\* |

\* 可以通过单个[全局管理的 config-map](https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/) 来公开服务。

## 七层负载均衡器

Layer-7 load balancer (or the ingress controller) supports host and path-based load balancing and SSL termination. Layer-7 load balancer only forwards HTTP and HTTPS traffic and therefore they listen on ports 80 and 443 only. Cloud providers such as Amazon and Google support layer-7 load balancer.

### 七层负载均衡支持

不同底层云提供商对七层负载均衡器的支持有所不同：

| 集群部署 | 七层负载均衡器支持 |
----------------------------------------------|--------------------------------
| Amazon EKS | 由 AWS 云提供商支持 |
| Google GKE | 由 GKE 云提供商支持 |
| Azure AKS | 不支持 |

### 七层负载均衡器中的主机名

一些托管在云上的七层负载均衡器（例如 AWS 上的 ALB Ingress Controller）会为 Ingress 规则公开 DNS 地址。你需要（使用 CNAME）将你的域名映射到七层负载均衡器生成的 DNS 地址。

Other layer-7 load balancers, such as the Google Load Balancer, directly expose one or more IP addresses. Google Load Balancer provides a single routable IP address. You can do either of the following:

1. 配置你自己的 DNS，从而（使用 A 记录）将你的域名映射到七层负载均衡器公开的 IP 地址。
2. 让 Rancher 为你的 Ingress 规则生成一个 xip.io 主机名。Rancher 将使用你公开的其中一个 IP（假设是 `a.b.c.d`）生成一个主机名（即 `<ingressname>.<namespace>.a.b.c.d.xip.io`）。

使用 xip.io 的好处是你可以在创建 Ingress 规则后立即获得一个有效的入口点 URL。此外，如果你设置自己的域名，则需要配置 DNS 服务器并等待 DNS 传播。

## 相关链接

- [创建外部负载均衡器](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/)
