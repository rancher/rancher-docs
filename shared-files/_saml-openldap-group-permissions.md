When you configure a SAML authentication provider backed by OpenLDAP, the SAML response might return only a subset of the groups that a user belongs to. The exact groups returned depend on the configuration of your external authentication provider.

Rancher assigns user permissions based strictly on the groups provided in the SAML response.

:::note

Even if you can search for and view specific OpenLDAP groups in the Rancher UI, you cannot use them to assign permissions if they are missing from the SAML response.

To assign permissions successfully, verify that your SAML authentication provider is configured to return all necessary OpenLDAP groups.

:::
