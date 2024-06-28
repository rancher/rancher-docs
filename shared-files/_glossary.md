## Icons & Symbols

<dl>
    <dt>
        ☰
    </dt>
    <dd>
        The navigation menu toggle, a button in the far top left corner of the Rancher UI. Clicking the ☰ opens a sidebar that provides access to the main sections of the Rancher interface.
    </dd>
    <dt>
        ⋮
    </dt>
    <dd>
        The submenu toggle, a button found at the far right of many table rows throughout the Rancher UI. Clicking the ⋮ opens a submenu containing a contextual list of tasks related to the item in that row.
    </dd>
</dl>

## A

<dl>
    <dt>
        Apps
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6.5 and later
    </p>
    <dd>
        When describing navigation within Rancher, the section of the Rancher UI where you manage Helm charts and Helm chart repositories. In earlier versions of Rancher, this section was called <i>Apps & Marketplace</i>, or <i>Catalogs</i>.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Apps & Marketplace, Catalogs</i>
    </p>
    <dt>
        Apps & Marketplace
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.5.0–2.6.5
    </p>
    <dd>
        The section of the Rancher UI where you manage Helm charts and Helm chart repositories. In earlier versions of Rancher, this section was called <i>Catalogs</i>. In later versions, it is called <i>Apps</i>.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Apps, Catalogs</i>
    </p>
</dl>

## C

<dl>
    <dt>
        Catalogs
    </dt>
    <p>
        <b>Versions:</b> 1. Rancher v2.4 and earlier 2. Rancher v2.7 and later
    </p>
    <dd>
        The section of the Rancher UI where you manage Helm charts and Helm chart repositories. In later versions of Rancher, this section is called <i>Apps & Marketplace</i>, or <i>Apps</i>.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Apps, Apps & Marketplace</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Extension catalogs</i>
    </p>
    <dt>
        Community
    </dt>
    <dd>
        A build of Rancher that's available to the entire Rancher community.
    </dd>
    <p>
        <b>Related terms:</b> <i>Prime, Rancher Prime</i>
    </p>
</dl>

## D

<dl>
    <dt>
        Downstream cluster
    </dt>
    <dd>
        An alternative name for a <i>managed cluster</i>, a Kubernetes cluster that is managed by a Rancher server.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Managed cluster</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Hosted cluster, Imported cluster, Rancher server, Registered cluster, Upstream cluster</i>
    </p>
</dl>

## E

<dl>
    <dt>
        Extension
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7.0 and later
    </p>
    <dd>
        Helm charts that can extend and enhance the Rancher UI, and tailor Rancher to your specific environment. Some Extensions require manual installation on a cluster, while others are built into Rancher. Built-in Extensions include Fleet and Harvester. Manually installed Extensions include Kubewarden and Elemental.  
    </dd>
    <p>
        <b>Related terms:</b> <i>Apps & Marketplace, Catalogs, Integrations</i>
    </p>
    <dt>
        Extension catalogs
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7.0 and later
    </p>
    <dd>
        Container image repositories that can be imported to add UI extensions to your Rancher instance.
    </dd>
</dl>

## H

<dl>
    <dt>
        Hosted cluster
    </dt>
    <dd>
        A managed cluster that is hosted in the cloud, by a Kubernetes provider. Rancher supports a variety of hosted Kubernetes providers, including Amazon Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), and Google Kubernetes Engine (GKE). Rancher integrates with the hosted Kubernetes provider's cloud APIs, so that you can manage the cluster from the Rancher UI.
    </dd>
    <p>
        <b>Related terms:</b> <i>Downstream cluster, Imported cluster, Managed cluster, Registered cluster</i>
    </p>
</dl>

## I

<dl>
    <dt>
        Imported cluster
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.0–2.4
    </p>
    <dd>
        An existing cluster that was provisioned by a third party, then set up to be managed by Rancher. <i>Registered clusters</i> in later versions of Rancher are roughly synonymous with imported clusters. The main difference is that there are more management features exposed in the Rancher UI for registered clusters than for imported clusters.
    </dd>
    <p>
        <b>Related terms:</b> <i>Downstream cluster, Hosted cluster, Managed cluster, Reistered cluster</i>
    </p>
</dl>

## K

<dl>
    <dt>
        K3s
    </dt>
    <dd>
        A lightweight Kubernetes distribution chiefly designed for workloads that run unattended under tight resource constraints.
    </dd>
    <p>
        <b>Related terms:</b> <i>RKE, RKE2</i>
    </p>
</dl>

## L

<dl>
    <dt>
        Local cluster
    </dt>
    <dd>
        An alternative name for a <i>Rancher server</i>, the Kubernetes cluster that hosts Rancher and manages other clusters. Here, <i>local</i> refers to the location of the Rancher installation, not to the user's local workstation. Local clusters can be hosted on-premises, in air-gapped environments, or in the cloud.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher server, Upstream cluster</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Downstream cluster, Hosted cluster, Imported cluster, Managed cluster, Registered cluster</i>
    </p>
