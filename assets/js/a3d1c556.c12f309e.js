"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[34148],{

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

/***/ 56111:
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
    title: 'RKE Self-Assessment Guide - CIS Benchmark v1.23 - K8s v1.23'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23",
    "id": "version-2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23",
    "title": "RKE Self-Assessment Guide - CIS Benchmark v1.23 - K8s v1.23",
    "description": "This document is a companion to the RKE Hardening Guide, which provides prescriptive guidance on how to harden RKE clusters that are running in production and managed by Rancher. This benchmark guide helps you evaluate the security of a hardened cluster against each control in the CIS Kubernetes Benchmark.",
    "source": "@site/versioned_docs/version-2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md",
    "sourceDirName": "reference-guides/rancher-security/hardening-guides/rke1-hardening-guide",
    "slug": "/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23",
    "permalink": "/v2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23.md",
    "tags": [],
    "version": "2.8",
    "lastUpdatedAt": 1703291432,
    "formattedLastUpdatedAt": "Dec 23, 2023",
    "frontMatter": {
        "title": "RKE Self-Assessment Guide - CIS Benchmark v1.23 - K8s v1.23"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "RKE Hardening Guides",
        "permalink": "/v2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/"
    },
    "next": {
        "title": "RKE Self-Assessment Guide - CIS Benchmark v1.24 - K8s v1.24",
        "permalink": "/v2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.24-k8s-v1.24"
    }
};
const assets = {};
const toc = [
    {
        value: 'Testing Methodology',
        id: 'testing-methodology',
        level: 2
    },
    {
        value: 'Controls',
        id: 'controls',
        level: 3
    },
    {
        value: '1.1 Master Node Configuration Files',
        id: '11-master-node-configuration-files',
        level: 2
    },
    {
        value: '1.1.1 Ensure that the API server pod specification file permissions are set to 644 or more restrictive (Automated)',
        id: '111-ensure-that-the-api-server-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.2 Ensure that the API server pod specification file ownership is set to root:root (Automated)',
        id: '112-ensure-that-the-api-server-pod-specification-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.3 Ensure that the controller manager pod specification file permissions are set to 644 or more restrictive (Automated)',
        id: '113-ensure-that-the-controller-manager-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.4 Ensure that the controller manager pod specification file ownership is set to root:root (Automated)',
        id: '114-ensure-that-the-controller-manager-pod-specification-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.5 Ensure that the scheduler pod specification file permissions are set to 644 or more restrictive (Automated)',
        id: '115-ensure-that-the-scheduler-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.6 Ensure that the scheduler pod specification file ownership is set to root:root (Automated)',
        id: '116-ensure-that-the-scheduler-pod-specification-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.7 Ensure that the etcd pod specification file permissions are set to 644 or more restrictive (Automated)',
        id: '117-ensure-that-the-etcd-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.8 Ensure that the etcd pod specification file ownership is set to root:root (Automated)',
        id: '118-ensure-that-the-etcd-pod-specification-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.9 Ensure that the Container Network Interface file permissions are set to 644 or more restrictive (Automated)',
        id: '119-ensure-that-the-container-network-interface-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.10 Ensure that the Container Network Interface file ownership is set to root:root (Automated)',
        id: '1110-ensure-that-the-container-network-interface-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.11 Ensure that the etcd data directory permissions are set to 700 or more restrictive (Automated)',
        id: '1111-ensure-that-the-etcd-data-directory-permissions-are-set-to-700-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.12 Ensure that the etcd data directory ownership is set to etcd:etcd (Automated)',
        id: '1112-ensure-that-the-etcd-data-directory-ownership-is-set-to-etcdetcd-automated',
        level: 3
    },
    {
        value: '1.1.13 Ensure that the admin.conf file permissions are set to 600 or more restrictive (Automated)',
        id: '1113-ensure-that-the-adminconf-file-permissions-are-set-to-600-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.14 Ensure that the admin.conf file ownership is set to root:root (Automated)',
        id: '1114-ensure-that-the-adminconf-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.15 Ensure that the scheduler.conf file permissions are set to 644 or more restrictive (Automated)',
        id: '1115-ensure-that-the-schedulerconf-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.16 Ensure that the scheduler.conf file ownership is set to root:root (Automated)',
        id: '1116-ensure-that-the-schedulerconf-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.17 Ensure that the controller-manager.conf file permissions are set to 644 or more restrictive (Automated)',
        id: '1117-ensure-that-the-controller-managerconf-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.18 Ensure that the controller-manager.conf file ownership is set to root:root (Automated)',
        id: '1118-ensure-that-the-controller-managerconf-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.19 Ensure that the Kubernetes PKI directory and file ownership is set to root:root (Automated)',
        id: '1119-ensure-that-the-kubernetes-pki-directory-and-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '1.1.20 Ensure that the Kubernetes PKI certificate file permissions are set to 644 or more restrictive (Automated)',
        id: '1120-ensure-that-the-kubernetes-pki-certificate-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '1.1.21 Ensure that the Kubernetes PKI key file permissions are set to 600 (Automated)',
        id: '1121-ensure-that-the-kubernetes-pki-key-file-permissions-are-set-to-600-automated',
        level: 3
    },
    {
        value: '1.2 API Server',
        id: '12-api-server',
        level: 2
    },
    {
        value: '1.2.1 Ensure that the --anonymous-auth argument is set to false (Automated)',
        id: '121-ensure-that-the---anonymous-auth-argument-is-set-to-false-automated',
        level: 3
    },
    {
        value: '1.2.2 Ensure that the --token-auth-file parameter is not set (Automated)',
        id: '122-ensure-that-the---token-auth-file-parameter-is-not-set-automated',
        level: 3
    },
    {
        value: '1.2.3 Ensure that the --DenyServiceExternalIPs is not set (Automated)',
        id: '123-ensure-that-the---denyserviceexternalips-is-not-set-automated',
        level: 3
    },
    {
        value: '1.2.4 Ensure that the --kubelet-https argument is set to true (Automated)',
        id: '124-ensure-that-the---kubelet-https-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '1.2.5 Ensure that the --kubelet-client-certificate and --kubelet-client-key arguments are set as appropriate (Automated)',
        id: '125-ensure-that-the---kubelet-client-certificate-and---kubelet-client-key-arguments-are-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.6 Ensure that the --kubelet-certificate-authority argument is set as appropriate (Automated)',
        id: '126-ensure-that-the---kubelet-certificate-authority-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.7 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)',
        id: '127-ensure-that-the---authorization-mode-argument-is-not-set-to-alwaysallow-automated',
        level: 3
    },
    {
        value: '1.2.8 Ensure that the --authorization-mode argument includes Node (Automated)',
        id: '128-ensure-that-the---authorization-mode-argument-includes-node-automated',
        level: 3
    },
    {
        value: '1.2.9 Ensure that the --authorization-mode argument includes RBAC (Automated)',
        id: '129-ensure-that-the---authorization-mode-argument-includes-rbac-automated',
        level: 3
    },
    {
        value: '1.2.10 Ensure that the admission control plugin EventRateLimit is set (Manual)',
        id: '1210-ensure-that-the-admission-control-plugin-eventratelimit-is-set-manual',
        level: 3
    },
    {
        value: '1.2.11 Ensure that the admission control plugin AlwaysAdmit is not set (Automated)',
        id: '1211-ensure-that-the-admission-control-plugin-alwaysadmit-is-not-set-automated',
        level: 3
    },
    {
        value: '1.2.12 Ensure that the admission control plugin AlwaysPullImages is set (Manual)',
        id: '1212-ensure-that-the-admission-control-plugin-alwayspullimages-is-set-manual',
        level: 3
    },
    {
        value: '1.2.13 Ensure that the admission control plugin SecurityContextDeny is set if PodSecurityPolicy is not used (Manual)',
        id: '1213-ensure-that-the-admission-control-plugin-securitycontextdeny-is-set-if-podsecuritypolicy-is-not-used-manual',
        level: 3
    },
    {
        value: '1.2.14 Ensure that the admission control plugin ServiceAccount is set (Automated)',
        id: '1214-ensure-that-the-admission-control-plugin-serviceaccount-is-set-automated',
        level: 3
    },
    {
        value: '1.2.15 Ensure that the admission control plugin NamespaceLifecycle is set (Automated)',
        id: '1215-ensure-that-the-admission-control-plugin-namespacelifecycle-is-set-automated',
        level: 3
    },
    {
        value: '1.2.16 Ensure that the admission control plugin NodeRestriction is set (Automated)',
        id: '1216-ensure-that-the-admission-control-plugin-noderestriction-is-set-automated',
        level: 3
    },
    {
        value: '1.2.17 Ensure that the --secure-port argument is not set to 0 (Automated)',
        id: '1217-ensure-that-the---secure-port-argument-is-not-set-to-0-automated',
        level: 3
    },
    {
        value: '1.2.18 Ensure that the --profiling argument is set to false (Automated)',
        id: '1218-ensure-that-the---profiling-argument-is-set-to-false-automated',
        level: 3
    },
    {
        value: '1.2.19 Ensure that the --audit-log-path argument is set (Automated)',
        id: '1219-ensure-that-the---audit-log-path-argument-is-set-automated',
        level: 3
    },
    {
        value: '1.2.20 Ensure that the --audit-log-maxage argument is set to 30 or as appropriate (Automated)',
        id: '1220-ensure-that-the---audit-log-maxage-argument-is-set-to-30-or-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.21 Ensure that the --audit-log-maxbackup argument is set to 10 or as appropriate (Automated)',
        id: '1221-ensure-that-the---audit-log-maxbackup-argument-is-set-to-10-or-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.22 Ensure that the --audit-log-maxsize argument is set to 100 or as appropriate (Automated)',
        id: '1222-ensure-that-the---audit-log-maxsize-argument-is-set-to-100-or-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.24 Ensure that the --service-account-lookup argument is set to true (Automated)',
        id: '1224-ensure-that-the---service-account-lookup-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '1.2.25 Ensure that the --request-timeout argument is set as appropriate (Automated)',
        id: '1225-ensure-that-the---request-timeout-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.26 Ensure that the --etcd-certfile and --etcd-keyfile arguments are set as appropriate (Automated)',
        id: '1226-ensure-that-the---etcd-certfile-and---etcd-keyfile-arguments-are-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.27 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)',
        id: '1227-ensure-that-the---tls-cert-file-and---tls-private-key-file-arguments-are-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.28 Ensure that the --client-ca-file argument is set as appropriate (Automated)',
        id: '1228-ensure-that-the---client-ca-file-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.29 Ensure that the --etcd-cafile argument is set as appropriate (Automated)',
        id: '1229-ensure-that-the---etcd-cafile-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.2.30 Ensure that the --encryption-provider-config argument is set as appropriate (Manual)',
        id: '1230-ensure-that-the---encryption-provider-config-argument-is-set-as-appropriate-manual',
        level: 3
    },
    {
        value: '1.2.31 Ensure that encryption providers are appropriately configured (Automated)',
        id: '1231-ensure-that-encryption-providers-are-appropriately-configured-automated',
        level: 3
    },
    {
        value: '1.2.32 Ensure that the API Server only makes use of Strong Cryptographic Ciphers (Automated)',
        id: '1232-ensure-that-the-api-server-only-makes-use-of-strong-cryptographic-ciphers-automated',
        level: 3
    },
    {
        value: '1.3 Controller Manager',
        id: '13-controller-manager',
        level: 2
    },
    {
        value: '1.3.1 Ensure that the --terminated-pod-gc-threshold argument is set as appropriate (Automated)',
        id: '131-ensure-that-the---terminated-pod-gc-threshold-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.3.2 Ensure that the --profiling argument is set to false (Automated)',
        id: '132-ensure-that-the---profiling-argument-is-set-to-false-automated',
        level: 3
    },
    {
        value: '1.3.3 Ensure that the --use-service-account-credentials argument is set to true (Automated)',
        id: '133-ensure-that-the---use-service-account-credentials-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '1.3.4 Ensure that the --service-account-private-key-file argument is set as appropriate (Automated)',
        id: '134-ensure-that-the---service-account-private-key-file-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.3.5 Ensure that the --root-ca-file argument is set as appropriate (Automated)',
        id: '135-ensure-that-the---root-ca-file-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '1.3.6 Ensure that the RotateKubeletServerCertificate argument is set to true (Automated)',
        id: '136-ensure-that-the-rotatekubeletservercertificate-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '1.3.7 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated)',
        id: '137-ensure-that-the---bind-address-argument-is-set-to-127001-automated',
        level: 3
    },
    {
        value: '1.4 Scheduler',
        id: '14-scheduler',
        level: 2
    },
    {
        value: '1.4.1 Ensure that the --profiling argument is set to false (Automated)',
        id: '141-ensure-that-the---profiling-argument-is-set-to-false-automated',
        level: 3
    },
    {
        value: '1.4.2 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated)',
        id: '142-ensure-that-the---bind-address-argument-is-set-to-127001-automated',
        level: 3
    },
    {
        value: '2 Etcd Node Configuration',
        id: '2-etcd-node-configuration',
        level: 2
    },
    {
        value: '2.1 Ensure that the --cert-file and --key-file arguments are set as appropriate (Automated)',
        id: '21-ensure-that-the---cert-file-and---key-file-arguments-are-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '2.2 Ensure that the --client-cert-auth argument is set to true (Automated)',
        id: '22-ensure-that-the---client-cert-auth-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '2.3 Ensure that the --auto-tls argument is not set to true (Automated)',
        id: '23-ensure-that-the---auto-tls-argument-is-not-set-to-true-automated',
        level: 3
    },
    {
        value: '2.4 Ensure that the --peer-cert-file and --peer-key-file arguments are set as appropriate (Automated)',
        id: '24-ensure-that-the---peer-cert-file-and---peer-key-file-arguments-are-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '2.5 Ensure that the --peer-client-cert-auth argument is set to true (Automated)',
        id: '25-ensure-that-the---peer-client-cert-auth-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '2.6 Ensure that the --peer-auto-tls argument is not set to true (Automated)',
        id: '26-ensure-that-the---peer-auto-tls-argument-is-not-set-to-true-automated',
        level: 3
    },
    {
        value: '2.7 Ensure that a unique Certificate Authority is used for etcd (Automated)',
        id: '27-ensure-that-a-unique-certificate-authority-is-used-for-etcd-automated',
        level: 3
    },
    {
        value: '3.1 Authentication and Authorization',
        id: '31-authentication-and-authorization',
        level: 2
    },
    {
        value: '3.1.1 Client certificate authentication should not be used for users (Manual)',
        id: '311-client-certificate-authentication-should-not-be-used-for-users-manual',
        level: 3
    },
    {
        value: '3.2 Logging',
        id: '32-logging',
        level: 2
    },
    {
        value: '3.2.1 Ensure that a minimal audit policy is created (Automated)',
        id: '321-ensure-that-a-minimal-audit-policy-is-created-automated',
        level: 3
    },
    {
        value: '3.2.2 Ensure that the audit policy covers key security concerns (Manual)',
        id: '322-ensure-that-the-audit-policy-covers-key-security-concerns-manual',
        level: 3
    },
    {
        value: '4.1 Worker Node Configuration Files',
        id: '41-worker-node-configuration-files',
        level: 2
    },
    {
        value: '4.1.1 Ensure that the kubelet service file permissions are set to 644 or more restrictive (Automated)',
        id: '411-ensure-that-the-kubelet-service-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '4.1.2 Ensure that the kubelet service file ownership is set to root:root (Automated)',
        id: '412-ensure-that-the-kubelet-service-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '4.1.3 If proxy kubeconfig file exists ensure permissions are set to 644 or more restrictive (Automated)',
        id: '413-if-proxy-kubeconfig-file-exists-ensure-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '4.1.4 If proxy kubeconfig file exists ensure ownership is set to root:root (Automated)',
        id: '414-if-proxy-kubeconfig-file-exists-ensure-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '4.1.5 Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated)',
        id: '415-ensure-that-the---kubeconfig-kubeletconf-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '4.1.6 Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)',
        id: '416-ensure-that-the---kubeconfig-kubeletconf-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '4.1.7 Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated)',
        id: '417-ensure-that-the-certificate-authorities-file-permissions-are-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '4.1.8 Ensure that the client certificate authorities file ownership is set to root:root (Automated)',
        id: '418-ensure-that-the-client-certificate-authorities-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '4.1.9 Ensure that the kubelet --config configuration file has permissions set to 644 or more restrictive (Automated)',
        id: '419-ensure-that-the-kubelet---config-configuration-file-has-permissions-set-to-644-or-more-restrictive-automated',
        level: 3
    },
    {
        value: '4.1.10 Ensure that the kubelet --config configuration file ownership is set to root:root (Automated)',
        id: '4110-ensure-that-the-kubelet---config-configuration-file-ownership-is-set-to-rootroot-automated',
        level: 3
    },
    {
        value: '4.2 Kubelet',
        id: '42-kubelet',
        level: 2
    },
    {
        value: '4.2.1 Ensure that the --anonymous-auth argument is set to false (Automated)',
        id: '421-ensure-that-the---anonymous-auth-argument-is-set-to-false-automated',
        level: 3
    },
    {
        value: '4.2.2 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)',
        id: '422-ensure-that-the---authorization-mode-argument-is-not-set-to-alwaysallow-automated',
        level: 3
    },
    {
        value: '4.2.3 Ensure that the --client-ca-file argument is set as appropriate (Automated)',
        id: '423-ensure-that-the---client-ca-file-argument-is-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '4.2.4 Ensure that the --read-only-port argument is set to 0 (Automated)',
        id: '424-ensure-that-the---read-only-port-argument-is-set-to-0-automated',
        level: 3
    },
    {
        value: '4.2.5 Ensure that the --streaming-connection-idle-timeout argument is not set to 0 (Manual)',
        id: '425-ensure-that-the---streaming-connection-idle-timeout-argument-is-not-set-to-0-manual',
        level: 3
    },
    {
        value: '4.2.6 Ensure that the --protect-kernel-defaults argument is set to true (Automated)',
        id: '426-ensure-that-the---protect-kernel-defaults-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '4.2.7 Ensure that the --make-iptables-util-chains argument is set to true (Automated)',
        id: '427-ensure-that-the---make-iptables-util-chains-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '4.2.8 Ensure that the --hostname-override argument is not set (Manual)',
        id: '428-ensure-that-the---hostname-override-argument-is-not-set-manual',
        level: 3
    },
    {
        value: '4.2.9 Ensure that the --event-qps argument is set to 0 or a level which ensures appropriate event capture (Manual)',
        id: '429-ensure-that-the---event-qps-argument-is-set-to-0-or-a-level-which-ensures-appropriate-event-capture-manual',
        level: 3
    },
    {
        value: '4.2.10 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)',
        id: '4210-ensure-that-the---tls-cert-file-and---tls-private-key-file-arguments-are-set-as-appropriate-automated',
        level: 3
    },
    {
        value: '4.2.11 Ensure that the --rotate-certificates argument is not set to false (Automated)',
        id: '4211-ensure-that-the---rotate-certificates-argument-is-not-set-to-false-automated',
        level: 3
    },
    {
        value: '4.2.12 Verify that the RotateKubeletServerCertificate argument is set to true (Automated)',
        id: '4212-verify-that-the-rotatekubeletservercertificate-argument-is-set-to-true-automated',
        level: 3
    },
    {
        value: '4.2.13 Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers (Automated)',
        id: '4213-ensure-that-the-kubelet-only-makes-use-of-strong-cryptographic-ciphers-automated',
        level: 3
    },
    {
        value: '5.1 RBAC and Service Accounts',
        id: '51-rbac-and-service-accounts',
        level: 2
    },
    {
        value: '5.1.1 Ensure that the cluster-admin role is only used where required (Manual)',
        id: '511-ensure-that-the-cluster-admin-role-is-only-used-where-required-manual',
        level: 3
    },
    {
        value: '5.1.2 Minimize access to secrets (Manual)',
        id: '512-minimize-access-to-secrets-manual',
        level: 3
    },
    {
        value: '5.1.3 Minimize wildcard use in Roles and ClusterRoles (Manual)',
        id: '513-minimize-wildcard-use-in-roles-and-clusterroles-manual',
        level: 3
    },
    {
        value: '5.1.4 Minimize access to create pods (Manual)',
        id: '514-minimize-access-to-create-pods-manual',
        level: 3
    },
    {
        value: '5.1.5 Ensure that default service accounts are not actively used. (Automated)',
        id: '515-ensure-that-default-service-accounts-are-not-actively-used-automated',
        level: 3
    },
    {
        value: '5.1.6 Ensure that Service Account Tokens are only mounted where necessary (Manual)',
        id: '516-ensure-that-service-account-tokens-are-only-mounted-where-necessary-manual',
        level: 3
    },
    {
        value: '5.1.7 Avoid use of system:masters group (Manual)',
        id: '517-avoid-use-of-systemmasters-group-manual',
        level: 3
    },
    {
        value: '5.1.8 Limit use of the Bind, Impersonate and Escalate permissions in the Kubernetes cluster (Manual)',
        id: '518-limit-use-of-the-bind-impersonate-and-escalate-permissions-in-the-kubernetes-cluster-manual',
        level: 3
    },
    {
        value: '5.2 Pod Security Standards',
        id: '52-pod-security-standards',
        level: 2
    },
    {
        value: '5.2.1 Ensure that the cluster has at least one active policy control mechanism in place (Manual)',
        id: '521-ensure-that-the-cluster-has-at-least-one-active-policy-control-mechanism-in-place-manual',
        level: 3
    },
    {
        value: '5.2.2 Minimize the admission of privileged containers (Manual)',
        id: '522-minimize-the-admission-of-privileged-containers-manual',
        level: 3
    },
    {
        value: '5.2.3 Minimize the admission of containers wishing to share the host process ID namespace (Automated)',
        id: '523-minimize-the-admission-of-containers-wishing-to-share-the-host-process-id-namespace-automated',
        level: 3
    },
    {
        value: '5.2.4 Minimize the admission of containers wishing to share the host IPC namespace (Automated)',
        id: '524-minimize-the-admission-of-containers-wishing-to-share-the-host-ipc-namespace-automated',
        level: 3
    },
    {
        value: '5.2.5 Minimize the admission of containers wishing to share the host network namespace (Automated)',
        id: '525-minimize-the-admission-of-containers-wishing-to-share-the-host-network-namespace-automated',
        level: 3
    },
    {
        value: '5.2.6 Minimize the admission of containers with allowPrivilegeEscalation (Automated)',
        id: '526-minimize-the-admission-of-containers-with-allowprivilegeescalation-automated',
        level: 3
    },
    {
        value: '5.2.7 Minimize the admission of root containers (Automated)',
        id: '527-minimize-the-admission-of-root-containers-automated',
        level: 3
    },
    {
        value: '5.2.8 Minimize the admission of containers with the NET_RAW capability (Automated)',
        id: '528-minimize-the-admission-of-containers-with-the-net_raw-capability-automated',
        level: 3
    },
    {
        value: '5.2.9 Minimize the admission of containers with added capabilities (Automated)',
        id: '529-minimize-the-admission-of-containers-with-added-capabilities-automated',
        level: 3
    },
    {
        value: '5.2.10 Minimize the admission of containers with capabilities assigned (Manual)',
        id: '5210-minimize-the-admission-of-containers-with-capabilities-assigned-manual',
        level: 3
    },
    {
        value: '5.2.11 Minimize the admission of Windows HostProcess containers (Manual)',
        id: '5211-minimize-the-admission-of-windows-hostprocess-containers-manual',
        level: 3
    },
    {
        value: '5.2.12 Minimize the admission of HostPath volumes (Manual)',
        id: '5212-minimize-the-admission-of-hostpath-volumes-manual',
        level: 3
    },
    {
        value: '5.2.13 Minimize the admission of containers which use HostPorts (Manual)',
        id: '5213-minimize-the-admission-of-containers-which-use-hostports-manual',
        level: 3
    },
    {
        value: '5.3 Network Policies and CNI',
        id: '53-network-policies-and-cni',
        level: 2
    },
    {
        value: '5.3.1 Ensure that the CNI in use supports NetworkPolicies (Manual)',
        id: '531-ensure-that-the-cni-in-use-supports-networkpolicies-manual',
        level: 3
    },
    {
        value: '5.3.2 Ensure that all Namespaces have Network Policies defined (Automated)',
        id: '532-ensure-that-all-namespaces-have-network-policies-defined-automated',
        level: 3
    },
    {
        value: '5.4 Secrets Management',
        id: '54-secrets-management',
        level: 2
    },
    {
        value: '5.4.1 Prefer using Secrets as files over Secrets as environment variables (Manual)',
        id: '541-prefer-using-secrets-as-files-over-secrets-as-environment-variables-manual',
        level: 3
    },
    {
        value: '5.4.2 Consider external secret storage (Manual)',
        id: '542-consider-external-secret-storage-manual',
        level: 3
    },
    {
        value: '5.5 Extensible Admission Control',
        id: '55-extensible-admission-control',
        level: 2
    },
    {
        value: '5.5.1 Configure Image Provenance using ImagePolicyWebhook admission controller (Manual)',
        id: '551-configure-image-provenance-using-imagepolicywebhook-admission-controller-manual',
        level: 3
    },
    {
        value: '5.7 General Policies',
        id: '57-general-policies',
        level: 2
    },
    {
        value: '5.7.1 Create administrative boundaries between resources using namespaces (Manual)',
        id: '571-create-administrative-boundaries-between-resources-using-namespaces-manual',
        level: 3
    },
    {
        value: '5.7.2 Ensure that the seccomp profile is set to docker/default in your Pod definitions (Manual)',
        id: '572-ensure-that-the-seccomp-profile-is-set-to-dockerdefault-in-your-pod-definitions-manual',
        level: 3
    },
    {
        value: '5.7.3 Apply SecurityContext to your Pods and Containers (Manual)',
        id: '573-apply-securitycontext-to-your-pods-and-containers-manual',
        level: 3
    },
    {
        value: '5.7.4 The default namespace should not be used (Automated)',
        id: '574-the-default-namespace-should-not-be-used-automated',
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
        href: "https://ranchermanager.docs.rancher.com/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.23"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This document is a companion to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/"
    }, `RKE Hardening Guide`), `, which provides prescriptive guidance on how to harden RKE clusters that are running in production and managed by Rancher. This benchmark guide helps you evaluate the security of a hardened cluster against each control in the CIS Kubernetes Benchmark.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This guide corresponds to the following versions of Rancher, CIS Benchmarks, and Kubernetes:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Rancher Version`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `CIS Benchmark Version`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Kubernetes Version`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Rancher v2.7`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Benchmark v1.23`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Kubernetes v1.23`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This guide walks through the various controls and provide updated example commands to audit compliance in Rancher created clusters. Because Rancher and RKE install Kubernetes services as Docker containers, many of the control verification checks in the CIS Kubernetes Benchmark don't apply. These checks will return a result of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Not Applicable`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This document is for Rancher operators, security teams, auditors and decision makers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information about each control, including detailed descriptions and remediations for failing tests, refer to the corresponding section of the CIS Kubernetes Benchmark v1.23. You can download the benchmark, after creating a free account, at `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.cisecurity.org/benchmark/kubernetes/"
    }, `Center for Internet Security (CIS)`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "testing-methodology"
    }, `Testing Methodology`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher and RKE install Kubernetes services via Docker containers. Configuration is defined by arguments passed to the container at the time of initialization, not via configuration files.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Where control audits differ from the original CIS benchmark, the audit commands specific to Rancher are provided for testing. When performing the tests, you will need access to the command line on the hosts of all RKE nodes. The commands also make use of the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://kubernetes.io/docs/tasks/tools/"
    }, `kubectl`), ` (with a valid configuration file) and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://stedolan.github.io/jq/"
    }, `jq`), ` tools, which are required in the testing and evaluation of test results.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `This guide only covers `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `automated`), ` (previously called `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `scored`), `) tests.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "controls"
    }, `Controls`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "11-master-node-configuration-files"
    }, `1.1 Master Node Configuration Files`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "111-ensure-that-the-api-server-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.1 Ensure that the API server pod specification file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for kube-apiserver.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "112-ensure-that-the-api-server-pod-specification-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.2 Ensure that the API server pod specification file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for kube-apiserver.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "113-ensure-that-the-controller-manager-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.3 Ensure that the controller manager pod specification file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for controller-manager.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "114-ensure-that-the-controller-manager-pod-specification-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.4 Ensure that the controller manager pod specification file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for controller-manager.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "115-ensure-that-the-scheduler-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.5 Ensure that the scheduler pod specification file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for scheduler.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "116-ensure-that-the-scheduler-pod-specification-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.6 Ensure that the scheduler pod specification file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for scheduler.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "117-ensure-that-the-etcd-pod-specification-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.7 Ensure that the etcd pod specification file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for etcd.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "118-ensure-that-the-etcd-pod-specification-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.8 Ensure that the etcd pod specification file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for etcd.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "119-ensure-that-the-container-network-interface-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.9 Ensure that the Container Network Interface file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the control plane node.
For example, chmod 644 <path/to/cni/files`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `ps -fC \${kubeletbin:-kubelet} | grep -- --cni-conf-dir || echo "/etc/cni/net.d" | sed 's%.*cni-conf-dir[= ]\\([^ ]*\\).*%\\1%' | xargs -I{} find {} -mindepth 1 | xargs --no-run-if-empty stat -c permissions=%a find /var/lib/cni/networks -type f 2> /dev/null | xargs --no-run-if-empty stat -c permissions=%a
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'permissions' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1110-ensure-that-the-container-network-interface-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.10 Ensure that the Container Network Interface file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the control plane node.
For example,
chown root:root <path/to/cni/files`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `ps -fC \${kubeletbin:-kubelet} | grep -- --cni-conf-dir || echo "/etc/cni/net.d" | sed 's%.*cni-conf-dir[= ]\\([^ ]*\\).*%\\1%' | xargs -I{} find {} -mindepth 1 | xargs --no-run-if-empty stat -c %U:%G find /var/lib/cni/networks -type f 2> /dev/null | xargs --no-run-if-empty stat -c %U:%G
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'root:root' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1111-ensure-that-the-etcd-data-directory-permissions-are-set-to-700-or-more-restrictive-automated"
    }, `1.1.11 Ensure that the etcd data directory permissions are set to 700 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
