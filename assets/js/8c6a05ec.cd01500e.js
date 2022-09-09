"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38897],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19752:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"Assigning Pod Security Policies",weight:2260},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",id:"how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",title:"Assigning Pod Security Policies",description:"Pod Security Policies are objects that control security-sensitive aspects of pod specification (like root privileges).",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Assigning Pod Security Policies",weight:2260},sidebar:"tutorialSidebar",previous:{title:"Adding a Pod Security Policy",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},next:{title:"Project Administration",permalink:"/pages-for-subheaders/manage-projects"}},l={},d=[{value:"Adding a Default Pod Security Policy",id:"adding-a-default-pod-security-policy",level:2}],p={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pod Security Policies")," are objects that control security-sensitive aspects of pod specification (like root privileges)."),(0,o.kt)("h2",{id:"adding-a-default-pod-security-policy"},"Adding a Default Pod Security Policy"),(0,o.kt)("p",null,"When you create a new cluster with RKE, you can configure it to apply a PSP immediately. As you create the cluster, use the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Options")," to enable a PSP. The PSP assigned to the cluster will be the default PSP for projects within the cluster."),(0,o.kt)("p",null,":::Prerequisite:"),(0,o.kt)("p",null,"Create a Pod Security Policy within Rancher. Before you can assign a default PSP to a new cluster, you must have a PSP available for assignment. For instruction, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),"."),(0,o.kt)("p",null,":::"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For security purposes, we recommend assigning a PSP as you create your clusters."))),(0,o.kt)("p",null,"To enable a default Pod Security Policy, set the ",(0,o.kt)("strong",{parentName:"p"},"Pod Security Policy Support")," option to  ",(0,o.kt)("strong",{parentName:"p"},"Enabled"),", and then make a selection from the ",(0,o.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down."),(0,o.kt)("p",null,"When the cluster finishes provisioning, the PSP you selected is applied to all projects within the cluster."))}g.isMDXComponent=!0}}]);