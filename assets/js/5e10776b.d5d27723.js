"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65111],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59975:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Backup Storage Location Configuration",shortTitle:"Storage",weight:3,aliases:["/rancher/v2.5/en/backups/v2.5/configuration/storage-config","/rancher/v2.x/en/backups/v2.5/configuration/storage-config/"]},s=void 0,c={unversionedId:"reference-guides/backup-restore-configuration/storage-configuration",id:"version-2.5/reference-guides/backup-restore-configuration/storage-configuration",title:"Backup Storage Location Configuration",description:"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible object store.",source:"@site/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/storage-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/storage-configuration",permalink:"/v2.5/reference-guides/backup-restore-configuration/storage-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/storage-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Backup Storage Location Configuration",shortTitle:"Storage",weight:3,aliases:["/rancher/v2.5/en/backups/v2.5/configuration/storage-config","/rancher/v2.x/en/backups/v2.5/configuration/storage-config/"]},sidebar:"tutorialSidebar",previous:{title:"Restore Configuration",permalink:"/v2.5/reference-guides/backup-restore-configuration/restore-configuration"},next:{title:"Examples",permalink:"/v2.5/reference-guides/backup-restore-configuration/examples"}},u={},p=[{value:"No Default Storage Location",id:"no-default-storage-location",level:3},{value:"S3-compatible Object Store",id:"s3-compatible-object-store",level:3},{value:"Existing StorageClass",id:"existing-storageclass",level:3},{value:"Existing Persistent Volume",id:"existing-persistent-volume",level:3}],m={toc:p};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible object store."),(0,o.kt)("p",null,"Only one storage location can be configured at the operator level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#storage-location-configuration"},"Storage Location Configuration"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#no-default-storage-location"},"No Default Storage Location")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#s3-compatible-object-store"},"S3-compatible Object Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#existing-storageclass"},"Use an existing StorageClass")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#existing-persistent-volume"},"Use an existing PersistentVolume")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#encryption"},"Encryption")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#example-values-yaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"))),(0,o.kt)("h1",{id:"storage-location-configuration"},"Storage Location Configuration"),(0,o.kt)("h3",{id:"no-default-storage-location"},"No Default Storage Location"),(0,o.kt)("p",null,"You can choose to not have any operator-level storage location configured. If you select this option, you must configure an S3-compatible object store as the storage location for each individual backup."),(0,o.kt)("h3",{id:"s3-compatible-object-store"},"S3-compatible Object Store"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Credential Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose the credentials for S3 from your secrets in Rancher. ",(0,o.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/backup-restore-configuration/examples#example-credential-secret-for-storing-backups-in-s3"},"Example"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bucket Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter the name of the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html"},"S3 bucket")," where the backups will be stored. Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"rancherbackups"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Region"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"},"AWS region")," where the S3 bucket is located.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Folder"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-folders.html"},"folder in the S3 bucket")," where the backups will be stored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"S3 endpoint")," For example, ",(0,o.kt)("inlineCode",{parentName:"td"},"s3.us-west-2.amazonaws.com"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Endpoint CA"),(0,o.kt)("td",{parentName:"tr",align:null},"The CA cert used to for the S3 endpoint. Default: base64 encoded CA cert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"insecureTLSSkipVerify"),(0,o.kt)("td",{parentName:"tr",align:null},"Set to true if you are not using TLS.")))),(0,o.kt)("h3",{id:"existing-storageclass"},"Existing StorageClass"),(0,o.kt)("p",null,"Installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart by selecting the StorageClass option will create a Persistent Volume Claim (PVC), and Kubernetes will in turn dynamically provision a Persistent Volume (PV) where all the backups will be saved by default."),(0,o.kt)("p",null,"For information about creating storage classes refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},"this section.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important"),'\nIt is highly recommended to use a StorageClass with a reclaim policy of "Retain". Otherwise if the PVC created by the ',(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup"),' chart gets deleted (either during app upgrade, or accidentally), the PV will get deleted too, which means all backups saved in it will get deleted.\nIf no such StorageClass is available, after the PV is provisioned, make sure to edit its reclaim policy and set it to "Retain" before storing backups in it.')),(0,o.kt)("h3",{id:"existing-persistent-volume"},"Existing Persistent Volume"),(0,o.kt)("p",null,"Select an existing Persistent Volume (PV) that will be used to store your backups. For information about creating PersistentVolumes in Rancher, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage#2-add-a-persistent-volume-that-refers-to-the-persistent-storage"},"this section.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important"),'\nIt is highly recommended to use a Persistent Volume with a reclaim policy of "Retain". Otherwise if the PVC created by the ',(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart gets deleted (either during app upgrade, or accidentally), the PV will get deleted too, which means all backups saved in it will get deleted.")),(0,o.kt)("h1",{id:"example-valuesyaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"),(0,o.kt)("p",null,"The documented ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that can be used to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator when the Helm CLI is used can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator/blob/release/v1.0/charts/rancher-backup/values.yaml"},"backup-restore-operator repository.")),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," files and configuring Helm charts during installation, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"},"Helm documentation.")))}g.isMDXComponent=!0}}]);