---
title: Backup and Restore Examples
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/backup-restore-configuration/examples"/>
</head>

This section contains examples of Backup and Restore custom resources.

The default backup storage location is configured when the `rancher-backup` operator is installed or upgraded.

Encrypted backups can only be restored if the Restore custom resource uses the same encryption configuration secret that was used to create the backup.

## Backup

This section contains example Backup custom resources.

>**Note:** Refer to the [backup config reference page](./backup-configuration.md) for more information on configuring the options below.

### Backup in the Default Location with Encryption

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: default-location-encrypted-backup
spec:
  resourceSetName: rancher-resource-set-full
  encryptionConfigSecretName: encryptionconfig
```

### Recurring Backup in the Default Location

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: default-location-recurring-backup
spec:
  resourceSetName: rancher-resource-set-basic
  schedule: "@every 1h"
  retentionCount: 10
```

### Encrypted Recurring Backup in the Default Location

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: default-enc-recurring-backup
spec:
  resourceSetName: rancher-resource-set-full
  encryptionConfigSecretName: encryptionconfig
  schedule: "@every 1h"
  retentionCount: 3
```

### Encrypted Backup in Minio

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: minio-backup
spec:
  storageLocation:
    s3:
      credentialSecretName: minio-creds
      credentialSecretNamespace: default
      bucketName: rancherbackups
      endpoint: minio.xip.io
      endpointCA: <base64-encoded-cert>
  resourceSetName: rancher-resource-set-full
  encryptionConfigSecretName: encryptionconfig
```

### Backup in S3 Using AWS Credential Secret

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: s3-backup
spec:
  storageLocation:
    s3:
      credentialSecretName: s3-creds
      credentialSecretNamespace: default
      bucketName: rancher-backups
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
  resourceSetName: rancher-resource-set-full
  encryptionConfigSecretName: encryptionconfig
```

### Recurring Backup in S3 Using AWS Credential Secret

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: s3-recurring-backup
spec:
  storageLocation:
    s3:
      credentialSecretName: s3-creds
      credentialSecretNamespace: default
      bucketName: rancher-backups
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
  resourceSetName: rancher-resource-set-full
  encryptionConfigSecretName: encryptionconfig
  schedule: "@every 1h"
  retentionCount: 10
```

### Backup from EC2 Nodes with IAM Permission to Access S3

