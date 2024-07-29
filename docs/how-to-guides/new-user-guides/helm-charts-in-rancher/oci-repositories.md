---
title: Using OCI-Based Helm Chart Repositories
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher/oci-registries"/>
</head>

:::caution

This feature is currently experimental and is not officially supported in Rancher.

:::

Helm v3 introduced storing Helm charts as [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) artifacts in container registries. With Rancher v2.9.0, you can add [OCI-based Helm chart repositories](https://helm.sh/docs/topics/registries/) alongside HTTP-based and Git-based repositories. This means that you can deploy apps that are stored as OCI artifacts.

## Add an OCI-Based Helm Chart Repository

To add an OCI-based Helm chart repository through the Rancher UI:

1. Click **☰ > Cluster Management**.
2. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
3. In the left navigation bar, select **Apps > Repositories**.
4. Click **Create**.
5. Enter a **Name** for the registry. Select **OCI Repository** as the target.
6. Enter the **OCI Repository Host URL** for the registry. The registry endpoint must not contain anything besides OCI Helm Chart artifacts. The artifacts should all have unique names. If you attempt to add an endpoint that contains any other kinds of files or artifacts, the OCI repository will not be added. 
  
  :::note
  
  You can use the **OCI URL** field to fine-tune how many charts from the registry are availabe for installation on Rancher. More generic endpoints target more charts, as the following examples demonstrate:

    - `oci://<registry-host>`: Every chart in the registry becomes available for installation, regardless of namespace or tag.
    - `oci://<registry-host>/<namespace>`: Every chart in the specified namespace within the registry becomes available for installation.
    - `oci://<registry-host>/<namespace>/<chart-name>`: Only the specified chart and any associated tags or versions of that chart become available for installation.
    - `oci://<registry-host>/<namespace>/<chart-name>:<tag>`: Only the chart with the specified tag becomes available for installation.
  
  :::

7. Set up authentication. Select **Basicauth** from the authentication field and enter a username and password as required. Otherwise, create or select an **Authentication** secret. See [Authentication](#authentication-for-oci-based-helm-chart-repositories) for a full description.
8. (optional) Enter a base64 encoded DER certificate in the **CA Cert Bundle** field. This field is for cases where you have a private OCI-based Helm chart repository and need Rancher to trust its certificates.   
9. (optional) To allow insecure connections without performing an SSL check, select **Skip TLS Verification**. To force Rancher to use HTTP instead of HTTPS to send requests to the repository, select **Insecure Plain Http**.
10. (optional) If your repository has a rate limiting policy and may respond with status code `429 Too Many Requests`, you may want to fill out the fields under **Exponential Back Off**:
    - **Min Wait**: The minimum duration in seconds that Rancher should wait before retrying. The default is 1 second.
    - **Max Wait**: The maximum duration in seconds that Rancher should wait before retrying. The default is 5 second.
    - **Max Number of Retries**: The default is 5 retries.

    Once these values are set, Rancher responds to the `429` status code by staggering requests based on the minimum and maximum wait values. The wait time between retries increases exponentially, until Rancher has sent the maximum number of retries set. See [Rate Limiting](#rate-limiting-of-oci-based-helm-chart-repositories) for more details.
11. Add any labels and annotations.
12. Click **Create**.

It may take some time for the OCI repository to activate. This is particularly true if the OCI endpoint contains multiple namespaces. 

## Authentication for OCI-Based Helm Chart Repositories

Rancher supports BasicAuth for OCI registries. You must create a [**BasicAuth** Kubernetes secret](https://kubernetes.io/docs/concepts/configuration/secret/#basic-authentication-secret). You can also [create the secret through the Rancher UI](../kubernetes-resources-setup/secrets.md). 


The CRD that is linked to the OCI-based Helm repository is `ClusterRepo`.

## View Helm Charts in OCI-Based Helm Chart Repositories

To view Helm charts in the OCI-based Helm chart repository after it achieves an `Active` state:

1. Click **☰**. Under **Explore Cluster** in the left navigation menu, select a cluster.
1. Click **Apps > Charts**.
1. Select the OCI-based Helm chart repository from the dropdown.

## Refresh an OCI-Based Helm Chart Repository

Rancher automatically refreshes the OCI-based Helm chart repository every 6 hours. 

If you need to update immediately, you can [perform a manual refresh](../helm-charts-in-rancher/helm-charts-in-rancher.md#refresh-chart-repositories).

## Update an OCI-Based Helm Chart Repository Configuration

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation bar, select **Apps > Repositories**.
1. Find the row associated with the OCI-based Helm chart repository, and click **⋮**.
1. From the submenu, select **Edit Config**.

## Delete an OCI-Based Helm Chart Repository

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation bar, select **Apps > Repositories**.
1. Select the row associated with the OCI-based Helm chart repository, and click **Delete**.

## Size Limitations of OCI-Based Helm Chart Repositories in Rancher

Due to security concerns, there are limitations on how large of a Helm chart you can deploy through an OCI-based repository, and how much metadata you can use to describe the Helm charts within a single OCI endpoint.

Rancher can deploy OCI Helm charts up to 20 MB in size.

## Rate Limiting of OCI-Based Helm Chart Repositories

Different OCI registries implement rate limiting in different ways. 

Most servers return a `Retry-After` header, indicating how long to wait before rate limiting is lifted. 

Docker Hub returns a `429` status code when it completes all allocated requests. It also returns a `RateLimit-Remaining` header which describes the rate limiting policy. 

Rancher currently checks for the `Retry-After` header. It also handles Docker Hub-style responses (status code `429` and the `RateLimit-Remaining` header) and automatically waits before making a new request. When handling `Retry-After` or Docker Hub-style responses, Rancher ignores `ExponentialBackOff` values. 

If you have an OCI-based Helm chart repository which doesn't implement the `Retry-After` or `RateLimit-Remaining` headers, and think you may be rate-limited at some point, fill out the fields under **Exponential Back Off** when you add the repository. 

For example, if you have an OCI-based Helm chart repository that doesn't return a `Retry-After` header, but you know that the server allows 50 requests in 24 hours, you can provide Rancher a **Min Wait** value of **86400** seconds, a **Max Wait** value of **90000** seconds, and a **Max Number of Retries** value of **1**. Then, if Rancher gets rate limited by the server, Rancher will wait for 24 hours before trying again. The request should succeed as Rancher hasn't sent any other requests in the previous 24 hours.

## Troubleshooting OCI-based Helm Registries

- To enhance logging information, [enable the debug option](../../../troubleshooting/other-troubleshooting-tips/logging.md#kubernetes-install) while deploying Rancher.

- If there is any discrepancy between the repository contents and Rancher, you should refresh the cluster repository as a first resort. If the discrepancy persists, delete the OCI-based Helm chart repository from Rancher and add it again. Deleting the repository won't delete any Helm charts that are already installed.

- Apps installed through OCI-based Helm chart repositories are subject to a known issue with how Rancher displays upgradeable version information. See the [Limitations](./helm-charts-in-rancher.md#limitations) section of **Helm Charts and Apps** for more deatils.
