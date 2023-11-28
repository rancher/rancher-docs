---
title: Troubleshooting
---

This section contains information to help you troubleshoot issues when install Rancher and configure Billing-adapter

After successful deployment, it should list similar pod and chart output 

```
kubectl get deployments --all-namespaces=true
```

```
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


Jobs and Pods:

Check that pods or jobs have status Running/Completed


```
kubectl get pods --all-namespaces
```


if a pod is not in Running state, you can dig into the root cause by running:
      
Describe pod


```
kubectl describe pod <pod name> -n <namespaces>
```

Pod container logs


```
kubectl logs <pod name> -n <namespaces>
```

Describe job


```
kubectl describe job <job name> -n <namespaces>
```

Logs from the containers of pods of the job

```
kubectl logs -l job-name=<job name> -n <namespaces>
```


###Rancher Usage Record Not found: 

Error:

```
Error from server (NotFound): cspadapterusagerecords.susecloud.net "rancher-usage-record" not found"
 Check Configuration, Retrieve generated configuration csp-config
```
    

Solution:

```
kubectl get cm -n cattle-csp-billing-adapter-system csp-config -o yaml
```

if a configuration is not listed, you can dig into the root cause by checking the pod status and log (Refer Jobs and Pods section).


###Multiple extensions of same type: 

Error:

```
Multiple extensions of same type is not allowed at this scope. (Code: ValidationFailed)"
```

Solution:

AKS cluster already has the extension with the same type. Uninstall the extension and re-deploy with the same cluster.

###Resource already existing in your cluster: 

Error:

```
Helm installation failed : Resource already existing in your cluster : Recommendation Manually delete the resource(s) that currently exist in your cluster and try installation again. To delete these resources run the following commands: kubectl delete <resource type> -n <resource namespace> <resource name> : InnerError [rendered manifests contain a resource that already exists. Unable to continue with install: ServiceAccount "rancher" in namespace "cattle-system" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-name" must equal "test-nv2-reinstall": current value is "testnv2-plan"]
```

Solution:

AKS cluster already has the extension. Uninstall the extension as it suggested in the Error by deleting the resource via the kubectl command. or Uninstall the extension in Azure Console and re-deploy with the same cluster.