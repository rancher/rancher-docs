---
title: Registering Existing Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"/>
</head>

The cluster registration feature replaced the feature to import clusters.

The control that Rancher has to manage a registered cluster depends on the type of cluster. For details, see [Management Capabilities for Registered Clusters.](#management-capabilities-for-registered-clusters)


## Prerequisites

### Kubernetes Node Roles

Registered RKE Kubernetes clusters must have all three node roles - etcd, controlplane and worker. A cluster with only controlplane components cannot be registered in Rancher.

For more information on RKE node roles, see the [best practices.](checklist-for-production-ready-clusters/checklist-for-production-ready-clusters.md#cluster-architecture)

### Permissions

To register a cluster in Rancher, you must have `cluster-admin` privileges within that cluster. If you don't, grant these privileges to your user by running:

```plain
kubectl create clusterrolebinding cluster-admin-binding \
  --clusterrole cluster-admin \
  --user [USER_ACCOUNT]
```

Since, by default, Google Kubernetes Engine (GKE) doesn't grant the `cluster-admin` role, you must run these commands on GKE clusters before you can register them. To learn more about role-based access control for GKE, please see [the official Google documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).

### Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), and Google Kubernetes Engine (GKE)  

To successfully import or provision EKS, AKS, and GKE clusters from Rancher, the cluster must have at least one managed node group. 

AKS clusters can be imported only if local accounts are enabled. If a cluster is configured to use Microsoft Entra ID for authentication, then Rancher will not be able to import it and report an error.

EKS Anywhere clusters can be imported/registered into Rancher with an API address and credentials, as with any downstream cluster. EKS Anywhere clusters are treated as imported clusters and do not have full lifecycle support from Rancher. 

GKE Autopilot clusters aren't supported. See [Compare GKE Autopilot and Standard](https://cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison) for more information about the differences between GKE modes.

## Registering a Cluster

1. Click **☰ > Cluster Management**.
2. On the **Clusters** page, **Import Existing**.
3. Choose the type of cluster.
4. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
5. If you are importing a generic Kubernetes cluster in Rancher, perform the following steps for setup:<br/>
  a. Click **Agent Environment Variables** under **Cluster Options** to set environment variables for [rancher cluster agent](../launch-kubernetes-with-rancher/about-rancher-agents.md). The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, `HTTP_PROXY`, `HTTPS_PROXY` and `NO_PROXY` environment variables can be set using agent environment variables.<br/>
  b. Enable Project Network Isolation to ensure the cluster supports Kubernetes `NetworkPolicy` resources. Users can select the **Project Network Isolation** option under the **Advanced Options** dropdown to do so.
6. Click **Create**.
7. The prerequisite for `cluster-admin` privileges is shown (see **Prerequisites** above), including an example command to fulfil the prerequisite.
8. Copy the `kubectl` command to your clipboard and run it on a node where kubeconfig is configured to point to the cluster you want to import. If you are unsure it is configured correctly, run `kubectl get nodes` to verify before running the command shown in Rancher.
9. If you are using self-signed certificates, you will receive the message `certificate signed by unknown authority`. To work around this validation, copy the command starting with `curl` displayed in Rancher to your clipboard. Then run the command on a node where kubeconfig is configured to point to the cluster you want to import.
10. When you finish running the command(s) on your node, click **Done**.

:::important

The `NO_PROXY` environment variable is not standardized, and the accepted format of the value can differ between applications. When configuring the `NO_PROXY` variable in Rancher, the value must adhere to the format expected by Golang.

Specifically, the value should be a comma-delimited string which only contains IP addresses, CIDR notation, domain names, or special DNS labels (e.g. `*`). For a full description of the expected value format, refer to the [**upstream Golang documentation**](https://pkg.go.dev/golang.org/x/net/http/httpproxy#Config)

:::


**Result:**

- Your cluster is registered and assigned a state of **Pending**. Rancher is deploying resources to manage your cluster.
- You can access your cluster after its state is updated to **Active**.
- **Active** clusters are assigned two Projects: `Default` (containing the namespace `default`) and `System` (containing the namespaces `cattle-system`, `ingress-nginx`, `kube-public` and `kube-system`, if present).


:::note

You can not re-register a cluster that is currently active in a Rancher setup.

:::

### Configuring an Imported EKS, AKS or GKE Cluster with Terraform

You should define **only** the minimum fields that Rancher requires when importing an EKS, AKS or GKE cluster with Terraform. This is important as Rancher will overwrite what was in the cluster configuration with any config that the user has provided.

:::caution

Even a small difference between the current cluster and a user-provided config could have unexpected results.

:::

The minimum config fields required by Rancher to import EKS clusters with Terraform using `eks_config_v2` are as follows:

- cloud_credential_id
- name
- region
- imported (this field should always be set to `true` for imported clusters)

Example YAML configuration for imported EKS clusters:

```
resource "rancher2_cluster" "my-eks-to-import" {
  name        = "my-eks-to-import"
  description = "Terraform EKS Cluster"
  eks_config_v2 {
    cloud_credential_id = rancher2_cloud_credential.aws.id
    name                = var.aws_eks_name
    region              = var.aws_region
    imported            = true
  }
}
```

You can find additional examples for other cloud providers in the [Rancher2 Terraform Provider documentation](https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster).

## Management Capabilities for Registered Clusters

The control that Rancher has to manage a registered cluster depends on the type of cluster.

- [Features for All Registered Clusters](#features-for-all-registered-clusters)
- [Additional Features for Registered RKE2 and K3s Clusters](#additional-features-for-registered-rke2-and-k3s-clusters)
- [Additional Features for Registered EKS, AKS and GKE Clusters](#additional-features-for-registered-eks-aks-and-gke-clusters)

### Features for All Registered Clusters

After registering a cluster, the cluster owner can:

- [Manage cluster access](../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md) through role-based access control
- Enable [monitoring, alerts and notifiers](../../../integrations-in-rancher/monitoring-and-alerting/monitoring-and-alerting.md)
- Enable [logging](../../../integrations-in-rancher/logging/logging.md)
- Enable [Istio](../../../integrations-in-rancher/istio/istio.md)
- Manage projects and workloads

### Additional Features for Registered RKE2 and K3s Clusters

[K3s](https://rancher.com/docs/k3s/latest/en/) is a lightweight, fully compliant Kubernetes distribution for edge installations.
[RKE2](https://docs.rke2.io) is Rancher's next-generation Kubernetes distribution for datacenter and cloud installations.

When an RKE2 or K3s cluster is registered in Rancher, Rancher will recognize it. The Rancher UI will expose the features for [all registered clusters,](#features-for-all-registered-clusters) in addition to the following features for editing and upgrading the cluster:

- The ability to [upgrade the Kubernetes version](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md)
  :::danger

  After a cluster has been imported into Rancher, upgrades should be performed using Rancher. Upgrading an imported cluster outside of Rancher is **not** supported.

  :::
- The ability to configure the maximum number of nodes that will be upgraded concurrently
- The ability to see a read-only version of the cluster's configuration arguments and environment variables used to launch each node in the cluster

### Additional Features for Registered EKS, AKS, and GKE Clusters

Rancher handles registered EKS, AKS, or GKE clusters similarly to clusters created in Rancher. However, Rancher doesn't destroy registered clusters when you delete them through the Rancher UI.

When you create an EKS, AKS, or GKE cluster in Rancher, then delete it, Rancher destroys the cluster. When you delete a registered cluster through Rancher, the Rancher server _disconnects_ from the cluster. The cluster remains live, although it's no longer in Rancher. You can still access the deregistered cluster in the same way you did before you registered it.

See [Cluster Management Capabilities by Cluster Type](kubernetes-clusters-in-rancher-setup.md) for more information about what features are available for managing registered clusters.

## Configuring RKE2 and K3s Cluster Upgrades

:::tip

It is a Kubernetes best practice to back up the cluster before upgrading. When upgrading a high-availability K3s cluster with an external database, back up the database in whichever way is recommended by the relational database provider.

:::

The **concurrency** is the maximum number of nodes that are permitted to be unavailable during an upgrade. If number of unavailable nodes is larger than the **concurrency,** the upgrade will fail. If an upgrade fails, you may need to repair or remove failed nodes before the upgrade can succeed.

- **Controlplane concurrency:** The maximum number of server nodes to upgrade at a single time; also the maximum unavailable server nodes
- **Worker concurrency:** The maximum number worker nodes to upgrade at the same time; also the maximum unavailable worker nodes

In the RKE2 and K3s documentation, controlplane nodes are called server nodes. These nodes run the Kubernetes master, which maintains the desired state of the cluster. By default, these controlplane nodes have the capability to have workloads scheduled to them by default.

Also in the RKE2 and K3s documentation, nodes with the worker role are called agent nodes. Any workloads or pods that are deployed in the cluster can be scheduled to these nodes by default.

## Debug Logging and Troubleshooting for Registered RKE2 and K3s Clusters

Nodes are upgraded by the system upgrade controller running in the downstream cluster. Based on the cluster configuration, Rancher deploys two [plans](https://github.com/rancher/system-upgrade-controller#example-upgrade-plan) to upgrade nodes: one for controlplane nodes and one for workers. The system upgrade controller follows the plans and upgrades the nodes.

To enable debug logging on the system upgrade controller deployment, edit the [configmap](https://github.com/rancher/system-upgrade-controller/blob/50a4c8975543d75f1d76a8290001d87dc298bdb4/manifests/system-upgrade-controller.yaml#L32) to set the debug environment variable to true. Then restart the `system-upgrade-controller` pod.

Logs created by the `system-upgrade-controller` can be viewed by running this command:

```
kubectl logs -n cattle-system system-upgrade-controller
```

The current status of the plans can be viewed with this command:

```
kubectl get plans -A -o yaml
```

If the cluster becomes stuck in upgrading, restart the `system-upgrade-controller`.

To prevent issues when upgrading, the [Kubernetes upgrade best practices](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/) should be followed.

## Authorized Cluster Endpoint Support for RKE2 and K3s Clusters

Rancher supports Authorized Cluster Endpoints (ACE) for registered RKE2 and K3s clusters. This support includes manual steps you will perform on the downstream cluster to enable the ACE. For additional information on the authorized cluster endpoint, click [here](../manage-clusters/access-clusters/authorized-cluster-endpoint.md).

:::note Notes:

- These steps only need to be performed on the control plane nodes of the downstream cluster. You must configure each control plane node individually.

- The following steps will work on both RKE2 and K3s clusters registered in v2.6.x as well as those registered (or imported) from a previous version of Rancher with an upgrade to v2.6.x.

- These steps will alter the configuration of the downstream RKE2 and K3s clusters and deploy the `kube-api-authn-webhook`. If a future implementation of the ACE requires an update to the `kube-api-authn-webhook`, then this would also have to be done manually. For more information on this webhook, click [here](../manage-clusters/access-clusters/authorized-cluster-endpoint.md#about-the-kube-api-auth-authentication-webhook).

:::

###### **Manual steps to be taken on the control plane of each downstream cluster to enable ACE:**

1. Create a file at `/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml` with the following contents:
    ```yaml
    apiVersion: v1
    kind: Config
    clusters:
    - name: Default
      cluster:
        insecure-skip-tls-verify: true
        server: http://127.0.0.1:6440/v1/authenticate
    users:
    - name: Default
      user:
        insecure-skip-tls-verify: true
    current-context: webhook
    contexts:
    - name: webhook
      context:
        user: Default
        cluster: Default
    ```

2. Add the following to the config file (or create one if it doesn’t exist); note that the default location is `/etc/rancher/{rke2,k3s}/config.yaml`:
    ```yaml
    kube-apiserver-arg:
        - authentication-token-webhook-config-file=/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml
    ```

3. Run the following commands:

        sudo systemctl stop {rke2,k3s}-server
        sudo systemctl start {rke2,k3s}-server

4. Finally, you **must** go back to the Rancher UI and edit the imported cluster there to complete the ACE enablement. Click on **⋮ > Edit Config**, then click the **Networking** tab under Cluster Configuration. Finally, click the **Enabled** button for **Authorized Endpoint**. Once the ACE is enabled, you then have the option of entering a fully qualified domain name (FQDN) and certificate information.

:::note

The <b>FQDN</b> field is optional, and if one is entered, it should point to the downstream cluster. Certificate information is only needed if there is a load balancer in front of the downstream cluster that is using an untrusted certificate. If you have a valid certificate, then nothing needs to be added to the <b>CA Certificates</b> field.

:::

## Annotating Registered Clusters

For all types of registered Kubernetes clusters except for RKE2 and K3s Kubernetes clusters, Rancher doesn't have any information about how the cluster is provisioned or configured.

Therefore, when Rancher registers a cluster, it assumes that several capabilities are disabled by default. Rancher assumes this in order to avoid exposing UI options to the user even when the capabilities are not enabled in the registered cluster.

However, if the cluster has a certain capability, such as the ability to use a pod security policy, a user of that cluster might still want to select pod security policies for the cluster in the Rancher UI. In order to do that, the user will need to manually indicate to Rancher that pod security policies are enabled for the cluster.

By annotating a registered cluster, it is possible to indicate to Rancher that a cluster was given Ingress capabilities, or another capability, outside of Rancher. The following annotation indicates Ingress capabilities. Note that the values of non-primitive objects need to be JSON encoded, with quotations escaped.

```json
"capabilities.cattle.io/ingressCapabilities": "[
  {
    "customDefaultBackend":true,
    "ingressProvider":"asdf"
  }
]"
```

These capabilities can be annotated for the cluster:

- `ingressCapabilities`
- `loadBalancerCapabilities`
- `nodePoolScalingSupported`
- `nodePortRange`
- `taintSupport`

All the capabilities and their type definitions can be viewed in the Rancher API view, at `[Rancher Server URL]/v3/schemas/capabilities`.

To annotate a registered cluster,

1. Click **☰ > Cluster Management**.
2. On the **Clusters** page, go to the custom cluster you want to annotate and click **⋮ > Edit Config**.
3. Expand the **Labels & Annotations** section.
4. Click **Add Annotation**.
5. Add an annotation to the cluster with the format `capabilities/<capability>: <value>` where `value` is the cluster capability that will be overridden by the annotation. In this scenario, Rancher is not aware of any capabilities of the cluster until you add the annotation.
6. Click **Save**.

**Result:** The annotation does not give the capabilities to the cluster, but it does indicate to Rancher that the cluster has those capabilities.

## Troubleshooting

This section lists some of the most common errors that may occur when importing a cluster, along with steps to troubleshoot them.

### AKS

- The following error may occur if local accounts are disabled in your cluster.
  ```sh
  Error: Getting static credential is not allowed because this cluster is set to disable local accounts.
  ```

  To resolve this issue, enable local accounts before attempting to [import the cluster](#registering-a-cluster) again.

  ```sh
  az aks update --resource-group <resource-group> --name <cluster-name> --enable-local-accounts
  ```
