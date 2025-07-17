---
title: Rancher Helm Chart Options
keywords: [rancher helm chart, rancher helm options, rancher helm chart options, helm chart rancher, helm options rancher, helm chart options rancher]
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/helm-chart-options"/>
</head>

This page is a configuration reference for the Rancher Helm chart.

For help choosing a Helm chart version, refer to [this page.](../../../getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md)

For information on enabling experimental features, refer to [this page.](../../../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md)

## Common Options

| Option                    | Default Value | Description                                                                        |
| ------------------------- | ------------- | ---------------------------------------------------------------------------------- |
| `bootstrapPassword`       | " "           | `string` - Set the [bootstrap password](#bootstrap-password) for the first admin user. After logging in, the admin should reset their password. A randomly generated bootstrap password is used if this value is not set.
| `hostname`                | " "           | `string` - the Fully Qualified Domain Name for your Rancher Server                 |
| `ingress.tls.source`      | "rancher"     | `string` - Where to get the cert for the ingress. - "rancher, letsEncrypt, secret" |
| `letsEncrypt.email`       | " "           | `string` - Your email address                                                      |
| `letsEncrypt.environment` | "production"  | `string` - Valid options: "staging, production"                                    |
| `privateCA`               | false         | `bool` - Set to true if your cert is signed by a private CA                        |

<br/>

## Advanced Options

| Option                         | Default Value                                         | Description                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `additionalTrustedCAs`         | false                                                 | `bool` - See [Additional Trusted CAs](#additional-trusted-cas)                                                                                    |
| `addLocal`                     | "true"                                                | `string` - Have Rancher detect and import the "local" (upstream) Rancher server cluster.  _Note: This option is no longer available in v2.5.0. Consider using the `restrictedAdmin` option to prevent users from modifying the local cluster._              |
| `agentTLSMode`                 | ""                                                    | `string` - either `system-store` or `strict`. See [Agent TLS Enforcement](./tls-settings.md#agent-tls-enforcement) |
| `antiAffinity`                 | "preferred"                                           | `string` - AntiAffinity rule for Rancher pods - "preferred, required"                                                                             |
| `auditLog.destination`         | "sidecar"                                             | `string` - Stream to sidecar container console or hostPath volume - "sidecar, hostPath"                                                           |
| `auditLog.hostPath`            | "/var/log/rancher/audit"                              | `string` - log file destination on host (only applies when `auditLog.destination` is set to `hostPath`)                                           |
| `auditLog.level`               | 0                                                     | `int` - set the [API Audit Log](../../../how-to-guides/advanced-user-guides/enable-api-audit-log.md) level. 0 is off. [0-3]                                   |
| `auditLog.maxAge`              | 1                                                     | `int` - maximum number of days to retain old audit log files (only applies when `auditLog.destination` is set to `hostPath`)                      |
| `auditLog.maxBackup`           | 1                                                     | `int` - maximum number of audit log files to retain (only applies when `auditLog.destination` is set to `hostPath`)                               |
| `auditLog.maxSize`             | 100                                                   | `int` - maximum size in megabytes of the audit log file before it gets rotated (only applies when `auditLog.destination` is set to `hostPath`)    |
| `auditLog.image.repository`    | "registry.suse.com/bci/bci-micro"                     | `string` - Location for the image used to collect audit logs.                                                                                     |
| `auditLog.image.tag`           | "15.4.14.3"                                           | `string` - Tag for the image used to collect audit logs.                                                                                          |
| `auditLog.image.pullPolicy`    | "IfNotPresent"                                        | `string` - Override imagePullPolicy for auditLog images - "Always", "Never", "IfNotPresent".                                                   |
| `busyboxImage`                 | ""                                             | `string` - Image location for busybox image used to collect audit logs. _Note: This option is deprecated use `auditLog.image.repository` to control auditing sidecar image._        |
| `certmanager.version`          | ""                                                    | `string` - set cert-manager compatibility                                                                                                         |
| `debug`                        | false                                                 | `bool` - set debug flag on rancher server                                                                                                         |
| `extraEnv`                     | []                                                    | `list` - set additional environment variables for Rancher                                                          |
| `imagePullSecrets`             | []                                                    | `list` - list of names of Secret resource containing private registry credentials                                                                 |
| `ingress.configurationSnippet` | ""                                                    | `string` - additional Nginx configuration. Can be used for proxy configuration.   |
| `ingress.extraAnnotations`     | {}                                                    | `map` - additional annotations to customize the ingress                                                                                           |
|  `ingress.enabled` |  true   |    When set to false, Helm will not install a Rancher ingress. Set the option to false to deploy your own ingress.   |
| `letsEncrypt.ingress.class`    | ""                                                    | `string` - optional ingress class for the cert-manager acmesolver ingress that responds to the Let's Encrypt ACME challenges. Options: traefik, nginx.       |                      |
| `noProxy`                      | "127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local,cattle-system.svc" | `string` - comma separated list of hostnames or ip address not to use the proxy                              |                                     |
| `proxy`                        | ""                                                    | `string` - HTTP[S] proxy server for Rancher                                                                                                       |
| `rancherImage`                 | "rancher/rancher"                                     | `string` - rancher image source                                                                                                                   |
| `rancherImagePullPolicy`       | "IfNotPresent"                                        | `string` - Override imagePullPolicy for rancher server images - "Always", "Never", "IfNotPresent"                                                 |
| `rancherImageTag`              | same as chart version                                 | `string` - rancher/rancher image tag                                                                                                              |
| `replicas`                     | 3                                                     | `int` - Number of Rancher server replicas. Setting to -1 will dynamically choose 1, 2, or 3 based on the number of available nodes in the cluster.                                                                                                        |
| `resources`                    | {}                                                    | `map` - rancher pod resource requests & limits                                                                                                    |
| `systemDefaultRegistry`        | ""                                                    | `string` - private registry to be used for all system container images, e.g., http://registry.example.com/                   |
| `tls`                          | "ingress"                                             | `string` - See [External TLS Termination](#external-tls-termination) for details. - "ingress, external"                                           |
| `useBundledSystemChart`        | `false`                                               | `bool` - select to use the system-charts packaged with Rancher server. This option is used for air gapped installations.  |

### Bootstrap Password

You can [set a specific bootstrap password](../resources/bootstrap-password.md) during Rancher installation. If you don't set a specific bootstrap password, Rancher randomly generates a password for the first admin account.

When you log in for the first time, use the bootstrap password you set to log in. If you did not set a bootstrap password, the Rancher UI shows commands that can be used to [retrieve the bootstrap password](../resources/bootstrap-password.md#retrieving-the-bootstrap-password). Run those commands and log in to the account. After you log in for the first time, you are asked to reset the admin password.

### API Audit Log

Enabling the [API Audit Log](../../../how-to-guides/advanced-user-guides/enable-api-audit-log.md).

You can collect this log as you would any container log. Enable [logging](../../../integrations-in-rancher/logging/logging.md) for the `System` Project on the Rancher server cluster.

```plain
--set auditLog.level=1
```

By default enabling Audit Logging will create a sidecar container in the Rancher pod. This container (`rancher-audit-log`) will stream the log to `stdout`. You can collect this log as you would any container log. When using the sidecar as the audit log destination, the `hostPath`, `maxAge`, `maxBackups`, and `maxSize` options do not apply. It's advised to use your OS or Docker daemon's log rotation features to control disk space use. Enable [logging](../../../integrations-in-rancher/logging/logging.md) for the Rancher server cluster or System Project.

Set the `auditLog.destination` to `hostPath` to forward logs to volume shared with the host system instead of streaming to a sidecar container. When setting the destination to `hostPath` you may want to adjust the other auditLog parameters for log rotation.

### Setting Extra Environment Variables

You can set extra environment variables for Rancher server using `extraEnv`. This list is passed to the Rancher deployment in its YAML format. It is embedded under `env` for the Rancher container. Refer to the Kubernetes documentation for setting container environment variables, `extraEnv` can use any of the keys referenced in [Define Environment Variables for a Container](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/#define-an-environment-variable-for-a-container).

Consider an example that uses the `name` and `value` keys:

```plain
--set 'extraEnv[0].name=CATTLE_TLS_MIN_VERSION'
--set 'extraEnv[0].value=1.0'
```

If passing sensitive data as the value for an environment variable, such as proxy authentication credentials, it is strongly recommended that a secret reference is used. This will prevent sensitive data from being exposed in Helm or the Rancher deployment.

Consider an example that uses the `name`, `valueFrom.secretKeyRef.name`, and `valueFrom.secretKeyRef.key` keys. See example in [HTTP Proxy](#http-proxy)

### TLS Settings

When you install Rancher inside of a Kubernetes cluster, TLS is offloaded at the cluster's ingress controller. The possible TLS settings depend on the used ingress controller.

See [TLS settings](tls-settings.md) for more information and options.

### Import `local` Cluster

By default Rancher server will detect and import the `local` cluster it's running on. User with access to the `local` cluster will essentially have "root" access to all the clusters managed by Rancher server.

:::caution

If you turn addLocal off, most Rancher v2.5 features won't work, including the EKS provisioner.

:::

If this is a concern in your environment you can set this option to "false" on your initial install.

This option is only effective on the initial Rancher install. See [Issue 16522](https://github.com/rancher/rancher/issues/16522) for more information.

```plain
--set addLocal="false"
```

### Customizing your Ingress

To customize or use a different ingress with Rancher server you can set your own Ingress annotations.

Example on setting a custom certificate issuer:

```plain
--set ingress.extraAnnotations.'cert-manager\.io/cluster-issuer'=issuer-name
```

Example on setting a static proxy header with `ingress.configurationSnippet`. This value is parsed like a template so variables can be used.

```plain
--set ingress.configurationSnippet='more_set_input_headers X-Forwarded-Host {{ .Values.hostname }};'
```

### HTTP Proxy

Rancher requires internet access for some functionality (Helm charts). Use `proxy` to set your proxy server or use `extraEnv` to set the `HTTPS_PROXY` environment variable to point to your proxy server.

Add your IP exceptions to the `noProxy` chart value as a comma separated list. Make sure you add the following values:
- Pod cluster IP range (default: `10.42.0.0/16`).
- Service cluster IP range (default: `10.43.0.0/16`).
- Internal cluster domains (default: `.svc,.cluster.local`).
- Any worker cluster `controlplane` nodes.
Rancher supports CIDR notation ranges in this list.

When not including sensitive data, the `proxy` or `extraEnv` chart options can be used. When using `extraEnv` the `noProxy` Helm option is ignored. Therefore, the `NO_PROXY` environment variable must also be set with `extraEnv`.

The following is an example of setting proxy using the `proxy` chart option:

```plain
--set proxy="http://<proxy_url:proxy_port>/"
```

Example of setting proxy using the `extraEnv` chart option:
```plain
--set extraEnv[1].name=HTTPS_PROXY
--set extraEnv[1].value="http://<proxy_url>:<proxy_port>/"
--set extraEnv[2].name=NO_PROXY
--set extraEnv[2].value="127.0.0.0/8\,10.0.0.0/8\,172.16.0.0/12\,192.168.0.0/16\,.svc\,.cluster.local"
```

When including sensitive data, such as proxy authentication credentials, use the `extraEnv` option with `valueFrom.secretRef` to prevent sensitive data from being exposed in Helm or the Rancher deployment.

The following is an example of using `extraEnv` to configure proxy. This example secret would contain the value `"http://<username>:<password>@<proxy_url>:<proxy_port>/"` in the secret's `"https-proxy-url"` key:
```plain
--set extraEnv[1].name=HTTPS_PROXY
--set extraEnv[1].valueFrom.secretKeyRef.name=secret-name
--set extraEnv[1].valueFrom.secretKeyRef.key=https-proxy-url
--set extraEnv[2].name=NO_PROXY
--set extraEnv[2].value="127.0.0.0/8\,10.0.0.0/8\,172.16.0.0/12\,192.168.0.0/16\,.svc\,.cluster.local"
```

To learn more about how to configure environment variables, refer to [Define Environment Variables for a Container](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/#define-an-environment-variable-for-a-container).

### Additional Trusted CAs

If you have private registries, catalogs or a proxy that intercepts certificates, you may need to add more trusted CAs to Rancher.

```plain
--set additionalTrustedCAs=true
```

Once the Rancher deployment is created, copy your CA certs in pem format into a file named `ca-additional.pem` and use `kubectl` to create the `tls-ca-additional` secret in the `cattle-system` namespace.

```plain
kubectl -n cattle-system create secret generic tls-ca-additional --from-file=ca-additional.pem=./ca-additional.pem
```

### Private Registry and Air Gap Installs

For details on installing Rancher with a private registry, see the [air gap installation docs.](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md)

## External TLS Termination

We recommend configuring your load balancer as a Layer 4 balancer, forwarding plain 80/tcp and 443/tcp to the Rancher Management cluster nodes. The Ingress Controller on the cluster will redirect http traffic on port 80 to https on port 443.

You may terminate the SSL/TLS on a L7 load balancer external to the Rancher cluster (ingress). Use the `--set tls=external` option and point your load balancer at port http 80 on all of the Rancher cluster nodes. This will expose the Rancher interface on http port 80. Be aware that clients that are allowed to connect directly to the Rancher cluster will not be encrypted. If you choose to do this we recommend that you restrict direct access at the network level to just your load balancer.

:::note

If you are using a Private CA signed certificate (or if `agent-tls-mode` is set to `strict`), add `--set privateCA=true` and see [Adding TLS Secrets - Using a Private CA Signed Certificate](../../../getting-started/installation-and-upgrade/resources/add-tls-secrets.md) to add the CA cert for Rancher. 

:::

Your load balancer must support long lived websocket connections and will need to insert proxy headers so Rancher can route links correctly.

### Configuring Ingress for External TLS when Using NGINX v0.22

In NGINX v0.22, the behavior of NGINX has [changed](https://github.com/kubernetes/ingress-nginx/blob/06efac9f0b6f8f84b553f58ccecf79dc42c75cc6/Changelog.md) regarding forwarding headers and external TLS termination. Therefore, in the scenario that you are using external TLS termination configuration with NGINX v0.22, you must enable the `use-forwarded-headers` option for ingress:

For RKE installations, edit the `cluster.yml` to add the following settings.
```yaml
ingress:
  provider: nginx
  options:
    use-forwarded-headers: 'true'
```

For RKE2 installations, you can create a custom `rke2-ingress-nginx-config.yaml` file at `/var/lib/rancher/rke2/server/manifests/rke2-ingress-nginx-config.yaml` containing this required setting to enable using forwarded headers with external TLS termination. Without this required setting applied, the external LB will continuously respond with redirect loops it receives from the ingress controller. (This can be created before or after rancher is installed, rke2 server agent will notice this addition and automatically apply it.)

```yaml
---
apiVersion: helm.cattle.io/v1
kind: HelmChartConfig
metadata:
  name: rke2-ingress-nginx
  namespace: kube-system
spec:
  valuesContent: |-
    controller:
      config:
        use-forwarded-headers: "true"
```

### Required Headers

- `Host`
- `X-Forwarded-Proto`
- `X-Forwarded-Port`
- `X-Forwarded-For`

### Recommended Timeouts

- Read Timeout: `1800 seconds`
- Write Timeout: `1800 seconds`
- Connect Timeout: `30 seconds`

### Health Checks

Rancher will respond `200` to health checks on the `/healthz` endpoint.

### Example NGINX config

This NGINX configuration is tested on NGINX 1.14.

:::caution

This NGINX configuration is only an example and may not suit your environment. For complete documentation, see [NGINX Load Balancing - HTTP Load Balancing](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/).

:::

- Replace `IP_NODE1`, `IP_NODE2` and `IP_NODE3` with the IP addresses of the nodes in your cluster.
- Replace both occurrences of `FQDN` to the DNS name for Rancher.
- Replace `/certs/fullchain.pem` and `/certs/privkey.pem` to the location of the server certificate and the server certificate key respectively.

```
worker_processes 4;
worker_rlimit_nofile 40000;

events {
    worker_connections 8192;
}

http {
    upstream rancher {
        server IP_NODE_1:80;
        server IP_NODE_2:80;
        server IP_NODE_3:80;
    }

    map $http_upgrade $connection_upgrade {
        default Upgrade;
        ''      close;
    }

    server {
        listen 443 ssl http2;
        server_name FQDN;
        ssl_certificate /certs/fullchain.pem;
        ssl_certificate_key /certs/privkey.pem;

        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://rancher;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
            # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.
            proxy_read_timeout 900s;
            proxy_buffering off;
        }
    }

    server {
        listen 80;
        server_name FQDN;
        return 301 https://$server_name$request_uri;
    }
}
```
