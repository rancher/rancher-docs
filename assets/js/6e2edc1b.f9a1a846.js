"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[12495],{

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

/***/ 18271:
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
    title: 'Azure Marketplace Pay-as-you-go (PAYG) Integration'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/azure-marketplace-payg-integration",
    "id": "version-2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/azure-marketplace-payg-integration",
    "title": "Azure Marketplace Pay-as-you-go (PAYG) Integration",
    "description": "Overview",
    "source": "@site/versioned_docs/version-2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/azure-marketplace-payg-integration.md",
    "sourceDirName": "integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration",
    "slug": "/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/",
    "permalink": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/azure-marketplace-payg-integration.md",
    "tags": [],
    "version": "2.7",
    "lastUpdatedAt": 1706552981,
    "formattedLastUpdatedAt": "Jan 29, 2024",
    "frontMatter": {
        "title": "Azure Marketplace Pay-as-you-go (PAYG) Integration"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Common Issues for Rancher Prime PAYG on AWS",
        "permalink": "/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration/common-issues"
    },
    "next": {
        "title": "Prerequisites",
        "permalink": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/prerequisites"
    }
};
const assets = {};
const toc = [
    {
        value: 'Overview',
        id: 'overview',
        level: 2
    },
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
        value: 'Marketplace Listing',
        id: 'marketplace-listing',
        level: 3
    },
    {
        value: 'What is the Rancher Prime listing on the Azure Marketplace?',
        id: 'what-is-the-rancher-prime-listing-on-the-azure-marketplace',
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
        value: 'My Azure account is in the USA, but I want to deploy Rancher in another Azure region, a region that is in a country where I currently cannot transact Rancher Prime. Is this possible?',
        id: 'my-azure-account-is-in-the-usa-but-i-want-to-deploy-rancher-in-another-azure-region-a-region-that-is-in-a-country-where-i-currently-cannot-transact-rancher-prime-is-this-possible',
        level: 4
    },
    {
        value: 'Is this listing available in China?',
        id: 'is-this-listing-available-in-china',
        level: 4
    },
    {
        value: 'Billing',
        id: 'billing',
        level: 3
    },
    {
        value: 'I have an existing Rancher Prime subscription; can I use this on Azure?',
        id: 'i-have-an-existing-rancher-prime-subscription-can-i-use-this-on-azure',
        level: 4
    },
    {
        value: 'I have an existing deployment covered by a Rancher subscription; can I use this new listing in the Azure Marketplace for new deployments?',
        id: 'i-have-an-existing-deployment-covered-by-a-rancher-subscription-can-i-use-this-new-listing-in-the-azure-marketplace-for-new-deployments',
        level: 4
    },
    {
        value: 'Tell me more about how the billing for Rancher Prime works via Azure?',
        id: 'tell-me-more-about-how-the-billing-for-rancher-prime-works-via-azure',
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
        value: 'How does SUSE calculate the ‘average number of managed nodes’ to bill for?',
        id: 'how-does-suse-calculate-the-average-number-of-managed-nodes-to-bill-for',
        level: 4
    },
    {
        value: 'Are special commercial terms available?',
        id: 'are-special-commercial-terms-available',
        level: 4
    },
    {
        value: 'Can my spend on Rancher Prime count towards my MACC Program?',
        id: 'can-my-spend-on-rancher-prime-count-towards-my-macc-program',
        level: 4
    },
    {
        value: 'How do I purchase Rancher for additional nodes?',
        id: 'how-do-i-purchase-rancher-for-additional-nodes',
        level: 4
    },
    {
        value: 'Is this an annual commitment, will it auto-renew?',
        id: 'is-this-an-annual-commitment-will-it-auto-renew',
        level: 4
    },
    {
        value: 'Technical',
        id: 'technical',
        level: 3
    },
    {
        value: 'Do I need a Kubernetes cluster running in Azure to install Rancher and be billed via the Azure Marketplace?',
        id: 'do-i-need-a-kubernetes-cluster-running-in-azure-to-install-rancher-and-be-billed-via-the-azure-marketplace',
        level: 4
    },
    {
        value: 'Which Kubernetes distributions can the Rancher Prime Azure Marketplace listing be deployed on?',
        id: 'which-kubernetes-distributions-can-the-rancher-prime-azure-marketplace-listing-be-deployed-on',
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
        value: 'What is the minimum version of Rancher required to support Azure Marketplace billing?',
        id: 'what-is-the-minimum-version-of-rancher-required-to-support-azure-marketplace-billing',
        level: 4
    },
    {
        value: 'What version of Rancher is installed when using the marketplace listing?',
        id: 'what-version-of-rancher-is-installed-when-using-the-marketplace-listing',
        level: 4
    },
    {
        value: 'I need a prior version of Rancher; can I still use the listing?',
        id: 'i-need-a-prior-version-of-rancher-can-i-still-use-the-listing',
        level: 4
    },
    {
        value: 'How often is the listing updated (including the version of Rancher, etc.)?',
        id: 'how-often-is-the-listing-updated-including-the-version-of-rancher-etc',
        level: 4
    },
    {
        value: 'I have many Kubernetes clusters across multiple Azure accounts; does the Rancher Prime billing still work and enable tiered pricing?',
        id: 'i-have-many-kubernetes-clusters-across-multiple-azure-accounts-does-the-rancher-prime-billing-still-work-and-enable-tiered-pricing',
        level: 4
    },
    {
        value: 'I have multiple independent clusters, each running a separate installation of the Rancher Prime Azure Marketplace listing. How is this billed?',
        id: 'i-have-multiple-independent-clusters-each-running-a-separate-installation-of-the-rancher-prime-azure-marketplace-listing-how-is-this-billed',
        level: 4
    },
    {
        value: 'How can I benefit from tiered pricing across all Rancher deployments?',
        id: 'how-can-i-benefit-from-tiered-pricing-across-all-rancher-deployments',
        level: 4
    },
    {
        value: 'I have purchased multiple SUSE products from the Azure Marketplace (e.g., SUSE Manager, NeuVector Prime, Rancher Prime). Does the Azure Marketplace billing method still work?',
        id: 'i-have-purchased-multiple-suse-products-from-the-azure-marketplace-eg-suse-manager-neuvector-prime-rancher-prime-does-the-azure-marketplace-billing-method-still-work',
        level: 4
    },
    {
        value: 'I already have an existing AKS cluster in place and want to add Rancher Prime to it and be billed through the Azure Marketplace. Is this possible?',
        id: 'i-already-have-an-existing-aks-cluster-in-place-and-want-to-add-rancher-prime-to-it-and-be-billed-through-the-azure-marketplace-is-this-possible',
        level: 4
    },
    {
        value: 'I already deployed Rancher to an existing AKS cluster. Can I just install the marketplace version to enable Azure Marketplace billing?',
        id: 'i-already-deployed-rancher-to-an-existing-aks-cluster-can-i-just-install-the-marketplace-version-to-enable-azure-marketplace-billing',
        level: 4
    },
    {
        value: 'Technical (Product)',
        id: 'technical-product',
        level: 3
    },
    {
        value: 'How do I get support?',
        id: 'how-do-i-get-support',
        level: 4
    },
    {
        value: 'What are the resource requirements for installing Rancher on AKS?',
        id: 'what-are-the-resource-requirements-for-installing-rancher-on-aks',
        level: 4
    },
    {
        value: 'Is there any difference between Rancher Prime from Azure Marketplace and the versions I can run in my own data center?',
        id: 'is-there-any-difference-between-rancher-prime-from-azure-marketplace-and-the-versions-i-can-run-in-my-own-data-center',
        level: 4
    },
    {
        value: 'Does the primary cluster (responsible for billing) need to run 24/7?',
        id: 'does-the-primary-cluster-responsible-for-billing-need-to-run-247',
        level: 4
    },
    {
        value: 'What if the primary cluster responsible for billing is unable to connect to the Azure billing framework?',
        id: 'what-if-the-primary-cluster-responsible-for-billing-is-unable-to-connect-to-the-azure-billing-framework',
        level: 4
    },
    {
        value: 'My primary cluster has been offline. What will happen with billing when reconnected?',
        id: 'my-primary-cluster-has-been-offline-what-will-happen-with-billing-when-reconnected',
        level: 4
    },
    {
        value: 'How do I get fixes and updates for Rancher?',
        id: 'how-do-i-get-fixes-and-updates-for-rancher',
        level: 4
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
        href: "https://ranchermanager.docs.rancher.com/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/azure-marketplace-payg-integration"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "overview"
    }, `Overview`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher Prime integrates with the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://azuremarketplace.microsoft.com"
    }, `Azure Marketplace`), ` as a pay-as-you-go (PAYG) offering. This brings the value of running and managing Kubernetes environments to Azure customers, benefiting from a new pay-monthly pricing model available through the Azure Marketplace. This listing will enable you to manage any CNCF-certified Kubernetes distribution in Azure, on-prem, or at the edge. To learn more, see our non-EMEMA and EMEA Azure Marketplace offerings for Rancher Prime:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suse.rancher-prime-llc/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suse.rancher-prime-llcpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%221dafcf16-920e-46ea-80c9-dc85c6bd3a17%22%7D/searchTelemetryId/c2300fb7-ba7b-462a-ba57-a37cb5e2822d"
    }, `Rancher Prime with 24x7 Support`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/id/suseirelandltd1692213356027.rancher-prime-ltd/selectionMode~/false/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/selectedMenuId/home/launchingContext~/%7B%22galleryItemId%22%3A%22suseirelandltd1692213356027.rancher-prime-ltdpay-as-you-go%22%2C%22source%22%3A%5B%22GalleryFeaturedMenuItemPart%22%2C%22VirtualizedTileDetails%22%5D%2C%22menuItemId%22%3A%22home%22%2C%22subMenuItemId%22%3A%22Search%20results%22%2C%22telemetryId%22%3A%22c6b1d79a-b577-47b0-90e5-41e6c49688ab%22%7D/searchTelemetryId/1793144d-e0d9-466e-8e36-dfeddc73163b"
    }, `Rancher Prime with 24x7 Support (EMEA Orders Only)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "limitations"
    }, `Limitations`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Currently, you must be running Rancher v2.7.9. When you deploy a supported PAYG version, you can update to newer versions of Rancher when the listing is updated.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "how-to-use"
    }, `How to Use`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Complete the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/prerequisites"
    }, `prerequisite steps`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/installing-rancher-prime"
    }, `Install the Rancher Prime PAYG offering on the Azure Marketplace`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "faq"
    }, `FAQ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following is a list of frequently asked questions.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "marketplace-listing"
    }, `Marketplace Listing`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-rancher-prime-listing-on-the-azure-marketplace"
    }, `What is the Rancher Prime listing on the Azure Marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `By selecting the Rancher Prime listing in the Azure Marketplace, customers can deploy Rancher to their Microsoft Azure Kubernetes Service (AKS) cluster environment to manage any downstream CNCF-certified Kubernetes distribution with the advantage of having monthly billing for Rancher Prime via Microsoft Azure.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Where do I find the Rancher Prime listings?`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There are two listings in the Azure Marketplace. They are:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
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
    }, `Why are there two listings? Which one should I use?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There are two listings for Rancher Prime to accommodate Microsoft Azure billing regions. You should pick the listing that reflects where your Azure account gets billed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "are-these-listings-available-in-all-countries"
    }, `Are these listings available in all countries?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `No. Due to billing limitations and other restrictions, the Rancher Prime Azure Marketplace listing may not be purchasable in all countries. The Azure account you use for deployment determines your billing country. Contact your Azure Sales Team for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "my-azure-account-is-in-the-usa-but-i-want-to-deploy-rancher-in-another-azure-region-a-region-that-is-in-a-country-where-i-currently-cannot-transact-rancher-prime-is-this-possible"
    }, `My Azure account is in the USA, but I want to deploy Rancher in another Azure region, a region that is in a country where I currently cannot transact Rancher Prime. Is this possible?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. As long as your Azure account is billed to one of the allowed countries, it is possible to deploy Rancher Prime in any Azure region.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-this-listing-available-in-china"
    }, `Is this listing available in China?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `While it is not possible to transact/bill Rancher Prime in China, it is possible to deploy into Azure regions in China.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "billing"
    }, `Billing`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-an-existing-rancher-prime-subscription-can-i-use-this-on-azure"
    }, `I have an existing Rancher Prime subscription; can I use this on Azure?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Self-installed BYOS (Bring Your Own Subscription) Rancher Prime deployments are supported on Azure; however, billing will not be via the Azure Marketplace. Once the existing subscription term ends, you can purchase Rancher Prime via the Azure Marketplace and reconfigure your cluster to support monthly billing via Azure.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-an-existing-deployment-covered-by-a-rancher-subscription-can-i-use-this-new-listing-in-the-azure-marketplace-for-new-deployments"
    }, `I have an existing deployment covered by a Rancher subscription; can I use this new listing in the Azure Marketplace for new deployments?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. the listing works independently from your existing Rancher Prime subscriptions. Only deployments through the marketplace listing will be billed through Azure. Support is always direct from SUSE.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "tell-me-more-about-how-the-billing-for-rancher-prime-works-via-azure"
    }, `Tell me more about how the billing for Rancher Prime works via Azure?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When purchasing Rancher Prime via the Azure Marketplace, the billing is as follows:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Billing is monthly and handled via Azure.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
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
    }, `What are the pricing tiers?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher Prime has different pricing tiers when purchasing via the Azure Marketplace. This is based on the number of nodes that Rancher is managing. Details of the tiers are shown below. Please check the listing for further pricing information.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
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
    }, `Is there a way to try Rancher before purchasing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If using the Rancher Prime listing in the Azure Marketplace, billing will commence from the time of deployment. You can try Rancher by deploying it per standard documentation. When ready to benefit from a supported platform and have this billed through Azure, deploy Rancher Prime via the Azure Marketplace and migrate your configuration.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-does-suse-calculate-the-average-number-of-managed-nodes-to-bill-for"
    }, `How does SUSE calculate the ‘average number of managed nodes’ to bill for?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The average node count is calculated by adding the number of managed nodes (counted hourly) and dividing by the number of hours Rancher has been active in the billing cycle. Three examples are shown in the table below.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `In our example month, we are using 730 hours; this may differ depending on the number of days in the month and the billing cycle.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Static Usage:`), `
Using Rancher to manage 10 nodes for 1 month (730 hours) with no additional nodes added in the month.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Bursting Model:`), `
Using Rancher to manage 10 nodes for 3 weeks (562 hours) in the month and bursting to 30 nodes for 1 week (168 hours).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Transient Cluster:`), `
A temporary deployment of Rancher on 20 nodes for 2 weeks (336 hours).`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
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
    }, `Are special commercial terms available?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Depending on the deployment, securing special commercial terms (e.g., an annual subscription) may be possible. This will be handled via an Azure private offer. Please contact SUSE for more information.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "can-my-spend-on-rancher-prime-count-towards-my-macc-program"
    }, `Can my spend on Rancher Prime count towards my MACC Program?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. Contact your Azure Sales Team for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-do-i-purchase-rancher-for-additional-nodes"
    }, `How do I purchase Rancher for additional nodes?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once Rancher Prime has been deployed from the Azure Marketplace and billing is active, there is no need to make a specific purchase for additional nodes. Billing is dynamic and based on the number of nodes Rancher is managing. Just deploy or onboard additional clusters to Rancher as needed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-this-an-annual-commitment-will-it-auto-renew"
    }, `Is this an annual commitment, will it auto-renew?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `By default, the Rancher Prime listing is billed on a monthly cycle, based on usage. Billing is ongoing for as long as Rancher Prime is deployed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It is possible to set up an annual commitment via an Azure Private Offer; these will need to be reviewed and renewed at the end of the term, or the deployment will drop back to the default monthly billing cycle.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "technical"
    }, `Technical`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "do-i-need-a-kubernetes-cluster-running-in-azure-to-install-rancher-and-be-billed-via-the-azure-marketplace"
    }, `Do I need a Kubernetes cluster running in Azure to install Rancher and be billed via the Azure Marketplace?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. To benefit from monthly billing via Azure, the primary Rancher cluster must be an Azure Kubernetes Service (AKS) cluster running in your Azure account.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "which-kubernetes-distributions-can-the-rancher-prime-azure-marketplace-listing-be-deployed-on"
    }, `Which Kubernetes distributions can the Rancher Prime Azure Marketplace listing be deployed on?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The Rancher Prime marketplace listing must be deployed on Azure Kubernetes Service (AKS). Downstream/managed clusters can run any supported Kubernetes platform: RKE, RKE2, EKS, GKE, vanilla Kubernetes, OpenShift, Mirantis Kubernetes Engine, etc. See Supported Platforms for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-deployment-mechanism"
    }, `What is the deployment mechanism?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The Rancher Prime marketplace listing is deployed using Azure’s CNAB (with Helm inside).`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-easiest-way-to-get-started"
    }, `What is the easiest way to get started?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `One of the easiest ways to get started is to deploy the Rancher Prime marketplace listing to an existing AKS cluster. Follow the instructions in the usage section of the listing. A Helm chart takes care of installation and billing setup.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-is-the-minimum-version-of-rancher-required-to-support-azure-marketplace-billing"
    }, `What is the minimum version of Rancher required to support Azure Marketplace billing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The minimum version supporting marketplace billing is Rancher 2.7.9.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-version-of-rancher-is-installed-when-using-the-marketplace-listing"
    }, `What version of Rancher is installed when using the marketplace listing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The Rancher Prime marketplace listing is tied to a specific version of Rancher, typically the latest version available at the time of the listing update. Check the listing for further information.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-need-a-prior-version-of-rancher-can-i-still-use-the-listing"
    }, `I need a prior version of Rancher; can I still use the listing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `No. There is no choice over the Rancher version when deploying using the Azure Marketplace listing. If a prior version of Rancher is required, this must be installed manually using the standard documentation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `Billing through the Azure Marketplace may not be supported with earlier versions.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-often-is-the-listing-updated-including-the-version-of-rancher-etc"
    }, `How often is the listing updated (including the version of Rancher, etc.)?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The marketplace listing is tied to a specific version of Rancher, usually it is the latest version available at the time the listing was last updated. Typically, the marketplace listing is updated quarterly, or more frequently to address any new security issues.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-many-kubernetes-clusters-across-multiple-azure-accounts-does-the-rancher-prime-billing-still-work-and-enable-tiered-pricing"
    }, `I have many Kubernetes clusters across multiple Azure accounts; does the Rancher Prime billing still work and enable tiered pricing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. Downstream/managed clusters can be deployed across single or multiple Azure accounts, on-premises, and in other public clouds. Downstream/managed nodes report up to Rancher Prime, enabling tiered pricing with billing routed to the Azure account in which the managing Rancher Prime cluster is running.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-multiple-independent-clusters-each-running-a-separate-installation-of-the-rancher-prime-azure-marketplace-listing-how-is-this-billed"
    }, `I have multiple independent clusters, each running a separate installation of the Rancher Prime Azure Marketplace listing. How is this billed?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `As the Rancher Prime deployments are independent, each deployment is billed separately from the others. It is not possible to benefit from tiered pricing. If managing multiple independent Rancher Prime clusters, consider custom terms from SUSE.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-can-i-benefit-from-tiered-pricing-across-all-rancher-deployments"
    }, `How can I benefit from tiered pricing across all Rancher deployments?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The primary Rancher Prime cluster must be running on AKS in Microsoft Azure, deployed through the marketplace listing. To benefit from tiered pricing, downstream/managed clusters should be imported into the primary Rancher Prime cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-have-purchased-multiple-suse-products-from-the-azure-marketplace-eg-suse-manager-neuvector-prime-rancher-prime-does-the-azure-marketplace-billing-method-still-work"
    }, `I have purchased multiple SUSE products from the Azure Marketplace (e.g., SUSE Manager, NeuVector Prime, Rancher Prime). Does the Azure Marketplace billing method still work?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. The billing mechanisms for the deployments are independent and are billed separately via the Azure Marketplace.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-already-have-an-existing-aks-cluster-in-place-and-want-to-add-rancher-prime-to-it-and-be-billed-through-the-azure-marketplace-is-this-possible"
    }, `I already have an existing AKS cluster in place and want to add Rancher Prime to it and be billed through the Azure Marketplace. Is this possible?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Yes. Simply deploy the Rancher Prime to the cluster with the Azure Marketplace listing.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "i-already-deployed-rancher-to-an-existing-aks-cluster-can-i-just-install-the-marketplace-version-to-enable-azure-marketplace-billing"
    }, `I already deployed Rancher to an existing AKS cluster. Can I just install the marketplace version to enable Azure Marketplace billing?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `No. You need to deploy Rancher Prime with the Azure Marketplace listing and migrate the existing Rancher configuration to this new deployment. Be sure that you back up your existing Rancher configuration.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "technical-product"
    }, `Technical (Product)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-do-i-get-support"
    }, `How do I get support?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It is very simple to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://scc.suse.com/cloudsupport"
    }, `open a support case`), ` with SUSE for Rancher Prime. Create a ‘supportconfig’ via the Rancher UI (click Get Support under the hamburger menu and follow instructions), then upload the ‘supportconfig’ output to the SUSE Customer Center. If the billing mechanism is active, a support case will be opened. See Supportconfig bundle in the Rancher `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/supportconfig"
    }, `documentation`), ` for more details.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `For deployments where Rancher Prime is managing multiple downstream clusters, be sure to export the ‘supportconfig’ bundle from the primary cluster only.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-are-the-resource-requirements-for-installing-rancher-on-aks"
    }, `What are the resource requirements for installing Rancher on AKS?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Check the documentation for `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/getting-started/installation-and-upgrade/installation-requirements/#hosted-kubernetes"
    }, `best practices`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "is-there-any-difference-between-rancher-prime-from-azure-marketplace-and-the-versions-i-can-run-in-my-own-data-center"
    }, `Is there any difference between Rancher Prime from Azure Marketplace and the versions I can run in my own data center?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher Prime available in the Azure Marketplace is the same product, with the same functionality that you would install manually in the cloud or on-premises. The only difference between deploying manually and deploying via the marketplace listing is the billing route.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "does-the-primary-cluster-responsible-for-billing-need-to-run-247"
    }, `Does the primary cluster (responsible for billing) need to run 24/7?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To ensure continuity of support, it is recommended that the primary Rancher Prime cluster always remain active.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "what-if-the-primary-cluster-responsible-for-billing-is-unable-to-connect-to-the-azure-billing-framework"
    }, `What if the primary cluster responsible for billing is unable to connect to the Azure billing framework?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `There may be multiple reasons why the primary cluster is unable to connect to the Azure billing framework, but it is the customer’s responsibility to ensure that the primary cluster is active and connected. While the cluster is not connected to the billing framework, it is not possible to raise a support request.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "my-primary-cluster-has-been-offline-what-will-happen-with-billing-when-reconnected"
    }, `My primary cluster has been offline. What will happen with billing when reconnected?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If the Racher Prime cluster is offline or disconnected from the Azure billing framework for a period of time, when it reconnects, the stored usage data will be uploaded to Azure and will appear on your next Azure bill. Depending on the month when the primary cluster gets reconnected you may have several months of usage on your next billing cycle.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-do-i-get-fixes-and-updates-for-rancher"
    }, `How do I get fixes and updates for Rancher?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To update to the latest version of the Rancher Prime PAYG offering supported in the marketplace listing, please see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration/upgrading-rancher-payg-cluster"
    }, `upgrading Rancher Prime PAYG cluster in Azure`), `.`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);