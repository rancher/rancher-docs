---
title: 4. 安装 Rancher
---

本文介绍如何在高可用 Kubernetes 安装的离线环境部署 Rancher。离线环境可以是 Rancher Server 离线安装、防火墙后面或代理后面。

### Rancher 特权访问

当 Rancher Server 部署在 Docker 容器中时，容器内会安装一个本地 Kubernetes 集群供 Rancher 使用。为 Rancher 的很多功能都是以 deployment 的方式运行的，而在容器内运行容器是需要特权模式的，因此你需要在安装 Rancher 时添加 `--privileged` 选项。

## Docker 说明

如果你想使用 Docker 命令进行离线安装，请跳过本页的剩余部分，并按照[此页](docker-install-commands.md)进行操作。

## Kubernetes 说明

我们建议在 Kubernetes 集群上安装 Rancher。高可用的 Kubernetes 安装的情况下，一个 Kubernetes 集群包含三个运行 Rancher Server 组件的节点。持久层（etcd）也在这三个节点上进行复制，以便在其中一个节点发生故障时提供冗余和数据复制。

### 1. 添加 Helm Chart 仓库

从可以访问互联网的系统中，获取最新的 Helm Chart，然后将 manifest 复制到可访问 Rancher Server 集群的系统中。

1. 如果你还没有安装 `helm`，请在可访问互联网的工作站上进行本地安装。注意：参考 [Helm 版本要求](../../resources/helm-version-requirements.md)选择 Helm 版本来安装 Rancher。

2. 执行 `helm repo add` 命令，以添加包含安装 Rancher 的 Chart 的 Helm Chart 仓库。有关如何选择仓库，以及哪个仓库最适合你的用例，请参见[选择 Rancher 版本](../../resources/choose-a-rancher-version.md)。
   - Latest：建议用于试用最新功能
      ```
      helm repo add rancher-latest https://releases.rancher.com/server-charts/latest
      ```
   - Stable：建议用于生产环境
      ```
      helm repo add rancher-stable https://releases.rancher.com/server-charts/stable
      ```
   - Alpha：即将发布的实验性预览。
      ```
      helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha
      ```
      注意：不支持升级到 Alpha 版、从 Alpha 版升级或在 Alpha 版之间升级。

3. 获取最新的 Rancher Chart。此操作将获取 Chart 并将其作为 `.tgz` 文件保存在当前目录中。
   ```plain
   helm fetch rancher-<CHART_REPO>/rancher
   ```

   如需下载特定的 Rancher 版本，你可以用 Helm `--version` 参数指定版本，如下：
   ```plain
   helm fetch rancher-stable/rancher --version=v2.4.8
   ```

### 2. 选择 SSL 配置

Rancher Server 默认设计为安全的，并且需要 SSL/TLS 配置。

如果你在离线的 Kubernetes 集群中安装 Rancher，我们建议使用以下两种证书生成方式。

:::note

