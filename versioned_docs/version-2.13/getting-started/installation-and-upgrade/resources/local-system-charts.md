---
title: Setting up Local System Charts for Air Gapped Installations
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/local-system-charts"/>
</head>

The [Charts](https://github.com/rancher/charts) repository contains all the Helm catalog items required for features such as monitoring, logging, alerting and Istio.

In an air gapped installation of Rancher, you will need to configure Rancher to use a local copy of the system charts. This section describes how to use local system charts using a CLI flag.

## Using Local System Charts

A local copy of `system-charts` has been packaged into the `rancher/rancher` container. To be able to use these features in an air gap install, you will need to run the Rancher install command with an extra environment variable, `CATTLE_SYSTEM_CATALOG=bundled`, which tells Rancher to use the local copy of the charts instead of attempting to fetch them from GitHub.

Example commands for a Rancher installation with a bundled `system-charts` are included in the [air gap installation](../other-installation-methods/air-gapped-helm-cli-install/air-gapped-helm-cli-install.md) instructions for Docker and Helm installs.
