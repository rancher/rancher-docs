---
title: '2. Install Kubernetes'
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"/>
</head>

Once the infrastructure is ready, you can continue with setting up a Kubernetes cluster to install Rancher in.

The steps to set up RKE2 or K3s are shown below.

For convenience, export the IP address and port of your proxy into an environment variable and set up the `HTTP_PROXY` variables for your current shell on every node:

:::caution

The `NO_PROXY` environment variable is not standardized, and the accepted format of the value can differ between applications. When configuring the `NO_PROXY` variable for Rancher, the value must adhere to the format expected by Golang. 

Specifically, the value should be a comma-delimited string which only contains IP addresses, CIDR notation, domain names, or special DNS labels (e.g. `*`). For a full description of the expected value format, refer to the [**upstream Golang documentation**](https://pkg.go.dev/golang.org/x/net/http/httpproxy#Config)

:::

```
export proxy_host="10.0.0.5:8888"
export HTTP_PROXY=http://${proxy_host}
export HTTPS_PROXY=http://${proxy_host}
export NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16
```

<Tabs>
<TabItem value="K3s">

First configure the HTTP proxy settings on the K3s systemd service, so that K3s's containerd can pull images through the proxy:

```
cat <<'EOF' | sudo tee /etc/default/k3s > /dev/null
HTTP_PROXY=http://${proxy_host}
HTTPS_PROXY=http://${proxy_host}
NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local
EOF
```

Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the [Rancher Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/).

To specify the K3s (Kubernetes) version, use the INSTALL_K3S_VERSION (e.g., `INSTALL_K3S_VERSION="v1.24.10+k3s1"`) environment variable when running the K3s installation script.

On the first node, create a new cluster:
```
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=<VERSION> K3S_TOKEN=<TOKEN> sh -s - server --cluster-init
```

And then join the other nodes:
```
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=<VERSION> K3S_TOKEN=<TOKEN> sh -s - server --server https://<SERVER>:6443
```

Where `<SERVER>` is the IP or valid DNS of the server and `<TOKEN>` is the node-token from the server found at `/var/lib/rancher/k3s/server/node-token`.

For more information on installing K3s see the [K3s installation docs](https://docs.k3s.io/installation).

To have a look at your cluster run:

```
kubectl cluster-info
kubectl get pods --all-namespaces
```

</TabItem>
<TabItem value="RKE2">

On every node, run the RKE2 installation script. Ensure that the RKE2 version you are installing is [supported by Rancher](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/).

```
curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.xx sh -
```

Then you have to configure the HTTP proxy settings on the RKE2 systemd service, so that RKE2's containerd can pull images through the proxy:

```
cat <<'EOF' | sudo tee /etc/default/rke2-server > /dev/null
HTTP_PROXY=http://${proxy_host}
HTTPS_PROXY=http://${proxy_host}
NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local
EOF
```

Next create the RKE2 configuration file on every node following the [RKE2 High Availability documentation](https://docs.rke2.io/install/ha).

After that start and enable the `rke2-server` service:

```
systemctl enable rke2-server.service
systemctl start rke2-server.service
```

For more information on installing RKE2 see the [RKE2 documentation](https://docs.rke2.io).

To have a look at your cluster run:

```
export KUBECONFIG=/etc/rancher/rke2/rke2.yaml
alias kubectl=/var/lib/rancher/rke2/bin/kubectl
kubectl cluster-info
kubectl get pods --all-namespaces
```

</TabItem>
</Tabs>

### Issues or errors?

See the [Troubleshooting](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md) page.

### [Next: Install Rancher](install-rancher.md)
