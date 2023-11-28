---
title: Installing Rancher Prime on AWS
---

## Installing Rancher  

Log *helm* into the AWS Marketplace ECR to fetch the application. The AWS Marketplace ECR is always in the `us-east-1` region:

```
export HELM_EXPERIMENTAL_OCI=1

aws --region us-east-1 ecr get-login-password \
  | helm registry login --username AWS \
  --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com
```

Install Rancher into your cluster using *helm*. Customize your helm installation values if needed:

**NOTE**

Rancher Prime utilizes cert-manager to issue and maintain its certificates. Rancher will generate a CA certificate of its own, and sign a cert using that CA.

The Rancher hostname must be resolvable by public DNS. Please refer to the [Prerequisites](#prerequisites) section for more details.
 
For example, if the DNS name is rancher.my.org,  HOST_NAME=rancher.my.org

```shell
helm install -n cattle-rancher-csp-deployer-system rancher-cloud --create-namespace \
oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/{{repository}}/rancher-cloud-helm/rancher-cloud \
  --version {{chart_version}} \
  --set rancherHostname=$HOST_NAME \
  --set rancherServerURL=https://$HOST_NAME \
  --set rancherReplicas=$REPLICAS \
  --set rancherBootstrapPassword=$BOOTSTRAP_PASSWORD \
  --set rancherIngressClassName=nginx \
  --set global.aws.accountNumber=$AWS_ACCOUNT_ID \
  --set global.aws.roleName=$ROLE_NAME
```

NOTE: Monitor the rancher-cloud pod logs as the rancher-cloud pod is deleted 1 minute after a successful or failed installation.

```shell
kubectl logs -f <pod> -n cattle-rancher-csp-deployer-system
```

After a successful deployment, running the following command should produce a similar output.

```shell
kubectl get deployments --all-namespaces=true
```

```shell
NAMESPACE                           NAME                          READY   UP-TO-DATE   AVAILABLE   AGE
cattle-csp-billing-adapter-system   csp-rancher-usage-operator    1/1     1            1           30m
cattle-csp-billing-adapter-system   rancher-csp-billing-adapter   1/1     1            1           30m
cattle-fleet-local-system           fleet-agent                   1/1     1            1           29m
cattle-fleet-system                 fleet-controller              1/1     1            1           29m
cattle-fleet-system                 gitjob                        1/1     1            1           29m
cattle-provisioning-capi-system     capi-controller-manager       1/1     1            1           28m
cattle-system                       rancher                       1/1     1            1           32m
cattle-system                       rancher-webhook               1/1     1            1           29m
cert-manager                        cert-manager                  1/1     1            1           32m
cert-manager                        cert-manager-cainjector       1/1     1            1           32m
cert-manager                        cert-manager-webhook          1/1     1            1           32m
ingress-nginx                       ingress-nginx-controller      1/1     1            1           33m
kube-system                         coredns                       2/2     2            2           38m
```

Refer to the <a>Troubleshooting</a> section for a failed installation.

To check if helm chart installation is completed, run following command:

```shell
helm ls -n cattle-rancher-csp-deployer-system
```

After the helm chart installation is complete, you can verify the installation.
Verify the status of the helm charts installation by running the following command:

```shell 
helm status rancher-cloud -n cattle-rancher-csp-deployer-system
```

### Helm Chart Installed Successfully

After it is completed, the Rancher Prime is successfully installed.
