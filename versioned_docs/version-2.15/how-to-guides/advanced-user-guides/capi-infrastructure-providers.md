---
title: Configuring Native CAPI Infrastructure Providers to Provision RKE2 Clusters
---

:::caution

**This is a technology preview and using native CAPI infrastructure providers is an experimental feature introduced in Rancher 2.14.0.** The purpose of this guide is for evaluation and **should not** be used for production clusters, and note some configuration fields are subject to change. Future versions of this feature may be incompatible with this version.

:::

## Overview

Rancher 2.14.0 can provision RKE2 clusters using native CAPI infrastructure providers, such as [CAPA](https://cluster-api-aws.sigs.k8s.io/) (Cluster API Provider AWS) and [CAPV](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere) (Cluster API Provider vSphere).

Standard RKE2 provisioning relies on Rancher’s internal bootstrap and control plane providers alongside Rancher Node Drivers (via `rancher/machine`) as the infrastructure provider. This new mode allows you to substitute Rancher Node Drivers with native CAPI infrastructure providers while retaining Rancher’s bootstrap and control plane logic.

This guide provides simple examples for evaluating this provisioning mode using CAPA and CAPV. Refer to the documentation of each provider for more details on available options and adapt these examples to your needs.

:::note
Provisioning with a native CAPI infrastructure provider and Rancher as a bootstrap and control plane provider is distinct from using [Rancher Turtles](https://turtles.docs.rancher.com/turtles/stable/en/index.html) and the [CAPRKE2](https://caprke2.docs.rancher.com/) provider to provision a RKE2 cluster and subsequently import it into Rancher.
:::

### Limitations and requirements

- Unsupported configurations: Windows worker nodes and IPv6 are currently not supported.
- UI constraints: Detailed cluster management via the UI is disabled; clusters must be created and modified by applying Kubernetes objects to the local cluster. However, the Cluster Explorer remains accessible.
- Kubernetes cloud provider requirements: A cloud-specific Kubernetes provider for the infrastructure where the downstream cluster runs is required (e.g., the [Kubernetes AWS Cloud Provider](https://cloud-provider-aws.sigs.k8s.io/) for CAPA or the `rancher-vsphere-cpi` chart for CAPV).

## General steps

For both CAPA and CAPV, the general steps are as follows:

1. Install Rancher.
1. Install a CAPI infrastructure provider, either CAPA or CAPV.
1. Set-up an identity resource for the provider.
1. Create a CAPI infrastructure cluster resource.
1. Create one or more CAPI infrastructure machine template resources.
1. Create a Rancher `clusters.provisioning.cattle.io` resource that references the identity, infrastructure cluster and infrastructure machine template resources.

After applying the `clusters.provisioning.cattle.io` resource, the cluster appears in the Rancher Cluster Management list (click on **☰ > Cluster Management**), however the detailed view for this type of cluster is currently unavailable.

To view the progress of the provisioning process and troubleshoot, refer to the status of the various CAPI and Rancher provisioning resources in the local cluster:

1. Click **☰**, then click on the icon for your local cluster.
1. Use the dropdown menu at the top to filter for **All Namespaces**.
1. From the sidebar, select **More Resources > Cluster Provisioning**.

The logs for the infrastructure provider deployment (e.g. `capa-controller-manager`) also show useful information.

## Installing the infrastructure provider

Rancher allows installing the infrastructure provider declaratively by creating the Rancher Turtles [`CAPIProvider`](https://turtles.docs.rancher.com/turtles/stable/en/reference/capiprovider.html) resource.

### Examples

CAPA:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: capa-system
---
apiVersion: turtles-capi.cattle.io/v1alpha1
kind: CAPIProvider
metadata:
  name: aws
  namespace: capa-system
spec:
  type: infrastructure
  variables:
    # Global credentials for the provider are not needed
    # as these examples define credentials for the AWSCluster.
    AWS_B64ENCODED_CREDENTIALS: ""
```

CAPV:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: capv-system
---
apiVersion: turtles-capi.cattle.io/v1alpha1
kind: CAPIProvider
metadata:
  name: vsphere
  namespace: capv-system
spec:
  type: infrastructure
  variables:
    # Global credentials for the provider are not needed
    # as these examples define credentials for the VsphereCluster.
    VSPHERE_USERNAME: ""
    VSPHERE_PASSWORD: ""
```

## Provisioning a cluster

For these examples, a single machine pool with all roles (control plane, etcd and worker) are used, but the examples can be adapted by specifying more machine pools and separate roles.

Create the resources in your upstream cluster, and replace values within `<>` brackets.

:::caution

Each machine pool defined in the `clusters.provisioning.cattle.io` resource should reference a different machine template.

:::

### CAPA

First, configure IAM as required by CAPA. These roles are assumed by downstream nodes using instance profiles to enable the Kubernetes AWS cloud provider.

To do this, CAPA provides the `clusterawsadm` tool to generate and apply the required objects. Refer to the CAPA manual for more [details](https://cluster-api-aws.sigs.k8s.io/topics/using-clusterawsadm-to-fulfill-prerequisites).

Then, configure the provider identity in the upstream cluster so that the CAPA provider can create resources on AWS. Refer to the manual for all [options](https://cluster-api-aws.sigs.k8s.io/topics/multitenancy).

In this example, we'll use `AWSClusterStaticIdentity`.

Create a secret with your credentials:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: capa-lab-credentials
  namespace: capa-system
type: Opaque
stringData:
  AccessKeyID: <access key id>
  SecretAccessKey: <secret access key>
  # You might have a session token depending on your credential type.
  # SessionToken: <session token>
```

Then, create the identity object that references the secret:

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSClusterStaticIdentity
metadata:
  name: capa-lab-identity
spec:
  secretRef: capa-lab-credentials
  allowedNamespaces:
    # The namespace of the AWSCluster resource that points
    # to this identity for provisioning.
    list:
      - fleet-default
```

Now, create the `AWSCluster` [resource](https://cluster-api-aws.sigs.k8s.io/crd/#infrastructure.cluster.x-k8s.io%2fv1beta2). This object defines the infrastructure configuration common to all machine pools.

CAPA creates VPCs, subnets, security groups and a load balancer in its default configuration, but additional rules must be configured to allow ports needed by Rancher and RKE2. For simplicity, this example defines additional security group rules that allow all traffic between the nodes, but more restrictive rules can be configured instead.

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSCluster
metadata:
  name: capa-lab
  namespace: fleet-default
spec:
  identityRef:
    kind: AWSClusterStaticIdentity
    name: capa-lab-identity

  controlPlaneLoadBalancer:
    healthCheckProtocol: TCP
    loadBalancerType: nlb

  region: <e.g. us-east-1>

  # These two additional rules allow all incoming traffic
  # from other nodes.
  network:
    additionalControlPlaneIngressRules:
      - protocol: "-1"
        sourceSecurityGroupRoles:
          - controlplane
          - node   
    additionalNodeIngressRules:
      - protocol: "-1"
        sourceSecurityGroupRoles:
          - controlplane
          - node
```

Next, create a machine template for the control plane machine pool. Create additional templates for every machine pool defined in the `clusters.provisioning.cattle.io` resource.

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSMachineTemplate
metadata:
  name: capa-lab-control-plane
  namespace: fleet-default
spec:
  template:
    spec:
      ami:
        # The ami requires cloud-init.
        id: <your ami>
      # This should correspond to the profile created through clusterawsadm.
      # Worker or etcd-only nodes should use nodes.cluster-api-provider-aws.sigs.k8s.io.
      iamInstanceProfile: control-plane.cluster-api-provider-aws.sigs.k8s.io
      instanceType: t3.medium
      # This refers to the name of an EC2 key pair.
      sshKeyName: <your ssh key>
      rootVolume:
        size: 16
      cloudInit:
        insecureSkipSecretsManager: true
```

:::caution
The `insecureSkipSecretsManager` option is set to true to bypass the AWS secrets manager as a source of userdata for the provisioned instances. This source restricts the visibility of the userdata but requires a custom cloud-init datasource which is not currently compatible with the userdata generated by Rancher. For more information, see the [CAPA documentation](https://cluster-api-aws.sigs.k8s.io/topics/userdata-privacy).
:::

Finally, create the Rancher `clusters.provisioning.cattle.io` resource and point to the CAPA cluster and machine template that were just created.

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: capa-lab
  namespace: fleet-default
spec:
  kubernetesVersion: v1.35.1+rke2r1
  rkeConfig:
    # This is the ref to the infra cluster defined above.
    infrastructureRef:
      kind: AWSCluster
      name: capa-lab
      namespace: fleet-default
      apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
    machinePools:
      - name: ctrl
        controlPlaneRole: true
        etcdRole: true
        workerRole: true
        quantity: 3
        machineConfigRef:
          kind: AWSMachineTemplate
          name: capa-lab-control-plane
          namespace: fleet-default
          apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
      ingress-controller: traefik
      protect-kernel-defaults: false
      cloud-provider-name: external
      node-name-from-cloud-provider-metadata: true
    # The AWS cloud controller definition. The controller uses the IAM instance profile for its AWS credentials.
    additionalManifest: |-
      apiVersion: helm.cattle.io/v1
      kind: HelmChart
      metadata:
        name: aws-cloud-controller-manager
        namespace: kube-system
      spec:
        chart: aws-cloud-controller-manager
        repo: https://kubernetes.github.io/cloud-provider-aws
        targetNamespace: kube-system
        bootstrap: true
        valuesContent: |-
          hostNetworking: true
          nodeSelector:
            node-role.kubernetes.io/control-plane: "true"
          args:
            - --configure-cloud-routes=false
            - --v=5
            - --cloud-provider=aws
```

### CAPV

First, configure the provider identity in the upstream cluster so that the CAPV provider can create resources on your vSphere server. Refer to the manual for all identity [options](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/blob/v1.15.2/docs/identity_management.md), and for general vSphere [requirements](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/blob/v1.15.2/docs/getting_started.md).

In this example, we'll use `VSphereClusterIdentity`.

Create a secret with your credentials:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: capv-lab-credentials
  namespace: capv-system
type: Opaque
stringData:
  username: <your vSphere username>
  password: <your vSphere password>
```

Then, create the identity object that references the secret:

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
kind: VSphereClusterIdentity
metadata:
  name: capv-lab-identity
spec:
  secretName: capv-lab-credentials
  allowedNamespaces:
    selector:
      # The namespace of the VSphereCluster for which this identity
      # is used when provisioning.
      matchLabels:
        kubernetes.io/metadata.name: fleet-default
```

Like for CAPA, it is also necessary to install the [cloud provider for vSphere](https://github.com/kubernetes/cloud-provider-vsphere) in the downstream cluster.

To securely transfer the credentials for the CPI chart, you can enable the prebootstrap feature in Rancher. This can be done by [enabling](../../how-to-guides/advanced-user-guides/enable-experimental-features/enable-experimental-features.md) the `provisioningprebootstrap` feature flag and causes Rancher to restart.

Now, create the secret that is sent to the downstream cluster. If you use a different name to create the `clusters.provisioning.cattle.io` resource, make sure you update the `rke.cattle.io/object-authorized-for-clusters` annotation below.

```yaml
# Credential secret synced to the downstream cluster for the vsphere CPI chart.
apiVersion: v1
kind: Secret
metadata:
  name: vsphere-cpi-creds
  namespace: fleet-default
  annotations:
    # Can be a comma-separated list for multiple clusters, with no spaces.
    rke.cattle.io/object-authorized-for-clusters: capv-lab
    provisioning.cattle.io/sync-bootstrap: "true"
    provisioning.cattle.io/sync-target-namespace: kube-system
type: Opaque
stringData:
  # Change the prefix of the key to match your vCenter host.
  <vsphere host>.username: <your vSphere username>
  <vsphere host>.password: <your vSphere password>
```

Now, create the `VSphereCluster` resource. This resource defines the infrastructure configuration common to all machine pools. Refer to the CAPV documentation for more configuration options.

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
kind: VSphereCluster
metadata:
  name: capv-lab
  namespace: fleet-default
spec:
  identityRef:
    kind: VSphereClusterIdentity
    name: capv-lab-identity
  server: <vsphere fqdn>
```

Next, create a machine template for the control plane machine pool. Create additional templates for every machine pool defined in the `clusters.provisioning.cattle.io` resource.

```yaml
apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
kind: VSphereMachineTemplate
metadata:
  name: capv-lab-control-plane
  namespace: fleet-default
spec:
  template:
    spec:
      datacenter: <datacenter>
      datastore: <datastore>
      diskGiB: 20
      folder: <your folder>
      memoryMiB: 4096
      network:
        devices:
        - dhcp4: true
          networkName: <your network>
      numCPUs: 2
      os: Linux
      resourcePool: <your resource pool>
      template: <your VM template>
```

Finally, create the Rancher `clusters.provisioning.cattle.io` resource and point to the CAPV cluster and machine template that were just created. Note that this example disables the CSI chart for simplicity. The CPI chart is required.

```yaml
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: capv-lab
  namespace: fleet-default
spec:
  kubernetesVersion: v1.35.1+rke2r1
  rkeConfig:
    infrastructureRef:
      kind: VSphereCluster
      name: capv-lab
      namespace: fleet-default
      apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
    machinePools:
      - name: ctrl
        controlPlaneRole: true
        etcdRole: true
        workerRole: true
        quantity: 3
        machineConfigRef:
          kind: VSphereMachineTemplate
          name: capv-lab-control-plane
          namespace: fleet-default
          apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
      ingress-controller: traefik
      protect-kernel-defaults: false
      disable:
        - rancher-vsphere-csi
      cloud-provider-name: rancher-vsphere
    chartValues:
      rancher-vsphere-cpi:
        vCenter:
          datacenters: <your datacenter>
          host: <vsphere fqdn>
          # The credential secret is transferred by the prebootstrap mechanism,
          # and the cpi chart expects the default name (vsphere-cpi-creds).
          credentialsSecret:
            generate: false
```

### Changing machine templates

Machine templates for CAPI infrastructure providers, such as `AWSMachineTemplate` and `VSphereMachineTemplate` are usually immutable. To modify the configuration of the instances in a machine pool, create a new template with a different name, then edit the machine pool in `clusters.provisioning.cattle.io` to point to this new template. This causes all of the machines in that pool to be recreated with the new configuration.

### Customizing userdata

Custom user data can be defined for each machine pool in the `clusters.provisioning.cattle.io` resource. To do this, use the `.spec.rkeConfig.machinePools.userdata.inlineUserdata` as an inline yaml string in the plain cloud-config format. The contents of this field are merged with the userdata generated by Rancher to bootstrap the cluster nodes.

:::caution
Do not include sensitive data in this field, as it is part of a resource other than a Secret.

This field is experimental and subject to change. It is only valid for native CAPI providers described in this document, and has no effect on clusters provisioned by Rancher through the standard method with node drivers.
:::

Modifying the userdata field causes all of the machines in the pool to be recreated.

```yaml
# Only some fields of the provisioning cluster resource are shown here.
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: capv-lab
  namespace: fleet-default
spec:
  kubernetesVersion: v1.35.1+rke2r1
  rkeConfig:
    machinePools:
      - name: ctrl
        userdata:
          inlineUserdata: |
            runcmd:
              - ["echo", "Hello!"]
```
