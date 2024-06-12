---
title: Enabling User Retention
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-user-retention.md"/>
</head>

In Rancher v2.8.5 and later (and v2.7.14 and later in the v2.7.x line), you can enable user retention to automatically disable or delete inactive user accounts after a configurable time period.

The user retention feature is off by default.

## Enabling User Retention with Kubectl

To enable user retention, use kubectl to set `user-retention-cron`. Then, set either `delete-inactive-user-after` or `disable-inactive-user-after`, or a combination of both. In the following example, `disable-inactive-user-after` alone is set. The example command runs the user retention daemon every hour to disable accounts that have been inactive for the past 30 days:

```
kubectl edit user-retention-cron 0 * * * *
kubectl edit disable-inactive-user-after 720h
```

### Required User Retention Settings

- `user-retention-cron`: Describes how often the user retention process runs. The value is a cron expression (for example, `0 * * * *` for every hour).
- `disable-inactive-user-after`: The amount of time that a user account can be inactive before the process disables an account. Values are expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) (for example, `720h` for 720 hours or 30 days). The value must be greater than `auth-user-session-ttl-minutes`, which is `16h` by default. If the value is not set, set to the empty string, or is equal to 0, the process does not disable any inactive accounts.
- `delete-inactive-user-after`: The amount of time that a user account can be inactive before the process deletes the account. Values are expressed in [time.Duration units](https://pkg.go.dev/time#ParseDuration) (for example, `720h` for 720 hours or 30 days). The value must be greater than `auth-user-session-ttl-minutes`, which is `16h` by default. The value should be greater than `336h` (14 days), otherwise it is rejected by the Rancher webhook. If you need the value to be lower than 14 days, you can [bypass the webhook](../../reference-guides/rancher-webhook.md#bypassing-the-webhook). If the value is not set, set to the empty string, or is equal to 0, the process does not delete any inactive accounts.

::: important

To enable user retention, you must set `user-retention-cron`. You must also set at least one of  `disable-inactive-user-after` or `delete-inactive-user-after`.

:::

The settings, `disable-inactive-user-after` and  `delete-inactive-user-after`, do not block one another from  running. For example, you can set both, giving `disable-inactive-user-after` a shorter duration than `delete-inactive-user-after`, so that the user retention process disables inactive accounts before deleting them.

### Optional User Retention Settings

- `user-retention-dry-run`: If set to `true`, the user retention process runs without actually deleting or disabling any user accounts. This can help test user retention behavior before allowing the process to disable or delete user accounts in a production environment.
- `user-last-login-default`: If a user does not have `UserAttribute.LastLogin` set on their account, this setting is used instead. The value is expressed as an [RFC 3339 date-time](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) truncated to the last second; for example, `2023-03-01T00:00:00Z`. If the value is set to the empty string or to a `time.Time` zero value, this settings is not used.