"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[29280],{

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

/***/ 90444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ cluster_configuration_contentTitle),
  "default": () => (/* binding */ cluster_configuration_MDXContent),
  frontMatter: () => (/* binding */ cluster_configuration_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ cluster_configuration_toc)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
;// CONCATENATED MODULE: ./versioned_docs/version-2.6/shared-files/_cluster-capabilities-table.md
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


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));
const toc = [];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Action`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Rancher Launched Kubernetes Clusters`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `EKS, GKE and AKS Clusters`, /*#__PURE__*/ (0,esm/* mdx */.kt)("sup", null, `1`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Other Hosted Kubernetes Clusters`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Non-EKS or GKE Registered Clusters`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md"
    }, `Using kubectl and a kubeconfig file to Access a Cluster`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md"
    }, `Managing Cluster Members`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "/zh/v2.6/reference-guides/cluster-configuration/"
    }, `Editing and Upgrading Clusters`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`, /*#__PURE__*/ (0,esm/* mdx */.kt)("sup", null, `2`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md"
    }, `Managing Nodes`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`, /*#__PURE__*/ (0,esm/* mdx */.kt)("sup", null, `3`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md"
    }, `Managing Persistent Volumes and Storage Classes`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces.md"
    }, `Managing Projects, Namespaces and Workloads`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md"
    }, `Using App Catalogs`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Configuring Tools (`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/"
    }, `Alerts, Notifiers, Monitoring`), `, `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "/zh/v2.6/integrations-in-rancher/logging/"
    }, `Logging`), `, `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "/zh/v2.6/integrations-in-rancher/istio/"
    }, `Istio`), `)`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "/zh/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/"
    }, `Running Security Scans`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md"
    }, `Ability to rotate certificates`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Ability to `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md"
    }, `backup`), ` and `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md"
    }, `restore`), ` Rancher-launched clusters`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`, /*#__PURE__*/ (0,esm/* mdx */.kt)("sup", null, `4`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes.md"
    }, `Cleaning Kubernetes components when clusters are no longer reachable from Rancher`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "../how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy.md"
    }, `Configuring Pod Security Policies`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `✓`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    })))), /*#__PURE__*/ (0,esm/* mdx */.kt)("ol", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `Registered EKS, GKE and AKS clusters have the same options available as EKS, GKE and AKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `Cluster configuration options can't be edited for registered clusters, except for `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md"
    }, `K3s and RKE2 clusters.`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery.`))));
}
MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./versioned_docs/version-2.6/reference-guides/cluster-configuration/cluster-configuration.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function cluster_configuration_define_property(obj, key, value) {
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
function cluster_configuration_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            cluster_configuration_define_property(target, key, source[key]);
        });
    }
    return target;
}
function cluster_configuration_ownKeys(object, enumerableOnly) {
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
function cluster_configuration_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        cluster_configuration_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function cluster_configuration_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = cluster_configuration_object_without_properties_loose(source, excluded);
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
function cluster_configuration_object_without_properties_loose(source, excluded) {
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


const cluster_configuration_frontMatter = {
    title: 'Cluster Configuration'
};
const cluster_configuration_contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/cluster-configuration/cluster-configuration",
    "id": "version-2.6/reference-guides/cluster-configuration/cluster-configuration",
    "title": "Cluster Configuration",
    "description": "After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster.",
    "source": "@site/versioned_docs/version-2.6/reference-guides/cluster-configuration/cluster-configuration.md",
    "sourceDirName": "reference-guides/cluster-configuration",
    "slug": "/reference-guides/cluster-configuration/",
    "permalink": "/zh/v2.6/reference-guides/cluster-configuration/",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/cluster-configuration.md",
    "tags": [],
    "version": "2.6",
    "lastUpdatedAt": 1706551642,
    "formattedLastUpdatedAt": "2024年1月29日",
    "frontMatter": {
        "title": "Cluster Configuration"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "架构推荐",
        "permalink": "/zh/v2.6/reference-guides/rancher-manager-architecture/architecture-recommendations"
    },
    "next": {
        "title": "Rancher Server Configuration",
        "permalink": "/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/"
    }
};
const assets = {};

const cluster_configuration_toc = [
    {
        value: 'Cluster Configuration References',
        id: 'cluster-configuration-references',
        level: 3
    },
    {
        value: 'Cluster Management Capabilities by Cluster Type',
        id: 'cluster-management-capabilities-by-cluster-type',
        level: 3
    }
];
const cluster_configuration_layoutProps = {
    toc: cluster_configuration_toc
};
const cluster_configuration_MDXLayout = "wrapper";
function cluster_configuration_MDXContent(_param) {
    var { components } = _param, props = cluster_configuration_object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(cluster_configuration_MDXLayout, cluster_configuration_object_spread_props(cluster_configuration_object_spread({}, cluster_configuration_layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("head", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `For information on editing cluster membership, go to `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "../../how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md"
    }, `this page.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "cluster-configuration-references"
    }, `Cluster Configuration References`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The cluster configuration options depend on the type of Kubernetes cluster:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "li",
        "href": "rancher-server-configuration/rke1-cluster-configuration.md"
    }, `RKE Cluster Configuration`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "li",
        "href": "rancher-server-configuration/rke2-cluster-configuration.md"
    }, `RKE2 Cluster Configuration`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "li",
        "href": "rancher-server-configuration/k3s-cluster-configuration.md"
    }, `K3s Cluster Configuration`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "li",
        "href": "rancher-server-configuration/eks-cluster-configuration.md"
    }, `EKS Cluster Configuration`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "li",
        "href": "/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/"
    }, `GKE Cluster Configuration`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "li",
        "href": "rancher-server-configuration/aks-cluster-configuration.md"
    }, `AKS Cluster Configuration`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "cluster-management-capabilities-by-cluster-type"
    }, `Cluster Management Capabilities by Cluster Type`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The options and settings available for an existing cluster change based on the method that you used to provision it.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table summarizes the options and settings available for each cluster type:`), /*#__PURE__*/ (0,esm/* mdx */.kt)(MDXContent, {
        mdxType: "ClusterCapabilitiesTable"
    }));
}
cluster_configuration_MDXContent.isMDXComponent = true;


/***/ })

}]);