---
title: Updating Legacy Apps
---

<head> 
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher/updating-legacy-apps"/>
</head>

Legacy apps are applications installed on Rancher v2.5 or ealier and may or may not work after upgrading to Rancher v2.6 or later.

## Management Process

1. Verify the app is working as expected on Rancher v2.6 or later.
1. If the app isn't working properly, try to update it:
  1. Click **☰ > Cluster Management**.
  1. Go to the cluster that your app is installed on and click **Explore**.
  1. In the left navigation bar, click **Apps**.
  1. Click **Installed Apps**.
  1. Find the app you want to update and click **⋮ > Edit/Upgrade**.
  1. Select a version to upgrade to and click **Next**.
  1. Click **Upgrade**.
1. Your app should be working by now, if it isn't working then you should proceed with the [Defautl Uninstalllation Process](#default-uninstallation-process).

## Default Uninstallation Process

### Uninstalling through the Rancher UI

1. Back up the desired chart in case there are any values or data you want to preserve. Each chart has a different process, refer to the chart's documentation for instructions.
1. Click **☰ > Cluster Management**.
1. Go to the cluster that your app is installed on and click **Explore**.
1. In the left navigation bar, click **Apps**.
1. Click **Installed Apps**.
1. Find the app you want to update and click **⋮ > Delete**.
1. On the confirmation dialog, click **Delete**.
1. Install the chart again.

#### Additional Cleanup

The following steps are only necessary if the new installation of the chart fails after uninstalling it on Rancher v2.6 or later.

At this point, you should have got rid of the dangling resources from the last installation during the [Default Unintallation Process](#default-uninstallation-process). 

If you try to install the chart again and it fails, it may be due to some Kubernetes resources not being properly deleted. In this case, you should uninstall the chart again and perform the following steps knowing that:

- All these steps should be done carefully, reading the response from the commands, and bearing in mind that manually deleting Kubernetes resources in a live production environment can break the cluster. 
- It is recommended that you execute the [Default Uninstallation Process](#default-uninstallation-process) and try to install it again first. 
- In case of failures, you should perform the below operations, try one at a time, and try installing the chart again after each operation.

##### Removing Leftover Helm Releases

Sometimes we may have some orphaned resources bounded to a Helm release that remain in the cluster even after a chart uninstallation, In this case, you can try to perform the following commands:

1. List any leftover helm releases
    ```
    helm list -A | grep <chart_name>
    ```
1. Uninstall them manually
    ```
    helm uninstall <release_name> -n <namespace>
    ```

##### Removing Leftover Kubernetes Resources

:::warning

This is a complex manual operation with a lot of risks involved, you should backup the target resources before the delete operation.

:::

1. Some charts (e.g., Longhorn) create a dedicated namespace for its resources. Check for a leftover namespace:
    ```
    kubectl get namespaces --no-headers | awk '{print $1}' | grep "<chart-name>"
    ```
  If you see a namespace created for the chart, then it's recommended to follow the next steps.
1. Check for existing resources within the namespace. This command will try to list all types of namspaced resources in the given namespace. If there are any resources listed, you should delete them if they are not needed and you have backed up any important data.
    ```
    kubectl api-resources --verbs=list --namespaced -o name | xargs -n 1 kubectl get -n <chart-specific-namespace>
    ```
  1. Back up a target resource.
      ```
      kubectl get <resource> <name> -n <namespace> -o yaml > "<resource>_<name>_<namespace>.yaml"
      ```
  1. Delete a a target resource.
      ```
      kubectl delete <resource> <name> -n <namespace>
      ```
1. Delete the namespace when there are no resources left.
    ```
    kubectl delete namespace <chart-specific-namespace>
    ```
1. Check for any namespace deletion issues (e.g., the namespace may get stuck in the `Terminating`` state).
    ```
    kubectl describe namespace <chart-specific-namespace>
    ```
1. If finalizers are stuck, you can either wait or fetch and delete them.
    ```
    kubectl get namespace <chart-specific-namespace> -o json | jq '.spec.finalizers=[]' | kubectl replace --raw /api/v1/namespaces/<chart-specific-namespace>/finalize -f -
    ```

Reapply backed up resources in case of failures:
    ```
    kubectl apply -f <file_name>.yaml
    ```

