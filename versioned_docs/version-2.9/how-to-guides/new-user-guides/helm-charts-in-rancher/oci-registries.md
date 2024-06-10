---
title: Using OCI Helm Chart Repositories
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher/oci-registries"/>
</head>

Helm v3 introduced storing Helm charts as [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) artifacts in container registries. With Rancher v2.9.0, you can add [OCI-based Helm chart registries](https://helm.sh/docs/topics/registries/) alongside http- and Git-based repositories. This means that you can deploy apps that are stored as OCI artifacts. As of Rancher v2.9.0, this feature is experimental.

## Add an OCI Repository

To add an OCI registry through the Rancher UI:

1. Click **☰ > Cluster Management**.
2. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
3. In the left navigation bar, select **Apps > Repositories**.
4. Click **Create**.
5. Enter a **Name** and **Description** for the registry. Select **OCI Repository** as the target.
6. Enter the URL for the registry. The registry endpoint must not contain anything besides OCI Helm Chart artifacts. The artifacts should all have unique names. If you attempt to add an endpoint that contains any other kinds of files or artifacts, the OCI repository will not be added. 
  
  :::note
  
  You can use the **OCI URL** field to finetune how many charts from the registry are availabe for installation on Rancher. More generic endpoints target more charts, as the following examples demonstrate:

  - **oci://\<registry-host\>/**: Every chart in the registry becomes available for installation, regardless of namespace or tag.
  - **oci://\<registry-host\>/\<namespace\>**: Every chart in the specified namespace within the registry becomes available for installation.
  - **oci://\<registry-host\>/\<namespace\>/\<chart-name\>**: Only the specified chart and any associated tags or versions of that chart become available for installation.
  - **oci://\<registry-host\>/\<namespace\>/\<chart-name\>:\<tag\>**: Only the chart with the specified tag becomes available for installation.
  
  :::

7. Select **Basicauth** from the authentication field and enter a username and password as required. 
8. Add any labels and annotations.
9. Click **Create**.

It may take some time for the OCI registry to activate. This is particularly true if the OCI endpoint contains multiple repositories. 

## Authentication for OCI Registries

Rancher supports BasicAuth for OCI registries. You must create a [**BasicAuth** Kubernetes secret](https://kubernetes.io/docs/concepts/configuration/secret/#basic-authentication-secret). You can [create the secret through the Rancher UI](../kubernetes-resources-setup/secrets.md). 

Rancher 2.9.0 also adds the `spec.insecurePlainHttp` field, which allows insecure connections to OCI registries. When this field is set to `true`, Rancher connects to the OCI endpoint without performing an SSL check. This works exactly the same as how the `spec.insecurePlainHttp` field works in [ORAS CLI](https://oras.land/docs/commands/use_oras_cli), since Rancher uses the ORAS library.

The CRD that is linked to the OCI Helm registry is `ClusterRepo`.

[Screenshot of the ClusterRepo YAML]<!-- Engineers - Can we get this screenshot? Thank you! -->

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

## Limitations of OCI-based Helm Chart Registries in Rancher

Due to security concerns, there are limitations on how large of a Helm chart you can deploy through an OCI-based registry, and how much metadata you can use to describe the Helm charts within a single OCI endpoint.

Rancher can deploy OCI Helm charts up to 20 MB in size.

The metadata field in index.yaml can store up to 30 MB of information about the Helm charts within an OCI-based registry.

## Troubleshooting OCI-based Helm Registries <!-- Unedited draft -->

To view logs, enable the debug option of rancher 

The first option if there is any discrepancy is to refresh a cluster repository 
The last option is to delete the oci helm repository clusterrepo and readd it. This will not delete any already installed helm charts.
