"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[87915],{

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

/***/ 74205:
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
    title: 'Rancher Extensions'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "integrations-in-rancher/rancher-extensions",
    "id": "version-2.8/integrations-in-rancher/rancher-extensions",
    "title": "Rancher Extensions",
    "description": "Extensions allow users, developers, partners, and customers to extend and enhance the Rancher UI. In addition, users can make changes and create enhancements to their UI functionality independent of Rancher releases. Extensions will enable users to build on top of Rancher to better tailor it to their respective environments. Note that users will also have the ability to update to new versions as well as roll back to a previous version.",
    "source": "@site/versioned_docs/version-2.8/integrations-in-rancher/rancher-extensions.md",
    "sourceDirName": "integrations-in-rancher",
    "slug": "/integrations-in-rancher/rancher-extensions",
    "permalink": "/v2.8/integrations-in-rancher/rancher-extensions",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.8/integrations-in-rancher/rancher-extensions.md",
    "tags": [],
    "version": "2.8",
    "lastUpdatedAt": 1712608327,
    "formattedLastUpdatedAt": "Apr 8, 2024",
    "frontMatter": {
        "title": "Rancher Extensions"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "OPA Gatekeeper",
        "permalink": "/v2.8/integrations-in-rancher/opa-gatekeeper"
    },
    "next": {
        "title": "General FAQ",
        "permalink": "/v2.8/faq/general-faq"
    }
};
const assets = {};
const toc = [
    {
        value: 'Prerequisites',
        id: 'prerequisites',
        level: 2
    },
    {
        value: 'Installing Extensions',
        id: 'installing-extensions',
        level: 2
    },
    {
        value: 'Updating and Upgrading Extensions',
        id: 'updating-and-upgrading-extensions',
        level: 2
    },
    {
        value: 'Deleting Extensions',
        id: 'deleting-extensions',
        level: 2
    },
    {
        value: 'Deleting Extension Repositories',
        id: 'deleting-extension-repositories',
        level: 2
    },
    {
        value: 'Deleting Extension Repository Container Images',
        id: 'deleting-extension-repository-container-images',
        level: 2
    },
    {
        value: 'Uninstalling Extensions',
        id: 'uninstalling-extensions',
        level: 2
    },
    {
        value: 'Developing Extensions',
        id: 'developing-extensions',
        level: 2
    },
    {
        value: 'Working with Extensions in an Air-gapped Environment',
        id: 'working-with-extensions-in-an-air-gapped-environment',
        level: 2
    },
    {
        value: 'Accessing Rancher UI Extensions in an Air-Gapped Environment',
        id: 'accessing-rancher-ui-extensions-in-an-air-gapped-environment',
        level: 3
    },
    {
        value: 'Importing and Installing Extensions in an Air-gapped Environment',
        id: 'importing-and-installing-extensions-in-an-air-gapped-environment',
        level: 3
    },
    {
        value: 'Updating and Upgrading an Extensions Repository in an Air-gapped Environment',
        id: 'updating-and-upgrading-an-extensions-repository-in-an-air-gapped-environment',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Extensions allow users, developers, partners, and customers to extend and enhance the Rancher UI. In addition, users can make changes and create enhancements to their UI functionality independent of Rancher releases. Extensions will enable users to build on top of Rancher to better tailor it to their respective environments. Note that users will also have the ability to update to new versions as well as roll back to a previous version.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Extensions are Helm charts that can only be installed once into a cluster; therefore, these charts have been simplified and separated from the general Helm charts listed under `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Apps`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Examples of built-in Rancher extensions are Fleet, Explorer, and Harvester. Examples of other extensions that use the Extensions API that can be manually added are Kubewarden and Elemental.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "prerequisites"
    }, `Prerequisites`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, `You must log in as an admin in order to view and interact with the extensions management page.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "installing-extensions"
    }, `Installing Extensions`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `☰ > Extensions`), ` under `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Configuration`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `If not already installed in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Apps`), `, you must enable the extension operator by clicking the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Enable`), ` button.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `OK`), ` to add the Rancher extension repository if your installation is not air-gapped. Otherwise, uncheck the box to do so and click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `OK`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Rancher extension repository",
        src: (__webpack_require__(62802)/* ["default"] */ .Z),
        width: "594",
        height: "222"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `On the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Extensions`), ` page, click on the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Available`), ` tab to select which extensions you want to install.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `If no extensions are showing as available, you may manually add repos as follows:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `4.1. On the upper right of screen, click on `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `⋮ > Manage Repositories > Create`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `4.2. Add the desired repo name, making sure to also specify the Git Repo URL and the Git Branch.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `4.3. Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Create`), ` in the lower right again to complete.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Manage repositories",
        src: (__webpack_require__(32518)/* ["default"] */ .Z),
        width: "1495",
        height: "968"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Under the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Available`), ` tab, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Install`), ` on the desired extension and version as in the example below. You can also update your extension from this screen, as the button to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Update`), ` will appear on the extension if one is available.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Install Kubewarden",
        src: (__webpack_require__(83673)/* ["default"] */ .Z),
        width: "1344",
        height: "646"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Click the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Reload`), ` page button that will appear after your extension successfully installs. Note that a logged-in user who has just installed an extension will not see a change to the UI `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `unless`), ` they reload the page.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Reload button",
        src: (__webpack_require__(5203)/* ["default"] */ .Z),
        width: "450",
        height: "165"
    })))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "updating-and-upgrading-extensions"
    }, `Updating and Upgrading Extensions`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰ > Extensions`), ` under `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Configuration`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Select the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Updates`), ` tab. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Update`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If there is a new version of the extension, there will also be an `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Update`), ` button visible on the associated card for the extension in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Available`), ` tab.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "deleting-extensions"
    }, `Deleting Extensions`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰`), `, then click on the name of your local cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `From the sidebar, select `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Apps > Installed Apps`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Find the name of the chart you want to delete and select the checkbox next to it. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Delete`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "deleting-extension-repositories"
    }, `Deleting Extension Repositories`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰ > Extensions`), ` under `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Configuration`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `On the top right, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `⋮ > Manage Repositories`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Find the name of the extension repository you want to delete. Select the checkbox next to the repository name, then click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Delete`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "deleting-extension-repository-container-images"
    }, `Deleting Extension Repository Container Images`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰`), `, then select `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Extensions`), `, under `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Configuration`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `On the top right, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `⋮ > Manage Extension Catalogs`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Find the name of the container image you want to delete, then click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `⋮ > Uninstall`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "uninstalling-extensions"
    }, `Uninstalling Extensions`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There are two ways to uninstall or disable an extension:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Under the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Installed`), ` tab, click the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Uninstall`), ` button on the extension you wish to remove.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Uninstall extensions",
        src: (__webpack_require__(28362)/* ["default"] */ .Z),
        width: "594",
        height: "202"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `On the extensions management page, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `⋮ > Disable Extension Support`), `. This will disable all installed extensions.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Disable extensions",
        src: (__webpack_require__(19689)/* ["default"] */ .Z),
        width: "292",
        height: "163"
    })))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "caution"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `You must reload the page after disabling extensions or display issues may occur.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "developing-extensions"
    }, `Developing Extensions`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To learn how to develop your own extensions, refer to the official `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.github.io/dashboard/extensions/extensions-getting-started"
    }, `Getting Started`), ` guide.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "working-with-extensions-in-an-air-gapped-environment"
    }, `Working with Extensions in an Air-gapped Environment`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you intend to work with extensions in an air-gapped environment, you must perform some extra steps before you can complete certain tasks.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "accessing-rancher-ui-extensions-in-an-air-gapped-environment"
    }, `Accessing Rancher UI Extensions in an Air-Gapped Environment`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher provides some extensions, such as Kubewarden and Elemental, through the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `ui-plugin-catalog`), ` container image at `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://hub.docker.com/r/rancher/ui-plugin-catalog/tags"
    }, `https://hub.docker.com/r/rancher/ui-plugin-catalog/tags`), `. If you're trying to install these extensions in an air-gapped environment, you must make the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `ui-plugin-catalog`), ` image accessible.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Mirror the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `ui-plugin-catalog`), ` image to a private registry:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `export REGISTRY_ENDPOINT=<my-private-registry-endpoint> # e.g. "my-private-registry.com"
