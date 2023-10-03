---
title: Tuning and Best Practices for Rancher at Scale
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale"/>
</head>


This guide describes the best practices and tuning approaches to scale Rancher setups, and the associated challenges with doing so. As systems grow performance will naturally reduce, but there are steps that can minimize the load put on Rancher, and optimize Rancher's ability to manage larger infrastructures.

## Optimizing Rancher Performance

* Keep Rancher up to date with patch releases. Performance improvements and bug fixes are made continuously, and the latest release incorporates the largest set ofperformance related development, experience and feedback from many users.

* Always scale up gradually, and monitor and observe any changes in behavior while doing do. It is usually easier to resolve performance problems as soon as they surface, before other problems obscure the root cause.

* Reduce network latency between the upstream Rancher cluster and downstream clusters to the extent possible. Note that latency is, among other factors, a function of geographic distance - if a you require clusters or nodes spread across the world, consider multiple Rancher installations.

## Minimizing Load on the Upstream Cluster

One typical bottleneck when scaling up Rancher is resource growth in the local Kubernetes cluster. The local cluster contains information for all downstream clusters. Many operations that apply to downstream clusters will create new objects in the local cluster and require computation from handlers running in the local cluster.

### Managing Your Object Counts

Etcd is the backing database for Kubernetes and for Rancher. The database may eventually encounter limitations to the number of a single Kubernetes resource type it can store. Exact limits vary and depend on a number of factors. However, experience indicates that performance issues frequently arise once a single resource type's object count exceeds 60 thousand. Often that type is `RoleBinding`.

This is typical in Rancher, as many operations create new `RoleBinding` objects in the upstream cluster as a side effect.

