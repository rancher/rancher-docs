"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[2786],{

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

/***/ 89375:
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
    title: 'Install/Upgrade Rancher with RancherD'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "pages-for-subheaders/install-rancher-on-linux",
    "id": "version-2.5/pages-for-subheaders/install-rancher-on-linux",
    "title": "Install/Upgrade Rancher with RancherD",
    "description": "Note: RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.",
    "source": "@site/versioned_docs/version-2.5/pages-for-subheaders/install-rancher-on-linux.md",
    "sourceDirName": "pages-for-subheaders",
    "slug": "/pages-for-subheaders/install-rancher-on-linux",
    "permalink": "/v2.5/pages-for-subheaders/install-rancher-on-linux",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/install-rancher-on-linux.md",
    "tags": [],
    "version": "2.5",
    "lastUpdatedAt": 1667002159,
    "formattedLastUpdatedAt": "Oct 29, 2022",
    "frontMatter": {
        "title": "Install/Upgrade Rancher with RancherD"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "3. Install Rancher",
        "permalink": "/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"
    },
    "next": {
        "title": "Rollbacks",
        "permalink": "/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd"
    }
};
const assets = {};
const toc = [
    {
        value: 'About RancherD Installs',
        id: 'about-rancherd-installs',
        level: 2
    },
    {
        value: 'Prerequisites',
        id: 'prerequisites',
        level: 2
    },
    {
        value: 'Node Requirements',
        id: 'node-requirements',
        level: 3
    },
    {
        value: 'Root Access',
        id: 'root-access',
        level: 3
    },
    {
        value: 'Fixed Registration Address',
        id: 'fixed-registration-address',
        level: 3
    },
    {
        value: 'Part I: Installing Rancher',
        id: 'part-i-installing-rancher',
        level: 2
    },
    {
        value: '1. Set up Configurations',
        id: '1-set-up-configurations',
        level: 3
    },
    {
        value: '2. Launch the first server node',
        id: '2-launch-the-first-server-node',
        level: 3
    },
    {
        value: '3. Set up the kubeconfig file with kubectl',
        id: '3-set-up-the-kubeconfig-file-with-kubectl',
        level: 3
    },
    {
        value: '4. Verify that Rancher is installed on the Kubernetes cluster',
        id: '4-verify-that-rancher-is-installed-on-the-kubernetes-cluster',
        level: 3
    },
    {
        value: '5. Set the initial Rancher password',
        id: '5-set-the-initial-rancher-password',
        level: 3
    },
    {
        value: 'Part II: High Availability',
        id: 'part-ii-high-availability',
        level: 2
    },
    {
        value: '1. Configure the fixed registration address on a new node',
        id: '1-configure-the-fixed-registration-address-on-a-new-node',
        level: 3
    },
    {
        value: '2. Launch an additional server node',
        id: '2-launch-an-additional-server-node',
        level: 3
    },
    {
        value: '3. Repeat',
        id: '3-repeat',
        level: 3
    },
    {
        value: 'Upgrades',
        id: 'upgrades',
        level: 2
    },
    {
        value: 'Configuration',
        id: 'configuration',
        level: 2
    },
    {
        value: 'Uninstall',
        id: 'uninstall',
        level: 2
    },
    {
        value: 'RKE2 Documentation',
        id: 'rke2-documentation',
        level: 2
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Note:`), ` RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `We are excited to introduce a new, simpler way to install Rancher called RancherD.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RancherD is a single binary that first launches an RKE2 Kubernetes cluster, then installs the Rancher server Helm chart on the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#about-rancherd-installs"
    }, `About RancherD Installs`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#prerequisites"
    }, `Prerequisites`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#part-i-installing-rancher"
    }, `Part I: Installing Rancher`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#part-ii-high-availability"
    }, `Part II: High Availability`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#upgrades"
    }, `Upgrades`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#configuration"
    }, `Configuration`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#uninstall"
    }, `Uninstall`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#rke2-documentation"
    }, `RKE2 Documentation`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "about-rancherd-installs"
    }, `About RancherD Installs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When RancherD is launched on a host, it first installs an RKE2 Kubernetes cluster, then deploys Rancher on the cluster as a Kubernetes daemonset.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In both the RancherD install and the Helm CLI install, Rancher is installed as a Helm chart on a Kubernetes cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Configuration and upgrading are also simplified with RancherD. When you upgrade the RancherD binary, both the Kubernetes cluster and the Rancher Helm chart are upgraded.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Part I of these instructions, you'll learn how to launch RancherD on a single node. The result of following the steps in Part I is a single-node `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.rke2.io/"
    }, `RKE2`), ` Kubernetes cluster with the Rancher server installed. This cluster can easily become high availability later. If Rancher only needs to manage the local Kubernetes cluster, the installation is complete.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Part II explains how to convert the single-node Rancher installation into a high-availability installation. If the Rancher server will manage downstream Kubernetes clusters, it is important to follow these steps. A discussion of recommended architecture for highly available Rancher deployments can be found in our `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/pages-for-subheaders/rancher-server"
    }, `Best Practices Guide.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "prerequisites"
    }, `Prerequisites`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "node-requirements"
    }, `Node Requirements`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RancherD must be launched on a Linux OS. At this time, only OSes that leverage systemd are supported.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The Linux node needs to fulfill the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/pages-for-subheaders/installation-requirements"
    }, `installation requirements`), ` for hardware and networking. Docker is not required for RancherD installs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To install RancherD on SELinux Enforcing CentOS 8 nodes or RHEL 8 nodes, some `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/pages-for-subheaders/installation-requirements#rancherd-on-selinux-enforcing-centos-8-or-rhel-8-nodes"
    }, `additional steps`), ` are required.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "root-access"
    }, `Root Access`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Before running the installation commands, you will need to log in as root:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `sudo -s
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "fixed-registration-address"
    }, `Fixed Registration Address`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A fixed registration address is recommended for single-node installs and required for high-availability installs with RancherD.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The fixed registration address is an endpoint that is used for two purposes:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `To access the Kubernetes API. So you can, for example, modify your `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"
    }, `kubeconfig`), ` file to point to it instead of a specific node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `To add new nodes to the Kubernetes cluster. To add nodes to the cluster later, you will run a command on the node that will specify the fixed registration address of the cluster.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you are installing Rancher on a single node, the fixed registration address makes it possible to add more nodes to the cluster so that you can convert the single-node install to a high-availability install without causing downtime to the cluster. If you don't set up this address when installing the single-node Kubernetes cluster, you would need to re-run the installation script with a fixed registration address in order to add new nodes to the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The fixed registration can be the IP or hostname of any of the server nodes, but in many cases those may change over time as nodes are created and destroyed. Therefore, you should have a stable endpoint in front of the server nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This endpoint can be set up using any number of approaches, such as:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `A layer 4 (TCP) load balancer`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Round-robin DNS`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Virtual or elastic IP addresses`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following should be taken into consideration when configuring the load balancer or other endpoint:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The RancherD server process listens on port 9345 for new nodes to register.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The Kubernetes API is served on port 6443, as normal.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `In RancherD installs, the Rancher UI is served on port 8443 by default. (This is different from Helm chart installs, where port 443 is used by default.)`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "part-i-installing-rancher"
    }, `Part I: Installing Rancher`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1-set-up-configurations"
    }, `1. Set up Configurations`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To avoid certificate errors with the fixed registration address, you should launch the server with the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `tls-san`), ` parameter set. This parameter should refer to your fixed registration address.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This option adds an additional hostname or IP as a Subject Alternative Name in the server's TLS cert, and it can be specified as a list if you would like to access the Kubernetes cluster via both the IP and the hostname.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Create the RancherD config file at `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/etc/rancher/rke2/config.yaml`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `token: my-shared-secret
