"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[46781],{

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

/***/ 73873:
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
    title: '使用 CIS 1.6 Benchmark 的 RKE2 强化指南'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",
    "id": "version-2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",
    "title": "使用 CIS 1.6 Benchmark 的 RKE2 强化指南",
    "description": "本文档提供了用于强化 RKE2 集群（使用 Rancher 2.6.5 进行配置）生产安装的说明。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置和控制。",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark.md",
    "sourceDirName": "reference-guides/rancher-security/rancher-v2.6-hardening-guides",
    "slug": "/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",
    "permalink": "/zh/v2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark.md",
    "tags": [],
    "version": "2.6",
    "lastUpdatedAt": 1668452187,
    "formattedLastUpdatedAt": "2022年11月14日",
    "frontMatter": {
        "title": "使用 CIS 1.6 Benchmark 的 RKE2 强化指南"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "RKE CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6",
        "permalink": "/zh/v2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-self-assessment-guide-with-cis-v1.6-benchmark"
    },
    "next": {
        "title": "RKE2 CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6",
        "permalink": "/zh/v2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"
    }
};
const assets = {};
const toc = [
    {
        value: '概述',
        id: '概述',
        level: 3
    },
    {
        value: '主机级别要求',
        id: '主机级别要求',
        level: 3
    },
    {
        value: '确保设置了 <code>protect-kernel-defaults</code>',
        id: '确保设置了-protect-kernel-defaults',
        level: 4
    },
    {
        value: '确保 etcd 配置正确',
        id: '确保-etcd-配置正确',
        level: 4
    },
    {
        value: '设置主机',
        id: '设置主机',
        level: 3
    },
    {
        value: '设置内核参数',
        id: '设置内核参数',
        level: 4
    },
    {
        value: '创建 etcd 用户',
        id: '创建-etcd-用户',
        level: 4
    },
    {
        value: 'Kubernetes 运行时要求',
        id: 'kubernetes-运行时要求',
        level: 3
    },
    {
        value: '<code>PodSecurityPolicies</code>',
        id: 'podsecuritypolicies',
        level: 4
    },
    {
        value: '<code>NetworkPolicies</code>',
        id: 'networkpolicies',
        level: 4
    },
    {
        value: '配置 <code>default</code> ServiceAccount',
        id: '配置-default-serviceaccount',
        level: 4
    },
    {
        value: 'API Server 审计配置',
        id: 'api-server-审计配置',
        level: 3
    },
    {
        value: '已知问题',
        id: '已知问题',
        level: 3
    },
    {
        value: '管控  1.1.12',
        id: '管控--1112',
        level: 4
    },
    {
        value: '管控 5.1.5',
        id: '管控-515',
        level: 4
    },
    {
        value: '管控 5.3.2',
        id: '管控-532',
        level: 4
    },
    {
        value: '强化 RKE2 模板配置参考',
        id: '强化-rke2-模板配置参考',
        level: 3
    },
    {
        value: '结论',
        id: '结论',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `本文档提供了用于强化 RKE2 集群（使用 Rancher 2.6.5 进行配置）生产安装的说明。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置和控制。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `本强化指南介绍了如何保护集群中的节点。建议你在安装 Kubernetes 之前参考本指南。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `本强化指南适用于 RKE2 集群，并对应以下 CIS Kubernetes Benchmark、Kubernetes 和 Rancher 版本：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Rancher 版本`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `CIS Benchmark 版本`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Kubernetes 版本`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher v2.6.5+`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Benchmark v1.6`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes v1.21 到 v1.23`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://releases.rancher.com/documents/security/2.6/Rancher_RKE2_v2-6_CIS_v1-6_Hardening_Guide.pdf"
    }, `点击此处下载本文档的 PDF 版本`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "概述"
    }, `概述`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `本文档提供了强化使用了 Rancher 2.6.5+ 和 Kubernetes 1.21 到 1.23 版本的 RKE2 集群的说明。此处概述了遵循 CIS 的 Kubernetes Benchmark 管控所需的配置。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关根据官方 CIS Benchmark 评估强化 RKE2 集群的更多详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"
    }, `RKE2 - CIS 1.6 Benchmark - 自我评估指南 - Rancher 2.6`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RKE2 是“默认强化”的，因此无需进行修改即可通过大部分 Kubernetes CIS 管控。但是也有一些例外情况是需要人工干预才能完全通过 CIS Benchmark：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `RKE2 不会修改主机操作系统。因此，操作人员必须进行一些主机级别的修改。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `PodSecurityPolicies`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `NetworkPolicies`), ` 的某些 CIS 策略会限制集群功能。你必须让 RKE2 开箱即用地配置它们。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要满足上述要求，你可以在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 标志设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.6`), ` 的情况下启动 RKE2。该标志通常执行以下两个操作：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `检查是否满足主机级别的要求。如果没有，RKE2 将退出并显示未满足要求的致命错误描述。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `配置能让集群通过相关管控的运行时 pod 安全策略和网络策略。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `配置文件标志的有效值是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.5`), ` 或 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.6`), `。它接受一个字符串值以允许以后使用其他配置文件。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `以下概述了当 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 标志设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.6`), ` 时采取的具体操作。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "主机级别要求"
    }, `主机级别要求`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `主机级别的要求有两个方面，分别是内核参数和 etcd 进程/目录配置。本节会概述这些内容。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "确保设置了-protect-kernel-defaults"
    }, `确保设置了 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h4"
    }, `protect-kernel-defaults`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `这是一个 kubelet 标志，如果所需的内核参数未设置或设置为与 kubelet 默认值不同的值，它会导致 kubelet 退出。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果设置了 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 标志，RKE2 会将标志设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "caution"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `protect-kernel-defaults`), ` 作为 RKE2 的配置标志公开。如果你已将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.x`), ` 并将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `protect-kernel-defaults`), ` 设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `false`), `，则 RKE2 将退出并提示错误。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RKE2 还将检查与 kubelet 相同的内核参数，并按照 kubelet 相同的规则退出并提示错误。这样，操作人员可以更快、更轻松地识别出与 kubelet 默认值不一致的内核参数。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `protect-kernel-defaults`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 标志都可以在 RKE2 模板配置文件中设置。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `spec:
  rkeConfig:
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "确保-etcd-配置正确"
    }, `确保 etcd 配置正确`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CIS Benchmark 要求 etcd 数据目录由 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `etcd`), ` 用户和组拥有。换言之，它要求 etcd 进程由主机级别的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `etcd`), ` 用户运行。为了实现这一点，RKE2 在使用有效的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.x`), ` 配置文件启动时采取了几个步骤：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `检查主机上是否存在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `etcd`), ` 用户和组。如果没有，则退出并提示错误。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `以 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `etcd`), ` 作为用户和组所有者来创建 etcd 的数据目录。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `正确设置 etcd 静态 pod 的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `SecurityContext`), `，从而确保 etcd 进程以 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `etcd`), ` 用户和组的身份运行。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "设置主机"
    }, `设置主机`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `本节提供了满足上述要求所需的主机配置命令。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "设置内核参数"
    }, `设置内核参数`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `建议为集群中所有类型的节点使用以下 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `sysctl`), ` 配置。在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/etc/sysctl.d/90-kubelet.conf`), ` 中设置如下参数：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini"
    }, `vm.panic_on_oom=0
vm.overcommit_memory=1
kernel.panic=10
kernel.panic_on_oops=1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `运行 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `sudo sysctl -p /etc/sysctl.d/90-kubelet.conf`), ` 以启用设置。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在通过 Rancher 实际部署 RKE2 之前，请仅在全新安装上执行此步骤。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "创建-etcd-用户"
    }, `创建 etcd 用户`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在某些 Linux 发行版上，`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `useradd`), ` 命令不会创建组。以下命令使用了 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `-U`), ` 标志来解决这一问题。这个标志能让 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `useradd`), ` 创建一个与用户同名的组。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "kubernetes-运行时要求"
    }, `Kubernetes 运行时要求`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果运行时要通过 CIS Benchmark，则需要重视 pod 安全和网络策略。本节会概述这些内容。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "podsecuritypolicies"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h4"
    }, `PodSecurityPolicies`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RKE2 总是在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `PodSecurityPolicy`), ` 准入控制器打开的情况下运行。但是，当它`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `不是`), `使用有效的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.x`), ` 配置文件启动时，RKE2 将设置一个不受限制的策略，该策略允许 Kubernetes 像 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `PodSecurityPolicy`), ` 准入控制器未启用一样运行。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用有效的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.x`), ` 配置文件运行时，RKE2 将设置一组更具限制性的策略。这些策略符合 CIS Benchmark 5.2 节中的要求。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, `Kubernetes controlplane 组件和关键附加组件（例如 CNI、DNS 和 Ingress）在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-system`), ` 命名空间中作为 pod 运行。因此，此命名空间的策略限制会更低，以便这些组件可以正常运行。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "networkpolicies"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h4"
    }, `NetworkPolicies`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用有效的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.x`), ` 配置文件运行时，RKE2 将设置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `NetworkPolicies`), ` 以通过 Kubernetes 内置命名空间的 CIS Benchmark。这些命名空间是分别是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-system`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-public`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-node-lease`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `NetworkPolicy`), ` 只允许同一命名空间内的 Pod 相互通信。一个例外情况是它允许解析 DNS 请求。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `操作人员需要照常管理其他命名空间的网络策略。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "配置-default-serviceaccount"
    }, `配置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h4"
    }, `default`), ` ServiceAccount`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "strong"
    }, `default`), ` ServiceAccount 的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "strong"
    }, `automountServiceAccountToken`), ` 设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "strong"
    }, `false`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes 为集群工作负载提供了一个 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount，但没有为 pod 分配特定 ServiceAccount 。如果需要从 pod 访问 Kubernetes API，则需要为该 pod 创建一个特定的 ServiceAccount 并授予权限。你还需要配置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), `  ServiceAccount，使其不提供 ServiceAccount 令牌并且没有任何显式的权限分配。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `对于标准 RKE2 中的每个命名空间（包括 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-system`), `），`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount 必须包含以下值：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `automountServiceAccountToken: false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `对于集群操作人员创建的命名空间，你可以使用以下脚本和配置文件来配置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `请将下面的配置保存到名为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `account_update.yaml`), ` 的文件中：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
