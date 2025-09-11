---
title: Enabling Experimental Features
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/advanced-user-guides/enable-experimental-features"/>
</head>

Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an [unsupported storage type](unsupported-storage-drivers.md) outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default.

The features can be enabled in three ways:

- [Enable features when starting Rancher.](#enabling-features-when-starting-rancher) When installing Rancher with a CLI, you can use a feature flag to enable a feature by default.
- [Enable features from the Rancher UI](#enabling-features-with-the-rancher-ui) by going to the **Settings** page.
- [Enable features with the Rancher API](#enabling-features-with-the-rancher-api) after installing Rancher.

Each feature has two values:

- A default value, which can be configured with a flag or environment variable from the command line
- A set value, which can be configured with the Rancher API or UI

If no value has been set, Rancher uses the default value.

Because the API sets the actual value and the command line sets the default value, that means that if you enable or disable a feature with the API or UI, it will override any value set with the command line.

For example, if you install Rancher, then set a feature flag to true with the Rancher API, then upgrade Rancher with a command that sets the feature flag to false, the default value will still be false, but the feature will still be enabled because it was set with the Rancher API. If you then deleted the set value (true) with the Rancher API, setting it to NULL, the default value (false) would take effect. See the [feature flags page](../../../getting-started/installation-and-upgrade/installation-references/feature-flags.md) for more information.

## Enabling Features when Starting Rancher

When you install Rancher, enable the feature you want with a feature flag. The command is different depending on whether you are installing Rancher on a single node or if you are doing a Kubernetes Installation of Rancher.

### Enabling Features for Kubernetes Installs

:::note

Values set from the Rancher API will override the value passed in through the command line.

:::

When installing Rancher with a Helm chart, use the `--set` option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:

For Kubernetes v1.25 or later, set `global.cattle.psp.enabled` to `false` when using Rancher v2.7.2-v2.7.4. This is not necessary for Rancher v2.7.5 and above, but you can still manually set the option if you choose.

```
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org \
  --set 'extraEnv[0].name=CATTLE_FEATURES'
  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'
```

:::note

If you are installing an alpha version, Helm requires adding the `--devel` option to the command.

:::

### Enabling Features for Air Gap Installs

To perform an [air gap installation of Rancher](../../../getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md), add a Helm chart repository and download a Helm chart, then install Rancher with Helm.

When you install the Helm chart, you should pass in feature flag names in a comma separated list, as in the following example:

```
helm install rancher ./rancher-<VERSION>.tgz \
  --namespace cattle-system \
  --set hostname=<RANCHER.YOURDOMAIN.COM> \
  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
  --set ingress.tls.source=secret \
  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
  --set useBundledSystemChart=true # Use the packaged Rancher system charts
  --set 'extraEnv[0].name=CATTLE_FEATURES'
  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'
```

### Enabling Features for Docker Installs

When installing Rancher with Docker, use the `--features` option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:

```
docker run -d -p 80:80 -p 443:443 \
  --restart=unless-stopped \
  rancher/rancher:rancher-latest \
  --features=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true
```


## Enabling Features with the Rancher UI

1. In the upper left corner, click **☰ > Global Settings**.
1. Click **Feature Flags**.
1. To enable a feature, go to the disabled feature you want to enable and click **⋮ > Activate**.

**Result:** The feature is enabled.

### Disabling Features with the Rancher UI

1. In the upper left corner, click **☰ > Global Settings**.
1. Click **Feature Flags**. You will see a list of experimental features.
1. To disable a feature, go to the enabled feature you want to disable and click **⋮ > Deactivate**.

**Result:** The feature is disabled.

## Enabling Features with the Rancher API

1. Go to `<RANCHER-SERVER-URL>/v3/features`.
1. In the `data` section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the `id` field. Click the name of the feature you want to enable.
1. In the upper left corner of the screen, under **Operations,** click **Edit**.
1. In the **Value** drop-down menu, click **True**.
1. Click **Show Request**.
1. Click **Send Request**.
1. Click **Close**.

**Result:** The feature is enabled.

### Disabling Features with the Rancher API

1. Go to `<RANCHER-SERVER-URL>/v3/features`.
1. In the `data` section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the `id` field. Click the name of the feature you want to enable.
1. In the upper left corner of the screen, under **Operations,** click **Edit**.
1. In the **Value** drop-down menu, click **False**.
1. Click **Show Request**.
1. Click **Send Request**.
1. Click **Close**.

**Result:** The feature is disabled.
