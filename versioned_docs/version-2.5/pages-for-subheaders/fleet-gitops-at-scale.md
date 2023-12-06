---
title: Continuous Delivery with Fleet
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"/>
</head>

_Available as of Rancher v2.5_

Continuous Delivery with Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It’s also lightweight enough that it works great for a [single cluster](https://fleet.rancher.io/installation#default-install) too, but it really shines when you get to a [large scale](https://fleet.rancher.io/installation#configuration-for-multi-cluster). By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization.

Fleet is a separate project from Rancher, and can be installed on any Kubernetes cluster with Helm.


## Architecture

For information about how Fleet works, see [this page](../explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture.md).

## Accessing Fleet in the Rancher UI

Fleet comes preinstalled in Rancher v2.5. Users can leverage continuous delivery to deploy their applications to the Kubernetes clusters in the git repository without any manual operation by following **gitops** practice. For additional information on Continuous Delivery and other Fleet troubleshooting tips, refer [here](https://fleet.rancher.io/troubleshooting).

Follow the steps below to access Continuous Delivery in the Rancher UI:

1. Click **Cluster Explorer** in the Rancher UI.

1. In the top left dropdown menu, click **Cluster Explorer > Continuous Delivery**.

1. Select your namespace at the top of the menu, noting the following:

    - By default, **fleet-default** is selected which includes all downstream clusters that are registered through Rancher.

    - You may switch to **fleet-local**, which only contains the **local** cluster, or you may create your own workspace to which you may assign and move clusters.

    - You can then manage clusters by clicking on **Clusters** on the left navigation bar.

1. Click on **Gitrepos** on the left navigation bar to deploy the gitrepo into your clusters in the current workspace.

1. Select your [git repository](https://fleet.rancher.io/gitrepo-add) and [target clusters/cluster group](https://fleet.rancher.io/gitrepo-targets). You can also create the cluster group in the UI by clicking on **Cluster Groups** from the left navigation bar.

1. Once the gitrepo is deployed, you can monitor the application through the Rancher UI.

## Windows Support

_Available as of v2.5.6_

For details on support for clusters with Windows nodes, see [this page](../explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support.md).

## GitHub Repository

The Fleet Helm charts are available [here](https://github.com/rancher/fleet/releases/tag/v0.3.10).

## Using Fleet Behind a Proxy

_Available as of v2.5.8_

For details on using Fleet behind a proxy, see [this page](../explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy.md).

## Helm Chart Dependencies

In order for Helm charts with dependencies to deploy successfully, you must run a manual command (as listed below), as it is up to the user to fulfill the dependency list. If you do not do this and proceed to clone your repository and run `helm install`, your installation will fail because the dependencies will be missing.

The Helm chart in the git repository must include its dependencies in the charts subdirectory. You must either manually run `helm dependencies update $chart` or run `helm dependencies build $chart` locally, then commit the complete charts directory to your git repository. Note that you will update your commands with the applicable parameters

## Troubleshooting

- **Known Issue**: Fleet becomes inoperable after a restore using the [backup-restore-operator](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md#1-install-the-rancher-backup-operator). We will update the community once a permanent solution is in place.

- **Temporary Workaround**:

    1. Find the two service account tokens listed in the fleet-controller and the fleet-controller-bootstrap service accounts. These are under the fleet-system namespace of the local cluster.
    1. Remove the non-existent token secret. Doing so allows for only one entry to be present for the service account token secret that actually exists.
    1. Delete the fleet-controller Pod in the fleet-system namespace to reschedule.
    1. After the service account token issue is resolved, you can force redeployment of the fleet-agents. In the Rancher UI, go to **☰ > Cluster Management**, click on **Clusters** page, then click **Force Update**.
    1. If the fleet-agent bundles remain in a `Modified` state after Step 4, update the field `spec.forceSyncGeneration` for the fleet-agent bundle to force re-creation.

---

- **Known Issue**: clientSecretName and helmSecretName secrets for Fleet gitrepos are not included in the backup nor restore created by the [backup-restore-operator](../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md#1-install-the-rancher-backup-operator). We will update the community once a permanent solution is in place.

- **Temporary Workaround**: By default, user-defined secrets are not backed up in Fleet. It is necessary to recreate secrets if performing a disaster recovery restore or migration of Rancher into a fresh cluster. To modify resourceSet to include extra resources you want to backup, refer to docs [here](https://github.com/rancher/backup-restore-operator#user-flow).

## Documentation

The Fleet documentation is at https://fleet.rancher.io/.



