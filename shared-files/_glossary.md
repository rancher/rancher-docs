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
        <ol>
            <li>
                The section of the Rancher UI where you manage Helm charts and Helm chart repositories. In later versions of Rancher, this section is called <i>Apps & Marketplace</i>, or <i>Apps</i>.
            </li>
            <li>
                Extension catalogs, container image repositories that can be imported to add extensions to your Rancher instance.
            </li>
        </ol>
    </dd>
    <p>
        <b>Synonyms:</b> <i>Apps, Apps & Marketplace</i>
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
        An alternative name for a <i>Managed cluster</i>: a Kubernetes cluster that is managed by a Rancher server.
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
        <b>Related terms:</b> <i>Managed cluster</i>
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
        An existing cluster that was provisioned by a third-party, then set up to be managed by Rancher. <i>Registered clusters</i> in later versions of Rancher are roughly synonymous with imported clusters. The main difference is that there are more management features exposed in the Rancher UI for registered clusters than for imported clusters.
    </dd>
    <p>
        <b>Synonyms:</b> Registered cluster
    </p>
    <p>
        <b>Related terms:</b> <i>Managed cluster</i>
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
        <b>Related terms:</b> <i>RKE2</i>
    </p>
</dl>

## L

<dl>
    <dt>
        Local cluster
    </dt>
    <dd>
        An alternative name for the <i>Rancher server</i>, the cluster which hosts Rancher and manages other clusters. Here, <i>local</i> refers to the location of the Rancher installation, not to the user's local workstation. Local clusters can be hosted on-premises, in air-gapped environments, or in the cloud.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher server, Upstream cluster</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Managed cluster</i>
    </p>
</dl>

## M

<dl>
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
        <b>Related terms:</b> <i>Rancher server</i>
    </p>
</dl>

## R

<dl>
    <dt>
        Rancher Enterprise
    </dt>
    <dd>
        An alternative name for <i>Rancher Prime</i>. 
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher Prime</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Community</i>
    </p>
    <dt>
        Rancher Kubernetes Engine (RKE)
    </dt>
    <dd>
        <ol>
            <li> 
                A CNCF-certified Kubernetes distribution that runs entirely within Docker containers. There are two main versions of RKE available. The 1.x software line is sometimes called <i>RKE1</i>. The next-generation line is called <i>RKE2</i> or <i>RKE Government</i>.
            </li>
            <li>
                Shorthand for <i>RKE1</i>, the 1.x software line of RKE.
            </li>
        </ol>
    </dd>
    <p>
        <b>Synonyms:</b> <i>RKE1</i> 
    </p>
    <p>
        <b>Related terms:</b> <i>K3s, RKE2, RKE Government</i>
    </p>
    <dt>
       Rancher Prime
    </dt>
    <dd>
        Rancher Prime is a new edition of the commercial, enterprise offering built on the the same source code. Installation assets are hosted on a trusted registry owned and managed by Rancher with additional value coming in from security assurances, extended lifecycles, access to focused architectures and Kubernetes advisories.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher Enterprise</i>
    </p>
    <dt>
        Rancher server
    </dt>
    <dd>
        Rancher Server is a Kubernetes management tool to deploy and run clusters anywhere and on any provider. Rancher includes all the software and downstream cluster components used to manage the entire Rancher deployment.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Local cluster, Upstream cluster</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Managed cluster</i>
    </p>
    <dt>
        RKE1
    </dt>
    <dd>
        An alternative name for the 1.x software line of <i>Rancher Kubernetes Engine (RKE)</i>. Sometimes called <i>RKE</i> for short. RKE1 is a certified Kubernetes distribution and CLI/library which creates and manages a Kubernetes cluster.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Rancher Kubernetes Engine</i>
    </p>
    <p>
        <b>Related terms:</b> <i>RKE2</i>
    </p>    
    <dt>
        RKE2
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6.0 and later
    </p>
    <dd>
        A fully conformant version of the Rancher Kubernetes Engine (RKE) that is designed for security and compliance with US federal government standards. Sometimes called <i>RKE Government</i>.
    </dd>
    <p>
        <b>Synonyms:</b> <i>RKE Government</i>
    </p>
    <dt>
        RKE Government
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6.0 and later
    </p>
    <dd>
        An alternative name for <i>RKE2</i>.
    </dd>
    <p>
        <b>Synonyms:</b> <i>RKE2</i>
    </p>
    <dt>
        Roles
    </dt>
    <dd>
        Within Rancher, roles determine what actions a user can make within a cluster or project.
    </dd>
</dl>

## U

<dl>
    <dt>
        Upstream cluster
    </dt>
    <dd>
        An upstream cluster is the local Kubernetes cluster that your Rancher installation is provisioned on.
    </dd>
    <p>
        <b>Synonyms:</b> <i>Local cluster, Rancher server</i>
    </p>
    <p>
        <b>Related terms:</b> <i>Managed cluster</i>
    </p>
</dl>

## W

<dl>
    <dt>
        Workload
    </dt>
    <dd>
        Workloads are objects that set deployment rules for pods. Based on these rules, Kubernetes performs the deployment and updates the workload with the current state of the application. Workloads let you define the rules for application scheduling, scaling, and upgrade.
    </dd>
</dl>