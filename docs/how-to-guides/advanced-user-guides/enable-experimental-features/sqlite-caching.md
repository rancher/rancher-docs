---
title: SQLite-Backed Caching
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features/sqlite-caching"/>
</head>

:::caution
Caching Kubernetes objects with SQLite is not intended for use in production. This feature is considered highly experimental. SUSE customers should consult SUSE Support before activating this feature.
:::


SQLite-backed caching provides an optional cache of Kubernetes objects to improve performance. This unlocks sorting, filtering, and pagination features used by the UI to restrict the amount of resources it fetches and stores locally. These features are primarily used to improve list performance for resources with high counts by utilizing server-side pagination.

This feature creates file system based caches in the `rancher` pods of the upstream cluster, and in the `cattle-cluster-agent` pods of the downstream clusters. In most environments, disk usage and I/O should not be significant. However, you should monitor activity after you enable caching.

SQLite-backed caching persists copies of any cached Kubernetes objects to disk. See [Encrypting SQLite-backed Caching](#encrypting-sqlite-backed-caches) if this is a security concern.

## Enabling SQLite-Backed Caching

1. In the upper left corner, click **☰ > Global Settings > Feature Flags**.
1. Find **`ui-sql-cache`** and select **⋮ > Activate > Activate**.
1. Wait for Rancher to restart. This also restarts agents on all downstream clusters.
1. In the upper left corner, click **☰ > Global Settings > Performance**.
1. Go to **Server-side Pagination** and check the **Enable Server-side Pagination** option.
1. Click **Apply**.
1. Reload the page with the browser button (or the equivalent keyboard combination, typically `CTRL + R` on Windows and Linux, and `⌘ + R` on macOS).


## Encrypting SQLite-backed Caches

SQLite-backed caching persists copies of any cached Kubernetes objects to disk. If you're concerned about the safety of this data, you can encrypt all objects  before they are persisted to disk, by setting the environment variable `CATTLE_ENCRYPT_CACHE_ALL` to `true` in `rancher` pods in the upstream cluster and `cattle-cluster-agent` pods in the downstream clusters.

Secrets and security Tokens are always encrypted regardless of the above setting.

## Known Limitations of SQLite-Backed Caching

This initial release improves the performance of Pods, Secrets, Nodes and ConfigMaps in the Cluster Explorer pages, and most resources in the Explorer's `More Resources` section

Pages can't be automatically refreshed. You can manually refresh table contents by clicking the **Refresh** button.