tls-san:
  - my-fixed-registration-address.com
  - another-kubernetes-domain.com
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The first server node establishes the secret token that other nodes would register with if they are added to the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you do not specify a pre-shared secret, RancherD will generate one and place it at `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/var/lib/rancher/rke2/server/node-token`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To specify your own pre-shared secret as the token, set the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `token`), ` argument on startup.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Installing Rancher this way will use Rancher-generated certificates. To use your own self-signed or trusted certificates, refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rancherd-configuration-reference#certificates-for-the-rancher-server"
    }, `configuration guide.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For information on customizing the RancherD Helm chart values.yaml, refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rancherd-configuration-reference#customizing-the-rancherd-helm-chart"
    }, `this section.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "2-launch-the-first-server-node"
    }, `2. Launch the first server node`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Run the RancherD installer:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `curl -sfL https://get.rancher.io | sh -
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The RancherD version can be specified using the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `INSTALL_RANCHERD_VERSION`), ` environment variable:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `curl -sfL https://get.rancher.io | INSTALL_RANCHERD_VERSION=v2.5.4-rc6 sh -
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once installed, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rancherd`), ` binary will be on your PATH. You can check out its help text like this:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rancherd --help
NAME:
   rancherd - Rancher Kubernetes Engine 2
...
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Next, launch RancherD:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `systemctl enable rancherd-server.service
systemctl start rancherd-server.service
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When RancherD launches, it installs an RKE2 Kubernetes cluster. Use the following command to see the logs of the Kubernetes cluster as it comes up:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `journalctl -eu rancherd-server -f
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "3-set-up-the-kubeconfig-file-with-kubectl"
    }, `3. Set up the kubeconfig file with kubectl`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once the Kubernetes cluster is up, set up RancherD’s kubeconfig file and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `export KUBECONFIG=/etc/rancher/rke2/rke2.yaml PATH=$PATH:/var/lib/rancher/rke2/bin
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "4-verify-that-rancher-is-installed-on-the-kubernetes-cluster"
    }, `4. Verify that Rancher is installed on the Kubernetes cluster`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Now, you can start issuing `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl`), ` commands. Use the following commands to verify that Rancher is deployed as a daemonset on the cluster:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `kubectl get daemonset rancher -n cattle-system
kubectl get pod -n cattle-system
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you watch the pods, you will see the following pods installed:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `helm-operation`), ` pods in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `cattle-system`), ` namespace`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rancher`), ` pod and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rancher-webhook`), ` pod in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `cattle-system`), ` namespace`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `fleet-agent`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `fleet-controller`), `, and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `gitjob`), ` pod in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `fleet-system`), ` namespace`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rancher-operator`), ` pod in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rancher-operator-system`), ` namespace`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "5-set-the-initial-rancher-password"
    }, `5. Set the initial Rancher password`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rancher`), ` pod is up and running, run the following:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rancherd reset-admin
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This will give you the URL, username and password needed to log into Rancher. Follow that URL, plug in the credentials, and you’re up and running with Rancher!`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If Rancher will only manage the local Kubernetes cluster, the installation is complete.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "part-ii-high-availability"
    }, `Part II: High Availability`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you plan to use the Rancher server to manage downstream Kubernetes clusters, Rancher needs to be highly available. In these steps, you will add more nodes to achieve a high-availability cluster. Since Rancher is running as a daemonset, it will automatically launch on the nodes you add.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `An odd number of nodes is required because the etcd cluster, which contains the cluster data, needs a majority of live nodes to avoid losing quorum. A loss of quorum could require the cluster to be restored from backup. Therefore, we recommend using three nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When following these steps, you should still be logged in as root.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1-configure-the-fixed-registration-address-on-a-new-node"
    }, `1. Configure the fixed registration address on a new node`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Additional server nodes are launched much like the first, except that you must specify the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `server`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `token`), ` parameters so that they can successfully connect to the initial server node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Here is an example of what the RancherD config file would look like for additional server nodes. By default, this config file is expected to be located at `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/etc/rancher/rke2/config.yaml`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `server: https://my-fixed-registration-address.com:9345
token: my-shared-secret
tls-san:
  - my-fixed-registration-address.com
  - another-kubernetes-domain.com
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "2-launch-an-additional-server-node"
    }, `2. Launch an additional server node`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Run the installer on the new node:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `curl -sfL https://get.rancher.io | sh -
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This will download RancherD and install it as a systemd unit on your host.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Next, launch RancherD:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `systemctl enable rancherd-server.service
systemctl start rancherd-server.service
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "3-repeat"
    }, `3. Repeat`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Repeat steps one and two for another Linux node, bringing the number of nodes in the cluster to three.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Rancher is highly available and the installation is complete.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "upgrades"
    }, `Upgrades`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For information on upgrades and rollbacks, refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd"
    }, `this page.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "configuration"
    }, `Configuration`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For information on how to configure certificates, node taints, Rancher Helm chart options, or RancherD CLI options, refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rancherd-configuration-reference"
    }, `configuration reference.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "uninstall"
    }, `Uninstall`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To uninstall RancherD from your system, run the command below. This will shut down the process, remove the RancherD binary, and clean up files used by RancherD.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rancherd-uninstall.sh
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "rke2-documentation"
    }, `RKE2 Documentation`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information on RKE2, the Kubernetes distribution used to provision the underlying cluster, refer to the documentation `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.rke2.io/"
    }, `here.`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);