---
title: Uninstalling The Adapter
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter"/>
</head>

### 1. Uninstall the adapter chart using helm.

```bash
helm uninstall rancher-csp-adapter -n cattle-csp-adapter-system
```

### 2. Remove the namespace created for the adapter.

```bash
kubectl delete ns cattle-csp-adapter-system
```

### 3. (Optional) remove any outstanding user notifications.

```bash
kubectl delete RancherUserNotification csp-compliance
```
