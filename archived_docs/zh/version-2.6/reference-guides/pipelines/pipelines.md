---
title: 流水线
---

:::note 备注

- 从 Rancher v2.5 开始，基于 Git 部署的流水线现已弃用。我们建议使用由 [Fleet](../../how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet.md) 提供支持的 Rancher Continuous Delivery 来处理流水线。要访问 Rancher 中的 Fleet，请点击 <b>☰ > 持续交付</b>。

- 流水线在 Kubernetes 1.21+ 中不再支持。

- Fleet 不会取代 Rancher 流水线，区别在于 Rancher 流水线现在由 Fleet 提供支持。

:::

Rancher 的流水线提供了简单的 CI/CD 体验，但它不能替代企业级 Jenkins 或团队使用的其他 CI 工具，也不能提供全部的功能和灵活性。

设置流水线可以帮助开发人员尽可能快速高效地交付新软件。使用 Rancher，可以与 GitHub 存储库集成以设置持续集成（CI）流水线。

配置 Rancher 和 GitHub 后，你可以部署运行 Jenkins 的容器来自动执行流水线：

- 使用代码构建应用程序镜像。
- 验证你的构建。
- 将构建镜像部署到集群。
- 运行单元测试。
- 运行回归测试。

:::note

Rancher 的流水线提供了简单的 CI/CD 体验，但它不能替代企业级 Jenkins 或团队使用的其他 CI 工具，也不能提供全部的功能和灵活性。

:::

## 概念

有关本节中使用的概念和术语的解释，请参阅[本页。](concepts.md)

## 流水线如何工作

在项目中开启流水线后，可以在每个项目中配置多个流水线。每个流水线都是唯一的，可以独立配置。

流水线是根据签入源代码存储库的一组文件配置的。用户可以通过 Rancher UI 或在仓库中添加 `.rancher-pipeline.yml` 来配置他们的流水线。

在配置流水线之前，你需要配置对版本控制提供程序（例如 GitHub、GitLab、Bitbucket）的认证。如果尚未配置版本控制提供程序，则始终可以使用 [Rancher 的示例存储库](example-repositories.md)查看一些常见的流水线部署。

在其中一个项目中配置流水线时，将自动创建专门用于流水线的命名空间。将以下组件部署到其中：

- **Jenkins:**

  流水线的构建引擎。由于项目用户不直接与 Jenkins 交互，因此它是托管和锁定的。

  :::note

  无法使用现有 Jenkins deployments 作为流水线引擎。

  :::

- **Docker Registry:**

  开箱即用，生成-发布步骤的默认目标是内部 Docker Registry。但是，你可以进行配置以推送到远程 registry。内部 Docker Registry 只能从集群节点访问，用户无法直接访问。镜像不会在流水线的生存期之后保留，并且只能在流水线运行中使用。如果需要在流水线运行之外访问镜像，请推送到外部 registry。

- **Minio:**

  Minio 存储用于存储流水线执行的日志。

:::note

托管的 Jenkins 实例以无状态方式工作，因此无需担心其数据持久性。默认情况下，Docker Registry 和 Minio 实例使用临时卷，这对于大多数用例来说都很好。如果要确保流水线日志能够在节点故障后继续运行，可以为它们配置持久卷，如[流水线组件的数据持久性](configure-persistent-data.md)中所述。

:::

## 流水线基于角色的访问控制

如果可以访问项目，则可以使存储库开始构建流水线。

