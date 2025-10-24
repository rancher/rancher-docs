---
title: Continuous Delivery with Fleet
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/fleet"/>
</head>

Fleet orchestrates and manages the continuous delivery of applications through the supply chain for fleets of clusters. Fleet organizes the supply chain to help teams deliver with confidence and trust in a timely manner using GitOps as a safe operating model. 

## Fleet with Rancher

Many users often manage over 10 clusters at a time. Given the proliferation of clusters, continuous delivery is an important part of Rancher. Fleet ensures a reliable continuous delivery experience using GitOps, which is a safe and increasingly common operating model.

### When should I use Fleet? 

- I need to deploy my monitoring stack (e.g., Grafana, Prometheus) across geographical regions, each with different retention policies.
- I am a platform operator and want to provision clusters with all components using a scalable and safe operating model (GitOps).  
- I am an application developer and want my latest changes to automatically go into my development environment. 

## Fleet with Rancher Prime

Fleet is already deeply integrated as the Continuous Delivery tool and GitOps Engine in Rancher. 

<!--
- In future, we can have additional value adds like sharding controller (Manage shards for user) or notification controller (Event dispatcher/receiver) for prime customer only.
--> 
