---
title: 卸载 Adapter
---

### 1. 使用 Helm 卸载 Adapter Chart：

```bash
helm uninstall rancher-csp-adapter -n cattle-csp-adapter-system
```

### 2. 删除为 Adapter 创建的命名空间：

```bash
kubectl delete ns cattle-csp-adapter-system
```

### 3. （可选）删除未完成的用户通知：

```bash
kubectl delete RancherUserNotification csp-compliance
```
