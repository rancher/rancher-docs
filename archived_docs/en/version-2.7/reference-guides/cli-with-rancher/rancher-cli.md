---
title: Rancher CLI
description: Interact with Rancher using command line interface (CLI) tools from your workstation.
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cli-with-rancher/rancher-cli"/>
</head>

The Rancher CLI (Command Line Interface) is a unified tool that you can use to interact with Rancher. With this tool, you can operate Rancher using a command line rather than the GUI.

## Download Rancher CLI

The binary can be downloaded directly from the UI.

1. In the upper left corner, click **☰**.
1. At the bottom of the navigation sidebar menu, click **About**.
1. Under the **CLI Downloads section**, there are links to download the binaries for Windows, Mac, and Linux. You can also check the [releases page for our CLI](https://github.com/rancher/cli/releases) for direct downloads of the binary.

## Requirements

After you download the Rancher CLI, you need to make a few configurations. Rancher CLI requires:

- Your Rancher Server URL, which is used to connect to Rancher Server.
- An API Bearer Token, which is used to authenticate with Rancher. For more information about obtaining a Bearer Token, see [Creating an API Key](../user-settings/api-keys.md).

## CLI Authentication

Before you can use Rancher CLI to control your Rancher Server, you must authenticate using an API Bearer Token. Log in using the following command (replace `<BEARER_TOKEN>` and `<SERVER_URL>` with your information):

```bash
$ ./rancher login https://<SERVER_URL> --token <BEARER_TOKEN>
```

If Rancher Server uses a self-signed certificate, Rancher CLI prompts you to continue with the connection.

## Project Selection

Before you can perform any commands, you must select a Rancher project to perform those commands against. To select a [project](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md) to work on, use the command `./rancher context switch`. When you enter this command, a list of available projects displays. Enter a number to choose your project.

**Example: `./rancher context switch` Output**
```
User:rancher-cli-directory user$ ./rancher context switch
NUMBER    CLUSTER NAME   PROJECT ID              PROJECT NAME
1         cluster-2      c-7q96s:p-h4tmb         project-2
2         cluster-2      c-7q96s:project-j6z6d   Default
3         cluster-1      c-lchzv:p-xbpdt         project-1
4         cluster-1      c-lchzv:project-s2mch   Default
Select a Project:
```

After you enter a number, the console displays a message that you've changed projects.

```
INFO[0005] Setting new context to project project-1
INFO[0005] Saving config to /Users/markbishop/.ranchcli2.json
```

Ensure you can run `rancher kubectl get pods` successfully.

## Commands

The following commands are available for use in Rancher CLI.

| Command  | Result  |
|---|---|
| `apps, [app]`  | Performs operations on catalog applications (i.e., individual [Helm charts](https://docs.helm.sh/developing_charts/)) or Rancher charts.  |
| `catalog`  | Performs operations on [catalogs](../../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md).  |
| `clusters, [cluster]`  | Performs operations on your [clusters](../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md).  |
| `context`  | Switches between Rancher [projects](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md). For an example, see [Project Selection](#project-selection).  |
| `globaldns`  | Performs operations on global DNS providers and entries.  | 
| `inspect [OPTIONS] [RESOURCEID RESOURCENAME]`  | Displays details about [Kubernetes resources](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#resource-types) or Rancher resources (i.e.: [projects](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md) and [workloads](../../how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/workloads-and-pods.md)). Specify resources by name or ID.  |
| `kubectl`  | Runs [kubectl commands](https://kubernetes.io/docs/reference/kubectl/overview/#operations).   |
| `login, [l]`  | Logs into a Rancher Server. For an example, see [CLI Authentication](#cli-authentication).  |
| `machines, [machine]`  | Performs operations on machines.  |
| `multiclusterapps, [multiclusterapp mcapps mcapp]`  | Performs operations with multi-cluster apps.  |
| `namespaces, [namespace]`  | Performs operations on [namespaces](../../how-to-guides/new-user-guides/manage-namespaces.md).  |
| `nodes, [node]`  | Performs operations on [nodes](../../how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md).  |
| `projects, [project]`  | Performs operations on [projects](../../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md).  |
| `ps`  | Displays [workloads](../../how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/workloads-and-pods.md) in a project.  |
| `server`  | Performs operations for the server.  |
| `settings, [setting]`  | Shows the current settings for your Rancher Server.  |
| `ssh`  | Connects to one of your cluster nodes using the SSH protocol.  |
| `up`  | Applies compose config.  |
| `wait`  | Waits for resources cluster, app, project, multiClusterApp.  |
| `token`  | Authenticates and generates new kubeconfig token.  |
| `help, [h]`  | Shows a list of commands or help for one command.  |

## Rancher CLI Help

Once logged into Rancher Server using the CLI, enter `./rancher --help` for a list of commands.

All commands accept the `--help` flag, which documents each command's usage.

## Limitations

The Rancher CLI **cannot** be used to install [dashboard apps or Rancher feature charts](../../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md).
