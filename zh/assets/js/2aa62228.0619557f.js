"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[9644],{

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

/***/ 69255:
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
    title: '1. Prepare your Node(s)'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",
    "id": "version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",
    "title": "1. Prepare your Node(s)",
    "description": "This section is about how to prepare your node(s) to install Rancher for your air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy. There are tabs for either a high availability (recommended) or a Docker installation.",
    "source": "@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes.md",
    "sourceDirName": "getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2",
    "slug": "/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",
    "permalink": "/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes.md",
    "tags": [],
    "version": "2.0-2.4",
    "lastUpdatedAt": 1685050877,
    "formattedLastUpdatedAt": "2023年5月25日",
    "frontMatter": {
        "title": "1. Prepare your Node(s)"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Installing Rancher in an Air Gapped Environment with Helm 2",
        "permalink": "/zh/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"
    },
    "next": {
        "title": "2. Collect and Publish Images to your Private Registry",
        "permalink": "/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry"
    }
};
const assets = {};
const toc = [
    {
        value: 'Prerequisites',
        id: 'prerequisites',
        level: 2
    },
    {
        value: 'OS, Docker, Hardware, and Networking',
        id: 'os-docker-hardware-and-networking',
        level: 3
    },
    {
        value: 'Private Registry',
        id: 'private-registry',
        level: 3
    },
    {
        value: 'CLI Tools',
        id: 'cli-tools',
        level: 3
    },
    {
        value: 'OS, Docker, Hardware, and Networking',
        id: 'os-docker-hardware-and-networking-1',
        level: 3
    },
    {
        value: 'Private Registry',
        id: 'private-registry-1',
        level: 3
    },
    {
        value: 'Set up Infrastructure',
        id: 'set-up-infrastructure',
        level: 2
    },
    {
        value: 'Recommended Architecture',
        id: 'recommended-architecture',
        level: 3
    },
    {
        value: 'A. Provision three air gapped Linux hosts according to our requirements',
        id: 'a-provision-three-air-gapped-linux-hosts-according-to-our-requirements',
        level: 3
    },
    {
        value: 'B. Set up your Load Balancer',
        id: 'b-set-up-your-load-balancer',
        level: 3
    },
    {
        value: 'A. Provision a single, air gapped Linux host according to our Requirements',
        id: 'a-provision-a-single-air-gapped-linux-host-according-to-our-requirements',
        level: 3
    },
    {
        value: 'Next: Collect and Publish Images to your Private Registry',
        id: 'next-collect-and-publish-images-to-your-private-registry',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Tabs = makeShortcode("Tabs");
const TabItem = makeShortcode("TabItem");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This section is about how to prepare your node(s) to install Rancher for your air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy. There are `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `tabs`), ` for either a high availability (recommended) or a Docker installation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "prerequisites"
    }, `Prerequisites`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Kubernetes Install (Recommended)",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "os-docker-hardware-and-networking"
    }, `OS, Docker, Hardware, and Networking`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Make sure that your node(s) fulfill the general `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"
    }, `installation requirements.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "private-registry"
    }, `Private Registry`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing Docker images to your machines.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you need help with creating a private registry, please refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.docker.com/registry/"
    }, `Docker documentation`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "cli-tools"
    }, `CLI Tools`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following CLI tools are required for the Kubernetes Install. Make sure these tools are installed on your workstation and available in your `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `$PATH`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"
    }, `kubectl`), ` - Kubernetes command-line tool.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://rancher.com/docs/rke/latest/en/installation/"
    }, `rke`), ` - Rancher Kubernetes Engine, cli for building Kubernetes clusters.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://docs.helm.sh/using_helm/#installing-helm"
    }, `helm`), ` - Package management for Kubernetes. Refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"
    }, `Helm version requirements`), ` to choose a version of Helm to install Rancher.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Docker Install",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "os-docker-hardware-and-networking-1"
    }, `OS, Docker, Hardware, and Networking`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Make sure that your node(s) fulfill the general `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"
    }, `installation requirements.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "private-registry-1"
    }, `Private Registry`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing Docker images to your machines.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you need help with creating a private registry, please refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.docker.com/registry/"
    }, `Docker documentation`), `.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "set-up-infrastructure"
    }, `Set up Infrastructure`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Kubernetes Install (Recommended)",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher recommends installing Rancher on a Kubernetes cluster. A highly available Kubernetes install is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "recommended-architecture"
    }, `Recommended Architecture`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `DNS for Rancher should resolve to a layer 4 load balancer`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Rancher installed on a Kubernetes cluster with layer 4 load balancer, depicting SSL termination at ingress controllers"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Rancher HA",
        src: (__webpack_require__(86089)/* ["default"] */ .Z),
        width: "1236",
        height: "525"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "a-provision-three-air-gapped-linux-hosts-according-to-our-requirements"
    }, `A. Provision three air gapped Linux hosts according to our requirements`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `These hosts will be disconnected from the internet, but require being able to connect with your private registry.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `View hardware and software requirements for each of your cluster nodes in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"
    }, `Requirements`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "b-set-up-your-load-balancer"
    }, `B. Set up your Load Balancer`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When setting up the Kubernetes cluster that will run the Rancher server components, an Ingress controller pod will be deployed on each of your nodes. The Ingress controller pods are bound to ports TCP/80 and TCP/443 on the host network and are the entry point for HTTPS traffic to the Rancher server.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You will need to configure a load balancer as a basic Layer 4 TCP forwarder to direct traffic to these ingress controller pods. The exact configuration will vary depending on your environment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Important:`), `
Only use this load balancer (i.e, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `local`), ` cluster Ingress) to load balance the Rancher server. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Load Balancer Configuration Samples:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `For an example showing how to set up an NGINX load balancer, refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"
    }, `this page.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `For an example showing how to set up an Amazon NLB load balancer, refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"
    }, `this page.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Docker Install",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The Docker installation is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster, you install the Rancher server component on a single node using a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `docker run`), ` command. Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Important:`), ` If you install Rancher following the Docker installation guide, there is no upgrade path to transition your Docker installation to a Kubernetes Installation.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Instead of running the Docker installation, you have the option to follow the Kubernetes Install guide, but only use one node to install Rancher. Afterwards, you can scale up the etcd nodes in your Kubernetes cluster to make it a Kubernetes Installation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "a-provision-a-single-air-gapped-linux-host-according-to-our-requirements"
    }, `A. Provision a single, air gapped Linux host according to our Requirements`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `These hosts will be disconnected from the internet, but require being able to connect with your private registry.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `View hardware and software requirements for each of your cluster nodes in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"
    }, `Requirements`), `.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "next-collect-and-publish-images-to-your-private-registry"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "h3",
        "href": "/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"
    }, `Next: Collect and Publish Images to your Private Registry`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 86089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg");

/***/ })

}]);