---
title: 在离线环境中升级
---

:::note

以下说明假设你已经按照[本页](upgrades.md)的 Kubernetes 升级说明操作（包括先决条件）到步骤 3：升级 Rancher。

:::

### Rancher Helm 模板选项

使用安装 Rancher 时选择的选项来渲染 Rancher 模板。参考下表来替换每个占位符。Rancher 需要配置为使用私有镜像仓库，以便配置所有 Rancher 启动的 Kubernetes 集群或 Rancher 工具。

根据你在安装过程中做出的选择，完成以下步骤之一。

| 占位符 | 描述 |
------------|-------------
| `<VERSION>` | 输出压缩包的版本号。 |
| `<RANCHER.YOURDOMAIN.COM>` | 指向负载均衡器的 DNS 名称。 |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | 你的私有镜像仓库的 DNS 名称。 |
| `<CERTMANAGER_VERSION>` | 在 K8s 集群上运行的 cert-manager 版本。 |


### 选项 A：使用默认的自签名证书

```
helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
    --no-hooks \ # prevent files for Helm hooks from being generated
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set certmanager.version=<CERTMANAGER_VERSION> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

#### 解决 UPGRADE FAILED 错误

如果你遇到错误消息 `Error: UPGRADE FAILED: "rancher" has no deployed releases`，Rancher 可能是通过 `helm template` 命令安装的。要成功升级 Rancher，请改用以下命令：

```
helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
    --no-hooks \ # prevent files for Helm hooks from being generated
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set certmanager.version=<CERTMANAGER_VERSION> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

执行 Helm 命令后，需要应用渲染后的模板：

```
kubectl -n cattle-system apply -R -f ./rancher
```
### 选项 B：使用 Kubernetes 密文从文件中获取证书

```plain
helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
	--no-hooks \ # prevent files for Helm hooks from being generated
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set ingress.tls.source=secret \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

如果你使用的是私有 CA 签名的证书，请在 `--set ingress.tls.source=secret` 后加上 `--set privateCA=true`：

```plain
helm template rancher ./rancher-<VERSION>.tgz --output-dir . \
	--no-hooks \ # prevent files for Helm hooks from being generated
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set ingress.tls.source=secret \
	--set privateCA=true \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

## 验证升级

登录 Rancher 以确认升级成功。

:::tip

升级后出现网络问题？

请参见[恢复集群网络](https://github.com/rancher/rancher-docs/tree/main/archived_docs/en/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md)。

:::

## 已知升级问题

你可以在 [GitHub](https://github.com/rancher/rancher/releases) 发布说明以及 [Rancher 论坛](https://forums.rancher.com/c/announcements/12)中找到每个 Rancher 版本的已知问题。
