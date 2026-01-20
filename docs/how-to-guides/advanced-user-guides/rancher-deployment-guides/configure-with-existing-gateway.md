---
title: Using an External Gateway with Rancher
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/rancher-deployment-guides/configure-with-existing-gateway/"/>
</head>

## Using an External Gateway with Rancher

When using the Gateway API network exposure type, Rancher can create and manage its own Gateway resource. However, if you have an existing Gateway that you manage independently (for example, a shared Gateway used by multiple applications), you will need to create your own HTTPRoute resources to route traffic to Rancher.

This section covers how to create the required HTTPRoute resources manually when using an externally managed Gateway.

### Prerequisites

- An existing Gateway resource configured and operational in your cluster
- Knowledge of your Gateway's:
  - Name and namespace
  - Listener names (sectionName) for HTTP and/or HTTPS traffic
- Rancher installed with `networkExposure.type` set to something other than `gateway` (e.g., `none` or `ingress`)

### Cross-Namespace Gateway Requirements

If your Gateway is in a different namespace than Rancher (e.g., Gateway in `gateway-system`, Rancher in `cattle-system`), the Gateway must be configured to accept HTTPRoutes from the Rancher namespace. By default, Gateway API only allows routes from the same namespace as the Gateway.

The Gateway owner must configure `allowedRoutes` on the relevant listeners. There are two options:

**Option 1: Allow routes from all namespaces**

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: shared-gateway
  namespace: gateway-system
spec:
  gatewayClassName: example
  listeners:
    - name: https
      port: 443
      protocol: HTTPS
      allowedRoutes:
        namespaces:
          from: All
    - name: http
      port: 80
      protocol: HTTP
      allowedRoutes:
        namespaces:
          from: All
```

**Option 2: Allow routes from specific namespaces (more restrictive)**

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: shared-gateway
  namespace: gateway-system
spec:
  gatewayClassName: example
  listeners:
    - name: https
      port: 443
      protocol: HTTPS
      allowedRoutes:
        namespaces:
          from: Selector
          selector:
            matchLabels:
              shared-gateway-access: "true"
    - name: http
      port: 80
      protocol: HTTP
      allowedRoutes:
        namespaces:
          from: Selector
          selector:
            matchLabels:
              shared-gateway-access: "true"
```

When using the selector approach, ensure the Rancher namespace has the required label:

```bash
kubectl label namespace cattle-system shared-gateway-access=true
```

> **Note:** If the Gateway and Rancher are in the same namespace, no additional configuration is needed—the default `allowedRoutes` setting (`from: Same`) will permit the HTTPRoute attachment.

### Determining Your Rancher Service Values

Before creating HTTPRoute resources, identify the following values from your Rancher installation:

| Value | How to Determine | Example |
|-------|------------------|---------|
| **Release Name** | The name used in `helm install <release-name>` | `rancher` |
| **Namespace** | The namespace where Rancher is installed | `cattle-system` |
| **Hostname** | The `hostname` value from your Helm values | `rancher.example.com` |
| **TLS Mode** | The `tls` value from your Helm values | `ingress`, `external`, or `secret` |
| **Service HTTP Disabled** | The `service.disableHTTP` value | `true` or `false` |

The Rancher service name follows the pattern: `<release-name>-rancher` (or just `<release-name>` if the release name already contains "rancher").

### HTTPRoute Configuration

#### Primary HTTPRoute

Create an HTTPRoute to direct traffic from your Gateway to the Rancher service. The configuration depends on your TLS setup:

**When TLS terminates at the Gateway or within Kubernetes (`tls: ingress`, `tls: secret`, or `tls: letsEncrypt`):**

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: rancher
  namespace: cattle-system  # Must match Rancher's namespace
spec:
  parentRefs:
    - name: <your-gateway-name>
      namespace: <your-gateway-namespace>
      sectionName: <your-https-listener-name>  # Your Gateway's HTTPS listener
  hostnames:
    - <your-rancher-hostname>  # e.g., rancher.example.com
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: rancher  # Your Rancher service name
          port: 80       # Use 443 if service.disableHTTP=true
```

**When TLS terminates externally (`tls: external`):**

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: rancher
  namespace: cattle-system
spec:
  parentRefs:
    - name: <your-gateway-name>
      namespace: <your-gateway-namespace>
      sectionName: <your-http-listener-name>  # Your Gateway's HTTP listener
  hostnames:
    - <your-rancher-hostname>
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: rancher
          port: 80
```

#### HTTP to HTTPS Redirect Route (Optional)

If TLS terminates at or within Kubernetes (not externally), you may want to redirect HTTP traffic to HTTPS. Create an additional HTTPRoute:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: rancher-http-redirect
  namespace: cattle-system
spec:
  parentRefs:
    - name: <your-gateway-name>
      namespace: <your-gateway-namespace>
      sectionName: <your-http-listener-name>  # Your Gateway's HTTP listener
  hostnames:
    - <your-rancher-hostname>
  rules:
    - filters:
        - type: RequestRedirect
          requestRedirect:
            scheme: https
            statusCode: 301
```

### Using extraObjects

You can include these HTTPRoute resources directly in your Rancher Helm installation using the `extraObjects` value. This keeps all resources managed together:

```yaml
# values.yaml
hostname: rancher.example.com
tls: ingress

extraObjects:
  - apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: rancher
    spec:
      parentRefs:
        - name: my-shared-gateway
          namespace: gateway-system
          sectionName: https
      hostnames:
        - rancher.example.com
      rules:
        - matches:
            - path:
                type: PathPrefix
                value: /
          backendRefs:
            - name: rancher
              port: 80

  - apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: rancher-http-redirect
    spec:
      parentRefs:
        - name: my-shared-gateway
          namespace: gateway-system
          sectionName: http
      hostnames:
        - rancher.example.com
      rules:
        - filters:
            - type: RequestRedirect
              requestRedirect:
                scheme: https
                statusCode: 301
```

### Backend Port Selection

The port in `backendRefs` depends on your `service.disableHTTP` setting:

| `service.disableHTTP` | Backend Port |
|-----------------------|--------------|
| `false` (default)     | `80`         |
| `true`                | `443`        |

### Listener Selection Summary

| TLS Configuration | Primary Route Listener | Redirect Route |
|-------------------|------------------------|----------------|
| `tls: external`   | HTTP listener          | Not needed     |
| `tls: ingress`    | HTTPS listener         | HTTP listener (optional) |
| `tls: secret`     | HTTPS listener         | HTTP listener (optional) |
| `tls: letsEncrypt`| HTTPS listener         | HTTP listener (optional) |

### Troubleshooting

**HTTPRoute not being accepted:**
- Verify the Gateway name and namespace are correct
- Ensure the `sectionName` matches an existing listener on your Gateway
- Check that the listener allows routes from the Rancher namespace (see Gateway's `allowedRoutes` configuration)

**Connection refused or timeouts:**
- Confirm the Rancher service exists and has endpoints: `kubectl get endpoints rancher -n cattle-system`
- Verify the backend port matches your `service.disableHTTP` setting

**Certificate errors:**
- If using `tls: ingress` or `tls: secret`, ensure your Gateway's HTTPS listener has the appropriate certificate configured
- Verify the certificate covers your Rancher hostname
