---
title: Troubleshooting Rancher Prime PAYG Cluster in AWS
---

This section contains information to help troubleshoot issues when installing the Rancher Prime PAYG offering.

## Jobs and Pods

Check the status of pods or jobs:

```shell
kubectl get pods --all-namespaces
```

If a pod is not in a `Running` state, you can attempt to find the root cause with the following commands:

- Describe pod: `kubectl describe pod $POD_NAME -n $NAMESPACE`
- Pod container logs: `kubectl logs $POD_NAME -n $NAMESPACE`
- Describe job: `kubectl describe job $JOB_NAME -n $NAMESPACE`
- Logs from the containers of pods of the job: `kubectl logs -l job-name=$JOB_NAME -n $NAMESPACE`

## Recovering from Failed Pods

If any of the pods aren't running, check the `rancher-cloud` pod:

```shell
kubectl get pods --all-namespaces | grep rancher-cloud
```

If the `rancher-cloud` pod is in an `Error` state, wait for the pod to be deleted. This should take about one minute.

Fix the problem and run:

```shell
helm upgrade -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/$REPOSITORY/rancher-cloud-helm/rancher-cloud --install \
  --version $CHART_VERSION \
  --set rancherHostname=$HOST_NAME \
  --set rancherServerURL=https://$HOST_NAME \
  --set rancherReplicas=$REPLICAS \
  --set global.aws.accountNumber=$AWS_ACCOUNT_ID \
  --set global.aws.roleName=$ROLE_NAME
```

## Rancher Usage Record Not Found

When you attempt to retrieve a usage record, you might see the following message:

```shell
Error from server (NotFound): cspadapterusagerecords.susecloud.net "rancher-usage-record" not found" Check Configuration, Retrieve generated configuration csp-config
```

To resolve the error, run:

```shell
kubectl get configmap -n cattle-csp-billing-adapter-system csp-config -o yaml
```

If a configuration is not listed, you can attempt to find the root cause by checking the pod status and log. See [Jobs and Pods](#jobs-and-pods) for more details.
