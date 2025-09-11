---
title: Adding Kubernetes TLS Secrets
description: Read about how to populate the Kubernetes TLS secret for a Rancher installation
---

Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the `tls-rancher-ingress` secret in the `cattle-system` namespace with the certificate and key.

Combine the server certificate followed by any intermediate certificate(s) needed into a file named `tls.crt`. Copy your certificate key into a file named `tls.key`.

Use `kubectl` with the `tls` secret type to create the secrets.

```
kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.crt \
  --key=tls.key
```

> **Note:** If you want to replace the certificate, you can delete the `tls-rancher-ingress` secret using `kubectl -n cattle-system delete secret tls-rancher-ingress` and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.

### Using a Private CA Signed Certificate

If you are using a private CA, Rancher requires a copy of the private CA's root certificate or certificate chain, which the Rancher Agent uses to validate the connection to the server.

Create a file named `cacerts.pem` that only contains the root CA certificate or certificate chain from your private CA, and use `kubectl` to create the `tls-ca` secret in the `cattle-system` namespace.

>**Important:** Make sure the file is called `cacerts.pem` as Rancher uses that filename to configure the CA certificate.

```
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem
```