automountServiceAccountToken: false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `创建一个名为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `account_update.sh`), ` 的 bash 脚本文件。确保为脚本设置了 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `sudo chmod +x account_update.sh`), `，使脚本具有执行权限：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/bin/bash -e

for namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*]['metadata.name']}"); do
  echo -n "Patching namespace $namespace - "
  kubectl patch serviceaccount default -n \${namespace} -p "$(cat account_update.yaml)"
done
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `执行此脚本，将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `account_update.yaml`), ` 配置应用到所有命名空间中的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "api-server-审计配置"
    }, `API Server 审计配置`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CIS 1.2.22 到 1.2.25 要求为 API Server 配置审计日志。如果 RKE2 在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 标志设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.6`), ` 的情况下启动，它会自动在 API Server 中配置强化的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `--audit-log-`), ` 参数来通过这些 CIS 检查。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RKE2 的默认审计策略不会在 API Server 中记录请求。这样，集群操作人员就能灵活地定制符合其审计要求和需求的审计策略，从而满足不同用户的不同环境和策略需求。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果启动时 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile`), ` 标志设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cis-1.6`), `，RKE2 会创建默认审计策略。该策略在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/etc/rancher/rke2/audit-policy.yaml`), ` 中定义。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: audit.k8s.io/v1
