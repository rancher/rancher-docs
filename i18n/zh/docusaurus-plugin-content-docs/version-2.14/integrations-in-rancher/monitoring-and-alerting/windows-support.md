---
title: Monitoring V2 的 Windows 集群支持
---

_从 v2.5.8 起可用_

从 Monitoring V2 14.5.100（Rancher 2.5.8 的默认版本）开始，Monitoring V2 可以部署在 Windows 集群上，并将使用 [prometheus-community/windows_exporter](https://github.com/prometheus-community/windows_exporter)（旧名是 `wmi_exporter`）来抓取 Windows 节点的指标。

## 集群要求

Monitoring V2 for Windows 只能从最低是 `wins` v0.1.0 的 Windows 主机中抓取指标。要完全部署 Monitoring V2 for Windows，你的所有主机都必须满足此要求。

### 将现有集群升级到 wins v0.1.0

如果集群是在 Rancher 2.5.8 之前配置的（即使当前 Rancher 版本是 2.5.8），你将无法成功部署 Monitoring V2 for Windows，除非你将每台主机的 wins 版本升级到 v0.1.0 或以上版本。

为了方便此次升级，Rancher 2.5.8 发布了一个全新的 Helm Chart，名为 `rancher-wins-upgrader`。

1. 使用以下覆盖部署 `rancher-wins-upgrader`：

   ```yaml
   # 通过先前已列入白名单的进程路径
   # 来引导 win-upgrader 安装，这是因为正常安装路径
   # c:\etc\rancher\wins\wins-upgrade.exe 通常不会被列入白名单。
   # 因此，我们使用 Monitoring V1 之前所用的
   # 已列入白名单的进程路径。
   masquerade:
     enabled: true
     as: c:\\etc\wmi-exporter\wmi-exporter.exe
   ```

2. 成功升级所有主机后，请再次使用默认值部署 Helm Chart，以避免与以下设置发生冲突：

   ```yaml
   masquerade:
     enabled: false
   ```

**结果**：主机已准备好安装 Monitoring V2。你可以选择卸载 `rancher-wins-upgrader` Chart，或将其保留在集群中以方便将来升级。

有关如何使用它的更多信息，请参阅 Chart 的 [README.md](https://github.com/rancher/wins/blob/master/charts/rancher-wins-upgrader/README.md)。
