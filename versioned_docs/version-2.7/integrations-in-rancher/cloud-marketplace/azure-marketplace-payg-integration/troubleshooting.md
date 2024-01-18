---
title: Troubleshooting Rancher Prime PAYG Cluster in Azure
---

This section contains information to help troubleshoot issues when installing the Rancher Prime PAYG offer and configuring the billing adapter.

## Deployment

After a successful deployment, check the status of the deployment. It should list similar pod and chart output as the example below.

```shell
kubectl get deployments --all-namespaces
```

**Response:**

```shell
NAMESPACE                           NAME                          READY   UP-TO-DATE   AVAILABLE   AGE
cattle-csp-billing-adapter-system   csp-rancher-usage-operator    1/1     1            1           8h
cattle-csp-billing-adapter-system   rancher-csp-billing-adapter   1/1     1            1           8h
cattle-fleet-local-system           fleet-agent                   1/1     1            1           8h
cattle-fleet-system                 fleet-controller              1/1     1            1           8h
cattle-fleet-system                 gitjob                        1/1     1            1           8h
cattle-provisioning-capi-system     capi-controller-manager       1/1     1            1           8h
cattle-system                       rancher                       3/3     3            3           8h
cattle-system                       rancher-webhook               1/1     1            1           8h
cert-manager                        cert-manager                  1/1     1            1           8h
cert-manager                        cert-manager-cainjector       1/1     1            1           8h
cert-manager                        cert-manager-webhook          1/1     1            1           8h
ingress-nginx                       ingress-nginx-controller      1/1     1            1           9h
kube-system                         coredns                       2/2     2            2           20h
kube-system                         coredns-autoscaler            1/1     1            1           20h
kube-system                         extension-agent               1/1     1            1           8h
kube-system                         extension-operator            1/1     1            1           8h
kube-system                         konnectivity-agent            2/2     2            2           20h
kube-system                         metrics-server                2/2     2            2           20h
```

## Jobs and Pods

Check the status of pods or jobs:

```shell
kubectl get pods --all-namespaces
```

If a pod is not in a `Running` state, you can attempt to find the root cause with the following commands:

- Describe pod: `kubectl describe pod <pod-name> -n <namespace>`
- Pod container logs: `kubectl logs <pod-name> -n <namespace>`
- Describe job: `kubectl describe job <job-name> -n <namespace`
- Logs from the containers of pods of the job: `kubectl logs -l job-name=<job-name> -n <namespace>`

## Rancher Usage Record Not Found

When you attempt to retrieve a usage record, you might see the following message:

```shell
Error from server (NotFound): cspadapterusagerecords.susecloud.net "rancher-usage-record not found" Check Configuration, Retrieve generated configuration csp-config
```

To resolve the error, run:

```shell
kubectl get configmap -n cattle-csp-billing-adapter-system csp-config -o yaml
```

If a configuration is not listed, you can attempt to find the root cause by checking the pod status and log. See [Jobs and Pods](#jobs-and-pods) for more details.

## Multiple Extensions of the Same Type

When you attempt to install an extension of the same type, you will see the following message:

```shell
Multiple extensions of same type is not allowed at this scope. (Code: ValidationFailed)"
```

The AKS cluster already has the extension with the same type. To resolve the error, uninstall the extension and re-deploy to the same cluster.

## Resource Already Existing in your Cluster

When you attempt to install a resource or extension that already exists, you will see the following message:

```shell
Helm installation failed : Resource already existing in your cluster : Recommendation Manually delete the resource(s) that currently exist in your cluster and try installation again. To delete these resources run the following commands: kubectl delete <resource type> -n <resource namespace> <resource name> : InnerError [rendered manifests contain a resource that already exists. Unable to continue with install: ServiceAccount "rancher" in namespace "cattle-system" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-name" must equal "test-nv2-reinstall": current value is "testnv2-plan"]
```

The AKS cluster already has the extension installed. To resolve the error, uninstall the extension as suggested in the error message, by deleting the resource via the kubectl command, or uninstall the extension in the Azure Console and re-deploy to the same cluster.
