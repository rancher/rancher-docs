---
title: Local Authentication
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users"/>
</head>

Local authentication is the default until you configure an external authentication provider. Rancher stores user account information, such as usernames and passwords, locally. By default, the `admin` user that logs in to Rancher for the first time is a local user.

## Adding Local Users

Regardless of whether you use external authentication, you should create a few local authentication users so that you can continue using Rancher if your external authentication service encounters issues.

1.	From the **Global** view, select **Users** from the navigation bar.

2.	Click **Add User**. Then complete the **Add User** form. Click **Create** when you're done.
