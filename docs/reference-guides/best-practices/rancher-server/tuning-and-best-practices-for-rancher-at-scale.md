---
title: Tuning and Best Practices for Rancher at Scale
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale"/>
:docs/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale.md
</head>


This guide describes best practices and tuning approaches to scale Rancher setups, and associated challenges with doing so. As systems grow performance will naturally reduce, but there are steps that can be taken to minimize the load put on Rancher, as well as optimize Rancher's ability to manage larger infrastructures.

## General Guidelines on Optimizing Rancher's Performance
* Keep Rancher up to date with patch releases. Performance improvements and bug fixes are made continuously, and the latest release incorporates the largest set ofperformance related development, experience and feedback from many users.

* Please always try to scale up gradually, monitoring and observing any change in behavior while doing do. It is usually easier to resolve performance problems as soon as they surface, and before other problems confuse symptoms.

* Reduce network latency between Rancher's cluster and downstream clusters to the extent possible. Note that latency is, among other factors, a function of geographic distance - if a user or organization requires clusters/nodes all over the world or spread across many regions, consider multiple Rancher installations.

## Minimizing Load on the local cluster
One typical bottleneck when scaling up Rancher is resource growth in the local Kubernetes cluster. The local cluster contains information for all downstream clusters. Many operations that apply to downstream clusters will create new objects in the local cluster and require computation from handlers running in the local cluster.

### Managing Your Object Counts
etcd is the backing database for Kubernetes and for Rancher, and is known to eventually encounters limitations to the number of a single Kubernetes resource type it can store. Exact limits vary and depend on a number of factors, however experience indicates performance issues frequently arise once a single resource type's object count exceeds 60 thousand, and often that type is `RoleBindings`.

This is typical in Rancher, as `RoleBindings` are created in the local cluster as a side effect of many operations.

It is recommended to attempt reducing `RoleBindings` in the local cluster in the following ways:
* Limit the use of the [Restricted Admin](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#restricted-admin) role, preferring others wherever applicable
* If [external authentication](../../../pages-for-subheaders/authentication-config) is configured, use groups to assign roles preferably
* Only add users to clusters and projects when necessary
* Remove clusters and projects when they are no longer needed
* Only use custom roles if necessary
* Use as few rules as possible in custom roles
* Consider whether adding a role to a user is redundant
* Consider that using less, but more powerful, clusters may be more efficient
* Experiment to see if creating new projects or creating new clusters manifests in fewer `RoleBindings` for your specific use case.

### Using New Apps Over Legacy Apps
There are two app Kubernetes resources that Rancher uses: `apps.projects.cattle.io` and `apps.cattle.cattle.io`. Legacy apps, `apps.projects.cattle.io`, were first introduced with the former UI (Cluster Manager) and are now outdated. New apps, `apps.catalog.cattle.io`, are found in the current UI (Cluster Explorer) for their respective cluster. New apps are preferable because their data resides in downstream clusters, freeing up resources in the local cluster.

It is recommended to remove any remaining legacy apps that appear in the Cluster Manager, replacing them with apps in the Cluster Explorer for their target cluster if necessary and creating any future apps in the cluster's Cluster Explorer only.

### Using the Authorized Cluster Endpoint (ACE)
An [Authorized Cluster Endpoint](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters#4-authorized-cluster-endpoint) option exist to access the Kubernetes API of Rancher provisioned RKE1, RKE2, and K3s clusters. When enabled this adds a context to generated kubeconfig files generated for the cluster that uses a direct endpoint to the cluster, thereby bypassing Rancher. That reduces load on Rancher for use cases where unmediated API access is acceptable or preferable.

Note that, in order for `kubeconfig` to take advantage of ACE, users need to issue the `kubectl use-context <ace context name>` command in order to start using it.

### Experimental: Option to Reduce Event Handler Executions
The bulk of Rancher's logic occurs on event handlers. These event handlers run on an object whenever the object is updated, and when Rancher is started. Additionally, they run every 15 hours when caches are synced. In scaled setups these scheduled runs come with huge performance costs because every handler is being run on every applicable object. However, this scheduled execution of handlers can be disabled using the CATTLE_SYNC_ONLY_CHANGED_OBJECTS environment variable. If resource allocation spikes are seen on an interval of about 15 hours it is possible this setting can help.

The value for the environment variable can be a comma separated list of the following options. The values refer to types of controllers (the structures that contain and run handlers) and their handlers. Adding the controller types to the variable will disable that set of controllers from running their handlers as part of cache resyncing.

* `mgmt` refers to management controllers which only run on one Rancher node.
* `user` refers to user controllers which run for every cluster. Some of these are ran on the same node as management controllers, while other run in the downstream cluster. This will option targets the former.
* `scaled` refers to scaled controllers which run on every Rancher node. This is not recommended to be set due to the critical functionality the scaled handlers are responsible for.

In short, if you notice CPU usage peaks every 15 hours, add the CATTLE_SYNC_ONLY_CHANGED_OBJECTS environment variable to your rancher deployment with the value `mgmt,user`.

## Optimizations Outside of Rancher
Important influencing factors in Rancher performance are its underlying cluster's own performance and its configuration. The local cluster, if misconfigured, can indeed introduce a bottleneck Rancher software has no chance to resolve.

### Manage local cluster nodes directly, use RKE2 as the Kubernetes distribution of choice
As Rancher can be particularly demanding on the local cluster, especially in large scale scenarios, it is recommended to have full control of its configuration and its nodes. For example, when Rancher nodes experience high resource usage, standard Linux troubleshooting techniques and tools are recommended to identify whether Rancher, Kubernetes components, or OS components are the root cause of the excess resource consumption.

Consequently, although managed Kubernetes services make it easier to deploy and run Kubernetes clusters, they are discouraged for Rancher's local cluster in high scale scenarios, because they typically limit control on configuration and insights on individual nodes and services.

When choosing a Kubernetes distribution, it is recommended to use RKE2 for all Rancher large scale use cases.

### Keeping Kubernetes Versions Up to Date
Similar to Rancher versions, it is recommended to keep the local Kubernetes cluster up to date. That will ensure that your cluster contains any available performance enhancements and bug fixes.

### Optimizing etcd
etcd is the backing database for Kubernetes and for Rancher, therefore it plays a very important role in Rancher performance.

The two main bottlenecks to [etcd performance](https://etcd.io/docs/v3.4/op-guide/performance/) are disk speed and network speed. It is thus recommended that etcd runs on dedicated nodes with SSDs with high IOPS and a fast network setup. For more information regarding etcd performance see [Slow etcd performance (performance testing and optimization)](https://www.suse.com/support/kb/doc/?id=000020100) and [Tuning etcd for Large Installations](../../../how-to-guides/advanced-user-guides/tune-etcd-for-large-installs). Information on disks can also be found in the [Installation Requirements](../../../pages-for-subheaders/installation-requirements#disks) page.

As adding more nodes in an etcd cluster will make operations slower, for best performance it is recommended to run etcd on exactly 3 nodes. This may be counter-intuitive to common scaling approaches, and it is due to etcd's [replication mechanisms](https://etcd.io/docs/v3.5/faq/#what-is-maximum-cluster-size).

etcd performance will also be negatively affected by network latency between nodes as that will slow down network communication, so it is recommended that etcd nodes are all colocated together with Rancher nodes.
