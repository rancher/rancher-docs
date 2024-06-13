---
title: SQLite-backed caching
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features/sqlite-caching"/>
</head>

:::caution
Enabling the SQLite-backed caching of Kubernetes objects is a **highly experimental** feature, it is not yet officially supported in Rancher. It is not intended for any production use. SUSE customers should consult SUSE Support before activating this feature.
:::


## About this Feature
This feature enables an optional cache of Kubernetes objects with the aim of improving performance, especially while browsing tabular data in the UI with thousands of rows. It also provides improved UI sorting, filtering and pagination features. 

## Enabling instructions
To enable the feature, perform the following steps:
1. Log into the Rancher UI.
1. In the upper left corner, click **☰ > Global Settings > Feature Flags**.
1. Go to **`ui-sql-cache`** and click **⋮ > Activate > Activate**.
1. Wait for Rancher to restart. This also restarts agents on all downstream clusters.
1. In the upper left corner, click **☰ > Global Settings > Performance**.
1. Go to **Server-side Pagination** and check the **Server-side Pagination** option.
1. Click **Apply**
1. Refresh the page (`CTRL + R`)

## Operational notes
This feature creates file system based caches in the `rancher` pods in the upstream cluster and `cattle-cluster-agent` pods in downstream caches. In most use cases disk usage and I/O should not be significant, however monitoring is recommended.

## Security notes
This feature persists copies of any cached Kubernetes objects to disk. If this is a security concern, an option exists to have all objects encrypted before being persisted to disk.

Set the environment variable `CATTLE_ENCRYPT_CACHE_ALL` to `true` in the pods that need full encryption (`rancher` pods in the upstream cluster and `cattle-cluster-agent` pods in downstream caches respectively).

Secrets and security Tokens are always encrypted regardless of the above setting.

## Known limitations
At the time of writing the feature is subject to limitations below:

1. Only the Pods, Secrets, Node, ConfigMap and Event pages make use of the cache.
1. Automatic refresh of pages is disabled. Table contents can be manually refreshed via a **Refresh** button.
