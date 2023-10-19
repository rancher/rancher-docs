"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[17560],{

/***/ 96734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/param-case/dist.es2015/index.js + 4 modules
var dist_es2015 = __webpack_require__(53371);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./src/components/CardComponents.tsx




function CardSection({ id, title, icon, children, description, className, hasSubSections = false, HeadingTag = 'h1' }) {
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('homepage-section', hasSubSections && 'has-sub-sections', className)
    }, title && /*#__PURE__*/ react.createElement("span", null, /*#__PURE__*/ react.createElement(HeadingTag, {
        id: id !== null && id !== void 0 ? id : (0,dist_es2015/* paramCase */.o)(title)
    }, title)), description && /*#__PURE__*/ react.createElement("p", {
        className: "section-description"
    }, description), /*#__PURE__*/ react.createElement("div", {
        className: "section-content"
    }, children));
}
function Card({ id, icon, title, description, to }) {
    return /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        to: to,
        className: "homepage-card"
    }, icon && /*#__PURE__*/ react.createElement("div", {
        className: "icon"
    }, icon), /*#__PURE__*/ react.createElement("div", {
        className: "card-content"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "title",
        id: id && (0,dist_es2015/* paramCase */.o)(title)
    }, title), description && /*#__PURE__*/ react.createElement("div", {
        className: "description"
    }, description)));
}

// EXTERNAL MODULE: ./node_modules/@fluentui/react-icons/lib/icons/chunk-3.js + 21 modules
var chunk_3 = __webpack_require__(9482);
;// CONCATENATED MODULE: ./versioned_docs/version-2.8/integrations-in-rancher/integrations-in-rancher.mdx
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
    title: 'Integrations in Rancher'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "integrations-in-rancher/integrations-in-rancher",
    "id": "version-2.8/integrations-in-rancher/integrations-in-rancher",
    "title": "Integrations in Rancher",
    "description": "Prime is the Rancher ecosystem’s enterprise offering, with additional security, extended lifecycles, and access to Prime-exclusive documentation. Rancher Prime installation assets are hosted on a trusted SUSE registry, owned and managed by Rancher. The trusted Prime registry includes only stable releases that have been community-tested.",
    "source": "@site/versioned_docs/version-2.8/integrations-in-rancher/integrations-in-rancher.mdx",
    "sourceDirName": "integrations-in-rancher",
    "slug": "/integrations-in-rancher/",
    "permalink": "/v2.8/integrations-in-rancher/",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.8/integrations-in-rancher/integrations-in-rancher.mdx",
    "tags": [],
    "version": "2.8",
    "lastUpdatedAt": 1697752688,
    "formattedLastUpdatedAt": "Oct 19, 2023",
    "frontMatter": {
        "title": "Integrations in Rancher"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Hardening the Rancher Webhook",
        "permalink": "/v2.8/reference-guides/rancher-security/rancher-webhook-hardening"
    },
    "next": {
        "title": "Kubernetes Distributions",
        "permalink": "/v2.8/integrations-in-rancher/kubernetes-distributions/"
    }
};
const assets = {};


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
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Prime is the Rancher ecosystem’s enterprise offering, with additional security, extended lifecycles, and access to Prime-exclusive documentation. Rancher Prime installation assets are hosted on a trusted SUSE registry, owned and managed by Rancher. The trusted Prime registry includes only stable releases that have been community-tested. `), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `Prime also offers options for production support, as well as add-ons to your subscription that tailor to your commercial needs.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `To learn more and get started with Rancher Prime, please visit `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "p",
        "href": "https://www.rancher.com/quick-start"
    }, `this page`), `. `), /*#__PURE__*/ (0,esm/* mdx */.kt)(CardSection, {
        id: "Gettingstarted",
        icon: /*#__PURE__*/ (0,esm/* mdx */.kt)(chunk_3/* RocketRegular */.M4K, {
            mdxType: "RocketRegular"
        }),
        mdxType: "CardSection"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Kubernetes Distributions",
        to: "./integrations-in-rancher/kubernetes-distributions",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Virtualization on Kubernetes with Harvester",
        to: "./integrations-in-rancher/harvester",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Cloud Native Storage with Longhorn",
        to: "./integrations-in-rancher/longhorn",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Container Security with NeuVector",
        to: "./integrations-in-rancher/neuvector",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Advanced Policy Management with Kubewarden",
        to: "./integrations-in-rancher/kubewarden",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Operating System Management with Elemental",
        to: "./integrations-in-rancher/elemental",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Observability with Opni",
        to: "./integrations-in-rancher/opni",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Continuous Delivery with Fleet",
        to: "./integrations-in-rancher/fleet",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Kubernetes on the Desktop",
        to: "./integrations-in-rancher/rancher-desktop",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)(Card, {
        title: "Application Development Engine with Epinio",
        to: "./integrations-in-rancher/epinio",
        mdxType: "Card"
    })));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);