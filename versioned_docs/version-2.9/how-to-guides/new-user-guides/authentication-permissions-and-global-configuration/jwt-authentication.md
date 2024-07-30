---
title: JSON Web Token (JWT) Authentication
---
<!-- Edit Canonical Link -->
<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/jwt-authentication"/>
</head>

Many 3rd party integrations available for Kubernetes, such as GitLab and HashiCorp Vault, involve giving an external process access to the Kubernetes API using a native Kubernetes Service Account token for authentication.

In Rancher v2.9.0 and later, you can enable a downstream cluster to support JSON web token (JWT) authentication of tokens created for a service account on a downstream cluster through the Rancher authentication proxy. In Rancher versions earlier than  v2.9.0, only Rancher-issued tokens were supported.

To enable this feature, follow these steps:

1. In the upper left corner, click **☰ > Cluster Management**.
1. Click **Advanced** to open the dropdown menu.
1. Select **JWT Authentication**.
1. Click the checkbox for the cluster you want to enable JWT authentication for, and click **Enable**. Alternatively, you can click **⋮** > **Enable**.
