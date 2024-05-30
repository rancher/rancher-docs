"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[40234],{

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

/***/ 17944:
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
    title: 'Rancher 中的集成'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "integrations-in-rancher/integrations-in-rancher",
    "id": "version-2.9/integrations-in-rancher/integrations-in-rancher",
    "title": "Rancher 中的集成",
    "description": "<link",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.9/integrations-in-rancher/integrations-in-rancher.mdx",
    "sourceDirName": "integrations-in-rancher",
    "slug": "/integrations-in-rancher/",
    "permalink": "/zh/v2.9/integrations-in-rancher/",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.9/integrations-in-rancher/integrations-in-rancher.mdx",
    "tags": [],
    "version": "2.9",
    "lastUpdatedAt": 1716936476,
    "formattedLastUpdatedAt": "2024年5月28日",
    "frontMatter": {
        "title": "Rancher 中的集成"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "加固 Rancher Webhook",
        "permalink": "/zh/v2.9/reference-guides/rancher-security/rancher-webhook-hardening"
    },
    "next": {
        "title": "Kubernetes 发行版",
        "permalink": "/zh/v2.9/integrations-in-rancher/kubernetes-distributions/"
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
        href: "https://ranchermanager.docs.rancher.com/zh/integrations-in-rancher"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prime 是 Rancher 生态系统的企业级产品，具有更高的安全性、更长的生命周期和对 Prime 专有文档的访问权限。Rancher Prime 安装资产托管在受信任的 SUSE 注册表上，由 Rancher 拥有和管理。受信任的 Prime 注册表仅包括经过社区测试的稳定版本。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prime 还提供生产支持选项，以及根据你的商业需求定制的订阅附加组件。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `要了解更多信息并开始使用 Rancher Prime，请访问`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.rancher.com/quick-start"
    }, `本页`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .CardSection */ .u, {
        id: "Gettingstarted",
        icon: /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__/* .RocketRegular */ .M4K, {
            mdxType: "RocketRegular"
        }),
        mdxType: "CardSection"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "Kubernetes 发行版",
        to: "./integrations-in-rancher/kubernetes-distributions",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "使用 Harvester 在 Kubernetes 上进行虚拟化",
        to: "./integrations-in-rancher/harvester",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "使用 Longhorn 进行云原生存储",
        to: "./integrations-in-rancher/longhorn",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "使用 NeuVector 实现容器安全",
        to: "./integrations-in-rancher/neuvector",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "使用 Kubewalden 进行高级策略管理",
        to: "./integrations-in-rancher/kubewarden",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "使用 Elemental 进行操作系统管理",
        to: "./integrations-in-rancher/elemental",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "使用 Fleet 进行持续交付",
        to: "./integrations-in-rancher/fleet",
        mdxType: "Card"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_components_CardComponents__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
        title: "桌面上的 Kubernetes",
        to: "./integrations-in-rancher/rancher-desktop",
        mdxType: "Card"
    })));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);