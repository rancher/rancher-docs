"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[21981],{

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

/***/ 846:
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
    title: '5. Schedule Your Services'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services",
    "id": "version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services",
    "title": "5. Schedule Your Services",
    "description": "In v1.6, objects called services were used to schedule containers to your cluster hosts. Services included the Docker image for an application, along with configuration settings for a desired state.",
    "source": "@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services.md",
    "sourceDirName": "how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",
    "slug": "/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services",
    "permalink": "/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services.md",
    "tags": [],
    "version": "2.0-2.4",
    "lastUpdatedAt": 1697840379,
    "formattedLastUpdatedAt": "Oct 20, 2023",
    "frontMatter": {
        "title": "5. Schedule Your Services"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "4. Configure Health Checks",
        "permalink": "/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps"
    },
    "next": {
        "title": "6. Service Discovery",
        "permalink": "/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"
    }
};
const assets = {};
const toc = [
    {
        value: 'What&#39;s Different for Scheduling Services?',
        id: 'whats-different-for-scheduling-services',
        level: 2
    },
    {
        value: 'Node Scheduling Options',
        id: 'node-scheduling-options',
        level: 2
    },
    {
        value: 'Schedule a certain number of pods',
        id: 'schedule-a-certain-number-of-pods',
        level: 3
    },
    {
        value: 'Scheduling Pods to a Specific Node',
        id: 'scheduling-pods-to-a-specific-node',
        level: 3
    },
    {
        value: 'Scheduling Using Labels',
        id: 'scheduling-using-labels',
        level: 3
    },
    {
        value: 'Applying Labels to Nodes and Pods',
        id: 'applying-labels-to-nodes-and-pods',
        level: 4
    },
    {
        value: 'Label Affinity/AntiAffinity',
        id: 'label-affinityantiaffinity',
        level: 4
    },
    {
        value: 'Preventing Scheduling Specific Services to Specific Nodes',
        id: 'preventing-scheduling-specific-services-to-specific-nodes',
        level: 3
    },
    {
        value: 'Scheduling Global Services',
        id: 'scheduling-global-services',
        level: 3
    },
    {
        value: 'Scheduling Pods Using Resource Constraints',
        id: 'scheduling-pods-using-resource-constraints',
        level: 3
    },
    {
        value: 'Next: Service Discovery',
        id: 'next-service-discovery',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In v1.6, objects called `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `services`), ` were used to schedule containers to your cluster hosts. Services included the Docker image for an application, along with configuration settings for a desired state.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, the equivalent object is known as a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `workload`), `. Rancher v2.x retains all scheduling functionality from v1.6, but because of the change from Cattle to Kubernetes as the default container orchestrator, the terminology and mechanisms for scheduling workloads has changed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Workload deployment is one of the more important and complex aspects of container orchestration. Deploying pods to available shared cluster resources helps maximize performance under optimum compute resource use.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can schedule your migrated v1.6 services while editing a deployment. Schedule services by using `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Workload Type`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Node Scheduling`), ` sections, which are shown below.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Editing Workloads: Workload Type and Node Scheduling Sections"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Workload Type and Node Scheduling Sections",
        src: (__webpack_require__(36855)/* ["default"] */ .Z),
        width: "1453",
        height: "687"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "whats-different-for-scheduling-services"
    }, `What's Different for Scheduling Services?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher v2.x retains `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `all`), ` methods available in v1.6 for scheduling your services. However, because the default container orchestration system has changed from Cattle to Kubernetes, the terminology and implementation for each scheduling option has changed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In v1.6, you would schedule a service to a host while adding a service to a Stack. In Rancher v2.x., the equivalent action is to schedule a workload for deployment. The following composite image shows a comparison of the UI used for scheduling in Rancher v2.x versus v1.6.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Node Scheduling: Rancher v2.x vs v1.6",
        src: (__webpack_require__(39631)/* ["default"] */ .Z),
        width: "1558",
        height: "770"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "node-scheduling-options"
    }, `Node Scheduling Options`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher offers a variety of options when scheduling nodes to host workload pods (i.e., scheduling hosts for containers in Rancher v1.6).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can choose a scheduling option as you deploy a workload. The term `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `workload`), ` is synonymous with adding a service to a Stack in Rancher v1.6). You can deploy a workload by using the context menu to browse to a cluster project (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `<CLUSTER> > <PROJECT> > Workloads`), `).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The sections that follow provide information on using each scheduling options, as well as any notable changes from Rancher v1.6. For full instructions on deploying a workload in Rancher v2.x beyond just scheduling options, see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"
    }, `Deploying Workloads`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Option`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `v1.6 Feature`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `v2.x Feature`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#schedule-a-certain-number-of-pods"
    }, `Schedule a certain number of pods?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#scheduling-pods-to-a-specific-node"
    }, `Schedule pods to specific node?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#applying-labels-to-nodes-and-pods"
    }, `Schedule to nodes using labels?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#label-affinityantiaffinity"
    }, `Schedule to nodes using label affinity/anti-affinity rules?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#scheduling-pods-using-resource-constraints"
    }, `Schedule based on resource constraints?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#preventing-scheduling-specific-services-to-specific-nodes"
    }, `Preventing scheduling specific services to specific hosts?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "td",
        "href": "#scheduling-global-services"
    }, `Schedule services globally?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "schedule-a-certain-number-of-pods"
    }, `Schedule a certain number of pods`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In v1.6, you could control the number of container replicas deployed for a service. You can schedule pods the same way in v2.x, but you'll have to set the scale manually while editing a workload.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Resolve Scale",
        src: (__webpack_require__(51168)/* ["default"] */ .Z),
        width: "800",
        height: "392"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `During migration, you can resolve `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `scale`), ` entries in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `output.txt`), ` by setting a value for the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Workload Type`), ` option `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Scalable deployment`), ` depicted below.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Scalable Deployment Option"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Workload Scale",
        src: (__webpack_require__(29117)/* ["default"] */ .Z),
        width: "357",
        height: "121"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "scheduling-pods-to-a-specific-node"
    }, `Scheduling Pods to a Specific Node`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Just as you could schedule containers to a single host in Rancher v1.6, you can schedule pods to single node in Rancher v2.x`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `As you deploy a workload, use the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Node Scheduling`), ` section to choose a node to run your pods on. The workload below is being scheduled to deploy an Nginx image with a scale of two pods on a specific node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Rancher v2.x: Workload Deployment"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Workload Tab and Group by Node Icon",
        src: (__webpack_require__(17528)/* ["default"] */ .Z),
        width: "1456",
        height: "782"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher schedules pods to the node you select if 1) there are compute resource available for the node and 2) you've configured port mapping to use the HostPort option, that there are no port conflicts.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you expose the workload using a NodePort that conflicts with another workload, the deployment gets created successfully, but no NodePort service is created. Therefore, the workload isn't exposed outside of the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After the workload is created, you can confirm that the pods are scheduled to your chosen node. From the project view, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Resources > Workloads.`), ` (In versions before v2.3.0, click the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Workloads`), ` tab.) Click the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Group by Node`), ` icon to sort your workloads by node. Note that both Nginx pods are scheduled to the same node.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Pods Scheduled to Same Node",
        src: (__webpack_require__(41324)/* ["default"] */ .Z),
        width: "1173",
        height: "364"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "scheduling-using-labels"
    }, `Scheduling Using Labels`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, you can constrain pods for scheduling to specific nodes (referred to as hosts in v1.6). Using `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
    }, `labels`), `, which are key/value pairs that you can attach to different Kubernetes objects, you can configure your workload so that pods you've labeled are assigned to specific nodes (or nodes with specific labels are automatically assigned workload pods).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Label Scheduling Options"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Label Object`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Rancher v1.6`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Rancher v2.x`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Schedule by Node?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Schedule by Pod?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "applying-labels-to-nodes-and-pods"
    }, `Applying Labels to Nodes and Pods`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Before you can schedule pods based on labels, you must first apply labels to your pods or nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Hooray!`), `
