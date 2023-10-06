---
title: 系统工具
---

:::note

系统工具（System Tools）自 2022 年 6 月起已弃用。

:::

## 日志

请使用 [logs-collector](https://github.com/rancherlabs/support-tools/tree/master/collection/rancher/v2.x/logs-collector) 来收集你的集群日志。

## Stats

如果要复制 stats 命令，你可以在集群节点上运行以下命令：

:::note

以下命令需要集群节点上的 `sysstat` 包。

:::

```
/usr/bin/sar -u -r -F 1 1
```

## Remove

请使用 [Rancher Cleanup](https://github.com/rancher/rancher-cleanup) 工具。
