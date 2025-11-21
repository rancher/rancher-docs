---
title: K3s Cluster Configuration Reference
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration"/>
</head>

This section covers the configuration options that are available in Rancher for a new or existing K3s Kubernetes cluster.

## Overview

You can configure the Kubernetes options one of two ways:

- [Rancher UI](#configuration-options-in-the-rancher-ui): Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster.
- [Cluster Config File](#cluster-config-file-reference): Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create a K3s config file. Using a config file lets you set any of the [options](https://rancher.com/docs/k3s/latest/en/installation/install-options/) available during a K3s installation.

## Editing Clusters in the Rancher UI

The Rancher UI provides two ways to edit a cluster:
1. With a form.
1. With YAML.

### Editing Clusters with a Form

The form covers the most frequently needed options for clusters.

To edit your cluster,

1. Click **☰ > Cluster Management**.
1. Go to the cluster you want to configure and click **⋮ > Edit Config**.

### Editing Clusters in YAML

For a complete reference of configurable options for K3s clusters in YAML, see the [K3s documentation](https://docs.k3s.io/installation/configuration).

To edit your cluster with YAML:

1. Click **☰ > Cluster Management**.
1. Go to the cluster you want to configure and click **⋮ > Edit as YAML**.
1. Edit the RKE options under the `rkeConfig` directive.

## Configuration Options in the Rancher UI

### Machine Pool Configuration

This subsection covers generic machine pool configurations. For specific infrastructure provider configurations, refer to the following:

- [Azure](../downstream-cluster-configuration/machine-configuration/azure.md)
- [DigitalOcean](../downstream-cluster-configuration/machine-configuration/digitalocean.md)
- [Amazon EC2](../downstream-cluster-configuration/machine-configuration/amazon-ec2.md)
- [Google GCE](../downstream-cluster-configuration/machine-configuration/google-gce.md)

##### Pool Name

The name of the machine pool.

##### Machine Count

The number of machines in the pool.

##### Roles

Option to assign etcd, control plane, and worker roles to nodes.

#### Advanced

##### Auto Replace

The amount of time nodes can be unreachable before they are automatically deleted and replaced.

##### Drain Before Delete

Enables draining nodes by evicting all pods before the node is deleted.

##### Kubernetes Node Labels

Add [labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) to nodes to help with organization and object selection.

For details on label syntax requirements, see the [Kubernetes documentation.](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)

##### Taints

Add [taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/) to nodes, to prevent pods from being scheduled to or executed on the nodes, unless the pods have matching tolerations.

### Cluster Configuration
#### Basics
##### Kubernetes Version

The version of Kubernetes installed on your cluster nodes.

For details on upgrading or rolling back Kubernetes, refer to [this guide](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md).

##### Pod Security Admission Configuration Template

The default [pod security admission configuration template](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md) for the cluster.

##### Encrypt Secrets

Option to enable or disable secrets encryption. When enabled, secrets will be encrypted using a AES-CBC key. If disabled, any previously secrets will not be readable until encryption is enabled again. Refer to the [K3s documentation](https://rancher.com/docs/k3s/latest/en/advanced/#secrets-encryption-config-experimental) for details.

##### Project Network Isolation

If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication.

##### SELinux

Option to enable or disable [SELinux](https://rancher.com/docs/k3s/latest/en/advanced/#selinux-support) support.

##### CoreDNS

By default, [CoreDNS](https://coredns.io/) is installed as the default DNS provider. If CoreDNS is not installed, an alternate DNS provider must be installed yourself. Refer to the [K3s documentation](https://rancher.com/docs/k3s/latest/en/networking/#coredns) for details.

##### Klipper Service LB

Option to enable or disable the [Klipper](https://github.com/rancher/klipper-lb) service load balancer. Refer to the [K3s documentation](https://rancher.com/docs/k3s/latest/en/networking/#service-load-balancer) for details.

##### Traefik Ingress

Option to enable or disable the [Traefik](https://traefik.io/) HTTP reverse proxy and load balancer. For more details and configuration options, see the [K3s documentation](https://rancher.com/docs/k3s/latest/en/networking/#traefik-ingress-controller).

##### Local Storage

Option to enable or disable [local storage](https://rancher.com/docs/k3s/latest/en/storage/) on the node(s).

##### Metrics Server

Option to enable or disable the [metrics server](https://github.com/kubernetes-incubator/metrics-server). If enabled, ensure port 10250 is opened for inbound TCP traffic.

#### Add-On Config

Additional Kubernetes manifests, managed as a [Add-on](https://kubernetes.io/docs/concepts/cluster-administration/addons/), to apply to the cluster on startup. Refer to the [K3s documentation](https://rancher.com/docs/k3s/latest/en/helm/#automatically-deploying-manifests-and-helm-charts) for details.

#### Agent Environment Vars

Option to set environment variables for [K3s agents](https://rancher.com/docs/k3s/latest/en/architecture/). The environment variables can be set using key value pairs. Refer to the [K3 documentation](https://rancher.com/docs/k3s/latest/en/installation/install-options/agent-config/) for more details.

#### etcd

##### Automatic Snapshots

Option to enable or disable recurring etcd snapshots. If enabled, users have the option to configure the frequency of snapshots. For details, refer to the [K3s documentation](https://docs.k3s.io/cli/etcd-snapshot#creating-snapshots).

##### Metrics

Option to choose whether to expose etcd metrics to the public or only within the cluster.

#### Networking

##### Cluster CIDR

IPv4/IPv6 network CIDRs to use for pod IPs (default: `10.42.0.0/16`).

Example values:

- IPv4-only: `10.42.0.0/16`
- IPv6-only: `2001:cafe:42::/56`
- Dual-stack: `10.42.0.0/16,2001:cafe:42::/56`

For additional requirements and limitations related to dual-stack or IPv6-only networking, see the following resources:

- [K3s documentation: Dual-stack (IPv4 + IPv6) Networking](https://docs.k3s.io/networking/basic-network-options#dual-stack-ipv4--ipv6-networking)
- [K3s documentation: Single-stack IPv6 Networking](https://docs.k3s.io/networking/basic-network-options#single-stack-ipv6-networking)

:::caution

You must configure the Service CIDR when you first create the cluster. You cannot enable the Service CIDR on an existing cluster after it starts.

:::

##### Service CIDR

IPv4/IPv6 network CIDRs to use for service IPs (default: `10.43.0.0/16`).

Example values:

- IPv4-only: `10.43.0.0/16` 
- IPv6-only: `2001:cafe:43::/112` 
- Dual-stack: `10.43.0.0/16,2001:cafe:43::/112`

For additional requirements and limitations related to dual-stack or IPv6-only networking, see the following resources:

- [K3s documentation: Dual-stack (IPv4 + IPv6) Networking](https://docs.k3s.io/networking/basic-network-options#dual-stack-ipv4--ipv6-networking)
- [K3s documentation: Single-stack IPv6 Networking](https://docs.k3s.io/networking/basic-network-options#single-stack-ipv6-networking)

:::caution

You must configure the Service CIDR when you first create the cluster. You cannot enable the Service CIDR on an existing cluster after it starts.

:::

##### Cluster DNS

IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: `10.43.0.10`).

##### Cluster Domain

Select the domain for the cluster. The default is `cluster.local`.

##### NodePort Service Port Range

Option to change the range of ports that can be used for [NodePort services](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport). The default is `30000-32767`.

##### Truncate Hostnames

Option to truncate hostnames to 15 characters or fewer. You can only set this field during the initial creation of the cluster. You can't enable or disable the 15-character limit after cluster creation.

This setting only affects machine-provisioned clusters. Since custom clusters set hostnames during their own node creation process, which occurs outside of Rancher, this field doesn't restrict custom cluster hostname length.

Truncating hostnames in a cluster improves compatibility with Windows-based systems. Although Kubernetes allows hostnames up to 63 characters in length, systems that use NetBIOS restrict hostnames to 15 characters or fewer.

##### TLS Alternate Names

Add hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert.

##### Authorized Cluster Endpoint

Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher.

For more detail on how an authorized cluster endpoint works and why it is used, refer to the [architecture section.](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint)

We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the [recommended architecture section.](../../rancher-manager-architecture/architecture-recommendations.md#architecture-for-an-authorized-cluster-endpoint-ace)

##### Stack Preference

Choose the networking stack for the cluster. This option affects:

- The address used for health and readiness probes of components such as Calico, etcd, kube-apiserver, kube-scheduler, kube-controller-manager, and kubelet.
- The server URL in the `authentication-token-webhook-config-file` for the Authorized Cluster Endpoint.
- The `advertise-client-urls` setting for etcd during snapshot restoration.

Options are `ipv4`, `ipv6`, `dual`:

- When set to `ipv4`, the cluster uses `127.0.0.1`
- When set to `ipv6`, the cluster uses `[::1]`
- When set to `dual`, the cluster uses `localhost`

The stack preference must match the cluster’s networking configuration:

- Set to `ipv4` for IPv4-only clusters
- Set to `ipv6` for IPv6-only clusters
- Set to `dual` for dual-stack clusters

:::caution

Ensuring the loopback address configuration is correct is critical for successful cluster provisioning.
For more information, refer to the [Node Requirements](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md) page.

:::

#### Registries

Select the image repository to pull Rancher images from. For more details and configuration options, see the [K3s documentation](https://rancher.com/docs/k3s/latest/en/installation/private-registry/).

#### Upgrade Strategy

##### Control Plane Concurrency

Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage.

##### Worker Concurrency

Select how many nodes can be upgraded at the same time. Can be a fixed number or percentage.

##### Drain Nodes (Control Plane)

Option to remove all pods from the node prior to upgrading.

##### Drain Nodes (Worker Nodes)

Option to remove all pods from the node prior to upgrading.

#### Advanced

Option to set kubelet options for different nodes. For available options, refer to the [Kubernetes documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/).

## Cluster Config File Reference

Editing clusters in YAML allows you to set configurations that are already listed in [Configuration Options in the Rancher UI](#configuration-options-in-the-rancher-ui), as well as set Rancher-specific parameters.

<details>
    <summary>
        <b>Example Cluster Config File Snippet</b>
    </summary>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  cloudCredentialSecretName: cattle-global-data:cc-fllv6
  clusterAgentDeploymentCustomization: {}
  fleetAgentDeploymentCustomization: {}
  kubernetesVersion: v1.26.7+k3s1
  localClusterAuthEndpoint: {}
  rkeConfig:
    additionalManifest: ""
    chartValues: {}
    etcd:
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      disable-apiserver: false
      disable-cloud-controller: false
      disable-controller-manager: false
      disable-etcd: false
      disable-kube-proxy: false
      disable-network-policy: false
      disable-scheduler: false
      etcd-expose-metrics: false
      kube-apiserver-arg:
        - audit-policy-file=/etc/rancher/k3s/user-audit-policy.yaml
        - audit-log-path=/etc/rancher/k3s/user-audit.logs
      profile: null
      secrets-encryption: false
    machinePools:
    - controlPlaneRole: true
      etcdRole: true
      machineConfigRef:
        kind: Amazonec2Config
        name: nc-test-pool1-pwl5h
      name: pool1
      quantity: 1
      unhealthyNodeTimeout: 0s
      workerRole: true
    machineSelectorConfig:
      - config:
          docker: false
          protect-kernel-defaults: false
          selinux: false
    machineSelectorFiles:
      - fileSources:
          - configMap:
              name: ''
            secret:
              name: audit-policy
              items:
                - key: audit-policy
                  path: /etc/rancher/k3s/user-audit-policy.yaml
        machineLabelSelector:
          matchLabels:
            rke.cattle.io/control-plane-role: 'true'
    registries: {}
    upgradeStrategy:
      controlPlaneConcurrency: '1'
      controlPlaneDrainOptions:
        deleteEmptyDirData: true
        disableEviction: false
        enabled: false
        force: false
        gracePeriod: -1
        ignoreDaemonSets: true
        ignoreErrors: false
        postDrainHooks: null
        preDrainHooks: null
        skipWaitForDeleteTimeoutSeconds: 0
        timeout: 120
      workerConcurrency: '1'
      workerDrainOptions:
        deleteEmptyDirData: true
        disableEviction: false
        enabled: false
        force: false
        gracePeriod: -1
        ignoreDaemonSets: true
        ignoreErrors: false
        postDrainHooks: null
        preDrainHooks: null
        skipWaitForDeleteTimeoutSeconds: 0
        timeout: 120
```
</details>

### additionalManifest

Specify additional manifests to deliver to the control plane nodes.

The value is a String, and will be placed at the path `/var/lib/rancher/k3s/server/manifests/rancher/addons.yaml` on target nodes.

Example:

```yaml
additionalManifest: |-
  apiVersion: v1
  kind: Namespace
  metadata:
    name: name-xxxx
```


:::note

If you want to customize system charts, you should use the `chartValues` field as described below.

Alternatives, such as using a HelmChartConfig to customize the system charts via `additionalManifest`, can cause unexpected behavior, due to having multiple HelmChartConfigs for the same chart.

:::

### chartValues

Specify the values for the system charts installed by K3s.

For more information about how K3s manges packaged components, please refer to [K3s documentation](https://docs.k3s.io/installation/packaged-components).

Example:

```yaml
chartValues:
    chart-name:
        key: value
```

### machineGlobalConfig

Specify K3s configurations. Any configuration change made here will apply to every node. The configuration options available in the [standalone version of k3s](https://docs.k3s.io/cli/server) can be applied here.

Example:

```yaml
machineGlobalConfig:
    etcd-arg:
        - key1=value1
        - key2=value2
```

To make it easier to put files on nodes beforehand, Rancher expects the following values to be included in the configuration, while K3s expects the values to be entered as file paths:
- private-registry
- flannel-conf

Rancher delivers the files to the path `/var/lib/rancher/k3s/etc/config-files/<option>` in target nodes, and sets the proper options in the K3s server.

Example:
```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  rkeConfig:
    machineGlobalConfig:
      private-registry: |
        mirrors:
          docker.io:
            endpoint:
              - "http://mycustomreg.com:5000"
        configs:
          "mycustomreg:5000":
            auth:
              username: xxxxxx # this is the registry username
              password: xxxxxx # this is the registry password
```

### machineSelectorConfig

`machineSelectorConfig` is the same as [`machineGlobalConfig`](#machineglobalconfig) except that a [label](#kubernetes-node-labels) selector can be specified with the configuration. The configuration will only be applied to nodes that match the provided label selector.

Multiple `config` entries are allowed, each specifying their own `machineLabelSelector`. A user can specify `matchExpressions`, `matchLabels`, both, or neither. Omitting the `machineLabelSelector` section of this field has the same effect as putting the config in the `machineGlobalConfig` section.

Example:

```yaml
machineSelectorConfig
  - config:
      config-key: config-value
    machineLabelSelector:
      matchExpressions:
        - key: example-key
          operator: string # Valid operators are In, NotIn, Exists and DoesNotExist.
          values:
            - example-value1
            - example-value2
      matchLabels:
        key1: value1
        key2: value2
```

### machineSelectorFiles

:::note

This feature is available in Rancher v2.7.2 and later.

:::

Deliver files to nodes, so that the files can be in place before initiating K3s server or agent processes.
The content of the file is retrieved from either a secret or a configmap. The target nodes are filtered by the `machineLabelSelector`.

Example :

```yaml
machineSelectorFiles:
  - fileSources:
      - secret:
          items:
            - key: example-key
              path: path-to-put-the-file-on-nodes
              permissions: 644 (optional)
              hash: base64-encoded-hash-of-the-content (optional)
          name: example-secret-name
    machineLabelSelector:
      matchExpressions:
        - key: example-key
          operator: string # Valid operators are In, NotIn, Exists and DoesNotExist.
          values:
            - example-value1
            - example-value2
      matchLabels:
        key1: value1
        key2: value2
  - fileSources:
      - configMap:
          items:
            - key: example-key
              path: path-to-put-the-file-on-nodes
              permissions: 644 (optional)
              hash: base64-encoded-hash-of-the-content (optional)
          name: example-configmap-name
    machineLabelSelector:
      matchExpressions:
        - key: example-key
          operator: string # Valid operators are In, NotIn, Exists and DoesNotExist.
          values:
            - example-value1
            - example-value2
      matchLabels:
        key1: value1
        key2: value2
```

The secret or configmap must meet the following requirements:

1. It must be in the `fleet-default` namespace where the Cluster object exists.
2. It must have the annotation `rke.cattle.io/object-authorized-for-clusters: cluster-name1,cluster-name2`, which permits the target clusters to use it.

:::tip

Rancher Dashboard provides an easy-to-use form for creating the secret or configmap.

:::

Example:

```yaml
apiVersion: v1
data:
  audit-policy: >-
    IyBMb2cgYWxsIHJlcXVlc3RzIGF0IHRoZSBNZXRhZGF0YSBsZXZlbC4KYXBpVmVyc2lvbjogYXVkaXQuazhzLmlvL3YxCmtpbmQ6IFBvbGljeQpydWxlczoKLSBsZXZlbDogTWV0YWRhdGE=
kind: Secret
metadata:
  annotations:
    rke.cattle.io/object-authorized-for-clusters: cluster1
  name: name1
  namespace: fleet-default
```
