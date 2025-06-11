---
title:  iSCSI Volumes
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes"/>
</head>

In [Rancher Launched Kubernetes clusters](../../../launch-kubernetes-with-rancher/launch-kubernetes-with-rancher.md) that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. This failure is likely due to an incompatibility issue involving the iSCSI initiator tool. You can resolve this issue by installing the iSCSI initiator tool on each of your cluster nodes.

Rancher Launched Kubernetes clusters storing data on iSCSI volumes leverage the [iSCSI initiator tool](http://www.open-iscsi.com/), which is embedded in the kubelet's `rancher/hyperkube` Docker image. From each kubelet (i.e., the _initiator_), the tool discovers and launches sessions with an iSCSI volume (i.e., the _target_). However, in some instances, the versions of the iSCSI initiator tool installed on the initiator and the target may not match, resulting in a connection failure.

If you encounter this issue, you can work around it by installing the initiator tool on each node in your cluster. You can install the iSCSI initiator tool by logging into your cluster nodes and entering one of the following commands:

| Platform      | Package Name            | Install Command                        |
| ------------- | ----------------------- | -------------------------------------- |
| Ubuntu/Debian | `open-iscsi`            | `sudo apt install open-iscsi`          |
| RHEL          | `iscsi-initiator-utils` | `yum install iscsi-initiator-utils -y` |


After installing the initiator tool on your nodes, edit the YAML for your cluster, editing the kubelet configuration to mount the iSCSI binary and configuration, as shown in the sample below.

:::note Notes

- Before updating your Kubernetes YAML to mount the iSCSI binary and configuration, make sure either the `open-iscsi` (deb) or `iscsi-initiator-utils` (yum) package is installed on your cluster nodes. If this package isn't installed _before_ the bind mounts are created in your Kubernetes YAML, Docker will automatically create the directories and files on each node and will not allow the package install to succeed.

- The example YAML below does not apply to K3s, but only to RKE clusters. Since the K3s kubelet does not run in a container, adding extra binds is not necessary. However, all iSCSI tools must still be installed on your K3s nodes.

:::

```
services:
  kubelet:
    extra_binds:
      - "/etc/iscsi:/etc/iscsi"
      - "/sbin/iscsiadm:/sbin/iscsiadm"
```

If you're using RHEL 7.9, you need to mount the file `/usr/lib64/libcrypto.so.10` as shown in the sample below.

```
services:
  kubelet:
    extra_binds:
      - "/etc/iscsi:/etc/iscsi"
      - "/sbin/iscsiadm:/sbin/iscsiadm"
      - "/usr/lib64/libcrypto.so.10:/usr/lib/libcrypto.so.10"
```

If you're using RHEL 8.6, you need to mount the file `/usr/lib64/libcrypto.so.1.1` as shown in the sample below.

```
services:
  kubelet:
    extra_binds:
      - "/etc/iscsi:/etc/iscsi"
      - "/sbin/iscsiadm:/sbin/iscsiadm"
      - "/usr/lib64/libcrypto.so.1.1:/usr/lib/libcrypto.so.1.1"
```

:::tip

To verify iscsiadm is working properly, you can run the command `docker exec kubelet iscsiadm --version` on any node.

:::