</dl>

## M


<dl>
    <dt>
        Machine Pool
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6 and later
    </p>
    <dd>
        A machine pool is a logical grouping of nodes within a Kubernetes cluster, such as an RKE2, K3s, EKS, AKS, or GKE cluster. Each pool can be configured independently, allowing for flexibility in managing different types of workloads and resource requirements. Machine pool configurations include information such as Pool Name, Machine Count, and Roles, as well as options such as Auto Replace, Drain Before Delete, Kubernetes Node Labels, and Taints.
    </dd>
    <dt>
        Managed cluster
    </dt>
    <dd>
        A Kubernetes cluster that is managed by a Rancher server. Managed clusters can run on a variety of infrastructure and can be located anywhere, including in the cloud, on-premises, or in air-gapped environments.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Downstream cluster</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Hosted cluster, Imported cluster, Rancher server, Registered cluster</i>
    </p>
</dl>

## N


<dl>
    <dt>
        Neuvector Prime
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.8 and later
    </p>
    <dd>
        Nuevector Prime is an end-to-end container security platform for containers, pods, and hosts. It offers real-time compliance, visibility, and protection for critical applications and data during runtime. NeuVector provides a firewall, container process/file system monitoring, security auditing with CIS benchmarks, and vulnerability scanning.
    </dd>
    <p>
        <b>Related terms:</b> <i>Neuvector</i>
    </p>
    <dt>
        Node Template
    </dt>
    <dd>
        A node template is the saved configuration for the parameters to use when provisioning nodes in a specific cloud provider. These nodes can be launched from the UI. Rancher uses Docker Machine to provision these nodes. The available cloud providers to create node templates are based on the active node drivers in Rancher. After you create a node template in Rancher, it's saved so that you can use it again to create node pools. Node templates are bound to your login. After you add a template, you can remove it from your user profile.
    </dd>
</dl>

## P

<dl>
    <dt>
        Prime
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7 and later
    </p>
    <dd>
        Prime represents a new edition of the commercial enterprise offering for Rancher and Nuevector. Rancher Prime and Nuevector Prime are built on the same source code and will, therefore, continue to be 100% open source. Additional value comes from security assurances, extended lifecycles, access to focused architectures, and Kubernetes advisories. These Prime offerings also offer options to get production support for innovative projects and installation assets are hosted on a trusted registry owned and managed by SUSE.
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher Enterprise, Rancher Prime, Nuevector Prime</i>
    </p>
    <dt>
        Project
    </dt>
    <dd>
        A project is a group of namespaces, and it is a concept introduced by Rancher. In terms of hierarchy, clusters contain projects and projects contain namespaces. Namespaces provide a mechanism for isolating groups of resources within a single cluster. Projects allow you to manage multiple namespaces as a group and perform Kubernetes operations in them. You can use projects to support multi-tenancy so that a team can access a project within a cluster without having access to other projects in the same cluster.
    </dd>
    <dt>
        Project Resource Quotas
    </dt>
    <dd>
        Similar to how namespaces divide cluster resources among multiple users, a project resource quota limits the cluster resources that a project (and its namespaces) can consume.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Resource quotas</i>
    </p>
    <dt>
        Pod Security Admission (PSA)
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7.2 and later
    </p>
    <dd>
        Pod Security Admission (PSA) is a built-in Kubernetes controller that enforces the Pod Security Standards (PSS) on pods running in a namespace. PSA places requirements on a pod's security context and other related fields and categorizes pods into three levels based on their security requirements: Privileged, Baseline, and Restricted.
    </dd>
    <dt>
        Pod Security Admission (PSA) Config Template
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7.2 and later
    </p>
    <dd>
        If you have administrator privileges, you can customize security restrictions and permissions by creating additional PSA templates, or by editing existing templates. Pod Security admission (PSA) configuration templates are a Rancher custom-defined resource (CRD), available in Rancher v2.7.2 and above. The templates provide pre-defined security configurations that you can apply to a cluster:
        <ul>
        <li>rancher-privileged: The most permissive configuration. It doesn't restrict the behavior of any pods. This allows for known privilege escalations. This policy has no exemptions.</li>
        <li>rancher-restricted: A heavily restricted configuration that follows current best practices for hardening pods. You must make namespace-level exemptions for Rancher components.</li>
        </ul>
    </dd>
    <dt>
        Pod Security Policies (PSP)
    </dt>
    <dd>
        Pod Security Policies (PSPs) are objects that control security-sensitive aspects of the pod specification (such as root privileges). If a pod does not meet the conditions specified in the PSP, Kubernetes will not allow it to start. PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25.
    </dd>
