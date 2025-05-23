---
title: Using API Tokens
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/api-tokens"/>
</head>

Rancher v2.8.0 introduced the [Rancher Kubernetes API](./api-reference.mdx) which can be used to manage Rancher resources through `kubectl`. This page covers information on API tokens used with the [Rancher CLI](../reference-guides/cli-with-rancher/cli-with-rancher.md), [kubeconfig files](../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md#about-the-kubeconfig-file), Terraform and the [v3 API browser](./v3-rancher-api-guide.md#enable-view-in-api).

By default, some cluster-level API tokens are generated with infinite time-to-live (`ttl=0`). In other words, API tokens with `ttl=0` never expire unless you invalidate them. Tokens are not invalidated by changing a password.

You can deactivate API tokens by deleting them or by deactivating the user account.

## Deleting Tokens

To delete a token:

1. Go to the list of all tokens in the Rancher API view at `https://<Rancher-Server-IP>/v3/tokens`.

1. Access the token you want to delete by its ID. For example, `https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt`

1. Click **Delete**.

The following is a complete list of tokens generated with `ttl=0`:

| Token             | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| `kubectl-shell-*` | Access to `kubectl` shell in the browser                                               |
| `agent-*`         | Token for agent deployment                                                             |
| `compose-token-*` | Token for compose                                                                      |
| `helm-token-*`    | Token for Helm chart deployment                                                        |
| `drain-node-*`    | Token for drain (Rancher uses `kubectl` for drain because there is no native Kubernetes API). |

## Setting TTL on Kubeconfig Tokens

Admins can set a global time-to-live (TTL) on Kubeconfig tokens. Changing the default kubeconfig TTL can be done by navigating to global settings and setting [`kubeconfig-default-token-ttl-minutes`](#kubeconfig-default-token-ttl-minutes) to the desired duration in minutes. As of Rancher v2.8, the default value of [`kubeconfig-default-token-ttl-minutes`](#kubeconfig-default-token-ttl-minutes) is `43200`, which means that tokens expire in 30 days.

:::note

This setting is used by all kubeconfig tokens except those created by the CLI to [generate kubeconfig tokens](#disable-tokens-in-generated-kubeconfigs).

:::

## Disable Tokens in Generated Kubeconfigs

Set the `kubeconfig-generate-token` setting to `false`. This setting instructs Rancher to no longer automatically generate a token when a user clicks on download a kubeconfig file. When this setting is deactivated, a generated kubeconfig references the [Rancher CLI](../reference-guides/cli-with-rancher/kubectl-utility.md#authentication-with-kubectl-and-kubeconfig-tokens-with-ttl) to retrieve a short-lived token for the cluster. When this kubeconfig is used in a client, such as `kubectl`, the Rancher CLI needs to be installed to complete the log in request.

## Token Hashing

You can [enable token hashing](../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md), where tokens undergo a one-way hash using the SHA256 algorithm. This is a non-reversible process: once enabled, this feature cannot be disabled. You should first evaluate this setting in a test environment, and/or take backups before enabling.

This feature affects all tokens which include, but are not limited to, the following:

- Kubeconfig tokens
- Bearer tokens API keys/calls
- Tokens used by internal operations

## Token Settings

These global settings affect Rancher token behavior.

| Setting                                                                         | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`auth-user-session-ttl-minutes`](#auth-user-session-ttl-minutes)               | TTL in minutes on a user auth session token.                                                                                                                                                                                   |
| [`kubeconfig-default-token-ttl-minutes`](#kubeconfig-default-token-ttl-minutes) | Default TTL applied to all kubeconfig tokens except for tokens [generated by Rancher CLI](#disable-tokens-in-generated-kubeconfigs).                                                 |
| [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes)                     | Max TTL for all tokens except those controlled by [`auth-user-session-ttl-minutes`](#auth-user-session-ttl-minutes).                                                                                                           |
| [`kubeconfig-generate-token`](#kubeconfig-generate-token)                       | If true, automatically generate tokens when a user downloads a kubeconfig.                                                                                                                                                     |

### auth-user-session-ttl-minutes

Time to live (TTL) duration in minutes, used to determine when a user auth session token expires. When expired, the user must log in and obtain a new token. This setting is not affected by [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes). Session tokens are created when a user logs into Rancher.

### kubeconfig-default-token-ttl-minutes

Time to live (TTL) duration in minutes, used to determine when a kubeconfig token expires. When the token is expired, the API rejects the token. This setting can't be larger than [`auth-token-max-ttl-minutes`](#auth-token-max-ttl-minutes). This setting applies to tokens generated in a requested kubeconfig file, except for tokens [generated by Rancher CLI](#disable-tokens-in-generated-kubeconfigs). As of Rancher v2.8, the default duration is `43200`, which means that tokens expire in 30 days.

### auth-token-max-ttl-minutes

Maximum Time to Live (TTL) in minutes allowed for auth tokens. If a user attempts to create a token with a TTL greater than `auth-token-max-ttl-minutes`, Rancher sets the token TTL to the value of `auth-token-max-ttl-minutes`. Applies to all kubeconfig tokens and API tokens. As of Rancher v2.8, the default duration is `129600`, which means that tokens expire in 90 days.

### kubeconfig-generate-token

When true, kubeconfigs requested through the UI contain a valid token. When false, kubeconfigs contain a command that uses the Rancher CLI to prompt the user to log in. [The CLI then retrieves and caches a token for the user](../reference-guides/cli-with-rancher/kubectl-utility.md#authentication-with-kubectl-and-kubeconfig-tokens-with-ttl).
