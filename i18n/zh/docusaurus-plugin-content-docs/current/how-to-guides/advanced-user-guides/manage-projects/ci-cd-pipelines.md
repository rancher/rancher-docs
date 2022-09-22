---
title:  Rancher CI/CD 流水线
description: 使用 Rancher 的 CI/CD 流水线自动检出代码、运行构建或脚本、发布 Docker 镜像以及向用户部署软件
---
你可以使用 Rancher 与 GitHub 仓库集成，从而设置持续集成（CI）流水线。

配置 Rancher 和 GitHub 后，你可以部署运行 Jenkins 的容器来自动化执行流水线：

- 将应用代码构建为镜像。
- 验证构建。
- 将构建的镜像部署到集群。
- 运行单元测试。
- 运行回归测试。

有关详细信息，请参阅[流水线](../../../pages-for-subheaders/pipelines.md)。