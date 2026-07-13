---
title: 在 RKE2 和 K3s 集群上安装 Istio 的其他步骤
---

通过 **Apps** 页面安装或升级 Istio Helm Chart 时：

1. 如果要安装 Chart，请单击**在安装前自定义 Helm 选项**，然后单击**下一步**。
1. 你将看到配置 Istio Helm Chart 的选项。在**组件**选项卡上，选中**启用 CNI** 旁边的框。
1. 添加一个自定义覆盖文件，该文件指定 `cniBinDir` 和 `cniConfDir`。有关这些选项的更多信息，请参阅 [Istio 文档](https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters)。下方是一个示例：

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

**结果**：现在你应该可以根据需要使用 Istio，包括 Sidecar 注入和通过 Kiali 进行监控。