On the etcd server node, get the etcd data directory, passed as an argument --data-dir,
from the command 'ps -ef | grep etcd'.
Run the below command (based on the etcd data directory found above). For example,
chmod 700 /var/lib/etcd`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `stat -c %a /node/var/lib/etcd
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'700' is equal to '700'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `700
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1112-ensure-that-the-etcd-data-directory-ownership-is-set-to-etcdetcd-automated"
    }, `1.1.12 Ensure that the etcd data directory ownership is set to etcd:etcd (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
On the etcd server node, get the etcd data directory, passed as an argument --data-dir,
from the command 'ps -ef | grep etcd'.
Run the below command (based on the etcd data directory found above).
For example, chown etcd:etcd /var/lib/etcd`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1113-ensure-that-the-adminconf-file-permissions-are-set-to-600-or-more-restrictive-automated"
    }, `1.1.13 Ensure that the admin.conf file permissions are set to 600 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE does not store the kubernetes default kubeconfig credentials file on the nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1114-ensure-that-the-adminconf-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.14 Ensure that the admin.conf file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE does not store the kubernetes default kubeconfig credentials file on the nodes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1115-ensure-that-the-schedulerconf-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.15 Ensure that the scheduler.conf file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for scheduler.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1116-ensure-that-the-schedulerconf-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.16 Ensure that the scheduler.conf file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for scheduler.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1117-ensure-that-the-controller-managerconf-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.17 Ensure that the controller-manager.conf file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for controller-manager.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1118-ensure-that-the-controller-managerconf-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.18 Ensure that the controller-manager.conf file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn't require or maintain a configuration file for controller-manager.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1119-ensure-that-the-kubernetes-pki-directory-and-file-ownership-is-set-to-rootroot-automated"
    }, `1.1.19 Ensure that the Kubernetes PKI directory and file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the master node.
For example,
chown -R root:root /etc/kubernetes/pki/`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_files_owner_in_dir.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/usr/bin/env bash