All the labels that you manually applied in Rancher v1.6 (but `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `not`), ` the ones automatically created by Rancher) are parsed by migration-tools CLI, meaning you don't have to manually reapply labels.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To apply labels to pods, make additions to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Labels and Annotations`), ` section as you configure your workload. After you complete workload configuration, you can view the label by viewing each pod that you've scheduled. To apply labels to nodes, edit your node and make additions to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Labels`), ` section.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "label-affinityantiaffinity"
    }, `Label Affinity/AntiAffinity`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Some of the most-used scheduling features in v1.6 were affinity and anti-affinity rules.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "output.txt"), " Affinity Label"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Affinity Label",
        src: (__webpack_require__(7004)/* ["default"] */ .Z),
        width: "849",
        height: "402"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Affinity`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  Any pods that share the same label are scheduled to the same node. Affinity can be configured in one of two ways:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Affinity`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Hard`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `A hard affinity rule means that the host chosen must satisfy all the scheduling rules. If no such host can be found, the workload will fail to deploy. In the Kubernetes manifest, this rule translates to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `nodeAffinity`), ` directive.`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), `To use hard affinity, configure a rule using the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Require ALL of`), ` section (see figure below).`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Soft`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher v1.6 user are likely familiar with soft affinity rules, which try to schedule the deployment per the rule, but can deploy even if the rule is not satisfied by any host.`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), `To use soft affinity, configure a rule using the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Prefer Any of`), ` section (see figure below).`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Affinity Rules: Hard and Soft"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `![Affinity Rules](/img/node-scheduling-affinity.png)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `AntiAffinity`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  Any pods that share the same label are scheduled to different nodes. In other words, while affinity `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `attracts`), ` a specific label to each other, anti-affinity `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `repels`), ` a label from itself, so that pods are scheduled to different nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  You can create an anti-affinity rules using either hard or soft affinity. However, when creating your rule, you must use either the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `is not set`), ` or `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `not in list`), ` operator.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  For anti-affinity rules, we recommend using labels with phrases like `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `NotIn`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `DoesNotExist`), `, as these terms are more intuitive when users are applying anti-affinity rules.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "AntiAffinity Operators"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "AntiAffinity ",
        src: (__webpack_require__(35731)/* ["default"] */ .Z),
        width: "637",
        height: "574"
    })))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Detailed documentation for affinity/anti-affinity is available in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity"
    }, `Kubernetes Documentation`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Affinity rules that you create in the UI update your workload, adding pod affinity/anti-affinity directives to the workload Kubernetes manifest specs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "preventing-scheduling-specific-services-to-specific-nodes"
    }, `Preventing Scheduling Specific Services to Specific Nodes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v1.6 setups, you could prevent services from being scheduled to specific nodes with the use of labels. In Rancher v2.x, you can reproduce this behavior using native Kubernetes scheduling options.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, you can prevent pods from being scheduled to specific nodes by applying `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `taints`), ` to a node. Pods will not be scheduled to a tainted node unless it has special permission, called a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `toleration`), `. A toleration is a special label that allows a pod to be deployed to a tainted node. While editing a workload, you can apply tolerations using the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Node Scheduling`), ` section. Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Show advanced options`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Applying Tolerations"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Tolerations",
        src: (__webpack_require__(15290)/* ["default"] */ .Z),
        width: "2946",
        height: "939"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information, see the Kubernetes documentation on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"
    }, `taints and tolerations`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "scheduling-global-services"
    }, `Scheduling Global Services`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher v1.6 included the ability to deploy `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/docs/rancher/v1.6/en/cattle/scheduling/#global-service"
    }, `global services`), `, which are services that deploy duplicate containers to each host in the environment (i.e.,  nodes in your cluster using Rancher v2.x terms). If a service has the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `io.rancher.scheduler.global: 'true'`), ` label declared, then Rancher v1.6 schedules a service container on each host in the environment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "output.txt"), " Global Service Label"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Global Service Label",
        src: (__webpack_require__(72406)/* ["default"] */ .Z),
        width: "849",
        height: "402"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, you can schedule a pod to each node using a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
    }, `Kubernetes DaemonSet`), `, which is a specific type of workload `, `). A `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `DaemonSet`), ` functions exactly like a Rancher v1.6 global service. The Kubernetes scheduler deploys a pod on each node of the cluster, and as new nodes are added, the scheduler will start new pods on them provided they match the scheduling requirements of the workload. Additionally, in v2.x, you can also limit a DaemonSet to be deployed to nodes that have a specific label.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To create a daemonset while configuring a workload, choose `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Run one pod on each node`), ` from the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Workload Type`), ` options.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Workload Configuration: Choose run one pod on each node to configure daemonset"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "choose Run one pod on each node",
        src: (__webpack_require__(26533)/* ["default"] */ .Z),
        width: "332",
        height: "232"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "scheduling-pods-using-resource-constraints"
    }, `Scheduling Pods Using Resource Constraints`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `While creating a service in the Rancher v1.6 UI, you could schedule its containers to hosts based on hardware requirements that you choose. The containers are then scheduled to hosts based on which ones have bandwidth, memory, and CPU capacity.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, you can still specify the resources required by your pods. However, these options are unavailable in the UI. Instead, you must edit your workload's manifest file to declare these resource constraints.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To declare resource constraints, edit your migrated workloads, editing the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Security & Host`), ` sections.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `To reserve a minimum hardware reservation available for your pod(s), edit the following sections:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Memory Reservation`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `CPU Reservation`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `NVIDIA GPU Reservation`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `To set a maximum hardware limit for your pods, edit:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Memory Limit`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `CPU Limit`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Scheduling: Resource Constraint Settings"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Resource Constraint Settings",
        src: (__webpack_require__(93228)/* ["default"] */ .Z),
        width: "1415",
        height: "554"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can find more detail about these specs and how to use them in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"
    }, `Kubernetes Documentation`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "next-service-discovery"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "h3",
        "href": "/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"
    }, `Next: Service Discovery`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 36855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/migrate-schedule-workloads-d96fff9ae8a53c6fcb7ca181a8b8b764.png");

/***/ }),

/***/ 15290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/node-schedule-advanced-options-dc3a7841c7e37731e5ff2fee98affe15.png");

/***/ }),

/***/ 35731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/node-schedule-antiaffinity-487208cbca7fb9115c559fdf5270cd30.png");

/***/ }),

/***/ 39631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/node-scheduling-17e07c018025aaccf27d5335ae9d8a88.png");

/***/ }),

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/resolve-affinity-193ce07d5da64fcc3af33ef690943a5a.png");

/***/ }),

/***/ 72406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/resolve-global-ac6b1bb2cbc3598d2625b5344618af1e.png");

/***/ }),

/***/ 51168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/resolve-scale-6a763b7b393544ef83a78b81575cc486.png");

/***/ }),

/***/ 93228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/resource-constraint-settings-d38cdca5cec26cceb92564b7515b4f45.png");

/***/ }),

/***/ 17528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schedule-specific-node-165918f689889d19f5c21d1eb2befea5.png");

/***/ }),

/***/ 41324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/scheduled-nodes-b862b4f88893b4a82a3973247b6498c2.png");

/***/ }),

/***/ 29117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 26533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/workload-type-afdb8ad95a1f6e54168a6c5cbf1aa3ef.png");

/***/ })

}]);