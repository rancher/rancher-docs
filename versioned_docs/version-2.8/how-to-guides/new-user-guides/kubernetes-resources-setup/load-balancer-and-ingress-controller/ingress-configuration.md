---
title: Configuring an Ingress
description: Configuring an Ingress
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration"/>
</head>

:::note

For Kubernetes v1.21 and up, the NGINX Ingress controller no longer runs in hostNetwork by default. It instead uses hostPorts for port 80 and port 443, so you can configure the admission webhook to be accessible only through the ClusterIP. This ensures that the webhook is only accessible from within the cluster.

Because of this change to the controller, the default RKE1 behavior no longer sets `hostNetwork` to `true`. However, you must set `hostNetwork` to `true` for TCP- and UDP-based Services to work. To do so, [edit](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md#editing-clusters-with-yaml) the cluster's YAML and follow the steps in the [official RKE1 doccumention](https://rke.docs.rancher.com/config-options/add-ons/ingress-controllers#configuring-network-options).

:::

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

Add [Labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) and/or [Annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) to provide metadata for your Ingress controller.

For a list of annotations available for use, see the [Nginx Ingress Controller Documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).