# This script is used to ensure the owner is set to root:root for
# the given directory and all the files in it
#
# inputs:
#   $1 = /full/path/to/directory
#
# outputs:
#   true/false

INPUT_DIR=$1

if [[ "\${INPUT_DIR}" == "" ]]; then
    echo "false"
    exit
fi

if [[ $(stat -c %U:%G \${INPUT_DIR}) != "root:root" ]]; then
    echo "false"
    exit
fi

statInfoLines=$(stat -c "%n %U:%G" \${INPUT_DIR}/*)
while read -r statInfoLine; do
  f=$(echo \${statInfoLine} | cut -d' ' -f1)
  p=$(echo \${statInfoLine} | cut -d' ' -f2)

  if [[ $(basename "$f" .pem) == "kube-etcd-"* ]]; then
    if [[ "$p" != "root:root" && "$p" != "etcd:etcd" ]]; then
      echo "false"
      exit
    fi
  else
    if [[ "$p" != "root:root" ]]; then
      echo "false"
      exit
    fi
  fi
done <<< "\${statInfoLines}"


echo "true"
exit

`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_files_owner_in_dir.sh /node/etc/kubernetes/ssl
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1120-ensure-that-the-kubernetes-pki-certificate-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `1.1.20 Ensure that the Kubernetes PKI certificate file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the master node.
For example,
chmod -R 644 /etc/kubernetes/pki/*.crt`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_files_permissions.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/usr/bin/env bash

# This script is used to ensure the file permissions are set to 644 or
# more restrictive for all files in a given directory or a wildcard
# selection of files
#
# inputs:
#   $1 = /full/path/to/directory or /path/to/fileswithpattern
#                                   ex: !(*key).pem
#
#   $2 (optional) = permission (ex: 600)
#
# outputs:
#   true/false

# Turn on "extended glob" for use of '!' in wildcard
shopt -s extglob

# Turn off history to avoid surprises when using '!'
set -H

USER_INPUT=$1

if [[ "\${USER_INPUT}" == "" ]]; then
  echo "false"
  exit
fi


if [[ -d \${USER_INPUT} ]]; then
  PATTERN="\${USER_INPUT}/*"
else
  PATTERN="\${USER_INPUT}"
fi

PERMISSION=""
if [[ "$2" != "" ]]; then
  PERMISSION=$2
fi

FILES_PERMISSIONS=$(stat -c %n\\ %a \${PATTERN})

while read -r fileInfo; do
  p=$(echo \${fileInfo} | cut -d' ' -f2)

  if [[ "\${PERMISSION}" != "" ]]; then
    if [[ "$p" != "\${PERMISSION}" ]]; then
      echo "false"
      exit
    fi
  else
    if [[ "$p" != "644" && "$p" != "640" && "$p" != "600" ]]; then
      echo "false"
      exit
    fi
  fi
done <<< "\${FILES_PERMISSIONS}"


echo "true"
exit

`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_files_permissions.sh '/node/etc/kubernetes/ssl/!(*key).pem'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1121-ensure-that-the-kubernetes-pki-key-file-permissions-are-set-to-600-automated"
    }, `1.1.21 Ensure that the Kubernetes PKI key file permissions are set to 600 (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the control plane node.
For example,
chmod -R 600 /etc/kubernetes/ssl/*key.pem`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_files_permissions.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/usr/bin/env bash

# This script is used to ensure the file permissions are set to 644 or
# more restrictive for all files in a given directory or a wildcard
# selection of files
#
# inputs:
#   $1 = /full/path/to/directory or /path/to/fileswithpattern
#                                   ex: !(*key).pem
#
#   $2 (optional) = permission (ex: 600)
#
# outputs:
#   true/false

# Turn on "extended glob" for use of '!' in wildcard
shopt -s extglob

# Turn off history to avoid surprises when using '!'
set -H

USER_INPUT=$1

if [[ "\${USER_INPUT}" == "" ]]; then
  echo "false"
  exit
fi


if [[ -d \${USER_INPUT} ]]; then
  PATTERN="\${USER_INPUT}/*"
else
  PATTERN="\${USER_INPUT}"
fi

PERMISSION=""
if [[ "$2" != "" ]]; then
  PERMISSION=$2
fi

FILES_PERMISSIONS=$(stat -c %n\\ %a \${PATTERN})

while read -r fileInfo; do
  p=$(echo \${fileInfo} | cut -d' ' -f2)

  if [[ "\${PERMISSION}" != "" ]]; then
    if [[ "$p" != "\${PERMISSION}" ]]; then
      echo "false"
      exit
    fi
  else
    if [[ "$p" != "644" && "$p" != "640" && "$p" != "600" ]]; then
      echo "false"
      exit
    fi
  fi
done <<< "\${FILES_PERMISSIONS}"


echo "true"
exit

`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_files_permissions.sh '/node/etc/kubernetes/ssl/*key.pem'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "12-api-server"
    }, `1.2 API Server`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "121-ensure-that-the---anonymous-auth-argument-is-set-to-false-automated"
    }, `1.2.1 Ensure that the --anonymous-auth argument is set to false (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--anonymous-auth=false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--anonymous-auth' is equal to 'false'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "122-ensure-that-the---token-auth-file-parameter-is-not-set-automated"
    }, `1.2.2 Ensure that the --token-auth-file parameter is not set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the documentation and configure alternate mechanisms for authentication. Then,
edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and remove the --token-auth-file=<filename`, `>`, ` parameter.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--token-auth-file' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "123-ensure-that-the---denyserviceexternalips-is-not-set-automated"
    }, `1.2.3 Ensure that the --DenyServiceExternalIPs is not set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and remove the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `DenyServiceExternalIPs`), `
from enabled admission plugins.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--enable-admission-plugins' does not have 'DenyServiceExternalIPs' OR '--enable-admission-plugins' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "124-ensure-that-the---kubelet-https-argument-is-set-to-true-automated"
    }, `1.2.4 Ensure that the --kubelet-https argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and remove the --kubelet-https parameter.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--kubelet-https' is present OR '--kubelet-https' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "125-ensure-that-the---kubelet-client-certificate-and---kubelet-client-key-arguments-are-set-as-appropriate-automated"
    }, `1.2.5 Ensure that the --kubelet-client-certificate and --kubelet-client-key arguments are set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and set up the TLS connection between the
apiserver and kubelets. Then, edit API server pod specification file
/etc/kubernetes/manifests/kube-apiserver.yaml on the control plane node and set the
kubelet client certificate and key parameters as below.
--kubelet-client-certificate=<path/to/client-certificate-file`, `>`, `
--kubelet-client-key=<path/to/client-key-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--kubelet-client-certificate' is present AND '--kubelet-client-key' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "126-ensure-that-the---kubelet-certificate-authority-argument-is-set-as-appropriate-automated"
    }, `1.2.6 Ensure that the --kubelet-certificate-authority argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and setup the TLS connection between
the apiserver and kubelets. Then, edit the API server pod specification file
/etc/kubernetes/manifests/kube-apiserver.yaml on the control plane node and set the
--kubelet-certificate-authority parameter to the path to the cert file for the certificate authority.
--kubelet-certificate-authority=<ca-string`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--kubelet-certificate-authority' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "127-ensure-that-the---authorization-mode-argument-is-not-set-to-alwaysallow-automated"
    }, `1.2.7 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --authorization-mode parameter to values other than AlwaysAllow.
One such example could be as below.
--authorization-mode=RBAC`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--authorization-mode' does not have 'AlwaysAllow'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "128-ensure-that-the---authorization-mode-argument-includes-node-automated"
    }, `1.2.8 Ensure that the --authorization-mode argument includes Node (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --authorization-mode parameter to a value that includes Node.
--authorization-mode=Node,RBAC`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--authorization-mode' has 'Node'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "129-ensure-that-the---authorization-mode-argument-includes-rbac-automated"
    }, `1.2.9 Ensure that the --authorization-mode argument includes RBAC (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --authorization-mode parameter to a value that includes RBAC,
for example `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `--authorization-mode=Node,RBAC`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--authorization-mode' has 'RBAC'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1210-ensure-that-the-admission-control-plugin-eventratelimit-is-set-manual"
    }, `1.2.10 Ensure that the admission control plugin EventRateLimit is set (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and set the desired limits in a configuration file.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
and set the below parameters.
--enable-admission-plugins=...,EventRateLimit,...
--admission-control-config-file=<path/to/configuration/file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--enable-admission-plugins' has 'EventRateLimit'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1211-ensure-that-the-admission-control-plugin-alwaysadmit-is-not-set-automated"
    }, `1.2.11 Ensure that the admission control plugin AlwaysAdmit is not set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and either remove the --enable-admission-plugins parameter, or set it to a
value that does not include AlwaysAdmit.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--enable-admission-plugins' does not have 'AlwaysAdmit' OR '--enable-admission-plugins' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1212-ensure-that-the-admission-control-plugin-alwayspullimages-is-set-manual"
    }, `1.2.12 Ensure that the admission control plugin AlwaysPullImages is set (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --enable-admission-plugins parameter to include
AlwaysPullImages.
--enable-admission-plugins=...,AlwaysPullImages,...`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1213-ensure-that-the-admission-control-plugin-securitycontextdeny-is-set-if-podsecuritypolicy-is-not-used-manual"
    }, `1.2.13 Ensure that the admission control plugin SecurityContextDeny is set if PodSecurityPolicy is not used (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --enable-admission-plugins parameter to include
SecurityContextDeny, unless PodSecurityPolicy is already in place.
--enable-admission-plugins=...,SecurityContextDeny,...`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1214-ensure-that-the-admission-control-plugin-serviceaccount-is-set-automated"
    }, `1.2.14 Ensure that the admission control plugin ServiceAccount is set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the documentation and create ServiceAccount objects as per your environment.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and ensure that the --disable-admission-plugins parameter is set to a
value that does not include ServiceAccount.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--disable-admission-plugins' is present OR '--disable-admission-plugins' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1215-ensure-that-the-admission-control-plugin-namespacelifecycle-is-set-automated"
    }, `1.2.15 Ensure that the admission control plugin NamespaceLifecycle is set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --disable-admission-plugins parameter to
ensure it does not include NamespaceLifecycle.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--disable-admission-plugins' is present OR '--disable-admission-plugins' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1216-ensure-that-the-admission-control-plugin-noderestriction-is-set-automated"
    }, `1.2.16 Ensure that the admission control plugin NodeRestriction is set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and configure NodeRestriction plug-in on kubelets.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --enable-admission-plugins parameter to a
value that includes NodeRestriction.
--enable-admission-plugins=...,NodeRestriction,...`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--enable-admission-plugins' has 'NodeRestriction'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1217-ensure-that-the---secure-port-argument-is-not-set-to-0-automated"
    }, `1.2.17 Ensure that the --secure-port argument is not set to 0 (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and either remove the --secure-port parameter or
set it to a different (non-zero) desired port.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--secure-port' is greater than 0 OR '--secure-port' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1218-ensure-that-the---profiling-argument-is-set-to-false-automated"
    }, `1.2.18 Ensure that the --profiling argument is set to false (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--profiling=false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--profiling' is equal to 'false'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1219-ensure-that-the---audit-log-path-argument-is-set-automated"
    }, `1.2.19 Ensure that the --audit-log-path argument is set (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-path parameter to a suitable path and
file where you would like audit logs to be written, for example,
--audit-log-path=/var/log/apiserver/audit.log`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--audit-log-path' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1220-ensure-that-the---audit-log-maxage-argument-is-set-to-30-or-as-appropriate-automated"
    }, `1.2.20 Ensure that the --audit-log-maxage argument is set to 30 or as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-maxage parameter to 30
or as an appropriate number of days, for example,
--audit-log-maxage=30`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--audit-log-maxage' is greater or equal to 30
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1221-ensure-that-the---audit-log-maxbackup-argument-is-set-to-10-or-as-appropriate-automated"
    }, `1.2.21 Ensure that the --audit-log-maxbackup argument is set to 10 or as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-maxbackup parameter to 10 or to an appropriate
value. For example,
--audit-log-maxbackup=10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--audit-log-maxbackup' is greater or equal to 10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1222-ensure-that-the---audit-log-maxsize-argument-is-set-to-100-or-as-appropriate-automated"
    }, `1.2.22 Ensure that the --audit-log-maxsize argument is set to 100 or as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --audit-log-maxsize parameter to an appropriate size in MB.
For example, to set it as 100 MB, --audit-log-maxsize=100`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--audit-log-maxsize' is greater or equal to 100
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1224-ensure-that-the---service-account-lookup-argument-is-set-to-true-automated"
    }, `1.2.24 Ensure that the --service-account-lookup argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--service-account-lookup=true
Alternatively, you can delete the --service-account-lookup parameter from this file so
that the default takes effect.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--service-account-lookup' is not present OR '--service-account-lookup' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1225-ensure-that-the---request-timeout-argument-is-set-as-appropriate-automated"
    }, `1.2.25 Ensure that the --request-timeout argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --service-account-key-file parameter
to the public key file for service accounts. For example,
--service-account-key-file=<filename`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--service-account-key-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1226-ensure-that-the---etcd-certfile-and---etcd-keyfile-arguments-are-set-as-appropriate-automated"
    }, `1.2.26 Ensure that the --etcd-certfile and --etcd-keyfile arguments are set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and set up the TLS connection between the apiserver and etcd.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the etcd certificate and key file parameters.
--etcd-certfile=<path/to/client-certificate-file`, `>`, `
--etcd-keyfile=<path/to/client-key-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--etcd-certfile' is present AND '--etcd-keyfile' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1227-ensure-that-the---tls-cert-file-and---tls-private-key-file-arguments-are-set-as-appropriate-automated"
    }, `1.2.27 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and set up the TLS connection on the apiserver.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the TLS certificate and private key file parameters.
--tls-cert-file=<path/to/tls-certificate-file`, `>`, `
--tls-private-key-file=<path/to/tls-key-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--tls-cert-file' is present AND '--tls-private-key-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1228-ensure-that-the---client-ca-file-argument-is-set-as-appropriate-automated"
    }, `1.2.28 Ensure that the --client-ca-file argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and set up the TLS connection on the apiserver.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the client certificate authority file.
--client-ca-file=<path/to/client-ca-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--client-ca-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1229-ensure-that-the---etcd-cafile-argument-is-set-as-appropriate-automated"
    }, `1.2.29 Ensure that the --etcd-cafile argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and set up the TLS connection between the apiserver and etcd.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the etcd certificate authority file parameter.
--etcd-cafile=<path/to/ca-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--etcd-cafile' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1230-ensure-that-the---encryption-provider-config-argument-is-set-as-appropriate-manual"
    }, `1.2.30 Ensure that the --encryption-provider-config argument is set as appropriate (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and configure a EncryptionConfig file.
Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the --encryption-provider-config parameter to the path of that file.
For example, --encryption-provider-config=</path/to/EncryptionConfig/File`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--encryption-provider-config' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1231-ensure-that-encryption-providers-are-appropriately-configured-automated"
    }, `1.2.31 Ensure that encryption providers are appropriately configured (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and configure a EncryptionConfig file.
In this file, choose aescbc, kms or secretbox as the encryption provider.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_encryption_provider_config.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/usr/bin/env bash

# This script is used to check the encrption provider config is set to aesbc
#
# outputs:
#   true/false

# TODO: Figure out the file location from the kube-apiserver commandline args
ENCRYPTION_CONFIG_FILE="/node/etc/kubernetes/ssl/encryption.yaml"

if [[ ! -f "\${ENCRYPTION_CONFIG_FILE}" ]]; then
  echo "false"
  exit
fi

for provider in "$@"
do
  if grep "$provider" "\${ENCRYPTION_CONFIG_FILE}"; then
    echo "true"
    exit
  fi
done

echo "false"
exit

`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_encryption_provider_config.sh aescbc
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `- aescbc: true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1232-ensure-that-the-api-server-only-makes-use-of-strong-cryptographic-ciphers-automated"
    }, `1.2.32 Ensure that the API Server only makes use of Strong Cryptographic Ciphers (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml
on the control plane node and set the below parameter.
--tls-cipher-suites=TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,
TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256,TLS_RSA_WITH_3DES_EDE_CBC_SHA,TLS_RSA_WITH_AES_128_CBC_SHA,
TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_256_GCM_SHA384`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--tls-cipher-suites' contains valid elements from 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256,TLS_RSA_WITH_3DES_EDE_CBC_SHA,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_256_GCM_SHA384'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "13-controller-manager"
    }, `1.3 Controller Manager`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "131-ensure-that-the---terminated-pod-gc-threshold-argument-is-set-as-appropriate-automated"
    }, `1.3.1 Ensure that the --terminated-pod-gc-threshold argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --terminated-pod-gc-threshold to an appropriate threshold,
for example, --terminated-pod-gc-threshold=10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-controller-manager | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--terminated-pod-gc-threshold' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5411 5390 2 21:34 ? 00:00:06 kube-controller-manager --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --allow-untagged-cloud=true --leader-elect=true --terminated-pod-gc-threshold=1000 --allocate-node-cidrs=true --node-monitor-grace-period=40s --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --profiling=false --configure-cloud-routes=false --enable-hostpath-provisioner=false --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --address=0.0.0.0 --v=2 --cloud-provider= --pod-eviction-timeout=5m0s --cluster-cidr=10.42.0.0/16 --use-service-account-credentials=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "132-ensure-that-the---profiling-argument-is-set-to-false-automated"
    }, `1.3.2 Ensure that the --profiling argument is set to false (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the below parameter.
--profiling=false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-controller-manager | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--profiling' is equal to 'false'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5411 5390 2 21:34 ? 00:00:06 kube-controller-manager --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --allow-untagged-cloud=true --leader-elect=true --terminated-pod-gc-threshold=1000 --allocate-node-cidrs=true --node-monitor-grace-period=40s --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --profiling=false --configure-cloud-routes=false --enable-hostpath-provisioner=false --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --address=0.0.0.0 --v=2 --cloud-provider= --pod-eviction-timeout=5m0s --cluster-cidr=10.42.0.0/16 --use-service-account-credentials=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "133-ensure-that-the---use-service-account-credentials-argument-is-set-to-true-automated"
    }, `1.3.3 Ensure that the --use-service-account-credentials argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node to set the below parameter.
--use-service-account-credentials=true`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-controller-manager | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--use-service-account-credentials' is not equal to 'false'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5411 5390 2 21:34 ? 00:00:06 kube-controller-manager --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --allow-untagged-cloud=true --leader-elect=true --terminated-pod-gc-threshold=1000 --allocate-node-cidrs=true --node-monitor-grace-period=40s --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --profiling=false --configure-cloud-routes=false --enable-hostpath-provisioner=false --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --address=0.0.0.0 --v=2 --cloud-provider= --pod-eviction-timeout=5m0s --cluster-cidr=10.42.0.0/16 --use-service-account-credentials=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "134-ensure-that-the---service-account-private-key-file-argument-is-set-as-appropriate-automated"
    }, `1.3.4 Ensure that the --service-account-private-key-file argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --service-account-private-key-file parameter
to the private key file for service accounts.
--service-account-private-key-file=<filename`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-controller-manager | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--service-account-private-key-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5411 5390 2 21:34 ? 00:00:06 kube-controller-manager --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --allow-untagged-cloud=true --leader-elect=true --terminated-pod-gc-threshold=1000 --allocate-node-cidrs=true --node-monitor-grace-period=40s --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --profiling=false --configure-cloud-routes=false --enable-hostpath-provisioner=false --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --address=0.0.0.0 --v=2 --cloud-provider= --pod-eviction-timeout=5m0s --cluster-cidr=10.42.0.0/16 --use-service-account-credentials=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "135-ensure-that-the---root-ca-file-argument-is-set-as-appropriate-automated"
    }, `1.3.5 Ensure that the --root-ca-file argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --root-ca-file parameter to the certificate bundle file\`.
--root-ca-file=<path/to/file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-controller-manager | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--root-ca-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5411 5390 2 21:34 ? 00:00:06 kube-controller-manager --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --allow-untagged-cloud=true --leader-elect=true --terminated-pod-gc-threshold=1000 --allocate-node-cidrs=true --node-monitor-grace-period=40s --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --profiling=false --configure-cloud-routes=false --enable-hostpath-provisioner=false --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --address=0.0.0.0 --v=2 --cloud-provider= --pod-eviction-timeout=5m0s --cluster-cidr=10.42.0.0/16 --use-service-account-credentials=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "136-ensure-that-the-rotatekubeletservercertificate-argument-is-set-to-true-automated"
    }, `1.3.6 Ensure that the RotateKubeletServerCertificate argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and set the --feature-gates parameter to include RotateKubeletServerCertificate=true.
--feature-gates=RotateKubeletServerCertificate=true`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Cluster provisioned by RKE handles certificate rotation directly through RKE.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "137-ensure-that-the---bind-address-argument-is-set-to-127001-automated"
    }, `1.3.7 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Controller Manager pod specification file /etc/kubernetes/manifests/kube-controller-manager.yaml
on the control plane node and ensure the correct value for the --bind-address parameter`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-controller-manager | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--bind-address' is present OR '--bind-address' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5411 5390 2 21:34 ? 00:00:06 kube-controller-manager --service-account-private-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --service-cluster-ip-range=10.43.0.0/16 --allow-untagged-cloud=true --leader-elect=true --terminated-pod-gc-threshold=1000 --allocate-node-cidrs=true --node-monitor-grace-period=40s --root-ca-file=/etc/kubernetes/ssl/kube-ca.pem --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --feature-gates=RotateKubeletServerCertificate=true --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --profiling=false --configure-cloud-routes=false --enable-hostpath-provisioner=false --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-controller-manager.yaml --address=0.0.0.0 --v=2 --cloud-provider= --pod-eviction-timeout=5m0s --cluster-cidr=10.42.0.0/16 --use-service-account-credentials=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "14-scheduler"
    }, `1.4 Scheduler`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "141-ensure-that-the---profiling-argument-is-set-to-false-automated"
    }, `1.4.1 Ensure that the --profiling argument is set to false (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Scheduler pod specification file /etc/kubernetes/manifests/kube-scheduler.yaml file
on the control plane node and set the below parameter.
--profiling=false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-scheduler | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--profiling' is equal to 'false'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5564 5543 0 21:34 ? 00:00:01 kube-scheduler --v=2 --address=0.0.0.0 --leader-elect=true --profiling=false --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "142-ensure-that-the---bind-address-argument-is-set-to-127001-automated"
    }, `1.4.2 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the Scheduler pod specification file /etc/kubernetes/manifests/kube-scheduler.yaml
on the control plane node and ensure the correct value for the --bind-address parameter`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-scheduler | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--bind-address' is present OR '--bind-address' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5564 5543 0 21:34 ? 00:00:01 kube-scheduler --v=2 --address=0.0.0.0 --leader-elect=true --profiling=false --authentication-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --authorization-kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-scheduler.yaml
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2-etcd-node-configuration"
    }, `2 Etcd Node Configuration`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "21-ensure-that-the---cert-file-and---key-file-arguments-are-set-as-appropriate-automated"
    }, `2.1 Ensure that the --cert-file and --key-file arguments are set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the etcd service documentation and configure TLS encryption.
Then, edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml
on the master node and set the below parameters.
--cert-file=</path/to/ca-file`, `>`, `
--key-file=</path/to/key-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--cert-file' is present AND '--key-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `etcd 5096 5076 3 21:34 ? 00:00:08 /usr/local/bin/etcd --initial-cluster=etcd-ip-172-31-26-226=https://172.31.26.226:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --initial-cluster-token=etcd-cluster-1 --name=etcd-ip-172-31-26-226 --listen-client-urls=https://172.31.26.226:2379 --listen-peer-urls=https://172.31.26.226:2380 --client-cert-auth=true --election-timeout=5000 --initial-advertise-peer-urls=https://172.31.26.226:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --initial-cluster-state=new --advertise-client-urls=https://172.31.26.226:2379 --heartbeat-interval=500 --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 5258 5238 18 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16 root 17615 17594 5 21:38 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-hardened --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "22-ensure-that-the---client-cert-auth-argument-is-set-to-true-automated"
    }, `2.2 Ensure that the --client-cert-auth argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and set the below parameter.
--client-cert-auth="true"`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--client-cert-auth' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `etcd 5096 5076 3 21:34 ? 00:00:08 /usr/local/bin/etcd --initial-cluster=etcd-ip-172-31-26-226=https://172.31.26.226:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --initial-cluster-token=etcd-cluster-1 --name=etcd-ip-172-31-26-226 --listen-client-urls=https://172.31.26.226:2379 --listen-peer-urls=https://172.31.26.226:2380 --client-cert-auth=true --election-timeout=5000 --initial-advertise-peer-urls=https://172.31.26.226:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --initial-cluster-state=new --advertise-client-urls=https://172.31.26.226:2379 --heartbeat-interval=500 --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 5258 5238 18 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16 root 17615 17594 3 21:38 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-hardened --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "23-ensure-that-the---auto-tls-argument-is-not-set-to-true-automated"
    }, `2.3 Ensure that the --auto-tls argument is not set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and either remove the --auto-tls parameter or set it to false.
--auto-tls=false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'ETCD_AUTO_TLS' is not present OR 'ETCD_AUTO_TLS' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin HOSTNAME=ip-172-31-26-226 ETCDCTL_API=3 ETCDCTL_CACERT=/etc/kubernetes/ssl/kube-ca.pem ETCDCTL_CERT=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem ETCDCTL_KEY=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem ETCDCTL_ENDPOINTS=https://172.31.26.226:2379 ETCD_UNSUPPORTED_ARCH=x86_64 HOME=/
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "24-ensure-that-the---peer-cert-file-and---peer-key-file-arguments-are-set-as-appropriate-automated"
    }, `2.4 Ensure that the --peer-cert-file and --peer-key-file arguments are set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the etcd service documentation and configure peer TLS encryption as appropriate
for your etcd cluster.
Then, edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the
master node and set the below parameters.
--peer-client-file=</path/to/peer-cert-file`, `>`, `
--peer-key-file=</path/to/peer-key-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--peer-cert-file' is present AND '--peer-key-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `etcd 5096 5076 3 21:34 ? 00:00:08 /usr/local/bin/etcd --initial-cluster=etcd-ip-172-31-26-226=https://172.31.26.226:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --initial-cluster-token=etcd-cluster-1 --name=etcd-ip-172-31-26-226 --listen-client-urls=https://172.31.26.226:2379 --listen-peer-urls=https://172.31.26.226:2380 --client-cert-auth=true --election-timeout=5000 --initial-advertise-peer-urls=https://172.31.26.226:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --initial-cluster-state=new --advertise-client-urls=https://172.31.26.226:2379 --heartbeat-interval=500 --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 5258 5238 18 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16 root 17615 17594 3 21:38 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-hardened --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "25-ensure-that-the---peer-client-cert-auth-argument-is-set-to-true-automated"
    }, `2.5 Ensure that the --peer-client-cert-auth argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and set the below parameter.
--peer-client-cert-auth=true`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--peer-client-cert-auth' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `etcd 5096 5076 3 21:34 ? 00:00:08 /usr/local/bin/etcd --initial-cluster=etcd-ip-172-31-26-226=https://172.31.26.226:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --initial-cluster-token=etcd-cluster-1 --name=etcd-ip-172-31-26-226 --listen-client-urls=https://172.31.26.226:2379 --listen-peer-urls=https://172.31.26.226:2380 --client-cert-auth=true --election-timeout=5000 --initial-advertise-peer-urls=https://172.31.26.226:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --initial-cluster-state=new --advertise-client-urls=https://172.31.26.226:2379 --heartbeat-interval=500 --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 5258 5238 18 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16 root 17615 17594 3 21:38 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-hardened --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "26-ensure-that-the---peer-auto-tls-argument-is-not-set-to-true-automated"
    }, `2.6 Ensure that the --peer-auto-tls argument is not set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the master
node and either remove the --peer-auto-tls parameter or set it to false.
--peer-auto-tls=false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'ETCD_PEER_AUTO_TLS' is not present OR 'ETCD_PEER_AUTO_TLS' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin HOSTNAME=ip-172-31-26-226 ETCDCTL_API=3 ETCDCTL_CACERT=/etc/kubernetes/ssl/kube-ca.pem ETCDCTL_CERT=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem ETCDCTL_KEY=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem ETCDCTL_ENDPOINTS=https://172.31.26.226:2379 ETCD_UNSUPPORTED_ARCH=x86_64 HOME=/
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "27-ensure-that-a-unique-certificate-authority-is-used-for-etcd-automated"
    }, `2.7 Ensure that a unique Certificate Authority is used for etcd (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
`, `[Manual test]`, `
Follow the etcd documentation and create a dedicated certificate authority setup for the
etcd service.
Then, edit the etcd pod specification file /etc/kubernetes/manifests/etcd.yaml on the
master node and set the below parameter.
--trusted-ca-file=</path/to/ca-file`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | /bin/grep etcd | /bin/grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--trusted-ca-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `etcd 5096 5076 3 21:34 ? 00:00:08 /usr/local/bin/etcd --initial-cluster=etcd-ip-172-31-26-226=https://172.31.26.226:2380 --peer-trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --peer-cert-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226.pem --initial-cluster-token=etcd-cluster-1 --name=etcd-ip-172-31-26-226 --listen-client-urls=https://172.31.26.226:2379 --listen-peer-urls=https://172.31.26.226:2380 --client-cert-auth=true --election-timeout=5000 --initial-advertise-peer-urls=https://172.31.26.226:2380 --key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --initial-cluster-state=new --advertise-client-urls=https://172.31.26.226:2379 --heartbeat-interval=500 --peer-client-cert-auth=true --data-dir=/var/lib/rancher/etcd/ --trusted-ca-file=/etc/kubernetes/ssl/kube-ca.pem --peer-key-file=/etc/kubernetes/ssl/kube-etcd-172-31-26-226-key.pem --cipher-suites=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 root 5258 5238 18 21:34 ? 00:00:40 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16 root 17615 17594 2 21:38 ? 00:00:00 kube-bench run --targets etcd --scored --nosummary --noremediations --v=0 --config-dir=/etc/kube-bench/cfg --benchmark rke-cis-1.23-hardened --json --log_dir /tmp/sonobuoy/logs --outputfile /tmp/sonobuoy/etcd.json
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "31-authentication-and-authorization"
    }, `3.1 Authentication and Authorization`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "311-client-certificate-authentication-should-not-be-used-for-users-manual"
    }, `3.1.1 Client certificate authentication should not be used for users (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Alternative mechanisms provided by Kubernetes such as the use of OIDC should be
implemented in place of client certificates.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "32-logging"
    }, `3.2 Logging`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "321-ensure-that-a-minimal-audit-policy-is-created-automated"
    }, `3.2.1 Ensure that a minimal audit policy is created (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Create an audit policy file for your cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -ef | grep kube-apiserver | grep -v grep
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--audit-policy-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root 5258 5238 17 21:34 ? 00:00:41 kube-apiserver --encryption-provider-config=/etc/kubernetes/ssl/encryption.yaml --api-audiences=unknown --service-account-signing-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --requestheader-group-headers=X-Remote-Group --advertise-address=172.31.26.226 --audit-log-format=json --requestheader-allowed-names=kube-apiserver-proxy-client --requestheader-client-ca-file=/etc/kubernetes/ssl/kube-apiserver-requestheader-ca.pem --authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,Priority,TaintNodesByCondition,PersistentVolumeClaimResize,PodSecurityPolicy,EventRateLimit --anonymous-auth=false --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --secure-port=6443 --audit-log-path=/var/log/kube-audit/audit-log.json --kubelet-client-certificate=/etc/kubernetes/ssl/kube-apiserver.pem --service-account-key-file=/etc/kubernetes/ssl/kube-service-account-token-key.pem --etcd-prefix=/registry --etcd-servers=https://172.31.26.226:2379 --insecure-port=0 --etcd-cafile=/etc/kubernetes/ssl/kube-ca.pem --etcd-certfile=/etc/kubernetes/ssl/kube-node.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-apiserver-key.pem --kubelet-certificate-authority=/etc/kubernetes/ssl/kube-ca.pem --runtime-config=policy/v1beta1/podsecuritypolicy=true --audit-log-maxsize=100 --cloud-provider= --kubelet-client-key=/etc/kubernetes/ssl/kube-apiserver-key.pem --authentication-token-webhook-cache-ttl=5s --profiling=false --requestheader-extra-headers-prefix=X-Remote-Extra- --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305 --audit-log-maxage=30 --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --etcd-keyfile=/etc/kubernetes/ssl/kube-node-key.pem --tls-cert-file=/etc/kubernetes/ssl/kube-apiserver.pem --storage-backend=etcd3 --requestheader-username-headers=X-Remote-User --bind-address=0.0.0.0 --authorization-mode=Node,RBAC --admission-control-config-file=/etc/kubernetes/admission.yaml --service-node-port-range=30000-32767 --proxy-client-key-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client-key.pem --service-account-issuer=rke --allow-privileged=true --service-account-lookup=true --audit-log-maxbackup=10 --audit-policy-file=/etc/kubernetes/audit-policy.yaml --proxy-client-cert-file=/etc/kubernetes/ssl/kube-apiserver-proxy-client.pem --service-cluster-ip-range=10.43.0.0/16
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "322-ensure-that-the-audit-policy-covers-key-security-concerns-manual"
    }, `3.2.2 Ensure that the audit policy covers key security concerns (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Review the audit policy provided for the cluster and ensure that it covers
at least the following areas,`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Access to Secrets managed by the cluster. Care should be taken to only
log Metadata for requests to Secrets, ConfigMaps, and TokenReviews, in
order to avoid risk of logging sensitive data.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Modification of Pod and Deployment objects.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Use of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `pods/exec`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `pods/portforward`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `pods/proxy`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `services/proxy`), `.
For most requests, minimally logging at the Metadata level is recommended
(the most basic level of logging).`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "41-worker-node-configuration-files"
    }, `4.1 Worker Node Configuration Files`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "411-ensure-that-the-kubelet-service-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `4.1.1 Ensure that the kubelet service file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn’t require or maintain a configuration file for the kubelet service.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "412-ensure-that-the-kubelet-service-file-ownership-is-set-to-rootroot-automated"
    }, `4.1.2 Ensure that the kubelet service file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Cluster provisioned by RKE doesn’t require or maintain a configuration file for the kubelet service.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "413-if-proxy-kubeconfig-file-exists-ensure-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `4.1.3 If proxy kubeconfig file exists ensure permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the each worker node.
For example,
chmod 644 /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; then stat -c permissions=%a /node/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `permissions has permissions 600, expected 644 or more restrictive OR '/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `permissions=600
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "414-if-proxy-kubeconfig-file-exists-ensure-ownership-is-set-to-rootroot-automated"
    }, `4.1.4 If proxy kubeconfig file exists ensure ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the each worker node.
For example, chown root:root /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; then stat -c %U:%G /etc/kubernetes/ssl/kubecfg-kube-proxy.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'root:root' is present OR '/etc/kubernetes/ssl/kubecfg-kube-proxy.yaml' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "415-ensure-that-the---kubeconfig-kubeletconf-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `4.1.5 Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the each worker node.
For example,
chmod 644 /etc/kubernetes/ssl/kubecfg-kube-node.yaml`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; then stat -c permissions=%a /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `permissions has permissions 600, expected 644 or more restrictive
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `permissions=600
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "416-ensure-that-the---kubeconfig-kubeletconf-file-ownership-is-set-to-rootroot-automated"
    }, `4.1.6 Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the below command (based on the file location on your system) on the each worker node.
For example,
chown root:root /etc/kubernetes/ssl/kubecfg-kube-node.yaml`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; then stat -c %U:%G /node/etc/kubernetes/ssl/kubecfg-kube-node.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'root:root' is equal to 'root:root'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root:root
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "417-ensure-that-the-certificate-authorities-file-permissions-are-set-to-644-or-more-restrictive-automated"
    }, `4.1.7 Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the following command to modify the file permissions of the
--client-ca-file chmod 644 <filename`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `stat -c permissions=%a /node/etc/kubernetes/ssl/kube-ca.pem
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `permissions has permissions 644, expected 644 or more restrictive
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `permissions=644
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "418-ensure-that-the-client-certificate-authorities-file-ownership-is-set-to-rootroot-automated"
    }, `4.1.8 Ensure that the client certificate authorities file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the following command to modify the ownership of the --client-ca-file.
chown root:root <filename`, `>`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `stat -c %U:%G /node/etc/kubernetes/ssl/kube-ca.pem
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'root:root' is equal to 'root:root'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `root:root
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "419-ensure-that-the-kubelet---config-configuration-file-has-permissions-set-to-644-or-more-restrictive-automated"
    }, `4.1.9 Ensure that the kubelet --config configuration file has permissions set to 644 or more restrictive (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the following command (using the config file location identified in the Audit step)
chmod 644 /var/lib/kubelet/config.yaml`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Clusters provisioned by RKE doesn’t require or maintain a configuration file for the kubelet.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "4110-ensure-that-the-kubelet---config-configuration-file-ownership-is-set-to-rootroot-automated"
    }, `4.1.10 Ensure that the kubelet --config configuration file ownership is set to root:root (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Run the following command (using the config file location identified in the Audit step)
chown root:root /var/lib/kubelet/config.yaml`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Clusters provisioned by RKE doesn’t require or maintain a configuration file for the kubelet.
All configuration is passed in as arguments at container run time.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "42-kubelet"
    }, `4.2 Kubelet`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "421-ensure-that-the---anonymous-auth-argument-is-set-to-false-automated"
    }, `4.2.1 Ensure that the --anonymous-auth argument is set to false (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `authentication: anonymous: enabled`), ` to
`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `false`), `.
If using executable arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `--anonymous-auth=false`), `
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--anonymous-auth' is equal to 'false'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "422-ensure-that-the---authorization-mode-argument-is-not-set-to-alwaysallow-automated"
    }, `4.2.2 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `authorization.mode`), ` to Webhook. If
using executable arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_AUTHZ_ARGS variable.
--authorization-mode=Webhook
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--authorization-mode' does not have 'AlwaysAllow'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "423-ensure-that-the---client-ca-file-argument-is-set-as-appropriate-automated"
    }, `4.2.3 Ensure that the --client-ca-file argument is set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `authentication.x509.clientCAFile`), ` to
the location of the client CA file.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_AUTHZ_ARGS variable.
--client-ca-file=<path/to/client-ca-file`, `>`, `
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--client-ca-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "424-ensure-that-the---read-only-port-argument-is-set-to-0-automated"
    }, `4.2.4 Ensure that the --read-only-port argument is set to 0 (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `readOnlyPort`), ` to 0.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
--read-only-port=0
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--read-only-port' is equal to '0' OR '--read-only-port' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "425-ensure-that-the---streaming-connection-idle-timeout-argument-is-not-set-to-0-manual"
    }, `4.2.5 Ensure that the --streaming-connection-idle-timeout argument is not set to 0 (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `streamingConnectionIdleTimeout`), ` to a
value other than 0.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
--streaming-connection-idle-timeout=5m
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--streaming-connection-idle-timeout' is not equal to '0' OR '--streaming-connection-idle-timeout' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "426-ensure-that-the---protect-kernel-defaults-argument-is-set-to-true-automated"
    }, `4.2.6 Ensure that the --protect-kernel-defaults argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `protectKernelDefaults`), ` to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
--protect-kernel-defaults=true
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--protect-kernel-defaults' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "427-ensure-that-the---make-iptables-util-chains-argument-is-set-to-true-automated"
    }, `4.2.7 Ensure that the --make-iptables-util-chains argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `makeIPTablesUtilChains`), ` to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
remove the --make-iptables-util-chains argument from the
KUBELET_SYSTEM_PODS_ARGS variable.
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--make-iptables-util-chains' is equal to 'true' OR '--make-iptables-util-chains' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "428-ensure-that-the---hostname-override-argument-is-not-set-manual"
    }, `4.2.8 Ensure that the --hostname-override argument is not set (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the kubelet service file /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
on each worker node and remove the --hostname-override argument from the
KUBELET_SYSTEM_PODS_ARGS variable.
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Clusters provisioned by RKE set the --hostname-override to avoid any hostname configuration errors`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "429-ensure-that-the---event-qps-argument-is-set-to-0-or-a-level-which-ensures-appropriate-event-capture-manual"
    }, `4.2.9 Ensure that the --event-qps argument is set to 0 or a level which ensures appropriate event capture (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `eventRecordQPS`), ` to an appropriate level.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameter in KUBELET_SYSTEM_PODS_ARGS variable.
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--event-qps' is equal to '0'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "4210-ensure-that-the---tls-cert-file-and---tls-private-key-file-arguments-are-set-as-appropriate-automated"
    }, `4.2.10 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `tlsCertFile`), ` to the location
of the certificate file to use to identify this Kubelet, and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `tlsPrivateKeyFile`), `
to the location of the corresponding private key file.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the below parameters in KUBELET_CERTIFICATE_ARGS variable.
--tls-cert-file=<path/to/tls-certificate-file`, `>`, `
--tls-private-key-file=<path/to/tls-key-file`, `>`, `
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--tls-cert-file' is present AND '--tls-private-key-file' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "4211-ensure-that-the---rotate-certificates-argument-is-not-set-to-false-automated"
    }, `4.2.11 Ensure that the --rotate-certificates argument is not set to false (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to add the line `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `rotateCertificates`), ` to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), ` or
remove it altogether to use the default value.
If using command line arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
remove --rotate-certificates=false argument from the KUBELET_CERTIFICATE_ARGS
variable.
Based on your system, restart the kubelet service. For example,
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'{.rotateCertificates}' is present OR '{.rotateCertificates}' is not present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "4212-verify-that-the-rotatekubeletservercertificate-argument-is-set-to-true-automated"
    }, `4.2.12 Verify that the RotateKubeletServerCertificate argument is set to true (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` Not Applicable`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Edit the kubelet service file /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
on each worker node and set the below parameter in KUBELET_CERTIFICATE_ARGS variable.
--feature-gates=RotateKubeletServerCertificate=true
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Clusters provisioned by RKE handles certificate rotation directly through RKE.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "4213-ensure-that-the-kubelet-only-makes-use-of-strong-cryptographic-ciphers-automated"
    }, `4.2.13 Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If using a Kubelet config file, edit the file to set `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `TLSCipherSuites`), ` to
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
or to a subset of these values.
If using executable arguments, edit the kubelet service file
/etc/systemd/system/kubelet.service.d/10-kubeadm.conf on each worker node and
set the --tls-cipher-suites parameter as follows, or to a subset of these values.
--tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
Based on your system, restart the kubelet service. For example:
systemctl daemon-reload
systemctl restart kubelet.service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/ps -fC kubelet
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Config:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/bin/sh -c 'if test -e /var/lib/kubelet/config.yaml; then /bin/cat /var/lib/kubelet/config.yaml; fi'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'--tls-cipher-suites' contains valid elements from 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `UID PID PPID C STIME TTY TIME CMD root 5730 5709 4 21:34 ? 00:00:08 kubelet --pod-infra-container-image=rancher/mirrored-pause:3.6 --network-plugin=cni --protect-kernel-defaults=true --fail-swap-on=false --hostname-override=ip-172-31-26-226 --volume-plugin-dir=/var/lib/kubelet/volumeplugins --cni-conf-dir=/etc/cni/net.d --anonymous-auth=false --streaming-connection-idle-timeout=30m --client-ca-file=/etc/kubernetes/ssl/kube-ca.pem --cloud-provider= --cluster-domain=cluster.local --resolv-conf=/etc/resolv.conf --make-iptables-util-chains=true --kubeconfig=/etc/kubernetes/ssl/kubecfg-kube-node.yaml --root-dir=/var/lib/kubelet --read-only-port=0 --v=2 --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256 --feature-gates=RotateKubeletServerCertificate=true --cgroups-per-qos=True --cluster-dns=10.43.0.10 --cni-bin-dir=/opt/cni/bin --address=0.0.0.0 --node-ip=172.31.26.226 --tls-cert-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226.pem --tls-private-key-file=/etc/kubernetes/ssl/kube-kubelet-172-31-26-226-key.pem --event-qps=0 --authentication-token-webhook=true --authorization-mode=Webhook --cgroup-driver=cgroupfs --resolv-conf=/run/systemd/resolve/resolv.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "51-rbac-and-service-accounts"
    }, `5.1 RBAC and Service Accounts`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "511-ensure-that-the-cluster-admin-role-is-only-used-where-required-manual"
    }, `5.1.1 Ensure that the cluster-admin role is only used where required (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Identify all clusterrolebindings to the cluster-admin role. Check if they are used and
if they need this role or if they could use a role with fewer privileges.
Where possible, first bind users to a lower privileged role and then remove the
clusterrolebinding to the cluster-admin role :
kubectl delete clusterrolebinding `, `[name]`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "512-minimize-access-to-secrets-manual"
    }, `5.1.2 Minimize access to secrets (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Where possible, remove get, list and watch access to Secret objects in the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "513-minimize-wildcard-use-in-roles-and-clusterroles-manual"
    }, `5.1.3 Minimize wildcard use in Roles and ClusterRoles (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Where possible replace any use of wildcards in clusterroles and roles with specific
objects or actions.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "514-minimize-access-to-create-pods-manual"
    }, `5.1.4 Minimize access to create pods (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Where possible, remove create access to pod objects in the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "515-ensure-that-default-service-accounts-are-not-actively-used-automated"
    }, `5.1.5 Ensure that default service accounts are not actively used. (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Create explicit service accounts wherever a Kubernetes workload requires specific access
to the Kubernetes API server.
Modify the configuration of each default service account to include this value
automountServiceAccountToken: false`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_for_default_sa.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

count_sa=$(kubectl get serviceaccounts --all-namespaces -o json | jq -r '.items[] | select(.metadata.name=="default") | select((.automountServiceAccountToken == null) or (.automountServiceAccountToken == true))' | jq .metadata.namespace | wc -l)
if [[ \${count_sa} -gt 0 ]]; then
    echo "false"
    exit
fi

for ns in $(kubectl get ns --no-headers -o custom-columns=":metadata.name")
do
    for result in $(kubectl get clusterrolebinding,rolebinding -n $ns -o json | jq -r '.items[] | select((.subjects[].kind=="ServiceAccount" and .subjects[].name=="default") or (.subjects[].kind=="Group" and .subjects[].name=="system:serviceaccounts"))' | jq -r '"\\(.roleRef.kind),\\(.roleRef.name)"')
    do
        read kind name <<<$(IFS=","; echo $result)
        resource_count=$(kubectl get $kind $name -n $ns -o json | jq -r '.rules[] | select(.resources[] != "podsecuritypolicies")' | wc -l)
        if [[ \${resource_count} -gt 0 ]]; then
            echo "false"
            exit
        fi
    done
done


echo "true"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_for_default_sa.sh 
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `Error from server (Forbidden): serviceaccounts is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "serviceaccounts" in API group "" at the cluster scope Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "cattle-fleet-system" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "cattle-impersonation-system" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "cattle-system" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "cis-operator-system" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "default" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "ingress-nginx" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "kube-node-lease" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "kube-public" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "kube-system" Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "clusterrolebindings" in API group "rbac.authorization.k8s.io" at the cluster scope Error from server (Forbidden): rolebindings.rbac.authorization.k8s.io is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "rolebindings" in API group "rbac.authorization.k8s.io" in the namespace "local" true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "516-ensure-that-service-account-tokens-are-only-mounted-where-necessary-manual"
    }, `5.1.6 Ensure that Service Account Tokens are only mounted where necessary (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Modify the definition of pods and service accounts which do not need to mount service
account tokens to disable it.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "517-avoid-use-of-systemmasters-group-manual"
    }, `5.1.7 Avoid use of system:masters group (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Remove the system:masters group from all users in the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "518-limit-use-of-the-bind-impersonate-and-escalate-permissions-in-the-kubernetes-cluster-manual"
    }, `5.1.8 Limit use of the Bind, Impersonate and Escalate permissions in the Kubernetes cluster (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Where possible, remove the impersonate, bind and escalate rights from subjects.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "52-pod-security-standards"
    }, `5.2 Pod Security Standards`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "521-ensure-that-the-cluster-has-at-least-one-active-policy-control-mechanism-in-place-manual"
    }, `5.2.1 Ensure that the cluster has at least one active policy control mechanism in place (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Ensure that either Pod Security Admission or an external policy control system is in place
for every namespace which contains user workloads.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "522-minimize-the-admission-of-privileged-containers-manual"
    }, `5.2.2 Minimize the admission of privileged containers (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of privileged containers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "523-minimize-the-admission-of-containers-wishing-to-share-the-host-process-id-namespace-automated"
    }, `5.2.3 Minimize the admission of containers wishing to share the host process ID namespace (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `hostPID`), ` containers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.hostPID == null) or (.spec.hostPID == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'count' is greater than 0
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `--count=1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "524-minimize-the-admission-of-containers-wishing-to-share-the-host-ipc-namespace-automated"
    }, `5.2.4 Minimize the admission of containers wishing to share the host IPC namespace (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `hostIPC`), ` containers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.hostIPC == null) or (.spec.hostIPC == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'count' is greater than 0
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `--count=1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "525-minimize-the-admission-of-containers-wishing-to-share-the-host-network-namespace-automated"
    }, `5.2.5 Minimize the admission of containers wishing to share the host network namespace (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `hostNetwork`), ` containers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.hostNetwork == null) or (.spec.hostNetwork == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'count' is greater than 0
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `--count=1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "526-minimize-the-admission-of-containers-with-allowprivilegeescalation-automated"
    }, `5.2.6 Minimize the admission of containers with allowPrivilegeEscalation (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `.spec.allowPrivilegeEscalation`), ` set to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `kubectl get psp -o json | jq .items[] | jq -r 'select((.spec.allowPrivilegeEscalation == null) or (.spec.allowPrivilegeEscalation == false))' | jq .metadata.name | wc -l | xargs -I {} echo '--count={}'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'count' is greater than 0
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `--count=1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "527-minimize-the-admission-of-root-containers-automated"
    }, `5.2.7 Minimize the admission of root containers (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Create a policy for each namespace in the cluster, ensuring that either `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `MustRunAsNonRoot`), `
or `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `MustRunAs`), ` with the range of UIDs not including 0, is set.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "528-minimize-the-admission-of-containers-with-the-net_raw-capability-automated"
    }, `5.2.8 Minimize the admission of containers with the NET_RAW capability (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers with the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `NET_RAW`), ` capability.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "529-minimize-the-admission-of-containers-with-added-capabilities-automated"
    }, `5.2.9 Minimize the admission of containers with added capabilities (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Ensure that `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `allowedCapabilities`), ` is not present in policies for the cluster unless
it is set to an empty array.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "5210-minimize-the-admission-of-containers-with-capabilities-assigned-manual"
    }, `5.2.10 Minimize the admission of containers with capabilities assigned (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Review the use of capabilites in applications running on your cluster. Where a namespace
contains applicaions which do not require any Linux capabities to operate consider adding
a PSP which forbids the admission of containers which do not drop all capabilities.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "5211-minimize-the-admission-of-windows-hostprocess-containers-manual"
    }, `5.2.11 Minimize the admission of Windows HostProcess containers (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers that have `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `.securityContext.windowsOptions.hostProcess`), ` set to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "5212-minimize-the-admission-of-hostpath-volumes-manual"
    }, `5.2.12 Minimize the admission of HostPath volumes (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `hostPath`), ` volumes.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "5213-minimize-the-admission-of-containers-which-use-hostports-manual"
    }, `5.2.13 Minimize the admission of containers which use HostPorts (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Add policies to each namespace in the cluster which has user workloads to restrict the
admission of containers which use `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `hostPort`), ` sections.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "53-network-policies-and-cni"
    }, `5.3 Network Policies and CNI`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "531-ensure-that-the-cni-in-use-supports-networkpolicies-manual"
    }, `5.3.1 Ensure that the CNI in use supports NetworkPolicies (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If the CNI plugin in use does not support network policies, consideration should be given to
making use of a different plugin, or finding an alternate mechanism for restricting traffic
in the Kubernetes cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "532-ensure-that-all-namespaces-have-network-policies-defined-automated"
    }, `5.3.2 Ensure that all Namespaces have Network Policies defined (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the documentation and create NetworkPolicy objects as you need them.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_for_network_policies.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

for namespace in $(kubectl get namespaces --all-namespaces -o json | jq -r '.items[].metadata.name'); do
  policy_count=$(kubectl get networkpolicy -n \${namespace} -o json | jq '.items | length')
  if [[ \${policy_count} -eq 0 ]]; then
    echo "false"
    exit
  fi
done

echo "true"

`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_for_network_policies.sh 
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is present
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "54-secrets-management"
    }, `5.4 Secrets Management`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "541-prefer-using-secrets-as-files-over-secrets-as-environment-variables-manual"
    }, `5.4.1 Prefer using Secrets as files over Secrets as environment variables (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
If possible, rewrite application code to read Secrets from mounted secret files, rather than
from environment variables.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "542-consider-external-secret-storage-manual"
    }, `5.4.2 Consider external secret storage (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Refer to the Secrets management options offered by your cloud provider or a third-party
secrets management solution.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "55-extensible-admission-control"
    }, `5.5 Extensible Admission Control`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "551-configure-image-provenance-using-imagepolicywebhook-admission-controller-manual"
    }, `5.5.1 Configure Image Provenance using ImagePolicyWebhook admission controller (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and setup image provenance.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "57-general-policies"
    }, `5.7 General Policies`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "571-create-administrative-boundaries-between-resources-using-namespaces-manual"
    }, `5.7.1 Create administrative boundaries between resources using namespaces (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the documentation and create namespaces for objects in your deployment as you need
them.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "572-ensure-that-the-seccomp-profile-is-set-to-dockerdefault-in-your-pod-definitions-manual"
    }, `5.7.2 Ensure that the seccomp profile is set to docker/default in your Pod definitions (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Use `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `securityContext`), ` to enable the docker/default seccomp profile in your pod definitions.
An example is as below:
securityContext:
seccompProfile:
type: RuntimeDefault`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "573-apply-securitycontext-to-your-pods-and-containers-manual"
    }, `5.7.3 Apply SecurityContext to your Pods and Containers (Manual)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` warn`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Follow the Kubernetes documentation and apply SecurityContexts to your Pods. For a
suggested list of SecurityContexts, you may refer to the CIS Security Benchmark for Docker
Containers.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "574-the-default-namespace-should-not-be-used-automated"
    }, `5.7.4 The default namespace should not be used (Automated)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Result:`), ` pass`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Remediation:`), `
Ensure that namespaces are created to allow for appropriate segregation of Kubernetes
resources and that all new resources are created in a specific namespace.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Script:`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `check_for_default_ns.sh`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `#!/bin/bash

set -eE

handle_error() {
    echo "false"
}

trap 'handle_error' ERR

count=$(kubectl get all -n default -o json | jq .items[] | jq -r 'select((.metadata.name!="kubernetes"))' | jq .metadata.name | wc -l)
if [[ \${count} -gt 0 ]]; then
    echo "false"
    exit
fi

echo "true"


`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Audit Execution:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `./check_for_default_ns.sh 
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Expected Result`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `'true' is equal to 'true'
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Returned Value`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-console"
    }, `Error from server (Forbidden): replicationcontrollers is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "replicationcontrollers" in API group "" in the namespace "default" Error from server (Forbidden): services is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "services" in API group "" in the namespace "default" Error from server (Forbidden): daemonsets.apps is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "daemonsets" in API group "apps" in the namespace "default" Error from server (Forbidden): deployments.apps is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "deployments" in API group "apps" in the namespace "default" Error from server (Forbidden): replicasets.apps is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "replicasets" in API group "apps" in the namespace "default" Error from server (Forbidden): statefulsets.apps is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "statefulsets" in API group "apps" in the namespace "default" Error from server (Forbidden): horizontalpodautoscalers.autoscaling is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "horizontalpodautoscalers" in API group "autoscaling" in the namespace "default" Error from server (Forbidden): cronjobs.batch is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "cronjobs" in API group "batch" in the namespace "default" Error from server (Forbidden): jobs.batch is forbidden: User "system:serviceaccount:cis-operator-system:cis-serviceaccount" cannot list resource "jobs" in API group "batch" in the namespace "default" true
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);