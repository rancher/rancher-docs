---
title: Tuning etcd for Large Installations
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs"/>
</head>

When Rancher is used to manage [a large infrastructure](../../getting-started/installation-and-upgrade/installation-requirements/installation-requirements.md) it is recommended to increase the default keyspace for etcd from the default 2 GB. The maximum setting is 8 GB and the host should have enough RAM to keep the entire dataset in memory. When increasing this value you should also increase the size of the host. The keyspace size can also be adjusted in smaller installations if you anticipate a high rate of change of pods during the garbage collection interval.

The etcd data set is automatically cleaned up on a five-minute interval by Kubernetes. There are situations, e.g. deployment thrashing, where enough events could be written to etcd and deleted before garbage collection occurs and cleans things up causing the keyspace to fill up. If you see `mvcc: database space exceeded` errors, in the etcd logs or Kubernetes API server logs, you should consider increasing the keyspace size. This can be accomplished by setting the [quota-backend-bytes](https://etcd.io/docs/v3.5/op-guide/maintenance/#space-quota) setting on the etcd servers.

## Example: This Snippet of the RKE2/K3s config.yaml file Increases the Keyspace Size to 5GB

```yaml
# RKE2/K3s config.yaml
---
etcd-arg:
  - "quota-backend-bytes=5368709120"
```

## Scaling etcd Disk Performance

You can follow the recommendations from [the etcd docs](https://etcd.io/docs/v3.5/tuning/#disk) on how to tune the disk priority on the host.

Additionally, to reduce IO contention on the disks for etcd, you can use a dedicated device for the data and wal directory. Based on etcd best practices, mirroring RAID configurations are unnecessary because etcd replicates data between the nodes in the cluster. You can use striping RAID configurations to increase available IOPS.

To implement this solution in an RKE2/K3s cluster, the `/var/lib/etcd/data` and `/var/lib/etcd/wal` directories will need to have disks mounted and formatted on the underlying host. In the `extra_args` directive of the `etcd` service, you must include the `wal_dir` directory. Without specifying the `wal_dir`, etcd process will try to manipulate the underlying `wal` mount with insufficient permissions.

```yaml
# RKE2/K3s config.yaml
---
etcd-arg:
  - "data-dir=/var/lib/etcd/data"
  - "wal-dir=/var/lib/etcd/wal"
```