This example shows that the AWS credential secret does not have to be provided to create a backup if the nodes running `rancher-backup` have [these permissions for access to S3.](backup-configuration.md#iam-permissions-for-ec2-nodes-to-access-s3)

```yaml
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: s3-iam-backup
spec:
  storageLocation:
    s3:
      bucketName: rancher-backups
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
  resourceSetName: rancher-resource-set-full
  encryptionConfigSecretName: encryptionconfig
```

## Restore

This section contains example Restore custom resources.

>**Note:** Refer to the [restore config reference page](./restore-configuration.md) for more information on configuring the options below.

### Restore Using the Default Backup File Location

```yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-default
spec:
  backupFilename: default-location-recurring-backup-752ecd87-d958-4d20-8350-072f8d090045-2020-09-26T12-29-54-07-00.tar.gz
#  encryptionConfigSecretName: test-encryptionconfig
```

### Restore for Rancher Migration
```yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-migration
spec:
  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz
  prune: false
  storageLocation:
    s3:
      credentialSecretName: s3-creds
      credentialSecretNamespace: default
      bucketName: rancher-backups
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
```

### Restore from Encrypted Backup

```yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-encrypted
spec:
  backupFilename: default-test-s3-def-backup-c583d8f2-6daf-4648-8ead-ed826c591471-2020-08-24T20-47-05Z.tar.gz
  encryptionConfigSecretName: encryptionconfig
```

### Restore an Encrypted Backup from Minio

```yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-minio
spec:
  backupFilename: default-minio-backup-demo-aa5c04b7-4dba-4c48-9ac4-ab7916812eaa-2020-08-30T13-18-17-07-00.tar.gz
  storageLocation:
    s3:
      credentialSecretName: minio-creds
      credentialSecretNamespace: default
      bucketName: rancherbackups
      endpoint: minio.xip.io
      endpointCA: <base64-encoded-cert>
  encryptionConfigSecretName: test-encryptionconfig
```

### Restore from Backup Using an AWS Credential Secret to Access S3

```yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-s3-demo
spec:
  backupFilename: test-s3-recurring-backup-752ecd87-d958-4d20-8350-072f8d090045-2020-09-26T12-49-34-07-00.tar.gz.enc
  storageLocation:
    s3:
      credentialSecretName: s3-creds
      credentialSecretNamespace: default
      bucketName: rancher-backups
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
  encryptionConfigSecretName: test-encryptionconfig
```

### Restore from EC2 Nodes with IAM Permissions to Access S3

This example shows that the AWS credential secret does not have to be provided to restore from backup if the nodes running `rancher-backup` have [these permissions for access to S3.](backup-configuration.md#iam-permissions-for-ec2-nodes-to-access-s3)

```yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-s3-demo
spec:
  backupFilename: default-test-s3-recurring-backup-84bf8dd8-0ef3-4240-8ad1-fc7ec308e216-2020-08-24T10#52#44-07#00.tar.gz
  storageLocation:
    s3:
      bucketName: rajashree-backup-test
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
  encryptionConfigSecretName: test-encryptionconfig
```

## Example EncryptionConfiguration

The snippets below demonstrate two different types of secrets and their relevance with respect to Backup and Restore of custom resources. Creating the secret can be done with the following command:

```plain
kubectl create secret generic example-encryptionconfig \
  --from-file=./encryption-provider-config.yaml \
  -n cattle-resources-system
```

The first example is that of a secret used to encrypt the backup files. The backup operator will read the contents of the **encryption-provider-config.yaml** key, which contains the definition of an EncryptionConfiguration resource encoded as Base64.

The second example is that of the Kubernetes EncryptionConfiguration resource itself, being the plain-text form of the Base64-encoded content from the first example. This resource is also used to encrypt secrets when stored in etcd and general cases of Encryption at Rest in Kubernetes. More information on that can be found in the [upstream documentation](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/). The keys defined in this resource are essential for accessing the contents of encrypted Backups, particularly during the Restore process. For that reason, these must be kept secure, confidential and easily retrievable.

```yaml
apiVersion: v1
data:
  encryption-provider-config.yaml: YXBpVmVyc2lvbjogYXBpc2VydmVyLmNvbmZpZy5rOHMuaW8vdjEKa2luZDogRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24KcmVzb3VyY2VzOgogIC0gcmVzb3VyY2VzOgogICAgICAtIHNlY3JldHMKICAgIHByb3ZpZGVyczoKICAgICAgLSBhZXNnY206CiAgICAgICAgICBrZXlzOgogICAgICAgICAgICAtIG5hbWU6IGtleTEKICAgICAgICAgICAgICBzZWNyZXQ6IGMyVmpjbVYwSUdseklITmxZM1Z5WlE9PQogICAgICAgICAgICAtIG5hbWU6IGtleTIKICAgICAgICAgICAgICBzZWNyZXQ6IGRHaHBjeUJwY3lCd1lYTnpkMjl5WkE9PQogICAgICAtIGFlc2NiYzoKICAgICAgICAgIGtleXM6CiAgICAgICAgICAgIC0gbmFtZToga2V5MQogICAgICAgICAgICAgIHNlY3JldDogYzJWamNtVjBJR2x6SUhObFkzVnlaUT09CiAgICAgICAgICAgIC0gbmFtZToga2V5MgogICAgICAgICAgICAgIHNlY3JldDogZEdocGN5QnBjeUJ3WVhOemQyOXlaQT09CiAgICAgIC0gc2VjcmV0Ym94OgogICAgICAgICAga2V5czoKICAgICAgICAgICAgLSBuYW1lOiBrZXkxCiAgICAgICAgICAgICAgc2VjcmV0OiBZV0pqWkdWbVoyaHBhbXRzYlc1dmNIRnljM1IxZG5kNGVYb3hNak0wTlRZPQ==
kind: Secret
metadata:
  name: example-encryptionconfig
  namespace: cattle-resources-system
type: Opaque
```

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
      - secrets
    providers:
      - aesgcm:
          keys:
            - name: key1
              secret: c2VjcmV0IGlzIHNlY3VyZQ==
            - name: key2
              secret: dGhpcyBpcyBwYXNzd29yZA==
      - aescbc:
          keys:
            - name: key1
              secret: c2VjcmV0IGlzIHNlY3VyZQ==
            - name: key2
              secret: dGhpcyBpcyBwYXNzd29yZA==
      - secretbox:
          keys:
            - name: key1
              secret: YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY=
```
