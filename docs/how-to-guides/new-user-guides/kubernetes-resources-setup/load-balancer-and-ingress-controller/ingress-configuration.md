---
title: Ingress Configuration
description: Ingress configuration
---

### NGINX Ingress controller changes in Kubernetes v1.21

For Kubernetes v1.21 and up, the NGINX Ingress controller no longer runs in hostNetwork. It instead uses hostPorts for port 80 and port 443. This was done so that you can configure the admission webhook to be accessible only through the ClusterIP. This makes the webhook inaccessible from outside the cluster.

Because of this change, the controller no longer has `hostNetwork` set to `true` by default. However, you must set `hostNetwork` to `true` on the controller for TCP- and UDP-based Services to work.

## Ingress Rule Configuration

- [Specify a hostname to use](#specify-a-hostname-to-use)
- [Use as the default backend](#use-as-the-default-backend)
- [Certificates](#certificates)
- [Labels and Annotations](#labels-and-annotations)

### Specify a hostname to use

If you use this option, Ingress routes requests for a hostname to the service or workload that you specify.

1. Enter the **Request Host** that your Ingress controller will handle request forwarding for. For example, `www.mysite.com`.
1. Add a **Target Service**.
1. **Optional:** If you want to specify a workload or service when a request is sent to a particular hostname path, add a **Path** for the target. For example, if you want requests for `www.mysite.com/contact-us` to be sent to a different service than `www.mysite.com`, enter `/contact-us` in the **Path**. The first rule that you create does not typically include a path.
1. Enter the **Port** number that each target operates on.

### Certificates

:::note

You must have an SSL certificate that Ingress can use to encrypt and decrypt communications. For more information, see [Adding SSL Certificates](../encrypt-http-communication.md).

:::

1. To create an Ingress controller, click the **Certificates** tab.
1. Click **Add Certificate**.
1. Select a **Certificate - Secret Name** from the drop-down list.
1. Enter the host using encrypted communication.
1. To add additional hosts that use the certificate, click **Add Hosts**.

### Labels and Annotations

Add [Labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) and/or [Annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) to provide metadata for your ingress.

For a list of annotations available for use, see the [Nginx Ingress Controller Documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).
