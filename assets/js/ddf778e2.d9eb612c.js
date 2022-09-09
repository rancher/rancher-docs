"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7070],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,h=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74547:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Creating an AKS Cluster",shortTitle:"Azure Kubernetes Service",weight:2115,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-azure-container-service/"]},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",title:"Creating an AKS Cluster",description:"You can use Rancher to create a cluster hosted in Microsoft Azure Kubernetes Service (AKS).",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Creating an AKS Cluster",shortTitle:"Azure Kubernetes Service",weight:2115,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-azure-container-service/"]},sidebar:"tutorialSidebar",previous:{title:"Creating a GKE Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"},next:{title:"Creating an Aliyun ACK Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"}},c={},u=[{value:"Prerequisites in Microsoft Azure",id:"prerequisites-in-microsoft-azure",level:2},{value:"Setting Up the Service Principal with the Azure Command Line Tool",id:"setting-up-the-service-principal-with-the-azure-command-line-tool",level:3},{value:"Setting Up the Service Principal from the Azure Portal",id:"setting-up-the-service-principal-from-the-azure-portal",level:3},{value:"Create the AKS Cluster",id:"create-the-aks-cluster",level:2}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use Rancher to create a cluster hosted in Microsoft Azure Kubernetes Service (AKS)."),(0,i.kt)("h2",{id:"prerequisites-in-microsoft-azure"},"Prerequisites in Microsoft Azure"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to AKS will incur charges.")),(0,i.kt)("p",null,"To interact with Azure APIs, an AKS cluster requires an Azure Active Directory (AD) service principal. The service principal is needed to dynamically create and manage other Azure resources, and it provides credentials for your cluster to communicate with AKS. For more information about the service principal, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-service-principal"},"AKS documentation"),"."),(0,i.kt)("p",null,"Before creating the service principal, you need to obtain the following information from the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Microsoft Azure Portal"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your subscription ID"),(0,i.kt)("li",{parentName:"ul"},"Your tenant ID"),(0,i.kt)("li",{parentName:"ul"},"An app ID (also called a client ID)"),(0,i.kt)("li",{parentName:"ul"},"Client secret"),(0,i.kt)("li",{parentName:"ul"},"A resource group")),(0,i.kt)("p",null,"The below sections describe how to set up these prerequisites using either the Azure command line tool or the Azure portal."),(0,i.kt)("h3",{id:"setting-up-the-service-principal-with-the-azure-command-line-tool"},"Setting Up the Service Principal with the Azure Command Line Tool"),(0,i.kt)("p",null,"You can create the service principal by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"az ad sp create-for-rbac --skip-assignment\n")),(0,i.kt)("p",null,"The result should show information about the new service principal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "appId": "xxxx--xxx",\n  "displayName": "<SERVICE-PRINCIPAL-NAME>",\n  "name": "http://<SERVICE-PRINCIPAL-NAME>",\n  "password": "<SECRET>",\n  "tenant": "<TENANT NAME>"\n}\n')),(0,i.kt)("p",null,"You also need to add roles to the service principal so that it has privileges for communication with the AKS API. It also needs access to create and list virtual networks."),(0,i.kt)("p",null,"Below is an example command for assigning the Contributor role to a service principal. Contributors can manage anything on AKS but cannot give access to others:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"az role assignment create \\\n  --assignee $appId \\\n  --scope /subscriptions/$<SUBSCRIPTION-ID>/resourceGroups/$<GROUP> \\\n  --role Contributor\n")),(0,i.kt)("p",null,"You can also create the service principal and give it Contributor privileges by combining the two commands into one. In this command, the scope needs to provide a full path to an Azure resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"az ad sp create-for-rbac \\\n  --scope /subscriptions/$<SUBSCRIPTION-ID>/resourceGroups/$<GROUP> \\\n  --role Contributor\n")),(0,i.kt)("h3",{id:"setting-up-the-service-principal-from-the-azure-portal"},"Setting Up the Service Principal from the Azure Portal"),(0,i.kt)("p",null,"You can also follow these instructions to set up a service principal and give it role-based access from the Azure Portal."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Microsoft Azure Portal ",(0,i.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"home page"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"App registrations."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"New registration."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a name. This will be the name of your service principal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optional: Choose which accounts can use the service principal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Register."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You should now see the name of your service principal under ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory > App registrations.")," ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the name of your service principal. Take note of the tenant ID and application ID (also called app ID or client ID) so that you can use it when provisioning your AKS cluster. Then click ",(0,i.kt)("strong",{parentName:"p"},"Certificates & secrets."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"New client secret."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a short description, pick an expiration time, and click ",(0,i.kt)("strong",{parentName:"p"},"Add.")," Take note of the client secret so that you can use it when provisioning the AKS cluster."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," You have created a service principal and you should be able to see it listed in the ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory")," section under ",(0,i.kt)("strong",{parentName:"p"},"App registrations.")," You still need to give the service principal access to AKS. "),(0,i.kt)("p",null,"To give role-based access to your service principal,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"All Services")," in the left navigation bar. Then click ",(0,i.kt)("strong",{parentName:"p"},"Subscriptions."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the name of the subscription that you want to associate with your Kubernetes cluster. Take note of the subscription ID so that you can use it when provisioning your AKS cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Access Control (IAM)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Add role assignment")," section, click ",(0,i.kt)("strong",{parentName:"p"},"Add."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Role")," field, select a role that will have access to AKS. For example, you can use the ",(0,i.kt)("strong",{parentName:"p"},"Contributor")," role, which has permission to manage everything except for giving access to other users.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Assign access to")," field, select ",(0,i.kt)("strong",{parentName:"p"},"Azure AD user, group, or service principal."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Select")," field, select the name of your service principal and click ",(0,i.kt)("strong",{parentName:"p"},"Save.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your service principal now has access to AKS."),(0,i.kt)("h2",{id:"create-the-aks-cluster"},"Create the AKS Cluster"),(0,i.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Azure Kubernetes Service"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use your subscription ID, tenant ID, app ID, and client secret to give your cluster access to AKS. If you don't have all of that information, you can retrieve it using these instructions:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"App ID and tenant ID:")," To get the app ID and tenant ID, you can go to the Azure Portal, then click ",(0,i.kt)("strong",{parentName:"li"},"Azure Active Directory"),", then click ",(0,i.kt)("strong",{parentName:"li"},"App registrations,")," then click the name of the service principal. The app ID and tenant ID are both on the app registration detail page. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client secret:")," If you didn't copy the client secret when creating the service principal, you can get a new one if you go to the app registration detail page, then click ",(0,i.kt)("strong",{parentName:"li"},"Certificates & secrets"),", then click ",(0,i.kt)("strong",{parentName:"li"},"New client secret.")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subscription ID:")," You can get the subscription ID is available in the portal from ",(0,i.kt)("strong",{parentName:"li"},"All services > Subscriptions."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("strong",{parentName:"p"},"Cluster Options")," to choose the version of Kubernetes, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,i.kt)("strong",{parentName:"p"},"Show advanced options."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Account Access")," form using the output from your Service Principal. This information is used to authenticate with Azure.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("strong",{parentName:"p"},"Nodes")," to provision each node in your cluster and choose a geographical region."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[Microsoft Documentation: How to create and use an SSH public and private key pair](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys)\n")),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review your options to confirm they're correct. Then click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," "),(0,i.kt)("p",null,"Your cluster is created and assigned a state of ",(0,i.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,i.kt)("p",null,"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"p"},"Active.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))}k.isMDXComponent=!0}}]);