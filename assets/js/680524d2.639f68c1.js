(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[27757],{

/***/ 92623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _theme_ApiDocMdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87295);
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
    title: 'API Reference'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "api/api-reference",
    "id": "api/api-reference",
    "title": "API Reference",
    "description": "At this time, not all Rancher resources are available through the Rancher Kubernetes API.",
    "source": "@site/docs/api/api-reference.mdx",
    "sourceDirName": "api",
    "slug": "/api/api-reference",
    "permalink": "/api/api-reference",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/docs/api/api-reference.mdx",
    "tags": [],
    "version": "current",
    "lastUpdatedAt": 1707778138,
    "formattedLastUpdatedAt": "Feb 12, 2024",
    "frontMatter": {
        "title": "API Reference"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Projects",
        "permalink": "/api/workflows/projects"
    },
    "next": {
        "title": "Using API Tokens",
        "permalink": "/api/api-tokens"
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
        href: "https://ranchermanager.docs.rancher.com/api/api-reference"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `At this time, not all Rancher resources are available through the Rancher Kubernetes API.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_ApiDocMdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        id: "rancher-api",
        mdxType: "ApiDocMdx"
    }));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 26242:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 11314:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 67251:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 99018:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 43044:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3408:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 35126:
/***/ (() => {

/* (ignored) */

/***/ })

}]);