---
title: Pod Security Standards (PSS) & Pod Security Admission (PSA)
---

[Pod Security Standards (PSS)](https://kubernetes.io/docs/concepts/security/pod-security-standards/) and [Pod Security Admission (PSA)](https://kubernetes.io/docs/concepts/security/pod-security-admission/) define security restrictions for a broad set of workloads.
They are available and turned on by default starting on Kubernetes v1.23, and replace [Pod Security Policies (PSP)](https://kubernetes.io/docs/concepts/security/pod-security-policy/) in Kubernetes v1.25 and above.

PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions.

## Upgrade to Pod Security Standards (PSS)

Ensure you migrate all PodSecurityPolicies to another workload security mechanism.
This includes mapping your current PSPs into Pod Security Standards for enforcement with the [Pod Security Admission controller](https://kubernetes.io/docs/concepts/security/pod-security-admission/).
If Pod Security Admission is not enough for your use case, the use of a policy engine is recommended.
Some examples of policy engines include [OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper), [Kubewarden](https://www.kubewarden.io/), [Kyverno](https://kyverno.io/), and [NeuVector](https://neuvector.com/).
Refer to the documentation of your policy engine of choice for more information on how to migrate from PodSecurityPolicy.

:::caution
You must add your new policy enforcement mechanisms _before_ you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.
:::

### Removing PodSecurityPolicies from Rancher-maintained Apps & Marketplace workloads {#remove-psp-rancher-workloads}

For workloads installed using Helm charts that Rancher maintains, a new version of the charts with the format v102.x.y is being released with Rancher v2.7.2.
This version contains mechanisms to allow removal of PodSecurityPolicies installed with previous versions of the chart.
Previous non-standard PodSecurityPolicy switches have been replaced with the standardized `global.cattle.psp.enabled` switch, which is turned off by default in the new version.

Ensure you do the following actions _while still in Kubernetes v1.24_:
1. Configure the Pod Security Admission controller to suit your needs. Rancher allows you to configure this via [Pod Security Admission Configuration Templates](#psa-config-templates).
    Review the templates and choose one of them, or create your own and apply to the clusters you are migrating.

2. Map the PodSecurityPolicies that are still in use in your cluster into Pod Security Standards:
    * You can find out which PodSecurityPolicies are still in use in your cluster by running
      ```
      kubectl get pods \
        --all-namespaces \
        --output jsonpath='{.items[*].metadata.annotations.kubernetes\.io\/psp}' \
        | tr " " "\n" | sort -u
      ```

    * Follow the Kubernetes guide on [Mapping PodSecurityPolicy to Pod Security Standards](https://kubernetes.io/docs/reference/access-authn-authz/psp-to-pod-security-standards/) to apply PSS to your workloads that were relying on PSPs.

      Learn more about migrating from PSPs to PSA and PSS on the [Migrate from PodSecurityPolicy to the Built-In PodSecurity Admission controller](https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/) documentation.

3. Remove PSPs from Rancher charts by upgrading them to the latest v102.x.y version _before_ your upgrade to Kubernetes v1.25.
    Make sure the **Enable PodSecurityPolicies** option is **disabled**.
    This will remove any PodSecurityPolicies that were installed with previous versions.

:::info important
If you intend to install the latest version, but do not plan on upgrading your clusters to Kubernetes v1.25 and moving away from PodSecurityPolicies, make sure that you select the option **Enable PodSecurityPolicies** for each chart you are upgrading to a v102.x.y version.
:::

### Cleaning up releases after a Kubernetes v1.25 upgrade

If you have charts that did not provide a built-in mechanism to remove previously installed PSPs, or ran into other issues removing PSPs from your charts, you may end up in a situation where chart upgrades or deletions fail with an error message similar to the following:
```console
Error: UPGRADE FAILED: resource mapping not found for name: "<object-name>" namespace: "<object-namespace>" from "": no matches for kind "PodSecurityPolicy" in version "policy/v1beta1"
ensure CRDs are installed first
```

This happens as a result of Helm trying to query the cluster for objects that were stored in a previous release data blob.
To avoid this error, it is required that you clean up these releases that refer to APIs that ceased to exist.
The Helm project hosts a plugin called `helm-mapkubeapis` that allows you to correct these releases so that a new version can be installed, or a deletion can take place.
To learn more about the `helm-mapkubeapis` plugin, how it works, and how it can be fine-tuned for your use case, refer to the
[documentation in GitHub](https://github.com/helm/helm-mapkubeapis#readme).

Note that the installation of Helm plugins happens locally in the machine you run the commands from. Therefore, make sure that both the installation and cleanup are ran from the same workstation.

#### Install `helm-mapkubeapis`

1. Open your terminal in the machine you intend to use `helm-mapkubeapis` from and install the plugin:
    ```shell
    helm plugin install https://github.com/helm/helm-mapkubeapis
    ```
    
    You will see an output similar to the following:
    ```console
    Downloading and installing helm-mapkubeapis v0.4.1 ...
    https://github.com/helm/helm-mapkubeapis/releases/download/v0.4.1/helm-mapkubeapis_0.4.1_darwin_amd64.tar.gz
    Installed plugin: mapkubeapis
    ```
   
    :::info important
    Ensure the installed version of the `helm-mapkubeapis` plugin is at least v0.4.1, as older versions _do not_ support removal of resources.
    :::

2. Check the plugin was correctly installed by running:
    ```shell
    helm mapkubeapis --help
    ```
    
    You will see an output similar to the following:
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

#### Clean up releases

With the `helm-mapkubeapis` plugin installed, it is time to clean up the releases that became broken after the upgrade to Kubernetes v1.25.

1. Open your preferred terminal and make sure it is connected to the cluster you wish to target by running `kubectl cluster-info`.

2. From your terminal, list all the releases you have installed in your cluster by running `helm list --all-namespaces`.

3. Perform a dry run for each release you would like to clean up by running `helm mapkubeapis --dry-run <release-name> --namespace <release-namespace>`.
    The result of this command will inform you what resources are going to be replaced or removed.

4. Finally, after reviewing the changes that will be enacted, perform a full run with `helm mapkubeapis <release-name> --namespace <release-namespace>`.

#### Upgrade charts to a version that supports Kubernetes v1.25

After any releases that had lingering PSPs have been cleaned up, you can proceed with the upgrade of your workloads to their latest, Kubernetes v1.25 compatible versions.
For Rancher-maintained workloads, you can follow the steps outlined in the [Removing PodSecurityPolicies from Rancher-maintained Apps & Marketplace workloads](#remove-psp-rancher-workloads) section of this document.
For workloads not maintained by Rancher, refer to the vendor documentation.

:::caution
Do not skip this step. Applications incompatible with Kubernetes v1.25 are not guaranteed to work after a cleanup.
:::

## Pod Security Admission Configuration Templates {#psa-config-templates}

Rancher offers PSA configuration templates. These are pre-defined security configurations that you can apply to a cluster. Rancher admins (or those with the right permissions) can [create, manage, and edit](./psa-config-templates.md) PSA templates.

### Rancher on PSA-restricted Clusters

Rancher system namespaces are also affected by the restrictive security policies described by PSA templates. You need to exempt Rancher's system namespaces after you assign the template, or else the cluster won't operate correctly. See [Pod Security Admission (PSA) Configuration Templates](./psa-config-templates.md#exempting-required-rancher-namespaces) for more details.

For a complete file which has all the exemptions you need to run Rancher, please refer to this [sample Admission Configuration](psa-restricted-exemptions.md).
