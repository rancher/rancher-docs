"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70124],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(a),k=r,g=d["".concat(m,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54391:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"CPU and Memory Allocations",weight:1,aliases:["/rancher/v2.0-v2.4/en/project-admin/istio/configuring-resource-allocations/","/rancher/v2.0-v2.4/en/project-admin/istio/config/","/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/resources","/rancher/v2.0-v2.4/en/istio/legacy/resources","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/resources","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/resources/"]},m=void 0,s={unversionedId:"explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",id:"version-2.0-2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",title:"CPU and Memory Allocations",description:"Available as of v2.3.0",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"CPU and Memory Allocations",weight:1,aliases:["/rancher/v2.0-v2.4/en/project-admin/istio/configuring-resource-allocations/","/rancher/v2.0-v2.4/en/project-admin/istio/config/","/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/resources","/rancher/v2.0-v2.4/en/istio/legacy/resources","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/resources","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/resources/"]},sidebar:"tutorialSidebar",previous:{title:"Istio",permalink:"/v2.0-v2.4/pages-for-subheaders/istio"},next:{title:"Role-based Access Control",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/rbac-for-istio"}},p={},u=[{value:"Pilot",id:"pilot",level:2},{value:"Mixer",id:"mixer",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Ingress Gateway",id:"ingress-gateway",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Grafana",id:"grafana",level:2}],d={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,l.kt)("p",null,"This section describes the minimum recommended computing resources for the Istio components in a cluster."),(0,l.kt)("p",null,"The CPU and memory allocations for each component are ",(0,l.kt)("a",{parentName:"p",href:"#configuring-resource-allocations"},"configurable.")),(0,l.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough CPU and memory to run all of the components of Istio."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," In larger deployments, it is strongly advised that the infrastructure be placed on dedicated nodes in the cluster by adding a node selector for each Istio component.")),(0,l.kt)("p",null,"The table below shows a summary of the minimum recommended resource requests and limits for the CPU and memory of each central Istio component."),(0,l.kt)("p",null,"In Kubernetes, the resource request indicates that the workload will not deployed on a node unless the node has at least the specified amount of memory and CPU available. If the workload surpasses the limit for CPU or memory, it can be terminated or evicted from the node. For more information on managing resource limits for containers, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"Kubernetes documentation.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Workload"),(0,l.kt)("th",{parentName:"tr",align:null},"Container"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Mem - Request"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU - Limit"),(0,l.kt)("th",{parentName:"tr",align:null},"Mem - Limit"),(0,l.kt)("th",{parentName:"tr",align:null},"Configurable"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"istio-pilot"),(0,l.kt)("td",{parentName:"tr",align:null},"discovery"),(0,l.kt)("td",{parentName:"tr",align:null},"500m"),(0,l.kt)("td",{parentName:"tr",align:null},"2048Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"1000m"),(0,l.kt)("td",{parentName:"tr",align:null},"4096Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"istio-telemetry"),(0,l.kt)("td",{parentName:"tr",align:null},"mixer"),(0,l.kt)("td",{parentName:"tr",align:null},"1000m"),(0,l.kt)("td",{parentName:"tr",align:null},"1024Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"4800m"),(0,l.kt)("td",{parentName:"tr",align:null},"4096Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"istio-policy"),(0,l.kt)("td",{parentName:"tr",align:null},"mixer"),(0,l.kt)("td",{parentName:"tr",align:null},"1000m"),(0,l.kt)("td",{parentName:"tr",align:null},"1024Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"4800m"),(0,l.kt)("td",{parentName:"tr",align:null},"4096Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"istio-tracing"),(0,l.kt)("td",{parentName:"tr",align:null},"jaeger"),(0,l.kt)("td",{parentName:"tr",align:null},"100m"),(0,l.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"500m"),(0,l.kt)("td",{parentName:"tr",align:null},"1024Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,l.kt)("td",{parentName:"tr",align:null},"750m"),(0,l.kt)("td",{parentName:"tr",align:null},"750Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"1000m"),(0,l.kt)("td",{parentName:"tr",align:null},"1024Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"100m"),(0,l.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"200m"),(0,l.kt)("td",{parentName:"tr",align:null},"512Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Others"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"500m"),(0,l.kt)("td",{parentName:"tr",align:null},"500Mi"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Total")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"3950m")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"5546Mi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},">12300m")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},">14848Mi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"-"))))),(0,l.kt)("h1",{id:"configuring-resource-allocations"},"Configuring Resource Allocations"),(0,l.kt)("p",null,"You can individually configure the resource allocation for each type of Istio component. This section includes the default resource allocations for each component."),(0,l.kt)("p",null,"To make it easier to schedule the workloads to a node, a cluster administrator can reduce the CPU and memory resource requests for the component. However, the default CPU and memory allocations are the minimum that we recommend."),(0,l.kt)("p",null,"You can find more information about Istio configuration in the ",(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/concepts/what-is-istio"},"official Istio documentation"),"."),(0,l.kt)("p",null,"To configure the resources allocated to an Istio component, "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Rancher, go to the cluster where you have Istio installed."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Tools > Istio.")," This opens the Istio configuration page."),(0,l.kt)("li",{parentName:"ol"},"Change the CPU or memory allocations, the nodes where each component will be scheduled to, or the node tolerations."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The resource allocations for the Istio components are updated."),(0,l.kt)("h2",{id:"pilot"},"Pilot"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/ops/deployment/architecture/#pilot"},"Pilot"),"  provides the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Authentication configuration"),(0,l.kt)("li",{parentName:"ul"},"Service discovery for the Envoy sidecars"),(0,l.kt)("li",{parentName:"ul"},"Traffic management capabilities for intelligent routing (A/B tests and canary rollouts)"),(0,l.kt)("li",{parentName:"ul"},"Configuration for resiliency (timeouts, retries, circuit breakers, etc)")),(0,l.kt)("p",null,"For more information on Pilot, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/concepts/traffic-management/#pilot-and-envoy"},"documentation"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pilot CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the istio-pilot pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pilot CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the istio-pilot pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pilot Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the istio-pilot pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pilot Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the istio-pilot pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"2048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trace sampling Percentage"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://istio.io/docs/tasks/telemetry/distributed-tracing/overview/#trace-sampling"},"Trace sampling percentage")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pilot Selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which istio-pilot pod is deployed to. To use this option, the nodes must have labels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,l.kt)("h2",{id:"mixer"},"Mixer"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/ops/deployment/architecture/#mixer"},"Mixer"),"  enforces access control and usage policies across the service mesh. It also integrates with plugins for monitoring tools such as Prometheus. The Envoy sidecar proxy passes telemetry data and monitoring data to Mixer, and Mixer passes the monitoring data to Prometheus."),(0,l.kt)("p",null,"For more information on Mixer, policies and telemetry, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/concepts/policies-and-telemetry/"},"documentation"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Telemetry CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the istio-telemetry pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"4800")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Telemetry CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the istio-telemetry pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Telemetry Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the istio-telemetry pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Telemetry Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the istio-telemetry pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Mixer Policy"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy the istio-policy."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Policy CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the istio-policy pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when policy enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"4800")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Policy CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the istio-policy pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when policy enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Policy Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the istio-policy pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when policy enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Policy Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the istio-policy pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when policy enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixer Selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which istio-policy and istio-telemetry pods are deployed to. To use this option, the nodes must have labels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,l.kt)("h2",{id:"tracing"},"Tracing"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/telemetry/distributed-tracing/overview/"},"Distributed tracing")," enables users to track a request through a service mesh. This makes it easier to troubleshoot problems with latency, parallelism and serialization."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Tracing"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy the istio-tracing."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tracing CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the istio-tracing pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tracing CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the istio-tracing pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tracing Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the istio-tracing pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tracing Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the istio-tracing pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tracing Selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which tracing pod is deployed to. To use this option, the nodes must have labels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,l.kt)("h2",{id:"ingress-gateway"},"Ingress Gateway"),(0,l.kt)("p",null,"The Istio gateway allows Istio features such as monitoring and route rules to be applied to traffic entering the cluster. This gateway is a prerequisite for outside traffic to make requests to Istio."),(0,l.kt)("p",null,"For more information, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/"},"documentation"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Ingress Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy the istio-ingressgateway."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Service Type of Istio Ingress Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},"How to expose the gateway. You can choose NodePort or Loadbalancer"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"NodePort")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Http2 Port"),(0,l.kt)("td",{parentName:"tr",align:null},"The NodePort for http2 requests"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"31380")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Https Port"),(0,l.kt)("td",{parentName:"tr",align:null},"The NodePort for https requests"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"31390")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Load Balancer IP"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway Load Balancer IP"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Load Balancer Source Ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway Load Balancer Source Ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the istio-ingressgateway pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"2000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the istio-ingressgateway pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the istio-ingressgateway pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the istio-ingressgateway pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Gateway Selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which istio-ingressgateway pod is deployed to. To use this option, the nodes must have labels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,l.kt)("h2",{id:"prometheus"},"Prometheus"),(0,l.kt)("p",null,"You can query for Istio metrics using Prometheus. Prometheus is an open-source systems monitoring and alerting toolkit."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prometheus CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the Prometheus pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prometheus CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the Prometheus pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"750")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prometheus Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the Prometheus pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prometheus Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the Prometheus pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"750")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Retention for Prometheus"),(0,l.kt)("td",{parentName:"tr",align:null},"How long your Prometheus instance retains data"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prometheus Selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which Prometheus pod is deployed to. To use this option, the nodes must have labels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,l.kt)("h2",{id:"grafana"},"Grafana"),(0,l.kt)("p",null,"You can visualize metrics with Grafana. Grafana lets you visualize Istio traffic data scraped by Prometheus."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to deploy the Grafana."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grafana CPU Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit for the Grafana pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grafana CPU Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU reservation for the Grafana pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grafana Memory Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit for the Grafana pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"512")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grafana Memory Reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource requests for the Grafana pod."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grafana Selector"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to select the nodes in which Grafana pod is deployed to. To use this option, the nodes must have labels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Persistent Storage for Grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Persistent Storage for Grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Use a Storage Class to provision a new persistent volume or Use an existing persistent volume claim"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled and enabled PV"),(0,l.kt)("td",{parentName:"tr",align:null},"Use SC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage Class"),(0,l.kt)("td",{parentName:"tr",align:null},"Storage Class for provisioning PV for Grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled, enabled PV and use storage class"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the default class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Persistent Volume Size"),(0,l.kt)("td",{parentName:"tr",align:null},"The size for the PV you would like to provision for Grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled, enabled PV and use storage class"),(0,l.kt)("td",{parentName:"tr",align:null},"5Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Existing Claim"),(0,l.kt)("td",{parentName:"tr",align:null},"Use existing PVC for Grafana"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, when Grafana enabled, enabled PV and use existing PVC"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")))))}k.isMDXComponent=!0}}]);