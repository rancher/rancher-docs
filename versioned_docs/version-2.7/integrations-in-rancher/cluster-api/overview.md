---
title: Overview
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/cluster-api/overview"/>
</head>

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/lGsr7KfBjgU?si=ORkzuAJjcdXUXMxh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Installing the Rancher Turtles Operator

### Via Rancher Dashboard

This is the recommended option for installing Rancher Turtles.

Using the Rancher UI, and by adding the Turtles repository, we can let Rancher process the installation and configuration of the Cluster API Extension.

:::caution
If you already have the Cluster API Operator installed in your cluster, you need to use the [manual helm installation method](./overview.md#via-helm-install) instead.
:::

:::info prerequisite
Before installing Rancher Turtles in your Rancher environment, Rancher's `embedded-cluster-api` functionality must be disabled. This includes also cleaning up Rancher-specific webhooks that otherwise would conflict with CAPI ones.

To simplify setting up Rancher for installing Rancher Turtles, the official Rancher Turtles Helm chart includes a `pre-install` hook that applies these changes which are outlined below if manually removing:
- Disable the `embedded-cluster-api` feature in Rancher.
- Delete the `mutating-webhook-configuration` and `validating-webhook-configuration` webhooks that are no longer needed.
:::

#### Installation

- From your browser, access Rancher Manager and explore the **local** cluster.
- Using the left navigation panel, go to `Apps` -> `Repositories`.
- Click `Create` to add a new repository.
- Enter the following:
    - **Name**: `turtles`.
    - **Index URL**: https://rancher.github.io/turtles.
- Wait for the `turtles` repository to have a status of `Active`.
- Go to `Apps` -> `Charts`.
- Filter for `turtles`.
- Click `Rancher Turtles - the Cluster API Extension`
- Click `Install` -> `Next` -> `Install`.

This will use the default values for the Helm chart, which are good for most installations. If your configuration requires overriding some of these defaults, you can either specify the values during installation from the Rancher UI or, alternatively, you can opt for the [manual installation via Helm](./overview.md#via-helm-install). If you are interested in learning more about the available values, you can check the Rancher Turtles [Helm chart reference guide](https://docs.rancher-turtles.com/docs/reference-guides/rancher-turtles-chart/values).

The installation may take a few minutes and once completed you will see the following new deployments in the cluster:
- `rancher-turtles-system/rancher-turtles-controller-manager`
- `rancher-turtles-system/rancher-turtles-cluster-api-operator`
- `capi-system/capi-controller-manager`

### Via Helm Install

This section walks through different Helm installation options for Rancher Turtles depending on CAPI operator use:
- [Install Rancher Turtles with Cluster API Operator as a dependency](#install-rancher-turtles-with-cluster-api-operator-as-a-helm-dependency).
- [Install Rancher Turtles without Cluster API Operator](#install-rancher-turtles-without-cluster-api-operator-as-a-helm-dependency).

The Cluster API Operator is required for installing Rancher Turtles and you can choose whether you want to take care of this dependency yourself or let the Rancher Turtles Helm chart manage it for you. We recommend [installing as a dependency](#install-rancher-turtles-with-cluster-api-operator-as-a-helm-dependency) for the sake of simplicity, but the best option may depend on your specific configuration.

CAPI Operator allows for handling the lifecycle of Cluster API providers using a declarative approach, extending the capabilities of `clusterctl`. If you want to learn more about it, you can refer to [Cluster API Operator book](https://cluster-api-operator.sigs.k8s.io/).

:::info prerequisite
Before installing Rancher Turtles in your Rancher environment, Rancher's `embedded-cluster-api` functionality must be disabled. This includes also cleaning up Rancher-specific webhooks that otherwise would conflict with CAPI ones.

To simplify setting up Rancher for installing Rancher Turtles, the official Rancher Turtles Helm chart includes a `pre-install` hook that applies these changes which are outlined below:
- Disable the `embedded-cluster-api` feature in Rancher.
- Delete the `mutating-webhook-configuration` and `validating-webhook-configuration` webhooks that are no longer needed.
:::

#### Install Rancher Turtles with `Cluster API Operator` as a Helm dependency

The `rancher-turtles` chart is available in https://rancher.github.io/turtles and this Helm repository must be added before proceeding with the installation:

```bash
helm repo add turtles https://rancher.github.io/turtles
helm repo update
```

As mentioned before, installing Rancher Turtles requires the [Cluster API Operator](https://github.com/kubernetes-sigs/cluster-api-operator) and the Helm chart can handle its installation automatically with a minimum set of flags:

```bash
helm install rancher-turtles turtles/rancher-turtles --version v0.5.0 \
    -n rancher-turtles-system \
    --dependency-update \
    --create-namespace --wait \
    --timeout 180s
```

This operation could take a few minutes and once completed you can review the installed controllers listed below:
- `rancher-turtles-controller`
- `capi-operator`

:::note
- If `cert-manager` is already available in the cluster, you can disable its installation as a Rancher Turtles dependency to avoid conflicts:
`--set cluster-api-operator.cert-manager.enabled=false`
- For a list of Rancher Turtles versions, refer to [Releases page](https://github.com/rancher/turtles/releases).
:::

This is the basic, recommended configuration, which manages the creation of a secret containing the required CAPI feature flags (`CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` and `EXP_MACHINE_POOL` enabled) in the core provider namespace. These feature flags are required to enable additional Cluster API functionality.

If you need to override the default behavior and use an existing secret (or add custom environment variables), you can pass the secret name helm flag. In this case, as a user, you are in charge of managing the secret creation and its content, including the minimum required features: `CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` and `EXP_MACHINE_POOL` enabled.

```bash
helm install ...
    # Passing secret name and namespace for additional environment variables
    --set cluster-api-operator.cluster-api.configSecret.name=<secret_name>
```

The following is an example of a user-managed secret `cluster-api-operator.cluster-api.configSecret.name=variables` with `CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` and `EXP_MACHINE_POOL` feature flags set and an extra custom variable:

```yaml title="secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: variables
  namespace: rancher-turtles-system
type: Opaque
stringData:
  CLUSTER_TOPOLOGY: "true"
  EXP_CLUSTER_RESOURCE_SET: "true"
  EXP_MACHINE_POOL: "true"
  CUSTOM_ENV_VAR: "false"
```

:::info
For detailed information on the values supported by the chart and their usage, refer to [Helm chart options](https://docs.rancher-turtles.com/docs/reference-guides/rancher-turtles-chart/values)
:::

#### Install Rancher Turtles without `Cluster API Operator` as a Helm dependency

:::note
Remember that if you opt for this installation option, you will need to manage the Cluster API Operator installation yourself. You can follow the [CAPI Operator guide](https://docs.rancher-turtles.com/docs/next/tasks/capi-operator/intro) in the Rancher Turtles documentation for assistance.
:::

The `rancher-turtles` chart is available in https://rancher.github.io/turtles and this Helm repository must be added before proceeding with the installation:

```bash
helm repo add turtles https://rancher.github.io/turtles
helm repo update
```

and then it can be installed into the `rancher-turtles-system` namespace with:

```bash
helm install rancher-turtles turtles/rancher-turtles --version v0.5.0
    -n rancher-turtles-system
    --set cluster-api-operator.enabled=false
    --set cluster-api-operator.cluster-api.enabled=false
    --create-namespace --wait
    --dependency-update
```

As you can see, we are telling Helm to ignore installing `cluster-api-operator` as a dependency.

This operation could take a few minutes and once completed you can review the installed controller listed below:
- `rancher-turtles-controller`

## Uninstalling Rancher Turtles

This section gives an overview of the Rancher Turtles uninstallation process.

:::caution
When installing Rancher Turtles in your Rancher environment, by default, Rancher Turtles enables the Cluster API Operator cleanup. This includes cleaning up Cluster API Operator specific webhooks and deployments that otherwise cause issues with Rancher provisioning.

To simplify uninstalling Rancher Turtles (via Rancher Manager or helm command), the official Rancher Turtles Helm chart includes a `post-delete` hook that applies these changes that are outlined below:
- Deletes the `mutating-webhook-configuration` and `validating-webhook-configuration` webhooks that are no longer needed.
- Deletes the CAPI `deployments` that are no longer needed.
:::

To uninstall the Rancher Turtles Extension use the following helm command:

```bash
helm uninstall -n rancher-turtles-system rancher-turtles --cascade foreground --wait
```

This may take a few minutes to complete.

:::note
Remember that, if you use a different name for the installation or a different namespace, you may need to customize the command for your specific configuration.
:::

Once uninstalled, Rancher's `embedded-cluster-api` feature must be re-enabled:

1. Create a `feature.yaml` file, with `embedded-cluster-api` set to true:
```yaml title="feature.yaml"
apiVersion: management.cattle.io/v3
kind: Feature
metadata:
  name: embedded-cluster-api
spec:
  value: true
```
2. Use `kubectl` to apply the `feature.yaml` file to the cluster:
```bash
kubectl apply -f feature.yaml
```

## Architecture Diagram

Below is a visual representation of the key components of Rancher Turtles and their relationship to Rancher Manager and the Rancher Cluster Agent. Understanding these components is essential for gaining insights into how Rancher leverages the Cluster API (CAPI) for cluster management.

![overview](/img/30000ft_view.png)

## Security

[SLSA](https://slsa.dev/spec/v1.0/about) is a set of incrementally adoptable guidelines for supply chain security, established by industry consensus. The specification set by SLSA is useful for both software producers and consumers: producers can follow SLSA’s guidelines to make their software supply chain more secure, and consumers can use SLSA to make decisions about whether to trust a software package.

Rancher Turtles meets [SLSA Level 3](https://slsa.dev/spec/v1.0/levels#build-l3) requirements for appropriate build platform, consistent build process, and provenance distribution. For more information, please visit the [Rancher Turtles Security](https://docs.rancher-turtles.com/docs/security/slsa) document.