如果你想在外部终止 SSL/TLS，请参见[外部负载均衡器的 TLS 终止](../../installation-references/helm-chart-options.md#外部-tls-终止)。

:::

| 配置 | Chart 选项 | 描述 | 是否需要 cert-manager |
| ------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Rancher 生成的自签名证书 | `ingress.tls.source=rancher` | 使用 Rancher 生成的 CA 签发的自签名证书。此项是**默认选项**。在渲染 Helm 模板的时候不需要传递此项。 | 是 |
| 你已有的证书 | `ingress.tls.source=secret` | 通过创建 Kubernetes 密文使用你自己的证书文件。<br />在渲染 Rancher Helm 模板时必须传递此选项。 | 否 |

### 离线安装的 Helm Chart 选项

在配置 Rancher Helm 模板时，Helm Chart 中有几个专为离线安装设计的选项，如下表：

| Chart 选项 | Chart 值 | 描述 |
| ----------------------- | -------------------------------- | ---- |
| `certmanager.version` | `<version>` | 根据运行的 cert-manager 版本配置适当的 Rancher TLS 颁发者。 |
| `systemDefaultRegistry` | `<REGISTRY.YOURDOMAIN.COM:PORT>` | 将 Rancher Server 配置成在配置集群时，始终从私有镜像仓库中拉取镜像。 |
| `useBundledSystemChart` | `true` | 配置 Rancher Server 使用打包的 Helm System Chart 副本。[system charts](https://github.com/rancher/system-charts) 仓库包含所有 Monitoring，Logging，告警和全局 DNS 等功能所需的应用商店项目。这些 [Helm Chart](https://github.com/rancher/system-charts) 位于 GitHub 中。但是由于你处在离线环境，因此使用 Rancher 内置的 Chart 会比设置 Git mirror 容易得多。 |

### 3. 获取 Cert-Manager Chart

根据你在[2：选择 SSL 配置](#2-选择-ssl-配置)中的选择，完成以下步骤之一：

#### 选项 A：使用 Rancher 默认的自签名证书

默认情况下，Rancher 会生成一个 CA 并使用 cert-manager 颁发证书以访问 Rancher Server 界面。

##### 1. 添加 cert-manager 仓库

在可以连接互联网的系统中，将 cert-manager 仓库添加到 Helm：

```plain
helm repo add jetstack https://charts.jetstack.io
helm repo update
```

##### 2. 获取 cert-manager Chart

从 [Helm Chart 仓库](https://artifacthub.io/packages/helm/cert-manager/cert-manager)中获取最新可用的 cert-manager Chart：

```plain
helm fetch jetstack/cert-manager --version v1.11.0
```


##### 3. 检索 Cert-Manager CRD

为 cert-manager 下载所需的 CRD 文件：
```plain
curl -L -o cert-manager-crd.yaml https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.crds.yaml
```

### 4. 安装 Rancher

将获取的 Chart 复制到有权访问 Rancher Server 集群的系统以完成安装。

##### 1. 安装 Cert-Manager

使用要用于安装 Chart 的选项来安装 cert-manager。记住要设置 `image.repository` 选项，以从你的私有镜像仓库拉取镜像。此操作会创建一个包含 Kubernetes manifest 文件的 `cert-manager` 目录。

:::note

要查看自定义 cert-manager 安装的选项（包括集群使用 PodSecurityPolicies 的情况），请参阅 [cert-manager 文档](https://artifacthub.io/packages/helm/cert-manager/cert-manager#configuration)。

:::

<details id="install-cert-manager">
  <summary>单击展开</summary>

如果你使用自签名证书，安装 cert-manager：

1. 为 cert-manager 创建命名空间：

   ```plain
   kubectl create namespace cert-manager
   ```

2. 创建 cert-manager CustomResourceDefinition (CRD)。

   ```plain
   kubectl apply -f cert-manager/cert-manager-crd.yaml
   ```

3. 安装 cert-manager。

   ```plain
   helm install cert-manager ./cert-manager-v1.11.0.tgz \
       --namespace cert-manager \
       --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller \
       --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook \
       --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector \
       --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-ctl
   ```

</details>

##### 2. 安装 Rancher
首先，参见[添加 TLS 密文](../../resources/add-tls-secrets.md)发布证书文件，以便 Rancher 和 Ingress Controller 可以使用它们。

然后，使用 kubectl 为 Rancher 创建命名空间：

```plain
kubectl create namespace cattle-system
```

然后安装 Rancher，并声明你选择的选项。参考下表来替换每个占位符。Rancher 需要配置为使用私有镜像仓库，以便配置所有 Rancher 启动的 Kubernetes 集群或 Rancher 工具。

| 占位符 | 描述 |
------------|-------------
| `<VERSION>` | 输出压缩包的版本号。 |
| `<RANCHER.YOURDOMAIN.COM>` | 指向负载均衡器的 DNS 名称。 |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | 你的私有镜像仓库的 DNS 名称。 |
| `<CERTMANAGER_VERSION>` | 在 K8s 集群上运行的 cert-manager 版本。 |

```plain
   helm install rancher ./rancher-<VERSION>.tgz \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set certmanager.version=<CERTMANAGER_VERSION> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # 设置在 Rancher 中使用的默认私有镜像仓库
    --set useBundledSystemChart=true # 使用打包的 Rancher System Chart
```

**可选**：如需安装特定的 Rancher 版本，设置`rancherImageTag` 的值，例如：`--set rancherImageTag=v2.5.8`

#### 选项 B：使用 Kubernetes 密文从文件中获取证书

##### 1. 创建密文

使用你自己的证书来创建 Kubernetes 密文，以供 Rancher 使用。证书的 common name 需要与以下命令中的 `hostname` 选项匹配，否则 Ingress Controller 将无法为 Rancher 配置站点。

##### 2. 安装 Rancher

安装 Rancher，并声明你选择的选项。参考下表来替换每个占位符。Rancher 需要配置为使用私有镜像仓库，以便配置所有 Rancher 启动的 Kubernetes 集群或 Rancher 工具。

| 占位符 | 描述 |
| -------------------------------- | ----------------------------------------------- |
| `<VERSION>` | 输出压缩包的版本号。 |
| `<RANCHER.YOURDOMAIN.COM>` | 指向负载均衡器的 DNS 名称。 |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | 你的私有镜像仓库的 DNS 名称。 |

```plain
   helm install rancher ./rancher-<VERSION>.tgz \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set ingress.tls.source=secret \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # 设置在 Rancher 中使用的默认私有镜像仓库
    --set useBundledSystemChart=true # 使用打包的 Rancher System Chart
```

如果你使用的是私有 CA 签名的证书，请在 `--set ingress.tls.source=secret` 后加上 `--set privateCA=true`：

```plain
   helm install rancher ./rancher-<VERSION>.tgz \
    --namespace cattle-system \
    --set hostname=<RANCHER.YOURDOMAIN.COM> \
    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
    --set ingress.tls.source=secret \
    --set privateCA=true \
    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # 设置在 Rancher 中使用的默认私有镜像仓库
    --set useBundledSystemChart=true # 使用打包的 Rancher System Chart
```


安装已完成。
:::caution

如果你不想发送遥测数据，在首次登录时退出[遥测](../../../../faq/telemetry.md)。如果在离线安装的环境中让这个功能处于 active 状态，socket 可能无法打开。

:::

## 其他资源

以下资源可能对安装 Rancher 有帮助：

- [Rancher Helm Chart 选项](../../installation-references/helm-chart-options.md)
- [添加 TLS 密文](../../resources/add-tls-secrets.md)
- [Rancher Kubernetes 安装的故障排除](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)
