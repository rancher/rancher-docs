"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[31500],{

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

/***/ 27466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const PortsCustomNodes = ()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "From / To"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Rancher Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "etcd Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Control Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Worker Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "External Rancher Load Balancer"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Internet"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Rancher Nodes ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(1)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "git.rancher.io")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "6"
    }, "etcd Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "6",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(3)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2379 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "5",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2380 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8472 UDP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "4789 UDP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(6)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9099 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "8"
    }, "Control Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "8",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(3)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2379 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "7",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2380 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8472 UDP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "4789 UDP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(6)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "10250 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9099 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "10254 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "5"
    }, "Worker Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "5",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(3)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "4",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8472 UDP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "4789 UDP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(6)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9099 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "10254 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernetes API Clients"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(5)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "3"
    }, "Workload Clients or Load Balancer"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "30000-32767 TCP / UDP", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "(nodeport)"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "80 TCP (Ingress)"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP (Ingress)"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "7"
    }, "Notes:", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "1. Nodes running standalone server or Rancher HA deployment.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "2. Required to fetch Rancher chart library.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "3. Only without external load balancer in front of Rancher.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "4. Local traffic to the node itself (not across nodes), if you've enabled optional features such as Rancher Monitoring.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "5. Only if Authorized Cluster Endpoints are activated.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "6. Only if using Overlay mode on Windows cluster."))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortsCustomNodes);


/***/ }),

/***/ 15071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const PortsIaasNodes = ()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        style: {
            "border-style": 'solid'
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "From / To"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Rancher Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "etcd Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Control Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Worker Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "External Rancher Load Balancer"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Internet"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "2"
    }, "Rancher Nodes ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(1)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "22 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "2",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "git.rancher.io")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2376 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "5"
    }, "etcd Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "5",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(3)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2379 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "5",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2380 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8472 UDP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9099 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "7"
    }, "Control Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "7",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(3)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2379 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "7",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "2380 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8472 UDP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "10250 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9099 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "10254 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "4"
    }, "Worker Plane Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "4",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(3)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "4",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8472 UDP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9099 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "10254 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernetes API Clients"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "6443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(5)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "3"
    }, "Workload Clients or Load Balancer"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "30000-32767 TCP / UDP", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "(nodeport)"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "80 TCP (Ingress)"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP (Ingress)"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "7"
    }, "Notes:", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "1. Nodes running standalone server or Rancher HA deployment.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "2. Required to fetch Rancher chart library.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "3. Only without external load balancer in front of Rancher.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "4. Local traffic to the node itself (not across nodes).", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "5. Only if Authorized Cluster Endpoints are activated."))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortsIaasNodes);


/***/ }),

/***/ 12496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const PortsImportedHosted = ()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "From / To"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Rancher Nodes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Hosted / Imported Cluster"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "External Rancher Load Balancer"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Internet"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "3"
    }, "Rancher Nodes ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(1)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "80 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "Kubernetes API ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Endpoint Port ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(2)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        rowspan: "3",
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "git.rancher.io")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "8443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "9443 TCP"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Hosted / Imported Cluster"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(4)(5)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "443 TCP ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(5)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Kubernetes API Clients"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "Cluster / Provider Specific ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(6)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Workload Client"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
            "background-color": "#3497DA",
            color: "#ffffff"
        }
    }, "Cluster / Provider Specific ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "(7)")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        colspan: "5"
    }, "Notes:", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "1. Nodes running standalone server or Rancher HA deployment.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "2. Only for hosted clusters.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "3. Required to fetch Rancher chart library.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "4. Only without external load balancer.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "5. From worker nodes.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "6. For direct access to the Kubernetes API without Rancher.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "7. Usually Ingress backed by infrastructure load balancer and/or nodeport."))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortsImportedHosted);


/***/ }),

/***/ 44738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ port_requirements_contentTitle),
  "default": () => (/* binding */ port_requirements_MDXContent),
  frontMatter: () => (/* binding */ port_requirements_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ port_requirements_toc)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./src/components/PortsIaasNodes.js
