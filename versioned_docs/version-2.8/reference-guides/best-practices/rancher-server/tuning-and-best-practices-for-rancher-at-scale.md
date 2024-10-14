---
title: Tuning and Best Practices for Rancher at Scale
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale"/>
</head>


This guide describes the best practices and tuning approaches to scale Rancher setups and the associated challenges with doing so. As systems grow, performance will naturally reduce, but there are steps that can minimize the load put on Rancher and optimize Rancher's ability to manage larger infrastructures.

## Optimizing Rancher Performance

* Keep Rancher up to date with patch releases. We are continuously improving Rancher with performance enhancements and bug fixes. The latest Rancher release contains all accumulated improvements to performance and stability, plus updates based on developer experience and user feedback.

* Always scale up gradually, and monitor and observe any changes in behavior while doing do. It is usually easier to resolve performance problems as soon as they surface, before other problems obscure the root cause.

* Reduce network latency between the upstream Rancher cluster and downstream clusters to the extent possible. Note that latency is, among other factors, a function of geographic distance - if you require clusters or nodes spread across the world, consider multiple Rancher installations.

## Minimizing Load on the Upstream Cluster

When scaling up Rancher, one typical bottleneck is resource growth in the upstream (local) Kubernetes cluster. The upstream cluster contains information for all downstream clusters. Many operations that apply to downstream clusters create new objects in the upstream cluster and require computation from handlers running in the upstream cluster.

### Minimizing Third-Party Software on the Upstream Cluster

Running Rancher at scale can put significant load on internal Kubernetes components, such as `etcd` or `kubeapiserver`. Issues may arise if third-party software interferes with the performance of those components or with Rancher.

Every third-party piece of software carries a risk of interference. To prevent performance issues on the upstream cluster, you should avoid running any other apps or components, beyond Kubernetes system components and Rancher itself.

Software in the following categories generally won't interfere with Rancher or Kubernetes system performance:
 * Rancher internal components, such as Fleet
 * Rancher extensions
 * Cluster API components
 * CNIs
 * Cloud controller managers
 * Observability and monitoring tools (with the exception of prometheus-rancher-exporter)

