---
title: Using OCI Helm Chart Repositories
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher/oci-repositories"/>
</head>

Helm version 3 introduced the feature of storing helm charts as [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) artifacts in OCI registries. With Rancher 2.9.0, the repositories page in Apps section supports adding [OCI-based Helm chart repositories](https://helm.sh/docs/topics/registries/). Keep in mind that the right now this feature is experimental.

### Create an OCI based Helm repository 

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Click **Create**.
1. Enter the **Name** and **Description** that is appropriate.
1. Select the target, **OCI Repository**.
1. Enter the **OCI URL**. The endpoint must not contain anything besides OCI Helm Chart artifacts. If you attempt to add an endpoint that contains any other kinds of files or artifacts, the OCI registry will not be added. Also make sure that the URL only contains uniquely named OCI artifacts. 

:::note

You can use the **OCI URL** field to finetune how many charts from the registry are availabe for installation on Rancher. More generic endpoints target more charts, as the following examples demonstrate:

- **oci://\<registry-host\>/**: Every chart in the registry becomes available for installation, regardless of namespace or tag.

- **oci://\<registry-host\>/\<namespace\>**: Every chart in the specified namespace within the registry becomes available for installation.

- **oci://\<registry-host\>/\<namespace\>/\<chart-name\>**: Only the specified chart and any associated tags or versions of that chart become available for installation.

- **oci://\<registry-host\>/\<namespace\>/\<chart-name\>:\<tag\>**: Only the chart with the specified tag becomes available for installation.

:::

1. Create/Select **Authentication** secret. More info at [Authentication](#authentication).
1. Click **Create** to add the repository.

It may take some time for the OCI registry to activate. This is particularly true if the OCI endpoint contains multiple repositories.

There are more fields that the user can define. Explanataion is given [here](#explanation-of-fields))

##### Authentication

Rancher supports BasicAuth for OCI registries. You must create a [**BasicAuth** Kubernetes secret](https://kubernetes.io/docs/concepts/configuration/secret/#basic-authentication-secret). You can [create the secret through the Rancher UI](../kubernetes-resources-setup/secrets.md).


A new field has been introduced only for OCI URLs which is spec.insecurePlainHttp. This allows insecure connections to registry without SSL check and works exactly how the field works in ORAS CLI - [https://oras.land/docs/commands/use_oras_cli](https://oras.land/docs/commands/use_oras_cli) since under the hood Rancher manager uses oras library

##### Explanation of fields 

* Ca Cert Bundle: This field accepts a base64 encoding of a DER certificate. This is useful if you have a private OCI registry and Rancher needs to trust the certificates of the private OCI registry that you have deployed. 

* Skip TLS Verifications: If this checkbox is enabled then Rancher allows insecure connections to registry without SSL check.

* InsecurePlainHttp: If this checkbox is enabled, the Rancher makes HTTP requests to the oras registry instead of HTTPS requests. This works exactly the same as how the `--plainHttp` flag works in [ORAS CLI](https://oras.land/docs/commands/use_oras_cli), since Rancher uses the ORAS library.

* ExponentialBackOff: This field only makes sense when the OCI regitries send back HTTP Status code 429 TOOMANYREQUESTS. There are three fields in here MinWait, MaxWait and MaxRetry. The default values used here are 1 second, 1 second and 5 retries. So when the OCI registry sends back 429 Status Code, Rancher calculates a duration based on minWait and MaxWait increasing exponentially after each retry and waits for that specific duration before makine another attempt. Rancher retries for 5 times.  

#### RateLimiting of OCI Registeries

Different OCI registries implement rate limiting in different ways. Dockerhub returns 429 status code when the number of requests allocated are completed. It also sends in RateLimit-Remaining header which indicates it rate limiting policy. Some other servers return `Retry-After` header indicating how much duration to wait for rate limiting to be lifted. Rancher currently checks for `Retry-After` header and also handles the case of Dockerhub and automatically waits until making a new request. The `ExponentialBackOff` values are ignored in this case. 

If you have a OCI registry which doens't implemnt `Retry-After` header or which behaves differently than Dockerhub, then you could use the [ExponentialBackOff](#explanation-of-fields) field to provide your values. 

Example: You have an OCI registry which doesn't send any HTTP headers but you know that it allows 50 requests in 24 hours. You could provide MinWait as 86400 seconds and MaxWait as 90000 seconds and Maxretry as 1. This would allow adding the Helm repository complete but it would take 24 hours if Rancher gets rate limited. There is no user intervention needed here.

## View Helm Charts in OCI Registries

To view Helm charts in the OCI registry after it achieves an `Active` state:

1. Click **☰**. Under **Explore Cluster** in the left navigation menu, select a cluster.
1. Click **Apps > Charts**.
1. Select the OCI repository from the dropdown.

## Refresh an OCI Registry

Rancher automatically refreshes the OCI registry every 6 hours. 

If you need to update immediately, you can perform a manual refresh:

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation bar, select **Apps > Repositories**.
1. Select the row associated with the OCI registry, and click **Refresh**.

## Update OCI Registry Configuration

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation bar, select **Apps > Repositories**.
1. Find the row associated with the OCI registry, and click **⋮**.
1. From the submenu, select **Edit Config**. 


## Delete an OCI Registry

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation bar, select **Apps > Repositories**.
1. Select the row associated with the OCI registry, and click **Delete**.


### Refresh OCI based helm repository

Rancher manager refreshes the repository every 6 hours But if you want to refresh immediately, select the repository and click on refresh on the top. 

For docs about how to install/unsintall/update a helm chart please refer to this doc link

## Limitations of OCI-based Helm Chart Registries in Rancher

Due to security concerns, there are limitations on how large of a Helm chart you can deploy through an OCI-based registry, and how much metadata you can use to describe the Helm charts within a single OCI endpoint.

Rancher can deploy OCI Helm charts up to 20 MB in size.
The metadata field in index.yaml can store up to 30 MB of information about the Helm charts within an OCI-based registry.
Make sure that duplicate helm chart names are not present in the OCI registry.

## Troubleshooting OCI-based Helm Registries 

To view logs, enable the debug option of rancher to check logs of the rancher pod. 

The first option if there is any discrepancy is to refresh the helm repository 
The last option is to delete the oci helm repository clusterrepo and readd it. This will not delete any already installed helm charts.

