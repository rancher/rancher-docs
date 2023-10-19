"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[92393],{

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

/***/ 69899:
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
    title: 'CNI 网络插件',
    description: '了解容器网络接口 (CNI)、Rancher 提供的 CNI 网络插件、提供商的功能，以及如何选择网络提供商'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "faq/container-network-interface-providers",
    "id": "version-2.7/faq/container-network-interface-providers",
    "title": "CNI 网络插件",
    "description": "了解容器网络接口 (CNI)、Rancher 提供的 CNI 网络插件、提供商的功能，以及如何选择网络提供商",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.7/faq/container-network-interface-providers.md",
    "sourceDirName": "faq",
    "slug": "/faq/container-network-interface-providers",
    "permalink": "/zh/v2.7/faq/container-network-interface-providers",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.7/faq/container-network-interface-providers.md",
    "tags": [],
    "version": "2.7",
    "lastUpdatedAt": 1686092423,
    "formattedLastUpdatedAt": "2023年6月6日",
    "frontMatter": {
        "title": "CNI 网络插件",
        "description": "了解容器网络接口 (CNI)、Rancher 提供的 CNI 网络插件、提供商的功能，以及如何选择网络提供商"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "遥测",
        "permalink": "/zh/v2.7/faq/telemetry"
    },
    "next": {
        "title": "卸载 Rancher",
        "permalink": "/zh/v2.7/faq/rancher-is-no-longer-needed"
    }
};
const assets = {};
const toc = [
    {
        value: '什么是 CNI？',
        id: '什么是-cni',
        level: 2
    },
    {
        value: 'CNI 使用了哪些网络模型？',
        id: 'cni-使用了哪些网络模型',
        level: 2
    },
    {
        value: '什么是封装网络？',
        id: '什么是封装网络',
        level: 3
    },
    {
        value: '什么是非封装网络？',
        id: '什么是非封装网络',
        level: 3
    },
    {
        value: 'Rancher 提供哪些 CNI 插件？',
        id: 'rancher-提供哪些-cni-插件',
        level: 2
    },
    {
        value: 'RKE Kubernetes 集群',
        id: 'rke-kubernetes-集群',
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
        value: 'Weave',
        id: 'weave',
        level: 4
    },
    {
        value: 'RKE2 Kubernetes 集群',
        id: 'rke2-kubernetes-集群',
        level: 3
    },
    {
        value: 'Calico',
        id: 'calico',
        level: 4
    },
    {
        value: 'Cilium',
        id: 'cilium',
        level: 4
    },
    {
        value: 'Cilium 中跨节点的 Ingress 路由',
        id: 'cilium-中跨节点的-ingress-路由',
        level: 5
    },
    {
        value: '各个网络插件的 CNI 功能',
        id: '各个网络插件的-cni-功能',
        level: 2
    },
    {
        value: 'CNI 社区人气',
        id: 'cni-社区人气',
        level: 2
    },
    {
        value: '使用哪个 CNI 插件？',
        id: '使用哪个-cni-插件',
        level: 2
    },
    {
        value: '如何配置 CNI 网络插件？',
        id: '如何配置-cni-网络插件',
        level: 2
    }
];
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "什么是-cni"
    }, `什么是 CNI？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CNI（容器网络接口）是一个`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://cncf.io/"
    }, `云原生计算基金会项目`), `，它包含了一些规范和库，用于编写在 Linux 容器中配置网络接口的一系列插件。CNI 只关注容器的网络连接，并在容器被删除时移除所分配的资源。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes 使用 CNI 作为网络提供商和 Kubernetes Pod 网络之间的接口。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "CNI Logo",
        src: (__webpack_require__(37685)/* ["default"] */ .Z),
        width: "84",
        height: "119"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关更多信息，请访问 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/containernetworking/cni"
    }, `CNI GitHub 项目`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "cni-使用了哪些网络模型"
    }, `CNI 使用了哪些网络模型？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CNI 网络插件使用封装网络模型（例如 Virtual Extensible Lan，缩写是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#vxlan"
    }, `VXLAN`), `）或非封装网络模型（例如 Border Gateway Protocol，缩写是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://en.wikipedia.org/wiki/Border_Gateway_Protocol"
    }, `BGP`), `）来实现网络结构。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "什么是封装网络"
    }, `什么是封装网络？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `此网络模型提供了一个逻辑二层（L2）网络，该网络封装在跨 Kubernetes 集群节点的现有三层（L3）网络拓扑上。使用此模型，你可以为容器提供一个隔离的 L2 网络，而无需分发路由。封装网络带来了少量的处理开销以及由于覆盖封装生成 IP header 造成的 IP 包大小增加。封装信息由 Kubernetes worker 之间的 UDP 端口分发，交换如何访问 MAC 地址的网络控制平面信息。此类网络模型中常用的封装是 VXLAN、Internet 协议安全性 (IPSec) 和 IP-in-IP。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `简单来说，这种网络模型在 Kubernetes worker 之间生成了一种扩展网桥，其中连接了 pod。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你偏向使用扩展 L2 网桥，则可以选择此网络模型。此网络模型对 Kubernetes worker 的 L3 网络延迟很敏感。如果数据中心位于不同的地理位置，请确保它们之间的延迟较低，以避免最终的网络分段。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用这种网络模型的 CNI 网络插件包括 Flannel、Canal、Weave 和 Cilium。默认情况下，Calico 不会使用此模型，但你可以对其进行配置。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "封装网络",
        src: (__webpack_require__(83754)/* ["default"] */ .Z),
        width: "767",
        height: "446"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "什么是非封装网络"
    }, `什么是非封装网络？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `该网络模型提供了一个 L3 网络，用于在容器之间路由数据包。此模型不会生成隔离的 L2 网络，也不会产生开销。这些好处的代价是，Kubernetes worker 必须管理所需的所有路由分发。该网络模型不使用 IP header 进行封装，而是使用 Kubernetes Worker 之间的网络协议来分发路由信息以实现 Pod 连接，例如 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://en.wikipedia.org/wiki/Border_Gateway_Protocol"
    }, `BGP`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `简而言之，这种网络模型在 Kubernetes worker 之间生成了一种扩展网络路由器，提供了如何连接 Pod 的信息。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你偏向使用 L3 网络，则可以选择此网络模型。此模型在操作系统级别为 Kubernetes Worker 动态更新路由。对延迟较不敏感。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用这种网络模型的 CNI 网络插件包括 Calico 和 Cilium。Cilium 可以使用此模型进行配置，即使这不是默认模式。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "非封装网络",
        src: (__webpack_require__(70689)/* ["default"] */ .Z),
        width: "716",
        height: "415"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "rancher-提供哪些-cni-插件"
    }, `Rancher 提供哪些 CNI 插件？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "rke-kubernetes-集群"
    }, `RKE Kubernetes 集群`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher 开箱即用地为 RKE Kubernetes 集群提供了几个 CNI 网络插件，分别是 Canal、Flannel、Calico 和 Weave。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你使用 Rancher 创建新的 Kubernetes 集群，你可以选择你的 CNI 网络插件。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "canal"
    }, `Canal`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Canal Logo",
        src: (__webpack_require__(32899)/* ["default"] */ .Z),
        width: "328",
        height: "184"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Canal 是一个 CNI 网络插件，它很好地结合了 Flannel 和 Calico 的优点。它让你轻松地将 Calico 和 Flannel 网络部署为统一的网络解决方案，将 Calico 的网络策略执行与 Calico（未封装）和 Flannel（封装）丰富的网络连接选项结合起来。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Canal 是 Rancher 默认的 CNI 网络插件，并采用了 Flannel 和 VXLAN 封装。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes Worker 需要打开 UDP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `8472`), ` (VXLAN) 和 TCP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `9099`), `（健康检查）。如果使用 Wireguard，则需要打开 UDP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `51820`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `51821`), `。有关详细信息，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"
    }, `下游集群的端口要求`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(24313)/* ["default"] */ .Z),
        width: "1782",
        height: "898"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/projectcalico/canal"
    }, `Canal GitHub 页面`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "flannel"
    }, `Flannel`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Flannel Logo",
        src: (__webpack_require__(13688)/* ["default"] */ .Z),
        width: "328",
        height: "100"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Flannel 是为 Kubernetes 配置 L3 网络结构的简单方法。Flannel 在每台主机上运行一个名为 flanneld 的二进制 Agent，该 Agent 负责从更大的预配置地址空间中为每台主机分配子网租约。Flannel 通过 Kubernetes API 或直接使用 etcd 来存储网络配置、分配的子网、以及其他辅助数据（例如主机的公共 IP）。数据包使用某种后端机制来转发，默认封装为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#vxlan"
    }, `VXLAN`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `默认情况下，封装的流量是不加密的。Flannel 提供了两种加密方案：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#ipsec"
    }, `IPSec`), `：使用 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://www.strongswan.org/"
    }, `strongSwan`), ` 在 Kubernetes worker 之间建立加密的 IPSec 隧道。它是加密的实验性后端。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#wireguard"
    }, `WireGuard`), `：比 strongSwan 更快的替代方案。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes Worker 需要打开 UDP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `8472`), ` (VXLAN)。有关详细信息，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"
    }, `下游集群的端口要求`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Flannel Diagram",
        src: (__webpack_require__(16930)/* ["default"] */ .Z),
        width: "1024",
        height: "456"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/flannel-io/flannel"
    }, `Flannel GitHub 页面`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "weave"
    }, `Weave`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Weave Logo",
        src: (__webpack_require__(93743)/* ["default"] */ .Z),
        width: "229",
        height: "220"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Weave 在云上的 Kubernetes 集群中启用网络和网络策略。此外，它还支持加密对等节点之间的流量。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes worker 需要打开 TCP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `6783`), `（控制端口）、UDP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `6783`), ` 和 UDP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `6784`), `（数据端口）。有关详细信息，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"
    }, `下游集群的端口要求`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关详细信息，请参阅以下页面：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://www.weave.works/"
    }, `Weave Net 官网`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "rke2-kubernetes-集群"
    }, `RKE2 Kubernetes 集群`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher 开箱即用地为 RKE2 Kubernetes 集群提供了几个 CNI 网络插件，分别是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#canal"
    }, `Canal`), `（见上一节）、Calico 和 Cilium。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你使用 Rancher 创建新的 Kubernetes 集群，你可以选择你的 CNI 网络插件。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "calico"
    }, `Calico`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Calico Logo",
        src: (__webpack_require__(85423)/* ["default"] */ .Z),
        width: "256",
        height: "256"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Calico 在云上的 Kubernetes 集群中启用网络和网络策略。默认情况下，Calico 使用纯净、未封装的 IP 网络结构和策略引擎为 Kubernetes 工作负载提供网络。工作负载能够使用 BGP 在云上和本地进行通信。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Calico 还提供了一种无状态的 IP-in-IP 或 VXLAN 封装模式。如果需要，你可以使用它。Calico 还支持策略隔离，让你使用高级 ingress 和 egress 策略保护和管理 Kubernetes 工作负载。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果使用 BGP，Kubernetes Worker 需要打开 TCP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `179`), `，如果使用 VXLAN 封装，则需要打开 UDP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `4789`), `。另外，使用 Typha 时需要 TCP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `5473`), `。有关详细信息，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"
    }, `下游集群的端口要求`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "title": "重要提示：",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `在 Rancher 2.6.3 中，Calico 探测到在安装 RKE2 时 Windows 节点会失败。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, `请注意，此问题已在 v2.6.4 中解决。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `要解决此问题，请先导航到 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `https://<rancherserverurl>/v3/settings/windows-rke2-install-script`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `在那里，将当前设置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `https://raw.githubusercontent.com/rancher/wins/v0.1.3/install.ps1`), ` 更改为新设置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `https://raw.githubusercontent .com/rancher/rke2/master/windows/rke2-install.ps1`), `。`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Calico Diagram",
        src: (__webpack_require__(48972)/* ["default"] */ .Z),
        width: "602",
        height: "930"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关详细信息，请参阅以下页面：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://www.projectcalico.org/"
    }, `Project Calico 官方网站`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://github.com/projectcalico/calico"
    }, `Calico 项目 GitHub 页面`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cilium"
    }, `Cilium`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Cilium Logo",
        src: (__webpack_require__(5820)/* ["default"] */ .Z),
        width: "148",
        height: "148"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Cilium 在 Kubernetes 中启用网络和网络策略（L3、L4 和 L7）。默认情况下，Cilium 使用 eBPF 技术在节点内部路由数据包，并使用 VXLAN 将数据包发送到其他节点。你也可以配置非封装的技术。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Cilium 推荐大于 5.2 的内核版本，从而充分利用 eBPF 的能力。Kubernetes worker 需要打开 TCP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `8472`), `（VXLAN）和 TCP 端口 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `4240`), `（健康检查）。此外，还必须为健康检查启用 ICMP 8/0。有关详细信息，请查看 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.cilium.io/en/latest/operations/system_requirements/#firewall-requirements"
    }, `Cilium 系统要求`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5", {
        "id": "cilium-中跨节点的-ingress-路由"
    }, `Cilium 中跨节点的 Ingress 路由`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), "默认情况下，Cilium 不允许 Pod 与其他节点上的 Pod 通信。要解决此问题，请启用 Ingress Controller 以使用 “CiliumNetworkPolicy” 进行跨节点路由请求。", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `选择 Cilium CNI 并为新集群启用项目网络隔离后，配置如下：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: hn-nodes
  namespace: default
spec:
  endpointSelector: {}
  ingress:
    - fromEntities:
      - remote-node
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "各个网络插件的-cni-功能"
    }, `各个网络插件的 CNI 功能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `下表总结了 Rancher 中每个 CNI 网络插件支持的不同功能：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `提供商`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `网络模型`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `路线分发`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `网络策略`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `网格`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `外部数据存储`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `加密`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Ingress/Egress 策略`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `封装 (VXLAN)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `K8s API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Flannel`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `封装 (VXLAN)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `K8s API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Calico`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `封装（VXLAN，IPIP）或未封装`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Etcd 和 K8s API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Weave`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `封装`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `否`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Cilium`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `封装 (VXLAN)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Etcd 和 K8s API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `是`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `网络模型：封装或未封装。如需更多信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#cni-%E4%BD%BF%E7%94%A8%E4%BA%86%E5%93%AA%E4%BA%9B%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B"
    }, `CNI 中使用的网络模型`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `路由分发：一种外部网关协议，用于在互联网上交换路由和可达性信息。BGP 可以帮助进行跨集群 pod 之间的网络。此功能对于未封装的 CNI 网络插件是必须的，并且通常由 BGP 完成。如果你想构建跨网段拆分的集群，路由分发是一个很好的功能。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `网络策略：Kubernetes 提供了强制执行规则的功能，这些规则决定了哪些 service 可以使用网络策略进行相互通信。这是从 Kubernetes 1.7 起稳定的功能，可以与某些网络插件一起使用。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `网格：允许在不同的 Kubernetes 集群间进行 service 之间的网络通信。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `外部数据存储：具有此功能的 CNI 网络插件需要一个外部数据存储来存储数据。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `加密：允许加密和安全的网络控制和数据平面。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Ingress/Egress 策略：允许你管理 Kubernetes 和非 Kubernetes 通信的路由控制。`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "cni-社区人气"
    }, `CNI 社区人气`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `下表总结了不同的 GitHub 指标，让你了解每个项目的受欢迎程度和活动。数据收集于 2022 年 1 月。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `提供商`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `项目`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Stars`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Forks`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Contributors`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "https://github.com/projectcalico/canal"
    }, `https://github.com/projectcalico/canal`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `679`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `100`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `21`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Flannel`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "https://github.com/flannel-io/flannel"
    }, `https://github.com/flannel-io/flannel`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `7k`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `2.5k`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `185`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Calico`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "https://github.com/projectcalico/calico"
    }, `https://github.com/projectcalico/calico`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `3.1k`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `741`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `224`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Weave`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "https://github.com/weaveworks/weave/"
    }, `https://github.com/weaveworks/weave/`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `6.2k`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `635`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `84`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Cilium`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "https://github.com/cilium/cilium"
    }, `https://github.com/cilium/cilium`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `10.6k`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `1.3k`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `352`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "使用哪个-cni-插件"
    }, `使用哪个 CNI 插件？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `这取决于你的项目需求。各个提供商都有不同的功能和选项。没有一个提供商可以满足所有用户的需求。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Canal 是默认的 CNI 网络插件。对于大多数用例，我们推荐你使用它。它使用 Flannel 为容器提供封装网络，同时添加 Calico 网络策略，可以在网络方面提供项目/命名空间隔离。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "如何配置-cni-网络插件"
    }, `如何配置 CNI 网络插件？`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如需了解如何为你的集群配置网络插件，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.7/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"
    }, `集群选项`), `。有关更高级的配置选项，请参阅有关使用`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.7/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8F%82%E8%80%83"
    }, `配置文件`), `和`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/"
    }, `网络插件`), `选项来配置集群的说明。`));
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

/***/ 5820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cilium-logo-74a25c5fe67b4da4ce752dbf4ffbf11d.png");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

}]);