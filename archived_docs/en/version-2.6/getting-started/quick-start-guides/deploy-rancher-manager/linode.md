---
title: Rancher Linode Quick Start Guide
description: Read this step by step guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/linode"/>
</head>

The following steps will quickly deploy a Rancher server on Linode in a single-node K3s Kubernetes cluster, with a single-node downstream Kubernetes cluster attached.

:::caution

The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see [Installation](../../installation-and-upgrade/installation-and-upgrade.md).

:::

## Prerequisites

:::caution

Deploying to Linode will incur charges.

:::

- [Linode Account](https://linode.com): The Linode account to run provision server and cluster under.
- [Linode Personal Access Token](https://www.linode.com/docs/products/tools/api/guides/manage-api-tokens/): A Linode Personal Access Token to authenticate with.
- [Terraform](https://www.terraform.io/downloads.html): Used to provision the server and cluster on Linode.


## Getting Started

1. Clone [Rancher Quickstart](https://github.com/rancher/quickstart) to a folder using `git clone https://github.com/rancher/quickstart`.

2. Go into the Linode folder containing the Terraform files by executing `cd quickstart/rancher/linode`.

3. Rename the `terraform.tfvars.example` file to `terraform.tfvars`.

4. Edit `terraform.tfvars` and customize the following variables:
  - `linode_token` - The Linode Personal Access Token mentioned above.
    - `rancher_server_admin_password` - Admin password for created Rancher server. See [Setting up the Bootstrap Password](../../installation-and-upgrade/resources/bootstrap-password.md#password-requirements) for password requirements.
    
5. **Optional:** Modify optional variables within `terraform.tfvars`.
   See the [Quickstart Readme](https://github.com/rancher/quickstart) and the [Linode Quickstart Readme](https://github.com/rancher/quickstart/tree/master/rancher/linode) for more information. Suggestions include:
  - `linode_region` - The target Linode region to provision the server and cluster in.
    - Default: `eu-central`
    - For a complete list of regions, see the [official Region Availability page](https://www.linode.com/global-infrastructure/availability/).
  - `prefix` - The prefix for all created infrastructure.
  - `linode_type` - The type/plan that all infrastructure Linodes should use.
    - Default: `g6-standard-2`
    - For a complete list of plans, see the [official Plan Types page](https://www.linode.com/docs/products/compute/compute-instances/plans/).

6. Run `terraform init`.

7. To initiate the creation of the environment, run `terraform apply --auto-approve`. Then wait for output similar to the following:

    ```
    Apply complete! Resources: 15 added, 0 changed, 0 destroyed.

    Outputs:

    rancher_node_ip = xx.xx.xx.xx
    rancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io
    workload_node_ip = yy.yy.yy.yy
    ```

8. Paste the `rancher_server_url` from the output above into the browser and log in when prompted. The default username is `admin` and the password is defined in `rancher_server_admin_password`.
9. `ssh` into the Rancher Server using the `id_rsa` key generated in `quickstart/rancher/linode`.

#### Result

Two Kubernetes clusters are deployed on your Linode account, one running Rancher Server and the other ready for experimentation deployments. Please note that while this setup is a great way to explore Rancher functionality, a production setup should follow our high availability setup guidelines. SSH keys for the VMs are auto-generated and stored in the module directory.

### What's Next?

Use Rancher to create a deployment. For more information, see [Creating Deployments](../deploy-workloads/deploy-workloads.md).

## Destroying the Environment

1. From the `quickstart/rancher/linode` folder, execute `terraform destroy --auto-approve`.

2. Wait for confirmation that all resources have been destroyed.
