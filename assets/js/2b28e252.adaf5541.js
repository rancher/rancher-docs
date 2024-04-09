"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[79705],{

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

/***/ 76438:
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
    title: 'Tips for Scaling, Security and Reliability'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/best-practices/management",
    "id": "version-2.0-2.4/reference-guides/best-practices/management",
    "title": "Tips for Scaling, Security and Reliability",
    "description": "Rancher allows you to set up numerous combinations of configurations. Some configurations are more appropriate for development and testing, while there are other best practices for production environments for maximum availability and fault tolerance. The following best practices should be followed for production.",
    "source": "@site/versioned_docs/version-2.0-2.4/reference-guides/best-practices/management.md",
    "sourceDirName": "reference-guides/best-practices",
    "slug": "/reference-guides/best-practices/management",
    "permalink": "/v2.0-v2.4/reference-guides/best-practices/management",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/best-practices/management.md",
    "tags": [],
    "version": "2.0-2.4",
    "lastUpdatedAt": 1705104464,
    "formattedLastUpdatedAt": "Jan 13, 2024",
    "frontMatter": {
        "title": "Tips for Scaling, Security and Reliability"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Tips for Running Rancher",
        "permalink": "/v2.0-v2.4/reference-guides/best-practices/deployment-types"
    },
    "next": {
        "title": "Rancher Architecture",
        "permalink": "/v2.0-v2.4/reference-guides/rancher-manager-architecture/"
    }
};
const assets = {};
const toc = [
    {
        value: 'Tips for Preventing and Handling Problems',
        id: 'tips-for-preventing-and-handling-problems',
        level: 2
    },
    {
        value: 'Run Rancher on a Supported OS and Supported Docker Version',
        id: 'run-rancher-on-a-supported-os-and-supported-docker-version',
        level: 3
    },
    {
        value: 'Upgrade Your Kubernetes Version',
        id: 'upgrade-your-kubernetes-version',
        level: 3
    },
    {
        value: 'Kill Pods Randomly During Testing',
        id: 'kill-pods-randomly-during-testing',
        level: 3
    },
    {
        value: 'Deploy Complicated Clusters with Terraform',
        id: 'deploy-complicated-clusters-with-terraform',
        level: 3
    },
    {
        value: 'Upgrade Rancher in a Staging Environment',
        id: 'upgrade-rancher-in-a-staging-environment',
        level: 3
    },
    {
        value: 'Renew Certificates Before they Expire',
        id: 'renew-certificates-before-they-expire',
        level: 3
    },
    {
        value: 'Enable Recurring Snapshots for Backing up and Restoring the Cluster',
        id: 'enable-recurring-snapshots-for-backing-up-and-restoring-the-cluster',
        level: 3
    },
    {
        value: 'Provision Clusters with Rancher',
        id: 'provision-clusters-with-rancher',
        level: 3
    },
    {
        value: 'Use Stable and Supported Rancher Versions for Production',
        id: 'use-stable-and-supported-rancher-versions-for-production',
        level: 3
    },
    {
        value: 'Network Topology',
        id: 'network-topology',
        level: 2
    },
    {
        value: 'Use Low-latency Networks for Communication Within Clusters',
        id: 'use-low-latency-networks-for-communication-within-clusters',
        level: 3
    },
    {
        value: 'Allow Rancher to Communicate Directly with Clusters',
        id: 'allow-rancher-to-communicate-directly-with-clusters',
        level: 3
    },
    {
        value: 'Tips for Scaling and Reliability',
        id: 'tips-for-scaling-and-reliability',
        level: 2
    },
    {
        value: 'Use One Kubernetes Role Per Host',
        id: 'use-one-kubernetes-role-per-host',
        level: 3
    },
    {
        value: 'Run the Control Plane and etcd on Virtual Machines',
        id: 'run-the-control-plane-and-etcd-on-virtual-machines',
        level: 3
    },
    {
        value: 'Use at Least Three etcd Nodes',
        id: 'use-at-least-three-etcd-nodes',
        level: 3
    },
    {
        value: 'Use at Least Three Control Plane Nodes',
        id: 'use-at-least-three-control-plane-nodes',
        level: 3
    },
    {
        value: 'Monitor Your Cluster',
        id: 'monitor-your-cluster',
        level: 3
    },
    {
        value: 'Tips for Security',
        id: 'tips-for-security',
        level: 2
    },
    {
        value: 'Update Rancher with Security Patches',
        id: 'update-rancher-with-security-patches',
        level: 3
    },
    {
        value: 'Report Security Issues Directly to Rancher',
        id: 'report-security-issues-directly-to-rancher',
        level: 3
    },
    {
        value: 'Only Upgrade One Component at a Time',
        id: 'only-upgrade-one-component-at-a-time',
        level: 3
    },
    {
        value: 'Tips for Multi-Tenant Clusters',
        id: 'tips-for-multi-tenant-clusters',
        level: 2
    },
    {
        value: 'Namespaces',
        id: 'namespaces',
        level: 3
    },
    {
        value: 'Project Isolation',
        id: 'project-isolation',
        level: 3
    },
    {
        value: 'Resource Limits',
        id: 'resource-limits',
        level: 3
    },
    {
        value: 'Resource Requirements',
        id: 'resource-requirements',
        level: 3
    },
    {
        value: 'Class of Service and Kubernetes Clusters',
        id: 'class-of-service-and-kubernetes-clusters',
        level: 2
    },
    {
        value: 'Consider fault domains',
        id: 'consider-fault-domains',
        level: 3
    },
    {
        value: 'Upgrade risks',
        id: 'upgrade-risks',
        level: 3
    },
    {
        value: 'Resource Efficiency',
        id: 'resource-efficiency',
        level: 3
    },
    {
        value: 'Network Security',
        id: 'network-security',
        level: 2
    },
    {
        value: 'Use a Firewall Between your Hosts and the Internet',
        id: 'use-a-firewall-between-your-hosts-and-the-internet',
        level: 3
    },
    {
        value: 'Run Periodic Security Scans',
        id: 'run-periodic-security-scans',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher allows you to set up numerous combinations of configurations. Some configurations are more appropriate for development and testing, while there are other best practices for production environments for maximum availability and fault tolerance. The following best practices should be followed for production.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#tips-for-preventing-and-handling-problems"
    }, `Tips for Preventing and Handling Problems`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#network-topology"
    }, `Network Topology`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#tips-for-scaling-and-reliability"
    }, `Tips for Scaling and Reliability`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#tips-for-security"
    }, `Tips for Security`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#tips-for-multi-tenant-clusters"
    }, `Tips for Multi-Tenant Clusters`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#class-of-service-and-kubernetes-clusters"
    }, `Class of Service and Kubernetes Clusters`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "#network-security"
    }, `Network Security`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "tips-for-preventing-and-handling-problems"
    }, `Tips for Preventing and Handling Problems`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `These tips can help you solve problems before they happen.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "run-rancher-on-a-supported-os-and-supported-docker-version"
    }, `Run Rancher on a Supported OS and Supported Docker Version`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher is container-based and can potentially run on any Linux-based operating system. However, only operating systems listed in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/"
    }, `requirements documentation`), ` should be used for running Rancher, along with a supported version of Docker. These versions have been most thoroughly tested and can be properly supported by the Rancher Support team.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "upgrade-your-kubernetes-version"
    }, `Upgrade Your Kubernetes Version`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Keep your Kubernetes cluster up to date with a recent and supported version. Typically the Kubernetes community will support the current version and previous three minor releases (for example, 1.14.x, 1.13.x, 1.12.x, and 1.11.x). After a new version is released, the third-oldest supported version reaches EOL (End of Life) status. Running on an EOL release can be a risk if a security issues are found and patches are not available. The community typically makes minor releases every quarter (every three months).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher’s SLAs are not community dependent, but as Kubernetes is a community-driven software, the quality of experience will degrade as you get farther away from the community's supported target.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "kill-pods-randomly-during-testing"
    }, `Kill Pods Randomly During Testing`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Run chaoskube or a similar mechanism to randomly kill pods in your test environment. This will test the resiliency of your infrastructure and the ability of Kubernetes to self-heal. It's not recommended to run this in your production environment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "deploy-complicated-clusters-with-terraform"
    }, `Deploy Complicated Clusters with Terraform`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher's "Add Cluster" UI is preferable for getting started with Kubernetes cluster orchestration or for simple use cases. However, for more complex or demanding use cases, it is recommended to use a CLI/API driven approach. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.terraform.io/"
    }, `Terraform`), ` is recommended as the tooling to implement this. When you use Terraform with version control and a CI/CD environment, you can have high assurances of consistency and reliability when deploying Kubernetes clusters. This approach also gives you the most customization options.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/blog/2019/rancher-2-terraform-provider/"
    }, `maintains a Terraform provider`), ` for working with Rancher 2.0 Kubernetes. It is called the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.terraform.io/docs/providers/rancher2/index.html"
    }, `Rancher2 Provider.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "upgrade-rancher-in-a-staging-environment"
    }, `Upgrade Rancher in a Staging Environment`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `All upgrades, both patch and feature upgrades, should be first tested on a staging environment before production is upgraded. The more closely the staging environment mirrors production, the higher chance your production upgrade will be successful.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "renew-certificates-before-they-expire"
    }, `Renew Certificates Before they Expire`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Multiple people in your organization should set up calendar reminders for certificate renewal. Consider renewing the certificate two weeks to one month in advance. If you have multiple certificates to track, consider using `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.0-v2.4/reference-guides/rancher-cluster-tools"
    }, `monitoring and alerting mechanisms`), ` to track certificate expiration.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher-provisioned Kubernetes clusters will use certificates that expire in one year. Clusters provisioned by other means may have a longer or shorter expiration.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Certificates can be renewed for Rancher-provisioned clusters `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"
    }, `through the Rancher user interface`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "enable-recurring-snapshots-for-backing-up-and-restoring-the-cluster"
    }, `Enable Recurring Snapshots for Backing up and Restoring the Cluster`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Make sure etcd recurring snapshots are enabled. Extend the snapshot retention to a period of time that meets your business needs. In the event of a catastrophic failure or deletion of data, this may be your only recourse for recovery. For details about configuring snapshots, refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/docs/rke/latest/en/etcd-snapshots/"
    }, `RKE documentation`), ` or the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/"
    }, `Rancher documentation on backups`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "provision-clusters-with-rancher"
    }, `Provision Clusters with Rancher`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When possible, use Rancher to provision your Kubernetes cluster rather than importing a cluster. This will ensure the best compatibility and supportability.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "use-stable-and-supported-rancher-versions-for-production"
    }, `Use Stable and Supported Rancher Versions for Production`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Do not upgrade production environments to alpha, beta, release candidate (rc), or "latest" versions. These early releases are often not stable and may not have a future upgrade path.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When installing or upgrading a non-production environment to an early release, anticipate problems such as features not working, data loss, outages, and inability to upgrade without a reinstall.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Make sure the feature version you are upgrading to is considered "stable" as determined by Rancher. Use the beta, release candidate, and "latest" versions in a testing, development, or demo environment to try out new features. Feature version upgrades, for example 2.1.x to 2.2.x, should be considered as and when they are released. Some bug fixes and most features are not back ported into older versions.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Keep in mind that Rancher does End of Life support for old versions, so you will eventually want to upgrade if you want to continue to receive patches.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more detail on what happens during the Rancher product lifecycle, refer to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://rancher.com/support-maintenance-terms/"
    }, `Support Maintenance Terms`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "network-topology"
    }, `Network Topology`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `These tips can help Rancher work more smoothly with your network.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "use-low-latency-networks-for-communication-within-clusters"
    }, `Use Low-latency Networks for Communication Within Clusters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes clusters are best served by low-latency networks. This is especially true for the control plane components and etcd, where lots of coordination and leader election traffic occurs. Networking between Rancher server and the Kubernetes clusters it manages are more tolerant of latency.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "allow-rancher-to-communicate-directly-with-clusters"
    }, `Allow Rancher to Communicate Directly with Clusters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Limit the use of proxies or load balancers between Rancher server and Kubernetes clusters. As Rancher is maintaining a long-lived web sockets connection, these intermediaries can interfere with the connection lifecycle as they often weren't configured with this use case in mind.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "tips-for-scaling-and-reliability"
    }, `Tips for Scaling and Reliability`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `These tips can help you scale your cluster more easily.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "use-one-kubernetes-role-per-host"
    }, `Use One Kubernetes Role Per Host`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Separate the etcd, control plane, and worker roles onto different hosts. Don't assign multiple roles to the same host, such as a worker and control plane. This will give you maximum scalability.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "run-the-control-plane-and-etcd-on-virtual-machines"
    }, `Run the Control Plane and etcd on Virtual Machines`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Run your etcd and control plane nodes on virtual machines where you can scale vCPU and memory easily if needed in the future.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "use-at-least-three-etcd-nodes"
    }, `Use at Least Three etcd Nodes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Provision 3 or 5 etcd nodes. Etcd requires a quorum to determine a leader by the majority of nodes, therefore it is not recommended to have clusters of even numbers. Three etcd nodes is generally sufficient for smaller clusters and five etcd nodes for large clusters.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "use-at-least-three-control-plane-nodes"
    }, `Use at Least Three Control Plane Nodes`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Provision three or more control plane nodes. Some control plane components, such as the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-apiserver`), `, run in `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.jscape.com/blog/active-active-vs-active-passive-high-availability-cluster"
    }, `active-active`), ` mode and will give you more scalability. Other components such as kube-scheduler and kube-controller run in active-passive mode (leader elect) and give you more fault tolerance.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "monitor-your-cluster"
    }, `Monitor Your Cluster`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Closely monitor and scale your nodes as needed. You should `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/"
    }, `enable cluster monitoring`), ` and use the Prometheus metrics and Grafana visualization options as a starting point.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "tips-for-security"
    }, `Tips for Security`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Below are some basic tips for increasing security in Rancher. For more detailed information about securing your cluster, you can refer to these resources:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Rancher's `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.0-v2.4/reference-guides/rancher-security/"
    }, `security documentation and Kubernetes cluster hardening guide`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://rancher.com/blog/2019/2019-01-17-101-more-kubernetes-security-best-practices/"
    }, `101 More Security Best Practices for Kubernetes`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-rancher-with-security-patches"
    }, `Update Rancher with Security Patches`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Keep your Rancher installation up to date with the latest patches. Patch updates have important software fixes and sometimes have security fixes. When patches with security fixes are released, customers with Rancher licenses are notified by e-mail. These updates are also posted on Rancher's `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://forums.rancher.com/"
    }, `forum`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "report-security-issues-directly-to-rancher"
    }, `Report Security Issues Directly to Rancher`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you believe you have uncovered a security-related problem in Rancher, please communicate this immediately and discretely to the Rancher team (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "mailto:security@rancher.com"
    }, `security@rancher.com`), `). Posting security issues on public forums such as Twitter, Rancher Slack, GitHub, etc. can potentially compromise security for all Rancher customers. Reporting security issues discretely allows Rancher to assess and mitigate the problem. Security patches are typically given high priority and released as quickly as possible.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "only-upgrade-one-component-at-a-time"
    }, `Only Upgrade One Component at a Time`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In addition to Rancher software updates, closely monitor security fixes for related software, such as Docker, Linux, and any libraries used by your workloads. For production environments, try to avoid upgrading too many entities during a single maintenance window. Upgrading multiple components can make it difficult to root cause an issue in the event of a failure. As business requirements allow, upgrade one component at a time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "tips-for-multi-tenant-clusters"
    }, `Tips for Multi-Tenant Clusters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "namespaces"
    }, `Namespaces`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Each tenant should have their own unique namespaces within the cluster. This avoids naming conflicts and allows resources to be only visible to their owner through use of RBAC policy`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "project-isolation"
    }, `Project Isolation`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Use Rancher's Project Isolation to automatically generate Network Policy between Projects (sets of Namespaces). This further protects workloads from interference`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "resource-limits"
    }, `Resource Limits`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Enforce use of sane resource limit definitions for every deployment in your cluster. This not only protects the owners of the deployment, but the neighboring resources from other tenants as well. Remember, namespaces do not isolate at the node level, so over-consumption of resources on a node affects other namespace deployments. Admission controllers can be written to require resource limit definitions`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "resource-requirements"
    }, `Resource Requirements`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Enforce use of resource requirement definitions for each deployment in your cluster. This enables the scheduler to appropriately schedule workloads. Otherwise you will eventually end up with over-provisioned nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "class-of-service-and-kubernetes-clusters"
    }, `Class of Service and Kubernetes Clusters`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A class of service describes the expectations around cluster uptime, durability, and duration of maintenance windows. Typically organizations group these characteristics into labels such as "dev" or "prod"`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "consider-fault-domains"
    }, `Consider fault domains`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Kubernetes clusters can span multiple classes of service, however it is important to consider the ability for one workload to affect another. Without proper deployment practices such as resource limits, requirements, etc, a deployment that is not behaving well has the potential to impact the health of the cluster. In a "dev" environment it is common for end-users to exercise less caution with deployments, thus increasing the chance of such behavior. Sharing this behavior with your production workload increases risk.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "upgrade-risks"
    }, `Upgrade risks`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Upgrades of Kubernetes are not without risk, the best way to predict the outcome of an upgrade is try it on a cluster of similar load and use case as your production cluster. This is where having non-prod class of service clusters can be advantageous.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "resource-efficiency"
    }, `Resource Efficiency`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Clusters can be built with varying degrees of redundancy. In a class of service with low expectations for uptime, resources and cost can be conserved by building clusters without redundant Kubernetes control components. This approach may also free up more budget/resources to increase the redundancy at the production level`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "network-security"
    }, `Network Security`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In general, you can use network security best practices in your Rancher and Kubernetes clusters. Consider the following:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "use-a-firewall-between-your-hosts-and-the-internet"
    }, `Use a Firewall Between your Hosts and the Internet`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Firewalls should be used between your hosts and the Internet (or corporate Intranet). This could be enterprise firewall appliances in a datacenter or SDN constructs in the cloud, such as VPCs, security groups, ingress, and egress rules. Try to limit inbound access only to ports and IP addresses that require it. Outbound access can be shut off (air gap) if environment sensitive information that requires this restriction. If available, use firewalls with intrusion detection and DDoS prevention.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "run-periodic-security-scans"
    }, `Run Periodic Security Scans`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Run security and penetration scans on your environment periodically. Even with well design infrastructure, a poorly designed microservice could compromise the entire environment.`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);