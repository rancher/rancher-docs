"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[8877],{

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

/***/ 75518:
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
    title: '部署带有 NodePort 的工作负载'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "getting-started/quick-start-guides/deploy-workloads/nodeports",
    "id": "version-2.7/getting-started/quick-start-guides/deploy-workloads/nodeports",
    "title": "部署带有 NodePort 的工作负载",
    "description": "先决条件",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.7/getting-started/quick-start-guides/deploy-workloads/nodeports.md",
    "sourceDirName": "getting-started/quick-start-guides/deploy-workloads",
    "slug": "/getting-started/quick-start-guides/deploy-workloads/nodeports",
    "permalink": "/zh/v2.7/getting-started/quick-start-guides/deploy-workloads/nodeports",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.7/getting-started/quick-start-guides/deploy-workloads/nodeports.md",
    "tags": [],
    "version": "2.7",
    "lastUpdatedAt": 1686092423,
    "formattedLastUpdatedAt": "2023年6月6日",
    "frontMatter": {
        "title": "部署带有 NodePort 的工作负载"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "部署带有 Ingress 的工作负载",
        "permalink": "/zh/v2.7/getting-started/quick-start-guides/deploy-workloads/workload-ingress"
    },
    "next": {
        "title": "安装/升级 Rancher",
        "permalink": "/zh/v2.7/getting-started/installation-and-upgrade/"
    }
};
const assets = {};
const toc = [
    {
        value: '先决条件',
        id: '先决条件',
        level: 3
    },
    {
        value: '1. 部署工作负载',
        id: '1-部署工作负载',
        level: 3
    },
    {
        value: '2. 查看应用',
        id: '2-查看应用',
        level: 3
    },
    {
        value: '注意事项',
        id: '注意事项',
        level: 3
    },
    {
        value: '已完成！',
        id: '已完成',
        level: 3
    },
    {
        value: '后续操作',
        id: '后续操作',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "先决条件"
    }, `先决条件`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你已有一个正在运行的集群，且该集群中有至少一个节点。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1-部署工作负载"
    }, `1. 部署工作负载`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以开始创建你的第一个 Kubernetes `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/workloads/"
    }, `工作负载`), `。工作负载是一个对象，其中包含 pod 以及部署应用所需的其他文件和信息。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在本文的工作负载中，你将部署一个 Rancher Hello-World 应用。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `点击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `☰ > 集群管理`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `在`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `集群`), `页面中，进入需要部署工作负载的集群，然后单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Explore`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `点击`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `工作负载`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `单击`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `创建`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `为工作负载设置`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `名称`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `在`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `容器镜像`), `字段中，输入 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rancher/hello-world`), `。注意区分大小写。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `点击`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `添加端口`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `在`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `服务类型`), `下拉菜单中，确保选择了 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `NodePort`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "NodePort 下拉菜单（在每个所选节点处）",
        src: (__webpack_require__(71046)/* ["default"] */ .Z),
        width: "513",
        height: "135"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `在`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `发布容器端口`), `字段中，输入端口`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `80`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "发布容器端口，端口 80 已输入",
        src: (__webpack_require__(6152)/* ["default"] */ .Z),
        width: "550",
        height: "234"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `单击`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `创建`), `。`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `结果`), `：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `工作负载已部署。此过程可能需要几分钟。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `当工作负载完成部署后，它的状态会变为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Active`), `。你可以从项目的`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `工作负载`), `页面查看其状态。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "2-查看应用"
    }, `2. 查看应用`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `工作负载`), `页面中，点击工作负载下方的链接。如果 deployment 已完成，你的应用会打开。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "注意事项"
    }, `注意事项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果使用云虚拟机，你可能无法访问运行容器的端口。这种情况下，你可以使用 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Execute Shell`), ` 在本地主机的 SSH 会话中测试 Nginx。如果可用的话，使用工作负载下方的链接中 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `:`), ` 后面的端口号。在本例中，端口号为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `31568`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-html"
    }, `gettingstarted@rancher:~$ curl http://localhost:31568
