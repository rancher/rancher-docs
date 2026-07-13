---
title: Troubleshooting Worker Nodes and Generic Components
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components"/>
</head>

This section applies to every node as it includes components that run on nodes with any role.

## Prerequisites

Since RKE2 and K3s utilize `containerd` as the container runtime, `crictl` serves as the primary tool for container management, replacing the Docker CLI. To allow `crictl` to communicate with `containerd`, you must configure your environment by exporting the following variables:

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

## Check if the Components are Running

There are two specific components launched on nodes with the `worker` role:

* `kubelet`
* `kube-proxy`

### RKE2

The `kubelet` runs natively as part of the `rke2-agent` (or `rke2-server`) systemd process, while `kube-proxy` runs as a Static Pod managed by `containerd`.

Check the status of the `kubelet` via the agent service:
```bash
systemctl status rke2-agent
```
:::note

If you are checking a controlplane node, use `systemctl status rke2-server` instead.

:::

Check the status of `kube-proxy` using `crictl`:
```bash
crictl ps --name kube-proxy
```

Example output:
```
CONTAINER           IMAGE                                                      CREATED             STATE               NAME                ATTEMPT             POD ID
26c7159abbcc        rancher/hardened-kubernetes:v1.28.8-rke2r1-build20240404   3 hours ago         Running             kube-proxy          0                   1a2b3c4d5e6f7
```

### K3s

Both `kubelet` and `kube-proxy` run as embedded processes inside the `k3s-agent` (or `k3s` server) systemd service. There are no separate containers for them.

Check their status by checking the K3s service:
```bash
systemctl status k3s-agent
```
:::note
If you are checking a controlplane node, use `systemctl status k3s` instead.
:::

## Component Logging

The logging of the components can contain information on what the problem could be.

### RKE2

```bash
# kubelet logs are part of the systemd service
journalctl -u rke2-agent -f | grep -i "kubelet"

# kube-proxy logs are retrieved from containerd
crictl logs $(crictl ps --name kube-proxy -q)
```

### K3s

```bash
# Both components log to the systemd service
journalctl -u k3s-agent -f | grep -iE "kubelet|kube-proxy"
```
