"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[9084],{

/***/ 13073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Card),
/* harmony export */   u: () => (/* binding */ CardSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var param_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53371);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31984);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86010);




function CardSection({ id, title, icon, children, description, className, hasSubSections = false, HeadingTag = 'h1' }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('homepage-section', hasSubSections && 'has-sub-sections', className)
    }, title && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeadingTag, {
        id: id !== null && id !== void 0 ? id : (0,param_case__WEBPACK_IMPORTED_MODULE_3__/* .paramCase */ .o)(title)
    }, title)), description && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "section-description"
    }, description), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "section-content"
    }, children));
}
function Card({ id, icon, title, description, to }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        to: to,
        className: "homepage-card"
    }, icon && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "icon"
    }, icon), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "card-content"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title",
        id: id && (0,param_case__WEBPACK_IMPORTED_MODULE_3__/* .paramCase */ .o)(title)
    }, title), description && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "description"
    }, description)));
}


/***/ }),

/***/ 82238:
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
/* harmony import */ var _site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13073);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9482);
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
    "id": "integrations-in-rancher/integrations-in-rancher",
    "title": "Integrations in Rancher",
    "description": "Prime is the Rancher ecosystem’s enterprise offering, with additional security, extended lifecycles, and access to Prime-exclusive documentation. Rancher Prime installation assets are hosted on a trusted SUSE registry, owned and managed by Rancher. The trusted Prime registry includes only stable releases that have been community-tested.",
    "source": "@site/docs/integrations-in-rancher/integrations-in-rancher.mdx",
    "sourceDirName": "integrations-in-rancher",
    "slug": "/integrations-in-rancher/",
    "permalink": "/zh/integrations-in-rancher/",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/integrations-in-rancher.mdx",
    "tags": [],
    "version": "current",
    "lastUpdatedAt": 1707778138,
    "formattedLastUpdatedAt": "2024年2月12日",
    "frontMatter": {
        "title": "Integrations in Rancher"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "加固 Rancher Webhook",
        "permalink": "/zh/reference-guides/rancher-security/rancher-webhook-hardening"
    },
    "next": {
        "title": "Kubernetes Distributions",
        "permalink": "/zh/integrations-in-rancher/kubernetes-distributions/"
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/integrations-in-rancher"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prime is the Rancher ecosystem’s enterprise offering, with additional security, extended lifecycles, and access to Prime-exclusive documentation. Rancher Prime installation assets are hosted on a trusted SUSE registry, owned and managed by Rancher. The trusted Prime registry includes only stable releases that have been community-tested. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prime also offers options for production support, as well as add-ons to your subscription that tailor to your commercial needs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To learn more and get started with Rancher Prime, please visit `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.rancher.com/quick-start"
    }, `this page`), `. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .CardSection */ .u, {
        id: "Gettingstarted",
        icon: /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__/* .RocketRegular */ .M4K, {
            mdxType: "RocketRegular"
        }),
        mdxType: "CardSection"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Kubernetes Distributions",
        to: "./integrations-in-rancher/kubernetes-distributions",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Virtualization on Kubernetes with Harvester",
        to: "./integrations-in-rancher/harvester",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Cloud Native Storage with Longhorn",
        to: "./integrations-in-rancher/longhorn",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Container Security with NeuVector",
        to: "./integrations-in-rancher/neuvector",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Advanced Policy Management with Kubewarden",
        to: "./integrations-in-rancher/kubewarden",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Operating System Management with Elemental",
        to: "./integrations-in-rancher/elemental",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Continuous Delivery with Fleet",
        to: "./integrations-in-rancher/fleet",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Kubernetes on the Desktop",
        to: "./integrations-in-rancher/rancher-desktop",
        mdxType: "Card"
    })));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);