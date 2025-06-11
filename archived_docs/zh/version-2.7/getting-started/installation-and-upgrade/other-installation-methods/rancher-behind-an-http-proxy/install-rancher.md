---
title: 3. 安装 Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"/>
</head>

在前文的操作后，你已经有了一个运行的 RKE 集群，现在可以在其中安装 Rancher 了。出于安全考虑，所有到 Rancher 的流量都必须使用 TLS 加密。在本教程中，你将使用 [cert-manager](https://cert-manager.io/)自动颁发自签名证书。在实际使用情况下，你可使用 Let's Encrypt 或自己的证书。

### 安装 Helm CLI

<DeprecationHelm2 />

在具有 kubeconfig 的主机上安装 [Helm](https://helm.sh/docs/intro/install/) CLI 以访问 Kubernetes 集群：

```
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod +x get_helm.sh
sudo ./get_helm.sh
```

### 安装 cert-manager

添加 cert-manager Helm 仓库：

```
helm repo add jetstack https://charts.jetstack.io
```

为 cert-manager 创建命名空间：

```
kubectl create namespace cert-manager
```

安装 cert-manager 的 CustomResourceDefinitions：

```
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/<VERSION>/cert-manager.crds.yaml
```

使用 Helm 安装 cert-manager。请注意，cert-manager 还需要你配置代理，以防它需要与 Let's Encrypt 或其他外部证书颁发商进行通信：

:::note

要查看自定义 cert-manager 安装的选项（包括集群使用 PodSecurityPolicies 的情况），请参阅 [cert-manager 文档](https://artifacthub.io/packages/helm/cert-manager/cert-manager#configuration)。

:::

```
helm upgrade --install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --set http_proxy=http://${proxy_host} \
  --set https_proxy=http://${proxy_host} \
  --set no_proxy=127.0.0.0/8\\,10.0.0.0/8\\,cattle-system.svc\\,172.16.0.0/12\\,192.168.0.0/16\\,.svc\\,.cluster.local
```

等待 cert-manager 完成启动：

```
kubectl rollout status deployment -n cert-manager cert-manager
kubectl rollout status deployment -n cert-manager cert-manager-webhook
```

### 安装 Rancher

接下来，你可以安装 Rancher 了。首先，添加 Helm 仓库：

```
helm repo add rancher-latest https://releases.rancher.com/server-charts/latest
```

创建命名空间：

```
kubectl create namespace cattle-system
```

然后使用 Helm 安装 Rancher：Rancher 也需要你配置代理，以便它可以与外部应用商店通信，或检索 Kubernetes 版本更新元数据：

```
helm upgrade --install rancher rancher-latest/rancher \
   --namespace cattle-system \
   --set hostname=rancher.example.com \
   --set proxy=http://${proxy_host} \
   --set noProxy=127.0.0.0/8\\,10.0.0.0/8\\,cattle-system.svc\\,172.16.0.0/12\\,192.168.0.0/16\\,.svc\\,.cluster.local
```

等待部署完成：

```
kubectl rollout status deployment -n cattle-system rancher
```

现在，你可以导航到 `https://rancher.example.com` 并开始使用 Rancher。

:::caution

如果你不想发送遥测数据，在首次登录时退出[遥测](../../../../faq/telemetry.md)。如果在离线安装的环境中让这个功能处于 active 状态，socket 可能无法打开。

:::

### 其他资源

以下资源可能对安装 Rancher 有帮助：

- [Rancher Helm Chart 选项](../../installation-references/helm-chart-options.md)
- [添加 TLS 密文](../../resources/add-tls-secrets.md)
- [Rancher Kubernetes 安装的故障排除](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)
