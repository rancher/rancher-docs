---
title: Configure Amazon Cognito
description: Create an Amazon Cognito user pool and configure Rancher to work with Amazon Cognito. Your users can then sign into Rancher using their login from Amazon Cognito.
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-amazon-cognito"/>
</head>

If your organization uses Amazon Cognito for user authentication, you can configure Rancher to allow login using Amazon Cognito credentials. The following instructions describe how to configure Rancher to work with Amazon Cognito:

## Prerequisites

- In Rancher:
  - Amazon Cognito is disabled.

:::note
Consult the Amazon Cognito [documentation](https://aws.amazon.com/cognito/getting-started/) to configure the user pool.
:::

- In Amazon Cognito:
  - Create a new user pool or use an existing one. 
  - In the `App client` settings, set the redirect URL to `https://yourRancherHostURL/verify-auth`. Replace `yourRancherHostURL` with the actual hostname of your Rancher instance (e.g., https://rancher.example.com/verify-auth).

## Configuring Amazon Cognito in Rancher

1. In the upper left corner of the Rancher UI, click **☰ > Users & Authentication**.
1. In the left navigation bar, click **Auth Provider**.
1. Select **Amazon Cognito**.
1. Complete the **Configure an Amazon Cognito account** form. For help with filling the form, see the [configuration reference](#configuration-reference).
1. Click **Enable**.

   Rancher will redirect you to the Amazon Cognito login page. Enter your Amazon Cognito credentials to validate your Rancher configuration.

   :::note

   You may need to disable your popup blocker to see the Amazon Cognito login page.

   :::

**Result:** Rancher is configured to work with your Amazon Cognito using the OIDC protocol. Your users can now sign into Rancher using their Amazon Cognito logins.

## Configuration Reference

| Field                     | Description                                                                                                                                                                                                                                         |
| ------------------------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client ID                 | The Client ID of your Amazon Cognito App Client.                                                                                                                                                                                                    |
| Client Secret             | The generated Secret of your Amazon Cognito App Client.                                                                                                                                                                                             |
| Issuer                    | The Issuer URL of your Amazon Cognito App Client. It follows the format `https://cognito-idp.{region}.amazonaws.com/{userPoolId}`, and can be found in the App Client settings page. Rancher uses the Issuer URL to fetch all of the required URLs. |

## Troubleshooting

### You are not redirected to your authentication provider

If you fill out the **Configure an Amazon Cognito account** form and click on **Enable**, and you are not redirected to Amazon Cognito, verify your Amazon Cognito configuration.
