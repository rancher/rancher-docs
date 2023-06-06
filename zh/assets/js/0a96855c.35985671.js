"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[80298],{

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

/***/ 92238:
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
    title: 'Troubleshooting'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",
    "id": "version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",
    "title": "Troubleshooting",
    "description": "canal Pods show READY 2/3",
    "source": "@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting.md",
    "sourceDirName": "getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke",
    "slug": "/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",
    "permalink": "/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting.md",
    "tags": [],
    "version": "2.0-2.4",
    "lastUpdatedAt": 1685654352,
    "formattedLastUpdatedAt": "2023年6月1日",
    "frontMatter": {
        "title": "Troubleshooting"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "2. Install Kubernetes with RKE",
        "permalink": "/zh/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"
    },
    "next": {
        "title": "Initialize Helm: Install the Tiller Service",
        "permalink": "/zh/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"
    }
};
const assets = {};
const toc = [
    {
        value: 'canal Pods show READY 2/3',
        id: 'canal-pods-show-ready-23',
        level: 3
    },
    {
        value: 'nginx-ingress-controller Pods show RESTARTS',
        id: 'nginx-ingress-controller-pods-show-restarts',
        level: 3
    },
    {
        value: 'Failed to set up SSH tunneling for host xxx.xxx.xxx.xxx: Can&#39;t retrieve Docker Info',
        id: 'failed-to-set-up-ssh-tunneling-for-host-xxxxxxxxxxxx-cant-retrieve-docker-info',
        level: 3
    },
    {
        value: 'Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)',
        id: 'failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed',
        level: 4
    },
    {
        value: 'Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: no key found',
        id: 'failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found',
        level: 4
    },
    {
        value: 'Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: ssh: handshake failed: ssh: unable to authenticate, attempted methods none publickey, no supported methods remain',
        id: 'failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain',
        level: 4
    },
    {
        value: 'Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: cannot decode encrypted private keys',
        id: 'failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys',
        level: 4
    },
    {
        value: 'Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?',
        id: 'cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running',
        level: 4
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "canal-pods-show-ready-23"
    }, `canal Pods show READY 2/3`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The most common cause of this issue is port 8472/UDP is not open between the nodes. Check your local firewall, network routing or security groups.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once the network issue is resolved, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `canal`), ` pods should timeout and restart to establish their connections.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "nginx-ingress-controller-pods-show-restarts"
    }, `nginx-ingress-controller Pods show RESTARTS`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The most common cause of this issue is the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `canal`), ` pods have failed to establish the overlay network. See `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#canal-pods-show-ready-23"
    }, `canal Pods show READY `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "a"
    }, `2/3`)), ` for troubleshooting.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "failed-to-set-up-ssh-tunneling-for-host-xxxxxxxxxxxx-cant-retrieve-docker-info"
    }, `Failed to set up SSH tunneling for host `, `[xxx.xxx.xxx.xxx]`, `: Can't retrieve Docker Info`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed"
    }, `Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `User specified to connect with does not have permission to access the Docker socket. This can be checked by logging into the host and running the command `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `docker ps`), `:`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `$ ssh user@server
user@server$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `See `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"
    }, `Manage Docker as a non-root user`), ` how to set this up properly.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `When using RedHat/CentOS as operating system, you cannot use the user `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `root`), ` to connect to the nodes because of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://bugzilla.redhat.com/show_bug.cgi?id=1527565"
    }, `Bugzilla #1527565`), `. You will need to add a separate user and configure it to access the Docker socket. See `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"
    }, `Manage Docker as a non-root user`), ` how to set this up properly.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `SSH server version is not version 6.7 or higher. This is needed for socket forwarding to work, which is used to connect to the Docker socket over SSH. This can be checked using `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `sshd -V`), ` on the host you are connecting to, or using netcat:`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `$ nc xxx.xxx.xxx.xxx 22
SSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found"
    }, `Failed to dial ssh using address `, `[xxx.xxx.xxx.xxx:xx]`, `: Error configuring SSH: ssh: no key found`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The key file specified as `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `ssh_key_path`), ` cannot be accessed. Make sure that you specified the private key file (not the public key, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `.pub`), `), and that the user that is running the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rke`), ` command can access the private key file.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain"
    }, `Failed to dial ssh using address `, `[xxx.xxx.xxx.xxx:xx]`, `: ssh: handshake failed: ssh: unable to authenticate, attempted methods `, `[none publickey]`, `, no supported methods remain`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The key file specified as `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `ssh_key_path`), ` is not correct for accessing the node. Double-check if you specified the correct `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `ssh_key_path`), ` for the node and if you specified the correct user to connect with.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys"
    }, `Failed to dial ssh using address `, `[xxx.xxx.xxx.xxx:xx]`, `: Error configuring SSH: ssh: cannot decode encrypted private keys`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `If you want to use encrypted private keys, you should use `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `ssh-agent`), ` to load your keys with your passphrase. If the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `SSH_AUTH_SOCK`), ` environment variable is found in the environment where the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rke`), ` command is run, it will be used automatically to connect to the node.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running"
    }, `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The node is not reachable on the configured `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `address`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `port`), `.`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);