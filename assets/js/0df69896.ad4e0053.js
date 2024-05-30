"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[60776],{

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

/***/ 40666:
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
;// CONCATENATED MODULE: ./versioned_docs/version-2.9/shared-files/_common-ports-table.md
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
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Node driver SSH provisioning`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Calico BGP Port`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Node driver Docker daemon TLS port`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `etcd client requests`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `etcd peer communication`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Canal/Flannel VXLAN overlay networking`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Flannel VXLAN overlay networking on Windows cluster`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Default port required by Monitoring to scrape metrics from Linux and Windows node-exporters`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Weave Port`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Weave UDP Ports`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Metrics server communication with all nodes API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `NodePort port range`)))));
}
MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./versioned_docs/version-2.9/getting-started/installation-and-upgrade/installation-requirements/port-requirements.md
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
    title: 'Port Requirements',
    description: 'Read about port requirements needed in order for Rancher to operate properly, both for Rancher nodes and downstream Kubernetes cluster nodes'
};
const port_requirements_contentTitle = undefined;
const metadata = {
    "unversionedId": "getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "id": "version-2.9/getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "title": "Port Requirements",
    "description": "Read about port requirements needed in order for Rancher to operate properly, both for Rancher nodes and downstream Kubernetes cluster nodes",
    "source": "@site/versioned_docs/version-2.9/getting-started/installation-and-upgrade/installation-requirements/port-requirements.md",
    "sourceDirName": "getting-started/installation-and-upgrade/installation-requirements",
    "slug": "/getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "permalink": "/v2.9/getting-started/installation-and-upgrade/installation-requirements/port-requirements",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.9/getting-started/installation-and-upgrade/installation-requirements/port-requirements.md",
    "tags": [],
    "version": "2.9",
    "lastUpdatedAt": 1716936476,
    "formattedLastUpdatedAt": "May 28, 2024",
    "frontMatter": {
        "title": "Port Requirements",
        "description": "Read about port requirements needed in order for Rancher to operate properly, both for Rancher nodes and downstream Kubernetes cluster nodes"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Dockershim",
        "permalink": "/v2.9/getting-started/installation-and-upgrade/installation-requirements/dockershim"
    },
    "next": {
        "title": "Installation References",
        "permalink": "/v2.9/getting-started/installation-and-upgrade/installation-references/"
    }
};
const assets = {};




