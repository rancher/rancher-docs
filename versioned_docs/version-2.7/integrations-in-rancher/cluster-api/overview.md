---
title: Overview
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/cluster-api/overview"/>
</head>

## Architecture Diagram

Below is a visual representation of the key components of Rancher Turtles and their relationship to Rancher and the Rancher Cluster Agent. Understanding these components is essential for gaining insights into how Rancher leverages the CAPI operator for cluster management.

![overview](/img/30000ft_view.png)

## Prerequisites

Before installing Rancher Turtles in your Rancher environment, you must disable Rancher's `embedded-cluster-api` functionality. This also includes cleaning up Rancher-specific webhooks that otherwise would conflict with CAPI ones.

To simplify setting up Rancher for installing Rancher Turtles, the official Rancher Turtles Helm chart includes a `pre-install` hook that removes the following:

- Disables the `embedded-cluster-api` feature in Rancher.
- Deletes the `mutating-webhook-configuration` and `validating-webhook-configuration` webhooks, as they are no longer needed.

## Installing the Rancher Turtles Operator

You can install the Rancher Turtles operator via the Rancher UI, or with Helm. The first method is recommended for most environments.

:::caution

If you already have the Cluster API (CAPI) Operator installed in your cluster, you must use the [manual Helm installation method](./overview.md#via-helm-install).

:::

### Installing via the Rancher UI

By adding the Turtles repository via the Rancher UI, Rancher can process the installation and configuration of the CAPI Extension.

1. Click **☰**. Under **Explore Cluster** in the left navigation menu, select **local**.
1. In the left navigation menu of the **Cluster Dashboard**, select **Apps > Repositories**.
1. Click **Create** to add a new repository.
1. Enter the following:
    - **Name**: turtles
    - **Index URL**: https://rancher.github.io/turtles
1. Wait until the new repository has a status of `Active`.
1. In the left navigation menu, select **Apps > Charts**.
1. Enter "turtles" into the search filter to find the Turtles chart.
1. Click **Rancher Turtles - the Cluster API Extension**.
1. Click **Install > Next > Install**.

This process uses the default values for the Helm chart, which are good for most installations. If your configuration requires overriding some of these defaults, you can either specify the values during installation from the Rancher UI or you can [manually install the chart via Helm](./overview.md#via-helm-install). For details about available values, see the Rancher Turtles [Helm chart reference guide](https://turtles.docs.rancher.com/docs/reference-guides/rancher-turtles-chart/values).

The installation may take a few minutes and after completing you can see the following new deployments in the cluster:

- `rancher-turtles-system/rancher-turtles-controller-manager`
- `rancher-turtles-system/rancher-turtles-cluster-api-operator`
- `capi-system/capi-controller-manager`

#### Demo

This demo illustrates how to use the Rancher UI to install Rancher Turtles, create/import a CAPI cluster, and install monitoring on the cluster:

<iframe width="560" height="315" src="https://www.youtube.com/embed/lGsr7KfBjgU?si=ORkzuAJjcdXUXMxh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Installing via Helm

There are two ways to install Rancher Turtles with Helm, depending on whether you include the CAPI operator as a dependency:
- [Install Rancher Turtles with CAPI Operator as a dependency](#install-rancher-turtles-with-cluster-api-capi-operator-as-a-helm-dependency).
- [Install Rancher Turtles without CAPI Operator](#install-rancher-turtles-without-cluster-api-capi-operator-as-a-helm-dependency).

The CAPI Operator is required for installing Rancher Turtles. You can choose whether you want to take care of this dependency yourself or let the Rancher Turtles Helm chart manage it for you. [Installing Turtles as a dependency](#install-rancher-turtles-with-cluster-api-capi-operator-as-a-helm-dependency) is simpler, but your best option depends on your specific configuration.

The CAPI Operator allows for handling the lifecycle of CAPI providers using a declarative approach, extending the capabilities of `clusterctl`. If you want to learn more about it, you can refer to [Cluster API Operator book](https://cluster-api-operator.sigs.k8s.io/).

#### Installing Rancher Turtles with `Cluster API (CAPI) Operator` as a Helm dependency

1. Add the Helm repository containing the `rancher-turtles` chart as the first step in installation:

```bash
helm repo add turtles https://rancher.github.io/turtles
helm repo update
```

2. As mentioned before, installing Rancher Turtles requires the [CAPI Operator](https://github.com/kubernetes-sigs/cluster-api-operator). The Helm chart can automatically install it with a minimal set of flags:

```bash
helm install rancher-turtles turtles/rancher-turtles --version <version> \
    -n rancher-turtles-system \
    --dependency-update \
    --create-namespace --wait \
    --timeout 180s
```

3. This operation could take a few minutes and after completing you can review the installed controllers listed below:

- `rancher-turtles-controller`
- `capi-operator`

:::note

- If `cert-manager` is already available in the cluster, disable its installation as a Rancher Turtles dependency. This prevents dependency conflicts:
`--set cluster-api-operator.cert-manager.enabled=false`
- For a list of Rancher Turtles versions, refer to the [Turtles release page](https://github.com/rancher/turtles/releases).

:::

This is the basic, recommended configuration, which manages the creation of a secret containing the required CAPI feature flags (`CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` and `EXP_MACHINE_POOL` enabled) in the core provider namespace. These feature flags are required to enable additional CAPI functionality.

If you need to override the default behavior and use an existing secret (or add custom environment variables), you can pass the secret name Helm flag. In this case, as a user, you are in charge of managing the secret creation and its content, including enabling the minimum required features: `CLUSTER_TOPOLOGY`, `EXP_CLUSTER_RESOURCE_SET` and `EXP_MACHINE_POOL`.

```bash
helm install ...
    # Passing secret name and namespace for additional environment variables
    --set cluster-api-operator.cluster-api.configSecret.name=<secret-name>
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

For detailed information on the values supported by the chart and their usage, refer to [Helm chart options](https://turtles.docs.rancher.com/docs/reference-guides/rancher-turtles-chart/values)

:::

#### Installing Rancher Turtles without `Cluster API (CAPI) Operator` as a Helm dependency

:::note

Remember that if you opt for this installation option, you must manage the CAPI Operator installation yourself. You can follow the [CAPI Operator guide](https://turtles.docs.rancher.com/docs/tasks/capi-operator/intro) in the Rancher Turtles documentation for assistance.

:::

1. Add the Helm repository containing the `rancher-turtles` chart as the first step in installation:

```bash
helm repo add turtles https://rancher.github.io/turtles
helm repo update
```

2. Install the chart into the `rancher-turtles-system` namespace:

```bash
helm install rancher-turtles turtles/rancher-turtles --version <version>
    -n rancher-turtles-system
    --set cluster-api-operator.enabled=false
    --set cluster-api-operator.cluster-api.enabled=false
    --create-namespace --wait
    --dependency-update
```

The previous commands tell Helm to ignore installing `cluster-api-operator` as a dependency.

3. This operation could take a few minutes and after completing you can review the installed controller listed below:

- `rancher-turtles-controller`

## Uninstalling Rancher Turtles

:::caution

When installing Rancher Turtles in your Rancher environment, by default, Rancher Turtles enables the CAPI Operator cleanup. This includes cleaning up CAPI Operator specific webhooks and deployments that otherwise cause issues with Rancher provisioning.

To simplify uninstalling Rancher Turtles (via Rancher or Helm command), the official Rancher Turtles Helm chart includes a `post-delete` hook that that removes the following:

- Deletes the `mutating-webhook-configuration` and `validating-webhook-configuration` webhooks that are no longer needed.
- Deletes the CAPI `deployments` that are no longer needed.

:::

To uninstall Rancher Turtles:

```bash
helm uninstall -n rancher-turtles-system rancher-turtles --cascade foreground --wait
```

This may take a few minutes to complete.

:::note

Remember that, if you use a different name for the installation or a different namespace, you may need to customize the command for your specific configuration.

:::

After Rancher Turtles is uninstalled, Rancher's `embedded-cluster-api` feature must be re-enabled:

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

## Security

[SLSA](https://slsa.dev/spec/v1.0/about) is a set of incrementally adoptable guidelines for supply chain security, established by industry consensus. The specification set by SLSA is useful for both software producers and consumers: producers can follow SLSA’s guidelines to make their software supply chain more secure, and consumers can use SLSA to make decisions about whether to trust a software package.

Rancher Turtles meets [SLSA Level 3](https://slsa.dev/spec/v1.0/levels#build-l3) requirements for appropriate build platform, consistent build process, and provenance distribution. For more information, visit the [Rancher Turtles Security](https://turtles.docs.rancher.com/docs/security/slsa) document.
