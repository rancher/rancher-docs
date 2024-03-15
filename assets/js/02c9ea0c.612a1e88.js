"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[39529],{

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

/***/ 45930:
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
    title: 'Cloud Marketplace Pay-as-you-go (PAYG) Integration'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration",
    "id": "version-2.7/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration",
    "title": "Cloud Marketplace Pay-as-you-go (PAYG) Integration",
    "description": "Rancher Prime integrates with the AWS Marketplace and Azure Marketplace as a pay-as-you-go (PAYG) offering. This brings the value of running and managing Kubernetes environments to cloud customers, who benefit from a new pay-monthly pricing model available through their preferred cloud provider's marketplace. This listing will enable you to manage any CNCF-certified Kubernetes distribution in AWS, Azure, on-prem, or at the edge.",
    "source": "@site/versioned_docs/version-2.7/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration.md",
    "sourceDirName": "integrations-in-rancher/cloud-marketplace",
    "slug": "/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration",
    "permalink": "/v2.7/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.7/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration.md",
    "tags": [],
    "version": "2.7",
    "lastUpdatedAt": 1710437107,
    "formattedLastUpdatedAt": "Mar 14, 2024",
    "frontMatter": {
        "title": "Cloud Marketplace Pay-as-you-go (PAYG) Integration"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Supportconfig bundle",
        "permalink": "/v2.7/integrations-in-rancher/cloud-marketplace/supportconfig"
    },
    "next": {
        "title": "AWS Marketplace Pay-as-you-go (PAYG) Integration",
        "permalink": "/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/"
    }
};
const assets = {};
const toc = [
    {
        value: 'Limitations',
        id: 'limitations',
        level: 2
    },
    {
        value: 'How to Use',
        id: 'how-to-use',
        level: 2
    },
    {
        value: 'FAQ',
        id: 'faq',
        level: 2
    },
    {
        value: 'Marketplace Listings',
        id: 'marketplace-listings',
        level: 3
    },
    {
        value: 'What is the Rancher Prime listing on the cloud marketplace?',
        id: 'what-is-the-rancher-prime-listing-on-the-cloud-marketplace',
        level: 4
    },
    {
        value: 'Where do I find the Rancher Prime listings?',
        id: 'where-do-i-find-the-rancher-prime-listings',
        level: 4
    },
    {
        value: 'Why are there two listings? Which one should I use?',
        id: 'why-are-there-two-listings-which-one-should-i-use',
        level: 4
    },
    {
        value: 'Are these listings available in all countries?',
        id: 'are-these-listings-available-in-all-countries',
        level: 4
    },
    {
        value: 'My cloud provider account is in the USA, but I want to deploy Rancher in another region, a region that is in a country where I currently cannot transact Rancher Prime. Is this possible?',
        id: 'my-cloud-provider-account-is-in-the-usa-but-i-want-to-deploy-rancher-in-another-region-a-region-that-is-in-a-country-where-i-currently-cannot-transact-rancher-prime-is-this-possible',
        level: 4
    },
    {
        value: 'Is this listing available in China?',
        id: 'is-this-listing-available-in-china',
        level: 4
    },
    {
        value: 'Can I still deploy Rancher using the &quot;Rancher Setup&quot; listing from the AWS Marketplace?',
        id: 'can-i-still-deploy-rancher-using-the-rancher-setup-listing-from-the-aws-marketplace',
        level: 4
    },
    {
        value: 'Billing',
        id: 'billing',
        level: 3
    },
    {
        value: 'I have an existing Rancher Prime subscription. Can I use this on the cloud?',
        id: 'i-have-an-existing-rancher-prime-subscription-can-i-use-this-on-the-cloud',
        level: 4
    },
    {
        value: 'I have an existing Rancher Subscription purchased via the Rancher Premium Support listing on AWS. Is this transferable to the new model?',
        id: 'i-have-an-existing-rancher-subscription-purchased-via-the-rancher-premium-support-listing-on-aws-is-this-transferable-to-the-new-model',
        level: 4
    },
    {
        value: 'I have an existing deployment covered by a Rancher subscription; can I use this new marketplace listing for new deployments?',
        id: 'i-have-an-existing-deployment-covered-by-a-rancher-subscription-can-i-use-this-new-marketplace-listing-for-new-deployments',
        level: 4
    },
    {
        value: 'Can you tell me more about how the billing for Rancher Prime works for the cloud marketplace?',
        id: 'can-you-tell-me-more-about-how-the-billing-for-rancher-prime-works-for-the-cloud-marketplace',
        level: 4
    },
    {
        value: 'What are the pricing tiers?',
        id: 'what-are-the-pricing-tiers',
        level: 4
    },
    {
        value: 'Is there a way to try Rancher before purchasing?',
        id: 'is-there-a-way-to-try-rancher-before-purchasing',
        level: 4
    },
    {
        value: 'How does SUSE calculate the average number of managed nodes to bill for?',
        id: 'how-does-suse-calculate-the-average-number-of-managed-nodes-to-bill-for',
        level: 4
    },
    {
        value: 'Are special commercial terms available?',
        id: 'are-special-commercial-terms-available',
        level: 4
    },
    {
        value: 'Can my spend on Rancher Prime count towards my cloud provider discount program?',
        id: 'can-my-spend-on-rancher-prime-count-towards-my-cloud-provider-discount-program',
        level: 4
    },
    {
        value: 'How do I purchase Rancher for additional nodes?',
        id: 'how-do-i-purchase-rancher-for-additional-nodes',
        level: 4
    },
    {
        value: 'Is this an annual commitment, or does it auto-renew?',
        id: 'is-this-an-annual-commitment-or-does-it-auto-renew',
        level: 4
    },
    {
        value: 'Technical (Billing)',
        id: 'technical-billing',
        level: 3
    },
    {
        value: 'Do I need a Kubernetes cluster running in the cloud to install Rancher and be billed via the cloud marketplace?',
        id: 'do-i-need-a-kubernetes-cluster-running-in-the-cloud-to-install-rancher-and-be-billed-via-the-cloud-marketplace',
        level: 4
    },
    {
        value: 'Which Kubernetes distributions can the marketplace listings be deployed on?',
        id: 'which-kubernetes-distributions-can-the-marketplace-listings-be-deployed-on',
        level: 4
    },
    {
        value: 'What is the deployment mechanism?',
        id: 'what-is-the-deployment-mechanism',
        level: 4
    },
    {
        value: 'What is the easiest way to get started?',
        id: 'what-is-the-easiest-way-to-get-started',
        level: 4
    },
    {
        value: 'What version of Rancher is installed when using a marketplace listing?',
        id: 'what-version-of-rancher-is-installed-when-using-a-marketplace-listing',
        level: 4
    },
    {
        value: 'I need a prior version of Rancher, can I still use a marketplace listing?',
        id: 'i-need-a-prior-version-of-rancher-can-i-still-use-a-marketplace-listing',
        level: 4
    },
    {
        value: 'How often are the listings updated (including the version of Rancher, etc.)?',
        id: 'how-often-are-the-listings-updated-including-the-version-of-rancher-etc',
        level: 4
    },
    {
        value: 'I have many Kubernetes clusters across multiple cloud accounts, does the Rancher Prime billing still work and enable tiered pricing?',
        id: 'i-have-many-kubernetes-clusters-across-multiple-cloud-accounts-does-the-rancher-prime-billing-still-work-and-enable-tiered-pricing',
        level: 4
    },
    {
        value: 'I have multiple independent clusters, each running a separate installation of the marketplace listing for Rancher Prime. How is this billed?',
        id: 'i-have-multiple-independent-clusters-each-running-a-separate-installation-of-the-marketplace-listing-for-rancher-prime-how-is-this-billed',
        level: 4
    },
    {
        value: 'I have purchased multiple SUSE products from the cloud marketplace (e.g., SUSE Manager, NeuVector Prime and now Rancher Prime). Does the cloud marketplace billing method still apply?',
        id: 'i-have-purchased-multiple-suse-products-from-the-cloud-marketplace-eg-suse-manager-neuvector-prime-and-now-rancher-prime-does-the-cloud-marketplace-billing-method-still-apply',
        level: 4
    },
    {
        value: 'I already have an existing cluster, with Rancher deployed. Can I just install the marketplace version and have support billed via the cloud provider marketplace?',
        id: 'i-already-have-an-existing-cluster-with-rancher-deployed-can-i-just-install-the-marketplace-version-and-have-support-billed-via-the-cloud-provider-marketplace',
        level: 4
    },
    {
        value: 'Technical (Product)',
        id: 'technical-product',
        level: 3
    },
    {
        value: 'How do I contact support?',
        id: 'how-do-i-contact-support',
        level: 4
    },
    {
        value: 'What are the resource requirements for installing Rancher on AKS or EKS?',
        id: 'what-are-the-resource-requirements-for-installing-rancher-on-aks-or-eks',
        level: 4
    },
    {
        value: 'Is there any difference between Rancher Prime from the cloud marketplace and the versions I can run in my own data center?',
        id: 'is-there-any-difference-between-rancher-prime-from-the-cloud-marketplace-and-the-versions-i-can-run-in-my-own-data-center',
        level: 4
    },
    {
        value: 'Does the primary cluster (responsible for billing) need to run 24/7?',
        id: 'does-the-primary-cluster-responsible-for-billing-need-to-run-247',
        level: 4
    },
    {
        value: 'What if the primary cluster responsible for billing is unable to connect to the cloud provider billing framework?',
        id: 'what-if-the-primary-cluster-responsible-for-billing-is-unable-to-connect-to-the-cloud-provider-billing-framework',
        level: 4
    },
    {
        value: 'My primary cluster has been offline. What will happen with billing when reconnected?',
        id: 'my-primary-cluster-has-been-offline-what-will-happen-with-billing-when-reconnected',
        level: 4
    },
    {
        value: 'Can the managed worker nodes reside on premises, at the edge or even on another cloud?',
        id: 'can-the-managed-worker-nodes-reside-on-premises-at-the-edge-or-even-on-another-cloud',
        level: 4
    },
    {
        value: 'How do I get fixes and updates for Rancher?',
        id: 'how-do-i-get-fixes-and-updates-for-rancher',
        level: 4
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Tabs = makeShortcode("Tabs");
const TabItem = makeShortcode("TabItem");
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
        href: "https://ranchermanager.docs.rancher.com/v2.7/integrations-in-rancher/cloud-marketplace/cloud-marketplace-payg-integration"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher Prime integrates with the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://aws.amazon.com/marketplace"
    }, `AWS Marketplace`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://azuremarketplace.microsoft.com/"
    }, `Azure Marketplace`), ` as a pay-as-you-go (PAYG) offering. This brings the value of running and managing Kubernetes environments to cloud customers, who benefit from a new pay-monthly pricing model available through their preferred cloud provider's marketplace. This listing will enable you to manage any CNCF-certified Kubernetes distribution in AWS, Azure, on-prem, or at the edge.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "limitations"
    }, `Limitations`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Currently, you must be running Rancher v2.7.9. When you deploy a supported PAYG version, you can update to newer versions of Rancher when the listing is updated.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "how-to-use"
    }, `How to Use`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "AWS",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Complete the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/prerequisites"
    }, `prerequisite steps`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/installing-rancher-prime"
    }, `Install the Rancher Prime PAYG offering on the AWS Marketplace`), `.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Azure",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Complete the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/prerequisites"
    }, `prerequisite steps`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/installing-rancher-prime"
    }, `Install the Rancher Prime PAYG offering on the Azure Marketplace`), `.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "faq"
    }, `FAQ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following is a list of frequently asked questions.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "marketplace-listings"
    }, `Marketplace Listings`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-rancher-prime-listing-on-the-cloud-marketplace"
    }, `What is the Rancher Prime listing on the cloud marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `By selecting the Rancher Prime listing from the AWS or Azure Marketplace, you can deploy Rancher to your Kubernetes environment with the advantage of having monthly billing via the cloud.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "where-do-i-find-the-rancher-prime-listings"
    }, `Where do I find the Rancher Prime listings?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There are two listings in each respective cloud marketplace. They are:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `AWS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://aws.amazon.com/marketplace/pp/prodview-f2bvszurj2p2c"
    }, `Rancher Prime`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://aws.amazon.com/marketplace/pp/prodview-ocgjwd5c2aj5i"
    }, `Rancher Prime (EMEA Orders Only)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Azure`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suse.rancher-prime-llc/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suse.rancher-prime-llcpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%221dafcf16-920e-46ea-80c9-dc85c6bd3a17%22%7D/searchTelemetryId/c2300fb7-ba7b-462a-ba57-a37cb5e2822d"
    }, `Rancher Prime with 24x7 Support`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suseirelandltd1692213356027.rancher-prime-ltd/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suseirelandltd1692213356027.rancher-prime-ltdpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%22c6b1d79a-b577-47b0-90e5-41e6c49688ab%22%7D/searchTelemetryId/1793144d-e0d9-466e-8e36-dfeddc73163b"
    }, `Rancher Prime with 24x7 Support (EMEA Orders Only)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "why-are-there-two-listings-which-one-should-i-use"
    }, `Why are there two listings? Which one should I use?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `We have two listings for Rancher Prime, a EU/EMEA version and a non-EU, non-UK version, due to different regulations in different locations. Whichever listing you choose, the images and support offered are identical. You should pick the listing for the location of your cloud provider account.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "are-these-listings-available-in-all-countries"
    }, `Are these listings available in all countries?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `No. The PAYG listing isn't available in all countries.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Your billing country is based on the cloud provider Account ID for the deployment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Please refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://documentation.suse.com/sle-public-cloud/all/html/public-cloud/countrylist.html"
    }, `Geographical availability`), ` for a list of countries that can and cannot access Rancher Prime via the AWS and Azure cloud marketplaces.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "my-cloud-provider-account-is-in-the-usa-but-i-want-to-deploy-rancher-in-another-region-a-region-that-is-in-a-country-where-i-currently-cannot-transact-rancher-prime-is-this-possible"
    }, `My cloud provider account is in the USA, but I want to deploy Rancher in another region, a region that is in a country where I currently cannot transact Rancher Prime. Is this possible?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. As long as your account is billed to one of the allowed countries, it is possible to deploy Rancher in any region.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-this-listing-available-in-china"
    }, `Is this listing available in China?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `While it is not possible to transact or bill Rancher Prime in China, it is possible to deploy into regions in China.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "can-i-still-deploy-rancher-using-the-rancher-setup-listing-from-the-aws-marketplace"
    }, `Can I still deploy Rancher using the "Rancher Setup" listing from the AWS Marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The Rancher Setup listing is no longer available via AWS Marketplace. Customers should deploy an EKS Cluster to host Rancher. Follow the steps in this `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"
    }, `guide`), ` except for the Rancher installation. The Rancher product installation should be carried out as per `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/installing-rancher-prime"
    }, `installing the Rancher Prime PAYG offering on Amazon's AWS Marketplace`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "billing"
    }, `Billing`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-an-existing-rancher-prime-subscription-can-i-use-this-on-the-cloud"
    }, `I have an existing Rancher Prime subscription. Can I use this on the cloud?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `BYOS (Bring Your Own Subscription) Rancher deployments are supported on the cloud; however, you won't be billed for your BYOS via the cloud marketplace. Once the existing subscription term ends, you can purchase Rancher Prime via the cloud marketplace and reconfigure your cluster to support monthly billing via the cloud.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-an-existing-rancher-subscription-purchased-via-the-rancher-premium-support-listing-on-aws-is-this-transferable-to-the-new-model"
    }, `I have an existing Rancher Subscription purchased via the Rancher Premium Support listing on AWS. Is this transferable to the new model?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `No. A new deployment of Rancher Prime is required to benefit from the new monthly billing model.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-an-existing-deployment-covered-by-a-rancher-subscription-can-i-use-this-new-marketplace-listing-for-new-deployments"
    }, `I have an existing deployment covered by a Rancher subscription; can I use this new marketplace listing for new deployments?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. The listing works independently of your existing subscriptions. Please remember that support processes may be different for deployments using your existing subscription and deployments billed via the cloud marketplace.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "can-you-tell-me-more-about-how-the-billing-for-rancher-prime-works-for-the-cloud-marketplace"
    }, `Can you tell me more about how the billing for Rancher Prime works for the cloud marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When purchasing Rancher Prime via the cloud marketplace, the billing is as follows:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Billing is monthly and handled via the marketplace.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Managed nodes are counted hourly when Rancher is active and added to a usage total.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `An average node count is calculated for the month.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `There is a monthly usage charge for each node in the average node count.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `The monthly usage charge depends on the number of nodes in use.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `There is a 5-node minimum; if the average node count is less than 5 nodes, the charge will be for 5 nodes.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-are-the-pricing-tiers"
    }, `What are the pricing tiers?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Pricing tiers are based on the number of nodes which Rancher is managing. Details of the tiers are below. Please check the respective listing for further price information.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Tier`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Nodes (from)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Nodes (to)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `1`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `5`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `15`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `2`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `50`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `3`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `51`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `100`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `4`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `101`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `250`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `5`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `251`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `1000`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `6`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `1001`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    })))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-there-a-way-to-try-rancher-before-purchasing"
    }, `Is there a way to try Rancher before purchasing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you use the Rancher Prime listing in a cloud provider marketplace, billing commences from the time of deployment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher can be deployed manually using the standard documentation and repositories. When you're ready to benefit from a supported platform and have this billed via the marketplace, follow the available `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"
    }, `documentation`), ` to deploy Rancher Prime from the marketplace and migrate.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-does-suse-calculate-the-average-number-of-managed-nodes-to-bill-for"
    }, `How does SUSE calculate the average number of managed nodes to bill for?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The average node count is calculated by adding together the number of managed nodes (counted hourly), and dividing this sum by the number of hours Rancher has been active in the billing cycle.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Here are three examples of how the average node count is calculated. Check the following table for details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `In our example month, we are using 730 hours; this may differ depending on the number of days in the month and the billing cycle.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Static usage:`), ` Using Rancher to manage 10 nodes, for 1 month (730 hours) with no additional nodes added in the month.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Bursting Model:`), ` Using Rancher to manage 10 nodes for 3 weeks (562 hours) in the month, bursting to 30 nodes for 1 week (168 hours).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Transient cluster:`), ` A temporary deployment of Rancher on 20 nodes for 2 weeks (336 hours).`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Hours Active (Hours Rancher is active in the month)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Nodes (Managed Nodes counted at each check-in)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Usage total (Sum of nodes reported at each check-in)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Average Node Count (Usage total / hours active)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Note`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Static Usage`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `730`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `7300`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10 @ Tier 1`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Bursting Model`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `730`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10 (562 hrs), 30 (168 hrs)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `10660`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `15`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `15 @ Tier 1 (rounded from 14.6)`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "td"
    }, `Transient Cluster`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `336`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `20`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `6720`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `20`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, `20 @ Tier 2`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "are-special-commercial-terms-available"
    }, `Are special commercial terms available?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Depending on the deployment, and the cloud provider, securing special commercial terms (e.g., an annual subscription) may be possible. For example, in AWS this is handled via an AWS Private offer. Please contact SUSE for more information.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "can-my-spend-on-rancher-prime-count-towards-my-cloud-provider-discount-program"
    }, `Can my spend on Rancher Prime count towards my cloud provider discount program?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. This should be possible through the:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Azure MACC Program`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `AWS Enterprise Discount Program`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Please contact your AWS or Azure sales team for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-do-i-purchase-rancher-for-additional-nodes"
    }, `How do I purchase Rancher for additional nodes?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once Rancher is deployed from the listing on the cloud marketplace and billing is active, there is no need to make a specific purchase for additional nodes. Billing is dynamic and based on the number of nodes Rancher is managing. Just deploy or onboard additional clusters to Rancher as needed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-this-an-annual-commitment-or-does-it-auto-renew"
    }, `Is this an annual commitment, or does it auto-renew?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `By default, the Rancher Prime listing in the cloud is billed on a monthly cycle, based on usage. Billing is ongoing for as long as Rancher is deployed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "technical-billing"
    }, `Technical (Billing)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "do-i-need-a-kubernetes-cluster-running-in-the-cloud-to-install-rancher-and-be-billed-via-the-cloud-marketplace"
    }, `Do I need a Kubernetes cluster running in the cloud to install Rancher and be billed via the cloud marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. To benefit from monthly billing via the cloud marketplace, the primary Rancher cluster must be an on the cloud provider's Kubernetes service.  In AWS an EKS cluster is required, while in Azure an AKS cluster is required.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "which-kubernetes-distributions-can-the-marketplace-listings-be-deployed-on"
    }, `Which Kubernetes distributions can the marketplace listings be deployed on?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The cloud marketplace listings for Rancher Prime must be deployed on Amazon EKS or Azure AKS. Downstream clusters and  managed worker nodes can run on any CNCF-compliant Kubernetes platform, such as AKS, EKS, EKS-A, or Rancher Kubernetes Engine (RKE).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-deployment-mechanism"
    }, `What is the deployment mechanism?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The cloud marketplace listings for Rancher Prime are deployed using Helm.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-easiest-way-to-get-started"
    }, `What is the easiest way to get started?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Deploy a listing for Rancher Prime to an existing EKS or AKS cluster. Follow the instructions in the usage section. a Helm chart takes care of the installation and setup for billing.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-version-of-rancher-is-installed-when-using-a-marketplace-listing"
    }, `What version of Rancher is installed when using a marketplace listing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Each marketplace listing for Rancher Prime is tied to a specific version of Rancher, typically the latest version available at the time of the listing update. Please check the listing for further information.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-need-a-prior-version-of-rancher-can-i-still-use-a-marketplace-listing"
    }, `I need a prior version of Rancher, can I still use a marketplace listing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `No. There is no choice over the Rancher version when deploying Rancher through a cloud marketplace listing. If a prior version of Rancher is required, it must be installed manually using the standard documentation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `Billing through the cloud provider marketplace may not be supported with previous versions.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-often-are-the-listings-updated-including-the-version-of-rancher-etc"
    }, `How often are the listings updated (including the version of Rancher, etc.)?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Marketplace listings are tied to a specific version of Rancher, usually the latest version available at the time of listing. Typically, listings are updated quarterly, or more frequently if there are security issues.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-many-kubernetes-clusters-across-multiple-cloud-accounts-does-the-rancher-prime-billing-still-work-and-enable-tiered-pricing"
    }, `I have many Kubernetes clusters across multiple cloud accounts, does the Rancher Prime billing still work and enable tiered pricing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. Downstream clusters managed by Rancher can be deployed across single or multiple cloud accounts, on-premises, or even in other public clouds. Downstream nodes report up to the primary Rancher deployment. Tiered pricing is enabled and billing is routed to the cloud account in which the primary cluster is running.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-multiple-independent-clusters-each-running-a-separate-installation-of-the-marketplace-listing-for-rancher-prime-how-is-this-billed"
    }, `I have multiple independent clusters, each running a separate installation of the marketplace listing for Rancher Prime. How is this billed?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `As the Rancher Prime deployments are independent, each deployment is billed separately from the others within the cloud marketplace. It is not possible to benefit from tiered pricing. Please contact SUSE.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-purchased-multiple-suse-products-from-the-cloud-marketplace-eg-suse-manager-neuvector-prime-and-now-rancher-prime-does-the-cloud-marketplace-billing-method-still-apply"
    }, `I have purchased multiple SUSE products from the cloud marketplace (e.g., SUSE Manager, NeuVector Prime and now Rancher Prime). Does the cloud marketplace billing method still apply?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. Since the billing mechanism of each deployment is independent, each product will be billed separately via the cloud marketplace.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-already-have-an-existing-cluster-with-rancher-deployed-can-i-just-install-the-marketplace-version-and-have-support-billed-via-the-cloud-provider-marketplace"
    }, `I already have an existing cluster, with Rancher deployed. Can I just install the marketplace version and have support billed via the cloud provider marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In order to benefit from monthly billing via the marketplace, the primary Rancher cluster needs to be deployed from the listing. It is then possible to migrate the existing Rancher configuration to the new deployment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Please follow the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"
    }, `documentation`), ` and be sure to back up the existing Rancher configuration.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "technical-product"
    }, `Technical (Product)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-do-i-contact-support"
    }, `How do I contact support?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It is very simple to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://scc.suse.com/cloudsupport"
    }, `open a support case`), ` with SUSE for Rancher Prime. Create a support config via the Rancher UI and upload the output to the SUSE Customer Center. The support config bundle can be exported from the Rancher console using the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Get Support`), ` button at the bottom of the page. For deployments where Rancher is managing multiple downstream clusters, export the support config bundle only from the primary cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If the billing mechanism on the primary cluster is active, a support case will be opened. Further details can be found in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/supportconfig"
    }, `documentation`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-are-the-resource-requirements-for-installing-rancher-on-aks-or-eks"
    }, `What are the resource requirements for installing Rancher on AKS or EKS?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Please check the documentation for best practices.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-there-any-difference-between-rancher-prime-from-the-cloud-marketplace-and-the-versions-i-can-run-in-my-own-data-center"
    }, `Is there any difference between Rancher Prime from the cloud marketplace and the versions I can run in my own data center?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher Prime available in the cloud marketplace is the same product, with the same functionality that you would run on-premises or with a manual installation. The only difference between deploying manually and deploying via a marketplace listing is the billing route.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "does-the-primary-cluster-responsible-for-billing-need-to-run-247"
    }, `Does the primary cluster (responsible for billing) need to run 24/7?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To ensure continuity with support, the primary Rancher cluster should always remains active.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-if-the-primary-cluster-responsible-for-billing-is-unable-to-connect-to-the-cloud-provider-billing-framework"
    }, `What if the primary cluster responsible for billing is unable to connect to the cloud provider billing framework?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There may be multiple reasons why the primary cluster is unable to connect to the billing framework, but it is the customer’s responsibility to ensure that the primary cluster is active and connected. When the cluster is not connected to the billing framework, it is not possible to raise a support request.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "my-primary-cluster-has-been-offline-what-will-happen-with-billing-when-reconnected"
    }, `My primary cluster has been offline. What will happen with billing when reconnected?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If the primary cluster is offline or disconnected from the cloud provider billing framework for a period of time, when it reconnects, the stored usage data will be uploaded and appear on your next marketplace bill.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Depending on when in the month the primary cluster gets reconnected you may have several months of usage on your next billing cycle.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "can-the-managed-worker-nodes-reside-on-premises-at-the-edge-or-even-on-another-cloud"
    }, `Can the managed worker nodes reside on premises, at the edge or even on another cloud?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. Managed nodes (managed clusters) can run anywhere. SUSE Rancher will count the total number of nodes managed regardless of where they are deployed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-do-i-get-fixes-and-updates-for-rancher"
    }, `How do I get fixes and updates for Rancher?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To update to the latest supported version of the Rancher Prime PAYG offering, please see:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/upgrading-rancher-payg-cluster"
    }, `Upgrading Rancher Prime PAYG cluster in AWS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/upgrading-rancher-payg-cluster"
    }, `Upgrading Rancher Prime PAYG cluster in Azure`))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);