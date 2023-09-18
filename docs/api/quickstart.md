## API Quickstart Guide

First, locate the server url of your Rancher instance. This can be found in the "Global Settings" page.
Second, create an API Key (rancher token) with no scope.

**Warning:** An API Key with no scope grants unrestricted access to all resources that your user can access. This token should be securely stored, and rotated frequently to prevent unauthorized use.


Third, using the below format, create a `kubeconfig.yaml` file (replace `$SERVER_URL` with the server url and `$API_KEY` with the API Key):

```yaml
apiVersion: v1
kind: Config
clusters:
- name: "rancher"
  cluster:
    server: "$SERVER_URL"
    # Uncomment the following line if your server is using self-signed certs
    # This option is not recommended for production
    # insecure-skip-tls-verify: true

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

You can then use this file (just like any other kubeconfig) with any compatible tool (such as kubectl or client-go). See the [example](#example-using-kubectl) section below for a quick demo which uses kubectl. The [ca-certs](#specifying-ca-certs) section below provides more information on changing this file to deal with more complex cert setups.

For more information on the options available in the kubeconfig file, see the [upstream documentation](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/).

### Example Using Kubectl

Set your KUBECONFIG env var to refer to the new Rancher kubeconfig that was just created:

```bash
export KUBECONFIG=$(pwd)/kubeconfig.yaml
```

Use `kubectl explain` to view the available fields for projects:

```bash
kubectl explain projects
```

You can also use `kubectl explain` to view detailed information on complex sub-fields of resources:

```bash
kubectl explain projects.spec
```

Add the following content to a file called `project.yaml`:

```yaml
apiVersion: management.cattle.io/v3
kind: Project
metadata:
  # name should be unique accross all projects in every cluster
  name: p-abc123
  # generateName can be used instead of name for random generation
  # generateName: p-
  # namespace should match spec.ClusterName
  namespace: local
spec:
  # clusterName should match metadata.Name of the target cluster
  clusterName: local
  description: Example Project 
  # displayName is the human-readable name, visible from the UI
  displayName: Example
```

Create the project:

```bash
kubectl create -f project.yaml
```

Delete the project:

If you used `name` when creating the project:

```bash
kubectl delete -f project.yaml
```

If you used `generateName`:

Replace `$PROJECT_NAME` with the name of the project (displayed by kubectl after creating the project).

```bash
kubectl delete project $PROJECT_NAME -n local
```

### Specifying CA Certs

Most setups will require additional modification to the above template to ensure that the compatible tool can recognize the CA certs that rancher is using.

In many cases, the certs that are being used by Rancher can be found by viewing the `cacerts` setting in the UI. Copy this value to a file called `rancher.crt`. The following commands will convert this file to base64 output (and trim all new-lines), update the cluster in the kubeconfig with the cert, and remove the `rancher.crt` file:

```bash
export KUBECONFIG=$PATH_TO_RANCHER_KUBECONFIG
kubectl config set clusters.rancher.certificate-authority-data $(cat rancher.crt | base64 -i - | tr -d '\n')
rm rancher.crt
```

If you are using self-signed certs that aren't trusted by your system, you can set the insecure option in your kubeconfig using kubectl:

**Warning:** This option represents a security risk, and should not be used in production.

```bash
export KUBECONFIG=$PATH_TO_RANCHER_KUBECONFIG
kubectl config set clusters.rancher.insecure-skip-tls-verify true
```

If your rancher instance is proxied by another service, you will need to extract the cert that service is using and add it to the kubeconfig file, as demonstrated above.