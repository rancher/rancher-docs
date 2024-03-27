---
title: Using OCI Helm Chart Registries
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher/oci-registries"/>
</head>

Helm v3 introduced storing Helm charts as [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) artifacts in container registries. With Rancher v2.9.0, you can add [OCI-based Helm chart registries](https://helm.sh/docs/topics/registries/) alongside http- and Git-based repositories. This means you can deploy apps that are stored as OCI artifacts.

## Add an OCI Registry

To add an OCI registry through the Rancher UI:

1. Click **☰ > Cluster Management**.
1. In the left navigation bar, under **Advanced**, select **Repositories**.
1. Click **Create**.
1. Enter a name and description for the registry. Select **OCI** as the target.
1. Enter the URL for the registry. You can use this field to finetune how many charts you want to make availabe for installation on Rancher. More generic endpoints target more charts, as the following examples demonstrate:

  1. **oci://\<registry-host\>/**: Every chart in the registry becomes available for installation, regardless of namespace or tag.
  1. **oci://\<registry-host\>/\<namespace\>**: Every chart in the specified namespace within the registry becomes available for installation.
  1. **oci://\<registry-host\>/\<namespace\>/\<chart-name\>**: Only the specified chart and any associated tags or versions of that chart become available for installation.
  1. **oci://\<registry-host\>/\<namespace\>/\<chart-name\>:\<tag\>**: Only the chart with the specified tag becomes available for installation.

1. Select **Basicauth** from the authentication field and enter a username and password as required. 
1. Add any labels and annotations.
1. Click **Create**.

It may take some time for the OCI registry to activate. This is particularly true if the OCI endpoint contains multiple repositories. 

To view Helm charts in the OCI registry after it achieves an `Active` state:

1. Click **☰**. Under **Explore Cluster** in the left navigation menu, select a cluster.
1. Click **Apps > Charts**.
1. Select the OCI repository from the dropdown.

The `spec.insecurePlainHttp` field allows insecure connections to OCI registries. When this field is set to `true`, Rancher will connect to the OCI endpoint without performing an SSL check. This works exactly the same as how the `spec.insecurePlainHttp` field works in [ORAS CLI](https://oras.land/docs/commands/use_oras_cli), since under the hood Rancher manager uses the ORAS library.

The CRD that is linked to the OCI Helm registry is `ClusterRepo`.

[Screenshot of the ClusterRepo YAML]<!-- Engineers - Can we get this screenshot? Thank you! -->

## Refresh a OCI Registry

Rancher automatically refreshes the OCI registry every 6 hours. 

If you need to update immediately, you can perform a manual refresh:

1. Click **☰ > Cluster Management**.
1. In the left navigation bar, under **Advanced**, select **Repositories**.
1. Select the row associated with the OCI registry, and click **Refresh**.

## Update OCI Registry Configuration

1. Click **☰ > Cluster Management**.
1. In the left navigation bar, under **Advanced**, select **Repositories**.
1. Find the row associated with the OCI registry, and click **⋮**.
1. From the submenu, select **Edit Config**.

## Delete an OCI Registry

1. Click **☰ > Cluster Management**.
1. In the left navigation bar, under **Advanced**, select **Repositories**.
1. Select the row associated with the OCI registry, and click **Delete**.

## Limitations of OCI-based Helm Registries in Rancher

Due to security concerns, there are limitations on how large of a Helm chart you can deploy through an OCI-based registry, and how much metadata you can use to describe the Helm charts within a single OCI endpoint.

Rancher can deploy OCI Helm charts up to 20 MB in size.

The metadata field in index.yaml can store up to 30 MB of information about the Helm charts within an OCI-based registry.

## Troubleshooting OCI-based Helm Registries <!-- Unedited draft -->

To view logs, enable the debug option of rancher 

The first option if there is any discrepancy is to refresh a cluster repository 
The last option is to delete the oci helm repository clusterrepo and readd it. This will not delete any already installed helm charts.
