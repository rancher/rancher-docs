---
title: Security FAQ
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/faq/security"/>
</head>

## Is there a Hardening Guide?

The Hardening Guide is located in the main [Security](../reference-guides/rancher-security/rancher-security.md) section.

## Have hardened Rancher Kubernetes clusters been evaluated by the CIS Kubernetes Benchmark? Where can I find the results?

We have run the CIS Kubernetes benchmark against a hardened Rancher Kubernetes cluster.  The results of that assessment can be found in the main [Security](../reference-guides/rancher-security/rancher-security.md) section.

## How does Rancher verify communication with downstream clusters, and what are some associated security concerns?

Communication between the Rancher server and downstream clusters is performed through agents. Rancher uses either a registered certificate authority (CA) bundle or the local trust store to verify communication between Rancher agents and the Rancher server. Using a CA bundle for verification is more strict, as only the certificates based on that bundle are trusted. If TLS verification for a explicit CA bundle fails, Rancher may fall back to using the local trust store for verifying future communication. Any CA within the local trust store can then be used to generate a valid certificate.

As described in [Rancher Security Update CVE-2024-22030](https://www.suse.com/c/rancher-security-update/), under a narrow set of circumstances, malicious actors can take over Rancher nodes by exploiting the behavior of Rancher CAs. For the attack to succeed, the malicious actor must generate a valid certificate from either a valid CA in the targeted Rancher server, or from a valid registered CA. The attacker also needs to either hijack or spoof the Rancher server-url as a preliminary step. Rancher is currently evaluating Rancher CA behavior to mitigate against this and any similar avenues of attack. 
