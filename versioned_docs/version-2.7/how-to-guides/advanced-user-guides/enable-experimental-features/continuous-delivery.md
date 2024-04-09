---
title: Continuous Delivery
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery"/>
</head>

[Continuous Delivery with Fleet](../../../integrations-in-rancher/fleet-gitops-at-scale/fleet-gitops-at-scale.md) comes preinstalled in Rancher can't be fully disabled. comes preinstalled in Rancher can't be fully disabled. However, the Fleet feature for GitOps continuous delivery may be disabled using the `continuous-delivery` feature flag.

To enable or disable this feature, refer to the instructions on [the main page about enabling experimental features.](enable-experimental-features.md)

Environment Variable Key | Default Value | Description
---|---|---
 `continuous-delivery` | `true` | This flag disables the GitOps continuous delivery feature of Fleet. |

If Fleet was disabled in Rancher v2.5.x, it will become enabled if Rancher is upgraded to v2.6.x. Only the continuous delivery part of Fleet can be disabled. When `continuous-delivery` is disabled, the `gitjob` deployment is no longer deployed into the Rancher server's local cluster, and `continuous-delivery` is not shown in the Rancher UI.
