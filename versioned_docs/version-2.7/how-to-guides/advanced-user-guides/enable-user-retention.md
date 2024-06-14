---
title: Enabling User Retention
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-user-retention"/>
</head>

In Rancher v2.7.14 and later, you can enable user retention to automatically disable or delete inactive user accounts after a configurable time period.

The user retention feature is off by default. It is considered experimental at this time.

 ## Enabling User Retention with kubectl

To enable user retention, you must set `user-retention-cron`. You must also set at least one of  `disable-inactive-user-after` or `delete-inactive-user-after`. You can use `kubectl edit setting <name-of-setting>` to open your editor of choice and set these values.

## Configuring Rancher to Delete Users, Disable Users, or Combine Operations

Rancher uses two global user retention settings to determine if and when users are disabled or deleted after a certain period of inactivity. Disabled accounts must be re-enabled before users can log in again. If an account is deleted without being disabled, users may be able to log in through external authentication and the deleted account will be recreated.

The global settings, `disable-inactive-user-after` and  `delete-inactive-user-after`, do not block one another from running. 

For example, you can set both operations to run. If you give `disable-inactive-user-after` a shorter duration than `delete-inactive-user-after`, the user retention process disables inactive accounts before deleting them.

You can also edit some user retention settings on a specific user's `UserAttribute`. Setting these values overrides the global settings. See [User-specific User Retention Overrides](#user-specific-user-retention-overrides) for more details.

### Required User Retention Settings

The following are global settings:

- `user-retention-cron`: Describes how often the user retention process runs. The value is a cron expression (for example, `0 * * * *` for every hour).
 - `disable-inactive-user-after`: The amount of time that a user account can be inactive before the process disables an account. Disabling an account forces the user to request that an administrator re-enable the account before they can log in to use it. Values are expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) (for example, `720h` for 720 hours or 30 days). The value must be greater than `auth-user-session-ttl-minutes`, which is `16h` by default. If the value is not set, set to the empty string, or is equal to 0, the process does not disable any inactive accounts.
- `delete-inactive-user-after`: The amount of time that a user account can be inactive before the process deletes the account. Values are expressed in time.Duration units (for example, `720h` for 720 hours or 30 days). The value must be greater than `auth-user-session-ttl-minutes`, which is `16h` by default. The value should be greater than `336h` (14 days), otherwise it is rejected by the Rancher webhook. If you need the value to be lower than 14 days, you can [bypass the webhook](../../reference-guides/rancher-webhook.md#bypassing-the-webhook). If the value is not set, set to the empty string, or is equal to 0, the process does not delete any inactive accounts.

### Optional User Retention Settings

The following are global settings:

- `user-retention-dry-run`: If set to `true`, the user retention process runs without actually deleting or disabling any user accounts. This can help test user retention behavior before allowing the process to disable or delete user accounts in a production environment.
- `user-last-login-default`: If a user does not have `UserAttribute.LastLogin` set on their account, this setting is used instead. It provides a predetermined last login time for the account. The value is expressed as an [RFC 3339 date-time](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) truncated to the last second; for example, `2023-03-01T00:00:00Z`. If the value is set to the empty string or is equal to 0, this setting is not used.

#### User-specific User Retention Overrides

The following are user-specific overrides to the global settings for special cases. These settings are applied by editing the `UserAttribute` associated with a given account:

```
kubectl edit userattribute <user-name>
```

- `disableAfter`: The user-specific override for `disable-inactive-user-after`. The value is expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) units and truncated to the second. If the value is set to `0s` then the account won't be subject to disabling. 
- `deleteAfter`: The user-specific override for `delete-inactive-user-after`. The value is expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) units and truncated to the second. If the value is set to `0s` then the account won't be subject to deletion.

## Viewing User Retention Settings in the Rancher UI

You can see which user retention settings are applied to which users. 

1. In the upper left corner, click **☰ > Users & Authentication**.
1. In the left navigation menu, select **Users**. 

The **Disable After** and **Delete After** columns for each user account indicate how long the account can be inactive before it is disabled or deleted from Rancher. There is also a **Last Login** column roughly indicating when the account was last active. 

The same information is available if you click a user's name in the **Users** table and select the **Detail** tab.