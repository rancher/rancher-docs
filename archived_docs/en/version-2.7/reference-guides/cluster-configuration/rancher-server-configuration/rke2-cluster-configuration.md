---
title: RKE2 Cluster Configuration Reference
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"/>
</head>

This section covers the configuration options that are available in Rancher for a new or existing RKE2 Kubernetes cluster.

## Overview

You can configure the Kubernetes options in one of the two following ways:

- [Rancher UI](#configuration-options-in-the-rancher-ui): Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster.
- [Cluster Config File](#cluster-config-file-reference): Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE2 config file. Using a config file allows you to set many additional [options](https://docs.rke2.io/install/configuration) available for an RKE2 installation.

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

For a complete reference of configurable options for K3s clusters in YAML, see the [K3s documentation.](https://rancher.com/docs/k3s/latest/en/installation/install-options/)

To edit your cluster in YAML:

1. Click **☰ > Cluster Management**.
1. Go to the cluster you want to configure and click **⋮ > Edit as YAML**.
1. Edit the RKE options under the `rkeConfig` directive.

## Configuration Options in the Rancher UI

### Machine Pool Configuration

This subsection covers generic machine pool configurations. For specific infrastructure provider configurations, refer to the following:

- [Azure](../downstream-cluster-configuration/machine-configuration/azure.md)
- [DigitalOcean](../downstream-cluster-configuration/machine-configuration/digitalocean.md)
- [EC2](../downstream-cluster-configuration/machine-configuration/amazon-ec2.md)

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

The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on [hyperkube](https://github.com/rancher/hyperkube).

For more detail, see [Upgrading Kubernetes](../../../getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md).

##### Container Network Provider

The [Network Provider](https://kubernetes.io/docs/concepts/cluster-administration/networking/) that the cluster uses.

:::caution

After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you to tear down the entire cluster and all its applications.

:::

Out of the box, Rancher is compatible with the following network providers:

- [Canal](https://github.com/projectcalico/canal)
- [Cilium](https://cilium.io/)*
- [Calico](https://docs.projectcalico.org/v3.11/introduction/)
- [Multus](https://github.com/k8snetworkplumbingwg/multus-cni)

\* When using [project network isolation](#project-network-isolation) in the [Cilium CNI](../../../faq/container-network-interface-providers.md#cilium), it is possible to enable cross-node ingress routing. Click the [CNI provider docs](../../../faq/container-network-interface-providers.md#ingress-routing-across-nodes-in-cilium) to learn more.

For more details on the different networking providers and how to configure them, please view our [RKE2 documentation](https://docs.rke2.io/install/network_options).

###### Dual-stack Networking

[Dual-stack](https://docs.rke2.io/install/network_options#dual-stack-configuration) networking is supported for all CNI providers. To configure RKE2 in dual-stack mode, set valid IPv4/IPv6 CIDRs for your [Cluster CIDR](#cluster-cidr) and/or [Service CIDR](#service-cidr).

###### Dual-stack Additional Configuration

When using `cilium` or `multus,cilium` as your container network interface provider, ensure the **Enable IPv6 Support** option is also enabled.

##### Cloud Provider

You can configure a [Kubernetes cloud provider](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/set-up-cloud-providers.md). If you want to use dynamically provisioned [volumes and storage](../../../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md) in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the `aws` cloud provider.

:::note

If the cloud provider you want to use is not listed as an option, you will need to use the [config file option](#cluster-config-file-reference) to configure the cloud provider. Please reference [this documentation](https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/) on how to configure the cloud provider.

:::

##### Default Pod Security Policy

The default [pod security policy](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md) for the cluster. Please refer to the [RKE2 documentation](https://docs.rke2.io/security/pod_security_policies) on the specifications of each available policy.

##### Pod Security Admission Configuration Template

The default [pod security admission configuration template](../../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md) for the cluster.

##### Worker CIS Profile

Select a [CIS benchmark](../../../how-to-guides/advanced-user-guides/cis-scan-guides/cis-scan-guides.md) to validate the system configuration against.

##### Project Network Isolation

If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication.

Project network isolation is available if you are using any RKE2 network plugin that supports the enforcement of Kubernetes network policies, such as Canal.

##### CoreDNS

By default, [CoreDNS](https://coredns.io/) is installed as the default DNS provider. If CoreDNS is not installed, an alternate DNS provider must be installed yourself. Refer to the [RKE2 documentation](https://docs.rke2.io/networking/networking_services#coredns) for additional CoreDNS configurations.

##### NGINX Ingress

If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster. Refer to the [RKE2 documentation](https://docs.rke2.io/networking/networking_services#nginx-ingress-controller) for additional configuration options.

Refer to the [RKE2 documentation](https://docs.rke2.io/networking/networking_services#nginx-ingress-controller) for additional configuration options.

##### Metrics Server

Option to enable or disable [Metrics Server](https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/).

Each cloud provider capable of launching a cluster using RKE2 can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal.

#### Add-On Config

Additional Kubernetes manifests, managed as an [Add-on](https://kubernetes.io/docs/concepts/cluster-administration/addons/), to apply to the cluster on startup. Refer to the [RKE2 documentation](https://docs.rke2.io/helm#automatically-deploying-manifests-and-helm-charts) for details.

#### Agent Environment Vars

Option to set environment variables for [Rancher agents](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents.md). The environment variables can be set using key value pairs. Refer to the [RKE2 documentation](https://docs.rke2.io/reference/linux_agent_config) for more details.

#### etcd

##### Automatic Snapshots

Option to enable or disable recurring etcd snapshots. If enabled, users have the option to configure the frequency of snapshots. For details, refer to the [RKE2 documentation](https://docs.rke2.io/backup_restore#creating-snapshots). Note that with RKE2, snapshots are stored on each etcd node. This varies from RKE1 which only stores one snapshot per cluster.

##### Metrics

Option to choose whether to expose etcd metrics to the public or only within the cluster.

#### Networking

##### Cluster CIDR

IPv4 and/or IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16).

###### Dual-stack Networking

To configure [dual-stack](https://docs.rke2.io/install/network_options#dual-stack-configuration) mode, enter a valid IPv4/IPv6 CIDR. For example `10.42.0.0/16,2001:cafe:42:0::/56`.

[Additional configuration](#dual-stack-additional-configuration) is required when using `cilium` or `multus,cilium` as your [container network](#container-network-provider) interface provider.

##### Service CIDR

IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16).

###### Dual-stack Networking

To configure [dual-stack](https://docs.rke2.io/install/network_options#dual-stack-configuration) mode, enter a valid IPv4/IPv6 CIDR. For example `10.42.0.0/16,2001:cafe:42:0::/56`.

[Additional configuration](#dual-stack-additional-configuration) is required when using `cilium ` or `multus,cilium` as your [container network](#container-network-provider) interface provider.

##### Cluster DNS

IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10).

##### Cluster Domain

Select the domain for the cluster. The default is `cluster.local`.

##### NodePort Service Port Range

Option to change the range of ports that can be used for [NodePort services](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport). The default is `30000-32767`.

##### Truncate Hostnames

Option to truncate hostnames to 15 characters or less. You can only set this field during the initial creation of the cluster. You can't enable or disable the 15 character limit after cluster creation.

This setting only affects machine-provisioned clusters. Since custom clusters set hostnames during their own node creation process, which occurs outside of Rancher, this field doesn't restrict custom cluster hostname length.

Truncating hostnames in a cluster improves compatibility with Windows-based systems. Although Kubernetes allows hostnames up to 63 characters in length, systems that use NetBIOS restrict hostnames to 15 characters or less.

##### TLS Alternate Names

Add hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert.

##### Authorized Cluster Endpoint

Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher.

This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the `controlplane` role and the default Kubernetes self signed certificates.

For more detail on how an authorized cluster endpoint works and why it is used, refer to the [architecture section.](../../../reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters.md#4-authorized-cluster-endpoint)

We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the [recommended architecture section.](../../rancher-manager-architecture/architecture-recommendations.md#architecture-for-an-authorized-cluster-endpoint-ace)

#### Registries

Select the image repository to pull Rancher images from. For more details and configuration options, see the [RKE2 documentation](https://docs.rke2.io/install/containerd_registry_configuration).

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

Editing clusters in YAML allows you to set the [options available](https://docs.rke2.io/install/configuration) in an RKE2 installation, including those already listed in [Configuration Options in the Rancher UI](#configuration-options-in-the-rancher-ui), as well as set Rancher-specific parameters.

<details>
    <summary>
        <b>Example Cluster Config File Snippet</b>
    </summary>

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  cloudCredentialSecretName: cattle-global-data:cc-s879v
  kubernetesVersion: v1.25.12+rke2r1
  localClusterAuthEndpoint: {}
  rkeConfig:
    additionalManifest: ""
    chartValues:
      rke2-calico: {}
    etcd:
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
      profile: null
      kube-apiserver-arg:
        - audit-policy-file=/etc/rancher/rke2/user-audit-policy.yaml
        - audit-log-path=/etc/rancher/rke2/user-audit.logs
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
        protect-kernel-defaults: false
    machineSelectorFiles:
      - fileSources:
          - configMap:
              name: ''
            secret:
              name: audit-policy
              items:
                - key: audit-policy
                  path: /etc/rancher/rke2/user-audit-policy.yaml
        machineLabelSelector:
          matchLabels:
            rke.cattle.io/control-plane-role: 'true'
    registries: {}
    upgradeStrategy:
      controlPlaneConcurrency: "1"
      controlPlaneDrainOptions:
        deleteEmptyDirData: true
        enabled: true
        gracePeriod: -1
        ignoreDaemonSets: true
        timeout: 120
      workerConcurrency: "1"
      workerDrainOptions:
        deleteEmptyDirData: true
        enabled: true
        gracePeriod: -1
        ignoreDaemonSets: true
        timeout: 120
```
</details>

### additionalManifest

Specify additional manifests to deliver to the control plane nodes.

The value is a String, and will be placed at the path `/var/lib/rancher/rke2/server/manifests/rancher/addons.yaml` on target nodes.

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

Specify the values for the system charts installed by RKE2.

For more information about how RKE2 manges packaged components, please refer to [RKE2 documentation](https://docs.rke2.io/helm).

Example:

```yaml
chartValues:
    chart-name:
        key: value
```

### machineGlobalConfig

Specify RKE2 configurations. Any configuration change made here will apply to every node. The configuration options available in the [standalone version of RKE2](https://docs.rke2.io/reference/server_config) can be applied here.

Example:

```yaml
machineGlobalConfig:
    etcd-arg:
        - key1=value1
        - key2=value2
```

There are some configuration options that can't be changed when provisioning via Rancher:
- data-dir (folder to hold state), which defaults to `/var/lib/rancher/rke2`.

To make it easier to put files on nodes beforehand, Rancher expects the following values to be included in the configuration, while RKE2 expects the values to be entered as file paths:
- audit-policy-file
- cloud-provider-config
- private-registry

Rancher delivers the files to the path `/var/lib/rancher/rke2/etc/config-files/<option>` in target nodes, and sets the proper options in the RKE2 server.

Example:
```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
spec:
  rkeConfig:
    machineGlobalConfig:
      audit-policy-file: 
        apiVersion: audit.k8s.io/v1 
        kind: Policy 
        rules: 
        - level: RequestResponse
          resources:
          - group: ""
            resources: 
            - pods
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

Deliver files to nodes, so that the files can be in place before initiating RKE2 server or agent processes.
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
