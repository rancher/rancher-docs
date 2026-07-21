---
title: Hardening the Rancher Webhook
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/rancher-webhook-hardening"/>
</head>

Rancher Webhook is an important component within Rancher, playing a role in enforcing security requirements for Rancher and its workloads. To decrease its attack surface, access to it should be limited to the only valid caller it has: the Kubernetes API server. This can be done by using network policies and authentication independently or in conjunction with each other to harden the webhook against attacks.

## Block External Traffic Using Network Policies

The webhook is only expected to accept requests from the Kubernetes API server. By default, however, the webhook can accept traffic from any source. If you are using a CNI that supports Network Policies, you can create a policy that blocks traffic that doesn't originate from the API server.

The built-in NetworkPolicy resource in Kubernetes can't block or admit traffic from the cluster hosts, and the `kube-apiserver` process is always running on the host network. Therefore, you must use the advanced network policy resources from the CNI in use. Examples for Calico and Cilium follow. Consult the documentation for your CNI for more details.

### Calico

Use the NetworkPolicy resource in the `crd.projectcalico.org/v1` API group. Use the selector `app == 'rancher-webhook'` to create a rule for the webhook, and set the CIDR of the control plane hosts as the ingress source:

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
        - 192.168.42.0/24 # CIDR of the control plane host. May list more than 1 if the hosts are in different subnets.
      destination:
        selector:
          app == 'rancher-webhook'
```

### Cilium

Use the CiliumNetworkPolicy resource in the `cilium.io/v2` API group. Add the `host` and `remote-node` keys to the `fromEntities` ingress rule. This blocks in-cluster and external traffic while allowing traffic from the hosts.

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

## Require the Kubernetes API Server to Authenticate to the Webhook

The webhook should only accept requests from the Kubernetes API server. By default, the webhook doesn't require clients to authenticate to it. It will accept any request. You can configure the webhook to require credentials so that only the API server can access it. More information can be found in the [Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#authenticate-apiservers).

1. Configure the API server to present a client certificate to the webhook, pointing to an AdmissionConfiguration file to configure the ValidatingAdmissionWebhook and MutatingAdmissionWebhook plugins:

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

    This is also the same config file where other admission plugins are configured, such as PodSecurity. If your distro or your setup uses additional admission plugins, configure those as well. For example, add [RKE2's PodSecurity configuration](https://docs.rke2.io/security/pod_security_standards) to this file.

2. Create the kubeconfig file that the admission plugins refer to. Rancher Webhook only supports client certificate authentication, so generate a TLS key pair, and set the kubeconfig to use either `client-certificate` and `client-key` or `client-certificate-data` and `client-key-data`. For example:

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

3. Start the kube-apiserver binary with the flag `--admission-control-config-file` pointing to your AdmissionConfiguration file. The way to do this varies by distro, and it isn't supported universally, such as in hosted Kubernetes providers. Consult the documentation for your Kubernetes distribution.

    For RKE2, `rke2-server` can be started with a config file like so:

    ```yaml
    # /etc/rancher/rke2/config.yaml
    kube-apiserver-arg:
    - admission-control-config-file=/etc/rancher/admission/admission.yaml
    kube-apiserver-extra-mount:
    - /etc/rancher/admission:/etc/rancher/admission:ro
    ```

    :::danger
    Some distros set this flag by default. If your distro provisions its own AdmissionConfiguration, you must include it in your custom admission control config file. For example, RKE2 installs an AdmissionConfiguration file at `/etc/rancher/rke2/rke2-pss.yaml`, which configures the PodSecurity admission plugin. Setting `admission-control-config-file` in config.yaml will override this essential security setting. To include both plugins, consult [the Default Pod Security Standards documentation](https://docs.rke2.io/security/pod_security_standards) and copy the appropriate plugin configuration to your admission.yaml.
    :::

4. If you're using Rancher to provision your cluster using existing nodes, create these files on the node before you provision them.

    If you're using Rancher to provision your cluster on new nodes, allow the provisioning to complete, then use the provided SSH key and IP address to connect to the nodes, and place the RKE2 config file in the `/etc/rancher/rke2/config.yaml.d/` directory.

5. After the cluster is configured with these credentials, configure the Rancher cluster agent to enable authentication in the webhook. Create a file containing these chart values:

    ```yaml
    # values.yaml
    auth:
      clientCA: <base64-encoded certificate authority that signed the kube-apiserver's client certificates>
      allowedCNs:
      - <list of Common Names identifying the kube-apiserver's client certificates.>
      - <if not provided, any cert signed by the given CA will be accepted.>
    ```

6. Create a configmap in the `cattle-system` namespace on the provisioned cluster with these values:

    ```
    kubectl --namespace cattle-system create configmap rancher-config --from-file=rancher-webhook=values.yaml
    ```

    The webhook will restart with these values.