docker pull rancher/ui-plugin-catalog:<tag>
docker tag rancher/ui-plugin-catalog:<tag> $REGISTRY_ENDPOINT/rancher/ui-plugin-catalog:<tag>
docker push $REGISTRY_ENDPOINT/rancher/ui-plugin-catalog:<tag>
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Use the mirrored image to create a Kubernetes `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
    }, `deployment`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ui-plugin-catalog
  namespace: cattle-ui-plugin-system
  labels:
    catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
spec:
  replicas: 1
  selector:
    matchLabels:
      catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
  template:
    metadata:
      namespace: cattle-ui-plugin-system
      labels:
        catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
    spec:
      containers:
      - name: server
        image: <my-private-registry-endpoint>/rancher/ui-plugin-catalog:<tag>
        imagePullPolicy: Always
      imagePullSecrets:
        - name: <my-registry-credentials>
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Expose the deployment by creating a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip"
    }, `ClusterIP service`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: v1
kind: Service
metadata:
  name: ui-plugin-catalog-svc
  namespace: cattle-ui-plugin-system
spec:
  ports:
    - name: catalog-svc-port
      port: 8080
      protocol: TCP
      targetPort: 8080
  selector:
    catalog.cattle.io/ui-extensions-catalog-image: ui-plugin-catalog
  type: ClusterIP
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Create a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../how-to-guides/new-user-guides/helm-charts-in-rancher/helm-charts-in-rancher.md"
    }, `ClusterRepo`), ` that targets the ClusterIP service:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: catalog.cattle.io/v1
