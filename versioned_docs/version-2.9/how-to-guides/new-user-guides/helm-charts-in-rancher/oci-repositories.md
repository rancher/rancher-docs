Helm version 3 introduced the feature of storing helm charts as OCI artifacts in OCI registries. With Rancher 2.9.0, the repositories page in Apps section supports adding OCI based Helm repositories. Keep in mind that the right now this feature is experimental.

### Create an OCI based Helm repository 

1. Click **☰ > Cluster Management**.
1. Find the name of the cluster whose repositories you want to access. Click **Explore** at the end of the cluster's row.
1. In the left navigation menu on the **Cluster Dashboard**, click **Apps > Repositories**.
1. Click **Create**.
1. Enter the **Name** and **Description** that is appropriate.
1. Select the target, **OCI Repository**.
1. Enter the **OCI URL** which contains the helm chart artifacts. Keep in mind that the **OCI URL** you added must contain **only** helm chart OCI artifacts. More information can be found in [OCI URL Examples](#oci-url-examples).
1. Create/Select **Authentication** secret. More info at [Authentication](#authentication).
1. Click **Create** to add the repository. Once the **STATE** of the reposutory changes to Active, click on Charts page to view the helm charts from the repository.

#### OCI URL Examples

An OCI URL has three different components. It is important to understand these since Rancher behaves differently based on different values of OCI URLs.

1. **oci://registry-1.docker.io/charts/rancher:2.9.0**
  In this case, only one helm chart i.e rancher with one version 2.9.0 will be taken into account and will be available in the Charts page.
2. **oci://registry-1.docker.io/charts/rancher**
  In this case, only one chart i.e rancher but with all versions aka tags available will be taken into account and will be available in the Charts page.
3. **oci://registry-1.docker.io/charts**
  In this case, all helm charts with all versions aka tags available in the charts repository namespace will be taken into account and will be available to install in the Charts page.
4. **oci://registry-1.docker.io** 
  In this case, all helm charts with all versions aka tags available in the entire OCI registry will be taken into account and will be available to install in the Charts page.

**Note:** In all the above cases, the URL provided by the user must contain **only** helm chart OCI artifacts. If there are other types of OCI artifacts present in that URL, then it will fail to add the repository.

##### Authentication

Right now, Rancher supports only **BasicAuth** type of authentication. User has to create a kubernetes secret of type **BasicAuth**. More info at **[Kubernetes BasicAuth](https://kubernetes.io/docs/concepts/configuration/secret/#basic-authentication-secret)** or the user can create the secret by in the Rancher UI itself by entering the **username** and **password**. 


A new field has been introduced only for OCI URLs which is spec.insecurePlainHttp. This allows insecure connections to registry without SSL check and works exactly how the field works in ORAS CLI - [https://oras.land/docs/commands/use_oras_cli](https://oras.land/docs/commands/use_oras_cli) since under the hood Rancher manager uses oras library


### Update OCI based helm repository 

Select on the repository and click on edit config to update the configuration. 


### Delete OCI based helm repository 

Select on the repository and click on delete button on the top. 


### Refresh OCI based helm repository

Rancher manager refreshes the repository every 6 hours But if you want to refresh immediately, select the repository and click on refresh on the top. 

For docs about how to install/unsintall/update a helm chart please refer to this doc link


### Logs of OCI based helm repository

To view logs, please enable the debug option of rancher 

Troubleshooting 



* The first option if there is any discrepancy is to refresh a cluster repository 
* The last option is to delete the oci helm repository clusterrepo and readd it. This will not delete any already installed helm charts.


### Ypdate of charts happene very  6hours.

### Limitations



* Right now, due to security concerns, the maximum size of a helm chart supported is 20 MB
* Right now, due to security concerns, the maximum size of the metadata information about the helm charts inside an OCI URL is 30 MB 
* Duplicate helm chart names should not be present.
* The repository should contain only helm charts. 


### RateLimiting 

TODO

Exponential backoff Values