You can reduce the number of `RoleBindings` in the upstream cluster in the following ways:
* Limit the use of the [Restricted Admin](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#restricted-admin) role. Apply other roles wherever possible.
* If you use [external authentication](../../../pages-for-subheaders/authentication-config), use groups to assign roles.
* Only add users to clusters and projects when necessary.
* Remove clusters and projects when they are no longer needed.
* Only use custom roles if necessary.
* Use as few rules as possible in custom roles.
* Consider whether adding a role to a user is redundant.
* Consider using less, but more powerful, clusters.
* Kubernetes permissions are always "additive" (allow-list) rather than "subtractive" (deny-list). Try to minimize configurations that gives access to all but one aspect of a cluster, project, or namespace, as that will result in the creation of a high number of `RoleBinding` objects.
* Experiment to see if creating new projects or clusters manifests in fewer `RoleBindings` for your specific use case.

### RoleBinding Count Estimation

Predicting exactly the number of `RoleBindings` a given configuration will create depends on many factors and is complicated to calculate. However, it is possible to give a first estimation according to considerations below:
* As a minimum estimation consider the formula `32C + U + 2UaC + 8P + 5Pa`, where `C` is the cluster count, `U` is the user count, `Ua` is the average count of users with a membership on a cluster, `P` is the project count, and `Pa` is the average number of users with a membership on a project
* The Restricted Admin role follows a different formula, as every user with this role results in at least `7C + 2P + 2` additional `RoleBinding` objects.
* The number of `RoleBindings` increases linearly with the number of clusters, projects, and users.

### Using New Apps Over Legacy Apps

There are two app Kubernetes resources that Rancher uses: `apps.projects.cattle.io` and `apps.cattle.cattle.io`. Legacy apps, `apps.projects.cattle.io`, were first introduced with the former UI (Cluster Manager) and are now outdated. New apps, `apps.catalog.cattle.io`, are found in the current UI (Cluster Explorer) for their respective cluster. New apps are preferable because their data resides in downstream clusters, freeing up resources in the local cluster.

It is recommended to remove any remaining legacy apps that appear in the Cluster Manager, replacing them with apps in the Cluster Explorer for their target cluster if necessary and creating any future apps in the cluster's Cluster Explorer only.

### Using the Authorized Cluster Endpoint (ACE)

An [Authorized Cluster Endpoint](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters#4-authorized-cluster-endpoint) option exist to access the Kubernetes API of Rancher provisioned RKE1, RKE2, and K3s clusters. When enabled this adds a context to generated kubeconfig files generated for the cluster that uses a direct endpoint to the cluster, thereby bypassing Rancher. That reduces load on Rancher for use cases where unmediated API access is acceptable or preferable.

Note that, in order for `kubeconfig` to take advantage of ACE, users need to issue the `kubectl use-context <ace context name>` command in order to start using it.

### Experimental: Option to Reduce Event Handler Executions
The bulk of Rancher's logic occurs on event handlers. These event handlers run on an object whenever the object is updated, and when Rancher is started. Additionally, they run every 15 hours when caches are synced. In scaled setups these scheduled runs come with huge performance costs because every handler is being run on every applicable object. However, this scheduled execution of handlers can be disabled using the CATTLE_SYNC_ONLY_CHANGED_OBJECTS environment variable. If resource allocation spikes are seen on an interval of about 15 hours it is possible this setting can help.

The value for `CATTLE_SYNC_ONLY_CHANGED_OBJECTS` can be a comma separated list of the following options. The values refer to types of handlers and controllers (the structures that contain and run handlers). Adding the controller types to the variable disables that set of controllers from running their handlers as part of cache resyncing.

* `mgmt` refers to management controllers which only run on one Rancher node.
* `user` refers to user controllers which run for every cluster. Some of these run on the same node as management controllers, while others run in the downstream cluster. This option targets the former.
* `scaled` refers to scaled controllers which run on every Rancher node. You should avoid setting this value, as the scaled handlers are responsible for critical functions and changes may disrupt cluster stability.

In short, if you notice CPU usage peaks every 15 hours, add the CATTLE_SYNC_ONLY_CHANGED_OBJECTS environment variable to your rancher deployment with the value `mgmt,user`.

## Optimizations Outside of Rancher

Important influencing factors are the underlying cluster's own performance and configuration. The upstream cluster, if misconfigured, can introduce a bottleneck Rancher software has no chance to resolve.

### Manage Upstream Cluster Nodes Directly with RKE2

As Rancher can be particularly demanding on the local cluster, especially in large scale scenarios, it is recommended to have full control of its configuration and its nodes. For example, when Rancher nodes experience high resource usage, standard Linux troubleshooting techniques and tools are recommended to identify whether Rancher, Kubernetes components, or OS components are the root cause of the excess resource consumption.

Although managed Kubernetes services make it easier to deploy and run Kubernetes clusters, they are discouraged for the upstream cluster in high scale scenarios. Managed Kubernetes services typically limit access to configuration and insights on individual nodes and services.

Use RKE2 for large scale use cases.

### Keeping Kubernetes Versions Up to Date

You should keep the local Kubernetes cluster up to date. This will ensure that your cluster has all available performance enhancements and bug fixes.

### Optimizing etcd

Etcd is the backend database for Kubernetes and for Rancher. It plays a very important role in Rancher performance.

The two main bottlenecks to [etcd performance](https://etcd.io/docs/v3.4/op-guide/performance/) are disk speed and network speed. It is thus recommended that etcd runs on dedicated nodes with SSDs with high IOPS and a fast network setup. For more information regarding etcd performance see [Slow etcd performance (performance testing and optimization)](https://www.suse.com/support/kb/doc/?id=000020100) and [Tuning etcd for Large Installations](../../../how-to-guides/advanced-user-guides/tune-etcd-for-large-installs). Information on disks can also be found in the [Installation Requirements](../../../pages-for-subheaders/installation-requirements#disks) page.

It's best to run etcd on exactly three nodes, as adding more nodes will reduce operation speed. This may be counter-intuitive to common scaling approaches, but it's due to etcd's [replication mechanisms](https://etcd.io/docs/v3.5/faq/#what-is-maximum-cluster-size).

Etcd performance will also be negatively affected by network latency between nodes as that will slow down network communication. Etcd nodes should be located together with Rancher nodes.
