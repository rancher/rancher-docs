---
title: 过期 Webhook 证书轮换
---

如果你的 Rancher 版本安装了 `rancher-webhook`，某些版本创建的证书将在一年后过期。如果证书未续订，你需要轮换你的 webhook 证书。

在 Rancher v2.6.3 及更高版本中，rancher-webhook deployments 将在到期日期后 30 天或更短的时间内自动更新其 TLS 证书。如果你使用的是 v2.6.2 或更低版本，你可以通过下面两种方法来解决这个问题。

## 1. 如果用户具有集群访问权限，运行以下命令：

```
kubectl delete secret -n cattle-system cattle-webhook-tls
kubectl delete mutatingwebhookconfigurations.admissionregistration.k8s.io --ignore-not-found=true rancher.cattle.io
kubectl delete pod -n cattle-system -l app=rancher-webhook
```

## 2. 如果用户没有集群访问权限，使用 `kubectl`：

1. 删除 local 集群 `cattle-system` 命名空间中的 `cattle-webhook-tls` 密文。

2. 删除 `rancher.cattle.io` mutating webhook。

3. 删除 local 集群 `cattle-system` 命名空间中的 `rancher-webhook` pod。

:::note

webhook 证书过期问题不止示例中列出的 `cattle-webhook-tls`。你需要相应地填写你过期的证书密文。

:::