仅[管理员](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions.md)，[集群所有者或成员](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#cluster-roles)，或[项目成员](../../how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#project-roles)可以配置版本控制提供程序并管理全局流水线执行设置。

项目成员只能配置存储库和流水线。

## 设置流水线

### 先决条件

:::note legacy 功能标志：

由于流水线应用程序已被弃用，取而代之的是 Fleet，因此你需要在使用流水线之前打开 legacy 功能的功能标志。 请注意，Kubernetes 1.21+ 中不再支持流水线。

1. 点击左上角 **☰ > 全局设置**。
1. 点击 **功能开关**。
1. 转到 `legacy` 功能标志并点击 **⋮ > 激活**。

:::

1. [配置版本控制提供程序](#1-配置版本控制提供程序)
2. [配置存储库](#2-配置存储库)
3. [配置流水线](#3-配置流水线)

### 1. 配置版本控制提供程序

在开始为存储库配置流水线之前，你必须配置并授权版本控制提供程序：

- GitHub
- GitLab
- Bitbucket

选择下面你的提供商的选项卡并按照说明进行操作。

<Tabs>
<TabItem value="GitHub">

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 点击 **配置** 选项卡。
1. 按照显示的说明 **设置 Github 应用程序**。Rancher 会重定向到 Github，在 Github 中设置 OAuth 应用。
1. 在 GitHub 中，复制 **Client ID** 和 **Client Secret**。将它们粘贴到 Rancher 中。
1. 如果你使用的是 GitHub 企业版，请选择 **使用私有 github 企业版安装**。输入 GitHub 安装的主机地址。
1. 点击 **认证**。

</TabItem>
<TabItem value="GitLab">

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 点击 **配置** 选项卡。
1. 点击 **GitLab**。
1. 按照显示的说明 **设置 GitLab 应用程序**。Rancher 会重定向到 GitLab。
1. 从 GitLab 中复制 **Application ID** 和 **Secret**。将它们粘贴到 Rancher 中。
1. 如果你使用的是 GitLab 企业版，请选择 **使用私有 gitlab 企业版安装**。输入 GitLab 安装的主机地址。
1. 点击 **认证**。

:::note 备注：

1.流水线使用 Gitlab [v4 API](https://docs.gitlab.com/ee/api/v3_to_v4.html)，支持的 Gitlab 版本为 9.0+。 2. 如果你使用的是 GitLab 10.7+，并且你的 Rancher 设置位于本地网络中，请在 GitLab 管理员设置中启用 **允许从钩子和服务向本地网络发出请求** 选项。

:::

</TabItem>
<TabItem value="Bitbucket Cloud">

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 点击 **配置** 选项卡。
1. 点击 **Bitbucket** 并默认选中 **使用 Bitbucket Cloud**。
1. 按照显示的说明进行 **设置 Bitbucket Cloud 应用程序**。Rancher 会重定向到 Bitbucket，以便在 Bitbucket 中设置 OAuth 使用者。
1. 从 Bitbucket 中，复制使用者 **Key** 和 **Secret**。将它们粘贴到 Rancher 中。
1. 点击 **认证**。

</TabItem>
<TabItem value="Bitbucket Server">

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 点击 **配置** 选项卡。
1. 点击 **Bitbucket** 并选择 **使用私有 Bitbucket Server 设置** 选项。
1. 按照显示的说明进行 **设置 Bitbucket Server 应用程序**。
1. 输入 Bitbucket Server 安装的主机地址。
1. 点击 **认证**。

:::note

Bitbucket server 在向 Rancher 发送 Webhook 时需要进行 SSL 验证。请确保 Rancher server 的证书是 Bitbucket server 信任的。有两种选择：

1. 使用来自受信任 CA 的证书设置 Rancher server。
1. 如果你使用的是自签名证书，请将 Rancher server 的证书导入 Bitbucket server。有关说明，请参阅[配置自签名证书](https://confluence.atlassian.com/bitbucketserver/if-you-use-self-signed-certificates-938028692.html)的 Bitbucket server 文档。

:::

</TabItem>
</Tabs>

**结果:** 对版本控制提供程序进行认证后，系统将自动重定向到开始配置要开始与流水线一起使用的存储库。

### 2. 配置存储库

在对版本控制提供程序进行授权后，系统会自动将你重定向到开始配置要开始使用流水线的存储库。即使其他人设置了版本控制提供程序，你也会看到他们的存储库，并可以生成流水线。

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 点击 **配置** 选项卡。

1. 将显示存储库列表。如果你是第一次配置存储库，请单击 **授权并获取你自己的存储库** 来获取存储库列表。

1. 对于要设置流水线的每个存储库，单击 **启用**。

1. 完成所有存储库的启用后，点击 **完成**。

**结果:** 你有一个存储库列表，可以开始为其配置流水线。

### 3. 配置流水线

现在，存储库已添加到你的项目中，你可以通过添加自动化阶段和步骤来开始配置流水线。为方便起见，有多种内置步骤类型用于专用任务。

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 找到要为其设置流水线的存储库。
1. 通过 UI 或使用仓库中的 yaml 文件配置流水线，即 `.rancher-pipeline.yml` 或 `.rancher-pipeline.yaml`。流水线配置分为多个阶段和步骤。在进入下一阶段之前，阶段必须完全完成，但阶段中的步骤会同时运行。对于每个阶段，你可以添加不同的步骤类型。注意：在构建每个步骤时，根据步骤类型有不同的高级选项。高级选项包括触发规则、环境变量和密文。有关通过 UI 或 YAML 文件配置流水线的详细信息，请参阅[流水线配置参考。](pipeline-configuration.md)

   - 如果要使用 UI，请选择 **⋮ > 编辑配置** 以使用 UI 配置流水线。配置流水线后，必须查看 YAML 文件并将其推送到存储库。
   - 如果要使用 YAML 文件，请选择 **⋮ > 查看/编辑 YAML** 来配置流水线。如果选择使用 YAML 文件，则需要在进行任何更改后将其推送到存储库，以便在存储库中更新它。编辑流水线配置时，Rancher 需要一些时间来检查现有的流水线配置。

1. 从分支列表中选择要使用的`分支`。

1. 可选：设置通知。

1. 设置流水线的触发规则。

1. 输入流水线的 **超时**。

1. 配置完所有阶段和步骤后，单击 **完成**。

**结果:** 你的流水线已经配置完毕，可以运行了。

## 流水线配置参考

有关如何将流水线配置为以下的详细信息，请参阅[此页面](pipeline-configuration.md)：

- 运行脚本
- 构建和发布镜像
- 发布 catalog 模板
- 部署 YAML
- 部署 catalog app

配置参考还介绍了如何配置：

- 通知
- 超时
- 触发流水线的规则
- 环境变量
- 密文

## 运行流水线

首次运行流水线。找到流水线并选择 **⋮ > Run**。

在此初始运行期间，将测试流水线，并将以下流水线组件作为专用于流水线的新命名空间中的工作负载部署到项目中：

- `docker-registry`
- `jenkins`
- `minio`

此过程需要几分钟时间。完成后，可以从项目 **Workloads** 选项卡查看每个流水线组件。

## 触发流水线

启用存储库后，会在版本控制提供程序中自动设置 Webhook。默认情况下，流水线由存储库的 **push** 事件触发，但你可以修改触发运行流水线的事件。

可用事件：

- **Push**: 每当提交推送到仓库中的分支时，都会触发流水线。
- **Pull Request**: 每当向仓库发出拉取请求时，都会触发流水线。
- **Tag**: 在仓库中创建标签时，会触发流水线。

:::note

Rancher 的[示例存储库](example-repositories.md)不存在此选项。

:::

### 修改存储库的事件触发器

1. 点击左上角 **☰ > 集群管理**。
1. 进入要配置流水线的集群，然后点击 **浏览**。
1. 在顶部导航栏的下拉菜单中，选择要配置流水线的项目。
1. 在左侧导航栏中，点击 **Legacy > Project >流水线**。
1. 找到要修改事件触发器的存储库。选择 **⋮ > Setting**.
1. 选择要为存储库触发的事件 (**Push**, **Pull Request** 或 **Tag**)。
1. 点击 **保存**.
