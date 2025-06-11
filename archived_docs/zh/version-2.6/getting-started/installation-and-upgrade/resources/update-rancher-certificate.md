---
title: 更新 Rancher 证书
---

## 更新私有 CA 证书

本文介绍如何更新 Rancher [高可用 Kubernetes 安装](../../../pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md) 中 Ingress 的 SSL 证书，以及如何从默认的自签名证书切换到自定义证书。

步骤概述：

1. 使用新证书和私钥创建或更新 `tls-rancher-ingress` Kubernetes 密文资源。
2. 使用根 CA 证书创建或更新 `tls-ca` Kubernetes 密文资源（仅在使用私有 CA 时需要）。
3. 使用 Helm CLI 更新 Rancher 安装。
4. 重新配置 Rancher Agent 以信任新的 CA 证书。
5. 选择 Fleet 集群的强制更新，来将 fleet-agent 连接到 Rancher。

各个步骤的详细说明如下。

### 1. 创建/更新证书密文资源

首先，将服务器证书和所有中间证书合并到名为 `tls.crt` 的文件，并在名为 `tls.key` 的文件中提供相应的证书密钥。

如果你想切换 Rancher 自签名证书或 Let's Encrypt 证书，请运行以下命令，在 Rancher 高可用集群中创建 `tls-rancher-ingress` 密文资源：

```
$ kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

你也可以运行以下命令，更新现有的证书密文：

```
$ kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 2. 创建/更新证书 CA 密文资源

如果新证书由私有 CA 签发的，你需要将相应的根 CA 证书复制到名为 `cacerts.pem` 的文件中，并创建或更新 `cattle-system` 命名空间中的 `tls-ca` 密文。如果证书由中间 CA 签名，则 `cacerts.pem` 必须按顺序同时包含中间 CA 证书和根 CA 证书。

创建初始密文：

```
$ kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem
```

要更新现有的 `tls-ca` Secret：

```
$ kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 3. 重新配置 Rancher 部署

:::note

在继续之前，在 Rancher UI (<b>用户 > API & 密钥 </b>) 中生成一个 API Token，并保存持有者 Token（你在步骤 4 中可能需要）。

:::

只有在最初安装 Rancher 时使用了自签名证书 （`ingress.tls.source=rancher`）或 Let's Encrypt 证书（`ingress.tls.source=letsEncrypt`）时，你才需要执行此步骤。

这一步骤确保 Rancher Pod 和 Ingress 资源能够重新配置，来使用新的服务器和可选的 CA 证书。

要更新 Helm 部署，请使用初始安装时的选项（`--set`）。运行以下命令检查：

```
$ helm get values rancher -n cattle-system
```

获取当前部署的 Rancher Chart 的版本字符串：

```
$ helm ls -A
```

使用初始配置的值升级 Helm 应用实例，并指定 `ingress.tls.source=secret` 以及当前的 Chart 版本来防止应用升级。

如果证书是由私有 CA 签发的，你需要添加 `set privateCA=true` 参数。请确保你已经阅读了使用自定义证书进行初始安装的文档。

```
helm upgrade rancher rancher-stable/rancher \
  --namespace cattle-system \
  --version <DEPLOYED_CHART_VERSION> \
  --set hostname=rancher.my.org \
  --set ingress.tls.source=secret \
  --set ...
```

升级完成后，访问 `https://<Rancher_SERVER>/v3/settings/cacerts`，验证该值是否与先前写入 `tls-ca` 密文中的 CA 证书匹配。

### 4. 重新配置 Rancher Agent 以信任私有 CA

本节介绍了重新配置 Rancher Agent 以信任私有 CA 的三种方法。如果你的实际情况符合以下任意一个条件，请执行此步骤：

- Rancher 初始配置中使用了 Rancher 自签名证书 (`ingress.tls.source=rancher`) 或 Let's Encrypt 证书 (`ingress.tls.source=letsEncrypt`)。
- 新自定义证书的根 CA 证书已更改。

#### 为什么要执行这一步骤？

如果 Rancher 配置了私有 CA 签名的证书时，CA 证书链会下载到 Rancher Agent 容器中。Agent 会对下载证书的校验和及 `CATTLE_CA_CHECKSUM` 环境变量进行比较。如果私有 CA 证书在 Rancher Server 端更改了，环境变量 `CATTLE_CA_CHECKSUM` 必须相应进行更新。

#### 可使用的方法

- 方法 1（最简单的方法）：
在轮换证书后将所有集群连接到 Rancher。适用于更新 Rancher 部署（步骤 3）后立即执行的情况。

- 方法 2：适用于集群失去了与 Rancher 的连接，但是你已启动了[授权集群端点（ACE）](https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/ace/)的情况。

- 方法 3：方法 1 和方法 2 不可用的情况下可使用。

#### 方法 1：Kubectl 命令

对于**集群管理**中的每个集群（除去 `local` Rancher 管理集群），使用 Rancher 管理集群（RKE 或 K3S）的 `Kubeconfig` 文件运行以下命令：

```
kubectl patch clusters.management.cattle.io <REPLACE_WITH_CLUSTERID> -p '{"status":{"agentImage":"dummy"}}' --type merge
```

这个命令能使所有 Agent Kubernetes 资源使用新证书的校验和重新配置。


