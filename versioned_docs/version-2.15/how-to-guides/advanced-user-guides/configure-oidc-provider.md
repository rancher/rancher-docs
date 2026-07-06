---
title: Configure Rancher as an OIDC provider
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/configure-oidc-provider"/>
</head>

Rancher can act as an OpenID Connect (OIDC) Identity Provider (IdP) for other applications. This allows you to use Rancher's centralized authentication and role-based access control (RBAC) to manage access to external, third-party applications. This can be used for enabling single sign-on (SSO) across Rancher components. For example, see the [documentation](https://documentation.suse.com/cloudnative/suse-observability/latest/en/setup/security/authentication/oidc.html) for configuring the OIDC provider for SUSE Observability.

:::note
Because OIDC is a superset of OAuth2, you can use Rancher as an OAuth2 server without requiring full OIDC. This ensures that clients utilizing the OAuth2 aspect, such as the `rancher-ai-mcp` server, are fully supported.
:::

The Rancher OIDC Provider issues access tokens for OAuth2 and OIDC that can be used as standard Bearer tokens (per RFC6750) to authenticate with Rancher. Previously, only an ID token could be used to impersonate and authenticate a user.

The OIDC provider can be enabled with the `oidc-provider` feature flag. When this flag is on the following endpoints are available:

- `https://{rancher-url}/oidc/authorize`: This endpoint initiates the authentication flow. If a user is already logged into Rancher, it returns an authorization code. Otherwise, it redirects the user to the Rancher login page. Authorization codes and related request information are securely stored in session secrets. Codes are single-use and expire after 10 minutes.

- `https://{rancher-url}/oidc/token`: This endpoint exchanges an authorization code for an `id_token`, `access_token`, and `refresh_token`.

- `https://{rancher-url}/oidc/.well-known/openid-configuration`: This endpoint returns a JSON document containing the OIDC provider's configuration, including endpoint URLs, supported scopes, claims, and other relevant details.

- `https://{rancher-url}/oidc/userinfo`: This endpoint provides information about the authenticated user.

The OIDC provider supports the OIDC Authentication Code Flow with PKCE.

## Configuring an OIDC Client

An `OIDCClient` represents an external application that will be authenticating against Rancher. To register a client application, you must create an `OIDCClient` custom resource.

### Configuration Fields

When defining your `OIDCClient` manifest, you must include specific fields to pass CRD validation:

- `spec.tokenExpirationSeconds`: This field is strictly required and will cause a validation error if omitted. It defines the lifespan of the access token.
- `spec.refreshTokenExpirationSeconds`: This field is also strictly required and will cause a validation error if omitted. It defines the lifespan of the refresh token.
- `scopes` (Optional): This field allows you to restrict the scopes that a client can request. If not explicitly configured, the allowed scopes will default to `openid`, `profile`, and `offline_access`.

### Example OIDC Client Manifest

Below is an example of an `OIDCClient` configuration:

:::note
You must include the expiration fields to successfully apply the resource.
:::

```yaml
apiVersion: management.cattle.io/v3
kind: OIDCClient
metadata:
  name: example-client
spec:
  description: "Example OIDC Client"
  redirectUris:
    - "https://example-app.com/callback"
  tokenExpirationSeconds: 3600
  refreshTokenExpirationSeconds: 86400
  # scopes:
  #   - openid
  #   - profile
  #   - offline_access

```

Save this configuration to a file (e.g., `oidcclient.yaml`) and apply it to your Rancher local cluster:

```
kubectl apply -f oidcclient.yaml
```

Rancher automatically generates a client ID and client secret for each `OIDCClient`. Once the resource is created, Rancher populates the status field with the client id:

```yaml
apiVersion: management.cattle.io/v3
kind: OIDCClient
metadata:
  name: oidc-client-test
spec:
  tokenExpirationSeconds: 600 # expiration of the id_token and access_token
  refreshTokenExpirationSeconds: 3600 # expiration of the refresh_token
  redirectURIs:
    - "https://myredirecturl.com" # replace with your redirect url
  scopes: # Optional: Restricts the scopes the client can request. Defaults to openid, profile, and offline_access if omitted.
    - openid
    - profile
    - offline_access
status:
  clientID: client-xxx
  clientSecrets:
    client-secret-1:
      createdAt: "xxx"
      lastFiveCharacters: xxx
```

Rancher automatically generates a Kubernetes `Secret` in the `cattle-oidc-client-secrets` namespace for each `OIDCClient` resource. The Secret's name matches the `OIDCClient` client ID. Initially, the `Secret` contains a single client secret.

To retrieve the client secret:

```
kubectl get secret client-xxx -n cattle-oidc-client-secrets -o jsonpath="{.data.client-secret-1}" | base64 -d
```

Output:

```
secret-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

You can now use this client ID and client secret in your OIDC client application.

#### Managing Client Secrets

You can manage multiple client secrets per `OIDCClient`. Use annotations on the `OIDCClient` resource to perform secret operations:

- Creation: Adding the `cattle.io/oidc-client-secret-create: true` annotation triggers the creation of a new client secret.
- Removal: Adding the `cattle.io/oidc-client-secret-remove:client-secret-1` annotation removes the specified client secrets.
- Regeneration: Adding the `cattle.io/oidc-client-secret-regenerate:client-secret-1` annotation regenerates the specified client secrets.

### Rancher UI

Create an OIDCClient:

1. In the top left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, click **OIDC Apps**.
1. Click **Add Application**. Fill out the **Create OIDC App** form.
1. Click **Add Application**.

#### Managing Client Secrets

In the OIDC App page:

- Creation: Click **Add new secret**.
- Removal: Click **⋮ > Delete**
- Regeneration: Click **⋮ > Regenerate**

## Signing key

A default key pair for signing the `id_token`, `access_token`, and `refresh_token` tokens is created by Rancher in a `Secret` called `oidc-signing-key` in the `cattle-system` namespace. Only one key will be used for signing, but multiple public keys can be returned in the jwks endpoint in order to avoid disruption when doing a key rotation. 

### Rotation without disruption

In order to create a new key pair for signing you need to manually create a new keypair and add it to the `oidc-signing-key` `Secret`

Example:

```yaml
apiVersion: v1
kind: Secret
metadata:
 name: oidc-signing-key
type: Opaque
data:
 key2.pem: <base64-encoded-new-private-key>
 key1.pub: <base64-encoded-old-public-key>
 key2.pub: <base64-encoded-new-public-key>
```

Rancher will sign tokens using `key2.pem`, while the JWKS endpoint will serve both `key1.pub` and `key2.pub`. This ensures a smooth 
key rotation from `key1` to `key2` without disrupting existing token verification. Note that only one private key (.pem) can be stored in the 
secret at a time, and each key pair must share the same base name, differing only by their suffix: .pem for the private key and .pub for the public key.

### Rotation with disruption

Removing the `oidc-signing-key` `Secret` will cause Rancher to regenerate the signing key on the next restart.

:::warning
This will invalidate all previously issued `id_token`, `access_token`, and `refresh_token` tokens making them unusable.
:::
