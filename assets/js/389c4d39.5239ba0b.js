"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12428],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return h}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=s,v=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return t?n.createElement(v,o(o({ref:r},d),{},{components:t})):n.createElement(v,o({ref:r},d))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},18244:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=t(87462),s=t(63366),a=(t(67294),t(3905)),o=["components"],i={title:"Best Practices for Rancher Managed vSphere Clusters",shortTitle:"Rancher Managed Clusters in vSphere",aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-managed/managed-vsphere","/rancher/v2.x/en/best-practices/v2.5/rancher-managed/managed-vsphere/"]},c=void 0,l={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",id:"version-2.5/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",title:"Best Practices for Rancher Managed vSphere Clusters",description:"This guide outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware.",source:"@site/versioned_docs/version-2.5/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere.md",tags:[],version:"2.5",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Best Practices for Rancher Managed vSphere Clusters",shortTitle:"Rancher Managed Clusters in vSphere",aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-managed/managed-vsphere","/rancher/v2.x/en/best-practices/v2.5/rancher-managed/managed-vsphere/"]},sidebar:"tutorialSidebar",previous:{title:"Tips for Setting Up Containers",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"},next:{title:"Architecture",permalink:"/v2.5/pages-for-subheaders/rancher-manager-architecture"}},d={},u=[{value:"Leverage VM Templates to Construct the Environment",id:"leverage-vm-templates-to-construct-the-environment",level:3},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across ESXi Hosts",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-esxi-hosts",level:3},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across Datastores",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-datastores",level:3},{value:"Configure VM&#39;s as Appropriate for Kubernetes",id:"configure-vms-as-appropriate-for-kubernetes",level:3},{value:"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes",id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes",level:3},{value:"Consistent IP Addressing for VM&#39;s",id:"consistent-ip-addressing-for-vms",level:3},{value:"Leverage SSD Drives for ETCD Nodes",id:"leverage-ssd-drives-for-etcd-nodes",level:3},{value:"Perform Regular Downstream Cluster Backups",id:"perform-regular-downstream-cluster-backups",level:3},{value:"Back up Downstream Node VMs",id:"back-up-downstream-node-vms",level:3}],p={toc:u};function h(e){var r=e.components,i=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-vm-considerations"},"1. VM Considerations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-network-considerations"},"2. Network Considerations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-storage-considerations"},"3. Storage Considerations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#4-backups-and-disaster-recovery"},"4. Backups and Disaster Recovery"))),(0,a.kt)("figcaption",null,"Solution Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Solution Overview",src:t(16181).Z,width:"576",height:"362"})),(0,a.kt)("h1",{id:"1-vm-considerations"},"1. VM Considerations"),(0,a.kt)("h3",{id:"leverage-vm-templates-to-construct-the-environment"},"Leverage VM Templates to Construct the Environment"),(0,a.kt)("p",null,'To facilitate consistency across the deployed Virtual Machines across the environment, consider the use of "Golden Images" in the form of VM templates. Packer can be used to accomplish this, adding greater customisation options.'),(0,a.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-esxi-hosts"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across ESXi Hosts"),(0,a.kt)("p",null,"Doing so will ensure node VM's are spread across multiple ESXi hosts - preventing a single point of failure at the host level."),(0,a.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-datastores"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across Datastores"),(0,a.kt)("p",null,"Doing so will ensure node VM's are spread across multiple datastores - preventing a single point of failure at the datastore level."),(0,a.kt)("h3",{id:"configure-vms-as-appropriate-for-kubernetes"},"Configure VM's as Appropriate for Kubernetes"),(0,a.kt)("p",null,"It\u2019s important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double-checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node."),(0,a.kt)("h1",{id:"2-network-considerations"},"2. Network Considerations"),(0,a.kt)("h3",{id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes"},"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes"),(0,a.kt)("p",null,"Deploy etcd members within a single data center where possible to avoid latency overheads and reduce the likelihood of network partitioning. For most setups, 1Gb connections will suffice. For large clusters, 10Gb connections can reduce the time taken to restore from backup."),(0,a.kt)("h3",{id:"consistent-ip-addressing-for-vms"},"Consistent IP Addressing for VM's"),(0,a.kt)("p",null,"Each node used should have a static IP configured. In the case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,a.kt)("h1",{id:"3-storage-considerations"},"3. Storage Considerations"),(0,a.kt)("h3",{id:"leverage-ssd-drives-for-etcd-nodes"},"Leverage SSD Drives for ETCD Nodes"),(0,a.kt)("p",null,"ETCD is very sensitive to write latency. Therefore, leverage SSD disks where possible. "),(0,a.kt)("h1",{id:"4-backups-and-disaster-recovery"},"4. Backups and Disaster Recovery"),(0,a.kt)("h3",{id:"perform-regular-downstream-cluster-backups"},"Perform Regular Downstream Cluster Backups"),(0,a.kt)("p",null,"Kubernetes uses etcd to store all its data - from configuration, state and metadata. Backing this up is crucial in the event of disaster recovery."),(0,a.kt)("h3",{id:"back-up-downstream-node-vms"},"Back up Downstream Node VMs"),(0,a.kt)("p",null,"Incorporate the Rancher downstream node VM's within a standard VM backup policy."))}h.isMDXComponent=!0},16181:function(e,r,t){r.Z=t.p+"assets/images/solution_overview.drawio-5d3e9895c0317dc2fb485bb57ddd6cbc.svg"}}]);