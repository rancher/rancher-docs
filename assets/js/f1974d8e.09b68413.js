"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25004],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87982:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],c={title:"Managing HPAs with the Rancher UI",weight:3028},l=void 0,s={unversionedId:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/manage-hpa-with-rancher-ui",id:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/manage-hpa-with-rancher-ui",title:"Managing HPAs with the Rancher UI",description:"The Rancher UI supports creating, managing, and deleting HPAs. You can configure CPU or memory usage as the metric that the HPA uses to scale.",source:"@site/docs/k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/manage-hpa-with-rancher-ui.md",sourceDirName:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui",slug:"/k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/",permalink:"/k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-rancher-ui/manage-hpa-with-rancher-ui.md",tags:[],version:"current",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Managing HPAs with the Rancher UI",weight:3028}},p={},h=[{value:"Creating an HPA",id:"creating-an-hpa",level:2},{value:"Get HPA Metrics and Status",id:"get-hpa-metrics-and-status",level:2},{value:"Deleting an HPA",id:"deleting-an-hpa",level:2}],m={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Rancher UI supports creating, managing, and deleting HPAs. You can configure CPU or memory usage as the metric that the HPA uses to scale."),(0,o.kt)("p",null,"If you want to create HPAs that scale based on other metrics than CPU and memory, refer to ",(0,o.kt)("a",{parentName:"p",href:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-kubectl/#configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"Configuring HPA to Scale Using Custom Metrics with Prometheus"),"."),(0,o.kt)("h2",{id:"creating-an-hpa"},"Creating an HPA"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster you want to create an HPA in and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Service Discovery > HorizontalPodAutoscalers"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Target Reference")," as scale target for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify the ",(0,o.kt)("strong",{parentName:"p"},"Minimum Replicas")," and ",(0,o.kt)("strong",{parentName:"p"},"Maximum Replicas")," for the HPA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the metrics for the HPA. You can choose memory or CPU usage as the metric that will cause the HPA to scale the service up or down. In the ",(0,o.kt)("strong",{parentName:"p"},"Quantity")," field, enter the percentage of the workload's memory or CPU usage that will cause the HPA to scale the service. To configure other HPA metrics, including metrics available from Prometheus, you need to ",(0,o.kt)("a",{parentName:"p",href:"k8s-in-rancher/horizontal-pod-autoscaler/manage-hpa-with-kubectl/#configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"manage HPAs using kubectl"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," to create the HPA."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Result:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The HPA is deployed to the chosen namespace. You can view the HPA's status from the project's Resources > HPA view."))),(0,o.kt)("h2",{id:"get-hpa-metrics-and-status"},"Get HPA Metrics and Status"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that has the HPA and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery > HorizontalPodAutoscalers"),". The ",(0,o.kt)("strong",{parentName:"li"},"HorizontalPodAutoscalers")," page shows the number of current replicas.")),(0,o.kt)("p",null,"For more detailed metrics and status of a specific HPA, click the name of the HPA. This leads to the HPA detail page."),(0,o.kt)("h2",{id:"deleting-an-hpa"},"Deleting an HPA"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that has the HPA you want to delete and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery > HorizontalPodAutoscalers"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Resources > HPA"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the HPA which you would like to delete and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete")," to confirm.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Result:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The HPA is deleted from the current cluster."))))}u.isMDXComponent=!0}}]);