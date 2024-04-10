"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[8244],{

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

/***/ 82386:
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
    title: '启用 API 审计日志以记录系统事件'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "how-to-guides/advanced-user-guides/enable-api-audit-log",
    "id": "version-2.8/how-to-guides/advanced-user-guides/enable-api-audit-log",
    "title": "启用 API 审计日志以记录系统事件",
    "description": "你可以启用 API 审计日志来记录各个用户发起的系统事件的顺序。通过查看日志，你可以了解发生了什么事件、事件发生的时间，事件发起人，以及事件影响的集群。启用此功能后，所有 Rancher API 的请求和响应都会写入日志中。",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.8/how-to-guides/advanced-user-guides/enable-api-audit-log.md",
    "sourceDirName": "how-to-guides/advanced-user-guides",
    "slug": "/how-to-guides/advanced-user-guides/enable-api-audit-log",
    "permalink": "/zh/v2.8/how-to-guides/advanced-user-guides/enable-api-audit-log",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.8/how-to-guides/advanced-user-guides/enable-api-audit-log.md",
    "tags": [],
    "version": "2.8",
    "lastUpdatedAt": 1696627994,
    "formattedLastUpdatedAt": "2023年10月6日",
    "frontMatter": {
        "title": "启用 API 审计日志以记录系统事件"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "为大型安装进行 etcd 调优",
        "permalink": "/zh/v2.8/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs"
    },
    "next": {
        "title": "下游集群开启 API 审计日志",
        "permalink": "/zh/v2.8/how-to-guides/advanced-user-guides/enable-api-audit-log-in-downstream-clusters"
    }
};
const assets = {};
const toc = [
    {
        value: '启用 API 审计日志',
        id: '启用-api-审计日志',
        level: 2
    },
    {
        value: 'API 审计日志选项',
        id: 'api-审计日志选项',
        level: 2
    },
    {
        value: '审核日志级别',
        id: '审核日志级别',
        level: 3
    },
    {
        value: '查看 API 审计日志',
        id: '查看-api-审计日志',
        level: 2
    },
    {
        value: 'Docker 安装',
        id: 'docker-安装',
        level: 3
    },
    {
        value: 'Kubernetes 安装',
        id: 'kubernetes-安装',
        level: 3
    },
    {
        value: 'CLI',
        id: 'cli',
        level: 4
    },
    {
        value: '发送审计日志',
        id: '发送审计日志',
        level: 4
    },
    {
        value: '审计日志示例',
        id: '审计日志示例',
        level: 2
    },
    {
        value: '元数据日志级别',
        id: '元数据日志级别',
        level: 3
    },
    {
        value: '元数据和请求体日志级别',
        id: '元数据和请求体日志级别',
        level: 3
    },
    {
        value: '元数据、请求体和响应体日志级别',
        id: '元数据请求体和响应体日志级别',
        level: 3
    },
    {
        value: '请求',
        id: '请求',
        level: 4
    },
    {
        value: '响应',
        id: '响应',
        level: 4
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以启用 API 审计日志来记录各个用户发起的系统事件的顺序。通过查看日志，你可以了解发生了什么事件、事件发生的时间，事件发起人，以及事件影响的集群。启用此功能后，所有 Rancher API 的请求和响应都会写入日志中。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `API 审计可以在 Rancher 安装或升级期间启用。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "启用-api-审计日志"
    }, `启用 API 审计日志`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以将环境变量传递给 Rancher Server 容器，从而启用和配置审计日志。请参见以下文档，在安装时启用该功能：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.8/reference-guides/single-node-rancher-in-docker/advanced-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"
    }, `Docker 安装`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.8/getting-started/installation-and-upgrade/installation-references/helm-chart-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"
    }, `Kubernetes 安装`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "api-审计日志选项"
    }, `API 审计日志选项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `以下参数定义了审计日志的记录规则，其中包括应该记录什么内容以及包括什么数据：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `参数`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        id: "audit-level"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `AUDIT_LEVEL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `0`), ` - 禁用审计日志（默认）`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `1`), ` - 日志事件元数据`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `2`), ` - 日志事件元数据和请求体`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `3`), ` - 日志事件元数据，请求体和响应体。请求/响应对的每个日志事务都使用同一个的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `auditID`), `。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), ` 如需了解每个设置记录的日志内容，请参见`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#%E5%AE%A1%E6%A0%B8%E6%97%A5%E5%BF%97%E7%BA%A7%E5%88%AB"
    }, `审计日志级别`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `AUDIT_LOG_PATH`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher Server API 的日志路径。默认路径：`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `/var/log/auditlog/rancher-api-audit.log`), `。你可以将日志目录挂载到主机。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), `示例：`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `AUDIT_LOG_PATH=/my/custom/path/`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `AUDIT_LOG_MAXAGE`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `旧审计日志文件可保留的最大天数。默认为 10 天。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `AUDIT_LOG_MAXBACKUP`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `保留的审计日志最大文件个数。默认值为 10。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `AUDIT_LOG_MAXSIZE`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `在审计日志文件被轮换前的最大容量，单位是 MB。默认大小为 100MB。`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "审核日志级别"
    }, `审核日志级别`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `下表介绍了每个 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#audit-level"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "a"
    }, `AUDIT_LEVEL`)), ` 记录的 API 事务：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "th"
    }, `AUDIT_LEVEL`), ` 设置`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `请求元数据`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `请求体`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `响应元数据`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `响应体`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `0`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `1`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `2`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `3`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "查看-api-审计日志"
    }, `查看 API 审计日志`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "docker-安装"
    }, `Docker 安装`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `与主机系统共享 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `AUDIT_LOG_PATH`), ` 目录（默认目录：`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/var/log/auditlog`), `）。日志可以通过标准 CLI 工具进行解析，也可以转发到 Fluentd、Filebeat、Logstash 等日志收集工具。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "kubernetes-安装"
    }, `Kubernetes 安装`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用 Helm Chart 安装 Rancher 时启动 API 审计日志，会在 Rancher Pod 中创建一个 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rancher-audit-log`), ` Sidecar 容器。该容器会将日志发送到标准输出 (stdout)。你可以像查看其他容器的日志一样查看 API 审计日志。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rancher-audit-log`), ` 容器位于 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `cattle-system`), ` 命名空间中的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rancher`), ` Pod 中。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cli"
    }, `CLI`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `kubectl -n cattle-system logs -f rancher-84d886bdbb-s4s69 rancher-audit-log
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "发送审计日志"
    }, `发送审计日志`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以为集群启用 Rancher 的内置日志收集和传送功能，将审计日志和其他服务日志发送到支持的 endpoint。详情请参见 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../pages-for-subheaders/logging.md"
    }, `Rancher 工具 - Logging`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "审计日志示例"
    }, `审计日志示例`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `启用审计日志后，Rancher 会以 JSON 格式记录每个 API 的请求和响应。下文的代码示例展示了如何查看 API 事务。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "元数据日志级别"
    }, `元数据日志级别`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `AUDIT_LEVEL`), ` 设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `1`), `，Rancher 只会记录每个 API 请求的元数据标头，而不会记录请求体。标头记录了 API 事务的基本信息，包括 ID、发起人、发起时间等。代码示例如下：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-json"
    }, `{
  "auditID": "30022177-9e2e-43d1-b0d0-06ef9d3db183",
  "requestURI": "/v3/schemas",
  "sourceIPs": ["::1"],
  "user": {
    "name": "user-f4tt2",
    "group": ["system:authenticated"]
  },
  "verb": "GET",
  "stage": "RequestReceived",
  "stageTimestamp": "2018-07-20 10:22:43 +0800"
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "元数据和请求体日志级别"
    }, `元数据和请求体日志级别`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `AUDIT_LEVEL`), ` 设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `2`), `，Rancher 会记录每个 API 请求的元数据标头和请求体。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `下面的代码示例描述了一个 API 请求，包括它的元数据标头和正文：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-json"
    }, `{
  "auditID": "ef1d249e-bfac-4fd0-a61f-cbdcad53b9bb",
  "requestURI": "/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",
  "sourceIPs": ["::1"],
  "user": {
    "name": "user-f4tt2",
    "group": ["system:authenticated"]
  },
  "verb": "PUT",
  "stage": "RequestReceived",
  "stageTimestamp": "2018-07-20 10:28:08 +0800",
  "requestBody": {
    "hostIPC": false,
    "hostNetwork": false,
    "hostPID": false,
    "paused": false,
    "annotations": {},
    "baseType": "workload",
    "containers": [
      {
        "allowPrivilegeEscalation": false,
        "image": "nginx",
        "imagePullPolicy": "Always",
        "initContainer": false,
        "name": "nginx",
        "ports": [
          {
            "containerPort": 80,
            "dnsName": "nginx-nodeport",
            "kind": "NodePort",
            "name": "80tcp01",
            "protocol": "TCP",
            "sourcePort": 0,
            "type": "/v3/project/schemas/containerPort"
          }
        ],
        "privileged": false,
        "readOnly": false,
        "resources": {
          "type": "/v3/project/schemas/resourceRequirements",
          "requests": {},
          "limits": {}
        },
        "restartCount": 0,
        "runAsNonRoot": false,
        "stdin": true,
        "stdinOnce": false,
        "terminationMessagePath": "/dev/termination-log",
        "terminationMessagePolicy": "File",
        "tty": true,
        "type": "/v3/project/schemas/container",
        "environmentFrom": [],
        "capAdd": [],
        "capDrop": [],
        "livenessProbe": null,
        "volumeMounts": []
      }
    ],
    "created": "2018-07-18T07:34:16Z",
    "createdTS": 1531899256000,
    "creatorId": null,
    "deploymentConfig": {
      "maxSurge": 1,
      "maxUnavailable": 0,
      "minReadySeconds": 0,
      "progressDeadlineSeconds": 600,
      "revisionHistoryLimit": 10,
      "strategy": "RollingUpdate"
    },
    "deploymentStatus": {
      "availableReplicas": 1,
      "conditions": [
        {
          "lastTransitionTime": "2018-07-18T07:34:38Z",
          "lastTransitionTimeTS": 1531899278000,
          "lastUpdateTime": "2018-07-18T07:34:38Z",
          "lastUpdateTimeTS": 1531899278000,
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available"
        },
        {
          "lastTransitionTime": "2018-07-18T07:34:16Z",
          "lastTransitionTimeTS": 1531899256000,
          "lastUpdateTime": "2018-07-18T07:34:38Z",
          "lastUpdateTimeTS": 1531899278000,
          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",
          "reason": "NewReplicaSetAvailable",
          "status": "True",
          "type": "Progressing"
        }
      ],
      "observedGeneration": 2,
      "readyReplicas": 1,
      "replicas": 1,
      "type": "/v3/project/schemas/deploymentStatus",
      "unavailableReplicas": 0,
      "updatedReplicas": 1
    },
    "dnsPolicy": "ClusterFirst",
    "id": "deployment:default:nginx",
    "labels": {
      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
    },
    "name": "nginx",
    "namespaceId": "default",
    "projectId": "c-bcz5t:p-fdr4s",
    "publicEndpoints": [
      {
        "addresses": ["10.64.3.58"],
        "allNodes": true,
        "ingressId": null,
        "nodeId": null,
        "podId": null,
        "port": 30917,
        "protocol": "TCP",
        "serviceId": "default:nginx-nodeport",
        "type": "publicEndpoint"
      }
    ],
    "restartPolicy": "Always",
    "scale": 1,
    "schedulerName": "default-scheduler",
    "selector": {
      "matchLabels": {
        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
      },
      "type": "/v3/project/schemas/labelSelector"
    },
    "state": "active",
    "terminationGracePeriodSeconds": 30,
    "transitioning": "no",
    "transitioningMessage": "",
    "type": "deployment",
    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",
    "workloadAnnotations": {
      "deployment.kubernetes.io/revision": "1",
      "field.cattle.io/creatorId": "user-f4tt2"
    },
    "workloadLabels": {
      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
    },
    "scheduling": {
      "node": {}
    },
    "description": "my description",
    "volumes": []
  }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "元数据请求体和响应体日志级别"
    }, `元数据、请求体和响应体日志级别`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你将 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `AUDIT_LEVEL`), ` 设置为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `3`), `，Rancher 会记录：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `每个 API 请求的元数据标头和请求体。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `每个 API 响应的元数据标头和响应体。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "请求"
    }, `请求`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `下面的代码示例描述了一个 API 请求，包括它的元数据标头和正文：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-json"
    }, `{
  "auditID": "a886fd9f-5d6b-4ae3-9a10-5bff8f3d68af",
  "requestURI": "/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",
  "sourceIPs": ["::1"],
  "user": {
    "name": "user-f4tt2",
    "group": ["system:authenticated"]
  },
  "verb": "PUT",
  "stage": "RequestReceived",
  "stageTimestamp": "2018-07-20 10:33:06 +0800",
  "requestBody": {
    "hostIPC": false,
    "hostNetwork": false,
    "hostPID": false,
    "paused": false,
    "annotations": {},
    "baseType": "workload",
    "containers": [
      {
        "allowPrivilegeEscalation": false,
        "image": "nginx",
        "imagePullPolicy": "Always",
        "initContainer": false,
        "name": "nginx",
        "ports": [
          {
            "containerPort": 80,
            "dnsName": "nginx-nodeport",
            "kind": "NodePort",
            "name": "80tcp01",
            "protocol": "TCP",
            "sourcePort": 0,
            "type": "/v3/project/schemas/containerPort"
          }
        ],
        "privileged": false,
        "readOnly": false,
        "resources": {
          "type": "/v3/project/schemas/resourceRequirements",
          "requests": {},
          "limits": {}
        },
        "restartCount": 0,
        "runAsNonRoot": false,
        "stdin": true,
        "stdinOnce": false,
        "terminationMessagePath": "/dev/termination-log",
        "terminationMessagePolicy": "File",
        "tty": true,
        "type": "/v3/project/schemas/container",
        "environmentFrom": [],
        "capAdd": [],
        "capDrop": [],
        "livenessProbe": null,
        "volumeMounts": []
      }
    ],
    "created": "2018-07-18T07:34:16Z",
    "createdTS": 1531899256000,
    "creatorId": null,
    "deploymentConfig": {
      "maxSurge": 1,
      "maxUnavailable": 0,
      "minReadySeconds": 0,
      "progressDeadlineSeconds": 600,
      "revisionHistoryLimit": 10,
      "strategy": "RollingUpdate"
    },
    "deploymentStatus": {
      "availableReplicas": 1,
      "conditions": [
        {
          "lastTransitionTime": "2018-07-18T07:34:38Z",
          "lastTransitionTimeTS": 1531899278000,
          "lastUpdateTime": "2018-07-18T07:34:38Z",
          "lastUpdateTimeTS": 1531899278000,
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available"
        },
        {
          "lastTransitionTime": "2018-07-18T07:34:16Z",
          "lastTransitionTimeTS": 1531899256000,
          "lastUpdateTime": "2018-07-18T07:34:38Z",
          "lastUpdateTimeTS": 1531899278000,
          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",
          "reason": "NewReplicaSetAvailable",
          "status": "True",
          "type": "Progressing"
        }
      ],
      "observedGeneration": 2,
      "readyReplicas": 1,
      "replicas": 1,
      "type": "/v3/project/schemas/deploymentStatus",
      "unavailableReplicas": 0,
      "updatedReplicas": 1
    },
    "dnsPolicy": "ClusterFirst",
    "id": "deployment:default:nginx",
    "labels": {
      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
    },
    "name": "nginx",
    "namespaceId": "default",
    "projectId": "c-bcz5t:p-fdr4s",
    "publicEndpoints": [
      {
        "addresses": ["10.64.3.58"],
        "allNodes": true,
        "ingressId": null,
        "nodeId": null,
        "podId": null,
        "port": 30917,
        "protocol": "TCP",
        "serviceId": "default:nginx-nodeport",
        "type": "publicEndpoint"
      }
    ],
    "restartPolicy": "Always",
    "scale": 1,
    "schedulerName": "default-scheduler",
    "selector": {
      "matchLabels": {
        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
      },
      "type": "/v3/project/schemas/labelSelector"
    },
    "state": "active",
    "terminationGracePeriodSeconds": 30,
    "transitioning": "no",
    "transitioningMessage": "",
    "type": "deployment",
    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",
    "workloadAnnotations": {
      "deployment.kubernetes.io/revision": "1",
      "field.cattle.io/creatorId": "user-f4tt2"
    },
    "workloadLabels": {
      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
    },
    "scheduling": {
      "node": {}
    },
    "description": "my decript",
    "volumes": []
  }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "响应"
    }, `响应`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `下面的代码示例描述了一个 API 响应，包括它的元数据标头和正文：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-json"
    }, `{
  "auditID": "a886fd9f-5d6b-4ae3-9a10-5bff8f3d68af",
  "responseStatus": "200",
  "stage": "ResponseComplete",
  "stageTimestamp": "2018-07-20 10:33:06 +0800",
  "responseBody": {
    "actionLinks": {
      "pause": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=pause",
      "resume": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=resume",
      "rollback": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=rollback"
    },
    "annotations": {},
    "baseType": "workload",
    "containers": [
      {
        "allowPrivilegeEscalation": false,
        "image": "nginx",
        "imagePullPolicy": "Always",
        "initContainer": false,
        "name": "nginx",
        "ports": [
          {
            "containerPort": 80,
            "dnsName": "nginx-nodeport",
            "kind": "NodePort",
            "name": "80tcp01",
            "protocol": "TCP",
            "sourcePort": 0,
            "type": "/v3/project/schemas/containerPort"
          }
        ],
        "privileged": false,
        "readOnly": false,
        "resources": {
          "type": "/v3/project/schemas/resourceRequirements"
        },
        "restartCount": 0,
        "runAsNonRoot": false,
        "stdin": true,
        "stdinOnce": false,
        "terminationMessagePath": "/dev/termination-log",
        "terminationMessagePolicy": "File",
        "tty": true,
        "type": "/v3/project/schemas/container"
      }
    ],
    "created": "2018-07-18T07:34:16Z",
    "createdTS": 1531899256000,
    "creatorId": null,
    "deploymentConfig": {
      "maxSurge": 1,
      "maxUnavailable": 0,
      "minReadySeconds": 0,
      "progressDeadlineSeconds": 600,
      "revisionHistoryLimit": 10,
      "strategy": "RollingUpdate"
    },
    "deploymentStatus": {
      "availableReplicas": 1,
      "conditions": [
        {
          "lastTransitionTime": "2018-07-18T07:34:38Z",
          "lastTransitionTimeTS": 1531899278000,
          "lastUpdateTime": "2018-07-18T07:34:38Z",
          "lastUpdateTimeTS": 1531899278000,
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available"
        },
        {
          "lastTransitionTime": "2018-07-18T07:34:16Z",
          "lastTransitionTimeTS": 1531899256000,
          "lastUpdateTime": "2018-07-18T07:34:38Z",
          "lastUpdateTimeTS": 1531899278000,
          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",
          "reason": "NewReplicaSetAvailable",
          "status": "True",
          "type": "Progressing"
        }
      ],
      "observedGeneration": 2,
      "readyReplicas": 1,
      "replicas": 1,
      "type": "/v3/project/schemas/deploymentStatus",
      "unavailableReplicas": 0,
      "updatedReplicas": 1
    },
    "dnsPolicy": "ClusterFirst",
    "hostIPC": false,
    "hostNetwork": false,
    "hostPID": false,
    "id": "deployment:default:nginx",
    "labels": {
      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
    },
    "links": {
      "remove": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",
      "revisions": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx/revisions",
      "self": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",
      "update": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",
      "yaml": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx/yaml"
    },
    "name": "nginx",
    "namespaceId": "default",
    "paused": false,
    "projectId": "c-bcz5t:p-fdr4s",
    "publicEndpoints": [
      {
        "addresses": ["10.64.3.58"],
        "allNodes": true,
        "ingressId": null,
        "nodeId": null,
        "podId": null,
        "port": 30917,
        "protocol": "TCP",
        "serviceId": "default:nginx-nodeport"
      }
    ],
    "restartPolicy": "Always",
    "scale": 1,
    "schedulerName": "default-scheduler",
    "selector": {
      "matchLabels": {
        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
      },
      "type": "/v3/project/schemas/labelSelector"
    },
    "state": "active",
    "terminationGracePeriodSeconds": 30,
    "transitioning": "no",
    "transitioningMessage": "",
    "type": "deployment",
    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",
    "workloadAnnotations": {
      "deployment.kubernetes.io/revision": "1",
      "field.cattle.io/creatorId": "user-f4tt2"
    },
    "workloadLabels": {
      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"
    }
  }
}
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);