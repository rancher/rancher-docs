---
title: Configuring an Ingress
description: Configuring an Ingress
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration"/>
</head>

## Specify a hostname to use

If you use this option, Ingress routes requests for a hostname to the service or workload that you specify.

1. Specify a path of type `Prefix` and specify a path such as `/`.
1. Add a **Target Service**.
1. **Optional:** If you want to specify a workload or service when a request is sent to a particular hostname path, add a **Path** for the target. For example, if you want requests for `www.mysite.com/contact-us` to be sent to a different service than `www.mysite.com`, enter `/contact-us` in the **Path** field. Typically, the first rule that you create does not include a path.
1. Enter the **Port** number that each target operates on.

## Certificates

:::note

You must have an SSL certificate that Ingress can use to encrypt and decrypt communications. For more information, see [Adding SSL Certificates](../encrypt-http-communication.md).

:::

1. To create an Ingress controller, click the **Certificates** tab.
1. Click **Add Certificate**.
1. Select a **Certificate - Secret Name** from the drop-down list.
1. Enter the host using encrypted communication.
1. To add more hosts that use the same certificate, click **Add Hosts**.

## Labels and Annotations

Please refer to the Traefik documentation for the full list of Ingress NGINX annotations that are [supported](https://doc.traefik.io/traefik/reference/routing-configuration/kubernetes/ingress-nginx/#annotations-support) and [unsupported](https://doc.traefik.io/traefik/reference/routing-configuration/kubernetes/ingress-nginx/#unsupported-annotations) by Traefik's kubernetesIngressNginx provider.
