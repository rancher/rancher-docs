Rancher supports the ability to configure OIDC Single Logout (SLO). Options include logging out of the Rancher application only, logging out of Rancher and registered applications tied to the external authentication provider, or a prompt asking the user to choose between the previous options.

### Prerequisites

Before configuring OIDC SLO, ensure the following is set up on your IdP:

- **SLO Support**: The **Log Out behavior** configuration section only appears if your OIDC IdP allows for `OIDC SLO`.
- **Post-Logout Redirect URI**: Your Rancher Server URL must be configured as an authorized post-logout redirect URI in your IdP's OIDC client settings. This URL is used by the IdP to redirect a user back to Rancher after a successful external logout.

### OIDC SLO Configuration

Configure the SLO settings when setting up or editing your OIDC authentication provider.

1. Sign in to Rancher using a standard user or an administrator role.
1. In the top left corner, select **☰** > **Users & Authentication**.
1. In the left navigation menu, select **Auth Provider**.
1. Under the section **Log Out behavior**, choose the appropriate SLO setting as described below:

    | Setting                   | Description                                                                   |
    | ------------------------- | ----------------------------------------------------------------------------- |
    | Log out of Rancher and not authentication provider | Choosing this option will only logout the Rancher application and not external authentication providers. |
    | Log out of Rancher and authentication provider (includes all other applications registered with authentication provider) | Choosing this option will logout Rancher and all external authentication providers along with any registered applications linked to the provider. |
    | Allow the user to choose one of the above in an additional log out step | Choosing this option presents users with a choice of logout method as described above. |

1. If you choose to log out of your IdP, provide an **End Session Endpoint**. Rancher uses this URL to initiate the external logout.
