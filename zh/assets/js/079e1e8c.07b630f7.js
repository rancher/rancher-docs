"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[858],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 58020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {
    title: '3. Expose Your Services'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",
    "id": "version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",
    "title": "3. Expose Your Services",
    "description": "In testing environments, you usually need to route external traffic to your cluster containers by using an unadvertised IP and port number, providing users access to their apps. You can accomplish this goal using port mapping, which exposes a workload (i.e., service) publicly over a specific port, provided you know your node IP address(es). You can either map a port using HostPorts (which exposes a service on a specified port on a single node) or NodePorts (which exposes a service on all nodes on a single port).",
    "source": "@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services.md",
    "sourceDirName": "how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",
    "slug": "/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",
    "permalink": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services.md",
    "tags": [],
    "version": "2.0-2.4",
    "lastUpdatedAt": 1663953084,
    "formattedLastUpdatedAt": "2022年9月23日",
    "frontMatter": {
        "title": "3. Expose Your Services"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "2. Migrate Your Services",
        "permalink": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"
    },
    "next": {
        "title": "4. Configure Health Checks",
        "permalink": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps"
    }
};
const assets = {};
const toc = [
    {
        value: 'What&#39;s Different About Exposing Services in Rancher v2.x?',
        id: 'whats-different-about-exposing-services-in-rancher-v2x',
        level: 2
    },
    {
        value: 'HostPort',
        id: 'hostport',
        level: 2
    },
    {
        value: 'HostPort Pros',
        id: 'hostport-pros',
        level: 4
    },
    {
        value: 'HostPort Cons',
        id: 'hostport-cons',
        level: 4
    },
    {
        value: 'Setting HostPort',
        id: 'setting-hostport',
        level: 2
    },
    {
        value: 'NodePort',
        id: 'nodeport',
        level: 2
    },
    {
        value: 'NodePort Pros',
        id: 'nodeport-pros',
        level: 4
    },
    {
        value: 'NodePort Cons',
        id: 'nodeport-cons',
        level: 4
    },
    {
        value: 'Setting NodePort',
        id: 'setting-nodeport',
        level: 2
    },
    {
        value: 'Next: Configure Health Checks',
        id: 'next-configure-health-checks',
        level: 3
    }
];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components  } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In testing environments, you usually need to route external traffic to your cluster containers by using an unadvertised IP and port number, providing users access to their apps. You can accomplish this goal using port mapping, which exposes a workload (i.e., service) publicly over a specific port, provided you know your node IP address(es). You can either map a port using HostPorts (which exposes a service on a specified port on a single node) or NodePorts (which exposes a service on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `all`), ` nodes on a single port).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Use this document to correct workloads that list `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `ports`), ` in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `output.txt`), `. You can correct it by either setting a HostPort or a NodePort.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Resolve ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "ports"), " for the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "web"), " Workload"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Resolve Ports",
        src: (__webpack_require__(83797)/* ["default"] */ .Z),
        width: "830",
        height: "411"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "whats-different-about-exposing-services-in-rancher-v2x"
    }, `What's Different About Exposing Services in Rancher v2.x?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v1.6, we used the term `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `Port Mapping`), ` for exposing an IP address and port where your you and your users can access a service.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, the mechanisms and terms for service exposure have changed and expanded. You now have two port mapping options: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `HostPorts`), ` (which is most synonymous with v1.6 port mapping, allows you to expose your app at a single IP and port) and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `NodePorts`), ` (which allows you to map ports on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `all`), ` of your cluster nodes, not just one).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Unfortunately, port mapping cannot be parsed by the migration-tools CLI. If the services you're migrating from v1.6 to v2.x have port mappings set, you'll have to either set a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#hostport"
    }, `HostPort`), ` or `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#nodeport"
    }, `NodePort`), ` as a replacement.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "hostport"
    }, `HostPort`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `HostPort`), ` is a port exposed to the public on a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `specific node`), ` running one or more pod. Traffic to the node and the exposed port (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `<HOST_IP>:<HOSTPORT>`), `) are routed to the requested container's private port. Using a HostPort for a Kubernetes pod in Rancher v2.x is synonymous with creating a public port mapping for a container in Rancher v1.6.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In the following diagram, a user is trying to access an instance of Nginx, which is running within a pod on port 80. However, the Nginx deployment is assigned a HostPort of 9890. The user can connect to this pod by browsing to its host IP address, followed by the HostPort in use (9890 in case).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "HostPort Diagram",
        src: (__webpack_require__(67303)/* ["default"] */ .Z),
        width: "657",
        height: "386"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "hostport-pros"
    }, `HostPort Pros`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Any port available on the host can be exposed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Configuration is simple, and the HostPort is set directly in the Kubernetes pod specifications. Unlike NodePort, no other objects need to be created to expose your app.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "hostport-cons"
    }, `HostPort Cons`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Limits the scheduling options for your pod, as only hosts with vacancies for your chosen port can be used.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `If the scale of your workload is larger than the number of nodes in your Kubernetes cluster, the deployment fails.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Any two workloads that specify the same HostPort cannot be deployed to the same node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `If the host where your pods are running becomes unavailable, Kubernetes reschedules the pods to different nodes. Thus, if the IP address for your workload changes, external clients of your application will lose access to the pod. The same thing happens when you restart your pods—Kubernetes reschedules them to a different node.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "setting-hostport"
    }, `Setting HostPort`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can set a HostPort for migrated workloads (i.e., services) using the Rancher v2.x UI. To add a HostPort, browse to the project containing your workloads, and edit each workload that you want to expose, as shown below. Map the port that your service container exposes to the HostPort exposed on your target node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For example, for the web-deployment.yml file parsed from v1.6 that we've been using as a sample, we would edit its Kubernetes manifest, set the publish the port that the container uses, and then declare a HostPort listening on the port of your choice (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `9890`), `) as shown below. You can then access your workload by clicking the link created in the Rancher UI.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Port Mapping: Setting HostPort"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(44019)/* ["default"] */ .Z),
        width: "1920",
        height: "1080"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "nodeport"
    }, `NodePort`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `NodePort`), ` is a port that's open to the public `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `on each`), ` of your cluster nodes. When the NodePort receives a request for any of the cluster hosts' IP address for the set NodePort value, NodePort (which is a Kubernetes service) routes traffic to a specific pod, regardless of what node it's running on. NodePort provides a static endpoint where external requests can reliably reach your pods.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `NodePorts help you circumvent an IP address shortcoming. Although pods can be reached by their IP addresses, they are disposable by nature. Pods are routinely destroyed and recreated, getting a new IP address with each replication. Therefore, IP addresses are not a reliable way to access your pods. NodePorts help you around this issue by providing a static service where they can always be reached.  Even if your pods change their IP addresses, external clients dependent on them can continue accessing them without disruption, all without any knowledge of the pod re-creation occurring on the back end.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In the following diagram, a user is trying to connect to an instance of Nginx running in a Kubernetes cluster managed by Rancher. Although he knows what NodePort Nginx is operating on (30216 in this case), he does not know the IP address of the specific node that the pod is running on. However, with NodePort enabled, he can connect to the pod using the IP address for `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `any`), ` node in the cluster. Kubeproxy will forward the request to the correct node and pod.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "NodePort Diagram",
        src: (__webpack_require__(84485)/* ["default"] */ .Z),
        width: "774",
        height: "500"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `NodePorts are available within your Kubernetes cluster on an internal IP. If you want to expose pods external to the cluster, use NodePorts in conjunction with an external load balancer. Traffic requests from outside your cluster for `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `<NodeIP>:<NodePort>`), ` are directed to the workload. The `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `<NodeIP>`), ` can be the IP address of any node in your Kubernetes cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "nodeport-pros"
    }, `NodePort Pros`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Creating a NodePort service provides a static public endpoint to your workload pods. There, even if the pods are destroyed, Kubernetes can deploy the workload anywhere in the cluster without altering the public endpoint.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The scale of the pods is not limited by the number of nodes in the cluster. NodePort allows decoupling of public access from the number and location of pods.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "nodeport-cons"
    }, `NodePort Cons`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `When a NodePort is used, that `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `<NodeIP>:<NodePort>`), ` is reserved in your Kubernetes cluster on all nodes, even if the workload is never deployed to the other nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `You can only specify a port from a configurable range (by default, it is `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `30000-32767`), `).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `An extra Kubernetes object (a Kubernetes service of type NodePort) is needed to expose your workload. Thus, finding out how your application is exposed is not straightforward.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "setting-nodeport"
    }, `Setting NodePort`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can set a NodePort for migrated workloads (i.e., services) using the Rancher v2.x UI. To add a NodePort, browse to the project containing your workloads, and edit each workload that you want to expose, as shown below. Map the port that your service container exposes to a NodePort, which you'll be able to access from each cluster node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For example, for the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `web-deployment.yml`), ` file parsed from v1.6 that we've been using as a sample, we would edit its Kubernetes manifest, set the publish the port that the container uses, and then declare a NodePort. You can then access your workload by clicking the link created in the Rancher UI.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Note:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `If you set a NodePort without giving it a value, Rancher chooses a port at random from the following range: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `30000-32767`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `If you manually set a NodePort, you must assign it a value within the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `30000-32767`), ` range.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Port Mapping: Setting NodePort"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(28881)/* ["default"] */ .Z),
        width: "1920",
        height: "1080"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "next-configure-health-checks"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "h3",
        "href": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps"
    }, `Next: Configure Health Checks`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 67303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hostPort-8160fcf1fedbdd6e6b4e91709d663c14.svg");

/***/ }),

/***/ 84485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodePort-eb87ddea6cb90aa0eca1310463c98d1e.svg");

/***/ }),

/***/ 83797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/resolve-ports-d7da66c5d70c92cf72bb63b078911bba.png");

/***/ }),

/***/ 44019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/set-hostport-cd2c0cb26e1ba39722acf189f1f3a117.gif");

/***/ }),

/***/ 28881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/set-nodeport-00a718c5350319aa977bc32266a0815b.gif");

/***/ })

}]);