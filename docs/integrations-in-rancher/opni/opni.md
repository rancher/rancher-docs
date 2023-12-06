---
title: Observability with Opni
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/opni"/>
</head>

Opni is a multi-cluster and multi-tenant observability platform. Purpose-built on Kubernetes, Opni simplifies the process of creating and managing backends, agents, and data related to logging, monitoring, and tracing. With built-in AIOps, Opni allows users to swiftly detect anomalous activities in their data.

Opni components work together to provide a comprehensive observability platform. Key components include:

- Observability Backends: Opni Logging enhances Opensearch for easy searching, visualization, and analysis of logs, traces and Kubernetes events. Opni Monitoring extends Cortex for multi-cluster, long-term storage of Prometheus metrics.
- Observability Agents: Agents are software that collects observability data (logs, metrics, traces, and events) from their host and sends it to an observability backend. The Opni agent enables collection of logs, Kubernetes events, OpenTelemetry traces, and Prometheus metrics.
- AIOps: Applies AL and machine learning to IT and observability data. Open AIOps features include log anomaly detection using pretrained models for Kubernetes control plane, Rancher and Longhorn.
- Alerting and SLOs: Triggers and reliability targets for services enables utilizing Opni data to effectively make informed decisions regarding software operations.

## Opni with Rancher 

Opni’s Helm charts are currently maintained in a charts-specific branch of the Opni GitHub project. Once this branch is added as a repository in Rancher, the Opni installation can be performed through the Rancher UI. Efforts are underway now to streamline this process by including these charts directly within Rancher itself, and offering Opni as a fully integrated Rancher App.

Opni’s log anomaly detection process includes purpose-built, pre-trained models for RKE2, K3s, Longhorn and Rancher agent logs. This advanced modeling ensures first class support for log anomaly detection for the core suite of Rancher products.
 
