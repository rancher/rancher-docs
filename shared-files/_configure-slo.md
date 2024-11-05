Rancher supports the ability to configure SAML SLO. Options include logging out of the Rancher application only, logging out of Rancher and registered applications tied to the external authentication provider, or a prompt asking the user to choose between the previous options. The steps below outline configuration from the application GUI:

1. Sign in to Rancher using a standard user or an administrator role to configure SAML SLO.
1. In the top left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, click **Auth Provider**.
1. Under the section **Log Out behavior**, choose the appropriate SLO setting as described below:

    | Setting                   | Description                                                                   |
    | ------------------------- | ----------------------------------------------------------------------------- |
    | Log out of Rancher and not authentication provider | Choosing this option will only logout the Rancher application and not external authentication providers. |
    | Log out of Rancher and authentication provider (includes all other applications registered with authentication provider) | Choosing this option will logout Rancher and all external authentication providers along with any registered applications linked to the provider. |
    | Allow the user to choose one of the above in an additional log out step | Choosing this option presents users with a choice of logout method as described above. |
