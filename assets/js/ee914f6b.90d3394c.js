"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[54350],{

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

/***/ 87476:
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
    title: 'Monitoring Best Practices'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "id": "version-2.9/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "title": "Monitoring Best Practices",
    "description": "Configuring sensible monitoring and alerting rules is vital for running any production workloads securely and reliably. This is not different when using Kubernetes and Rancher. Fortunately the integrated monitoring and alerting functionality makes this whole process a lot easier.",
    "source": "@site/versioned_docs/version-2.9/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",
    "sourceDirName": "reference-guides/best-practices/rancher-managed-clusters",
    "slug": "/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "permalink": "/v2.9/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.9/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",
    "tags": [],
    "version": "2.9",
    "lastUpdatedAt": 1716936476,
    "formattedLastUpdatedAt": "May 28, 2024",
    "frontMatter": {
        "title": "Monitoring Best Practices"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Logging Best Practices",
        "permalink": "/v2.9/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices"
    },
    "next": {
        "title": "Tips for Setting Up Containers",
        "permalink": "/v2.9/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"
    }
};
const assets = {};
const toc = [
    {
        value: 'What to Monitor',
        id: 'what-to-monitor',
        level: 2
    },
    {
        value: 'Configuring Prometheus Resource Usage',
        id: 'configuring-prometheus-resource-usage',
        level: 2
    },
    {
        value: 'Storage and Data Retention',
        id: 'storage-and-data-retention',
        level: 3
    },
    {
        value: 'CPU and Memory Requests and Limits',
        id: 'cpu-and-memory-requests-and-limits',
        level: 3
    },
    {
        value: 'Federation and Long-term Storage',
        id: 'federation-and-long-term-storage',
        level: 3
    },
    {
        value: 'Scraping Custom Workloads',
        id: 'scraping-custom-workloads',
        level: 2
    },
    {
        value: 'About Prometheus Exporters',
        id: 'about-prometheus-exporters',
        level: 3
    },
    {
        value: 'Prometheus support in Programming Languages and Frameworks',
        id: 'prometheus-support-in-programming-languages-and-frameworks',
        level: 3
    },
    {
        value: 'ServiceMonitors and PodMonitors',
        id: 'servicemonitors-and-podmonitors',
        level: 3
    },
    {
        value: 'Prometheus Push Gateway',
        id: 'prometheus-push-gateway',
        level: 3
    },
    {
        value: 'Prometheus Blackbox Monitor',
        id: 'prometheus-blackbox-monitor',
        level: 3
    },
    {
        value: 'Monitoring in a (Micro)Service Architecture',
        id: 'monitoring-in-a-microservice-architecture',
        level: 2
    },
    {
        value: 'Real User Monitoring',
        id: 'real-user-monitoring',
        level: 2
    },
    {
        value: 'Security Monitoring',
        id: 'security-monitoring',
        level: 2
    },
    {
        value: 'Setting up Alerts',
        id: 'setting-up-alerts',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Configuring sensible monitoring and alerting rules is vital for running any production workloads securely and reliably. This is not different when using Kubernetes and Rancher. Fortunately the integrated monitoring and alerting functionality makes this whole process a lot easier.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.9/integrations-in-rancher/monitoring-and-alerting/"
    }, `Rancher monitoring documentation`), ` describes how you can set up a complete Prometheus and Grafana stack. Out of the box this will scrape monitoring data from all system and Kubernetes components in your cluster and provide sensible dashboards and alerts for them to get started. But for a reliable setup, you also need to monitor your own workloads and adapt Prometheus and Grafana to your own specific use cases and cluster sizes. This document aims to give you best practices for this.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "what-to-monitor"
    }, `What to Monitor`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes itself, as well as applications running inside of it, form a distributed system where different components interact with each other. For the whole system and each individual component, you have to ensure performance, availability, reliability and scalability. A good resource with more details and information is Google's free `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://sre.google/sre-book/table-of-contents/"
    }, `Site Reliability Engineering Book`), `, especially the chapter about `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://sre.google/sre-book/monitoring-distributed-systems/"
    }, `Monitoring distributed systems`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "configuring-prometheus-resource-usage"
    }, `Configuring Prometheus Resource Usage`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When installing the integrated monitoring stack, Rancher allows to configure several settings that are dependent on the size of your cluster and the workloads running in it. This chapter covers these in more detail.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "storage-and-data-retention"
    }, `Storage and Data Retention`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The amount of storage needed for Prometheus directly correlates to the amount of time series and labels that you store and the data retention you have configured. It is important to note that Prometheus is not meant to be used as a long-term metrics storage. Data retention time is usually only a couple of days and not weeks or months. The reason for this is that Prometheus does not perform any aggregation on its stored metrics. This is great because aggregation can dilute data, but it also means that the needed storage grows linearly over time without retention.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `One way to calculate the necessary storage is to look at the average size of a storage chunk in Prometheus with this query`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rate(prometheus_tsdb_compaction_chunk_size_bytes_sum[1h]) / rate(prometheus_tsdb_compaction_chunk_samples_sum[1h])
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Next, find out your data ingestion rate per second:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `rate(prometheus_tsdb_head_samples_appended_total[1h])
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `and then multiply this with the retention time, adding a few percentage points as buffer:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `average chunk size in bytes * ingestion rate per second * retention time in seconds * 1.1 = necessary storage in bytes
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can find more information about how to calculate the necessary storage in this `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.robustperception.io/how-much-disk-space-do-prometheus-blocks-use"
    }, `blog post`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can read more about the Prometheus storage concept in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://prometheus.io/docs/prometheus/latest/storage"
    }, `Prometheus documentation`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "cpu-and-memory-requests-and-limits"
    }, `CPU and Memory Requests and Limits`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In larger Kubernetes clusters Prometheus can consume quite a bit of memory. The amount of memory Prometheus needs directly correlates to the amount of time series and amount of labels it stores and the scrape interval in which these are filled.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can find more information about how to calculate the necessary memory in this `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.robustperception.io/how-much-ram-does-prometheus-2-x-need-for-cardinality-and-ingestion"
    }, `blog post`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The amount of necessary CPUs correlate with the amount of queries you are performing.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "federation-and-long-term-storage"
    }, `Federation and Long-term Storage`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prometheus is not meant to store metrics for a long amount of time, but should only be used for short term storage.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In order to store some, or all metrics for a long time, you can leverage Prometheus' `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations"
    }, `remote read/write`), ` capabilities to connect it to storage systems like `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://thanos.io/"
    }, `Thanos`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.influxdata.com/"
    }, `InfluxDB`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.m3db.io/"
    }, `M3DB`), `, or others. You can find an example setup in this `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/blog/2020/prometheus-metric-federation"
    }, `blog post`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "scraping-custom-workloads"
    }, `Scraping Custom Workloads`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `While the integrated Rancher Monitoring already scrapes system metrics from a cluster's nodes and system components, the custom workloads that you deploy on Kubernetes should also be scraped for data. For that you can configure Prometheus to do an HTTP request to an endpoint of your applications in a certain interval. These endpoints should then return their metrics in a Prometheus format.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In general, you want to scrape data from all the workloads running in your cluster so that you can use them for alerts or debugging issues. Often, you recognize that you need some data only when you actually need the metrics during an incident. It is good, if it is already scraped and stored. Since Prometheus is only meant to be a short-term metrics storage, scraping and keeping lots of data is usually not that expensive. If you are using a long-term storage solution with Prometheus, you can then still decide which data you are actually persisting and keeping there.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "about-prometheus-exporters"
    }, `About Prometheus Exporters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Many 3rd party workloads, such as databases, queues, and web-servers, already support exposing metrics in a Prometheus format, or offer exporters that translate between the tool's metrics and a format that Prometheus understands. You can usually add these exporters as additional sidecar containers to the workload's Pods. Many Helm charts already include options to deploy the correct exporter. You can find a curated list of exports by SysDig on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://promcat.io/"
    }, `promcat.io`), ` and on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://exporterhub.io/"
    }, `ExporterHub`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "prometheus-support-in-programming-languages-and-frameworks"
    }, `Prometheus support in Programming Languages and Frameworks`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To get your own custom application metrics into Prometheus, you have to collect and expose these metrics directly from your application's code. Fortunately, there are already libraries and integrations available to help with this for most popular programming languages and frameworks. One example for this is the Prometheus support in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.spring.io/spring-metrics/docs/current/public/prometheus"
    }, `Spring Framework`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "servicemonitors-and-podmonitors"
    }, `ServiceMonitors and PodMonitors`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once all of your workloads expose metrics in a Prometheus format, you must configure Prometheus to scrape them. Under the hood, Rancher uses the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/prometheus-operator/prometheus-operator"
    }, `prometheus-operator`), `. This makes it easy to add scraping targets with ServiceMonitors and PodMonitors. Many Helm charts already include an option to create these monitors directly. You can also find more information in the Rancher documentation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "prometheus-push-gateway"
    }, `Prometheus Push Gateway`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There are some workloads that are traditionally hard to scrape by Prometheus. Examples for these are short lived workloads like Jobs and CronJobs, or applications that do not allow sharing data between individual handled incoming requests, like PHP applications.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To still get metrics for these use cases, you can set up `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/prometheus/pushgateway"
    }, `prometheus-pushgateways`), `. The CronJob or PHP application would push metric updates to the pushgateway. The pushgateway aggregates and exposes them through an HTTP endpoint, which then can be scraped by Prometheus.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "prometheus-blackbox-monitor"
    }, `Prometheus Blackbox Monitor`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Sometimes it is useful to monitor workloads from the outside. For this, you can use the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/prometheus/blackbox_exporter"
    }, `Prometheus blackbox-exporter`), ` which allows probing any kind of endpoint over HTTP, HTTPS, DNS, TCP and ICMP.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "monitoring-in-a-microservice-architecture"
    }, `Monitoring in a (Micro)Service Architecture`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you have a (micro)service architecture where multiple individual workloads within your cluster are communicating with each other, it is really important to have detailed metrics and traces about this traffic to understand how all these workloads are communicating with each other and where a problem or bottleneck may be.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Of course you can monitor all this internal traffic in all your workloads and expose these metrics to Prometheus. But this can quickly become quite work intensive. Service Meshes like Istio, which can be installed with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.9/integrations-in-rancher/istio/"
    }, `a click`), ` in Rancher, can do this automatically and provide rich telemetry about the traffic between all services.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "real-user-monitoring"
    }, `Real User Monitoring`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Monitoring the availability and performance of all your internal workloads is vitally important to run stable, reliable and fast applications. But these metrics only show you parts of the picture. To get a complete view it is also necessary to know how your end users are actually perceiving it. For this you can look into various `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://en.wikipedia.org/wiki/Real_user_monitoring"
    }, `Real user monitoring solutions`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "security-monitoring"
    }, `Security Monitoring`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In addition to monitoring workloads to detect performance, availability or scalability problems, the cluster and the workloads running into it should also be monitored for potential security problems. A good starting point is to frequently run and alert on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/advanced-user-guides/cis-scan-guides/"
    }, `CIS Scans`), ` which check if the cluster is configured according to security best practices.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For the workloads, you can have a look at Kubernetes and Container security solutions like `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.suse.com/products/neuvector/"
    }, `NeuVector`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://falco.org/"
    }, `Falco`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.aquasec.com/solutions/kubernetes-container-security/"
    }, `Aqua Kubernetes Security`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://sysdig.com/"
    }, `SysDig`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "setting-up-alerts"
    }, `Setting up Alerts`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Getting all the metrics into a monitoring systems and visualizing them in dashboards is great, but you also want to be pro-actively alerted if something goes wrong.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The integrated Rancher monitoring already configures a sensible set of alerts that make sense in any Kubernetes cluster. You should extend these to cover your specific workloads and use cases.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When setting up alerts, configure them for all the workloads that are critical to the availability of your applications. But also make sure that they are not too noisy. Ideally every alert you are receiving should be because of a problem that needs your attention and needs to be fixed. If you have alerts that are firing all the time but are not that critical, there is a danger that you start ignoring your alerts all together and then miss the real important ones. Less may be more here. Start to focus on the real important metrics first, for example alert if your application is offline. Fix all the problems that start to pop up and then start to create more detailed alerts.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If an alert starts firing, but there is nothing you can do about it at the moment, it's also fine to silence the alert for a certain amount of time, so that you can look at it later.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can find more information on how to set up alerts and notification channels in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.9/integrations-in-rancher/monitoring-and-alerting/"
    }, `Rancher Documentation`), `.`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);