const port_requirements_toc = [
    {
        value: 'Rancher Nodes',
        id: 'rancher-nodes',
        level: 2
    },
    {
        value: 'Ports for Rancher Server Nodes on K3s',
        id: 'ports-for-rancher-server-nodes-on-k3s',
        level: 3
    },
    {
        value: 'Ports for Rancher Server Nodes on RKE',
        id: 'ports-for-rancher-server-nodes-on-rke',
        level: 3
    },
    {
        value: 'Ports for Rancher Server Nodes on RKE2',
        id: 'ports-for-rancher-server-nodes-on-rke2',
        level: 3
    },
    {
        value: 'Ports for Rancher Server in Docker',
        id: 'ports-for-rancher-server-in-docker',
        level: 3
    },
    {
        value: 'Downstream Kubernetes Cluster Nodes',
        id: 'downstream-kubernetes-cluster-nodes',
        level: 2
    },
    {
        value: 'Ports for Harvester Clusters',
        id: 'ports-for-harvester-clusters',
        level: 3
    },
    {
        value: 'Ports for Rancher Launched Kubernetes Clusters using Node Pools',
        id: 'ports-for-rancher-launched-kubernetes-clusters-using-node-pools',
        level: 3
    },
    {
        value: 'Ports for Rancher Launched Kubernetes Clusters using Custom Nodes',
        id: 'ports-for-rancher-launched-kubernetes-clusters-using-custom-nodes',
        level: 3
    },
    {
        value: 'Ports for Hosted Kubernetes Clusters',
        id: 'ports-for-hosted-kubernetes-clusters',
        level: 3
    },
    {
        value: 'Ports for Registered Clusters',
        id: 'ports-for-registered-clusters',
        level: 3
    },
    {
        value: 'Other Port Considerations',
        id: 'other-port-considerations',
        level: 2
    },
    {
        value: 'Commonly Used Ports',
        id: 'commonly-used-ports',
        level: 3
    },
    {
        value: 'Local Node Traffic',
        id: 'local-node-traffic',
        level: 3
    },
    {
        value: 'Rancher AWS EC2 Security Group',
        id: 'rancher-aws-ec2-security-group',
        level: 3
    },
    {
        value: 'Opening SUSE Linux Ports',
        id: 'opening-suse-linux-ports',
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
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("head", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements/port-requirements"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h2", {
        "id": "rancher-nodes"
    }, `Rancher Nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table lists the ports that need to be open to and from nodes that are running the Rancher server.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The port requirements differ based on the Rancher server architecture.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Rancher can be installed on any Kubernetes cluster. For Rancher installs on a K3s, RKE, or RKE2 Kubernetes cluster, refer to the tabs below. For other Kubernetes distributions, refer to the distribution's documentation for the port requirements for cluster nodes.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "title": "Notes:",
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `Rancher nodes may also require additional outbound access for any external authentication provider which is configured (LDAP for example).`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `Kubernetes recommends TCP 30000-32767 for node port services.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `For firewalls, traffic may need to be enabled within the cluster and pod CIDR.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `Rancher nodes may also need outbound access to an external S3 location which is used for storing cluster backups (Minio for example).`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-rancher-server-nodes-on-k3s"
    }, `Ports for Rancher Server Nodes on K3s`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The K3s server needs port 6443 to be accessible by the nodes.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used. The node should not listen on any other port. K3s uses reverse tunneling such that the nodes make outbound connections to the server and all kubelet traffic runs through that tunnel. However, if you do not use Flannel and provide your own custom CNI, then port 8472 is not needed by K3s.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `If you wish to utilize the metrics server, you will need to open port 10250 on each node.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "title": "Important:",
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following tables break down the port requirements for inbound and outbound traffic:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Inbound Rules for Rancher Server Nodes"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Source`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Load balancer/proxy that does external SSL termination`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher UI/API when external SSL termination is used`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `server nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `hosted/registered Kubernetes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `any source that needs to be able to use the Rancher UI or API`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher agent, Rancher UI/API, kubectl`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `K3s server nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `K3s server and agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Required only for Flannel VXLAN.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `K3s server and agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `kubelet`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Outbound Rules for Rancher Nodes"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Destination`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Any node IP from a node created using Node Driver`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `SSH provisioning of nodes using Node Driver`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Any node IP from a node created using Node driver`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Docker daemon TLS port used by Docker Machine`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Hosted/Imported Kubernetes API`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API server`))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-rancher-server-nodes-on-rke"
    }, `Ports for Rancher Server Nodes on RKE`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Typically Rancher is installed on three RKE nodes that all have the etcd, control plane and worker roles.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following tables break down the port requirements for traffic between the Rancher nodes:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Rules for traffic between Rancher nodes"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Rancher agents`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `etcd client requests`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `etcd peer communication`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Nginx Ingress's Validating Webhook`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Canal/Flannel VXLAN overlay networking`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Metrics server communication with all nodes`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Ingress controller livenessProbe/readinessProbe`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following tables break down the port requirements for inbound and outbound traffic:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Inbound Rules for Rancher Nodes"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Source`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `SSH provisioning of node by RKE`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Load Balancer/Reverse Proxy`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `HTTP traffic to Rancher UI/API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `Load Balancer/Reverse Proxy`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `IPs of all cluster nodes and other API/UI clients`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `HTTPS traffic to Rancher UI/API`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Kubernetes API clients`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `HTTPS traffic to Kubernetes API`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Outbound Rules for Rancher Nodes"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Destination`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Any node created using a node driver`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `SSH provisioning of node by node driver`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Any node created using a node driver`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Docker daemon TLS port used by node driver`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Hosted/Imported Kubernetes API`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API server`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `TCP`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Provider dependent`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Port of the Kubernetes API endpoint in hosted cluster`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API`))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-rancher-server-nodes-on-rke2"
    }, `Ports for Rancher Server Nodes on RKE2`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The RKE2 server needs port 6443 and 9345 to be accessible by other nodes in the cluster.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `All nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `If you wish to utilize the metrics server, you will need to open port 10250 on each node.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "title": "Important:",
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Inbound Rules for RKE2 Server Nodes"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Source`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `RKE2 server and agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Node registration. Port should be open on all server nodes to all other nodes in the cluster.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `RKE2 agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `RKE2 server and agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Required only for Flannel VXLAN`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `RKE2 server and agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `RKE2 server nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd client port`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `RKE2 server nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `etcd peer port`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `RKE2 server and agent nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `NodePort port range. Can use TCP or UDP.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Calico-node pod connecting to typha pod`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Required when deploying with Calico`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Load balancer/proxy that does external SSL termination`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher UI/API when external SSL termination is used`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `hosted/registered Kubernetes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `any source that needs to be able to use the Rancher UI or API`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher agent, Rancher UI/API, kubectl. Not needed if you have a load balancer doing TLS termination.`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Typically all outbound traffic is allowed.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-rancher-server-in-docker"
    }, `Ports for Rancher Server in Docker`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following tables break down the port requirements for Rancher nodes, for inbound and outbound traffic:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Inbound Rules for Rancher Node"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Source`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Load balancer/proxy that does external SSL termination`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher UI/API when external SSL termination is used`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `hosted/registered Kubernetes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", null, `any source that needs to be able to use the Rancher UI or API`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher agent, Rancher UI/API, kubectl`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Outbound Rules for Rancher Node"), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Port`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Source`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Any node IP from a node created using Node Driver`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `SSH provisioning of nodes using Node Driver`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Any node IP from a node created using a node driver`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Docker daemon TLS port used by Docker Machine`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Hosted/Imported Kubernetes API`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes API server`))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h2", {
        "id": "downstream-kubernetes-cluster-nodes"
    }, `Downstream Kubernetes Cluster Nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Downstream Kubernetes clusters run your apps and services. This section describes what ports need to be opened on the nodes in downstream clusters so that Rancher can communicate with them.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The port requirements differ depending on how the downstream cluster was launched. Each of the tabs below list the ports that need to be opened for different `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/"
    }, `cluster types`), `.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following diagram depicts the ports that are opened for each `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/"
    }, `cluster type`), `.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("figcaption", null, "Port Requirements for the Rancher Management Plane"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("img", {
        alt: "Basic Port Requirements",
        src: (__webpack_require__(79901)/* ["default"] */ .Z),
        width: "856",
        height: "488"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `If security isn't a large concern and you're okay with opening a few additional ports, you can use the table in `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "#commonly-used-ports"
    }, `Commonly Used Ports`), ` as your port reference instead of the comprehensive tables below.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-harvester-clusters"
    }, `Ports for Harvester Clusters`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Refer to the `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/integrations-in-rancher/harvester/overview#port-requirements"
    }, `Harvester Integration Overview`), ` for more information on Harvester port requirements.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-rancher-launched-kubernetes-clusters-using-node-pools"
    }, `Ports for Rancher Launched Kubernetes Clusters using Node Pools`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table depicts the port requirements for `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/"
    }, `Rancher Launched Kubernetes`), ` with nodes created in an `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/"
    }, `Infrastructure Provider`), `.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `The required ports are automatically opened by Rancher during creation of clusters in cloud providers like Amazon EC2 or DigitalOcean.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsIaasNodes/* default */.Z, {
        mdxType: "PortsIaasNodes"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-rancher-launched-kubernetes-clusters-using-custom-nodes"
    }, `Ports for Rancher Launched Kubernetes Clusters using Custom Nodes`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table depicts the port requirements for `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/"
    }, `Rancher Launched Kubernetes`), ` with `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/"
    }, `Custom Nodes`), `.`), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsCustomNodes/* default */.Z, {
        mdxType: "PortsCustomNodes"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-hosted-kubernetes-clusters"
    }, `Ports for Hosted Kubernetes Clusters`), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table depicts the port requirements for `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/"
    }, `hosted clusters`), `.`), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsImportedHosted/* default */.Z, {
        mdxType: "PortsImportedHosted"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "ports-for-registered-clusters"
    }, `Ports for Registered Clusters`), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `Registered clusters were called imported clusters before Rancher v2.5.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("details", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("summary", null, "Click to expand"), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table depicts the port requirements for `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"
    }, `registered clusters`), `.`), /*#__PURE__*/ (0,esm/* mdx */.kt)(PortsImportedHosted/* default */.Z, {
        mdxType: "PortsImportedHosted"
    })), /*#__PURE__*/ (0,esm/* mdx */.kt)("h2", {
        "id": "other-port-considerations"
    }, `Other Port Considerations`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "commonly-used-ports"
    }, `Commonly Used Ports`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `These ports are typically opened on your Kubernetes nodes, regardless of what type of cluster it is.`), /*#__PURE__*/ (0,esm/* mdx */.kt)(MDXContent, {
        mdxType: "CommonPortsTable"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("hr", null), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "local-node-traffic"
    }, `Local Node Traffic`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Ports marked as `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `local traffic`), ` (i.e., `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `9099 TCP`), `) in the above requirements are used for Kubernetes healthchecks (`, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `livenessProbe`), ` and`, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `readinessProbe`), `).
These healthchecks are executed on the node itself. In most cloud environments, this local traffic is allowed by default.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `However, this traffic may be blocked when:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("ul", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `You have applied strict host firewall policies on the node.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ul"
    }, `You are using nodes that have multiple interfaces (multihomed).`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `In these cases, you have to explicitly allow this traffic in your host firewall, or in case of public/private cloud hosted machines (i.e. AWS or OpenStack), in your security group configuration. Keep in mind that when using a security group as source or destination in your security group, explicitly opening ports only applies to the private interface of the nodes / instances.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "rancher-aws-ec2-security-group"
    }, `Rancher AWS EC2 Security Group`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `When using the `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "/v2.9/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"
    }, `AWS EC2 node driver`), ` to provision cluster nodes in Rancher, you can choose to let Rancher create a security group called `, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "p"
    }, `rancher-nodes`), `. The following rules are automatically added to this security group.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Type`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Protocol`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Port Range`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Source/Destination`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Rule Type`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom UDP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom UDP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom TCP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Custom UDP Rule`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `Inbound`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `All traffic`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `All`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `All`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `0.0.0.0/0`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `Outbound`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)("h3", {
        "id": "opening-suse-linux-ports"
    }, `Opening SUSE Linux Ports`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `SUSE Linux may have a firewall that blocks all ports by default. To open the ports needed for adding the host to a custom cluster,`), /*#__PURE__*/ (0,esm/* mdx */.kt)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)(TabItem, {
        value: "SLES 15 / openSUSE Leap 15",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ol", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `SSH into the instance.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `Start YaST in text mode:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre"
    }, `sudo yast2
