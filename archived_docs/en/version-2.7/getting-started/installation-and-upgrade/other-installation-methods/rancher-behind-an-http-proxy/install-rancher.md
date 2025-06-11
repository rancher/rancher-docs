---
title: 3. Install Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"/>
</head>

Now that you have a running RKE cluster, you can install Rancher in it. For security reasons all traffic to Rancher must be encrypted with TLS. For this tutorial you are going to automatically issue a self-signed certificate through [cert-manager](https://cert-manager.io/). In a real-world use-case you will likely use Let's Encrypt or provide your own certificate.

### Install the Helm CLI

<DeprecationHelm2 />

Install the [Helm](https://helm.sh/docs/intro/install/) CLI on a host where you have a kubeconfig to access your Kubernetes cluster:

```
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod +x get_helm.sh
sudo ./get_helm.sh
```

### Install cert-manager

Add the cert-manager Helm repository:

```
helm repo add jetstack https://charts.jetstack.io
```

Create a namespace for cert-manager:

```
kubectl create namespace cert-manager
```

Install the CustomResourceDefinitions of cert-manager:

```
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/<VERSION>/cert-manager.crds.yaml
```

And install it with Helm. Note that cert-manager also needs your proxy configured in case it needs to communicate with Let's Encrypt or other external certificate issuers:

:::note

To see options on how to customize the cert-manager install (including for cases where your cluster uses PodSecurityPolicies), see the [cert-manager docs](https://artifacthub.io/packages/helm/cert-manager/cert-manager#configuration).

:::

```
helm upgrade --install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --set http_proxy=http://${proxy_host} \
  --set https_proxy=http://${proxy_host} \
  --set no_proxy=127.0.0.0/8\\,10.0.0.0/8\\,cattle-system.svc\\,172.16.0.0/12\\,192.168.0.0/16\\,.svc\\,.cluster.local
```

Now you should wait until cert-manager is finished starting up:

```
kubectl rollout status deployment -n cert-manager cert-manager
kubectl rollout status deployment -n cert-manager cert-manager-webhook
```

### Install Rancher

Next you can install Rancher itself. First, add the Helm repository:

```
helm repo add rancher-latest https://releases.rancher.com/server-charts/latest
```

Create a namespace:

```
kubectl create namespace cattle-system
```

And install Rancher with Helm. Rancher also needs a proxy configuration so that it can communicate with external application catalogs or retrieve Kubernetes version update metadata:

```
helm upgrade --install rancher rancher-latest/rancher \
   --namespace cattle-system \
   --set hostname=rancher.example.com \
   --set proxy=http://${proxy_host} \
   --set noProxy=127.0.0.0/8\\,10.0.0.0/8\\,cattle-system.svc\\,172.16.0.0/12\\,192.168.0.0/16\\,.svc\\,.cluster.local
```

After waiting for the deployment to finish:

```
kubectl rollout status deployment -n cattle-system rancher
```

You can now navigate to `https://rancher.example.com` and start using Rancher.

:::caution

If you don't intend to send telemetry data, opt out [telemetry](../../../../faq/telemetry.md) during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully.

:::

### Additional Resources

These resources could be helpful when installing Rancher:

- [Rancher Helm chart options](../../installation-references/helm-chart-options.md)
- [Adding TLS secrets](../../resources/add-tls-secrets.md)
- [Troubleshooting Rancher Kubernetes Installations](../../install-upgrade-on-a-kubernetes-cluster/troubleshooting.md)
