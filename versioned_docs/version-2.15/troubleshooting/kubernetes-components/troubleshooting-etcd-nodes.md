---
title: Troubleshooting etcd Nodes
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"/>
</head>

This section contains commands and tips for troubleshooting nodes with the `etcd` role in RKE2 and K3s clusters.

## Prerequisites

As RKE2 and K3s rely on `containerd` as the container runtime, `crictl` replaces Docker for container management. Before proceeding with the troubleshooting commands, configure your environment by exporting the following variables:

### RKE2

```bash
export PATH=$PATH:/var/lib/rancher/rke2/bin/
export CRI_CONFIG_FILE=/var/lib/rancher/rke2/agent/etc/crictl.yaml
etcdcontainer=$(crictl ps --name etcd --quiet)
```

### K3s

> ### ⚠️ **Warning**
> K3s does not include `etcdctl` in the system PATH. If you need to perform etcd troubleshooting on a K3s cluster, you may need to install it or locate it within the K3s data directory.

```bash
export PATH=$PATH:/usr/local/bin
export CRI_CONFIG_FILE=/var/lib/rancher/k3s/agent/etc/crictl.yaml
```


## Checking if the etcd Container is Running

**RKE2**: The container for etcd should be in the **Running**  state.

```bash
crictl ps --name etcd
```

Example output:
```
CONTAINER           IMAGE               CREATED             STATE               NAME                ATTEMPT             POD ID              POD                 NAMESPACE
f1e289d202ed0       11ad16872a9cf       58 minutes ago      Running             etcd                0                   7b56aab8204ea       etcd-cluster1     kube-system
```

**K3s**: Etcd runs as an embedded process in the K3s service. Check the service status:

```bash
systemctl status k3s
```

## etcd Logging

The logs can contain information on what the problem could be.

**RKE2**:
```bash
crictl logs $etcdcontainer
```

**K3s**:
```bash
journalctl -u k3s | grep -i etcd
```
| Log | Explanation |
|-----|------------------|
| `health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused` | A connection to the address shown on port 2380 cannot be established. Check if the etcd container is running on the host with the address shown. |
| `xxx is starting a new election at term x` | The etcd cluster has lost its quorum and is trying to establish a new leader. This can happen when the majority of the nodes running etcd go down/unreachable. |
| `connection error: desc = "transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout"; Reconnecting to {0.0.0.0:2379 0  <nil>}` | The host firewall is preventing network communication. |
| `rafthttp: request cluster ID mismatch` | The node with the etcd instance logging `rafthttp: request cluster ID mismatch` is trying to join a cluster that has already been formed with another peer. The node should be removed from the cluster, and re-added. |
| `rafthttp: failed to find member` | The cluster state (`/var/lib/etcd`) contains wrong information to join the cluster. The node should be removed from the cluster, the state directory should be cleaned and the node should be re-added.

## etcd Cluster and Connectivity Checks

The address where etcd is listening depends on the address configuration of the host etcd is running on. If an internal address is configured for the host etcd is running on, the endpoint for `etcdctl` needs to be specified explicitly. If any of the commands respond with `Error:  context deadline exceeded`, the etcd instance is unhealthy (either quorum is lost or the instance is not correctly joined in the cluster)

### Check etcd Members on all Nodes

Output should contain all the nodes with the `etcd` role and the output should be identical on all nodes.

**RKE2**:
Run the command inside the etcd container.

