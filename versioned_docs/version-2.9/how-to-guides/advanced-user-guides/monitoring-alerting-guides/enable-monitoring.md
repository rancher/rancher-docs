---
title: Enable Monitoring
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"/>
</head>

As an [administrator](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md) or [cluster owner](../../new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles), you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster.

This page describes how to enable monitoring and alerting within a cluster using the new monitoring application.

You can enable monitoring with or without SSL.

## Requirements

- Allow traffic on port 9796 for each of your nodes. Prometheus scrapes metrics from these ports.
  - You may also need to allow traffic on port 10254 for each of your nodes, if [PushProx](../../../integrations-in-rancher/monitoring-and-alerting/how-monitoring-works.md#pushprox) is disabled (`ingressNginx.enabled` set to `false`), or you've upgraded from a previous Rancher version that had v1 monitoring already installed.
- Make sure that your cluster fulfills the resource requirements. The cluster should have at least 1950Mi memory available, 2700m CPU, and 50Gi storage. See [Configuring Resource Limits and Requests](../../../reference-guides/monitoring-v2-configuration/helm-chart-options.md#configuring-resource-limits-and-requests) for a breakdown of the resource limits and requests.
- When you install monitoring on an RKE cluster that uses RancherOS or Flatcar Linux nodes, change the etcd node certificate directory to `/opt/rke/etc/kubernetes/ssl`.
- For clusters that have been provisioned with the RKE CLI and that have the address set to a hostname instead of an IP address, set `rkeEtcd.clients.useLocalhost` to `true` when you configure the Values during installation. For example:

```yaml
rkeEtcd:
  clients:
    useLocalhost: true
```

:::note

If you want to set up Alertmanager, Grafana or Ingress, it has to be done with the settings on the Helm chart deployment. It's problematic to create Ingress outside the deployment.

:::

## Setting Resource Limits and Requests

The resource requests and limits can be configured when installing `rancher-monitoring`.  To configure Prometheus resources from the Rancher UI, click **Apps > Monitoring** in the upper left corner.

For more information about the default limits, see [this page.](../../../reference-guides/monitoring-v2-configuration/helm-chart-options.md#configuring-resource-limits-and-requests)

## Install the Monitoring Application

### Enable Monitoring for use without SSL

1. Click **☰ > Cluster Management**.
1. Go to the cluster that you created and click **Explore**.
1. Click **Cluster Tools** (bottom left corner).
1. Click **Install** by Monitoring.
1. Optional: Customize requests, limits and more for Alerting, Prometheus, and Grafana in the Values step. For help, refer to the [configuration reference.](../../../reference-guides/monitoring-v2-configuration/helm-chart-options.md)

**Result:** The monitoring app is deployed in the `cattle-monitoring-system` namespace.

### Enable Monitoring for use with SSL

1. Follow the steps on [this page](../../new-user-guides/kubernetes-resources-setup/secrets.md) to create a secret in order for SSL to be used for alerts.
 - The secret should be created in the `cattle-monitoring-system` namespace. If it doesn't exist, create it first.
 - Add the `ca`, `cert`, and `key` files to the secret.
1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster where you want to enable monitoring for use with SSL and click **Explore**.
1. Click **Apps > Charts**.
1. Click **Monitoring**.
1. Click **Install** or **Update**, depending on whether you have already installed Monitoring.
1. Check the box for **Customize Helm options before install** and click **Next**.
1. Click **Alerting**.
1. In the **Additional Secrets** field, add the secrets created earlier.

**Result:** The monitoring app is deployed in the `cattle-monitoring-system` namespace.

When [creating a receiver,](../../../reference-guides/monitoring-v2-configuration/receivers.md#creating-receivers-in-the-rancher-ui) SSL-enabled receivers such as email or webhook will have a **SSL** section with fields for **CA File Path**, **Cert File Path**, and **Key File Path**. Fill in these fields with the paths to each of `ca`, `cert`, and `key`. The path will be of the form `/etc/alertmanager/secrets/name-of-file-in-secret`.

For example, if you created a secret with these key-value pairs:

```yaml
ca.crt=`base64-content`
cert.pem=`base64-content`
key.pfx=`base64-content`
```

Then **Cert File Path** would be set to `/etc/alertmanager/secrets/cert.pem`.

## Rancher Performance Dashboard

When monitoring is installed on the upstream (local) cluster, you are given basic health metrics about the Rancher pods, such as CPU and memory data. To get advanced metrics for your local Rancher server, you must additionally enable the Rancher Performance Dashboard for Grafana.

This dashboard provides access to the following advanced metrics:

- Handler Average Execution Times Over Last 5 Minutes
- Rancher API Average Request Times Over Last 5 Minutes
- Subscribe Average Request Times Over Last 5 Minutes
- Lasso Controller Work Queue Depth (Top 20)
- Number of Rancher Requests (Top 20)
- Number of Failed Rancher API Requests (Top 20)
- K8s Proxy Store Average Request Times Over Last 5 Minutes (Top 20)
- K8s Proxy Client Average Request Times Over Last 5 Minutes (Top 20)
- Cached Objects by GroupVersionKind (Top 20)
- Lasso Handler Executions (Top 20)
- Handler Executions Over Last 2 Minutes (Top 20)
- Total Handler Executions with Error (Top 20)
- Data Transmitted by Remote Dialer Sessions (Top 20)
- Errors for Remote Dialer Sessions (Top 20)
- Remote Dialer Connections Removed (Top 20)
- Remote Dialer Connections Added by Client (Top 20)

:::note

Profiling data (such as advanced memory or CPU analysis) is not present as it is a very context-dependent technique that's meant for debugging and not intended for normal observation.

:::

### Enabling the Rancher Performance Dashboard

To enable the Rancher Performance Dashboard:

<Tabs groupId="UIorCLI">
<TabItem value="Helm">

Use the following options with the Helm CLI:

```bash
--set extraEnv\[0\].name="CATTLE_PROMETHEUS_METRICS" --set-string extraEnv\[0\].value=true
```

You can also include the following snippet in your Rancher Helm chart's values.yaml file:

```yaml
extraEnv:
  - name: "CATTLE_PROMETHEUS_METRICS"
    value: "true"
```

</TabItem>
<TabItem value="UI">

1. Click **☰ > Cluster Management**.
1. Go to the row of the `local` cluster and click **Explore**.
1. Click **Workloads > Deployments**.
1. Use the dropdown menu at the top to filter for **All Namespaces**.
1. Under the `cattle-system` namespace, go to the `rancher` row and click **⋮ > Edit Config**
1. Under **Environment Variables**, click **Add Variable**.
1. For **Type**, select `Key/Value Pair`.
1. For **Variable Name**, enter `CATTLE_PROMETHEUS_METRICS`.
1. For **Value**, enter `true`.
1. Click **Save** to apply the change.

</TabItem>
</Tabs>

### Accessing the Rancher Performance Dashboard

1. Click **☰ > Cluster Management**.
1. Go to the row of the `local` cluster and click **Explore**.
1. Click **Monitoring**
1. Select the **Grafana** dashboard.
1. From the sidebar, click **Search dashboards**.
1. Enter `Rancher Performance Debugging` and select it.
