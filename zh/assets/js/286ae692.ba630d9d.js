"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[67618],{

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

/***/ 93396:
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
    title: '监控最佳实践'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "id": "version-2.7/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "title": "监控最佳实践",
    "description": "配置合理的监控和告警规则对于安全、可靠地运行生产环境中的工作负载至关重要。在使用 Kubernetes 和 Rancher 时也是如此。幸运的是，你可以使用集成的监控和告警功能来简化整个过程。",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.7/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",
    "sourceDirName": "reference-guides/best-practices/rancher-managed-clusters",
    "slug": "/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "permalink": "/zh/v2.7/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.7/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",
    "tags": [],
    "version": "2.7",
    "lastUpdatedAt": 1713930272,
    "formattedLastUpdatedAt": "2024年4月24日",
    "frontMatter": {
        "title": "监控最佳实践"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Logging 最佳实践",
        "permalink": "/zh/v2.7/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices"
    },
    "next": {
        "title": "设置容器的技巧",
        "permalink": "/zh/v2.7/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"
    }
};
const assets = {};
const toc = [
    {
        value: '监控内容',
        id: '监控内容',
        level: 2
    },
    {
        value: '配置 Prometheus 资源使用',
        id: '配置-prometheus-资源使用',
        level: 2
    },
    {
        value: '存储和数据保留',
        id: '存储和数据保留',
        level: 3
    },
    {
        value: 'CPU 和内存的请求和限制',
        id: 'cpu-和内存的请求和限制',
        level: 3
    },
    {
        value: '长期储存',
        id: '长期储存',
        level: 3
    },
    {
        value: '抓取自定义工作负载',
        id: '抓取自定义工作负载',
        level: 2
    },
    {
        value: '关于 Prometheus Exporters',
        id: '关于-prometheus-exporters',
        level: 3
    },
    {
        value: 'Prometheus 的编程语言和框架支持',
        id: 'prometheus-的编程语言和框架支持',
        level: 3
    },
    {
        value: 'ServiceMonitor 和 PodMonitor',
        id: 'servicemonitor-和-podmonitor',
        level: 3
    },
    {
        value: 'Prometheus 推送网关（Pushgateway）',
        id: 'prometheus-推送网关pushgateway',
        level: 3
    },
    {
        value: 'Prometheus Blackbox 监控',
        id: 'prometheus-blackbox-监控',
        level: 3
    },
    {
        value: '在（微）服务架构中进行监控',
        id: '在微服务架构中进行监控',
        level: 2
    },
    {
        value: '真实用户监控',
        id: '真实用户监控',
        level: 2
    },
    {
        value: '安全监控',
        id: '安全监控',
        level: 2
    },
    {
        value: '设置告警',
        id: '设置告警',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `配置合理的监控和告警规则对于安全、可靠地运行生产环境中的工作负载至关重要。在使用 Kubernetes 和 Rancher 时也是如此。幸运的是，你可以使用集成的监控和告警功能来简化整个过程。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../../pages-for-subheaders/monitoring-and-alerting.md"
    }, `Rancher 监控文档`), `描述了如何设置完整的 Prometheus 和 Grafana。这是开箱即用的功能，它将从集群中的所有系统和 Kubernetes 组件中抓取监控数据，并提供合理的仪表板和告警。但为了实现可靠的设置，你还需要监控你的工作负载并使 Prometheus 和 Grafana 适应你的特定用例和集群规模。本文档将为你提供这方面的最佳实践。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "监控内容"
    }, `监控内容`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes 本身以及运行在其内部的应用构成了一个分布式系统，不同的组件之间能够进行交互。对于整个系统和每个单独的组件，你必须确保其性能、可用性、可靠性和可扩展性。详情请参见 Google 免费的 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://sre.google/sre-book/table-of-contents/"
    }, `Site Reliability Engineering Book`), `，尤其是关于 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://sre.google/sre-book/monitoring-distributed-systems/"
    }, `Monitoring distributed systems`), ` 的章节。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "配置-prometheus-资源使用"
    }, `配置 Prometheus 资源使用`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在安装集成监控时，Rancher 允许进行一些配置，这些配置取决于你的集群规模和其中运行的工作负载。本章将更详细地介绍这些内容。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "存储和数据保留"
    }, `存储和数据保留`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prometheus 所需的存储空间取决于你存储的时间序列和标签的数量，以及你配置的数据保留量。需要注意的是，Prometheus 并不是用来长期存储指标的。数据通常只保留几天，而不是几周或几个月。这是因为 Prometheus 不会对存储的指标进行任何聚合。不聚合的好处是避免稀释数据，但这也意味着不设置保留时长的话，所需的存储空间随着时间的推移线性增长。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `以下是计算所需存储空间的一种方法。首先，通过以下查询来查看 Prometheus 中存储块的平均大小：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rate(prometheus_tsdb_compaction_chunk_size_bytes_sum[1h]) / rate(prometheus_tsdb_compaction_chunk_samples_sum[1h])
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `接下来，找出每秒的数据引入速率：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rate(prometheus_tsdb_head_samples_appended_total[1h])
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `然后与保留时间相乘，并添加几个百分点作为缓冲区：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `平均块大小（以字节为单位）x 每秒的数据引入速率 x 保留时间（以秒为单位）x 1.1 = 必需的存储空间（以字节为单位）
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以访问`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.robustperception.io/how-much-disk-space-do-prometheus-blocks-use"
    }, `这篇博客`), `了解关于如何计算必须的存储空间的更多信息。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以参见 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://prometheus.io/docs/prometheus/latest/storage"
    }, `Prometheus 官方文档`), `来进一步了解 Prometheus 的存储概念。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "cpu-和内存的请求和限制"
    }, `CPU 和内存的请求和限制`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在较大的 Kubernetes 集群中，Prometheus 会消耗大量内存。Prometheus 需要的内存与它存储的时间序列和标签的数量以及抓取间隔有关。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以访问`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.robustperception.io/how-much-ram-does-prometheus-2-x-need-for-cardinality-and-ingestion"
    }, `这篇博客`), `了解关于如何计算必须的内存的更多信息。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `所需的 CPU 数量与你正在执行的查询数量相关。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "长期储存"
    }, `长期储存`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prometheus 不是用于长期存储指标的，它只用于短期存储。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果想要长时间存储部分或全部指标，你可以利用 Prometheus 的`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations"
    }, `远程读/写`), `功能将其连接到 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://thanos.io/"
    }, `Thanos`), `，`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.influxdata.com/"
    }, `InfluxDB`), ` 或 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.m3db.io/"
    }, `M3DB`), ` 等存储系统。你可以访问`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/blog/2020/prometheus-metric-federation"
    }, `这篇博客`), `找到设置示例。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "抓取自定义工作负载"
    }, `抓取自定义工作负载`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `虽然集成的 Rancher Monitoring 已经可以从集群的节点和系统组件中抓取系统指标，但你也需要为部署在 Kubernetes 上的自定义工作负载抓取数据。为此，你可以配置 Prometheus，让它在一定的时间间隔内对你应用的端点进行 HTTP 请求。然后，这些端点会以 Prometheus 格式返回指标。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `一般来说，你会从集群中运行的所有工作负载中抓取数据，然后将数据用于告警或调试问题。一般情况下，你只有在具体事件发生后才需要某些指标数据。如果数据已经被抓取并存储了，那就好办了。由于 Prometheus 只是短期存储指标，因此抓取和存储大量数据的成本并不是那么高。如果你使用的是 Prometheus 的长期存储方案，那么你也可以决定持久存储哪些数据。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "关于-prometheus-exporters"
    }, `关于 Prometheus Exporters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `许多第三方工作负载（如数据库、队列或 Web 服务器）要么已经支持以 Prometheus 格式公开指标，要么有所谓的 exporter，来对工具的指标格式和 Prometheus 理解的指标格式进行转换。通常，你可以将这些 exporter 作为额外的 Sidecar 容器添加到工作负载的 Pod 中。很多 Helm Chart 已经包含了部署 exporter 的选项。此外，你还可以在 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://promcat.io/"
    }, `promcat.io`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://exporterhub.io/"
    }, `ExporterHub`), ` 上找到一个由 SysDig 策划的 exporter 列表。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "prometheus-的编程语言和框架支持"
    }, `Prometheus 的编程语言和框架支持`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要想把你的自定义应用指标放到 Prometheus 中，你必须直接从你的应用代码中收集和暴露这些指标。幸运的是，对于大多数流行的编程语言和框架来说，已经有一些库和集成来帮助解决这个问题。其中一个例子是 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.spring.io/spring-metrics/docs/current/public/prometheus"
    }, `Spring 框架`), `中的 Prometheus 支持。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "servicemonitor-和-podmonitor"
    }, `ServiceMonitor 和 PodMonitor`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `一旦所有工作负载都以 Prometheus 格式公开了指标后，你必须配置 Prometheus 来抓取数据。Rancher 使用 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/prometheus-operator/prometheus-operator"
    }, `prometheus-operator`), `，这使得使用 ServiceMonitors 和 PodMonitors 来添加其他抓取目标变得容易。很多 Helm Chart 已经包含直接创建这些监控器的选项。你也可以在 Rancher 文档中找到更多信息。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "prometheus-推送网关pushgateway"
    }, `Prometheus 推送网关（Pushgateway）`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有些工作负载的指标很难被 Prometheus 抓取，就像 Jobs 和 CronJobs 这样的短期工作负载，或者是不允许在单个处理的传入请求之间共享数据的应用，如 PHP 应用。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要想获得这些用例的指标，你可以设置 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/prometheus/pushgateway"
    }, `prometheus-pushgateways`), `。CronJob 或 PHP 应用将把指标更新推送到 pushgateway。pushgateway 汇总并通过 HTTP 端点暴露它们，然后可以由 Prometheus 抓取。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "prometheus-blackbox-监控"
    }, `Prometheus Blackbox 监控`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `有时，你可能需要从外部监控工作负载。为此，你可以使用 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/prometheus/blackbox_exporter"
    }, `Prometheus blackbox-exporter`), `，它允许通过 HTTP、HTTPS、DNS、TCP 和 ICMP 探测任何类型的端点。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "在微服务架构中进行监控"
    }, `在（微）服务架构中进行监控`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果你有一个（微）服务架构，在该架构中集群的多个单独的工作负载相互通信，那么拥有这些流量的详细指标和跟踪是非常重要的，因为这可以帮助你了解所有这些工作负载之间的通信方式，以及问题或瓶颈可能出现的地方。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `当然，你可以监控所有工作负载中的所有内部流量，并将这些指标暴露给 Prometheus，但这相当耗费精力。像 Istio 这样的服务网格（可以通过`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../../pages-for-subheaders/istio.md"
    }, `单击`), `在 Rancher 中安装）可以自动完成这项工作，并提供所有 Service 之间流量的丰富的遥测数据。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "真实用户监控"
    }, `真实用户监控`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `监控所有内部工作负载的可用性和性能对于稳定、可靠和快速地运行应用至关重要。但这些指标只能向你展示部分情况。要想获得一个完整的视图，还必须知道你的最终用户是如何实际感知的。为此，你可以研究各种`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://en.wikipedia.org/wiki/Real_user_monitoring"
    }, `真实用户监控解决方案`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "安全监控"
    }, `安全监控`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `除了通过监控工作负载来检测性能、可用性或可扩展性之外，你还应该监控集群和运行在集群中的工作负载，来发现潜在的安全问题。一个好的做法是经常运行 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../../pages-for-subheaders/cis-scan-guides.md"
    }, `CIS 扫描`), `并发出告警，来检查集群是否按照安全最佳实践进行配置。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `对于工作负载，你可以查看 Kubernetes 和 Container 安全解决方案，例如 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.suse.com/products/neuvector/"
    }, `NeuVector`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://falco.org/"
    }, `Falco`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.aquasec.com/solutions/kubernetes-container-security/"
    }, `Aqua Kubernetes Security`), ` 和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://sysdig.com/"
    }, `SysDig`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "设置告警"
    }, `设置告警`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `将所有的指标纳入监控系统并在仪表板中可视化是很好的做法，但你也希望在出现问题时能主动收到提醒。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `集成的 Rancher 监控已经配置了一套合理的告警，这些告警在任何 Kubernetes 集群中都是可用的。你可以扩展告警，来覆盖特定的工作负载和用例。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在设置告警时，你需要为对你应用非常关键的工作负载配置告警，但同时也要确保告警不会太频繁。理想情况下，你收到的每一个告警都应该是一个你需要关注并解决的问题。如果你一直收到不太关键的告警，你就有可能开始完全忽略告警信息，然后错过真正重要的告警。因此，少量的告警可能会更好。首先，你可以关注真正重要的指标，例如应用离线等。之后，解决出现的所有问题，然后再创建更详细的告警。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果告警开始发送，但你暂时无法处理，你也可以将告警静默一定时间，以便以后查看。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `如果需要了解更多关于如何设置告警和通知通道的信息，请访问 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../../pages-for-subheaders/monitoring-and-alerting.md"
    }, `Rancher 文档中心`), `。`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);