"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[73630],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   kt: () => (/* binding */ createElement)
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

/***/ 43559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
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
    title: 'Container Network Interface (CNI) Providers',
    description: 'Learn about Container Network Interface (CNI), the CNI providers Rancher provides, the features they offer, and how to choose a provider for you'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "faq/container-network-interface-providers",
    "id": "version-2.5/faq/container-network-interface-providers",
    "title": "Container Network Interface (CNI) Providers",
    "description": "Learn about Container Network Interface (CNI), the CNI providers Rancher provides, the features they offer, and how to choose a provider for you",
    "source": "@site/versioned_docs/version-2.5/faq/container-network-interface-providers.md",
    "sourceDirName": "faq",
    "slug": "/faq/container-network-interface-providers",
    "permalink": "/zh/v2.5/faq/container-network-interface-providers",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/faq/container-network-interface-providers.md",
    "tags": [],
    "version": "2.5",
    "lastUpdatedAt": 1708541793,
    "formattedLastUpdatedAt": "2024年2月21日",
    "frontMatter": {
        "title": "Container Network Interface (CNI) Providers",
        "description": "Learn about Container Network Interface (CNI), the CNI providers Rancher provides, the features they offer, and how to choose a provider for you"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Telemetry FAQ",
        "permalink": "/zh/v2.5/faq/telemetry"
    },
    "next": {
        "title": "Rancher is No Longer Needed",
        "permalink": "/zh/v2.5/faq/rancher-is-no-longer-needed"
    }
};
const assets = {};
const toc = [
    {
        value: 'What is CNI?',
        id: 'what-is-cni',
        level: 2
    },
    {
        value: 'What Network Models are Used in CNI?',
        id: 'what-network-models-are-used-in-cni',
        level: 3
    },
    {
        value: 'What is an Encapsulated Network?',
        id: 'what-is-an-encapsulated-network',
        level: 4
    },
    {
        value: 'What is an Unencapsulated Network?',
        id: 'what-is-an-unencapsulated-network',
        level: 4
    },
    {
        value: 'What CNI Providers are Provided by Rancher?',
        id: 'what-cni-providers-are-provided-by-rancher',
        level: 3
    },
    {
        value: 'Canal',
        id: 'canal',
        level: 4
    },
    {
        value: 'Flannel',
        id: 'flannel',
        level: 4
    },
    {
        value: 'Calico',
        id: 'calico',
        level: 4
    },
    {
        value: 'Weave',
        id: 'weave',
        level: 4
    },
    {
        value: 'CNI Features by Provider',
        id: 'cni-features-by-provider',
        level: 3
    },
    {
        value: 'CNI Community Popularity',
        id: 'cni-community-popularity',
        level: 3
    },
    {
        value: 'Which CNI Provider Should I Use?',
        id: 'which-cni-provider-should-i-use',
        level: 3
    },
    {
        value: 'How can I configure a CNI network provider?',
        id: 'how-can-i-configure-a-cni-network-provider',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const CNIPopularityTable = makeShortcode("CNIPopularityTable");
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/faq/container-network-interface-providers"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "what-is-cni"
    }, `What is CNI?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CNI (Container Network Interface), a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://cncf.io/"
    }, `Cloud Native Computing Foundation project`), `, consists of a specification and libraries for writing plugins to configure network interfaces in Linux containers, along with a number of  plugins. CNI concerns itself only with network connectivity of containers and removing allocated resources when the container is deleted.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes uses CNI as an interface between network providers and Kubernetes pod networking.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "CNI Logo",
        src: (__webpack_require__(37685)/* ["default"] */ .Z),
        width: "84",
        height: "119"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information visit `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/containernetworking/cni"
    }, `CNI GitHub project`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "what-network-models-are-used-in-cni"
    }, `What Network Models are Used in CNI?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CNI network providers implement their network fabric using either an encapsulated network model such as Virtual Extensible Lan (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/coreos/flannel/blob/master/Documentation/backends.md#vxlan"
    }, `VXLAN`), `) or an unencapsulated network model such as Border Gateway Protocol (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://en.wikipedia.org/wiki/Border_Gateway_Protocol"
    }, `BGP`), `).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-an-encapsulated-network"
    }, `What is an Encapsulated Network?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This network model provides a logical Layer 2 (L2) network encapsulated over the existing Layer 3 (L3) network topology that spans the Kubernetes cluster nodes. With this model you have an isolated L2 network for containers without needing routing distribution, all at the cost of minimal overhead in terms of processing and increased IP package size, which comes from an IP header generated by overlay encapsulation. Encapsulation information is distributed by UDP ports between Kubernetes workers, interchanging network control plane information about how MAC addresses can be reached. Common encapsulation used in this kind of network model is VXLAN, Internet Protocol Security (IPSec), and IP-in-IP.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In simple terms, this network model generates a kind of network bridge extended between Kubernetes workers, where pods are connected.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This network model is used when an extended L2 bridge is preferred. This network model is sensitive to L3 network latencies of the Kubernetes workers. If datacenters are in distinct geolocations, be sure to have low latencies between them to avoid eventual network segmentation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CNI network providers using this network model include Flannel, Canal, and Weave.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Encapsulated Network",
        src: (__webpack_require__(83754)/* ["default"] */ .Z),
        width: "767",
        height: "446"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-an-unencapsulated-network"
    }, `What is an Unencapsulated Network?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This network model provides an L3 network to route packets between containers. This model doesn't generate an isolated l2 network, nor generates overhead. These benefits come at the cost of Kubernetes workers having to manage any route distribution that's needed. Instead of using IP headers for encapsulation, this network model uses a network protocol between Kubernetes workers to distribute routing information to reach pods, such as `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://en.wikipedia.org/wiki/Border_Gateway_Protocol"
    }, `BGP`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In simple terms, this network model generates a kind of network router extended between Kubernetes workers, which provides information about how to reach pods.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This network model is used when a routed L3 network is preferred. This mode dynamically updates routes at the OS level for Kubernetes workers. It's less sensitive to latency.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CNI network providers using this network model include Calico and Romana.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Unencapsulated Network",
        src: (__webpack_require__(70689)/* ["default"] */ .Z),
        width: "716",
        height: "415"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "what-cni-providers-are-provided-by-rancher"
    }, `What CNI Providers are Provided by Rancher?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Out-of-the-box, Rancher provides the following CNI network providers for Kubernetes clusters: Canal, Flannel, Calico, and Weave. You can choose your CNI network provider when you create new Kubernetes clusters from Rancher.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "canal"
    }, `Canal`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Canal Logo",
        src: (__webpack_require__(32899)/* ["default"] */ .Z),
        width: "328",
        height: "184"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Canal is a CNI network provider that gives you the best of Flannel and Calico. It allows users to easily deploy Calico and Flannel networking together as a unified networking solution, combining Calico’s network policy enforcement with the rich superset of Calico (unencapsulated) and/or Flannel (encapsulated) network connectivity options.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher, Canal is the default CNI network provider combined with Flannel and VXLAN encapsulation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes workers should open UDP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `8472`), ` (VXLAN) and TCP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `9099`), ` (healthcheck). For details, refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"
    }, `the port requirements for user clusters.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(24313)/* ["default"] */ .Z),
        width: "1782",
        height: "898"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information, see the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/projectcalico/canal"
    }, `Canal GitHub Page.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "flannel"
    }, `Flannel`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Flannel Logo",
        src: (__webpack_require__(13688)/* ["default"] */ .Z),
        width: "328",
        height: "100"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Flannel is a simple and easy way to configure L3 network fabric designed for Kubernetes. Flannel runs a single binary agent named flanneld on each host, which is responsible for allocating a subnet lease to each host out of a larger, preconfigured address space. Flannel uses either the Kubernetes API or etcd directly to store the network configuration, the allocated subnets, and any auxiliary data (such as the host's public IP). Packets are forwarded using one of several backend mechanisms, with the default encapsulation being `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/coreos/flannel/blob/master/Documentation/backends.md#vxlan"
    }, `VXLAN`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Encapsulated traffic is unencrypted by default. Therefore, flannel provides an experimental backend for encryption, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/coreos/flannel/blob/master/Documentation/backends.md#ipsec"
    }, `IPSec`), `, which makes use of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.strongswan.org/"
    }, `strongSwan`), ` to establish encrypted IPSec tunnels between Kubernetes workers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes workers should open UDP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `8472`), ` (VXLAN) and TCP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `9099`), ` (healthcheck). See `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"
    }, `the port requirements for user clusters`), ` for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Flannel Diagram",
        src: (__webpack_require__(16930)/* ["default"] */ .Z),
        width: "1024",
        height: "456"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information, see the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/coreos/flannel"
    }, `Flannel GitHub Page`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "calico"
    }, `Calico`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Calico Logo",
        src: (__webpack_require__(85423)/* ["default"] */ .Z),
        width: "256",
        height: "256"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Calico enables networking and network policy in Kubernetes clusters across the cloud. Calico uses a pure, unencapsulated IP network fabric and policy engine to provide networking for your Kubernetes workloads. Workloads are able to communicate over both cloud infrastructure and on-prem using BGP.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Calico also provides a stateless IP-in-IP encapsulation mode that can be used, if necessary. Calico also offers policy isolation, allowing you to secure and govern your Kubernetes workloads using advanced ingress and egress policies.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes workers should open TCP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `179`), ` (BGP). See `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"
    }, `the port requirements for user clusters`), ` for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Calico Diagram",
        src: (__webpack_require__(48972)/* ["default"] */ .Z),
        width: "602",
        height: "930"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information, see the following pages:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://www.projectcalico.org/"
    }, `Project Calico Official Site`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://github.com/projectcalico/calico"
    }, `Project Calico GitHub Page`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "weave"
    }, `Weave`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Weave Logo",
        src: (__webpack_require__(93743)/* ["default"] */ .Z),
        width: "229",
        height: "220"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Weave enables networking and network policy in Kubernetes clusters across the cloud. Additionally, it support encrypting traffic between the peers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes workers should open TCP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `6783`), ` (control port), UDP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `6783`), ` and UDP port `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `6784`), ` (data ports). See the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"
    }, `port requirements for user clusters`), ` for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information, see the following pages:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://www.weave.works/"
    }, `Weave Net Official Site`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "cni-features-by-provider"
    }, `CNI Features by Provider`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following table summarizes the different features available for each CNI network provider provided by Rancher.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Provider`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Network Model`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Route Distribution`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Network Policies`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Mesh`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `External Datastore`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Encryption`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Ingress/Egress Policies`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Encapsulated (VXLAN)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `K8S API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Flannel`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Encapsulated (VXLAN)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `K8S API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Calico`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Encapsulated (VXLAN,IPIP) OR Unencapsulated`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Etcd and K8S API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Weave`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Encapsulated`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `No`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Yes`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Network Model: Encapsulated or unencapsulated. For more information, see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#what-network-models-are-used-in-cni"
    }, `What Network Models are Used in CNI?`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Route Distribution: An exterior gateway protocol designed to exchange routing and reachability information on the Internet. BGP can assist with pod-to-pod networking between clusters. This feature is a must on unencapsulated CNI network providers, and it is typically done by BGP. If you plan to build clusters split across network segments, route distribution is a feature that's nice-to-have.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Network Policies: Kubernetes offers functionality to enforce rules about which services can communicate with each other using network policies. This feature is stable as of Kubernetes v1.7 and is ready to use with certain networking plugins.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Mesh: This feature allows service-to-service networking communication between distinct Kubernetes clusters.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `External Datastore: CNI network providers with this feature need an external datastore for its data.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Encryption: This feature allows cyphered and secure network control and data planes.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Ingress/Egress Policies: This feature allows you to manage routing control for both Kubernetes and non-Kubernetes communications.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "cni-community-popularity"
    }, `CNI Community Popularity`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(CNIPopularityTable, {
        mdxType: "CNIPopularityTable"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "which-cni-provider-should-i-use"
    }, `Which CNI Provider Should I Use?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It depends on your project needs. There are many different providers, which each have various features and options. There isn't one provider that meets everyone's needs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Canal is the default CNI network provider. We recommend it for most use cases. It provides encapsulated networking for containers with Flannel, while adding Calico network policies that can provide project/namespace isolation in terms of networking.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "how-can-i-configure-a-cni-network-provider"
    }, `How can I configure a CNI network provider?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Please see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "cluster-provisioning/rke-clusters/options/"
    }, `Cluster Options`), ` on how to configure a network provider for your cluster. For more advanced configuration options, please see how to configure your cluster using a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "cluster-provisioning/rke-clusters/options/#cluster-config-file"
    }, `Config File`), ` and the options for `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/"
    }, `Network Plug-ins`), `.`));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 48972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/calico-diagram-3e0d002feecad5d7ecde73da073b95be.svg");

/***/ }),

/***/ 85423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/calico-logo-876c7e5f55ffe5a9feb68c8eac7f6f09.png");

/***/ }),

/***/ 24313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/canal-diagram-098d93441385aab94e0a23e0a8cdd7b0.png");

/***/ }),

/***/ 32899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/canal-logo-59b1e2e7cb6ef69952216bc6c8778fea.png");

/***/ }),

/***/ 37685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cni-logo-4fc06f259de435a65ca64a52bd719a96.png");

/***/ }),

/***/ 83754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/encapsulated-network-0c75db46568d5b2636dad4a8c28d3cc4.png");

/***/ }),

/***/ 16930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/flannel-diagram-5d842974de10ad38569f46e70836f11f.png");

/***/ }),

/***/ 13688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/flannel-logo-72cb4d5923f7a0be32a1148dc78d5c50.png");

/***/ }),

/***/ 70689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/unencapsulated-network-b87922f280aa17322e6485b81855dd4a.png");

/***/ }),

/***/ 93743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADcCAMAAAC4YpZBAAABL1BMVEX///8yMkv/SxkA0v9VaZEA0P8cHDwrK0b/RQkvL0nIyM0YGDr/hmwWFjn/NQD19faR5/8RETfh+P/l5eciIkBLYYxsbHt4h6YsLEcA1v8mJkNGXYohIT+Bjqvc3N+cprziaVgqNU7dVjzd4OgYL0ylnadidJgLCzTt7e+dnaY+PlWPj5qzs7peXm+oqLB3d4S9vcOwuMnT09dOTmKDg49DQ1mQkJpZWWvg4+pnZ3dv4P/Bx9SNmbL/Vyv///7/08r/sKH/8Oys6///bk7/Xzn/pZT/kXv/ysAAACg0HDbt+/8AACkAADH/6OS/8f//nYoAABsyToE4XHU5c400g6A4lrUvqsz/aEb/fGAfvOI2TGM5KUD/vbAtc5Cj6v//IwCT8P9qfo8ln8OctcQAIUOQPSJCAAASdklEQVR4nO2d+WPaRhbHkXEkBMGEADYIBW/rrg0YA+bwETvO0aRpnMS926TJervd/v9/w+qYeXO9kRR3i4TL94fWQcfMRzPz3punkZTLrbTSSn9nXd6/urp6dn19/cz7/2XatflrdJ2/I+p+2jX6K3TvTl7QinJ5FUU5mo7Tq9if05ML4Z8RlAdu0+wPF12//4MunhT+Lf6ipazMHcMwbNc8qiy8mn9OTwobaxviTzrKrmEZoerOUrXn40cba2sJKTtm06Cy3X4xhereSBd3fcaElMWybXCyq5vL0W1fFgpriSkHVUOSVV0Gc/tV2JDJKHsKpKfyKJ2aJ9fbR4W15JSjEgJpGI6d7V77coNBxlHm75+6KKS9l+0++2RjbS0pZSv/q4NDupN0ap9Q3wiQ0ZQepIVCWlYtndon1AsRMpKy9d5oopDOPNtjMne3kJiy9f6DjULWj9Ope3Ilp2z9/AplNMzNdKr+CUpM2fpdA1mepVPzT1FSytaPGsjqMgTrCSlb/8Ih7epAPefTxVT9E5SIspX//gMOWULc5MeNt4upe3IlofTcJA7ZtDrqGV9sFB4tpu7JlYCydecz3E1a/a56Qj/wL3y1mMonVjylFwvgbtKZIrHAuyDK2Hi8mNonVSxl6/0rHNI8Vc928Qs5XeFC3Zii4ii1brKEuMmnMIXLWJ+NofztJ10s0FPP9bbAzVMzZWdjKP+jgdxD3ORjPvAv/LKY+idTNOWBZspcQrJ2H6Up3MsFESRRFGVlik+Zm3XETT6RpnCF5wtjiFcEZc3QTJl1blI6U4YaU0/ZcTRTZsxN3lUgM9WYWkopswxyMTf5ZUGBzFRooKNUM8uhTCTv+vQ5BrlWeLdQkihpKNHMsg95pJ7i7RoKuVZ4lJkACKec4Zll49Xv6r3oxwUN5C+ZgcQpNZll48PPLYXypWp3whNlp7+ilDo3aX9431LWFchuEs6TqUBWpez2cTfZ7L9vKasn5HQunOZFOjgaKZSdJu4mP/yabylrRBA3GZ7lY0o4GsmUa1/gbvLD9z6kSHnxpQ4yO54ylEL5GW5cf2jxd9wDXeBucq1QyNSsy1cyylc/tvIy5dNHGsi17GcqUcpXP7XyMuVbnZt8nj3IRJSvfqaQjPKxZkhmKKzjFE/pu8m8TPlRZ3fupoujUSxl0+AgKaXWTX6TMo5GcZTWPM9BEkp1ykwgM+YmQTGUxE2KlO90kGp24P7DxSMhiqZ0fxAYA0rILEsqILHA1Z1WCkyqIilLs9/yMqXeTaqxwPWdfPYpqz11vU9H5yYfqW4yODgFJlV6yuAGrEzZ+ocG8kt1yvwwODYFJlVayjCznJASmzKHkPlMPJyho2w6QWY5GSXiJi9b5MgsUHY/xylpZjkR5cYT5byXYK4yQFn74nO5ygElZJaTUCKxwH12RPqUExOndA/oHgkoUTeZIcpx1UYpSyyzHEuJTZmf8QelTTmsGgZCaZe5zHIcpdZNghYIhGm/bKCUwg3YGEoss/xQXGy6OCBMI9NAKf8Q1ixHU0a4yWxQHtQNlHJDXIwVSYllllvSAWnOScLnl1BKcccoSiSzfClNYfJ37i2ICBG7y/wnKKPdJKV8tiAkVRMTMss3p0SmzFfyBCbN5zXHJZY+vylloRAdCwDlgpgUDfe4eXIM5dNhC6XEMsvXCGRqJvaobCSmfFv4J0qJZZaV+XaglEzsgG/JGMrHGzilfsqsdNiUjE+nnJjy5cYaSolllmU3SSnTimJtOyGlf5cZo0SnzChjipHPzElGGTwZhVAiU2bVTVKl5keKpUSU4V1mlfJzJLOM91Zv5xRnXUKX1VDSxVgKZV5dZ4i5SV/pJpz3nVhKyCwrlGos80wHme69g041jpLdgI2nxN1k6pC53JRbBPIHQsndgI2lxN2kt991OmxMY5My2nvFr5T1PvxirDhKLWR6UxFQn9gf/zFfOetcEBZjRVNeamKBbLw5ZhA2ptWsIbl1Ma8TRXmJI+ZTdJOCmn5jho/5KpRrSSm1sUCabpKX35jkMd8bU2bTTQqa23TN8k0pM+omBU2+3Sd/3ZAys25SEDz1cjNKrQdJMWUXpRtRZtlNoroJpdZNXqVNo9OnU2qnzBlxk5iiKTf+K1NeZt5NYoqk3Hj5m/x+n2sNY4bcJKIISv8GrOIxlsKDKNJTBouxdH5xuSD1lIXnftI1GWVW3SRIR0kyy4koM+smQRpKmllOQpldNwnCKSGznIQyu26SCXtAlGWWE1Bm2E1yUp9i4m7AxlHeyXIsIEheas/fgI2hzHYsIEp47Z+4GCuaMutuUhT3YLO0GCuSMvNuUhZ9dkJejBVFmX5m+ZP1OEhRKouxIiiXwE2qunixUVAXY+kpM5FZvoGevlMXY+kpl8WDJJGOcmncZCLhlMvkJpMIpVwuN5lAGOXSuclYIZRL6CbjdM//JgnwBf9YRjcZp/tXz+49fPiw1fL+c+/Z1f1bZVtXWmmllf7mqjBpNyU+pFscHu3vHw2LyAv9hDN0J+PBcDgcFzvinhG1EbYq5Q6iy+18WyX6WlroePyGbpBOOqUbXgtvDC2OjKpZdzzVzfL0CHk9Y6hJb+pUS6Zbr7uuWSrPRwN2/jk99d6eijmCjY5wvplXrhuWW53v4+XSJVhGXXoZOLwbzBRfmlmBNesl7owDo2Rxi0ltp3qMfrlhaJTEtx3allsd0TYY6Ar1Beevc1d30C85QrnlKVYurFq2xJfXT2CdnSO+va5IN9hN+K3TN5WXMzWr6htwJ8h+fgn0McYuLC529pVjYVsZrm5tipWLvFIQKm2UhN97sADWngsbYGWsAxS9PfQFVHX5hZuDN/iLqrymI8/dHtN2ti25olCu3ac/Davo270cQ/k2RgUWuopvPT9mJzCFys5pTaFTzcpyOfSyWsKRY82rDoMrEjbAsE5/KMsDDN5+7dAOu687n20qmAdN+egAnqu5yT9MWYOOYxIDMTINnZp9/sgISI8qeCy1C4PekV6G3IFyq4T/SHdx/cEkGy+4fE3+0xlFruoOP8DG1EA0SScb8oXZluPwVsjhBvupJe7n1AV7FY5yWFzcnGqqSTvsmH9yRy7Xkj8DUoNa1rkLwK9Lt/kWGcHn1IbS4d5P5nTUOxr1y4yHfbyKe9LGKvVP93u93mxqsmLCHsO6bEkc1DCCiDHs8s1Qmo96vdG8zM5Wkl8Z3VcGWo4bfUFVuW7epBvIwDkAIrvaIxXrjICIXSFmztwDGHNd1t2tkXjRXKGeXfidlDti1rG6T+pXm8GgsB2pz4Iv4ax3VxhrXIHQIqSHFeG8Td6yDdjopcdCY9QFDwOl26Gvhy4rejbwpOSydaC/2hZnNdlAcyX3zxwgcxljgZIrEHoUGaww2GxLuHg9GL50fMnjioiZuXJFKMCo8rtt0nJIh4WBY7iCPR0AjC1SMl+yB0NBfMLJYCEVUIXdm3Uw+esbMA5Id4dSZOMJbRwORGaJhfAHrnrYYSvMy481pytLFQJf4sIRpI422cJiOTBkpnjlLflFzbCFWqlv90J9LVULWoUUAhaBN+2sv4U9AfqabIqZD5BCNqUXwgW1+6chJkSOEGYRPwIXyJQ/qgYDuHmQi9RMouxhXZvZDqnDurIthSDRlvihk8B5yVi3RoO6WFMwlKSFoMNWlTmEboDwNeqMeyPo2oSyJltTX33JsrODlMmWIfa2HHIOMpLJpaoPaMRRIkewQRSUxnygtSmLbkEqkqtMPLxp3Sy5nC+nw2KqhHKcZQ/bocs8xqm+XClGhP5A259MZrwLR7YQSwAmhPoRZootWbDFFMxAbTA7NqolVwh8hFpBf2F9rid1WDY/8WJlbbnS5A0qS1wGbUEHbCo5O+xIRvBQ84JqQS43ZAfzsus08ZkJpaypNn8uddixPnTmypU8JvMlblj5OjCTP4krhbiPXCfm3KJKAwMxtFzd1IujZAOIHgmBj22Qi5Xk6soui5nKsCTSgL6Foc0azr7m0sju4e/hFkWTEBVkyotSwlmpewIoGp0lo5Qn4pJzq3PF0oHpdzuI+6jNTURJrmnXxt7abTcV68PZNBKMQihCQ49EfciRcxU1wbmRsR1aGBJaBYfAcKDNw0prmlq9Ccf0XIL0Jktu2TSO55InySkTdQh0aIfl2tLWl7unZGRgKPhXr8eGJRuYvgkHW0wrxOamp5OiVsHOPa6T2R5feTo6GvuJSjkq8HQkJl3g4kIfhF/saVy5vGa8WSHTgrDB6MD0w1HqcMHRjyXjrFeFg3Tt2YCF2HKEl+PdoyPuQX3ShFHGlCuIuYgj6CDEahO/5tk7MPHQ4yFNIWXAVHG2vyRaeISSPUEf1AFCPoiiWLRm5D5BMP/xLg4lJhMRMjC9SS6MBvC3LDe7F1MAm+TI30SS7Hsg1mV7XMNxRhPsgRmTxteUtUeLoJ2QDkyLzfFYhMjyDEqut9b1BOn+A3xyzFeYo+xwF50hc5M7NktQstNdoVxRYEfc4nFYc2pHaYlmhw5LbpaBJGeJiq9N03XduuMGoedU9vQABMEaH3fy0Ti1uHzvZC5VTjF3aLl1ZJYAPb25SS4TzAjIwGxuSnktXyygdKWuAz7OGYmU0hQNzipQHrHIuqtYgxzvUuW87UwOKQTB1SOQbKhT8wBpaL46MM+xxGkke9FIOPPEs77+55MM7LQT+rO1OaC9TMhGgEuVptETCFbl+z7iNYDT0y1yOCVMGGHOS7PjpDB2TJjOAUsqpn0mXNgtzJRgxmIf0w4r3FOA/I7h8G3WYTOdPcwuFaUwn12KjvT5H2EIsgSM4fSpJejus1ePkb3ZpXLY1agc8R/CEihZPhhLkOS4TmQ4xhg5H+7BK1I+vox4r1CiWWM5ScMu9UfDwaB3ymV/qannktPOdOD9VqmNZ67QfwTKiXJ7QEqfjdkOtmkE5W6WuPNVlcgn0IF4/4i7EzoSI9CSaKMPuK22VffMG7+72VN3s13TsuslUwpsxbm9/OlTxf9v8tl/v1yHP5+r3BkMJcb5fIOLA1POVlUs/OM54bWC+xUT8YVkyBxMpJTthOKqKpovE4XV18Vi4i0p3kLpt4SbLW1x/Afo9zXze9STCEmPcKsSdnQ13ykMzqn98H2fv76CGxKuvJw08qfHmkmtecwXhn4Gs1nfh4hK5BCnkLaTU1Q51ly4+lwf9/F9REwv8gMTTTzuV5HLalWllMRI/bSg26+BcZeCNbHLKh02UK+KTOMt5FY/E+9LNLditMV1NvfqAoLt7G0qN4THjsuPYbvurycoylNzIrHLYt899VQbleviYgxn71S7PMVX5XUZ9FoosfY12yLfAKDq9qamWXcsy/KXpJjznsLoawg71c3SdOh36DE9+RvJw7lVVmrV1NW6G57SCcst9Y/QcnkYThXtFv3x3eJwfzYazfajljV5O3n7jGawT0V36i5fatQEq1IcHsWWu9JKK6200korrZQpVb5re0q7Fn+1Ko11T2nX4q/WivL2aEV5e7SizIy4J5N2DrfPz7cPd/Ada2fB1jM+G+Ef2w0pdY8/ZUNbjUYjaIntRrsRqL1+qO52uEu2NhpbcBlO/N/WQwWbFlftT9SWV8Ndrx3XaXX9Gu9KeZizBrd1vX1Ofj5pr4taeO2TKqTcaZMGofUVOt95e13Y3NgNNy8ZZderbqO9e769/SBs08YWt8t58FN7/YG/OQTbDTac+CFsSN5uZzqaDSi9/7S3SfOdBRxtZoO22wE2+WFn18dqPPD/rkx2dnbOAsydQAuvfVJtkU54Ar+cBBjb9J9BZ25zBimgbp/Rfy6FJ9mSIT172oA+6WlXgiTbgWt5KBui7wi6KN+Bt6RjPLAGbczloZTMRtB8Xba9LQ24E558aSgb5+JvDxpA2W1jDMFlII29PJRn4m8BZdh+vgVllojqkOuyS0Mp90iO8ryhXgTP7nLsy0Mp3ZvjKINhu6sIXOYyUUqTCY5yd10r4mtuA6UekpLdBsqwLRuYiPu5NZRemI4p3Pk2UD5AbSyv20C53VDiP0m3gTKICs6R40C3gRKP8HYOPZFpzG2gDENWecXgg3aj8d1tohQnm6EqfAPfCsqASIrXz3mTdCsoAyu73uYxw5QIPSagzG5eK1QsZS5MZ+1Sp3myFWAx7xJER1uTE0+LqPCNFE/ZDaPWhhcCHR6e7wapST6TSTJHmc9URlPmursNFs2Gf/GJoDOWe15MlW+gBJR+cp2/g9Boi8Zoq72UlFte5/tOyB+cnDfCOz/eVKRxLq9mPdxtZDy3jgm9S+ff99s6P8dv/FUq3ZNahq3PSiut9P/Q/wATIxQ4xmr5MAAAAABJRU5ErkJggg==");

/***/ })

}]);