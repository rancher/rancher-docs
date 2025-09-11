---
title: Rancher HA
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/troubleshooting/other-troubleshooting-tips/rancher-ha"/>
</head>

The commands/steps listed on this page can be used to check your Rancher Kubernetes Installation.

Make sure you configured the correct kubeconfig (for example, `export KUBECONFIG=$PWD/kube_config_cluster.yml`).

## Check Rancher Pods

Rancher pods are deployed as a Deployment in the `cattle-system` namespace.

Check if the pods are running on all nodes:

```
kubectl -n cattle-system get pods -l app=rancher -o wide
```

Example output:

```
NAME                       READY   STATUS    RESTARTS   AGE   IP          NODE
rancher-7dbd7875f7-n6t5t   1/1     Running   0          8m    x.x.x.x     x.x.x.x
rancher-7dbd7875f7-qbj5k   1/1     Running   0          8m    x.x.x.x     x.x.x.x
rancher-7dbd7875f7-qw7wb   1/1     Running   0          8m    x.x.x.x     x.x.x.x
```

If a pod is unable to run (Status is not **Running**, Ready status is not showing `1/1` or you see a high count of Restarts), check the pod details, logs and namespace events.

### Pod Details

```
kubectl -n cattle-system describe pods -l app=rancher
```

### Pod Container Logs

```
kubectl -n cattle-system logs -l app=rancher
```

### Namespace Events

```
kubectl -n cattle-system get events
```

## Check Ingress

Ingress should have the correct `HOSTS` (showing the configured FQDN) and `ADDRESS` (host address(es) it will be routed to).

```
kubectl -n cattle-system get ingress
```

Example output:

```
NAME      HOSTS                    ADDRESS                   PORTS     AGE
rancher   rancher.yourdomain.com   x.x.x.x,x.x.x.x,x.x.x.x   80, 443   2m
```

## Check Ingress Controller Logs

When accessing your configured Rancher FQDN does not show you the UI, check the ingress controller logging to see what happens when you try to access Rancher:

```
kubectl -n ingress-nginx logs -l app=ingress-nginx
```

## Leader Election

The leader is determined by a leader election process. After the leader has been determined, the leader (`holderIdentity`) is saved in the `cattle-controllers` Lease in the `kube-system` namespace (in this example, `rancher-dbc7ff869-gvg6k`).

```
kubectl -n kube-system get lease cattle-controllers
```

Example output:

```
NAME                 HOLDER                    AGE
cattle-controllers   rancher-dbc7ff869-gvg6k   6h10m
```

### Configuration

_Available as of Rancher 2.8.3_

If the Kubernetes API experiences latency, the Rancher replica holding the leader lock may not be able to renew the lease before the lease becomes invalid, which can be observed in the Rancher logs:
```
E0629 04:13:07.293461      34 leaderelection.go:364] Failed to update lock: Put "https://172.17.0.1:443/apis/coordination.k8s.io/v1/namespaces/kube-system/leases/cattle-controllers?timeout=15m0s": context deadline exceeded
I0629 04:13:07.293594      34 leaderelection.go:280] failed to renew lease kube-system/cattle-controllers: timed out waiting for the condition
...
2024/06/29 04:13:10 [FATAL] leaderelection lost for cattle-controllers
```

To mitigate this, you can set environment variables in the `rancher` Deployment to modify the default parameters for leader election:
- `CATTLE_ELECTION_LEASE_DURATION`: The [lease duration](https://pkg.go.dev/k8s.io/client-go/tools/leaderelection#LeaderElectionConfig.LeaseDuration). The default value is 45s.
- `CATTLE_ELECTION_RENEW_DEADLINE`: The [renew deadline](https://pkg.go.dev/k8s.io/client-go/tools/leaderelection#LeaderElectionConfig.RenewDeadline). The default value is 30s.
- `CATTLE_ELECTION_RETRY_PERIOD`: The [retry period](https://pkg.go.dev/k8s.io/client-go/tools/leaderelection#LeaderElectionConfig.RetryPeriod). The default value is 2s.

Example:
```
kubectl -n cattle-system set env deploy/rancher CATTLE_ELECTION_LEASE_DURATION=2m CATTLE_ELECTION_RENEW_DEADLINE=90s CATTLE_ELECTION_RETRY_PERIOD=10s
```
This will temporarily increase the lease duration, renew deadline and retry period to 120, 90 and 10 seconds respectively.
Alternatively, in order to make such changes permanent, these environment variables can be set by [using Helm values](../../getting-started/installation-and-upgrade/installation-references/helm-chart-options.md#setting-extra-environment-variables) instead.