</dl>

## R

<dl>
    <dt>
        Rancher
    </dt>
    <dd>
        A Kubernetes management tool to deploy and run clusters anywhere and on any provider. Rancher includes all the software and downstream cluster components used to manage the entire Rancher deployment.
    </dd>
    <dt>
        Rancher Kubernetes Engine (RKE)
    </dt>
    <dd>
        A CNCF-certified Kubernetes distribution that runs entirely within Docker containers. There are two main versions of RKE available. The 1.x software line is sometimes called <i>RKE1</i>, or simply <i>RKE</i>. The next-generation line is called <i>RKE2</i>.
    </dd>
    <p>
        <b>Synonyms:</b> <i>RKE1</i> 
    </p>
    <p>
        <b>Related terms:</b> <i>K3s, RKE2</i>
    </p>
    <dt>
        Rancher Chart
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6 and later
    </p>
    <dd>
        Rancher charts differ slightly from Helm charts in their directory structures. They are native Helm charts with two files that enhance user experience: app-readme.md and questions.yaml. Rancher charts add simplified chart descriptions and configuration forms to make application deployment easy, allowing Rancher users to understand how to launch an application without having to read through the entire list of Helm variables.
    </dd>
    <dt>
        Rancher CLI
    </dt>
    <dd>
        The Rancher CLI (Command Line Interface) is a unified tool that you can use to interact with Rancher. With this tool, you can operate Rancher using a command line rather than the GUI.
    </dd>
    <dt>
        Rancher Enterprise
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7 and later
    </p>
    <dd>
        Rancher Enterprise, or Rancher Prime, is a new edition of the commercial enterprise offering built on the same source code. Installation assets are hosted on a trusted registry owned and managed by Rancher, with additional value coming from security assurances, extended lifecycles, access to focused architectures, and Kubernetes advisories.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher Prime</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Prime</i>
    </p>
    <dt>
       Rancher Prime
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.7 and later
    </p>
    <dd>
        Rancher Prime is a new edition of the commercial, enterprise offering built on the the same source code. Installation assets are hosted on a trusted registry owned and managed by Rancher with additional value coming in from security assurances, extended lifecycles, access to focused architectures and Kubernetes advisories.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher Enterprise</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Prime</i>
    </p>
    <dt>
        Rancher server
    </dt>
    <dd>
        The Kubernetes cluster that hosts Rancher and manages the other clusters in the Rancher deployment.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Local cluster, Upstream cluster</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Downstream cluster, Hosted cluster, Imported cluster, Managed cluster, Registered cluster</i>
    </p>
    <dt>
        Registered cluster
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.5 and later
    </p>
    <dd>
        An existing cluster that was provisioned by a third party, then set up to be managed by Rancher. Older versions of Rancher use <i>Imported cluster</i> to refer to a similar concept. The main difference is that there are more management features exposed in the Rancher UI for registered clusters than for imported clusters.
    </dd>
    <p>
        <b>Related terms:</b> <i>Downstream cluster, Hosted cluster, Imported cluster, Managed cluster</i>
    </p>
    <dt>
        RKE1
    </dt>
    <dd>
        An alternative name for the v1.x software line of <i>Rancher Kubernetes Engine (RKE)</i>. Sometimes called <i>RKE</i> for short. RKE1 is a certified Kubernetes distribution and CLI/library which creates and manages a Kubernetes cluster.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher Kubernetes Engine</i>
    </p>
    <p>
        <b>Related terms:</b> <i>K3s, RKE2</i>
    </p>    
    <dt>
        RKE2
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6.0 and later (to provision clusters), Rancher 2.5.0 and later (to register clusters)
    </p>
    <dd>
        A fully conformant version of the Rancher Kubernetes Engine (RKE) that is designed for security and compliance with US federal government standards.
    </dd>
    <p>
       <b>Related terms:</b> <i>K3s, RKE</i> 
    </p>
    <dt>
        Roles
    </dt>
    <dd>
        Roles determine what actions a Rancher user can make within a cluster or project.
    </dd>
</dl>

## U

<dl>
    <dt>
        Upstream cluster
    </dt>
    <dd>
        An alternative name for the <i>Rancher server</i>, the Kubernetes cluster that hosts Rancher and manages the other clusters in the Rancher deployment.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Local cluster, Rancher server</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Downstream cluster, Hosted cluster, Imported cluster, Managed cluster, Registered cluster</i>
    </p>
</dl>

## W

<dl>
    <dt>
        Workload
    </dt>
    <dd>
        Objects that set deployment rules for pods. Based on these rules, Kubernetes performs the deployment and updates the workload with the current state of the application. Workloads let you define the rules for application scheduling, scaling, and upgrade.
    </dd>
</dl>