kind: Policy
metadata:
  creationTimestamp: null
rules:
- level: None
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要开始记录对 API Server 的请求，你至少必须修改 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `level`), ` 参数，例如将其修改为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Metadata`), `。有关 API Server 策略配置的详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/tasks/debug-application-cluster/audit/"
    }, `Kubernetes 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `调整审计策略后，RKE2 必须重新启动才能加载新配置。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-shell"
    }, `sudo systemctl restart rke2-server.service
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `API Server 审计日志将写入 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/var/lib/rancher/rke2/server/logs/audit.log`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "已知问题"
    }, `已知问题`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `以下是 RKE2 目前没有通过的管控。此处将解释各个差距，以及这些差距是否可以通过手动干预或在未来的版本中解决。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "管控--1112"
    }, `管控  1.1.12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `确保 etcd 数据目录所有权设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `etcd:etcd`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `原因`), `
etcd 是 Kubernetes deployment 使用的高可用键值存储，用于持久存储其所有 REST API 对象。你需要保护此数据目录，避免任何未经授权的读取或写入。它的所有者应该是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `etcd:etcd`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `修正措施`), `
创建如上所述的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `etcd`), ` 用户和组。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "管控-515"
    }, `管控 5.1.5`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `确保未主动使用默认 ServiceAccount`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `原因`), `：Kubernetes 为集群工作负载提供了一个 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount，但没有为 pod 分配特定 ServiceAccount 。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果需要从 pod 访问 Kubernetes API，则需要为该 pod 创建一个特定的 ServiceAccount 并授予权限。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你还需要配置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount，使其不提供 ServiceAccount 令牌并且没有任何显式的权限分配。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `可以通过将每个命名空间中 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` ServiceAccount 的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `automountServiceAccountToken`), ` 字段更新为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `false`), ` 来解决此问题。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `修正措施`), `
