"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15090],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50464:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Locked Roles",weight:1129,aliases:["/rancher/v2.x/en/admin-settings/rbac/locked-roles/"]},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",title:"Locked Roles",description:"You can set roles to a status of locked. Locking roles prevent them from being assigned users in the future.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md",tags:[],version:"2.5",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Locked Roles",weight:1129,aliases:["/rancher/v2.x/en/admin-settings/rbac/locked-roles/"]},sidebar:"tutorialSidebar",previous:{title:"Custom Roles",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},next:{title:"Provisioning Drivers",permalink:"/v2.5/pages-for-subheaders/about-provisioning-drivers"}},u={},d=[{value:"Locking/Unlocking Roles",id:"lockingunlocking-roles",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can set roles to a status of ",(0,a.kt)("inlineCode",{parentName:"p"},"locked"),". Locking roles prevent them from being assigned users in the future."),(0,a.kt)("p",null,"Locked roles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cannot be assigned to users that don't already have it assigned.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Are not listed in the ",(0,a.kt)("strong",{parentName:"p"},"Member Roles")," drop-down when you are adding a user to a cluster or project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not affect users assigned the role before you lock the role. These users retain access that the role provides."),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("strong",{parentName:"p"},"Example:")," let's say your organization creates an internal policy that users assigned to a cluster are prohibited from creating new projects. It's your job to enforce this policy."),(0,a.kt)("p",{parentName:"li"},"  To enforce it, before you add new users to the cluster, you should lock the following roles: ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster Owner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster Member"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Projects"),". Then you could create a new custom role that includes the same permissions as a ",(0,a.kt)("strong",{parentName:"p"},"Cluster Member"),", except the ability to create projects. Then, you use this new custom role when adding users to a cluster."))),(0,a.kt)("p",null,"Roles can be locked by the following users:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any user assigned the ",(0,a.kt)("inlineCode",{parentName:"li"},"Administrator")," global permission."),(0,a.kt)("li",{parentName:"ul"},"Any user assigned the ",(0,a.kt)("inlineCode",{parentName:"li"},"Custom Users")," permission, along with the ",(0,a.kt)("inlineCode",{parentName:"li"},"Manage Roles")," role.")),(0,a.kt)("h2",{id:"lockingunlocking-roles"},"Locking/Unlocking Roles"),(0,a.kt)("p",null,"If you want to prevent a role from being assigned to users, you can set it to a status of ",(0,a.kt)("inlineCode",{parentName:"p"},"locked"),"."),(0,a.kt)("p",null,"You can lock roles in two contexts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you're ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"adding a custom role"),"."),(0,a.kt)("li",{parentName:"ul"},"When you editing an existing role (see below).")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,a.kt)("strong",{parentName:"p"},"Security")," > ",(0,a.kt)("strong",{parentName:"p"},"Roles"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the role that you want to lock (or unlock), select ",(0,a.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,a.kt)("strong",{parentName:"p"},"Edit"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Locked")," option, choose the ",(0,a.kt)("strong",{parentName:"p"},"Yes")," or ",(0,a.kt)("strong",{parentName:"p"},"No")," radio button. Then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))))}m.isMDXComponent=!0}}]);