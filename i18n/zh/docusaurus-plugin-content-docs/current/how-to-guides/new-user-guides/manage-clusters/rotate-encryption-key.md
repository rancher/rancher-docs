---
title: 加密密钥轮换
---

## RKE1 加密密钥轮换

1. 使用以下两个选项之一来启用加密密钥轮换：

   - 在 Rancher UI 中的 **Cluster Options > Advanced Options > Secrets Encryption** 下选择 `Enabled` 单选按钮：

   ![启用加密密钥轮换](/img/rke1-enable-secrets-encryption.png)

   - 或者，应用以下 YAML：

   ```yaml
   rancher_kubernetes_engine_config:
     services:
       kube_api:
         secrets_encryption_config:
           enabled: true
   ```

2. 在 Rancher UI 中轮换密钥：

   2.1. 点击 **☰ > 集群管理**。

   2.2. 在所选集群旁边的屏幕最右侧选择 **⋮ > Rotate Encryption Keys**：

   ![加密密钥轮换](/img/rke1-encryption-key.png)



## RKE2 加密密钥轮换

_**v2.6.7 新功能**_

> **重要提示**：加密密钥轮换默认启用，不能禁用。

要在 Rancher UI 中轮换密钥：

1. 点击 **☰ > 集群管理**。

1. 在所选集群旁边的屏幕最右侧选择 **⋮ > Rotate Encryption Keys**：

   ![加密密钥轮换](/img/rke2-encryption-key.png)


> **注意**：有关 RKE2 密文加密配置的更多信息，请参阅 [RKE2 文档](https://docs.rke2.io/security/secrets_encryption)。