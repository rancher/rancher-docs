---
title: '2. Install Kubernetes'
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"/>
</head>

Once the infrastructure is ready, you can continue with setting up a Kubernetes cluster to install Rancher in.

The steps to set up RKE, RKE2, or K3s are shown below.

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
<TabItem value="RKE">

First, you have to install Docker and setup the HTTP proxy on all three Linux nodes. For this perform the following steps on all three nodes.

Next configure apt to use this proxy when installing packages. If you are not using Ubuntu, you have to adapt this step accordingly:

```
cat <<'EOF' | sudo tee /etc/apt/apt.conf.d/proxy.conf > /dev/null
Acquire::http::Proxy "http://${proxy_host}/";
Acquire::https::Proxy "http://${proxy_host}/";
EOF
```

Now you can install Docker:

```
curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh
```

Then ensure that your current user is able to access the Docker daemon without sudo:

```
sudo usermod -aG docker YOUR_USERNAME
```

And configure the Docker daemon to use the proxy to pull images:

```
sudo mkdir -p /etc/systemd/system/docker.service.d
cat <<'EOF' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf > /dev/null
[Service]
Environment="HTTP_PROXY=http://${proxy_host}"
Environment="HTTPS_PROXY=http://${proxy_host}"
Environment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"
EOF
```

To apply the configuration, restart the Docker daemon:

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### Air-gapped proxy

You can now provision node driver clusters from an air-gapped cluster configured to use a proxy for outbound connections.

In addition to setting the default rules for a proxy server, you must also add the rules shown below to provision node driver clusters from a proxied Rancher environment.

You will configure your filepath according to your setup, e.g., `/etc/apt/apt.conf.d/proxy.conf`:

```
acl SSL_ports port 22
acl SSL_ports port 2376

acl Safe_ports port 22      # ssh
acl Safe_ports port 2376    # docker port
```

### Creating the RKE Cluster

You need several command line tools on the host where you have SSH access to the Linux nodes to create and interact with the cluster:

*  [RKE CLI binary](https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary)

```
sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64
sudo chmod +x /usr/local/bin/rke
```

* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

Next, create a YAML file that describes the RKE cluster. Ensure that the IP addresses of the nodes and the SSH username are correct. For more information on the cluster YAML, have a look at the [RKE documentation](https://rancher.com/docs/rke/latest/en/example-yamls/).

```yml
nodes:
  - address: 10.0.1.200
    user: ubuntu
    role: [controlplane,worker,etcd]
  - address: 10.0.1.201
    user: ubuntu
    role: [controlplane,worker,etcd]
  - address: 10.0.1.202
    user: ubuntu
    role: [controlplane,worker,etcd]

services:
  etcd:
    backup_config:
      interval_hours: 12
      retention: 6
```

After that, you can create the Kubernetes cluster by running:

```
rke up --config rancher-cluster.yaml
```

RKE creates a state file called `rancher-cluster.rkestate`, this is needed if you want to perform updates, modify your cluster configuration or restore it from a backup. It also creates a `kube_config_cluster.yaml` file, that you can use to connect to the remote Kubernetes cluster locally with tools like kubectl or Helm. Make sure to save all of these files in a secure location, for example by putting them into a version control system.

To have a look at your cluster run:

```
export KUBECONFIG=kube_config_cluster.yaml
kubectl cluster-info
kubectl get pods --all-namespaces
```

You can also verify that your external load balancer works, and the DNS entry is set up correctly. If you send a request to either, you should receive HTTP 404 response from the ingress controller:

```
$ curl 10.0.1.100
default backend - 404
$ curl rancher.example.com
default backend - 404
```

### Save Your Files

:::note Important:

The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.

:::

Save a copy of the following files in a secure location:

- `rancher-cluster.yml`: The RKE cluster configuration file.
- `kube_config_cluster.yml`: The [Kubeconfig file](https://rancher.com/docs/rke/latest/en/kubeconfig/) for the cluster, this file contains credentials for full access to the cluster.
- `rancher-cluster.rkestate`: The [Kubernetes Cluster State file](https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state), this file contains the current state of the cluster including the RKE configuration and the certificates.

:::note

The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.

:::

</TabItem>
</Tabs>

### Issues or errors?

See the [Troubleshooting](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md) page.

### [Next: Install Rancher](install-rancher.md)
