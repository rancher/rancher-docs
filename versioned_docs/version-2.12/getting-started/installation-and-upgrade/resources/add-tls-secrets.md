---
title: Adding TLS Secrets
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/add-tls-secrets"/>
</head>

Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the `tls-rancher-ingress` secret in the `cattle-system` namespace with the certificate and key.

Combine the server certificate followed by any intermediate certificate(s) needed into a file named `tls.crt`. Copy your certificate key into a file named `tls.key`.

For example, [acme.sh](https://acme.sh) provides server certificate and CA chains in `fullchain.cer` file.
This `fullchain.cer` should be renamed to `tls.crt` & certificate key file as `tls.key`.

Use `kubectl` with the `tls` secret type to create the secrets.

```
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

:::note

If you want to replace the certificate, you can delete the `tls-rancher-ingress` secret using `kubectl -n cattle-system delete secret tls-rancher-ingress` and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.

:::

## Using a Private CA Signed Certificate

If you are using a private CA, Rancher requires a copy of the private CA's root certificate or certificate chain, which the Rancher Agent uses to validate the connection to the server.

Create a file named `cacerts.pem` that only contains the root CA certificate or certificate chain from your private CA, and use `kubectl` to create the `tls-ca` secret in the `cattle-system` namespace.

```
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem
```

:::note

The configured `tls-ca` secret is retrieved when Rancher starts. On a running Rancher installation the updated CA will take effect after new Rancher pods are started.

:::

## Updating a Private CA Certificate

Follow the steps on [this page](update-rancher-certificate.md) to update the SSL certificate of the ingress in a Rancher [high availability Kubernetes installation](../install-upgrade-on-a-kubernetes-cluster/install-upgrade-on-a-kubernetes-cluster.md) or to switch from the default self-signed certificate to a custom certificate.
