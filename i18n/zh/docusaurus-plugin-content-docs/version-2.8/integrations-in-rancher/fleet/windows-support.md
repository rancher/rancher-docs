---
title: Windows 支持
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/fleet/windows-support"/>
</head>

在 Rancher v2.5.6 之前，`agent` 在具有 Windows 节点的下游集群上没有原生的 Windows 清单。这将导致集群的 `agent` pod 运行失败。

如果你从旧版本的 Rancher 升级到 v2.5.6+，你可以在 _下游集群_ 中部署具有以下工作流的可运行的 `agent`：

1. 封锁所有 Windows 节点。
1. 对 `agent` 工作负载应用以下容忍度。
1. 取消所有 Windows 节点的封锁。
1. 删除所有 `agent` pod。使用新的容忍度来创建新 pod。
1. 一旦 `agent` pod 运行，并且 Fleet 的自动更新已启用，它们会更新到兼容 Windows 的 `agent` 版本。

```yaml
tolerations:
  - effect: NoSchedule
    key: cattle.io/os
    operator: Equal
    value: linux
```