<!DOCTYPE html>
<html>
  <head>
    <title>Rancher</title>
    <link rel="icon" href="img/favicon.png">
    <style>
      body {
        background-color: white;
        text-align: center;
        padding: 50px;
        font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
      }
      button {
          background-color: #0075a8;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
      }

      #logo {
        margin-bottom: 40px;
      }
    </style>
  </head>
  <body>
    <img id="logo" src="img/rancher-logo.svg" alt="Rancher logo" width=400 />
    <h1>Hello world!</h1>
    <h3>My hostname is hello-world-66b4b9d88b-78bhx</h3>
    <div id='Services'>
      <h3>k8s services found 2</h3>

      <b>INGRESS_D1E1A394F61C108633C4BD37AEDDE757</b> tcp://10.43.203.31:80<br />

      <b>KUBERNETES</b> tcp://10.43.0.1:443<br />

    </div>
    <br />

    <div id='rancherLinks' class="row social">
      <a class="p-a-xs" href="https://rancher.com/docs"><img src="img/favicon.png" alt="Docs" height="25" width="25"></a>
      <a class="p-a-xs" href="https://slack.rancher.io/"><img src="img/icon-slack.svg" alt="slack" height="25" width="25"></a>
      <a class="p-a-xs" href="https://github.com/rancher/rancher"><img src="img/icon-github.svg" alt="github" height="25" width="25"></a>
      <a class="p-a-xs" href="https://twitter.com/Rancher_Labs"><img src="img/icon-twitter.svg" alt="twitter" height="25" width="25"></a>
      <a class="p-a-xs" href="https://www.facebook.com/rancherlabs/"><img src="img/icon-facebook.svg" alt="facebook" height="25" width="25"></a>
      <a class="p-a-xs" href="https://www.linkedin.com/groups/6977008/profile"><img src="img/icon-linkedin.svg" height="25" alt="linkedin" width="25"></a>
    </div>
    <br />
    <button class='button' onclick='myFunction()'>Show request details</button>
    <div id="reqInfo" style='display:none'>
      <h3>Request info</h3>
      <b>Host:</b> 172.22.101.111:31411 <br />
      <b>Pod:</b> hello-world-66b4b9d88b-78bhx </b><br />

      <b>Accept:</b> [*/*]<br />

      <b>User-Agent:</b> [curl/7.47.0]<br />

    </div>
    <br />
    <script>
      function myFunction() {
          var x = document.getElementById("reqInfo");
          if (x.style.display === "none") {
              x.style.display = "block";
          } else {
              x.style.display = "none";
          }
      }
    </script>
  </body>
</html>
gettingstarted@rancher:~$

`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "已完成"
    }, `已完成！`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `恭喜！你已成功通过 NodePort 部署工作负载。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "后续操作"
    }, `后续操作`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用完沙盒后，你需要清理 Rancher Server 和集群。详情请参见：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/aws#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"
    }, `Amazon AWS：销毁环境`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"
    }, `DigitalOcean：销毁环境`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/vagrant#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"
    }, `Vagrant：销毁环境`))));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 6152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAADqCAIAAAAZGRn3AAAWf0lEQVR42u3d/VMbd2LH8fufer+lP90MP7iTdCaTa9LrXdqbXJO0TSeZuctNMtfr+J56NxM11EyQFSOdZJ5kyUgWtgAhDLYMhCdjgQDzbJ4EGCwZEAKEtcB2d/W0klYgMMHGfr/m8wNIK7ErwX68+/2u/AMRAIAz8QNeAgAAlQMAoHIAAKByAABUDgCAygEAgMoBAFA5AABQOQAAKgcAQOUAAEDlAACoHAAAqBwAAJUDAKByAACgcgAAVA4AAFQOAOB1q5xga61Jp1fH8o3N4xt9Gj+TDet3m3SGhp5ogbuFhzeNJp07cGYv9OMuV6nJOxDlVw4AlfM9VU79/SehcCpzD9puluurXYGt53ri6d76xnv+UBGVozdVda5q3rve6y7Vn2nlRAO3jbb2cYFfOQBUzvdUObn7dCHQVKmr6wk9zxMPeHT6660LRVWOztgS0NjLzzRXKfeeYeUAAM64csRor1un9/SfTeVYbBUGs/1+7kFVfKSlTH+jyk7lAMArXTlxf5OqcoTQaLfTVn1JHukxl5mdzs7xUOagJODUm5wDmWWcA6ljl2QOKx55ydqOnjabzt79OOuerZ56c5k70OVWrV5o+JbN+s0V5WkNlXqbxzceyV4NcX1ctaqVrob+pVhWC0obFRnt9Fw1WRJPUlHX1ru4K+Yuo/p6d6nX66owmqXlS43X7L7JdfULFR73uZ2JVSo11lxt8i/syi+p2RfktxYAlVNU5Uy0WqUmmFP6ZsbnKDXYXD1TQWWwZ3rQZ7WYL9m+mxEy+3qr23O5qrF1cE5aYGNXjG2En/Q06PR2z5j0kLWocETlzK10V+ltzY9Ud6Ru6c+qnLGu/uRqJMecDI47C9mrYbnVrKyGssCtywZzhXcsmqmQm0537WWn78Gs8iSzQ83OWmnrGh5uFaic6xZrpanJP53Y9n6vdEBW05UaedoIOE2mSzUtnZNL8rMtTnU2XS+zehw1VA4AKqeYyhG2Z9U71ke+Cn21cyCS9aCNQYcxveeV9/W62vaZnF4p/sSa3G3yMU1pvT81U0wZTFKOe7IqJ9eqz24ytE5nVsPk6d/IWmLd31SWLjN5lUzl7sB61iKRvluVuirflHblmC2+edXkPWXFrN8FU8dheRsuBDtdpXoqBwCVU6hy9Nm5YrV3zibORwXbHTrL3Ym8hw03p+cXyPt6jT3s8SpHjE/drdDf8K0ot0b9dkOlc2BLzK6c+PJgQ921MkPi/J69xtvndabvlVfDeHc+7ydMeyyp2+VVst+ey1tk6q4hfXveUU7OJsz5rqeO/+SfaOvNn9dX4AUBACond5L0xq5mJeTI2fM+f+UkDlkq2makrx533kgfdmQqRxhzm0zljo6hxXDiLFavfN4sq3K0dvSRznQtFVqljT6rMg50vMpZ6DCnH0XlAKByiq2cwlPC5D3smRzlyMc29xtK5dnS8tzo9JU6mcpRH4uoH85RDgC8GpVTeCwn3QoF9rABb+kxKydxHGO2OkpVn0dwaOWojmAKjeUMeMqPGsvpd1cXHss5pHI0x3KSl69SOQConONXToEZa6XWDvWMNY09bKiv1mC23J2SHhJcjRRVOYlTavrk6bXcysk5sSZPNrNeyj6xZrA68mesXW4aVs1Ys1qs+TPWausDBWesFa6cvBlryiS6y5bacioHAJVzosqR7C4M+uzViYtdTJdMGtflaO1hhSV/izlxOUvjcJGVo0wcSE0iyKkcZfpAffY1N73unLGceeXyoJrkFAON63Kut849Hen0XDVXlhZ1Xc6hlaN9XQ4n1gBQOa+4Inb0xQ0vPS9h0KE9rQAAqBwq51QpVwK52kO8IwCoHCrnVCtne7yvNfOBCEtjPfJVtNlXjwIAlUPlnIrpXlv6Y9/0lm+qs0ePAIDKAQCAygEAUDkAACoHAAAqBwBA5QAAQOUAAKgcAACVAwAAlQMAoHIAAKByAABUDgCAygEAgMoBAFA5AABQOQAAKgcAQOUAAEDlAACoHAAAzn/lhP13vPVdM4cuM9PR6PUGwsU/aShwr76xd/K5V26yy1t/ZzjE7xQAvByVE2ytNen06li+sXl8o0/jxT/cHTh0mYBTbzL7gvKXwpjbZLa0Bw9/0jnfdZ3e0//c29bvNulqO+Ze7d+XlZ4aQ7UrsPVa/rFMbP/yx5F3/i/GbgM4T5VTf/9JKJzK3IO2m+X6Ivdix6wcMeirszv7Vr+Pysk/NjqXlTPdW994z1/8oVl02F3tbJkUXpk/gOKOcee3//Tr6LW66GdS5fxhy22Mfm6Mxdl7AOeicnI7Qwg0VerqekInfPghlVOUk1VO/qPOZeUMeHT6660Lr+8fQFHv/mrn1uf/Ennnx5n8+x+2R9h7AOeycsRor7u4nT6VQ+W8iMpJ/Muo4Y+Jvtn864MD9hzA+a2cuL8p+Wcv7wFz//5Vu/Lkw+PLgw119m+uyKNBl0xOZ+d4SNCsHHn5dP2sj3c7bdWXlDGkUmPNVfeDOfVOZ2PS53amn7Pe/zh++FZkhqOSK5xYzxl53a6VGaTbzWWVDa3jEfVea8nfVlOdWAdzmVla88n1o1+03YX+tprKylJ9Yt3sNd7ASuYpn450eq6aLPKaGCr12QNj8qZJqxQe19w0eYUzW5EpnskOl9Gs/nGDS9kvr3NA+XKhwyw9ak61AleqrzapFxZF5VXVG82Je411bX3LgvpllN6d2KI/8YoV/odC8oeq3kHptXU19C9lD6sIoVHVAubsX4zE2i6kX0zpa+33UVvYE33vx5Ff/D7663+MvPOLaPsG+w7gvFbORKs1WSrFVE6tw2K8Xt8zFZSHgpbGelpMV0yXbF1zh1dOqK/WYLa0jgUTY0izY/e8XQ8zlVNdbqm1+hL3Lg355OEl98NCIxZCdC080mrX6Ru+k5ePxNLraawul9atfy4xTNXbaCs1uNqT/SDM+BylV9L3hoOT3XUWc7k7cGjrRPrd1bor6e1V1rypfSCxasJ8q9VcWuXtnFxKDYzdumywVLbPx9ObZnFYCmxabCP8pKdBp7d7xqS71qKpzZ0c6B6aDadWss9VZS5vHI5qV47VYq297OwYWlQWfthRazKVN48lO28j4DSZ0/fKq9fivGRwtM4J6XfHeMtjsTgblK0LbwmHVI7V7blsudU8OKfaUnOFdyy1YsrLa7C5Ui/U9KDPajFfsn03I6TX1u5wOy7b2pSXS9pe7fdR08FsW/TTj+Smma+Pfvj77f4w+w7gHFaOsD3b760wmGu6VsUiKyezz0odJM21m/Vm+/2twyon4C0tcAYpUTnOAfXhyKrPbiptHD72ibWcdRMe3jSaLO3Lqc6zeaay96ob/TZDdcN4wZ8Svd8grfbtOe198VSbTWeSjs+yblz3N5Wleu7oTSvixFp8pKVM7+6KalaOKacyH3fe0Bm8ifsfeqtLb/RnF6ow0WordfSF0u+msanv6AMG+Ydqb6ne1vxI+eaRryJ3S6WXd9BhTP1qKWtbdmtw/TROqwI4P5Wjz84Vq71zNpbZAx5VObcG8055bXXdSN9eoHKiwy7pH+AOX+/kSlQ4eqcj/9BDB42KG8tRrYC0aZa7E1prbrw7X+inyM95oz+qfefyHavJ0Dqdd/uY22iq6QoXtWkalRMZVZ0ok1qytcNrzCyTWznJr9My76C87bbevImIU3cN+qY+QSxuZC7zQ7VepWmPJXl7sN2h9fKKw82pmSmaa0vlAK9+5agnSW/sFthhFa4crZ3UaEtNapmCYznx8Eyn11VhNOsMlRV1bb2Lu2dZOcryJu0U/EGH75QLTZTI+aHHq5zHXS759FTq7N/0w+76GovuJJWjHJpoJ/Fsx6scrS2NdDqTz1Bo7kZiNGuOygE4sabhhJVTxFGO6txOdHmqUx5lcdxZONujnKo7Q5kLksIFe7fYoxz5yU/7KEf9SqYkB95PdJTTtaKxvclxo9M8ylFGrTjKAaicY1WOfNYl+zyPMH+7Nmcsx92VfU6/qLGcXJONf02OspyscuQzOceqnKjfnj+WcxR5LCdv7CrzahUay9Hf8K0U16a5Q1walRMfv2M4SeXIq5c3lnOcX4bsytHY0gFP+dFjOaaqzlWxcOXkv48AXpvKEYN3rOZS693kDCh5ulStxWpVV448x+kEM9YWupzujt7kzK7wdL/nir7y5ohw4soRx9vKpX1cv/yEy+GtoytHFGbanZcMtjrf0HQoPR9s+F7X4R/LpjVjzdvSuZDsY60Za2aLTzVj7fBNS0zkuzslr8xqJO/EmvLyGs2lJ6occSPgspjLkzPEkpPWhno6uqdPUjkGqyN/xtrlpuHDZ6yVWjtUM9Y0Kif/fQTw+lSOfCVHqyt9XYureejpTPp0fGoPHs9c+1L0dTnC474299XM5SZOZ09yzsIJK0eMjPoavlUudkkcLR1VOWLiwpH61JrLny9nsdfcPvKTQCPTPTnX5aiufdldetDWYEyM9ud9YF0RmyYs+VvMynUzqWls8nZVpK6kueruHhltN5+scpTV65Ve9uTqyZdDGWzujhNVjtk3r1x2U5P+3ci7Lmd3YdBnT172lPeLUahy8t5HAK9M5QAncOxPlABA5QBUDkDlAFQOACoHoHIAKgcAACoHAEDlAACoHAAAqBwAAJUDAACVAwCgcgAAVA4AAFQOAIDKAQCAygEAUDkAACoHAAAqBwBA5QAAQOUAAKgcAACVAwAAlQMAoHIAAHhJK+fR4jIhhJBXOFQOIYSQ17VyhL09Qgghr1ioHEIIIVQOIYQQKofKIYQQQuUQQgihcqgcQgihcqgcQgghVA4hhBAqh8ohhBBC5RBCCKFyqBxCCKFyqBxCCCFUDiGEECrnZaqc6Hhj+ecfvH2hRPbWP3z6P9e6Fneyl9kcb/rfT3+SWERewtYVjPHeE0IIlXO8yhmt/uRCybsXbX0T87JA41cfSN9/dSecXubx7b+8W/LWR183DSpLDLaavpC+/6xmiNYhhBAq5xiV01n2dsnP9D0x1Y0rri9LSn7rDiW+DTdevHDhk6rhrOOeFfd/XSj5uGqUt58QQqicY1XOh5Zh9Y0xzx8zlfPI9lnJ21/fyzug8Zt+XvJ2WQe/AYQQQuUc68TahU++bZ+Nyt/G1oZdF9/NnFgL3/ptyYWv7mg8cNjyr/JxDr8BhBBC5Rxj+kDg+m/eK8n4j/LO2dRptNGqjwucQIs1S8dCf7nNbwAhhFA5RW5AbPj6F+9e+MlvjK0BeW7ARJ/r64/euvBBWfvKEZWzd/svVA4hhFA5xVeOPFRz4be3VrLGcvq+/XnJu2UdMY5yCCGEyjm9ypEPVf7YvFNwnKbwWM79b3/GWA4hhFA5p1c5zFgjhBAq55QqR24OzRNrFy42hNPX5ZR8bOG6HEIIoXKec/rAivzRAhc++MqV+vSB2/JnC2Rd+8mnDxBCCJVzSpOkVwZdX6c+QE35BLWqu9M5p9oeD7r4jDVCCKFy+CRpQgihcqgcQgghVA4hhBAqh8ohhBBC5RBCCKFyqBxCCKFyqBxCCCFUDiGEECqHyiGEEELlEEIIoXKoHEIIoXKoHEIIIVQOIYQQKofKIYQQcr4qhxBCyKsaKocQQsjrVzkAgNcZlQMAoHIAAFQOAABUDgCAygEAUDm8BAAAKgcAQOUAAEDlAACoHAAAlQMAAJUDAKByAACgcgAAVA4AgMoBAIDKAQBQOQAAUDkAACoHAEDlAABA5QAAqBwAAKgcAACVAwCgcgAAOL+Vc83d+p7uxt/+t/1vvrz2AvNDwyR5IfmVZ7l/aYc/MABnUTl//2fHiy0bKueF55/q5vkDA3AWlfMy9A2V88LDHxgAKodQOQCoHCqHygFA5VA5hMoBQOVQOVQOACqHyqFyAIDKIVQOACqHyqFyAFA5VA6hcgBQOVQOlQOAyqFyqBwAoHLOJo6nXauxrv6FYhb+3XhsZDXyOyoHAJVzlpXzftvyyEI4lZmLL7Zy6jcfS9sT3fzwBI/1bIVEMTS7VMzCFmlRcddS7JI5DrZ34v6hpR9ROQConGPll6PqD71fs7zQyvlwSlBWQ/DWv1SVI9wPrFsz2fRv7u+J4nZo7R0qBwCVcz4rZ+netihuCsuiuLGw8jJVTv6SU1/OSe247+883dpYG5d+WmiNygFA5XzPldO2vSGKsw+DjnVRjG1ffKkrZ/KHjs1FUXw6t0zlAKByzl/l/GlxXxSfOaon33z4TBQPBrtf7sp5vnqgcgBQOS+ucozhIUEU1zfelL6u3piVdvMr4TcKLPxG3RNvSNjeV1Z5f/9pZOda46MClfPos6GdxdjBnrzowe4zYWLqyU+Np1E5ykpuLq6qb/xR49N7ISEqHCgrdhCN7nq/m8/Zil/NCsoTTv30u82J6L68FUrHKLerCfc8VA6Ac1w5XuNEWDU/Tc50ZE/1TM+C2feOTIy8fyaV80ZvbFc+qzajfDsjn1sTYnqjxpLv9O6s7ctNs7i8mRjM717bi+/vj87u5FaOcblpY19umq3de2PyyH/9bGx59yAejXaEn7dy3nn4bE88mBmeydzij23ui3u7gn9KmWUwtjUizzI42HySNcsgUTkdM0J8/+DJ2rZXWrI9KN3+pjdsDewsSz9tc0fZrvAX1VQOgHNcOe33No/51JuLvzyLypmyhA4SZ9UStyTOral36Klji7VxaY8d362pm8oqgI7tJ8pBj7pylJ37wZO5x1mzmY1Bx1ri+OhklTP1d9eX/jwWk55jb2vry3QpeqLSCmyvbfybMXuWwawgtc7iRDB7raRNeOa4OcWJNQBUzplXTvX6zH7qrJrqlr219Tc1ZlEfDPVOFZpgnamcxJk6zUt8Ened/Loc+RxdZG3rq2uZatGvHIj7zxzX8p8h6I1mzYZIFOG4f4axHABUzguoHOWYJn1WLZEZ+1rWcU9iz14TFkVhp6yY6QMtW09FcXFi4TSmDzyrdy78sypvm3MWW+7YEcXI5vtaz6B0jHCnIevbAuM0VA6AV6dy7jaFnkV2shKNH6ieaX87+95IaO6T771ylOMAMX67OWu3/vl0XLr18VQw98Kd7a1fFVM5/l3p4eP+72/GWtFVIa9JpmOoHACvSeW8lDPWEh9yU0jWmbEXdZRz5JIc5QCgcs5D5STGNhaD6k+USaY3Ih2B7XW35S6sPZYzEd/LGstZG98vNJYTGoyfbuUo0x8OGctR1SSVA4DKeVGVs9IdKzgfOjFzOuvDbwrMWPtR21bRM9bma0LPM2OtwCTvFvkYq+gZa4UqZ7VvN3saBZUDgMo5tcrxbW8e9olqSiHtbv/p5bsuJ/9A58uJ+LZY5HU5BS/zvLggHartLyxE5LV9GHqfygFA5ZxS5Shziw/93GjNWdEvxacPaCX/0wfuPcj9Pw4Or5wfGoM1q8Kusmnxzc3/pHIAUDn8r6D8F20AqBz+I2oqBwCoHELlAKByqBwqBwCVQ+UQKgcAlUPlUDkAqBwqh8oBACqHUDkAqBwqh8oBQOVQOYTKAUDlUDlUDgAqh8qhcgCAyiFUDoBzXzklf6ijcl7zfHwzyB8YgLOoHLPr9nu6G1TO69w3vtkof2AAzqJyAACgcgAAVA4AgMoBAIDKAQBQOQAAUDkAACoHAEDlAABA5QAAqBwAAKgcAACVAwCgcgAAoHIAAFQOAABUDgCAygEAUDkAAFA5AAAqBwAAlf8HcmPIVMV1ZX8AAAAASUVORK5CYII=");

/***/ }),

/***/ 71046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

}]);