`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `Navigate to `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Security and Users`), ` > `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Firewall`), ` > `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Zones:public`), ` > `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Ports`), `. To navigate within the interface, follow these `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-yast-text.html#sec-yast-cli-navigate"
    }, `instructions`), `.`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "li"
    }, `To open the required ports, enter them into the `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `TCP Ports`), ` and `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `UDP Ports`), ` fields. In this example, ports 9796 and 10250 are also opened for monitoring. The resulting fields should look similar to the following:`), /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
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
    }, `When all required ports are enter, select `, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Accept`), `.`)))), /*#__PURE__*/ (0,esm/* mdx */.kt)(TabItem, {
        value: "SLES 12 / openSUSE Leap 42",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("ol", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, `SSH into the instance.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, `Edit /`, /*#__PURE__*/ (0,esm/* mdx */.kt)("inlineCode", {
        parentName: "li"
    }, `etc/sysconfig/SuSEfirewall2`), ` and open the required ports. In this example, ports 9796 and 10250 are also opened for monitoring:`, /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre"
    }, `FW_SERVICES_EXT_TCP="22 80 443 2376 2379 2380 6443 9099 9796 10250 10254 30000:32767"
FW_SERVICES_EXT_UDP="8472 30000:32767"
FW_ROUTE=yes
`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("li", {
        parentName: "ol"
    }, `Restart the firewall with the new ports:`, /*#__PURE__*/ (0,esm/* mdx */.kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("code", {
        parentName: "pre"
    }, `SuSEfirewall2
`)))))), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Result:`), ` The node has the open ports required to be added to a custom cluster.`));
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