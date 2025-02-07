---
title: API 快速入门指南
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/zh/api/quickstart"/>
</head>

你可以通过 Kubernetes API 访问 Rancher 的资源。本指南将帮助你以 Rancher 用户的身份开始使用此 API。

1. 在左上角，点击 **☰ > 全局设置**.
2. 找到 `server-url` 字段并复制其地址。
3. [创建](../reference-guides/user-settings/api-keys.md#创建-api-密钥)一个没有作用域的 Rancher API 密钥。

  :::danger

  没有作用域的 Rancher API 密钥授予用户可以访问的所有资源的无限制的访问权限。为防止未经授权的使用，此密钥应安全存储并经常轮换。

  :::

4. 创建一个 `kubeconfig.yaml` 文件，将 `$SERVER_URL` 替换成上面从全局设置中复制的地址，并且将 `$API_KEY` 替换为上面创建的 Rancher API 密钥：

    ```yaml
    apiVersion: v1
    kind: Config
    clusters:
    - name: "rancher"
      cluster:
        server: "$SERVER_URL"
    
    users:
    - name: "rancher"
      user:
        token: "$API_KEY"

    contexts:
    - name: "rancher"
      context:
        user: "rancher"
        cluster: "rancher"

    current-context: "rancher"
    ```

你可以使用任何兼容的工具来引用这个文件，例如 kubectl 或 [client-go](https://github.com/kubernetes/client-go)。快速演示内容请参阅 [kubectl 示例](#api-kubectl-示例)

更多有关处理更复杂证书的设置信息，请参阅[指定 CA 证书](#指定-ca-证书)。

更多关于可用的 kubeconfig 选项，请参阅[上游文档](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)。

## API kubectl 示例

在此示例中，我们将展示如何使用 kubectl 创建一个项目，然后删除它。关于其他可用的 Rancher 资源列表，请参阅 [API 参考](./api-reference.mdx)。

:::note

目前，并非所有的 Rancher 资源都可以通过 Rancher Kubernetes API 操作。

:::

1. 将 KUBECONFIG 环境变量设置为刚才创建的 kubeconfig 文件：

  ```bash
  export KUBECONFIG=$(pwd)/kubeconfig.yaml
  ```

2. 使用 `kubectl explain` 查看项目的可用字段，或者复杂资源的子字段：

  ```bash
  kubectl explain projects
  kubectl explain projects.spec
  ```
  
不是所有的资源都有详细的输出。

3. 在名称为 `project.yaml` 的文件中添加以下内容：

  ```yaml
  apiVersion: management.cattle.io/v3
  kind: Project
  metadata:
    # name 应在每个集群的所有项目中都是唯一的
    name: p-abc123
    # generateName 可以替代 `name` 来随机生成一个名称
    # generateName: p-
    # namespace 应与 spec.ClusterName 匹配
    namespace: local
  spec:
    # clusterName 应与目标集群的 `metadata.Name` 匹配
    clusterName: local
    description: Example Project 
    # displayName 是人类可读的名称并且从 UI 中显示
    displayName: Example
  ```

4. 创建项目：

  ```bash
  kubectl create -f project.yaml
  ```

5. 删除项目：

  项目删除的方式取决于项目名称的创建方式。

  **A. 如果在创建项目时使用 `name`**：

    ```bash
    kubectl delete -f project.yaml
    ```

  **B. 如果你使用 `generateName`**：

    将 `$PROJECT_NAME` 替换为 kubectl 创建项目后随机生成的项目名称。

    ```bash
    kubectl delete project $PROJECT_NAME -n local
    ```

## 指定 CA 证书

为确保你的工具能够识别 Rancher 的 CA 证书，大多数设置都需要对上述模板进行额外修改。

1. 在左上角点击 **☰ > 全局设置**.
2. 查找并复制 `ca-certs` 字段中的值。
3. 将复制的值保存在名称为 `rancher.crt` 的文件中。

  :::note
  如果你的 Rancher 实例由其他服务代理，你必须提取该服务正在使用的证书，并将其添加到 kubeconfig 文件中，如步骤 5 所示。
  :::

4. 以下命令会将 `rancher.crt` 转换为 base64 输出，除去所有换行符，并使用证书内容更新 kubeconfig 中的 cluster 选项，然后删除 `rancher.crt` 文件：

  ```bash
  export KUBECONFIG=$PATH_TO_RANCHER_KUBECONFIG
  kubectl config set clusters.rancher.certificate-authority-data $(cat rancher.crt | base64 -i - | tr -d '\n')
  rm rancher.crt
  ```
5. （可选项）如果你使用不受系统信任的自签名证书，则可以通过 kubectl 在 kubeconfig 中设置不安全选项：

  :::danger

  此选项不应该在生产环境中使用，因为它存在安全风险。

  :::

  ```bash
  export KUBECONFIG=$PATH_TO_RANCHER_KUBECONFIG
  kubectl config set clusters.rancher.insecure-skip-tls-verify true
  ```

  如果你的 Rancher 实例由其他服务代理，你必须提取该服务正在使用的证书，并如上面演示的方法，将其添加到 kubeconfig 文件中。
