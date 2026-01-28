---
title: 安装 Adapter
---

> **重要提示**：如果你尝试重新安装 Adapter，你可能会在长达一小时的时间内收到不合规的错误消息。

## Rancher 与 Adapter 的兼容性矩阵

:::note 重要提示：

不同版本的 CSP Adapter 依赖于特定 Rancher 版本的功能。
为了成功部署和运行 Adapter，你需要确保 Adapter 版本与必要的 Rancher 版本对应。

:::

| Rancher 版本 | Adapter 版本 |
|-----------------|:----------------:|
| v2.12.6         |  107.0.0+up7.0.0 |
| v2.12.5         |  107.0.0+up7.0.0 |
| v2.12.4         |  107.0.0+up7.0.0 |
| v2.12.3         |  107.0.0+up7.0.0 |
| v2.12.2         |  107.0.0+up7.0.0 |
| v2.12.1         |  107.0.0+up7.0.0 |
| v2.12.0         |  107.0.0+up7.0.0 |

## 1. 获取对 Local 集群的访问权限

> **注意**：只有管理员用户才能访问 Local 集群。因为 CSP Adapter 必须安装在 Local 集群中，所以此安装必须由管理员用户执行。

首先，单击 Local 集群并下载 kubeconfig 令牌。然后，使用下方的命令配置 CLI 以使用此新令牌，你需要将 `$TOKEN_PATH` 替换为文件系统上令牌的下载路径：

```bash
export KUBECONFIG=$TOKEN_PATH
```

## 2. 创建 Adapter 命名空间

创建要安装 Adapter 的命名空间：

```bash
kubectl create ns cattle-csp-adapter-system
```

## 3. 创建证书密文

Adapter 需要访问 Rancher 用来与 Rancher Server 通信的根 CA。有关 Rancher 支持的证书选项的更多信息，请参阅 [Chart 选项页面](../../../getting-started/installation-and-upgrade/installation-references/helm-chart-options.md)。

如果你的 Rancher 使用由公认的证书颁发机构（例如 Let's Encrypt）签发的证书，你可以跳到[步骤 4](#4-安装-chart)。

但是，如果你的 Rancher 使用了自定义证书（例如 Rancher 生成的证书或由私有证书颁发机构签发的证书），你需要为该 CA 提供 PEM 编码格式的证书以便 Adapter 可以与 Rancher 通信。

首先，检索 Rancher 正在使用的证书并将其放入名为 `ca-additional.pem` 的文件中。如果你使用 Rancher 生成的证书，你可以使用以下命令完成此操作：

```bash
kubectl get secret tls-rancher -n cattle-system -o jsonpath="{.data.tls\.crt}" | base64 -d  >> ca-additional.pem
```

然后，创建一个使用此证书的密文：

```bash
kubectl -n cattle-csp-adapter-system create secret generic tls-ca-additional --from-file=ca-additional.pem
```

> **重要提示**：不要更改文件名或创建的密文的名称，否则可能会导致 Adapter 运行出错。

## 4. 安装 Chart

首先，使用以下命令添加 `rancher/charts` 仓库：

```bash
helm repo add rancher-charts https://charts.rancher.io
```

接下来，安装 CSP Adapter。你必须指定多个值，其中包括账号号码以及在先决条件中创建的角色的名称。

确保你的 CSP Adapter 版本与你正在运行的 Rancher 版本匹配，如[上文](#rancher-与-adapter-的兼容性矩阵)所述。

在下方的操作中，将 `$MY_ACC_NUM` 替换为你的 AWS 账号，将 `$MY_ROLE_NAME` 替换为先决条件中创建的角色的名称。此外，将 `$CSP_ADAPTER_VERSION` 替换为与[版本矩阵](#rancher-与-adapter-的兼容性矩阵)中的 Rancher 版本匹配的版本。

> **注意**：如果你使用 shell 变量，请不要使用引号。例如，MY_ACC_NUM=123456789012 可用，但 MY_ACC_NUM="123456789012" 将失败。

> **注意**：使用欧盟和英国的 AWS Marketplace 列表的账号需要额外指定 `--set image.repository=rancher/rancher-csp-adapter-eu` 选项。要查看你的账号在安装 Adapter 时是否需要此选项，请参阅 Marketplace 列表的使用说明。

<Tabs>
<TabItem value="Let's Encrypt/可信的 CA">

```bash
helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --version $CSP_ADAPTER_VERSION
```


你也可以使用 `values.yaml` 并指定以下选项：

```yaml
aws:
  enabled: true
  accountNumber: "$MY_ACC_NUM"
  roleName: $MY_ROLE_NAME
```

> **注意**：账号需要像上面那样以字符串格式指定，否则安装会失败。

然后，使用以下命令安装 Adapter：

```bash
helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml --version $CSP_ADAPTER_VERSION
```

</TabItem>
  <TabItem value="私有 CA/Rancher 生成的证书">

```bash
helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --set additionalTrustedCAs=true --version $CSP_ADAPTER_VERSION
```

你也可以使用 `values.yaml` 并指定以下选项：

```yaml
aws:
  enabled: true
  accountNumber: "$MY_ACC_NUM"
  roleName: $MY_ROLE_NAME
additionalTrustedCAs: true
```

> **注意**：账号需要像上面那样以字符串格式指定，否则安装会失败。

然后，使用以下命令安装 Adapter：

```bash
helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml --version $CSP_ADAPTER_VERSION
```

</TabItem>
</Tabs>

## 5. 管理证书更新

如果你在[步骤 3](#3-创建证书密文) 中创建了一个用于存储自定义证书的密文，则随着证书的轮换，你将需要更新此密文。

首先，使用以下命令删除 cattle-csp-adapter-system 命名空间中的原始密文：

```bash
kubectl delete secret tls-ca-additional -n cattle-csp-adapter-system
```

然后，按照[步骤 3](#3-创建证书密文) 中的安装步骤，将密文的内容替换为更新后的值。

最后，重新启动 rancher-csp-adapter deployment 来确保更新后的值可供 Adapter 使用：

```bash
kubectl rollout restart deploy rancher-csp-adapter -n cattle-csp-adapter-system
```

> **注意**：有一些方法（例如 cert-manager 的 [trust operator](https://cert-manager.io/docs/projects/trust/)）可以帮助你减少手动轮换任务的数量。这些选项不受官方支持，但可能对想要自动化某些任务的用户有用。
