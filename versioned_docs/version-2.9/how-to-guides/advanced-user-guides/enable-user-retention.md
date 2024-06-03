---
title: Enabling User Retention
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-user-retention.md"/>
</head>

In Rancher v2.9.0 and later, you can enable user retention to automatically disable or delete inactive user accounts after a configurable time period.

User retention is off by default.

## Required User Retention Settings 

- `user-retention-cron`: Describes how often the user retention process runs. The value is a cron expression (for example, `0 * * * *` for every hour).
- `disable-inactive-user-after`: The amount of time that a user account can be inactive before the process disables an account. Values are expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) (for example, `720h` for 720 hours or 30 days). If the value is not set, set to the empty string, or is equal to 0, the process does not disable any inactive accounts.
- `delete-inactive-user-after`: The amount of time that a user account can be inactive before the process deletes the account. Values are expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) (for example, `720h` for 720 hours or 30 days). If the value is not set, set to the empty string, or is equal to 0, the process does not delete any inactive accounts.

::: important

To enable user retention, you must set `user-retention-cron`. You must also set at least one of  `disable-inactive-user-after` or `delete-inactive-user-after`.

:::

The settings, `disable-inactive-user-after` and  `delete-inactive-user-after`, do not block each other from  running. For example, you can set both, giving `disable-inactive-user-after` a shorter duration than `delete-inactive-user-after`, so that the user retention process disables inactive accounts before deleting them.

## Optional User Retention Settings

- `UserRetentionDryRun`: If set to `true`, the user retention process runs without actually deleting or disabling any user accounts. This can help test user retention behavior before allowing the process to disable or delete user accounts in a production environment.
