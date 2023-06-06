"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[39552],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
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

/***/ 13893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
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
    title: '1. Get Started'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",
    "id": "version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",
    "title": "1. Get Started",
    "description": "Get started with your migration to Rancher v2.x by installing Rancher and configuring your new Rancher environment.",
    "source": "@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher.md",
    "sourceDirName": "how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",
    "slug": "/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",
    "permalink": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher.md",
    "tags": [],
    "version": "2.0-2.4",
    "lastUpdatedAt": 1663953084,
    "formattedLastUpdatedAt": "2022年9月23日",
    "frontMatter": {
        "title": "1. Get Started"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Kubernetes Introduction",
        "permalink": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction"
    },
    "next": {
        "title": "2. Migrate Your Services",
        "permalink": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"
    }
};
const assets = {};
const toc = [
    {
        value: 'A. Install Rancher v2.x',
        id: 'a-install-rancher-v2x',
        level: 2
    },
    {
        value: 'B. Configure Authentication',
        id: 'b-configure-authentication',
        level: 2
    },
    {
        value: 'Local Users',
        id: 'local-users',
        level: 3
    },
    {
        value: 'SAML Authentication Providers',
        id: 'saml-authentication-providers',
        level: 3
    },
    {
        value: 'C. Provision a Cluster and Project',
        id: 'c-provision-a-cluster-and-project',
        level: 2
    },
    {
        value: 'Clusters',
        id: 'clusters',
        level: 3
    },
    {
        value: 'Projects',
        id: 'projects',
        level: 3
    },
    {
        value: 'D. Create Stacks',
        id: 'd-create-stacks',
        level: 2
    },
    {
        value: 'Next: Migrate Your Services',
        id: 'next-migrate-your-services',
        level: 3
    }
];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components  } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Get started with your migration to Rancher v2.x by installing Rancher and configuring your new Rancher environment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "a-install-rancher-v2x"
    }, `A. Install Rancher v2.x`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The first step in migrating from v1.6 to v2.x is to install the Rancher v2.x Server side-by-side with your v1.6 Server, as you'll need your old install during the migration process. Due to the architecture changes between v1.6 and v2.x, there is no direct path for upgrade. You'll have to install v2.x independently and then migrate your v1.6 services to v2.x.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `New for v2.x, all communication to Rancher Server is encrypted. The procedures below instruct you not only on installation of Rancher, but also creation and installation of these certificates.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Before installing v2.x, provision one host or more to function as your Rancher Server(s). You can find the requirements for these hosts in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"
    }, `Server Requirements`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After provisioning your node(s), install Rancher:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"
    }, `Docker Install`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  For development environments, Rancher can be installed on a single node using Docker. This installation procedure deploys a single Rancher container to your host.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"
    }, `Kubernetes Install`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `  For production environments where your user base requires constant access to your cluster, we recommend installing Rancher in a high availability Kubernetes installation. This installation procedure provisions a three-node cluster and installs Rancher on each node using a Helm chart.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Important Difference:`), ` Although you could install Rancher v1.6 in a high-availability Kubernetes configuration using an external database and a Docker command on each node, Rancher v2.x in a Kubernetes install requires an existing Kubernetes cluster. Review `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"
    }, `Kubernetes Install`), ` for full requirements.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "b-configure-authentication"
    }, `B. Configure Authentication`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After your Rancher v2.x Server is installed, we recommend configuring external authentication (like Active Directory or GitHub) so that users can log into Rancher using their single sign-on. For a full list of supported authentication providers and instructions on how to configure them, see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/about-authentication"
    }, `Authentication`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "Rancher v2.x Authentication"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Rancher v2.x Authentication",
        src: (__webpack_require__(80796)/* ["default"] */ .Z),
        width: "854",
        height: "595"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "local-users"
    }, `Local Users`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Although we recommend using an external authentication provider, Rancher v1.6 and v2.x both offer support for users local to Rancher. However, these users cannot be migrated from Rancher v1.6 to v2.x. If you used local users in Rancher v1.6 and want to continue this practice in v2.x, you'll need to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/about-authentication"
    }, `manually recreate these user accounts`), ` and assign them access rights.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `As a best practice, you should use a hybrid of external `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `and`), ` local authentication. This practice provides access to Rancher should your external authentication experience an interruption, as you can still log in using a local user account. Set up a few local accounts as administrative users of Rancher.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "saml-authentication-providers"
    }, `SAML Authentication Providers`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v1.6, we encouraged our SAML users to use Shibboleth, as it was the only SAML authentication option we offered. However, to better support their minor differences, we've added more fully tested SAML providers for v2.x: Ping Identity, Microsoft ADFS, and FreeIPA.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "c-provision-a-cluster-and-project"
    }, `C. Provision a Cluster and Project`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Begin work in Rancher v2.x by using it to provision a new Kubernetes cluster, which is similar to an environment in v1.6. This cluster will host your application deployments.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A cluster and project in combined together in Rancher v2.x is equivalent to a v1.6 environment. A `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `cluster`), ` is the compute boundary (i.e., your hosts) and a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `project`), ` is an administrative boundary (i.e., a grouping of namespaces used to assign access rights to users).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There's more basic info on provisioning clusters in the headings below, but for full information, see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"
    }, `Provisioning Kubernetes Clusters`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "clusters"
    }, `Clusters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v1.6, compute nodes were added to an `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `environment`), `. Rancher v2.x eschews the term `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `environment`), ` for `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `cluster`), `, as Kubernetes uses this term for a team of computers instead of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `environment`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher v2.x lets you launch a Kubernetes cluster anywhere. Host your cluster using:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `A `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"
    }, `hosted Kubernetes provider`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `A `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"
    }, `pool of nodes from an infrastructure provider`), `. Rancher launches Kubernetes on the nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Any `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"
    }, `custom node(s)`), `. Rancher can launch Kubernetes on the nodes, be they bare metal servers, virtual machines, or cloud hosts on a less popular infrastructure provider.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "projects"
    }, `Projects`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Additionally, Rancher v2.x introduces `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"
    }, `projects`), `, which are objects that divide clusters into different application groups that are useful for applying user permissions. This model of clusters and projects allow for multi-tenancy because hosts are owned by the cluster, and the cluster can be further divided into multiple projects where users can manage their apps, but not those of others.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When you create a cluster, two projects are automatically created:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `System`), ` project, which includes system namespaces where important Kubernetes resources are running (like ingress controllers and cluster dns services)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `Default`), ` project.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `However, for production environments, we recommend `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces#creating-projects"
    }, `creating your own project`), ` and giving it a descriptive name.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After provisioning a new cluster and project, you can authorize your users to access and use project resources. Similarly to Rancher v1.6 environments, Rancher v2.x allows you to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/pages-for-subheaders/manage-projects"
    }, `assign users to projects`), `. By assigning users to projects, you can limit what applications and resources a user can access.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "d-create-stacks"
    }, `D. Create Stacks`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v1.6, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `stacks`), ` were used to group together the services that belong to your application. In v2.x, you need to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"
    }, `create namespaces`), `, which are the v2.x equivalent of stacks, for the same purpose.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In Rancher v2.x, namespaces are child objects to projects. When you create a project, a `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` namespace is added to the project, but you can create your own to parallel your stacks from v1.6.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `During migration, if you don't explicitly define which namespace a service should be deployed to, it's deployed to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `default`), ` namespace.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Just like v1.6, Rancher v2.x supports service discovery within and across namespaces (we'll get to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"
    }, `service discovery`), ` soon).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "next-migrate-your-services"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "h3",
        "href": "/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"
    }, `Next: Migrate Your Services`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 80796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/auth-providers-229300d4372b6e528deb5046871c1a44.svg");

/***/ })

}]);