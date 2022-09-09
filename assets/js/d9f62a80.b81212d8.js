"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"Configuring OpenLDAP",weight:1113},s=void 0,l={unversionedId:"pages-for-subheaders/configure-openldap",id:"pages-for-subheaders/configure-openldap",title:"Configuring OpenLDAP",description:"If your organization uses LDAP for user authentication, you can configure Rancher to communicate with an OpenLDAP server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the organisation's central user repository, while allowing end-users to authenticate with their LDAP credentials when logging in to the Rancher UI.",source:"@site/docs/pages-for-subheaders/configure-openldap.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-openldap",permalink:"/pages-for-subheaders/configure-openldap",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configure-openldap.md",tags:[],version:"current",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Configuring OpenLDAP",weight:1113},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/reference-guides/backup-restore-configuration/examples"},next:{title:"OpenLDAP Configuration Reference",permalink:"/reference-guides/configure-openldap/openldap-config-reference"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure OpenLDAP in Rancher",id:"configure-openldap-in-rancher",level:2},{value:"Test Authentication",id:"test-authentication",level:3},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses LDAP for user authentication, you can configure Rancher to communicate with an OpenLDAP server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the organisation's central user repository, while allowing end-users to authenticate with their LDAP credentials when logging in to the Rancher UI. "),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Rancher must be configured with a LDAP bind account (aka service account) to search and retrieve LDAP entries pertaining to users and groups that should have access. It is recommended to not use an administrator account or personal account for this purpose and instead create a dedicated account in OpenLDAP with read-only access to users and groups under the configured search base (see below)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Using TLS?")),(0,i.kt)("p",{parentName:"blockquote"},"If the certificate used by the OpenLDAP server is self-signed or not from a recognised certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,i.kt)("h2",{id:"configure-openldap-in-rancher"},"Configure OpenLDAP in Rancher"),(0,i.kt)("p",null,"Configure the settings for the OpenLDAP server, groups and users. For help filling out each field, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/configure-openldap/openldap-config-reference"},"configuration reference.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before you proceed with the configuration, please familiarise yourself with the concepts of ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OpenLDAP"),". Fill out the ",(0,i.kt)("strong",{parentName:"li"},"Configure an OpenLDAP server")," form."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enable"),".")),(0,i.kt)("h3",{id:"test-authentication"},"Test Authentication"),(0,i.kt)("p",null,"Once you have completed the configuration, proceed by testing  the connection to the OpenLDAP server. Authentication with OpenLDAP will be enabled implicitly if the test is successful."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The OpenLDAP user pertaining to the credentials entered in this step will be mapped to the local principal account and assigned administrator privileges in Rancher. You should therefore make a conscious decision on which LDAP account you use to perform this step."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"username")," and ",(0,i.kt)("strong",{parentName:"li"},"password")," for the OpenLDAP account that should be mapped to the local principal account."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Authenticate With OpenLDAP")," to test the OpenLDAP connection and finalise the setup.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenLDAP authentication is configured."),(0,i.kt)("li",{parentName:"ul"},"The LDAP user pertaining to the entered credentials is mapped to the local principal (administrative) account.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will still be able to login using the locally configured ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," account and password in case of a disruption of LDAP services."))),(0,i.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,i.kt)("p",null,"If you are experiencing issues while testing the connection to the OpenLDAP server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}h.isMDXComponent=!0}}]);