var PortsIaasNodes = __webpack_require__(15071);
// EXTERNAL MODULE: ./src/components/PortsCustomNodes.js
var PortsCustomNodes = __webpack_require__(27466);
// EXTERNAL MODULE: ./src/components/PortsImportedHosted.js
var PortsImportedHosted = __webpack_require__(12496);
;// CONCATENATED MODULE: ./i18n/zh/docusaurus-plugin-content-docs/current/shared-files/_common-ports-table.md
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
        "align": "center"
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `22`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Node Driver SSH 配置`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `179`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Calico BGP 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `2376`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Node Driver Docker daemon TLS 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `2379`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd 客户端请求`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `2380`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd 对等通信`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `8472`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal/Flannel VXLAN 覆盖网络`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `4789`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Windows 集群中的 Flannel VXLAN 覆盖网络`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `8443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher webhook`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `9099`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal/Flannel livenessProbe/readinessProbe`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `9100`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Monitoring 从 Linux node-exporter 中抓取指标所需的默认端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `9443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher webhook`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `9796`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Monitoring 从 Windows node-exporter 中抓取指标所需的默认端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `6783`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Weave 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `6783-6784`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Weave UDP 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10250`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Metrics Server 与所有节点 API 的通信`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10254`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Ingress controller livenessProbe/readinessProbe`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP/UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `30000-32767`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `NodePort 端口范围`)))));
}
MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/installation-requirements/port-requirements.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function port_requirements_define_property(obj, key, value) {
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
function port_requirements_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            port_requirements_define_property(target, key, source[key]);
        });
    }
    return target;
}
function port_requirements_ownKeys(object, enumerableOnly) {
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
function port_requirements_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        port_requirements_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function port_requirements_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = port_requirements_object_without_properties_loose(source, excluded);
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
function port_requirements_object_without_properties_loose(source, excluded) {
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


const port_requirements_frontMatter = {
    title: '端口要求',
    description: '了解 Rancher 正常运行所需的端口要求，包括 Rancher 节点和下游 Kubernetes 集群节点'
};
const port_requirements_contentTitle = undefined;
const metadata = {
    "unversionedId": "getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "id": "getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "title": "端口要求",
    "description": "了解 Rancher 正常运行所需的端口要求，包括 Rancher 节点和下游 Kubernetes 集群节点",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/installation-requirements/port-requirements.md",
    "sourceDirName": "getting-started/installation-and-upgrade/installation-requirements",
    "slug": "/getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "permalink": "/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/installation-requirements/port-requirements.md",
    "tags": [],
    "version": "current",
    "lastUpdatedAt": 1712782233,
    "formattedLastUpdatedAt": "2024年4月10日",
    "frontMatter": {
        "title": "端口要求",
        "description": "了解 Rancher 正常运行所需的端口要求，包括 Rancher 节点和下游 Kubernetes 集群节点"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Dockershim",
        "permalink": "/zh/getting-started/installation-and-upgrade/installation-requirements/dockershim"
    },
    "next": {
        "title": "安装参考",
        "permalink": "/zh/getting-started/installation-and-upgrade/installation-references/"
    }
};
const assets = {};




const port_requirements_toc = [
    {
        value: 'Rancher 节点',
        id: 'rancher-节点',
        level: 2
    },
    {
        value: 'K3s 上 Rancher Server 节点的端口',
        id: 'k3s-上-rancher-server-节点的端口',
        level: 3
    },
    {
        value: 'RKE 上 Rancher Server 节点的端口',
        id: 'rke-上-rancher-server-节点的端口',
        level: 3
    },
    {
        value: 'RKE2 上 Rancher Server 节点的端口',
        id: 'rke2-上-rancher-server-节点的端口',
        level: 3
    },
    {
        value: 'Docker 安装的 Rancher Server 的端口',
        id: 'docker-安装的-rancher-server-的端口',
        level: 3
    },
    {
        value: '下游 Kubernetes 集群节点',
        id: '下游-kubernetes-集群节点',
        level: 2
    },
    {
        value: 'Harvester 集群的端口',
        id: 'harvester-集群的端口',
        level: 3
    },
    {
        value: 'Rancher 使用节点池启动 Kubernetes 集群的端口',
        id: 'rancher-使用节点池启动-kubernetes-集群的端口',
        level: 3
    },
    {
        value: 'Rancher 使用自定义节点启动 Kubernetes 集群的端口',
        id: 'rancher-使用自定义节点启动-kubernetes-集群的端口',
        level: 3
    },
    {
        value: '托管 Kubernetes 集群的端口',
        id: '托管-kubernetes-集群的端口',
        level: 3
    },
    {
        value: '已注册集群的端口',
        id: '已注册集群的端口',
        level: 3
    },
    {
        value: '其他端口注意事项',
        id: '其他端口注意事项',
        level: 2
    },
    {
        value: '常用端口',
        id: '常用端口',
        level: 3
    },
    {
        value: '本地节点流量',
        id: '本地节点流量',
        level: 3
    },
    {
        value: 'Rancher AWS EC2 安全组',
        id: 'rancher-aws-ec2-安全组',
        level: 3
    },
    {
        value: '打开 SUSE Linux 端口',
        id: '打开-suse-linux-端口',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,esm/* mdx */.kt)("div", props);
    };
const Tabs = makeShortcode("Tabs");
const TabItem = makeShortcode("TabItem");
const port_requirements_layoutProps = {
    toc: port_requirements_toc
};
const port_requirements_MDXLayout = "wrapper";
function port_requirements_MDXContent(_param) {
    var { components } = _param, props = port_requirements_object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(port_requirements_MDXLayout, port_requirements_object_spread_props(port_requirements_object_spread({}, port_requirements_layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `为了确保能正常运行，Rancher 需要在 Rancher 节点和下游 Kubernetes 集群节点上开放一些端口。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h2", {
        "id": "rancher-节点"
    }, `Rancher 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表列出了运行 Rancher Server 的节点之间需要开放的端口。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `不同的 Rancher Server 架构有不同的端口要求。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Rancher 可以安装在任何 Kubernetes 集群上。如果你的 Rancher 安装在 K3s、RKE 或 RKE2 Kubernetes 集群上，请参考下面的标签页。对于其他 Kubernetes 发行版，请参见该发行版的文档，了解集群节点的端口要求。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "title": "注意事项：",
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `Rancher 节点可能要求额外出站访问已配置的外部验证提供程序（如 LDAP）。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `Kubernetes 建议节点端口服务使用 TCP 30000-32767。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `对于防火墙，可能需要在集群和 Pod CIDR 内启用流量。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `Rancher 节点可能还需要出站访问用于存储集群备份（如 Minio）的外部 S3 上的位置。`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "k3s-上-rancher-server-节点的端口"
    }, `K3s 上 Rancher Server 节点的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `K3s server 需要开放端口 6443 才能供节点访问。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `使用 Flannel VXLAN 时，节点需要能够通过 UDP 端口 8472 访问其他节点。节点不应监听任何其他端口。K3s 使用反向隧道，建立节点与 Server 的出站连接，所有 kubelet 流量都通过该隧道进行。但是，如果你不使用 Flannel，而是使用自定义的 CNI，K3s 则不需要打开 8472 端口。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `如果要使用 Metrics Server，则需要在每个节点上打开端口 10250。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "title": "重要提示：",
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `节点上的 VXLAN 端口会开放集群网络，让任何人均能访问集群。因此，不要将 VXLAN 端口暴露给外界。请使用禁用 8472 端口的防火墙/安全组来运行节点。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了入站和出站流量的端口要求：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher Server 节点的入站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `源`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `80`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `执行外部 SSL 终止的负载均衡器/代理`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用外部 SSL 终止时的 Rancher UI/API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `Server 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `托管/注册的 Kubernetes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `任何需要使用 Rancher UI 或 API 的源`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher Agent，Rancher UI/API，kubectl`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `K3s Server 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `8472`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `K3s Server 和 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `仅 Flannel VXLAN 需要`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `10250`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `K3s Server 和 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `kubelet`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 节点的出站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `目标`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `22`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver 创建的节点的任何节点 IP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver SSH 配置节点`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `git.rancher.io`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher catalog`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2376`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver 创建的节点的任何节点 IP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Docker Machine 使用的 Docker daemon TLS 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `托管/导入的 Kubernetes API`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API Server`))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "rke-上-rancher-server-节点的端口"
    }, `RKE 上 Rancher Server 节点的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `通常情况下，Rancher 安装在三个 RKE 节点上，这些节点都有 etcd、controlplane 和 worker 角色。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了 Rancher 节点之间流量的端口要求：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 节点的流量规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher Agents`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2379`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd 客户端请求`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2380`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd 对等通信`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes apiserver`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `8443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `NGINX Ingress 的验证 Webhook`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `8472`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal/Flannel VXLAN 覆盖网络`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `9099`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal/Flannel livenessProbe/readinessProbe`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `10250`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Metrics Server 与所有节点的通信`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `10254`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Ingress controller livenessProbe/readinessProbe`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了入站和出站流量的端口要求：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 节点的入站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `源`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `22`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE CLI`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE 通过 SSH 配置节点`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `80`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `负载均衡器/反向代理`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `到 Rancher UI/API 的 HTTP 流量`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `负载均衡器/反向代理`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `所有集群节点和其他 API/UI 客户端的 IP`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `到 Rancher UI/API 的 HTTPS 流量`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API 客户端`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `到 Kubernetes API 的 HTTPS 流量`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 节点的出站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `目标`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `git.rancher.io`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher catalog`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `22`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver 创建的任何节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Node Driver 通过 SSH 配置节点`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2376`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver 创建的任何节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Node Driver 使用的 Docker daemon TLS 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `托管/导入的 Kubernetes API`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API Server`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `提供商依赖`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `托管集群中 Kubernetes API 端点的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API`))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "rke2-上-rancher-server-节点的端口"
    }, `RKE2 上 Rancher Server 节点的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `RKE2 server 需要开放端口 6443 和 9345 才能供集群中的其他节点访问。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `使用 Flannel VXLAN 时，所有节点都需要能够通过 UDP 端口 8472 访问其他节点。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `如果要使用 Metrics Server，则需要在每个节点上打开端口 10250。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "title": "重要提示：",
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `节点上的 VXLAN 端口会开放集群网络，让任何人均能访问集群。因此，不要将 VXLAN 端口暴露给外界。请使用禁用 8472 端口的防火墙/安全组来运行节点。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "RKE2 Server 节点的入站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `源`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `9345`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Server 和 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `节点注册。需要在所有 Server 节点上将端口开放给集群中的所有其他节点。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `8472`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Server 和 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `仅 Flannel VXLAN 需要`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `10250`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Server 和 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `kubelet`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2379`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Server 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd 客户端端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2380`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Server 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd 对等端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `30000-32767`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `RKE2 Server 和 Agent 节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `NodePort 端口范围。可以使用 TCP 或 UDP。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `5473`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Calico-node pod 连接到 typha pod`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Calico 部署时需要`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `HTTP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `80`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `执行外部 SSL 终止的负载均衡器/代理`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用外部 SSL 终止时的 Rancher UI/API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `HTTPS`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `托管/注册的 Kubernetes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `任何需要使用 Rancher UI 或 API 的源`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher Agent，Rancher UI/API，kubectl。如果负载均衡器执行 TLS 终止，则不需要。`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `所有出站流量通常都是允许的。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "docker-安装的-rancher-server-的端口"
    }, `Docker 安装的 Rancher Server 的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了 Rancher 节点入站和出站流量的端口要求：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 节点的入站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `源`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `80`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `执行外部 SSL 终止的负载均衡器/代理`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用外部 SSL 终止时的 Rancher UI/API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `托管/注册的 Kubernetes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `任何需要使用 Rancher UI 或 API 的源`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher Agent，Rancher UI/API，kubectl`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 节点的出站规则"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `源`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `描述`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `22`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver 创建的节点的任何节点 IP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver SSH 配置节点`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `git.rancher.io`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher catalog`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2376`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `使用 Node Driver 创建的节点的任何节点 IP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Docker Machine 使用的 Docker daemon TLS 端口`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `托管/导入的 Kubernetes API`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API Server`))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h2", {
        "id": "下游-kubernetes-集群节点"
    }, `下游 Kubernetes 集群节点`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下游 Kubernetes 集群用于运行你的应用和服务。本节介绍了哪些端口需要在下游集群的节点上打开，以便 Rancher 能够与它们进行通信。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `不同的下游集群的启动方式有不同的端口要求。下面的每个标签都列出了不同`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md"
    }, `集群类型`), `所需打开的端口。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下图描述了为每个`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/kubernetes-clusters-in-rancher-setup.md"
    }, `集群类型`), `打开的端口。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rancher 管理面板的端口要求"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("img", {
        alt: "基本端口要求",
        src: (__webpack_require__(79901)/* ["default"] */ .Z),
        width: "856",
        height: "488"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `如果你对安全性的关注不是太高，而且也愿意多打开几个端口，你可以参考`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "#%E5%B8%B8%E7%94%A8%E7%AB%AF%E5%8F%A3"
    }, `常用端口`), `中列出的端口，而不是参考下方的表格。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "harvester-集群的端口"
    }, `Harvester 集群的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `有关 Harvester 端口要求的更多信息，请参阅`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "../../../integrations-in-rancher/harvester.md#%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82"
    }, `此处`), `。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "rancher-使用节点池启动-kubernetes-集群的端口"
    }, `Rancher 使用节点池启动 Kubernetes 集群的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了节点在`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/"
    }, `云提供商`), `中创建的情况下，`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/"
    }, `Rancher 启动 Kubernetes`), ` 的端口要求。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `在 AWS EC2 或 DigitalOcean 等云提供商中创建集群期间，Rancher 会自动打开所需的端口。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsIaasNodes/* default */.Z, {
        mdxType: "PortsIaasNodes"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "rancher-使用自定义节点启动-kubernetes-集群的端口"
    }, `Rancher 使用自定义节点启动 Kubernetes 集群的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了使用`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "../../../reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/use-existing-nodes.md"
    }, `自定义节点`), `的情况下，`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/"
    }, `Rancher 启动 Kubernetes`), ` 的端口要求。`), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsCustomNodes/* default */.Z, {
        mdxType: "PortsCustomNodes"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "托管-kubernetes-集群的端口"
    }, `托管 Kubernetes 集群的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/"
    }, `托管集群`), `的端口要求。`), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsImportedHosted/* default */.Z, {
        mdxType: "PortsImportedHosted"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "已注册集群的端口"
    }, `已注册集群的端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `在 Rancher 2.5 之前，注册集群被称为导入集群。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "单击展开"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `下表描述了`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"
    }, `注册集群`), `的端口要求。`), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsImportedHosted/* default */.Z, {
        mdxType: "PortsImportedHosted"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h2", {
        "id": "其他端口注意事项"
    }, `其他端口注意事项`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "常用端口"
    }, `常用端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `无论集群是什么类型，常用端口通常在你的 Kubernetes 节点上打开。`), /*#__PURE__*/ (0,esm/* mdx */.kt)(MDXContent, {
        mdxType: "CommonPortsTable"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("hr", null), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "本地节点流量"
    }, `本地节点流量`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `上述要求中标记为`, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `本地流量`), `（例如 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `9099 TCP`), `）的端口会用于 Kubernetes 健康检查 （`, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `livenessProbe`), ` 和 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `readinessProbe`), `）。
