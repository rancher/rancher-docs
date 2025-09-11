---
title: "Access a Cluster with Kubectl and kubeconfig"
description: "Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster."
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"/>
</head>

This section describes how to manipulate your downstream Kubernetes cluster with kubectl from the Rancher UI or from your workstation.

For more information on using kubectl, see [Kubernetes Documentation: Overview of kubectl](https://kubernetes.io/docs/reference/kubectl/overview/).

### Accessing Clusters with kubectl Shell in the Rancher UI

You can access and manage your clusters by logging into Rancher and opening the kubectl shell in the UI. No further configuration necessary.

1. Click **☰ > Cluster Management**.
1. Go to the cluster you want to access with kubectl and click **Explore**.
1. In the top navigation menu, click the **Kubectl Shell** button. Use the window that opens to interact with your Kubernetes cluster.

### Accessing Clusters with kubectl from Your Workstation

This section describes how to download your cluster's kubeconfig file, launch kubectl from your workstation, and access your downstream cluster.

This alternative method of accessing the cluster allows you to authenticate with Rancher and manage your cluster without using the Rancher UI.

:::note Prerequisites:

These instructions assume that you have already created a Kubernetes cluster, and that kubectl is installed on your workstation. For help installing kubectl, refer to the official [Kubernetes documentation.](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

:::

1. Click **☰** in the top left corner.
1. Select **Cluster Management**.
1. Find the cluster whose kubeconfig you want to download, and select **⁝** at the end of the row. 
1. Select **Download KubeConfig** from the submenu.
1. Save the YAML file on your local computer. Move the file to `~/.kube/config`. Note: The default location that kubectl uses for the kubeconfig file is `~/.kube/config`, but you can use any directory and specify it using the `--kubeconfig` flag, as in this command:
  ```
  kubectl --kubeconfig /custom/path/kube.config get pods
  ```
1. From your workstation, launch kubectl. Use it to interact with your kubernetes cluster.


### Note on Resources Created Using kubectl

Rancher will discover and show resources created by `kubectl`. However, these resources might not have all the necessary annotations on discovery. If an operation (for instance, scaling the workload) is done to the resource using the Rancher UI/API, this may trigger recreation of the resources due to the missing annotations. This should only happen the first time an operation is done to the discovered resource.

## Authenticating Directly with a Downstream Cluster

This section intended to help you set up an alternative method to access an [RKE cluster.](../../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md)

This method is only available for RKE, RKE2, and K3s clusters that have the [authorized cluster endpoint](../../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint) enabled. When Rancher creates the cluster, it generates a kubeconfig file that includes additional kubectl context(s) for accessing your cluster. This additional context allows you to use kubectl to authenticate with the downstream cluster without authenticating through Rancher. For a longer explanation of how the authorized cluster endpoint works, refer to [this page](authorized-cluster-endpoint.md).

On RKE2 and K3s clusters, you need to [manually enable](../../kubernetes-clusters-in-rancher-setup/register-existing-clusters.md#authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters) authorized cluster endpoints.

We recommend that as a best practice, you should set up this method to access your RKE, RKE2, and K3s clusters, so that just in case you can’t connect to Rancher, you can still access the cluster.


:::note Prerequisites:

The following steps assume that you have created a Kubernetes cluster and followed the steps to [connect to your cluster with kubectl from your workstation.](#accessing-clusters-with-kubectl-from-your-workstation)

:::

To find the name of the context(s) in your downloaded kubeconfig file, run:

```
kubectl config get-contexts --kubeconfig /custom/path/kube.config
CURRENT   NAME                        CLUSTER                     AUTHINFO     NAMESPACE
*         my-cluster                  my-cluster                  user-46tmn
          my-cluster-controlplane-1   my-cluster-controlplane-1   user-46tmn
```

In this example, when you use `kubectl` with the first context, `my-cluster`, you will be authenticated through the Rancher server.

With the second context, `my-cluster-controlplane-1`, you would authenticate with the authorized cluster endpoint, communicating with an downstream RKE cluster directly.

We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the [recommended architecture section.](../../../../reference-guides/rancher-manager-architecture/architecture-recommendations.md#architecture-for-an-authorized-cluster-endpoint-ace)

Now that you have the name of the context needed to authenticate directly with the cluster, you can pass the name of the context in as an option when running kubectl commands. The commands will differ depending on whether your cluster has an FQDN defined. Examples are provided in the sections below.

When `kubectl` works normally, it confirms that you can access your cluster while bypassing Rancher's authentication proxy.

### Connecting Directly to Clusters with FQDN Defined

If an FQDN is defined for the cluster, a single context referencing the FQDN will be created. The context will be named `<CLUSTER_NAME>-fqdn`. When you want to use `kubectl` to access this cluster without Rancher, you will need to use this context.

Assuming the kubeconfig file is located at `~/.kube/config`:

```
kubectl --context <CLUSTER_NAME>-fqdn get nodes
```
Directly referencing the location of the kubeconfig file:
```
kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-fqdn get pods
```

### Connecting Directly to Clusters without FQDN Defined

If there is no FQDN defined for the cluster, extra contexts will be created referencing the IP address of each node in the control plane. Each context will be named `<CLUSTER_NAME>-<NODE_NAME>`. When you want to use `kubectl` to access this cluster without Rancher, you will need to use this context.

Assuming the kubeconfig file is located at `~/.kube/config`:
```
kubectl --context <CLUSTER_NAME>-<NODE_NAME> get nodes
```
Directly referencing the location of the kubeconfig file:
```
kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-<NODE_NAME> get pods
```
