---
title: Azure Node Template Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"/>
</head>

For more information about Azure, refer to the official [Azure documentation.](https://docs.microsoft.com/en-us/azure/?product=featured)

Account access information is stored as a cloud credential. Cloud credentials are stored as Kubernetes secrets. Multiple node templates can use the same cloud credential. You can use an existing cloud credential or create a new one.

- **Placement** sets the geographical region where your cluster is hosted and other location metadata.
- **Network** configures the networking used in your cluster.
- **Instance** customizes your VM configuration.

  :::note

  If using a VNet in a different Resource Group than the VMs, the VNet name should be prefixed with the Resource Group name. For example, `<resource group>:<vnet>`.

  :::

If you use Docker, the [Docker daemon](https://docs.docker.com/engine/docker-overview/#the-docker-daemon) configuration options include:

- **Labels:** For information on labels, refer to the [Docker object label documentation.](https://docs.docker.com/config/labels-custom-metadata/).
- **Docker Engine Install URL:** Determines what Docker version will be installed on the instance.

  :::note

  If you're provisioning Red Hat Enterprise Linux (RHEL) or CentOS nodes, leave the **Docker Install URL** field as the default value, or select **none**. This will bypass a check for Docker installation, as Docker is already installed on these node types. 

  If you set **Docker Install URL** to a value other than the default or **none**, you might see an error message such as the following: `Error creating machine: RHEL ssh command error: command: sudo -E yum install -y curl err: exit status 1 output: Updating Subscription Management repositories.`
  
  :::

- **Registry mirrors:** Docker Registry mirror to be used by the Docker daemon.
- **Other advanced options:** Refer to the [Docker daemon option reference](https://docs.docker.com/engine/reference/commandline/dockerd/).