On the other hand, the following software are found to interfere with Rancher performance at scale:
 * [CrossPlane](https://www.crossplane.io/)
 * [Argo CD](https://argoproj.github.io/cd/)
 * [Flux](https://fluxcd.io/)
 * [prometheus-rancher-exporter](https://github.com/David-VTUK/prometheus-rancher-exporter) (see [issue 33](https://github.com/David-VTUK/prometheus-rancher-exporter/issues/33))

### Managing Your Object Counts

Etcd is the backing database for Kubernetes and for Rancher. The database may eventually encounter limitations to the number of a single Kubernetes resource type it can store. Exact limits vary and depend on a number of factors. However, experience indicates that performance issues frequently arise once a single resource type's object count exceeds 60,000. Often that type is `RoleBinding`.

This is typical in Rancher, as many operations create new `RoleBinding` objects in the upstream cluster as a side effect.

You can reduce the number of `RoleBindings` in the upstream cluster in the following ways:
* Limit the use of the [Restricted Admin](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md#restricted-admin) role. Apply other roles wherever possible.
* Only add users to clusters and projects when necessary.
* Remove clusters and projects when they are no longer needed.
* Only use custom roles if necessary.
* Use as few rules as possible in custom roles.
* Consider whether adding a role to a user is redundant.
* Consider using less, but more powerful, clusters.
* Kubernetes permissions are always "additive" (allow-list) rather than "subtractive" (deny-list). Try to minimize configurations that gives access to all but one aspect of a cluster, project, or namespace, as that will result in the creation of a high number of `RoleBinding` objects.
* Experiment to see if creating new projects or clusters manifests in fewer `RoleBindings` for your specific use case.

### Using External Authentication

If you have fifty or more users, you should configure an [external authentication provider](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/authentication-config.md). This is necessary for better performance.

After you configure external authentication, make sure to assign permissions to groups instead of to individual users. This helps reduce the `RoleBinding` object count.

### RoleBinding Count Estimation

Predicting how many `RoleBinding` objects a given configuration will create is complicated. However, the following considerations can offer a rough estimate:
* For a minimum estimate, use the formula `32C + U + 2UaC + 8P + 5Pa`. 
  * `C` is the total number of clusters.
  * `U` is the total number of users.
  * `Ua` is the average number of users with a membership on a cluster.
  * `P` is the total number of projects.
  * `Pa` is the average number of users with a membership on a project.
* The Restricted Admin role follows a different formula, as every user with this role results in at least `7C + 2P + 2` additional `RoleBinding` objects.
* The number of `RoleBindings` increases linearly with the number of clusters, projects, and users.

### Using New Apps Over Legacy Apps

Rancher uses two Kubernetes app resources: `apps.projects.cattle.io` and `apps.cattle.cattle.io`. Legacy apps, represented by `apps.projects.cattle.io`, were introduced with the former Cluster Manager UI and are now outdated. Current apps, represented by `apps.catalog.cattle.io`, are found in the Cluster Explorer UI for their respective cluster. `Apps.cattle.cattle.io` apps are preferable because their data resides in downstream clusters, which frees up resources in the upstream cluster.

You should remove any remaining legacy apps that appear in the Cluster Manager UI, and replace them with apps in the Cluster Explorer UI. Create any new apps only in the Cluster Explorer UI.

### Using the Authorized Cluster Endpoint (ACE)

An [Authorized Cluster Endpoint](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint) (ACE) provides access to the Kubernetes API of Rancher-provisioned RKE, RKE2, and K3s clusters. When enabled, the ACE adds a context to kubeconfig files generated for the cluster. The context uses a direct endpoint to the cluster, thereby bypassing Rancher. This reduces load on Rancher for cases where unmediated API access is acceptable or preferable. See [Authorized Cluster Endpoint](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint) for more information and configuration instructions.

### Reducing Event Handler Executions

The bulk of Rancher's logic occurs on event handlers. These event handlers run on an object whenever the object is updated, and when Rancher is started. Additionally, they run every 10 hours when Rancher syncs caches. In scaled setups these scheduled runs come with huge performance costs because every handler is being run on every applicable object. However, the scheduled handler execution can be disabled with the `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` environment variable. If resource allocation spikes are seen every 10 hours, this setting can help.

The value for `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` can be a comma separated list of the following options. The values refer to types of handlers and controllers (the structures that contain and run handlers). Adding the controller types to the variable disables that set of controllers from running their handlers as part of cache resyncing.

* `mgmt` refers to management controllers which only run on one Rancher node.
* `user` refers to user controllers which run for every cluster. Some of these run on the same node as management controllers, while others run in the downstream cluster. This option targets the former.
* `scaled` refers to scaled controllers which run on every Rancher node. You should avoid setting this value, as the scaled handlers are responsible for critical functions and changes may disrupt cluster stability.

In short, if you notice CPU usage peaks every 10 hours, add the `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` environment variable to your Rancher deployment (in the `spec.containers.env` list) with the value `mgmt,user`

## Optimizations Outside of Rancher

Important influencing factors are the underlying cluster's own performance and configuration. The upstream cluster, if misconfigured, can introduce a bottleneck Rancher software has no chance to resolve.

### Manage Upstream Cluster Nodes Directly with RKE2

As Rancher can be very demanding on the upstream cluster, especially at scale, you should have full administrative control of the cluster's configuration and nodes. To identify the root cause of excess resource consumption, use standard Linux troubleshooting techniques and tools. This can aid in distinguishing between whether Rancher, Kubernetes, or operating system components are causing issues. 

Although managed Kubernetes services make it easier to deploy and run Kubernetes clusters, they are discouraged for the upstream cluster in high scale scenarios. Managed Kubernetes services typically limit access to configuration and insights on individual nodes and services.

Use RKE2 for large scale use cases.

### Keep all Upstream Cluster Nodes co-located

To provide high availability, Kubernetes is designed to run nodes and control components in different zones. However, if nodes and control plane components are located in different zones, network traffic may be slower.

Traffic between Rancher components and the Kubernetes API is especially sensitive to network latency, as is etcd traffic between nodes.

To improve performance, run all upstream node clusters in the same location. In particular, make sure that latency between etcd nodes and Rancher is as low as possible.

### Keeping Kubernetes Versions Up to Date

You should keep the local Kubernetes cluster up to date. This will ensure that your cluster has all available performance enhancements and bug fixes.

### Optimizing etcd

Etcd is the backend database for Kubernetes and for Rancher. It plays a very important role in Rancher performance.

The two main bottlenecks to [etcd performance](https://etcd.io/docs/v3.5/op-guide/performance/) are disk and network speed. Etcd should run on dedicated nodes with a fast network setup and with SSDs that have high input/output operations per second (IOPS). For more information regarding etcd performance, see [Slow etcd performance (performance testing and optimization)](https://www.suse.com/support/kb/doc/?id=000020100) and [Tuning etcd for Large Installations](../../../how-to-guides/advanced-user-guides/tune-etcd-for-large-installs.md). Information on disks can also be found in the [Installation Requirements](../../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md#disks).

It's best to run etcd on exactly three nodes, as adding more nodes will reduce operation speed. This may be counter-intuitive to common scaling approaches, but it's due to etcd's [replication mechanisms](https://etcd.io/docs/v3.5/faq/#what-is-maximum-cluster-size).

Etcd performance will also be negatively affected by network latency between nodes as that will slow down network communication. Etcd nodes should be located together with Rancher nodes.

### Browser Requirements

At high scale, Rancher transfers more data from the upstream cluster to UI components running in the browser, and those components also need to perform more processing.

For best performance, ensure that the host running the hardware meets these requirements:
 - 2020 i5 10th generation Intel (4 cores) or equivalent
 - 8 GB RAM
 - Total network bandwith to the upstream cluster: 72 Mb/s (equivalent to a single 802.11n Wi-Fi 4 link stream, ~8 MB/s http download throughput)
 - Round-trip time (ping time) from browser to upstream cluster: 150 ms or less
