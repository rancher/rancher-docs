"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[25171],{

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

/***/ 97000:
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
    title: 'AKS 集群配置参考'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",
    "id": "version-2.8/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",
    "title": "AKS 集群配置参考",
    "description": "Rancher 2.6 变更",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.8/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md",
    "sourceDirName": "reference-guides/cluster-configuration/rancher-server-configuration",
    "slug": "/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",
    "permalink": "/zh/v2.8/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.8/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration.md",
    "tags": [],
    "version": "2.8",
    "lastUpdatedAt": 1696627994,
    "formattedLastUpdatedAt": "2023年10月6日",
    "frontMatter": {
        "title": "AKS 集群配置参考"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "EKS 集群配置参考",
        "permalink": "/zh/v2.8/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"
    },
    "next": {
        "title": "GKE Cluster Configuration Reference",
        "permalink": "/zh/v2.8/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/"
    }
};
const assets = {};
const toc = [
    {
        value: 'Rancher 2.6 变更',
        id: 'rancher-26-变更',
        level: 2
    },
    {
        value: 'RBAC',
        id: 'rbac',
        level: 2
    },
    {
        value: '云凭证',
        id: '云凭证',
        level: 2
    },
    {
        value: '订阅 ID',
        id: '订阅-id',
        level: 3
    },
    {
        value: '客户端 ID',
        id: '客户端-id',
        level: 3
    },
    {
        value: '客户端密码',
        id: '客户端密码',
        level: 3
    },
    {
        value: '环境',
        id: '环境',
        level: 3
    },
    {
        value: '账号访问',
        id: '账号访问',
        level: 2
    },
    {
        value: '集群位置',
        id: '集群位置',
        level: 2
    },
    {
        value: '集群选项',
        id: '集群选项',
        level: 2
    },
    {
        value: 'Kubernetes 版本',
        id: 'kubernetes-版本',
        level: 3
    },
    {
        value: '集群资源组',
        id: '集群资源组',
        level: 3
    },
    {
        value: 'Linux 管理员用户名',
        id: 'linux-管理员用户名',
        level: 3
    },
    {
        value: 'SSH 公钥',
        id: 'ssh-公钥',
        level: 3
    },
    {
        value: 'Tags',
        id: 'tags',
        level: 3
    },
    {
        value: '网络选项',
        id: '网络选项',
        level: 2
    },
    {
        value: '负载均衡器 SKU',
        id: '负载均衡器-sku',
        level: 3
    },
    {
        value: '网络策略',
        id: '网络策略',
        level: 3
    },
    {
        value: 'DNS 前缀',
        id: 'dns-前缀',
        level: 3
    },
    {
        value: '网络插件',
        id: '网络插件',
        level: 3
    },
    {
        value: 'HTTP 应用路由',
        id: 'http-应用路由',
        level: 3
    },
    {
        value: '设置授权 IP 范围',
        id: '设置授权-ip-范围',
        level: 3
    },
    {
        value: '容器监控',
        id: '容器监控',
        level: 3
    },
    {
        value: 'Log Analytics 工作区资源组',
        id: 'log-analytics-工作区资源组',
        level: 3
    },
    {
        value: 'Log Analytics 工作区名称',
        id: 'log-analytics-工作区名称',
        level: 3
    },
    {
        value: '支持私有 Kubernetes 服务',
        id: '支持私有-kubernetes-服务',
        level: 3
    },
    {
        value: '节点池',
        id: '节点池',
        level: 2
    },
    {
        value: '模式',
        id: '模式',
        level: 3
    },
    {
        value: '可用区',
        id: '可用区',
        level: 3
    },
    {
        value: '虚拟机大小',
        id: '虚拟机大小',
        level: 3
    },
    {
        value: '操作系统磁盘类型',
        id: '操作系统磁盘类型',
        level: 3
    },
    {
        value: '操作系统磁盘大小',
        id: '操作系统磁盘大小',
        level: 3
    },
    {
        value: '节点数',
        id: '节点数',
        level: 3
    },
    {
        value: '每个节点的最大 Pod 数量',
        id: '每个节点的最大-pod-数量',
        level: 3
    },
    {
        value: '启用自动扩缩容',
        id: '启用自动扩缩容',
        level: 3
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
        "id": "rancher-26-变更"
    }, `Rancher 2.6 变更`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `支持添加多个节点池`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `支持私有集群`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `启用自动缩放节点池`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `在云凭证中配置 AKS 权限`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "rbac"
    }, `RBAC`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在 Rancher UI 中配置 AKS 集群时，无法禁用 RBAC。如果在 AKS 中为集群禁用了 RBAC，则无法在 Rancher 中注册或导入集群。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher 可以使用与其他集群一样的方式为 AKS 集群配置成员角色。有关详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../../pages-for-subheaders/manage-role-based-access-control-rbac.md"
    }, `RBAC`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "云凭证"
    }, `云凭证`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `本节中的配置信息假设你已经为 Rancher 设置了服务主体。有关如何设置服务主体的分步说明，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.8/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks#microsoft-azure-%E4%B8%AD%E7%9A%84%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6"
    }, `本节`), `。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "订阅-id"
    }, `订阅 ID`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要获取订阅 ID，请单击左侧导航栏中的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `All Services`), `。然后单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Subscriptions`), `。转到要与 Kubernetes 集群关联的订阅的名称，然后复制 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Subscription ID`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "客户端-id"
    }, `客户端 ID`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要获取客户端 ID，请转到 Azure 门户，然后单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Azure Active Directory`), `，单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `App registrations`), `，然后单击服务主体的名称。客户端 ID 在 app registration 详细信息页面上列为 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Application (client) ID`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "客户端密码"
    }, `客户端密码`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在创建客户端密码值后，你无法再获取它的值。因此如果你还没有客户端密码值，则需要创建一个新的客户端密码。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要获取新的客户端密码，请转到 Azure 门户，然后单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Azure Active Directory`), `，单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `App registrations`), `，然后单击服务主体的名称。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `然后点击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Certificates & secrets`), ` 并点击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `New client secret`), `。单击 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Add`), `。然后复制新客户端密码的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Value`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "环境"
    }, `环境`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Microsoft 提供了多个`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/cli/azure/cloud?view=azure-cli-latest"
    }, `云`), `来满足地区法律的要求：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `AzurePublicCloud`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `AzureGermanCloud`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `AzureChinaCloud`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `AzureUSGovernmentCloud`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "账号访问"
    }, `账号访问`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在本部分中，你需要选择现有的 Azure 云凭证或创建一个新凭证。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关配置 Azure 云凭证的帮助，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#%E4%BA%91%E5%87%AD%E8%AF%81"
    }, `本部分`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "集群位置"
    }, `集群位置`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `配置集群和节点位置。有关 AKS 可用区的详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/aks/availability-zones"
    }, `AKS 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `高可用性位置包括多个可用区。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "集群选项"
    }, `集群选项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "kubernetes-版本"
    }, `Kubernetes 版本`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `可用的 Kubernetes 版本是从 Azure API 动态获取的。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "集群资源组"
    }, `集群资源组`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `资源组是一个容器，其中包含 Azure 解决方案的相关资源。资源组可以包括解决方案的所有资源，或者仅包括你希望作为一个组来管理的资源。你可以根据组织的需求来决定如何将资源分配给资源组。通常情况下，你可以将生命周期相同的资源添加到同一个资源组，以便轻松地按组进行部署、更新和删除。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以使用现有资源组，也可以输入资源组的名称，然后系统将为你创建一个资源组。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用包含现有 AKS 集群的资源组将会创建一个新资源组。Azure AKS 仅允许每个资源组对应一个 AKS 集群。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关管理资源组的信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"
    }, `Azure 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "linux-管理员用户名"
    }, `Linux 管理员用户名`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `用于创建到 Linux 节点的 SSH 连接的用户名。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `AKS 节点的默认用户名是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `azureuser`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "ssh-公钥"
    }, `SSH 公钥`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `用于创建到 Linux 节点的 SSH 连接的密钥。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "tags"
    }, `Tags`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你的组织使用标签（Tag）来管理多个 Azure 服务的资源，那么集群标签则非常有用。这些标签不适用于集群内的资源。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "网络选项"
    }, `网络选项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "负载均衡器-sku"
    }, `负载均衡器 SKU`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Azure 负载均衡器支持 standard 和 basic SKU（stock keeping units）。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关 standard 负载均衡器和 basic 负载均衡器的对比，请参阅官方 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/load-balancer/skus#skus"
    }, `Azure 文档`), `。Microsoft 建议使用 standard 负载均衡器。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你选择了一个或多个可用区，或者你有多个节点池，则需要 Standard 负载均衡器。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "网络策略"
    }, `网络策略`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `默认情况下，AKS 集群中的所有 Pod 都可以无限制地发送和接收流量。为了提高安全性，你可以定义控制流量的规则。Kubernetes 中的网络策略功能允许你定义集群中 pod 之间的入口和出口流量规则。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Azure 提供了两种实现网络策略的方法。创建 AKS 集群时会选择网络策略选项。创建集群后无法更改策略选项：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Azure 自己的实现，称为 Azure 网络策略。Azure 网络策略需要 Azure CNI。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Calico Network Policies，一个由 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://www.tigera.io/"
    }, `Tigera`), ` 创立的开源网络和网络安全解决方案。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你也可以选择不使用网络策略。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关 Azure 和 Calico 网络策略及其功能之间的差异，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/aks/use-network-policies#differences-between-azure-and-calico-policies-and-their-capabilities"
    }, `AKS 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "dns-前缀"
    }, `DNS 前缀`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `为集群的 Kubernetes API server FQDN 输入唯一的 DNS 前缀。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "网络插件"
    }, `网络插件`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有两个网络插件，分别是 kubenet 和 Azure CNI。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/cluster-administration/network-plugins/#kubenet"
    }, `kubenet`), ` Kubernetes 插件是 AKS 创建的集群的默认配置。使用 kubenet 时，集群中的每个节点都会收到一个可路由的 IP 地址。Pod 使用 NAT 与 AKS 集群外部的其他资源进行通信。这种方法减少了需要在网络空间中保留以供 Pod 使用的 IP 地址数量。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果使用 Azure CNI（高级）网络插件，Pod 可以使用完整的虚拟网络连接，并且可以从连接的网络中通过 pod 的私有 IP 地址直接访问。这个插件需要更多的 IP 地址空间。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关 kubenet 和 Azure CNI 之间差异的详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/aks/concepts-network#compare-network-models"
    }, `AKS 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "http-应用路由"
    }, `HTTP 应用路由`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `启用后，HTTP 应用路由附加组件可以更轻松地访问部署到 AKS 集群的应用。它部署了两个组件，分别是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
    }, `Kubernetes Ingress controller`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/kubernetes-incubator/external-dns"
    }, `External-DNS`), ` controller。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/aks/http-application-routing"
    }, `AKS 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "设置授权-ip-范围"
    }, `设置授权 IP 范围`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以使用`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/aks/api-server-authorized-ip-ranges#overview-of-api-server-authorized-ip-ranges"
    }, `授权的 IP 地址范围`), `来保护对 Kubernetes API server 的访问。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes API server 公开 Kubernetes API。该组件提供管理工具（例如 kubectl）的交互。AKS 提供带有专用 API server 的单租户集群 controlplane。默认情况下，API server 分配了一个公共 IP 地址，你应该使用基于 Kubernetes 或 Azure 的 RBAC 来控制对 API server 的访问。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要保护对其他可公开的 AKS controlplane 和 API server 的访问，你可以启用并使用授权的 IP 范围。这些授权的 IP 范围只允许定义的 IP 地址范围与 API server 通信。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `但是，即使你使用了授权的 IP 地址范围，你仍应使用 Kubernetes RBAC 或 Azure RBAC 来授权用户及其请求的操作。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "容器监控"
    }, `容器监控`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `容器监控使用 Metrics API 从 Kubernetes 中可用的控制器、节点和容器中收集内存和处理器指标，从而为你可视化性能数据。容器日志也能被收集。启用监控后，系统会通过 Linux 的 Log Analytics 代理的容器化版本自动为你收集指标和日志。指标会被写入指标存储，而日志数据会被写入与你的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-query-overview"
    }, `Log Analytics`), ` 工作区关联的日志存储。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log-analytics-工作区资源组"
    }, `Log Analytics 工作区资源组`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups"
    }, `资源组`), `包含 Log Analytics 工作区。你必须至少创建一个工作区才能使用 Azure Monitor Logs。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log-analytics-工作区名称"
    }, `Log Analytics 工作区名称`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Azure Monitor Logs 收集的数据存储在一个或多个 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/azure-monitor/logs/design-logs-deployment"
    }, `Log Analytics 工作区中`), `。工作区定义了数据的地理位置、访问权限（定义了哪些用户可以访问数据）以及配置设置（定价层和数据保留等）。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你必须至少创建一个工作区才能使用 Azure Monitor Logs。一个工作区可能就足以满足你的所有监控数据。你也可以根据需求创建多个工作区。例如，你可能有一个工作区用于生产数据，另一个工作区用于测试。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关 Azure Monitor Logs 的详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs"
    }, `Azure 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "支持私有-kubernetes-服务"
    }, `支持私有 Kubernetes 服务`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `通常情况下，无论集群是否为私有，AKS worker 节点都不会获得公共 IP。在私有集群中，controlplane 没有公共端点。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher 可以通过以下两种方式之一连接到私有 AKS 集群。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `第一种方法是确保 Rancher 运行在与 AKS 节点相同的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/virtual-network/nat-overview"
    }, `NAT`), ` 上。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `第二种方法是运行命令向 Rancher 注册集群。配置集群后，你可以在任何能连接到集群的 Kubernetes API 的地方运行显示的命令。配置启用了私有 API 端点的 AKS 集群时，此命令将显示在弹出窗口中。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `注册现有 AKS 集群时，集群可能需要一些时间（可能是数小时）才会出现在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Cluster To register`), ` 下拉列表中。不同区域的结果可能不同。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有关连接到 AKS 专用集群的详细信息，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster"
    }, `AKS 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "节点池"
    }, `节点池`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "模式"
    }, `模式`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在 Azure 界面中，用户能够指定主要节点池（Primary Node Pool）依赖于 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `system`), `（通常用于 controlplane）还是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `user`), `（Rancher 最常用的）。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以指定主要节点池（Primary Node Pool）的模式、操作系统、数量和大小。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `system`), ` 节点池总是需要运行节点，因此它们不能缩容到一个节点以下。至少需要一个 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `system`), ` 节点池。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `对于后续的节点池，Rancher UI 强制使用默认的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `user`), `。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `user`), ` 节点池允许缩容到零节点。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `user`), ` 节点池不运行 Kubernetes controlplane 的任何部分。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `AKS 不会公开运行 Kubernetes controlplane 组件的节点。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "可用区"
    }, `可用区`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/availability-zones/az-overview"
    }, `可用区`), `是区域内的唯一物理位置。每个可用区由一个或多个配备独立电源、冷却系统和网络的数据中心组成。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `并非所有区域都支持可用区。有关具有可用区的 Azure 区域列表，请参阅 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/availability-zones/az-region#azure-regions-with-availability-zones"
    }, `Azure 文档`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "虚拟机大小"
    }, `虚拟机大小`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `为节点池中的每个 VM 选择一个大小。有关每个 VM 大小的详细信息，请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/"
    }, `此页面`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "操作系统磁盘类型"
    }, `操作系统磁盘类型`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `节点池中的节点可以使用托管磁盘或临时磁盘。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks"
    }, `临时 OS 磁盘`), `在本地虚拟机存储上创建，并不会保存到远程 Azure 存储。临时 OS 磁盘适用于无状态工作负载，其中的应用可以容忍单个 VM 故障，但更容易受 VM 部署时间或重置单个虚拟机实例镜像的影响。使用临时 OS 磁盘，你可以体验更低的 OS 磁盘读/写延迟和更快的 VM 重置镜像过程。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview"
    }, `Azure 托管磁盘`), `是由 Azure 管理并与 Azure Virtual Machines 一起使用的块级存储卷。托管磁盘旨在实现 99.999% 的高可用性。托管磁盘通过提供三个数据副本来实现高可用性和高持续性。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "操作系统磁盘大小"
    }, `操作系统磁盘大小`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `每个节点的磁盘大小（以 GB 为单位）。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "节点数"
    }, `节点数`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `节点池中的节点数。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits"
    }, `Azure 订阅`), `可能会限制最大节点数。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "每个节点的最大-pod-数量"
    }, `每个节点的最大 Pod 数量`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `每个节点的最大 Pod 数量默认为 110，最大为 250。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "启用自动扩缩容"
    }, `启用自动扩缩容`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `启用自动扩缩容后，你需要输入最小和最大节点数。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `启用 Auto Scaling 后，你将无法手动对节点池进行扩缩容。扩缩容由 AKS autoscaler 控制。`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);