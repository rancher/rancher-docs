"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73794],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),u=n(7094),s=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function f(e){var t,n,i=e.lazy,f=e.block,p=e.defaultValue,m=e.values,h=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,O=(0,a.useState)(y),x=O[0],R=O[1],C=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=w[h];null!=A&&A!==x&&b.some((function(e){return e.value===A}))&&R(A)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),r=b[n].value;r!==x&&(E(t),R(r),null!=h&&T(h,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,i=C.indexOf(e.currentTarget)-1;n=null!=(o=C[i])?o:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},g)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,i.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},14910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),u=["components"],s={title:"Route Configuration",shortTitle:"Routes",weight:5},c=void 0,d={unversionedId:"reference-guides/monitoring-v2-configuration/routes",id:"version-2.5/reference-guides/monitoring-v2-configuration/routes",title:"Route Configuration",description:"The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver.",source:"@site/versioned_docs/version-2.5/reference-guides/monitoring-v2-configuration/routes.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/routes",permalink:"/v2.5/reference-guides/monitoring-v2-configuration/routes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/monitoring-v2-configuration/routes.md",tags:[],version:"2.5",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Route Configuration",shortTitle:"Routes",weight:5},sidebar:"tutorialSidebar",previous:{title:"Receiver Configuration",permalink:"/v2.5/reference-guides/monitoring-v2-configuration/receivers"},next:{title:"ServiceMonitor and PodMonitor Configuration",permalink:"/v2.5/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"}},f={},p=[{value:"Note on Labels and Annotations",id:"note-on-labels-and-annotations",level:3},{value:"Receiver",id:"receiver",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Matching",id:"matching",level:3}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The route configuration is the section of the Alertmanager custom resource that controls how the alerts fired by Prometheus are grouped and filtered before they reach the receiver."),(0,o.kt)("p",null,"When a Route is changed, the Prometheus Operator regenerates the Alertmanager custom resource to reflect the changes."),(0,o.kt)("p",null,"For more information about configuring routes, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.prometheus.io/docs/alerting/latest/configuration/#route"},"official Alertmanager documentation.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section assumes familiarity with how monitoring components work together. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#route-restrictions"},"Route Restrictions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#route-configuration"},"Route Configuration"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#receiver"},"Receiver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#grouping"},"Grouping")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#matching"},"Matching"))))),(0,o.kt)("h1",{id:"route-restrictions"},"Route Restrictions"),(0,o.kt)("p",null,"Alertmanager proxies alerts for Prometheus based on its receivers and a routing tree that filters alerts to certain receivers based on labels."),(0,o.kt)("p",null,"Alerting drivers proxy alerts for Alertmanager to non-native receivers, such as Microsoft Teams and SMS."),(0,o.kt)("p",null,"In the Rancher UI for configuring routes and receivers, you can configure routing trees with one root and then a depth of one more level, for a tree with a depth of two. But if you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"continue")," route when configuring Alertmanager directly, you can make the tree deeper."),(0,o.kt)("p",null,"Each receiver is for one or more notification providers. So if you know that every alert for Slack should also go to PagerDuty, you can configure both in the same receiver."),(0,o.kt)("h1",{id:"route-configuration"},"Route Configuration"),(0,o.kt)("h3",{id:"note-on-labels-and-annotations"},"Note on Labels and Annotations"),(0,o.kt)("p",null,"Labels should be used for identifying information that can affect the routing of notifications. Identifying information about the alert could consist of a container name, or the name of the team that should be notified."),(0,o.kt)("p",null,"Annotations should be used for information that does not affect who receives the alert, such as a runbook url or error message."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.5.4+",mdxType:"TabItem"},(0,o.kt)("h3",{id:"receiver"},"Receiver"),(0,o.kt)("p",null,"The route needs to refer to a ",(0,o.kt)("a",{parentName:"p",href:"#receiver-configuration"},"receiver")," that has already been configured."),(0,o.kt)("h3",{id:"grouping"},"Grouping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group By"),(0,o.kt)("td",{parentName:"tr",align:null},"N/a"),(0,o.kt)("td",{parentName:"tr",align:null},"The labels by which incoming alerts are grouped together. For example, ",(0,o.kt)("inlineCode",{parentName:"td"},"[ group_by: '[' <labelname>, ... ']' ]")," Multiple alerts coming in for labels such as ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster=A")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"alertname=LatencyHigh")," can be batched into a single group. To aggregate by all possible labels, use the special value ",(0,o.kt)("inlineCode",{parentName:"td"},"'...'")," as the sole label name, for example: ",(0,o.kt)("inlineCode",{parentName:"td"},"group_by: ['...']"),"  Grouping by ",(0,o.kt)("inlineCode",{parentName:"td"},"...")," effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what you want, unless you have a very low alert volume or your upstream notification system performs its own grouping.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Wait"),(0,o.kt)("td",{parentName:"tr",align:null},"30s"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait to buffer alerts of the same group before sending initially.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"5m"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait before sending an alert that has been added to a group of alerts for which an initial notification has already been sent.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Repeat Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"4h"),(0,o.kt)("td",{parentName:"tr",align:null},"How long to wait before re-sending a given alert that has already been sent.")))),(0,o.kt)("h3",{id:"matching"},"Matching"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Match")," field refers to a set of equality matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs to the Rancher UI, they correspond to the YAML in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"match:\n  [ <labelname>: <labelvalue>, ... ]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Match Regex")," field refers to a set of regex-matchers used to identify which alerts to send to a given Route based on labels defined on that alert. When you add key-value pairs in the Rancher UI, they correspond to the YAML in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"match_re:\n  [ <labelname>: <regex>, ... ]\n"))),(0,o.kt)(l.Z,{value:"Rancher v2.5.0-2.5.3",mdxType:"TabItem"},(0,o.kt)("p",null,"The Alertmanager must be configured in YAML, as shown in this ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/examples#alertmanager-config"},"example.")))))}h.isMDXComponent=!0}}]);