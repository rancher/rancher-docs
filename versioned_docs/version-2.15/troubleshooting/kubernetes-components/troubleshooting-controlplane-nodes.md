---
title: Troubleshooting Controlplane Nodes
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"/>
</head>

This section applies to nodes with the `controlplane` role in RKE2 and K3s clusters.

## Prerequisites

As RKE2 and K3s rely on `containerd` as the container runtime, `crictl` replaces Docker for container management. Before proceeding with the troubleshooting commands, configure your environment by exporting the following variables:

### RKE2

```bash
export PATH=$PATH:/var/lib/rancher/rke2/bin/
export CRI_CONFIG_FILE=/var/lib/rancher/rke2/agent/etc/crictl.yaml
```

### K3s

```bash
export PATH=$PATH:/usr/local/bin
export CRI_CONFIG_FILE=/var/lib/rancher/k3s/agent/etc/crictl.yaml
```

## Check if the Controlplane Components are Running

**RKE2**: There are three specific containers launched on nodes with the `controlplane` role:

* `kube-apiserver`
* `kube-controller-manager`
* `kube-scheduler`

The containers should have state **Running**. You can check this using `crictl`:

```bash
crictl ps | grep -E 'kube-apiserver|kube-controller-manager|kube-scheduler'
```

Example output:
```
CONTAINER           IMAGE               CREATED             STATE               NAME                            ATTEMPT             POD ID              POD                                     NAMESPACE
deb8a96948594       138b1e685e151       11 days ago         Running             kube-controller-manager         0                   0996426295dc5       kube-controller-manager                 kube-system
f5abb4c7846e4       138b1e685e151       11 days ago         Running             kube-scheduler                  0                   80cd9f30af0be       kube-scheduler                          kube-system
ecd8a6991c22a       138b1e685e151       11 days ago         Running             kube-apiserver                  0                   58e042fabe78c       kube-apiserver                          kube-system
```

**K3s**: These components run as embedded processes within the K3s service. They do not run as separate containers, so their status is tied to the `k3s` systemd service:

```bash
systemctl status k3s
```

## Controlplane Logging

:::note

If you added multiple nodes with the `controlplane` role, both `kube-controller-manager` and `kube-scheduler` use a leader election process to determine the leader. Only the current leader will log the performed actions. See [Kubernetes leader election](../other-troubleshooting-tips/kubernetes-resources.md#kubernetes-leader-election) how to retrieve the current leader.

:::

The logs can contain information on what the problem could be.

**RKE2**:
```bash
crictl logs $(crictl ps --name kube-apiserver -q)
crictl logs $(crictl ps --name kube-controller-manager -q)
crictl logs $(crictl ps --name kube-scheduler -q)
```

**K3s**:
```bash
journalctl -u k3s | grep -i "kube-apiserver"
journalctl -u k3s | grep -i "kube-controller-manager"
journalctl -u k3s | grep -i "kube-scheduler"
```

## RKE2/K3s Server Logging

If Rancher provisions an RKE2 or K3s cluster that can't communicate with Rancher, you can run this command on a server node in the downstream cluster to get the server logs:

**RKE2**:
```bash
journalctl -u rke2-server -f
```

**K3s**:
```bash
journalctl -u k3s -f
```