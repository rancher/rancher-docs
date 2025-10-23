---
title: Additional Steps for Installing Istio on RKE2 and K3s Clusters
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"/>
</head>

When installing or upgrading the Istio Helm chart through **Apps,**

1. If you are installing the chart, click **Customize Helm options before install** and click **Next**.
1. You will see options for configuring the Istio Helm chart. On the **Components** tab, check the box next to **Enabled CNI**.
1. Add a custom overlay file specifying `cniBinDir` and `cniConfDir`. For more information on these options, refer to the [Istio documentation.](https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters) An example is below:

<Tabs>
<TabItem value="RKE2">

```yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
  components:
    cni:
      enabled: true
      k8s:
        overlays:
        - apiVersion: "apps/v1"
          kind: "DaemonSet"
          name: "istio-cni-node"
          patches:
          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged
            value: true
  values:
    cni:
      cniBinDir: /opt/cni/bin
      cniConfDir: /etc/cni/net.d
```
</TabItem>
<TabItem value="K3s">

```yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
  components:
    cni:
      enabled: true
      k8s:
        overlays:
        - apiVersion: "apps/v1"
          kind: "DaemonSet"
          name: "istio-cni-node"
          patches:
          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged
            value: true
  values:
    cni:
      cniBinDir: /var/lib/rancher/k3s/data/current/bin
      cniConfDir: /var/lib/rancher/k3s/agent/etc/cni/net.d
```
</TabItem>
</Tabs>

**Result:** Now you should be able to utilize Istio as desired, including sidecar injection and monitoring via Kiali.
