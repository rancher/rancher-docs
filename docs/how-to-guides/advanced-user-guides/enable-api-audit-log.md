---
title: Enabling the API Audit Log to Record System Events
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-api-audit-log"/>
</head>

You can enable the API audit log to record the sequence of system events initiated by individual users. You can know what happened, when it happened, who initiated it, and what cluster it affected. When you enable this feature, all requests to the Rancher API and all responses from it are written to a log.

You can enable API Auditing during Rancher installation or upgrade.

## Enabling API Audit Log

The Audit Log is enabled and configured by passing environment variables to the Rancher server container. See the following to enable on your installation.

- [Docker Install](../../reference-guides/single-node-rancher-in-docker/advanced-options.md#api-audit-log)

- [Kubernetes Install](../../getting-started/installation-and-upgrade/installation-references/helm-chart-options.md#api-audit-log)

## API Audit Log Options

The usage below defines rules about what the audit log should record and what data it should include:

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AUDIT_LOG_ENABLED` | `false` - Disable audit log (default setting).<br/>`true` - Enable audit log |
| `AUDIT_LEVEL` | `0` - Log request and response metadata (default setting).<br/>`1` - Log request and response headers <br/>`2` - Log request body .<br/>`3` - Log response body. Each log level is cumulative : each subsequent level logs the previous level data. Each log transaction for a request/response pair uses the same `auditID` value.<br/><br/>See [Audit Level Logging](#audit-log-levels) for a table that displays what each setting logs. |
| `AUDIT_LOG_PATH`                      | Log path for Rancher Server API. Default path is `/var/log/auditlog/rancher-api-audit.log`. You can mount the log directory to host. <br/><br/>Usage Example: `AUDIT_LOG_PATH=/my/custom/path/`<br/>                                                                                                                                                                           |
| `AUDIT_LOG_MAXAGE`                    | Defined the maximum number of days to retain old audit log files. Default is 10 days.                                                                                                                                                                                                                                                                                          |
| `AUDIT_LOG_MAXBACKUP`                 | Defines the maximum number of audit log files to retain. Default is 10.                                                                                                                                                                                                                                                                                                        |
| `AUDIT_LOG_MAXSIZE`                   | Defines the maximum size in megabytes of the audit log file before it gets rotated. Default size is 100M.                                                                                                                                                                                                                                                                      |

<br/>

### Audit Log Levels

The following table displays what parts of API transactions are logged for each [`AUDIT_LEVEL`](#api-audit-log-options) setting.


| `AUDIT_LEVEL` Setting | Metadata | Request  Headers | Response Headers | Request Body | Response Body |
|--------------------------------|----------------|---------------------------|-----------------------------|----------------------|-----------------------|
| 0 | ✓ | 
| 1 | ✓ | ✓ | ✓
| 2 | ✓ | ✓ | ✓ | ✓
| 3 | ✓ | ✓ | ✓ | ✓ | ✓

## Audit Log policies

Audit log policies allow end users to configure redactions using `AuditPolicy` cluster-scoped CRs in addition to the [defaults](#default-redactions--filters).

All configured audit log policies are additive.

Redaction policies for headers use a regex engine to redact headers, while a JsonPath engine is used to redact request/response headers.

The structure of an audit policy CR is as follows:

```yaml
apiVersion: auditlog.cattle.io/v1
kind: AuditPolicy
spec:
  enabled : true # true/false
  # list of API request filters
  filters:
    - action: allow # allow/deny
    	# would allow logs sent to "/foo/some/endpoint" but not "/foo" or "/foobar".
      requestURI: "/foo/.*"
  # additionalRedactions allows configuration of redactions on headers using `jsonpath` expressions
  additionalRedactions:
    # redacts headers based on regex expressions
    - headers:
      - "Cache.*"
      # paths redacts information from request and response bodies based on json path expressions
      paths: 
      - "$.gitCommit"
  verbosity:
    level : 0 # matches the levels in the above audit log table
    # request allows fine-grained control over which request data 
    # gets included. This overrides the behaviour of the generic verbosity.level
    request:
      headers : true # true/false
      body : true # true/false
    # response allows fine-grained control over which response data 
    # gets included. This overrides the behaviour of the generic verbosity.level
    response:
      headers : true # true/false  
      body: true # true/false
```

### Examples

The following example shows only logging requests containing `login` in the request path to the audit log path:

```yaml
apiVersion: auditlog.cattle.io/v1
kind: AuditPolicy
metadata:
  name: filters
spec:
  filters:
    - action: deny
      requestUri: ".*"
    - action: allow
      requestUri: ".*login.*"
```


The following example shows how to redact specific fields containing `gitCommint` in request/response bodies:

```yaml
apiVersion: auditlog.cattle.io/v1
kind: AuditPolicy
metadata:
  name: redactions
spec:
  additionalRedactions:
    - paths:
      - "$.gitCommit"
```

### Default redactions & filters

The audit log controller comes with default built-in redactions for common-sensitive information.

#### Redacted headers

Generic headers:
- `Cookie`
- `Set-Cookie`
- `X-Api-Set-Cookie-Header`
- `Authorization`
- `X-Api-Tunnel-Params`
- `X-Api-Tunnel-Token`
- `X-Api-Auth-Header`
- `X-Amz-Security-Token`


#### Redacted body fields

Generic body fields:

- `credentials`
- `applicationSecret`
- `oauthCredential`
- `serviceAccountCredential`
- `spKey`
- `spCert`
- `certificate`
- `privateKey`
- `secretsEncryptionConfig`
- `manifestUrl`
- `insecureWindowsNodeCommand`
- `insecureNodeCommand`
- `insecureCommand`
- `command`
- `nodeCommand`
- `windowsNodeCommand`
- `clientRandom`

Generic body regex redactor:
- `".*([pP]assword|[Kk]ube[Cc]onfig|[Tt]oken).*"`

#### Cluster Driver

By default any API request with fields tied to cluster drivers will have any non `public*` or `optional*` fields redacted by the audit log controller.

#### Redacted URIs

Any endpoint containing `secrets`,or `configmaps` will have relevant fields stripped from both request and response bodies.
In addition, any endpoint containing `/v3/imports/*`, will have redacted information in its URI.


## Viewing API Audit Logs

### Docker Install

Share the `AUDIT_LOG_PATH` directory (Default: `/var/log/auditlog`) with the host system. The log can be parsed by standard CLI tools or forwarded on to a log collection tool like Fluentd, Filebeat, Logstash, etc.

### Kubernetes Install

Enabling the API Audit Log with the Helm chart install will create a `rancher-audit-log` sidecar container in the Rancher pod. This container will stream the log to standard output (stdout). You can view the log as you would any container log.

The `rancher-audit-log` container is part of the `rancher` pod in the `cattle-system` namespace.

#### CLI

```bash
kubectl -n cattle-system logs -f rancher-84d886bdbb-s4s69 rancher-audit-log
```

#### Shipping the Audit Log

You can enable Rancher's built in log collection and shipping for the cluster to ship the audit and other services logs to a supported collection endpoint. See [Rancher Tools - Logging](../../integrations-in-rancher/logging/logging.md) for details.

## Audit Log Samples

After you enable auditing, each API request or response is logged by Rancher in the form of JSON. Each of the following code samples provide examples of how to identify each API transaction.

### Metadata Level

If you set your `AUDIT_LEVEL` to `0`, Rancher logs the metadata header for every API request, but neither the body nor the request/response headers. The metadata provides basic information about the API transaction, such as the transaction's ID, who initiated the transaction, the time it occurred, etc.

```json
{
    "auditID": "40bd4e40-875b-4020-933e-4c4f4c4db366",
    "requestURI": "/v3/schemas",
    "user": {
        "name": "user-6j5s6",
        "group": [
            "system:authenticated",
            "system:cattle:authenticated"
        ],
        "extra": {
            "principalid": [
                "local://user-6j5s6"
            ],
            "requesthost": [
                "localhost:8443"
            ],
            "requesttokenid": [
                "token-zs42h"
            ],
            "username": [
                "admin"
            ]
        }
    },
    "method": "GET",
    "remoteAddr": "127.0.0.1:58652",
    "responseCode": 200,
    "requestTimestamp": "2025-06-30T11:13:25-04:00",
    "responseTimestamp": "2025-06-30T11:13:25-04:00"
}
```

### Metadata and headers level

If you set your `AUDIT_LEVEL` to `1`, Rancher logs the metadata, and request/response headers for every API request.

```json
{
    "auditID": "f8c83dc6-a080-4e2e-ab43-552bddf01716",
    "requestURI": "/v1/apps.deployments?page=1&pagesize=100&sort=metadata.name&filter=metadata.namespace!=p-npsl5&filter=metadata.namespace!=p-nzp6c&filter=metadata.namespace!=cattle-fleet-clusters-system&filter=metadata.namespace!=cattle-fleet-system&filter=metadata.namespace!=cattle-global-data&filter=metadata.namespace!=cattle-impersonation-system&filter=metadata.namespace!=cattle-provisioning-capi-system&filter=metadata.namespace!=cattle-system&filter=metadata.namespace!=cattle-ui-plugin-system&filter=metadata.namespace!=cluster-fleet-local-local-1a3d67d0a899&filter=metadata.namespace!=fleet-default&filter=metadata.namespace!=fleet-local&filter=metadata.namespace!=kube-node-lease&filter=metadata.namespace!=kube-public&filter=metadata.namespace!=kube-system&exclude=metadata.managedFields",
    "user": {
        "name": "user-6j5s6",
        "group": [
            "system:authenticated",
            "system:cattle:authenticated"
        ],
        "extra": {
            "principalid": [
                "local://user-6j5s6"
            ],
            "requesthost": [
                "localhost:8443"
            ],
            "requesttokenid": [
                "token-zs42h"
            ],
            "username": [
                "admin"
            ]
        }
    },
    "method": "GET",
    "remoteAddr": "127.0.0.1:58833",
    "responseCode": 200,
    "requestTimestamp": "2025-06-30T11:17:04-04:00",
    "responseTimestamp": "2025-06-30T11:17:04-04:00",
    "requestHeader": {
        "Accept": [
            "application/json"
        ],
        "Accept-Encoding": [
            "gzip, deflate, br, zstd"
        ],
        "Accept-Language": [
            "en-US,en;q=0.5"
        ],
        "Connection": [
            "keep-alive"
        ],
        "Cookie": [
            "[redacted]"
        ],
        "Referer": [
            "https://localhost:8443/dashboard/c/local/explorer/apps.deployment"
        ],
        "Sec-Fetch-Dest": [
            "empty"
        ],
        "Sec-Fetch-Mode": [
            "cors"
        ],
        "Sec-Fetch-Site": [
            "same-origin"
        ],
        "User-Agent": [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:140.0) Gecko/20100101 Firefox/140.0"
        ],
        "X-Api-Csrf": [
            "fccc690cab7b0c169b3fc6527edadef3"
        ]
    },
    "responseHeader": {
        "Cache-Control": [
            "no-cache, no-store, must-revalidate"
        ],
        "Content-Encoding": [
            "gzip"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Expires": [
            "Wed 24 Feb 1982 18:42:00 GMT"
        ],
        "X-Api-Cattle-Auth": [
            "true"
        ],
        "X-Api-Schemas": [
            "https://localhost:8443/v1/schemas"
        ],
        "X-Content-Type-Options": [
            "nosniff"
        ]
    }
}
```

### Metadata, headers and  Request Body Level

If you set your `AUDIT_LEVEL` to `2`, Rancher logs the metadata, request/response headers and request body for every API request.

The code sample below depicts an API request, with both its metadata, headers and request body.

```json
{
    "auditID": "d1088a09-2a13-4450-970e-0d44bd2c49ee",
    "requestURI": "/v3/projects",
    "user": {
        "name": "user-6j5s6",
        "group": [
            "system:authenticated",
            "system:cattle:authenticated"
        ],
        "extra": {
            "principalid": [
                "local://user-6j5s6"
            ],
            "requesthost": [
                "localhost:8443"
            ],
            "requesttokenid": [
                "token-zs42h"
            ],
            "username": [
                "admin"
            ]
        }
    },
    "method": "POST",
    "remoteAddr": "127.0.0.1:49966",
    "responseCode": 201,
    "requestTimestamp": "2025-06-30T12:32:13-04:00",
    "responseTimestamp": "2025-06-30T12:32:13-04:00",
    "requestHeader": {
        "Accept": [
            "application/json"
        ],
        "Accept-Encoding": [
            "gzip, deflate, br, zstd"
        ],
        "Accept-Language": [
            "en-US,en;q=0.5"
        ],
        "Connection": [
            "keep-alive"
        ],
        "Content-Length": [
            "214"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Cookie": [
            "[redacted]"
        ],
        "Impersonate-Extra-Principalid": [
            "local://user-6j5s6"
        ],
        "Impersonate-Extra-Requesthost": [
            "localhost:8443"
        ],
        "Impersonate-Extra-Requesttokenid": [
            "token-zs42h"
        ],
        "Impersonate-Extra-Username": [
            "admin"
        ],
        "Impersonate-Group": [
            "system:authenticated",
            "system:cattle:authenticated"
        ],
        "Impersonate-User": [
            "user-6j5s6"
        ],
        "Origin": [
            "https://localhost:8443"
        ],
        "Priority": [
            "u=0"
        ],
        "Referer": [
            "https://localhost:8443/dashboard/c/local/explorer/management.cattle.io.project/create"
        ],
        "Sec-Fetch-Dest": [
            "empty"
        ],
        "Sec-Fetch-Mode": [
            "cors"
        ],
        "Sec-Fetch-Site": [
            "same-origin"
        ],
        "User-Agent": [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:140.0) Gecko/20100101 Firefox/140.0"
        ],
        "X-Api-Csrf": [
            "fccc690cab7b0c169b3fc6527edadef3"
        ]
    },
    "responseHeader": {
        "Cache-Control": [
            "no-cache, no-store, must-revalidate"
        ],
        "Content-Encoding": [
            "gzip"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Expires": [
            "Wed 24 Feb 1982 18:42:00 GMT"
        ],
        "X-Api-Cattle-Auth": [
            "true"
        ],
        "X-Api-Schemas": [
            "https://localhost:8443/v3/project/schemas"
        ],
        "X-Content-Type-Options": [
            "nosniff"
        ]
    },
    "requestBody": {
        "annotations": {},
        "clusterId": "local",
        "containerDefaultResourceLimit": {},
        "creatorId": "local://user-6j5s6",
        "labels": {},
        "name": "example-project",
        "namespaceDefaultResourceQuota": {},
        "resourceQuota": {},
        "type": "project"
    }
}
```

### Metadata, Headers, Request Body and Response Body Level

If you set your `AUDIT_LEVEL` to `3`, Rancher logs the metadata, request/response headers, request body and request reponse.

The code sample below depicts an example of an API request with that information logged.

```json
{
    "auditID": "a9549a5b-4351-4bd5-adcd-12f7ec667a6b",
    "requestURI": "/v3/projects",
    "user": {
        "name": "user-6j5s6",
        "group": [
            "system:authenticated",
            "system:cattle:authenticated"
        ],
        "extra": {
            "principalid": [
                "local://user-6j5s6"
            ],
            "requesthost": [
                "localhost:8443"
            ],
            "requesttokenid": [
                "token-zs42h"
            ],
            "username": [
                "admin"
            ]
        }
    },
    "method": "POST",
    "remoteAddr": "127.0.0.1:50454",
    "responseCode": 201,
    "requestTimestamp": "2025-06-30T12:42:24-04:00",
    "responseTimestamp": "2025-06-30T12:42:24-04:00",
    "requestHeader": {
        "Accept": [
            "application/json"
        ],
        "Accept-Encoding": [
            "gzip, deflate, br, zstd"
        ],
        "Accept-Language": [
            "en-US,en;q=0.5"
        ],
        "Connection": [
            "keep-alive"
        ],
        "Content-Length": [
            "214"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Cookie": [
            "[redacted]"
        ],
        "Impersonate-Extra-Principalid": [
            "local://user-6j5s6"
        ],
        "Impersonate-Extra-Requesthost": [
            "localhost:8443"
        ],
        "Impersonate-Extra-Requesttokenid": [
            "token-zs42h"
        ],
        "Impersonate-Extra-Username": [
            "admin"
        ],
        "Impersonate-Group": [
            "system:authenticated",
            "system:cattle:authenticated"
        ],
        "Impersonate-User": [
            "user-6j5s6"
        ],
        "Origin": [
            "https://localhost:8443"
        ],
        "Priority": [
            "u=0"
        ],
        "Referer": [
            "https://localhost:8443/dashboard/c/local/explorer/management.cattle.io.project/create"
        ],
        "Sec-Fetch-Dest": [
            "empty"
        ],
        "Sec-Fetch-Mode": [
            "cors"
        ],
        "Sec-Fetch-Site": [
            "same-origin"
        ],
        "User-Agent": [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:140.0) Gecko/20100101 Firefox/140.0"
        ],
        "X-Api-Csrf": [
            "fccc690cab7b0c169b3fc6527edadef3"
        ]
    },
    "responseHeader": {
        "Cache-Control": [
            "no-cache, no-store, must-revalidate"
        ],
        "Content-Encoding": [
            "gzip"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Expires": [
            "Wed 24 Feb 1982 18:42:00 GMT"
        ],
        "X-Api-Cattle-Auth": [
            "true"
        ],
        "X-Api-Schemas": [
            "https://localhost:8443/v3/project/schemas"
        ],
        "X-Content-Type-Options": [
            "nosniff"
        ]
    },
    "requestBody": {
        "annotations": {},
        "clusterId": "local",
        "containerDefaultResourceLimit": {},
        "creatorId": "local://user-6j5s6",
        "labels": {},
        "name": "example-project",
        "namespaceDefaultResourceQuota": {},
        "resourceQuota": {},
        "type": "project"
    },
    "responseBody": {
        "actions": {
            "exportYaml": "https://localhost:8443/v3/projects/local:p-qt6tq?action=exportYaml"
        },
        "annotations": {
            "authz.management.cattle.io/creator-role-bindings": "{\"required\":[\"project-owner\"]}"
        },
        "backingNamespace": "local-p-qt6tq",
        "baseType": "project",
        "clusterId": "local",
        "containerDefaultResourceLimit": {
            "type": "/v3/schemas/containerResourceLimit"
        },
        "created": "2025-06-30T16:42:24Z",
        "createdTS": 1751301744000,
        "creatorId": "user-6j5s6",
        "id": "local:p-qt6tq",
        "labels": {
            "cattle.io/creator": "norman"
        },
        "links": {
            "basicAuths": "https://localhost:8443/v3/projects/local:p-qt6tq/basicauths",
            "certificates": "https://localhost:8443/v3/projects/local:p-qt6tq/certificates",
            "configMaps": "https://localhost:8443/v3/projects/local:p-qt6tq/configmaps",
            "cronJobs": "https://localhost:8443/v3/projects/local:p-qt6tq/cronjobs",
            "daemonSets": "https://localhost:8443/v3/projects/local:p-qt6tq/daemonsets",
            "deployments": "https://localhost:8443/v3/projects/local:p-qt6tq/deployments",
            "dnsRecords": "https://localhost:8443/v3/projects/local:p-qt6tq/dnsrecords",
            "dockerCredentials": "https://localhost:8443/v3/projects/local:p-qt6tq/dockercredentials",
            "horizontalPodAutoscalers": "https://localhost:8443/v3/projects/local:p-qt6tq/horizontalpodautoscalers",
            "ingresses": "https://localhost:8443/v3/projects/local:p-qt6tq/ingresses",
            "jobs": "https://localhost:8443/v3/projects/local:p-qt6tq/jobs",
            "namespacedBasicAuths": "https://localhost:8443/v3/projects/local:p-qt6tq/namespacedbasicauths",
            "namespacedCertificates": "https://localhost:8443/v3/projects/local:p-qt6tq/namespacedcertificates",
            "namespacedDockerCredentials": "https://localhost:8443/v3/projects/local:p-qt6tq/namespaceddockercredentials",
            "namespacedSecrets": "https://localhost:8443/v3/projects/local:p-qt6tq/namespacedsecrets",
            "namespacedServiceAccountTokens": "[redacted]",
            "namespacedSshAuths": "https://localhost:8443/v3/projects/local:p-qt6tq/namespacedsshauths",
            "persistentVolumeClaims": "https://localhost:8443/v3/projects/local:p-qt6tq/persistentvolumeclaims",
            "pods": "https://localhost:8443/v3/projects/local:p-qt6tq/pods",
            "projectNetworkPolicies": "https://localhost:8443/v3/projects/local:p-qt6tq/projectnetworkpolicies",
            "projectRoleTemplateBindings": "https://localhost:8443/v3/projects/local:p-qt6tq/projectroletemplatebindings",
            "remove": "https://localhost:8443/v3/projects/local:p-qt6tq",
            "replicaSets": "https://localhost:8443/v3/projects/local:p-qt6tq/replicasets",
            "replicationControllers": "https://localhost:8443/v3/projects/local:p-qt6tq/replicationcontrollers",
            "secrets": "https://localhost:8443/v3/projects/local:p-qt6tq/secrets",
            "self": "https://localhost:8443/v3/projects/local:p-qt6tq",
            "serviceAccountTokens": "[redacted]",
            "services": "https://localhost:8443/v3/projects/local:p-qt6tq/services",
            "sshAuths": "https://localhost:8443/v3/projects/local:p-qt6tq/sshauths",
            "statefulSets": "https://localhost:8443/v3/projects/local:p-qt6tq/statefulsets",
            "subscribe": "https://localhost:8443/v3/projects/local:p-qt6tq/subscribe",
            "update": "https://localhost:8443/v3/projects/local:p-qt6tq",
            "workloads": "https://localhost:8443/v3/projects/local:p-qt6tq/workloads"
        },
        "name": "example-project",
        "namespaceDefaultResourceQuota": {
            "limit": {
                "type": "/v3/schemas/resourceQuotaLimit"
            },
            "type": "/v3/schemas/namespaceResourceQuota"
        },
        "namespaceId": null,
        "resourceQuota": {
            "limit": {
                "type": "/v3/schemas/resourceQuotaLimit"
            },
            "type": "/v3/schemas/projectResourceQuota",
            "usedLimit": {
                "type": "/v3/schemas/resourceQuotaLimit"
            }
        },
        "state": "active",
        "transitioning": "no",
        "transitioningMessage": "",
        "type": "project",
        "uuid": "b582603b-7826-4302-8393-792df2611265"
    }
}
```