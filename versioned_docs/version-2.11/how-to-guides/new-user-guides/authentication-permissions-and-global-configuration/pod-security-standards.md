---
title: Pod Security Standards (PSS) & Pod Security Admission (PSA)
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards"/>
</head>

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) and [Pod Security Admission (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) define security restrictions for a broad set of workloads.
They became available and were turned on by default in Kubernetes v1.23, and replace [Pod Security Policies (PSP)](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions.

## Upgrade to Pod Security Standards (PSS)

Ensure that you migrate all PSPs to another workload security mechanism. This includes mapping your current PSPs to Pod Security Standards for enforcement with the [PSA controller](https://kubernetes.io/docs/concepts/security/pod-security-admission/). If the PSA controller won't meet all of your organization's needs, we recommend that you use a policy engine, such as [Kubewarden](https://www.kubewarden.io/), [Kyverno](https://kyverno.io/), or [NeuVector](https://neuvector.com/). Refer to the documentation of your policy engine of choice for more information on how to migrate from PSPs.

:::caution
You must add your new policy enforcement mechanisms _before_ you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.
:::

### Removing PodSecurityPolicies from Rancher-Maintained Apps & Marketplace Workloads

Rancher v2.7.2 offers a new major version of Rancher-maintained Helm charts. v102.x.y allows you to remove PSPs that were installed with previous versions of the chart. This new version replaces non-standard PSPs switches with the standardized `global.cattle.psp.enabled` switch, which is turned off by default.

You must perform the following steps _while still in Kubernetes v1.24_:
1. Configure the PSA controller to suit your needs. You can use one of Rancher's built-in [PSA Configuration Templates](#pod-security-admission-configuration-templates), or create a custom template and apply it to the clusters that you are migrating.

1. Map your active PSPs to Pod Security Standards:
    1. See which PSPs are still active in your cluster:
       :::caution
       This strategy may miss workloads that aren't currently running, such as CronJobs, workloads currently scaled to zero, or workloads that haven't rolled out yet.
       :::
       
       ```shell
       kubectl get pods \
         --all-namespaces \
         --output jsonpath='{.items[*].metadata.annotations.kubernetes\.io\/psp}' \
         | tr " " "\n" | sort -u
       ```

    1. Follow the Kubernetes guide on [Mapping PSPs to Pod Security Standards](https://kubernetes.io/docs/reference/access-authn-authz/psp-to-pod-security-standards/) to apply PSSs to your workloads that were relying on PSPs. See [Migrate from PodSecurityPolicy to the Built-In PodSecurity Admission controller](https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/) for more details.

1. To remove PSPs from Rancher charts, upgrade the charts to the latest v102.x.y version _before_ you upgrade to Kubernetes v1.25. Make sure that the **Enable PodSecurityPolicies** option is **disabled**. This will remove any PSPs that were installed with previous chart versions.

:::info important
If you want to upgrade your charts to v102.x.y, but don't plan on upgrading your clusters to Kubernetes v1.25 and moving away from PSPs, make sure that you select the option **Enable PodSecurityPolicies** for each chart that you are upgrading.
:::

### Cleaning Up Releases After a Kubernetes v1.25 Upgrade

If you experience problems while removing PSPs from your charts, or have charts that don't contain a built-in mechanism for removing PSPs, your chart upgrades or deletions might fail with an error message such as the following:
```console
Error: UPGRADE FAILED: resource mapping not found for name: "<object-name>" namespace: "<object-namespace>" from "": no matches for kind "PodSecurityPolicy" in version "policy/v1beta1"
ensure CRDs are installed first
```

This happens when Helm tries to query the cluster for objects that were stored in a previous release's data blob. To clean up these releases and avoid this error, use the `helm-mapkubeapis` Helm  plugin. To learn more about `helm-mapkubeapis`, how it works, and how it can be fine-tuned for your use case, see the [official Helm documentation](https://github.com/helm/helm-mapkubeapis#readme).

Note that Helm plugin installation is local to the machine that you run the commands from. Therefore, make sure that you run both the installation and cleanup from the same machine.

#### Install `helm-mapkubeapis`

1. Open your terminal in the machine you intend to use `helm-mapkubeapis` from and install the plugin:
    ```shell
    helm plugin install https://github.com/helm/helm-mapkubeapis
    ```
    
    You will see output similar to the following:
    ```console
    Downloading and installing helm-mapkubeapis v0.4.1 ...
    https://github.com/helm/helm-mapkubeapis/releases/download/v0.4.1/helm-mapkubeapis_0.4.1_darwin_amd64.tar.gz
    Installed plugin: mapkubeapis
    ```
   
    :::info important
    Ensure that the `helm-mapkubeapis` plugin is at least v0.4.1, as older versions _do not_ support removal of resources.
    :::

1. Verify that the plugin was correctly installed:
    ```shell
    helm mapkubeapis --help
    ```
    
    You will see output similar to the following:
    ```console
    Map release deprecated or removed Kubernetes APIs in-place
    
    Usage:
    mapkubeapis [flags] RELEASE
    
    Flags:
    --dry-run               simulate a command
    -h, --help              help for mapkubeapis
    --kube-context string   name of the kubeconfig context to use
    --kubeconfig string     path to the kubeconfig file
    --mapfile string        path to the API mapping file
    --namespace string      namespace scope of the release
    ```

#### Cleaning Up Broken Releases

After you install the `helm-mapkubeapis` plugin, clean up the releases that became broken after the upgrade to Kubernetes v1.25.

1. Open your preferred terminal and make sure it's connected to the cluster you wish to target by running `kubectl cluster-info`.

1. List all the releases you have installed in your cluster by running `helm list --all-namespaces`.

1. Perform a dry run for each release you would like to clean up by running `helm mapkubeapis --dry-run <release-name> --namespace <release-namespace>`. The result of this command will inform you what resources are going to be replaced or removed.

1. Finally, after reviewing the changes, perform a full run with `helm mapkubeapis <release-name> --namespace <release-namespace>`.

#### Upgrading Charts to a Version That Supports Kubernetes v1.25

You can proceed with your upgrade once any releases that had lingering PSPs are cleaned up. For Rancher-maintained workloads, follow the steps outlined in the [Removing PodSecurityPolicies from Rancher-maintained Apps & Marketplace workloads](#removing-podsecuritypolicies-from-rancher-maintained-apps--marketplace-workloads) section of this document.
For workloads not maintained by Rancher, refer to the vendor documentation.

:::caution
Do not skip this step. Applications incompatible with Kubernetes v1.25 aren't guaranteed to work after a cleanup.
:::

## Pod Security Admission Configuration Templates

Rancher offers PSA configuration templates. These are pre-defined security configurations that you can apply to a cluster. Rancher admins (or those with the right permissions) can [create, manage, and edit](./psa-config-templates.md) PSA templates.

### Rancher on PSA-restricted Clusters

Rancher system namespaces are also affected by the restrictive security policies described by PSA templates. You need to exempt Rancher's system namespaces after you assign the template, or else the cluster won't operate correctly. See [Pod Security Admission (PSA) Configuration Templates](./psa-config-templates.md#exempting-required-rancher-namespaces) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](../../../reference-guides/rancher-security/psa-restricted-exemptions.md).