#### 方法 2：手动更新校验和

通过将 `CATTLE_CA_CHECKSUM` 环境变量更新为匹配新 CA 证书校验和的值，来手动为 Agent Kubernetes 资源打上补丁。通过以下操作生成新的校验和：

```
$ curl -k -s -fL <RANCHER_SERVER>/v3/settings/cacerts | jq -r .value > cacert.tmp
$ sha256sum cacert.tmp | awk '{print $1}'
```

为每个下游集群使用 Kubeconfig 更新两个 Agent 部署的环境变量。

```
$ kubectl edit -n cattle-system ds/cattle-node-agent
$ kubectl edit -n cattle-system deployment/cattle-cluster-agent
```

#### 方法 3：重新创建 Rancher Agent

你可以在每个下游集群的 controlplane 节点上运行一组命令，来重新创建 Rancher Agent。

首先，生成 Agent 定义（参见[此处](https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971)）。

然后，SSH 连接到下游集群的 controlplane 节点，创建 Kubeconfig 并应用定义（参见[此处](
https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b)）。

### 5. 选择 Fleet 集群的强制更新，来将 fleet-agent 连接到 Rancher

在 Rancher UI 的[持续交付](../../../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md#在-rancher-ui-中访问-fleet)中，为集群选择“强制更新”，来允许下游集群中的 fleet-agent 成功连接到 Rancher。

#### 为什么要执行这一步骤？

Rancher 管理的集群中的 Fleet agent 存储 kubeconfig，该配置用于连接到 Fleet 系统命名空间的 fleet-agent 密文中的 Rancher 代理 kube-api。kubeconfig 包括一个包含 Rancher CA 的证书授权数据块。更改 Rancher CA 时，需要更新此块来使 fleet-agent 成功连接到 Rancher。

## 将私有 CA 证书更改为通用证书

:::note

你可以执行与上文描述相反的操作，即将私有证书更改为通用或非私有证书。所涉及的步骤概述如下。

:::

### 1. 创建/更新证书密文资源

首先，将服务器证书和所有中间证书合并到名为 `tls.crt` 的文件，并在名为 `tls.key` 的文件中提供相应的证书密钥。

如果你想切换 Rancher 自签名证书或 Let's Encrypt 证书，请运行以下命令，在 Rancher 高可用集群中创建 `tls-rancher-ingress` 密文资源：

```
$ kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

你也可以运行以下命令，更新现有的证书密文：

```
$ kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 2. 删除 CA 证书密文资源

你需要删除 `cattle-system` 命名空间中的 `tls-ca secret`（不再需要它）。如果需要，你还可以选择保存 `tls-ca secret` 的副本。

要保存现有密文：

```
kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml
```

要删除现有的 `tls-ca` 密文：

```
kubectl -n cattle-system delete secret tls-ca
```

### 3. 重新配置 Rancher 部署

:::note 重要提示：

在继续之前，先[在 Rancher UI 中生成 API 令牌](../../../reference-guides/user-settings/api-keys.md#创建-api-密钥)（在 <b>User > API & Keys</b> 中）。

:::

只有在最初安装 Rancher 时使用了自签名证书 （`ingress.tls.source=rancher`）或 Let's Encrypt 证书（`ingress.tls.source=letsEncrypt`）时，你才需要执行此步骤。

这一步骤确保 Rancher Pod 和 Ingress 资源能够重新配置，来使用新的服务器和可选的 CA 证书。

要更新 Helm 部署，请使用初始安装时的选项（`--set`）。运行以下命令检查：

```
$ helm get values rancher -n cattle-system
```

获取当前部署的 Rancher Chart 的版本字符串：

```
$ helm ls -A
```

使用初始配置的值升级 Helm 应用程序实例，并指定当前的 Chart 版本以防止应用程序升级。

请确保你已经阅读了使用自定义证书进行初始安装的文档。

```
helm upgrade rancher rancher-stable/rancher \
  --namespace cattle-system \
  --version <DEPLOYED_CHART_VERSION> \
  --set hostname=rancher.my.org \
  --set ...
```

升级时，你可以执行以下其中一个操作：

- 从 Helm 升级命令中删除 `--set ingress.tls.source=secret \`，如上所示。

- 删除 `privateCA` 参数或将其设置为 `false` （因为 CA 有效）：

```
set privateCA=false
```

### 4. 为非私有/通用证书重新配置 Rancher Agent

下游集群 Agent 上的 `CATTLE_CA_CHECKSUM` 环境变量应该被删除或设置为“”（一个空字符串）。

### 5. 选择 Fleet 集群的强制更新，来将 fleet-agent 连接到 Rancher

在 Rancher UI 的[持续交付](../../../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md#在-rancher-ui-中访问-fleet)中，为集群选择“强制更新”，来允许下游集群中的 fleet-agent 成功连接到 Rancher。

#### 为什么要执行这一步骤？

Rancher 管理的集群中的 Fleet agent 存储 kubeconfig，该配置用于连接到 Fleet 系统命名空间的 fleet-agent 密文中的 Rancher 代理 kube-api。kubeconfig 包括一个包含 Rancher CA 的证书授权数据块。更改 Rancher CA 时，需要更新此块来使 fleet-agent 成功连接到 Rancher。