这些健康检查是在节点本身执行的。在大多数云环境中，这种本地流量是默认允许的。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `但是，在以下情况下可能会阻止此流量：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `你已在节点上应用了严格的主机防火墙策略。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `你正在使用有多个接口（多宿主）的节点。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `在这些情况下，你必须在你的主机防火墙中主动允许这种流量，如果是公共/私有云托管的主机（例如 AWS 或 OpenStack），你需要在你的安全组配置中主动允许此流量。请记住，如果你在安全组中使用安全组作为源或目标，主动开放端口只适用于节点/实例的私有接口。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "rancher-aws-ec2-安全组"
    }, `Rancher AWS EC2 安全组`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `当你使用 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"
    }, `AWS EC2 Node Driver`), ` 在 Rancher 中配置集群节点时，你可以让 Rancher 创建一个名为 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `rancher-nodes`), ` 的安全组。以下规则会自动添加到该安全组中。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `类型`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `协议`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `端口范围`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `源/目标`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `规则类型`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `SSH`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `22`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `HTTP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `80`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `2376`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `2379-2380`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `sg-xxx (rancher-nodes)`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 UDP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `4789`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `sg-xxx (rancher-nodes)`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `6443`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 UDP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `8472`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `sg-xxx (rancher-nodes)`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10250-10252`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `sg-xxx (rancher-nodes)`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10256`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `sg-xxx (rancher-nodes)`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 TCP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `30000-32767`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `自定义 UDP 规则`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `UDP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `30000-32767`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `入站`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `所有流量`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `全部`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `全部`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `出站`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "打开-suse-linux-端口"
    }, `打开 SUSE Linux 端口`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `SUSE Linux 可能有一个防火墙，默认情况下会阻止所有端口。要打开将主机添加到自定义集群所需的端口：`), /*#__PURE__*/ (0,esm/* mdx */.kt)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)(TabItem, {
        value: "SLES 15 / openSUSE Leap 15",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ol", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `SSH 进入实例。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `以文本模式启动 YaST：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre"
    }, `sudo yast2
