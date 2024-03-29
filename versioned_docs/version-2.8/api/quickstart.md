---
title: RK-API Quick Start Guide
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/quickstart"/>
</head>

You can access Rancher's resources through the Kubernetes API. This guide will help you get started on using this API as a Rancher user.

1. In the upper left corner, click **☰ > Global Settings**.
2. Find and copy the address in the `server-url` field.
3. [Create](../reference-guides/user-settings/api-keys.md#creating-an-api-key) a Rancher API key with no scope.

  :::danger

  A Rancher API key with no scope grants unrestricted access to all resources that the user can access. To prevent unauthorized use, this key should be stored securely and rotated frequently.

  :::

4. Create a `kubeconfig.yaml` file. Replace `$SERVER_URL` with the server url and `$API_KEY` with your Rancher API key:

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

You can use this file with any compatible tool, such as kubectl or [client-go](https://github.com/kubernetes/client-go). For a quick demo, see the [kubectl example](#api-kubectl-example).

For more information on handling more complex certificate setups, see [Specifying CA Certs](#specifying-ca-certs).

For more information on available kubeconfig options, see the [upstream documentation](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/).

## API kubectl Example

In this example, we'll show how to use kubectl to create a project, followed by deleting it. For a list of other Rancher resources available, refer to the [API Reference](./api-reference.mdx) page.

:::note

At this time, not all Rancher resources are available through the Rancher Kubernetes API.

:::

1. Set your KUBECONFIG environment variable to the kubeconfig file you just created:

  ```bash
  export KUBECONFIG=$(pwd)/kubeconfig.yaml
  ```

2. Use `kubectl explain` to view the available fields for projects, or complex sub-fields of resources:

  ```bash
  kubectl explain projects
  kubectl explain projects.spec
  ```
  
Not all resources may have detailed output.

3. Add the following content to a file named `project.yaml`:

  ```yaml
  apiVersion: management.cattle.io/v3
  kind: Project
  metadata:
    # name should be unique across all projects in every cluster
    name: p-abc123
    # generateName can be used instead of `name` to randomly generate a name.
    # generateName: p-
    # namespace should match spec.ClusterName.
    namespace: local
  spec:
    # clusterName should match `metadata.Name` of the target cluster.
    clusterName: local
    description: Example Project 
    # displayName is the human-readable name and is visible from the UI.
    displayName: Example
  ```

4. Create the project:

  ```bash
  kubectl create -f project.yaml
  ```

5. Delete the project:

  How you delete the project depends on how you created the project name.

  **A. If you used `name` when creating the project**:

    ```bash
    kubectl delete -f project.yaml
    ```

  **B. If you used `generateName`**:

    Replace `$PROJECT_NAME` with the randomly generated name of the project displayed by Kubectl after you created the project.

    ```bash
    kubectl delete project $PROJECT_NAME -n local
    ```

## Specifying CA Certs

To ensure that your tools can recognize Rancher's CA certificates, most setups require additional modifications to the above template.

1. In the upper left corner, click **☰ > Global Settings**.
2. Find and copy the value in the `ca-certs` field.
3. Save the value in a file named `rancher.crt`.

  :::note
  If your Rancher instance is proxied by another service, you must extract the certificate that the service is using, and add it to the kubeconfig file, as demonstrated in step 5.
  :::

4. The following commands will convert `rancher.crt` to base64 output, trim all new-lines, and update the cluster in the kubeconfig with the certificate, then finishing by removing the `rancher.crt` file:

  ```bash
  export KUBECONFIG=$PATH_TO_RANCHER_KUBECONFIG
  kubectl config set clusters.rancher.certificate-authority-data $(cat rancher.crt | base64 -i - | tr -d '\n')
  rm rancher.crt
  ```
5. (Optional) If you use self-signed certificatess that aren't trusted by your system, you can set the insecure option in your kubeconfig with kubectl:

  :::danger

  This option shouldn't be used in production as it is a security risk.

  :::

  ```bash
  export KUBECONFIG=$PATH_TO_RANCHER_KUBECONFIG
  kubectl config set clusters.rancher.insecure-skip-tls-verify true
  ```

  If your Rancher instance is proxied by another service, you must extract the certificate that the service is using, and add it to the kubeconfig file, as demonstrated above.
