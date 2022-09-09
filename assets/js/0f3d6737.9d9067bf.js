"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46857],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Troubleshooting HA RKE Add-On Install",weight:370,aliases:["/rancher/v2.0-v2.4/en/installation/troubleshooting-ha/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/troubleshooting","/rancher/v2.0-v2.4/en/installation/resources/advanced/helm2/rke-add-on/troubleshooting/404-default-backend/","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/troubleshooting/"]},l=void 0,d={unversionedId:"pages-for-subheaders/helm2-rke-add-on-troubleshooting",id:"version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting",title:"Troubleshooting HA RKE Add-On Install",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2-rke-add-on-troubleshooting",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Troubleshooting HA RKE Add-On Install",weight:370,aliases:["/rancher/v2.0-v2.4/en/installation/troubleshooting-ha/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/troubleshooting","/rancher/v2.0-v2.4/en/installation/resources/advanced/helm2/rke-add-on/troubleshooting/404-default-backend/","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/troubleshooting/"]},sidebar:"tutorialSidebar",previous:{title:"Enable API Auditing",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/api-auditing"},next:{title:"Generic troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting"}},u={},c=[],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,o.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("p",null,"This section contains common errors seen when setting up a Kubernetes installation."),(0,o.kt)("p",null,"Choose from the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting"},"Generic troubleshooting")),(0,o.kt)("p",{parentName:"li"},"In this section, you can find generic ways to debug your Kubernetes cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/troubleshooting/ssh-connectivity-errors/"},"Failed to set up SSH tunneling for host")),(0,o.kt)("p",{parentName:"li"},"In this section, you can find errors related to SSH tunneling when you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke")," command to setup your nodes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status"},"Failed to get job complete status")),(0,o.kt)("p",{parentName:"li"},"In this section, you can find errors related to deploying addons.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/default-backend"},"404 - default backend")),(0,o.kt)("p",{parentName:"li"},"In this section, you can find errors related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"404 - default backend")," page that is shown when trying to access Rancher."))))}h.isMDXComponent=!0}}]);