`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `导航到`, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `安全和用户`), ` > `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `防火墙`), ` > `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `区域：公共`), ` > `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `端口`), `。要在界面内导航，请参照`, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-yast-text.html#sec-yast-cli-navigate"
    }, `说明`), `。`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `要打开所需的端口，把它们输入到 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `TCP 端口`), ` 和 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `UDP 端口`), ` 字段。在这个例子中，端口 9796 和 10250 也被打开，用于监控。由此产生的字段应类似于以下内容：`), /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `TCP Ports
22, 80, 443, 2376, 2379, 2380, 6443, 9099, 9796, 10250, 10254, 30000-32767
UDP Ports
8472, 30000-32767
`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `所有必须端口都输入后，选择`, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `接受`), `。`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)(TabItem, {
        value: "SLES 12 / openSUSE Leap 42",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ol", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, `SSH 进入实例。`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, `编辑 `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "li"
    }, `/etc/sysconfig/SuSEfirewall2`), ` 并打开所需的端口。在这个例子中，端口 9796 和 10250 也被打开，用于监控。`, /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre"
    }, `FW_SERVICES_EXT_TCP="22 80 443 2376 2379 2380 6443 9099 9796 10250 10254 30000:32767"
FW_SERVICES_EXT_UDP="8472 30000:32767"
FW_ROUTE=yes
`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, `用新的端口重启防火墙：`, /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre"
    }, `SuSEfirewall2
`)))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `结果`), ` ：该节点已打开添加到自定义集群所需的端口。`));
}
port_requirements_MDXContent.isMDXComponent = true;


/***/ }),

/***/ 79901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/port-communications-1eb2fc08fabf37fda3fd63878bfa7902.svg");

/***/ })

}]);