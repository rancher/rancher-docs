---
title: Dockershim FAQ
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/dockershim"/>
</head>

The Dockershim is the CRI compliant layer between the Kubelet and the Docker daemon. As part of the Kubernetes 1.20 release, the [deprecation of the in-tree Dockershim was announced](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/). Removal is currently scheduled for Kubernetes 1.24. For more information on the deprecation and its timelines, see the [Kubernetes Dockershim Deprecation FAQ](https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed).

To enable the external Dockershim, configure the following option.

```
enable_cri_dockerd: true
```

For users looking to use another container runtime, Rancher has the edge-focused K3s and datacenter-focused RKE2 Kubernetes distributions that use containerd as the default runtime. Imported RKE2 and K3s Kubernetes clusters can then be upgraded and managed through Rancher even after the removal of in-tree Dockershim in Kubernetes 1.24.

## FAQ

<EOLRKE1Warning />

<br/>

Q: What are my other options if I don’t want to depend on the Dockershim?

A: You can use a runtime like containerd with Kubernetes that does not require Dockershim support. RKE2 or K3s are two options for doing this.

<br/>
