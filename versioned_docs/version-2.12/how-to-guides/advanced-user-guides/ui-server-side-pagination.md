---
title: UI Server-Side Pagination
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/ui-server-side-pagination"/>
</head>

UI Server-Side Pagination (SSP) is **enabled by default** via the feature flag `ui-sql-cache` and provides an SQLite-backed cache of Kubernetes objects. This unlocks sorting, filtering and pagination features used by the UI to restrict the amount of resources it fetches and stores in browser memory, and also monitors. These features are primarily used to improve list performance for resources with high counts.

## Disk Space

:::important
It is crucial that you review the available disk space on your nodes and plan accordingly before upgrading to Rancher v2.12.0 and later to avoid potential disk pressure and pod eviction issues.
:::

The SSP relies on a caching mechanism that introduces a new requirement for ephemeral disk space on your cluster nodes. This cache, an internal SQLite database, is stored within the container's file system. This affects the nodes running the **Rancher server pods** (`rancher` in the `cattle-system` namespace on the local cluster) and the nodes running the **Rancher agent pods** (`cattle-cluster-agent` in the `cattle-system` namespace on all downstream clusters).

The amount of disk space required is dynamic and depends on the quantity and size of Kubernetes resources visualized in the UI. As a guideline, the cache may consume approximately **twice the size of the raw Kubernetes objects** it stores.

For example, internal tests showed that caching 5000 ConfigMaps, totaling 50 MB, consumed 81 MB of disk space. For a conservative, high-level estimate, you can plan for the available disk space on each relevant node to be at least **twice the size of your etcd snapshot**. For most production environments, ensuring a few extra gigabytes of storage are available on the relevant nodes is a safe starting point.

SQLite-backed caching persists copies of any cached Kubernetes objects to disk. See [Encrypting SQLite-backed Caching](#encrypting-sqlite-backed-caches) if this is a security concern.

## Enabling via UI: `ui-sql-cache` and Server-Side Pagination

1. In the upper left corner, click **☰ > Global Settings > Feature Flags**.
1. Find **`ui-sql-cache`** and select **⋮ > Activate > Activate**.
1. Wait for Rancher to restart. This also restarts agents on all downstream clusters.
1. Reload the page with the browser button (or the equivalent keyboard combination, typically `CTRL + R` on Windows and Linux, and `⌘ + R` on macOS).

## Disabling via UI: `ui-sql-cache` and Server-Side Pagination

1. In the upper left corner, click **☰ > Global Settings > Feature Flags**.
1. Find **`ui-sql-cache`** and select **⋮ > Deactivate > Deactivate**.
1. Wait for Rancher to restart. This also restarts agents on all downstream clusters.
1. Reload the page with the browser button (or the equivalent keyboard combination, typically `CTRL + R` on Windows and Linux, and `⌘ + R` on macOS).

## Encrypting SQLite-backed Caches

UI server-side pagination persists copies of any cached Kubernetes objects to disk. If you're concerned about the safety of this data, you can encrypt all objects before they are persisted to disk, by setting the environment variable `CATTLE_ENCRYPT_CACHE_ALL` to `true` in `rancher` pods in the upstream cluster and `cattle-cluster-agent` pods in the downstream clusters.

Secrets and security Tokens are always encrypted regardless of the above setting.

## Known Limitations of UI Server-Side Pagination

- This initial release improves the performance of most pages used to view, create or edit resources within the `local` or downstream clusters i.e. the Cluster Explorer view.
- Areas outside the Cluster Explorer are not yet covered by this feature.
- Resources in Lists are automatically updated, however not instantaneously.

### Regressions

The following regressions occur when the feature is enabled. These mainly revolve around different sort or filter behaviors in affected lists.

- All lists that utilize Server-Side Pagination:
  - `State` column sort and filter features work on the resources `metadata.state.name` field instead of one deduced locally by the UI.
  - Updates are shown every 5 seconds, rather than instantly.
- Cluster Explorer:
  - `Cluster` group --> `Nodes` page
    - The following columns are now not sortable or filterable: `Roles`, `External/Internal IP`, `CPU`, `RAM` (logic to determine their value is calculated in the browser)
  - `Workloads` list:
    - The `Workloads` list, which showed multiple different resource types has been removed.
      - Server-Side Pagination of multiple resources is not currently possible.
  - `Workloads` group --> All lists
    - `Pod Restarts` and `Workload Health` columns have been removed.
      - [Re-enable Pod Restart Count and Pod Health columns for Workload lists #14211](https://github.com/rancher/dashboard/issues/14211)
  - `Workloads` group / `Job` List
    - `Duration` is now not sortable (sorting on a duration).
      - [Implement more complex server-side pagination sorting #12815](https://github.com/rancher/dashboard/issues/12815)
  - `Workloads` group / `Pod` List
    - `Images` is now not sortable (sorting on an array).
  - `Service Discovery` group / `Ingresses`
    - `Default` is now not sortable/filterable (logic to determine their value is calculated in the browser).
  - `Storage` group / `ConfigMaps`
    - `Data` is now not sortable/filterable (logic to determine their value is calculated in the browser).
  - `Storage` group / `Secrets`
    - `Data` is now not sortable/filterable (logic to determine their value is calculated in the browser).
