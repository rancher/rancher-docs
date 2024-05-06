---
title: 2. 在 Rancher 中配置 Microsoft AD FS
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"/>
</head>

完成[在 Microsoft AD FS 中配置 Rancher](configure-ms-adfs-for-rancher.md) 后，将你的 Active Directory Federation Service (AD FS) 信息输入 Rancher，以便 AD FS 用户可以通过 Rancher 进行身份认证。

:::note 配置 ADFS 服务器的重要说明：

- SAML 2.0 WebSSO 协议服务 URL 为：`https://<RANCHER_SERVER>/v1-saml/adfs/saml/acs`
- 信赖方信任标识符 URL 为：`https://<RANCHER_SERVER>/v1-saml/adfs/saml/metadata`
- 你必须从 AD FS 服务器导出 `federationmetadata.xml` 文件。你可以在 `https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml` 中找到该文件。

:::

1. 在左上角，单击 **☰ > 用户 & 认证**。
1. 在左侧导航栏，单击**认证**。
1. 单击 **ADFS**。
1. 填写**配置 AD FS 账号**表单。Microsoft AD FS 允许你指定现有的 Active Directory (AD) 服务器。[以下配置示例](#配置)描述了如何将 AD 属性映射到 Rancher 中的字段。
1. 完成**配置 AD FS 账号**表单后，单击**启用**。

   Rancher 会将你重定向到 AD FS 登录页面。输入使用 Microsoft AD FS 进行身份验证的凭证，来验证你的 Rancher AD FS 配置。

   :::note

   你可能需要禁用弹出窗口阻止程序才能看到 AD FS 登录页面。

   :::

**结果**：已将 Rancher 配置为使用 AD FS。你的用户现在可以使用 AD FS 登录名登录 Rancher。

## 配置

| 字段 | 描述 |
|---------------------------|-----------------|
| 显示名称字段 | 包含用户显示名称的 AD 属性。<br/><br/>示例：`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` |
| 用户名字段 | 包含用户名/给定名称的 AD 属性。<br/><br/>示例：`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` |
| UID 字段 | 每个用户独有的 AD 属性。<br/><br/>示例：`http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` |
| 用户组字段 | 创建用于管理组成员关系的条目。<br/><br/>示例：`http://schemas.xmlsoap.org/claims/Group` |
| Rancher API 主机 | Rancher Server 的 URL。 |
| 私钥/证书 | 在 Rancher 和你的 AD FS 之间创建安全外壳（SSH）的密钥/证书对。确保将 Common Name (CN) 设置为 Rancher Server URL。<br/><br/>[证书创建命令](#cert-command) |
| 元数据 XML | 从 AD FS 服务器导出的 `federationmetadata.xml` 文件。<br/><br/>你可以在 `https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml` 找到该文件。 |


<a id="cert-command"></a>

:::tip

你可以使用 openssl 命令生成证书。例如：

```
openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"
```

:::