---
title: HTTP 代理配置
---

如果你通过代理来操作 Rancher，并想要通过代理访问服务（例如拉取应用商店），你需要提供 Rancher 代理的信息。由于 Rancher 是用 Go 编写的，Rancher 使用如下常见的代理环境变量。

请确保 `NO_PROXY` 包含不使用代理的网络地址，网络地址范围和域名。

| 环境变量 | 用途 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| HTTP_PROXY | 发起 HTTP 连接的代理地址 |
| HTTPS_PROXY | 发起 HTTPS 连接的代理地址 |
| NO_PROXY | 发起连接时不使用代理的网络地址，网络地址范围和域名 |

:::note 重要提示：

`NO_PROXY` 必须大写才能使用网络范围 CIDR 表示法。

:::

## 基于 Docker 安装

你可使用 `-e KEY=VALUE` 或 `--env KEY=VALUE`将环境变量传给 Rancher 容器。在 [Docker 安装](../../pages-for-subheaders/rancher-on-a-single-node-with-docker.md)中，`NO_PROXY` 必须的值为：

- `localhost`
- `127.0.0.1`
- `0.0.0.0`
- `10.0.0.0/8`
- `cattle-system.svc`
- `.svc`
- `.cluster.local`

以下示例中，代理服务器可以通过 `http://192.168.0.1:3128` 访问。此外，在访问 `192.168.10.0/24` 网络范围以及 `example.com` 域名下的每个主机名时均不使用代理服务器。

```
docker run -d --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  -e HTTP_PROXY="http://192.168.10.1:3128" \
  -e HTTPS_PROXY="http://192.168.10.1:3128" \
  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,cattle-system.svc,192.168.10.0/24,.svc,.cluster.local,example.com" \
  --privileged \
  rancher/rancher:latest
```

特权访问是[必须](../../pages-for-subheaders/rancher-on-a-single-node-with-docker.md#rancher-特权访问)的。

### 离线代理配置

你现在可以在配置的离线集群中配置主机驱动集群，以使用代理进行出站连接。

除了如上为代理服务器设置默认规则外，你还需要额外添加如下所示的规则，以从代理的 Rancher 环境中配置主机驱动集群。

根据你的设置配置文件路径，例如 `/etc/apt/apt.conf.d/proxy.conf`：

```
acl SSL_ports port 22
acl SSL_ports port 2376

acl Safe_ports port 22      # ssh
acl Safe_ports port 2376    # docker port
```