```bash
crictl exec $etcdcontainer etcdctl member list \
  --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt \
  --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key \
  --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl member list \
  --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt \
  --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key \
  --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

Example output:
```
1c424074df86e854, started, cluster-node1-f289ac71, https://IP:2380, https://IP:2379, false
45c68c44c5a792ff, started, cluster-node2-67e3cf6f, https://IP:2380, https://IP:2379, false
7c584f77c5180258, started, cluster-node3-e976bc00, https://IP:2380, https://IP:2379, false
```

### Check Endpoint Status

The values for `RAFT TERM` should be equal and `RAFT INDEX` should be not be too far apart from each other.

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl endpoint status --write-out table --endpoints=$(crictl exec $etcdcontainer etcdctl member list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | cut -d, -f5 | sed -e 's/ //g' | paste -sd ',') --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl endpoint status --write-out table --endpoints=$(etcdctl member list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | cut -d, -f5 | sed -e 's/ //g' | paste -sd ',') --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

Example output:
```
+-----------------+------------------+---------+---------+-----------+-----------+------------+
| ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | RAFT TERM | RAFT INDEX |
+-----------------+------------------+---------+---------+-----------+-----------+------------+
| https://IP:2379 | 333ef673fc4add56 |  3.6.7  |   24 MB |     false |        72 |      66887 |
| https://IP:2379 | 5feed52d940ce4cf |  3.6.7  |   24 MB |      true |        72 |      66887 |
| https://IP:2379 | db6b3bdb559a848d |  3.6.7  |   25 MB |     false |        72 |      66887 |
+-----------------+------------------+---------+---------+-----------+-----------+------------+
```

### Check Endpoint Health

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl endpoint health --endpoints=$(crictl exec $etcdcontainer etcdctl member list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | cut -d, -f5 | sed -e 's/ //g' | paste -sd ',') --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl endpoint health --endpoints=$(etcdctl member list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | cut -d, -f5 | sed -e 's/ //g' | paste -sd ',') --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

Example output:
```
https://IP:2379 is healthy: successfully committed proposal: took = 2.113189ms
https://IP:2379 is healthy: successfully committed proposal: took = 2.649963ms
https://IP:2379 is healthy: successfully committed proposal: took = 2.451201ms
```
### Check Connectivity on etcd Ports

> In modern versions of Kubernetes, the etcd database (versions 3.5 and newer) introduced significant architectural changes regarding network traffic handling. Previously, etcd permitted standard HTTP REST requests on its primary client port (`2379`). However, to enhance performance and security, etcd 3.5+ strictly enforces the gRPC protocol on this port.<br />
If you attempt to use standard HTTP tools like `curl` to test connectivity on port `2379`, the etcd server will automatically terminate the connection or return an error. This behavior often leads administrators to misinterpret the result as a closed port or a node failure.

Since standard HTTP clients can no longer probe the primary etcd ports, the transport layer must be utilized for network troubleshooting. Using `openssl s_client` instead of `curl` bypasses the gRPC application requirement, allowing the raw TCP and TLS handshake to be tested directly.

These script isolate the network and security infrastructure from the database application. A successful `Verify return code: 0 (ok)` explicitly confirms four critical infrastructure components:

* **Network Path:** Routing is functional, and firewalls permit traffic on TCP port `2379` or `2380`.
* **Process Availability:** The etcd service is running and actively listening on the designated port.
* **Certificate Validity:** The TLS certificates are active, correctly formatted, and have not expired.
* **Mutual Authentication (mTLS):** The node successfully authenticates against the cluster's specific Certificate Authority (CA).

**How these tests differ from the `etcdctl endpoint health` test**:

If `etcdctl endpoint health` test is failing, run these Connectivity Ports test scripts. If the scripts succeed, your network and certificates are intact, and the issue is likely confined to the etcd database itself. If these scripts fail, the issue is related to a firewall/network restriction, or certificate expiration.

#### Port TCP/2379

**RKE2**:
```bash
for endpoint in $(crictl exec $etcdcontainer etcdctl member list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | cut -d, -f5); do
  echo "Validating connection to ${endpoint} (Client)";
  echo | openssl s_client -connect ${endpoint#https://} \
    -CAfile /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt \
    -cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt \
    -key /var/lib/rancher/rke2/server/tls/etcd/server-client.key 2>/dev/null | grep -E 'Verify return code' || echo "Connection Failed/Timeout"
done
```

**K3s**:
```bash
for endpoint in $(etcdctl member list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | cut -d, -f5); do
  echo "Validating connection to ${endpoint} (Client)";
  echo | openssl s_client -connect ${endpoint#https://} \
    -CAfile /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt \
    -cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt \
    -key /var/lib/rancher/k3s/server/tls/etcd/server-client.key 2>/dev/null | grep -E 'Verify return code' || echo "Connection Failed/Timeout"
done
```

Example output:
```
Validating connection to https://IP:2379/health (Client)
Verify return code: 0 (ok)
Validating connection to https://IP:2379/health (Client)
Verify return code: 0 (ok)
Validating connection to https://IP:2379/health (Client)
Verify return code: 0 (ok)
```

#### Port TCP/2380

**RKE2**:
```bash
for endpoint in $(crictl exec $etcdcontainer etcdctl member list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | cut -d, -f4); do
  echo "Validating connection to ${endpoint} (Peer)";
  echo | openssl s_client -connect ${endpoint#https://} \
    -CAfile /var/lib/rancher/rke2/server/tls/etcd/peer-ca.crt \
    -cert /var/lib/rancher/rke2/server/tls/etcd/peer-server-client.crt \
    -key /var/lib/rancher/rke2/server/tls/etcd/peer-server-client.key 2>/dev/null | grep -E 'Verify return code' || echo "Connection Failed/Timeout"
done
```

**K3s**:
```bash
for endpoint in $(etcdctl member list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | cut -d, -f4); do
  echo "Validating connection to ${endpoint} (Peer)";
  echo | openssl s_client -connect ${endpoint#https://} \
    -CAfile /var/lib/rancher/k3s/server/tls/etcd/peer-ca.crt \
    -cert /var/lib/rancher/k3s/server/tls/etcd/peer-server-client.crt \
    -key /var/lib/rancher/k3s/server/tls/etcd/peer-server-client.key 2>/dev/null | grep -E 'Verify return code' || echo "Connection Failed/Timeout"
done
```

Example output:
```
Validating connection to https://IP:2380/version (Peer)
Verify return code: 0 (ok)
Validating connection to https://IP:2380/version (Peer)
Verify return code: 0 (ok)
Validating connection to https://IP:2380/version (Peer)
Verify return code: 0 (ok)
```

## etcd Alarms

etcd will trigger alarms, for instance when it runs out of space.

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl alarm list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl alarm list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

Example output when NOSPACE alarm is triggered:
```
memberID:x alarm:NOSPACE
memberID:x alarm:NOSPACE
memberID:x alarm:NOSPACE
```

## etcd Space Errors

Related error messages are `etcdserver: mvcc: database space exceeded` or `applying raft message exceeded backend quota`. Alarm `NOSPACE` will be triggered.

Resolutions:

- [Compact the Keyspace](#compact-the-keyspace)
- [Defrag All etcd Members](#defrag-all-etcd-members)
- [Check Endpoint Status](#check-endpoint-status)
- [Disarm Alarm](#disarm-alarm)

### Compact the Keyspace

**RKE2**:
```bash
rev=$(crictl exec $etcdcontainer etcdctl endpoint status --write-out json --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | egrep -o '"revision":[0-9]*' | egrep -o '[0-9]*' | head -1)
crictl exec $etcdcontainer etcdctl compact "$rev" --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
rev=$(etcdctl endpoint status --write-out json --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | egrep -o '"revision":[0-9]*' | egrep -o '[0-9]*' | head -1)
etcdctl compact "$rev" --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

Example output:
```
compacted revision xxx
```

### Defrag All etcd Members

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl defrag --endpoints=$(crictl exec $etcdcontainer etcdctl member list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | cut -d, -f5 | sed -e 's/ //g' | paste -sd ',') --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl defrag --endpoints=$(etcdctl member list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | cut -d, -f5 | sed -e 's/ //g' | paste -sd ',') --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

Example output:
```
Finished defragmenting etcd member[https://IP:2379]. took xx.xxxxxxms
Finished defragmenting etcd member[https://IP:2379]. took xx.xxxxxxms
Finished defragmenting etcd member[https://IP:2379]. took xx.xxxxxxms
```

### Disarm Alarm

After verifying that the DB size went down after compaction and defragmenting, the alarm needs to be disarmed for etcd to allow writes again.

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl alarm list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
crictl exec $etcdcontainer etcdctl alarm disarm --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
crictl exec $etcdcontainer etcdctl alarm list --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl alarm list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
etcdctl alarm disarm --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
etcdctl alarm list --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

## Configure Log Level

:::note

You can no longer dynamically change the log level in etcd v3.5 or later.

:::

### etcd v3.5 And Later

To configure the log level for etcd, edit the cluster configuration YAML:

```
services:
  etcd:
    extra_args:
      log-level: "debug"
```

After modifying the configuration, restart the service (`systemctl restart rke2-server` or `systemctl restart k3s`) if you are configuring a stand-alone cluster.

## etcd Content

If you want to investigate the contents of your etcd, you can either watch streaming events or you can query etcd directly, see below for examples.

### Watch Streaming Events

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl watch --prefix /registry --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl watch --prefix /registry --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

If you only want to see the affected keys (and not the binary data), you can append `| grep -a ^/registry` to the command to filter for keys only.

### Query etcd Directly

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl get /registry --prefix=true --keys-only --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt
```

**K3s**:
```bash
etcdctl get /registry --prefix=true --keys-only --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt
```

You can process the data to get a summary of count per key, using the command below:

**RKE2**:
```bash
crictl exec $etcdcontainer etcdctl get /registry --prefix=true --keys-only --cert /var/lib/rancher/rke2/server/tls/etcd/server-client.crt --key /var/lib/rancher/rke2/server/tls/etcd/server-client.key --cacert /var/lib/rancher/rke2/server/tls/etcd/server-ca.crt | grep -v ^$ | awk -F'/' '{ if ($3 ~ /cattle.io/) {h[$3"/"$4]++} else { h[$3]++ }} END { for(k in h) print h[k], k }' | sort -nr
```

**K3s**:
```bash
etcdctl get /registry --prefix=true --keys-only --cert /var/lib/rancher/k3s/server/tls/etcd/server-client.crt --key /var/lib/rancher/k3s/server/tls/etcd/server-client.key --cacert /var/lib/rancher/k3s/server/tls/etcd/server-ca.crt | grep -v ^$ | awk -F'/' '{ if ($3 ~ /cattle.io/) {h[$3"/"$4]++} else { h[$3]++ }} END { for(k in h) print h[k], k }' | sort -nr
```

## Replacing Unhealthy etcd Nodes

When a node in your etcd cluster becomes unhealthy, the recommended approach is to fix or remove the failed or unhealthy node before adding a new etcd node to the cluster.
