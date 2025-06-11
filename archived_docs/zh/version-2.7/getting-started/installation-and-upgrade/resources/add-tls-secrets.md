---
title: 添加 TLS 密文
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets"/>
</head>

我们使用证书和密钥将 `cattle-system` 命名空间中的 `tls-rancher-ingress` 密文配置好后，Kubernetes 会为 Rancher 创建对象和服务。

将服务器证书和所需的所有中间证书合并到名为 `tls.crt`的文件中。将证书密钥复制到名为 `tls.key` 的文件中。

例如，[acme.sh](https://acme.sh) 在 `fullchain.cer` 文件中提供服务器证书和 CA 链。
请将 `fullchain.cer` 命名为 `tls.crt`，将证书密钥文件命名为 `tls.key`。

使用 `kubectl` 创建 `tls` 类型的密文。

```
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

:::note

如需替换证书，你可以运行 `kubectl -n cattle-system delete secret tls-rancher-ingress` 来删除 `tls-rancher-ingress` 密文，然后运行上方命令来添加新的密文。如果你使用的是私有 CA 签名证书，仅当新证书与当前证书是由同一个 CA 签发的，才可以替换。

:::

## 使用私有 CA 签名证书

如果你使用的是私有 CA，Rancher 需要私有 CA 的根证书或证书链的副本，Rancher Agent 使用它来校验与 Server 的连接。

创建一个名为 `cacerts.pem` 的文件，该文件仅包含私有 CA 的根 CA 证书或证书链，并使用 `kubectl` 在 `cattle-system` 命名空间中创建 `tls-ca` Secret。

```
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem
```

:::note

Rancher 启动时会检索配置的 `tls-ca` 密文。如果 Rancher 在运行中，更新的 CA 会在新的 Rancher Pod 启动后生效。

:::

## 更新私有 CA 证书

按照[步骤](update-rancher-certificate.md)更新 [Rancher 高可用 Kubernetes 安装](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)中的 Ingress，或从默认自签名证书切换到自定义证书。
