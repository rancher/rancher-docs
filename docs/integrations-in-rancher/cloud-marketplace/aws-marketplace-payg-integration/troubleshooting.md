---
title: Troubleshooting
---

This section contains information to help you troubleshoot issues when installing Rancher Prime PAYG.

Jobs and Pods:

Check that pods or jobs have status Running/Completed


```
kubectl get pods --all-namespaces
```


If a pod is not in Running state, you can debug into the root cause by running:

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

###Recovery from Failed Pods

If any of the pods are not Running : 

Check the rancher-cloud Pod

```
kubectl get pods --all-namespaces | grep rancher-cloud
```

If the rancher-cloud pod is in Error state, wait for the pod to be deleted which takes approx 1 min after it goes in Error State.

Fix the problem and execute 

```
helm upgrade -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/{{repository}}/rancher-cloud-helm/rancher-cloud --install \
  --version {{chart_version}} \
  --set rancherHostname=$HOST_NAME \
  --set rancherServerURL=https://$HOST_NAME \
  --set rancherReplicas=$REPLICAS \
  --set global.aws.accountNumber=$AWS_ACCOUNT_ID \
  --set global.aws.roleName=$ROLE_NAME
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

if a configuration is not listed, you can debug into the root cause by checking the pod status and log (Refer Jobs and Pods section).