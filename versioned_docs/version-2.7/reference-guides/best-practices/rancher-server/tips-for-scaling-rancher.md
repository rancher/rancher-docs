---
title: Tips for Scaling Rancher
---

This guide aims to introduce the approaches that should be considered to scale Rancher setups, and associated challenges with doing so. As systems grow performance will naturally reduce, but there are steps we can take to minimize the load put on Rancher, as well as optimize Rancher's ability to handle these larger setups.

## General Tips on Optimizing Rancher's Performance
* It is advisable to keep Rancher up to date with patch releases. Performance improvements and bug fixes are made throughout the life of a minor release. You can review the release notes to help inform your own decisions on whether an upgrade is necessary but we recommend keeping yourself up to date in most cases.

* Performance will be negatively impacted by increased latency between Rancher's infrastructure and a downstream cluster's infrastructure (eg. geographic distance). If a user or organization requires clusters/nodes all over the world or spread across many regions, it is best to use multiple Rancher installations.

* Please always try to scale up gradually, monitoring and observing any change in behavior while doing do. It is usually easier to resolve performance problems as soon as they surface, and before other problems confuse symptoms. 

## Minimizing Load on the local cluster
The largest bottleneck when scaling Rancher is resource growth in the local Kubernetes cluster. The local cluster contains information for all downstream clusters. Many operations that apply to downstream clusters will create new objects in the local cluster and require computation from handlers running in the local cluster.

### Managing Your Object Counts
ETCD eventually encounters limitations to the number of a single Kubernetes resource type it can store. These exact numbers are not well documented. From internal observations we usually see performance issues once a single resource type's object count exceeds 60k, and often that type is Rolebindings.

Rolebindings are created in the local cluster as a side effect of many operations.

Considerations when attempting reduce rolebindings in the local cluster:
* Only add users to clusters and projects when necessary
* Remove clusters and projects when they are no longer needed
* Only use custom roles if necessary
* Use as few rules as possible in custom roles
* Consider whether adding a role to a user is redundant
* Consider that using less, but more powerful, clusters may be more efficient
* Experiment to see if creating new projects or creating new clusters manifests in fewer rolebindings for your specific use case.

### Using New Apps Over Legacy Apps
There are two app kubernetes resources that Rancher uses: apps.projects.cattle.io and apps.cattle.cattle.io. The legacy apps, apps.projects.cattle.io, were introduced first in the Cluster Manager and are now outdated. The new apps, apps.catalog.cattle.io, are found in the Cluster Explorer for their respective cluster. The new apps are preferrable because they live in the downstream cluster while the legacy apps live in the local cluster.

We recommend removing apps that appear in the Cluster Manager, replacing them with apps in the Cluster Explorer for their target cluster if necessary and creating any future apps in the cluster's Cluster Explorer only.

### Using the Authorized Cluster Endpoint (ACE)
There is an _Authorized Cluster Endpoint_ option for Rancher provisioned RKE1, RKE2, and K3s clusters. When enabled this adds a context to kubeconfigs generated for the cluster that uses a direct endpoint to the cluster and bypasses Rancher. However, it is not enough to only enable this option. The user of the Kubeconfig needs to use `kubectl use-context <ace context name>` in order to start using it.

Without using ACE, all kubeconfig requests first route through Rancher.

### Experimental: Option to Reduce Event Handler Executions
The bulk of Rancher's logic occurs on event handlers. These event handlers run on an object whenever the object is updated, and when Rancher is started. Additionally, they run every 15 hours when caches are synced. In scaled setups these scheduled runs come with huge performance costs because every handler is being run on every applicable object. However, this scheduled execution of handlers can be disabled using the CATTLE_SYNC_ONLY_CHANGED_OBJECTS environment variable. If resource allocation spikes are seen on an interval of about 15 hours it is possible this setting can help.

The value for the environment variable can be a comma separated list of the following options. The values refer to types of controllers (the structures that contain and run handlers) and their handlers. Adding the controller types to the variable will disable that set of controllers from running their handlers as part of cache resyncing.

* `mgmt` refers to management controllers which only run on one Rancher node.
* `user` refers to user controllers which run for every cluster. Some of these are ran on the same node as management controllers, while other run in the downstream cluster. This will option targets the former.
* `scaled` refers to scaled controllers which run on every Rancher node. This is not recommended to be set due to the critical functionality the scaled handlers are responsible for.

In short, if you notice CPU usage peaks every 15 hours, add the CATTLE_SYNC_ONLY_CHANGED_OBJECTS environment variable to your rancher deployment with the value `mgmt,user`.

## Optimizations Outside of Rancher
A large component of performance is the local cluster and how it was configured. This cluster can introduce a bottleneck before Rancher software ever runs. When Rancher nodes experience high resource usage, you can use the command "top" to identify whether it is Rancher or a Kubernetes component that is consuming the resource in excess.

### Keeping Kubernetes Versions Up to Date
Similar to Rancher versions, it is advisable to keep your kubernetes cluster up to date. This will ensure that your cluster contains any available performance enhancements or bug fixes.

### Optimizing ETCD
The two main bottlenecks to [ETCD performance](https://etcd.io/docs/v3.4/op-guide/performance/) are disk speed and network speed. Optimization to either should improve performance. For information regarding ETCD performance see [Slow etcd performance (performance testing and optimization)](https://www.suse.com/support/kb/doc/?id=000020100) and [Tuning etcd for Large Installations](https://docs.ranchermanager.rancher.io/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs). Information on disks can also be found [in our docs](https://docs.Ranchermanager.Rancher.io/v2.5/pages-for-subheaders/installation-requirements#disks).

Theoretically, the more nodes in an ETCD cluster the slower it will be due to replication requirements [source](https://etcd.io/docs/v3.3/faq). This may be counter-intuitive to common scaling approaches. It can also be inferred that ETCD performance will be inversely affected by distance between nodes as that will slow down network communication.
