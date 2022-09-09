"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78055],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8683:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Running on ARM64 (Experimental)",weight:3},s=void 0,p={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",id:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",title:"Running on ARM64 (Experimental)",description:"Running on an ARM64 platform is currently an experimental feature and is not yet officially supported in Rancher. Therefore, we do not recommend using ARM64 based nodes in a production environment.",source:"@site/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64.md",tags:[],version:"current",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Running on ARM64 (Experimental)",weight:3},sidebar:"tutorialSidebar",previous:{title:"Enabling Experimental Features",permalink:"/pages-for-subheaders/enable-experimental-features"},next:{title:"Allow Unsupported Storage Drivers",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"}},u={},c=[],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),":")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Running on an ARM64 platform is currently an experimental feature and is not yet officially supported in Rancher. Therefore, we do not recommend using ARM64 based nodes in a production environment."))),(0,i.kt)("p",null,"The following options are available when using an ARM64 platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Running Rancher on ARM64 based node(s)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only for Docker Install. Please note that the following installation command replaces the examples found in the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker Install")," link:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'# In the last line `rancher/rancher:vX.Y.Z`, be certain to replace "X.Y.Z" with a released version in which ARM64 builds exist. For  example, if your matching version is v2.5.8, you would fill in this line with `rancher/rancher:v2.5.8`.\ndocker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:vX.Y.Z\n')),(0,i.kt)("p",{parentName:"li"},":::note"))))),(0,i.kt)("p",null,"To check if your specific released version is compatible with the ARM64 architecture, you may navigate to your\nversion's release notes in the following two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manually find your version using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"https://github.com/rancher/rancher/releases"),"."),(0,i.kt)("li",{parentName:"ul"},"Go directly to your version using the tag and the specific version number. If you plan to use v2.5.8, for example, you may navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases/tag/v2.5.8"},"https://github.com/rancher/rancher/releases/tag/v2.5.8"),".")),(0,i.kt)("p",null,":::"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create custom cluster and adding ARM64 based node(s)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kubernetes cluster version must be 1.12 or higher"),(0,i.kt)("li",{parentName:"ul"},"CNI Network Provider must be ",(0,i.kt)("a",{parentName:"li",href:"/faq/container-network-interface-providers#flannel"},"Flannel")))),(0,i.kt)("li",{parentName:"ul"},"Importing clusters that contain ARM64 based nodes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kubernetes cluster version must be 1.12 or higher")))),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"cluster-provisioning/rke-clusters/options/"},"Cluster Options")," how to configure the cluster options."),(0,i.kt)("p",null,"The following features are not tested:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitoring, alerts, notifiers, pipelines and logging"),(0,i.kt)("li",{parentName:"ul"},"Launching apps from the catalog")))}m.isMDXComponent=!0}}]);