手动更新集群中服务账户上的此字段。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "管控-532"
    }, `管控 5.3.2`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `确保所有命名空间都定义了网络策略`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `原因`), `
如果你在同一个 Kubernetes 集群上运行不同的应用程序，被感染的应用程序可能会攻击相邻的应用程序。要确保容器只进行所需的通信，网络分段非常重要。网络策略指的是如何允许 Pod 与其他 Pod 以及与其他网络端点进行通信。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `网络策略是命名空间范围的。为某个命名空间配置网络策略后，该策略不允许的所有其他流量都会被拒绝。但是，如果命名空间没有配置网络策略，则所有流量都会允许进出该命名空间中的 Pod。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `修正措施`), `
在 RKE2 模板配置文件中设置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `profile: "cis-1.6"`), `。你可以在下方找到示例。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "强化-rke2-模板配置参考"
    }, `强化 RKE2 模板配置参考`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `模板配置参考可用于在 Rancher 中创建强化的 RKE2 自定义集群。此参考不包括其他必需的`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `集群配置`), `参数，该参数会因你的环境而异。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  name: <replace_with_cluster_name>
  annotations:
    {}
#    key: string
  labels:
    {}
#    key: string
  namespace: fleet-default
spec:
  defaultPodSecurityPolicyTemplateName: ''
  kubernetesVersion: <replace_with_kubernetes_version>
  localClusterAuthEndpoint:
    caCerts: ''
    enabled: false
    fqdn: ''
  rkeConfig:
    chartValues:
      rke2-canal:
        {}
    etcd:
      disableSnapshots: false
      s3:
#        bucket: string
#        cloudCredentialName: string
#        endpoint: string
#        endpointCA: string
#        folder: string
#        region: string
#        skipSSLVerify: boolean
      snapshotRetention: 5
      snapshotScheduleCron: 0 */5 * * *
    machineGlobalConfig:
      cni: canal
    machinePools:
#      - cloudCredentialSecretName: string
#        controlPlaneRole: boolean
#        displayName: string
#        drainBeforeDelete: boolean
#        etcdRole: boolean
#        labels:
#          key: string
#        machineConfigRef:
#          apiVersion: string
#          fieldPath: string
#          kind: string
#          name: string
#          namespace: string
#          resourceVersion: string
#          uid: string
#        machineDeploymentAnnotations:
#          key: string
#        machineDeploymentLabels:
#          key: string
#        machineOS: string
#        maxUnhealthy: string
#        name: string
#        nodeStartupTimeout: string
#        paused: boolean
#        quantity: int
#        rollingUpdate:
#          maxSurge: string
#          maxUnavailable: string
#        taints:
#          - effect: string
#            key: string
#            timeAdded: string
#            value: string
#        unhealthyNodeTimeout: string
#        unhealthyRange: string
#        workerRole: boolean
    machineSelectorConfig:
      - config:
          profile: cis-1.6
          protect-kernel-defaults: true
#      - config:
#
#        machineLabelSelector:
#          matchExpressions:
#            - key: string
#              operator: string
#              values:
#                - string
#          matchLabels:
#            key: string
    registries:
      configs:
        {}
        #authConfigSecretName: string
#          caBundle: string
#          insecureSkipVerify: boolean
#          tlsSecretName: string
      mirrors:
        {}
        #endpoint:
#            - string
#          rewrite:
#            key: string
    upgradeStrategy:
      controlPlaneConcurrency: 10%
      controlPlaneDrainOptions:
#        deleteEmptyDirData: boolean
#        disableEviction: boolean
#        enabled: boolean
#        force: boolean
#        gracePeriod: int
#        ignoreDaemonSets: boolean
#        ignoreErrors: boolean
#        postDrainHooks:
#          - annotation: string
#        preDrainHooks:
#          - annotation: string
#        skipWaitForDeleteTimeoutSeconds: int
#        timeout: int
      workerConcurrency: 10%
      workerDrainOptions:
#        deleteEmptyDirData: boolean
#        disableEviction: boolean
#        enabled: boolean
#        force: boolean
#        gracePeriod: int
#        ignoreDaemonSets: boolean
#        ignoreErrors: boolean
#        postDrainHooks:
#          - annotation: string
#        preDrainHooks:
#          - annotation: string
#        skipWaitForDeleteTimeoutSeconds: int
#        timeout: int
#    additionalManifest: string
#    etcdSnapshotCreate:
#      generation: int
#    etcdSnapshotRestore:
#      generation: int
#      name: string
#      restoreRKEConfig: string
#    infrastructureRef:
#      apiVersion: string
#      fieldPath: string
#      kind: string
#      name: string
#      namespace: string
#      resourceVersion: string
#      uid: string
#    provisionGeneration: int
#    rotateCertificates:
#      generation: int
#      services:
#        - string
#    rotateEncryptionKeys:
#      generation: int
  machineSelectorConfig:
    - config: {}
#  agentEnvVars:
#    - name: string
#      value: string
#  cloudCredentialSecretName: string
#  clusterAPIConfig:
#    clusterName: string
#  defaultClusterRoleForProjectMembers: string
#  enableNetworkPolicy: boolean
#  redeploySystemAgentGeneration: int
__clone: true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "结论"
    }, `结论`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你遵循本指南，Rancher 配置的 RKE2 自定义集群将能通过 CIS Kubernetes Benchmark。如需了解我们验证 Benchmark 的方式，以及你如何在集群上执行相同的操作，请参阅 Rancher 的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"
    }, `RKE2 CIS Benchmark 自我评估指南 1.6`), `。`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);