---
title: Authentication, Permissions and Global Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration"/>
</head>

After installation, the [system administrator](manage-role-based-access-control-rbac/global-permissions.md) should configure Rancher to configure authentication, authorization, security, default settings, security policies, drivers and global DNS entries.

## First Log In

After you log into Rancher for the first time, Rancher will prompt you for a **Rancher Server URL**. You should set the URL to the main entry point to the Rancher Server. When a load balancer sits in front a Rancher Server cluster, the URL should resolve to the load balancer. The system will automatically try to infer the Rancher Server URL from the IP address or host name of the host running the Rancher Server. This is only correct if you are running a single node Rancher Server installation. In most cases, therefore, you need to set the Rancher Server URL to the correct value yourself.

:::danger

After you set the Rancher Server URL, we do not support updating it. Set the URL with extreme care.

:::

## Authentication

One of the key features that Rancher adds to Kubernetes is centralized user authentication. This feature allows to set up local users and/or connect to an external authentication provider. By connecting to an external authentication provider, you can leverage that provider's user and groups.

For more information how authentication works and how to configure each provider, see [Authentication](authentication-config/authentication-config.md).

## Authorization

Within Rancher, each person authenticates as a _user_, which is a login that grants you access to Rancher. Once the user logs in to Rancher, their _authorization_, or their access rights within the system, is determined by the user's role. Rancher provides built-in roles to allow you to easily configure a user's permissions to resources, but Rancher also provides the ability to customize the roles for each Kubernetes resource.

For more information how authorization works and how to customize roles, see [Roles Based Access Control (RBAC)](manage-role-based-access-control-rbac/manage-role-based-access-control-rbac.md).

## Pod Security Policies

_Pod Security Policies_ (or PSPs) are objects that control security-sensitive aspects of pod specification, e.g. root privileges. If a pod does not meet the conditions specified in the PSP, Kubernetes will not allow it to start, and Rancher will display an error message.

For more information how to create and use PSPs, see [Pod Security Policies](create-pod-security-policies.md).

## Provisioning Drivers

Drivers in Rancher allow you to manage which providers can be used to provision [hosted Kubernetes clusters](../kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/set-up-clusters-from-hosted-kubernetes-providers.md) or [nodes in an infrastructure provider](../launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/use-new-nodes-in-an-infra-provider.md) to allow Rancher to deploy and manage Kubernetes.

For more information, see [Provisioning Drivers](about-provisioning-drivers/about-provisioning-drivers.md).

## Adding Kubernetes Versions into Rancher

With this feature, you can upgrade to the latest version of Kubernetes as soon as it is released, without upgrading Rancher. This feature allows you to easily upgrade Kubernetes patch versions (i.e. `v1.15.X`), but not intended to upgrade Kubernetes minor versions (i.e. `v1.X.0`) as Kubernetes tends to deprecate or add APIs between minor versions.

The information that Rancher uses to provision [RKE clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) is now located in the Rancher Kubernetes Metadata. For details on metadata configuration and how to change the Kubernetes version used for provisioning RKE clusters, see [Rancher Kubernetes Metadata.](../../../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md)

Rancher Kubernetes Metadata contains Kubernetes version information which Rancher uses to provision [RKE clusters](../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md).

For more information on how metadata works and how to configure metadata config, see [Rancher Kubernetes Metadata](../../../getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md).

## Enabling Experimental Features

Rancher includes some features that are experimental and disabled by default. Feature flags were introduced to allow you to try these features. For more information, refer to the section about [feature flags.](../../advanced-user-guides/enable-experimental-features/enable-experimental-features.md)
