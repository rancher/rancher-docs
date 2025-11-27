---
title: Users
---

## User Resource

The `User` resource (users.management.cattle.io) represents a user account in Rancher.

To get a description of the fields and structure of the `User` resource, run:

```sh
kubectl explain users.management.cattle.io
```

## Creating a User

Creating a local user is a two-step process: you must create the `User` resource, then provide a password via a Kubernetes `Secret`.

Only a user with sufficient permissions can create a `User` resource.

```bash
kubectl create -f -<<EOF
apiVersion: management.cattle.io/v3
kind: User
metadata:
 name: testuser     
displayName: "Test User"             
username: "testuser"
EOF
```
The user's password must be provided in a `Secret` object within the `cattle-local-user-passwords` namespace. The Rancher webhook will automatically hash the password and update the `Secret`.

:::important

Important: The `Secret` must have the same name as the metadata.name (and username) of the `User` resource. 

:::

```bash
kubectl create -f -<<EOF
apiVersion: v1
kind: Secret
metadata:
 name: testuser
 namespace: cattle-local-user-passwords
type: Opaque
stringData:
 password: Pass1234567!
EOF
```

After the plaintext password is submitted, the Rancher-Webhook automatically hashes it, replacing the content of the `Secret`, ensuring that the plaintext password is never stored:

```yaml
apiVersion: v1
data:
  password: 1c1Y4CdjlehGWFz26F414x2qoj4gch5L5OXsx35MAa8=
  salt: m8Co+CfMDo5XwVl0FqYzGcRIOTgRrwFSqW8yurh5DcE=
kind: Secret
metadata:
  annotations:
    cattle.io/password-hash: pbkdf2sha3512
  name: testuser
  namespace: cattle-local-user-passwords
  ownerReferences:
  - apiVersion: management.cattle.io/v3
    kind: User
    name: testuser
    uid: 663ffb4f-8178-46c8-85a3-337f4d5cbc2e
  uid: bade9f0a-b06f-4a77-9a39-4284dc2349c5
type: Opaque
```

## Updating User's Password

To change a user's password, use the `PasswordChangeRequest` resource, which handles secure password updates.

```yaml
kubectl create  -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: PasswordChangeRequest
spec:
  userID: "testuser"
  currentPassword: "Pass1234567!"
  newPassword: "NewPass1234567!"
EOF
```

## Listing Users

List all `User` resources in the cluster:

```sh
kubectl get users
NAME           AGE
testuser       3m54s
user-4n5ws     12m
```

## Viewing a User

View a specific `User` resource by name:

```sh
kubectl get user testuser
NAME           AGE
testuser       3m54s
```

## Deleting a User

Deleting a user will automatically delete the corresponding password `Secret`.

```sh
kubectl delete user testuser
user.management.cattle.io "testuser" deleted
```

## Get a Current User's Information

A client uses the `SelfUser` resource to retrieve information about the currently authenticated user without knowing their ID. The user ID is returned in the `.status.userID` field.

```bash
kubectl create -o jsonpath='{.status.userID}'  -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: SelfUser
EOF

testuser
```

## Refreshing a User's Group Membership

Updates to user group memberships are triggered by the `GroupMembershipRefreshRequest` resource.

:::note
Group membership is only supported for external authentication providers.
:::

### For a Single User

```bash
kubectl create -o jsonpath='{.status}'  -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: GroupMembershipRefreshRequest
spec:
  userId: testuser
EOF

{
    "conditions": [
        {
            "lastTransitionTime": "2025-11-10T12:01:03Z",
            "message": "",
            "reason": "",
            "status": "True",
            "type": "UserRefreshInitiated"
        }
    ],
    "summary": "Completed"
}
```

### For All Users

```bash

kubectl create -o jsonpath='{.status}'  -f -<<EOF
apiVersion: ext.cattle.io/v1
kind: GroupMembershipRefreshRequest
spec:
   userId: "*"
EOF

{
    "conditions": [
        {
            "lastTransitionTime": "2025-11-10T12:01:59Z",
            "message": "",
            "reason": "",
            "status": "True",
            "type": "UserRefreshInitiated"
        }
    ],
    "summary": "Completed"
}
```
