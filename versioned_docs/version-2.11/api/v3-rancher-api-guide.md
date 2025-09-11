---
title: Previous v3 Rancher API Guide
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/api/v3-rancher-api-guide"/>
</head>

Rancher v2.8.0 introduced the Rancher Kubernetes API (RK-API). The previous v3 Rancher API is still available. This page describes the v3 API. For more information on RK-API, see the [RK-API quickstart](./quickstart.md) and [reference guide](./api-reference.mdx).

## How to Use the API

The previous v3 API has its own user interface accessible from a [web browser](#enable-view-in-api). This is an easy way to see resources, perform actions, and see the equivalent `curl` or HTTP request & response. To access it:

<Tabs>
<TabItem value="Rancher v2.6.4+">

1. Click your user avatar in the upper right corner.
1. Click **Account & API Keys**.
1. Under the **API Keys** section, find the **API Endpoint** field and click the link. The link looks something like `https://<RANCHER_FQDN>/v3`, where `<RANCHER_FQDN>` is the fully qualified domain name of your Rancher deployment.

</TabItem>
<TabItem value="Rancher before v2.6.4">

Go to the URL endpoint at `https://<RANCHER_FQDN>/v3`, where `<RANCHER_FQDN>` is the fully qualified domain name of your Rancher deployment.

</TabItem>
</Tabs>

## Authentication

API requests must include authentication information. Authentication is done with HTTP basic authentication using [API keys](../reference-guides/user-settings/api-keys.md). API keys can create new clusters and have access to multiple clusters via `/v3/clusters/`. [Cluster and project roles](../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md) apply to these keys and restrict what clusters and projects the account can see and what actions they can take.

By default, certain cluster-level API tokens are generated with infinite time-to-live (`ttl=0`). In other words, API tokens with `ttl=0` never expire unless you invalidate them. For details on how to invalidate them, refer to the [API tokens page](api-tokens.md).

## Making Requests

The API is generally RESTful but has several features to make the definition of everything discoverable by a client so that generic clients can be written instead of having to write specific code for every type of resource. For detailed info about the generic API spec, [see further documentation](https://github.com/rancher/api-spec/blob/master/specification.md).

- Every type has a Schema which describes:
  - The URL to get to the collection of this type of resource.
  - Every field the resource can have, along with their type, basic validation rules, whether they are required or optional, etc.
  - Every action that is possible on this type of resource, with their inputs and outputs (also as schemas).
  - Every field that allows filtering.
  - What HTTP verb methods are available for the collection itself, or for individual resources in the collection.

The design allows you to load just the list of schemas and access everything about the API. The UI for the API contains no code specific to Rancher itself. The URL to get Schemas is sent in every HTTP response as a `X-Api-Schemas` header. From there you can follow the `collection` link on each schema to know where to list resources, and follow other `links` inside of the returned resources to get any other information.

In practice, you may just want to construct URL strings. We highly suggest limiting this to the top-level to list a collection (`/v3/<type>`) or get a specific resource (`/v3/<type>/<id>`). Anything deeper than that is subject to change in future releases.

Resources have relationships between each other called links. Each resource includes a map of `links` with the name of the link and the URL where you can retrieve that information. Again, you should `GET` the resource and then follow the URL in the `links` map, not construct these strings yourself.

Most resources have actions, which do something or change the state of the resource. To use them, send a HTTP `POST` to the URL in the `actions` map of the action you want. Certain actions require input or produce output. See the individual documentation for each type or the schemas for specific information.

To edit a resource, send a HTTP `PUT` to the `links.update` link on the resource with the fields that you want to change. If the link is missing then you don't have permission to update the resource. Unknown fields and ones that are not editable are ignored.

To delete a resource, send a HTTP `DELETE` to the `links.remove` link on the resource. If the link is missing then you don't have permission to update the resource.

To create a new resource, HTTP `POST` to the collection URL in the schema (which is `/v3/<type>`).

## Filtering

Most collections can be filtered on the server-side by common fields using HTTP query parameters. The `filters` map shows you what fields can be filtered on and what the filtered values were for the request you made. The API UI has controls to setup filtering and show you the appropriate request. For simple "equals" matches it's just `field=value`. Modifiers can be added to the field name, for example, `field_gt=42` for "field is greater than 42." See the [API spec](https://github.com/rancher/api-spec/blob/master/specification.md#filtering) for full details.

## Sorting

Most collections can be sorted on the server-side by common fields using HTTP query parameters. The `sortLinks` map shows you what sorts are available, along with the URL to get the collection sorted by that. It also includes info about what the current response was sorted by, if specified.

## Pagination

API responses are paginated with a limit of 100 resources per page by default. This can be changed with the `limit` query parameter, up to a maximum of 1000, for example, `/v3/pods?limit=1000`. The `pagination` map in collection responses tells you whether or not you have the full result set and has a link to the next page if you do not.

## Capturing v3 API Calls

You can use browser developer tools to capture how the v3 API is called. For example, you could follow these steps to use the Chrome developer tools to get the API call for provisioning an RKE cluster:

1. In the Rancher UI, go to **Cluster Management** and click **Create.**
1. Click one of the cluster types. This example uses Digital Ocean.
1. Fill out the form with a cluster name and node template, but don't click **Create**.
1. You need to open the developer tools before the cluster creation to see the API call being recorded. To open the tools, right-click the Rancher UI and click **Inspect.**
1. In the developer tools, click the **Network** tab.
1. On the **Network** tab, make sure **Fetch/XHR** is selected.
1. In the Rancher UI, click **Create**. In the developer tools, you should see a new network request with the name `cluster?_replace=true`.
1. Right-click `cluster?_replace=true` and click **Copy > Copy as cURL.**
1. Paste the result into any text editor. You can see the POST request, including the URL it was sent to, all headers, and the full body of the request. This command can be used to create a cluster from the command line. Note: the request should be stored in a safe place because it contains credentials.

### Enable View in API

You can also view captured v3 API calls for your respective clusters and resources. This feature is not enabled by default. To enable it:

1. Click your **User Tile** in the top right corner of the UI and select **Preferences** from the drop-down menu.
2. Under the **Advanced Features** section, click **Enable "View in API"**

Once checked, the **View in API** link is displayed under the **⋮** sub-menu on resource pages in the UI.
