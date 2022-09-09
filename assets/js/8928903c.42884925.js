"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55321],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Migration Tools CLI Reference",weight:100,aliases:["/rancher/v2.x/en/v1.6-migration/run-migration-tool/migration-tools-ref/"]},s=void 0,p={unversionedId:"reference-guides/v1.6-migration/migration-tools-cli-reference",id:"version-2.0-2.4/reference-guides/v1.6-migration/migration-tools-cli-reference",title:"Migration Tools CLI Reference",description:"The migration-tools CLI includes multiple commands and options to assist your migration from Rancher v1.6 to Rancher v2.x.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/v1.6-migration/migration-tools-cli-reference.md",sourceDirName:"reference-guides/v1.6-migration",slug:"/reference-guides/v1.6-migration/migration-tools-cli-reference",permalink:"/v2.0-v2.4/reference-guides/v1.6-migration/migration-tools-cli-reference",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/v1.6-migration/migration-tools-cli-reference.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662761221,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Migration Tools CLI Reference",weight:100,aliases:["/rancher/v2.x/en/v1.6-migration/run-migration-tool/migration-tools-ref/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher CVEs and Resolutions",permalink:"/v2.0-v2.4/reference-guides/rancher-security/security-advisories-and-cves"},next:{title:"Explanations",permalink:"/v2.0-v2.4/explanations"}},m={},d=[{value:"Download",id:"download",level:2},{value:"Usage",id:"usage",level:2},{value:"Migration Tools Global Options",id:"migration-tools-global-options",level:2},{value:"Commands and Command Options",id:"commands-and-command-options",level:2},{value:"Migration-Tools Export Reference",id:"migration-tools-export-reference",level:3},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Migration-Tools Parse Reference",id:"migration-tools-parse-reference",level:3},{value:"Options",id:"options-1",level:4},{value:"Subcommands",id:"subcommands",level:4},{value:"Usage",id:"usage-2",level:4}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The migration-tools CLI includes multiple commands and options to assist your migration from Rancher v1.6 to Rancher v2.x."),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"The migration-tools CLI for your platform can be downloaded from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/migration-tools/releases"},"GitHub releases page"),". The tool is available for Linux, Mac, and Windows platforms."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"migration-tools [global options] command [command options] [arguments...]\n")),(0,o.kt)("h2",{id:"migration-tools-global-options"},"Migration Tools Global Options"),(0,o.kt)("p",null,"The migration-tools CLI includes a handful of global options."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Global Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--debug")),(0,o.kt)("td",{parentName:"tr",align:null},"Enables debug logging.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--log <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null},"Outputs logs to the path you enter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--help"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"-h")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays a list of all commands available.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--version"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"-v")),(0,o.kt)("td",{parentName:"tr",align:null},"Prints the version of migration-tools CLI in use.")))),(0,o.kt)("h2",{id:"commands-and-command-options"},"Commands and Command Options"),(0,o.kt)("h3",{id:"migration-tools-export-reference"},"Migration-Tools Export Reference"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"migration-tools export")," command exports all stacks from your Rancher v1.6 server into Compose files."),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--url <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher API endpoint URL (",(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_URL>"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--access-key <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher API access key. Using an account API key exports all stacks from all cattle environments (",(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_ACCESS_KEY>"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--secret-key <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher API secret key associated with the access key. (",(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_SECRET_KEY>"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--export-dir <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Base directory that Compose files export to under sub-directories created for each environment/stack (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"Export"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--all"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"--a")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Export all stacks. Using this flag exports any stack in a state of inactive, stopped, or removing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--system"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"--s")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Export system and infrastructure stacks.")))),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,"Execute the following command, replacing each placeholder with your values. The access key and secret key are Account API keys, which will allow you to export from all Cattle environments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"migration-tools export --url <RANCHER_URL> --access-key <RANCHER_ACCESS_KEY> --secret-key <RANCHER_SECRET_KEY> --export-dir <EXPORT_DIR>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The migration-tools CLI exports Compose files for each stack in every Cattle environments in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--export-dir")," directory. If you omitted this option, the files are saved to your current directory."),(0,o.kt)("h3",{id:"migration-tools-parse-reference"},"Migration-Tools Parse Reference"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"migration-tools parse")," command parses the Compose files for a stack and uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kompose"},"Kompose")," to generate an equivalent Kubernetes manifest. It also outputs an ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt")," file, which lists all the constructs that will need manual intervention in order to be converted to Kubernetes."),(0,o.kt)("h4",{id:"options-1"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--docker-file <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Parses Docker Compose file to output Kubernetes manifest(default: ",(0,o.kt)("inlineCode",{parentName:"td"},"docker-compose.yml"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--output-file <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Name of file that outputs listing checks and advice for conversion (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"output.txt"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--rancher-file <VALUE>")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Parses Rancher Compose file to output Kubernetes manifest(default: ",(0,o.kt)("inlineCode",{parentName:"td"},"rancher-compose.yml"),")")))),(0,o.kt)("h4",{id:"subcommands"},"Subcommands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Subcommand"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"help"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"h")),(0,o.kt)("td",{parentName:"tr",align:null},"Shows a list of options available for use with preceding command.")))),(0,o.kt)("h4",{id:"usage-2"},"Usage"),(0,o.kt)("p",null,"Execute the following command, replacing each placeholder with the absolute path to your Stack's Compose files. For each stack, you'll have to re-run the command for each pair of Compose files that was exported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"migration-tools parse --docker-file <DOCKER_COMPOSE_ABSOLUTE_PATH> --rancher-file <RANCHER_COMPOSE_ABSOLUTE_PATH>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"--docker-file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--rancher-file")," options from your command, the migration-tools CLI checks its home directory for these Compose files.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The migration-tools CLI parses your Compose files and outputs Kubernetes manifest specs as well as an ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt")," file. For each service in the stack, a Kubernetes manifest is created and named the same as your service. The ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt")," file lists all constructs for each service in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," that requires special handling to be successfully migrated to Rancher v2.x. Each construct links to the relevant blog articles on how to implement it in Rancher v2.x."))}u.isMDXComponent=!0}}]);