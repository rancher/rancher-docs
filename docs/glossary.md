---
title: Glossary
---

<!-- This page uses HTML definition list tags. dl indicates the start and end of a definition list. dt indicates the defined term, and dd the definition. These will stay in place until we upgrade to Docusaurus 3 and are able to add the remark-definition-list plugin for native Markdown syntax. We are currently blocked as the plugin requires a handler that isn't currently exposed. See https://github.com/facebook/docusaurus/discussions/8743#discussioncomment-6085581 and https://github.com/facebook/docusaurus/pull/9674 -->

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/glossary"/>
</head>

This page covers Rancher-specific terminology and symbols which might be unfamiliar, or which differs between Rancher versions.

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
        App
    </dt>
    <dd>
        Unless specified otherwise, a Rancher application. Rancher applications use either Helm charts or Rancher charts to deploy.
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher charts</i>
    </p>
    <dt>
        Apps
    </dt>
    <p>
        <b>Versions: Rancher v2.6.5 and later</b>
    </p>
    <dd>
        When describing navigation within Rancher, the section of the Rancher UI where you manage Helm chart repositories. In earlier versions of Rancher, this section was called <i>Apps & Marketplace</i>, or <i>Catalogs</i>.
    </dd>
    <p>
        <b>Related terms:</b> <i>Apps & Marketplace, Catalogs</i>
    </p>
    <dt>
        Apps & Marketplace
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.5.0–2.6.5
    </p>
    <dd>
        The section of the Rancher UI where you manage Helm chart repositories. In earlier versions of Rancher, this section was called <i>Catalogs</i>. In later versions, it is called <i>Apps</i>.
    </dd>
    <p>
        <b>Related terms:</b> <i>Apps, Catalogs</i>
    </p>
</dl>

## C

<dl>
    <dt>
        Catalogs
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.4.x and earlier
    </p>
    <dd>
        The section of the Rancher UI where you manage Helm chart repositories. In later versions of Rancher, this section is called <i>Apps & Marketplace</i>, or <i>Apps</i>.
    </dd>
    <p>
        <b>Related terms:</b> <i>Apps, Apps & Marketplace</i>
    </p>
    <dt>
        Community
    </dt>
    <dd>
        Placeholder -- we also use <a href="https://www.rancher.com/community">The Community by SUSE</a>, as in, the community of users. Rancher Community Edition?
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher Prime</i>
    </p>
</dl>

## D

<dl>
    <dt>
        Downstream cluster
    </dt>
    <dd>
        Placeholder 
    </dd>
    <p>
        <b>Related terms:</b> <i>Managed cluster</i>
    </p>
</dl>

## E

<dl>
    <dt>
        Extension
    </dt>
    <dd>
        Placeholder 
    </dd>
    <p>
        <b>Related terms:</b> <i>Apps</i>
    </p>
</dl>

## K

<dl>
    <dt>
        K3s
    </dt>
    <dd>
        Placeholder 
    </dd>
    <p>
        <b>Related terms:</b> <i>RKE</i>
    </p>
</dl>

## L

<dl>
    <dt>
        Local cluster
    </dt>
    <dd>
        Placeholder 
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher server</i>
    </p>
</dl>

## M

<dl>
    <dt>
        Managed cluster
    </dt>
    <dd>
        Placeholder
    </dd>
    <p>
        <b>Related terms:</b> <i>Downstream cluster</i>
    </p>
</dl>

## N

<dl>
    <dt>
        Node template
    </dt>
    <dd>
        Placeholder
    </dd>
</dl>

## P

<dl>
    <dt>
        Prime
    </dt>
    <dd>
        Placeholder
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher Prime</i>
    </p>
    <dt>
        Project
    </dt>
    <dd>
        Placeholder 
    </dd>
    <dt>
        PSA
    </dt>
    <dd>
        Placeholder 
    </dd>
    <dt>
        PSA configuration template (PSACT)
    </dt>
    <dd>
        Placeholder 
    </dd>
    <dt>
        PSP
    </dt>
    <dd>
        Placeholder 
    </dd>
</dl>

## R

<dl>
    <dt>
        Rancher chart
    </dt>
    <dd>
        Placeholder 
    </dd>
    <dt>
        Rancher Command Line Interface (CLI)
    </dt>
    <dd>
        Placeholder 
    </dd>
    <dt>
        Rancher Enterprise
    </dt>
    <dd>
        An alternative name for <i>Rancher Prime</i>. 
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher Prime</i>
    </p>
    <dt>
        Rancher Kubernetes API (RK-API)
    </dt>
    <dd>
        Placeholder 
    </dd>
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
        <b>Related terms:</b> <i>K3s, RKE1, RKE2</i>
    </p>
    <dt>
        Rancher Prime
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.8 and later
    </p>
    <dd>
        Placeholder
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher Community</i>
    </p>
    <dt>
        Rancher server
    </dt>
    <dd>
        Placeholder 
    </dd>
    <p>
        <b>Related terms:</b> <i>Upstream cluster</i>
    </p>
    <dt>
        RKE1
    </dt>
    <dd>
        An alternative name for the 1.x software line of Rancher Kubernetes Engine (RKE). Sometimes called <i>RKE</i> for short.
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher Kubernetes Engine, RKE2</i>
    </p>    
    <dt>
        RKE2
    </dt>
    <p>
        <b>Versions:</b> Rancher v2.6.0
    </p>
    <dd>
        A version of the Rancher Kubernetes Engine (RKE) that is designed for security and compliance with US federal government standards. Sometimes called <i>RKE Government</i>.
    </dd>
    <p>
        <b>Related terms:</b> <i>RKE Government</i>
    </p>
    <dt>
        RKE Government
    </dt>
        <p>
        <b>Versions:</b> Rancher v2.6.0
    </p>
    <dd>
        An alternative name for RKE2.
    </dd>
    <p>
        <b>Related terms:</b> <i>RKE2</i>
    </p>
</dl>

## U

<dl>
    <dt>
        UI
    </dt>
    <dd>
        Placeholder
    </dd>
    <dt>
        Upstream cluster
    </dt>
    <dd>
        Placeholder 
    </dd>
    <p>
        <b>Related terms:</b> <i>Rancher server</i>
    </p>
</dl>
