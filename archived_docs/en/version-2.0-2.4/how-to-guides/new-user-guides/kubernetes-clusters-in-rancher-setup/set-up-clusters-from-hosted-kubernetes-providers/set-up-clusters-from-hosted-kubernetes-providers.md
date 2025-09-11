---
title: Setting up Clusters from Hosted Kubernetes Providers
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers"/>
</head>

In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service.

If you use a Kubernetes provider such as Google GKE, Rancher integrates with its cloud APIs, allowing you to create and manage role-based access control for the hosted cluster from the Rancher UI.

In this use case, Rancher sends a request to a hosted provider using the provider's API. The provider then provisions and hosts the cluster for you. When the cluster finishes building, you can manage it from the Rancher UI along with clusters you've provisioned that are hosted on-prem or in an infrastructure provider.

Rancher supports the following Kubernetes providers:

Kubernetes Providers | Available as of  |
 --- | --- |
[Google GKE (Google Kubernetes Engine)](https://cloud.google.com/kubernetes-engine/) | v2.0.0 |
[Amazon EKS (Amazon Elastic Container Service for Kubernetes)](https://aws.amazon.com/eks/) | v2.0.0 |
[Microsoft AKS (Azure Kubernetes Service)](https://azure.microsoft.com/en-us/services/kubernetes-service/) | v2.0.0 |
[Alibaba ACK (Alibaba Cloud Container Service for Kubernetes)](https://www.alibabacloud.com/product/kubernetes) | v2.2.0 |
[Tencent TKE (Tencent Kubernetes Engine)](https://intl.cloud.tencent.com/product/tke) | v2.2.0 |
[Huawei CCE (Huawei Cloud Container Engine)](https://www.huaweicloud.com/en-us/product/cce.html) | v2.2.0 |

## Hosted Kubernetes Provider Authentication

When using Rancher to create a cluster hosted by a provider, you are prompted for authentication information. This information is required to access the provider's API. For more information on how to obtain this information, see the following procedures:

- [Creating a GKE Cluster](gke.md)
- [Creating an EKS Cluster](../../../../reference-guides/installation-references/amazon-eks-permissions.md)
- [Creating an AKS Cluster](aks.md)
- [Creating an ACK Cluster](alibaba.md)
- [Creating a TKE Cluster](tencent.md)
- [Creating a CCE Cluster](huawei.md)