kind: ClusterRepo
metadata:
  name: ui-plugin-catalog-repo
spec:
  url: http://ui-plugin-catalog-svc.cattle-ui-plugin-system:8080
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After you successfully set up these resources, you can install the extensions from the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `ui-plugin-charts`), ` manifest into your air-gapped environment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "importing-and-installing-extensions-in-an-air-gapped-environment"
    }, `Importing and Installing Extensions in an Air-gapped Environment`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Find the address of the container image repository that you want to import as an extension. You should import and use the latest tagged version of the image to ensure you receive the latest features and security updates.`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `(Optional)`), ` If the container image is private: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "../how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md"
    }, `Create`), ` a registry secret within the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `cattle-ui-plugin-system`), ` namespace. Enter the domain of the image address in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Registry Domain Name`), ` field.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰`), `, then select `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Extensions`), `, under `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Configuration`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `On the top right, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `⋮ > Manage Extension Catalogs`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Select the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Import Extension Catalog`), ` button.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Enter the image address in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Catalog Image Reference`), ` field. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `(Optional)`), ` If the container image is private, select the secret you just created from the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Pull Secrets`), ` drop-down menu.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Load`), `. The extension will now be `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Pending`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Return to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Extensions`), ` page.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Select the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Available`), ` tab, and click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Reload`), ` to make sure that the list of extensions is up to date.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Find the extension you just added, and click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Install`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "updating-and-upgrading-an-extensions-repository-in-an-air-gapped-environment"
    }, `Updating and Upgrading an Extensions Repository in an Air-gapped Environment`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Extensions repositories that aren't air-gapped are automatically updated. If the repository is air-gapped, you must update it manually.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `First, mirror the latest changes to your private registry by following the same steps for initially `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#importing-and-installing-extensions-in-an-air-gapped-environment"
    }, `importing and installing an extension repository`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After you mirror the latest changes, follow these steps:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰ > Local`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `From the sidebar, select `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Workloads > Deployments`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `From the namespaces dropdown menu, select `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `cattle-ui-plugin-system`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Find the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `cattle-ui-plugin-system`), ` namespace. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Select the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `ui-plugin-catalog`), ` deployment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `⋮ > Edit config`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Update the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Container Image`), ` field within the deployment's container with the latest image.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Save`), `.`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 62802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/add-rancher-extension-repo-d638e015e68ad09be9df596c1bc9a140.png");

/***/ }),

/***/ 19689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 83673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/install-kubewarden-4e066a093d6ebbd86bc505762de350ee.png");

/***/ }),

/***/ 32518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/manage-repos-30cee9278e118467fce97e68aa800385.png");

/***/ }),

/***/ 5203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 28362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

}]);