---
title: 持续交付
---

Rancher 中预装的 [Fleet](../../../integrations-in-rancher/fleet/fleet.md) 无法完全禁用。但是，你可以使用 `continuous-delivery` 功能开关来禁用 GitOps 持续交付的 Fleet 功能。

如需启用或禁用此功能，请参见[启用实验功能主页](./enable-experimental-features.md)中的说明。

| 环境变量键 | 默认值 | 描述 |
---|---|---
| `continuous-delivery` | `true` | 此开关禁用 Fleet 的 GitOps 持续交付功能。 |

如果你在 Rancher 2.5.x 中禁用了 Fleet，然后将 Rancher 升级到 v2.6.x，Fleet 将启用。只有 Fleet 的持续交付功能可以被禁用。当 `continuous-delivery` 被禁用时，`gitjob` deployment 不再部署到 Rancher Server 的本地集群中，且 `continuous-delivery` 不会在 Rancher UI 中显示。
