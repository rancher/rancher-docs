---
title: 加固 Rancher Webhook
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/reference-guides/rancher-security/rancher-webhook-hardening"/>
</head>

Rancher Webhook 是 Rancher 中的一个重要组件，它在强制执行 Rancher 及其工作负载的安全要求方面发挥着重要的作用。为了减少其攻击面，对它的访问应限制为唯一有效的调用方：Kubernetes API server。这可以通过单独使用网络策略和认证，或相互结合使用以加固 webhook 免受攻击。

## 使用网络策略阻止外部流量

webhook 只应接受来自 Kubernetes API server 的请求。但是默认情况下，webhook 可以接受来自任何源的流量。如果你使用的是支持网络策略的 CNI，则可以创建一个策略来阻止来源不是 API server 的流量。

Kubernetes 中内置的网络策略资源无法阻止或允许来自集群主机的流量，并且 `kube-apiserver` 进程在主机网络上运行。因此你必须使用当前集群正在使用的 CNI 的高级网络策略资源。以下是 Calico 和 Cilium 的示例。更多详细的信息，请参阅你使用的 CNI 的文档。

### Calico

使用 `crd.projectcalico.org/v1` API 组中的网络策略资源。使用 `app == 'rancher-webhook'` selector 为 webhook 创建一个规则，并且将 control plane 主机的 CIDR 设置为入口源：

```yaml
apiVersion: crd.projectcalico.org/v1
kind: NetworkPolicy
metadata:
  name: allow-k8s
  namespace: cattle-system
spec:
  selector: app == 'rancher-webhook'
  types:
    - Ingress
  ingress:
    - action: Allow
      protocol: TCP
      source:
        nets:
        - 192.168.42.0/24 # control plane 主机的 CIDR。如果主机位于不同的子网中，则可能会列出多个。
      destination:
        selector:
          app == 'rancher-webhook'
```

### Cilium

使用 `cilium.io/v2` API 组中的 CiliumNetworkPolicy 资源。将 `host` 和 `remote-node` 键添加到 `fromEntities` 入口规则。这会阻止集群内和外部流量，同时允许来自主机的流量。

```yaml
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: allow-k8s
  namespace: cattle-system
spec:
  endpointSelector:
    matchLabels:
      app: rancher-webhook
  ingress:
    - fromEntities:
      - host
      - remote-node
```

## 要求 Kubernetes API Server 对 Webhook 进行认证

Webhook 应仅接受来自 Kubernetes API server 的请求。默认情况下，webhook 不要求客户端对其进行认证。它可以接受任何请求。你可以配置 webhook 验证凭据，以便只有 API server 可以访问它。更多信息可以在 [Kubernetes 文档](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#authenticate-apiservers)中找到。

1. 配置 API server 向 webhook 提供证书，指向 AdmissionConfiguration 文件以配置 ValidatingAdmissionWebhook 和 MutatingAdmissionWebhook 插件：

    ```yaml
    # /etc/rancher/admission/admission.yaml
    apiVersion: apiserver.config.k8s.io/v1
    kind: AdmissionConfiguration
    plugins:
    - name: ValidatingAdmissionWebhook
      configuration:
        apiVersion: apiserver.config.k8s.io/v1
        kind: WebhookAdmissionConfiguration
        kubeConfigFile: "/etc/rancher/admission/kubeconfig"
    - name: MutatingAdmissionWebhook
      configuration:
        apiVersion: apiserver.config.k8s.io/v1
        kind: WebhookAdmissionConfiguration
        kubeConfigFile: "/etc/rancher/admission/kubeconfig"
    ```

    这也是配置其他准入插件的同一配置文件，例如 PodSecurity。如果你的发行版或设置使用了额外的准入插件，请将它们也配置在这里。例如，将 [RKE2 的 PodSecurity 配置](https://docs.rke2.io/security/pod_security_standards)添加到这个文件中。

2. 创建准入插件引用的 kubeconfig 文件。Rancher Webhook 仅支持客户端证书认证，因此请生成一个 TLS 密钥对，并且将 kubeconfig 设置为使用 `client-certificate` 和 `client-key` 或者使用 `client-certificate-data` 和 `client-key-data`。 例如：

    ```yaml
    # /etc/rancher/admission/kubeconfig
    apiVersion: v1
    kind: Config
    users:
    - name: 'rancher-webhook.cattle-system.svc'
      user:
        client-certificate: /path/to/client/cert
        client-key: /path/to/client/key
    ```

3. 使用 `--admission-control-config-file` 参数启动 kube-apiserver 服务，并将该参数值指向你的 AdmissionConfiguration 文件。具体的操作方式因发行版而异，并不受普遍支持，例如在托管的 Kubernetes 提供商中可能不支持。请查阅你的 Kubernetes 发行版的文档以获取详细的信息。

    对于 RKE2，可以使用这样的配置文件启动 `rke2-server`：

    ```yaml
    # /etc/rancher/rke2/config.yaml
    kube-apiserver-arg:
    - admission-control-config-file=/etc/rancher/admission/admission.yaml
    kube-apiserver-extra-mount:
    - /etc/rancher/admission:/etc/rancher/admission:ro
    ```

    :::danger
    某些发行版会默认设置此参数。如果你的发行版预配置了它自己的 AdmissionConfiguration，则必须将其包含在你自定义的准入控制的配置文件中。例如，RKE2 在 `/etc/rancher/rke2/rke2-pss.yaml` 安装了一个 AdmissionConfiguration 文件，该文件配置了 PodSecurity 准入插件。在 config.yaml 中设置 `admission-control-config-file` 将会覆盖这个重要的安全设置。要包含两个插件，请参阅 [Default Pod Security Standards 文档](https://docs.rke2.io/security/pod_security_standards)并将相应的插件配置复制到你的 admission.yaml 中。
    :::

4. 如果你使用 Rancher 通过现有节点来配置你的集群，请在配置集群之前在节点上创建这些文件。

    如果你使用 Rancher 在新节点上配置你的集群，请先允许集群配置完成，然后使用 Rancher 提供的 SSH key 和 IP 地址连接到节点，并将 RKE2 的配置文件放在 `/etc/rancher/rke2/config.yaml.d/` 目录下。

5. 使用这些凭证配置集群后，配置 Rancher cluster agent 以在 webhook 中启用认证。创建一个包含以下内容的 chart values 的文件：

    ```yaml
    # values.yaml
    auth:
      clientCA: <base64-encoded certificate authority that signed the kube-apiserver's client certificates>
      allowedCNs:
      - <list of Common Names identifying the kube-apiserver's client certificates.>
      - <if not provided, any cert signed by the given CA will be accepted.>
    ```

6. 在配置的集群中的 `cattle-system` 命名空间下创建一个 configmap，并包含这些 values 配置：

    ```
    kubectl --namespace cattle-system create configmap rancher-config --from-file=rancher-webhook=values.yaml
    ```

    webhook 将会使用这些 values 配置重新启动。
