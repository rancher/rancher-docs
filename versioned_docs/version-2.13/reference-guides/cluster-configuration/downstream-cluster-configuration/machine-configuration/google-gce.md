---
title: GCE Machine Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/google-gce"/>
</head>


For more information about Google Cloud Platform (GCP) and the Google Compute Engine (GCE), refer to the official [GCP documentation](https://cloud.google.com/docs).

### Zone

The GCP Region and Zone that the VM will be deployed to. For example, `us-east1-b`.

### Machine Image Project

The image project that the desired image families belong to.

### Machine Image Family

The image family that the desired machine operating system belongs to.

### Machine Image

The operating system that will be installed onto the VM.

### Disk Type

The type of the disk attached to the VM. The available types may differ between regions.

### Disk Size

The size of the disk attached to the VM, in Gigabytes.

### Machine Type

The type of VM that will be deployed. Machine types determine the number of resources (vCPU, RAM, etc.) allocated for each node.

### Network

The VPC network that the VM will be created in. This value cannot be changed once the machine pool has been provisioned.

### Subnet

The VPC subnetwork tha the VM will be created in. This value cannot be changed once the machine pool has been provisioned.

### Username

A custom username set as the default user of the GCE VM. 

### External Address

The desired external IP address for the GCE VM.

### Scopes

A list of OAuth2 scopes which allow the VM to access other GCP APIs.

### Allow Internal Communication

By default, a VPC firewall rule is automatically created to expose a fixed set of ports within the VPC to facilitate communication between cluster nodes. This behavior can be disabled on a per machine pool basis, when clicking the `Show Advanced` option and disabling the `Allow Internal Communication` checkbox. 

### Expose External ports

A list of ports to be opened _externally_ to the wider internet. Open ports are defined at the machine pool level. Enabling this option will result in the automatic creation of a VPC firewall rule. This rule will be automatically deleted when the cluster or machine pool is deleted.

### Network Tags

Tags is a list of _network tags_, which can be used to associate preexisting Firewall Rules with all VMs within a machine pool.

### Labels

A comma seperated list of custom labels to be attached to all VMs within a given machine pool. Unlike Tags, Labels do not influence networking behavior and only serve to organize cloud resources.

## Advanced Options

When creating clusters via the Rancher UI some options are automatically configured for you. However, when creating machine config objects manually, you must ensure you properly configure the below fields.

### external-firewall-rule-prefix

A prefix that will be used when creating the firewall rule to expose ports publicly. Ideally, this should be a concatenation the machine pool name and the cluster name. This field must be set if the machine pool is configured to expose ports publicly, otherwise it can be omitted.

### internal-firewall-rule-prefix

A prefix that will be used when creating the internal firewall rule which allows for communication between nodes within the cluster. If this field is omitted, no internal firewall rule will be created.

