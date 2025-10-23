---
title: 跳过测试
---

用户可以在测试配置文件中自定义要跳过的测试，然后 CIS 扫描可以使用该配置文件运行。

要跳过测试，你需要创建自定义一个 CIS 扫描配置文件。配置文件包含 CIS 扫描的配置，包括要使用的 Benchmark 测试版本以及要在该 Benchmark 测试中跳过的测试。

1. 在左上角，单击 **☰ > 集群管理**。
1. 在**集群**页面上，转到要运行 CIS 扫描的集群，然后单击 **Explore**。
1. 单击 **CIS Benchmark > 配置文件**。
1. 在这里，你可以使用多种方式来创建配置文件。要创建新配置文件，单击**创建**并在 UI 中填写表单。要基于现有配置文件来创建新配置文件，请转到现有配置文件并单击**⋮ 克隆**。如果你在填写表单，请使用测试 ID 添加要跳过的测试，并参考相关的 CIS Benchmark。如果你将新的测试配置文件创建为 YAML，你需要在 `skipTests` 参数中添加要跳过的测试的 ID。你还需要为配置文件命名：

   ```yaml
   apiVersion: cis.cattle.io/v1
   kind: ClusterScanProfile
   metadata:
     annotations:
       meta.helm.sh/release-name: clusterscan-operator
       meta.helm.sh/release-namespace: cis-operator-system
     labels:
       app.kubernetes.io/managed-by: Helm
     name: "<example-profile>"
   spec:
     benchmarkVersion: cis-1.5
     skipTests:
       - "1.1.20"
       - "1.1.21"
   ```
1. 单击**创建**。

**结果**：已创建一个新的 CIS 扫描配置文件。

使用此配置文件[运行扫描](./run-a-scan.md)时，会跳过定义的跳过测试。跳过的测试将在生成的报告中标记为 `Skip`。
