---
title: Tokens
---

<head>
    <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/workflows/tokens"/>
</head>

## Feature Flag

The Tokens Public API is available for Rancher v2.12.0 and later, and is enabled by default. You can disable the Tokens Public API by setting the `ext-tokens` feature flag to `false` as shown in the example `kubectl` command below:

```sh
kubectl patch feature ext-tokens -p '{"spec":{"value":false}}'
```

## Creating a Token

Only a **valid and active** Rancher user can create a Token. Otherwise, you will get an error displayed (`Error from server (Forbidden)...`) when attempting to create a Token.

```bash
kubectl create -o jsonpath='{.status.value}' -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: Token
EOF
Error from server (Forbidden): error when creating "STDIN": tokens.ext.cattle.io is forbidden: user system:admin is not a Rancher user
```

A Token is always created for the user making the request. Attempting to create a Token for a different user, by specifying a different `spec.userID`, is forbidden and will fail.

- The `spec.description` field can be set to an arbitrary human-readable description of the Token's purpose. The default value is empty.

- The `spec.kind` field can be set to the kind of Token. The value `session` indicates a login Token. All other values, including the default empty string, indicate a kind of derived Token.

- The `metadata.name` and `metadata.generateName` fields are ignored, and the name of the new Token is automatically generated using the prefix `token-`.

	```bash
	kubectl create -o jsonpath='{.status.value}' -f -<<EOF
	apiVersion: ext.cattle.io/v1
	kind: Token
	spec:
	  description: My Token
	EOF
	```

- If the `spec.ttl` is not specified, the Token is created with the expiration time defined in the `auth-token-max-ttl-minutes` setting. The default expiration time is 90 days. If `spec.ttl` is specified, it should be greater than 0 and less than or equal to the value of the `auth-token-max-ttl-minutes` setting expressed in milliseconds.

	```bash
	kubectl create -o jsonpath='{.status.value}' -f -<<EOF
	apiVersion: ext.cattle.io/v1
	kind: Token
	spec:
	  ttl: 7200000 # 2 hours
	EOF
	```

## Listing Tokens

Listing previously generated Tokens can help clean up tokens that are no longer needed (e.g., they were issued temporarily). Admins can list all Tokens, while regular users can only see their own.

```sh
kubectl get tokens.ext.cattle.io
NAME          KIND   TTL   AGE
token-chjc9          90d   18s
token-6fzgj          90d   16s
token-8nbrm          90d   14s
```

Use `-o wide` to get more details:

```sh
kubectl get tokens.ext.cattle.io -o wide
NAME          USER         KIND   TTL   AGE   DESCRIPTION
token-chjc9   user-jtghh          90d   24s   example
token-6fzgj   user-jtghh          90d   22s   box
token-8nbrm   user-jtghh          90d   20s   jinx
```

## Viewing a Token

Admins can get any Token, while regular users can only get their own.

```sh
kubectl get tokens.ext.cattle.io token-chjc9
NAME          KIND   TTL   AGE
token-chjc9          90d   18s
```

Use `-o wide` to get more details:

```sh
kubectl get tokens.ext.cattle.io token-chjc9 -o wide
NAME          USER         KIND   TTL   AGE   DESCRIPTION
token-chjc9   user-jtghh          90d   24s   example
```

## Deleting a Token

Admins can delete any Token, while regular users can only delete their own.  

```sh
kubectl delete tokens.ext.cattle.io token-chjc9
token.ext.cattle.io "token-chjc9" deleted
```

## Updating a Token

Only the metadata fields `spec.description`, `spec.ttl`, and `spec.enabled` can be updated. All other `spec` fields are immutable. Admins can extend the `spec.ttl` field, while regular users can only reduce the value.

An example `kubectl` command to edit a Token:

```sh
kubectl edit tokens.ext.cattle.io token-zp786
```
