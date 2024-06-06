---
title: 更新 Rancher 证书
---

## 更新私有 CA 证书

按照以下步骤轮换[安装在 Kubernetes 集群上](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md)、由 Rancher 使用的 SSL 证书和私有 CA，或转用由私有 CA 签发的 SSL 证书。

步骤概述：

1. 使用新证书和私钥创建或更新 `tls-rancher-ingress` Kubernetes Secret 对象。
1. 使用根 CA 证书创建或更新 `tls-ca` Kubernetes Secret 对象（仅在使用私有 CA 时需要）。
1. 使用 Helm CLI 更新 Rancher 安装。
1. 重新配置 Rancher Agent 以信任新的 CA 证书。
1. 选择 Fleet 集群的强制更新，来将 fleet-agent 连接到 Rancher。

各个步骤的详细说明如下。

### 1. 创建/更新证书 Secret 对象

首先，将服务器证书和所有中间证书合并到名为 `tls.crt` 的文件，并在名为 `tls.key` 的文件中提供相应的证书密钥。

使用以下命令在 Rancher（本地）管理集群中创建 `tls-rancher-ingress` Secret 对象：

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

或者，更新现有的 `tls-rancher-ingress` Secret：

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 2. 创建/更新证书 CA Secret 对象

如果新证书由私有 CA 签发的，你需要将相应的根 CA 证书复制到名为 `cacerts.pem` 的文件中，并创建或更新 `cattle-system` 命名空间中的 `tls-ca` Secret。如果证书由中间 CA 签名，则 `cacerts.pem` 必须按顺序同时包含中间 CA 证书和根 CA 证书。

创建初始 `tls-ca` Secret：

```bash
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem
```

要更新现有的 `tls-ca` Secret：

```bash
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 3. 重新配置 Rancher 部署

如果证书源保持不变（例如，`secret`），请按照步骤 3a 中的步骤操作。

但是，如果证书源发生变化（例如，`letsEncrypt` 更改为 `secret`），请按照 3b 中的步骤操作。

#### 3a. 重新部署 Rancher pod

当证书源保持不变，但需要更新 CA 证书时，需要执行此步骤。

在这种情况下，由于 `tls-ca` secret 在启动时由 Rancher pod 读取，因此你需要重新部署 Rancher pod。

你可以运行以下命令重新部署 Rancher pod：
```bash
kubectl rollout restart deploy/rancher -n cattle-system
```

修改完成后，访问 `https://<RANCHER_SERVER_URL>/v3/settings/cacerts`，验证该值是否与先前写入 `tls-ca` Secret 中的 CA 证书匹配。在所有重新部署的 Rancher pod 启动之前，CA `cacerts` 值可能不会更新。

#### 3b. 更新 Rancher 的 Helm 值

如果证书源有更改，则需要执行此步骤。如果你的 Rancher 之前使用默认的自签名证书 (`ingress.tls.source=rancher`) 或 Let's Encrypt (`ingress.tls.source=letsEncrypt`) 证书，并且现在正在使用由私有 CA (`ingress.tls.source=secret`) 签名的证书。

以下步骤更新了 Rancher Chart 的 Helm 值，因此 Rancher pod 和 ingress 会使用在步骤 1 和 2 中创建的新私有 CA 证书。

