---
title: Advanced Policy Management with Kubewarden
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher/kubewarden"/>
</head>

Kubewarden is a Policy Engine that secures and helps manage your cluster resources. It allows for validation and mutation of resource requests via policies, including context-aware policies and verifying image signatures. It can run policies in monitor or enforcing mode and provides an overview of the state of the cluster. 
 
Kubewarden aims to be the Universal Policy Engine by enabling and simplifying Policy as Code. Kubewarden policies are compiled into WebAssembly: they are small (400KBs ~ 2MBs), sandboxed, secure, and portable. It aims to be universal by catering to each persona in your organization:  
 
- Policy User: manage and declare policies using Kubernetes Custom Resources, reuse existing policies written in Rego (OPA and Gatekeeper). Test the policies outside the cluster in CI/CD. 
- Policy Developer: write policies in your preferred Wasm-compiling language (Rego, Go, Rust, C#, Swift, Typescript, and more to come). Reuse the ecosystem of tools, libraries, and workflows you already know. 
- Policy Distributor: policies are OCI artifacts, serve them through your OCI repository and use industry standards in your infrastructure, like Software-Bill-Of-Materials and artifact signatures. 
- Cluster Operator: Kubewarden is modular (OCI registry, PolicyServers, Audit Scanner, Controller). Configure your deployment to suit your needs, segregating different tenants. Get an overview of past, current, and possible violations across the cluster with the Audit Scanner and the PolicyReports. 
- Kubewarden Integrator: use it as a platform to write new Kubewarden modules and custom policies. 

## Kubewarden with Rancher 
 
Kubewarden’s upstream Helm charts are fully integrated as Rancher Apps, providing a UI for the install options. The charts also come with defaults that respect the Rancher stack (for example: not policing Rancher system namespaces), and default PolicyServer and Policies. Users have access to all Kubewarden features and can deploy PolicyServers and Policies manually by interacting with the Kubernetes API (e.g.: using kubectl). 

Kubewarden provides a full replacement of the removed Kubernetes Pod Security Policies. Kubewarden also integrates with the new Pod Security Admission feature introduced by a recent version of Kubernetes by augmenting its security capabilities. 

## Kubewarden with Rancher Prime 

The available Rancher UI Extension for Kubewarden integrates it into the Rancher UI. The UI Extension automates the installation and configuration of the Kubewarden stack and configures access to the policies maintained by SUSE. The UI Extension provides access to a curated catalog of ready-to-use policies. Using the UI Extension, one can browse, install, and configure these policies. 

The UI Extension provides an overview of the Kubewarden stack components and their behavior. This includes access to the Kubewarden metrics and trace events. An operator can understand the impact of policies on the cluster and troubleshoot issues. 

In addition, the UI Extension provides the Policy Reporter UI, which gives a visual overview of the compliance status of the Kubernetes cluster. With this UI, an operator can quickly identify all non-compliant Kubernetes resources, understand the reasons for violations and act accordingly. 
All of this with the support offering of Rancher Prime. 
 
 
 