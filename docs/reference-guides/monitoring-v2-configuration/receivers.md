---
title: Receiver Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/monitoring-v2-configuration/receivers"/>
</head>

The [Alertmanager Config](https://prometheus.io/docs/alerting/latest/configuration/#configuration-file) Secret contains the configuration of an Alertmanager instance that sends out notifications based on alerts it receives from Prometheus.

:::note

This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see [this section.](../../integrations-in-rancher/monitoring-and-alerting/how-monitoring-works.md#3-how-alertmanager-works)

:::


## Creating Receivers in the Rancher UI

:::note Prerequisites:

- The monitoring application needs to be installed.
- If you configured monitoring with an existing Alertmanager Secret, it must have a format that is supported by Rancher's UI. Otherwise you will only be able to make changes based on modifying the Alertmanager Secret directly. Note: We are continuing to make enhancements to what kinds of Alertmanager Configurations we can support using the Routes and Receivers UI, so please [file an issue](https://github.com/rancher/rancher/issues/new) if you have a request for a feature enhancement.

:::

<Tabs>
<TabItem value="Rancher v2.6.5+">

1. Go to the cluster where you want to create receivers. Click **Monitoring -> Alerting -> AlertManagerConfigs**.
1. Click **Create**.
1. Enter a **Name** for the new AlertmanagerConfig. 
1. Click **Create**.
1. After creating the AlertManagerConfig, click it to add a receiver.
1. Click **Add Receiver**.
1. Enter a **Name** for the receiver.
1. Configure one or more providers for the receiver. For help filling out the forms, refer to the configuration options below.
1. Click **Create**.

</TabItem>
<TabItem value="Rancher before v2.6.5">

1. Go to the cluster where you want to create receivers. Click **Monitoring** and click **Receiver**.
2. Enter a name for the receiver.
3. Configure one or more providers for the receiver. For help filling out the forms, refer to the configuration options below.
4. Click **Create**.

</TabItem>
</Tabs>

**Result:** Alerts can be configured to send notifications to the receiver(s).

## Receiver Configuration

The notification integrations are configured with the `receiver`, which is explained in the [Prometheus documentation.](https://prometheus.io/docs/alerting/latest/configuration/#receiver)

### Native vs. Non-native Receivers

By default, AlertManager provides native integration with some receivers, which are listed in [this section.](https://prometheus.io/docs/alerting/latest/configuration/#receiver) All natively supported receivers are configurable through the Rancher UI.

For notification mechanisms, such as Telegram, that are not natively supported by AlertManager, integration is achieved using the [webhook receiver.](https://prometheus.io/docs/alerting/latest/configuration/#webhook_config) A list of third-party drivers providing such integrations can be found [here.](https://prometheus.io/docs/operating/integrations/#alertmanager-webhook-receiver) Access to these drivers, and their associated integrations, is provided through the Alerting Drivers app. Once enabled, configuring non-native receivers can also be done through the Rancher UI.

Currently the Rancher Alerting Drivers app provides access to the following integrations:
- Microsoft Teams, based on the [prom2teams](https://github.com/idealista/prom2teams) driver.
- Telegram, based on the [Sachet](https://github.com/messagebird/sachet) driver.

The following types of receivers can be configured in the Rancher UI:

- <a href="#slack">Slack</a>
- <a href="#email">Email</a>
- <a href="#pagerduty">PagerDuty</a>
- <a href="#opsgenie">Opsgenie</a>
- <a href="#webhook">Webhook</a>
- <a href="#custom">Custom</a>
- <a href="#teams">Teams</a>
- <a href="#sms">SMS</a>
- <a href="#telegram">Telegram</a>

The custom receiver option can be used to configure any receiver in YAML that cannot be configured by filling out the other forms in the Rancher UI.

## Slack

| Field | Type | Description |
|------|--------------|------|
| URL | String   |  Enter your Slack webhook URL. For instructions to create a Slack webhook, see the [Slack documentation.](https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack)  |
| Default Channel |  String   |  Enter the name of the channel that you want to send alert notifications in the following format: `#<channelname>`. |
| Proxy URL   |    String    |  Proxy for the webhook notifications.  |
| Enable Send Resolved Alerts |   Bool    |  Whether to send a follow-up notification if an alert has been resolved (e.g. [Resolved] High CPU Usage). |

## Email

| Field | Type | Description |
|------|--------------|------|
| Default Recipient Address |   String    |   The email address that will receive notifications.    |
| Enable Send Resolved Alerts |  Bool    |   Whether to send a follow-up notification if an alert has been resolved (e.g. [Resolved] High CPU Usage). |

SMTP options:

| Field | Type | Description |
|------|--------------|------|
| Sender |   String       |  Enter an email address available on your SMTP mail server that you want to send the notification from.   |
| Host |   String         | Enter the IP address or hostname for your SMTP server. Example: `smtp.email.com`. |
| Use TLS |   Bool     | Use TLS for encryption. |
| Username |   String   | Enter a username to authenticate with the SMTP server. |
| Password |   String    | Enter a password to authenticate with the SMTP server. |

## PagerDuty

| Field | Type | Description |
|------|------|-------|
| Integration Type | String | `Events API v2` or `Prometheus`. |
| Default Integration Key | String |  For instructions to get an integration key, see the [PagerDuty documentation.](https://www.pagerduty.com/docs/guides/prometheus-integration-guide/)  |
| Proxy URL | String |  Proxy for the PagerDuty notifications.  |
| Enable Send Resolved Alerts |  Bool    |   Whether to send a follow-up notification if an alert has been resolved (e.g. [Resolved] High CPU Usage). |

## Opsgenie

| Field | Description |
|------|-------------|
| API Key |   For instructions to get an API key, refer to the [Opsgenie documentation.](https://docs.opsgenie.com/docs/api-key-management)             |
| Proxy URL |   Proxy for the Opsgenie notifications.        |
| Enable Send Resolved Alerts | Whether to send a follow-up notification if an alert has been resolved (e.g. [Resolved] High CPU Usage).  |

Opsgenie Responders:

| Field |    Type | Description |
|-------|------|--------|
| Type | String | Schedule, Team, User, or Escalation. For more information on alert responders, refer to the [Opsgenie documentation.](https://docs.opsgenie.com/docs/alert-recipients-and-teams) |
| Send To | String | Id, Name, or Username of the Opsgenie recipient. |

## Webhook

| Field |    Description |
|-------|--------------|
| URL | Webhook URL for the app of your choice. |
| Proxy URL | Proxy for the webhook notification. |
| Enable Send Resolved Alerts | Whether to send a follow-up notification if an alert has been resolved (e.g. [Resolved] High CPU Usage).    |

## Custom

The YAML provided here will be directly appended to your receiver within the Alertmanager Config Secret.

## Teams

### Enabling the Teams Receiver for Rancher Managed Clusters

The Teams receiver is not a native receiver and must be enabled before it can be used. You can enable the Teams receiver for a Rancher managed cluster by going to the Apps page and installing the rancher-alerting-drivers app with the Teams option selected.

1. In the Rancher UI, go to the cluster where you want to install rancher-alerting-drivers and click **Apps**.
1. Click the **Alerting Drivers** app.
1. Click the **Helm Deploy Options** tab.
1. Select the **Teams** option and click **Install**.
1. Take note of the namespace used as it will be required in a later step.

### Configuring the Teams Receiver

1. To configure the Teams receiver, update its ConfigMap. The following example is a minimal Teams receiver configuration:

    ```yaml
    [Microsoft Teams]
    connector: https://your-teams-webhook-url
    ```

2. After you update the configuration, follow the instructions in [Creating Receivers in the Rancher UI](#creating-receivers-in-the-rancher-ui) to add the receiver. Use the example below to form your URL. Make sure to replace `<namespace>` with the namespace of the `rancher-alerting-drivers` app:

    ```yaml
    url: http://rancher-alerting-drivers-prom2teams.<namespace>.svc:8089/v2/connector
    ```

<!-- https://github.com/idealista/prom2teams -->

## SMS

### Enabling the SMS Receiver for Rancher Managed Clusters

The SMS receiver is not a native receiver and must be enabled before it can be used. You can enable the SMS receiver for a Rancher managed cluster by going to the Apps page and installing the rancher-alerting-drivers app with the SMS option selected.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to install `rancher-alerting-drivers` and click **Explore**.
1. In the left navigation bar, click
1. Click the **Alerting Drivers** app.
1. Click the **Helm Deploy Options** tab
1. Select the **SMS** option and click **Install**.
1. Take note of the namespace used as it will be required in a later step.

### Configuring the SMS Receiver

The SMS receiver can be configured by updating its ConfigMap. For example, the following is a minimal SMS receiver configuration.

```yaml
providers:
  telegram:
    token: 'your-token-from-telegram'

receivers:
- name: 'telegram-receiver-1'
  provider: 'telegram'
  to:
    - '123456789'
```

When configuration is complete, add the receiver using the steps in [this section](#creating-receivers-in-the-rancher-ui).

Use the example below as the name and URL, where:

- the name assigned to the receiver, e.g. `telegram-receiver-1`, must match the name in the `receivers.name` field in the ConfigMap, e.g. `telegram-receiver-1`
- `ns-1` in the URL is replaced with the namespace where the `rancher-alerting-drivers` app is installed

```yaml
name: telegram-receiver-1
url http://rancher-alerting-drivers-sachet.ns-1.svc:9876/alert
```

<!-- https://github.com/messagebird/sachet -->

## Telegram

### Enabling the Telegram Receiver for Rancher Managed Clusters

The Telegram receiver is not a native receiver. You must enable it before it can be used. You can enable the Telegram receiver for a Rancher-managed cluster by going to the **Apps** page and installing the `rancher-alerting-drivers` app with the **Telegram** option selected:

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to install `rancher-alerting-drivers` and click **Explore**.
1. In the left navigation bar, click on **Apps**.
1. Click the **Alerting Drivers** app.
1. Click on **Install**.
1. In the page that opens next, make sure that **Enable SMS** checkbox is selected. Telegram notifications require you to enable SMS.
1. Take note of the namespace used as it will be required in a later step.

### Test the Configuration by Configuring a PrometheusRule

To test your Telegram setup, create a **PrometheusRule** that continuously raises alerts. 

:::caution NOTE
This rule is intended only to test if Telegram alerts work as expected. Do not leave it on after testing is completed.
:::

1. In the left navigation menu, click **Monitoring**.
1. Click **Advanced**.
1. Click **PrometheusRules > Create**.
1. Select a namespace to place the rule in and name the rule appropriately. 
1. Set the group name to `test`. Use this value later when you create a **Route** in the **AlertManagerConfig**.
1. Under **Alerting Rules** click **Add**.
1. Set an appropriate **Alert Name**.
1. To trigger the alert immediately and continuously, enter the following PromQL Expression: `vector(1)`.
1. Under **Labels**, click **Add Label**. Enter the key `test` and value `alert`. This key-value pair will also be used later.

#### Configure an AlertManagerConfig

Configure an **AlertManagerConfig** to contain the **Receiver** and **Route** configuration for the **PrometheusRule** created above:
1. Click **Monitoring > Alerting**, and open **AlertManagerConfigs**.
1. Click **Create**

#### Create a Receiver in AlertManagerConfig

1. Choose a namespace from the dropdown and set an appropriate name. 
1. Click **Create**.
1. Open the newly created **AlertManagerConfig** and click **⋮ > Edit Config**.
1. Click **Add Receiver**.
1. Select **Webhook** from the list on the **Create Receiver in AlertmanagerConfig** page. 
1. Name the webhook, and click **Add Webhook**. 
1. In the **Select Webhook Type** dropdown, select **SMS**. This will automatically populate the **Target** field as `http://rancher-alerting-drivers-sachet.cattle-monitoring-system.svc:9876/alert`. If you installed the **Alerting Drivers** in a namespace other than `cattle-monitoring-system`, the target URL will reflect that. 
1. Click **Create**.

#### Create a Route in AlertManagerConfig

1. Click **⋮ > Edit Config**.
1. Click **Route**.
1. In the dropdown, select the **Receiver** you just created.
1. In the **Labels to Group Alerts By** field, type `test`.
1. Under **Waiting and Intervals**, set **Group Wait** to `1s` and **Group Interval** to `10s`. This triggers frequent alerts. Change the values as appropriate.
1. Under **Matchers** click **Add Matcher**. Enter `test` in the **Name** field and `alert` in the **Value** field. From the **Match Type** dropdown, select `MatchEqual`.
1. Click **Save**.

### Configuring the Telegram Receiver

You can configure the Telegram receiver by updating the `rancher-alerting-drivers-sachet` ConfigMap in the `cattle-monitoring-system` namespace. For example, the following is a minimal Telegram receiver configuration:

```yaml
providers:
  telegram:
    token: <your-token-from-telegram>

receivers:
- name: 'cattle-monitoring-system/test-amc/prom2tel'
  provider: 'telegram'
  to:
    - '123456789'
```

To obtain a Telegram token, setup a Telegram bot. Refer to the [official Telegram guide](https://core.telegram.org/bots/tutorial) for details.
After you finish configuring the receiver, [add](#creating-receivers-in-the-rancher-ui) it. 

Name the receiver `<namespace>/<alertmanagerconfig-name>/<receiver-name>`. Enter `123456789` as a placeholder for the Telegram user ID to send the notifications to. To find your Telegram ID, check [the Telegram userinfo bot](https://telegram.me/userinfobot).

You should now receive Telegram notifications to the user ID. If you don't receive notifications, please check if there are any errors reported in the Pod for the Deployment `rancher-alerting-drivers-sachet` under the `cattle-monitoring-system` namespace.

## Configuring Multiple Receivers

By editing the forms in the Rancher UI, you can set up a Receiver resource with all the information Alertmanager needs to send alerts to your notification system.

It is also possible to send alerts to multiple notification systems. One way is to configure the Receiver using custom YAML, in which case you can add the configuration for multiple notification systems, as long as you are sure that both systems should receive the same messages.

You can also set up multiple receivers by using the `continue` option for a route, so that the alerts sent to a receiver continue being evaluated in the next level of the routing tree, which could contain another receiver.


## Example Alertmanager Configs

### Slack
To set up notifications via Slack, the following Alertmanager Config YAML can be placed into the `alertmanager.yaml` key of the Alertmanager Config Secret, where the `api_url` should be updated to use your Webhook URL from Slack:

```yaml
route:
  group_by: ['job']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 3h
  receiver: 'slack-notifications'
receivers:
- name: 'slack-notifications'
  slack_configs:
  - send_resolved: true
    text: '{{ template "slack.rancher.text" . }}'
    api_url: <user-provided slack webhook url here>
templates:
- /etc/alertmanager/config/*.tmpl
```

### PagerDuty
To set up notifications via PagerDuty, use the example below from the [PagerDuty documentation](https://www.pagerduty.com/docs/guides/prometheus-integration-guide/) as a guideline. This example sets up a route that captures alerts for a database service and sends them to a receiver linked to a service that will directly notify the DBAs in PagerDuty, while all other alerts will be directed to a default receiver with a different PagerDuty integration key.

The following Alertmanager Config YAML can be placed into the `alertmanager.yaml` key of the Alertmanager Config Secret. The `service_key` should be updated to use your PagerDuty integration key and can be found as per the "Integrating with Global Event Routing" section of the PagerDuty documentation. For the full list of configuration options, refer to the [Prometheus documentation](https://prometheus.io/docs/alerting/latest/configuration/#pagerduty_config).

```yaml
route:
 group_by: [cluster]
 receiver: 'pagerduty-notifications'
 group_interval: 5m
 routes:
  - match:
      service: database
    receiver: 'database-notifications'

receivers:
- name: 'pagerduty-notifications'
  pagerduty_configs:
  - service_key: 'primary-integration-key'

- name: 'database-notifications'
  pagerduty_configs:
  - service_key: 'database-integration-key'
```

## Example Route Config for Compliance Scan Alerts

While configuring the routes for `rancher-compliance` alerts, you can specify the matching using the key-value pair `job: rancher-compliance-scan`.

For example, the following example route configuration could be used with a Slack receiver named `test-compliance`:

```yaml
spec:
  receiver: test-compliance
  group_by:
#    - string
  group_wait: 30s
  group_interval: 30s
  repeat_interval: 30s
  match:
    job: rancher-compliance-scan
#    key: string
  match_re:
    {}
#    key: string
```

For more information on enabling alerting for `rancher-compliance-benchmark`, see [this section.](../../how-to-guides/advanced-user-guides/compliance-scan-guides/enable-alerting-for-rancher-compliance.md)

## Trusted CA for Notifiers

If you need to add a trusted CA to your notifier, follow the steps in [this section.](helm-chart-options.md#trusted-ca-for-notifiers)