1. 调整初始安装期间使用的值，将当前值存储为：
```bash
helm get values rancher -n cattle-system -o yaml > values.yaml
```
1. 检索当前部署的 Rancher Chart 的版本字符串：
```bash
helm ls -n cattle-system
```
1. 更新 `values.yaml` 文件中的当前 Helm 值以包含下方内容：
```yaml
ingress:
  tls:
    source: secret
privateCA: true
```
:::note 重要：
由于证书由私有 CA 签发，因此确保在 `values.yaml` 文件中设置了 [`privateCA: true`](../installation-references/helm-chart-options.md#常用选项) 是非常重要的。
:::
1. 使用 `values.yaml` 文件和当前 Chart 版本升级 Helm 应用程序实例。版本必须匹配以防止 Rancher 升级。
```bash
 helm upgrade rancher rancher-stable/rancher \
  --namespace cattle-system \
  -f values.yaml \
  --version <DEPLOYED_RANCHER_VERSION>
```

修改完成后，访问 `https://<RANCHER_SERVER_URL>/v3/settings/cacerts`，验证该值是否与先前写入 `tls-ca` Secret 中的 CA 证书匹配。在所有 Rancher pod 启动之前，CA `cacerts` 值可能不会更新。

### 4. 重新配置 Rancher Agent 以信任私有 CA

本节介绍了重新配置 Rancher Agent 以信任私有 CA 的三种方法。如果你的实际情况符合以下任意一个条件，请执行此步骤：

- Rancher 在先前的配置中使用了 Rancher 自签名证书 (`ingress.tls.source=rancher`) 或 Let's Encrypt 证书 (`ingress.tls.source=letsEncrypt`)。
- 该证书由不同的私有 CA 签发

#### 为什么要执行这一步骤？

如果 Rancher 配置了私有 CA 签名的证书时，CA 证书链将受到 Rancher agent 容器的信任。Agent 会对下载证书的校验和及 `CATTLE_CA_CHECKSUM` 环境变量进行比较。换言之，如果 Rancher 使用的私有 CA 证书发生变化，环境变量 `CATTLE_CA_CHECKSUM` 必须相应更新。

#### 可使用的方法

- 方法 1（最简单的方法）：在轮换证书后将所有集群连接到 Rancher。适用于更新或重新部署 Rancher 部署（步骤 3）后立即执行的情况。

- 方法 2：适用于集群与 Rancher 失去连接，但所有集群都启用了 [Authorized Cluster Endpoint](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md) (ACE) 的情况。

- 方法 3：如果方法 1 和 2 不可行，则可使用方法 3 进行回退。

#### 方法 1：强制重新部署 Rancher Agent

对于每个下游集群，使用 Rancher（本地）管理集群的 Kubeconfig 文件运行以下命令。

```bash
kubectl annotate clusters.management.cattle.io <CLUSTER_ID> io.cattle.agent.force.deploy=true
```

:::note
找到下游集群的集群 ID (c-xxxxx)。你可以在 Rancher UI 的**集群管理**中查看集群时在浏览器 URL 中找到 ID。
:::

此命令将使 Agent 清单重新应用新证书的校验和。

#### 方法二：手动更新校验和环境变量

将 `CATTLE_CA_CHECKSUM` 环境变量更新为匹配新 CA 证书校验和的值，从而手动为 Agent Kubernetes 对象打上补丁。通过以下操作生成新的校验和：

```bash
curl -k -s -fL <RANCHER_SERVER_URL>/v3/settings/cacerts | jq -r .value | sha256sum | awk '{print $1}'
```

为每个下游集群使用 Kubeconfig 更新两个 Agent 部署的环境变量。如果集群启用了 [ACE](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md)，你可以[调整 kubectl 上下文](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)，从而直接连接到下游集群。

```bash
kubectl edit -n cattle-system ds/cattle-node-agent
kubectl edit -n cattle-system deployment/cattle-cluster-agent
```

#### 方法三：手动重新部署 Rancher agent

该方法通过在每个下游集群的 control plane 节点上运行一组命令，从而重新应用 Rancher agent。

对每个下游集群重复以下步骤：

1. 检索 agent 注册 kubectl 命令：
   1. 找到下游集群的集群 ID (c-xxxxx)。你可以在 Rancher UI 的**集群管理**中查看集群时在浏览器 URL 中找到 ID。
   1. 将 Rancher Server URL 和集群 ID 添加到以下 URL：`https://<RANCHER_SERVER_URL>/v3/clusterregistrationtokens?clusterId=<CLUSTER_ID>`。
   1. 复制 `insecureCommand` 字段中的命令，使用此命令是因为未使用私有 CA。

2. 使用以下其中一种方法，使用 kubeconfig 为下游集群运行上一步中的 kubectl 命令：
   1. 如果集群启用了 [ACE](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md)，你可以[调整上下文](../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#直接使用下游集群进行身份验证)，从而直接连接到下游集群。
   1. 或者，SSH 到 control plane 节点：
      - RKE：使用[此处文档中的步骤](https://github.com/rancherlabs/support-tools/tree/master/how-to-retrieve-kubeconfig-from-custom-cluster)生成 kubeconfig
      - RKE2/K3s：使用安装时填充的 kubeconfig

### 5. 强制更新 Fleet 集群，从而将 fleet-agent 重新连接到 Rancher

在 Rancher UI 的[持续交付](../../../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md#在-rancher-ui-中访问-fleet)中，为集群选择“强制更新”，来允许下游集群中的 fleet-agent 成功连接到 Rancher。

#### 为什么要执行这一步骤？

Rancher 管理的集群中的 Fleet agent 存储了用于连接到 Rancher 的 kubeconfig。kubeconfig 包含一个 `certificate-authority-data` 字段，该字段包含 Rancher 使用的证书的 CA。更改 CA 时，你需要更新此块来允许 fleet-agent 信任 Rancher 使用的证书。

## 将私有 CA 证书更改为公共证书

按照以下步骤执行与上面相反的操作，将私有 CA 颁发的证书更改为公共或自签名 CA。

### 1. 创建/更新证书 Secret 对象

首先，将服务器证书和所有中间证书合并到名为 `tls.crt` 的文件，并在名为 `tls.key` 的文件中提供相应的证书密钥。

使用以下命令在 Rancher（本地）管理集群中创建 `tls-rancher-ingress` Secret 对象：

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

或者，更新现有的 `tls-rancher-ingress` Secret：

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key \
  --dry-run --save-config -o yaml | kubectl apply -f -
```

### 2. 删除 CA 证书 Secret 对象

你需要删除 `cattle-system` 命名空间中的 `tls-ca secret`（不再需要它）。如果需要，你还可以选择保存 `tls-ca` secret 的副本。

要保存现有的 `tls-ca` Secret：

```bash
kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml
```

要删除现有的 `tls-ca` 密文：

```bash
kubectl -n cattle-system delete secret tls-ca
```

### 3. 重新配置 Rancher 部署

如果证书源有更改，则需要执行此步骤。在这种情况下，它变化的原因很可能是因为 Rancher 之前配置为使用默认的自签名证书 (`ingress.tls.source=rancher`)。

以下步骤更新了 Rancher Chart 的 Helm 值，因此 Rancher pod 和 Ingress 会使用在步骤 1 中创建的新证书。

1. 调整初始安装期间使用的值，将当前值存储为：
```bash
helm get values rancher -n cattle-system -o yaml > values.yaml
```
1. 获取当前部署的 Rancher Chart 的版本字符串：
```bash
helm ls -n cattle-system
```
1. 更新 `values.yaml` 文件中的当前 Helm 值：
   1. 由于不再使用私有 CA，删除 `privateCA: true` 字段，或将其设置为 `false`。
   1. 根据需要调整 `ingress.tls.source` 字段。有关更多信息，请参阅 [Chart 选项](../installation-references/helm-chart-options.md#常用选项)。以下是一些示例：
      1. 如果使用公共 CA，继续使用 `secret`
      1. 如果使用 Let's Encrypt，将值更新为 `letsEncrypt`
1. 使用 `values.yaml` 文件更新 Rancher Chart 的 Helm 值，并使用当前 Chart 版本防止升级：
```bash
  helm upgrade rancher rancher-stable/rancher \
   --namespace cattle-system \
   -f values.yaml \
   --version <DEPLOYED_RANCHER_VERSION>
```

### 4. 为非私有/通用证书重新配置 Rancher Agent

由于不再使用私有 CA，因此你需要删除下游集群 agent 上的 `CATTLE_CA_CHECKSUM` 环境变量，或将其设置为 ""（空字符串）。

### 5. 强制更新 Fleet 集群，从而将 fleet-agent 重新连接到 Rancher

在 Rancher UI 的[持续交付](../../../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md#在-rancher-ui-中访问-fleet)中，为集群选择“强制更新”，来允许下游集群中的 fleet-agent 成功连接到 Rancher。

#### 为什么要执行这一步骤？

Rancher 管理的集群中的 Fleet agent 存储了用于连接到 Rancher 的 kubeconfig。kubeconfig 包含一个 `certificate-authority-data` 字段，该字段包含 Rancher 使用的证书的 CA。更改 CA 时，你需要更新此块来允许 fleet-agent 信任 Rancher 使用的证书。
